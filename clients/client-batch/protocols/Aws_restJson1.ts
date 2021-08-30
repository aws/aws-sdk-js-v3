import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "../commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "../commands/CreateJobQueueCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "../commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "../commands/DeleteJobQueueCommand";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "../commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "../commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "../commands/DescribeJobQueuesCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "../commands/RegisterJobDefinitionCommand";
import { SubmitJobCommandInput, SubmitJobCommandOutput } from "../commands/SubmitJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TerminateJobCommandInput, TerminateJobCommandOutput } from "../commands/TerminateJobCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "../commands/UpdateComputeEnvironmentCommand";
import { UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput } from "../commands/UpdateJobQueueCommand";
import {
  ArrayProperties,
  ArrayPropertiesDetail,
  ArrayPropertiesSummary,
  AttemptContainerDetail,
  AttemptDetail,
  ClientException,
  ComputeEnvironmentDetail,
  ComputeEnvironmentOrder,
  ComputeResource,
  ComputeResourceUpdate,
  ContainerDetail,
  ContainerOverrides,
  ContainerProperties,
  ContainerSummary,
  Device,
  DeviceCgroupPermission,
  EFSAuthorizationConfig,
  EFSVolumeConfiguration,
  Ec2Configuration,
  EvaluateOnExit,
  FargatePlatformConfiguration,
  Host,
  JobDefinition,
  JobDependency,
  JobDetail,
  JobQueueDetail,
  JobSummary,
  JobTimeout,
  KeyValuePair,
  KeyValuesPair,
  LaunchTemplateSpecification,
  LinuxParameters,
  LogConfiguration,
  MountPoint,
  NetworkConfiguration,
  NetworkInterface,
  NodeDetails,
  NodeOverrides,
  NodeProperties,
  NodePropertiesSummary,
  NodePropertyOverride,
  NodeRangeProperty,
  PlatformCapability,
  ResourceRequirement,
  RetryStrategy,
  Secret,
  ServerException,
  Tmpfs,
  Ulimit,
  Volume,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/canceljob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
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

export const serializeAws_restJson1CreateComputeEnvironmentCommand = async (
  input: CreateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/createcomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentName !== undefined &&
      input.computeEnvironmentName !== null && { computeEnvironmentName: input.computeEnvironmentName }),
    ...(input.computeResources !== undefined &&
      input.computeResources !== null && {
        computeResources: serializeAws_restJson1ComputeResource(input.computeResources, context),
      }),
    ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const serializeAws_restJson1CreateJobQueueCommand = async (
  input: CreateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/createjobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined &&
      input.computeEnvironmentOrder !== null && {
        computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
      }),
    ...(input.jobQueueName !== undefined && input.jobQueueName !== null && { jobQueueName: input.jobQueueName }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteComputeEnvironmentCommand = async (
  input: DeleteComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deletecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
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

export const serializeAws_restJson1DeleteJobQueueCommand = async (
  input: DeleteJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deletejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
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

export const serializeAws_restJson1DeregisterJobDefinitionCommand = async (
  input: DeregisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deregisterjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinition !== undefined && input.jobDefinition !== null && { jobDefinition: input.jobDefinition }),
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

export const serializeAws_restJson1DescribeComputeEnvironmentsCommand = async (
  input: DescribeComputeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describecomputeenvironments";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironments !== undefined &&
      input.computeEnvironments !== null && {
        computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
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

export const serializeAws_restJson1DescribeJobDefinitionsCommand = async (
  input: DescribeJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobdefinitions";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinitionName !== undefined &&
      input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.jobDefinitions !== undefined &&
      input.jobDefinitions !== null && {
        jobDefinitions: serializeAws_restJson1StringList(input.jobDefinitions, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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

export const serializeAws_restJson1DescribeJobQueuesCommand = async (
  input: DescribeJobQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobqueues";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueues !== undefined &&
      input.jobQueues !== null && { jobQueues: serializeAws_restJson1StringList(input.jobQueues, context) }),
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

export const serializeAws_restJson1DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobs";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs !== undefined &&
      input.jobs !== null && { jobs: serializeAws_restJson1StringList(input.jobs, context) }),
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/listjobs";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayJobId !== undefined && input.arrayJobId !== null && { arrayJobId: input.arrayJobId }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1ListJobsFilterList(input.filters, context) }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId !== undefined &&
      input.multiNodeJobId !== null && { multiNodeJobId: input.multiNodeJobId }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
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

export const serializeAws_restJson1RegisterJobDefinitionCommand = async (
  input: RegisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/registerjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.containerProperties !== undefined &&
      input.containerProperties !== null && {
        containerProperties: serializeAws_restJson1ContainerProperties(input.containerProperties, context),
      }),
    ...(input.jobDefinitionName !== undefined &&
      input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.nodeProperties !== undefined &&
      input.nodeProperties !== null && {
        nodeProperties: serializeAws_restJson1NodeProperties(input.nodeProperties, context),
      }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.platformCapabilities !== undefined &&
      input.platformCapabilities !== null && {
        platformCapabilities: serializeAws_restJson1PlatformCapabilityList(input.platformCapabilities, context),
      }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy !== undefined &&
      input.retryStrategy !== null && {
        retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const serializeAws_restJson1SubmitJobCommand = async (
  input: SubmitJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/submitjob";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayProperties !== undefined &&
      input.arrayProperties !== null && {
        arrayProperties: serializeAws_restJson1ArrayProperties(input.arrayProperties, context),
      }),
    ...(input.containerOverrides !== undefined &&
      input.containerOverrides !== null && {
        containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
      }),
    ...(input.dependsOn !== undefined &&
      input.dependsOn !== null && { dependsOn: serializeAws_restJson1JobDependencyList(input.dependsOn, context) }),
    ...(input.jobDefinition !== undefined && input.jobDefinition !== null && { jobDefinition: input.jobDefinition }),
    ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides !== undefined &&
      input.nodeOverrides !== null && {
        nodeOverrides: serializeAws_restJson1NodeOverrides(input.nodeOverrides, context),
      }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy !== undefined &&
      input.retryStrategy !== null && {
        retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
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
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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

export const serializeAws_restJson1TerminateJobCommand = async (
  input: TerminateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/terminatejob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
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

export const serializeAws_restJson1UpdateComputeEnvironmentCommand = async (
  input: UpdateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/updatecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
    ...(input.computeResources !== undefined &&
      input.computeResources !== null && {
        computeResources: serializeAws_restJson1ComputeResourceUpdate(input.computeResources, context),
      }),
    ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
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

export const serializeAws_restJson1UpdateJobQueueCommand = async (
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/updatejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined &&
      input.computeEnvironmentOrder !== null && {
        computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
      }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
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

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComputeEnvironmentCommandError(output, context);
  }
  const contents: CreateComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = __expectString(data.computeEnvironmentArn);
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = __expectString(data.computeEnvironmentName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobQueueCommandError(output, context);
  }
  const contents: CreateJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobQueueArn: undefined,
    jobQueueName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = __expectString(data.jobQueueArn);
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = __expectString(data.jobQueueName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComputeEnvironmentCommandError(output, context);
  }
  const contents: DeleteComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobQueueCommandError(output, context);
  }
  const contents: DeleteJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeregisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterJobDefinitionCommandError(output, context);
  }
  const contents: DeregisterJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeComputeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommandError(output, context);
  }
  const contents: DescribeComputeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    computeEnvironments: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironments !== undefined && data.computeEnvironments !== null) {
    contents.computeEnvironments = deserializeAws_restJson1ComputeEnvironmentDetailList(
      data.computeEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeComputeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobDefinitionsCommandError(output, context);
  }
  const contents: DescribeJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobDefinitions: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobDefinitions !== undefined && data.jobDefinitions !== null) {
    contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(data.jobDefinitions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeJobQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobQueuesCommandError(output, context);
  }
  const contents: DescribeJobQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobQueues: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueues !== undefined && data.jobQueues !== null) {
    contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(data.jobQueues, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents: DescribeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1JobDetailList(data.jobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobSummaryList: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
    contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(data.jobSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    contents.tags = deserializeAws_restJson1TagrisTagsMap(data.tags, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RegisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterJobDefinitionCommandError(output, context);
  }
  const contents: RegisterJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobDefinitionArn: undefined,
    jobDefinitionName: undefined,
    revision: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobDefinitionArn !== undefined && data.jobDefinitionArn !== null) {
    contents.jobDefinitionArn = __expectString(data.jobDefinitionArn);
  }
  if (data.jobDefinitionName !== undefined && data.jobDefinitionName !== null) {
    contents.jobDefinitionName = __expectString(data.jobDefinitionName);
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.revision = __expectInt32(data.revision);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SubmitJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SubmitJobCommandError(output, context);
  }
  const contents: SubmitJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobArn: undefined,
    jobId: undefined,
    jobName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobArn !== undefined && data.jobArn !== null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobName !== undefined && data.jobName !== null) {
    contents.jobName = __expectString(data.jobName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SubmitJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1TerminateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateJobCommandError(output, context);
  }
  const contents: TerminateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TerminateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommandError(output, context);
  }
  const contents: UpdateComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = __expectString(data.computeEnvironmentArn);
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = __expectString(data.computeEnvironmentName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobQueueCommandError(output, context);
  }
  const contents: UpdateJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobQueueArn: undefined,
    jobQueueName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = __expectString(data.jobQueueArn);
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = __expectString(data.jobQueueName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
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

const deserializeAws_restJson1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: ServerException = {
    name: "ServerException",
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

const serializeAws_restJson1ArrayProperties = (input: ArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
  };
};

const serializeAws_restJson1ComputeEnvironmentOrder = (
  input: ComputeEnvironmentOrder,
  context: __SerdeContext
): any => {
  return {
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1ComputeEnvironmentOrders = (
  input: ComputeEnvironmentOrder[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};

const serializeAws_restJson1ComputeResource = (input: ComputeResource, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy !== undefined &&
      input.allocationStrategy !== null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage !== undefined && input.bidPercentage !== null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus !== undefined && input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration !== undefined &&
      input.ec2Configuration !== null && {
        ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
      }),
    ...(input.ec2KeyPair !== undefined && input.ec2KeyPair !== null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId !== undefined && input.imageId !== null && { imageId: input.imageId }),
    ...(input.instanceRole !== undefined && input.instanceRole !== null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes !== undefined &&
      input.instanceTypes !== null && {
        instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
      }),
    ...(input.launchTemplate !== undefined &&
      input.launchTemplate !== null && {
        launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
      }),
    ...(input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup !== undefined &&
      input.placementGroup !== null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
      }),
    ...(input.spotIamFleetRole !== undefined &&
      input.spotIamFleetRole !== null && { spotIamFleetRole: input.spotIamFleetRole }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1ComputeResourceUpdate = (input: ComputeResourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.desiredvCpus !== undefined && input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }),
    ...(input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
  };
};

const serializeAws_restJson1ContainerOverrides = (input: ContainerOverrides, context: __SerdeContext): any => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
      }),
    ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
      }),
    ...(input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }),
  };
};

const serializeAws_restJson1ContainerProperties = (input: ContainerProperties, context: __SerdeContext): any => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
      }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.fargatePlatformConfiguration !== undefined &&
      input.fargatePlatformConfiguration !== null && {
        fargatePlatformConfiguration: serializeAws_restJson1FargatePlatformConfiguration(
          input.fargatePlatformConfiguration,
          context
        ),
      }),
    ...(input.image !== undefined && input.image !== null && { image: input.image }),
    ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
    ...(input.jobRoleArn !== undefined && input.jobRoleArn !== null && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters !== undefined &&
      input.linuxParameters !== null && {
        linuxParameters: serializeAws_restJson1LinuxParameters(input.linuxParameters, context),
      }),
    ...(input.logConfiguration !== undefined &&
      input.logConfiguration !== null && {
        logConfiguration: serializeAws_restJson1LogConfiguration(input.logConfiguration, context),
      }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.mountPoints !== undefined &&
      input.mountPoints !== null && { mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context) }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem !== undefined &&
      input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
      }),
    ...(input.secrets !== undefined &&
      input.secrets !== null && { secrets: serializeAws_restJson1SecretList(input.secrets, context) }),
    ...(input.ulimits !== undefined &&
      input.ulimits !== null && { ulimits: serializeAws_restJson1Ulimits(input.ulimits, context) }),
    ...(input.user !== undefined && input.user !== null && { user: input.user }),
    ...(input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }),
    ...(input.volumes !== undefined &&
      input.volumes !== null && { volumes: serializeAws_restJson1Volumes(input.volumes, context) }),
  };
};

