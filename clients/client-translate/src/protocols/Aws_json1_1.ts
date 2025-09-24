// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

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
import { TranslateDocumentCommandInput, TranslateDocumentCommandOutput } from "../commands/TranslateDocumentCommand";
import { TranslateTextCommandInput, TranslateTextCommandOutput } from "../commands/TranslateTextCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput } from "../commands/UpdateParallelDataCommand";
import {
  ConcurrentModificationException,
  ConflictException,
  CreateParallelDataRequest,
  DeleteParallelDataRequest,
  DeleteTerminologyRequest,
  DescribeTextTranslationJobRequest,
  DescribeTextTranslationJobResponse,
  DetectedLanguageLowConfidenceException,
  Document,
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
  LimitExceededException,
  ListLanguagesRequest,
  ListParallelDataRequest,
  ListParallelDataResponse,
  ListTagsForResourceRequest,
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ListTextTranslationJobsRequest,
  ListTextTranslationJobsResponse,
  OutputDataConfig,
  ParallelDataConfig,
  ParallelDataProperties,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartTextTranslationJobRequest,
  StopTextTranslationJobRequest,
  Tag,
  TagResourceRequest,
  TerminologyData,
  TerminologyProperties,
  TextSizeLimitExceededException,
  TextTranslationJobFilter,
  TextTranslationJobProperties,
  TooManyRequestsException,
  TooManyTagsException,
  TranslatedDocument,
  TranslateDocumentRequest,
  TranslateDocumentResponse,
  TranslateTextRequest,
  TranslationSettings,
  UnsupportedDisplayLanguageCodeException,
  UnsupportedLanguagePairException,
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TranslateDocumentCommand
 */
export const se_TranslateDocumentCommand = async (
  input: TranslateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TranslateDocument");
  let body: any;
  body = JSON.stringify(se_TranslateDocumentRequest(input, context));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteParallelDataCommand
 */
export const de_DeleteParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTerminologyCommand
 */
export const de_DeleteTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTextTranslationJobCommand
 */
export const de_DescribeTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTextTranslationJobResponse(data, context);
  const response: DescribeTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetParallelDataCommand
 */
export const de_GetParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParallelDataResponse(data, context);
  const response: GetParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTerminologyCommand
 */
export const de_GetTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportTerminologyCommand
 */
export const de_ImportTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLanguagesCommand
 */
export const de_ListLanguagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLanguagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListParallelDataCommand
 */
export const de_ListParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListParallelDataResponse(data, context);
  const response: ListParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTerminologiesCommand
 */
export const de_ListTerminologiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTextTranslationJobsCommand
 */
export const de_ListTextTranslationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTextTranslationJobsResponse(data, context);
  const response: ListTextTranslationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTextTranslationJobCommand
 */
export const de_StartTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTextTranslationJobCommand
 */
export const de_StopTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TranslateDocumentCommand
 */
export const de_TranslateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TranslateDocumentResponse(data, context);
  const response: TranslateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TranslateTextCommand
 */
export const de_TranslateTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateParallelDataCommand
 */
export const de_UpdateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateParallelDataResponse(data, context);
  const response: UpdateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedDisplayLanguageCodeException":
    case "com.amazonaws.translate#UnsupportedDisplayLanguageCodeException":
      throw await de_UnsupportedDisplayLanguageCodeExceptionRes(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.translate#InvalidFilterException":
      throw await de_InvalidFilterExceptionRes(parsedOutput, context);
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      throw await de_UnsupportedLanguagePairExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.translate#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "DetectedLanguageLowConfidenceException":
    case "com.amazonaws.translate#DetectedLanguageLowConfidenceException":
      throw await de_DetectedLanguageLowConfidenceExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.translate#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    EncryptionKey: _json,
    Name: [],
    ParallelDataConfig: _json,
    Tags: _json,
  });
};

// se_DeleteParallelDataRequest omitted.

// se_DeleteTerminologyRequest omitted.

// se_DescribeTextTranslationJobRequest omitted.

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return take(input, {
    Content: context.base64Encoder,
    ContentType: [],
  });
};

// se_EncryptionKey omitted.

// se_GetParallelDataRequest omitted.

// se_GetTerminologyRequest omitted.

/**
 * serializeAws_json1_1ImportTerminologyRequest
 */
const se_ImportTerminologyRequest = (input: ImportTerminologyRequest, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    EncryptionKey: _json,
    MergeStrategy: [],
    Name: [],
    Tags: _json,
    TerminologyData: (_) => se_TerminologyData(_, context),
  });
};

