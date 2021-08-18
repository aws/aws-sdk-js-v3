import { CreateContainerCommandInput, CreateContainerCommandOutput } from "../commands/CreateContainerCommand";
import { DeleteContainerCommandInput, DeleteContainerCommandOutput } from "../commands/DeleteContainerCommand";
import {
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
} from "../commands/DeleteContainerPolicyCommand";
import { DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput } from "../commands/DeleteCorsPolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import { DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput } from "../commands/DeleteMetricPolicyCommand";
import { DescribeContainerCommandInput, DescribeContainerCommandOutput } from "../commands/DescribeContainerCommand";
import { GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput } from "../commands/GetContainerPolicyCommand";
import { GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput } from "../commands/GetCorsPolicyCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import { GetMetricPolicyCommandInput, GetMetricPolicyCommandOutput } from "../commands/GetMetricPolicyCommand";
import { ListContainersCommandInput, ListContainersCommandOutput } from "../commands/ListContainersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput } from "../commands/PutContainerPolicyCommand";
import { PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput } from "../commands/PutCorsPolicyCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "../commands/PutLifecyclePolicyCommand";
import { PutMetricPolicyCommandInput, PutMetricPolicyCommandOutput } from "../commands/PutMetricPolicyCommand";
import { StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput } from "../commands/StartAccessLoggingCommand";
import { StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput } from "../commands/StopAccessLoggingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  Container,
  ContainerInUseException,
  ContainerNotFoundException,
  CorsPolicyNotFoundException,
  CorsRule,
  CreateContainerInput,
  CreateContainerOutput,
  DeleteContainerInput,
  DeleteContainerOutput,
  DeleteContainerPolicyInput,
  DeleteContainerPolicyOutput,
  DeleteCorsPolicyInput,
  DeleteCorsPolicyOutput,
  DeleteLifecyclePolicyInput,
  DeleteLifecyclePolicyOutput,
  DeleteMetricPolicyInput,
  DeleteMetricPolicyOutput,
  DescribeContainerInput,
  DescribeContainerOutput,
  GetContainerPolicyInput,
  GetContainerPolicyOutput,
  GetCorsPolicyInput,
  GetCorsPolicyOutput,
  GetLifecyclePolicyInput,
  GetLifecyclePolicyOutput,
  GetMetricPolicyInput,
  GetMetricPolicyOutput,
  InternalServerError,
  LimitExceededException,
  ListContainersInput,
  ListContainersOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  MethodName,
  MetricPolicy,
  MetricPolicyRule,
  PolicyNotFoundException,
  PutContainerPolicyInput,
  PutContainerPolicyOutput,
  PutCorsPolicyInput,
  PutCorsPolicyOutput,
  PutLifecyclePolicyInput,
  PutLifecyclePolicyOutput,
  PutMetricPolicyInput,
  PutMetricPolicyOutput,
  StartAccessLoggingInput,
  StartAccessLoggingOutput,
  StopAccessLoggingInput,
  StopAccessLoggingOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateContainerCommand = async (
  input: CreateContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.CreateContainer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContainerCommand = async (
  input: DeleteContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteContainer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContainerPolicyCommand = async (
  input: DeleteContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCorsPolicyCommand = async (
  input: DeleteCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMetricPolicyCommand = async (
  input: DeleteMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeContainerCommand = async (
  input: DescribeContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DescribeContainer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerPolicyCommand = async (
  input: GetContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCorsPolicyCommand = async (
  input: GetCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMetricPolicyCommand = async (
  input: GetMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListContainersCommand = async (
  input: ListContainersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.ListContainers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListContainersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutContainerPolicyCommand = async (
  input: PutContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutCorsPolicyCommand = async (
  input: PutCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLifecyclePolicyCommand = async (
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMetricPolicyCommand = async (
  input: PutMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAccessLoggingCommand = async (
  input: StartAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.StartAccessLogging",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAccessLoggingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopAccessLoggingCommand = async (
  input: StopAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.StopAccessLogging",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopAccessLoggingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContainerOutput(data, context);
  const response: CreateContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.mediastore#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerOutput(data, context);
  const response: DeleteContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerPolicyOutput(data, context);
  const response: DeleteContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCorsPolicyOutput(data, context);
  const response: DeleteCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLifecyclePolicyOutput(data, context);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMetricPolicyOutput(data, context);
  const response: DeleteMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContainerOutput(data, context);
  const response: DescribeContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerPolicyOutput(data, context);
  const response: GetContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCorsPolicyOutput(data, context);
  const response: GetCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyOutput(data, context);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMetricPolicyOutput(data, context);
  const response: GetMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListContainersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListContainersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContainersOutput(data, context);
  const response: ListContainersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListContainersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutContainerPolicyOutput(data, context);
  const response: PutContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutCorsPolicyOutput(data, context);
  const response: PutCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecyclePolicyOutput(data, context);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutMetricPolicyOutput(data, context);
  const response: PutMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartAccessLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAccessLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAccessLoggingOutput(data, context);
  const response: StartAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAccessLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopAccessLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopAccessLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopAccessLoggingOutput(data, context);
  const response: StopAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopAccessLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      response = {
        ...(await deserializeAws_json1_1ContainerInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ContainerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ContainerInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ContainerInUseException(body, context);
  const contents: ContainerInUseException = {
    name: "ContainerInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ContainerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ContainerNotFoundException(body, context);
  const contents: ContainerNotFoundException = {
    name: "ContainerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CorsPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CorsPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CorsPolicyNotFoundException(body, context);
  const contents: CorsPolicyNotFoundException = {
    name: "CorsPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyNotFoundException(body, context);
  const contents: PolicyNotFoundException = {
    name: "PolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AllowedMethods = (input: (MethodName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CorsPolicy = (input: CorsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CorsRule(entry, context);
    });
};

const serializeAws_json1_1CorsRule = (input: CorsRule, context: __SerdeContext): any => {
  return {
    ...(input.AllowedHeaders !== undefined &&
      input.AllowedHeaders !== null && {
        AllowedHeaders: serializeAws_json1_1AllowedHeaders(input.AllowedHeaders, context),
      }),
    ...(input.AllowedMethods !== undefined &&
      input.AllowedMethods !== null && {
        AllowedMethods: serializeAws_json1_1AllowedMethods(input.AllowedMethods, context),
      }),
    ...(input.AllowedOrigins !== undefined &&
      input.AllowedOrigins !== null && {
        AllowedOrigins: serializeAws_json1_1AllowedOrigins(input.AllowedOrigins, context),
      }),
    ...(input.ExposeHeaders !== undefined &&
      input.ExposeHeaders !== null && {
        ExposeHeaders: serializeAws_json1_1ExposeHeaders(input.ExposeHeaders, context),
      }),
    ...(input.MaxAgeSeconds !== undefined && input.MaxAgeSeconds !== null && { MaxAgeSeconds: input.MaxAgeSeconds }),
  };
};

const serializeAws_json1_1CreateContainerInput = (input: CreateContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteContainerInput = (input: DeleteContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1DeleteContainerPolicyInput = (
  input: DeleteContainerPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1DeleteCorsPolicyInput = (input: DeleteCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1DeleteLifecyclePolicyInput = (
  input: DeleteLifecyclePolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1DeleteMetricPolicyInput = (input: DeleteMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1DescribeContainerInput = (input: DescribeContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1ExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetContainerPolicyInput = (input: GetContainerPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1GetCorsPolicyInput = (input: GetCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1GetLifecyclePolicyInput = (input: GetLifecyclePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1GetMetricPolicyInput = (input: GetMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1ListContainersInput = (input: ListContainersInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
  };
};

const serializeAws_json1_1MetricPolicy = (input: MetricPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ContainerLevelMetrics !== undefined &&
      input.ContainerLevelMetrics !== null && { ContainerLevelMetrics: input.ContainerLevelMetrics }),
    ...(input.MetricPolicyRules !== undefined &&
      input.MetricPolicyRules !== null && {
        MetricPolicyRules: serializeAws_json1_1MetricPolicyRules(input.MetricPolicyRules, context),
      }),
  };
};

const serializeAws_json1_1MetricPolicyRule = (input: MetricPolicyRule, context: __SerdeContext): any => {
  return {
    ...(input.ObjectGroup !== undefined && input.ObjectGroup !== null && { ObjectGroup: input.ObjectGroup }),
    ...(input.ObjectGroupName !== undefined &&
      input.ObjectGroupName !== null && { ObjectGroupName: input.ObjectGroupName }),
  };
};

const serializeAws_json1_1MetricPolicyRules = (input: MetricPolicyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetricPolicyRule(entry, context);
    });
};

const serializeAws_json1_1PutContainerPolicyInput = (input: PutContainerPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
  };
};

const serializeAws_json1_1PutCorsPolicyInput = (input: PutCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.CorsPolicy !== undefined &&
      input.CorsPolicy !== null && { CorsPolicy: serializeAws_json1_1CorsPolicy(input.CorsPolicy, context) }),
  };
};

const serializeAws_json1_1PutLifecyclePolicyInput = (input: PutLifecyclePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.LifecyclePolicy !== undefined &&
      input.LifecyclePolicy !== null && { LifecyclePolicy: input.LifecyclePolicy }),
  };
};

const serializeAws_json1_1PutMetricPolicyInput = (input: PutMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
    ...(input.MetricPolicy !== undefined &&
      input.MetricPolicy !== null && { MetricPolicy: serializeAws_json1_1MetricPolicy(input.MetricPolicy, context) }),
  };
};

const serializeAws_json1_1StartAccessLoggingInput = (input: StartAccessLoggingInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1StopAccessLoggingInput = (input: StopAccessLoggingInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName !== undefined && input.ContainerName !== null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Resource !== undefined && input.Resource !== null && { Resource: input.Resource }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1AllowedHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AllowedMethods = (output: any, context: __SerdeContext): (MethodName | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AllowedOrigins = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Container = (output: any, context: __SerdeContext): Container => {
  return {
    ARN: __expectString(output.ARN),
    AccessLoggingEnabled: __expectBoolean(output.AccessLoggingEnabled),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ContainerInUseException = (
  output: any,
  context: __SerdeContext
): ContainerInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ContainerList = (output: any, context: __SerdeContext): Container[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Container(entry, context);
    });
};

const deserializeAws_json1_1ContainerNotFoundException = (
  output: any,
  context: __SerdeContext
): ContainerNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CorsPolicy = (output: any, context: __SerdeContext): CorsRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CorsRule(entry, context);
    });
};

const deserializeAws_json1_1CorsPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): CorsPolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CorsRule = (output: any, context: __SerdeContext): CorsRule => {
  return {
    AllowedHeaders:
      output.AllowedHeaders !== undefined && output.AllowedHeaders !== null
        ? deserializeAws_json1_1AllowedHeaders(output.AllowedHeaders, context)
        : undefined,
    AllowedMethods:
      output.AllowedMethods !== undefined && output.AllowedMethods !== null
        ? deserializeAws_json1_1AllowedMethods(output.AllowedMethods, context)
        : undefined,
    AllowedOrigins:
      output.AllowedOrigins !== undefined && output.AllowedOrigins !== null
        ? deserializeAws_json1_1AllowedOrigins(output.AllowedOrigins, context)
        : undefined,
    ExposeHeaders:
      output.ExposeHeaders !== undefined && output.ExposeHeaders !== null
        ? deserializeAws_json1_1ExposeHeaders(output.ExposeHeaders, context)
        : undefined,
    MaxAgeSeconds: __expectInt(output.MaxAgeSeconds),
  } as any;
};

const deserializeAws_json1_1CreateContainerOutput = (output: any, context: __SerdeContext): CreateContainerOutput => {
  return {
    Container:
      output.Container !== undefined && output.Container !== null
        ? deserializeAws_json1_1Container(output.Container, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteContainerOutput = (output: any, context: __SerdeContext): DeleteContainerOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteContainerPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCorsPolicyOutput = (output: any, context: __SerdeContext): DeleteCorsPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMetricPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteMetricPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeContainerOutput = (
  output: any,
  context: __SerdeContext
): DescribeContainerOutput => {
  return {
    Container:
      output.Container !== undefined && output.Container !== null
        ? deserializeAws_json1_1Container(output.Container, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExposeHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1GetContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetContainerPolicyOutput => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1GetCorsPolicyOutput = (output: any, context: __SerdeContext): GetCorsPolicyOutput => {
  return {
    CorsPolicy:
      output.CorsPolicy !== undefined && output.CorsPolicy !== null
        ? deserializeAws_json1_1CorsPolicy(output.CorsPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyOutput => {
  return {
    LifecyclePolicy: __expectString(output.LifecyclePolicy),
  } as any;
};

const deserializeAws_json1_1GetMetricPolicyOutput = (output: any, context: __SerdeContext): GetMetricPolicyOutput => {
  return {
    MetricPolicy:
      output.MetricPolicy !== undefined && output.MetricPolicy !== null
        ? deserializeAws_json1_1MetricPolicy(output.MetricPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListContainersOutput = (output: any, context: __SerdeContext): ListContainersOutput => {
  return {
    Containers:
      output.Containers !== undefined && output.Containers !== null
        ? deserializeAws_json1_1ContainerList(output.Containers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricPolicy = (output: any, context: __SerdeContext): MetricPolicy => {
  return {
    ContainerLevelMetrics: __expectString(output.ContainerLevelMetrics),
    MetricPolicyRules:
      output.MetricPolicyRules !== undefined && output.MetricPolicyRules !== null
        ? deserializeAws_json1_1MetricPolicyRules(output.MetricPolicyRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricPolicyRule = (output: any, context: __SerdeContext): MetricPolicyRule => {
  return {
    ObjectGroup: __expectString(output.ObjectGroup),
    ObjectGroupName: __expectString(output.ObjectGroupName),
  } as any;
};

const deserializeAws_json1_1MetricPolicyRules = (output: any, context: __SerdeContext): MetricPolicyRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricPolicyRule(entry, context);
    });
};

const deserializeAws_json1_1PolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PutContainerPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutContainerPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1PutCorsPolicyOutput = (output: any, context: __SerdeContext): PutCorsPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1PutLifecyclePolicyOutput = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1PutMetricPolicyOutput = (output: any, context: __SerdeContext): PutMetricPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1StartAccessLoggingOutput = (
  output: any,
  context: __SerdeContext
): StartAccessLoggingOutput => {
  return {} as any;
};

const deserializeAws_json1_1StopAccessLoggingOutput = (
  output: any,
  context: __SerdeContext
): StopAccessLoggingOutput => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
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
    headers,
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
