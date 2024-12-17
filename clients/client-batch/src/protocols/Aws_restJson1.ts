// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
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
import {
  GetJobQueueSnapshotCommandInput,
  GetJobQueueSnapshotCommandOutput,
} from "../commands/GetJobQueueSnapshotCommand";
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
  ClientException,
  ComputeEnvironmentOrder,
  ComputeResource,
  ComputeResourceUpdate,
  ContainerOverrides,
  ContainerProperties,
  Device,
  DeviceCgroupPermission,
  Ec2Configuration,
  EcsProperties,
  EcsPropertiesOverride,
  EcsTaskProperties,
  EFSAuthorizationConfig,
  EFSVolumeConfiguration,
  EksConfiguration,
  EksContainer,
  EksContainerEnvironmentVariable,
  EksContainerOverride,
  EksContainerResourceRequirements,
  EksContainerSecurityContext,
  EksContainerVolumeMount,
  EksEmptyDir,
  EksHostPath,
  EksMetadata,
  EksPersistentVolumeClaim,
  EksPodProperties,
  EksPodPropertiesOverride,
  EksProperties,
  EksPropertiesOverride,
  EksSecret,
  EksVolume,
  EphemeralStorage,
  EvaluateOnExit,
  FairsharePolicy,
  FargatePlatformConfiguration,
  Host,
  ImagePullSecret,
  JobDefinition,
  JobDependency,
  JobDetail,
  JobStateTimeLimitAction,
  JobTimeout,
  KeyValuePair,
  KeyValuesPair,
  LaunchTemplateSpecification,
  LaunchTemplateSpecificationOverride,
  LinuxParameters,
  LogConfiguration,
  MountPoint,
  NetworkConfiguration,
  NodeOverrides,
  NodeProperties,
  NodePropertyOverride,
  NodeRangeProperty,
  PlatformCapability,
  RepositoryCredentials,
  ResourceRequirement,
  RetryStrategy,
  RuntimePlatform,
  SchedulingPolicyDetail,
  Secret,
  ServerException,
  ShareAttributes,
  TaskContainerDependency,
  TaskContainerOverrides,
  TaskContainerProperties,
  TaskPropertiesOverride,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/canceljob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobId: [],
      reason: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateComputeEnvironmentCommand
 */
