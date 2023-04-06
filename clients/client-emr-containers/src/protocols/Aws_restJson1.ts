// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
  RetryPolicyConfiguration,
  RetryPolicyExecution,
  S3MonitoringConfiguration,
  SparkSqlJobDriver,
  SparkSubmitJobDriver,
  TemplateParameterConfiguration,
  ValidationException,
  VirtualCluster,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelJobRunCommand
 */
export const se_CancelJobRunCommand = async (
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

/**
 * serializeAws_restJson1CreateJobTemplateCommand
 */
export const se_CreateJobTemplateCommand = async (
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
    ...(input.jobTemplateData != null && { jobTemplateData: se_JobTemplateData(input.jobTemplateData, context) }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateManagedEndpointCommand
 */
export const se_CreateManagedEndpointCommand = async (
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
      configurationOverrides: se_ConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateVirtualClusterCommand
 */
export const se_CreateVirtualClusterCommand = async (
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
      containerProvider: se_ContainerProvider(input.containerProvider, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1DeleteJobTemplateCommand
 */
export const se_DeleteJobTemplateCommand = async (
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

/**
 * serializeAws_restJson1DeleteManagedEndpointCommand
 */
export const se_DeleteManagedEndpointCommand = async (
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

/**
 * serializeAws_restJson1DeleteVirtualClusterCommand
 */
export const se_DeleteVirtualClusterCommand = async (
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

/**
 * serializeAws_restJson1DescribeJobRunCommand
 */
export const se_DescribeJobRunCommand = async (
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

/**
 * serializeAws_restJson1DescribeJobTemplateCommand
 */
export const se_DescribeJobTemplateCommand = async (
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

/**
 * serializeAws_restJson1DescribeManagedEndpointCommand
 */
export const se_DescribeManagedEndpointCommand = async (
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

/**
 * serializeAws_restJson1DescribeVirtualClusterCommand
 */
export const se_DescribeVirtualClusterCommand = async (
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

/**
 * serializeAws_restJson1ListJobRunsCommand
 */
export const se_ListJobRunsCommand = async (
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

/**
 * serializeAws_restJson1ListJobTemplatesCommand
 */
export const se_ListJobTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListManagedEndpointsCommand
 */
export const se_ListManagedEndpointsCommand = async (
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
 * serializeAws_restJson1ListVirtualClustersCommand
 */
export const se_ListVirtualClustersCommand = async (
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

/**
 * serializeAws_restJson1StartJobRunCommand
 */
export const se_StartJobRunCommand = async (
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
      configurationOverrides: se_ConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.jobDriver != null && { jobDriver: se_JobDriver(input.jobDriver, context) }),
    ...(input.jobTemplateId != null && { jobTemplateId: input.jobTemplateId }),
    ...(input.jobTemplateParameters != null && {
      jobTemplateParameters: se_TemplateParameterInputMap(input.jobTemplateParameters, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
    ...(input.retryPolicyConfiguration != null && {
      retryPolicyConfiguration: se_RetryPolicyConfiguration(input.retryPolicyConfiguration, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * deserializeAws_restJson1CancelJobRunCommand
 */
export const de_CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelJobRunCommandError(output, context);
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

/**
 * deserializeAws_restJson1CancelJobRunCommandError
 */
const de_CancelJobRunCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateJobTemplateCommand
 */
export const de_CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobTemplateCommandError
 */
const de_CreateJobTemplateCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateManagedEndpointCommand
 */
export const de_CreateManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateManagedEndpointCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateManagedEndpointCommandError
 */
const de_CreateManagedEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateVirtualClusterCommand
 */
export const de_CreateVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVirtualClusterCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateVirtualClusterCommandError
 */
const de_CreateVirtualClusterCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteJobTemplateCommand
 */
export const de_DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteJobTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteJobTemplateCommandError
 */
const de_DeleteJobTemplateCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteManagedEndpointCommand
 */
export const de_DeleteManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteManagedEndpointCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteManagedEndpointCommandError
 */
const de_DeleteManagedEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteVirtualClusterCommand
 */
export const de_DeleteVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVirtualClusterCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteVirtualClusterCommandError
 */
const de_DeleteVirtualClusterCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobRunCommand
 */
export const de_DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRun != null) {
    contents.jobRun = de_JobRun(data.jobRun, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobRunCommandError
 */
const de_DescribeJobRunCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobTemplateCommand
 */
export const de_DescribeJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplate != null) {
    contents.jobTemplate = de_JobTemplate(data.jobTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobTemplateCommandError
 */
const de_DescribeJobTemplateCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeManagedEndpointCommand
 */
export const de_DescribeManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeManagedEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoint != null) {
    contents.endpoint = de_Endpoint(data.endpoint, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeManagedEndpointCommandError
 */
const de_DescribeManagedEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeVirtualClusterCommand
 */
export const de_DescribeVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVirtualClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.virtualCluster != null) {
    contents.virtualCluster = de_VirtualCluster(data.virtualCluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualClusterCommandError
 */
const de_DescribeVirtualClusterCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListJobRunsCommand
 */
export const de_ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRuns != null) {
    contents.jobRuns = de_JobRuns(data.jobRuns, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobRunsCommandError
 */
const de_ListJobRunsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListJobTemplatesCommand
 */
export const de_ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templates != null) {
    contents.templates = de_JobTemplates(data.templates, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobTemplatesCommandError
 */
const de_ListJobTemplatesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListManagedEndpointsCommand
 */
export const de_ListManagedEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListManagedEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoints != null) {
    contents.endpoints = de_Endpoints(data.endpoints, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedEndpointsCommandError
 */
const de_ListManagedEndpointsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.tags = de_TagMap(data.tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVirtualClustersCommand
 */
export const de_ListVirtualClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVirtualClustersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualClusters != null) {
    contents.virtualClusters = de_VirtualClusters(data.virtualClusters, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualClustersCommandError
 */
const de_ListVirtualClustersCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartJobRunCommand
 */
export const de_StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartJobRunCommandError(output, context);
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

/**
 * deserializeAws_restJson1StartJobRunCommandError
 */
const de_StartJobRunCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1CloudWatchMonitoringConfiguration
 */
const se_CloudWatchMonitoringConfiguration = (
  input: CloudWatchMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
  };
};

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.classification != null && { classification: input.classification }),
    ...(input.configurations != null && { configurations: se_ConfigurationList(input.configurations, context) }),
    ...(input.properties != null && { properties: se_SensitivePropertiesMap(input.properties, context) }),
  };
};

/**
 * serializeAws_restJson1ConfigurationList
 */
const se_ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Configuration(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigurationOverrides
 */
const se_ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.applicationConfiguration != null && {
      applicationConfiguration: se_ConfigurationList(input.applicationConfiguration, context),
    }),
    ...(input.monitoringConfiguration != null && {
      monitoringConfiguration: se_MonitoringConfiguration(input.monitoringConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ContainerInfo
 */
const se_ContainerInfo = (input: ContainerInfo, context: __SerdeContext): any => {
  return ContainerInfo.visit(input, {
    eksInfo: (value) => ({ eksInfo: se_EksInfo(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ContainerProvider
 */
const se_ContainerProvider = (input: ContainerProvider, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.info != null && { info: se_ContainerInfo(input.info, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1EksInfo
 */
const se_EksInfo = (input: EksInfo, context: __SerdeContext): any => {
  return {
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

/**
 * serializeAws_restJson1EntryPointArguments
 */
const se_EntryPointArguments = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1JobDriver
 */
const se_JobDriver = (input: JobDriver, context: __SerdeContext): any => {
  return {
    ...(input.sparkSqlJobDriver != null && {
      sparkSqlJobDriver: se_SparkSqlJobDriver(input.sparkSqlJobDriver, context),
    }),
    ...(input.sparkSubmitJobDriver != null && {
      sparkSubmitJobDriver: se_SparkSubmitJobDriver(input.sparkSubmitJobDriver, context),
    }),
  };
};

/**
 * serializeAws_restJson1JobTemplateData
 */
const se_JobTemplateData = (input: JobTemplateData, context: __SerdeContext): any => {
  return {
    ...(input.configurationOverrides != null && {
      configurationOverrides: se_ParametricConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.jobDriver != null && { jobDriver: se_JobDriver(input.jobDriver, context) }),
    ...(input.jobTags != null && { jobTags: se_TagMap(input.jobTags, context) }),
    ...(input.parameterConfiguration != null && {
      parameterConfiguration: se_TemplateParameterConfigurationMap(input.parameterConfiguration, context),
    }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
  };
};

/**
 * serializeAws_restJson1MonitoringConfiguration
 */
const se_MonitoringConfiguration = (input: MonitoringConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchMonitoringConfiguration != null && {
      cloudWatchMonitoringConfiguration: se_CloudWatchMonitoringConfiguration(
        input.cloudWatchMonitoringConfiguration,
        context
      ),
    }),
    ...(input.persistentAppUI != null && { persistentAppUI: input.persistentAppUI }),
    ...(input.s3MonitoringConfiguration != null && {
      s3MonitoringConfiguration: se_S3MonitoringConfiguration(input.s3MonitoringConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ParametricCloudWatchMonitoringConfiguration
 */
const se_ParametricCloudWatchMonitoringConfiguration = (
  input: ParametricCloudWatchMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
  };
};

/**
 * serializeAws_restJson1ParametricConfigurationOverrides
 */
const se_ParametricConfigurationOverrides = (input: ParametricConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.applicationConfiguration != null && {
      applicationConfiguration: se_ConfigurationList(input.applicationConfiguration, context),
    }),
    ...(input.monitoringConfiguration != null && {
      monitoringConfiguration: se_ParametricMonitoringConfiguration(input.monitoringConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ParametricMonitoringConfiguration
 */
const se_ParametricMonitoringConfiguration = (
  input: ParametricMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchMonitoringConfiguration != null && {
      cloudWatchMonitoringConfiguration: se_ParametricCloudWatchMonitoringConfiguration(
        input.cloudWatchMonitoringConfiguration,
        context
      ),
    }),
    ...(input.persistentAppUI != null && { persistentAppUI: input.persistentAppUI }),
    ...(input.s3MonitoringConfiguration != null && {
      s3MonitoringConfiguration: se_ParametricS3MonitoringConfiguration(input.s3MonitoringConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ParametricS3MonitoringConfiguration
 */
const se_ParametricS3MonitoringConfiguration = (
  input: ParametricS3MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logUri != null && { logUri: input.logUri }),
  };
};

/**
 * serializeAws_restJson1RetryPolicyConfiguration
 */
const se_RetryPolicyConfiguration = (input: RetryPolicyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.maxAttempts != null && { maxAttempts: input.maxAttempts }),
  };
};

/**
 * serializeAws_restJson1S3MonitoringConfiguration
 */
const se_S3MonitoringConfiguration = (input: S3MonitoringConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logUri != null && { logUri: input.logUri }),
  };
};

/**
 * serializeAws_restJson1SensitivePropertiesMap
 */
const se_SensitivePropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SparkSqlJobDriver
 */
const se_SparkSqlJobDriver = (input: SparkSqlJobDriver, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.sparkSqlParameters != null && { sparkSqlParameters: input.sparkSqlParameters }),
  };
};

/**
 * serializeAws_restJson1SparkSubmitJobDriver
 */
const se_SparkSubmitJobDriver = (input: SparkSubmitJobDriver, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.entryPointArguments != null && {
      entryPointArguments: se_EntryPointArguments(input.entryPointArguments, context),
    }),
    ...(input.sparkSubmitParameters != null && { sparkSubmitParameters: input.sparkSubmitParameters }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemplateParameterConfiguration
 */
const se_TemplateParameterConfiguration = (input: TemplateParameterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1TemplateParameterConfigurationMap
 */
const se_TemplateParameterConfigurationMap = (
  input: Record<string, TemplateParameterConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_TemplateParameterConfiguration(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemplateParameterInputMap
 */
const se_TemplateParameterInputMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
    certificateData: __expectString(output.certificateData),
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchMonitoringConfiguration
 */
const de_CloudWatchMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchMonitoringConfiguration => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logStreamNamePrefix: __expectString(output.logStreamNamePrefix),
  } as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    classification: __expectString(output.classification),
    configurations: output.configurations != null ? de_ConfigurationList(output.configurations, context) : undefined,
    properties: output.properties != null ? de_SensitivePropertiesMap(output.properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationList
 */
const de_ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigurationOverrides
 */
const de_ConfigurationOverrides = (output: any, context: __SerdeContext): ConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration != null
        ? de_ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration != null
        ? de_MonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerInfo
 */
const de_ContainerInfo = (output: any, context: __SerdeContext): ContainerInfo => {
  if (output.eksInfo != null) {
    return {
      eksInfo: de_EksInfo(output.eksInfo, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ContainerProvider
 */
const de_ContainerProvider = (output: any, context: __SerdeContext): ContainerProvider => {
  return {
    id: __expectString(output.id),
    info: output.info != null ? de_ContainerInfo(__expectUnion(output.info), context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1EksInfo
 */
const de_EksInfo = (output: any, context: __SerdeContext): EksInfo => {
  return {
    namespace: __expectString(output.namespace),
  } as any;
};

/**
 * deserializeAws_restJson1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    arn: __expectString(output.arn),
    certificateArn: __expectString(output.certificateArn),
    certificateAuthority:
      output.certificateAuthority != null ? de_Certificate(output.certificateAuthority, context) : undefined,
    configurationOverrides:
      output.configurationOverrides != null
        ? de_ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    id: __expectString(output.id),
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    securityGroup: __expectString(output.securityGroup),
    serverUrl: __expectString(output.serverUrl),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    subnetIds: output.subnetIds != null ? de_SubnetIds(output.subnetIds, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

/**
 * deserializeAws_restJson1Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EntryPointArguments
 */
const de_EntryPointArguments = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1JobDriver
 */
const de_JobDriver = (output: any, context: __SerdeContext): JobDriver => {
  return {
    sparkSqlJobDriver:
      output.sparkSqlJobDriver != null ? de_SparkSqlJobDriver(output.sparkSqlJobDriver, context) : undefined,
    sparkSubmitJobDriver:
      output.sparkSubmitJobDriver != null ? de_SparkSubmitJobDriver(output.sparkSubmitJobDriver, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobRun
 */
const de_JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    arn: __expectString(output.arn),
    clientToken: __expectString(output.clientToken),
    configurationOverrides:
      output.configurationOverrides != null
        ? de_ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    finishedAt:
      output.finishedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.finishedAt)) : undefined,
    id: __expectString(output.id),
    jobDriver: output.jobDriver != null ? de_JobDriver(output.jobDriver, context) : undefined,
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    retryPolicyConfiguration:
      output.retryPolicyConfiguration != null
        ? de_RetryPolicyConfiguration(output.retryPolicyConfiguration, context)
        : undefined,
    retryPolicyExecution:
      output.retryPolicyExecution != null ? de_RetryPolicyExecution(output.retryPolicyExecution, context) : undefined,
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

/**
 * deserializeAws_restJson1JobRuns
 */
const de_JobRuns = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobTemplate
 */
const de_JobTemplate = (output: any, context: __SerdeContext): JobTemplate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    decryptionError: __expectString(output.decryptionError),
    id: __expectString(output.id),
    jobTemplateData: output.jobTemplateData != null ? de_JobTemplateData(output.jobTemplateData, context) : undefined,
    kmsKeyArn: __expectString(output.kmsKeyArn),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobTemplateData
 */
const de_JobTemplateData = (output: any, context: __SerdeContext): JobTemplateData => {
  return {
    configurationOverrides:
      output.configurationOverrides != null
        ? de_ParametricConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    jobDriver: output.jobDriver != null ? de_JobDriver(output.jobDriver, context) : undefined,
    jobTags: output.jobTags != null ? de_TagMap(output.jobTags, context) : undefined,
    parameterConfiguration:
      output.parameterConfiguration != null
        ? de_TemplateParameterConfigurationMap(output.parameterConfiguration, context)
        : undefined,
    releaseLabel: __expectString(output.releaseLabel),
  } as any;
};

/**
 * deserializeAws_restJson1JobTemplates
 */
const de_JobTemplates = (output: any, context: __SerdeContext): JobTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MonitoringConfiguration
 */
const de_MonitoringConfiguration = (output: any, context: __SerdeContext): MonitoringConfiguration => {
  return {
    cloudWatchMonitoringConfiguration:
      output.cloudWatchMonitoringConfiguration != null
        ? de_CloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
        : undefined,
    persistentAppUI: __expectString(output.persistentAppUI),
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration != null
        ? de_S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ParametricCloudWatchMonitoringConfiguration
 */
const de_ParametricCloudWatchMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricCloudWatchMonitoringConfiguration => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logStreamNamePrefix: __expectString(output.logStreamNamePrefix),
  } as any;
};

/**
 * deserializeAws_restJson1ParametricConfigurationOverrides
 */
const de_ParametricConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ParametricConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration != null
        ? de_ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration != null
        ? de_ParametricMonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ParametricMonitoringConfiguration
 */
const de_ParametricMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricMonitoringConfiguration => {
  return {
    cloudWatchMonitoringConfiguration:
      output.cloudWatchMonitoringConfiguration != null
        ? de_ParametricCloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
        : undefined,
    persistentAppUI: __expectString(output.persistentAppUI),
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration != null
        ? de_ParametricS3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ParametricS3MonitoringConfiguration
 */
const de_ParametricS3MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ParametricS3MonitoringConfiguration => {
  return {
    logUri: __expectString(output.logUri),
  } as any;
};

/**
 * deserializeAws_restJson1RetryPolicyConfiguration
 */
const de_RetryPolicyConfiguration = (output: any, context: __SerdeContext): RetryPolicyConfiguration => {
  return {
    maxAttempts: __expectInt32(output.maxAttempts),
  } as any;
};

/**
 * deserializeAws_restJson1RetryPolicyExecution
 */
const de_RetryPolicyExecution = (output: any, context: __SerdeContext): RetryPolicyExecution => {
  return {
    currentAttemptCount: __expectInt32(output.currentAttemptCount),
  } as any;
};

/**
 * deserializeAws_restJson1S3MonitoringConfiguration
 */
const de_S3MonitoringConfiguration = (output: any, context: __SerdeContext): S3MonitoringConfiguration => {
  return {
    logUri: __expectString(output.logUri),
  } as any;
};

/**
 * deserializeAws_restJson1SensitivePropertiesMap
 */
const de_SensitivePropertiesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SparkSqlJobDriver
 */
const de_SparkSqlJobDriver = (output: any, context: __SerdeContext): SparkSqlJobDriver => {
  return {
    entryPoint: __expectString(output.entryPoint),
    sparkSqlParameters: __expectString(output.sparkSqlParameters),
  } as any;
};

/**
 * deserializeAws_restJson1SparkSubmitJobDriver
 */
const de_SparkSubmitJobDriver = (output: any, context: __SerdeContext): SparkSubmitJobDriver => {
  return {
    entryPoint: __expectString(output.entryPoint),
    entryPointArguments:
      output.entryPointArguments != null ? de_EntryPointArguments(output.entryPointArguments, context) : undefined,
    sparkSubmitParameters: __expectString(output.sparkSubmitParameters),
  } as any;
};

/**
 * deserializeAws_restJson1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemplateParameterConfiguration
 */
const de_TemplateParameterConfiguration = (output: any, context: __SerdeContext): TemplateParameterConfiguration => {
  return {
    defaultValue: __expectString(output.defaultValue),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateParameterConfigurationMap
 */
const de_TemplateParameterConfigurationMap = (
  output: any,
  context: __SerdeContext
): Record<string, TemplateParameterConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TemplateParameterConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_TemplateParameterConfiguration(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1VirtualCluster
 */
const de_VirtualCluster = (output: any, context: __SerdeContext): VirtualCluster => {
  return {
    arn: __expectString(output.arn),
    containerProvider:
      output.containerProvider != null ? de_ContainerProvider(output.containerProvider, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    state: __expectString(output.state),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualClusters
 */
const de_VirtualClusters = (output: any, context: __SerdeContext): VirtualCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualCluster(entry, context);
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
