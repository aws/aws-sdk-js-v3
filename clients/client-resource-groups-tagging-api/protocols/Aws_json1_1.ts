import {
  DescribeReportCreationCommandInput,
  DescribeReportCreationCommandOutput
} from "../commands/DescribeReportCreationCommand";
import {
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput
} from "../commands/GetComplianceSummaryCommand";
import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput
} from "../commands/GetResourcesCommand";
import {
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput
} from "../commands/GetTagKeysCommand";
import {
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput
} from "../commands/GetTagValuesCommand";
import {
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput
} from "../commands/StartReportCreationCommand";
import {
  TagResourcesCommandInput,
  TagResourcesCommandOutput
} from "../commands/TagResourcesCommand";
import {
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput
} from "../commands/UntagResourcesCommand";
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
  UntagResourcesOutput
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

export async function serializeAws_json1_1DescribeReportCreationCommand(
  input: DescribeReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeReportCreationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetComplianceSummaryCommand(
  input: GetComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetComplianceSummaryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetResourcesCommand(
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetResources";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTagKeysCommand(
  input: GetTagKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetTagKeys";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagKeysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTagValuesCommand(
  input: GetTagValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.GetTagValues";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagValuesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartReportCreationCommand(
  input: StartReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ResourceGroupsTaggingAPI_20170126.StartReportCreation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartReportCreationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourcesCommand(
  input: TagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.TagResources";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourcesCommand(
  input: UntagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ResourceGroupsTaggingAPI_20170126.UntagResources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourcesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DescribeReportCreationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeReportCreationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReportCreationOutput(data, context);
  const response: DescribeReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeReportCreationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeReportCreationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetComplianceSummaryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetComplianceSummaryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceSummaryOutput(data, context);
  const response: GetComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetComplianceSummaryOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetComplianceSummaryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcesOutput(data, context);
  const response: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetTagKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagKeysOutput(data, context);
  const response: GetTagKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagKeysOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTagKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetTagValuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagValuesOutput(data, context);
  const response: GetTagValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagValuesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTagValuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = {
        ...(await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartReportCreationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartReportCreationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReportCreationOutput(data, context);
  const response: StartReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartReportCreationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartReportCreationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConstraintViolationException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ConstraintViolationException":
      response = {
        ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourcesOutput(data, context);
  const response: TagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourcesOutput(data, context);
  const response: UntagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourcesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = {
        ...(await deserializeAws_json1_1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
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
}

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConstraintViolationException(
    body,
    context
  );
  const contents: ConstraintViolationException = {
    name: "ConstraintViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(
    body,
    context
  );
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PaginationTokenExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PaginationTokenExpiredException(
    body,
    context
  );
  const contents: PaginationTokenExpiredException = {
    name: "PaginationTokenExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottledException(
    body,
    context
  );
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DescribeReportCreationInput = (
  input: DescribeReportCreationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetComplianceSummaryInput = (
  input: GetComplianceSummaryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupBy(input.GroupBy, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams["PaginationToken"] = input.PaginationToken;
  }
  if (input.RegionFilters !== undefined) {
    bodyParams["RegionFilters"] = serializeAws_json1_1RegionFilterList(
      input.RegionFilters,
      context
    );
  }
  if (input.ResourceTypeFilters !== undefined) {
    bodyParams[
      "ResourceTypeFilters"
    ] = serializeAws_json1_1ResourceTypeFilterList(
      input.ResourceTypeFilters,
      context
    );
  }
  if (input.TagKeyFilters !== undefined) {
    bodyParams["TagKeyFilters"] = serializeAws_json1_1TagKeyFilterList(
      input.TagKeyFilters,
      context
    );
  }
  if (input.TargetIdFilters !== undefined) {
    bodyParams["TargetIdFilters"] = serializeAws_json1_1TargetIdFilterList(
      input.TargetIdFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetResourcesInput = (
  input: GetResourcesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExcludeCompliantResources !== undefined) {
    bodyParams["ExcludeCompliantResources"] = input.ExcludeCompliantResources;
  }
  if (input.IncludeComplianceDetails !== undefined) {
    bodyParams["IncludeComplianceDetails"] = input.IncludeComplianceDetails;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams["PaginationToken"] = input.PaginationToken;
  }
  if (input.ResourceTypeFilters !== undefined) {
    bodyParams[
      "ResourceTypeFilters"
    ] = serializeAws_json1_1ResourceTypeFilterList(
      input.ResourceTypeFilters,
      context
    );
  }
  if (input.ResourcesPerPage !== undefined) {
    bodyParams["ResourcesPerPage"] = input.ResourcesPerPage;
  }
  if (input.TagFilters !== undefined) {
    bodyParams["TagFilters"] = serializeAws_json1_1TagFilterList(
      input.TagFilters,
      context
    );
  }
  if (input.TagsPerPage !== undefined) {
    bodyParams["TagsPerPage"] = input.TagsPerPage;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTagKeysInput = (
  input: GetTagKeysInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams["PaginationToken"] = input.PaginationToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTagValuesInput = (
  input: GetTagValuesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams["PaginationToken"] = input.PaginationToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GroupBy = (
  input: Array<GroupByAttribute | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1RegionFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ResourceARNList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ResourceTypeFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartReportCreationInput = (
  input: StartReportCreationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1TagValueList(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilterList = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TagFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagKeyFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagKeyListForUntag = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1TagResourcesInput = (
  input: TagResourcesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNList !== undefined) {
    bodyParams["ResourceARNList"] = serializeAws_json1_1ResourceARNList(
      input.ResourceARNList,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagMap(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TagValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TargetIdFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UntagResourcesInput = (
  input: UntagResourcesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNList !== undefined) {
    bodyParams["ResourceARNList"] = serializeAws_json1_1ResourceARNList(
      input.ResourceARNList,
      context
    );
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyListForUntag(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1ComplianceDetails = (
  output: any,
  context: __SerdeContext
): ComplianceDetails => {
  let contents: any = {
    __type: "ComplianceDetails",
    ComplianceStatus: undefined,
    KeysWithNoncompliantValues: undefined,
    NoncompliantKeys: undefined
  };
  if (
    output.ComplianceStatus !== undefined &&
    output.ComplianceStatus !== null
  ) {
    contents.ComplianceStatus = output.ComplianceStatus;
  }
  if (
    output.KeysWithNoncompliantValues !== undefined &&
    output.KeysWithNoncompliantValues !== null
  ) {
    contents.KeysWithNoncompliantValues = deserializeAws_json1_1TagKeyList(
      output.KeysWithNoncompliantValues,
      context
    );
  }
  if (
    output.NoncompliantKeys !== undefined &&
    output.NoncompliantKeys !== null
  ) {
    contents.NoncompliantKeys = deserializeAws_json1_1TagKeyList(
      output.NoncompliantKeys,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConstraintViolationException = (
  output: any,
  context: __SerdeContext
): ConstraintViolationException => {
  let contents: any = {
    __type: "ConstraintViolationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeReportCreationOutput = (
  output: any,
  context: __SerdeContext
): DescribeReportCreationOutput => {
  let contents: any = {
    __type: "DescribeReportCreationOutput",
    ErrorMessage: undefined,
    S3Location: undefined,
    StartDate: undefined,
    Status: undefined
  };
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.S3Location !== undefined && output.S3Location !== null) {
    contents.S3Location = output.S3Location;
  }
  if (output.StartDate !== undefined && output.StartDate !== null) {
    contents.StartDate = output.StartDate;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1FailedResourcesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FailureInfo } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1FailureInfo(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1FailureInfo = (
  output: any,
  context: __SerdeContext
): FailureInfo => {
  let contents: any = {
    __type: "FailureInfo",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    StatusCode: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  return contents;
};

const deserializeAws_json1_1GetComplianceSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryOutput => {
  let contents: any = {
    __type: "GetComplianceSummaryOutput",
    PaginationToken: undefined,
    SummaryList: undefined
  };
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.SummaryList !== undefined && output.SummaryList !== null) {
    contents.SummaryList = deserializeAws_json1_1SummaryList(
      output.SummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetResourcesOutput = (
  output: any,
  context: __SerdeContext
): GetResourcesOutput => {
  let contents: any = {
    __type: "GetResourcesOutput",
    PaginationToken: undefined,
    ResourceTagMappingList: undefined
  };
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (
    output.ResourceTagMappingList !== undefined &&
    output.ResourceTagMappingList !== null
  ) {
    contents.ResourceTagMappingList = deserializeAws_json1_1ResourceTagMappingList(
      output.ResourceTagMappingList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetTagKeysOutput = (
  output: any,
  context: __SerdeContext
): GetTagKeysOutput => {
  let contents: any = {
    __type: "GetTagKeysOutput",
    PaginationToken: undefined,
    TagKeys: undefined
  };
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.TagKeys !== undefined && output.TagKeys !== null) {
    contents.TagKeys = deserializeAws_json1_1TagKeyList(
      output.TagKeys,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetTagValuesOutput = (
  output: any,
  context: __SerdeContext
): GetTagValuesOutput => {
  let contents: any = {
    __type: "GetTagValuesOutput",
    PaginationToken: undefined,
    TagValues: undefined
  };
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.TagValues !== undefined && output.TagValues !== null) {
    contents.TagValues = deserializeAws_json1_1TagValuesOutputList(
      output.TagValues,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PaginationTokenExpiredException = (
  output: any,
  context: __SerdeContext
): PaginationTokenExpiredException => {
  let contents: any = {
    __type: "PaginationTokenExpiredException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceTagMapping = (
  output: any,
  context: __SerdeContext
): ResourceTagMapping => {
  let contents: any = {
    __type: "ResourceTagMapping",
    ComplianceDetails: undefined,
    ResourceARN: undefined,
    Tags: undefined
  };
  if (
    output.ComplianceDetails !== undefined &&
    output.ComplianceDetails !== null
  ) {
    contents.ComplianceDetails = deserializeAws_json1_1ComplianceDetails(
      output.ComplianceDetails,
      context
    );
  }
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ResourceTagMappingList = (
  output: any,
  context: __SerdeContext
): Array<ResourceTagMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceTagMapping(entry, context)
  );
};

const deserializeAws_json1_1StartReportCreationOutput = (
  output: any,
  context: __SerdeContext
): StartReportCreationOutput => {
  let contents: any = {
    __type: "StartReportCreationOutput"
  };
  return contents;
};

const deserializeAws_json1_1Summary = (
  output: any,
  context: __SerdeContext
): Summary => {
  let contents: any = {
    __type: "Summary",
    LastUpdated: undefined,
    NonCompliantResources: undefined,
    Region: undefined,
    ResourceType: undefined,
    TargetId: undefined,
    TargetIdType: undefined
  };
  if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
    contents.LastUpdated = output.LastUpdated;
  }
  if (
    output.NonCompliantResources !== undefined &&
    output.NonCompliantResources !== null
  ) {
    contents.NonCompliantResources = output.NonCompliantResources;
  }
  if (output.Region !== undefined && output.Region !== null) {
    contents.Region = output.Region;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.TargetId !== undefined && output.TargetId !== null) {
    contents.TargetId = output.TargetId;
  }
  if (output.TargetIdType !== undefined && output.TargetIdType !== null) {
    contents.TargetIdType = output.TargetIdType;
  }
  return contents;
};

const deserializeAws_json1_1SummaryList = (
  output: any,
  context: __SerdeContext
): Array<Summary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Summary(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagKeyList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourcesOutput = (
  output: any,
  context: __SerdeContext
): TagResourcesOutput => {
  let contents: any = {
    __type: "TagResourcesOutput",
    FailedResourcesMap: undefined
  };
  if (
    output.FailedResourcesMap !== undefined &&
    output.FailedResourcesMap !== null
  ) {
    contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(
      output.FailedResourcesMap,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TagValuesOutputList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ThrottledException = (
  output: any,
  context: __SerdeContext
): ThrottledException => {
  let contents: any = {
    __type: "ThrottledException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourcesOutput = (
  output: any,
  context: __SerdeContext
): UntagResourcesOutput => {
  let contents: any = {
    __type: "UntagResourcesOutput",
    FailedResourcesMap: undefined
  };
  if (
    output.FailedResourcesMap !== undefined &&
    output.FailedResourcesMap !== null
  ) {
    contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(
      output.FailedResourcesMap,
      context
    );
  }
  return contents;
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
