// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "../commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "../commands/CreateJobQueueCommand";
import {
  CreateSchedulingPolicyCommandInput,
  CreateSchedulingPolicyCommandOutput,
} from "../commands/CreateSchedulingPolicyCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "../commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "../commands/DeleteJobQueueCommand";
import {
  DeleteSchedulingPolicyCommandInput,
  DeleteSchedulingPolicyCommandOutput,
} from "../commands/DeleteSchedulingPolicyCommand";
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
import {
  DescribeSchedulingPoliciesCommandInput,
  DescribeSchedulingPoliciesCommandOutput,
} from "../commands/DescribeSchedulingPoliciesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
} from "../commands/ListSchedulingPoliciesCommand";
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
  UpdateSchedulingPolicyCommandInput,
  UpdateSchedulingPolicyCommandOutput,
} from "../commands/UpdateSchedulingPolicyCommand";
import { BatchServiceException as __BaseException } from "../models/BatchServiceException";
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
  EFSAuthorizationConfig,
  EFSVolumeConfiguration,
  EvaluateOnExit,
  FairsharePolicy,
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
  SchedulingPolicyDetail,
  SchedulingPolicyListingDetail,
  Secret,
  ServerException,
  ShareAttributes,
  Tmpfs,
  Ulimit,
  UpdatePolicy,
  Volume,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/canceljob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId != undefined && { jobId: input.jobId }),
    ...(input.reason != undefined && { reason: input.reason }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/createcomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentName != undefined && { computeEnvironmentName: input.computeEnvironmentName }),
    ...(input.computeResources != undefined && {
      computeResources: serializeAws_restJson1ComputeResource(input.computeResources, context),
    }),
    ...(input.serviceRole != undefined && { serviceRole: input.serviceRole }),
    ...(input.state != undefined && { state: input.state }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.type != undefined && { type: input.type }),
    ...(input.unmanagedvCpus != undefined && { unmanagedvCpus: input.unmanagedvCpus }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/createjobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder != undefined && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
    }),
    ...(input.jobQueueName != undefined && { jobQueueName: input.jobQueueName }),
    ...(input.priority != undefined && { priority: input.priority }),
    ...(input.schedulingPolicyArn != undefined && { schedulingPolicyArn: input.schedulingPolicyArn }),
    ...(input.state != undefined && { state: input.state }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateSchedulingPolicyCommand = async (
  input: CreateSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/createschedulingpolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.fairsharePolicy != undefined && {
      fairsharePolicy: serializeAws_restJson1FairsharePolicy(input.fairsharePolicy, context),
    }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deletecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment != undefined && { computeEnvironment: input.computeEnvironment }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deletejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueue != undefined && { jobQueue: input.jobQueue }),
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

export const serializeAws_restJson1DeleteSchedulingPolicyCommand = async (
  input: DeleteSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deleteschedulingpolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != undefined && { arn: input.arn }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/deregisterjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinition != undefined && { jobDefinition: input.jobDefinition }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describecomputeenvironments";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironments != undefined && {
      computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
    }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobdefinitions";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinitionName != undefined && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.jobDefinitions != undefined && {
      jobDefinitions: serializeAws_restJson1StringList(input.jobDefinitions, context),
    }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.status != undefined && { status: input.status }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobqueues";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueues != undefined && { jobQueues: serializeAws_restJson1StringList(input.jobQueues, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describejobs";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs != undefined && { jobs: serializeAws_restJson1StringList(input.jobs, context) }),
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

