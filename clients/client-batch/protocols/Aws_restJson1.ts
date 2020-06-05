import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "../commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput
} from "../commands/CreateComputeEnvironmentCommand";
import {
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput
} from "../commands/CreateJobQueueCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput
} from "../commands/DeleteComputeEnvironmentCommand";
import {
  DeleteJobQueueCommandInput,
  DeleteJobQueueCommandOutput
} from "../commands/DeleteJobQueueCommand";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput
} from "../commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput
} from "../commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput
} from "../commands/DescribeJobDefinitionsCommand";
import {
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput
} from "../commands/DescribeJobQueuesCommand";
import {
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput
} from "../commands/DescribeJobsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput
} from "../commands/RegisterJobDefinitionCommand";
import {
  SubmitJobCommandInput,
  SubmitJobCommandOutput
} from "../commands/SubmitJobCommand";
import {
  TerminateJobCommandInput,
  TerminateJobCommandOutput
} from "../commands/TerminateJobCommand";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput
} from "../commands/UpdateComputeEnvironmentCommand";
import {
  UpdateJobQueueCommandInput,
  UpdateJobQueueCommandOutput
} from "../commands/UpdateJobQueueCommand";
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
  MountPoint,
  NetworkInterface,
  NodeDetails,
  NodeOverrides,
  NodeProperties,
  NodePropertiesSummary,
  NodePropertyOverride,
  NodeRangeProperty,
  ResourceRequirement,
  RetryStrategy,
  ServerException,
  Ulimit,
  Volume
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/canceljob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.reason !== undefined && { reason: input.reason })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateComputeEnvironmentCommand = async (
  input: CreateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/createcomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentName !== undefined && {
      computeEnvironmentName: input.computeEnvironmentName
    }),
    ...(input.computeResources !== undefined && {
      computeResources: serializeAws_restJson1ComputeResource(
        input.computeResources,
        context
      )
    }),
    ...(input.serviceRole !== undefined && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && { state: input.state }),
    ...(input.type !== undefined && { type: input.type })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateJobQueueCommand = async (
  input: CreateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/createjobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(
        input.computeEnvironmentOrder,
        context
      )
    }),
    ...(input.jobQueueName !== undefined && {
      jobQueueName: input.jobQueueName
    }),
    ...(input.priority !== undefined && { priority: input.priority }),
    ...(input.state !== undefined && { state: input.state })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteComputeEnvironmentCommand = async (
  input: DeleteComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/deletecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined && {
      computeEnvironment: input.computeEnvironment
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteJobQueueCommand = async (
  input: DeleteJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/deletejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueue !== undefined && { jobQueue: input.jobQueue })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeregisterJobDefinitionCommand = async (
  input: DeregisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/deregisterjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinition !== undefined && {
      jobDefinition: input.jobDefinition
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeComputeEnvironmentsCommand = async (
  input: DescribeComputeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/describecomputeenvironments";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironments !== undefined && {
      computeEnvironments: serializeAws_restJson1StringList(
        input.computeEnvironments,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeJobDefinitionsCommand = async (
  input: DescribeJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/describejobdefinitions";
  let body: any;
  body = JSON.stringify({
    ...(input.jobDefinitionName !== undefined && {
      jobDefinitionName: input.jobDefinitionName
    }),
    ...(input.jobDefinitions !== undefined && {
      jobDefinitions: serializeAws_restJson1StringList(
        input.jobDefinitions,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeJobQueuesCommand = async (
  input: DescribeJobQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/describejobqueues";
  let body: any;
  body = JSON.stringify({
    ...(input.jobQueues !== undefined && {
      jobQueues: serializeAws_restJson1StringList(input.jobQueues, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/describejobs";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs !== undefined && {
      jobs: serializeAws_restJson1StringList(input.jobs, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/listjobs";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayJobId !== undefined && { arrayJobId: input.arrayJobId }),
    ...(input.jobQueue !== undefined && { jobQueue: input.jobQueue }),
    ...(input.jobStatus !== undefined && { jobStatus: input.jobStatus }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId !== undefined && {
      multiNodeJobId: input.multiNodeJobId
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RegisterJobDefinitionCommand = async (
  input: RegisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/registerjobdefinition";
  let body: any;
  body = JSON.stringify({
    ...(input.containerProperties !== undefined && {
      containerProperties: serializeAws_restJson1ContainerProperties(
        input.containerProperties,
        context
      )
    }),
    ...(input.jobDefinitionName !== undefined && {
      jobDefinitionName: input.jobDefinitionName
    }),
    ...(input.nodeProperties !== undefined && {
      nodeProperties: serializeAws_restJson1NodeProperties(
        input.nodeProperties,
        context
      )
    }),
    ...(input.parameters !== undefined && {
      parameters: serializeAws_restJson1ParametersMap(input.parameters, context)
    }),
    ...(input.retryStrategy !== undefined && {
      retryStrategy: serializeAws_restJson1RetryStrategy(
        input.retryStrategy,
        context
      )
    }),
    ...(input.timeout !== undefined && {
      timeout: serializeAws_restJson1JobTimeout(input.timeout, context)
    }),
    ...(input.type !== undefined && { type: input.type })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1SubmitJobCommand = async (
  input: SubmitJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/submitjob";
  let body: any;
  body = JSON.stringify({
    ...(input.arrayProperties !== undefined && {
      arrayProperties: serializeAws_restJson1ArrayProperties(
        input.arrayProperties,
        context
      )
    }),
    ...(input.containerOverrides !== undefined && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(
        input.containerOverrides,
        context
      )
    }),
    ...(input.dependsOn !== undefined && {
      dependsOn: serializeAws_restJson1JobDependencyList(
        input.dependsOn,
        context
      )
    }),
    ...(input.jobDefinition !== undefined && {
      jobDefinition: input.jobDefinition
    }),
    ...(input.jobName !== undefined && { jobName: input.jobName }),
    ...(input.jobQueue !== undefined && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides !== undefined && {
      nodeOverrides: serializeAws_restJson1NodeOverrides(
        input.nodeOverrides,
        context
      )
    }),
    ...(input.parameters !== undefined && {
      parameters: serializeAws_restJson1ParametersMap(input.parameters, context)
    }),
    ...(input.retryStrategy !== undefined && {
      retryStrategy: serializeAws_restJson1RetryStrategy(
        input.retryStrategy,
        context
      )
    }),
    ...(input.timeout !== undefined && {
      timeout: serializeAws_restJson1JobTimeout(input.timeout, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1TerminateJobCommand = async (
  input: TerminateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/terminatejob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.reason !== undefined && { reason: input.reason })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateComputeEnvironmentCommand = async (
  input: UpdateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/updatecomputeenvironment";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined && {
      computeEnvironment: input.computeEnvironment
    }),
    ...(input.computeResources !== undefined && {
      computeResources: serializeAws_restJson1ComputeResourceUpdate(
        input.computeResources,
        context
      )
    }),
    ...(input.serviceRole !== undefined && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && { state: input.state })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateJobQueueCommand = async (
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/updatejobqueue";
  let body: any;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined && {
      computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(
        input.computeEnvironmentOrder,
        context
      )
    }),
    ...(input.jobQueue !== undefined && { jobQueue: input.jobQueue }),
    ...(input.priority !== undefined && { priority: input.priority }),
    ...(input.state !== undefined && { state: input.state })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateComputeEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: CreateComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateComputeEnvironmentResponse",
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.computeEnvironmentArn !== undefined &&
    data.computeEnvironmentArn !== null
  ) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (
    data.computeEnvironmentName !== undefined &&
    data.computeEnvironmentName !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateJobQueueCommandError(output, context);
  }
  const contents: CreateJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobQueueResponse",
    jobQueueArn: undefined,
    jobQueueName: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteComputeEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: DeleteComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteComputeEnvironmentResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteJobQueueCommandError(output, context);
  }
  const contents: DeleteJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJobQueueResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeregisterJobDefinitionCommandError(
      output,
      context
    );
  }
  const contents: DeregisterJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterJobDefinitionResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommandError(
      output,
      context
    );
  }
  const contents: DescribeComputeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeComputeEnvironmentsResponse",
    computeEnvironments: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.computeEnvironments !== undefined &&
    data.computeEnvironments !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeJobDefinitionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobDefinitionsResponse",
    jobDefinitions: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobDefinitions !== undefined && data.jobDefinitions !== null) {
    contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(
      data.jobDefinitions,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeJobQueuesCommandError(
      output,
      context
    );
  }
  const contents: DescribeJobQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobQueuesResponse",
    jobQueues: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobQueues !== undefined && data.jobQueues !== null) {
    contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(
      data.jobQueues,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents: DescribeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobsResponse",
    jobs: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResponse",
    jobSummaryList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
    contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(
      data.jobSummaryList,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RegisterJobDefinitionCommandError(
      output,
      context
    );
  }
  const contents: RegisterJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterJobDefinitionResponse",
    jobDefinitionArn: undefined,
    jobDefinitionName: undefined,
    revision: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SubmitJobCommandError(output, context);
  }
  const contents: SubmitJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubmitJobResponse",
    jobId: undefined,
    jobName: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TerminateJobCommandError(output, context);
  }
  const contents: TerminateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TerminateJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: UpdateComputeEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateComputeEnvironmentResponse",
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.computeEnvironmentArn !== undefined &&
    data.computeEnvironmentArn !== null
  ) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (
    data.computeEnvironmentName !== undefined &&
    data.computeEnvironmentName !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateJobQueueCommandError(output, context);
  }
  const contents: UpdateJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobQueueResponse",
    jobQueueArn: undefined,
    jobQueueName: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
    message: undefined
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1ArrayProperties = (
  input: ArrayProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.size !== undefined && { size: input.size })
  };
};

const serializeAws_restJson1ComputeEnvironmentOrder = (
  input: ComputeEnvironmentOrder,
  context: __SerdeContext
): any => {
  return {
    ...(input.computeEnvironment !== undefined && {
      computeEnvironment: input.computeEnvironment
    }),
    ...(input.order !== undefined && { order: input.order })
  };
};

const serializeAws_restJson1ComputeEnvironmentOrders = (
  input: ComputeEnvironmentOrder[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ComputeEnvironmentOrder(entry, context)
  );
};

const serializeAws_restJson1ComputeResource = (
  input: ComputeResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.allocationStrategy !== undefined && {
      allocationStrategy: input.allocationStrategy
    }),
    ...(input.bidPercentage !== undefined && {
      bidPercentage: input.bidPercentage
    }),
    ...(input.desiredvCpus !== undefined && {
      desiredvCpus: input.desiredvCpus
    }),
    ...(input.ec2KeyPair !== undefined && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId !== undefined && { imageId: input.imageId }),
    ...(input.instanceRole !== undefined && {
      instanceRole: input.instanceRole
    }),
    ...(input.instanceTypes !== undefined && {
      instanceTypes: serializeAws_restJson1StringList(
        input.instanceTypes,
        context
      )
    }),
    ...(input.launchTemplate !== undefined && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(
        input.launchTemplate,
        context
      )
    }),
    ...(input.maxvCpus !== undefined && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && { minvCpus: input.minvCpus }),
    ...(input.placementGroup !== undefined && {
      placementGroup: input.placementGroup
    }),
    ...(input.securityGroupIds !== undefined && {
      securityGroupIds: serializeAws_restJson1StringList(
        input.securityGroupIds,
        context
      )
    }),
    ...(input.spotIamFleetRole !== undefined && {
      spotIamFleetRole: input.spotIamFleetRole
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_restJson1StringList(input.subnets, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagsMap(input.tags, context)
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_restJson1ComputeResourceUpdate = (
  input: ComputeResourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.desiredvCpus !== undefined && {
      desiredvCpus: input.desiredvCpus
    }),
    ...(input.maxvCpus !== undefined && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && { minvCpus: input.minvCpus })
  };
};

const serializeAws_restJson1ContainerOverrides = (
  input: ContainerOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.command !== undefined && {
      command: serializeAws_restJson1StringList(input.command, context)
    }),
    ...(input.environment !== undefined && {
      environment: serializeAws_restJson1EnvironmentVariables(
        input.environment,
        context
      )
    }),
    ...(input.instanceType !== undefined && {
      instanceType: input.instanceType
    }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.resourceRequirements !== undefined && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(
        input.resourceRequirements,
        context
      )
    }),
    ...(input.vcpus !== undefined && { vcpus: input.vcpus })
  };
};

const serializeAws_restJson1ContainerProperties = (
  input: ContainerProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.command !== undefined && {
      command: serializeAws_restJson1StringList(input.command, context)
    }),
    ...(input.environment !== undefined && {
      environment: serializeAws_restJson1EnvironmentVariables(
        input.environment,
        context
      )
    }),
    ...(input.image !== undefined && { image: input.image }),
    ...(input.instanceType !== undefined && {
      instanceType: input.instanceType
    }),
    ...(input.jobRoleArn !== undefined && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters !== undefined && {
      linuxParameters: serializeAws_restJson1LinuxParameters(
        input.linuxParameters,
        context
      )
    }),
    ...(input.memory !== undefined && { memory: input.memory }),
    ...(input.mountPoints !== undefined && {
      mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context)
    }),
    ...(input.privileged !== undefined && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem !== undefined && {
      readonlyRootFilesystem: input.readonlyRootFilesystem
    }),
    ...(input.resourceRequirements !== undefined && {
      resourceRequirements: serializeAws_restJson1ResourceRequirements(
        input.resourceRequirements,
        context
      )
    }),
    ...(input.ulimits !== undefined && {
      ulimits: serializeAws_restJson1Ulimits(input.ulimits, context)
    }),
    ...(input.user !== undefined && { user: input.user }),
    ...(input.vcpus !== undefined && { vcpus: input.vcpus }),
    ...(input.volumes !== undefined && {
      volumes: serializeAws_restJson1Volumes(input.volumes, context)
    })
  };
};

const serializeAws_restJson1Device = (
  input: Device,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPath !== undefined && {
      containerPath: input.containerPath
    }),
    ...(input.hostPath !== undefined && { hostPath: input.hostPath }),
    ...(input.permissions !== undefined && {
      permissions: serializeAws_restJson1DeviceCgroupPermissions(
        input.permissions,
        context
      )
    })
  };
};

const serializeAws_restJson1DeviceCgroupPermissions = (
  input: (DeviceCgroupPermission | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1DevicesList = (
  input: Device[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Device(entry, context));
};

const serializeAws_restJson1EnvironmentVariables = (
  input: KeyValuePair[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1KeyValuePair(entry, context));
};

const serializeAws_restJson1Host = (
  input: Host,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourcePath !== undefined && { sourcePath: input.sourcePath })
  };
};

const serializeAws_restJson1JobDependency = (
  input: JobDependency,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_restJson1JobDependencyList = (
  input: JobDependency[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1JobDependency(entry, context)
  );
};

const serializeAws_restJson1JobTimeout = (
  input: JobTimeout,
  context: __SerdeContext
): any => {
  return {
    ...(input.attemptDurationSeconds !== undefined && {
      attemptDurationSeconds: input.attemptDurationSeconds
    })
  };
};

const serializeAws_restJson1KeyValuePair = (
  input: KeyValuePair,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId !== undefined && {
      launchTemplateId: input.launchTemplateId
    }),
    ...(input.launchTemplateName !== undefined && {
      launchTemplateName: input.launchTemplateName
    }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_restJson1LinuxParameters = (
  input: LinuxParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.devices !== undefined && {
      devices: serializeAws_restJson1DevicesList(input.devices, context)
    })
  };
};

const serializeAws_restJson1MountPoint = (
  input: MountPoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerPath !== undefined && {
      containerPath: input.containerPath
    }),
    ...(input.readOnly !== undefined && { readOnly: input.readOnly }),
    ...(input.sourceVolume !== undefined && {
      sourceVolume: input.sourceVolume
    })
  };
};

const serializeAws_restJson1MountPoints = (
  input: MountPoint[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1MountPoint(entry, context));
};

const serializeAws_restJson1NodeOverrides = (
  input: NodeOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.nodePropertyOverrides !== undefined && {
      nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(
        input.nodePropertyOverrides,
        context
      )
    }),
    ...(input.numNodes !== undefined && { numNodes: input.numNodes })
  };
};

const serializeAws_restJson1NodeProperties = (
  input: NodeProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.mainNode !== undefined && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties !== undefined && {
      nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(
        input.nodeRangeProperties,
        context
      )
    }),
    ...(input.numNodes !== undefined && { numNodes: input.numNodes })
  };
};

const serializeAws_restJson1NodePropertyOverride = (
  input: NodePropertyOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerOverrides !== undefined && {
      containerOverrides: serializeAws_restJson1ContainerOverrides(
        input.containerOverrides,
        context
      )
    }),
    ...(input.targetNodes !== undefined && { targetNodes: input.targetNodes })
  };
};

const serializeAws_restJson1NodePropertyOverrides = (
  input: NodePropertyOverride[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1NodePropertyOverride(entry, context)
  );
};

const serializeAws_restJson1NodeRangeProperties = (
  input: NodeRangeProperty[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1NodeRangeProperty(entry, context)
  );
};

const serializeAws_restJson1NodeRangeProperty = (
  input: NodeRangeProperty,
  context: __SerdeContext
): any => {
  return {
    ...(input.container !== undefined && {
      container: serializeAws_restJson1ContainerProperties(
        input.container,
        context
      )
    }),
    ...(input.targetNodes !== undefined && { targetNodes: input.targetNodes })
  };
};

const serializeAws_restJson1ParametersMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1ResourceRequirement = (
  input: ResourceRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1ResourceRequirements = (
  input: ResourceRequirement[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ResourceRequirement(entry, context)
  );
};

const serializeAws_restJson1RetryStrategy = (
  input: RetryStrategy,
  context: __SerdeContext
): any => {
  return {
    ...(input.attempts !== undefined && { attempts: input.attempts })
  };
};

const serializeAws_restJson1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TagsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1Ulimit = (
  input: Ulimit,
  context: __SerdeContext
): any => {
  return {
    ...(input.hardLimit !== undefined && { hardLimit: input.hardLimit }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.softLimit !== undefined && { softLimit: input.softLimit })
  };
};

const serializeAws_restJson1Ulimits = (
  input: Ulimit[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Ulimit(entry, context));
};

const serializeAws_restJson1Volume = (
  input: Volume,
  context: __SerdeContext
): any => {
  return {
    ...(input.host !== undefined && {
      host: serializeAws_restJson1Host(input.host, context)
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_restJson1Volumes = (
  input: Volume[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Volume(entry, context));
};

const deserializeAws_restJson1ArrayJobStatusSummary = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1ArrayPropertiesDetail = (
  output: any,
  context: __SerdeContext
): ArrayPropertiesDetail => {
  return {
    __type: "ArrayPropertiesDetail",
    index:
      output.index !== undefined && output.index !== null
        ? output.index
        : undefined,
    size:
      output.size !== undefined && output.size !== null
        ? output.size
        : undefined,
    statusSummary:
      output.statusSummary !== undefined && output.statusSummary !== null
        ? deserializeAws_restJson1ArrayJobStatusSummary(
            output.statusSummary,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ArrayPropertiesSummary = (
  output: any,
  context: __SerdeContext
): ArrayPropertiesSummary => {
  return {
    __type: "ArrayPropertiesSummary",
    index:
      output.index !== undefined && output.index !== null
        ? output.index
        : undefined,
    size:
      output.size !== undefined && output.size !== null
        ? output.size
        : undefined
  } as any;
};

const deserializeAws_restJson1AttemptContainerDetail = (
  output: any,
  context: __SerdeContext
): AttemptContainerDetail => {
  return {
    __type: "AttemptContainerDetail",
    containerInstanceArn:
      output.containerInstanceArn !== undefined &&
      output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    exitCode:
      output.exitCode !== undefined && output.exitCode !== null
        ? output.exitCode
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null
        ? output.logStreamName
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined &&
      output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(
            output.networkInterfaces,
            context
          )
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined,
    taskArn:
      output.taskArn !== undefined && output.taskArn !== null
        ? output.taskArn
        : undefined
  } as any;
};

const deserializeAws_restJson1AttemptDetail = (
  output: any,
  context: __SerdeContext
): AttemptDetail => {
  return {
    __type: "AttemptDetail",
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1AttemptContainerDetail(
            output.container,
            context
          )
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? output.startedAt
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    stoppedAt:
      output.stoppedAt !== undefined && output.stoppedAt !== null
        ? output.stoppedAt
        : undefined
  } as any;
};

const deserializeAws_restJson1AttemptDetails = (
  output: any,
  context: __SerdeContext
): AttemptDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AttemptDetail(entry, context)
  );
};

const deserializeAws_restJson1ComputeEnvironmentDetail = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail => {
  return {
    __type: "ComputeEnvironmentDetail",
    computeEnvironmentArn:
      output.computeEnvironmentArn !== undefined &&
      output.computeEnvironmentArn !== null
        ? output.computeEnvironmentArn
        : undefined,
    computeEnvironmentName:
      output.computeEnvironmentName !== undefined &&
      output.computeEnvironmentName !== null
        ? output.computeEnvironmentName
        : undefined,
    computeResources:
      output.computeResources !== undefined && output.computeResources !== null
        ? deserializeAws_restJson1ComputeResource(
            output.computeResources,
            context
          )
        : undefined,
    ecsClusterArn:
      output.ecsClusterArn !== undefined && output.ecsClusterArn !== null
        ? output.ecsClusterArn
        : undefined,
    serviceRole:
      output.serviceRole !== undefined && output.serviceRole !== null
        ? output.serviceRole
        : undefined,
    state:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1ComputeEnvironmentDetailList = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ComputeEnvironmentDetail(entry, context)
  );
};

const deserializeAws_restJson1ComputeEnvironmentOrder = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentOrder => {
  return {
    __type: "ComputeEnvironmentOrder",
    computeEnvironment:
      output.computeEnvironment !== undefined &&
      output.computeEnvironment !== null
        ? output.computeEnvironment
        : undefined,
    order:
      output.order !== undefined && output.order !== null
        ? output.order
        : undefined
  } as any;
};

const deserializeAws_restJson1ComputeEnvironmentOrders = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentOrder[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ComputeEnvironmentOrder(entry, context)
  );
};

const deserializeAws_restJson1ComputeResource = (
  output: any,
  context: __SerdeContext
): ComputeResource => {
  return {
    __type: "ComputeResource",
    allocationStrategy:
      output.allocationStrategy !== undefined &&
      output.allocationStrategy !== null
        ? output.allocationStrategy
        : undefined,
    bidPercentage:
      output.bidPercentage !== undefined && output.bidPercentage !== null
        ? output.bidPercentage
        : undefined,
    desiredvCpus:
      output.desiredvCpus !== undefined && output.desiredvCpus !== null
        ? output.desiredvCpus
        : undefined,
    ec2KeyPair:
      output.ec2KeyPair !== undefined && output.ec2KeyPair !== null
        ? output.ec2KeyPair
        : undefined,
    imageId:
      output.imageId !== undefined && output.imageId !== null
        ? output.imageId
        : undefined,
    instanceRole:
      output.instanceRole !== undefined && output.instanceRole !== null
        ? output.instanceRole
        : undefined,
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1LaunchTemplateSpecification(
            output.launchTemplate,
            context
          )
        : undefined,
    maxvCpus:
      output.maxvCpus !== undefined && output.maxvCpus !== null
        ? output.maxvCpus
        : undefined,
    minvCpus:
      output.minvCpus !== undefined && output.minvCpus !== null
        ? output.minvCpus
        : undefined,
    placementGroup:
      output.placementGroup !== undefined && output.placementGroup !== null
        ? output.placementGroup
        : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole:
      output.spotIamFleetRole !== undefined && output.spotIamFleetRole !== null
        ? output.spotIamFleetRole
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1ContainerDetail = (
  output: any,
  context: __SerdeContext
): ContainerDetail => {
  return {
    __type: "ContainerDetail",
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined &&
      output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.environment,
            context
          )
        : undefined,
    exitCode:
      output.exitCode !== undefined && output.exitCode !== null
        ? output.exitCode
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    instanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    jobRoleArn:
      output.jobRoleArn !== undefined && output.jobRoleArn !== null
        ? output.jobRoleArn
        : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(
            output.linuxParameters,
            context
          )
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null
        ? output.logStreamName
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined &&
      output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(
            output.networkInterfaces,
            context
          )
        : undefined,
    privileged:
      output.privileged !== undefined && output.privileged !== null
        ? output.privileged
        : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined &&
      output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined &&
      output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(
            output.resourceRequirements,
            context
          )
        : undefined,
    taskArn:
      output.taskArn !== undefined && output.taskArn !== null
        ? output.taskArn
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user:
      output.user !== undefined && output.user !== null
        ? output.user
        : undefined,
    vcpus:
      output.vcpus !== undefined && output.vcpus !== null
        ? output.vcpus
        : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ContainerProperties = (
  output: any,
  context: __SerdeContext
): ContainerProperties => {
  return {
    __type: "ContainerProperties",
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.environment,
            context
          )
        : undefined,
    image:
      output.image !== undefined && output.image !== null
        ? output.image
        : undefined,
    instanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    jobRoleArn:
      output.jobRoleArn !== undefined && output.jobRoleArn !== null
        ? output.jobRoleArn
        : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(
            output.linuxParameters,
            context
          )
        : undefined,
    memory:
      output.memory !== undefined && output.memory !== null
        ? output.memory
        : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    privileged:
      output.privileged !== undefined && output.privileged !== null
        ? output.privileged
        : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined &&
      output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined &&
      output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(
            output.resourceRequirements,
            context
          )
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user:
      output.user !== undefined && output.user !== null
        ? output.user
        : undefined,
    vcpus:
      output.vcpus !== undefined && output.vcpus !== null
        ? output.vcpus
        : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ContainerSummary = (
  output: any,
  context: __SerdeContext
): ContainerSummary => {
  return {
    __type: "ContainerSummary",
    exitCode:
      output.exitCode !== undefined && output.exitCode !== null
        ? output.exitCode
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined
  } as any;
};

const deserializeAws_restJson1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  return {
    __type: "Device",
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null
        ? output.containerPath
        : undefined,
    hostPath:
      output.hostPath !== undefined && output.hostPath !== null
        ? output.hostPath
        : undefined,
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? deserializeAws_restJson1DeviceCgroupPermissions(
            output.permissions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): (DeviceCgroupPermission | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1DevicesList = (
  output: any,
  context: __SerdeContext
): Device[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Device(entry, context)
  );
};

const deserializeAws_restJson1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): KeyValuePair[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1KeyValuePair(entry, context)
  );
};

const deserializeAws_restJson1Host = (
  output: any,
  context: __SerdeContext
): Host => {
  return {
    __type: "Host",
    sourcePath:
      output.sourcePath !== undefined && output.sourcePath !== null
        ? output.sourcePath
        : undefined
  } as any;
};

const deserializeAws_restJson1JobDefinition = (
  output: any,
  context: __SerdeContext
): JobDefinition => {
  return {
    __type: "JobDefinition",
    containerProperties:
      output.containerProperties !== undefined &&
      output.containerProperties !== null
        ? deserializeAws_restJson1ContainerProperties(
            output.containerProperties,
            context
          )
        : undefined,
    jobDefinitionArn:
      output.jobDefinitionArn !== undefined && output.jobDefinitionArn !== null
        ? output.jobDefinitionArn
        : undefined,
    jobDefinitionName:
      output.jobDefinitionName !== undefined &&
      output.jobDefinitionName !== null
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
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    revision:
      output.revision !== undefined && output.revision !== null
        ? output.revision
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1JobDefinitionList = (
  output: any,
  context: __SerdeContext
): JobDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobDefinition(entry, context)
  );
};

const deserializeAws_restJson1JobDependency = (
  output: any,
  context: __SerdeContext
): JobDependency => {
  return {
    __type: "JobDependency",
    jobId:
      output.jobId !== undefined && output.jobId !== null
        ? output.jobId
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1JobDependencyList = (
  output: any,
  context: __SerdeContext
): JobDependency[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobDependency(entry, context)
  );
};

const deserializeAws_restJson1JobDetail = (
  output: any,
  context: __SerdeContext
): JobDetail => {
  return {
    __type: "JobDetail",
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesDetail(
            output.arrayProperties,
            context
          )
        : undefined,
    attempts:
      output.attempts !== undefined && output.attempts !== null
        ? deserializeAws_restJson1AttemptDetails(output.attempts, context)
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerDetail(output.container, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? output.createdAt
        : undefined,
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context)
        : undefined,
    jobDefinition:
      output.jobDefinition !== undefined && output.jobDefinition !== null
        ? output.jobDefinition
        : undefined,
    jobId:
      output.jobId !== undefined && output.jobId !== null
        ? output.jobId
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    jobQueue:
      output.jobQueue !== undefined && output.jobQueue !== null
        ? output.jobQueue
        : undefined,
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
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? output.startedAt
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    stoppedAt:
      output.stoppedAt !== undefined && output.stoppedAt !== null
        ? output.stoppedAt
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1JobDetailList = (
  output: any,
  context: __SerdeContext
): JobDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobDetail(entry, context)
  );
};

const deserializeAws_restJson1JobQueueDetail = (
  output: any,
  context: __SerdeContext
): JobQueueDetail => {
  return {
    __type: "JobQueueDetail",
    computeEnvironmentOrder:
      output.computeEnvironmentOrder !== undefined &&
      output.computeEnvironmentOrder !== null
        ? deserializeAws_restJson1ComputeEnvironmentOrders(
            output.computeEnvironmentOrder,
            context
          )
        : undefined,
    jobQueueArn:
      output.jobQueueArn !== undefined && output.jobQueueArn !== null
        ? output.jobQueueArn
        : undefined,
    jobQueueName:
      output.jobQueueName !== undefined && output.jobQueueName !== null
        ? output.jobQueueName
        : undefined,
    priority:
      output.priority !== undefined && output.priority !== null
        ? output.priority
        : undefined,
    state:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined
  } as any;
};

const deserializeAws_restJson1JobQueueDetailList = (
  output: any,
  context: __SerdeContext
): JobQueueDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobQueueDetail(entry, context)
  );
};

const deserializeAws_restJson1JobSummary = (
  output: any,
  context: __SerdeContext
): JobSummary => {
  return {
    __type: "JobSummary",
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesSummary(
            output.arrayProperties,
            context
          )
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerSummary(output.container, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? output.createdAt
        : undefined,
    jobId:
      output.jobId !== undefined && output.jobId !== null
        ? output.jobId
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodePropertiesSummary(
            output.nodeProperties,
            context
          )
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? output.startedAt
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    stoppedAt:
      output.stoppedAt !== undefined && output.stoppedAt !== null
        ? output.stoppedAt
        : undefined
  } as any;
};

const deserializeAws_restJson1JobSummaryList = (
  output: any,
  context: __SerdeContext
): JobSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobSummary(entry, context)
  );
};

const deserializeAws_restJson1JobTimeout = (
  output: any,
  context: __SerdeContext
): JobTimeout => {
  return {
    __type: "JobTimeout",
    attemptDurationSeconds:
      output.attemptDurationSeconds !== undefined &&
      output.attemptDurationSeconds !== null
        ? output.attemptDurationSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1KeyValuePair = (
  output: any,
  context: __SerdeContext
): KeyValuePair => {
  return {
    __type: "KeyValuePair",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  return {
    __type: "LaunchTemplateSpecification",
    launchTemplateId:
      output.launchTemplateId !== undefined && output.launchTemplateId !== null
        ? output.launchTemplateId
        : undefined,
    launchTemplateName:
      output.launchTemplateName !== undefined &&
      output.launchTemplateName !== null
        ? output.launchTemplateName
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1LinuxParameters = (
  output: any,
  context: __SerdeContext
): LinuxParameters => {
  return {
    __type: "LinuxParameters",
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_restJson1DevicesList(output.devices, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MountPoint = (
  output: any,
  context: __SerdeContext
): MountPoint => {
  return {
    __type: "MountPoint",
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null
        ? output.containerPath
        : undefined,
    readOnly:
      output.readOnly !== undefined && output.readOnly !== null
        ? output.readOnly
        : undefined,
    sourceVolume:
      output.sourceVolume !== undefined && output.sourceVolume !== null
        ? output.sourceVolume
        : undefined
  } as any;
};

const deserializeAws_restJson1MountPoints = (
  output: any,
  context: __SerdeContext
): MountPoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MountPoint(entry, context)
  );
};

const deserializeAws_restJson1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  return {
    __type: "NetworkInterface",
    attachmentId:
      output.attachmentId !== undefined && output.attachmentId !== null
        ? output.attachmentId
        : undefined,
    ipv6Address:
      output.ipv6Address !== undefined && output.ipv6Address !== null
        ? output.ipv6Address
        : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined &&
      output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkInterfaceList = (
  output: any,
  context: __SerdeContext
): NetworkInterface[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1NetworkInterface(entry, context)
  );
};

const deserializeAws_restJson1NodeDetails = (
  output: any,
  context: __SerdeContext
): NodeDetails => {
  return {
    __type: "NodeDetails",
    isMainNode:
      output.isMainNode !== undefined && output.isMainNode !== null
        ? output.isMainNode
        : undefined,
    nodeIndex:
      output.nodeIndex !== undefined && output.nodeIndex !== null
        ? output.nodeIndex
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeProperties = (
  output: any,
  context: __SerdeContext
): NodeProperties => {
  return {
    __type: "NodeProperties",
    mainNode:
      output.mainNode !== undefined && output.mainNode !== null
        ? output.mainNode
        : undefined,
    nodeRangeProperties:
      output.nodeRangeProperties !== undefined &&
      output.nodeRangeProperties !== null
        ? deserializeAws_restJson1NodeRangeProperties(
            output.nodeRangeProperties,
            context
          )
        : undefined,
    numNodes:
      output.numNodes !== undefined && output.numNodes !== null
        ? output.numNodes
        : undefined
  } as any;
};

const deserializeAws_restJson1NodePropertiesSummary = (
  output: any,
  context: __SerdeContext
): NodePropertiesSummary => {
  return {
    __type: "NodePropertiesSummary",
    isMainNode:
      output.isMainNode !== undefined && output.isMainNode !== null
        ? output.isMainNode
        : undefined,
    nodeIndex:
      output.nodeIndex !== undefined && output.nodeIndex !== null
        ? output.nodeIndex
        : undefined,
    numNodes:
      output.numNodes !== undefined && output.numNodes !== null
        ? output.numNodes
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeRangeProperties = (
  output: any,
  context: __SerdeContext
): NodeRangeProperty[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1NodeRangeProperty(entry, context)
  );
};

const deserializeAws_restJson1NodeRangeProperty = (
  output: any,
  context: __SerdeContext
): NodeRangeProperty => {
  return {
    __type: "NodeRangeProperty",
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerProperties(output.container, context)
        : undefined,
    targetNodes:
      output.targetNodes !== undefined && output.targetNodes !== null
        ? output.targetNodes
        : undefined
  } as any;
};

const deserializeAws_restJson1ParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1ResourceRequirement = (
  output: any,
  context: __SerdeContext
): ResourceRequirement => {
  return {
    __type: "ResourceRequirement",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1ResourceRequirements = (
  output: any,
  context: __SerdeContext
): ResourceRequirement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResourceRequirement(entry, context)
  );
};

const deserializeAws_restJson1RetryStrategy = (
  output: any,
  context: __SerdeContext
): RetryStrategy => {
  return {
    __type: "RetryStrategy",
    attempts:
      output.attempts !== undefined && output.attempts !== null
        ? output.attempts
        : undefined
  } as any;
};

const deserializeAws_restJson1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1TagsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Ulimit = (
  output: any,
  context: __SerdeContext
): Ulimit => {
  return {
    __type: "Ulimit",
    hardLimit:
      output.hardLimit !== undefined && output.hardLimit !== null
        ? output.hardLimit
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    softLimit:
      output.softLimit !== undefined && output.softLimit !== null
        ? output.softLimit
        : undefined
  } as any;
};

const deserializeAws_restJson1Ulimits = (
  output: any,
  context: __SerdeContext
): Ulimit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Ulimit(entry, context)
  );
};

const deserializeAws_restJson1Volume = (
  output: any,
  context: __SerdeContext
): Volume => {
  return {
    __type: "Volume",
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_restJson1Host(output.host, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1Volumes = (
  output: any,
  context: __SerdeContext
): Volume[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Volume(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
