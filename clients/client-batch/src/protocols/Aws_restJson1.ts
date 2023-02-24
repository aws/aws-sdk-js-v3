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
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
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
  EksAttemptContainerDetail,
  EksAttemptDetail,
  EksConfiguration,
  EksContainer,
  EksContainerDetail,
  EksContainerEnvironmentVariable,
  EksContainerOverride,
  EksContainerResourceRequirements,
  EksContainerSecurityContext,
  EksContainerVolumeMount,
  EksEmptyDir,
  EksHostPath,
  EksPodProperties,
  EksPodPropertiesDetail,
  EksPodPropertiesOverride,
  EksProperties,
  EksPropertiesDetail,
  EksPropertiesOverride,
  EksSecret,
  EksVolume,
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
    ...(input.jobId != null && { jobId: input.jobId }),
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
    ...(input.computeEnvironmentName != null && { computeEnvironmentName: input.computeEnvironmentName }),
    ...(input.computeResources != null && {
      computeResources: serializeAws_restJson1ComputeResource(input.computeResources, context),
    }),
    ...(input.eksConfiguration != null && {
      eksConfiguration: serializeAws_restJson1EksConfiguration(input.eksConfiguration, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.state != null && { state: input.state }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.unmanagedvCpus != null && { unmanagedvCpus: input.unmanagedvCpus }),
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
    ...(input.computeEnvironmentOrder != null && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
    }),
    ...(input.jobQueueName != null && { jobQueueName: input.jobQueueName }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.schedulingPolicyArn != null && { schedulingPolicyArn: input.schedulingPolicyArn }),
    ...(input.state != null && { state: input.state }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
    ...(input.fairsharePolicy != null && {
      fairsharePolicy: serializeAws_restJson1FairsharePolicy(input.fairsharePolicy, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
    ...(input.computeEnvironment != null && { computeEnvironment: input.computeEnvironment }),
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
    ...(input.jobQueue != null && { jobQueue: input.jobQueue }),
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
    ...(input.arn != null && { arn: input.arn }),
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
    ...(input.jobDefinition != null && { jobDefinition: input.jobDefinition }),
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
    ...(input.computeEnvironments != null && {
      computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
    ...(input.jobDefinitionName != null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.jobDefinitions != null && {
      jobDefinitions: serializeAws_restJson1StringList(input.jobDefinitions, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
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
    ...(input.jobQueues != null && { jobQueues: serializeAws_restJson1StringList(input.jobQueues, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
    ...(input.jobs != null && { jobs: serializeAws_restJson1StringList(input.jobs, context) }),
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
    ...(input.arns != null && { arns: serializeAws_restJson1StringList(input.arns, context) }),
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
    ...(input.arrayJobId != null && { arrayJobId: input.arrayJobId }),
    ...(input.filters != null && { filters: serializeAws_restJson1ListJobsFilterList(input.filters, context) }),
    ...(input.jobQueue != null && { jobQueue: input.jobQueue }),
    ...(input.jobStatus != null && { jobStatus: input.jobStatus }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId != null && { multiNodeJobId: input.multiNodeJobId }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
    ...(input.containerProperties != null && {
      containerProperties: serializeAws_restJson1ContainerProperties(input.containerProperties, context),
    }),
    ...(input.eksProperties != null && {
      eksProperties: serializeAws_restJson1EksProperties(input.eksProperties, context),
    }),
    ...(input.jobDefinitionName != null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.nodeProperties != null && {
      nodeProperties: serializeAws_restJson1NodeProperties(input.nodeProperties, context),
    }),
    ...(input.parameters != null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.platformCapabilities != null && {
      platformCapabilities: serializeAws_restJson1PlatformCapabilityList(input.platformCapabilities, context),
    }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != null && {
      retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
    }),
    ...(input.schedulingPriority != null && { schedulingPriority: input.schedulingPriority }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
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
    ...(input.arrayProperties != null && {
      arrayProperties: serializeAws_restJson1ArrayProperties(input.arrayProperties, context),
    }),
    ...(input.containerOverrides != null && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.dependsOn != null && { dependsOn: serializeAws_restJson1JobDependencyList(input.dependsOn, context) }),
    ...(input.eksPropertiesOverride != null && {
      eksPropertiesOverride: serializeAws_restJson1EksPropertiesOverride(input.eksPropertiesOverride, context),
    }),
    ...(input.jobDefinition != null && { jobDefinition: input.jobDefinition }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobQueue != null && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides != null && {
      nodeOverrides: serializeAws_restJson1NodeOverrides(input.nodeOverrides, context),
    }),
    ...(input.parameters != null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != null && {
      retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
    }),
    ...(input.schedulingPriorityOverride != null && { schedulingPriorityOverride: input.schedulingPriorityOverride }),
    ...(input.shareIdentifier != null && { shareIdentifier: input.shareIdentifier }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
    ...(input.jobId != null && { jobId: input.jobId }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
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
    ...(input.computeEnvironment != null && { computeEnvironment: input.computeEnvironment }),
    ...(input.computeResources != null && {
      computeResources: serializeAws_restJson1ComputeResourceUpdate(input.computeResources, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.state != null && { state: input.state }),
    ...(input.unmanagedvCpus != null && { unmanagedvCpus: input.unmanagedvCpus }),
    ...(input.updatePolicy != null && {
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
    ...(input.computeEnvironmentOrder != null && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
    }),
    ...(input.jobQueue != null && { jobQueue: input.jobQueue }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.schedulingPolicyArn != null && { schedulingPolicyArn: input.schedulingPolicyArn }),
    ...(input.state != null && { state: input.state }),
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
    ...(input.arn != null && { arn: input.arn }),
    ...(input.fairsharePolicy != null && {
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComputeEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironmentArn != null) {
    contents.computeEnvironmentArn = __expectString(data.computeEnvironmentArn);
  }
  if (data.computeEnvironmentName != null) {
    contents.computeEnvironmentName = __expectString(data.computeEnvironmentName);
  }
  return contents;
};

const deserializeAws_restJson1CreateComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueueArn != null) {
    contents.jobQueueArn = __expectString(data.jobQueueArn);
  }
  if (data.jobQueueName != null) {
    contents.jobQueueName = __expectString(data.jobQueueName);
  }
  return contents;
};

const deserializeAws_restJson1CreateJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSchedulingPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1CreateSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComputeEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSchedulingPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeregisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterJobDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeregisterJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeComputeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironments != null) {
    contents.computeEnvironments = deserializeAws_restJson1ComputeEnvironmentDetailList(
      data.computeEnvironments,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeComputeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobDefinitions != null) {
    contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(data.jobDefinitions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeJobQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueues != null) {
    contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(data.jobQueues, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = deserializeAws_restJson1JobDetailList(data.jobs, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSchedulingPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.schedulingPolicies != null) {
    contents.schedulingPolicies = deserializeAws_restJson1SchedulingPolicyDetailList(data.schedulingPolicies, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSchedulingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummaryList != null) {
    contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(data.jobSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSchedulingPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.schedulingPolicies != null) {
    contents.schedulingPolicies = deserializeAws_restJson1SchedulingPolicyListingDetailList(
      data.schedulingPolicies,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSchedulingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
    contents.tags = deserializeAws_restJson1TagrisTagsMap(data.tags, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RegisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterJobDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobDefinitionArn != null) {
    contents.jobDefinitionArn = __expectString(data.jobDefinitionArn);
  }
  if (data.jobDefinitionName != null) {
    contents.jobDefinitionName = __expectString(data.jobDefinitionName);
  }
  if (data.revision != null) {
    contents.revision = __expectInt32(data.revision);
  }
  return contents;
};

const deserializeAws_restJson1RegisterJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SubmitJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SubmitJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobName != null) {
    contents.jobName = __expectString(data.jobName);
  }
  return contents;
};

const deserializeAws_restJson1SubmitJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TerminateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TerminateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironmentArn != null) {
    contents.computeEnvironmentArn = __expectString(data.computeEnvironmentArn);
  }
  if (data.computeEnvironmentName != null) {
    contents.computeEnvironmentName = __expectString(data.computeEnvironmentName);
  }
  return contents;
};

const deserializeAws_restJson1UpdateComputeEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueueArn != null) {
    contents.jobQueueArn = __expectString(data.jobQueueArn);
  }
  if (data.jobQueueName != null) {
    contents.jobQueueName = __expectString(data.jobQueueName);
  }
  return contents;
};

const deserializeAws_restJson1UpdateJobQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSchedulingPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSchedulingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
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
    ...(input.size != null && { size: input.size }),
  };
};

const serializeAws_restJson1ComputeEnvironmentOrder = (
  input: ComputeEnvironmentOrder,
  context: __SerdeContext
): any => {
  return {
    ...(input.computeEnvironment != null && { computeEnvironment: input.computeEnvironment }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1ComputeEnvironmentOrders = (
  input: ComputeEnvironmentOrder[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};

const serializeAws_restJson1ComputeResource = (input: ComputeResource, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy != null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != null && {
      ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != null && { imageId: input.imageId }),
    ...(input.instanceRole != null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != null && {
      instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
    }),
    ...(input.launchTemplate != null && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    }),
    ...(input.spotIamFleetRole != null && { spotIamFleetRole: input.spotIamFleetRole }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1ComputeResourceUpdate = (input: ComputeResourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy != null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != null && {
      ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != null && { imageId: input.imageId }),
    ...(input.instanceRole != null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != null && {
      instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
    }),
    ...(input.launchTemplate != null && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.updateToLatestImageVersion != null && { updateToLatestImageVersion: input.updateToLatestImageVersion }),
  };
};

const serializeAws_restJson1ContainerOverrides = (input: ContainerOverrides, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment != null && {
      environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
    }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.vcpus != null && { vcpus: input.vcpus }),
  };
};

const serializeAws_restJson1ContainerProperties = (input: ContainerProperties, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment != null && {
      environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.fargatePlatformConfiguration != null && {
      fargatePlatformConfiguration: serializeAws_restJson1FargatePlatformConfiguration(
        input.fargatePlatformConfiguration,
        context
      ),
    }),
    ...(input.image != null && { image: input.image }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.jobRoleArn != null && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters != null && {
      linuxParameters: serializeAws_restJson1LinuxParameters(input.linuxParameters, context),
    }),
    ...(input.logConfiguration != null && {
      logConfiguration: serializeAws_restJson1LogConfiguration(input.logConfiguration, context),
    }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.mountPoints != null && { mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context) }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.privileged != null && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem != null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.secrets != null && { secrets: serializeAws_restJson1SecretList(input.secrets, context) }),
    ...(input.ulimits != null && { ulimits: serializeAws_restJson1Ulimits(input.ulimits, context) }),
    ...(input.user != null && { user: input.user }),
    ...(input.vcpus != null && { vcpus: input.vcpus }),
    ...(input.volumes != null && { volumes: serializeAws_restJson1Volumes(input.volumes, context) }),
  };
};

const serializeAws_restJson1Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.hostPath != null && { hostPath: input.hostPath }),
    ...(input.permissions != null && {
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
      return entry;
    });
};

const serializeAws_restJson1DevicesList = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Device(entry, context);
    });
};

const serializeAws_restJson1Ec2Configuration = (input: Ec2Configuration, context: __SerdeContext): any => {
  return {
    ...(input.imageIdOverride != null && { imageIdOverride: input.imageIdOverride }),
    ...(input.imageKubernetesVersion != null && { imageKubernetesVersion: input.imageKubernetesVersion }),
    ...(input.imageType != null && { imageType: input.imageType }),
  };
};

const serializeAws_restJson1Ec2ConfigurationList = (input: Ec2Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Ec2Configuration(entry, context);
    });
};

const serializeAws_restJson1EFSAuthorizationConfig = (input: EFSAuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.accessPointId != null && { accessPointId: input.accessPointId }),
    ...(input.iam != null && { iam: input.iam }),
  };
};

const serializeAws_restJson1EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: serializeAws_restJson1EFSAuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.fileSystemId != null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory != null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption != null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort != null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};

const serializeAws_restJson1EksConfiguration = (input: EksConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.eksClusterArn != null && { eksClusterArn: input.eksClusterArn }),
    ...(input.kubernetesNamespace != null && { kubernetesNamespace: input.kubernetesNamespace }),
  };
};

const serializeAws_restJson1EksContainer = (input: EksContainer, context: __SerdeContext): any => {
  return {
    ...(input.args != null && { args: serializeAws_restJson1StringList(input.args, context) }),
    ...(input.command != null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.env != null && { env: serializeAws_restJson1EksContainerEnvironmentVariables(input.env, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.imagePullPolicy != null && { imagePullPolicy: input.imagePullPolicy }),
    ...(input.name != null && { name: input.name }),
    ...(input.resources != null && {
      resources: serializeAws_restJson1EksContainerResourceRequirements(input.resources, context),
    }),
    ...(input.securityContext != null && {
      securityContext: serializeAws_restJson1EksContainerSecurityContext(input.securityContext, context),
    }),
    ...(input.volumeMounts != null && {
      volumeMounts: serializeAws_restJson1EksContainerVolumeMounts(input.volumeMounts, context),
    }),
  };
};

const serializeAws_restJson1EksContainerEnvironmentVariable = (
  input: EksContainerEnvironmentVariable,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EksContainerEnvironmentVariables = (
  input: EksContainerEnvironmentVariable[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EksContainerEnvironmentVariable(entry, context);
    });
};

const serializeAws_restJson1EksContainerOverride = (input: EksContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.args != null && { args: serializeAws_restJson1StringList(input.args, context) }),
    ...(input.command != null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.env != null && { env: serializeAws_restJson1EksContainerEnvironmentVariables(input.env, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.resources != null && {
      resources: serializeAws_restJson1EksContainerResourceRequirements(input.resources, context),
    }),
  };
};

const serializeAws_restJson1EksContainerOverrideList = (
  input: EksContainerOverride[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EksContainerOverride(entry, context);
    });
};

const serializeAws_restJson1EksContainerResourceRequirements = (
  input: EksContainerResourceRequirements,
  context: __SerdeContext
): any => {
  return {
    ...(input.limits != null && { limits: serializeAws_restJson1EksLimits(input.limits, context) }),
    ...(input.requests != null && { requests: serializeAws_restJson1EksRequests(input.requests, context) }),
  };
};

const serializeAws_restJson1EksContainers = (input: EksContainer[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EksContainer(entry, context);
    });
};

const serializeAws_restJson1EksContainerSecurityContext = (
  input: EksContainerSecurityContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.privileged != null && { privileged: input.privileged }),
    ...(input.readOnlyRootFilesystem != null && { readOnlyRootFilesystem: input.readOnlyRootFilesystem }),
    ...(input.runAsGroup != null && { runAsGroup: input.runAsGroup }),
    ...(input.runAsNonRoot != null && { runAsNonRoot: input.runAsNonRoot }),
    ...(input.runAsUser != null && { runAsUser: input.runAsUser }),
  };
};

const serializeAws_restJson1EksContainerVolumeMount = (
  input: EksContainerVolumeMount,
  context: __SerdeContext
): any => {
  return {
    ...(input.mountPath != null && { mountPath: input.mountPath }),
    ...(input.name != null && { name: input.name }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
  };
};

const serializeAws_restJson1EksContainerVolumeMounts = (
  input: EksContainerVolumeMount[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EksContainerVolumeMount(entry, context);
    });
};

const serializeAws_restJson1EksEmptyDir = (input: EksEmptyDir, context: __SerdeContext): any => {
  return {
    ...(input.medium != null && { medium: input.medium }),
    ...(input.sizeLimit != null && { sizeLimit: input.sizeLimit }),
  };
};

const serializeAws_restJson1EksHostPath = (input: EksHostPath, context: __SerdeContext): any => {
  return {
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_restJson1EksLimits = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1EksPodProperties = (input: EksPodProperties, context: __SerdeContext): any => {
  return {
    ...(input.containers != null && { containers: serializeAws_restJson1EksContainers(input.containers, context) }),
    ...(input.dnsPolicy != null && { dnsPolicy: input.dnsPolicy }),
    ...(input.hostNetwork != null && { hostNetwork: input.hostNetwork }),
    ...(input.serviceAccountName != null && { serviceAccountName: input.serviceAccountName }),
    ...(input.volumes != null && { volumes: serializeAws_restJson1EksVolumes(input.volumes, context) }),
  };
};

const serializeAws_restJson1EksPodPropertiesOverride = (
  input: EksPodPropertiesOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.containers != null && {
      containers: serializeAws_restJson1EksContainerOverrideList(input.containers, context),
    }),
  };
};

const serializeAws_restJson1EksProperties = (input: EksProperties, context: __SerdeContext): any => {
  return {
    ...(input.podProperties != null && {
      podProperties: serializeAws_restJson1EksPodProperties(input.podProperties, context),
    }),
  };
};

const serializeAws_restJson1EksPropertiesOverride = (input: EksPropertiesOverride, context: __SerdeContext): any => {
  return {
    ...(input.podProperties != null && {
      podProperties: serializeAws_restJson1EksPodPropertiesOverride(input.podProperties, context),
    }),
  };
};

const serializeAws_restJson1EksRequests = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1EksSecret = (input: EksSecret, context: __SerdeContext): any => {
  return {
    ...(input.optional != null && { optional: input.optional }),
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

const serializeAws_restJson1EksVolume = (input: EksVolume, context: __SerdeContext): any => {
  return {
    ...(input.emptyDir != null && { emptyDir: serializeAws_restJson1EksEmptyDir(input.emptyDir, context) }),
    ...(input.hostPath != null && { hostPath: serializeAws_restJson1EksHostPath(input.hostPath, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.secret != null && { secret: serializeAws_restJson1EksSecret(input.secret, context) }),
  };
};

const serializeAws_restJson1EksVolumes = (input: EksVolume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EksVolume(entry, context);
    });
};

const serializeAws_restJson1EnvironmentVariables = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1KeyValuePair(entry, context);
    });
};

const serializeAws_restJson1EvaluateOnExit = (input: EvaluateOnExit, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.onExitCode != null && { onExitCode: input.onExitCode }),
    ...(input.onReason != null && { onReason: input.onReason }),
    ...(input.onStatusReason != null && { onStatusReason: input.onStatusReason }),
  };
};