// se_InputDataConfig omitted.

// se_ListLanguagesRequest omitted.

// se_ListParallelDataRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTerminologiesRequest omitted.

/**
 * serializeAws_json1_1ListTextTranslationJobsRequest
 */
const se_ListTextTranslationJobsRequest = (input: ListTextTranslationJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_TextTranslationJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_OutputDataConfig omitted.

// se_ParallelDataConfig omitted.

// se_ResourceNameList omitted.

/**
 * serializeAws_json1_1StartTextTranslationJobRequest
 */
const se_StartTextTranslationJobRequest = (input: StartTextTranslationJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    OutputDataConfig: _json,
    ParallelDataNames: _json,
    Settings: _json,
    SourceLanguageCode: [],
    TargetLanguageCodes: _json,
    TerminologyNames: _json,
  });
};

// se_StopTextTranslationJobRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetLanguageCodeStringList omitted.

/**
 * serializeAws_json1_1TerminologyData
 */
const se_TerminologyData = (input: TerminologyData, context: __SerdeContext): any => {
  return take(input, {
    Directionality: [],
    File: context.base64Encoder,
    Format: [],
  });
};

/**
 * serializeAws_json1_1TextTranslationJobFilter
 */
const se_TextTranslationJobFilter = (input: TextTranslationJobFilter, context: __SerdeContext): any => {
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmittedAfterTime: (_) => _.getTime() / 1_000,
    SubmittedBeforeTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_1TranslateDocumentRequest
 */
const se_TranslateDocumentRequest = (input: TranslateDocumentRequest, context: __SerdeContext): any => {
  return take(input, {
    Document: (_) => se_Document(_, context),
    Settings: _json,
    SourceLanguageCode: [],
    TargetLanguageCode: [],
    TerminologyNames: _json,
  });
};

// se_TranslateTextRequest omitted.

// se_TranslationSettings omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UpdateParallelDataRequest
 */
const se_UpdateParallelDataRequest = (input: UpdateParallelDataRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    ParallelDataConfig: _json,
  });
};

// de_AppliedTerminology omitted.

// de_AppliedTerminologyList omitted.

// de_ConcurrentModificationException omitted.

// de_ConflictException omitted.

// de_CreateParallelDataResponse omitted.

// de_DeleteParallelDataResponse omitted.

/**
 * deserializeAws_json1_1DescribeTextTranslationJobResponse
 */
const de_DescribeTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTextTranslationJobResponse => {
  return take(output, {
    TextTranslationJobProperties: (_: any) => de_TextTranslationJobProperties(_, context),
  }) as any;
};

// de_DetectedLanguageLowConfidenceException omitted.

// de_EncryptionKey omitted.

/**
 * deserializeAws_json1_1GetParallelDataResponse
 */