const serializeAws_restJson1Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath }),
    ...(input.permissions !== undefined &&
      input.permissions !== null && {
        permissions: serializeAws_restJson1DeviceCgroupPermissions(input.permissions, context),
      }),
  };
};

const serializeAws_restJson1DeviceCgroupPermissions = (
  input: (DeviceCgroupPermission | string)[],
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

const serializeAws_restJson1DevicesList = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Device(entry, context);
    });
};

const serializeAws_restJson1Ec2Configuration = (input: Ec2Configuration, context: __SerdeContext): any => {
  return {
    ...(input.imageIdOverride !== undefined &&
      input.imageIdOverride !== null && { imageIdOverride: input.imageIdOverride }),
    ...(input.imageType !== undefined && input.imageType !== null && { imageType: input.imageType }),
  };
};

const serializeAws_restJson1Ec2ConfigurationList = (input: Ec2Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Ec2Configuration(entry, context);
    });
};

const serializeAws_restJson1EFSAuthorizationConfig = (input: EFSAuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId }),
    ...(input.iam !== undefined && input.iam !== null && { iam: input.iam }),
  };
};

const serializeAws_restJson1EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_restJson1EFSAuthorizationConfig(input.authorizationConfig, context),
      }),
    ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption !== undefined &&
      input.transitEncryption !== null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort !== undefined &&
      input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};

