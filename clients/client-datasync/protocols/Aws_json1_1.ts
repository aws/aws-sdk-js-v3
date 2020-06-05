import {
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput
} from "../commands/CancelTaskExecutionCommand";
import {
  CreateAgentCommandInput,
  CreateAgentCommandOutput
} from "../commands/CreateAgentCommand";
import {
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput
} from "../commands/CreateLocationEfsCommand";
import {
  CreateLocationNfsCommandInput,
  CreateLocationNfsCommandOutput
} from "../commands/CreateLocationNfsCommand";
import {
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput
} from "../commands/CreateLocationS3Command";
import {
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput
} from "../commands/CreateLocationSmbCommand";
import {
  CreateTaskCommandInput,
  CreateTaskCommandOutput
} from "../commands/CreateTaskCommand";
import {
  DeleteAgentCommandInput,
  DeleteAgentCommandOutput
} from "../commands/DeleteAgentCommand";
import {
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput
} from "../commands/DeleteLocationCommand";
import {
  DeleteTaskCommandInput,
  DeleteTaskCommandOutput
} from "../commands/DeleteTaskCommand";
import {
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput
} from "../commands/DescribeAgentCommand";
import {
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput
} from "../commands/DescribeLocationEfsCommand";
import {
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput
} from "../commands/DescribeLocationNfsCommand";
import {
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput
} from "../commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput
} from "../commands/DescribeLocationSmbCommand";
import {
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput
} from "../commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput
} from "../commands/DescribeTaskExecutionCommand";
import {
  ListAgentsCommandInput,
  ListAgentsCommandOutput
} from "../commands/ListAgentsCommand";
import {
  ListLocationsCommandInput,
  ListLocationsCommandOutput
} from "../commands/ListLocationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput
} from "../commands/ListTaskExecutionsCommand";
import {
  ListTasksCommandInput,
  ListTasksCommandOutput
} from "../commands/ListTasksCommand";
import {
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput
} from "../commands/StartTaskExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAgentCommandInput,
  UpdateAgentCommandOutput
} from "../commands/UpdateAgentCommand";
import {
  UpdateTaskCommandInput,
  UpdateTaskCommandOutput
} from "../commands/UpdateTaskCommand";
import {
  AgentListEntry,
  CancelTaskExecutionRequest,
  CancelTaskExecutionResponse,
  CreateAgentRequest,
  CreateAgentResponse,
  CreateLocationEfsRequest,
  CreateLocationEfsResponse,
  CreateLocationNfsRequest,
  CreateLocationNfsResponse,
  CreateLocationS3Request,
  CreateLocationS3Response,
  CreateLocationSmbRequest,
  CreateLocationSmbResponse,
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteAgentRequest,
  DeleteAgentResponse,
  DeleteLocationRequest,
  DeleteLocationResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  DescribeAgentRequest,
  DescribeAgentResponse,
  DescribeLocationEfsRequest,
  DescribeLocationEfsResponse,
  DescribeLocationNfsRequest,
  DescribeLocationNfsResponse,
  DescribeLocationS3Request,
  DescribeLocationS3Response,
  DescribeLocationSmbRequest,
  DescribeLocationSmbResponse,
  DescribeTaskExecutionRequest,
  DescribeTaskExecutionResponse,
  DescribeTaskRequest,
  DescribeTaskResponse,
  Ec2Config,
  FilterRule,
  InternalException,
  InvalidRequestException,
  ListAgentsRequest,
  ListAgentsResponse,
  ListLocationsRequest,
  ListLocationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTaskExecutionsRequest,
  ListTaskExecutionsResponse,
  ListTasksRequest,
  ListTasksResponse,
  LocationListEntry,
  NfsMountOptions,
  OnPremConfig,
  Options,
  PrivateLinkConfig,
  S3Config,
  SmbMountOptions,
  StartTaskExecutionRequest,
  StartTaskExecutionResponse,
  TagListEntry,
  TagResourceRequest,
  TagResourceResponse,
  TaskExecutionListEntry,
  TaskExecutionResultDetail,
  TaskListEntry,
  TaskSchedule,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAgentRequest,
  UpdateAgentResponse,
  UpdateTaskRequest,
  UpdateTaskResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CancelTaskExecutionCommand = async (
  input: CancelTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CancelTaskExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelTaskExecutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAgentCommand = async (
  input: CreateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateAgent"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationEfsCommand = async (
  input: CreateLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateLocationEfs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLocationEfsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationNfsCommand = async (
  input: CreateLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateLocationNfs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLocationNfsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationS3Command = async (
  input: CreateLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateLocationS3"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLocationS3Request(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLocationSmbCommand = async (
  input: CreateLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateLocationSmb"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLocationSmbRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTaskCommand = async (
  input: CreateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.CreateTask"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAgentCommand = async (
  input: DeleteAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DeleteAgent"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLocationCommand = async (
  input: DeleteLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DeleteLocation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLocationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTaskCommand = async (
  input: DeleteTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DeleteTask"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgentCommand = async (
  input: DescribeAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeAgent"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAgentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationEfsCommand = async (
  input: DescribeLocationEfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeLocationEfs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLocationEfsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationNfsCommand = async (
  input: DescribeLocationNfsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeLocationNfs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLocationNfsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationS3Command = async (
  input: DescribeLocationS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeLocationS3"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLocationS3Request(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationSmbCommand = async (
  input: DescribeLocationSmbCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeLocationSmb"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLocationSmbRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskCommand = async (
  input: DescribeTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTaskExecutionCommand = async (
  input: DescribeTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.DescribeTaskExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTaskExecutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAgentsCommand = async (
  input: ListAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.ListAgents"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLocationsCommand = async (
  input: ListLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.ListLocations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLocationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTaskExecutionsCommand = async (
  input: ListTaskExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.ListTaskExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTaskExecutionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.ListTasks"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTaskExecutionCommand = async (
  input: StartTaskExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.StartTaskExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartTaskExecutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAgentCommand = async (
  input: UpdateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.UpdateAgent"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAgentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTaskCommand = async (
  input: UpdateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "FmrsService.UpdateTask"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelTaskExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelTaskExecutionResponse(data, context);
  const response: CancelTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelTaskExecutionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAgentResponse(data, context);
  const response: CreateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAgentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLocationEfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationEfsResponse(data, context);
  const response: CreateLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLocationEfsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationEfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationEfsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLocationNfsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationNfsResponse(data, context);
  const response: CreateLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLocationNfsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationNfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationNfsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLocationS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationS3Response(data, context);
  const response: CreateLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLocationS3Response",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLocationSmbCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLocationSmbResponse(data, context);
  const response: CreateLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLocationSmbResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLocationSmbCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLocationSmbCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTaskResponse(data, context);
  const response: CreateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAgentResponse(data, context);
  const response: DeleteAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAgentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLocationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLocationResponse(data, context);
  const response: DeleteLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLocationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTaskResponse(data, context);
  const response: DeleteTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgentResponse(data, context);
  const response: DescribeAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAgentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeLocationEfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLocationEfsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationEfsResponse(data, context);
  const response: DescribeLocationEfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLocationEfsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationEfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationEfsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeLocationNfsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLocationNfsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationNfsResponse(data, context);
  const response: DescribeLocationNfsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLocationNfsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationNfsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationNfsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeLocationS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLocationS3CommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationS3Response(data, context);
  const response: DescribeLocationS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLocationS3Response",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeLocationSmbCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLocationSmbCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLocationSmbResponse(data, context);
  const response: DescribeLocationSmbCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLocationSmbResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationSmbCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationSmbCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskResponse(data, context);
  const response: DescribeTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTaskExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTaskExecutionResponse(data, context);
  const response: DescribeTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTaskExecutionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAgentsResponse(data, context);
  const response: ListAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAgentsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLocationsResponse(data, context);
  const response: ListLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLocationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListTaskExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTaskExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTaskExecutionsResponse(data, context);
  const response: ListTaskExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTaskExecutionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTaskExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTasksResponse(data, context);
  const response: ListTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1StartTaskExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTaskExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTaskExecutionResponse(data, context);
  const response: StartTaskExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTaskExecutionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTaskExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1UpdateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAgentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAgentResponse(data, context);
  const response: UpdateAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAgentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1UpdateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTaskResponse(data, context);
  const response: UpdateTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.datasync#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datasync#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(
    body,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AgentArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CancelTaskExecutionRequest = (
  input: CancelTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskExecutionArn !== undefined && {
      TaskExecutionArn: input.TaskExecutionArn
    })
  };
};

const serializeAws_json1_1CreateAgentRequest = (
  input: CreateAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActivationKey !== undefined && {
      ActivationKey: input.ActivationKey
    }),
    ...(input.AgentName !== undefined && { AgentName: input.AgentName }),
    ...(input.SecurityGroupArns !== undefined && {
      SecurityGroupArns: serializeAws_json1_1PLSecurityGroupArnList(
        input.SecurityGroupArns,
        context
      )
    }),
    ...(input.SubnetArns !== undefined && {
      SubnetArns: serializeAws_json1_1PLSubnetArnList(input.SubnetArns, context)
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.VpcEndpointId !== undefined && {
      VpcEndpointId: input.VpcEndpointId
    })
  };
};

const serializeAws_json1_1CreateLocationEfsRequest = (
  input: CreateLocationEfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ec2Config !== undefined && {
      Ec2Config: serializeAws_json1_1Ec2Config(input.Ec2Config, context)
    }),
    ...(input.EfsFilesystemArn !== undefined && {
      EfsFilesystemArn: input.EfsFilesystemArn
    }),
    ...(input.Subdirectory !== undefined && {
      Subdirectory: input.Subdirectory
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateLocationNfsRequest = (
  input: CreateLocationNfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MountOptions !== undefined && {
      MountOptions: serializeAws_json1_1NfsMountOptions(
        input.MountOptions,
        context
      )
    }),
    ...(input.OnPremConfig !== undefined && {
      OnPremConfig: serializeAws_json1_1OnPremConfig(
        input.OnPremConfig,
        context
      )
    }),
    ...(input.ServerHostname !== undefined && {
      ServerHostname: input.ServerHostname
    }),
    ...(input.Subdirectory !== undefined && {
      Subdirectory: input.Subdirectory
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateLocationS3Request = (
  input: CreateLocationS3Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3BucketArn !== undefined && { S3BucketArn: input.S3BucketArn }),
    ...(input.S3Config !== undefined && {
      S3Config: serializeAws_json1_1S3Config(input.S3Config, context)
    }),
    ...(input.S3StorageClass !== undefined && {
      S3StorageClass: input.S3StorageClass
    }),
    ...(input.Subdirectory !== undefined && {
      Subdirectory: input.Subdirectory
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateLocationSmbRequest = (
  input: CreateLocationSmbRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns !== undefined && {
      AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context)
    }),
    ...(input.Domain !== undefined && { Domain: input.Domain }),
    ...(input.MountOptions !== undefined && {
      MountOptions: serializeAws_json1_1SmbMountOptions(
        input.MountOptions,
        context
      )
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ServerHostname !== undefined && {
      ServerHostname: input.ServerHostname
    }),
    ...(input.Subdirectory !== undefined && {
      Subdirectory: input.Subdirectory
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.User !== undefined && { User: input.User })
  };
};

const serializeAws_json1_1CreateTaskRequest = (
  input: CreateTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogGroupArn !== undefined && {
      CloudWatchLogGroupArn: input.CloudWatchLogGroupArn
    }),
    ...(input.DestinationLocationArn !== undefined && {
      DestinationLocationArn: input.DestinationLocationArn
    }),
    ...(input.Excludes !== undefined && {
      Excludes: serializeAws_json1_1FilterList(input.Excludes, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Options !== undefined && {
      Options: serializeAws_json1_1Options(input.Options, context)
    }),
    ...(input.Schedule !== undefined && {
      Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context)
    }),
    ...(input.SourceLocationArn !== undefined && {
      SourceLocationArn: input.SourceLocationArn
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1DeleteAgentRequest = (
  input: DeleteAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArn !== undefined && { AgentArn: input.AgentArn })
  };
};

const serializeAws_json1_1DeleteLocationRequest = (
  input: DeleteLocationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn !== undefined && { LocationArn: input.LocationArn })
  };
};

const serializeAws_json1_1DeleteTaskRequest = (
  input: DeleteTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskArn !== undefined && { TaskArn: input.TaskArn })
  };
};

const serializeAws_json1_1DescribeAgentRequest = (
  input: DescribeAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArn !== undefined && { AgentArn: input.AgentArn })
  };
};

const serializeAws_json1_1DescribeLocationEfsRequest = (
  input: DescribeLocationEfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn !== undefined && { LocationArn: input.LocationArn })
  };
};

const serializeAws_json1_1DescribeLocationNfsRequest = (
  input: DescribeLocationNfsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn !== undefined && { LocationArn: input.LocationArn })
  };
};

const serializeAws_json1_1DescribeLocationS3Request = (
  input: DescribeLocationS3Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn !== undefined && { LocationArn: input.LocationArn })
  };
};

const serializeAws_json1_1DescribeLocationSmbRequest = (
  input: DescribeLocationSmbRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LocationArn !== undefined && { LocationArn: input.LocationArn })
  };
};

const serializeAws_json1_1DescribeTaskExecutionRequest = (
  input: DescribeTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskExecutionArn !== undefined && {
      TaskExecutionArn: input.TaskExecutionArn
    })
  };
};

