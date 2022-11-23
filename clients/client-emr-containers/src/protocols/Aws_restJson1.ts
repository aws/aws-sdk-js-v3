// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "../commands/CancelJobRunCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "../commands/CreateJobTemplateCommand";
import {
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "../commands/CreateManagedEndpointCommand";
import {
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "../commands/CreateVirtualClusterCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "../commands/DeleteJobTemplateCommand";
import {
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "../commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "../commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "../commands/DescribeJobRunCommand";
import {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "../commands/DescribeJobTemplateCommand";
import {
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "../commands/DescribeManagedEndpointCommand";
import {
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "../commands/DescribeVirtualClusterCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import {
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "../commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { EMRContainersServiceException as __BaseException } from "../models/EMRContainersServiceException";
import {
  Certificate,
  CloudWatchMonitoringConfiguration,
  Configuration,
  ConfigurationOverrides,
  ContainerInfo,
  ContainerProvider,
  EksInfo,
  Endpoint,
  InternalServerException,
  JobDriver,
  JobRun,
  JobTemplate,
  JobTemplateData,
  MonitoringConfiguration,
  ParametricCloudWatchMonitoringConfiguration,
  ParametricConfigurationOverrides,
  ParametricMonitoringConfiguration,
  ParametricS3MonitoringConfiguration,
  ResourceNotFoundException,
  S3MonitoringConfiguration,
  SparkSqlJobDriver,
  SparkSubmitJobDriver,
  TemplateParameterConfiguration,
  ValidationException,
  VirtualCluster,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobRunCommand = async (
  input: CancelJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
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

export const serializeAws_restJson1CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobtemplates";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.jobTemplateData != null && {
      jobTemplateData: serializeAws_restJson1JobTemplateData(input.jobTemplateData, context),
    }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
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

export const serializeAws_restJson1CreateManagedEndpointCommand = async (
  input: CreateManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurationOverrides != null && {
      configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
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

export const serializeAws_restJson1CreateVirtualClusterCommand = async (
  input: CreateVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerProvider != null && {
      containerProvider: serializeAws_restJson1ContainerProvider(input.containerProvider, context),
    }),
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

export const serializeAws_restJson1DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobtemplates/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1DeleteManagedEndpointCommand = async (
  input: DeleteManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
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

export const serializeAws_restJson1DeleteVirtualClusterCommand = async (
  input: DeleteVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1DescribeJobRunCommand = async (
  input: DescribeJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
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

export const serializeAws_restJson1DescribeJobTemplateCommand = async (
  input: DescribeJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobtemplates/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1DescribeManagedEndpointCommand = async (
  input: DescribeManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
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

export const serializeAws_restJson1DescribeVirtualClusterCommand = async (
  input: DescribeVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
    false
  );
  const query: any = map({
    createdBefore: [
      () => input.createdBefore !== void 0,
      () => (input.createdBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.createdAfter !== void 0,
      () => (input.createdAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    name: [, input.name!],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobtemplates";
  const query: any = map({
    createdAfter: [
      () => input.createdAfter !== void 0,
      () => (input.createdAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdBefore: [
      () => input.createdBefore !== void 0,
      () => (input.createdBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
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

export const serializeAws_restJson1ListManagedEndpointsCommand = async (
  input: ListManagedEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
    false
  );
  const query: any = map({
    createdBefore: [
      () => input.createdBefore !== void 0,
      () => (input.createdBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.createdAfter !== void 0,
      () => (input.createdAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    types: [() => input.types !== void 0, () => (input.types! || []).map((_entry) => _entry as any)],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1ListVirtualClustersCommand = async (
  input: ListVirtualClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters";
  const query: any = map({
    containerProviderId: [, input.containerProviderId!],
    containerProviderType: [, input.containerProviderType!],
    createdAfter: [
      () => input.createdAfter !== void 0,
      () => (input.createdAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdBefore: [
      () => input.createdBefore !== void 0,
      () => (input.createdBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualClusterId",
    () => input.virtualClusterId!,
    "{virtualClusterId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurationOverrides != null && {
      configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.jobDriver != null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) }),
    ...(input.jobTemplateId != null && { jobTemplateId: input.jobTemplateId }),
    ...(input.jobTemplateParameters != null && {
      jobTemplateParameters: serializeAws_restJson1TemplateParameterInputMap(input.jobTemplateParameters, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
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

export const deserializeAws_restJson1CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.virtualClusterId != null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return contents;
};

const deserializeAws_restJson1CancelJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1CreateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1CreateManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateManagedEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.virtualClusterId != null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return contents;
};

const deserializeAws_restJson1CreateManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1CreateVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1CreateVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1DeleteJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DeleteManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteManagedEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.virtualClusterId != null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return contents;
};

const deserializeAws_restJson1DeleteManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DeleteVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1DeleteVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRun != null) {
    contents.jobRun = deserializeAws_restJson1JobRun(data.jobRun, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplate != null) {
    contents.jobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeManagedEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoint != null) {
    contents.endpoint = deserializeAws_restJson1Endpoint(data.endpoint, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.virtualCluster != null) {
    contents.virtualCluster = deserializeAws_restJson1VirtualCluster(data.virtualCluster, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRuns != null) {
    contents.jobRuns = deserializeAws_restJson1JobRuns(data.jobRuns, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templates != null) {
    contents.templates = deserializeAws_restJson1JobTemplates(data.templates, context);
  }
  return contents;
};

const deserializeAws_restJson1ListJobTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListManagedEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListManagedEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoints != null) {
    contents.endpoints = deserializeAws_restJson1Endpoints(data.endpoints, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListManagedEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListVirtualClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualClustersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualClusters != null) {
    contents.virtualClusters = deserializeAws_restJson1VirtualClusters(data.virtualClusters, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVirtualClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.virtualClusterId != null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return contents;
};

const deserializeAws_restJson1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
  const exception = new ResourceNotFoundException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1CloudWatchMonitoringConfiguration = (
  input: CloudWatchMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
  };
};

const serializeAws_restJson1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.classification != null && { classification: input.classification }),
    ...(input.configurations != null && {
      configurations: serializeAws_restJson1ConfigurationList(input.configurations, context),
    }),
    ...(input.properties != null && {
      properties: serializeAws_restJson1SensitivePropertiesMap(input.properties, context),
    }),
  };
};

const serializeAws_restJson1ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Configuration(entry, context);
    });
};

const serializeAws_restJson1ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.applicationConfiguration != null && {
      applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
    }),
    ...(input.monitoringConfiguration != null && {
      monitoringConfiguration: serializeAws_restJson1MonitoringConfiguration(input.monitoringConfiguration, context),
    }),
  };
};

const serializeAws_restJson1ContainerInfo = (input: ContainerInfo, context: __SerdeContext): any => {
  return ContainerInfo.visit(input, {
    eksInfo: (value) => ({ eksInfo: serializeAws_restJson1EksInfo(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ContainerProvider = (input: ContainerProvider, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.info != null && { info: serializeAws_restJson1ContainerInfo(input.info, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1EksInfo = (input: EksInfo, context: __SerdeContext): any => {
  return {
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

const serializeAws_restJson1EntryPointArguments = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1JobDriver = (input: JobDriver, context: __SerdeContext): any => {
  return {
    ...(input.sparkSqlJobDriver != null && {
      sparkSqlJobDriver: serializeAws_restJson1SparkSqlJobDriver(input.sparkSqlJobDriver, context),
    }),
    ...(input.sparkSubmitJobDriver != null && {
      sparkSubmitJobDriver: serializeAws_restJson1SparkSubmitJobDriver(input.sparkSubmitJobDriver, context),
    }),
  };
};

const serializeAws_restJson1JobTemplateData = (input: JobTemplateData, context: __SerdeContext): any => {
  return {
    ...(input.configurationOverrides != null && {
      configurationOverrides: serializeAws_restJson1ParametricConfigurationOverrides(
        input.configurationOverrides,
        context
      ),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.jobDriver != null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) }),
    ...(input.jobTags != null && { jobTags: serializeAws_restJson1TagMap(input.jobTags, context) }),
    ...(input.parameterConfiguration != null && {
      parameterConfiguration: serializeAws_restJson1TemplateParameterConfigurationMap(
        input.parameterConfiguration,
        context
      ),
    }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
  };
};

const serializeAws_restJson1MonitoringConfiguration = (
  input: MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchMonitoringConfiguration != null && {
      cloudWatchMonitoringConfiguration: serializeAws_restJson1CloudWatchMonitoringConfiguration(
        input.cloudWatchMonitoringConfiguration,
        context
      ),
    }),
    ...(input.persistentAppUI != null && { persistentAppUI: input.persistentAppUI }),
    ...(input.s3MonitoringConfiguration != null && {
      s3MonitoringConfiguration: serializeAws_restJson1S3MonitoringConfiguration(
        input.s3MonitoringConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ParametricCloudWatchMonitoringConfiguration = (
  input: ParametricCloudWatchMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
  };
};

const serializeAws_restJson1ParametricConfigurationOverrides = (
  input: ParametricConfigurationOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfiguration != null && {
      applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
    }),
    ...(input.monitoringConfiguration != null && {
      monitoringConfiguration: serializeAws_restJson1ParametricMonitoringConfiguration(
        input.monitoringConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ParametricMonitoringConfiguration = (
  input: ParametricMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchMonitoringConfiguration != null && {
      cloudWatchMonitoringConfiguration: serializeAws_restJson1ParametricCloudWatchMonitoringConfiguration(
        input.cloudWatchMonitoringConfiguration,
        context
      ),
    }),
    ...(input.persistentAppUI != null && { persistentAppUI: input.persistentAppUI }),
    ...(input.s3MonitoringConfiguration != null && {
      s3MonitoringConfiguration: serializeAws_restJson1ParametricS3MonitoringConfiguration(
        input.s3MonitoringConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ParametricS3MonitoringConfiguration = (
  input: ParametricS3MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logUri != null && { logUri: input.logUri }),
  };
};

const serializeAws_restJson1S3MonitoringConfiguration = (
  input: S3MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logUri != null && { logUri: input.logUri }),
  };
};

const serializeAws_restJson1SensitivePropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SparkSqlJobDriver = (input: SparkSqlJobDriver, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.sparkSqlParameters != null && { sparkSqlParameters: input.sparkSqlParameters }),
  };
};

const serializeAws_restJson1SparkSubmitJobDriver = (input: SparkSubmitJobDriver, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.entryPointArguments != null && {
      entryPointArguments: serializeAws_restJson1EntryPointArguments(input.entryPointArguments, context),
    }),
    ...(input.sparkSubmitParameters != null && { sparkSubmitParameters: input.sparkSubmitParameters }),
  };
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

const serializeAws_restJson1TemplateParameterConfiguration = (
  input: TemplateParameterConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1TemplateParameterConfigurationMap = (
  input: Record<string, TemplateParameterConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1TemplateParameterConfiguration(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1TemplateParameterInputMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
    certificateData: __expectString(output.certificateData),
  } as any;
};

const deserializeAws_restJson1CloudWatchMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchMonitoringConfiguration => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logStreamNamePrefix: __expectString(output.logStreamNamePrefix),
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    classification: __expectString(output.classification),
    configurations:
      output.configurations != null
        ? deserializeAws_restJson1ConfigurationList(output.configurations, context)
        : undefined,
    properties:
      output.properties != null
        ? deserializeAws_restJson1SensitivePropertiesMap(output.properties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Configuration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration != null
        ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration != null
        ? deserializeAws_restJson1MonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerInfo = (output: any, context: __SerdeContext): ContainerInfo => {
  if (output.eksInfo != null) {
    return {
      eksInfo: deserializeAws_restJson1EksInfo(output.eksInfo, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ContainerProvider = (output: any, context: __SerdeContext): ContainerProvider => {
  return {
    id: __expectString(output.id),
    info: output.info != null ? deserializeAws_restJson1ContainerInfo(__expectUnion(output.info), context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1EksInfo = (output: any, context: __SerdeContext): EksInfo => {
  return {
    namespace: __expectString(output.namespace),
  } as any;
};

const deserializeAws_restJson1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    arn: __expectString(output.arn),
    certificateArn: __expectString(output.certificateArn),
    certificateAuthority:
      output.certificateAuthority != null
        ? deserializeAws_restJson1Certificate(output.certificateAuthority, context)
        : undefined,
    configurationOverrides:
      output.configurationOverrides != null
        ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    id: __expectString(output.id),
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    securityGroup: __expectString(output.securityGroup),
    serverUrl: __expectString(output.serverUrl),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIds(output.subnetIds, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

const deserializeAws_restJson1Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Endpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EntryPointArguments = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1JobDriver = (output: any, context: __SerdeContext): JobDriver => {
  return {
    sparkSqlJobDriver:
      output.sparkSqlJobDriver != null
        ? deserializeAws_restJson1SparkSqlJobDriver(output.sparkSqlJobDriver, context)
        : undefined,
    sparkSubmitJobDriver:
      output.sparkSubmitJobDriver != null
        ? deserializeAws_restJson1SparkSubmitJobDriver(output.sparkSubmitJobDriver, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    arn: __expectString(output.arn),
    clientToken: __expectString(output.clientToken),
    configurationOverrides:
      output.configurationOverrides != null
        ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    finishedAt: output.finishedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.finishedAt)) : undefined,
    id: __expectString(output.id),
    jobDriver: output.jobDriver != null ? deserializeAws_restJson1JobDriver(output.jobDriver, context) : undefined,
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

const deserializeAws_restJson1JobRuns = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobRun(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobTemplate = (output: any, context: __SerdeContext): JobTemplate => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    decryptionError: __expectString(output.decryptionError),
    id: __expectString(output.id),
    jobTemplateData:
      output.jobTemplateData != null
        ? deserializeAws_restJson1JobTemplateData(output.jobTemplateData, context)
        : undefined,
    kmsKeyArn: __expectString(output.kmsKeyArn),
    name: __expectString(output.name),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobTemplateData = (output: any, context: __SerdeContext): JobTemplateData => {
  return {
    configurationOverrides:
      output.configurationOverrides != null
        ? deserializeAws_restJson1ParametricConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    jobDriver: output.jobDriver != null ? deserializeAws_restJson1JobDriver(output.jobDriver, context) : undefined,
    jobTags: output.jobTags != null ? deserializeAws_restJson1TagMap(output.jobTags, context) : undefined,
    parameterConfiguration:
      output.parameterConfiguration != null
        ? deserializeAws_restJson1TemplateParameterConfigurationMap(output.parameterConfiguration, context)
        : undefined,
    releaseLabel: __expectString(output.releaseLabel),
  } as any;
};

const deserializeAws_restJson1JobTemplates = (output: any, context: __SerdeContext): JobTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): MonitoringConfiguration => {
  return {
    cloudWatchMonitoringConfiguration:
      output.cloudWatchMonitoringConfiguration != null
        ? deserializeAws_restJson1CloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
        : undefined,
    persistentAppUI: __expectString(output.persistentAppUI),
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration != null
        ? deserializeAws_restJson1S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ParametricCloudWatchMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricCloudWatchMonitoringConfiguration => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logStreamNamePrefix: __expectString(output.logStreamNamePrefix),
  } as any;
};

const deserializeAws_restJson1ParametricConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ParametricConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration != null
        ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration != null
        ? deserializeAws_restJson1ParametricMonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ParametricMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricMonitoringConfiguration => {
  return {
    cloudWatchMonitoringConfiguration:
      output.cloudWatchMonitoringConfiguration != null
        ? deserializeAws_restJson1ParametricCloudWatchMonitoringConfiguration(
            output.cloudWatchMonitoringConfiguration,
            context
          )
        : undefined,
    persistentAppUI: __expectString(output.persistentAppUI),
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration != null
        ? deserializeAws_restJson1ParametricS3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ParametricS3MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricS3MonitoringConfiguration => {
  return {
    logUri: __expectString(output.logUri),
  } as any;
};

const deserializeAws_restJson1S3MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): S3MonitoringConfiguration => {
  return {
    logUri: __expectString(output.logUri),
  } as any;
};

const deserializeAws_restJson1SensitivePropertiesMap = (
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

const deserializeAws_restJson1SparkSqlJobDriver = (output: any, context: __SerdeContext): SparkSqlJobDriver => {
  return {
    entryPoint: __expectString(output.entryPoint),
    sparkSqlParameters: __expectString(output.sparkSqlParameters),
  } as any;
};

const deserializeAws_restJson1SparkSubmitJobDriver = (output: any, context: __SerdeContext): SparkSubmitJobDriver => {
  return {
    entryPoint: __expectString(output.entryPoint),
    entryPointArguments:
      output.entryPointArguments != null
        ? deserializeAws_restJson1EntryPointArguments(output.entryPointArguments, context)
        : undefined,
    sparkSubmitParameters: __expectString(output.sparkSubmitParameters),
  } as any;
};

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateParameterConfiguration = (
  output: any,
  context: __SerdeContext
): TemplateParameterConfiguration => {
  return {
    defaultValue: __expectString(output.defaultValue),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1TemplateParameterConfigurationMap = (
  output: any,
  context: __SerdeContext
): Record<string, TemplateParameterConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TemplateParameterConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1TemplateParameterConfiguration(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1VirtualCluster = (output: any, context: __SerdeContext): VirtualCluster => {
  return {
    arn: __expectString(output.arn),
    containerProvider:
      output.containerProvider != null
        ? deserializeAws_restJson1ContainerProvider(output.containerProvider, context)
        : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    state: __expectString(output.state),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualClusters = (output: any, context: __SerdeContext): VirtualCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualCluster(entry, context);
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
