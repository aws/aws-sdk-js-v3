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
  EksMetadata,
  EksPodProperties,
  EksPodPropertiesDetail,
  EksPodPropertiesOverride,
  EksProperties,
  EksPropertiesDetail,
  EksPropertiesOverride,
  EksSecret,
  EksVolume,
  EphemeralStorage,
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

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
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

/**
 * serializeAws_restJson1CreateComputeEnvironmentCommand
 */
export const se_CreateComputeEnvironmentCommand = async (
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
    ...(input.computeResources != null && { computeResources: se_ComputeResource(input.computeResources, context) }),
    ...(input.eksConfiguration != null && { eksConfiguration: se_EksConfiguration(input.eksConfiguration, context) }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.state != null && { state: input.state }),
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateJobQueueCommand
 */
export const se_CreateJobQueueCommand = async (
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
      computeEnvironmentOrder: se_ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
    }),
    ...(input.jobQueueName != null && { jobQueueName: input.jobQueueName }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.schedulingPolicyArn != null && { schedulingPolicyArn: input.schedulingPolicyArn }),
    ...(input.state != null && { state: input.state }),
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateSchedulingPolicyCommand
 */
export const se_CreateSchedulingPolicyCommand = async (
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
    ...(input.fairsharePolicy != null && { fairsharePolicy: se_FairsharePolicy(input.fairsharePolicy, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
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
 * serializeAws_restJson1DeleteComputeEnvironmentCommand
 */
export const se_DeleteComputeEnvironmentCommand = async (
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

/**
 * serializeAws_restJson1DeleteJobQueueCommand
 */
export const se_DeleteJobQueueCommand = async (
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

/**
 * serializeAws_restJson1DeleteSchedulingPolicyCommand
 */
export const se_DeleteSchedulingPolicyCommand = async (
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

/**
 * serializeAws_restJson1DeregisterJobDefinitionCommand
 */
export const se_DeregisterJobDefinitionCommand = async (
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

/**
 * serializeAws_restJson1DescribeComputeEnvironmentsCommand
 */
export const se_DescribeComputeEnvironmentsCommand = async (
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
      computeEnvironments: se_StringList(input.computeEnvironments, context),
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

/**
 * serializeAws_restJson1DescribeJobDefinitionsCommand
 */
export const se_DescribeJobDefinitionsCommand = async (
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
    ...(input.jobDefinitions != null && { jobDefinitions: se_StringList(input.jobDefinitions, context) }),
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

/**
 * serializeAws_restJson1DescribeJobQueuesCommand
 */
export const se_DescribeJobQueuesCommand = async (
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
    ...(input.jobQueues != null && { jobQueues: se_StringList(input.jobQueues, context) }),
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

/**
 * serializeAws_restJson1DescribeJobsCommand
 */
export const se_DescribeJobsCommand = async (
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
    ...(input.jobs != null && { jobs: se_StringList(input.jobs, context) }),
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
 * serializeAws_restJson1DescribeSchedulingPoliciesCommand
 */
export const se_DescribeSchedulingPoliciesCommand = async (
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
    ...(input.arns != null && { arns: se_StringList(input.arns, context) }),
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
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
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
    ...(input.filters != null && { filters: se_ListJobsFilterList(input.filters, context) }),
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

/**
 * serializeAws_restJson1ListSchedulingPoliciesCommand
 */
export const se_ListSchedulingPoliciesCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1RegisterJobDefinitionCommand
 */
export const se_RegisterJobDefinitionCommand = async (
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
      containerProperties: se_ContainerProperties(input.containerProperties, context),
    }),
    ...(input.eksProperties != null && { eksProperties: se_EksProperties(input.eksProperties, context) }),
    ...(input.jobDefinitionName != null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.nodeProperties != null && { nodeProperties: se_NodeProperties(input.nodeProperties, context) }),
    ...(input.parameters != null && { parameters: se_ParametersMap(input.parameters, context) }),
    ...(input.platformCapabilities != null && {
      platformCapabilities: se_PlatformCapabilityList(input.platformCapabilities, context),
    }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != null && { retryStrategy: se_RetryStrategy(input.retryStrategy, context) }),
    ...(input.schedulingPriority != null && { schedulingPriority: input.schedulingPriority }),
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != null && { timeout: se_JobTimeout(input.timeout, context) }),
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
 * serializeAws_restJson1SubmitJobCommand
 */
export const se_SubmitJobCommand = async (
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
    ...(input.arrayProperties != null && { arrayProperties: se_ArrayProperties(input.arrayProperties, context) }),
    ...(input.containerOverrides != null && {
      containerOverrides: se_ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.dependsOn != null && { dependsOn: se_JobDependencyList(input.dependsOn, context) }),
    ...(input.eksPropertiesOverride != null && {
      eksPropertiesOverride: se_EksPropertiesOverride(input.eksPropertiesOverride, context),
    }),
    ...(input.jobDefinition != null && { jobDefinition: input.jobDefinition }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobQueue != null && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides != null && { nodeOverrides: se_NodeOverrides(input.nodeOverrides, context) }),
    ...(input.parameters != null && { parameters: se_ParametersMap(input.parameters, context) }),
    ...(input.propagateTags != null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy != null && { retryStrategy: se_RetryStrategy(input.retryStrategy, context) }),
    ...(input.schedulingPriorityOverride != null && { schedulingPriorityOverride: input.schedulingPriorityOverride }),
    ...(input.shareIdentifier != null && { shareIdentifier: input.shareIdentifier }),
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
    ...(input.timeout != null && { timeout: se_JobTimeout(input.timeout, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagrisTagsMap(input.tags, context) }),
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
 * serializeAws_restJson1TerminateJobCommand
 */
export const se_TerminateJobCommand = async (
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateComputeEnvironmentCommand
 */
export const se_UpdateComputeEnvironmentCommand = async (
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
      computeResources: se_ComputeResourceUpdate(input.computeResources, context),
    }),
    ...(input.serviceRole != null && { serviceRole: input.serviceRole }),
    ...(input.state != null && { state: input.state }),
    ...(input.unmanagedvCpus != null && { unmanagedvCpus: input.unmanagedvCpus }),
    ...(input.updatePolicy != null && { updatePolicy: se_UpdatePolicy(input.updatePolicy, context) }),
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
 * serializeAws_restJson1UpdateJobQueueCommand
 */
export const se_UpdateJobQueueCommand = async (
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
      computeEnvironmentOrder: se_ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
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

/**
 * serializeAws_restJson1UpdateSchedulingPolicyCommand
 */
export const se_UpdateSchedulingPolicyCommand = async (
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
    ...(input.fairsharePolicy != null && { fairsharePolicy: se_FairsharePolicy(input.fairsharePolicy, context) }),
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
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelJobCommandError
 */
const de_CancelJobCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateComputeEnvironmentCommand
 */
export const de_CreateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateComputeEnvironmentCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateComputeEnvironmentCommandError
 */
const de_CreateComputeEnvironmentCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateJobQueueCommand
 */
export const de_CreateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateJobQueueCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateJobQueueCommandError
 */
const de_CreateJobQueueCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSchedulingPolicyCommand
 */
export const de_CreateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSchedulingPolicyCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateSchedulingPolicyCommandError
 */
const de_CreateSchedulingPolicyCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteComputeEnvironmentCommand
 */
export const de_DeleteComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteComputeEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComputeEnvironmentCommandError
 */
const de_DeleteComputeEnvironmentCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteJobQueueCommand
 */
export const de_DeleteJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteJobQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobQueueCommandError
 */
const de_DeleteJobQueueCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSchedulingPolicyCommand
 */
export const de_DeleteSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSchedulingPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSchedulingPolicyCommandError
 */
const de_DeleteSchedulingPolicyCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeregisterJobDefinitionCommand
 */
export const de_DeregisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterJobDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterJobDefinitionCommandError
 */
const de_DeregisterJobDefinitionCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeComputeEnvironmentsCommand
 */
export const de_DescribeComputeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeComputeEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.computeEnvironments != null) {
    contents.computeEnvironments = de_ComputeEnvironmentDetailList(data.computeEnvironments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeComputeEnvironmentsCommandError
 */
const de_DescribeComputeEnvironmentsCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobDefinitionsCommand
 */
export const de_DescribeJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobDefinitions != null) {
    contents.jobDefinitions = de_JobDefinitionList(data.jobDefinitions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobDefinitionsCommandError
 */
const de_DescribeJobDefinitionsCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobQueuesCommand
 */
export const de_DescribeJobQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobQueues != null) {
    contents.jobQueues = de_JobQueueDetailList(data.jobQueues, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobQueuesCommandError
 */
const de_DescribeJobQueuesCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobsCommand
 */
export const de_DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = de_JobDetailList(data.jobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobsCommandError
 */
const de_DescribeJobsCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSchedulingPoliciesCommand
 */
export const de_DescribeSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSchedulingPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.schedulingPolicies != null) {
    contents.schedulingPolicies = de_SchedulingPolicyDetailList(data.schedulingPolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSchedulingPoliciesCommandError
 */
const de_DescribeSchedulingPoliciesCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummaryList != null) {
    contents.jobSummaryList = de_JobSummaryList(data.jobSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSchedulingPoliciesCommand
 */
export const de_ListSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSchedulingPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.schedulingPolicies != null) {
    contents.schedulingPolicies = de_SchedulingPolicyListingDetailList(data.schedulingPolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSchedulingPoliciesCommandError
 */
const de_ListSchedulingPoliciesCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    contents.tags = de_TagrisTagsMap(data.tags, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterJobDefinitionCommand
 */
export const de_RegisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterJobDefinitionCommandError(output, context);
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

/**
 * deserializeAws_restJson1RegisterJobDefinitionCommandError
 */
const de_RegisterJobDefinitionCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SubmitJobCommand
 */
export const de_SubmitJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SubmitJobCommandError(output, context);
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

/**
 * deserializeAws_restJson1SubmitJobCommandError
 */
const de_SubmitJobCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TerminateJobCommand
 */
export const de_TerminateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TerminateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TerminateJobCommandError
 */
const de_TerminateJobCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateComputeEnvironmentCommand
 */
export const de_UpdateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateComputeEnvironmentCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdateComputeEnvironmentCommandError
 */
const de_UpdateComputeEnvironmentCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateJobQueueCommand
 */
export const de_UpdateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJobQueueCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdateJobQueueCommandError
 */
const de_UpdateJobQueueCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSchedulingPolicyCommand
 */
export const de_UpdateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSchedulingPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSchedulingPolicyCommandError
 */
const de_UpdateSchedulingPolicyCommandError = async (
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
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
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

/**
 * deserializeAws_restJson1ServerExceptionRes
 */
const de_ServerExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServerException> => {
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

/**
 * serializeAws_restJson1ArrayProperties
 */
const se_ArrayProperties = (input: ArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.size != null && { size: input.size }),
  };
};

/**
 * serializeAws_restJson1ComputeEnvironmentOrder
 */
const se_ComputeEnvironmentOrder = (input: ComputeEnvironmentOrder, context: __SerdeContext): any => {
  return {
    ...(input.computeEnvironment != null && { computeEnvironment: input.computeEnvironment }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1ComputeEnvironmentOrders
 */
const se_ComputeEnvironmentOrders = (input: ComputeEnvironmentOrder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComputeEnvironmentOrder(entry, context);
    });
};

/**
 * serializeAws_restJson1ComputeResource
 */
const se_ComputeResource = (input: ComputeResource, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy != null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != null && {
      ec2Configuration: se_Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != null && { imageId: input.imageId }),
    ...(input.instanceRole != null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != null && { instanceTypes: se_StringList(input.instanceTypes, context) }),
    ...(input.launchTemplate != null && {
      launchTemplate: se_LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_StringList(input.securityGroupIds, context) }),
    ...(input.spotIamFleetRole != null && { spotIamFleetRole: input.spotIamFleetRole }),
    ...(input.subnets != null && { subnets: se_StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1ComputeResourceUpdate
 */
const se_ComputeResourceUpdate = (input: ComputeResourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.allocationStrategy != null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage != null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus != null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration != null && {
      ec2Configuration: se_Ec2ConfigurationList(input.ec2Configuration, context),
    }),
    ...(input.ec2KeyPair != null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId != null && { imageId: input.imageId }),
    ...(input.instanceRole != null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes != null && { instanceTypes: se_StringList(input.instanceTypes, context) }),
    ...(input.launchTemplate != null && {
      launchTemplate: se_LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxvCpus != null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus != null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup != null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_StringList(input.securityGroupIds, context) }),
    ...(input.subnets != null && { subnets: se_StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.updateToLatestImageVersion != null && { updateToLatestImageVersion: input.updateToLatestImageVersion }),
  };
};

/**
 * serializeAws_restJson1ContainerOverrides
 */
const se_ContainerOverrides = (input: ContainerOverrides, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.environment != null && { environment: se_EnvironmentVariables(input.environment, context) }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: se_ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.vcpus != null && { vcpus: input.vcpus }),
  };
};

/**
 * serializeAws_restJson1ContainerProperties
 */
const se_ContainerProperties = (input: ContainerProperties, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.environment != null && { environment: se_EnvironmentVariables(input.environment, context) }),
    ...(input.ephemeralStorage != null && { ephemeralStorage: se_EphemeralStorage(input.ephemeralStorage, context) }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.fargatePlatformConfiguration != null && {
      fargatePlatformConfiguration: se_FargatePlatformConfiguration(input.fargatePlatformConfiguration, context),
    }),
    ...(input.image != null && { image: input.image }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.jobRoleArn != null && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters != null && { linuxParameters: se_LinuxParameters(input.linuxParameters, context) }),
    ...(input.logConfiguration != null && { logConfiguration: se_LogConfiguration(input.logConfiguration, context) }),
    ...(input.memory != null && { memory: input.memory }),
    ...(input.mountPoints != null && { mountPoints: se_MountPoints(input.mountPoints, context) }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: se_NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.privileged != null && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem != null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.resourceRequirements != null && {
      resourceRequirements: se_ResourceRequirements(input.resourceRequirements, context),
    }),
    ...(input.secrets != null && { secrets: se_SecretList(input.secrets, context) }),
    ...(input.ulimits != null && { ulimits: se_Ulimits(input.ulimits, context) }),
    ...(input.user != null && { user: input.user }),
    ...(input.vcpus != null && { vcpus: input.vcpus }),
    ...(input.volumes != null && { volumes: se_Volumes(input.volumes, context) }),
  };
};

/**
 * serializeAws_restJson1Device
 */
const se_Device = (input: Device, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.hostPath != null && { hostPath: input.hostPath }),
    ...(input.permissions != null && { permissions: se_DeviceCgroupPermissions(input.permissions, context) }),
  };
};

/**
 * serializeAws_restJson1DeviceCgroupPermissions
 */
const se_DeviceCgroupPermissions = (input: (DeviceCgroupPermission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DevicesList
 */
const se_DevicesList = (input: Device[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Device(entry, context);
    });
};

/**
 * serializeAws_restJson1Ec2Configuration
 */
const se_Ec2Configuration = (input: Ec2Configuration, context: __SerdeContext): any => {
  return {
    ...(input.imageIdOverride != null && { imageIdOverride: input.imageIdOverride }),
    ...(input.imageKubernetesVersion != null && { imageKubernetesVersion: input.imageKubernetesVersion }),
    ...(input.imageType != null && { imageType: input.imageType }),
  };
};

/**
 * serializeAws_restJson1Ec2ConfigurationList
 */
const se_Ec2ConfigurationList = (input: Ec2Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Ec2Configuration(entry, context);
    });
};

/**
 * serializeAws_restJson1EFSAuthorizationConfig
 */
const se_EFSAuthorizationConfig = (input: EFSAuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.accessPointId != null && { accessPointId: input.accessPointId }),
    ...(input.iam != null && { iam: input.iam }),
  };
};

/**
 * serializeAws_restJson1EFSVolumeConfiguration
 */
const se_EFSVolumeConfiguration = (input: EFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: se_EFSAuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.fileSystemId != null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory != null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption != null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort != null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};

/**
 * serializeAws_restJson1EksConfiguration
 */
const se_EksConfiguration = (input: EksConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.eksClusterArn != null && { eksClusterArn: input.eksClusterArn }),
    ...(input.kubernetesNamespace != null && { kubernetesNamespace: input.kubernetesNamespace }),
  };
};

/**
 * serializeAws_restJson1EksContainer
 */
const se_EksContainer = (input: EksContainer, context: __SerdeContext): any => {
  return {
    ...(input.args != null && { args: se_StringList(input.args, context) }),
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.env != null && { env: se_EksContainerEnvironmentVariables(input.env, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.imagePullPolicy != null && { imagePullPolicy: input.imagePullPolicy }),
    ...(input.name != null && { name: input.name }),
    ...(input.resources != null && { resources: se_EksContainerResourceRequirements(input.resources, context) }),
    ...(input.securityContext != null && {
      securityContext: se_EksContainerSecurityContext(input.securityContext, context),
    }),
    ...(input.volumeMounts != null && { volumeMounts: se_EksContainerVolumeMounts(input.volumeMounts, context) }),
  };
};

/**
 * serializeAws_restJson1EksContainerEnvironmentVariable
 */
const se_EksContainerEnvironmentVariable = (input: EksContainerEnvironmentVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1EksContainerEnvironmentVariables
 */
const se_EksContainerEnvironmentVariables = (
  input: EksContainerEnvironmentVariable[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksContainerEnvironmentVariable(entry, context);
    });
};

/**
 * serializeAws_restJson1EksContainerOverride
 */
const se_EksContainerOverride = (input: EksContainerOverride, context: __SerdeContext): any => {
  return {
    ...(input.args != null && { args: se_StringList(input.args, context) }),
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.env != null && { env: se_EksContainerEnvironmentVariables(input.env, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.resources != null && { resources: se_EksContainerResourceRequirements(input.resources, context) }),
  };
};

/**
 * serializeAws_restJson1EksContainerOverrideList
 */
const se_EksContainerOverrideList = (input: EksContainerOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksContainerOverride(entry, context);
    });
};

/**
 * serializeAws_restJson1EksContainerResourceRequirements
 */
const se_EksContainerResourceRequirements = (input: EksContainerResourceRequirements, context: __SerdeContext): any => {
  return {
    ...(input.limits != null && { limits: se_EksLimits(input.limits, context) }),
    ...(input.requests != null && { requests: se_EksRequests(input.requests, context) }),
  };
};

/**
 * serializeAws_restJson1EksContainers
 */
const se_EksContainers = (input: EksContainer[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksContainer(entry, context);
    });
};

/**
 * serializeAws_restJson1EksContainerSecurityContext
 */
const se_EksContainerSecurityContext = (input: EksContainerSecurityContext, context: __SerdeContext): any => {
  return {
    ...(input.privileged != null && { privileged: input.privileged }),
    ...(input.readOnlyRootFilesystem != null && { readOnlyRootFilesystem: input.readOnlyRootFilesystem }),
    ...(input.runAsGroup != null && { runAsGroup: input.runAsGroup }),
    ...(input.runAsNonRoot != null && { runAsNonRoot: input.runAsNonRoot }),
    ...(input.runAsUser != null && { runAsUser: input.runAsUser }),
  };
};

/**
 * serializeAws_restJson1EksContainerVolumeMount
 */
const se_EksContainerVolumeMount = (input: EksContainerVolumeMount, context: __SerdeContext): any => {
  return {
    ...(input.mountPath != null && { mountPath: input.mountPath }),
    ...(input.name != null && { name: input.name }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
  };
};

/**
 * serializeAws_restJson1EksContainerVolumeMounts
 */
const se_EksContainerVolumeMounts = (input: EksContainerVolumeMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksContainerVolumeMount(entry, context);
    });
};

/**
 * serializeAws_restJson1EksEmptyDir
 */
const se_EksEmptyDir = (input: EksEmptyDir, context: __SerdeContext): any => {
  return {
    ...(input.medium != null && { medium: input.medium }),
    ...(input.sizeLimit != null && { sizeLimit: input.sizeLimit }),
  };
};

/**
 * serializeAws_restJson1EksHostPath
 */
const se_EksHostPath = (input: EksHostPath, context: __SerdeContext): any => {
  return {
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_restJson1EksLabelsMap
 */
const se_EksLabelsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EksLimits
 */
const se_EksLimits = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EksMetadata
 */
const se_EksMetadata = (input: EksMetadata, context: __SerdeContext): any => {
  return {
    ...(input.labels != null && { labels: se_EksLabelsMap(input.labels, context) }),
  };
};

/**
 * serializeAws_restJson1EksPodProperties
 */
const se_EksPodProperties = (input: EksPodProperties, context: __SerdeContext): any => {
  return {
    ...(input.containers != null && { containers: se_EksContainers(input.containers, context) }),
    ...(input.dnsPolicy != null && { dnsPolicy: input.dnsPolicy }),
    ...(input.hostNetwork != null && { hostNetwork: input.hostNetwork }),
    ...(input.metadata != null && { metadata: se_EksMetadata(input.metadata, context) }),
    ...(input.serviceAccountName != null && { serviceAccountName: input.serviceAccountName }),
    ...(input.volumes != null && { volumes: se_EksVolumes(input.volumes, context) }),
  };
};

/**
 * serializeAws_restJson1EksPodPropertiesOverride
 */
const se_EksPodPropertiesOverride = (input: EksPodPropertiesOverride, context: __SerdeContext): any => {
  return {
    ...(input.containers != null && { containers: se_EksContainerOverrideList(input.containers, context) }),
    ...(input.metadata != null && { metadata: se_EksMetadata(input.metadata, context) }),
  };
};

/**
 * serializeAws_restJson1EksProperties
 */
const se_EksProperties = (input: EksProperties, context: __SerdeContext): any => {
  return {
    ...(input.podProperties != null && { podProperties: se_EksPodProperties(input.podProperties, context) }),
  };
};

/**
 * serializeAws_restJson1EksPropertiesOverride
 */
const se_EksPropertiesOverride = (input: EksPropertiesOverride, context: __SerdeContext): any => {
  return {
    ...(input.podProperties != null && { podProperties: se_EksPodPropertiesOverride(input.podProperties, context) }),
  };
};

/**
 * serializeAws_restJson1EksRequests
 */
const se_EksRequests = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EksSecret
 */
const se_EksSecret = (input: EksSecret, context: __SerdeContext): any => {
  return {
    ...(input.optional != null && { optional: input.optional }),
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

/**
 * serializeAws_restJson1EksVolume
 */
const se_EksVolume = (input: EksVolume, context: __SerdeContext): any => {
  return {
    ...(input.emptyDir != null && { emptyDir: se_EksEmptyDir(input.emptyDir, context) }),
    ...(input.hostPath != null && { hostPath: se_EksHostPath(input.hostPath, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.secret != null && { secret: se_EksSecret(input.secret, context) }),
  };
};

/**
 * serializeAws_restJson1EksVolumes
 */
const se_EksVolumes = (input: EksVolume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksVolume(entry, context);
    });
};

/**
 * serializeAws_restJson1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: KeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeyValuePair(entry, context);
    });
};

/**
 * serializeAws_restJson1EphemeralStorage
 */
const se_EphemeralStorage = (input: EphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.sizeInGiB != null && { sizeInGiB: input.sizeInGiB }),
  };
};

/**
 * serializeAws_restJson1EvaluateOnExit
 */
const se_EvaluateOnExit = (input: EvaluateOnExit, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.onExitCode != null && { onExitCode: input.onExitCode }),
    ...(input.onReason != null && { onReason: input.onReason }),
    ...(input.onStatusReason != null && { onStatusReason: input.onStatusReason }),
  };
};

/**
 * serializeAws_restJson1EvaluateOnExitList
 */
const se_EvaluateOnExitList = (input: EvaluateOnExit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EvaluateOnExit(entry, context);
    });
};

/**
 * serializeAws_restJson1FairsharePolicy
 */
const se_FairsharePolicy = (input: FairsharePolicy, context: __SerdeContext): any => {
  return {
    ...(input.computeReservation != null && { computeReservation: input.computeReservation }),
    ...(input.shareDecaySeconds != null && { shareDecaySeconds: input.shareDecaySeconds }),
    ...(input.shareDistribution != null && {
      shareDistribution: se_ShareAttributesList(input.shareDistribution, context),
    }),
  };
};

/**
 * serializeAws_restJson1FargatePlatformConfiguration
 */
const se_FargatePlatformConfiguration = (input: FargatePlatformConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.platformVersion != null && { platformVersion: input.platformVersion }),
  };
};

/**
 * serializeAws_restJson1Host
 */
const se_Host = (input: Host, context: __SerdeContext): any => {
  return {
    ...(input.sourcePath != null && { sourcePath: input.sourcePath }),
  };
};

/**
 * serializeAws_restJson1JobDependency
 */
const se_JobDependency = (input: JobDependency, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1JobDependencyList
 */
const se_JobDependencyList = (input: JobDependency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobDependency(entry, context);
    });
};

/**
 * serializeAws_restJson1JobTimeout
 */
const se_JobTimeout = (input: JobTimeout, context: __SerdeContext): any => {
  return {
    ...(input.attemptDurationSeconds != null && { attemptDurationSeconds: input.attemptDurationSeconds }),
  };
};

/**
 * serializeAws_restJson1KeyValuePair
 */
const se_KeyValuePair = (input: KeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1KeyValuesPair
 */
const se_KeyValuesPair = (input: KeyValuesPair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_StringList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1LaunchTemplateSpecification
 */
const se_LaunchTemplateSpecification = (input: LaunchTemplateSpecification, context: __SerdeContext): any => {
  return {
    ...(input.launchTemplateId != null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName != null && { launchTemplateName: input.launchTemplateName }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1LinuxParameters
 */
const se_LinuxParameters = (input: LinuxParameters, context: __SerdeContext): any => {
  return {
    ...(input.devices != null && { devices: se_DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled != null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap != null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize != null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness != null && { swappiness: input.swappiness }),
    ...(input.tmpfs != null && { tmpfs: se_TmpfsList(input.tmpfs, context) }),
  };
};

/**
 * serializeAws_restJson1ListJobsFilterList
 */
const se_ListJobsFilterList = (input: KeyValuesPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeyValuesPair(entry, context);
    });
};

/**
 * serializeAws_restJson1LogConfiguration
 */
const se_LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.logDriver != null && { logDriver: input.logDriver }),
    ...(input.options != null && { options: se_LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions != null && { secretOptions: se_SecretList(input.secretOptions, context) }),
  };
};

/**
 * serializeAws_restJson1LogConfigurationOptionsMap
 */
const se_LogConfigurationOptionsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MountPoint
 */
const se_MountPoint = (input: MountPoint, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
    ...(input.sourceVolume != null && { sourceVolume: input.sourceVolume }),
  };
};

/**
 * serializeAws_restJson1MountPoints
 */
const se_MountPoints = (input: MountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MountPoint(entry, context);
    });
};

/**
 * serializeAws_restJson1NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp != null && { assignPublicIp: input.assignPublicIp }),
  };
};

/**
 * serializeAws_restJson1NodeOverrides
 */
const se_NodeOverrides = (input: NodeOverrides, context: __SerdeContext): any => {
  return {
    ...(input.nodePropertyOverrides != null && {
      nodePropertyOverrides: se_NodePropertyOverrides(input.nodePropertyOverrides, context),
    }),
    ...(input.numNodes != null && { numNodes: input.numNodes }),
  };
};

/**
 * serializeAws_restJson1NodeProperties
 */
const se_NodeProperties = (input: NodeProperties, context: __SerdeContext): any => {
  return {
    ...(input.mainNode != null && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties != null && {
      nodeRangeProperties: se_NodeRangeProperties(input.nodeRangeProperties, context),
    }),
    ...(input.numNodes != null && { numNodes: input.numNodes }),
  };
};

/**
 * serializeAws_restJson1NodePropertyOverride
 */
const se_NodePropertyOverride = (input: NodePropertyOverride, context: __SerdeContext): any => {
  return {
    ...(input.containerOverrides != null && {
      containerOverrides: se_ContainerOverrides(input.containerOverrides, context),
    }),
    ...(input.targetNodes != null && { targetNodes: input.targetNodes }),
  };
};

/**
 * serializeAws_restJson1NodePropertyOverrides
 */
const se_NodePropertyOverrides = (input: NodePropertyOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NodePropertyOverride(entry, context);
    });
};

/**
 * serializeAws_restJson1NodeRangeProperties
 */
const se_NodeRangeProperties = (input: NodeRangeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NodeRangeProperty(entry, context);
    });
};

/**
 * serializeAws_restJson1NodeRangeProperty
 */
const se_NodeRangeProperty = (input: NodeRangeProperty, context: __SerdeContext): any => {
  return {
    ...(input.container != null && { container: se_ContainerProperties(input.container, context) }),
    ...(input.targetNodes != null && { targetNodes: input.targetNodes }),
  };
};

/**
 * serializeAws_restJson1ParametersMap
 */
const se_ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PlatformCapabilityList
 */
const se_PlatformCapabilityList = (input: (PlatformCapability | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceRequirement
 */
const se_ResourceRequirement = (input: ResourceRequirement, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1ResourceRequirements
 */
const se_ResourceRequirements = (input: ResourceRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceRequirement(entry, context);
    });
};

/**
 * serializeAws_restJson1RetryStrategy
 */
const se_RetryStrategy = (input: RetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.attempts != null && { attempts: input.attempts }),
    ...(input.evaluateOnExit != null && { evaluateOnExit: se_EvaluateOnExitList(input.evaluateOnExit, context) }),
  };
};

/**
 * serializeAws_restJson1Secret
 */
const se_Secret = (input: Secret, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.valueFrom != null && { valueFrom: input.valueFrom }),
  };
};

/**
 * serializeAws_restJson1SecretList
 */
const se_SecretList = (input: Secret[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Secret(entry, context);
    });
};