export const serializeAws_restJson1DescribeSchedulingPoliciesCommand = async (
  input: DescribeSchedulingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/describeschedulingpolicies";
  let body: any;
  body = JSON.stringify({
    ...(input.arns != undefined && { arns: serializeAws_restJson1StringList(input.arns, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/listjobs";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayJobId != undefined && { arrayJobId: input.arrayJobId }),
    ...(input.filters != undefined && { filters: serializeAws_restJson1ListJobsFilterList(input.filters, context) }),
    ...(input.jobQueue != undefined && { jobQueue: input.jobQueue }),
    ...(input.jobStatus != undefined && { jobStatus: input.jobStatus }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId != undefined && { multiNodeJobId: input.multiNodeJobId }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListSchedulingPoliciesCommand = async (
  input: ListSchedulingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/listschedulingpolicies";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/registerjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.containerProperties != undefined && {
      containerProperties: serializeAws_restJson1ContainerProperties(input.containerProperties, context),
    }),
    ...(input.jobDefinitionName != undefined && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.nodeProperties != undefined && {
      nodeProperties: serializeAws_restJson1NodeProperties(input.nodeProperties, context),
    }),
    ...(input.parameters != undefined && {
      parameters: serializeAws_restJson1ParametersMap(input.parameters, context),
    }),
    ...(input.platformCapabilities != undefined && {
      platformCapabilities: serializeAws_restJson1PlatformCapabilityList(input.platformCapabilities, context),
    }),
    ...(input.propagateTags != undefined && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != undefined && {
      retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
    }),
    ...(input.schedulingPriority != undefined && { schedulingPriority: input.schedulingPriority }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != undefined && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
    ...(input.type != undefined && { type: input.type }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/submitjob";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayProperties != undefined && {
      arrayProperties: serializeAws_restJson1ArrayProperties(input.arrayProperties, context),
    }),
    ...(input.containerOverrides != undefined && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.dependsOn != undefined && {
      dependsOn: serializeAws_restJson1JobDependencyList(input.dependsOn, context),
    }),
    ...(input.jobDefinition != undefined && { jobDefinition: input.jobDefinition }),
    ...(input.jobName != undefined && { jobName: input.jobName }),
    ...(input.jobQueue != undefined && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides != undefined && {
      nodeOverrides: serializeAws_restJson1NodeOverrides(input.nodeOverrides, context),
    }),
    ...(input.parameters != undefined && {
      parameters: serializeAws_restJson1ParametersMap(input.parameters, context),
    }),
    ...(input.propagateTags != undefined && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != undefined && {
      retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
    }),
    ...(input.schedulingPriorityOverride != undefined && {
      schedulingPriorityOverride: input.schedulingPriorityOverride,
    }),
    ...(input.shareIdentifier != undefined && { shareIdentifier: input.shareIdentifier }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != undefined && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
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
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/terminatejob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId != undefined && { jobId: input.jobId }),
    ...(input.reason != undefined && { reason: input.reason }),
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/updatecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment != undefined && { computeEnvironment: input.computeEnvironment }),
    ...(input.computeResources != undefined && {
      computeResources: serializeAws_restJson1ComputeResourceUpdate(input.computeResources, context),
    }),
    ...(input.serviceRole != undefined && { serviceRole: input.serviceRole }),
    ...(input.state != undefined && { state: input.state }),
    ...(input.unmanagedvCpus != undefined && { unmanagedvCpus: input.unmanagedvCpus }),
    ...(input.updatePolicy != undefined && {
      updatePolicy: serializeAws_restJson1UpdatePolicy(input.updatePolicy, context),
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

export const serializeAws_restJson1UpdateJobQueueCommand = async (
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/updatejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder != undefined && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
    }),
    ...(input.jobQueue != undefined && { jobQueue: input.jobQueue }),
    ...(input.priority != undefined && { priority: input.priority }),
    ...(input.schedulingPolicyArn != undefined && { schedulingPolicyArn: input.schedulingPolicyArn }),
    ...(input.state != undefined && { state: input.state }),
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

export const serializeAws_restJson1UpdateSchedulingPolicyCommand = async (
  input: UpdateSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/updateschedulingpolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != undefined && { arn: input.arn }),
    ...(input.fairsharePolicy != undefined && {
      fairsharePolicy: serializeAws_restJson1FairsharePolicy(input.fairsharePolicy, context),
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSchedulingPolicyCommandError(output, context);
  }
  const contents: CreateSchedulingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    name: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSchedulingPolicyCommandError(output, context);
  }
  const contents: DeleteSchedulingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSchedulingPoliciesCommandError(output, context);
  }
  const contents: DescribeSchedulingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    schedulingPolicies: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.schedulingPolicies !== undefined && data.schedulingPolicies !== null) {
    contents.schedulingPolicies = deserializeAws_restJson1SchedulingPolicyDetailList(data.schedulingPolicies, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSchedulingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSchedulingPoliciesCommandError(output, context);
  }
  const contents: ListSchedulingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    schedulingPolicies: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.schedulingPolicies !== undefined && data.schedulingPolicies !== null) {
    contents.schedulingPolicies = deserializeAws_restJson1SchedulingPolicyListingDetailList(
      data.schedulingPolicies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSchedulingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
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
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
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
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSchedulingPolicyCommandError(output, context);
  }
  const contents: UpdateSchedulingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ArrayProperties = (input: ArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.size != undefined && { size: input.size }),
  };
};

const serializeAws_restJson1ComputeEnvironmentOrder = (
  input: ComputeEnvironmentOrder,
  context: __SerdeContext
): any => {
  return {
    ...(input.computeEnvironment != undefined && { computeEnvironment: input.computeEnvironment }),
    ...(input.order != undefined && { order: input.order }),
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
    ...(input.allocationStrategy != undefined && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != undefined && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != undefined && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != undefined && {
      ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != undefined && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != undefined && { imageId: input.imageId }),
    ...(input.instanceRole != undefined && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != undefined && {
      instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
    }),
    ...(input.launchTemplate != undefined && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != undefined && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != undefined && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != undefined && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != undefined && {
      securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    }),
    ...(input.spotIamFleetRole != undefined && { spotIamFleetRole: input.spotIamFleetRole }),
    ...(input.subnets != undefined && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type != undefined && { type: input.type }),
  };
};

const serializeAws_restJson1ComputeResourceUpdate = (input: ComputeResourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy != undefined && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != undefined && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != undefined && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != undefined && {
      ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != undefined && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != undefined && { imageId: input.imageId }),
    ...(input.instanceRole != undefined && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != undefined && {
      instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
    }),
    ...(input.launchTemplate != undefined && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != undefined && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != undefined && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != undefined && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != undefined && {
      securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    }),
    ...(input.subnets != undefined && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type != undefined && { type: input.type }),
    ...(input.updateToLatestImageVersion != undefined && {
      updateToLatestImageVersion: input.updateToLatestImageVersion,
    }),
  };
};

const serializeAws_restJson1ContainerOverrides = (input: ContainerOverrides, context: __SerdeContext): any => {
  return {
    ...(input.command != undefined && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment != undefined && {
      environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
    }),
    ...(input.instanceType != undefined && { instanceType: input.instanceType }),
    ...(input.memory != undefined && { memory: input.memory }),
    ...(input.resourceRequirements != undefined && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.vcpus != undefined && { vcpus: input.vcpus }),
  };
};

const serializeAws_restJson1ContainerProperties = (input: ContainerProperties, context: __SerdeContext): any => {
  return {
    ...(input.command != undefined && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment != undefined && {
      environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
    }),
    ...(input.executionRoleArn != undefined && { executionRoleArn: input.executionRoleArn }),
    ...(input.fargatePlatformConfiguration != undefined && {
      fargatePlatformConfiguration: serializeAws_restJson1FargatePlatformConfiguration(
        input.fargatePlatformConfiguration,
        context
      ),
    }),
    ...(input.image != undefined && { image: input.image }),
    ...(input.instanceType != undefined && { instanceType: input.instanceType }),
    ...(input.jobRoleArn != undefined && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters != undefined && {
      linuxParameters: serializeAws_restJson1LinuxParameters(input.linuxParameters, context),
    }),
    ...(input.logConfiguration != undefined && {
      logConfiguration: serializeAws_restJson1LogConfiguration(input.logConfiguration, context),
    }),
    ...(input.memory != undefined && { memory: input.memory }),
    ...(input.mountPoints != undefined && {
      mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context),
    }),
    ...(input.networkConfiguration != undefined && {
      networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.privileged != undefined && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem != undefined && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.resourceRequirements != undefined && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.secrets != undefined && { secrets: serializeAws_restJson1SecretList(input.secrets, context) }),
    ...(input.ulimits != undefined && { ulimits: serializeAws_restJson1Ulimits(input.ulimits, context) }),
    ...(input.user != undefined && { user: input.user }),
    ...(input.vcpus != undefined && { vcpus: input.vcpus }),
    ...(input.volumes != undefined && { volumes: serializeAws_restJson1Volumes(input.volumes, context) }),
  };
};

const serializeAws_restJson1Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != undefined && { containerPath: input.containerPath }),
    ...(input.hostPath != undefined && { hostPath: input.hostPath }),
    ...(input.permissions != undefined && {
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
    ...(input.imageIdOverride != undefined && { imageIdOverride: input.imageIdOverride }),
    ...(input.imageType != undefined && { imageType: input.imageType }),
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
    ...(input.accessPointId != undefined && { accessPointId: input.accessPointId }),
    ...(input.iam != undefined && { iam: input.iam }),
  };
};

const serializeAws_restJson1EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != undefined && {
      authorizationConfig: serializeAws_restJson1EFSAuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.fileSystemId != undefined && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory != undefined && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption != undefined && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort != undefined && { transitEncryptionPort: input.transitEncryptionPort }),
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
    ...(input.action != undefined && { action: input.action }),
    ...(input.onExitCode != undefined && { onExitCode: input.onExitCode }),
    ...(input.onReason != undefined && { onReason: input.onReason }),
    ...(input.onStatusReason != undefined && { onStatusReason: input.onStatusReason }),
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

const serializeAws_restJson1FairsharePolicy = (input: FairsharePolicy, context: __SerdeContext): any => {
  return {
    ...(input.computeReservation != undefined && { computeReservation: input.computeReservation }),
    ...(input.shareDecaySeconds != undefined && { shareDecaySeconds: input.shareDecaySeconds }),
    ...(input.shareDistribution != undefined && {
      shareDistribution: serializeAws_restJson1ShareAttributesList(input.shareDistribution, context),
    }),
  };
};

const serializeAws_restJson1FargatePlatformConfiguration = (
  input: FargatePlatformConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.platformVersion != undefined && { platformVersion: input.platformVersion }),
  };
};