export const se_CreateComputeEnvironmentCommand = async (
  input: CreateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/createcomputeenvironment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironmentName: [],
      computeResources: (_) => _json(_),
      context: [],
      eksConfiguration: (_) => _json(_),
      serviceRole: [],
      state: [],
      tags: (_) => _json(_),
      type: [],
      unmanagedvCpus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobQueueCommand
 */
export const se_CreateJobQueueCommand = async (
  input: CreateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/createjobqueue");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironmentOrder: (_) => _json(_),
      jobQueueName: [],
      jobStateTimeLimitActions: (_) => _json(_),
      priority: [],
      schedulingPolicyArn: [],
      state: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSchedulingPolicyCommand
 */
export const se_CreateSchedulingPolicyCommand = async (
  input: CreateSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/createschedulingpolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fairsharePolicy: (_) => se_FairsharePolicy(_, context),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteComputeEnvironmentCommand
 */
export const se_DeleteComputeEnvironmentCommand = async (
  input: DeleteComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/deletecomputeenvironment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironment: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobQueueCommand
 */
export const se_DeleteJobQueueCommand = async (
  input: DeleteJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/deletejobqueue");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobQueue: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSchedulingPolicyCommand
 */
export const se_DeleteSchedulingPolicyCommand = async (
  input: DeleteSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/deleteschedulingpolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterJobDefinitionCommand
 */
export const se_DeregisterJobDefinitionCommand = async (
  input: DeregisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/deregisterjobdefinition");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobDefinition: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeComputeEnvironmentsCommand
 */
export const se_DescribeComputeEnvironmentsCommand = async (
  input: DescribeComputeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/describecomputeenvironments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironments: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobDefinitionsCommand
 */
export const se_DescribeJobDefinitionsCommand = async (
  input: DescribeJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/describejobdefinitions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobDefinitionName: [],
      jobDefinitions: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobQueuesCommand
 */
export const se_DescribeJobQueuesCommand = async (
  input: DescribeJobQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/describejobqueues");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobQueues: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobsCommand
 */
export const se_DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/describejobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSchedulingPoliciesCommand
 */
export const se_DescribeSchedulingPoliciesCommand = async (
  input: DescribeSchedulingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/describeschedulingpolicies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetJobQueueSnapshotCommand
 */
export const se_GetJobQueueSnapshotCommand = async (
  input: GetJobQueueSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/getjobqueuesnapshot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobQueue: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/listjobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arrayJobId: [],
      filters: (_) => _json(_),
      jobQueue: [],
      jobStatus: [],
      maxResults: [],
      multiNodeJobId: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSchedulingPoliciesCommand
 */
export const se_ListSchedulingPoliciesCommand = async (
  input: ListSchedulingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/listschedulingpolicies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterJobDefinitionCommand
 */
export const se_RegisterJobDefinitionCommand = async (
  input: RegisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/registerjobdefinition");
  let body: any;
  body = JSON.stringify(
    take(input, {
      containerProperties: (_) => _json(_),
      ecsProperties: (_) => _json(_),
      eksProperties: (_) => _json(_),
      jobDefinitionName: [],
      nodeProperties: (_) => se_NodeProperties(_, context),
      parameters: (_) => _json(_),
      platformCapabilities: (_) => _json(_),
      propagateTags: [],
      retryStrategy: (_) => _json(_),
      schedulingPriority: [],
      tags: (_) => _json(_),
      timeout: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SubmitJobCommand
 */
export const se_SubmitJobCommand = async (
  input: SubmitJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/submitjob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arrayProperties: (_) => _json(_),
      containerOverrides: (_) => _json(_),
      dependsOn: (_) => _json(_),
      ecsPropertiesOverride: (_) => _json(_),
      eksPropertiesOverride: (_) => _json(_),
      jobDefinition: [],
      jobName: [],
      jobQueue: [],
      nodeOverrides: (_) => _json(_),
      parameters: (_) => _json(_),
      propagateTags: [],
      retryStrategy: (_) => _json(_),
      schedulingPriorityOverride: [],
      shareIdentifier: [],
      tags: (_) => _json(_),
      timeout: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TerminateJobCommand
 */
export const se_TerminateJobCommand = async (
  input: TerminateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/terminatejob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobId: [],
      reason: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateComputeEnvironmentCommand
 */
export const se_UpdateComputeEnvironmentCommand = async (
  input: UpdateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/updatecomputeenvironment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironment: [],
      computeResources: (_) => _json(_),
      context: [],
      serviceRole: [],
      state: [],
      unmanagedvCpus: [],
      updatePolicy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateJobQueueCommand
 */
export const se_UpdateJobQueueCommand = async (
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/updatejobqueue");
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeEnvironmentOrder: (_) => _json(_),
      jobQueue: [],
      jobStateTimeLimitActions: (_) => _json(_),
      priority: [],
      schedulingPolicyArn: [],
      state: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSchedulingPolicyCommand
 */
export const se_UpdateSchedulingPolicyCommand = async (
  input: UpdateSchedulingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/updateschedulingpolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      fairsharePolicy: (_) => se_FairsharePolicy(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateComputeEnvironmentCommand
 */
export const de_CreateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    computeEnvironmentArn: __expectString,
    computeEnvironmentName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobQueueCommand
 */
export const de_CreateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobQueueArn: __expectString,
    jobQueueName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSchedulingPolicyCommand
 */
export const de_CreateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComputeEnvironmentCommand
 */
export const de_DeleteComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobQueueCommand
 */
export const de_DeleteJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSchedulingPolicyCommand
 */
export const de_DeleteSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterJobDefinitionCommand
 */
export const de_DeregisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeComputeEnvironmentsCommand
 */
export const de_DescribeComputeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    computeEnvironments: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobDefinitionsCommand
 */
export const de_DescribeJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobDefinitions: (_) => de_JobDefinitionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobQueuesCommand
 */
export const de_DescribeJobQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobQueues: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobsCommand
 */
export const de_DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobDetailList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSchedulingPoliciesCommand
 */
export const de_DescribeSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    schedulingPolicies: (_) => de_SchedulingPolicyDetailList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobQueueSnapshotCommand
 */
export const de_GetJobQueueSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobQueueSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    frontOfQueue: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobSummaryList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchedulingPoliciesCommand
 */
export const de_ListSchedulingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulingPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    schedulingPolicies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1RegisterJobDefinitionCommand
 */
export const de_RegisterJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobDefinitionArn: __expectString,
    jobDefinitionName: __expectString,
    revision: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SubmitJobCommand
 */
export const de_SubmitJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
    jobId: __expectString,
    jobName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TerminateJobCommand
 */
export const de_TerminateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateComputeEnvironmentCommand
 */
export const de_UpdateComputeEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    computeEnvironmentArn: __expectString,
    computeEnvironmentName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateJobQueueCommand
 */
export const de_UpdateJobQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobQueueArn: __expectString,
    jobQueueName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSchedulingPolicyCommand
 */
export const de_UpdateSchedulingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchedulingPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ArrayProperties omitted.

// se_ComputeEnvironmentOrder omitted.

// se_ComputeEnvironmentOrders omitted.

// se_ComputeResource omitted.

// se_ComputeResourceUpdate omitted.

// se_ContainerOverrides omitted.

// se_ContainerProperties omitted.

// se_Device omitted.

// se_DeviceCgroupPermissions omitted.

// se_DevicesList omitted.

// se_Ec2Configuration omitted.

// se_Ec2ConfigurationList omitted.

// se_EcsProperties omitted.

// se_EcsPropertiesOverride omitted.

// se_EcsTaskProperties omitted.

// se_EFSAuthorizationConfig omitted.

// se_EFSVolumeConfiguration omitted.

// se_EksAnnotationsMap omitted.

// se_EksConfiguration omitted.

// se_EksContainer omitted.

// se_EksContainerEnvironmentVariable omitted.

// se_EksContainerEnvironmentVariables omitted.

// se_EksContainerOverride omitted.

// se_EksContainerOverrideList omitted.

// se_EksContainerResourceRequirements omitted.

// se_EksContainers omitted.

// se_EksContainerSecurityContext omitted.

// se_EksContainerVolumeMount omitted.

// se_EksContainerVolumeMounts omitted.

// se_EksEmptyDir omitted.

// se_EksHostPath omitted.

// se_EksLabelsMap omitted.

// se_EksLimits omitted.

// se_EksMetadata omitted.

// se_EksPersistentVolumeClaim omitted.

// se_EksPodProperties omitted.

// se_EksPodPropertiesOverride omitted.

// se_EksProperties omitted.

// se_EksPropertiesOverride omitted.

// se_EksRequests omitted.

// se_EksSecret omitted.

// se_EksVolume omitted.

// se_EksVolumes omitted.

// se_EnvironmentVariables omitted.

// se_EphemeralStorage omitted.

// se_EvaluateOnExit omitted.

// se_EvaluateOnExitList omitted.

/**
 * serializeAws_restJson1FairsharePolicy
 */
const se_FairsharePolicy = (input: FairsharePolicy, context: __SerdeContext): any => {
  return take(input, {
    computeReservation: [],
    shareDecaySeconds: [],
    shareDistribution: (_) => se_ShareAttributesList(_, context),
  });
};

// se_FargatePlatformConfiguration omitted.

// se_Host omitted.

// se_ImagePullSecret omitted.

// se_ImagePullSecrets omitted.

// se_JobDependency omitted.

// se_JobDependencyList omitted.

// se_JobStateTimeLimitAction omitted.

// se_JobStateTimeLimitActions omitted.

// se_JobTimeout omitted.

// se_KeyValuePair omitted.

// se_KeyValuesPair omitted.

// se_LaunchTemplateSpecification omitted.

// se_LaunchTemplateSpecificationOverride omitted.

// se_LaunchTemplateSpecificationOverrideList omitted.

// se_LinuxParameters omitted.

// se_ListEcsTaskProperties omitted.

// se_ListJobsFilterList omitted.

// se_ListTaskContainerOverrides omitted.

// se_ListTaskContainerProperties omitted.

// se_ListTaskPropertiesOverride omitted.

// se_LogConfiguration omitted.

// se_LogConfigurationOptionsMap omitted.

// se_MountPoint omitted.

// se_MountPoints omitted.

// se_NetworkConfiguration omitted.

// se_NodeOverrides omitted.

/**
 * serializeAws_restJson1NodeProperties
 */
const se_NodeProperties = (input: NodeProperties, context: __SerdeContext): any => {
  return take(input, {
    mainNode: [],
    nodeRangeProperties: (_) => se_NodeRangeProperties(_, context),
    numNodes: [],
  });
};

// se_NodePropertyOverride omitted.

// se_NodePropertyOverrides omitted.

/**
 * serializeAws_restJson1NodeRangeProperties
 */
const se_NodeRangeProperties = (input: NodeRangeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return _json(entry);
    });
};

// se_NodeRangeProperty omitted.

// se_ParametersMap omitted.

// se_PlatformCapabilityList omitted.

// se_RepositoryCredentials omitted.

// se_ResourceRequirement omitted.

// se_ResourceRequirements omitted.

// se_RetryStrategy omitted.

// se_RuntimePlatform omitted.

// se_Secret omitted.

// se_SecretList omitted.

/**
 * serializeAws_restJson1ShareAttributes
 */
const se_ShareAttributes = (input: ShareAttributes, context: __SerdeContext): any => {
  return take(input, {
    shareIdentifier: [],
    weightFactor: __serializeFloat,
  });
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

// se_StringList omitted.

// se_TagrisTagsMap omitted.

// se_TagsMap omitted.

// se_TaskContainerDependency omitted.

// se_TaskContainerDependencyList omitted.

// se_TaskContainerOverrides omitted.

// se_TaskContainerProperties omitted.

// se_TaskPropertiesOverride omitted.

// se_Tmpfs omitted.

// se_TmpfsList omitted.

// se_Ulimit omitted.

// se_Ulimits omitted.

// se_UpdatePolicy omitted.

// se_Volume omitted.

// se_Volumes omitted.

// de_ArrayJobStatusSummary omitted.

// de_ArrayPropertiesDetail omitted.

// de_ArrayPropertiesSummary omitted.

// de_AttemptContainerDetail omitted.

// de_AttemptDetail omitted.

// de_AttemptDetails omitted.

// de_AttemptEcsTaskDetails omitted.

// de_AttemptTaskContainerDetails omitted.

// de_ComputeEnvironmentDetail omitted.

// de_ComputeEnvironmentDetailList omitted.

// de_ComputeEnvironmentOrder omitted.

// de_ComputeEnvironmentOrders omitted.

// de_ComputeResource omitted.

// de_ContainerDetail omitted.

// de_ContainerProperties omitted.

// de_ContainerSummary omitted.

// de_Device omitted.

// de_DeviceCgroupPermissions omitted.

// de_DevicesList omitted.

// de_Ec2Configuration omitted.

// de_Ec2ConfigurationList omitted.

// de_EcsProperties omitted.

// de_EcsPropertiesDetail omitted.

// de_EcsTaskDetails omitted.

// de_EcsTaskProperties omitted.

// de_EFSAuthorizationConfig omitted.

// de_EFSVolumeConfiguration omitted.

// de_EksAnnotationsMap omitted.

// de_EksAttemptContainerDetail omitted.

// de_EksAttemptContainerDetails omitted.

// de_EksAttemptDetail omitted.

// de_EksAttemptDetails omitted.

// de_EksConfiguration omitted.

// de_EksContainer omitted.

// de_EksContainerDetail omitted.

// de_EksContainerDetails omitted.

// de_EksContainerEnvironmentVariable omitted.

// de_EksContainerEnvironmentVariables omitted.

// de_EksContainerResourceRequirements omitted.

// de_EksContainers omitted.

// de_EksContainerSecurityContext omitted.

// de_EksContainerVolumeMount omitted.

// de_EksContainerVolumeMounts omitted.

// de_EksEmptyDir omitted.

// de_EksHostPath omitted.

// de_EksLabelsMap omitted.

// de_EksLimits omitted.

// de_EksMetadata omitted.

// de_EksPersistentVolumeClaim omitted.

// de_EksPodProperties omitted.

// de_EksPodPropertiesDetail omitted.

// de_EksProperties omitted.

// de_EksPropertiesDetail omitted.

// de_EksRequests omitted.

// de_EksSecret omitted.

// de_EksVolume omitted.

// de_EksVolumes omitted.

// de_EnvironmentVariables omitted.

// de_EphemeralStorage omitted.

// de_EvaluateOnExit omitted.

// de_EvaluateOnExitList omitted.

/**
 * deserializeAws_restJson1FairsharePolicy
 */
const de_FairsharePolicy = (output: any, context: __SerdeContext): FairsharePolicy => {
  return take(output, {
    computeReservation: __expectInt32,
    shareDecaySeconds: __expectInt32,
    shareDistribution: (_: any) => de_ShareAttributesList(_, context),
  }) as any;
};

// de_FargatePlatformConfiguration omitted.

// de_FrontOfQueueDetail omitted.

// de_FrontOfQueueJobSummary omitted.

// de_FrontOfQueueJobSummaryList omitted.

// de_Host omitted.

// de_ImagePullSecret omitted.

// de_ImagePullSecrets omitted.

/**
 * deserializeAws_restJson1JobDefinition
 */
const de_JobDefinition = (output: any, context: __SerdeContext): JobDefinition => {
  return take(output, {
    containerOrchestrationType: __expectString,
    containerProperties: _json,
    ecsProperties: _json,
    eksProperties: _json,
    jobDefinitionArn: __expectString,
    jobDefinitionName: __expectString,
    nodeProperties: (_: any) => de_NodeProperties(_, context),
    parameters: _json,
    platformCapabilities: _json,
    propagateTags: __expectBoolean,
    retryStrategy: _json,
    revision: __expectInt32,
    schedulingPriority: __expectInt32,
    status: __expectString,
    tags: _json,
    timeout: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobDefinitionList
 */
const de_JobDefinitionList = (output: any, context: __SerdeContext): JobDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobDefinition(entry, context);
    });
  return retVal;
};

// de_JobDependency omitted.

// de_JobDependencyList omitted.

/**
 * deserializeAws_restJson1JobDetail
 */
const de_JobDetail = (output: any, context: __SerdeContext): JobDetail => {
  return take(output, {
    arrayProperties: _json,
    attempts: _json,
    container: _json,
    createdAt: __expectLong,
    dependsOn: _json,
    ecsProperties: _json,
    eksAttempts: _json,
    eksProperties: _json,
    isCancelled: __expectBoolean,
    isTerminated: __expectBoolean,
    jobArn: __expectString,
    jobDefinition: __expectString,
    jobId: __expectString,
    jobName: __expectString,
    jobQueue: __expectString,
    nodeDetails: _json,
    nodeProperties: (_: any) => de_NodeProperties(_, context),
    parameters: _json,
    platformCapabilities: _json,
    propagateTags: __expectBoolean,
    retryStrategy: _json,
    schedulingPriority: __expectInt32,
    shareIdentifier: __expectString,
    startedAt: __expectLong,
    status: __expectString,
    statusReason: __expectString,
    stoppedAt: __expectLong,
    tags: _json,
    timeout: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1JobDetailList
 */
const de_JobDetailList = (output: any, context: __SerdeContext): JobDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobDetail(entry, context);
    });
  return retVal;
};

// de_JobQueueDetail omitted.

// de_JobQueueDetailList omitted.

// de_JobStateTimeLimitAction omitted.

// de_JobStateTimeLimitActions omitted.

// de_JobSummary omitted.

// de_JobSummaryList omitted.

// de_JobTimeout omitted.

// de_KeyValuePair omitted.

// de_LaunchTemplateSpecification omitted.

// de_LaunchTemplateSpecificationOverride omitted.

// de_LaunchTemplateSpecificationOverrideList omitted.

// de_LinuxParameters omitted.

// de_ListAttemptEcsTaskDetails omitted.

// de_ListAttemptTaskContainerDetails omitted.

// de_ListEcsTaskDetails omitted.

// de_ListEcsTaskProperties omitted.

// de_ListTaskContainerDetails omitted.

// de_ListTaskContainerProperties omitted.

// de_LogConfiguration omitted.

// de_LogConfigurationOptionsMap omitted.

// de_MountPoint omitted.

// de_MountPoints omitted.

// de_NetworkConfiguration omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaceList omitted.

// de_NodeDetails omitted.

/**
 * deserializeAws_restJson1NodeProperties
 */
const de_NodeProperties = (output: any, context: __SerdeContext): NodeProperties => {
  return take(output, {
    mainNode: __expectInt32,
    nodeRangeProperties: (_: any) => de_NodeRangeProperties(_, context),
    numNodes: __expectInt32,
  }) as any;
};

// de_NodePropertiesSummary omitted.

/**
 * deserializeAws_restJson1NodeRangeProperties
 */
const de_NodeRangeProperties = (output: any, context: __SerdeContext): NodeRangeProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return _json(entry);
    });
  return retVal;
};

// de_NodeRangeProperty omitted.

// de_ParametersMap omitted.

// de_PlatformCapabilityList omitted.

// de_RepositoryCredentials omitted.

// de_ResourceRequirement omitted.

// de_ResourceRequirements omitted.

// de_RetryStrategy omitted.

// de_RuntimePlatform omitted.

/**
 * deserializeAws_restJson1SchedulingPolicyDetail
 */
const de_SchedulingPolicyDetail = (output: any, context: __SerdeContext): SchedulingPolicyDetail => {
  return take(output, {
    arn: __expectString,
    fairsharePolicy: (_: any) => de_FairsharePolicy(_, context),
    name: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SchedulingPolicyDetailList
 */
const de_SchedulingPolicyDetailList = (output: any, context: __SerdeContext): SchedulingPolicyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchedulingPolicyDetail(entry, context);
    });
  return retVal;
};

// de_SchedulingPolicyListingDetail omitted.

// de_SchedulingPolicyListingDetailList omitted.

// de_Secret omitted.

// de_SecretList omitted.

/**
 * deserializeAws_restJson1ShareAttributes
 */
const de_ShareAttributes = (output: any, context: __SerdeContext): ShareAttributes => {
  return take(output, {
    shareIdentifier: __expectString,
    weightFactor: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1ShareAttributesList
 */
const de_ShareAttributesList = (output: any, context: __SerdeContext): ShareAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ShareAttributes(entry, context);
    });
  return retVal;
};

// de_StringList omitted.

// de_TagrisTagsMap omitted.

// de_TagsMap omitted.

// de_TaskContainerDependency omitted.

// de_TaskContainerDependencyList omitted.

// de_TaskContainerDetails omitted.

// de_TaskContainerProperties omitted.

// de_Tmpfs omitted.

// de_TmpfsList omitted.

// de_Ulimit omitted.

// de_Ulimits omitted.

// de_UpdatePolicy omitted.

// de_Volume omitted.

// de_Volumes omitted.

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

const _tK = "tagKeys";