const serializeAws_restJson1EnvironmentVariables = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1KeyValuePair(entry, context);
    });
};

const serializeAws_restJson1EvaluateOnExit = (input: EvaluateOnExit, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.onExitCode !== undefined && input.onExitCode !== null && { onExitCode: input.onExitCode }),
    ...(input.onReason !== undefined && input.onReason !== null && { onReason: input.onReason }),
    ...(input.onStatusReason !== undefined &&
      input.onStatusReason !== null && { onStatusReason: input.onStatusReason }),
  };
};

const serializeAws_restJson1EvaluateOnExitList = (input: EvaluateOnExit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EvaluateOnExit(entry, context);
    });
};

const serializeAws_restJson1FargatePlatformConfiguration = (
  input: FargatePlatformConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
  };
};

const serializeAws_restJson1Host = (input: Host, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_restJson1JobDependency = (input: JobDependency, context: __SerdeContext): any => {
  return {
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1JobDependencyList = (input: JobDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1JobDependency(entry, context);
    });
};

const serializeAws_restJson1JobTimeout = (input: JobTimeout, context: __SerdeContext): any => {
  return {
    ...(input.attemptDurationSeconds !== undefined &&
      input.attemptDurationSeconds !== null && { attemptDurationSeconds: input.attemptDurationSeconds }),
  };
};

const serializeAws_restJson1KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1KeyValuesPair = (input: KeyValuesPair, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1StringList(input.values, context) }),
  };
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId !== undefined &&
      input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName !== undefined &&
      input.launchTemplateName !== null && { launchTemplateName: input.launchTemplateName }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.devices !== undefined &&
      input.devices !== null && { devices: serializeAws_restJson1DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled !== undefined &&
      input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize !== undefined &&
      input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness }),
    ...(input.tmpfs !== undefined &&
      input.tmpfs !== null && { tmpfs: serializeAws_restJson1TmpfsList(input.tmpfs, context) }),
  };
};

