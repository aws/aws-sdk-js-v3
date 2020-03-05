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

export async function serializeAws_restJson1_1CancelJobCommand(
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/canceljob";
  let body: any;
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateComputeEnvironmentCommand(
  input: CreateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/createcomputeenvironment";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironmentName !== undefined) {
    bodyParams["computeEnvironmentName"] = input.computeEnvironmentName;
  }
  if (input.computeResources !== undefined) {
    bodyParams["computeResources"] = serializeAws_restJson1_1ComputeResource(
      input.computeResources,
      context
    );
  }
  if (input.serviceRole !== undefined) {
    bodyParams["serviceRole"] = input.serviceRole;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = input.state;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateJobQueueCommand(
  input: CreateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/createjobqueue";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironmentOrder !== undefined) {
    bodyParams[
      "computeEnvironmentOrder"
    ] = serializeAws_restJson1_1ComputeEnvironmentOrders(
      input.computeEnvironmentOrder,
      context
    );
  }
  if (input.jobQueueName !== undefined) {
    bodyParams["jobQueueName"] = input.jobQueueName;
  }
  if (input.priority !== undefined) {
    bodyParams["priority"] = input.priority;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = input.state;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteComputeEnvironmentCommand(
  input: DeleteComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/deletecomputeenvironment";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironment !== undefined) {
    bodyParams["computeEnvironment"] = input.computeEnvironment;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteJobQueueCommand(
  input: DeleteJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/deletejobqueue";
  let body: any;
  const bodyParams: any = {};
  if (input.jobQueue !== undefined) {
    bodyParams["jobQueue"] = input.jobQueue;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeregisterJobDefinitionCommand(
  input: DeregisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/deregisterjobdefinition";
  let body: any;
  const bodyParams: any = {};
  if (input.jobDefinition !== undefined) {
    bodyParams["jobDefinition"] = input.jobDefinition;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeComputeEnvironmentsCommand(
  input: DescribeComputeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/describecomputeenvironments";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironments !== undefined) {
    bodyParams["computeEnvironments"] = serializeAws_restJson1_1StringList(
      input.computeEnvironments,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeJobDefinitionsCommand(
  input: DescribeJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/describejobdefinitions";
  let body: any;
  const bodyParams: any = {};
  if (input.jobDefinitionName !== undefined) {
    bodyParams["jobDefinitionName"] = input.jobDefinitionName;
  }
  if (input.jobDefinitions !== undefined) {
    bodyParams["jobDefinitions"] = serializeAws_restJson1_1StringList(
      input.jobDefinitions,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeJobQueuesCommand(
  input: DescribeJobQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/describejobqueues";
  let body: any;
  const bodyParams: any = {};
  if (input.jobQueues !== undefined) {
    bodyParams["jobQueues"] = serializeAws_restJson1_1StringList(
      input.jobQueues,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeJobsCommand(
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/describejobs";
  let body: any;
  const bodyParams: any = {};
  if (input.jobs !== undefined) {
    bodyParams["jobs"] = serializeAws_restJson1_1StringList(
      input.jobs,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/listjobs";
  let body: any;
  const bodyParams: any = {};
  if (input.arrayJobId !== undefined) {
    bodyParams["arrayJobId"] = input.arrayJobId;
  }
  if (input.jobQueue !== undefined) {
    bodyParams["jobQueue"] = input.jobQueue;
  }
  if (input.jobStatus !== undefined) {
    bodyParams["jobStatus"] = input.jobStatus;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.multiNodeJobId !== undefined) {
    bodyParams["multiNodeJobId"] = input.multiNodeJobId;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RegisterJobDefinitionCommand(
  input: RegisterJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/registerjobdefinition";
  let body: any;
  const bodyParams: any = {};
  if (input.containerProperties !== undefined) {
    bodyParams[
      "containerProperties"
    ] = serializeAws_restJson1_1ContainerProperties(
      input.containerProperties,
      context
    );
  }
  if (input.jobDefinitionName !== undefined) {
    bodyParams["jobDefinitionName"] = input.jobDefinitionName;
  }
  if (input.nodeProperties !== undefined) {
    bodyParams["nodeProperties"] = serializeAws_restJson1_1NodeProperties(
      input.nodeProperties,
      context
    );
  }
  if (input.parameters !== undefined) {
    bodyParams["parameters"] = serializeAws_restJson1_1ParametersMap(
      input.parameters,
      context
    );
  }
  if (input.retryStrategy !== undefined) {
    bodyParams["retryStrategy"] = serializeAws_restJson1_1RetryStrategy(
      input.retryStrategy,
      context
    );
  }
  if (input.timeout !== undefined) {
    bodyParams["timeout"] = serializeAws_restJson1_1JobTimeout(
      input.timeout,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SubmitJobCommand(
  input: SubmitJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/submitjob";
  let body: any;
  const bodyParams: any = {};
  if (input.arrayProperties !== undefined) {
    bodyParams["arrayProperties"] = serializeAws_restJson1_1ArrayProperties(
      input.arrayProperties,
      context
    );
  }
  if (input.containerOverrides !== undefined) {
    bodyParams[
      "containerOverrides"
    ] = serializeAws_restJson1_1ContainerOverrides(
      input.containerOverrides,
      context
    );
  }
  if (input.dependsOn !== undefined) {
    bodyParams["dependsOn"] = serializeAws_restJson1_1JobDependencyList(
      input.dependsOn,
      context
    );
  }
  if (input.jobDefinition !== undefined) {
    bodyParams["jobDefinition"] = input.jobDefinition;
  }
  if (input.jobName !== undefined) {
    bodyParams["jobName"] = input.jobName;
  }
  if (input.jobQueue !== undefined) {
    bodyParams["jobQueue"] = input.jobQueue;
  }
  if (input.nodeOverrides !== undefined) {
    bodyParams["nodeOverrides"] = serializeAws_restJson1_1NodeOverrides(
      input.nodeOverrides,
      context
    );
  }
  if (input.parameters !== undefined) {
    bodyParams["parameters"] = serializeAws_restJson1_1ParametersMap(
      input.parameters,
      context
    );
  }
  if (input.retryStrategy !== undefined) {
    bodyParams["retryStrategy"] = serializeAws_restJson1_1RetryStrategy(
      input.retryStrategy,
      context
    );
  }
  if (input.timeout !== undefined) {
    bodyParams["timeout"] = serializeAws_restJson1_1JobTimeout(
      input.timeout,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TerminateJobCommand(
  input: TerminateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/terminatejob";
  let body: any;
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateComputeEnvironmentCommand(
  input: UpdateComputeEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/updatecomputeenvironment";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironment !== undefined) {
    bodyParams["computeEnvironment"] = input.computeEnvironment;
  }
  if (input.computeResources !== undefined) {
    bodyParams[
      "computeResources"
    ] = serializeAws_restJson1_1ComputeResourceUpdate(
      input.computeResources,
      context
    );
  }
  if (input.serviceRole !== undefined) {
    bodyParams["serviceRole"] = input.serviceRole;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = input.state;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateJobQueueCommand(
  input: UpdateJobQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/updatejobqueue";
  let body: any;
  const bodyParams: any = {};
  if (input.computeEnvironmentOrder !== undefined) {
    bodyParams[
      "computeEnvironmentOrder"
    ] = serializeAws_restJson1_1ComputeEnvironmentOrders(
      input.computeEnvironmentOrder,
      context
    );
  }
  if (input.jobQueue !== undefined) {
    bodyParams["jobQueue"] = input.jobQueue;
  }
  if (input.priority !== undefined) {
    bodyParams["priority"] = input.priority;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = input.state;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CancelJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateComputeEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateComputeEnvironmentCommandError(
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
}

async function deserializeAws_restJson1_1CreateComputeEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateJobQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateJobQueueCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1CreateJobQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteComputeEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteComputeEnvironmentCommandError(
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
}

async function deserializeAws_restJson1_1DeleteComputeEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteJobQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteJobQueueCommandError(
      output,
      context
    );
  }
  const contents: DeleteJobQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJobQueueResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteJobQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeregisterJobDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeregisterJobDefinitionCommandError(
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
}

async function deserializeAws_restJson1_1DeregisterJobDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterJobDefinitionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeComputeEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeComputeEnvironmentsCommandError(
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
    contents.computeEnvironments = deserializeAws_restJson1_1ComputeEnvironmentDetailList(
      data.computeEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeComputeEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComputeEnvironmentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeJobDefinitionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeJobDefinitionsCommandError(
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
    contents.jobDefinitions = deserializeAws_restJson1_1JobDefinitionList(
      data.jobDefinitions,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeJobDefinitionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobDefinitionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeJobQueuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeJobQueuesCommandError(
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
    contents.jobQueues = deserializeAws_restJson1_1JobQueueDetailList(
      data.jobQueues,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeJobQueuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobQueuesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeJobsCommandError(output, context);
  }
  const contents: DescribeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobsResponse",
    jobs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1_1JobDetailList(data.jobs, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResponse",
    jobSummaryList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
    contents.jobSummaryList = deserializeAws_restJson1_1JobSummaryList(
      data.jobSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RegisterJobDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RegisterJobDefinitionCommandError(
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
}

async function deserializeAws_restJson1_1RegisterJobDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterJobDefinitionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1SubmitJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SubmitJobCommandError(output, context);
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
}

async function deserializeAws_restJson1_1SubmitJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1TerminateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TerminateJobCommandError(output, context);
  }
  const contents: TerminateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TerminateJobResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TerminateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateComputeEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateComputeEnvironmentCommandError(
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
}

async function deserializeAws_restJson1_1UpdateComputeEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateJobQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateJobQueueCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1UpdateJobQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.dilithium.frontend#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.dilithium.frontend#ServerException":
      response = {
        ...(await deserializeAws_restJson1_1ServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1ClientExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ArrayProperties = (
  input: ArrayProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.size !== undefined) {
    bodyParams["size"] = input.size;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ComputeEnvironmentOrder = (
  input: ComputeEnvironmentOrder,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.computeEnvironment !== undefined) {
    bodyParams["computeEnvironment"] = input.computeEnvironment;
  }
  if (input.order !== undefined) {
    bodyParams["order"] = input.order;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ComputeEnvironmentOrders = (
  input: Array<ComputeEnvironmentOrder>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1ComputeEnvironmentOrder(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1ComputeResource = (
  input: ComputeResource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.allocationStrategy !== undefined) {
    bodyParams["allocationStrategy"] = input.allocationStrategy;
  }
  if (input.bidPercentage !== undefined) {
    bodyParams["bidPercentage"] = input.bidPercentage;
  }
  if (input.desiredvCpus !== undefined) {
    bodyParams["desiredvCpus"] = input.desiredvCpus;
  }
  if (input.ec2KeyPair !== undefined) {
    bodyParams["ec2KeyPair"] = input.ec2KeyPair;
  }
  if (input.imageId !== undefined) {
    bodyParams["imageId"] = input.imageId;
  }
  if (input.instanceRole !== undefined) {
    bodyParams["instanceRole"] = input.instanceRole;
  }
  if (input.instanceTypes !== undefined) {
    bodyParams["instanceTypes"] = serializeAws_restJson1_1StringList(
      input.instanceTypes,
      context
    );
  }
  if (input.launchTemplate !== undefined) {
    bodyParams[
      "launchTemplate"
    ] = serializeAws_restJson1_1LaunchTemplateSpecification(
      input.launchTemplate,
      context
    );
  }
  if (input.maxvCpus !== undefined) {
    bodyParams["maxvCpus"] = input.maxvCpus;
  }
  if (input.minvCpus !== undefined) {
    bodyParams["minvCpus"] = input.minvCpus;
  }
  if (input.placementGroup !== undefined) {
    bodyParams["placementGroup"] = input.placementGroup;
  }
  if (input.securityGroupIds !== undefined) {
    bodyParams["securityGroupIds"] = serializeAws_restJson1_1StringList(
      input.securityGroupIds,
      context
    );
  }
  if (input.spotIamFleetRole !== undefined) {
    bodyParams["spotIamFleetRole"] = input.spotIamFleetRole;
  }
  if (input.subnets !== undefined) {
    bodyParams["subnets"] = serializeAws_restJson1_1StringList(
      input.subnets,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ComputeResourceUpdate = (
  input: ComputeResourceUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.desiredvCpus !== undefined) {
    bodyParams["desiredvCpus"] = input.desiredvCpus;
  }
  if (input.maxvCpus !== undefined) {
    bodyParams["maxvCpus"] = input.maxvCpus;
  }
  if (input.minvCpus !== undefined) {
    bodyParams["minvCpus"] = input.minvCpus;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerOverrides = (
  input: ContainerOverrides,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.command !== undefined) {
    bodyParams["command"] = serializeAws_restJson1_1StringList(
      input.command,
      context
    );
  }
  if (input.environment !== undefined) {
    bodyParams["environment"] = serializeAws_restJson1_1EnvironmentVariables(
      input.environment,
      context
    );
  }
  if (input.instanceType !== undefined) {
    bodyParams["instanceType"] = input.instanceType;
  }
  if (input.memory !== undefined) {
    bodyParams["memory"] = input.memory;
  }
  if (input.resourceRequirements !== undefined) {
    bodyParams[
      "resourceRequirements"
    ] = serializeAws_restJson1_1ResourceRequirements(
      input.resourceRequirements,
      context
    );
  }
  if (input.vcpus !== undefined) {
    bodyParams["vcpus"] = input.vcpus;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerProperties = (
  input: ContainerProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.command !== undefined) {
    bodyParams["command"] = serializeAws_restJson1_1StringList(
      input.command,
      context
    );
  }
  if (input.environment !== undefined) {
    bodyParams["environment"] = serializeAws_restJson1_1EnvironmentVariables(
      input.environment,
      context
    );
  }
  if (input.image !== undefined) {
    bodyParams["image"] = input.image;
  }
  if (input.instanceType !== undefined) {
    bodyParams["instanceType"] = input.instanceType;
  }
  if (input.jobRoleArn !== undefined) {
    bodyParams["jobRoleArn"] = input.jobRoleArn;
  }
  if (input.linuxParameters !== undefined) {
    bodyParams["linuxParameters"] = serializeAws_restJson1_1LinuxParameters(
      input.linuxParameters,
      context
    );
  }
  if (input.memory !== undefined) {
    bodyParams["memory"] = input.memory;
  }
  if (input.mountPoints !== undefined) {
    bodyParams["mountPoints"] = serializeAws_restJson1_1MountPoints(
      input.mountPoints,
      context
    );
  }
  if (input.privileged !== undefined) {
    bodyParams["privileged"] = input.privileged;
  }
  if (input.readonlyRootFilesystem !== undefined) {
    bodyParams["readonlyRootFilesystem"] = input.readonlyRootFilesystem;
  }
  if (input.resourceRequirements !== undefined) {
    bodyParams[
      "resourceRequirements"
    ] = serializeAws_restJson1_1ResourceRequirements(
      input.resourceRequirements,
      context
    );
  }
  if (input.ulimits !== undefined) {
    bodyParams["ulimits"] = serializeAws_restJson1_1Ulimits(
      input.ulimits,
      context
    );
  }
  if (input.user !== undefined) {
    bodyParams["user"] = input.user;
  }
  if (input.vcpus !== undefined) {
    bodyParams["vcpus"] = input.vcpus;
  }
  if (input.volumes !== undefined) {
    bodyParams["volumes"] = serializeAws_restJson1_1Volumes(
      input.volumes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Device = (
  input: Device,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.containerPath !== undefined) {
    bodyParams["containerPath"] = input.containerPath;
  }
  if (input.hostPath !== undefined) {
    bodyParams["hostPath"] = input.hostPath;
  }
  if (input.permissions !== undefined) {
    bodyParams["permissions"] = serializeAws_restJson1_1DeviceCgroupPermissions(
      input.permissions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeviceCgroupPermissions = (
  input: Array<DeviceCgroupPermission | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DevicesList = (
  input: Array<Device>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Device(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1EnvironmentVariables = (
  input: Array<KeyValuePair>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1KeyValuePair(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Host = (
  input: Host,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.sourcePath !== undefined) {
    bodyParams["sourcePath"] = input.sourcePath;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobDependency = (
  input: JobDependency,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobDependencyList = (
  input: Array<JobDependency>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1JobDependency(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1JobTimeout = (
  input: JobTimeout,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attemptDurationSeconds !== undefined) {
    bodyParams["attemptDurationSeconds"] = input.attemptDurationSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1KeyValuePair = (
  input: KeyValuePair,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.launchTemplateId !== undefined) {
    bodyParams["launchTemplateId"] = input.launchTemplateId;
  }
  if (input.launchTemplateName !== undefined) {
    bodyParams["launchTemplateName"] = input.launchTemplateName;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LinuxParameters = (
  input: LinuxParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.devices !== undefined) {
    bodyParams["devices"] = serializeAws_restJson1_1DevicesList(
      input.devices,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MountPoint = (
  input: MountPoint,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.containerPath !== undefined) {
    bodyParams["containerPath"] = input.containerPath;
  }
  if (input.readOnly !== undefined) {
    bodyParams["readOnly"] = input.readOnly;
  }
  if (input.sourceVolume !== undefined) {
    bodyParams["sourceVolume"] = input.sourceVolume;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MountPoints = (
  input: Array<MountPoint>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1MountPoint(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1NodeOverrides = (
  input: NodeOverrides,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nodePropertyOverrides !== undefined) {
    bodyParams[
      "nodePropertyOverrides"
    ] = serializeAws_restJson1_1NodePropertyOverrides(
      input.nodePropertyOverrides,
      context
    );
  }
  if (input.numNodes !== undefined) {
    bodyParams["numNodes"] = input.numNodes;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NodeProperties = (
  input: NodeProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.mainNode !== undefined) {
    bodyParams["mainNode"] = input.mainNode;
  }
  if (input.nodeRangeProperties !== undefined) {
    bodyParams[
      "nodeRangeProperties"
    ] = serializeAws_restJson1_1NodeRangeProperties(
      input.nodeRangeProperties,
      context
    );
  }
  if (input.numNodes !== undefined) {
    bodyParams["numNodes"] = input.numNodes;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NodePropertyOverride = (
  input: NodePropertyOverride,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.containerOverrides !== undefined) {
    bodyParams[
      "containerOverrides"
    ] = serializeAws_restJson1_1ContainerOverrides(
      input.containerOverrides,
      context
    );
  }
  if (input.targetNodes !== undefined) {
    bodyParams["targetNodes"] = input.targetNodes;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NodePropertyOverrides = (
  input: Array<NodePropertyOverride>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1NodePropertyOverride(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1NodeRangeProperties = (
  input: Array<NodeRangeProperty>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1NodeRangeProperty(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1NodeRangeProperty = (
  input: NodeRangeProperty,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.container !== undefined) {
    bodyParams["container"] = serializeAws_restJson1_1ContainerProperties(
      input.container,
      context
    );
  }
  if (input.targetNodes !== undefined) {
    bodyParams["targetNodes"] = input.targetNodes;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ParametersMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ResourceRequirement = (
  input: ResourceRequirement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceRequirements = (
  input: Array<ResourceRequirement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1ResourceRequirement(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1RetryStrategy = (
  input: RetryStrategy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attempts !== undefined) {
    bodyParams["attempts"] = input.attempts;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1Ulimit = (
  input: Ulimit,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.hardLimit !== undefined) {
    bodyParams["hardLimit"] = input.hardLimit;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.softLimit !== undefined) {
    bodyParams["softLimit"] = input.softLimit;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Ulimits = (
  input: Array<Ulimit>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Ulimit(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Volume = (
  input: Volume,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.host !== undefined) {
    bodyParams["host"] = serializeAws_restJson1_1Host(input.host, context);
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Volumes = (
  input: Array<Volume>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Volume(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1ArrayJobStatusSummary = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ArrayPropertiesDetail = (
  output: any,
  context: __SerdeContext
): ArrayPropertiesDetail => {
  let contents: any = {
    __type: "ArrayPropertiesDetail",
    index: undefined,
    size: undefined,
    statusSummary: undefined
  };
  if (output.index !== undefined && output.index !== null) {
    contents.index = output.index;
  }
  if (output.size !== undefined && output.size !== null) {
    contents.size = output.size;
  }
  if (output.statusSummary !== undefined && output.statusSummary !== null) {
    contents.statusSummary = deserializeAws_restJson1_1ArrayJobStatusSummary(
      output.statusSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ArrayPropertiesSummary = (
  output: any,
  context: __SerdeContext
): ArrayPropertiesSummary => {
  let contents: any = {
    __type: "ArrayPropertiesSummary",
    index: undefined,
    size: undefined
  };
  if (output.index !== undefined && output.index !== null) {
    contents.index = output.index;
  }
  if (output.size !== undefined && output.size !== null) {
    contents.size = output.size;
  }
  return contents;
};

const deserializeAws_restJson1_1AttemptContainerDetail = (
  output: any,
  context: __SerdeContext
): AttemptContainerDetail => {
  let contents: any = {
    __type: "AttemptContainerDetail",
    containerInstanceArn: undefined,
    exitCode: undefined,
    logStreamName: undefined,
    networkInterfaces: undefined,
    reason: undefined,
    taskArn: undefined
  };
  if (
    output.containerInstanceArn !== undefined &&
    output.containerInstanceArn !== null
  ) {
    contents.containerInstanceArn = output.containerInstanceArn;
  }
  if (output.exitCode !== undefined && output.exitCode !== null) {
    contents.exitCode = output.exitCode;
  }
  if (output.logStreamName !== undefined && output.logStreamName !== null) {
    contents.logStreamName = output.logStreamName;
  }
  if (
    output.networkInterfaces !== undefined &&
    output.networkInterfaces !== null
  ) {
    contents.networkInterfaces = deserializeAws_restJson1_1NetworkInterfaceList(
      output.networkInterfaces,
      context
    );
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (output.taskArn !== undefined && output.taskArn !== null) {
    contents.taskArn = output.taskArn;
  }
  return contents;
};

const deserializeAws_restJson1_1AttemptDetail = (
  output: any,
  context: __SerdeContext
): AttemptDetail => {
  let contents: any = {
    __type: "AttemptDetail",
    container: undefined,
    startedAt: undefined,
    statusReason: undefined,
    stoppedAt: undefined
  };
  if (output.container !== undefined && output.container !== null) {
    contents.container = deserializeAws_restJson1_1AttemptContainerDetail(
      output.container,
      context
    );
  }
  if (output.startedAt !== undefined && output.startedAt !== null) {
    contents.startedAt = output.startedAt;
  }
  if (output.statusReason !== undefined && output.statusReason !== null) {
    contents.statusReason = output.statusReason;
  }
  if (output.stoppedAt !== undefined && output.stoppedAt !== null) {
    contents.stoppedAt = output.stoppedAt;
  }
  return contents;
};

const deserializeAws_restJson1_1AttemptDetails = (
  output: any,
  context: __SerdeContext
): Array<AttemptDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AttemptDetail(entry, context)
  );
};

const deserializeAws_restJson1_1ComputeEnvironmentDetail = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentDetail => {
  let contents: any = {
    __type: "ComputeEnvironmentDetail",
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined,
    computeResources: undefined,
    ecsClusterArn: undefined,
    serviceRole: undefined,
    state: undefined,
    status: undefined,
    statusReason: undefined,
    type: undefined
  };
  if (
    output.computeEnvironmentArn !== undefined &&
    output.computeEnvironmentArn !== null
  ) {
    contents.computeEnvironmentArn = output.computeEnvironmentArn;
  }
  if (
    output.computeEnvironmentName !== undefined &&
    output.computeEnvironmentName !== null
  ) {
    contents.computeEnvironmentName = output.computeEnvironmentName;
  }
  if (
    output.computeResources !== undefined &&
    output.computeResources !== null
  ) {
    contents.computeResources = deserializeAws_restJson1_1ComputeResource(
      output.computeResources,
      context
    );
  }
  if (output.ecsClusterArn !== undefined && output.ecsClusterArn !== null) {
    contents.ecsClusterArn = output.ecsClusterArn;
  }
  if (output.serviceRole !== undefined && output.serviceRole !== null) {
    contents.serviceRole = output.serviceRole;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined && output.statusReason !== null) {
    contents.statusReason = output.statusReason;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ComputeEnvironmentDetailList = (
  output: any,
  context: __SerdeContext
): Array<ComputeEnvironmentDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ComputeEnvironmentDetail(entry, context)
  );
};

const deserializeAws_restJson1_1ComputeEnvironmentOrder = (
  output: any,
  context: __SerdeContext
): ComputeEnvironmentOrder => {
  let contents: any = {
    __type: "ComputeEnvironmentOrder",
    computeEnvironment: undefined,
    order: undefined
  };
  if (
    output.computeEnvironment !== undefined &&
    output.computeEnvironment !== null
  ) {
    contents.computeEnvironment = output.computeEnvironment;
  }
  if (output.order !== undefined && output.order !== null) {
    contents.order = output.order;
  }
  return contents;
};

const deserializeAws_restJson1_1ComputeEnvironmentOrders = (
  output: any,
  context: __SerdeContext
): Array<ComputeEnvironmentOrder> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ComputeEnvironmentOrder(entry, context)
  );
};

const deserializeAws_restJson1_1ComputeResource = (
  output: any,
  context: __SerdeContext
): ComputeResource => {
  let contents: any = {
    __type: "ComputeResource",
    allocationStrategy: undefined,
    bidPercentage: undefined,
    desiredvCpus: undefined,
    ec2KeyPair: undefined,
    imageId: undefined,
    instanceRole: undefined,
    instanceTypes: undefined,
    launchTemplate: undefined,
    maxvCpus: undefined,
    minvCpus: undefined,
    placementGroup: undefined,
    securityGroupIds: undefined,
    spotIamFleetRole: undefined,
    subnets: undefined,
    tags: undefined,
    type: undefined
  };
  if (
    output.allocationStrategy !== undefined &&
    output.allocationStrategy !== null
  ) {
    contents.allocationStrategy = output.allocationStrategy;
  }
  if (output.bidPercentage !== undefined && output.bidPercentage !== null) {
    contents.bidPercentage = output.bidPercentage;
  }
  if (output.desiredvCpus !== undefined && output.desiredvCpus !== null) {
    contents.desiredvCpus = output.desiredvCpus;
  }
  if (output.ec2KeyPair !== undefined && output.ec2KeyPair !== null) {
    contents.ec2KeyPair = output.ec2KeyPair;
  }
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.imageId = output.imageId;
  }
  if (output.instanceRole !== undefined && output.instanceRole !== null) {
    contents.instanceRole = output.instanceRole;
  }
  if (output.instanceTypes !== undefined && output.instanceTypes !== null) {
    contents.instanceTypes = deserializeAws_restJson1_1StringList(
      output.instanceTypes,
      context
    );
  }
  if (output.launchTemplate !== undefined && output.launchTemplate !== null) {
    contents.launchTemplate = deserializeAws_restJson1_1LaunchTemplateSpecification(
      output.launchTemplate,
      context
    );
  }
  if (output.maxvCpus !== undefined && output.maxvCpus !== null) {
    contents.maxvCpus = output.maxvCpus;
  }
  if (output.minvCpus !== undefined && output.minvCpus !== null) {
    contents.minvCpus = output.minvCpus;
  }
  if (output.placementGroup !== undefined && output.placementGroup !== null) {
    contents.placementGroup = output.placementGroup;
  }
  if (
    output.securityGroupIds !== undefined &&
    output.securityGroupIds !== null
  ) {
    contents.securityGroupIds = deserializeAws_restJson1_1StringList(
      output.securityGroupIds,
      context
    );
  }
  if (
    output.spotIamFleetRole !== undefined &&
    output.spotIamFleetRole !== null
  ) {
    contents.spotIamFleetRole = output.spotIamFleetRole;
  }
  if (output.subnets !== undefined && output.subnets !== null) {
    contents.subnets = deserializeAws_restJson1_1StringList(
      output.subnets,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerDetail = (
  output: any,
  context: __SerdeContext
): ContainerDetail => {
  let contents: any = {
    __type: "ContainerDetail",
    command: undefined,
    containerInstanceArn: undefined,
    environment: undefined,
    exitCode: undefined,
    image: undefined,
    instanceType: undefined,
    jobRoleArn: undefined,
    linuxParameters: undefined,
    logStreamName: undefined,
    memory: undefined,
    mountPoints: undefined,
    networkInterfaces: undefined,
    privileged: undefined,
    readonlyRootFilesystem: undefined,
    reason: undefined,
    resourceRequirements: undefined,
    taskArn: undefined,
    ulimits: undefined,
    user: undefined,
    vcpus: undefined,
    volumes: undefined
  };
  if (output.command !== undefined && output.command !== null) {
    contents.command = deserializeAws_restJson1_1StringList(
      output.command,
      context
    );
  }
  if (
    output.containerInstanceArn !== undefined &&
    output.containerInstanceArn !== null
  ) {
    contents.containerInstanceArn = output.containerInstanceArn;
  }
  if (output.environment !== undefined && output.environment !== null) {
    contents.environment = deserializeAws_restJson1_1EnvironmentVariables(
      output.environment,
      context
    );
  }
  if (output.exitCode !== undefined && output.exitCode !== null) {
    contents.exitCode = output.exitCode;
  }
  if (output.image !== undefined && output.image !== null) {
    contents.image = output.image;
  }
  if (output.instanceType !== undefined && output.instanceType !== null) {
    contents.instanceType = output.instanceType;
  }
  if (output.jobRoleArn !== undefined && output.jobRoleArn !== null) {
    contents.jobRoleArn = output.jobRoleArn;
  }
  if (output.linuxParameters !== undefined && output.linuxParameters !== null) {
    contents.linuxParameters = deserializeAws_restJson1_1LinuxParameters(
      output.linuxParameters,
      context
    );
  }
  if (output.logStreamName !== undefined && output.logStreamName !== null) {
    contents.logStreamName = output.logStreamName;
  }
  if (output.memory !== undefined && output.memory !== null) {
    contents.memory = output.memory;
  }
  if (output.mountPoints !== undefined && output.mountPoints !== null) {
    contents.mountPoints = deserializeAws_restJson1_1MountPoints(
      output.mountPoints,
      context
    );
  }
  if (
    output.networkInterfaces !== undefined &&
    output.networkInterfaces !== null
  ) {
    contents.networkInterfaces = deserializeAws_restJson1_1NetworkInterfaceList(
      output.networkInterfaces,
      context
    );
  }
  if (output.privileged !== undefined && output.privileged !== null) {
    contents.privileged = output.privileged;
  }
  if (
    output.readonlyRootFilesystem !== undefined &&
    output.readonlyRootFilesystem !== null
  ) {
    contents.readonlyRootFilesystem = output.readonlyRootFilesystem;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (
    output.resourceRequirements !== undefined &&
    output.resourceRequirements !== null
  ) {
    contents.resourceRequirements = deserializeAws_restJson1_1ResourceRequirements(
      output.resourceRequirements,
      context
    );
  }
  if (output.taskArn !== undefined && output.taskArn !== null) {
    contents.taskArn = output.taskArn;
  }
  if (output.ulimits !== undefined && output.ulimits !== null) {
    contents.ulimits = deserializeAws_restJson1_1Ulimits(
      output.ulimits,
      context
    );
  }
  if (output.user !== undefined && output.user !== null) {
    contents.user = output.user;
  }
  if (output.vcpus !== undefined && output.vcpus !== null) {
    contents.vcpus = output.vcpus;
  }
  if (output.volumes !== undefined && output.volumes !== null) {
    contents.volumes = deserializeAws_restJson1_1Volumes(
      output.volumes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerProperties = (
  output: any,
  context: __SerdeContext
): ContainerProperties => {
  let contents: any = {
    __type: "ContainerProperties",
    command: undefined,
    environment: undefined,
    image: undefined,
    instanceType: undefined,
    jobRoleArn: undefined,
    linuxParameters: undefined,
    memory: undefined,
    mountPoints: undefined,
    privileged: undefined,
    readonlyRootFilesystem: undefined,
    resourceRequirements: undefined,
    ulimits: undefined,
    user: undefined,
    vcpus: undefined,
    volumes: undefined
  };
  if (output.command !== undefined && output.command !== null) {
    contents.command = deserializeAws_restJson1_1StringList(
      output.command,
      context
    );
  }
  if (output.environment !== undefined && output.environment !== null) {
    contents.environment = deserializeAws_restJson1_1EnvironmentVariables(
      output.environment,
      context
    );
  }
  if (output.image !== undefined && output.image !== null) {
    contents.image = output.image;
  }
  if (output.instanceType !== undefined && output.instanceType !== null) {
    contents.instanceType = output.instanceType;
  }
  if (output.jobRoleArn !== undefined && output.jobRoleArn !== null) {
    contents.jobRoleArn = output.jobRoleArn;
  }
  if (output.linuxParameters !== undefined && output.linuxParameters !== null) {
    contents.linuxParameters = deserializeAws_restJson1_1LinuxParameters(
      output.linuxParameters,
      context
    );
  }
  if (output.memory !== undefined && output.memory !== null) {
    contents.memory = output.memory;
  }
  if (output.mountPoints !== undefined && output.mountPoints !== null) {
    contents.mountPoints = deserializeAws_restJson1_1MountPoints(
      output.mountPoints,
      context
    );
  }
  if (output.privileged !== undefined && output.privileged !== null) {
    contents.privileged = output.privileged;
  }
  if (
    output.readonlyRootFilesystem !== undefined &&
    output.readonlyRootFilesystem !== null
  ) {
    contents.readonlyRootFilesystem = output.readonlyRootFilesystem;
  }
  if (
    output.resourceRequirements !== undefined &&
    output.resourceRequirements !== null
  ) {
    contents.resourceRequirements = deserializeAws_restJson1_1ResourceRequirements(
      output.resourceRequirements,
      context
    );
  }
  if (output.ulimits !== undefined && output.ulimits !== null) {
    contents.ulimits = deserializeAws_restJson1_1Ulimits(
      output.ulimits,
      context
    );
  }
  if (output.user !== undefined && output.user !== null) {
    contents.user = output.user;
  }
  if (output.vcpus !== undefined && output.vcpus !== null) {
    contents.vcpus = output.vcpus;
  }
  if (output.volumes !== undefined && output.volumes !== null) {
    contents.volumes = deserializeAws_restJson1_1Volumes(
      output.volumes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerSummary = (
  output: any,
  context: __SerdeContext
): ContainerSummary => {
  let contents: any = {
    __type: "ContainerSummary",
    exitCode: undefined,
    reason: undefined
  };
  if (output.exitCode !== undefined && output.exitCode !== null) {
    contents.exitCode = output.exitCode;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  return contents;
};

const deserializeAws_restJson1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  let contents: any = {
    __type: "Device",
    containerPath: undefined,
    hostPath: undefined,
    permissions: undefined
  };
  if (output.containerPath !== undefined && output.containerPath !== null) {
    contents.containerPath = output.containerPath;
  }
  if (output.hostPath !== undefined && output.hostPath !== null) {
    contents.hostPath = output.hostPath;
  }
  if (output.permissions !== undefined && output.permissions !== null) {
    contents.permissions = deserializeAws_restJson1_1DeviceCgroupPermissions(
      output.permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceCgroupPermissions = (
  output: any,
  context: __SerdeContext
): Array<DeviceCgroupPermission | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DevicesList = (
  output: any,
  context: __SerdeContext
): Array<Device> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Device(entry, context)
  );
};

const deserializeAws_restJson1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): Array<KeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1KeyValuePair(entry, context)
  );
};

const deserializeAws_restJson1_1Host = (
  output: any,
  context: __SerdeContext
): Host => {
  let contents: any = {
    __type: "Host",
    sourcePath: undefined
  };
  if (output.sourcePath !== undefined && output.sourcePath !== null) {
    contents.sourcePath = output.sourcePath;
  }
  return contents;
};

const deserializeAws_restJson1_1JobDefinition = (
  output: any,
  context: __SerdeContext
): JobDefinition => {
  let contents: any = {
    __type: "JobDefinition",
    containerProperties: undefined,
    jobDefinitionArn: undefined,
    jobDefinitionName: undefined,
    nodeProperties: undefined,
    parameters: undefined,
    retryStrategy: undefined,
    revision: undefined,
    status: undefined,
    timeout: undefined,
    type: undefined
  };
  if (
    output.containerProperties !== undefined &&
    output.containerProperties !== null
  ) {
    contents.containerProperties = deserializeAws_restJson1_1ContainerProperties(
      output.containerProperties,
      context
    );
  }
  if (
    output.jobDefinitionArn !== undefined &&
    output.jobDefinitionArn !== null
  ) {
    contents.jobDefinitionArn = output.jobDefinitionArn;
  }
  if (
    output.jobDefinitionName !== undefined &&
    output.jobDefinitionName !== null
  ) {
    contents.jobDefinitionName = output.jobDefinitionName;
  }
  if (output.nodeProperties !== undefined && output.nodeProperties !== null) {
    contents.nodeProperties = deserializeAws_restJson1_1NodeProperties(
      output.nodeProperties,
      context
    );
  }
  if (output.parameters !== undefined && output.parameters !== null) {
    contents.parameters = deserializeAws_restJson1_1ParametersMap(
      output.parameters,
      context
    );
  }
  if (output.retryStrategy !== undefined && output.retryStrategy !== null) {
    contents.retryStrategy = deserializeAws_restJson1_1RetryStrategy(
      output.retryStrategy,
      context
    );
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.revision = output.revision;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.timeout !== undefined && output.timeout !== null) {
    contents.timeout = deserializeAws_restJson1_1JobTimeout(
      output.timeout,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1JobDefinitionList = (
  output: any,
  context: __SerdeContext
): Array<JobDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobDefinition(entry, context)
  );
};

const deserializeAws_restJson1_1JobDependency = (
  output: any,
  context: __SerdeContext
): JobDependency => {
  let contents: any = {
    __type: "JobDependency",
    jobId: undefined,
    type: undefined
  };
  if (output.jobId !== undefined && output.jobId !== null) {
    contents.jobId = output.jobId;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1JobDependencyList = (
  output: any,
  context: __SerdeContext
): Array<JobDependency> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobDependency(entry, context)
  );
};

const deserializeAws_restJson1_1JobDetail = (
  output: any,
  context: __SerdeContext
): JobDetail => {
  let contents: any = {
    __type: "JobDetail",
    arrayProperties: undefined,
    attempts: undefined,
    container: undefined,
    createdAt: undefined,
    dependsOn: undefined,
    jobDefinition: undefined,
    jobId: undefined,
    jobName: undefined,
    jobQueue: undefined,
    nodeDetails: undefined,
    nodeProperties: undefined,
    parameters: undefined,
    retryStrategy: undefined,
    startedAt: undefined,
    status: undefined,
    statusReason: undefined,
    stoppedAt: undefined,
    timeout: undefined
  };
  if (output.arrayProperties !== undefined && output.arrayProperties !== null) {
    contents.arrayProperties = deserializeAws_restJson1_1ArrayPropertiesDetail(
      output.arrayProperties,
      context
    );
  }
  if (output.attempts !== undefined && output.attempts !== null) {
    contents.attempts = deserializeAws_restJson1_1AttemptDetails(
      output.attempts,
      context
    );
  }
  if (output.container !== undefined && output.container !== null) {
    contents.container = deserializeAws_restJson1_1ContainerDetail(
      output.container,
      context
    );
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = output.createdAt;
  }
  if (output.dependsOn !== undefined && output.dependsOn !== null) {
    contents.dependsOn = deserializeAws_restJson1_1JobDependencyList(
      output.dependsOn,
      context
    );
  }
  if (output.jobDefinition !== undefined && output.jobDefinition !== null) {
    contents.jobDefinition = output.jobDefinition;
  }
  if (output.jobId !== undefined && output.jobId !== null) {
    contents.jobId = output.jobId;
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (output.jobQueue !== undefined && output.jobQueue !== null) {
    contents.jobQueue = output.jobQueue;
  }
  if (output.nodeDetails !== undefined && output.nodeDetails !== null) {
    contents.nodeDetails = deserializeAws_restJson1_1NodeDetails(
      output.nodeDetails,
      context
    );
  }
  if (output.nodeProperties !== undefined && output.nodeProperties !== null) {
    contents.nodeProperties = deserializeAws_restJson1_1NodeProperties(
      output.nodeProperties,
      context
    );
  }
  if (output.parameters !== undefined && output.parameters !== null) {
    contents.parameters = deserializeAws_restJson1_1ParametersMap(
      output.parameters,
      context
    );
  }
  if (output.retryStrategy !== undefined && output.retryStrategy !== null) {
    contents.retryStrategy = deserializeAws_restJson1_1RetryStrategy(
      output.retryStrategy,
      context
    );
  }
  if (output.startedAt !== undefined && output.startedAt !== null) {
    contents.startedAt = output.startedAt;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined && output.statusReason !== null) {
    contents.statusReason = output.statusReason;
  }
  if (output.stoppedAt !== undefined && output.stoppedAt !== null) {
    contents.stoppedAt = output.stoppedAt;
  }
  if (output.timeout !== undefined && output.timeout !== null) {
    contents.timeout = deserializeAws_restJson1_1JobTimeout(
      output.timeout,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobDetailList = (
  output: any,
  context: __SerdeContext
): Array<JobDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobDetail(entry, context)
  );
};

const deserializeAws_restJson1_1JobQueueDetail = (
  output: any,
  context: __SerdeContext
): JobQueueDetail => {
  let contents: any = {
    __type: "JobQueueDetail",
    computeEnvironmentOrder: undefined,
    jobQueueArn: undefined,
    jobQueueName: undefined,
    priority: undefined,
    state: undefined,
    status: undefined,
    statusReason: undefined
  };
  if (
    output.computeEnvironmentOrder !== undefined &&
    output.computeEnvironmentOrder !== null
  ) {
    contents.computeEnvironmentOrder = deserializeAws_restJson1_1ComputeEnvironmentOrders(
      output.computeEnvironmentOrder,
      context
    );
  }
  if (output.jobQueueArn !== undefined && output.jobQueueArn !== null) {
    contents.jobQueueArn = output.jobQueueArn;
  }
  if (output.jobQueueName !== undefined && output.jobQueueName !== null) {
    contents.jobQueueName = output.jobQueueName;
  }
  if (output.priority !== undefined && output.priority !== null) {
    contents.priority = output.priority;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined && output.statusReason !== null) {
    contents.statusReason = output.statusReason;
  }
  return contents;
};

const deserializeAws_restJson1_1JobQueueDetailList = (
  output: any,
  context: __SerdeContext
): Array<JobQueueDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobQueueDetail(entry, context)
  );
};

const deserializeAws_restJson1_1JobSummary = (
  output: any,
  context: __SerdeContext
): JobSummary => {
  let contents: any = {
    __type: "JobSummary",
    arrayProperties: undefined,
    container: undefined,
    createdAt: undefined,
    jobId: undefined,
    jobName: undefined,
    nodeProperties: undefined,
    startedAt: undefined,
    status: undefined,
    statusReason: undefined,
    stoppedAt: undefined
  };
  if (output.arrayProperties !== undefined && output.arrayProperties !== null) {
    contents.arrayProperties = deserializeAws_restJson1_1ArrayPropertiesSummary(
      output.arrayProperties,
      context
    );
  }
  if (output.container !== undefined && output.container !== null) {
    contents.container = deserializeAws_restJson1_1ContainerSummary(
      output.container,
      context
    );
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = output.createdAt;
  }
  if (output.jobId !== undefined && output.jobId !== null) {
    contents.jobId = output.jobId;
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (output.nodeProperties !== undefined && output.nodeProperties !== null) {
    contents.nodeProperties = deserializeAws_restJson1_1NodePropertiesSummary(
      output.nodeProperties,
      context
    );
  }
  if (output.startedAt !== undefined && output.startedAt !== null) {
    contents.startedAt = output.startedAt;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined && output.statusReason !== null) {
    contents.statusReason = output.statusReason;
  }
  if (output.stoppedAt !== undefined && output.stoppedAt !== null) {
    contents.stoppedAt = output.stoppedAt;
  }
  return contents;
};

const deserializeAws_restJson1_1JobSummaryList = (
  output: any,
  context: __SerdeContext
): Array<JobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobSummary(entry, context)
  );
};

const deserializeAws_restJson1_1JobTimeout = (
  output: any,
  context: __SerdeContext
): JobTimeout => {
  let contents: any = {
    __type: "JobTimeout",
    attemptDurationSeconds: undefined
  };
  if (
    output.attemptDurationSeconds !== undefined &&
    output.attemptDurationSeconds !== null
  ) {
    contents.attemptDurationSeconds = output.attemptDurationSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1KeyValuePair = (
  output: any,
  context: __SerdeContext
): KeyValuePair => {
  let contents: any = {
    __type: "KeyValuePair",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  let contents: any = {
    __type: "LaunchTemplateSpecification",
    launchTemplateId: undefined,
    launchTemplateName: undefined,
    version: undefined
  };
  if (
    output.launchTemplateId !== undefined &&
    output.launchTemplateId !== null
  ) {
    contents.launchTemplateId = output.launchTemplateId;
  }
  if (
    output.launchTemplateName !== undefined &&
    output.launchTemplateName !== null
  ) {
    contents.launchTemplateName = output.launchTemplateName;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1LinuxParameters = (
  output: any,
  context: __SerdeContext
): LinuxParameters => {
  let contents: any = {
    __type: "LinuxParameters",
    devices: undefined
  };
  if (output.devices !== undefined && output.devices !== null) {
    contents.devices = deserializeAws_restJson1_1DevicesList(
      output.devices,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MountPoint = (
  output: any,
  context: __SerdeContext
): MountPoint => {
  let contents: any = {
    __type: "MountPoint",
    containerPath: undefined,
    readOnly: undefined,
    sourceVolume: undefined
  };
  if (output.containerPath !== undefined && output.containerPath !== null) {
    contents.containerPath = output.containerPath;
  }
  if (output.readOnly !== undefined && output.readOnly !== null) {
    contents.readOnly = output.readOnly;
  }
  if (output.sourceVolume !== undefined && output.sourceVolume !== null) {
    contents.sourceVolume = output.sourceVolume;
  }
  return contents;
};

const deserializeAws_restJson1_1MountPoints = (
  output: any,
  context: __SerdeContext
): Array<MountPoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MountPoint(entry, context)
  );
};

const deserializeAws_restJson1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    attachmentId: undefined,
    ipv6Address: undefined,
    privateIpv4Address: undefined
  };
  if (output.attachmentId !== undefined && output.attachmentId !== null) {
    contents.attachmentId = output.attachmentId;
  }
  if (output.ipv6Address !== undefined && output.ipv6Address !== null) {
    contents.ipv6Address = output.ipv6Address;
  }
  if (
    output.privateIpv4Address !== undefined &&
    output.privateIpv4Address !== null
  ) {
    contents.privateIpv4Address = output.privateIpv4Address;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInterfaceList = (
  output: any,
  context: __SerdeContext
): Array<NetworkInterface> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NetworkInterface(entry, context)
  );
};

const deserializeAws_restJson1_1NodeDetails = (
  output: any,
  context: __SerdeContext
): NodeDetails => {
  let contents: any = {
    __type: "NodeDetails",
    isMainNode: undefined,
    nodeIndex: undefined
  };
  if (output.isMainNode !== undefined && output.isMainNode !== null) {
    contents.isMainNode = output.isMainNode;
  }
  if (output.nodeIndex !== undefined && output.nodeIndex !== null) {
    contents.nodeIndex = output.nodeIndex;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeProperties = (
  output: any,
  context: __SerdeContext
): NodeProperties => {
  let contents: any = {
    __type: "NodeProperties",
    mainNode: undefined,
    nodeRangeProperties: undefined,
    numNodes: undefined
  };
  if (output.mainNode !== undefined && output.mainNode !== null) {
    contents.mainNode = output.mainNode;
  }
  if (
    output.nodeRangeProperties !== undefined &&
    output.nodeRangeProperties !== null
  ) {
    contents.nodeRangeProperties = deserializeAws_restJson1_1NodeRangeProperties(
      output.nodeRangeProperties,
      context
    );
  }
  if (output.numNodes !== undefined && output.numNodes !== null) {
    contents.numNodes = output.numNodes;
  }
  return contents;
};

const deserializeAws_restJson1_1NodePropertiesSummary = (
  output: any,
  context: __SerdeContext
): NodePropertiesSummary => {
  let contents: any = {
    __type: "NodePropertiesSummary",
    isMainNode: undefined,
    nodeIndex: undefined,
    numNodes: undefined
  };
  if (output.isMainNode !== undefined && output.isMainNode !== null) {
    contents.isMainNode = output.isMainNode;
  }
  if (output.nodeIndex !== undefined && output.nodeIndex !== null) {
    contents.nodeIndex = output.nodeIndex;
  }
  if (output.numNodes !== undefined && output.numNodes !== null) {
    contents.numNodes = output.numNodes;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeRangeProperties = (
  output: any,
  context: __SerdeContext
): Array<NodeRangeProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NodeRangeProperty(entry, context)
  );
};

const deserializeAws_restJson1_1NodeRangeProperty = (
  output: any,
  context: __SerdeContext
): NodeRangeProperty => {
  let contents: any = {
    __type: "NodeRangeProperty",
    container: undefined,
    targetNodes: undefined
  };
  if (output.container !== undefined && output.container !== null) {
    contents.container = deserializeAws_restJson1_1ContainerProperties(
      output.container,
      context
    );
  }
  if (output.targetNodes !== undefined && output.targetNodes !== null) {
    contents.targetNodes = output.targetNodes;
  }
  return contents;
};

const deserializeAws_restJson1_1ParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ResourceRequirement = (
  output: any,
  context: __SerdeContext
): ResourceRequirement => {
  let contents: any = {
    __type: "ResourceRequirement",
    type: undefined,
    value: undefined
  };
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceRequirements = (
  output: any,
  context: __SerdeContext
): Array<ResourceRequirement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceRequirement(entry, context)
  );
};

const deserializeAws_restJson1_1RetryStrategy = (
  output: any,
  context: __SerdeContext
): RetryStrategy => {
  let contents: any = {
    __type: "RetryStrategy",
    attempts: undefined
  };
  if (output.attempts !== undefined && output.attempts !== null) {
    contents.attempts = output.attempts;
  }
  return contents;
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Ulimit = (
  output: any,
  context: __SerdeContext
): Ulimit => {
  let contents: any = {
    __type: "Ulimit",
    hardLimit: undefined,
    name: undefined,
    softLimit: undefined
  };
  if (output.hardLimit !== undefined && output.hardLimit !== null) {
    contents.hardLimit = output.hardLimit;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.softLimit !== undefined && output.softLimit !== null) {
    contents.softLimit = output.softLimit;
  }
  return contents;
};

const deserializeAws_restJson1_1Ulimits = (
  output: any,
  context: __SerdeContext
): Array<Ulimit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Ulimit(entry, context)
  );
};

const deserializeAws_restJson1_1Volume = (
  output: any,
  context: __SerdeContext
): Volume => {
  let contents: any = {
    __type: "Volume",
    host: undefined,
    name: undefined
  };
  if (output.host !== undefined && output.host !== null) {
    contents.host = deserializeAws_restJson1_1Host(output.host, context);
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1Volumes = (
  output: any,
  context: __SerdeContext
): Array<Volume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Volume(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
