// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
  BatchDeleteImageRequest,
  CompleteLayerUploadRequest,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribeImageTagsRequest,
  DescribeImageTagsResponse,
  DescribeRegistriesRequest,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetRegistryCatalogDataRequest,
  GetRepositoryCatalogDataRequest,
  GetRepositoryPolicyRequest,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageDigestDoesNotMatchException,
  ImageIdentifier,
  ImageNotFoundException,
  ImageTagAlreadyExistsException,
  ImageTagDetail,
  InitiateLayerUploadRequest,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  LayerAlreadyExistsException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LimitExceededException,
  ListTagsForResourceRequest,
  PutImageRequest,
  PutRegistryCatalogDataRequest,
  PutRepositoryCatalogDataRequest,
  ReferencedImageDetail,
  ReferencedImagesNotFoundException,
  RegistryNotFoundException,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryCatalogDataInput,
  RepositoryCatalogDataNotFoundException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ServerException,
  SetRepositoryPolicyRequest,
  Tag,
  TagResourceRequest,
  TooManyTagsException,
  UnsupportedCommandException,
  UntagResourceRequest,
  UploadLayerPartRequest,
  UploadNotFoundException,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchCheckLayerAvailabilityCommand
 */
export const se_BatchCheckLayerAvailabilityCommand = async (
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCheckLayerAvailability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteImageCommand
 */
export const se_BatchDeleteImageCommand = async (
  input: BatchDeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CompleteLayerUploadCommand
 */
export const se_CompleteLayerUploadCommand = async (
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CompleteLayerUpload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRepository");
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
  const headers: __HeaderBag = sharedHeaders("DeleteRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRepositoryPolicyCommand
 */
export const se_DeleteRepositoryPolicyCommand = async (
  input: DeleteRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRepositoryPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagesCommand
 */
export const se_DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageTagsCommand
 */
export const se_DescribeImageTagsCommand = async (
  input: DescribeImageTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRegistriesCommand
 */
export const se_DescribeRegistriesCommand = async (
  input: DescribeRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRepositoriesCommand
 */
export const se_DescribeRepositoriesCommand = async (
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAuthorizationTokenCommand
 */
export const se_GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAuthorizationToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegistryCatalogDataCommand
 */
export const se_GetRegistryCatalogDataCommand = async (
  input: GetRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegistryCatalogData");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryCatalogDataCommand
 */
export const se_GetRepositoryCatalogDataCommand = async (
  input: GetRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositoryCatalogData");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryPolicyCommand
 */
export const se_GetRepositoryPolicyCommand = async (
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositoryPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitiateLayerUploadCommand
 */
export const se_InitiateLayerUploadCommand = async (
  input: InitiateLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InitiateLayerUpload");
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
 * serializeAws_json1_1PutImageCommand
 */
export const se_PutImageCommand = async (
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRegistryCatalogDataCommand
 */
export const se_PutRegistryCatalogDataCommand = async (
  input: PutRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRegistryCatalogData");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRepositoryCatalogDataCommand
 */
export const se_PutRepositoryCatalogDataCommand = async (
  input: PutRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRepositoryCatalogData");
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
  const headers: __HeaderBag = sharedHeaders("SetRepositoryPolicy");
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
 * serializeAws_json1_1UploadLayerPartCommand
 */
export const se_UploadLayerPartCommand = async (
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UploadLayerPart");
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
  contents = _json(data);
  const response: BatchCheckLayerAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchDeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CompleteLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: InitiateLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UploadLayerPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UploadNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ArchitectureList omitted.

// se_BatchCheckLayerAvailabilityRequest omitted.

// se_BatchDeleteImageRequest omitted.

// se_BatchedOperationLayerDigestList omitted.

// se_CompleteLayerUploadRequest omitted.

/**
 * serializeAws_json1_1CreateRepositoryRequest
 */
const se_CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return take(input, {
    catalogData: (_) => se_RepositoryCatalogDataInput(_, context),
    repositoryName: [],
    tags: _json,
  });
};

// se_DeleteRepositoryPolicyRequest omitted.

// se_DeleteRepositoryRequest omitted.

// se_DescribeImagesRequest omitted.

// se_DescribeImageTagsRequest omitted.

// se_DescribeRegistriesRequest omitted.

// se_DescribeRepositoriesRequest omitted.

// se_GetAuthorizationTokenRequest omitted.

// se_GetRegistryCatalogDataRequest omitted.

// se_GetRepositoryCatalogDataRequest omitted.

// se_GetRepositoryPolicyRequest omitted.

// se_ImageIdentifier omitted.

// se_ImageIdentifierList omitted.

// se_InitiateLayerUploadRequest omitted.

// se_LayerDigestList omitted.

// se_ListTagsForResourceRequest omitted.

// se_OperatingSystemList omitted.

// se_PutImageRequest omitted.

// se_PutRegistryCatalogDataRequest omitted.

/**
 * serializeAws_json1_1PutRepositoryCatalogDataRequest
 */
const se_PutRepositoryCatalogDataRequest = (input: PutRepositoryCatalogDataRequest, context: __SerdeContext): any => {
  return take(input, {
    catalogData: (_) => se_RepositoryCatalogDataInput(_, context),
    registryId: [],
    repositoryName: [],
  });
};

/**
 * serializeAws_json1_1RepositoryCatalogDataInput
 */
const se_RepositoryCatalogDataInput = (input: RepositoryCatalogDataInput, context: __SerdeContext): any => {
  return take(input, {
    aboutText: [],
    architectures: _json,
    description: [],
    logoImageBlob: context.base64Encoder,
    operatingSystems: _json,
    usageText: [],
  });
};

// se_RepositoryNameList omitted.

// se_SetRepositoryPolicyRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UploadLayerPartRequest
 */
const se_UploadLayerPartRequest = (input: UploadLayerPartRequest, context: __SerdeContext): any => {
  return take(input, {
    layerPartBlob: context.base64Encoder,
    partFirstByte: [],
    partLastByte: [],
    registryId: [],
    repositoryName: [],
    uploadId: [],
  });
};

// de_ArchitectureList omitted.

/**
 * deserializeAws_json1_1AuthorizationData
 */
const de_AuthorizationData = (output: any, context: __SerdeContext): AuthorizationData => {
  return take(output, {
    authorizationToken: __expectString,
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BatchCheckLayerAvailabilityResponse omitted.

// de_BatchDeleteImageResponse omitted.

// de_CompleteLayerUploadResponse omitted.

/**
 * deserializeAws_json1_1CreateRepositoryResponse
 */
const de_CreateRepositoryResponse = (output: any, context: __SerdeContext): CreateRepositoryResponse => {
  return take(output, {
    catalogData: _json,
    repository: (_: any) => de_Repository(_, context),
  }) as any;
};

// de_DeleteRepositoryPolicyResponse omitted.

/**
 * deserializeAws_json1_1DeleteRepositoryResponse
 */
const de_DeleteRepositoryResponse = (output: any, context: __SerdeContext): DeleteRepositoryResponse => {
  return take(output, {
    repository: (_: any) => de_Repository(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImagesResponse
 */
const de_DescribeImagesResponse = (output: any, context: __SerdeContext): DescribeImagesResponse => {
  return take(output, {
    imageDetails: (_: any) => de_ImageDetailList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageTagsResponse
 */
const de_DescribeImageTagsResponse = (output: any, context: __SerdeContext): DescribeImageTagsResponse => {
  return take(output, {
    imageTagDetails: (_: any) => de_ImageTagDetailList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_DescribeRegistriesResponse omitted.

/**
 * deserializeAws_json1_1DescribeRepositoriesResponse
 */
const de_DescribeRepositoriesResponse = (output: any, context: __SerdeContext): DescribeRepositoriesResponse => {
  return take(output, {
    nextToken: __expectString,
    repositories: (_: any) => de_RepositoryList(_, context),
  }) as any;
};

// de_EmptyUploadException omitted.

/**
 * deserializeAws_json1_1GetAuthorizationTokenResponse
 */
const de_GetAuthorizationTokenResponse = (output: any, context: __SerdeContext): GetAuthorizationTokenResponse => {
  return take(output, {
    authorizationData: (_: any) => de_AuthorizationData(_, context),
  }) as any;
};

// de_GetRegistryCatalogDataResponse omitted.

// de_GetRepositoryCatalogDataResponse omitted.

// de_GetRepositoryPolicyResponse omitted.

// de_Image omitted.

// de_ImageAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1ImageDetail
 */
const de_ImageDetail = (output: any, context: __SerdeContext): ImageDetail => {
  return take(output, {
    artifactMediaType: __expectString,
    imageDigest: __expectString,
    imageManifestMediaType: __expectString,
    imagePushedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSizeInBytes: __expectLong,
    imageTags: _json,
    registryId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageDetailList
 */
const de_ImageDetailList = (output: any, context: __SerdeContext): ImageDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageDetail(entry, context);
    });
  return retVal;
};

// de_ImageDigestDoesNotMatchException omitted.

// de_ImageFailure omitted.

// de_ImageFailureList omitted.

// de_ImageIdentifier omitted.

// de_ImageIdentifierList omitted.

// de_ImageNotFoundException omitted.

// de_ImageTagAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1ImageTagDetail
 */
const de_ImageTagDetail = (output: any, context: __SerdeContext): ImageTagDetail => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageDetail: (_: any) => de_ReferencedImageDetail(_, context),
    imageTag: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageTagDetailList
 */
const de_ImageTagDetailList = (output: any, context: __SerdeContext): ImageTagDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageTagDetail(entry, context);
    });
  return retVal;
};

// de_ImageTagList omitted.

// de_InitiateLayerUploadResponse omitted.

// de_InvalidLayerException omitted.

// de_InvalidLayerPartException omitted.

// de_InvalidParameterException omitted.

// de_InvalidTagParameterException omitted.

// de_Layer omitted.

// de_LayerAlreadyExistsException omitted.

// de_LayerFailure omitted.

// de_LayerFailureList omitted.

// de_LayerList omitted.

// de_LayerPartTooSmallException omitted.

// de_LayersNotFoundException omitted.

// de_LimitExceededException omitted.

// de_ListTagsForResourceResponse omitted.

// de_OperatingSystemList omitted.

// de_PutImageResponse omitted.

// de_PutRegistryCatalogDataResponse omitted.

// de_PutRepositoryCatalogDataResponse omitted.

/**
 * deserializeAws_json1_1ReferencedImageDetail
 */
const de_ReferencedImageDetail = (output: any, context: __SerdeContext): ReferencedImageDetail => {
  return take(output, {
    artifactMediaType: __expectString,
    imageDigest: __expectString,
    imageManifestMediaType: __expectString,
    imagePushedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSizeInBytes: __expectLong,
  }) as any;
};

// de_ReferencedImagesNotFoundException omitted.

// de_Registry omitted.

// de_RegistryAlias omitted.

// de_RegistryAliasList omitted.

// de_RegistryCatalogData omitted.

// de_RegistryList omitted.

// de_RegistryNotFoundException omitted.

/**
 * deserializeAws_json1_1Repository
 */
const de_Repository = (output: any, context: __SerdeContext): Repository => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registryId: __expectString,
    repositoryArn: __expectString,
    repositoryName: __expectString,
    repositoryUri: __expectString,
  }) as any;
};

// de_RepositoryAlreadyExistsException omitted.

// de_RepositoryCatalogData omitted.

// de_RepositoryCatalogDataNotFoundException omitted.

/**
 * deserializeAws_json1_1RepositoryList
 */
const de_RepositoryList = (output: any, context: __SerdeContext): Repository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Repository(entry, context);
    });
  return retVal;
};

// de_RepositoryNotEmptyException omitted.

// de_RepositoryNotFoundException omitted.

// de_RepositoryPolicyNotFoundException omitted.

// de_ServerException omitted.

// de_SetRepositoryPolicyResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TooManyTagsException omitted.

// de_UnsupportedCommandException omitted.

// de_UntagResourceResponse omitted.

// de_UploadLayerPartResponse omitted.

// de_UploadNotFoundException omitted.

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
    "x-amz-target": `SpencerFrontendService.${operation}`,
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