const serializeAws_restJson1ListJobsFilterList = (input: KeyValuesPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1KeyValuesPair(entry, context);
    });
};

const serializeAws_restJson1LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver }),
    ...(input.options !== undefined &&
      input.options !== null && { options: serializeAws_restJson1LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions !== undefined &&
      input.secretOptions !== null && {
        secretOptions: serializeAws_restJson1SecretList(input.secretOptions, context),
      }),
  };
};

const serializeAws_restJson1LogConfigurationOptionsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1MountPoint = (input: MountPoint, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
    ...(input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }),
  };
};

const serializeAws_restJson1MountPoints = (input: MountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MountPoint(entry, context);
    });
};

const serializeAws_restJson1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp !== undefined &&
      input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
  };
};

const serializeAws_restJson1NodeOverrides = (input: NodeOverrides, context: __SerdeContext): any => {
  return {
    ...(input.nodePropertyOverrides !== undefined &&
      input.nodePropertyOverrides !== null && {
        nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(input.nodePropertyOverrides, context),
      }),
    ...(input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodeProperties = (input: NodeProperties, context: __SerdeContext): any => {
  return {
    ...(input.mainNode !== undefined && input.mainNode !== null && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties !== undefined &&
      input.nodeRangeProperties !== null && {
        nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(input.nodeRangeProperties, context),
      }),
    ...(input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodePropertyOverride = (input: NodePropertyOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides !== undefined &&
      input.containerOverrides !== null && {
        containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
      }),
    ...(input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }),
  };
};

const serializeAws_restJson1NodePropertyOverrides = (input: NodePropertyOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NodePropertyOverride(entry, context);
    });
};

const serializeAws_restJson1NodeRangeProperties = (input: NodeRangeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NodeRangeProperty(entry, context);
    });
};

