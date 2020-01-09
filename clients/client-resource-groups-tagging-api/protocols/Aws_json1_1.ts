import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import {
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput,
} from "../commands/GetTagKeysCommand";
import {
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "../commands/GetTagValuesCommand";
import {
  TagResourcesCommandInput,
  TagResourcesCommandOutput,
} from "../commands/TagResourcesCommand";
import {
  UntagResourcesCommandInput,
  UntagResourcesCommandOutput,
} from "../commands/UntagResourcesCommand";
import {
  ComplianceDetails,
  FailureInfo,
  GetResourcesInput,
  GetResourcesOutput,
  GetTagKeysInput,
  GetTagKeysOutput,
  GetTagValuesInput,
  GetTagValuesOutput,
  InternalServiceException,
  InvalidParameterException,
  PaginationTokenExpiredException,
  ResourceTagMapping,
  Tag,
  TagFilter,
  TagResourcesInput,
  TagResourcesOutput,
  ThrottledException,
  UntagResourcesInput,
  UntagResourcesOutput,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1GetResourcesCommand(
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "ResourceGroupsTaggingAPI_20170126.GetResources";
  let body: any = {};
  const wrappedBody: any = {
    GetResourcesInput: serializeAws_json1_1GetResourcesInput(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetResources",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetTagKeysCommand(
  input: GetTagKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "ResourceGroupsTaggingAPI_20170126.GetTagKeys";
  let body: any = {};
  const wrappedBody: any = {
    GetTagKeysInput: serializeAws_json1_1GetTagKeysInput(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTagKeys",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetTagValuesCommand(
  input: GetTagValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "ResourceGroupsTaggingAPI_20170126.GetTagValues";
  let body: any = {};
  const wrappedBody: any = {
    GetTagValuesInput: serializeAws_json1_1GetTagValuesInput(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTagValues",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1TagResourcesCommand(
  input: TagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "ResourceGroupsTaggingAPI_20170126.TagResources";
  let body: any = {};
  const wrappedBody: any = {
    TagResourcesInput: serializeAws_json1_1TagResourcesInput(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResources",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1UntagResourcesCommand(
  input: UntagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "ResourceGroupsTaggingAPI_20170126.UntagResources";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourcesInput: serializeAws_json1_1UntagResourcesInput(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResources",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1GetResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcesOutput(data, context);
  const response: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.tagging.router.service.model.v20170126#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTagKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagKeysOutput(data, context);
  const response: GetTagKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagKeysOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTagKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetTagKeysCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.tagging.router.service.model.v20170126#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTagValuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagValuesOutput(data, context);
  const response: GetTagValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagValuesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTagValuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetTagValuesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "PaginationTokenExpiredException":
    case "com.amazonaws.tagging.router.service.model.v20170126#PaginationTokenExpiredException":
      response = await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.tagging.router.service.model.v20170126#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourcesOutput(data, context);
  const response: TagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourcesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TagResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.tagging.router.service.model.v20170126#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourcesOutput(data, context);
  const response: UntagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourcesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UntagResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.tagging.router.service.model.v20170126#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "ThrottledException":
    case "com.amazonaws.tagging.router.service.model.v20170126#ThrottledException":
      response = await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.tagging.router.service.model.v20170126#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceException(output.body, context);
  const contents: InternalServiceException = {
    __type: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(output.body, context);
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PaginationTokenExpiredException> => {
  const deserialized: any = deserializeAws_json1_1PaginationTokenExpiredException(output.body, context);
  const contents: PaginationTokenExpiredException = {
    __type: "PaginationTokenExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const deserialized: any = deserializeAws_json1_1ThrottledException(output.body, context);
  const contents: ThrottledException = {
    __type: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1GetResourcesInput = (
  input: GetResourcesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExcludeCompliantResources !== undefined) {
    bodyParams['ExcludeCompliantResources'] = input.ExcludeCompliantResources;
  }
  if (input.IncludeComplianceDetails !== undefined) {
    bodyParams['IncludeComplianceDetails'] = input.IncludeComplianceDetails;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams['PaginationToken'] = input.PaginationToken;
  }
  if (input.ResourceTypeFilters !== undefined) {
    bodyParams['ResourceTypeFilters'] = serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context);
  }
  if (input.ResourcesPerPage !== undefined) {
    bodyParams['ResourcesPerPage'] = input.ResourcesPerPage;
  }
  if (input.TagFilters !== undefined) {
    bodyParams['TagFilters'] = serializeAws_json1_1TagFilterList(input.TagFilters, context);
  }
  if (input.TagsPerPage !== undefined) {
    bodyParams['TagsPerPage'] = input.TagsPerPage;
  }
  return bodyParams;
}

const serializeAws_json1_1GetTagKeysInput = (
  input: GetTagKeysInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams['PaginationToken'] = input.PaginationToken;
  }
  return bodyParams;
}

const serializeAws_json1_1GetTagValuesInput = (
  input: GetTagValuesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams['Key'] = input.Key;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.PaginationToken !== undefined) {
    bodyParams['PaginationToken'] = input.PaginationToken;
  }
  return bodyParams;
}

const serializeAws_json1_1ResourceARNList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1ResourceTypeFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams['Key'] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams['Values'] = serializeAws_json1_1TagValueList(input.Values, context);
  }
  return bodyParams;
}

const serializeAws_json1_1TagFilterList = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1TagFilter(entry, context)
  );
}

const serializeAws_json1_1TagKeyListForUntag = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const serializeAws_json1_1TagResourcesInput = (
  input: TagResourcesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARNList !== undefined) {
    bodyParams['ResourceARNList'] = serializeAws_json1_1ResourceARNList(input.ResourceARNList, context);
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagMap(input.Tags, context);
  }
  return bodyParams;
}

const serializeAws_json1_1TagValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1UntagResourcesInput = (
  input: UntagResourcesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARNList !== undefined) {
    bodyParams['ResourceARNList'] = serializeAws_json1_1ResourceARNList(input.ResourceARNList, context);
  }
  if (input.TagKeys !== undefined) {
    bodyParams['TagKeys'] = serializeAws_json1_1TagKeyListForUntag(input.TagKeys, context);
  }
  return bodyParams;
}

const deserializeAws_json1_1ComplianceDetails = (
  output: any,
  context: __SerdeContext
): ComplianceDetails => {
  let contents: any = {
    __type: "ComplianceDetails",
    ComplianceStatus: undefined,
    KeysWithNoncompliantValues: undefined,
    NoncompliantKeys: undefined,
  };
  if (output.ComplianceStatus !== undefined) {
    contents.ComplianceStatus = output.ComplianceStatus;
  }
  if (output.KeysWithNoncompliantValues !== undefined) {
    contents.KeysWithNoncompliantValues = deserializeAws_json1_1TagKeyList(output.KeysWithNoncompliantValues, context);
  }
  if (output.NoncompliantKeys !== undefined) {
    contents.NoncompliantKeys = deserializeAws_json1_1TagKeyList(output.NoncompliantKeys, context);
  }
  return contents;
}

const deserializeAws_json1_1FailedResourcesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FailureInfo } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1FailureInfo(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1FailureInfo = (
  output: any,
  context: __SerdeContext
): FailureInfo => {
  let contents: any = {
    __type: "FailureInfo",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    StatusCode: undefined,
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.StatusCode !== undefined) {
    contents.StatusCode = output.StatusCode;
  }
  return contents;
}

const deserializeAws_json1_1GetResourcesOutput = (
  output: any,
  context: __SerdeContext
): GetResourcesOutput => {
  let contents: any = {
    __type: "GetResourcesOutput",
    PaginationToken: undefined,
    ResourceTagMappingList: undefined,
  };
  if (output.PaginationToken !== undefined) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.ResourceTagMappingList !== undefined) {
    contents.ResourceTagMappingList = deserializeAws_json1_1ResourceTagMappingList(output.ResourceTagMappingList, context);
  }
  return contents;
}

const deserializeAws_json1_1GetTagKeysOutput = (
  output: any,
  context: __SerdeContext
): GetTagKeysOutput => {
  let contents: any = {
    __type: "GetTagKeysOutput",
    PaginationToken: undefined,
    TagKeys: undefined,
  };
  if (output.PaginationToken !== undefined) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.TagKeys !== undefined) {
    contents.TagKeys = deserializeAws_json1_1TagKeyList(output.TagKeys, context);
  }
  return contents;
}

const deserializeAws_json1_1GetTagValuesOutput = (
  output: any,
  context: __SerdeContext
): GetTagValuesOutput => {
  let contents: any = {
    __type: "GetTagValuesOutput",
    PaginationToken: undefined,
    TagValues: undefined,
  };
  if (output.PaginationToken !== undefined) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (output.TagValues !== undefined) {
    contents.TagValues = deserializeAws_json1_1TagValuesOutputList(output.TagValues, context);
  }
  return contents;
}

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1PaginationTokenExpiredException = (
  output: any,
  context: __SerdeContext
): PaginationTokenExpiredException => {
  let contents: any = {
    __type: "PaginationTokenExpiredException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceTagMapping = (
  output: any,
  context: __SerdeContext
): ResourceTagMapping => {
  let contents: any = {
    __type: "ResourceTagMapping",
    ComplianceDetails: undefined,
    ResourceARN: undefined,
    Tags: undefined,
  };
  if (output.ComplianceDetails !== undefined) {
    contents.ComplianceDetails = deserializeAws_json1_1ComplianceDetails(output.ComplianceDetails, context);
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
}

const deserializeAws_json1_1ResourceTagMappingList = (
  output: any,
  context: __SerdeContext
): Array<ResourceTagMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceTagMapping(entry, context)
  );
}

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined,
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
}

const deserializeAws_json1_1TagKeyList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
}

const deserializeAws_json1_1TagResourcesOutput = (
  output: any,
  context: __SerdeContext
): TagResourcesOutput => {
  let contents: any = {
    __type: "TagResourcesOutput",
    FailedResourcesMap: undefined,
  };
  if (output.FailedResourcesMap !== undefined) {
    contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context);
  }
  return contents;
}

const deserializeAws_json1_1TagValuesOutputList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1ThrottledException = (
  output: any,
  context: __SerdeContext
): ThrottledException => {
  let contents: any = {
    __type: "ThrottledException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1UntagResourcesOutput = (
  output: any,
  context: __SerdeContext
): UntagResourcesOutput => {
  let contents: any = {
    __type: "UntagResourcesOutput",
    FailedResourcesMap: undefined,
  };
  if (output.FailedResourcesMap !== undefined) {
    contents.FailedResourcesMap = deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context);
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
