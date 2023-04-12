// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateParallelDataCommandInput, CreateParallelDataCommandOutput } from "../commands/CreateParallelDataCommand";
import { DeleteParallelDataCommandInput, DeleteParallelDataCommandOutput } from "../commands/DeleteParallelDataCommand";
import { DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput } from "../commands/DeleteTerminologyCommand";
import {
  DescribeTextTranslationJobCommandInput,
  DescribeTextTranslationJobCommandOutput,
} from "../commands/DescribeTextTranslationJobCommand";
import { GetParallelDataCommandInput, GetParallelDataCommandOutput } from "../commands/GetParallelDataCommand";
import { GetTerminologyCommandInput, GetTerminologyCommandOutput } from "../commands/GetTerminologyCommand";
import { ImportTerminologyCommandInput, ImportTerminologyCommandOutput } from "../commands/ImportTerminologyCommand";
import { ListLanguagesCommandInput, ListLanguagesCommandOutput } from "../commands/ListLanguagesCommand";
import { ListParallelDataCommandInput, ListParallelDataCommandOutput } from "../commands/ListParallelDataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTerminologiesCommandInput, ListTerminologiesCommandOutput } from "../commands/ListTerminologiesCommand";
import {
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "../commands/ListTextTranslationJobsCommand";
import {
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput,
} from "../commands/StartTextTranslationJobCommand";
import {
  StopTextTranslationJobCommandInput,
  StopTextTranslationJobCommandOutput,
} from "../commands/StopTextTranslationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TranslateTextCommandInput, TranslateTextCommandOutput } from "../commands/TranslateTextCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput } from "../commands/UpdateParallelDataCommand";
import {
  AppliedTerminology,
  ConcurrentModificationException,
  ConflictException,
  CreateParallelDataRequest,
  CreateParallelDataResponse,
  DeleteParallelDataRequest,
  DeleteParallelDataResponse,
  DeleteTerminologyRequest,
  DescribeTextTranslationJobRequest,
  DescribeTextTranslationJobResponse,
  DetectedLanguageLowConfidenceException,
  EncryptionKey,
  GetParallelDataRequest,
  GetParallelDataResponse,
  GetTerminologyRequest,
  GetTerminologyResponse,
  ImportTerminologyRequest,
  ImportTerminologyResponse,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
  InvalidParameterValueException,
  InvalidRequestException,
  JobDetails,
  Language,
  LimitExceededException,
  ListLanguagesRequest,
  ListLanguagesResponse,
  ListParallelDataRequest,
  ListParallelDataResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ListTextTranslationJobsRequest,
  ListTextTranslationJobsResponse,
  OutputDataConfig,
  ParallelDataConfig,
  ParallelDataDataLocation,
  ParallelDataProperties,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartTextTranslationJobRequest,
  StartTextTranslationJobResponse,
  StopTextTranslationJobRequest,
  StopTextTranslationJobResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Term,
  TerminologyData,
  TerminologyDataLocation,
  TerminologyProperties,
  TextSizeLimitExceededException,
  TextTranslationJobFilter,
  TextTranslationJobProperties,
  TooManyRequestsException,
  TooManyTagsException,
  TranslateTextRequest,
  TranslateTextResponse,
  TranslationSettings,
  UnsupportedDisplayLanguageCodeException,
  UnsupportedLanguagePairException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateParallelDataRequest,
  UpdateParallelDataResponse,
} from "../models/models_0";
import { TranslateServiceException as __BaseException } from "../models/TranslateServiceException";

/**
 * serializeAws_json1_1CreateParallelDataCommand
 */