const de_GetParallelDataResponse = (output: any, context: __SerdeContext): GetParallelDataResponse => {
  return take(output, {
    AuxiliaryDataLocation: _json,
    DataLocation: _json,
    LatestUpdateAttemptAuxiliaryDataLocation: _json,
    ParallelDataProperties: (_: any) => de_ParallelDataProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTerminologyResponse
 */
const de_GetTerminologyResponse = (output: any, context: __SerdeContext): GetTerminologyResponse => {
  return take(output, {
    AuxiliaryDataLocation: _json,
    TerminologyDataLocation: _json,
    TerminologyProperties: (_: any) => de_TerminologyProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ImportTerminologyResponse
 */
const de_ImportTerminologyResponse = (output: any, context: __SerdeContext): ImportTerminologyResponse => {
  return take(output, {
    AuxiliaryDataLocation: _json,
    TerminologyProperties: (_: any) => de_TerminologyProperties(_, context),
  }) as any;
};

// de_InputDataConfig omitted.

// de_InternalServerException omitted.

// de_InvalidFilterException omitted.

// de_InvalidParameterValueException omitted.

// de_InvalidRequestException omitted.

// de_JobDetails omitted.

// de_Language omitted.

// de_LanguageCodeStringList omitted.

// de_LanguagesList omitted.

// de_LimitExceededException omitted.

// de_ListLanguagesResponse omitted.

/**
 * deserializeAws_json1_1ListParallelDataResponse
 */
const de_ListParallelDataResponse = (output: any, context: __SerdeContext): ListParallelDataResponse => {
  return take(output, {
    NextToken: __expectString,
    ParallelDataPropertiesList: (_: any) => de_ParallelDataPropertiesList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListTerminologiesResponse
 */
const de_ListTerminologiesResponse = (output: any, context: __SerdeContext): ListTerminologiesResponse => {
  return take(output, {
    NextToken: __expectString,
    TerminologyPropertiesList: (_: any) => de_TerminologyPropertiesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTextTranslationJobsResponse
 */
const de_ListTextTranslationJobsResponse = (output: any, context: __SerdeContext): ListTextTranslationJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TextTranslationJobPropertiesList: (_: any) => de_TextTranslationJobPropertiesList(_, context),
  }) as any;
};

// de_OutputDataConfig omitted.

// de_ParallelDataConfig omitted.

// de_ParallelDataDataLocation omitted.

/**
 * deserializeAws_json1_1ParallelDataProperties
 */
const de_ParallelDataProperties = (output: any, context: __SerdeContext): ParallelDataProperties => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EncryptionKey: _json,
    FailedRecordCount: __expectLong,
    ImportedDataSize: __expectLong,
    ImportedRecordCount: __expectLong,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestUpdateAttemptAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestUpdateAttemptStatus: __expectString,
    Message: __expectString,
    Name: __expectString,
    ParallelDataConfig: _json,
    SkippedRecordCount: __expectLong,
    SourceLanguageCode: __expectString,
    Status: __expectString,
    TargetLanguageCodes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ParallelDataPropertiesList
 */
const de_ParallelDataPropertiesList = (output: any, context: __SerdeContext): ParallelDataProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParallelDataProperties(entry, context);
    });
  return retVal;
};

// de_ResourceNameList omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceUnavailableException omitted.

// de_StartTextTranslationJobResponse omitted.

// de_StopTextTranslationJobResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetLanguageCodeStringList omitted.

// de_Term omitted.

// de_TerminologyDataLocation omitted.

/**
 * deserializeAws_json1_1TerminologyProperties
 */
const de_TerminologyProperties = (output: any, context: __SerdeContext): TerminologyProperties => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Directionality: __expectString,
    EncryptionKey: _json,
    Format: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Name: __expectString,
    SizeBytes: __expectInt32,
    SkippedTermCount: __expectInt32,
    SourceLanguageCode: __expectString,
    TargetLanguageCodes: _json,
    TermCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1TerminologyPropertiesList
 */
const de_TerminologyPropertiesList = (output: any, context: __SerdeContext): TerminologyProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TerminologyProperties(entry, context);
    });
  return retVal;
};

// de_TermList omitted.

// de_TextSizeLimitExceededException omitted.

/**
 * deserializeAws_json1_1TextTranslationJobProperties
 */
const de_TextTranslationJobProperties = (output: any, context: __SerdeContext): TextTranslationJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobDetails: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    Message: __expectString,
    OutputDataConfig: _json,
    ParallelDataNames: _json,
    Settings: _json,
    SourceLanguageCode: __expectString,
    SubmittedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TargetLanguageCodes: _json,
    TerminologyNames: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TextTranslationJobPropertiesList
 */
const de_TextTranslationJobPropertiesList = (output: any, context: __SerdeContext): TextTranslationJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TextTranslationJobProperties(entry, context);
    });
  return retVal;
};

// de_TooManyRequestsException omitted.

// de_TooManyTagsException omitted.

/**
 * deserializeAws_json1_1TranslatedDocument
 */
const de_TranslatedDocument = (output: any, context: __SerdeContext): TranslatedDocument => {
  return take(output, {
    Content: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1TranslateDocumentResponse
 */
const de_TranslateDocumentResponse = (output: any, context: __SerdeContext): TranslateDocumentResponse => {
  return take(output, {
    AppliedSettings: _json,
    AppliedTerminologies: _json,
    SourceLanguageCode: __expectString,
    TargetLanguageCode: __expectString,
    TranslatedDocument: (_: any) => de_TranslatedDocument(_, context),
  }) as any;
};

// de_TranslateTextResponse omitted.

// de_TranslationSettings omitted.

// de_UnsupportedDisplayLanguageCodeException omitted.

// de_UnsupportedLanguagePairException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateParallelDataResponse
 */
const de_UpdateParallelDataResponse = (output: any, context: __SerdeContext): UpdateParallelDataResponse => {
  return take(output, {
    LatestUpdateAttemptAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestUpdateAttemptStatus: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

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
    "x-amz-target": `AWSShineFrontendService_20170701.${operation}`,
  };
}