const serializeAws_restJson1EvaluateOnExitList = (input: EvaluateOnExit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EvaluateOnExit(entry, context);
    });
};

const serializeAws_restJson1FairsharePolicy = (input: FairsharePolicy, context: __SerdeContext): any => {
  return {
    ...(input.computeReservation != null && { computeReservation: input.computeReservation }),
    ...(input.shareDecaySeconds != null && { shareDecaySeconds: input.shareDecaySeconds }),
    ...(input.shareDistribution != null && {
      shareDistribution: serializeAws_restJson1ShareAttributesList(input.shareDistribution, context),
    }),
  };
};

const serializeAws_restJson1FargatePlatformConfiguration = (
  input: FargatePlatformConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
  };
};

const serializeAws_restJson1Host = (input: Host, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath != null && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_restJson1JobDependency = (input: JobDependency, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1JobDependencyList = (input: JobDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JobDependency(entry, context);
    });
};

const serializeAws_restJson1JobTimeout = (input: JobTimeout, context: __SerdeContext): any => {
  return {
    ...(input.attemptDurationSeconds != null && { attemptDurationSeconds: input.attemptDurationSeconds }),
  };
};

const serializeAws_restJson1KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1KeyValuesPair = (input: KeyValuesPair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_restJson1StringList(input.values, context) }),
  };
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId != null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName != null && { launchTemplateName: input.launchTemplateName }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.devices != null && { devices: serializeAws_restJson1DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled != null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap != null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize != null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness != null && { swappiness: input.swappiness }),
    ...(input.tmpfs != null && { tmpfs: serializeAws_restJson1TmpfsList(input.tmpfs, context) }),
  };
};