const serializeAws_json1_1DescribeTaskRequest = (
  input: DescribeTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskArn !== undefined && { TaskArn: input.TaskArn })
  };
};

const serializeAws_json1_1Ec2Config = (
  input: Ec2Config,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupArns !== undefined && {
      SecurityGroupArns: serializeAws_json1_1Ec2SecurityGroupArnList(
        input.SecurityGroupArns,
        context
      )
    }),
    ...(input.SubnetArn !== undefined && { SubnetArn: input.SubnetArn })
  };
};

const serializeAws_json1_1Ec2SecurityGroupArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1FilterList = (
  input: FilterRule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1FilterRule(entry, context));
};

const serializeAws_json1_1FilterRule = (
  input: FilterRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterType !== undefined && { FilterType: input.FilterType }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1ListAgentsRequest = (
  input: ListAgentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListLocationsRequest = (
  input: ListLocationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ListTaskExecutionsRequest = (
  input: ListTaskExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TaskArn !== undefined && { TaskArn: input.TaskArn })
  };
};

const serializeAws_json1_1ListTasksRequest = (
  input: ListTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1NfsMountOptions = (
  input: NfsMountOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Version !== undefined && { Version: input.Version })
  };
};

const serializeAws_json1_1OnPremConfig = (
  input: OnPremConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArns !== undefined && {
      AgentArns: serializeAws_json1_1AgentArnList(input.AgentArns, context)
    })
  };
};

