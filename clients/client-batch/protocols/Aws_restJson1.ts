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
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/canceljob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/createcomputeenvironment";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/createjobqueue";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deletecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deletejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deregisterjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinition !== undefined && input.jobDefinition !== null && { jobDefinition: input.jobDefinition }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describecomputeenvironments";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironments !== undefined &&
      input.computeEnvironments !== null && {
        computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobdefinitions";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobqueues";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueues !== undefined &&
      input.jobQueues !== null && { jobQueues: serializeAws_restJson1StringList(input.jobQueues, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobs";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs !== undefined &&
      input.jobs !== null && { jobs: serializeAws_restJson1StringList(input.jobs, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/listjobs";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayJobId !== undefined && input.arrayJobId !== null && { arrayJobId: input.arrayJobId }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId !== undefined &&
      input.multiNodeJobId !== null && { multiNodeJobId: input.multiNodeJobId }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v1/tags/{resourceArn}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/registerjobdefinition";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/submitjob";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/tags/{resourceArn}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/terminatejob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v1/tags/{resourceArn}";
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
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/updatecomputeenvironment";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/updatejobqueue";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const data: any = await parseBody(output.body, context);
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = data.computeEnvironmentName;
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
  const data: any = await parseBody(output.body, context);
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = data.jobQueueArn;
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = data.jobQueueName;
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
  const data: any = await parseBody(output.body, context);
  if (data.computeEnvironments !== undefined && data.computeEnvironments !== null) {
    contents.computeEnvironments = deserializeAws_restJson1ComputeEnvironmentDetailList(
      data.computeEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.jobDefinitions !== undefined && data.jobDefinitions !== null) {
    contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(data.jobDefinitions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  const data: any = await parseBody(output.body, context);
  if (data.jobQueues !== undefined && data.jobQueues !== null) {
    contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(data.jobQueues, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
    contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(data.jobSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  const data: any = await parseBody(output.body, context);
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
  const data: any = await parseBody(output.body, context);
  if (data.jobDefinitionArn !== undefined && data.jobDefinitionArn !== null) {
    contents.jobDefinitionArn = data.jobDefinitionArn;
  }
  if (data.jobDefinitionName !== undefined && data.jobDefinitionName !== null) {
    contents.jobDefinitionName = data.jobDefinitionName;
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.revision = data.revision;
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
  const data: any = await parseBody(output.body, context);
  if (data.jobArn !== undefined && data.jobArn !== null) {
    contents.jobArn = data.jobArn;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.jobName !== undefined && data.jobName !== null) {
    contents.jobName = data.jobName;
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
  const data: any = await parseBody(output.body, context);
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = data.computeEnvironmentName;
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
  const data: any = await parseBody(output.body, context);
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = data.jobQueueArn;
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = data.jobQueueName;
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
    contents.message = data.message;
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
    contents.message = data.message;
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ArrayPropertiesDetail = (output: any, context: __SerdeContext): ArrayPropertiesDetail => {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
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
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  } as any;
};

const deserializeAws_restJson1AttemptContainerDetail = (
  output: any,
  context: __SerdeContext
): AttemptContainerDetail => {
  return {
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null ? output.logStreamName : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
  } as any;
};

const deserializeAws_restJson1AttemptDetail = (output: any, context: __SerdeContext): AttemptDetail => {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1AttemptContainerDetail(output.container, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
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
    computeEnvironmentArn:
      output.computeEnvironmentArn !== undefined && output.computeEnvironmentArn !== null
        ? output.computeEnvironmentArn
        : undefined,
    computeEnvironmentName:
      output.computeEnvironmentName !== undefined && output.computeEnvironmentName !== null
        ? output.computeEnvironmentName
        : undefined,
    computeResources:
      output.computeResources !== undefined && output.computeResources !== null
        ? deserializeAws_restJson1ComputeResource(output.computeResources, context)
        : undefined,
    ecsClusterArn:
      output.ecsClusterArn !== undefined && output.ecsClusterArn !== null ? output.ecsClusterArn : undefined,
    serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
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
    computeEnvironment:
      output.computeEnvironment !== undefined && output.computeEnvironment !== null
        ? output.computeEnvironment
        : undefined,
    order: output.order !== undefined && output.order !== null ? output.order : undefined,
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
    allocationStrategy:
      output.allocationStrategy !== undefined && output.allocationStrategy !== null
        ? output.allocationStrategy
        : undefined,
    bidPercentage:
      output.bidPercentage !== undefined && output.bidPercentage !== null ? output.bidPercentage : undefined,
    desiredvCpus: output.desiredvCpus !== undefined && output.desiredvCpus !== null ? output.desiredvCpus : undefined,
    ec2Configuration:
      output.ec2Configuration !== undefined && output.ec2Configuration !== null
        ? deserializeAws_restJson1Ec2ConfigurationList(output.ec2Configuration, context)
        : undefined,
    ec2KeyPair: output.ec2KeyPair !== undefined && output.ec2KeyPair !== null ? output.ec2KeyPair : undefined,
    imageId: output.imageId !== undefined && output.imageId !== null ? output.imageId : undefined,
    instanceRole: output.instanceRole !== undefined && output.instanceRole !== null ? output.instanceRole : undefined,
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxvCpus: output.maxvCpus !== undefined && output.maxvCpus !== null ? output.maxvCpus : undefined,
    minvCpus: output.minvCpus !== undefined && output.minvCpus !== null ? output.minvCpus : undefined,
    placementGroup:
      output.placementGroup !== undefined && output.placementGroup !== null ? output.placementGroup : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole:
      output.spotIamFleetRole !== undefined && output.spotIamFleetRole !== null ? output.spotIamFleetRole : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerDetail = (output: any, context: __SerdeContext): ContainerDetail => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
    jobRoleArn: output.jobRoleArn !== undefined && output.jobRoleArn !== null ? output.jobRoleArn : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null ? output.logStreamName : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
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
    privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_restJson1SecretList(output.secrets, context)
        : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user: output.user !== undefined && output.user !== null ? output.user : undefined,
    vcpus: output.vcpus !== undefined && output.vcpus !== null ? output.vcpus : undefined,
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
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
    jobRoleArn: output.jobRoleArn !== undefined && output.jobRoleArn !== null ? output.jobRoleArn : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
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
    user: output.user !== undefined && output.user !== null ? output.user : undefined,
    vcpus: output.vcpus !== undefined && output.vcpus !== null ? output.vcpus : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerSummary = (output: any, context: __SerdeContext): ContainerSummary => {
  return {
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
  } as any;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    hostPath: output.hostPath !== undefined && output.hostPath !== null ? output.hostPath : undefined,
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
      return entry;
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
    imageIdOverride:
      output.imageIdOverride !== undefined && output.imageIdOverride !== null ? output.imageIdOverride : undefined,
    imageType: output.imageType !== undefined && output.imageType !== null ? output.imageType : undefined,
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
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    onExitCode: output.onExitCode !== undefined && output.onExitCode !== null ? output.onExitCode : undefined,
    onReason: output.onReason !== undefined && output.onReason !== null ? output.onReason : undefined,
    onStatusReason:
      output.onStatusReason !== undefined && output.onStatusReason !== null ? output.onStatusReason : undefined,
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
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
  } as any;
};

const deserializeAws_restJson1Host = (output: any, context: __SerdeContext): Host => {
  return {
    sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
  } as any;
};

const deserializeAws_restJson1JobDefinition = (output: any, context: __SerdeContext): JobDefinition => {
  return {
    containerProperties:
      output.containerProperties !== undefined && output.containerProperties !== null
        ? deserializeAws_restJson1ContainerProperties(output.containerProperties, context)
        : undefined,
    jobDefinitionArn:
      output.jobDefinitionArn !== undefined && output.jobDefinitionArn !== null ? output.jobDefinitionArn : undefined,
    jobDefinitionName:
      output.jobDefinitionName !== undefined && output.jobDefinitionName !== null
        ? output.jobDefinitionName
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
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
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
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
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
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context)
        : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobDefinition:
      output.jobDefinition !== undefined && output.jobDefinition !== null ? output.jobDefinition : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
    jobQueue: output.jobQueue !== undefined && output.jobQueue !== null ? output.jobQueue : undefined,
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
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
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
    jobQueueArn: output.jobQueueArn !== undefined && output.jobQueueArn !== null ? output.jobQueueArn : undefined,
    jobQueueName: output.jobQueueName !== undefined && output.jobQueueName !== null ? output.jobQueueName : undefined,
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
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
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodePropertiesSummary(output.nodeProperties, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
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
    attemptDurationSeconds:
      output.attemptDurationSeconds !== undefined && output.attemptDurationSeconds !== null
        ? output.attemptDurationSeconds
        : undefined,
  } as any;
};

const deserializeAws_restJson1KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  return {
    launchTemplateId:
      output.launchTemplateId !== undefined && output.launchTemplateId !== null ? output.launchTemplateId : undefined,
    launchTemplateName:
      output.launchTemplateName !== undefined && output.launchTemplateName !== null
        ? output.launchTemplateName
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1LinuxParameters = (output: any, context: __SerdeContext): LinuxParameters => {
  return {
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_restJson1DevicesList(output.devices, context)
        : undefined,
    initProcessEnabled:
      output.initProcessEnabled !== undefined && output.initProcessEnabled !== null
        ? output.initProcessEnabled
        : undefined,
    maxSwap: output.maxSwap !== undefined && output.maxSwap !== null ? output.maxSwap : undefined,
    sharedMemorySize:
      output.sharedMemorySize !== undefined && output.sharedMemorySize !== null ? output.sharedMemorySize : undefined,
    swappiness: output.swappiness !== undefined && output.swappiness !== null ? output.swappiness : undefined,
    tmpfs:
      output.tmpfs !== undefined && output.tmpfs !== null
        ? deserializeAws_restJson1TmpfsList(output.tmpfs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: output.logDriver !== undefined && output.logDriver !== null ? output.logDriver : undefined,
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
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1MountPoint = (output: any, context: __SerdeContext): MountPoint => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
    sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
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
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
    ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined,
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
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
  } as any;
};

const deserializeAws_restJson1NodeProperties = (output: any, context: __SerdeContext): NodeProperties => {
  return {
    mainNode: output.mainNode !== undefined && output.mainNode !== null ? output.mainNode : undefined,
    nodeRangeProperties:
      output.nodeRangeProperties !== undefined && output.nodeRangeProperties !== null
        ? deserializeAws_restJson1NodeRangeProperties(output.nodeRangeProperties, context)
        : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
  } as any;
};

const deserializeAws_restJson1NodePropertiesSummary = (output: any, context: __SerdeContext): NodePropertiesSummary => {
  return {
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
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
    targetNodes: output.targetNodes !== undefined && output.targetNodes !== null ? output.targetNodes : undefined,
  } as any;
};

const deserializeAws_restJson1ParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
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
      return entry;
    });
};

const deserializeAws_restJson1ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
    attempts: output.attempts !== undefined && output.attempts !== null ? output.attempts : undefined,
    evaluateOnExit:
      output.evaluateOnExit !== undefined && output.evaluateOnExit !== null
        ? deserializeAws_restJson1EvaluateOnExitList(output.evaluateOnExit, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
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
      return entry;
    });
};

const deserializeAws_restJson1TagrisTagsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
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
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    mountOptions:
      output.mountOptions !== undefined && output.mountOptions !== null
        ? deserializeAws_restJson1StringList(output.mountOptions, context)
        : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
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
    hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
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
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_restJson1Host(output.host, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
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