/**
 * serializeAws_restJson1ShareAttributes
 */
const se_ShareAttributes = (input: ShareAttributes, context: __SerdeContext): any => {
  return {
    ...(input.shareIdentifier != null && { shareIdentifier: input.shareIdentifier }),
    ...(input.weightFactor != null && { weightFactor: __serializeFloat(input.weightFactor) }),
  };
};

/**
 * serializeAws_restJson1ShareAttributesList
 */
const se_ShareAttributesList = (input: ShareAttributes[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ShareAttributes(entry, context);
    });
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagrisTagsMap
 */
const se_TagrisTagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Tmpfs
 */
const se_Tmpfs = (input: Tmpfs, context: __SerdeContext): any => {
  return {
    ...(input.containerPath != null && { containerPath: input.containerPath }),
    ...(input.mountOptions != null && { mountOptions: se_StringList(input.mountOptions, context) }),
    ...(input.size != null && { size: input.size }),
  };
};

/**
 * serializeAws_restJson1TmpfsList
 */
const se_TmpfsList = (input: Tmpfs[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tmpfs(entry, context);
    });
};

/**
 * serializeAws_restJson1Ulimit
 */
const se_Ulimit = (input: Ulimit, context: __SerdeContext): any => {
  return {
    ...(input.hardLimit != null && { hardLimit: input.hardLimit }),
    ...(input.name != null && { name: input.name }),
    ...(input.softLimit != null && { softLimit: input.softLimit }),
  };
};