const serializeAws_restJson1NodeRangeProperty = (input: NodeRangeProperty, context: __SerdeContext): any => {
  return {
    ...(input.container !== undefined &&
      input.container !== null && { container: serializeAws_restJson1ContainerProperties(input.container, context) }),
    ...(input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }),
  };
};

const serializeAws_restJson1ParametersMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1PlatformCapabilityList = (
  input: (PlatformCapability | string)[],
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

const serializeAws_restJson1ResourceRequirement = (input: ResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1ResourceRequirements = (input: ResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ResourceRequirement(entry, context);
    });
};

const serializeAws_restJson1RetryStrategy = (input: RetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.attempts !== undefined && input.attempts !== null && { attempts: input.attempts }),
    ...(input.evaluateOnExit !== undefined &&
      input.evaluateOnExit !== null && {
        evaluateOnExit: serializeAws_restJson1EvaluateOnExitList(input.evaluateOnExit, context),
      }),
  };
};

const serializeAws_restJson1Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }),
  };
};

const serializeAws_restJson1SecretList = (input: Secret[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Secret(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagrisTagsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1TagsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1Tmpfs = (input: Tmpfs, context: __SerdeContext): any => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.mountOptions !== undefined &&
      input.mountOptions !== null && { mountOptions: serializeAws_restJson1StringList(input.mountOptions, context) }),
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
  };
};

const serializeAws_restJson1TmpfsList = (input: Tmpfs[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tmpfs(entry, context);
    });
};

const serializeAws_restJson1Ulimit = (input: Ulimit, context: __SerdeContext): any => {
  return {
    ...(input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }),
  };
};

const serializeAws_restJson1Ulimits = (input: Ulimit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Ulimit(entry, context);
    });
};