const serializeAws_restJson1ListJobsFilterList = (input: KeyValuesPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1KeyValuesPair(entry, context);
    });
};

const serializeAws_restJson1LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logDriver != null && { logDriver: input.logDriver }),
    ...(input.options != null && { options: serializeAws_restJson1LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions != null && {
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
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1MountPoint = (input: MountPoint, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
    ...(input.sourceVolume != null && { sourceVolume: input.sourceVolume }),
  };
};

const serializeAws_restJson1MountPoints = (input: MountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MountPoint(entry, context);
    });
};

const serializeAws_restJson1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp != null && { assignPublicIp: input.assignPublicIp }),
  };
};

const serializeAws_restJson1NodeOverrides = (input: NodeOverrides, context: __SerdeContext): any => {
  return {
    ...(input.nodePropertyOverrides != null && {
      nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(input.nodePropertyOverrides, context),
    }),
    ...(input.numNodes != null && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodeProperties = (input: NodeProperties, context: __SerdeContext): any => {
  return {
    ...(input.mainNode != null && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties != null && {
      nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(input.nodeRangeProperties, context),
    }),
    ...(input.numNodes != null && { numNodes: input.numNodes }),
  };
};

const serializeAws_restJson1NodePropertyOverride = (input: NodePropertyOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides != null && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.targetNodes != null && { targetNodes: input.targetNodes }),
  };
};

const serializeAws_restJson1NodePropertyOverrides = (input: NodePropertyOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NodePropertyOverride(entry, context);
    });
};

