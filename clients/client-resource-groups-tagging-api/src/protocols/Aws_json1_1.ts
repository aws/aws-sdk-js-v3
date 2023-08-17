// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  ConcurrentModificationException,
  ConstraintViolationException,
  DescribeReportCreationInput,
  GetComplianceSummaryInput,
  GetResourcesInput,
  GetTagKeysInput,
  GetTagValuesInput,
  GroupByAttribute,
  InternalServiceException,
  InvalidParameterException,
  PaginationTokenExpiredException,
  StartReportCreationInput,
  TagFilter,
  TagResourcesInput,
  ThrottledException,
  UntagResourcesInput,
} from "../models/models_0";
import { ResourceGroupsTaggingAPIServiceException as __BaseException } from "../models/ResourceGroupsTaggingAPIServiceException";

/**
 * serializeAws_json1_1DescribeReportCreationCommand
 */
export const se_DescribeReportCreationCommand = async (
  input: DescribeReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReportCreation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceSummaryCommand
 */
export const se_GetComplianceSummaryCommand = async (
  input: GetComplianceSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcesCommand
 */
export const se_GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTagKeysCommand
 */
export const se_GetTagKeysCommand = async (
  input: GetTagKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTagKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTagValuesCommand
 */
export const se_GetTagValuesCommand = async (
  input: GetTagValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTagValues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReportCreationCommand
 */
export const se_StartReportCreationCommand = async (
  input: StartReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReportCreation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourcesCommand
 */
export const se_TagResourcesCommand = async (
  input: TagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourcesCommand
 */
export const se_UntagResourcesCommand = async (
  input: UntagResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DescribeReportCreationCommand
 */
export const de_DescribeReportCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReportCreationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReportCreationCommandError
 */
const de_DescribeReportCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetComplianceSummaryCommand
 */
export const de_GetComplianceSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryCommandError
 */
const de_GetComplianceSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourcesCommand
 */
export const de_GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcesCommandError
 */
const de_GetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await de_PaginationTokenExpiredExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTagKeysCommand
 */
export const de_GetTagKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTagKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTagKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTagKeysCommandError
 */
const de_GetTagKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await de_PaginationTokenExpiredExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetTagValuesCommand
 */
export const de_GetTagValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTagValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTagValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTagValuesCommandError
 */
const de_GetTagValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await de_PaginationTokenExpiredExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartReportCreationCommand
 */
export const de_StartReportCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReportCreationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReportCreationCommandError
 */
const de_StartReportCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourcesCommand
 */
export const de_TagResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourcesCommandError
 */
const de_TagResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourcesCommand
 */
export const de_UntagResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourcesCommandError
 */
const de_UntagResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConstraintViolationExceptionRes
 */
const de_ConstraintViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PaginationTokenExpiredExceptionRes
 */
const de_PaginationTokenExpiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PaginationTokenExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PaginationTokenExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_DescribeReportCreationInput omitted.

// se_GetComplianceSummaryInput omitted.

// se_GetResourcesInput omitted.

// se_GetTagKeysInput omitted.

// se_GetTagValuesInput omitted.

// se_GroupBy omitted.

// se_RegionFilterList omitted.

// se_ResourceARNListForGet omitted.

// se_ResourceARNListForTagUntag omitted.

// se_ResourceTypeFilterList omitted.

// se_StartReportCreationInput omitted.

// se_TagFilter omitted.

// se_TagFilterList omitted.

// se_TagKeyFilterList omitted.

// se_TagKeyListForUntag omitted.

// se_TagMap omitted.

// se_TagResourcesInput omitted.

// se_TagValueList omitted.

// se_TargetIdFilterList omitted.

// se_UntagResourcesInput omitted.

// de_ComplianceDetails omitted.

// de_ConcurrentModificationException omitted.

// de_ConstraintViolationException omitted.

// de_DescribeReportCreationOutput omitted.

// de_FailedResourcesMap omitted.

// de_FailureInfo omitted.

// de_GetComplianceSummaryOutput omitted.

// de_GetResourcesOutput omitted.

// de_GetTagKeysOutput omitted.

// de_GetTagValuesOutput omitted.

// de_InternalServiceException omitted.

// de_InvalidParameterException omitted.

// de_PaginationTokenExpiredException omitted.

// de_ResourceTagMapping omitted.

// de_ResourceTagMappingList omitted.

// de_StartReportCreationOutput omitted.

// de_Summary omitted.

// de_SummaryList omitted.

// de_Tag omitted.

// de_TagKeyList omitted.

// de_TagList omitted.

// de_TagResourcesOutput omitted.

// de_TagValuesOutputList omitted.

// de_ThrottledException omitted.

// de_UntagResourcesOutput omitted.

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `ResourceGroupsTaggingAPI_20170126.${operation}`,
  };
}

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