/**
 * serializeAws_restJson1Ulimits
 */
const se_Ulimits = (input: Ulimit[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Ulimit(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdatePolicy
 */
const se_UpdatePolicy = (input: UpdatePolicy, context: __SerdeContext): any => {
  return {
    ...(input.jobExecutionTimeoutMinutes != null && { jobExecutionTimeoutMinutes: input.jobExecutionTimeoutMinutes }),
    ...(input.terminateJobsOnUpdate != null && { terminateJobsOnUpdate: input.terminateJobsOnUpdate }),
  };
};

/**
 * serializeAws_restJson1Volume
 */
const se_Volume = (input: Volume, context: __SerdeContext): any => {
  return {
    ...(input.efsVolumeConfiguration != null && {
      efsVolumeConfiguration: se_EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
    }),
    ...(input.host != null && { host: se_Host(input.host, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1Volumes
 */
const se_Volumes = (input: Volume[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Volume(entry, context);
    });
};

/**
 * deserializeAws_restJson1ArrayJobStatusSummary
 */
const de_ArrayJobStatusSummary = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ArrayPropertiesDetail
 */
const de_ArrayPropertiesDetail = (output: any, context: __SerdeContext): ArrayPropertiesDetail => {
  return {
    index: __expectInt32(output.index),
    size: __expectInt32(output.size),
    statusSummary: output.statusSummary != null ? de_ArrayJobStatusSummary(output.statusSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArrayPropertiesSummary
 */
const de_ArrayPropertiesSummary = (output: any, context: __SerdeContext): ArrayPropertiesSummary => {
  return {
    index: __expectInt32(output.index),
    size: __expectInt32(output.size),
  } as any;
};

/**
 * deserializeAws_restJson1AttemptContainerDetail
 */
const de_AttemptContainerDetail = (output: any, context: __SerdeContext): AttemptContainerDetail => {
  return {
    containerInstanceArn: __expectString(output.containerInstanceArn),
    exitCode: __expectInt32(output.exitCode),
    logStreamName: __expectString(output.logStreamName),
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaceList(output.networkInterfaces, context) : undefined,
    reason: __expectString(output.reason),
    taskArn: __expectString(output.taskArn),
  } as any;
};

/**
 * deserializeAws_restJson1AttemptDetail
 */
const de_AttemptDetail = (output: any, context: __SerdeContext): AttemptDetail => {
  return {
    container: output.container != null ? de_AttemptContainerDetail(output.container, context) : undefined,
    startedAt: __expectLong(output.startedAt),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

/**
 * deserializeAws_restJson1AttemptDetails
 */
const de_AttemptDetails = (output: any, context: __SerdeContext): AttemptDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttemptDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComputeEnvironmentDetail
 */
const de_ComputeEnvironmentDetail = (output: any, context: __SerdeContext): ComputeEnvironmentDetail => {
  return {
    computeEnvironmentArn: __expectString(output.computeEnvironmentArn),
    computeEnvironmentName: __expectString(output.computeEnvironmentName),
    computeResources:
      output.computeResources != null ? de_ComputeResource(output.computeResources, context) : undefined,
    containerOrchestrationType: __expectString(output.containerOrchestrationType),
    ecsClusterArn: __expectString(output.ecsClusterArn),
    eksConfiguration:
      output.eksConfiguration != null ? de_EksConfiguration(output.eksConfiguration, context) : undefined,
    serviceRole: __expectString(output.serviceRole),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? de_TagrisTagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    unmanagedvCpus: __expectInt32(output.unmanagedvCpus),
    updatePolicy: output.updatePolicy != null ? de_UpdatePolicy(output.updatePolicy, context) : undefined,
    uuid: __expectString(output.uuid),
  } as any;
};

/**
 * deserializeAws_restJson1ComputeEnvironmentDetailList
 */
const de_ComputeEnvironmentDetailList = (output: any, context: __SerdeContext): ComputeEnvironmentDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComputeEnvironmentDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComputeEnvironmentOrder
 */
const de_ComputeEnvironmentOrder = (output: any, context: __SerdeContext): ComputeEnvironmentOrder => {
  return {
    computeEnvironment: __expectString(output.computeEnvironment),
    order: __expectInt32(output.order),
  } as any;
};

/**
 * deserializeAws_restJson1ComputeEnvironmentOrders
 */
const de_ComputeEnvironmentOrders = (output: any, context: __SerdeContext): ComputeEnvironmentOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComputeEnvironmentOrder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComputeResource
 */
const de_ComputeResource = (output: any, context: __SerdeContext): ComputeResource => {
  return {
    allocationStrategy: __expectString(output.allocationStrategy),
    bidPercentage: __expectInt32(output.bidPercentage),
    desiredvCpus: __expectInt32(output.desiredvCpus),
    ec2Configuration:
      output.ec2Configuration != null ? de_Ec2ConfigurationList(output.ec2Configuration, context) : undefined,
    ec2KeyPair: __expectString(output.ec2KeyPair),
    imageId: __expectString(output.imageId),
    instanceRole: __expectString(output.instanceRole),
    instanceTypes: output.instanceTypes != null ? de_StringList(output.instanceTypes, context) : undefined,
    launchTemplate:
      output.launchTemplate != null ? de_LaunchTemplateSpecification(output.launchTemplate, context) : undefined,
    maxvCpus: __expectInt32(output.maxvCpus),
    minvCpus: __expectInt32(output.minvCpus),
    placementGroup: __expectString(output.placementGroup),
    securityGroupIds: output.securityGroupIds != null ? de_StringList(output.securityGroupIds, context) : undefined,
    spotIamFleetRole: __expectString(output.spotIamFleetRole),
    subnets: output.subnets != null ? de_StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ContainerDetail
 */
const de_ContainerDetail = (output: any, context: __SerdeContext): ContainerDetail => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    containerInstanceArn: __expectString(output.containerInstanceArn),
    environment: output.environment != null ? de_EnvironmentVariables(output.environment, context) : undefined,
    ephemeralStorage:
      output.ephemeralStorage != null ? de_EphemeralStorage(output.ephemeralStorage, context) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    exitCode: __expectInt32(output.exitCode),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != null
        ? de_FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters: output.linuxParameters != null ? de_LinuxParameters(output.linuxParameters, context) : undefined,
    logConfiguration:
      output.logConfiguration != null ? de_LogConfiguration(output.logConfiguration, context) : undefined,
    logStreamName: __expectString(output.logStreamName),
    memory: __expectInt32(output.memory),
    mountPoints: output.mountPoints != null ? de_MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null ? de_NetworkConfiguration(output.networkConfiguration, context) : undefined,
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaceList(output.networkInterfaces, context) : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    reason: __expectString(output.reason),
    resourceRequirements:
      output.resourceRequirements != null ? de_ResourceRequirements(output.resourceRequirements, context) : undefined,
    secrets: output.secrets != null ? de_SecretList(output.secrets, context) : undefined,
    taskArn: __expectString(output.taskArn),
    ulimits: output.ulimits != null ? de_Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != null ? de_Volumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerProperties
 */
const de_ContainerProperties = (output: any, context: __SerdeContext): ContainerProperties => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    environment: output.environment != null ? de_EnvironmentVariables(output.environment, context) : undefined,
    ephemeralStorage:
      output.ephemeralStorage != null ? de_EphemeralStorage(output.ephemeralStorage, context) : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration != null
        ? de_FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: __expectString(output.image),
    instanceType: __expectString(output.instanceType),
    jobRoleArn: __expectString(output.jobRoleArn),
    linuxParameters: output.linuxParameters != null ? de_LinuxParameters(output.linuxParameters, context) : undefined,
    logConfiguration:
      output.logConfiguration != null ? de_LogConfiguration(output.logConfiguration, context) : undefined,
    memory: __expectInt32(output.memory),
    mountPoints: output.mountPoints != null ? de_MountPoints(output.mountPoints, context) : undefined,
    networkConfiguration:
      output.networkConfiguration != null ? de_NetworkConfiguration(output.networkConfiguration, context) : undefined,
    privileged: __expectBoolean(output.privileged),
    readonlyRootFilesystem: __expectBoolean(output.readonlyRootFilesystem),
    resourceRequirements:
      output.resourceRequirements != null ? de_ResourceRequirements(output.resourceRequirements, context) : undefined,
    secrets: output.secrets != null ? de_SecretList(output.secrets, context) : undefined,
    ulimits: output.ulimits != null ? de_Ulimits(output.ulimits, context) : undefined,
    user: __expectString(output.user),
    vcpus: __expectInt32(output.vcpus),
    volumes: output.volumes != null ? de_Volumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerSummary
 */
const de_ContainerSummary = (output: any, context: __SerdeContext): ContainerSummary => {
  return {
    exitCode: __expectInt32(output.exitCode),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    containerPath: __expectString(output.containerPath),
    hostPath: __expectString(output.hostPath),
    permissions: output.permissions != null ? de_DeviceCgroupPermissions(output.permissions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DeviceCgroupPermissions
 */
const de_DeviceCgroupPermissions = (output: any, context: __SerdeContext): (DeviceCgroupPermission | string)[] => {
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
 * deserializeAws_restJson1DevicesList
 */
const de_DevicesList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Ec2Configuration
 */
const de_Ec2Configuration = (output: any, context: __SerdeContext): Ec2Configuration => {
  return {
    imageIdOverride: __expectString(output.imageIdOverride),
    imageKubernetesVersion: __expectString(output.imageKubernetesVersion),
    imageType: __expectString(output.imageType),
  } as any;
};

/**
 * deserializeAws_restJson1Ec2ConfigurationList
 */
const de_Ec2ConfigurationList = (output: any, context: __SerdeContext): Ec2Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ec2Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EFSAuthorizationConfig
 */
const de_EFSAuthorizationConfig = (output: any, context: __SerdeContext): EFSAuthorizationConfig => {
  return {
    accessPointId: __expectString(output.accessPointId),
    iam: __expectString(output.iam),
  } as any;
};

/**
 * deserializeAws_restJson1EFSVolumeConfiguration
 */
const de_EFSVolumeConfiguration = (output: any, context: __SerdeContext): EFSVolumeConfiguration => {
  return {
    authorizationConfig:
      output.authorizationConfig != null ? de_EFSAuthorizationConfig(output.authorizationConfig, context) : undefined,
    fileSystemId: __expectString(output.fileSystemId),
    rootDirectory: __expectString(output.rootDirectory),
    transitEncryption: __expectString(output.transitEncryption),
    transitEncryptionPort: __expectInt32(output.transitEncryptionPort),
  } as any;
};

/**
 * deserializeAws_restJson1EksAttemptContainerDetail
 */
const de_EksAttemptContainerDetail = (output: any, context: __SerdeContext): EksAttemptContainerDetail => {
  return {
    exitCode: __expectInt32(output.exitCode),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1EksAttemptContainerDetails
 */
const de_EksAttemptContainerDetails = (output: any, context: __SerdeContext): EksAttemptContainerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksAttemptContainerDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksAttemptDetail
 */
const de_EksAttemptDetail = (output: any, context: __SerdeContext): EksAttemptDetail => {
  return {
    containers: output.containers != null ? de_EksAttemptContainerDetails(output.containers, context) : undefined,
    nodeName: __expectString(output.nodeName),
    podName: __expectString(output.podName),
    startedAt: __expectLong(output.startedAt),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

/**
 * deserializeAws_restJson1EksAttemptDetails
 */
const de_EksAttemptDetails = (output: any, context: __SerdeContext): EksAttemptDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksAttemptDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksConfiguration
 */
const de_EksConfiguration = (output: any, context: __SerdeContext): EksConfiguration => {
  return {
    eksClusterArn: __expectString(output.eksClusterArn),
    kubernetesNamespace: __expectString(output.kubernetesNamespace),
  } as any;
};

/**
 * deserializeAws_restJson1EksContainer
 */
const de_EksContainer = (output: any, context: __SerdeContext): EksContainer => {
  return {
    args: output.args != null ? de_StringList(output.args, context) : undefined,
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    env: output.env != null ? de_EksContainerEnvironmentVariables(output.env, context) : undefined,
    image: __expectString(output.image),
    imagePullPolicy: __expectString(output.imagePullPolicy),
    name: __expectString(output.name),
    resources: output.resources != null ? de_EksContainerResourceRequirements(output.resources, context) : undefined,
    securityContext:
      output.securityContext != null ? de_EksContainerSecurityContext(output.securityContext, context) : undefined,
    volumeMounts: output.volumeMounts != null ? de_EksContainerVolumeMounts(output.volumeMounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksContainerDetail
 */
const de_EksContainerDetail = (output: any, context: __SerdeContext): EksContainerDetail => {
  return {
    args: output.args != null ? de_StringList(output.args, context) : undefined,
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    env: output.env != null ? de_EksContainerEnvironmentVariables(output.env, context) : undefined,
    exitCode: __expectInt32(output.exitCode),
    image: __expectString(output.image),
    imagePullPolicy: __expectString(output.imagePullPolicy),
    name: __expectString(output.name),
    reason: __expectString(output.reason),
    resources: output.resources != null ? de_EksContainerResourceRequirements(output.resources, context) : undefined,
    securityContext:
      output.securityContext != null ? de_EksContainerSecurityContext(output.securityContext, context) : undefined,
    volumeMounts: output.volumeMounts != null ? de_EksContainerVolumeMounts(output.volumeMounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksContainerDetails
 */
const de_EksContainerDetails = (output: any, context: __SerdeContext): EksContainerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksContainerDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksContainerEnvironmentVariable
 */
const de_EksContainerEnvironmentVariable = (output: any, context: __SerdeContext): EksContainerEnvironmentVariable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EksContainerEnvironmentVariables
 */
const de_EksContainerEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): EksContainerEnvironmentVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksContainerEnvironmentVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksContainerResourceRequirements
 */
const de_EksContainerResourceRequirements = (
  output: any,
  context: __SerdeContext
): EksContainerResourceRequirements => {
  return {
    limits: output.limits != null ? de_EksLimits(output.limits, context) : undefined,
    requests: output.requests != null ? de_EksRequests(output.requests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksContainers
 */
const de_EksContainers = (output: any, context: __SerdeContext): EksContainer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksContainer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksContainerSecurityContext
 */
const de_EksContainerSecurityContext = (output: any, context: __SerdeContext): EksContainerSecurityContext => {
  return {
    privileged: __expectBoolean(output.privileged),
    readOnlyRootFilesystem: __expectBoolean(output.readOnlyRootFilesystem),
    runAsGroup: __expectLong(output.runAsGroup),
    runAsNonRoot: __expectBoolean(output.runAsNonRoot),
    runAsUser: __expectLong(output.runAsUser),
  } as any;
};

/**
 * deserializeAws_restJson1EksContainerVolumeMount
 */
const de_EksContainerVolumeMount = (output: any, context: __SerdeContext): EksContainerVolumeMount => {
  return {
    mountPath: __expectString(output.mountPath),
    name: __expectString(output.name),
    readOnly: __expectBoolean(output.readOnly),
  } as any;
};

/**
 * deserializeAws_restJson1EksContainerVolumeMounts
 */
const de_EksContainerVolumeMounts = (output: any, context: __SerdeContext): EksContainerVolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksContainerVolumeMount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EksEmptyDir
 */
const de_EksEmptyDir = (output: any, context: __SerdeContext): EksEmptyDir => {
  return {
    medium: __expectString(output.medium),
    sizeLimit: __expectString(output.sizeLimit),
  } as any;
};

/**
 * deserializeAws_restJson1EksHostPath
 */
const de_EksHostPath = (output: any, context: __SerdeContext): EksHostPath => {
  return {
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_restJson1EksLabelsMap
 */
const de_EksLabelsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EksLimits
 */
const de_EksLimits = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EksMetadata
 */
const de_EksMetadata = (output: any, context: __SerdeContext): EksMetadata => {
  return {
    labels: output.labels != null ? de_EksLabelsMap(output.labels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksPodProperties
 */
const de_EksPodProperties = (output: any, context: __SerdeContext): EksPodProperties => {
  return {
    containers: output.containers != null ? de_EksContainers(output.containers, context) : undefined,
    dnsPolicy: __expectString(output.dnsPolicy),
    hostNetwork: __expectBoolean(output.hostNetwork),
    metadata: output.metadata != null ? de_EksMetadata(output.metadata, context) : undefined,
    serviceAccountName: __expectString(output.serviceAccountName),
    volumes: output.volumes != null ? de_EksVolumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksPodPropertiesDetail
 */
const de_EksPodPropertiesDetail = (output: any, context: __SerdeContext): EksPodPropertiesDetail => {
  return {
    containers: output.containers != null ? de_EksContainerDetails(output.containers, context) : undefined,
    dnsPolicy: __expectString(output.dnsPolicy),
    hostNetwork: __expectBoolean(output.hostNetwork),
    metadata: output.metadata != null ? de_EksMetadata(output.metadata, context) : undefined,
    nodeName: __expectString(output.nodeName),
    podName: __expectString(output.podName),
    serviceAccountName: __expectString(output.serviceAccountName),
    volumes: output.volumes != null ? de_EksVolumes(output.volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksProperties
 */
const de_EksProperties = (output: any, context: __SerdeContext): EksProperties => {
  return {
    podProperties: output.podProperties != null ? de_EksPodProperties(output.podProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksPropertiesDetail
 */
const de_EksPropertiesDetail = (output: any, context: __SerdeContext): EksPropertiesDetail => {
  return {
    podProperties: output.podProperties != null ? de_EksPodPropertiesDetail(output.podProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksRequests
 */
const de_EksRequests = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EksSecret
 */
const de_EksSecret = (output: any, context: __SerdeContext): EksSecret => {
  return {
    optional: __expectBoolean(output.optional),
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1EksVolume
 */
const de_EksVolume = (output: any, context: __SerdeContext): EksVolume => {
  return {
    emptyDir: output.emptyDir != null ? de_EksEmptyDir(output.emptyDir, context) : undefined,
    hostPath: output.hostPath != null ? de_EksHostPath(output.hostPath, context) : undefined,
    name: __expectString(output.name),
    secret: output.secret != null ? de_EksSecret(output.secret, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksVolumes
 */
const de_EksVolumes = (output: any, context: __SerdeContext): EksVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksVolume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): KeyValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EphemeralStorage
 */
const de_EphemeralStorage = (output: any, context: __SerdeContext): EphemeralStorage => {
  return {
    sizeInGiB: __expectInt32(output.sizeInGiB),
  } as any;
};

/**
 * deserializeAws_restJson1EvaluateOnExit
 */
const de_EvaluateOnExit = (output: any, context: __SerdeContext): EvaluateOnExit => {
  return {
    action: __expectString(output.action),
    onExitCode: __expectString(output.onExitCode),
    onReason: __expectString(output.onReason),
    onStatusReason: __expectString(output.onStatusReason),
  } as any;
};

/**
 * deserializeAws_restJson1EvaluateOnExitList
 */
const de_EvaluateOnExitList = (output: any, context: __SerdeContext): EvaluateOnExit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluateOnExit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FairsharePolicy
 */
const de_FairsharePolicy = (output: any, context: __SerdeContext): FairsharePolicy => {
  return {
    computeReservation: __expectInt32(output.computeReservation),
    shareDecaySeconds: __expectInt32(output.shareDecaySeconds),
    shareDistribution:
      output.shareDistribution != null ? de_ShareAttributesList(output.shareDistribution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FargatePlatformConfiguration
 */
const de_FargatePlatformConfiguration = (output: any, context: __SerdeContext): FargatePlatformConfiguration => {
  return {
    platformVersion: __expectString(output.platformVersion),
  } as any;
};

/**
 * deserializeAws_restJson1Host
 */
const de_Host = (output: any, context: __SerdeContext): Host => {
  return {
    sourcePath: __expectString(output.sourcePath),
  } as any;
};

/**
 * deserializeAws_restJson1JobDefinition
 */
const de_JobDefinition = (output: any, context: __SerdeContext): JobDefinition => {
  return {
    containerOrchestrationType: __expectString(output.containerOrchestrationType),
    containerProperties:
      output.containerProperties != null ? de_ContainerProperties(output.containerProperties, context) : undefined,
    eksProperties: output.eksProperties != null ? de_EksProperties(output.eksProperties, context) : undefined,
    jobDefinitionArn: __expectString(output.jobDefinitionArn),
    jobDefinitionName: __expectString(output.jobDefinitionName),
    nodeProperties: output.nodeProperties != null ? de_NodeProperties(output.nodeProperties, context) : undefined,
    parameters: output.parameters != null ? de_ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != null ? de_PlatformCapabilityList(output.platformCapabilities, context) : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy: output.retryStrategy != null ? de_RetryStrategy(output.retryStrategy, context) : undefined,
    revision: __expectInt32(output.revision),
    schedulingPriority: __expectInt32(output.schedulingPriority),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != null ? de_JobTimeout(output.timeout, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1JobDefinitionList
 */
const de_JobDefinitionList = (output: any, context: __SerdeContext): JobDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobDependency
 */
const de_JobDependency = (output: any, context: __SerdeContext): JobDependency => {
  return {
    jobId: __expectString(output.jobId),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1JobDependencyList
 */
const de_JobDependencyList = (output: any, context: __SerdeContext): JobDependency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobDependency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobDetail
 */
const de_JobDetail = (output: any, context: __SerdeContext): JobDetail => {
  return {
    arrayProperties:
      output.arrayProperties != null ? de_ArrayPropertiesDetail(output.arrayProperties, context) : undefined,
    attempts: output.attempts != null ? de_AttemptDetails(output.attempts, context) : undefined,
    container: output.container != null ? de_ContainerDetail(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    dependsOn: output.dependsOn != null ? de_JobDependencyList(output.dependsOn, context) : undefined,
    eksAttempts: output.eksAttempts != null ? de_EksAttemptDetails(output.eksAttempts, context) : undefined,
    eksProperties: output.eksProperties != null ? de_EksPropertiesDetail(output.eksProperties, context) : undefined,
    isCancelled: __expectBoolean(output.isCancelled),
    isTerminated: __expectBoolean(output.isTerminated),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    jobQueue: __expectString(output.jobQueue),
    nodeDetails: output.nodeDetails != null ? de_NodeDetails(output.nodeDetails, context) : undefined,
    nodeProperties: output.nodeProperties != null ? de_NodeProperties(output.nodeProperties, context) : undefined,
    parameters: output.parameters != null ? de_ParametersMap(output.parameters, context) : undefined,
    platformCapabilities:
      output.platformCapabilities != null ? de_PlatformCapabilityList(output.platformCapabilities, context) : undefined,
    propagateTags: __expectBoolean(output.propagateTags),
    retryStrategy: output.retryStrategy != null ? de_RetryStrategy(output.retryStrategy, context) : undefined,
    schedulingPriority: __expectInt32(output.schedulingPriority),
    shareIdentifier: __expectString(output.shareIdentifier),
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
    tags: output.tags != null ? de_TagrisTagsMap(output.tags, context) : undefined,
    timeout: output.timeout != null ? de_JobTimeout(output.timeout, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobDetailList
 */
const de_JobDetailList = (output: any, context: __SerdeContext): JobDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobQueueDetail
 */
const de_JobQueueDetail = (output: any, context: __SerdeContext): JobQueueDetail => {
  return {
    computeEnvironmentOrder:
      output.computeEnvironmentOrder != null
        ? de_ComputeEnvironmentOrders(output.computeEnvironmentOrder, context)
        : undefined,
    jobQueueArn: __expectString(output.jobQueueArn),
    jobQueueName: __expectString(output.jobQueueName),
    priority: __expectInt32(output.priority),
    schedulingPolicyArn: __expectString(output.schedulingPolicyArn),
    state: __expectString(output.state),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? de_TagrisTagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobQueueDetailList
 */
const de_JobQueueDetailList = (output: any, context: __SerdeContext): JobQueueDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobQueueDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    arrayProperties:
      output.arrayProperties != null ? de_ArrayPropertiesSummary(output.arrayProperties, context) : undefined,
    container: output.container != null ? de_ContainerSummary(output.container, context) : undefined,
    createdAt: __expectLong(output.createdAt),
    jobArn: __expectString(output.jobArn),
    jobDefinition: __expectString(output.jobDefinition),
    jobId: __expectString(output.jobId),
    jobName: __expectString(output.jobName),
    nodeProperties:
      output.nodeProperties != null ? de_NodePropertiesSummary(output.nodeProperties, context) : undefined,
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    stoppedAt: __expectLong(output.stoppedAt),
  } as any;
};

/**
 * deserializeAws_restJson1JobSummaryList
 */
const de_JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobTimeout
 */
const de_JobTimeout = (output: any, context: __SerdeContext): JobTimeout => {
  return {
    attemptDurationSeconds: __expectInt32(output.attemptDurationSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1KeyValuePair
 */
const de_KeyValuePair = (output: any, context: __SerdeContext): KeyValuePair => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1LaunchTemplateSpecification
 */
const de_LaunchTemplateSpecification = (output: any, context: __SerdeContext): LaunchTemplateSpecification => {
  return {
    launchTemplateId: __expectString(output.launchTemplateId),
    launchTemplateName: __expectString(output.launchTemplateName),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1LinuxParameters
 */
const de_LinuxParameters = (output: any, context: __SerdeContext): LinuxParameters => {
  return {
    devices: output.devices != null ? de_DevicesList(output.devices, context) : undefined,
    initProcessEnabled: __expectBoolean(output.initProcessEnabled),
    maxSwap: __expectInt32(output.maxSwap),
    sharedMemorySize: __expectInt32(output.sharedMemorySize),
    swappiness: __expectInt32(output.swappiness),
    tmpfs: output.tmpfs != null ? de_TmpfsList(output.tmpfs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogConfiguration
 */
const de_LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    logDriver: __expectString(output.logDriver),
    options: output.options != null ? de_LogConfigurationOptionsMap(output.options, context) : undefined,
    secretOptions: output.secretOptions != null ? de_SecretList(output.secretOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogConfigurationOptionsMap
 */
const de_LogConfigurationOptionsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MountPoint
 */
const de_MountPoint = (output: any, context: __SerdeContext): MountPoint => {
  return {
    containerPath: __expectString(output.containerPath),
    readOnly: __expectBoolean(output.readOnly),
    sourceVolume: __expectString(output.sourceVolume),
  } as any;
};

/**
 * deserializeAws_restJson1MountPoints
 */
const de_MountPoints = (output: any, context: __SerdeContext): MountPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MountPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    assignPublicIp: __expectString(output.assignPublicIp),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    attachmentId: __expectString(output.attachmentId),
    ipv6Address: __expectString(output.ipv6Address),
    privateIpv4Address: __expectString(output.privateIpv4Address),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterfaceList
 */
const de_NetworkInterfaceList = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NodeDetails
 */
const de_NodeDetails = (output: any, context: __SerdeContext): NodeDetails => {
  return {
    isMainNode: __expectBoolean(output.isMainNode),
    nodeIndex: __expectInt32(output.nodeIndex),
  } as any;
};

/**
 * deserializeAws_restJson1NodeProperties
 */
const de_NodeProperties = (output: any, context: __SerdeContext): NodeProperties => {
  return {
    mainNode: __expectInt32(output.mainNode),
    nodeRangeProperties:
      output.nodeRangeProperties != null ? de_NodeRangeProperties(output.nodeRangeProperties, context) : undefined,
    numNodes: __expectInt32(output.numNodes),
  } as any;
};

/**
 * deserializeAws_restJson1NodePropertiesSummary
 */
const de_NodePropertiesSummary = (output: any, context: __SerdeContext): NodePropertiesSummary => {
  return {
    isMainNode: __expectBoolean(output.isMainNode),
    nodeIndex: __expectInt32(output.nodeIndex),
    numNodes: __expectInt32(output.numNodes),
  } as any;
};

/**
 * deserializeAws_restJson1NodeRangeProperties
 */
const de_NodeRangeProperties = (output: any, context: __SerdeContext): NodeRangeProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeRangeProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NodeRangeProperty
 */
const de_NodeRangeProperty = (output: any, context: __SerdeContext): NodeRangeProperty => {
  return {
    container: output.container != null ? de_ContainerProperties(output.container, context) : undefined,
    targetNodes: __expectString(output.targetNodes),
  } as any;
};

/**
 * deserializeAws_restJson1ParametersMap
 */
const de_ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PlatformCapabilityList
 */
const de_PlatformCapabilityList = (output: any, context: __SerdeContext): (PlatformCapability | string)[] => {
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
 * deserializeAws_restJson1ResourceRequirement
 */
const de_ResourceRequirement = (output: any, context: __SerdeContext): ResourceRequirement => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceRequirements
 */
const de_ResourceRequirements = (output: any, context: __SerdeContext): ResourceRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceRequirement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RetryStrategy
 */
const de_RetryStrategy = (output: any, context: __SerdeContext): RetryStrategy => {
  return {
    attempts: __expectInt32(output.attempts),
    evaluateOnExit: output.evaluateOnExit != null ? de_EvaluateOnExitList(output.evaluateOnExit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SchedulingPolicyDetail
 */
const de_SchedulingPolicyDetail = (output: any, context: __SerdeContext): SchedulingPolicyDetail => {
  return {
    arn: __expectString(output.arn),
    fairsharePolicy: output.fairsharePolicy != null ? de_FairsharePolicy(output.fairsharePolicy, context) : undefined,
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagrisTagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SchedulingPolicyDetailList
 */
const de_SchedulingPolicyDetailList = (output: any, context: __SerdeContext): SchedulingPolicyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchedulingPolicyDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SchedulingPolicyListingDetail
 */
const de_SchedulingPolicyListingDetail = (output: any, context: __SerdeContext): SchedulingPolicyListingDetail => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_restJson1SchedulingPolicyListingDetailList
 */
const de_SchedulingPolicyListingDetailList = (
  output: any,
  context: __SerdeContext
): SchedulingPolicyListingDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchedulingPolicyListingDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Secret
 */
const de_Secret = (output: any, context: __SerdeContext): Secret => {
  return {
    name: __expectString(output.name),
    valueFrom: __expectString(output.valueFrom),
  } as any;
};

/**
 * deserializeAws_restJson1SecretList
 */
const de_SecretList = (output: any, context: __SerdeContext): Secret[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Secret(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShareAttributes
 */
const de_ShareAttributes = (output: any, context: __SerdeContext): ShareAttributes => {
  return {
    shareIdentifier: __expectString(output.shareIdentifier),
    weightFactor: __limitedParseFloat32(output.weightFactor),
  } as any;
};

/**
 * deserializeAws_restJson1ShareAttributesList
 */
const de_ShareAttributesList = (output: any, context: __SerdeContext): ShareAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShareAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagrisTagsMap
 */
const de_TagrisTagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Tmpfs
 */
const de_Tmpfs = (output: any, context: __SerdeContext): Tmpfs => {
  return {
    containerPath: __expectString(output.containerPath),
    mountOptions: output.mountOptions != null ? de_StringList(output.mountOptions, context) : undefined,
    size: __expectInt32(output.size),
  } as any;
};

/**
 * deserializeAws_restJson1TmpfsList
 */
const de_TmpfsList = (output: any, context: __SerdeContext): Tmpfs[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tmpfs(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Ulimit
 */
const de_Ulimit = (output: any, context: __SerdeContext): Ulimit => {
  return {
    hardLimit: __expectInt32(output.hardLimit),
    name: __expectString(output.name),
    softLimit: __expectInt32(output.softLimit),
  } as any;
};

/**
 * deserializeAws_restJson1Ulimits
 */
const de_Ulimits = (output: any, context: __SerdeContext): Ulimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ulimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UpdatePolicy
 */
const de_UpdatePolicy = (output: any, context: __SerdeContext): UpdatePolicy => {
  return {
    jobExecutionTimeoutMinutes: __expectLong(output.jobExecutionTimeoutMinutes),
    terminateJobsOnUpdate: __expectBoolean(output.terminateJobsOnUpdate),
  } as any;
};

/**
 * deserializeAws_restJson1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    efsVolumeConfiguration:
      output.efsVolumeConfiguration != null
        ? de_EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    host: output.host != null ? de_Host(output.host, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Volumes
 */
const de_Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Volume(entry, context);
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