const serializeAws_restJson1Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.efsVolumeConfiguration !== undefined &&
      input.efsVolumeConfiguration !== null && {
        efsVolumeConfiguration: serializeAws_restJson1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
      }),
    ...(input.host !== undefined && input.host !== null && { host: serializeAws_restJson1Host(input.host, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1Volumes = (input: Volume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Volume(entry, context);
    });
};

const deserializeAws_restJson1ArrayJobStatusSummary = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ArrayPropertiesDetail = (output: any, context: __SerdeContext): ArrayPropertiesDetail => {
  return {
    index: __expectInt32(output.index),
    size: __expectInt32(output.size),
    statusSummary:
      output.statusSummary !== undefined && output.statusSummary !== null
        ? deserializeAws_restJson1ArrayJobStatusSummary(output.statusSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ArrayPropertiesSummary = (
  output: any,
  context: __SerdeContext
): ArrayPropertiesSummary => {
  return {
    index: __expectInt32(output.index),
    size: __expectInt32(output.size),
  } as any;
};

const deserializeAws_restJson1AttemptContainerDetail = (
  output: any,
  context: __SerdeContext
): AttemptContainerDetail => {
  return {
    containerInstanceArn: __expectString(output.containerInstanceArn),
    exitCode: __expectInt32(output.exitCode),
    logStreamName: __expectString(output.logStreamName),
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    reason: __expectString(output.reason),
    taskArn: __expectString(output.taskArn),
  } as any;
};

const deserializeAws_restJson1AttemptDetail = (output: any, context: __SerdeContext): AttemptDetail => {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1AttemptContainerDetail(output.container, context)
        : undefined,
    startedAt: __expectLong(output.startedAt),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

const deserializeAws_restJson1AttemptDetails = (output: any, context: __SerdeContext): AttemptDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AttemptDetail(entry, context);
    });
};

const deserializeAws_restJson1ComputeEnvironmentDetail = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail => {
  return {
    computeEnvironmentArn: __expectString(output.computeEnvironmentArn),
    computeEnvironmentName: __expectString(output.computeEnvironmentName),
    computeResources:
      output.computeResources !== undefined && output.computeResources !== null
        ? deserializeAws_restJson1ComputeResource(output.computeResources, context)
        : undefined,
    ecsClusterArn: __expectString(output.ecsClusterArn),
    serviceRole: __expectString(output.serviceRole),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ComputeEnvironmentDetailList = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComputeEnvironmentDetail(entry, context);
    });
};

const deserializeAws_restJson1ComputeEnvironmentOrder = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentOrder => {
  return {
    computeEnvironment: __expectString(output.computeEnvironment),
    order: __expectInt32(output.order),
  } as any;
};

const deserializeAws_restJson1ComputeEnvironmentOrders = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentOrder[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};

const deserializeAws_restJson1ComputeResource = (output: any, context: __SerdeContext): ComputeResource => {
  return {
    allocationStrategy: __expectString(output.allocationStrategy),
    bidPercentage: __expectInt32(output.bidPercentage),
    desiredvCpus: __expectInt32(output.desiredvCpus),
    ec2Configuration:
      output.ec2Configuration !== undefined && output.ec2Configuration !== null
        ? deserializeAws_restJson1Ec2ConfigurationList(output.ec2Configuration, context)
        : undefined,
    ec2KeyPair: __expectString(output.ec2KeyPair),
    imageId: __expectString(output.imageId),
    instanceRole: __expectString(output.instanceRole),
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxvCpus: __expectInt32(output.maxvCpus),
    minvCpus: __expectInt32(output.minvCpus),
    placementGroup: __expectString(output.placementGroup),
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole: __expectString(output.spotIamFleetRole),
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ContainerDetail = (output: any, context: __SerdeContext): ContainerDetail => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    containerInstanceArn: __expectString(output.containerInstanceArn),
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    exitCode: __expectInt32(output.exitCode),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    logStreamName: __expectString(output.logStreamName),
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    reason: __expectString(output.reason),
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_restJson1SecretList(output.secrets, context)
        : undefined,
    taskArn: __expectString(output.taskArn),
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerProperties = (output: any, context: __SerdeContext): ContainerProperties => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_restJson1SecretList(output.secrets, context)
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerSummary = (output: any, context: __SerdeContext): ContainerSummary => {
  return {
    exitCode: __expectInt32(output.exitCode),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    containerPath: __expectString(output.containerPath),
    hostPath: __expectString(output.hostPath),
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? deserializeAws_restJson1DeviceCgroupPermissions(output.permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): (DeviceCgroupPermission | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1DevicesList = (output: any, context: __SerdeContext): Device[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
};

const deserializeAws_restJson1Ec2Configuration = (output: any, context: __SerdeContext): Ec2Configuration => {
  return {
    imageIdOverride: __expectString(output.imageIdOverride),
    imageType: __expectString(output.imageType),
  } as any;
};

const deserializeAws_restJson1Ec2ConfigurationList = (output: any, context: __SerdeContext): Ec2Configuration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ec2Configuration(entry, context);
    });
};

const deserializeAws_restJson1EFSAuthorizationConfig = (
  output: any,
  context: __SerdeContext
): EFSAuthorizationConfig => {
  return {
    accessPointId: __expectString(output.accessPointId),
    iam: __expectString(output.iam),
  } as any;
};

const deserializeAws_restJson1EFSVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): EFSVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
        ? deserializeAws_restJson1EFSAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
    transitEncryption: __expectString(output.transitEncryption),
    transitEncryptionPort: __expectInt32(output.transitEncryptionPort),
  } as any;
};

const deserializeAws_restJson1EnvironmentVariables = (output: any, context: __SerdeContext): KeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};

const deserializeAws_restJson1EvaluateOnExit = (output: any, context: __SerdeContext): EvaluateOnExit => {
  return {
    action: __expectString(output.action),
    onExitCode: __expectString(output.onExitCode),
    onReason: __expectString(output.onReason),
    onStatusReason: __expectString(output.onStatusReason),
  } as any;
};

const deserializeAws_restJson1EvaluateOnExitList = (output: any, context: __SerdeContext): EvaluateOnExit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluateOnExit(entry, context);
    });
};

const deserializeAws_restJson1FargatePlatformConfiguration = (
  output: any,
  context: __SerdeContext
): FargatePlatformConfiguration => {
  return {
    platformVersion: __expectString(output.platformVersion),
  } as any;
};