const serializeAws_json1_1Options = (
  input: Options,
  context: __SerdeContext
): any => {
  return {
    ...(input.Atime !== undefined && { Atime: input.Atime }),
    ...(input.BytesPerSecond !== undefined && {
      BytesPerSecond: input.BytesPerSecond
    }),
    ...(input.Gid !== undefined && { Gid: input.Gid }),
    ...(input.Mtime !== undefined && { Mtime: input.Mtime }),
    ...(input.OverwriteMode !== undefined && {
      OverwriteMode: input.OverwriteMode
    }),
    ...(input.PosixPermissions !== undefined && {
      PosixPermissions: input.PosixPermissions
    }),
    ...(input.PreserveDeletedFiles !== undefined && {
      PreserveDeletedFiles: input.PreserveDeletedFiles
    }),
    ...(input.PreserveDevices !== undefined && {
      PreserveDevices: input.PreserveDevices
    }),
    ...(input.TaskQueueing !== undefined && {
      TaskQueueing: input.TaskQueueing
    }),
    ...(input.Uid !== undefined && { Uid: input.Uid }),
    ...(input.VerifyMode !== undefined && { VerifyMode: input.VerifyMode })
  };
};

const serializeAws_json1_1PLSecurityGroupArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1PLSubnetArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1S3Config = (
  input: S3Config,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketAccessRoleArn !== undefined && {
      BucketAccessRoleArn: input.BucketAccessRoleArn
    })
  };
};