const serializeAws_restJson1NodeRangeProperties = (input: NodeRangeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NodeRangeProperty(entry, context);
    });
};

const serializeAws_restJson1NodeRangeProperty = (input: NodeRangeProperty, context: __SerdeContext): any => {
  return {
    ...(input.container != null && { container: serializeAws_restJson1ContainerProperties(input.container, context) }),
    ...(input.targetNodes != null && { targetNodes: input.targetNodes }),
  };
};

const serializeAws_restJson1ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1PlatformCapabilityList = (
  input: (PlatformCapability | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceRequirement = (input: ResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1ResourceRequirements = (input: ResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourceRequirement(entry, context);
    });
};

const serializeAws_restJson1RetryStrategy = (input: RetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.attempts != null && { attempts: input.attempts }),
    ...(input.evaluateOnExit != null && {
      evaluateOnExit: serializeAws_restJson1EvaluateOnExitList(input.evaluateOnExit, context),
    }),
  };
};

const serializeAws_restJson1Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.valueFrom != null && { valueFrom: input.valueFrom }),
  };
};

const serializeAws_restJson1SecretList = (input: Secret[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Secret(entry, context);
    });
};

const serializeAws_restJson1ShareAttributes = (input: ShareAttributes, context: __SerdeContext): any => {
  return {
    ...(input.shareIdentifier != null && { shareIdentifier: input.shareIdentifier }),
    ...(input.weightFactor != null && { weightFactor: __serializeFloat(input.weightFactor) }),
  };
};

