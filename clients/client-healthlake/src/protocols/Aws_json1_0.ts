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

export const serializeAws_json1_0CreateFHIRDatastoreCommand = async (
  input: CreateFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.CreateFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFHIRDatastoreCommand = async (
  input: DeleteFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DeleteFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFHIRDatastoreCommand = async (
  input: DescribeFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DescribeFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFHIRExportJobCommand = async (
  input: DescribeFHIRExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DescribeFHIRExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFHIRExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFHIRImportJobCommand = async (
  input: DescribeFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DescribeFHIRImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFHIRDatastoresCommand = async (
  input: ListFHIRDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.ListFHIRDatastores",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFHIRDatastoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFHIRExportJobsCommand = async (
  input: ListFHIRExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.ListFHIRExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFHIRExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFHIRImportJobsCommand = async (
  input: ListFHIRImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.ListFHIRImportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFHIRImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartFHIRExportJobCommand = async (
  input: StartFHIRExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.StartFHIRExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartFHIRExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartFHIRImportJobCommand = async (
  input: StartFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.StartFHIRImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateFHIRDatastoreResponse(data, context);
  const response: CreateFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateFHIRDatastoreCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteFHIRDatastoreResponse(data, context);
  const response: DeleteFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFHIRDatastoreCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.healthlake#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFHIRDatastoreResponse(data, context);
  const response: DescribeFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFHIRDatastoreCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeFHIRExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFHIRExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFHIRExportJobResponse(data, context);
  const response: DescribeFHIRExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFHIRExportJobCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFHIRImportJobResponse(data, context);
  const response: DescribeFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFHIRImportJobCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFHIRDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRDatastoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFHIRDatastoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFHIRDatastoresResponse(data, context);
  const response: ListFHIRDatastoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFHIRDatastoresCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFHIRExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFHIRExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFHIRExportJobsResponse(data, context);
  const response: ListFHIRExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFHIRExportJobsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFHIRImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFHIRImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFHIRImportJobsResponse(data, context);
  const response: ListFHIRImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFHIRImportJobsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StartFHIRExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartFHIRExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartFHIRExportJobResponse(data, context);
  const response: StartFHIRExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartFHIRExportJobCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StartFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartFHIRImportJobResponse(data, context);
  const response: StartFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartFHIRImportJobCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CreateFHIRDatastoreRequest = (
  input: CreateFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatastoreName != null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreTypeVersion != null && { DatastoreTypeVersion: input.DatastoreTypeVersion }),
    ...(input.PreloadDataConfig != null && {
      PreloadDataConfig: serializeAws_json1_0PreloadDataConfig(input.PreloadDataConfig, context),
    }),
    ...(input.SseConfiguration != null && {
      SseConfiguration: serializeAws_json1_0SseConfiguration(input.SseConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0DatastoreFilter = (input: DatastoreFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.DatastoreName != null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreStatus != null && { DatastoreStatus: input.DatastoreStatus }),
  };
};

const serializeAws_json1_0DeleteFHIRDatastoreRequest = (
  input: DeleteFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
  };
};

const serializeAws_json1_0DescribeFHIRDatastoreRequest = (
  input: DescribeFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
  };
};

const serializeAws_json1_0DescribeFHIRExportJobRequest = (
  input: DescribeFHIRExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0DescribeFHIRImportJobRequest = (
  input: DescribeFHIRImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return InputDataConfig.visit(input, {
    S3Uri: (value) => ({ S3Uri: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0KmsEncryptionConfig = (input: KmsEncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.CmkType != null && { CmkType: input.CmkType }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_json1_0ListFHIRDatastoresRequest = (
  input: ListFHIRDatastoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_0DatastoreFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListFHIRExportJobsRequest = (
  input: ListFHIRExportJobsRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_0ListFHIRImportJobsRequest = (
  input: ListFHIRImportJobsRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_0OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return OutputDataConfig.visit(input, {
    S3Configuration: (value) => ({ S3Configuration: serializeAws_json1_0S3Configuration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0PreloadDataConfig = (input: PreloadDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.PreloadDataType != null && { PreloadDataType: input.PreloadDataType }),
  };
};

const serializeAws_json1_0S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_0SseConfiguration = (input: SseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsEncryptionConfig != null && {
      KmsEncryptionConfig: serializeAws_json1_0KmsEncryptionConfig(input.KmsEncryptionConfig, context),
    }),
  };
};

const serializeAws_json1_0StartFHIRExportJobRequest = (
  input: StartFHIRExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_0OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_0StartFHIRImportJobRequest = (
  input: StartFHIRImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DatastoreId != null && { DatastoreId: input.DatastoreId }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_0InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobOutputDataConfig != null && {
      JobOutputDataConfig: serializeAws_json1_0OutputDataConfig(input.JobOutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): CreateFHIRDatastoreResponse => {
  return {
    DatastoreArn: __expectString(output.DatastoreArn),
    DatastoreEndpoint: __expectString(output.DatastoreEndpoint),
    DatastoreId: __expectString(output.DatastoreId),
    DatastoreStatus: __expectString(output.DatastoreStatus),
  } as any;
};

const deserializeAws_json1_0DatastoreProperties = (output: any, context: __SerdeContext): DatastoreProperties => {
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
      output.PreloadDataConfig != null
        ? deserializeAws_json1_0PreloadDataConfig(output.PreloadDataConfig, context)
        : undefined,
    SseConfiguration:
      output.SseConfiguration != null
        ? deserializeAws_json1_0SseConfiguration(output.SseConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DatastorePropertiesList = (output: any, context: __SerdeContext): DatastoreProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DatastoreProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DeleteFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteFHIRDatastoreResponse => {
  return {
    DatastoreArn: __expectString(output.DatastoreArn),
    DatastoreEndpoint: __expectString(output.DatastoreEndpoint),
    DatastoreId: __expectString(output.DatastoreId),
    DatastoreStatus: __expectString(output.DatastoreStatus),
  } as any;
};

const deserializeAws_json1_0DescribeFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): DescribeFHIRDatastoreResponse => {
  return {
    DatastoreProperties:
      output.DatastoreProperties != null
        ? deserializeAws_json1_0DatastoreProperties(output.DatastoreProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFHIRExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFHIRExportJobResponse => {
  return {
    ExportJobProperties:
      output.ExportJobProperties != null
        ? deserializeAws_json1_0ExportJobProperties(output.ExportJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFHIRImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFHIRImportJobResponse => {
  return {
    ImportJobProperties:
      output.ImportJobProperties != null
        ? deserializeAws_json1_0ImportJobProperties(output.ImportJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExportJobProperties = (output: any, context: __SerdeContext): ExportJobProperties => {
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
        ? deserializeAws_json1_0OutputDataConfig(__expectUnion(output.OutputDataConfig), context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

const deserializeAws_json1_0ExportJobPropertiesList = (output: any, context: __SerdeContext): ExportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ExportJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ImportJobProperties = (output: any, context: __SerdeContext): ImportJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DatastoreId: __expectString(output.DatastoreId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_0InputDataConfig(__expectUnion(output.InputDataConfig), context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobOutputDataConfig:
      output.JobOutputDataConfig != null
        ? deserializeAws_json1_0OutputDataConfig(__expectUnion(output.JobOutputDataConfig), context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

const deserializeAws_json1_0ImportJobPropertiesList = (output: any, context: __SerdeContext): ImportJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ImportJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  if (__expectString(output.S3Uri) !== undefined) {
    return { S3Uri: __expectString(output.S3Uri) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0KmsEncryptionConfig = (output: any, context: __SerdeContext): KmsEncryptionConfig => {
  return {
    CmkType: __expectString(output.CmkType),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_json1_0ListFHIRDatastoresResponse = (
  output: any,
  context: __SerdeContext
): ListFHIRDatastoresResponse => {
  return {
    DatastorePropertiesList:
      output.DatastorePropertiesList != null
        ? deserializeAws_json1_0DatastorePropertiesList(output.DatastorePropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListFHIRExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListFHIRExportJobsResponse => {
  return {
    ExportJobPropertiesList:
      output.ExportJobPropertiesList != null
        ? deserializeAws_json1_0ExportJobPropertiesList(output.ExportJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListFHIRImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListFHIRImportJobsResponse => {
  return {
    ImportJobPropertiesList:
      output.ImportJobPropertiesList != null
        ? deserializeAws_json1_0ImportJobPropertiesList(output.ImportJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  if (output.S3Configuration != null) {
    return {
      S3Configuration: deserializeAws_json1_0S3Configuration(output.S3Configuration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0PreloadDataConfig = (output: any, context: __SerdeContext): PreloadDataConfig => {
  return {
    PreloadDataType: __expectString(output.PreloadDataType),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0S3Configuration = (output: any, context: __SerdeContext): S3Configuration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_0SseConfiguration = (output: any, context: __SerdeContext): SseConfiguration => {
  return {
    KmsEncryptionConfig:
      output.KmsEncryptionConfig != null
        ? deserializeAws_json1_0KmsEncryptionConfig(output.KmsEncryptionConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartFHIRExportJobResponse = (
  output: any,
  context: __SerdeContext
): StartFHIRExportJobResponse => {
  return {
    DatastoreId: __expectString(output.DatastoreId),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_0StartFHIRImportJobResponse = (
  output: any,
  context: __SerdeContext
): StartFHIRImportJobResponse => {
  return {
    DatastoreId: __expectString(output.DatastoreId),
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