const serializeAws_restJson1Host = (input: Host, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath != undefined && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_restJson1JobDependency = (input: JobDependency, context: __SerdeContext): any => {
  return {
    ...(input.jobId != undefined && { jobId: input.jobId }),
    ...(input.type != undefined && { type: input.type }),
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
    ...(input.attemptDurationSeconds != undefined && { attemptDurationSeconds: input.attemptDurationSeconds }),
  };
};

const serializeAws_restJson1KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1KeyValuesPair = (input: KeyValuesPair, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.values != undefined && { values: serializeAws_restJson1StringList(input.values, context) }),
  };
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId != undefined && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName != undefined && { launchTemplateName: input.launchTemplateName }),
    ...(input.version != undefined && { version: input.version }),
  };
};

const serializeAws_restJson1LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.devices != undefined && { devices: serializeAws_restJson1DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled != undefined && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap != undefined && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize != undefined && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness != undefined && { swappiness: input.swappiness }),
    ...(input.tmpfs != undefined && { tmpfs: serializeAws_restJson1TmpfsList(input.tmpfs, context) }),
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
    ...(input.logDriver != undefined && { logDriver: input.logDriver }),
    ...(input.options != undefined && {
      options: serializeAws_restJson1LogConfigurationOptionsMap(input.options, context),
    }),
    ...(input.secretOptions != undefined && {
      secretOptions: serializeAws_restJson1SecretList(input.secretOptions, context),
    }),
  };
};

