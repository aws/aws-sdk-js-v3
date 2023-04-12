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

/**
 * serializeAws_json1_1DescribeReportCreationCommand
 */
export const se_DescribeReportCreationCommand = async (
  input: DescribeReportCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReportCreation");
  let body: any;
  body = JSON.stringify(se_DescribeReportCreationInput(input, context));
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
  body = JSON.stringify(se_GetComplianceSummaryInput(input, context));
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
  body = JSON.stringify(se_GetResourcesInput(input, context));
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
  body = JSON.stringify(se_GetTagKeysInput(input, context));
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
  body = JSON.stringify(se_GetTagValuesInput(input, context));
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
  body = JSON.stringify(se_StartReportCreationInput(input, context));
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
  body = JSON.stringify(se_TagResourcesInput(input, context));
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
  body = JSON.stringify(se_UntagResourcesInput(input, context));
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
  contents = de_DescribeReportCreationOutput(data, context);
  const response: DescribeReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetComplianceSummaryOutput(data, context);
  const response: GetComplianceSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetResourcesOutput(data, context);
  const response: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetTagKeysOutput(data, context);
  const response: GetTagKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetTagValuesOutput(data, context);
  const response: GetTagValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartReportCreationOutput(data, context);
  const response: StartReportCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourcesOutput(data, context);
  const response: TagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourcesOutput(data, context);
  const response: UntagResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_ConcurrentModificationException(body, context);
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
  const deserialized: any = de_ConstraintViolationException(body, context);
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
  const deserialized: any = de_InternalServiceException(body, context);
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
  const deserialized: any = de_InvalidParameterException(body, context);
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
  const deserialized: any = de_PaginationTokenExpiredException(body, context);
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
  const deserialized: any = de_ThrottledException(body, context);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1DescribeReportCreationInput
 */
const se_DescribeReportCreationInput = (input: DescribeReportCreationInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetComplianceSummaryInput
 */
const se_GetComplianceSummaryInput = (input: GetComplianceSummaryInput, context: __SerdeContext): any => {
  return {
    ...(input.GroupBy != null && { GroupBy: se_GroupBy(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.RegionFilters != null && { RegionFilters: se_RegionFilterList(input.RegionFilters, context) }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: se_ResourceTypeFilterList(input.ResourceTypeFilters, context),
    }),
    ...(input.TagKeyFilters != null && { TagKeyFilters: se_TagKeyFilterList(input.TagKeyFilters, context) }),
    ...(input.TargetIdFilters != null && { TargetIdFilters: se_TargetIdFilterList(input.TargetIdFilters, context) }),
  };
};

/**
 * serializeAws_json1_1GetResourcesInput
 */
const se_GetResourcesInput = (input: GetResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeCompliantResources != null && { ExcludeCompliantResources: input.ExcludeCompliantResources }),
    ...(input.IncludeComplianceDetails != null && { IncludeComplianceDetails: input.IncludeComplianceDetails }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.ResourceARNList != null && { ResourceARNList: se_ResourceARNListForGet(input.ResourceARNList, context) }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: se_ResourceTypeFilterList(input.ResourceTypeFilters, context),
    }),
    ...(input.ResourcesPerPage != null && { ResourcesPerPage: input.ResourcesPerPage }),
    ...(input.TagFilters != null && { TagFilters: se_TagFilterList(input.TagFilters, context) }),
    ...(input.TagsPerPage != null && { TagsPerPage: input.TagsPerPage }),
  };
};

/**
 * serializeAws_json1_1GetTagKeysInput
 */
const se_GetTagKeysInput = (input: GetTagKeysInput, context: __SerdeContext): any => {
  return {
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
  };
};

/**
 * serializeAws_json1_1GetTagValuesInput
 */
const se_GetTagValuesInput = (input: GetTagValuesInput, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
  };
};

/**
 * serializeAws_json1_1GroupBy
 */