export const se_CreateParallelDataCommand = async (
  input: CreateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateParallelData");
  let body: any;
  body = JSON.stringify(se_CreateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParallelDataCommand
 */
export const se_DeleteParallelDataCommand = async (
  input: DeleteParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteParallelData");
  let body: any;
  body = JSON.stringify(se_DeleteParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTerminologyCommand
 */
export const se_DeleteTerminologyCommand = async (
  input: DeleteTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTerminology");
  let body: any;
  body = JSON.stringify(se_DeleteTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTextTranslationJobCommand
 */
export const se_DescribeTextTranslationJobCommand = async (
  input: DescribeTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTextTranslationJob");
  let body: any;
  body = JSON.stringify(se_DescribeTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetParallelDataCommand
 */
export const se_GetParallelDataCommand = async (
  input: GetParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParallelData");
  let body: any;
  body = JSON.stringify(se_GetParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTerminologyCommand
 */
export const se_GetTerminologyCommand = async (
  input: GetTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTerminology");
  let body: any;
  body = JSON.stringify(se_GetTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportTerminologyCommand
 */
export const se_ImportTerminologyCommand = async (
  input: ImportTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportTerminology");
  let body: any;
  body = JSON.stringify(se_ImportTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLanguagesCommand
 */
export const se_ListLanguagesCommand = async (
  input: ListLanguagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLanguages");
  let body: any;
  body = JSON.stringify(se_ListLanguagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListParallelDataCommand
 */
export const se_ListParallelDataCommand = async (
  input: ListParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListParallelData");
  let body: any;
  body = JSON.stringify(se_ListParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTerminologiesCommand
 */
export const se_ListTerminologiesCommand = async (
  input: ListTerminologiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTerminologies");
  let body: any;
  body = JSON.stringify(se_ListTerminologiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTextTranslationJobsCommand
 */
export const se_ListTextTranslationJobsCommand = async (
  input: ListTextTranslationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTextTranslationJobs");
  let body: any;
  body = JSON.stringify(se_ListTextTranslationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTextTranslationJobCommand
 */
export const se_StartTextTranslationJobCommand = async (
  input: StartTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTextTranslationJob");
  let body: any;
  body = JSON.stringify(se_StartTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTextTranslationJobCommand
 */
export const se_StopTextTranslationJobCommand = async (
  input: StopTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTextTranslationJob");
  let body: any;
  body = JSON.stringify(se_StopTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TranslateTextCommand
 */
export const se_TranslateTextCommand = async (
  input: TranslateTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TranslateText");
  let body: any;
  body = JSON.stringify(se_TranslateTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateParallelDataCommand
 */
export const se_UpdateParallelDataCommand = async (
  input: UpdateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateParallelData");
  let body: any;
  body = JSON.stringify(se_UpdateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateParallelDataCommand
 */
export const de_CreateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateParallelDataResponse(data, context);
  const response: CreateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateParallelDataCommandError
 */
const de_CreateParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteParallelDataCommand
 */
export const de_DeleteParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteParallelDataResponse(data, context);
  const response: DeleteParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteParallelDataCommandError
 */
const de_DeleteParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteTerminologyCommand
 */
export const de_DeleteTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTerminologyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTerminologyCommandError
 */
const de_DeleteTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTextTranslationJobCommand
 */
export const de_DescribeTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTextTranslationJobResponse(data, context);
  const response: DescribeTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTextTranslationJobCommandError
 */
const de_DescribeTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetParallelDataCommand
 */
export const de_GetParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParallelDataResponse(data, context);
  const response: GetParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetParallelDataCommandError
 */
const de_GetParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTerminologyCommand
 */
export const de_GetTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTerminologyCommandError
 */
const de_GetTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportTerminologyCommand
 */
export const de_ImportTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportTerminologyCommandError
 */
const de_ImportTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLanguagesCommand
 */
export const de_ListLanguagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLanguagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLanguagesResponse(data, context);
  const response: ListLanguagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLanguagesCommandError
 */
const de_ListLanguagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedDisplayLanguageCodeException":
    case "com.amazonaws.translate#UnsupportedDisplayLanguageCodeException":
      throw await de_UnsupportedDisplayLanguageCodeExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListParallelDataCommand
 */
export const de_ListParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListParallelDataResponse(data, context);
  const response: ListParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListParallelDataCommandError
 */
const de_ListParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTerminologiesCommand
 */
export const de_ListTerminologiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTerminologiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTerminologiesCommandError
 */
const de_ListTerminologiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTextTranslationJobsCommand
 */
export const de_ListTextTranslationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTextTranslationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTextTranslationJobsResponse(data, context);
  const response: ListTextTranslationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTextTranslationJobsCommandError
 */
const de_ListTextTranslationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.translate#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartTextTranslationJobCommand
 */
export const de_StartTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTextTranslationJobResponse(data, context);
  const response: StartTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartTextTranslationJobCommandError
 */
const de_StartTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      throw await de_UnsupportedLanguagePairExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopTextTranslationJobCommand
 */
export const de_StopTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopTextTranslationJobResponse(data, context);
  const response: StopTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopTextTranslationJobCommandError
 */
const de_StopTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
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
 * deserializeAws_json1_1TagResourceCommandError
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
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TranslateTextCommand
 */
export const de_TranslateTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TranslateTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TranslateTextResponse(data, context);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TranslateTextCommandError
 */
const de_TranslateTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DetectedLanguageLowConfidenceException":
    case "com.amazonaws.translate#DetectedLanguageLowConfidenceException":
      throw await de_DetectedLanguageLowConfidenceExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.translate#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.translate#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      throw await de_UnsupportedLanguagePairExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
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
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateParallelDataCommand
 */
export const de_UpdateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateParallelDataResponse(data, context);
  const response: UpdateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateParallelDataCommandError
 */
const de_UpdateParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionRes
 */
const de_DetectedLanguageLowConfidenceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DetectedLanguageLowConfidenceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DetectedLanguageLowConfidenceException(body, context);
  const exception = new DetectedLanguageLowConfidenceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
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
 * deserializeAws_json1_1InvalidFilterExceptionRes
 */
const de_InvalidFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFilterException(body, context);
  const exception = new InvalidFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededExceptionRes
 */
const de_TextSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TextSizeLimitExceededException(body, context);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedDisplayLanguageCodeExceptionRes
 */
const de_UnsupportedDisplayLanguageCodeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDisplayLanguageCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedDisplayLanguageCodeException(body, context);
  const exception = new UnsupportedDisplayLanguageCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedLanguagePairExceptionRes
 */
const de_UnsupportedLanguagePairExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguagePairException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedLanguagePairException(body, context);
  const exception = new UnsupportedLanguagePairException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1CreateParallelDataRequest
 */
const se_CreateParallelDataRequest = (input: CreateParallelDataRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionKey != null && { EncryptionKey: se_EncryptionKey(input.EncryptionKey, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParallelDataConfig != null && {
      ParallelDataConfig: se_ParallelDataConfig(input.ParallelDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteParallelDataRequest
 */
const se_DeleteParallelDataRequest = (input: DeleteParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteTerminologyRequest
 */
const se_DeleteTerminologyRequest = (input: DeleteTerminologyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeTextTranslationJobRequest
 */
const se_DescribeTextTranslationJobRequest = (
  input: DescribeTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1EncryptionKey
 */
const se_EncryptionKey = (input: EncryptionKey, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1GetParallelDataRequest
 */
const se_GetParallelDataRequest = (input: GetParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1GetTerminologyRequest
 */
const se_GetTerminologyRequest = (input: GetTerminologyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TerminologyDataFormat != null && { TerminologyDataFormat: input.TerminologyDataFormat }),
  };
};

/**
 * serializeAws_json1_1ImportTerminologyRequest
 */
const se_ImportTerminologyRequest = (input: ImportTerminologyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionKey != null && { EncryptionKey: se_EncryptionKey(input.EncryptionKey, context) }),
    ...(input.MergeStrategy != null && { MergeStrategy: input.MergeStrategy }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TerminologyData != null && { TerminologyData: se_TerminologyData(input.TerminologyData, context) }),
  };
};

/**
 * serializeAws_json1_1InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1ListLanguagesRequest
 */
const se_ListLanguagesRequest = (input: ListLanguagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DisplayLanguageCode != null && { DisplayLanguageCode: input.DisplayLanguageCode }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListParallelDataRequest
 */
const se_ListParallelDataRequest = (input: ListParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTerminologiesRequest
 */
const se_ListTerminologiesRequest = (input: ListTerminologiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTextTranslationJobsRequest
 */
const se_ListTextTranslationJobsRequest = (input: ListTextTranslationJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_TextTranslationJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OutputDataConfig
 */
const se_OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionKey != null && { EncryptionKey: se_EncryptionKey(input.EncryptionKey, context) }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1ParallelDataConfig
 */
const se_ParallelDataConfig = (input: ParallelDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_1ResourceNameList
 */
const se_ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartTextTranslationJobRequest
 */
const se_StartTextTranslationJobRequest = (input: StartTextTranslationJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.ParallelDataNames != null && {
      ParallelDataNames: se_ResourceNameList(input.ParallelDataNames, context),
    }),
    ...(input.Settings != null && { Settings: se_TranslationSettings(input.Settings, context) }),
    ...(input.SourceLanguageCode != null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCodes != null && {
      TargetLanguageCodes: se_TargetLanguageCodeStringList(input.TargetLanguageCodes, context),
    }),
    ...(input.TerminologyNames != null && { TerminologyNames: se_ResourceNameList(input.TerminologyNames, context) }),
  };
};

/**
 * serializeAws_json1_1StopTextTranslationJobRequest
 */
const se_StopTextTranslationJobRequest = (input: StopTextTranslationJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetLanguageCodeStringList
 */
const se_TargetLanguageCodeStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TerminologyData
 */
const se_TerminologyData = (input: TerminologyData, context: __SerdeContext): any => {
  return {
    ...(input.Directionality != null && { Directionality: input.Directionality }),
    ...(input.File != null && { File: context.base64Encoder(input.File) }),
    ...(input.Format != null && { Format: input.Format }),
  };
};

/**
 * serializeAws_json1_1TextTranslationJobFilter
 */
const se_TextTranslationJobFilter = (input: TextTranslationJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmittedAfterTime != null && {
      SubmittedAfterTime: Math.round(input.SubmittedAfterTime.getTime() / 1000),
    }),
    ...(input.SubmittedBeforeTime != null && {
      SubmittedBeforeTime: Math.round(input.SubmittedBeforeTime.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_1TranslateTextRequest
 */
const se_TranslateTextRequest = (input: TranslateTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Settings != null && { Settings: se_TranslationSettings(input.Settings, context) }),
    ...(input.SourceLanguageCode != null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCode != null && { TargetLanguageCode: input.TargetLanguageCode }),
    ...(input.TerminologyNames != null && { TerminologyNames: se_ResourceNameList(input.TerminologyNames, context) }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1TranslationSettings
 */
const se_TranslationSettings = (input: TranslationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Formality != null && { Formality: input.Formality }),
    ...(input.Profanity != null && { Profanity: input.Profanity }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateParallelDataRequest
 */
const se_UpdateParallelDataRequest = (input: UpdateParallelDataRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParallelDataConfig != null && {
      ParallelDataConfig: se_ParallelDataConfig(input.ParallelDataConfig, context),
    }),
  };
};

/**
 * deserializeAws_json1_1AppliedTerminology
 */
const de_AppliedTerminology = (output: any, context: __SerdeContext): AppliedTerminology => {
  return {
    Name: __expectString(output.Name),
    Terms: output.Terms != null ? de_TermList(output.Terms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AppliedTerminologyList
 */
const de_AppliedTerminologyList = (output: any, context: __SerdeContext): AppliedTerminology[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppliedTerminology(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateParallelDataResponse
 */
const de_CreateParallelDataResponse = (output: any, context: __SerdeContext): CreateParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteParallelDataResponse
 */
const de_DeleteParallelDataResponse = (output: any, context: __SerdeContext): DeleteParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTextTranslationJobResponse
 */
const de_DescribeTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTextTranslationJobResponse => {
  return {
    TextTranslationJobProperties:
      output.TextTranslationJobProperties != null
        ? de_TextTranslationJobProperties(output.TextTranslationJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectedLanguageLowConfidenceException
 */
const de_DetectedLanguageLowConfidenceException = (
  output: any,
  context: __SerdeContext
): DetectedLanguageLowConfidenceException => {
  return {
    DetectedLanguageCode: __expectString(output.DetectedLanguageCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKey
 */
const de_EncryptionKey = (output: any, context: __SerdeContext): EncryptionKey => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GetParallelDataResponse
 */
const de_GetParallelDataResponse = (output: any, context: __SerdeContext): GetParallelDataResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? de_ParallelDataDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    DataLocation: output.DataLocation != null ? de_ParallelDataDataLocation(output.DataLocation, context) : undefined,
    LatestUpdateAttemptAuxiliaryDataLocation:
      output.LatestUpdateAttemptAuxiliaryDataLocation != null
        ? de_ParallelDataDataLocation(output.LatestUpdateAttemptAuxiliaryDataLocation, context)
        : undefined,
    ParallelDataProperties:
      output.ParallelDataProperties != null
        ? de_ParallelDataProperties(output.ParallelDataProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTerminologyResponse
 */
const de_GetTerminologyResponse = (output: any, context: __SerdeContext): GetTerminologyResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? de_TerminologyDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    TerminologyDataLocation:
      output.TerminologyDataLocation != null
        ? de_TerminologyDataLocation(output.TerminologyDataLocation, context)
        : undefined,
    TerminologyProperties:
      output.TerminologyProperties != null
        ? de_TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportTerminologyResponse
 */
const de_ImportTerminologyResponse = (output: any, context: __SerdeContext): ImportTerminologyResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? de_TerminologyDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    TerminologyProperties:
      output.TerminologyProperties != null
        ? de_TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    ContentType: __expectString(output.ContentType),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilterException
 */
const de_InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    DocumentsWithErrorsCount: __expectInt32(output.DocumentsWithErrorsCount),
    InputDocumentsCount: __expectInt32(output.InputDocumentsCount),
    TranslatedDocumentsCount: __expectInt32(output.TranslatedDocumentsCount),
  } as any;
};

/**
 * deserializeAws_json1_1Language
 */
const de_Language = (output: any, context: __SerdeContext): Language => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LanguageName: __expectString(output.LanguageName),
  } as any;
};

/**
 * deserializeAws_json1_1LanguageCodeStringList
 */
const de_LanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LanguagesList
 */
const de_LanguagesList = (output: any, context: __SerdeContext): Language[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Language(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListLanguagesResponse
 */
const de_ListLanguagesResponse = (output: any, context: __SerdeContext): ListLanguagesResponse => {
  return {
    DisplayLanguageCode: __expectString(output.DisplayLanguageCode),
    Languages: output.Languages != null ? de_LanguagesList(output.Languages, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListParallelDataResponse
 */
const de_ListParallelDataResponse = (output: any, context: __SerdeContext): ListParallelDataResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParallelDataPropertiesList:
      output.ParallelDataPropertiesList != null
        ? de_ParallelDataPropertiesList(output.ParallelDataPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTerminologiesResponse
 */
const de_ListTerminologiesResponse = (output: any, context: __SerdeContext): ListTerminologiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TerminologyPropertiesList:
      output.TerminologyPropertiesList != null
        ? de_TerminologyPropertiesList(output.TerminologyPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTextTranslationJobsResponse
 */
const de_ListTextTranslationJobsResponse = (output: any, context: __SerdeContext): ListTextTranslationJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TextTranslationJobPropertiesList:
      output.TextTranslationJobPropertiesList != null
        ? de_TextTranslationJobPropertiesList(output.TextTranslationJobPropertiesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    EncryptionKey: output.EncryptionKey != null ? de_EncryptionKey(output.EncryptionKey, context) : undefined,
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1ParallelDataConfig
 */
const de_ParallelDataConfig = (output: any, context: __SerdeContext): ParallelDataConfig => {
  return {
    Format: __expectString(output.Format),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1ParallelDataDataLocation
 */
const de_ParallelDataDataLocation = (output: any, context: __SerdeContext): ParallelDataDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

/**
 * deserializeAws_json1_1ParallelDataProperties
 */
const de_ParallelDataProperties = (output: any, context: __SerdeContext): ParallelDataProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    EncryptionKey: output.EncryptionKey != null ? de_EncryptionKey(output.EncryptionKey, context) : undefined,
    FailedRecordCount: __expectLong(output.FailedRecordCount),
    ImportedDataSize: __expectLong(output.ImportedDataSize),
    ImportedRecordCount: __expectLong(output.ImportedRecordCount),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    LatestUpdateAttemptAt:
      output.LatestUpdateAttemptAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestUpdateAttemptAt)))
        : undefined,
    LatestUpdateAttemptStatus: __expectString(output.LatestUpdateAttemptStatus),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    ParallelDataConfig:
      output.ParallelDataConfig != null ? de_ParallelDataConfig(output.ParallelDataConfig, context) : undefined,
    SkippedRecordCount: __expectLong(output.SkippedRecordCount),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    Status: __expectString(output.Status),
    TargetLanguageCodes:
      output.TargetLanguageCodes != null ? de_LanguageCodeStringList(output.TargetLanguageCodes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ParallelDataPropertiesList
 */
const de_ParallelDataPropertiesList = (output: any, context: __SerdeContext): ParallelDataProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParallelDataProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNameList
 */
const de_ResourceNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1StartTextTranslationJobResponse
 */
const de_StartTextTranslationJobResponse = (output: any, context: __SerdeContext): StartTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StopTextTranslationJobResponse
 */
const de_StopTextTranslationJobResponse = (output: any, context: __SerdeContext): StopTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetLanguageCodeStringList
 */
const de_TargetLanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Term
 */
const de_Term = (output: any, context: __SerdeContext): Term => {
  return {
    SourceText: __expectString(output.SourceText),
    TargetText: __expectString(output.TargetText),
  } as any;
};

/**
 * deserializeAws_json1_1TerminologyDataLocation
 */
const de_TerminologyDataLocation = (output: any, context: __SerdeContext): TerminologyDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

/**
 * deserializeAws_json1_1TerminologyProperties
 */
const de_TerminologyProperties = (output: any, context: __SerdeContext): TerminologyProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Directionality: __expectString(output.Directionality),
    EncryptionKey: output.EncryptionKey != null ? de_EncryptionKey(output.EncryptionKey, context) : undefined,
    Format: __expectString(output.Format),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    SizeBytes: __expectInt32(output.SizeBytes),
    SkippedTermCount: __expectInt32(output.SkippedTermCount),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCodes:
      output.TargetLanguageCodes != null ? de_LanguageCodeStringList(output.TargetLanguageCodes, context) : undefined,
    TermCount: __expectInt32(output.TermCount),
  } as any;
};

/**
 * deserializeAws_json1_1TerminologyPropertiesList
 */
const de_TerminologyPropertiesList = (output: any, context: __SerdeContext): TerminologyProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TerminologyProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TermList
 */
const de_TermList = (output: any, context: __SerdeContext): Term[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Term(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededException
 */
const de_TextSizeLimitExceededException = (output: any, context: __SerdeContext): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TextTranslationJobProperties
 */
const de_TextTranslationJobProperties = (output: any, context: __SerdeContext): TextTranslationJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobDetails: output.JobDetails != null ? de_JobDetails(output.JobDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    ParallelDataNames:
      output.ParallelDataNames != null ? de_ResourceNameList(output.ParallelDataNames, context) : undefined,
    Settings: output.Settings != null ? de_TranslationSettings(output.Settings, context) : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    SubmittedTime:
      output.SubmittedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmittedTime)))
        : undefined,
    TargetLanguageCodes:
      output.TargetLanguageCodes != null
        ? de_TargetLanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
    TerminologyNames:
      output.TerminologyNames != null ? de_ResourceNameList(output.TerminologyNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TextTranslationJobPropertiesList
 */
const de_TextTranslationJobPropertiesList = (output: any, context: __SerdeContext): TextTranslationJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TextTranslationJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TranslateTextResponse
 */
const de_TranslateTextResponse = (output: any, context: __SerdeContext): TranslateTextResponse => {
  return {
    AppliedSettings:
      output.AppliedSettings != null ? de_TranslationSettings(output.AppliedSettings, context) : undefined,
    AppliedTerminologies:
      output.AppliedTerminologies != null ? de_AppliedTerminologyList(output.AppliedTerminologies, context) : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
    TranslatedText: __expectString(output.TranslatedText),
  } as any;
};

/**
 * deserializeAws_json1_1TranslationSettings
 */
const de_TranslationSettings = (output: any, context: __SerdeContext): TranslationSettings => {
  return {
    Formality: __expectString(output.Formality),
    Profanity: __expectString(output.Profanity),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedDisplayLanguageCodeException
 */
const de_UnsupportedDisplayLanguageCodeException = (
  output: any,
  context: __SerdeContext
): UnsupportedDisplayLanguageCodeException => {
  return {
    DisplayLanguageCode: __expectString(output.DisplayLanguageCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedLanguagePairException
 */
const de_UnsupportedLanguagePairException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguagePairException => {
  return {
    Message: __expectString(output.Message),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateParallelDataResponse
 */
const de_UpdateParallelDataResponse = (output: any, context: __SerdeContext): UpdateParallelDataResponse => {
  return {
    LatestUpdateAttemptAt:
      output.LatestUpdateAttemptAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestUpdateAttemptAt)))
        : undefined,
    LatestUpdateAttemptStatus: __expectString(output.LatestUpdateAttemptStatus),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
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
    "x-amz-target": `AWSShineFrontendService_20170701.${operation}`,
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