const serializeAws_restJson1LogConfigurationOptionsMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
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
    ...(input.containerPath != undefined && { containerPath: input.containerPath }),
    ...(input.readOnly != undefined && { readOnly: input.readOnly }),
    ...(input.sourceVolume != undefined && { sourceVolume: input.sourceVolume }),
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
    ...(input.assignPublicIp != undefined && { assignPublicIp: input.assignPublicIp }),
  };
};

const serializeAws_restJson1NodeOverrides = (input: NodeOverrides, context: __SerdeContext): any => {
  return {
    ...(input.nodePropertyOverrides != undefined && {
      nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(input.nodePropertyOverrides, context),
    }),
    ...(input.numNodes != undefined && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodeProperties = (input: NodeProperties, context: __SerdeContext): any => {
  return {
    ...(input.mainNode != undefined && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties != undefined && {
      nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(input.nodeRangeProperties, context),
    }),
    ...(input.numNodes != undefined && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodePropertyOverride = (input: NodePropertyOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides != undefined && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.targetNodes != undefined && { targetNodes: input.targetNodes }),
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
    ...(input.container != undefined && {
      container: serializeAws_restJson1ContainerProperties(input.container, context),
    }),
    ...(input.targetNodes != undefined && { targetNodes: input.targetNodes }),
  };
};

const serializeAws_restJson1ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
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
    ...(input.type != undefined && { type: input.type }),
    ...(input.value != undefined && { value: input.value }),
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
    ...(input.attempts != undefined && { attempts: input.attempts }),
    ...(input.evaluateOnExit != undefined && {
      evaluateOnExit: serializeAws_restJson1EvaluateOnExitList(input.evaluateOnExit, context),
    }),
  };
};

const serializeAws_restJson1Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.valueFrom != undefined && { valueFrom: input.valueFrom }),
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

const serializeAws_restJson1ShareAttributes = (input: ShareAttributes, context: __SerdeContext): any => {
  return {
    ...(input.shareIdentifier != undefined && { shareIdentifier: input.shareIdentifier }),
    ...(input.weightFactor != undefined && { weightFactor: __serializeFloat(input.weightFactor) }),
  };
};

const serializeAws_restJson1ShareAttributesList = (input: ShareAttributes[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ShareAttributes(entry, context);
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

const serializeAws_restJson1TagrisTagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
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
    ...(input.containerPath != undefined && { containerPath: input.containerPath }),
    ...(input.mountOptions != undefined && {
      mountOptions: serializeAws_restJson1StringList(input.mountOptions, context),
    }),
    ...(input.size != undefined && { size: input.size }),
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
    ...(input.hardLimit != undefined && { hardLimit: input.hardLimit }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.softLimit != undefined && { softLimit: input.softLimit }),
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

const serializeAws_restJson1UpdatePolicy = (input: UpdatePolicy, context: __SerdeContext): any => {
  return {
    ...(input.jobExecutionTimeoutMinutes != undefined && {
      jobExecutionTimeoutMinutes: input.jobExecutionTimeoutMinutes,
    }),
    ...(input.terminateJobsOnUpdate != undefined && { terminateJobsOnUpdate: input.terminateJobsOnUpdate }),
  };
};

const serializeAws_restJson1Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.efsVolumeConfiguration != undefined && {
      efsVolumeConfiguration: serializeAws_restJson1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
    }),
    ...(input.host != undefined && { host: serializeAws_restJson1Host(input.host, context) }),
    ...(input.name != undefined && { name: input.name }),
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
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
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
      output.statusSummary != undefined
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
      output.networkInterfaces != undefined
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    reason: __expectString(output.reason),
    taskArn: __expectString(output.taskArn),
  } as any;
};