const deserializeAws_restJson1Host = (output: any, context: __SerdeContext): Host => {
  return {
    sourcePath: __expectString(output.sourcePath),
  } as any;
};

const deserializeAws_restJson1JobDefinition = (output: any, context: __SerdeContext): JobDefinition => {
  return {
    containerProperties:
      output.containerProperties !== undefined && output.containerProperties !== null
        ? deserializeAws_restJson1ContainerProperties(output.containerProperties, context)
        : undefined,
    jobDefinitionArn: __expectString(output.jobDefinitionArn),
    jobDefinitionName: __expectString(output.jobDefinitionName),
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ParametersMap(output.parameters, context)
        : undefined,
    platformCapabilities:
      output.platformCapabilities !== undefined && output.platformCapabilities !== null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    revision: __expectInt32(output.revision),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobDefinitionList = (output: any, context: __SerdeContext): JobDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDefinition(entry, context);
    });
};

const deserializeAws_restJson1JobDependency = (output: any, context: __SerdeContext): JobDependency => {
  return {
    jobId: __expectString(output.jobId),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobDependencyList = (output: any, context: __SerdeContext): JobDependency[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDependency(entry, context);
    });
};

const deserializeAws_restJson1JobDetail = (output: any, context: __SerdeContext): JobDetail => {
  return {
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesDetail(output.arrayProperties, context)
        : undefined,
    attempts:
      output.attempts !== undefined && output.attempts !== null
        ? deserializeAws_restJson1AttemptDetails(output.attempts, context)
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerDetail(output.container, context)
        : undefined,
    createdAt: __expectLong(output.createdAt),
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context)
        : undefined,
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    jobQueue: __expectString(output.jobQueue),
    nodeDetails:
      output.nodeDetails !== undefined && output.nodeDetails !== null
        ? deserializeAws_restJson1NodeDetails(output.nodeDetails, context)
        : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ParametersMap(output.parameters, context)
        : undefined,
    platformCapabilities:
      output.platformCapabilities !== undefined && output.platformCapabilities !== null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobDetailList = (output: any, context: __SerdeContext): JobDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDetail(entry, context);
    });
};

const deserializeAws_restJson1JobQueueDetail = (output: any, context: __SerdeContext): JobQueueDetail => {
  return {
    computeEnvironmentOrder:
      output.computeEnvironmentOrder !== undefined && output.computeEnvironmentOrder !== null
        ? deserializeAws_restJson1ComputeEnvironmentOrders(output.computeEnvironmentOrder, context)
        : undefined,
    jobQueueArn: __expectString(output.jobQueueArn),
    jobQueueName: __expectString(output.jobQueueName),
    priority: __expectInt32(output.priority),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobQueueDetailList = (output: any, context: __SerdeContext): JobQueueDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobQueueDetail(entry, context);
    });
};

const deserializeAws_restJson1JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesSummary(output.arrayProperties, context)
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerSummary(output.container, context)
        : undefined,
    createdAt: __expectLong(output.createdAt),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodePropertiesSummary(output.nodeProperties, context)
        : undefined,
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

const deserializeAws_restJson1JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
};

const deserializeAws_restJson1JobTimeout = (output: any, context: __SerdeContext): JobTimeout => {
  return {
    attemptDurationSeconds: __expectInt32(output.attemptDurationSeconds),
  } as any;
};

const deserializeAws_restJson1KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  return {
    launchTemplateId: __expectString(output.launchTemplateId),
    launchTemplateName: __expectString(output.launchTemplateName),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1LinuxParameters = (output: any, context: __SerdeContext): LinuxParameters => {
  return {
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_restJson1DevicesList(output.devices, context)
        : undefined,
    initProcessEnabled: __expectBoolean(output.initProcessEnabled),
    maxSwap: __expectInt32(output.maxSwap),
    sharedMemorySize: __expectInt32(output.sharedMemorySize),
    swappiness: __expectInt32(output.swappiness),
    tmpfs:
      output.tmpfs !== undefined && output.tmpfs !== null
        ? deserializeAws_restJson1TmpfsList(output.tmpfs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: __expectString(output.logDriver),
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_restJson1LogConfigurationOptionsMap(output.options, context)
        : undefined,
    secretOptions:
      output.secretOptions !== undefined && output.secretOptions !== null
        ? deserializeAws_restJson1SecretList(output.secretOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfigurationOptionsMap = (
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

const deserializeAws_restJson1MountPoint = (output: any, context: __SerdeContext): MountPoint => {
  return {
    containerPath: __expectString(output.containerPath),
    readOnly: __expectBoolean(output.readOnly),
    sourceVolume: __expectString(output.sourceVolume),
  } as any;
};

const deserializeAws_restJson1MountPoints = (output: any, context: __SerdeContext): MountPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MountPoint(entry, context);
    });
};

const deserializeAws_restJson1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    assignPublicIp: __expectString(output.assignPublicIp),
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    attachmentId: __expectString(output.attachmentId),
    ipv6Address: __expectString(output.ipv6Address),
    privateIpv4Address: __expectString(output.privateIpv4Address),
  } as any;
};

const deserializeAws_restJson1NetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};

