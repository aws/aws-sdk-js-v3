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

export const serializeAws_json1_1CreateParallelDataCommand = async (
  input: CreateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.CreateParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParallelDataCommand = async (
  input: DeleteParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DeleteParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTerminologyCommand = async (
  input: DeleteTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DeleteTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTextTranslationJobCommand = async (
  input: DescribeTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DescribeTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParallelDataCommand = async (
  input: GetParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.GetParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTerminologyCommand = async (
  input: GetTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.GetTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportTerminologyCommand = async (
  input: ImportTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ImportTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLanguagesCommand = async (
  input: ListLanguagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListLanguages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLanguagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListParallelDataCommand = async (
  input: ListParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTerminologiesCommand = async (
  input: ListTerminologiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListTerminologies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTerminologiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTextTranslationJobsCommand = async (
  input: ListTextTranslationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListTextTranslationJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTextTranslationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTextTranslationJobCommand = async (
  input: StartTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.StartTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTextTranslationJobCommand = async (
  input: StopTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.StopTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TranslateTextCommand = async (
  input: TranslateTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.TranslateText",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TranslateTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateParallelDataCommand = async (
  input: UpdateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.UpdateParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateParallelDataResponse(data, context);
  const response: CreateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateParallelDataCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParallelDataResponse(data, context);
  const response: DeleteParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParallelDataCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTerminologyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTerminologyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTextTranslationJobResponse(data, context);
  const response: DescribeTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTextTranslationJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParallelDataResponse(data, context);
  const response: GetParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParallelDataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTerminologyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportTerminologyCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLanguagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLanguagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLanguagesResponse(data, context);
  const response: ListLanguagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLanguagesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedDisplayLanguageCodeException":
    case "com.amazonaws.translate#UnsupportedDisplayLanguageCodeException":
      throw await deserializeAws_json1_1UnsupportedDisplayLanguageCodeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListParallelDataResponse(data, context);
  const response: ListParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListParallelDataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTerminologiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTerminologiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTerminologiesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTextTranslationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTextTranslationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTextTranslationJobsResponse(data, context);
  const response: ListTextTranslationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTextTranslationJobsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidFilterException":
    case "com.amazonaws.translate#InvalidFilterException":
      throw await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTextTranslationJobResponse(data, context);
  const response: StartTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTextTranslationJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      throw await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTextTranslationJobResponse(data, context);
  const response: StopTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTextTranslationJobCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.translate#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TranslateTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TranslateTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TranslateTextResponse(data, context);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TranslateTextCommandError = async (
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
      throw await deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.translate#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.translate#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      throw await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateParallelDataResponse(data, context);
  const response: UpdateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateParallelDataCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DetectedLanguageLowConfidenceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DetectedLanguageLowConfidenceException(body, context);
  const exception = new DetectedLanguageLowConfidenceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterException(body, context);
  const exception = new InvalidFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedDisplayLanguageCodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDisplayLanguageCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedDisplayLanguageCodeException(body, context);
  const exception = new UnsupportedDisplayLanguageCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguagePairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguagePairException(body, context);
  const exception = new UnsupportedLanguagePairException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CreateParallelDataRequest = (
  input: CreateParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionKey != null && {
      EncryptionKey: serializeAws_json1_1EncryptionKey(input.EncryptionKey, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParallelDataConfig != null && {
      ParallelDataConfig: serializeAws_json1_1ParallelDataConfig(input.ParallelDataConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteParallelDataRequest = (
  input: DeleteParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteTerminologyRequest = (
  input: DeleteTerminologyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeTextTranslationJobRequest = (
  input: DescribeTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1EncryptionKey = (input: EncryptionKey, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GetParallelDataRequest = (input: GetParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTerminologyRequest = (input: GetTerminologyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TerminologyDataFormat != null && { TerminologyDataFormat: input.TerminologyDataFormat }),
  };
};

const serializeAws_json1_1ImportTerminologyRequest = (
  input: ImportTerminologyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionKey != null && {
      EncryptionKey: serializeAws_json1_1EncryptionKey(input.EncryptionKey, context),
    }),
    ...(input.MergeStrategy != null && { MergeStrategy: input.MergeStrategy }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TerminologyData != null && {
      TerminologyData: serializeAws_json1_1TerminologyData(input.TerminologyData, context),
    }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ListLanguagesRequest = (input: ListLanguagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DisplayLanguageCode != null && { DisplayLanguageCode: input.DisplayLanguageCode }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListParallelDataRequest = (input: ListParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ListTerminologiesRequest = (
  input: ListTerminologiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTextTranslationJobsRequest = (
  input: ListTextTranslationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1TextTranslationJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionKey != null && {
      EncryptionKey: serializeAws_json1_1EncryptionKey(input.EncryptionKey, context),
    }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ParallelDataConfig = (input: ParallelDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartTextTranslationJobRequest = (
  input: StartTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.ParallelDataNames != null && {
      ParallelDataNames: serializeAws_json1_1ResourceNameList(input.ParallelDataNames, context),
    }),
    ...(input.Settings != null && { Settings: serializeAws_json1_1TranslationSettings(input.Settings, context) }),
    ...(input.SourceLanguageCode != null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCodes != null && {
      TargetLanguageCodes: serializeAws_json1_1TargetLanguageCodeStringList(input.TargetLanguageCodes, context),
    }),
    ...(input.TerminologyNames != null && {
      TerminologyNames: serializeAws_json1_1ResourceNameList(input.TerminologyNames, context),
    }),
  };
};

const serializeAws_json1_1StopTextTranslationJobRequest = (
  input: StopTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetLanguageCodeStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TerminologyData = (input: TerminologyData, context: __SerdeContext): any => {
  return {
    ...(input.Directionality != null && { Directionality: input.Directionality }),
    ...(input.File != null && { File: context.base64Encoder(input.File) }),
    ...(input.Format != null && { Format: input.Format }),
  };
};

const serializeAws_json1_1TextTranslationJobFilter = (
  input: TextTranslationJobFilter,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1TranslateTextRequest = (input: TranslateTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Settings != null && { Settings: serializeAws_json1_1TranslationSettings(input.Settings, context) }),
    ...(input.SourceLanguageCode != null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCode != null && { TargetLanguageCode: input.TargetLanguageCode }),
    ...(input.TerminologyNames != null && {
      TerminologyNames: serializeAws_json1_1ResourceNameList(input.TerminologyNames, context),
    }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1TranslationSettings = (input: TranslationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Formality != null && { Formality: input.Formality }),
    ...(input.Profanity != null && { Profanity: input.Profanity }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateParallelDataRequest = (
  input: UpdateParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParallelDataConfig != null && {
      ParallelDataConfig: serializeAws_json1_1ParallelDataConfig(input.ParallelDataConfig, context),
    }),
  };
};

const deserializeAws_json1_1AppliedTerminology = (output: any, context: __SerdeContext): AppliedTerminology => {
  return {
    Name: __expectString(output.Name),
    Terms: output.Terms != null ? deserializeAws_json1_1TermList(output.Terms, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AppliedTerminologyList = (output: any, context: __SerdeContext): AppliedTerminology[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppliedTerminology(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateParallelDataResponse = (
  output: any,
  context: __SerdeContext
): CreateParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteParallelDataResponse = (
  output: any,
  context: __SerdeContext
): DeleteParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTextTranslationJobResponse => {
  return {
    TextTranslationJobProperties:
      output.TextTranslationJobProperties != null
        ? deserializeAws_json1_1TextTranslationJobProperties(output.TextTranslationJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectedLanguageLowConfidenceException = (
  output: any,
  context: __SerdeContext
): DetectedLanguageLowConfidenceException => {
  return {
    DetectedLanguageCode: __expectString(output.DetectedLanguageCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EncryptionKey = (output: any, context: __SerdeContext): EncryptionKey => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GetParallelDataResponse = (
  output: any,
  context: __SerdeContext
): GetParallelDataResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    DataLocation:
      output.DataLocation != null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.DataLocation, context)
        : undefined,
    LatestUpdateAttemptAuxiliaryDataLocation:
      output.LatestUpdateAttemptAuxiliaryDataLocation != null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.LatestUpdateAttemptAuxiliaryDataLocation, context)
        : undefined,
    ParallelDataProperties:
      output.ParallelDataProperties != null
        ? deserializeAws_json1_1ParallelDataProperties(output.ParallelDataProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTerminologyResponse = (output: any, context: __SerdeContext): GetTerminologyResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? deserializeAws_json1_1TerminologyDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    TerminologyDataLocation:
      output.TerminologyDataLocation != null
        ? deserializeAws_json1_1TerminologyDataLocation(output.TerminologyDataLocation, context)
        : undefined,
    TerminologyProperties:
      output.TerminologyProperties != null
        ? deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImportTerminologyResponse = (
  output: any,
  context: __SerdeContext
): ImportTerminologyResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation != null
        ? deserializeAws_json1_1TerminologyDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    TerminologyProperties:
      output.TerminologyProperties != null
        ? deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    ContentType: __expectString(output.ContentType),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    DocumentsWithErrorsCount: __expectInt32(output.DocumentsWithErrorsCount),
    InputDocumentsCount: __expectInt32(output.InputDocumentsCount),
    TranslatedDocumentsCount: __expectInt32(output.TranslatedDocumentsCount),
  } as any;
};

const deserializeAws_json1_1Language = (output: any, context: __SerdeContext): Language => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    LanguageName: __expectString(output.LanguageName),
  } as any;
};

const deserializeAws_json1_1LanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1LanguagesList = (output: any, context: __SerdeContext): Language[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Language(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListLanguagesResponse = (output: any, context: __SerdeContext): ListLanguagesResponse => {
  return {
    DisplayLanguageCode: __expectString(output.DisplayLanguageCode),
    Languages: output.Languages != null ? deserializeAws_json1_1LanguagesList(output.Languages, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListParallelDataResponse = (
  output: any,
  context: __SerdeContext
): ListParallelDataResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParallelDataPropertiesList:
      output.ParallelDataPropertiesList != null
        ? deserializeAws_json1_1ParallelDataPropertiesList(output.ParallelDataPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTerminologiesResponse = (
  output: any,
  context: __SerdeContext
): ListTerminologiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TerminologyPropertiesList:
      output.TerminologyPropertiesList != null
        ? deserializeAws_json1_1TerminologyPropertiesList(output.TerminologyPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTextTranslationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTextTranslationJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TextTranslationJobPropertiesList:
      output.TextTranslationJobPropertiesList != null
        ? deserializeAws_json1_1TextTranslationJobPropertiesList(output.TextTranslationJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    EncryptionKey:
      output.EncryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context) : undefined,
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1ParallelDataConfig = (output: any, context: __SerdeContext): ParallelDataConfig => {
  return {
    Format: __expectString(output.Format),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1ParallelDataDataLocation = (
  output: any,
  context: __SerdeContext
): ParallelDataDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

const deserializeAws_json1_1ParallelDataProperties = (output: any, context: __SerdeContext): ParallelDataProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    EncryptionKey:
      output.EncryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context) : undefined,
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
      output.ParallelDataConfig != null
        ? deserializeAws_json1_1ParallelDataConfig(output.ParallelDataConfig, context)
        : undefined,
    SkippedRecordCount: __expectLong(output.SkippedRecordCount),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    Status: __expectString(output.Status),
    TargetLanguageCodes:
      output.TargetLanguageCodes != null
        ? deserializeAws_json1_1LanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ParallelDataPropertiesList = (
  output: any,
  context: __SerdeContext
): ParallelDataProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParallelDataProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StartTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StartTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StopTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TargetLanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Term = (output: any, context: __SerdeContext): Term => {
  return {
    SourceText: __expectString(output.SourceText),
    TargetText: __expectString(output.TargetText),
  } as any;
};

const deserializeAws_json1_1TerminologyDataLocation = (
  output: any,
  context: __SerdeContext
): TerminologyDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

const deserializeAws_json1_1TerminologyProperties = (output: any, context: __SerdeContext): TerminologyProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Directionality: __expectString(output.Directionality),
    EncryptionKey:
      output.EncryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context) : undefined,
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
      output.TargetLanguageCodes != null
        ? deserializeAws_json1_1LanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
    TermCount: __expectInt32(output.TermCount),
  } as any;
};

const deserializeAws_json1_1TerminologyPropertiesList = (
  output: any,
  context: __SerdeContext
): TerminologyProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TerminologyProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TermList = (output: any, context: __SerdeContext): Term[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Term(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TextTranslationJobProperties = (
  output: any,
  context: __SerdeContext
): TextTranslationJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobDetails: output.JobDetails != null ? deserializeAws_json1_1JobDetails(output.JobDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    ParallelDataNames:
      output.ParallelDataNames != null
        ? deserializeAws_json1_1ResourceNameList(output.ParallelDataNames, context)
        : undefined,
    Settings: output.Settings != null ? deserializeAws_json1_1TranslationSettings(output.Settings, context) : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    SubmittedTime:
      output.SubmittedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmittedTime)))
        : undefined,
    TargetLanguageCodes:
      output.TargetLanguageCodes != null
        ? deserializeAws_json1_1TargetLanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
    TerminologyNames:
      output.TerminologyNames != null
        ? deserializeAws_json1_1ResourceNameList(output.TerminologyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TextTranslationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TextTranslationJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TextTranslationJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TranslateTextResponse = (output: any, context: __SerdeContext): TranslateTextResponse => {
  return {
    AppliedSettings:
      output.AppliedSettings != null
        ? deserializeAws_json1_1TranslationSettings(output.AppliedSettings, context)
        : undefined,
    AppliedTerminologies:
      output.AppliedTerminologies != null
        ? deserializeAws_json1_1AppliedTerminologyList(output.AppliedTerminologies, context)
        : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
    TranslatedText: __expectString(output.TranslatedText),
  } as any;
};

const deserializeAws_json1_1TranslationSettings = (output: any, context: __SerdeContext): TranslationSettings => {
  return {
    Formality: __expectString(output.Formality),
    Profanity: __expectString(output.Profanity),
  } as any;
};

const deserializeAws_json1_1UnsupportedDisplayLanguageCodeException = (
  output: any,
  context: __SerdeContext
): UnsupportedDisplayLanguageCodeException => {
  return {
    DisplayLanguageCode: __expectString(output.DisplayLanguageCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedLanguagePairException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguagePairException => {
  return {
    Message: __expectString(output.Message),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateParallelDataResponse = (
  output: any,
  context: __SerdeContext
): UpdateParallelDataResponse => {
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
