// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { ResourceGroupsTaggingAPIServiceException as __BaseException } from "../models/ResourceGroupsTaggingAPIServiceException";

export const serializeAws_json1_1DescribeReportCreationCommand = async (
  input: DescribeReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetResources",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetTagKeys",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.GetTagValues",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.StartReportCreation",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.TagResources",
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
    "x-amz-target": "ResourceGroupsTaggingAPI_20170126.UntagResources",
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PaginationTokenExpiredException":
    case "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException":
      throw await deserializeAws_json1_1PaginationTokenExpiredExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.resourcegroupstaggingapi#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.resourcegroupstaggingapi#ThrottledException":
      throw await deserializeAws_json1_1ThrottledExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConstraintViolationException(body, context);
  const exception = new ConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PaginationTokenExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PaginationTokenExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PaginationTokenExpiredException(body, context);
  const exception = new PaginationTokenExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottledException(body, context);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupBy(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.RegionFilters != null && {
      RegionFilters: serializeAws_json1_1RegionFilterList(input.RegionFilters, context),
    }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
    }),
    ...(input.TagKeyFilters != null && {
      TagKeyFilters: serializeAws_json1_1TagKeyFilterList(input.TagKeyFilters, context),
    }),
    ...(input.TargetIdFilters != null && {
      TargetIdFilters: serializeAws_json1_1TargetIdFilterList(input.TargetIdFilters, context),
    }),
  };
};

const serializeAws_json1_1GetResourcesInput = (input: GetResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeCompliantResources != null && { ExcludeCompliantResources: input.ExcludeCompliantResources }),
    ...(input.IncludeComplianceDetails != null && { IncludeComplianceDetails: input.IncludeComplianceDetails }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.ResourceARNList != null && {
      ResourceARNList: serializeAws_json1_1ResourceARNListForGet(input.ResourceARNList, context),
    }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: serializeAws_json1_1ResourceTypeFilterList(input.ResourceTypeFilters, context),
    }),
    ...(input.ResourcesPerPage != null && { ResourcesPerPage: input.ResourcesPerPage }),
    ...(input.TagFilters != null && { TagFilters: serializeAws_json1_1TagFilterList(input.TagFilters, context) }),
    ...(input.TagsPerPage != null && { TagsPerPage: input.TagsPerPage }),
  };
};

const serializeAws_json1_1GetTagKeysInput = (input: GetTagKeysInput, context: __SerdeContext): any => {
  return {
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
  };
};

const serializeAws_json1_1GetTagValuesInput = (input: GetTagValuesInput, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
  };
};

const serializeAws_json1_1GroupBy = (input: (GroupByAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RegionFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceARNListForGet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceARNListForTagUntag = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceTypeFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartReportCreationInput = (
  input: StartReportCreationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
  };
};

const serializeAws_json1_1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1TagValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1TagFilterList = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TagFilter(entry, context);
    });
};

const serializeAws_json1_1TagKeyFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagKeyListForUntag = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1TagResourcesInput = (input: TagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList != null && {
      ResourceARNList: serializeAws_json1_1ResourceARNListForTagUntag(input.ResourceARNList, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TargetIdFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1UntagResourcesInput = (input: UntagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList != null && {
      ResourceARNList: serializeAws_json1_1ResourceARNListForTagUntag(input.ResourceARNList, context),
    }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyListForUntag(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1ComplianceDetails = (output: any, context: __SerdeContext): ComplianceDetails => {
  return {
    ComplianceStatus: __expectBoolean(output.ComplianceStatus),
    KeysWithNoncompliantValues:
      output.KeysWithNoncompliantValues != null
        ? deserializeAws_json1_1TagKeyList(output.KeysWithNoncompliantValues, context)
        : undefined,
    NoncompliantKeys:
      output.NoncompliantKeys != null ? deserializeAws_json1_1TagKeyList(output.NoncompliantKeys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConstraintViolationException = (
  output: any,
  context: __SerdeContext
): ConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DescribeReportCreationOutput = (
  output: any,
  context: __SerdeContext
): DescribeReportCreationOutput => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    S3Location: __expectString(output.S3Location),
    StartDate: __expectString(output.StartDate),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1FailedResourcesMap = (
  output: any,
  context: __SerdeContext
): Record<string, FailureInfo> => {
  return Object.entries(output).reduce((acc: Record<string, FailureInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1FailureInfo(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1FailureInfo = (output: any, context: __SerdeContext): FailureInfo => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_json1_1GetComplianceSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetComplianceSummaryOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    SummaryList:
      output.SummaryList != null ? deserializeAws_json1_1SummaryList(output.SummaryList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourcesOutput = (output: any, context: __SerdeContext): GetResourcesOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    ResourceTagMappingList:
      output.ResourceTagMappingList != null
        ? deserializeAws_json1_1ResourceTagMappingList(output.ResourceTagMappingList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagKeysOutput = (output: any, context: __SerdeContext): GetTagKeysOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    TagKeys: output.TagKeys != null ? deserializeAws_json1_1TagKeyList(output.TagKeys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagValuesOutput = (output: any, context: __SerdeContext): GetTagValuesOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    TagValues:
      output.TagValues != null ? deserializeAws_json1_1TagValuesOutputList(output.TagValues, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PaginationTokenExpiredException = (
  output: any,
  context: __SerdeContext
): PaginationTokenExpiredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceTagMapping = (output: any, context: __SerdeContext): ResourceTagMapping => {
  return {
    ComplianceDetails:
      output.ComplianceDetails != null
        ? deserializeAws_json1_1ComplianceDetails(output.ComplianceDetails, context)
        : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTagMappingList = (output: any, context: __SerdeContext): ResourceTagMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceTagMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartReportCreationOutput = (
  output: any,
  context: __SerdeContext
): StartReportCreationOutput => {
  return {} as any;
};

const deserializeAws_json1_1Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    LastUpdated: __expectString(output.LastUpdated),
    NonCompliantResources: __expectLong(output.NonCompliantResources),
    Region: __expectString(output.Region),
    ResourceType: __expectString(output.ResourceType),
    TargetId: __expectString(output.TargetId),
    TargetIdType: __expectString(output.TargetIdType),
  } as any;
};

const deserializeAws_json1_1SummaryList = (output: any, context: __SerdeContext): Summary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Summary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagKeyList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourcesOutput = (output: any, context: __SerdeContext): TagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap != null
        ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagValuesOutputList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ThrottledException = (output: any, context: __SerdeContext): ThrottledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourcesOutput = (output: any, context: __SerdeContext): UntagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap != null
        ? deserializeAws_json1_1FailedResourcesMap(output.FailedResourcesMap, context)
        : undefined,
  } as any;
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
