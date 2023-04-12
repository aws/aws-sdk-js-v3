// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
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

import {
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
} from "../commands/CreateFHIRDatastoreCommand";
import {
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
} from "../commands/DeleteFHIRDatastoreCommand";
import {
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
} from "../commands/DescribeFHIRDatastoreCommand";
import {
  DescribeFHIRExportJobCommandInput,
  DescribeFHIRExportJobCommandOutput,
} from "../commands/DescribeFHIRExportJobCommand";
import {
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
} from "../commands/DescribeFHIRImportJobCommand";
import { ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput } from "../commands/ListFHIRDatastoresCommand";
import { ListFHIRExportJobsCommandInput, ListFHIRExportJobsCommandOutput } from "../commands/ListFHIRExportJobsCommand";
import { ListFHIRImportJobsCommandInput, ListFHIRImportJobsCommandOutput } from "../commands/ListFHIRImportJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput } from "../commands/StartFHIRExportJobCommand";
import { StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput } from "../commands/StartFHIRImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HealthLakeServiceException as __BaseException } from "../models/HealthLakeServiceException";
import {
  AccessDeniedException,
  ConflictException,
  CreateFHIRDatastoreRequest,
  CreateFHIRDatastoreResponse,
  DatastoreFilter,
  DatastoreProperties,
  DeleteFHIRDatastoreRequest,
  DeleteFHIRDatastoreResponse,
  DescribeFHIRDatastoreRequest,
  DescribeFHIRDatastoreResponse,
  DescribeFHIRExportJobRequest,
  DescribeFHIRExportJobResponse,
  DescribeFHIRImportJobRequest,
  DescribeFHIRImportJobResponse,
  ExportJobProperties,
  ImportJobProperties,
  InputDataConfig,
  InternalServerException,
  KmsEncryptionConfig,
  ListFHIRDatastoresRequest,
  ListFHIRDatastoresResponse,
  ListFHIRExportJobsRequest,
  ListFHIRExportJobsResponse,
  ListFHIRImportJobsRequest,
  ListFHIRImportJobsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OutputDataConfig,
  PreloadDataConfig,
  ResourceNotFoundException,
  S3Configuration,
  SseConfiguration,
  StartFHIRExportJobRequest,
  StartFHIRExportJobResponse,
  StartFHIRImportJobRequest,
  StartFHIRImportJobResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateFHIRDatastoreCommand
 */
export const se_CreateFHIRDatastoreCommand = async (
  input: CreateFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFHIRDatastore");
  let body: any;
  body = JSON.stringify(se_CreateFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFHIRDatastoreCommand
 */
export const se_DeleteFHIRDatastoreCommand = async (
  input: DeleteFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFHIRDatastore");
  let body: any;
  body = JSON.stringify(se_DeleteFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFHIRDatastoreCommand
 */
export const se_DescribeFHIRDatastoreCommand = async (
  input: DescribeFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFHIRDatastore");
  let body: any;
  body = JSON.stringify(se_DescribeFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFHIRExportJobCommand
 */
export const se_DescribeFHIRExportJobCommand = async (
  input: DescribeFHIRExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFHIRExportJob");
  let body: any;
  body = JSON.stringify(se_DescribeFHIRExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFHIRImportJobCommand
 */
export const se_DescribeFHIRImportJobCommand = async (
  input: DescribeFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFHIRImportJob");
  let body: any;
  body = JSON.stringify(se_DescribeFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFHIRDatastoresCommand
 */
export const se_ListFHIRDatastoresCommand = async (
  input: ListFHIRDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFHIRDatastores");
  let body: any;
  body = JSON.stringify(se_ListFHIRDatastoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFHIRExportJobsCommand
 */
export const se_ListFHIRExportJobsCommand = async (
  input: ListFHIRExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFHIRExportJobs");
  let body: any;
  body = JSON.stringify(se_ListFHIRExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFHIRImportJobsCommand
 */
export const se_ListFHIRImportJobsCommand = async (
  input: ListFHIRImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFHIRImportJobs");
  let body: any;
  body = JSON.stringify(se_ListFHIRImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0StartFHIRExportJobCommand
 */
export const se_StartFHIRExportJobCommand = async (
  input: StartFHIRExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFHIRExportJob");
  let body: any;
  body = JSON.stringify(se_StartFHIRExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartFHIRImportJobCommand
 */
export const se_StartFHIRImportJobCommand = async (
  input: StartFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFHIRImportJob");
  let body: any;
  body = JSON.stringify(se_StartFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0CreateFHIRDatastoreCommand
 */
export const de_CreateFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFHIRDatastoreResponse(data, context);
  const response: CreateFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateFHIRDatastoreCommandError
 */
const de_CreateFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0DeleteFHIRDatastoreCommand
 */
export const de_DeleteFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFHIRDatastoreResponse(data, context);
  const response: DeleteFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteFHIRDatastoreCommandError
 */
const de_DeleteFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.healthlake#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0DescribeFHIRDatastoreCommand
 */
export const de_DescribeFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFHIRDatastoreResponse(data, context);
  const response: DescribeFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeFHIRDatastoreCommandError
 */
const de_DescribeFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0DescribeFHIRExportJobCommand
 */
export const de_DescribeFHIRExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFHIRExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFHIRExportJobResponse(data, context);
  const response: DescribeFHIRExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeFHIRExportJobCommandError
 */
const de_DescribeFHIRExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0DescribeFHIRImportJobCommand
 */
export const de_DescribeFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFHIRImportJobResponse(data, context);
  const response: DescribeFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeFHIRImportJobCommandError
 */
const de_DescribeFHIRImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0ListFHIRDatastoresCommand
 */
export const de_ListFHIRDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRDatastoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFHIRDatastoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFHIRDatastoresResponse(data, context);
  const response: ListFHIRDatastoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFHIRDatastoresCommandError
 */
const de_ListFHIRDatastoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRDatastoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0ListFHIRExportJobsCommand
 */
export const de_ListFHIRExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFHIRExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFHIRExportJobsResponse(data, context);
  const response: ListFHIRExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFHIRExportJobsCommandError
 */
const de_ListFHIRExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0ListFHIRImportJobsCommand
 */
export const de_ListFHIRImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFHIRImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFHIRImportJobsResponse(data, context);
  const response: ListFHIRImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFHIRImportJobsCommandError
 */
const de_ListFHIRImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0StartFHIRExportJobCommand
 */
export const de_StartFHIRExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFHIRExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFHIRExportJobResponse(data, context);
  const response: StartFHIRExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StartFHIRExportJobCommandError
 */
const de_StartFHIRExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * deserializeAws_json1_0StartFHIRImportJobCommand
 */
export const de_StartFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFHIRImportJobResponse(data, context);
  const response: StartFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StartFHIRImportJobCommandError
 */
const de_StartFHIRImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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
 * serializeAws_json1_0CreateFHIRDatastoreRequest
 */
const se_CreateFHIRDatastoreRequest = (input: CreateFHIRDatastoreRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatastoreName != null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreTypeVersion != null && { DatastoreTypeVersion: input.DatastoreTypeVersion }),
    ...(input.PreloadDataConfig != null && {
      PreloadDataConfig: se_PreloadDataConfig(input.PreloadDataConfig, context),
    }),
    ...(input.SseConfiguration != null && { SseConfiguration: se_SseConfiguration(input.SseConfiguration, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0DatastoreFilter
 */
const se_DatastoreFilter = (input: DatastoreFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.DatastoreName != null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreStatus != null && { DatastoreStatus: input.DatastoreStatus }),
  };
};

/**
 * serializeAws_json1_0DeleteFHIRDatastoreRequest
 */
const se_DeleteFHIRDatastoreRequest = (input: DeleteFHIRDatastoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
  };
};

/**
 * serializeAws_json1_0DescribeFHIRDatastoreRequest
 */
const se_DescribeFHIRDatastoreRequest = (input: DescribeFHIRDatastoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
  };
};

/**
 * serializeAws_json1_0DescribeFHIRExportJobRequest
 */
const se_DescribeFHIRExportJobRequest = (input: DescribeFHIRExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_0DescribeFHIRImportJobRequest
 */
const se_DescribeFHIRImportJobRequest = (input: DescribeFHIRImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_0InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return InputDataConfig.visit(input, {
    S3Uri: (value) => ({ S3Uri: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0KmsEncryptionConfig
 */
const se_KmsEncryptionConfig = (input: KmsEncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.CmkType != null && { CmkType: input.CmkType }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

/**
 * serializeAws_json1_0ListFHIRDatastoresRequest
 */
const se_ListFHIRDatastoresRequest = (input: ListFHIRDatastoresRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_DatastoreFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListFHIRExportJobsRequest
 */
const se_ListFHIRExportJobsRequest = (input: ListFHIRExportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubmittedAfter != null && { SubmittedAfter: Math.round(input.SubmittedAfter.getTime() / 1000) }),
    ...(input.SubmittedBefore != null && { SubmittedBefore: Math.round(input.SubmittedBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_0ListFHIRImportJobsRequest
 */
const se_ListFHIRImportJobsRequest = (input: ListFHIRImportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubmittedAfter != null && { SubmittedAfter: Math.round(input.SubmittedAfter.getTime() / 1000) }),
    ...(input.SubmittedBefore != null && { SubmittedBefore: Math.round(input.SubmittedBefore.getTime() / 1000) }),
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
 * serializeAws_json1_0OutputDataConfig
 */
const se_OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return OutputDataConfig.visit(input, {
    S3Configuration: (value) => ({ S3Configuration: se_S3Configuration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0PreloadDataConfig
 */
const se_PreloadDataConfig = (input: PreloadDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.PreloadDataType != null && { PreloadDataType: input.PreloadDataType }),
  };
};

/**
 * serializeAws_json1_0S3Configuration
 */
const se_S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_0SseConfiguration
 */
const se_SseConfiguration = (input: SseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsEncryptionConfig != null && {
      KmsEncryptionConfig: se_KmsEncryptionConfig(input.KmsEncryptionConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0StartFHIRExportJobRequest
 */
const se_StartFHIRExportJobRequest = (input: StartFHIRExportJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_0StartFHIRImportJobRequest
 */
const se_StartFHIRImportJobRequest = (input: StartFHIRImportJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobOutputDataConfig != null && {
      JobOutputDataConfig: se_OutputDataConfig(input.JobOutputDataConfig, context),
    }),
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
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
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
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateFHIRDatastoreResponse
 */
const de_CreateFHIRDatastoreResponse = (output: any, context: __SerdeContext): CreateFHIRDatastoreResponse => {
  return {
    DatastoreArn: __expectString(output.DatastoreArn),
    DatastoreEndpoint: __expectString(output.DatastoreEndpoint),
    DatastoreId: __expectString(output.DatastoreId),
    DatastoreStatus: __expectString(output.DatastoreStatus),
  } as any;
};

/**
 * deserializeAws_json1_0DatastoreProperties
 */
const de_DatastoreProperties = (output: any, context: __SerdeContext): DatastoreProperties => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DatastoreArn: __expectString(output.DatastoreArn),
    DatastoreEndpoint: __expectString(output.DatastoreEndpoint),
    DatastoreId: __expectString(output.DatastoreId),
    DatastoreName: __expectString(output.DatastoreName),
    DatastoreStatus: __expectString(output.DatastoreStatus),
    DatastoreTypeVersion: __expectString(output.DatastoreTypeVersion),
    PreloadDataConfig:
      output.PreloadDataConfig != null ? de_PreloadDataConfig(output.PreloadDataConfig, context) : undefined,
    SseConfiguration:
      output.SseConfiguration != null ? de_SseConfiguration(output.SseConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DatastorePropertiesList
 */
const de_DatastorePropertiesList = (output: any, context: __SerdeContext): DatastoreProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatastoreProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DeleteFHIRDatastoreResponse
 */
const de_DeleteFHIRDatastoreResponse = (output: any, context: __SerdeContext): DeleteFHIRDatastoreResponse => {
  return {
    DatastoreArn: __expectString(output.DatastoreArn),
    DatastoreEndpoint: __expectString(output.DatastoreEndpoint),
    DatastoreId: __expectString(output.DatastoreId),
    DatastoreStatus: __expectString(output.DatastoreStatus),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFHIRDatastoreResponse
 */
const de_DescribeFHIRDatastoreResponse = (output: any, context: __SerdeContext): DescribeFHIRDatastoreResponse => {
  return {
    DatastoreProperties:
      output.DatastoreProperties != null ? de_DatastoreProperties(output.DatastoreProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFHIRExportJobResponse
 */
const de_DescribeFHIRExportJobResponse = (output: any, context: __SerdeContext): DescribeFHIRExportJobResponse => {
  return {
    ExportJobProperties:
      output.ExportJobProperties != null ? de_ExportJobProperties(output.ExportJobProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFHIRImportJobResponse
 */
const de_DescribeFHIRImportJobResponse = (output: any, context: __SerdeContext): DescribeFHIRImportJobResponse => {
  return {
    ImportJobProperties:
      output.ImportJobProperties != null ? de_ImportJobProperties(output.ImportJobProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportJobProperties
 */
const de_ExportJobProperties = (output: any, context: __SerdeContext): ExportJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DatastoreId: __expectString(output.DatastoreId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? de_OutputDataConfig(__expectUnion(output.OutputDataConfig), context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportJobPropertiesList
 */
const de_ExportJobPropertiesList = (output: any, context: __SerdeContext): ExportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ImportJobProperties
 */
const de_ImportJobProperties = (output: any, context: __SerdeContext): ImportJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DatastoreId: __expectString(output.DatastoreId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null ? de_InputDataConfig(__expectUnion(output.InputDataConfig), context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobOutputDataConfig:
      output.JobOutputDataConfig != null
        ? de_OutputDataConfig(__expectUnion(output.JobOutputDataConfig), context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ImportJobPropertiesList
 */
const de_ImportJobPropertiesList = (output: any, context: __SerdeContext): ImportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  if (__expectString(output.S3Uri) !== undefined) {
    return { S3Uri: __expectString(output.S3Uri) as any };
  }
  return { $unknown: Object.entries(output)[0] };
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
 * deserializeAws_json1_0KmsEncryptionConfig
 */
const de_KmsEncryptionConfig = (output: any, context: __SerdeContext): KmsEncryptionConfig => {
  return {
    CmkType: __expectString(output.CmkType),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

/**
 * deserializeAws_json1_0ListFHIRDatastoresResponse
 */
const de_ListFHIRDatastoresResponse = (output: any, context: __SerdeContext): ListFHIRDatastoresResponse => {
  return {
    DatastorePropertiesList:
      output.DatastorePropertiesList != null
        ? de_DatastorePropertiesList(output.DatastorePropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFHIRExportJobsResponse
 */
const de_ListFHIRExportJobsResponse = (output: any, context: __SerdeContext): ListFHIRExportJobsResponse => {
  return {
    ExportJobPropertiesList:
      output.ExportJobPropertiesList != null
        ? de_ExportJobPropertiesList(output.ExportJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFHIRImportJobsResponse
 */
const de_ListFHIRImportJobsResponse = (output: any, context: __SerdeContext): ListFHIRImportJobsResponse => {
  return {
    ImportJobPropertiesList:
      output.ImportJobPropertiesList != null
        ? de_ImportJobPropertiesList(output.ImportJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
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
 * deserializeAws_json1_0OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  if (output.S3Configuration != null) {
    return {
      S3Configuration: de_S3Configuration(output.S3Configuration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0PreloadDataConfig
 */
const de_PreloadDataConfig = (output: any, context: __SerdeContext): PreloadDataConfig => {
  return {
    PreloadDataType: __expectString(output.PreloadDataType),
  } as any;
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
 * deserializeAws_json1_0S3Configuration
 */
const de_S3Configuration = (output: any, context: __SerdeContext): S3Configuration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_0SseConfiguration
 */
const de_SseConfiguration = (output: any, context: __SerdeContext): SseConfiguration => {
  return {
    KmsEncryptionConfig:
      output.KmsEncryptionConfig != null ? de_KmsEncryptionConfig(output.KmsEncryptionConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartFHIRExportJobResponse
 */
const de_StartFHIRExportJobResponse = (output: any, context: __SerdeContext): StartFHIRExportJobResponse => {
  return {
    DatastoreId: __expectString(output.DatastoreId),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_0StartFHIRImportJobResponse
 */
const de_StartFHIRImportJobResponse = (output: any, context: __SerdeContext): StartFHIRImportJobResponse => {
  return {
    DatastoreId: __expectString(output.DatastoreId),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `HealthLake.${operation}`,
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