const se_GroupBy = (input: (GroupByAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RegionFilterList
 */
const se_RegionFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceARNListForGet
 */
const se_ResourceARNListForGet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceARNListForTagUntag
 */
const se_ResourceARNListForTagUntag = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTypeFilterList
 */
const se_ResourceTypeFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartReportCreationInput
 */
const se_StartReportCreationInput = (input: StartReportCreationInput, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
  };
};

/**
 * serializeAws_json1_1TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_TagValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1TagFilterList
 */
const se_TagFilterList = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1TagKeyFilterList
 */
const se_TagKeyFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagKeyListForUntag
 */
const se_TagKeyListForUntag = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TagResourcesInput
 */
const se_TagResourcesInput = (input: TagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList != null && {
      ResourceARNList: se_ResourceARNListForTagUntag(input.ResourceARNList, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TagValueList
 */
const se_TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TargetIdFilterList
 */
const se_TargetIdFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UntagResourcesInput
 */
const se_UntagResourcesInput = (input: UntagResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNList != null && {
      ResourceARNList: se_ResourceARNListForTagUntag(input.ResourceARNList, context),
    }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyListForUntag(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1ComplianceDetails
 */
const de_ComplianceDetails = (output: any, context: __SerdeContext): ComplianceDetails => {
  return {
    ComplianceStatus: __expectBoolean(output.ComplianceStatus),
    KeysWithNoncompliantValues:
      output.KeysWithNoncompliantValues != null ? de_TagKeyList(output.KeysWithNoncompliantValues, context) : undefined,
    NoncompliantKeys: output.NoncompliantKeys != null ? de_TagKeyList(output.NoncompliantKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConstraintViolationException
 */
const de_ConstraintViolationException = (output: any, context: __SerdeContext): ConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReportCreationOutput
 */
const de_DescribeReportCreationOutput = (output: any, context: __SerdeContext): DescribeReportCreationOutput => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    S3Location: __expectString(output.S3Location),
    StartDate: __expectString(output.StartDate),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FailedResourcesMap
 */
const de_FailedResourcesMap = (output: any, context: __SerdeContext): Record<string, FailureInfo> => {
  return Object.entries(output).reduce((acc: Record<string, FailureInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FailureInfo(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FailureInfo
 */
const de_FailureInfo = (output: any, context: __SerdeContext): FailureInfo => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceSummaryOutput
 */
const de_GetComplianceSummaryOutput = (output: any, context: __SerdeContext): GetComplianceSummaryOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    SummaryList: output.SummaryList != null ? de_SummaryList(output.SummaryList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcesOutput
 */
const de_GetResourcesOutput = (output: any, context: __SerdeContext): GetResourcesOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    ResourceTagMappingList:
      output.ResourceTagMappingList != null
        ? de_ResourceTagMappingList(output.ResourceTagMappingList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTagKeysOutput
 */
const de_GetTagKeysOutput = (output: any, context: __SerdeContext): GetTagKeysOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    TagKeys: output.TagKeys != null ? de_TagKeyList(output.TagKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTagValuesOutput
 */
const de_GetTagValuesOutput = (output: any, context: __SerdeContext): GetTagValuesOutput => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    TagValues: output.TagValues != null ? de_TagValuesOutputList(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceException
 */
const de_InternalServiceException = (output: any, context: __SerdeContext): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PaginationTokenExpiredException
 */
const de_PaginationTokenExpiredException = (output: any, context: __SerdeContext): PaginationTokenExpiredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTagMapping
 */
const de_ResourceTagMapping = (output: any, context: __SerdeContext): ResourceTagMapping => {
  return {
    ComplianceDetails:
      output.ComplianceDetails != null ? de_ComplianceDetails(output.ComplianceDetails, context) : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTagMappingList
 */
const de_ResourceTagMappingList = (output: any, context: __SerdeContext): ResourceTagMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTagMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartReportCreationOutput
 */
const de_StartReportCreationOutput = (output: any, context: __SerdeContext): StartReportCreationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Summary
 */
const de_Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    LastUpdated: __expectString(output.LastUpdated),
    NonCompliantResources: __expectLong(output.NonCompliantResources),
    Region: __expectString(output.Region),
    ResourceType: __expectString(output.ResourceType),
    TargetId: __expectString(output.TargetId),
    TargetIdType: __expectString(output.TargetIdType),
  } as any;
};

/**
 * deserializeAws_json1_1SummaryList
 */
const de_SummaryList = (output: any, context: __SerdeContext): Summary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Summary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagKeyList
 */
const de_TagKeyList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourcesOutput
 */
const de_TagResourcesOutput = (output: any, context: __SerdeContext): TagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap != null ? de_FailedResourcesMap(output.FailedResourcesMap, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TagValuesOutputList
 */
const de_TagValuesOutputList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ThrottledException
 */
const de_ThrottledException = (output: any, context: __SerdeContext): ThrottledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourcesOutput
 */
const de_UntagResourcesOutput = (output: any, context: __SerdeContext): UntagResourcesOutput => {
  return {
    FailedResourcesMap:
      output.FailedResourcesMap != null ? de_FailedResourcesMap(output.FailedResourcesMap, context) : undefined,
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