const serializeAws_restJson1ShareAttributesList = (input: ShareAttributes[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ShareAttributes(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagrisTagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Tmpfs = (input: Tmpfs, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.mountOptions != null && { mountOptions: serializeAws_restJson1StringList(input.mountOptions, context) }),
    ...(input.size != null && { size: input.size }),
  };
};

const serializeAws_restJson1TmpfsList = (input: Tmpfs[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tmpfs(entry, context);
    });
};

const serializeAws_restJson1Ulimit = (input: Ulimit, context: __SerdeContext): any => {
  return {
    ...(input.hardLimit != null && { hardLimit: input.hardLimit }),
    ...(input.name != null && { name: input.name }),
    ...(input.softLimit != null && { softLimit: input.softLimit }),
  };
};

const serializeAws_restJson1Ulimits = (input: Ulimit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Ulimit(entry, context);
    });
};

const serializeAws_restJson1UpdatePolicy = (input: UpdatePolicy, context: __SerdeContext): any => {
  return {
    ...(input.jobExecutionTimeoutMinutes != null && { jobExecutionTimeoutMinutes: input.jobExecutionTimeoutMinutes }),
    ...(input.terminateJobsOnUpdate != null && { terminateJobsOnUpdate: input.terminateJobsOnUpdate }),
  };
};

