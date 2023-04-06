// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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

import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "../commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "../commands/BatchDeleteImageCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "../commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "../commands/DeleteRepositoryPolicyCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import { DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput } from "../commands/DescribeImageTagsCommand";
import { DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput } from "../commands/DescribeRegistriesCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetRegistryCatalogDataCommandInput,
  GetRegistryCatalogDataCommandOutput,
} from "../commands/GetRegistryCatalogDataCommand";
import {
  GetRepositoryCatalogDataCommandInput,
  GetRepositoryCatalogDataCommandOutput,
} from "../commands/GetRepositoryCatalogDataCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "../commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "../commands/InitiateLayerUploadCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "../commands/PutImageCommand";
import {
  PutRegistryCatalogDataCommandInput,
  PutRegistryCatalogDataCommandOutput,
} from "../commands/PutRegistryCatalogDataCommand";
import {
  PutRepositoryCatalogDataCommandInput,
  PutRepositoryCatalogDataCommandOutput,
} from "../commands/PutRepositoryCatalogDataCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "../commands/SetRepositoryPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "../commands/UploadLayerPartCommand";
import { ECRPUBLICServiceException as __BaseException } from "../models/ECRPUBLICServiceException";
import {
  AuthorizationData,
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchDeleteImageRequest,
  BatchDeleteImageResponse,
  CompleteLayerUploadRequest,
  CompleteLayerUploadResponse,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribeImageTagsRequest,
  DescribeImageTagsResponse,
  DescribeRegistriesRequest,
  DescribeRegistriesResponse,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetRegistryCatalogDataRequest,
  GetRegistryCatalogDataResponse,
  GetRepositoryCatalogDataRequest,
  GetRepositoryCatalogDataResponse,
  GetRepositoryPolicyRequest,
  GetRepositoryPolicyResponse,
  Image,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageDigestDoesNotMatchException,
  ImageFailure,
  ImageIdentifier,
  ImageNotFoundException,
  ImageTagAlreadyExistsException,
  ImageTagDetail,
  InitiateLayerUploadRequest,
  InitiateLayerUploadResponse,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  Layer,
  LayerAlreadyExistsException,
  LayerFailure,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutImageRequest,
  PutImageResponse,
  PutRegistryCatalogDataRequest,
  PutRegistryCatalogDataResponse,
  PutRepositoryCatalogDataRequest,
  PutRepositoryCatalogDataResponse,
  ReferencedImageDetail,
  ReferencedImagesNotFoundException,
  Registry,
  RegistryAlias,
  RegistryCatalogData,
  RegistryNotFoundException,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryCatalogData,
  RepositoryCatalogDataInput,
  RepositoryCatalogDataNotFoundException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ServerException,
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UnsupportedCommandException,
  UntagResourceRequest,
  UntagResourceResponse,
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadNotFoundException,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchCheckLayerAvailabilityCommand
 */
export const se_BatchCheckLayerAvailabilityCommand = async (
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.BatchCheckLayerAvailability",
  };
  let body: any;
  body = JSON.stringify(se_BatchCheckLayerAvailabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteImageCommand
 */
export const se_BatchDeleteImageCommand = async (
  input: BatchDeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.BatchDeleteImage",
  };
  let body: any;
  body = JSON.stringify(se_BatchDeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CompleteLayerUploadCommand
 */
export const se_CompleteLayerUploadCommand = async (
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.CompleteLayerUpload",
  };
  let body: any;
  body = JSON.stringify(se_CompleteLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(se_CreateRepositoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRepositoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRepositoryPolicyCommand
 */
export const se_DeleteRepositoryPolicyCommand = async (
  input: DeleteRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DeleteRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagesCommand
 */
export const se_DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DescribeImages",
  };
  let body: any;
  body = JSON.stringify(se_DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageTagsCommand
 */
export const se_DescribeImageTagsCommand = async (
  input: DescribeImageTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DescribeImageTags",
  };
  let body: any;
  body = JSON.stringify(se_DescribeImageTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRegistriesCommand
 */
export const se_DescribeRegistriesCommand = async (
  input: DescribeRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DescribeRegistries",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRegistriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRepositoriesCommand
 */
export const se_DescribeRepositoriesCommand = async (
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.DescribeRepositories",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRepositoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAuthorizationTokenCommand
 */
export const se_GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.GetAuthorizationToken",
  };
  let body: any;
  body = JSON.stringify(se_GetAuthorizationTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegistryCatalogDataCommand
 */
export const se_GetRegistryCatalogDataCommand = async (
  input: GetRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.GetRegistryCatalogData",
  };
  let body: any;
  body = JSON.stringify(se_GetRegistryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryCatalogDataCommand
 */
export const se_GetRepositoryCatalogDataCommand = async (
  input: GetRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.GetRepositoryCatalogData",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositoryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryPolicyCommand
 */
export const se_GetRepositoryPolicyCommand = async (
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.GetRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitiateLayerUploadCommand
 */
export const se_InitiateLayerUploadCommand = async (
  input: InitiateLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.InitiateLayerUpload",
  };
  let body: any;
  body = JSON.stringify(se_InitiateLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutImageCommand
 */
export const se_PutImageCommand = async (
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.PutImage",
  };
  let body: any;
  body = JSON.stringify(se_PutImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRegistryCatalogDataCommand
 */
export const se_PutRegistryCatalogDataCommand = async (
  input: PutRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.PutRegistryCatalogData",
  };
  let body: any;
  body = JSON.stringify(se_PutRegistryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRepositoryCatalogDataCommand
 */
export const se_PutRepositoryCatalogDataCommand = async (
  input: PutRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.PutRepositoryCatalogData",
  };
  let body: any;
  body = JSON.stringify(se_PutRepositoryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetRepositoryPolicyCommand
 */
export const se_SetRepositoryPolicyCommand = async (
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.SetRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(se_SetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UploadLayerPartCommand
 */
export const se_UploadLayerPartCommand = async (
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SpencerFrontendService.UploadLayerPart",
  };
  let body: any;
  body = JSON.stringify(se_UploadLayerPartRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchCheckLayerAvailabilityCommand
 */
export const de_BatchCheckLayerAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchCheckLayerAvailabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCheckLayerAvailabilityResponse(data, context);
  const response: BatchCheckLayerAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError
 */
const de_BatchCheckLayerAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      throw await de_RegistryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchDeleteImageCommand
 */
export const de_BatchDeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDeleteImageResponse(data, context);
  const response: BatchDeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchDeleteImageCommandError
 */
const de_BatchDeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CompleteLayerUploadCommand
 */
export const de_CompleteLayerUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CompleteLayerUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CompleteLayerUploadResponse(data, context);
  const response: CompleteLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CompleteLayerUploadCommandError
 */
const de_CompleteLayerUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.ecrpublic#EmptyUploadException":
      throw await de_EmptyUploadExceptionRes(parsedOutput, context);
    case "InvalidLayerException":
    case "com.amazonaws.ecrpublic#InvalidLayerException":
      throw await de_InvalidLayerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LayerAlreadyExistsException":
    case "com.amazonaws.ecrpublic#LayerAlreadyExistsException":
      throw await de_LayerAlreadyExistsExceptionRes(parsedOutput, context);
    case "LayerPartTooSmallException":
    case "com.amazonaws.ecrpublic#LayerPartTooSmallException":
      throw await de_LayerPartTooSmallExceptionRes(parsedOutput, context);
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      throw await de_RegistryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecrpublic#UploadNotFoundException":
      throw await de_UploadNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRepositoryCommand
 */
export const de_CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRepositoryResponse(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRepositoryCommandError
 */
const de_CreateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecrpublic#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.ecrpublic#RepositoryAlreadyExistsException":
      throw await de_RepositoryAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecrpublic#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRepositoryCommand
 */
export const de_DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRepositoryResponse(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRepositoryCommandError
 */
const de_DeleteRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotEmptyException":
    case "com.amazonaws.ecrpublic#RepositoryNotEmptyException":
      throw await de_RepositoryNotEmptyExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRepositoryPolicyCommand
 */
export const de_DeleteRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRepositoryPolicyResponse(data, context);
  const response: DeleteRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRepositoryPolicyCommandError
 */
const de_DeleteRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
      throw await de_RepositoryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeImagesCommand
 */
export const de_DescribeImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImagesResponse(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImagesCommandError
 */
const de_DescribeImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecrpublic#ImageNotFoundException":
      throw await de_ImageNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeImageTagsCommand
 */
export const de_DescribeImageTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageTagsResponse(data, context);
  const response: DescribeImageTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImageTagsCommandError
 */
const de_DescribeImageTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRegistriesCommand
 */
export const de_DescribeRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRegistriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegistriesResponse(data, context);
  const response: DescribeRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRegistriesCommandError
 */
const de_DescribeRegistriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRepositoriesCommand
 */
export const de_DescribeRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRepositoriesResponse(data, context);
  const response: DescribeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRepositoriesCommandError
 */
const de_DescribeRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAuthorizationTokenCommand
 */
export const de_GetAuthorizationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAuthorizationTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAuthorizationTokenResponse(data, context);
  const response: GetAuthorizationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAuthorizationTokenCommandError
 */
const de_GetAuthorizationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRegistryCatalogDataCommand
 */
export const de_GetRegistryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegistryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegistryCatalogDataResponse(data, context);
  const response: GetRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegistryCatalogDataCommandError
 */
const de_GetRegistryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRepositoryCatalogDataCommand
 */
export const de_GetRepositoryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositoryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRepositoryCatalogDataResponse(data, context);
  const response: GetRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRepositoryCatalogDataCommandError
 */
const de_GetRepositoryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryCatalogDataNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryCatalogDataNotFoundException":
      throw await de_RepositoryCatalogDataNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRepositoryPolicyCommand
 */
export const de_GetRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRepositoryPolicyResponse(data, context);
  const response: GetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRepositoryPolicyCommandError
 */
const de_GetRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
      throw await de_RepositoryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InitiateLayerUploadCommand
 */
export const de_InitiateLayerUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InitiateLayerUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InitiateLayerUploadResponse(data, context);
  const response: InitiateLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InitiateLayerUploadCommandError
 */
const de_InitiateLayerUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      throw await de_RegistryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutImageCommand
 */
export const de_PutImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutImageResponse(data, context);
  const response: PutImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutImageCommandError
 */
const de_PutImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.ecrpublic#ImageAlreadyExistsException":
      throw await de_ImageAlreadyExistsExceptionRes(parsedOutput, context);
    case "ImageDigestDoesNotMatchException":
    case "com.amazonaws.ecrpublic#ImageDigestDoesNotMatchException":
      throw await de_ImageDigestDoesNotMatchExceptionRes(parsedOutput, context);
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.ecrpublic#ImageTagAlreadyExistsException":
      throw await de_ImageTagAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LayersNotFoundException":
    case "com.amazonaws.ecrpublic#LayersNotFoundException":
      throw await de_LayersNotFoundExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ReferencedImagesNotFoundException":
    case "com.amazonaws.ecrpublic#ReferencedImagesNotFoundException":
      throw await de_ReferencedImagesNotFoundExceptionRes(parsedOutput, context);
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      throw await de_RegistryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutRegistryCatalogDataCommand
 */
export const de_PutRegistryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRegistryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRegistryCatalogDataResponse(data, context);
  const response: PutRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRegistryCatalogDataCommandError
 */
const de_PutRegistryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutRepositoryCatalogDataCommand
 */
export const de_PutRepositoryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRepositoryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRepositoryCatalogDataResponse(data, context);
  const response: PutRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRepositoryCatalogDataCommandError
 */
const de_PutRepositoryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SetRepositoryPolicyCommand
 */
export const de_SetRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetRepositoryPolicyResponse(data, context);
  const response: SetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetRepositoryPolicyCommandError
 */
const de_SetRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecrpublic#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecrpublic#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecrpublic#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecrpublic#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UploadLayerPartCommand
 */
export const de_UploadLayerPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UploadLayerPartCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UploadLayerPartResponse(data, context);
  const response: UploadLayerPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UploadLayerPartCommandError
 */
const de_UploadLayerPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.ecrpublic#InvalidLayerPartException":
      throw await de_InvalidLayerPartExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      throw await de_RegistryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      throw await de_UnsupportedCommandExceptionRes(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecrpublic#UploadNotFoundException":
      throw await de_UploadNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EmptyUploadExceptionRes
 */
const de_EmptyUploadExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyUploadException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EmptyUploadException(body, context);
  const exception = new EmptyUploadException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImageAlreadyExistsExceptionRes
 */
const de_ImageAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImageAlreadyExistsException(body, context);
  const exception = new ImageAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImageDigestDoesNotMatchExceptionRes
 */
const de_ImageDigestDoesNotMatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageDigestDoesNotMatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImageDigestDoesNotMatchException(body, context);
  const exception = new ImageDigestDoesNotMatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImageNotFoundExceptionRes
 */
const de_ImageNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImageNotFoundException(body, context);
  const exception = new ImageNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImageTagAlreadyExistsExceptionRes
 */
const de_ImageTagAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTagAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImageTagAlreadyExistsException(body, context);
  const exception = new ImageTagAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLayerExceptionRes
 */
const de_InvalidLayerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLayerException(body, context);
  const exception = new InvalidLayerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLayerPartExceptionRes
 */
const de_InvalidLayerPartExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerPartException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLayerPartException(body, context);
  const exception = new InvalidLayerPartException({
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
 * deserializeAws_json1_1InvalidTagParameterExceptionRes
 */
const de_InvalidTagParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagParameterException(body, context);
  const exception = new InvalidTagParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LayerAlreadyExistsExceptionRes
 */
const de_LayerAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LayerAlreadyExistsException(body, context);
  const exception = new LayerAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LayerPartTooSmallExceptionRes
 */
const de_LayerPartTooSmallExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerPartTooSmallException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LayerPartTooSmallException(body, context);
  const exception = new LayerPartTooSmallException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LayersNotFoundExceptionRes
 */
const de_LayersNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayersNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LayersNotFoundException(body, context);
  const exception = new LayersNotFoundException({
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
 * deserializeAws_json1_1ReferencedImagesNotFoundExceptionRes
 */
const de_ReferencedImagesNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferencedImagesNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReferencedImagesNotFoundException(body, context);
  const exception = new ReferencedImagesNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RegistryNotFoundExceptionRes
 */
const de_RegistryNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegistryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RegistryNotFoundException(body, context);
  const exception = new RegistryNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryAlreadyExistsExceptionRes
 */
const de_RepositoryAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RepositoryAlreadyExistsException(body, context);
  const exception = new RepositoryAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryCatalogDataNotFoundExceptionRes
 */
const de_RepositoryCatalogDataNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryCatalogDataNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RepositoryCatalogDataNotFoundException(body, context);
  const exception = new RepositoryCatalogDataNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNotEmptyExceptionRes
 */
const de_RepositoryNotEmptyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RepositoryNotEmptyException(body, context);
  const exception = new RepositoryNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNotFoundExceptionRes
 */
const de_RepositoryNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RepositoryNotFoundException(body, context);
  const exception = new RepositoryNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryPolicyNotFoundExceptionRes
 */
const de_RepositoryPolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RepositoryPolicyNotFoundException(body, context);
  const exception = new RepositoryPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServerExceptionRes
 */
const de_ServerExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerException(body, context);
  const exception = new ServerException({
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
 * deserializeAws_json1_1UnsupportedCommandExceptionRes
 */
const de_UnsupportedCommandExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedCommandException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedCommandException(body, context);
  const exception = new UnsupportedCommandException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UploadNotFoundExceptionRes
 */
const de_UploadNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UploadNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UploadNotFoundException(body, context);
  const exception = new UploadNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ArchitectureList
 */
const se_ArchitectureList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchCheckLayerAvailabilityRequest
 */
const se_BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests != null && {
      layerDigests: se_BatchedOperationLayerDigestList(input.layerDigests, context),
    }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1BatchDeleteImageRequest
 */
const se_BatchDeleteImageRequest = (input: BatchDeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds != null && { imageIds: se_ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1BatchedOperationLayerDigestList
 */
const se_BatchedOperationLayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CompleteLayerUploadRequest
 */
const se_CompleteLayerUploadRequest = (input: CompleteLayerUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerDigests != null && { layerDigests: se_LayerDigestList(input.layerDigests, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  };
};

/**
 * serializeAws_json1_1CreateRepositoryRequest
 */
const se_CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.catalogData != null && { catalogData: se_RepositoryCatalogDataInput(input.catalogData, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteRepositoryPolicyRequest
 */
const se_DeleteRepositoryPolicyRequest = (input: DeleteRepositoryPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DeleteRepositoryRequest
 */
const se_DeleteRepositoryRequest = (input: DeleteRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeImagesRequest
 */
const se_DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds != null && { imageIds: se_ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeImageTagsRequest
 */
const se_DescribeImageTagsRequest = (input: DescribeImageTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeRegistriesRequest
 */
const se_DescribeRegistriesRequest = (input: DescribeRegistriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeRepositoriesRequest
 */
const se_DescribeRepositoriesRequest = (input: DescribeRepositoriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryNames != null && { repositoryNames: se_RepositoryNameList(input.repositoryNames, context) }),
  };
};

/**
 * serializeAws_json1_1GetAuthorizationTokenRequest
 */
const se_GetAuthorizationTokenRequest = (input: GetAuthorizationTokenRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetRegistryCatalogDataRequest
 */
const se_GetRegistryCatalogDataRequest = (input: GetRegistryCatalogDataRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetRepositoryCatalogDataRequest
 */
const se_GetRepositoryCatalogDataRequest = (input: GetRepositoryCatalogDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetRepositoryPolicyRequest
 */
const se_GetRepositoryPolicyRequest = (input: GetRepositoryPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1ImageIdentifier
 */
const se_ImageIdentifier = (input: ImageIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.imageTag != null && { imageTag: input.imageTag }),
  };
};

/**
 * serializeAws_json1_1ImageIdentifierList
 */
const se_ImageIdentifierList = (input: ImageIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImageIdentifier(entry, context);
    });
};

/**
 * serializeAws_json1_1InitiateLayerUploadRequest
 */
const se_InitiateLayerUploadRequest = (input: InitiateLayerUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1LayerDigestList
 */
const se_LayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1OperatingSystemList
 */
const se_OperatingSystemList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutImageRequest
 */
const se_PutImageRequest = (input: PutImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.imageManifest != null && { imageManifest: input.imageManifest }),
    ...(input.imageManifestMediaType != null && { imageManifestMediaType: input.imageManifestMediaType }),
    ...(input.imageTag != null && { imageTag: input.imageTag }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PutRegistryCatalogDataRequest
 */
const se_PutRegistryCatalogDataRequest = (input: PutRegistryCatalogDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.displayName != null && { displayName: input.displayName }),
  };
};

/**
 * serializeAws_json1_1PutRepositoryCatalogDataRequest
 */
const se_PutRepositoryCatalogDataRequest = (input: PutRepositoryCatalogDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.catalogData != null && { catalogData: se_RepositoryCatalogDataInput(input.catalogData, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1RepositoryCatalogDataInput
 */
const se_RepositoryCatalogDataInput = (input: RepositoryCatalogDataInput, context: __SerdeContext): any => {
  return {
    ...(input.aboutText != null && { aboutText: input.aboutText }),
    ...(input.architectures != null && { architectures: se_ArchitectureList(input.architectures, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.logoImageBlob != null && { logoImageBlob: context.base64Encoder(input.logoImageBlob) }),
    ...(input.operatingSystems != null && {
      operatingSystems: se_OperatingSystemList(input.operatingSystems, context),
    }),
    ...(input.usageText != null && { usageText: input.usageText }),
  };
};

/**
 * serializeAws_json1_1RepositoryNameList
 */
const se_RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SetRepositoryPolicyRequest
 */
const se_SetRepositoryPolicyRequest = (input: SetRepositoryPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.policyText != null && { policyText: input.policyText }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
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
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UploadLayerPartRequest
 */
const se_UploadLayerPartRequest = (input: UploadLayerPartRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerPartBlob != null && { layerPartBlob: context.base64Encoder(input.layerPartBlob) }),
    ...(input.partFirstByte != null && { partFirstByte: input.partFirstByte }),
    ...(input.partLastByte != null && { partLastByte: input.partLastByte }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  };
};

/**
 * deserializeAws_json1_1ArchitectureList
 */
const de_ArchitectureList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AuthorizationData
 */
const de_AuthorizationData = (output: any, context: __SerdeContext): AuthorizationData => {
  return {
    authorizationToken: __expectString(output.authorizationToken),
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchCheckLayerAvailabilityResponse
 */
const de_BatchCheckLayerAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): BatchCheckLayerAvailabilityResponse => {
  return {
    failures: output.failures != null ? de_LayerFailureList(output.failures, context) : undefined,
    layers: output.layers != null ? de_LayerList(output.layers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteImageResponse
 */
const de_BatchDeleteImageResponse = (output: any, context: __SerdeContext): BatchDeleteImageResponse => {
  return {
    failures: output.failures != null ? de_ImageFailureList(output.failures, context) : undefined,
    imageIds: output.imageIds != null ? de_ImageIdentifierList(output.imageIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CompleteLayerUploadResponse
 */
const de_CompleteLayerUploadResponse = (output: any, context: __SerdeContext): CompleteLayerUploadResponse => {
  return {
    layerDigest: __expectString(output.layerDigest),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRepositoryResponse
 */
const de_CreateRepositoryResponse = (output: any, context: __SerdeContext): CreateRepositoryResponse => {
  return {
    catalogData: output.catalogData != null ? de_RepositoryCatalogData(output.catalogData, context) : undefined,
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRepositoryPolicyResponse
 */
const de_DeleteRepositoryPolicyResponse = (output: any, context: __SerdeContext): DeleteRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRepositoryResponse
 */
const de_DeleteRepositoryResponse = (output: any, context: __SerdeContext): DeleteRepositoryResponse => {
  return {
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImagesResponse
 */
const de_DescribeImagesResponse = (output: any, context: __SerdeContext): DescribeImagesResponse => {
  return {
    imageDetails: output.imageDetails != null ? de_ImageDetailList(output.imageDetails, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImageTagsResponse
 */
const de_DescribeImageTagsResponse = (output: any, context: __SerdeContext): DescribeImageTagsResponse => {
  return {
    imageTagDetails:
      output.imageTagDetails != null ? de_ImageTagDetailList(output.imageTagDetails, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRegistriesResponse
 */
const de_DescribeRegistriesResponse = (output: any, context: __SerdeContext): DescribeRegistriesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    registries: output.registries != null ? de_RegistryList(output.registries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRepositoriesResponse
 */
const de_DescribeRepositoriesResponse = (output: any, context: __SerdeContext): DescribeRepositoriesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories: output.repositories != null ? de_RepositoryList(output.repositories, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EmptyUploadException
 */
const de_EmptyUploadException = (output: any, context: __SerdeContext): EmptyUploadException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GetAuthorizationTokenResponse
 */
const de_GetAuthorizationTokenResponse = (output: any, context: __SerdeContext): GetAuthorizationTokenResponse => {
  return {
    authorizationData:
      output.authorizationData != null ? de_AuthorizationData(output.authorizationData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRegistryCatalogDataResponse
 */
const de_GetRegistryCatalogDataResponse = (output: any, context: __SerdeContext): GetRegistryCatalogDataResponse => {
  return {
    registryCatalogData:
      output.registryCatalogData != null ? de_RegistryCatalogData(output.registryCatalogData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRepositoryCatalogDataResponse
 */
const de_GetRepositoryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryCatalogDataResponse => {
  return {
    catalogData: output.catalogData != null ? de_RepositoryCatalogData(output.catalogData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRepositoryPolicyResponse
 */
const de_GetRepositoryPolicyResponse = (output: any, context: __SerdeContext): GetRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return {
    imageId: output.imageId != null ? de_ImageIdentifier(output.imageId, context) : undefined,
    imageManifest: __expectString(output.imageManifest),
    imageManifestMediaType: __expectString(output.imageManifestMediaType),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1ImageAlreadyExistsException
 */
const de_ImageAlreadyExistsException = (output: any, context: __SerdeContext): ImageAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageDetail
 */
const de_ImageDetail = (output: any, context: __SerdeContext): ImageDetail => {
  return {
    artifactMediaType: __expectString(output.artifactMediaType),
    imageDigest: __expectString(output.imageDigest),
    imageManifestMediaType: __expectString(output.imageManifestMediaType),
    imagePushedAt:
      output.imagePushedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imagePushedAt)))
        : undefined,
    imageSizeInBytes: __expectLong(output.imageSizeInBytes),
    imageTags: output.imageTags != null ? de_ImageTagList(output.imageTags, context) : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1ImageDetailList
 */
const de_ImageDetailList = (output: any, context: __SerdeContext): ImageDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageDigestDoesNotMatchException
 */
const de_ImageDigestDoesNotMatchException = (
  output: any,
  context: __SerdeContext
): ImageDigestDoesNotMatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageFailure
 */
const de_ImageFailure = (output: any, context: __SerdeContext): ImageFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    imageId: output.imageId != null ? de_ImageIdentifier(output.imageId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImageFailureList
 */
const de_ImageFailureList = (output: any, context: __SerdeContext): ImageFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageIdentifier
 */
const de_ImageIdentifier = (output: any, context: __SerdeContext): ImageIdentifier => {
  return {
    imageDigest: __expectString(output.imageDigest),
    imageTag: __expectString(output.imageTag),
  } as any;
};

/**
 * deserializeAws_json1_1ImageIdentifierList
 */
const de_ImageIdentifierList = (output: any, context: __SerdeContext): ImageIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageNotFoundException
 */
const de_ImageNotFoundException = (output: any, context: __SerdeContext): ImageNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageTagAlreadyExistsException
 */
const de_ImageTagAlreadyExistsException = (output: any, context: __SerdeContext): ImageTagAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageTagDetail
 */
const de_ImageTagDetail = (output: any, context: __SerdeContext): ImageTagDetail => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    imageDetail: output.imageDetail != null ? de_ReferencedImageDetail(output.imageDetail, context) : undefined,
    imageTag: __expectString(output.imageTag),
  } as any;
};

/**
 * deserializeAws_json1_1ImageTagDetailList
 */
const de_ImageTagDetailList = (output: any, context: __SerdeContext): ImageTagDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageTagDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageTagList
 */
const de_ImageTagList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InitiateLayerUploadResponse
 */
const de_InitiateLayerUploadResponse = (output: any, context: __SerdeContext): InitiateLayerUploadResponse => {
  return {
    partSize: __expectLong(output.partSize),
    uploadId: __expectString(output.uploadId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLayerException
 */
const de_InvalidLayerException = (output: any, context: __SerdeContext): InvalidLayerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLayerPartException
 */
const de_InvalidLayerPartException = (output: any, context: __SerdeContext): InvalidLayerPartException => {
  return {
    lastValidByteReceived: __expectLong(output.lastValidByteReceived),
    message: __expectString(output.message),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagParameterException
 */
const de_InvalidTagParameterException = (output: any, context: __SerdeContext): InvalidTagParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Layer
 */
const de_Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    layerAvailability: __expectString(output.layerAvailability),
    layerDigest: __expectString(output.layerDigest),
    layerSize: __expectLong(output.layerSize),
    mediaType: __expectString(output.mediaType),
  } as any;
};

/**
 * deserializeAws_json1_1LayerAlreadyExistsException
 */
const de_LayerAlreadyExistsException = (output: any, context: __SerdeContext): LayerAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LayerFailure
 */
const de_LayerFailure = (output: any, context: __SerdeContext): LayerFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    layerDigest: __expectString(output.layerDigest),
  } as any;
};

/**
 * deserializeAws_json1_1LayerFailureList
 */
const de_LayerFailureList = (output: any, context: __SerdeContext): LayerFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LayerFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LayerList
 */
const de_LayerList = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Layer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LayerPartTooSmallException
 */
const de_LayerPartTooSmallException = (output: any, context: __SerdeContext): LayerPartTooSmallException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LayersNotFoundException
 */
const de_LayersNotFoundException = (output: any, context: __SerdeContext): LayersNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OperatingSystemList
 */
const de_OperatingSystemList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PutImageResponse
 */
const de_PutImageResponse = (output: any, context: __SerdeContext): PutImageResponse => {
  return {
    image: output.image != null ? de_Image(output.image, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRegistryCatalogDataResponse
 */
const de_PutRegistryCatalogDataResponse = (output: any, context: __SerdeContext): PutRegistryCatalogDataResponse => {
  return {
    registryCatalogData:
      output.registryCatalogData != null ? de_RegistryCatalogData(output.registryCatalogData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRepositoryCatalogDataResponse
 */
const de_PutRepositoryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): PutRepositoryCatalogDataResponse => {
  return {
    catalogData: output.catalogData != null ? de_RepositoryCatalogData(output.catalogData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReferencedImageDetail
 */
const de_ReferencedImageDetail = (output: any, context: __SerdeContext): ReferencedImageDetail => {
  return {
    artifactMediaType: __expectString(output.artifactMediaType),
    imageDigest: __expectString(output.imageDigest),
    imageManifestMediaType: __expectString(output.imageManifestMediaType),
    imagePushedAt:
      output.imagePushedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imagePushedAt)))
        : undefined,
    imageSizeInBytes: __expectLong(output.imageSizeInBytes),
  } as any;
};

/**
 * deserializeAws_json1_1ReferencedImagesNotFoundException
 */
const de_ReferencedImagesNotFoundException = (
  output: any,
  context: __SerdeContext
): ReferencedImagesNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Registry
 */
const de_Registry = (output: any, context: __SerdeContext): Registry => {
  return {
    aliases: output.aliases != null ? de_RegistryAliasList(output.aliases, context) : undefined,
    registryArn: __expectString(output.registryArn),
    registryId: __expectString(output.registryId),
    registryUri: __expectString(output.registryUri),
    verified: __expectBoolean(output.verified),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryAlias
 */
const de_RegistryAlias = (output: any, context: __SerdeContext): RegistryAlias => {
  return {
    defaultRegistryAlias: __expectBoolean(output.defaultRegistryAlias),
    name: __expectString(output.name),
    primaryRegistryAlias: __expectBoolean(output.primaryRegistryAlias),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryAliasList
 */
const de_RegistryAliasList = (output: any, context: __SerdeContext): RegistryAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegistryAlias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegistryCatalogData
 */
const de_RegistryCatalogData = (output: any, context: __SerdeContext): RegistryCatalogData => {
  return {
    displayName: __expectString(output.displayName),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryList
 */
const de_RegistryList = (output: any, context: __SerdeContext): Registry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Registry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegistryNotFoundException
 */
const de_RegistryNotFoundException = (output: any, context: __SerdeContext): RegistryNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Repository
 */
const de_Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    registryId: __expectString(output.registryId),
    repositoryArn: __expectString(output.repositoryArn),
    repositoryName: __expectString(output.repositoryName),
    repositoryUri: __expectString(output.repositoryUri),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryAlreadyExistsException
 */
const de_RepositoryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryCatalogData
 */
const de_RepositoryCatalogData = (output: any, context: __SerdeContext): RepositoryCatalogData => {
  return {
    aboutText: __expectString(output.aboutText),
    architectures: output.architectures != null ? de_ArchitectureList(output.architectures, context) : undefined,
    description: __expectString(output.description),
    logoUrl: __expectString(output.logoUrl),
    marketplaceCertified: __expectBoolean(output.marketplaceCertified),
    operatingSystems:
      output.operatingSystems != null ? de_OperatingSystemList(output.operatingSystems, context) : undefined,
    usageText: __expectString(output.usageText),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryCatalogDataNotFoundException
 */
const de_RepositoryCatalogDataNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryCatalogDataNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryList
 */
const de_RepositoryList = (output: any, context: __SerdeContext): Repository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Repository(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryNotEmptyException
 */
const de_RepositoryNotEmptyException = (output: any, context: __SerdeContext): RepositoryNotEmptyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNotFoundException
 */
const de_RepositoryNotFoundException = (output: any, context: __SerdeContext): RepositoryNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryPolicyNotFoundException
 */
const de_RepositoryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryPolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServerException
 */
const de_ServerException = (output: any, context: __SerdeContext): ServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SetRepositoryPolicyResponse
 */
const de_SetRepositoryPolicyResponse = (output: any, context: __SerdeContext): SetRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
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
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedCommandException
 */
const de_UnsupportedCommandException = (output: any, context: __SerdeContext): UnsupportedCommandException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UploadLayerPartResponse
 */
const de_UploadLayerPartResponse = (output: any, context: __SerdeContext): UploadLayerPartResponse => {
  return {
    lastByteReceived: __expectLong(output.lastByteReceived),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

/**
 * deserializeAws_json1_1UploadNotFoundException
 */
const de_UploadNotFoundException = (output: any, context: __SerdeContext): UploadNotFoundException => {
  return {
    message: __expectString(output.message),
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
