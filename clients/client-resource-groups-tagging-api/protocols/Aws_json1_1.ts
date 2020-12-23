import {
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput,
} from "../commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "../commands/GetComplianceSummaryCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "../commands/GetResourcesCommand";
import { GetTagKeysCommandInput, GetTagKeysCommandOutput } from "../commands/GetTagKeysCommand";
import { GetTagValuesCommandInput, GetTagValuesCommandOutput } from "../commands/GetTagValuesCommand";
import {
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput,
} from "../commands/StartReportCreationCommand";
import { TagResourcesCommandInput, TagResourcesCommandOutput } from "../commands/TagResourcesCommand";
import { UntagResourcesCommandInput, UntagResourcesCommandOutput } from "../commands/UntagResourcesCommand";
import {
  ComplianceDetails,
  ConcurrentModificationException,
  ConstraintViolationException,
  DescribeReportCreationInput,
  DescribeReportCreationOutput,
  FailureInfo,
  GetComplianceSummaryInput,
  GetComplianceSummaryOutput,
  GetResourcesInput,
  GetResourcesOutput,
  GetTagKeysInput,
  GetTagKeysOutput,
  GetTagValuesInput,
  GetTagValuesOutput,
  GroupByAttribute,
  InternalServiceException,
  InvalidParameterException,
  PaginationTokenExpiredException,
  ResourceTagMapping,
  StartReportCreationInput,
  StartReportCreationOutput,
  Summary,
  Tag,
  TagFilter,
  TagResourcesInput,
  TagResourcesOutput,
  ThrottledException,
  UntagResourcesInput,
  UntagResourcesOutput,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1DescribeReportCreationCommand = async (
  input: DescribeReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReportCreationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceSummaryCommand = async (
  input: GetComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComplianceSummaryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.GetResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagKeysCommand = async (
  input: GetTagKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.GetTagKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagKeysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagValuesCommand = async (
  input: GetTagValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.GetTagValues",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagValuesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReportCreationCommand = async (
  input: StartReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.StartReportCreation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReportCreationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourcesCommand = async (
  input: TagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.TagResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourcesCommand = async (
  input: UntagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ResourceGroupsTaggingAPI_20170126.UntagResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeReportCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReportCreationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReportCreationOutput(data, context);
  const response: DescribeReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReportCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceSummaryOutput(data, context);
  const response: GetComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcesOutput(data, context);
  const response: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTagKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTagKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagKeysOutput(data, context);
  const response: GetTagKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTagValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTagValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagValuesOutput(data, context);
  const response: GetTagValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartReportCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReportCreationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReportCreationOutput(data, context);
  const response: StartReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReportCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourcesOutput(data, context);
  const response: TagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourcesOutput(data, context);
  const response: UntagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConstraintViolationException(body, context);
  const contents: ConstraintViolationException = {
    name: "ConstraintViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PaginationTokenExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PaginationTokenExpiredException(body, context);
  const contents: PaginationTokenExpiredException = {
    name: "PaginationTokenExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottledException(body, context);
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1DescribeReportCreationInput = (
  input: DescribeReportCreationInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetComplianceSummaryInput = (
  input: GetComplianceSummaryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupBy(input.GroupBy, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken !== undefined &&
      input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
    ...(input.RegionFilters !== undefined &&
      input.RegionFilters !== null && {
        RegionFilters: serializeAws_json1_1RegionFilterList(input.RegionFilters, context),
      }),
    ...(input.ResourceTypeFilters !== undefined &&
      input.ResourceTypeFilters !== null && {
        ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
      }),
    ...(input.TagKeyFilters !== undefined &&
      input.TagKeyFilters !== null && {
        TagKeyFilters: serializeAws_json1_1TagKeyFilterList(input.TagKeyFilters, context),
      }),
    ...(input.TargetIdFilters !== undefined &&
      input.TargetIdFilters !== null && {
        TargetIdFilters: serializeAws_json1_1TargetIdFilterList(input.TargetIdFilters, context),
      }),
  };
};

const serializeAws_json1_1GetResourcesInput = (input: GetResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeCompliantResources !== undefined &&
      input.ExcludeCompliantResources !== null && { ExcludeCompliantResources: input.ExcludeCompliantResources }),
    ...(input.IncludeComplianceDetails !== undefined &&
      input.IncludeComplianceDetails !== null && { IncludeComplianceDetails: input.IncludeComplianceDetails }),
    ...(input.PaginationToken !== undefined &&
      input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
    ...(input.ResourceTypeFilters !== undefined &&
      input.ResourceTypeFilters !== null && {
        ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
      }),
    ...(input.ResourcesPerPage !== undefined &&
      input.ResourcesPerPage !== null && { ResourcesPerPage: input.ResourcesPerPage }),
    ...(input.TagFilters !== undefined &&
      input.TagFilters !== null && { TagFilters: serializeAws_json1_1TagFilterList(input.TagFilters, context) }),
    ...(input.TagsPerPage !== undefined && input.TagsPerPage !== null && { TagsPerPage: input.TagsPerPage }),
  };
};

const serializeAws_json1_1GetTagKeysInput = (input: GetTagKeysInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken !== undefined &&
      input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
  };
};

const serializeAws_json1_1GetTagValuesInput = (input: GetTagValuesInput, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken !== undefined &&
      input.PaginationToken !== null && { PaginationToken: input.PaginationToken }),
  };
};

const serializeAws_json1_1GroupBy = (input: (GroupByAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RegionFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ResourceARNList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ResourceTypeFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StartReportCreationInput = (
  input: StartReportCreationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
  };
};

const serializeAws_json1_1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1TagValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1TagFilterList = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TagFilter(entry, context);
    });
};

const serializeAws_json1_1TagKeyFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagKeyListForUntag = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_json1_1TagResourcesInput = (input: TagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList !== undefined &&
      input.ResourceARNList !== null && {
        ResourceARNList: serializeAws_json1_1ResourceARNList(input.ResourceARNList, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TargetIdFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UntagResourcesInput = (input: UntagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList !== undefined &&
      input.ResourceARNList !== null && {
        ResourceARNList: serializeAws_json1_1ResourceARNList(input.ResourceARNList, context),
      }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyListForUntag(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1ComplianceDetails = (output: any, context: __SerdeContext): ComplianceDetails => {
  return {
    ComplianceStatus:
      output.ComplianceStatus !== undefined && output.ComplianceStatus !== null ? output.ComplianceStatus : undefined,
    KeysWithNoncompliantValues:
      output.KeysWithNoncompliantValues !== undefined && output.KeysWithNoncompliantValues !== null
        ? deserializeAws_json1_1TagKeyList(output.KeysWithNoncompliantValues, context)
        : undefined,
    NoncompliantKeys:
      output.NoncompliantKeys !== undefined && output.NoncompliantKeys !== null
        ? deserializeAws_json1_1TagKeyList(output.NoncompliantKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ConstraintViolationException = (
  output: any,
  context: __SerdeContext
): ConstraintViolationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReportCreationOutput = (
  output: any,
  context: __SerdeContext
): DescribeReportCreationOutput => {
  return {
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    S3Location: output.S3Location !== undefined && output.S3Location !== null ? output.S3Location : undefined,
    StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1FailedResourcesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FailureInfo } => {
  return Object.entries(output).reduce((acc: { [key: string]: FailureInfo }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1FailureInfo(value, context),
    };
  }, {});
};

const deserializeAws_json1_1FailureInfo = (output: any, context: __SerdeContext): FailureInfo => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
  } as any;
};

const deserializeAws_json1_1GetComplianceSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryOutput => {
  return {
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    SummaryList:
      output.SummaryList !== undefined && output.SummaryList !== null
        ? deserializeAws_json1_1SummaryList(output.SummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcesOutput = (output: any, context: __SerdeContext): GetResourcesOutput => {
  return {
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    ResourceTagMappingList:
      output.ResourceTagMappingList !== undefined && output.ResourceTagMappingList !== null
        ? deserializeAws_json1_1ResourceTagMappingList(output.ResourceTagMappingList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagKeysOutput = (output: any, context: __SerdeContext): GetTagKeysOutput => {
  return {
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    TagKeys:
      output.TagKeys !== undefined && output.TagKeys !== null
        ? deserializeAws_json1_1TagKeyList(output.TagKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagValuesOutput = (output: any, context: __SerdeContext): GetTagValuesOutput => {
  return {
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null ? output.PaginationToken : undefined,
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_json1_1TagValuesOutputList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1PaginationTokenExpiredException = (
  output: any,
  context: __SerdeContext
): PaginationTokenExpiredException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTagMapping = (output: any, context: __SerdeContext): ResourceTagMapping => {
  return {
    ComplianceDetails:
      output.ComplianceDetails !== undefined && output.ComplianceDetails !== null
        ? deserializeAws_json1_1ComplianceDetails(output.ComplianceDetails, context)
        : undefined,
    ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTagMappingList = (output: any, context: __SerdeContext): ResourceTagMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceTagMapping(entry, context);
    });
};

const deserializeAws_json1_1StartReportCreationOutput = (
  output: any,
  context: __SerdeContext
): StartReportCreationOutput => {
  return {} as any;
};

const deserializeAws_json1_1Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null ? output.LastUpdated : undefined,
    NonCompliantResources:
      output.NonCompliantResources !== undefined && output.NonCompliantResources !== null
        ? output.NonCompliantResources
        : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
    TargetIdType: output.TargetIdType !== undefined && output.TargetIdType !== null ? output.TargetIdType : undefined,
  } as any;
};

const deserializeAws_json1_1SummaryList = (output: any, context: __SerdeContext): Summary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Summary(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagKeyList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
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

const deserializeAws_json1_1TagResourcesOutput = (output: any, context: __SerdeContext): TagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap !== undefined && output.FailedResourcesMap !== null
        ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagValuesOutputList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ThrottledException = (output: any, context: __SerdeContext): ThrottledException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourcesOutput = (output: any, context: __SerdeContext): UntagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap !== undefined && output.FailedResourcesMap !== null
        ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
        : undefined,
  } as any;
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