const serializeAws_json1_1SmbMountOptions = (
  input: SmbMountOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Version !== undefined && { Version: input.Version })
  };
};

const serializeAws_json1_1StartTaskExecutionRequest = (
  input: StartTaskExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Includes !== undefined && {
      Includes: serializeAws_json1_1FilterList(input.Includes, context)
    }),
    ...(input.OverrideOptions !== undefined && {
      OverrideOptions: serializeAws_json1_1Options(
        input.OverrideOptions,
        context
      )
    }),
    ...(input.TaskArn !== undefined && { TaskArn: input.TaskArn })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: TagListEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TagListEntry(entry, context));
};

const serializeAws_json1_1TagListEntry = (
  input: TagListEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1TaskSchedule = (
  input: TaskSchedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduleExpression !== undefined && {
      ScheduleExpression: input.ScheduleExpression
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Keys !== undefined && {
      Keys: serializeAws_json1_1TagKeyList(input.Keys, context)
    }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1UpdateAgentRequest = (
  input: UpdateAgentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgentArn !== undefined && { AgentArn: input.AgentArn }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1UpdateTaskRequest = (
  input: UpdateTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogGroupArn !== undefined && {
      CloudWatchLogGroupArn: input.CloudWatchLogGroupArn
    }),
    ...(input.Excludes !== undefined && {
      Excludes: serializeAws_json1_1FilterList(input.Excludes, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Options !== undefined && {
      Options: serializeAws_json1_1Options(input.Options, context)
    }),
    ...(input.Schedule !== undefined && {
      Schedule: serializeAws_json1_1TaskSchedule(input.Schedule, context)
    }),
    ...(input.TaskArn !== undefined && { TaskArn: input.TaskArn })
  };
};

const deserializeAws_json1_1AgentArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AgentList = (
  output: any,
  context: __SerdeContext
): AgentListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentListEntry(entry, context)
  );
};

const deserializeAws_json1_1AgentListEntry = (
  output: any,
  context: __SerdeContext
): AgentListEntry => {
  return {
    __type: "AgentListEntry",
    AgentArn:
      output.AgentArn !== undefined && output.AgentArn !== null
        ? output.AgentArn
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1CancelTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): CancelTaskExecutionResponse => {
  return {
    __type: "CancelTaskExecutionResponse"
  } as any;
};

const deserializeAws_json1_1CreateAgentResponse = (
  output: any,
  context: __SerdeContext
): CreateAgentResponse => {
  return {
    __type: "CreateAgentResponse",
    AgentArn:
      output.AgentArn !== undefined && output.AgentArn !== null
        ? output.AgentArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateLocationEfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationEfsResponse => {
  return {
    __type: "CreateLocationEfsResponse",
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateLocationNfsResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationNfsResponse => {
  return {
    __type: "CreateLocationNfsResponse",
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateLocationS3Response = (
  output: any,
  context: __SerdeContext
): CreateLocationS3Response => {
  return {
    __type: "CreateLocationS3Response",
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateLocationSmbResponse = (
  output: any,
  context: __SerdeContext
): CreateLocationSmbResponse => {
  return {
    __type: "CreateLocationSmbResponse",
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateTaskResponse => {
  return {
    __type: "CreateTaskResponse",
    TaskArn:
      output.TaskArn !== undefined && output.TaskArn !== null
        ? output.TaskArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteAgentResponse = (
  output: any,
  context: __SerdeContext
): DeleteAgentResponse => {
  return {
    __type: "DeleteAgentResponse"
  } as any;
};

const deserializeAws_json1_1DeleteLocationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLocationResponse => {
  return {
    __type: "DeleteLocationResponse"
  } as any;
};

const deserializeAws_json1_1DeleteTaskResponse = (
  output: any,
  context: __SerdeContext
): DeleteTaskResponse => {
  return {
    __type: "DeleteTaskResponse"
  } as any;
};

const deserializeAws_json1_1DescribeAgentResponse = (
  output: any,
  context: __SerdeContext
): DescribeAgentResponse => {
  return {
    __type: "DescribeAgentResponse",
    AgentArn:
      output.AgentArn !== undefined && output.AgentArn !== null
        ? output.AgentArn
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    EndpointType:
      output.EndpointType !== undefined && output.EndpointType !== null
        ? output.EndpointType
        : undefined,
    LastConnectionTime:
      output.LastConnectionTime !== undefined &&
      output.LastConnectionTime !== null
        ? new Date(Math.round(output.LastConnectionTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    PrivateLinkConfig:
      output.PrivateLinkConfig !== undefined &&
      output.PrivateLinkConfig !== null
        ? deserializeAws_json1_1PrivateLinkConfig(
            output.PrivateLinkConfig,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLocationEfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationEfsResponse => {
  return {
    __type: "DescribeLocationEfsResponse",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Ec2Config:
      output.Ec2Config !== undefined && output.Ec2Config !== null
        ? deserializeAws_json1_1Ec2Config(output.Ec2Config, context)
        : undefined,
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined,
    LocationUri:
      output.LocationUri !== undefined && output.LocationUri !== null
        ? output.LocationUri
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLocationNfsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationNfsResponse => {
  return {
    __type: "DescribeLocationNfsResponse",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined,
    LocationUri:
      output.LocationUri !== undefined && output.LocationUri !== null
        ? output.LocationUri
        : undefined,
    MountOptions:
      output.MountOptions !== undefined && output.MountOptions !== null
        ? deserializeAws_json1_1NfsMountOptions(output.MountOptions, context)
        : undefined,
    OnPremConfig:
      output.OnPremConfig !== undefined && output.OnPremConfig !== null
        ? deserializeAws_json1_1OnPremConfig(output.OnPremConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLocationS3Response = (
  output: any,
  context: __SerdeContext
): DescribeLocationS3Response => {
  return {
    __type: "DescribeLocationS3Response",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined,
    LocationUri:
      output.LocationUri !== undefined && output.LocationUri !== null
        ? output.LocationUri
        : undefined,
    S3Config:
      output.S3Config !== undefined && output.S3Config !== null
        ? deserializeAws_json1_1S3Config(output.S3Config, context)
        : undefined,
    S3StorageClass:
      output.S3StorageClass !== undefined && output.S3StorageClass !== null
        ? output.S3StorageClass
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLocationSmbResponse = (
  output: any,
  context: __SerdeContext
): DescribeLocationSmbResponse => {
  return {
    __type: "DescribeLocationSmbResponse",
    AgentArns:
      output.AgentArns !== undefined && output.AgentArns !== null
        ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Domain:
      output.Domain !== undefined && output.Domain !== null
        ? output.Domain
        : undefined,
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined,
    LocationUri:
      output.LocationUri !== undefined && output.LocationUri !== null
        ? output.LocationUri
        : undefined,
    MountOptions:
      output.MountOptions !== undefined && output.MountOptions !== null
        ? deserializeAws_json1_1SmbMountOptions(output.MountOptions, context)
        : undefined,
    User:
      output.User !== undefined && output.User !== null
        ? output.User
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskExecutionResponse => {
  return {
    __type: "DescribeTaskExecutionResponse",
    BytesTransferred:
      output.BytesTransferred !== undefined && output.BytesTransferred !== null
        ? output.BytesTransferred
        : undefined,
    BytesWritten:
      output.BytesWritten !== undefined && output.BytesWritten !== null
        ? output.BytesWritten
        : undefined,
    EstimatedBytesToTransfer:
      output.EstimatedBytesToTransfer !== undefined &&
      output.EstimatedBytesToTransfer !== null
        ? output.EstimatedBytesToTransfer
        : undefined,
    EstimatedFilesToTransfer:
      output.EstimatedFilesToTransfer !== undefined &&
      output.EstimatedFilesToTransfer !== null
        ? output.EstimatedFilesToTransfer
        : undefined,
    Excludes:
      output.Excludes !== undefined && output.Excludes !== null
        ? deserializeAws_json1_1FilterList(output.Excludes, context)
        : undefined,
    FilesTransferred:
      output.FilesTransferred !== undefined && output.FilesTransferred !== null
        ? output.FilesTransferred
        : undefined,
    Includes:
      output.Includes !== undefined && output.Includes !== null
        ? deserializeAws_json1_1FilterList(output.Includes, context)
        : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_json1_1Options(output.Options, context)
        : undefined,
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_json1_1TaskExecutionResultDetail(
            output.Result,
            context
          )
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TaskExecutionArn:
      output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null
        ? output.TaskExecutionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTaskResponse = (
  output: any,
  context: __SerdeContext
): DescribeTaskResponse => {
  return {
    __type: "DescribeTaskResponse",
    CloudWatchLogGroupArn:
      output.CloudWatchLogGroupArn !== undefined &&
      output.CloudWatchLogGroupArn !== null
        ? output.CloudWatchLogGroupArn
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    CurrentTaskExecutionArn:
      output.CurrentTaskExecutionArn !== undefined &&
      output.CurrentTaskExecutionArn !== null
        ? output.CurrentTaskExecutionArn
        : undefined,
    DestinationLocationArn:
      output.DestinationLocationArn !== undefined &&
      output.DestinationLocationArn !== null
        ? output.DestinationLocationArn
        : undefined,
    DestinationNetworkInterfaceArns:
      output.DestinationNetworkInterfaceArns !== undefined &&
      output.DestinationNetworkInterfaceArns !== null
        ? deserializeAws_json1_1DestinationNetworkInterfaceArns(
            output.DestinationNetworkInterfaceArns,
            context
          )
        : undefined,
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? output.ErrorDetail
        : undefined,
    Excludes:
      output.Excludes !== undefined && output.Excludes !== null
        ? deserializeAws_json1_1FilterList(output.Excludes, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_json1_1Options(output.Options, context)
        : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_json1_1TaskSchedule(output.Schedule, context)
        : undefined,
    SourceLocationArn:
      output.SourceLocationArn !== undefined &&
      output.SourceLocationArn !== null
        ? output.SourceLocationArn
        : undefined,
    SourceNetworkInterfaceArns:
      output.SourceNetworkInterfaceArns !== undefined &&
      output.SourceNetworkInterfaceArns !== null
        ? deserializeAws_json1_1SourceNetworkInterfaceArns(
            output.SourceNetworkInterfaceArns,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TaskArn:
      output.TaskArn !== undefined && output.TaskArn !== null
        ? output.TaskArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DestinationNetworkInterfaceArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Ec2Config = (
  output: any,
  context: __SerdeContext
): Ec2Config => {
  return {
    __type: "Ec2Config",
    SecurityGroupArns:
      output.SecurityGroupArns !== undefined &&
      output.SecurityGroupArns !== null
        ? deserializeAws_json1_1Ec2SecurityGroupArnList(
            output.SecurityGroupArns,
            context
          )
        : undefined,
    SubnetArn:
      output.SubnetArn !== undefined && output.SubnetArn !== null
        ? output.SubnetArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Ec2SecurityGroupArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FilterList = (
  output: any,
  context: __SerdeContext
): FilterRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FilterRule(entry, context)
  );
};

const deserializeAws_json1_1FilterRule = (
  output: any,
  context: __SerdeContext
): FilterRule => {
  return {
    __type: "FilterRule",
    FilterType:
      output.FilterType !== undefined && output.FilterType !== null
        ? output.FilterType
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  return {
    __type: "InternalException",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAgentsResponse = (
  output: any,
  context: __SerdeContext
): ListAgentsResponse => {
  return {
    __type: "ListAgentsResponse",
    Agents:
      output.Agents !== undefined && output.Agents !== null
        ? deserializeAws_json1_1AgentList(output.Agents, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLocationsResponse = (
  output: any,
  context: __SerdeContext
): ListLocationsResponse => {
  return {
    __type: "ListLocationsResponse",
    Locations:
      output.Locations !== undefined && output.Locations !== null
        ? deserializeAws_json1_1LocationList(output.Locations, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTaskExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListTaskExecutionsResponse => {
  return {
    __type: "ListTaskExecutionsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    TaskExecutions:
      output.TaskExecutions !== undefined && output.TaskExecutions !== null
        ? deserializeAws_json1_1TaskExecutionList(
            output.TaskExecutions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTasksResponse = (
  output: any,
  context: __SerdeContext
): ListTasksResponse => {
  return {
    __type: "ListTasksResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tasks:
      output.Tasks !== undefined && output.Tasks !== null
        ? deserializeAws_json1_1TaskList(output.Tasks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LocationList = (
  output: any,
  context: __SerdeContext
): LocationListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LocationListEntry(entry, context)
  );
};

const deserializeAws_json1_1LocationListEntry = (
  output: any,
  context: __SerdeContext
): LocationListEntry => {
  return {
    __type: "LocationListEntry",
    LocationArn:
      output.LocationArn !== undefined && output.LocationArn !== null
        ? output.LocationArn
        : undefined,
    LocationUri:
      output.LocationUri !== undefined && output.LocationUri !== null
        ? output.LocationUri
        : undefined
  } as any;
};

const deserializeAws_json1_1NfsMountOptions = (
  output: any,
  context: __SerdeContext
): NfsMountOptions => {
  return {
    __type: "NfsMountOptions",
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_json1_1OnPremConfig = (
  output: any,
  context: __SerdeContext
): OnPremConfig => {
  return {
    __type: "OnPremConfig",
    AgentArns:
      output.AgentArns !== undefined && output.AgentArns !== null
        ? deserializeAws_json1_1AgentArnList(output.AgentArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Options = (
  output: any,
  context: __SerdeContext
): Options => {
  return {
    __type: "Options",
    Atime:
      output.Atime !== undefined && output.Atime !== null
        ? output.Atime
        : undefined,
    BytesPerSecond:
      output.BytesPerSecond !== undefined && output.BytesPerSecond !== null
        ? output.BytesPerSecond
        : undefined,
    Gid:
      output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
    Mtime:
      output.Mtime !== undefined && output.Mtime !== null
        ? output.Mtime
        : undefined,
    OverwriteMode:
      output.OverwriteMode !== undefined && output.OverwriteMode !== null
        ? output.OverwriteMode
        : undefined,
    PosixPermissions:
      output.PosixPermissions !== undefined && output.PosixPermissions !== null
        ? output.PosixPermissions
        : undefined,
    PreserveDeletedFiles:
      output.PreserveDeletedFiles !== undefined &&
      output.PreserveDeletedFiles !== null
        ? output.PreserveDeletedFiles
        : undefined,
    PreserveDevices:
      output.PreserveDevices !== undefined && output.PreserveDevices !== null
        ? output.PreserveDevices
        : undefined,
    TaskQueueing:
      output.TaskQueueing !== undefined && output.TaskQueueing !== null
        ? output.TaskQueueing
        : undefined,
    Uid:
      output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
    VerifyMode:
      output.VerifyMode !== undefined && output.VerifyMode !== null
        ? output.VerifyMode
        : undefined
  } as any;
};

const deserializeAws_json1_1PLSecurityGroupArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PLSubnetArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PrivateLinkConfig = (
  output: any,
  context: __SerdeContext
): PrivateLinkConfig => {
  return {
    __type: "PrivateLinkConfig",
    PrivateLinkEndpoint:
      output.PrivateLinkEndpoint !== undefined &&
      output.PrivateLinkEndpoint !== null
        ? output.PrivateLinkEndpoint
        : undefined,
    SecurityGroupArns:
      output.SecurityGroupArns !== undefined &&
      output.SecurityGroupArns !== null
        ? deserializeAws_json1_1PLSecurityGroupArnList(
            output.SecurityGroupArns,
            context
          )
        : undefined,
    SubnetArns:
      output.SubnetArns !== undefined && output.SubnetArns !== null
        ? deserializeAws_json1_1PLSubnetArnList(output.SubnetArns, context)
        : undefined,
    VpcEndpointId:
      output.VpcEndpointId !== undefined && output.VpcEndpointId !== null
        ? output.VpcEndpointId
        : undefined
  } as any;
};

const deserializeAws_json1_1S3Config = (
  output: any,
  context: __SerdeContext
): S3Config => {
  return {
    __type: "S3Config",
    BucketAccessRoleArn:
      output.BucketAccessRoleArn !== undefined &&
      output.BucketAccessRoleArn !== null
        ? output.BucketAccessRoleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1SmbMountOptions = (
  output: any,
  context: __SerdeContext
): SmbMountOptions => {
  return {
    __type: "SmbMountOptions",
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_json1_1SourceNetworkInterfaceArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StartTaskExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartTaskExecutionResponse => {
  return {
    __type: "StartTaskExecutionResponse",
    TaskExecutionArn:
      output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null
        ? output.TaskExecutionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): TagListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagListEntry(entry, context)
  );
};

const deserializeAws_json1_1TagListEntry = (
  output: any,
  context: __SerdeContext
): TagListEntry => {
  return {
    __type: "TagListEntry",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1TaskExecutionList = (
  output: any,
  context: __SerdeContext
): TaskExecutionListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskExecutionListEntry(entry, context)
  );
};

const deserializeAws_json1_1TaskExecutionListEntry = (
  output: any,
  context: __SerdeContext
): TaskExecutionListEntry => {
  return {
    __type: "TaskExecutionListEntry",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TaskExecutionArn:
      output.TaskExecutionArn !== undefined && output.TaskExecutionArn !== null
        ? output.TaskExecutionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskExecutionResultDetail = (
  output: any,
  context: __SerdeContext
): TaskExecutionResultDetail => {
  return {
    __type: "TaskExecutionResultDetail",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorDetail:
      output.ErrorDetail !== undefined && output.ErrorDetail !== null
        ? output.ErrorDetail
        : undefined,
    PrepareDuration:
      output.PrepareDuration !== undefined && output.PrepareDuration !== null
        ? output.PrepareDuration
        : undefined,
    PrepareStatus:
      output.PrepareStatus !== undefined && output.PrepareStatus !== null
        ? output.PrepareStatus
        : undefined,
    TotalDuration:
      output.TotalDuration !== undefined && output.TotalDuration !== null
        ? output.TotalDuration
        : undefined,
    TransferDuration:
      output.TransferDuration !== undefined && output.TransferDuration !== null
        ? output.TransferDuration
        : undefined,
    TransferStatus:
      output.TransferStatus !== undefined && output.TransferStatus !== null
        ? output.TransferStatus
        : undefined,
    VerifyDuration:
      output.VerifyDuration !== undefined && output.VerifyDuration !== null
        ? output.VerifyDuration
        : undefined,
    VerifyStatus:
      output.VerifyStatus !== undefined && output.VerifyStatus !== null
        ? output.VerifyStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskList = (
  output: any,
  context: __SerdeContext
): TaskListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TaskListEntry(entry, context)
  );
};

const deserializeAws_json1_1TaskListEntry = (
  output: any,
  context: __SerdeContext
): TaskListEntry => {
  return {
    __type: "TaskListEntry",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TaskArn:
      output.TaskArn !== undefined && output.TaskArn !== null
        ? output.TaskArn
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskSchedule = (
  output: any,
  context: __SerdeContext
): TaskSchedule => {
  return {
    __type: "TaskSchedule",
    ScheduleExpression:
      output.ScheduleExpression !== undefined &&
      output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateAgentResponse = (
  output: any,
  context: __SerdeContext
): UpdateAgentResponse => {
  return {
    __type: "UpdateAgentResponse"
  } as any;
};

const deserializeAws_json1_1UpdateTaskResponse = (
  output: any,
  context: __SerdeContext
): UpdateTaskResponse => {
  return {
    __type: "UpdateTaskResponse"
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
