// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
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
  DatastoreFilter,
  DatastoreProperties,
  DeleteFHIRDatastoreRequest,
  DescribeFHIRDatastoreRequest,
  DescribeFHIRDatastoreResponse,
  DescribeFHIRExportJobRequest,
  DescribeFHIRExportJobResponse,
  DescribeFHIRImportJobRequest,
  DescribeFHIRImportJobResponse,
  ExportJobProperties,
  IdentityProviderConfiguration,
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
  OutputDataConfig,
  PreloadDataConfig,
  ResourceNotFoundException,
  S3Configuration,
  SseConfiguration,
  StartFHIRExportJobRequest,
  StartFHIRImportJobRequest,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartFHIRExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DatastoreName: [],
    DatastoreTypeVersion: [],
    IdentityProviderConfiguration: _json,
    PreloadDataConfig: _json,
    SseConfiguration: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0DatastoreFilter
 */
const se_DatastoreFilter = (input: DatastoreFilter, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    DatastoreName: [],
    DatastoreStatus: [],
  });
};

// se_DeleteFHIRDatastoreRequest omitted.

// se_DescribeFHIRDatastoreRequest omitted.

// se_DescribeFHIRExportJobRequest omitted.

// se_DescribeFHIRImportJobRequest omitted.

// se_IdentityProviderConfiguration omitted.

// se_InputDataConfig omitted.

// se_KmsEncryptionConfig omitted.

/**
 * serializeAws_json1_0ListFHIRDatastoresRequest
 */
const se_ListFHIRDatastoresRequest = (input: ListFHIRDatastoresRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_DatastoreFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_0ListFHIRExportJobsRequest
 */
const se_ListFHIRExportJobsRequest = (input: ListFHIRExportJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    DatastoreId: [],
    JobName: [],
    JobStatus: [],
    MaxResults: [],
    NextToken: [],
    SubmittedAfter: (_) => Math.round(_.getTime() / 1000),
    SubmittedBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_0ListFHIRImportJobsRequest
 */
const se_ListFHIRImportJobsRequest = (input: ListFHIRImportJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    DatastoreId: [],
    JobName: [],
    JobStatus: [],
    MaxResults: [],
    NextToken: [],
    SubmittedAfter: (_) => Math.round(_.getTime() / 1000),
    SubmittedBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListTagsForResourceRequest omitted.

// se_OutputDataConfig omitted.

// se_PreloadDataConfig omitted.

// se_S3Configuration omitted.

// se_SseConfiguration omitted.

/**
 * serializeAws_json1_0StartFHIRExportJobRequest
 */
const se_StartFHIRExportJobRequest = (input: StartFHIRExportJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DatastoreId: [],
    JobName: [],
    OutputDataConfig: _json,
  });
};

/**
 * serializeAws_json1_0StartFHIRImportJobRequest
 */
const se_StartFHIRImportJobRequest = (input: StartFHIRImportJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DatastoreId: [],
    InputDataConfig: _json,
    JobName: [],
    JobOutputDataConfig: _json,
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// de_AccessDeniedException omitted.

// de_ConflictException omitted.

// de_CreateFHIRDatastoreResponse omitted.

/**
 * deserializeAws_json1_0DatastoreProperties
 */
const de_DatastoreProperties = (output: any, context: __SerdeContext): DatastoreProperties => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatastoreArn: __expectString,
    DatastoreEndpoint: __expectString,
    DatastoreId: __expectString,
    DatastoreName: __expectString,
    DatastoreStatus: __expectString,
    DatastoreTypeVersion: __expectString,
    IdentityProviderConfiguration: _json,
    PreloadDataConfig: _json,
    SseConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0DatastorePropertiesList
 */
const de_DatastorePropertiesList = (output: any, context: __SerdeContext): DatastoreProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatastoreProperties(entry, context);
    });
  return retVal;
};

// de_DeleteFHIRDatastoreResponse omitted.

/**
 * deserializeAws_json1_0DescribeFHIRDatastoreResponse
 */
const de_DescribeFHIRDatastoreResponse = (output: any, context: __SerdeContext): DescribeFHIRDatastoreResponse => {
  return take(output, {
    DatastoreProperties: (_: any) => de_DatastoreProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeFHIRExportJobResponse
 */
const de_DescribeFHIRExportJobResponse = (output: any, context: __SerdeContext): DescribeFHIRExportJobResponse => {
  return take(output, {
    ExportJobProperties: (_: any) => de_ExportJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeFHIRImportJobResponse
 */
const de_DescribeFHIRImportJobResponse = (output: any, context: __SerdeContext): DescribeFHIRImportJobResponse => {
  return take(output, {
    ImportJobProperties: (_: any) => de_ImportJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ExportJobProperties
 */
const de_ExportJobProperties = (output: any, context: __SerdeContext): ExportJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    DatastoreId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    Message: __expectString,
    OutputDataConfig: (_: any) => _json(__expectUnion(_)),
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ExportJobPropertiesList
 */
const de_ExportJobPropertiesList = (output: any, context: __SerdeContext): ExportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportJobProperties(entry, context);
    });
  return retVal;
};

// de_IdentityProviderConfiguration omitted.

/**
 * deserializeAws_json1_0ImportJobProperties
 */
const de_ImportJobProperties = (output: any, context: __SerdeContext): ImportJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    DatastoreId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: (_: any) => _json(__expectUnion(_)),
    JobId: __expectString,
    JobName: __expectString,
    JobOutputDataConfig: (_: any) => _json(__expectUnion(_)),
    JobStatus: __expectString,
    Message: __expectString,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ImportJobPropertiesList
 */
const de_ImportJobPropertiesList = (output: any, context: __SerdeContext): ImportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportJobProperties(entry, context);
    });
  return retVal;
};

// de_InputDataConfig omitted.

// de_InternalServerException omitted.

// de_KmsEncryptionConfig omitted.

/**
 * deserializeAws_json1_0ListFHIRDatastoresResponse
 */
const de_ListFHIRDatastoresResponse = (output: any, context: __SerdeContext): ListFHIRDatastoresResponse => {
  return take(output, {
    DatastorePropertiesList: (_: any) => de_DatastorePropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListFHIRExportJobsResponse
 */
const de_ListFHIRExportJobsResponse = (output: any, context: __SerdeContext): ListFHIRExportJobsResponse => {
  return take(output, {
    ExportJobPropertiesList: (_: any) => de_ExportJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListFHIRImportJobsResponse
 */
const de_ListFHIRImportJobsResponse = (output: any, context: __SerdeContext): ListFHIRImportJobsResponse => {
  return take(output, {
    ImportJobPropertiesList: (_: any) => de_ImportJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_OutputDataConfig omitted.

// de_PreloadDataConfig omitted.

// de_ResourceNotFoundException omitted.

// de_S3Configuration omitted.

// de_SseConfiguration omitted.

// de_StartFHIRExportJobResponse omitted.

// de_StartFHIRImportJobResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

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