const deserializeAws_restJson1NodeDetails = (output: any, context: __SerdeContext): NodeDetails => {
  return {
    isMainNode: __expectBoolean(output.isMainNode),
    nodeIndex: __expectInt32(output.nodeIndex),
  } as any;
};

const deserializeAws_restJson1NodeProperties = (output: any, context: __SerdeContext): NodeProperties => {
  return {
    mainNode: __expectInt32(output.mainNode),
    nodeRangeProperties:
      output.nodeRangeProperties !== undefined && output.nodeRangeProperties !== null
        ? deserializeAws_restJson1NodeRangeProperties(output.nodeRangeProperties, context)
        : undefined,
    numNodes: __expectInt32(output.numNodes),
  } as any;
};

const deserializeAws_restJson1NodePropertiesSummary = (output: any, context: __SerdeContext): NodePropertiesSummary => {
  return {
    isMainNode: __expectBoolean(output.isMainNode),
    nodeIndex: __expectInt32(output.nodeIndex),
    numNodes: __expectInt32(output.numNodes),
  } as any;
};

const deserializeAws_restJson1NodeRangeProperties = (output: any, context: __SerdeContext): NodeRangeProperty[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeRangeProperty(entry, context);
    });
};

const deserializeAws_restJson1NodeRangeProperty = (output: any, context: __SerdeContext): NodeRangeProperty => {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerProperties(output.container, context)
        : undefined,
    targetNodes: __expectString(output.targetNodes),
  } as any;
};

const deserializeAws_restJson1ParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1PlatformCapabilityList = (
  output: any,
  context: __SerdeContext
): (PlatformCapability | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ResourceRequirements = (output: any, context: __SerdeContext): ResourceRequirement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceRequirement(entry, context);
    });
};

const deserializeAws_restJson1RetryStrategy = (output: any, context: __SerdeContext): RetryStrategy => {
  return {
    attempts: __expectInt32(output.attempts),
    evaluateOnExit:
      output.evaluateOnExit !== undefined && output.evaluateOnExit !== null
        ? deserializeAws_restJson1EvaluateOnExitList(output.evaluateOnExit, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: __expectString(output.name),
    valueFrom: __expectString(output.valueFrom),
  } as any;
};

const deserializeAws_restJson1SecretList = (output: any, context: __SerdeContext): Secret[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Secret(entry, context);
    });
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagrisTagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath: __expectString(output.containerPath),
    mountOptions:
      output.mountOptions !== undefined && output.mountOptions !== null
        ? deserializeAws_restJson1StringList(output.mountOptions, context)
        : undefined,
    size: __expectInt32(output.size),
  } as any;
};

const deserializeAws_restJson1TmpfsList = (output: any, context: __SerdeContext): Tmpfs[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tmpfs(entry, context);
    });
};

const deserializeAws_restJson1Ulimit = (output: any, context: __SerdeContext): Ulimit => {
  return {
    hardLimit: __expectInt32(output.hardLimit),
    name: __expectString(output.name),
    softLimit: __expectInt32(output.softLimit),
  } as any;
};

const deserializeAws_restJson1Ulimits = (output: any, context: __SerdeContext): Ulimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ulimit(entry, context);
    });
};

const deserializeAws_restJson1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    efsVolumeConfiguration:
      output.efsVolumeConfiguration !== undefined && output.efsVolumeConfiguration !== null
        ? deserializeAws_restJson1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_restJson1Host(output.host, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Volume(entry, context);
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