const deserializeAws_restJson1AttemptDetail = (output: any, context: __SerdeContext): AttemptDetail => {
  return {
    container:
      output.container != undefined
        ? deserializeAws_restJson1AttemptContainerDetail(output.container, context)
        : undefined,
    startedAt: __expectLong(output.startedAt),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

const deserializeAws_restJson1AttemptDetails = (output: any, context: __SerdeContext): AttemptDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AttemptDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComputeEnvironmentDetail = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail => {
  return {
    computeEnvironmentArn: __expectString(output.computeEnvironmentArn),
    computeEnvironmentName: __expectString(output.computeEnvironmentName),
    computeResources:
      output.computeResources != undefined
        ? deserializeAws_restJson1ComputeResource(output.computeResources, context)
        : undefined,
    ecsClusterArn: __expectString(output.ecsClusterArn),
    serviceRole: __expectString(output.serviceRole),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != undefined ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    unmanagedvCpus: __expectInt32(output.unmanagedvCpus),
    updatePolicy:
      output.updatePolicy != undefined ? deserializeAws_restJson1UpdatePolicy(output.updatePolicy, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComputeEnvironmentDetailList = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComputeEnvironmentDetail(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComputeResource = (output: any, context: __SerdeContext): ComputeResource => {
  return {
    allocationStrategy: __expectString(output.allocationStrategy),
    bidPercentage: __expectInt32(output.bidPercentage),
    desiredvCpus: __expectInt32(output.desiredvCpus),
    ec2Configuration:
      output.ec2Configuration != undefined
        ? deserializeAws_restJson1Ec2ConfigurationList(output.ec2Configuration, context)
        : undefined,
    ec2KeyPair: __expectString(output.ec2KeyPair),
    imageId: __expectString(output.imageId),
    instanceRole: __expectString(output.instanceRole),
    instanceTypes:
      output.instanceTypes != undefined ? deserializeAws_restJson1StringList(output.instanceTypes, context) : undefined,
    launchTemplate:
      output.launchTemplate != undefined
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxvCpus: __expectInt32(output.maxvCpus),
    minvCpus: __expectInt32(output.minvCpus),
    placementGroup: __expectString(output.placementGroup),
    securityGroupIds:
      output.securityGroupIds != undefined
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole: __expectString(output.spotIamFleetRole),
    subnets: output.subnets != undefined ? deserializeAws_restJson1StringList(output.subnets, context) : undefined,
    tags: output.tags != undefined ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ContainerDetail = (output: any, context: __SerdeContext): ContainerDetail => {
  return {
    command: output.command != undefined ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    containerInstanceArn: __expectString(output.containerInstanceArn),
    environment:
      output.environment != undefined
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    exitCode: __expectInt32(output.exitCode),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != undefined
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters != undefined
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration != undefined
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    logStreamName: __expectString(output.logStreamName),
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints != undefined ? deserializeAws_restJson1MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != undefined
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces != undefined
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    reason: __expectString(output.reason),
    resourceRequirements:
      output.resourceRequirements != undefined
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets: output.secrets != undefined ? deserializeAws_restJson1SecretList(output.secrets, context) : undefined,
    taskArn: __expectString(output.taskArn),
    ulimits: output.ulimits != undefined ? deserializeAws_restJson1Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != undefined ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerProperties = (output: any, context: __SerdeContext): ContainerProperties => {
  return {
    command: output.command != undefined ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    environment:
      output.environment != undefined
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != undefined
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters != undefined
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration != undefined
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints != undefined ? deserializeAws_restJson1MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != undefined
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    resourceRequirements:
      output.resourceRequirements != undefined
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets: output.secrets != undefined ? deserializeAws_restJson1SecretList(output.secrets, context) : undefined,
    ulimits: output.ulimits != undefined ? deserializeAws_restJson1Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != undefined ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
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
      output.permissions != undefined
        ? deserializeAws_restJson1DeviceCgroupPermissions(output.permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): (DeviceCgroupPermission | string)[] => {
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

const deserializeAws_restJson1DevicesList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Ec2Configuration = (output: any, context: __SerdeContext): Ec2Configuration => {
  return {
    imageIdOverride: __expectString(output.imageIdOverride),
    imageType: __expectString(output.imageType),
  } as any;
};

const deserializeAws_restJson1Ec2ConfigurationList = (output: any, context: __SerdeContext): Ec2Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ec2Configuration(entry, context);
    });
  return retVal;
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
      output.authorizationConfig != undefined
        ? deserializeAws_restJson1EFSAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
    transitEncryption: __expectString(output.transitEncryption),
    transitEncryptionPort: __expectInt32(output.transitEncryptionPort),
  } as any;
};

const deserializeAws_restJson1EnvironmentVariables = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluateOnExit(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FairsharePolicy = (output: any, context: __SerdeContext): FairsharePolicy => {
  return {
    computeReservation: __expectInt32(output.computeReservation),
    shareDecaySeconds: __expectInt32(output.shareDecaySeconds),
    shareDistribution:
      output.shareDistribution != undefined
        ? deserializeAws_restJson1ShareAttributesList(output.shareDistribution, context)
        : undefined,
  } as any;
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
      output.containerProperties != undefined
        ? deserializeAws_restJson1ContainerProperties(output.containerProperties, context)
        : undefined,
    jobDefinitionArn: __expectString(output.jobDefinitionArn),
    jobDefinitionName: __expectString(output.jobDefinitionName),
    nodeProperties:
      output.nodeProperties != undefined
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters != undefined ? deserializeAws_restJson1ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != undefined
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy != undefined
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    revision: __expectInt32(output.revision),
    schedulingPriority: __expectInt32(output.schedulingPriority),
    status: __expectString(output.status),
    tags: output.tags != undefined ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != undefined ? deserializeAws_restJson1JobTimeout(output.timeout, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobDefinitionList = (output: any, context: __SerdeContext): JobDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobDependency = (output: any, context: __SerdeContext): JobDependency => {
  return {
    jobId: __expectString(output.jobId),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobDependencyList = (output: any, context: __SerdeContext): JobDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDependency(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobDetail = (output: any, context: __SerdeContext): JobDetail => {
  return {
    arrayProperties:
      output.arrayProperties != undefined
        ? deserializeAws_restJson1ArrayPropertiesDetail(output.arrayProperties, context)
        : undefined,
    attempts:
      output.attempts != undefined ? deserializeAws_restJson1AttemptDetails(output.attempts, context) : undefined,
    container:
      output.container != undefined ? deserializeAws_restJson1ContainerDetail(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    dependsOn:
      output.dependsOn != undefined ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context) : undefined,
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    jobQueue: __expectString(output.jobQueue),
    nodeDetails:
      output.nodeDetails != undefined ? deserializeAws_restJson1NodeDetails(output.nodeDetails, context) : undefined,
    nodeProperties:
      output.nodeProperties != undefined
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters != undefined ? deserializeAws_restJson1ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != undefined
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy != undefined
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    schedulingPriority: __expectInt32(output.schedulingPriority),
    shareIdentifier: __expectString(output.shareIdentifier),
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
    tags: output.tags != undefined ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != undefined ? deserializeAws_restJson1JobTimeout(output.timeout, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobDetailList = (output: any, context: __SerdeContext): JobDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobQueueDetail = (output: any, context: __SerdeContext): JobQueueDetail => {
  return {
    computeEnvironmentOrder:
      output.computeEnvironmentOrder != undefined
        ? deserializeAws_restJson1ComputeEnvironmentOrders(output.computeEnvironmentOrder, context)
        : undefined,
    jobQueueArn: __expectString(output.jobQueueArn),
    jobQueueName: __expectString(output.jobQueueName),
    priority: __expectInt32(output.priority),
    schedulingPolicyArn: __expectString(output.schedulingPolicyArn),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != undefined ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobQueueDetailList = (output: any, context: __SerdeContext): JobQueueDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobQueueDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    arrayProperties:
      output.arrayProperties != undefined
        ? deserializeAws_restJson1ArrayPropertiesSummary(output.arrayProperties, context)
        : undefined,
    container:
      output.container != undefined ? deserializeAws_restJson1ContainerSummary(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    nodeProperties:
      output.nodeProperties != undefined
        ? deserializeAws_restJson1NodePropertiesSummary(output.nodeProperties, context)
        : undefined,
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

const deserializeAws_restJson1JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
  return retVal;
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
    devices: output.devices != undefined ? deserializeAws_restJson1DevicesList(output.devices, context) : undefined,
    initProcessEnabled: __expectBoolean(output.initProcessEnabled),
    maxSwap: __expectInt32(output.maxSwap),
    sharedMemorySize: __expectInt32(output.sharedMemorySize),
    swappiness: __expectInt32(output.swappiness),
    tmpfs: output.tmpfs != undefined ? deserializeAws_restJson1TmpfsList(output.tmpfs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: __expectString(output.logDriver),
    options:
      output.options != undefined
        ? deserializeAws_restJson1LogConfigurationOptionsMap(output.options, context)
        : undefined,
    secretOptions:
      output.secretOptions != undefined ? deserializeAws_restJson1SecretList(output.secretOptions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfigurationOptionsMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MountPoint(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
  return retVal;
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
      output.nodeRangeProperties != undefined
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeRangeProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NodeRangeProperty = (output: any, context: __SerdeContext): NodeRangeProperty => {
  return {
    container:
      output.container != undefined
        ? deserializeAws_restJson1ContainerProperties(output.container, context)
        : undefined,
    targetNodes: __expectString(output.targetNodes),
  } as any;
};

const deserializeAws_restJson1ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
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

const deserializeAws_restJson1ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ResourceRequirements = (output: any, context: __SerdeContext): ResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceRequirement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RetryStrategy = (output: any, context: __SerdeContext): RetryStrategy => {
  return {
    attempts: __expectInt32(output.attempts),
    evaluateOnExit:
      output.evaluateOnExit != undefined
        ? deserializeAws_restJson1EvaluateOnExitList(output.evaluateOnExit, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SchedulingPolicyDetail = (
  output: any,
  context: __SerdeContext
): SchedulingPolicyDetail => {
  return {
    arn: __expectString(output.arn),
    fairsharePolicy:
      output.fairsharePolicy != undefined
        ? deserializeAws_restJson1FairsharePolicy(output.fairsharePolicy, context)
        : undefined,
    name: __expectString(output.name),
    tags: output.tags != undefined ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SchedulingPolicyDetailList = (
  output: any,
  context: __SerdeContext
): SchedulingPolicyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SchedulingPolicyDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SchedulingPolicyListingDetail = (
  output: any,
  context: __SerdeContext
): SchedulingPolicyListingDetail => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_restJson1SchedulingPolicyListingDetailList = (
  output: any,
  context: __SerdeContext
): SchedulingPolicyListingDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SchedulingPolicyListingDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: __expectString(output.name),
    valueFrom: __expectString(output.valueFrom),
  } as any;
};

const deserializeAws_restJson1SecretList = (output: any, context: __SerdeContext): Secret[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Secret(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ShareAttributes = (output: any, context: __SerdeContext): ShareAttributes => {
  return {
    shareIdentifier: __expectString(output.shareIdentifier),
    weightFactor: __limitedParseFloat32(output.weightFactor),
  } as any;
};

const deserializeAws_restJson1ShareAttributesList = (output: any, context: __SerdeContext): ShareAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ShareAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagrisTagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
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
      output.mountOptions != undefined ? deserializeAws_restJson1StringList(output.mountOptions, context) : undefined,
    size: __expectInt32(output.size),
  } as any;
};

const deserializeAws_restJson1TmpfsList = (output: any, context: __SerdeContext): Tmpfs[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tmpfs(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Ulimit = (output: any, context: __SerdeContext): Ulimit => {
  return {
    hardLimit: __expectInt32(output.hardLimit),
    name: __expectString(output.name),
    softLimit: __expectInt32(output.softLimit),
  } as any;
};

const deserializeAws_restJson1Ulimits = (output: any, context: __SerdeContext): Ulimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ulimit(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UpdatePolicy = (output: any, context: __SerdeContext): UpdatePolicy => {
  return {
    jobExecutionTimeoutMinutes: __expectLong(output.jobExecutionTimeoutMinutes),
    terminateJobsOnUpdate: __expectBoolean(output.terminateJobsOnUpdate),
  } as any;
};

const deserializeAws_restJson1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    efsVolumeConfiguration:
      output.efsVolumeConfiguration != undefined
        ? deserializeAws_restJson1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    host: output.host != undefined ? deserializeAws_restJson1Host(output.host, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Volume(entry, context);
    });
  return retVal;
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
