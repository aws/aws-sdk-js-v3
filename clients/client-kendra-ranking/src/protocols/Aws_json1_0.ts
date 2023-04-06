// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateRescoreExecutionPlanCommandInput,
  CreateRescoreExecutionPlanCommandOutput,
} from "../commands/CreateRescoreExecutionPlanCommand";
import {
  DeleteRescoreExecutionPlanCommandInput,
  DeleteRescoreExecutionPlanCommandOutput,
} from "../commands/DeleteRescoreExecutionPlanCommand";
import {
  DescribeRescoreExecutionPlanCommandInput,
  DescribeRescoreExecutionPlanCommandOutput,
} from "../commands/DescribeRescoreExecutionPlanCommand";
import {
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput,
} from "../commands/ListRescoreExecutionPlansCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RescoreCommandInput, RescoreCommandOutput } from "../commands/RescoreCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateRescoreExecutionPlanCommandInput,
  UpdateRescoreExecutionPlanCommandOutput,
} from "../commands/UpdateRescoreExecutionPlanCommand";
import { KendraRankingServiceException as __BaseException } from "../models/KendraRankingServiceException";
import {
  AccessDeniedException,
  CapacityUnitsConfiguration,
  ConflictException,
  CreateRescoreExecutionPlanRequest,
  CreateRescoreExecutionPlanResponse,
  DeleteRescoreExecutionPlanRequest,
  DescribeRescoreExecutionPlanRequest,
  DescribeRescoreExecutionPlanResponse,
  Document,
  InternalServerException,
  ListRescoreExecutionPlansRequest,
  ListRescoreExecutionPlansResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  RescoreExecutionPlanSummary,
  RescoreRequest,
  RescoreResult,
  RescoreResultItem,
  ResourceNotFoundException,
  ResourceUnavailableException,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateRescoreExecutionPlanRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateRescoreExecutionPlanCommand
 */
export const se_CreateRescoreExecutionPlanCommand = async (
  input: CreateRescoreExecutionPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan",
  };
  let body: any;
  body = JSON.stringify(se_CreateRescoreExecutionPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRescoreExecutionPlanCommand
 */
export const se_DeleteRescoreExecutionPlanCommand = async (
  input: DeleteRescoreExecutionPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRescoreExecutionPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRescoreExecutionPlanCommand
 */
export const se_DescribeRescoreExecutionPlanCommand = async (
  input: DescribeRescoreExecutionPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRescoreExecutionPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRescoreExecutionPlansCommand
 */
export const se_ListRescoreExecutionPlansCommand = async (
  input: ListRescoreExecutionPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.ListRescoreExecutionPlans",
  };
  let body: any;
  body = JSON.stringify(se_ListRescoreExecutionPlansRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RescoreCommand
 */
export const se_RescoreCommand = async (
  input: RescoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.Rescore",
  };
  let body: any;
  body = JSON.stringify(se_RescoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRescoreExecutionPlanCommand
 */
export const se_UpdateRescoreExecutionPlanCommand = async (
  input: UpdateRescoreExecutionPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRescoreExecutionPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateRescoreExecutionPlanCommand
 */
export const de_CreateRescoreExecutionPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRescoreExecutionPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRescoreExecutionPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRescoreExecutionPlanResponse(data, context);
  const response: CreateRescoreExecutionPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateRescoreExecutionPlanCommandError
 */
const de_CreateRescoreExecutionPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRescoreExecutionPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendraranking#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendraranking#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteRescoreExecutionPlanCommand
 */
export const de_DeleteRescoreExecutionPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRescoreExecutionPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRescoreExecutionPlanCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRescoreExecutionPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteRescoreExecutionPlanCommandError
 */
const de_DeleteRescoreExecutionPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRescoreExecutionPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendraranking#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendraranking#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeRescoreExecutionPlanCommand
 */
export const de_DescribeRescoreExecutionPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRescoreExecutionPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRescoreExecutionPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRescoreExecutionPlanResponse(data, context);
  const response: DescribeRescoreExecutionPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeRescoreExecutionPlanCommandError
 */
const de_DescribeRescoreExecutionPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRescoreExecutionPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendraranking#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListRescoreExecutionPlansCommand
 */
export const de_ListRescoreExecutionPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRescoreExecutionPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRescoreExecutionPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRescoreExecutionPlansResponse(data, context);
  const response: ListRescoreExecutionPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListRescoreExecutionPlansCommandError
 */
const de_ListRescoreExecutionPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRescoreExecutionPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendraranking#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0RescoreCommand
 */
export const de_RescoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RescoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RescoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RescoreResult(data, context);
  const response: RescoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RescoreCommandError
 */
const de_RescoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RescoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendraranking#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendraranking#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendraranking#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendraranking#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateRescoreExecutionPlanCommand
 */
export const de_UpdateRescoreExecutionPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRescoreExecutionPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRescoreExecutionPlanCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRescoreExecutionPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateRescoreExecutionPlanCommandError
 */
const de_UpdateRescoreExecutionPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRescoreExecutionPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendraranking#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendraranking#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendraranking#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendraranking#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendraranking#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendraranking#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendraranking#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0BodyTokensList
 */
const se_BodyTokensList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CapacityUnitsConfiguration
 */
const se_CapacityUnitsConfiguration = (input: CapacityUnitsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RescoreCapacityUnits != null && { RescoreCapacityUnits: input.RescoreCapacityUnits }),
  };
};

/**
 * serializeAws_json1_0CreateRescoreExecutionPlanRequest
 */
const se_CreateRescoreExecutionPlanRequest = (
  input: CreateRescoreExecutionPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CapacityUnits != null && { CapacityUnits: se_CapacityUnitsConfiguration(input.CapacityUnits, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0DeleteRescoreExecutionPlanRequest
 */
const se_DeleteRescoreExecutionPlanRequest = (
  input: DeleteRescoreExecutionPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_0DescribeRescoreExecutionPlanRequest
 */
const se_DescribeRescoreExecutionPlanRequest = (
  input: DescribeRescoreExecutionPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_0Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.OriginalScore != null && { OriginalScore: __serializeFloat(input.OriginalScore) }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.TokenizedBody != null && { TokenizedBody: se_BodyTokensList(input.TokenizedBody, context) }),
    ...(input.TokenizedTitle != null && { TokenizedTitle: se_TitleTokensList(input.TokenizedTitle, context) }),
  };
};

/**
 * serializeAws_json1_0DocumentList
 */
const se_DocumentList = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Document(entry, context);
    });
};

/**
 * serializeAws_json1_0ListRescoreExecutionPlansRequest
 */
const se_ListRescoreExecutionPlansRequest = (input: ListRescoreExecutionPlansRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_0RescoreRequest
 */
const se_RescoreRequest = (input: RescoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.Documents != null && { Documents: se_DocumentList(input.Documents, context) }),
    ...(input.RescoreExecutionPlanId != null && { RescoreExecutionPlanId: input.RescoreExecutionPlanId }),
    ...(input.SearchQuery != null && { SearchQuery: input.SearchQuery }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0TitleTokensList
 */
const se_TitleTokensList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateRescoreExecutionPlanRequest
 */
const se_UpdateRescoreExecutionPlanRequest = (
  input: UpdateRescoreExecutionPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CapacityUnits != null && { CapacityUnits: se_CapacityUnitsConfiguration(input.CapacityUnits, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CapacityUnitsConfiguration
 */
const de_CapacityUnitsConfiguration = (output: any, context: __SerdeContext): CapacityUnitsConfiguration => {
  return {
    RescoreCapacityUnits: __expectInt32(output.RescoreCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateRescoreExecutionPlanResponse
 */
const de_CreateRescoreExecutionPlanResponse = (
  output: any,
  context: __SerdeContext
): CreateRescoreExecutionPlanResponse => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeRescoreExecutionPlanResponse
 */
const de_DescribeRescoreExecutionPlanResponse = (
  output: any,
  context: __SerdeContext
): DescribeRescoreExecutionPlanResponse => {
  return {
    Arn: __expectString(output.Arn),
    CapacityUnits:
      output.CapacityUnits != null ? de_CapacityUnitsConfiguration(output.CapacityUnits, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListRescoreExecutionPlansResponse
 */
const de_ListRescoreExecutionPlansResponse = (
  output: any,
  context: __SerdeContext
): ListRescoreExecutionPlansResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null ? de_RescoreExecutionPlanSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RescoreExecutionPlanSummary
 */
const de_RescoreExecutionPlanSummary = (output: any, context: __SerdeContext): RescoreExecutionPlanSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RescoreExecutionPlanSummaryList
 */
const de_RescoreExecutionPlanSummaryList = (output: any, context: __SerdeContext): RescoreExecutionPlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RescoreExecutionPlanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RescoreResult
 */
const de_RescoreResult = (output: any, context: __SerdeContext): RescoreResult => {
  return {
    RescoreId: __expectString(output.RescoreId),
    ResultItems: output.ResultItems != null ? de_RescoreResultItemList(output.ResultItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RescoreResultItem
 */
const de_RescoreResultItem = (output: any, context: __SerdeContext): RescoreResultItem => {
  return {
    DocumentId: __expectString(output.DocumentId),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_0RescoreResultItemList
 */
const de_RescoreResultItemList = (output: any, context: __SerdeContext): RescoreResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RescoreResultItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