const serializeAws_restJson1Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.efsVolumeConfiguration != null && {
      efsVolumeConfiguration: serializeAws_restJson1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
    }),
    ...(input.host != null && { host: serializeAws_restJson1Host(input.host, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1Volumes = (input: Volume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ArrayPropertiesDetail = (output: any, context: __SerdeContext): ArrayPropertiesDetail => {
  return {
    index: __expectInt32(output.index),
    size: __expectInt32(output.size),
    statusSummary:
      output.statusSummary != null
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
      output.networkInterfaces != null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    reason: __expectString(output.reason),
    taskArn: __expectString(output.taskArn),
  } as any;
};

const deserializeAws_restJson1AttemptDetail = (output: any, context: __SerdeContext): AttemptDetail => {
  return {
    container:
      output.container != null ? deserializeAws_restJson1AttemptContainerDetail(output.container, context) : undefined,
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
      output.computeResources != null
        ? deserializeAws_restJson1ComputeResource(output.computeResources, context)
        : undefined,
    containerOrchestrationType: __expectString(output.containerOrchestrationType),
    ecsClusterArn: __expectString(output.ecsClusterArn),
    eksConfiguration:
      output.eksConfiguration != null
        ? deserializeAws_restJson1EksConfiguration(output.eksConfiguration, context)
        : undefined,
    serviceRole: __expectString(output.serviceRole),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    unmanagedvCpus: __expectInt32(output.unmanagedvCpus),
    updatePolicy:
      output.updatePolicy != null ? deserializeAws_restJson1UpdatePolicy(output.updatePolicy, context) : undefined,
    uuid: __expectString(output.uuid),
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
      output.ec2Configuration != null
        ? deserializeAws_restJson1Ec2ConfigurationList(output.ec2Configuration, context)
        : undefined,
    ec2KeyPair: __expectString(output.ec2KeyPair),
    imageId: __expectString(output.imageId),
    instanceRole: __expectString(output.instanceRole),
    instanceTypes:
      output.instanceTypes != null ? deserializeAws_restJson1StringList(output.instanceTypes, context) : undefined,
    launchTemplate:
      output.launchTemplate != null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxvCpus: __expectInt32(output.maxvCpus),
    minvCpus: __expectInt32(output.minvCpus),
    placementGroup: __expectString(output.placementGroup),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole: __expectString(output.spotIamFleetRole),
    subnets: output.subnets != null ? deserializeAws_restJson1StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ContainerDetail = (output: any, context: __SerdeContext): ContainerDetail => {
  return {
    command: output.command != null ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    containerInstanceArn: __expectString(output.containerInstanceArn),
    environment:
      output.environment != null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    exitCode: __expectInt32(output.exitCode),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters != null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration != null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    logStreamName: __expectString(output.logStreamName),
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints != null ? deserializeAws_restJson1MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces != null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    reason: __expectString(output.reason),
    resourceRequirements:
      output.resourceRequirements != null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets: output.secrets != null ? deserializeAws_restJson1SecretList(output.secrets, context) : undefined,
    taskArn: __expectString(output.taskArn),
    ulimits: output.ulimits != null ? deserializeAws_restJson1Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != null ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerProperties = (output: any, context: __SerdeContext): ContainerProperties => {
  return {
    command: output.command != null ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    environment:
      output.environment != null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters:
      output.linuxParameters != null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration != null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: __expectInt32(output.memory),
    mountPoints:
      output.mountPoints != null ? deserializeAws_restJson1MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    resourceRequirements:
      output.resourceRequirements != null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets: output.secrets != null ? deserializeAws_restJson1SecretList(output.secrets, context) : undefined,
    ulimits: output.ulimits != null ? deserializeAws_restJson1Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != null ? deserializeAws_restJson1Volumes(output.volumes, context) : undefined,
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
      output.permissions != null
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
    imageKubernetesVersion: __expectString(output.imageKubernetesVersion),
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
      output.authorizationConfig != null
        ? deserializeAws_restJson1EFSAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
    transitEncryption: __expectString(output.transitEncryption),
    transitEncryptionPort: __expectInt32(output.transitEncryptionPort),
  } as any;
};

const deserializeAws_restJson1EksAttemptContainerDetail = (
  output: any,
  context: __SerdeContext
): EksAttemptContainerDetail => {
  return {
    exitCode: __expectInt32(output.exitCode),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1EksAttemptContainerDetails = (
  output: any,
  context: __SerdeContext
): EksAttemptContainerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksAttemptContainerDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksAttemptDetail = (output: any, context: __SerdeContext): EksAttemptDetail => {
  return {
    containers:
      output.containers != null
        ? deserializeAws_restJson1EksAttemptContainerDetails(output.containers, context)
        : undefined,
    nodeName: __expectString(output.nodeName),
    podName: __expectString(output.podName),
    startedAt: __expectLong(output.startedAt),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

const deserializeAws_restJson1EksAttemptDetails = (output: any, context: __SerdeContext): EksAttemptDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksAttemptDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksConfiguration = (output: any, context: __SerdeContext): EksConfiguration => {
  return {
    eksClusterArn: __expectString(output.eksClusterArn),
    kubernetesNamespace: __expectString(output.kubernetesNamespace),
  } as any;
};

const deserializeAws_restJson1EksContainer = (output: any, context: __SerdeContext): EksContainer => {
  return {
    args: output.args != null ? deserializeAws_restJson1StringList(output.args, context) : undefined,
    command: output.command != null ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    env: output.env != null ? deserializeAws_restJson1EksContainerEnvironmentVariables(output.env, context) : undefined,
    image: __expectString(output.image),
    imagePullPolicy: __expectString(output.imagePullPolicy),
    name: __expectString(output.name),
    resources:
      output.resources != null
        ? deserializeAws_restJson1EksContainerResourceRequirements(output.resources, context)
        : undefined,
    securityContext:
      output.securityContext != null
        ? deserializeAws_restJson1EksContainerSecurityContext(output.securityContext, context)
        : undefined,
    volumeMounts:
      output.volumeMounts != null
        ? deserializeAws_restJson1EksContainerVolumeMounts(output.volumeMounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EksContainerDetail = (output: any, context: __SerdeContext): EksContainerDetail => {
  return {
    args: output.args != null ? deserializeAws_restJson1StringList(output.args, context) : undefined,
    command: output.command != null ? deserializeAws_restJson1StringList(output.command, context) : undefined,
    env: output.env != null ? deserializeAws_restJson1EksContainerEnvironmentVariables(output.env, context) : undefined,
    exitCode: __expectInt32(output.exitCode),
    image: __expectString(output.image),
    imagePullPolicy: __expectString(output.imagePullPolicy),
    name: __expectString(output.name),
    reason: __expectString(output.reason),
    resources:
      output.resources != null
        ? deserializeAws_restJson1EksContainerResourceRequirements(output.resources, context)
        : undefined,
    securityContext:
      output.securityContext != null
        ? deserializeAws_restJson1EksContainerSecurityContext(output.securityContext, context)
        : undefined,
    volumeMounts:
      output.volumeMounts != null
        ? deserializeAws_restJson1EksContainerVolumeMounts(output.volumeMounts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EksContainerDetails = (output: any, context: __SerdeContext): EksContainerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksContainerDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksContainerEnvironmentVariable = (
  output: any,
  context: __SerdeContext
): EksContainerEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1EksContainerEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): EksContainerEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksContainerEnvironmentVariable(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksContainerResourceRequirements = (
  output: any,
  context: __SerdeContext
): EksContainerResourceRequirements => {
  return {
    limits: output.limits != null ? deserializeAws_restJson1EksLimits(output.limits, context) : undefined,
    requests: output.requests != null ? deserializeAws_restJson1EksRequests(output.requests, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EksContainers = (output: any, context: __SerdeContext): EksContainer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksContainer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksContainerSecurityContext = (
  output: any,
  context: __SerdeContext
): EksContainerSecurityContext => {
  return {
    privileged: __expectBoolean(output.privileged),
    readOnlyRootFilesystem: __expectBoolean(output.readOnlyRootFilesystem),
    runAsGroup: __expectLong(output.runAsGroup),
    runAsNonRoot: __expectBoolean(output.runAsNonRoot),
    runAsUser: __expectLong(output.runAsUser),
  } as any;
};

const deserializeAws_restJson1EksContainerVolumeMount = (
  output: any,
  context: __SerdeContext
): EksContainerVolumeMount => {
  return {
    mountPath: __expectString(output.mountPath),
    name: __expectString(output.name),
    readOnly: __expectBoolean(output.readOnly),
  } as any;
};

const deserializeAws_restJson1EksContainerVolumeMounts = (
  output: any,
  context: __SerdeContext
): EksContainerVolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksContainerVolumeMount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EksEmptyDir = (output: any, context: __SerdeContext): EksEmptyDir => {
  return {
    medium: __expectString(output.medium),
    sizeLimit: __expectString(output.sizeLimit),
  } as any;
};

const deserializeAws_restJson1EksHostPath = (output: any, context: __SerdeContext): EksHostPath => {
  return {
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_restJson1EksLimits = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1EksPodProperties = (output: any, context: __SerdeContext): EksPodProperties => {
  return {
    containers:
      output.containers != null ? deserializeAws_restJson1EksContainers(output.containers, context) : undefined,
    dnsPolicy: __expectString(output.dnsPolicy),
    hostNetwork: __expectBoolean(output.hostNetwork),
    serviceAccountName: __expectString(output.serviceAccountName),
    volumes: output.volumes != null ? deserializeAws_restJson1EksVolumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EksPodPropertiesDetail = (
  output: any,
  context: __SerdeContext
): EksPodPropertiesDetail => {
  return {
    containers:
      output.containers != null ? deserializeAws_restJson1EksContainerDetails(output.containers, context) : undefined,
    dnsPolicy: __expectString(output.dnsPolicy),
    hostNetwork: __expectBoolean(output.hostNetwork),
    nodeName: __expectString(output.nodeName),
    podName: __expectString(output.podName),
    serviceAccountName: __expectString(output.serviceAccountName),
    volumes: output.volumes != null ? deserializeAws_restJson1EksVolumes(output.volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EksProperties = (output: any, context: __SerdeContext): EksProperties => {
  return {
    podProperties:
      output.podProperties != null
        ? deserializeAws_restJson1EksPodProperties(output.podProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EksPropertiesDetail = (output: any, context: __SerdeContext): EksPropertiesDetail => {
  return {
    podProperties:
      output.podProperties != null
        ? deserializeAws_restJson1EksPodPropertiesDetail(output.podProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EksRequests = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1EksSecret = (output: any, context: __SerdeContext): EksSecret => {
  return {
    optional: __expectBoolean(output.optional),
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1EksVolume = (output: any, context: __SerdeContext): EksVolume => {
  return {
    emptyDir: output.emptyDir != null ? deserializeAws_restJson1EksEmptyDir(output.emptyDir, context) : undefined,
    hostPath: output.hostPath != null ? deserializeAws_restJson1EksHostPath(output.hostPath, context) : undefined,
    name: __expectString(output.name),
    secret: output.secret != null ? deserializeAws_restJson1EksSecret(output.secret, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EksVolumes = (output: any, context: __SerdeContext): EksVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EksVolume(entry, context);
    });
  return retVal;
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
      output.shareDistribution != null
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
    containerOrchestrationType: __expectString(output.containerOrchestrationType),
    containerProperties:
      output.containerProperties != null
        ? deserializeAws_restJson1ContainerProperties(output.containerProperties, context)
        : undefined,
    eksProperties:
      output.eksProperties != null ? deserializeAws_restJson1EksProperties(output.eksProperties, context) : undefined,
    jobDefinitionArn: __expectString(output.jobDefinitionArn),
    jobDefinitionName: __expectString(output.jobDefinitionName),
    nodeProperties:
      output.nodeProperties != null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters != null ? deserializeAws_restJson1ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy != null ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context) : undefined,
    revision: __expectInt32(output.revision),
    schedulingPriority: __expectInt32(output.schedulingPriority),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != null ? deserializeAws_restJson1JobTimeout(output.timeout, context) : undefined,
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
      output.arrayProperties != null
        ? deserializeAws_restJson1ArrayPropertiesDetail(output.arrayProperties, context)
        : undefined,
    attempts: output.attempts != null ? deserializeAws_restJson1AttemptDetails(output.attempts, context) : undefined,
    container:
      output.container != null ? deserializeAws_restJson1ContainerDetail(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    dependsOn:
      output.dependsOn != null ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context) : undefined,
    eksAttempts:
      output.eksAttempts != null ? deserializeAws_restJson1EksAttemptDetails(output.eksAttempts, context) : undefined,
    eksProperties:
      output.eksProperties != null
        ? deserializeAws_restJson1EksPropertiesDetail(output.eksProperties, context)
        : undefined,
    isCancelled: __expectBoolean(output.isCancelled),
    isTerminated: __expectBoolean(output.isTerminated),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    jobQueue: __expectString(output.jobQueue),
    nodeDetails:
      output.nodeDetails != null ? deserializeAws_restJson1NodeDetails(output.nodeDetails, context) : undefined,
    nodeProperties:
      output.nodeProperties != null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters != null ? deserializeAws_restJson1ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy:
      output.retryStrategy != null ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context) : undefined,
    schedulingPriority: __expectInt32(output.schedulingPriority),
    shareIdentifier: __expectString(output.shareIdentifier),
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
    tags: output.tags != null ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != null ? deserializeAws_restJson1JobTimeout(output.timeout, context) : undefined,
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
      output.computeEnvironmentOrder != null
        ? deserializeAws_restJson1ComputeEnvironmentOrders(output.computeEnvironmentOrder, context)
        : undefined,
    jobQueueArn: __expectString(output.jobQueueArn),
    jobQueueName: __expectString(output.jobQueueName),
    priority: __expectInt32(output.priority),
    schedulingPolicyArn: __expectString(output.schedulingPolicyArn),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
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
      output.arrayProperties != null
        ? deserializeAws_restJson1ArrayPropertiesSummary(output.arrayProperties, context)
        : undefined,
    container:
      output.container != null ? deserializeAws_restJson1ContainerSummary(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    nodeProperties:
      output.nodeProperties != null
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
    devices: output.devices != null ? deserializeAws_restJson1DevicesList(output.devices, context) : undefined,
    initProcessEnabled: __expectBoolean(output.initProcessEnabled),
    maxSwap: __expectInt32(output.maxSwap),
    sharedMemorySize: __expectInt32(output.sharedMemorySize),
    swappiness: __expectInt32(output.swappiness),
    tmpfs: output.tmpfs != null ? deserializeAws_restJson1TmpfsList(output.tmpfs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: __expectString(output.logDriver),
    options:
      output.options != null ? deserializeAws_restJson1LogConfigurationOptionsMap(output.options, context) : undefined,
    secretOptions:
      output.secretOptions != null ? deserializeAws_restJson1SecretList(output.secretOptions, context) : undefined,
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
    acc[key] = __expectString(value) as any;
    return acc;
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
      output.nodeRangeProperties != null
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
      output.container != null ? deserializeAws_restJson1ContainerProperties(output.container, context) : undefined,
    targetNodes: __expectString(output.targetNodes),
  } as any;
};

const deserializeAws_restJson1ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
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
      output.evaluateOnExit != null
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
      output.fairsharePolicy != null
        ? deserializeAws_restJson1FairsharePolicy(output.fairsharePolicy, context)
        : undefined,
    name: __expectString(output.name),
    tags: output.tags != null ? deserializeAws_restJson1TagrisTagsMap(output.tags, context) : undefined,
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
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath: __expectString(output.containerPath),
    mountOptions:
      output.mountOptions != null ? deserializeAws_restJson1StringList(output.mountOptions, context) : undefined,
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
      output.efsVolumeConfiguration != null
        ? deserializeAws_restJson1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    host: output.host != null ? deserializeAws_restJson1Host(output.host, context) : undefined,
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
