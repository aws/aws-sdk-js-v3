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
import { DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput } from "../commands/DescribeImageTagsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
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
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "../commands/UploadLayerPartCommand";
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
  DescribeImageTagsRequest,
  DescribeImageTagsResponse,
  DescribeImagesRequest,
  DescribeImagesResponse,
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
  Layer,
  LayerAlreadyExistsException,
  LayerFailure,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LimitExceededException,
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
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ServerException,
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyResponse,
  UnsupportedCommandException,
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadNotFoundException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1BatchCheckLayerAvailabilityCommand = async (
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.BatchCheckLayerAvailability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchCheckLayerAvailabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteImageCommand = async (
  input: BatchDeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.BatchDeleteImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CompleteLayerUploadCommand = async (
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.CompleteLayerUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CompleteLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRepositoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRepositoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRepositoryPolicyCommand = async (
  input: DeleteRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DeleteRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DescribeImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImageTagsCommand = async (
  input: DescribeImageTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DescribeImageTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImageTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRegistriesCommand = async (
  input: DescribeRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DescribeRegistries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRegistriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRepositoriesCommand = async (
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.DescribeRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRepositoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.GetAuthorizationToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAuthorizationTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegistryCatalogDataCommand = async (
  input: GetRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.GetRegistryCatalogData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegistryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryCatalogDataCommand = async (
  input: GetRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.GetRepositoryCatalogData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRepositoryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryPolicyCommand = async (
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.GetRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InitiateLayerUploadCommand = async (
  input: InitiateLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.InitiateLayerUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InitiateLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutImageCommand = async (
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.PutImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRegistryCatalogDataCommand = async (
  input: PutRegistryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.PutRegistryCatalogData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRegistryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRepositoryCatalogDataCommand = async (
  input: PutRepositoryCatalogDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.PutRepositoryCatalogData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRepositoryCatalogDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetRepositoryPolicyCommand = async (
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.SetRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UploadLayerPartCommand = async (
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "SpencerFrontendService.UploadLayerPart",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UploadLayerPartRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchCheckLayerAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCheckLayerAvailabilityResponse(data, context);
  const response: BatchCheckLayerAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteImageResponse(data, context);
  const response: BatchDeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CompleteLayerUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CompleteLayerUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompleteLayerUploadResponse(data, context);
  const response: CompleteLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CompleteLayerUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.ecrpublic#EmptyUploadException":
      response = {
        ...(await deserializeAws_json1_1EmptyUploadExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLayerException":
    case "com.amazonaws.ecrpublic#InvalidLayerException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayerAlreadyExistsException":
    case "com.amazonaws.ecrpublic#LayerAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayerPartTooSmallException":
    case "com.amazonaws.ecrpublic#LayerPartTooSmallException":
      response = {
        ...(await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.ecrpublic#UploadNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRepositoryResponse(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.ecrpublic#RepositoryAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryResponse(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotEmptyException":
    case "com.amazonaws.ecrpublic#RepositoryNotEmptyException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryPolicyResponse(data, context);
  const response: DeleteRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagesResponse(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecrpublic#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeImageTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImageTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageTagsResponse(data, context);
  const response: DescribeImageTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImageTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRegistriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRegistriesResponse(data, context);
  const response: DescribeRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRegistriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRepositoriesResponse(data, context);
  const response: DescribeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetAuthorizationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAuthorizationTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAuthorizationTokenResponse(data, context);
  const response: GetAuthorizationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAuthorizationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRegistryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegistryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegistryCatalogDataResponse(data, context);
  const response: GetRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegistryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRepositoryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRepositoryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryCatalogDataResponse(data, context);
  const response: GetRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRepositoryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryPolicyResponse(data, context);
  const response: GetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1InitiateLayerUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InitiateLayerUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitiateLayerUploadResponse(data, context);
  const response: InitiateLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InitiateLayerUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageResponse(data, context);
  const response: PutImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.ecrpublic#ImageAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageDigestDoesNotMatchException":
    case "com.amazonaws.ecrpublic#ImageDigestDoesNotMatchException":
      response = {
        ...(await deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.ecrpublic#ImageTagAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.ecrpublic#LayersNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferencedImagesNotFoundException":
    case "com.amazonaws.ecrpublic#ReferencedImagesNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRegistryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRegistryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRegistryCatalogDataResponse(data, context);
  const response: PutRegistryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRegistryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRepositoryCatalogDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryCatalogDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRepositoryCatalogDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRepositoryCatalogDataResponse(data, context);
  const response: PutRepositoryCatalogDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRepositoryCatalogDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryCatalogDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SetRepositoryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetRepositoryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetRepositoryPolicyResponse(data, context);
  const response: SetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetRepositoryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UploadLayerPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UploadLayerPartCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UploadLayerPartResponse(data, context);
  const response: UploadLayerPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UploadLayerPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.ecrpublic#InvalidLayerPartException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerPartExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecrpublic#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecrpublic#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegistryNotFoundException":
    case "com.amazonaws.ecrpublic#RegistryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecrpublic#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedCommandException":
    case "com.amazonaws.ecrpublic#UnsupportedCommandException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.ecrpublic#UploadNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1EmptyUploadExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyUploadException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EmptyUploadException(body, context);
  const contents: EmptyUploadException = {
    name: "EmptyUploadException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageAlreadyExistsException(body, context);
  const contents: ImageAlreadyExistsException = {
    name: "ImageAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageDigestDoesNotMatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageDigestDoesNotMatchException(body, context);
  const contents: ImageDigestDoesNotMatchException = {
    name: "ImageDigestDoesNotMatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageNotFoundException(body, context);
  const contents: ImageNotFoundException = {
    name: "ImageNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTagAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTagAlreadyExistsException(body, context);
  const contents: ImageTagAlreadyExistsException = {
    name: "ImageTagAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerException(body, context);
  const contents: InvalidLayerException = {
    name: "InvalidLayerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerPartException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerPartException(body, context);
  const contents: InvalidLayerPartException = {
    name: "InvalidLayerPartException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerAlreadyExistsException(body, context);
  const contents: LayerAlreadyExistsException = {
    name: "LayerAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerPartTooSmallException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerPartTooSmallException(body, context);
  const contents: LayerPartTooSmallException = {
    name: "LayerPartTooSmallException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayersNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayersNotFoundException(body, context);
  const contents: LayersNotFoundException = {
    name: "LayersNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferencedImagesNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferencedImagesNotFoundException(body, context);
  const contents: ReferencedImagesNotFoundException = {
    name: "ReferencedImagesNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RegistryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegistryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RegistryNotFoundException(body, context);
  const contents: RegistryNotFoundException = {
    name: "RegistryNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryAlreadyExistsException(body, context);
  const contents: RepositoryAlreadyExistsException = {
    name: "RepositoryAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotEmptyException(body, context);
  const contents: RepositoryNotEmptyException = {
    name: "RepositoryNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotFoundException(body, context);
  const contents: RepositoryNotFoundException = {
    name: "RepositoryNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryPolicyNotFoundException(body, context);
  const contents: RepositoryPolicyNotFoundException = {
    name: "RepositoryPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerException(body, context);
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedCommandExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedCommandException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedCommandException(body, context);
  const contents: UnsupportedCommandException = {
    name: "UnsupportedCommandException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UploadNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UploadNotFoundException(body, context);
  const contents: UploadNotFoundException = {
    name: "UploadNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ArchitectureList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests !== undefined &&
      input.layerDigests !== null && {
        layerDigests: serializeAws_json1_1BatchedOperationLayerDigestList(input.layerDigests, context),
      }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchDeleteImageRequest = (input: BatchDeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds !== undefined &&
      input.imageIds !== null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchedOperationLayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CompleteLayerUploadRequest = (
  input: CompleteLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests !== undefined &&
      input.layerDigests !== null && {
        layerDigests: serializeAws_json1_1LayerDigestList(input.layerDigests, context),
      }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
  };
};

const serializeAws_json1_1CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.catalogData !== undefined &&
      input.catalogData !== null && {
        catalogData: serializeAws_json1_1RepositoryCatalogDataInput(input.catalogData, context),
      }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteRepositoryPolicyRequest = (
  input: DeleteRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteRepositoryRequest = (input: DeleteRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds !== undefined &&
      input.imageIds !== null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImageTagsRequest = (
  input: DescribeImageTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeRegistriesRequest = (
  input: DescribeRegistriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeRepositoriesRequest = (
  input: DescribeRepositoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryNames !== undefined &&
      input.repositoryNames !== null && {
        repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
      }),
  };
};

const serializeAws_json1_1GetAuthorizationTokenRequest = (
  input: GetAuthorizationTokenRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetRegistryCatalogDataRequest = (
  input: GetRegistryCatalogDataRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetRepositoryCatalogDataRequest = (
  input: GetRepositoryCatalogDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetRepositoryPolicyRequest = (
  input: GetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ImageIdentifier = (input: ImageIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
    ...(input.imageTag !== undefined && input.imageTag !== null && { imageTag: input.imageTag }),
  };
};

const serializeAws_json1_1ImageIdentifierList = (input: ImageIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ImageIdentifier(entry, context);
    });
};

const serializeAws_json1_1InitiateLayerUploadRequest = (
  input: InitiateLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1LayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1OperatingSystemList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutImageRequest = (input: PutImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
    ...(input.imageManifest !== undefined && input.imageManifest !== null && { imageManifest: input.imageManifest }),
    ...(input.imageManifestMediaType !== undefined &&
      input.imageManifestMediaType !== null && { imageManifestMediaType: input.imageManifestMediaType }),
    ...(input.imageTag !== undefined && input.imageTag !== null && { imageTag: input.imageTag }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutRegistryCatalogDataRequest = (
  input: PutRegistryCatalogDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
  };
};

const serializeAws_json1_1PutRepositoryCatalogDataRequest = (
  input: PutRepositoryCatalogDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.catalogData !== undefined &&
      input.catalogData !== null && {
        catalogData: serializeAws_json1_1RepositoryCatalogDataInput(input.catalogData, context),
      }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1RepositoryCatalogDataInput = (
  input: RepositoryCatalogDataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.aboutText !== undefined && input.aboutText !== null && { aboutText: input.aboutText }),
    ...(input.architectures !== undefined &&
      input.architectures !== null && {
        architectures: serializeAws_json1_1ArchitectureList(input.architectures, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.logoImageBlob !== undefined &&
      input.logoImageBlob !== null && { logoImageBlob: context.base64Encoder(input.logoImageBlob) }),
    ...(input.operatingSystems !== undefined &&
      input.operatingSystems !== null && {
        operatingSystems: serializeAws_json1_1OperatingSystemList(input.operatingSystems, context),
      }),
    ...(input.usageText !== undefined && input.usageText !== null && { usageText: input.usageText }),
  };
};

const serializeAws_json1_1RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SetRepositoryPolicyRequest = (
  input: SetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.force !== undefined && input.force !== null && { force: input.force }),
    ...(input.policyText !== undefined && input.policyText !== null && { policyText: input.policyText }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1UploadLayerPartRequest = (input: UploadLayerPartRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerPartBlob !== undefined &&
      input.layerPartBlob !== null && { layerPartBlob: context.base64Encoder(input.layerPartBlob) }),
    ...(input.partFirstByte !== undefined && input.partFirstByte !== null && { partFirstByte: input.partFirstByte }),
    ...(input.partLastByte !== undefined && input.partLastByte !== null && { partLastByte: input.partLastByte }),
    ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined &&
      input.repositoryName !== null && { repositoryName: input.repositoryName }),
    ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
  };
};

const deserializeAws_json1_1ArchitectureList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AuthorizationData = (output: any, context: __SerdeContext): AuthorizationData => {
  return {
    authorizationToken:
      output.authorizationToken !== undefined && output.authorizationToken !== null
        ? output.authorizationToken
        : undefined,
    expiresAt:
      output.expiresAt !== undefined && output.expiresAt !== null
        ? new Date(Math.round(output.expiresAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): BatchCheckLayerAvailabilityResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1LayerFailureList(output.failures, context)
        : undefined,
    layers:
      output.layers !== undefined && output.layers !== null
        ? deserializeAws_json1_1LayerList(output.layers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteImageResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImageResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1ImageFailureList(output.failures, context)
        : undefined,
    imageIds:
      output.imageIds !== undefined && output.imageIds !== null
        ? deserializeAws_json1_1ImageIdentifierList(output.imageIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CompleteLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): CompleteLayerUploadResponse => {
  return {
    layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRepositoryResponse = (
  output: any,
  context: __SerdeContext
): CreateRepositoryResponse => {
  return {
    catalogData:
      output.catalogData !== undefined && output.catalogData !== null
        ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
        : undefined,
    repository:
      output.repository !== undefined && output.repository !== null
        ? deserializeAws_json1_1Repository(output.repository, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryPolicyResponse => {
  return {
    policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRepositoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryResponse => {
  return {
    repository:
      output.repository !== undefined && output.repository !== null
        ? deserializeAws_json1_1Repository(output.repository, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeImagesResponse = (output: any, context: __SerdeContext): DescribeImagesResponse => {
  return {
    imageDetails:
      output.imageDetails !== undefined && output.imageDetails !== null
        ? deserializeAws_json1_1ImageDetailList(output.imageDetails, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeImageTagsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageTagsResponse => {
  return {
    imageTagDetails:
      output.imageTagDetails !== undefined && output.imageTagDetails !== null
        ? deserializeAws_json1_1ImageTagDetailList(output.imageTagDetails, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRegistriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRegistriesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    registries:
      output.registries !== undefined && output.registries !== null
        ? deserializeAws_json1_1RegistryList(output.registries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRepositoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRepositoriesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    repositories:
      output.repositories !== undefined && output.repositories !== null
        ? deserializeAws_json1_1RepositoryList(output.repositories, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EmptyUploadException = (output: any, context: __SerdeContext): EmptyUploadException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1GetAuthorizationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetAuthorizationTokenResponse => {
  return {
    authorizationData:
      output.authorizationData !== undefined && output.authorizationData !== null
        ? deserializeAws_json1_1AuthorizationData(output.authorizationData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegistryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): GetRegistryCatalogDataResponse => {
  return {
    registryCatalogData:
      output.registryCatalogData !== undefined && output.registryCatalogData !== null
        ? deserializeAws_json1_1RegistryCatalogData(output.registryCatalogData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRepositoryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryCatalogDataResponse => {
  return {
    catalogData:
      output.catalogData !== undefined && output.catalogData !== null
        ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryPolicyResponse => {
  return {
    policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1Image = (output: any, context: __SerdeContext): Image => {
  return {
    imageId:
      output.imageId !== undefined && output.imageId !== null
        ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
        : undefined,
    imageManifest:
      output.imageManifest !== undefined && output.imageManifest !== null ? output.imageManifest : undefined,
    imageManifestMediaType:
      output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
        ? output.imageManifestMediaType
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1ImageAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageDetail = (output: any, context: __SerdeContext): ImageDetail => {
  return {
    artifactMediaType:
      output.artifactMediaType !== undefined && output.artifactMediaType !== null
        ? output.artifactMediaType
        : undefined,
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    imageManifestMediaType:
      output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
        ? output.imageManifestMediaType
        : undefined,
    imagePushedAt:
      output.imagePushedAt !== undefined && output.imagePushedAt !== null
        ? new Date(Math.round(output.imagePushedAt * 1000))
        : undefined,
    imageSizeInBytes:
      output.imageSizeInBytes !== undefined && output.imageSizeInBytes !== null ? output.imageSizeInBytes : undefined,
    imageTags:
      output.imageTags !== undefined && output.imageTags !== null
        ? deserializeAws_json1_1ImageTagList(output.imageTags, context)
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1ImageDetailList = (output: any, context: __SerdeContext): ImageDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageDetail(entry, context);
    });
};

const deserializeAws_json1_1ImageDigestDoesNotMatchException = (
  output: any,
  context: __SerdeContext
): ImageDigestDoesNotMatchException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageFailure = (output: any, context: __SerdeContext): ImageFailure => {
  return {
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    imageId:
      output.imageId !== undefined && output.imageId !== null
        ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImageFailureList = (output: any, context: __SerdeContext): ImageFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageFailure(entry, context);
    });
};

const deserializeAws_json1_1ImageIdentifier = (output: any, context: __SerdeContext): ImageIdentifier => {
  return {
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    imageTag: output.imageTag !== undefined && output.imageTag !== null ? output.imageTag : undefined,
  } as any;
};

const deserializeAws_json1_1ImageIdentifierList = (output: any, context: __SerdeContext): ImageIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageIdentifier(entry, context);
    });
};

const deserializeAws_json1_1ImageNotFoundException = (output: any, context: __SerdeContext): ImageNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageTagAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageTagAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageTagDetail = (output: any, context: __SerdeContext): ImageTagDetail => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    imageDetail:
      output.imageDetail !== undefined && output.imageDetail !== null
        ? deserializeAws_json1_1ReferencedImageDetail(output.imageDetail, context)
        : undefined,
    imageTag: output.imageTag !== undefined && output.imageTag !== null ? output.imageTag : undefined,
  } as any;
};

const deserializeAws_json1_1ImageTagDetailList = (output: any, context: __SerdeContext): ImageTagDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageTagDetail(entry, context);
    });
};

const deserializeAws_json1_1ImageTagList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1InitiateLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): InitiateLayerUploadResponse => {
  return {
    partSize: output.partSize !== undefined && output.partSize !== null ? output.partSize : undefined,
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidLayerException = (output: any, context: __SerdeContext): InvalidLayerException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidLayerPartException = (
  output: any,
  context: __SerdeContext
): InvalidLayerPartException => {
  return {
    lastValidByteReceived:
      output.lastValidByteReceived !== undefined && output.lastValidByteReceived !== null
        ? output.lastValidByteReceived
        : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    layerAvailability:
      output.layerAvailability !== undefined && output.layerAvailability !== null
        ? output.layerAvailability
        : undefined,
    layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
    layerSize: output.layerSize !== undefined && output.layerSize !== null ? output.layerSize : undefined,
    mediaType: output.mediaType !== undefined && output.mediaType !== null ? output.mediaType : undefined,
  } as any;
};

const deserializeAws_json1_1LayerAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): LayerAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LayerFailure = (output: any, context: __SerdeContext): LayerFailure => {
  return {
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
  } as any;
};

const deserializeAws_json1_1LayerFailureList = (output: any, context: __SerdeContext): LayerFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LayerFailure(entry, context);
    });
};

const deserializeAws_json1_1LayerList = (output: any, context: __SerdeContext): Layer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Layer(entry, context);
    });
};

const deserializeAws_json1_1LayerPartTooSmallException = (
  output: any,
  context: __SerdeContext
): LayerPartTooSmallException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LayersNotFoundException = (
  output: any,
  context: __SerdeContext
): LayersNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1OperatingSystemList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1PutImageResponse = (output: any, context: __SerdeContext): PutImageResponse => {
  return {
    image:
      output.image !== undefined && output.image !== null
        ? deserializeAws_json1_1Image(output.image, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRegistryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): PutRegistryCatalogDataResponse => {
  return {
    registryCatalogData:
      output.registryCatalogData !== undefined && output.registryCatalogData !== null
        ? deserializeAws_json1_1RegistryCatalogData(output.registryCatalogData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRepositoryCatalogDataResponse = (
  output: any,
  context: __SerdeContext
): PutRepositoryCatalogDataResponse => {
  return {
    catalogData:
      output.catalogData !== undefined && output.catalogData !== null
        ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReferencedImageDetail = (output: any, context: __SerdeContext): ReferencedImageDetail => {
  return {
    artifactMediaType:
      output.artifactMediaType !== undefined && output.artifactMediaType !== null
        ? output.artifactMediaType
        : undefined,
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    imageManifestMediaType:
      output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
        ? output.imageManifestMediaType
        : undefined,
    imagePushedAt:
      output.imagePushedAt !== undefined && output.imagePushedAt !== null
        ? new Date(Math.round(output.imagePushedAt * 1000))
        : undefined,
    imageSizeInBytes:
      output.imageSizeInBytes !== undefined && output.imageSizeInBytes !== null ? output.imageSizeInBytes : undefined,
  } as any;
};

const deserializeAws_json1_1ReferencedImagesNotFoundException = (
  output: any,
  context: __SerdeContext
): ReferencedImagesNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Registry = (output: any, context: __SerdeContext): Registry => {
  return {
    aliases:
      output.aliases !== undefined && output.aliases !== null
        ? deserializeAws_json1_1RegistryAliasList(output.aliases, context)
        : undefined,
    registryArn: output.registryArn !== undefined && output.registryArn !== null ? output.registryArn : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    registryUri: output.registryUri !== undefined && output.registryUri !== null ? output.registryUri : undefined,
    verified: output.verified !== undefined && output.verified !== null ? output.verified : undefined,
  } as any;
};

const deserializeAws_json1_1RegistryAlias = (output: any, context: __SerdeContext): RegistryAlias => {
  return {
    defaultRegistryAlias:
      output.defaultRegistryAlias !== undefined && output.defaultRegistryAlias !== null
        ? output.defaultRegistryAlias
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    primaryRegistryAlias:
      output.primaryRegistryAlias !== undefined && output.primaryRegistryAlias !== null
        ? output.primaryRegistryAlias
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1RegistryAliasList = (output: any, context: __SerdeContext): RegistryAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegistryAlias(entry, context);
    });
};

const deserializeAws_json1_1RegistryCatalogData = (output: any, context: __SerdeContext): RegistryCatalogData => {
  return {
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
  } as any;
};

const deserializeAws_json1_1RegistryList = (output: any, context: __SerdeContext): Registry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Registry(entry, context);
    });
};

const deserializeAws_json1_1RegistryNotFoundException = (
  output: any,
  context: __SerdeContext
): RegistryNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryArn:
      output.repositoryArn !== undefined && output.repositoryArn !== null ? output.repositoryArn : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    repositoryUri:
      output.repositoryUri !== undefined && output.repositoryUri !== null ? output.repositoryUri : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryCatalogData = (output: any, context: __SerdeContext): RepositoryCatalogData => {
  return {
    aboutText: output.aboutText !== undefined && output.aboutText !== null ? output.aboutText : undefined,
    architectures:
      output.architectures !== undefined && output.architectures !== null
        ? deserializeAws_json1_1ArchitectureList(output.architectures, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    logoUrl: output.logoUrl !== undefined && output.logoUrl !== null ? output.logoUrl : undefined,
    marketplaceCertified:
      output.marketplaceCertified !== undefined && output.marketplaceCertified !== null
        ? output.marketplaceCertified
        : undefined,
    operatingSystems:
      output.operatingSystems !== undefined && output.operatingSystems !== null
        ? deserializeAws_json1_1OperatingSystemList(output.operatingSystems, context)
        : undefined,
    usageText: output.usageText !== undefined && output.usageText !== null ? output.usageText : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryList = (output: any, context: __SerdeContext): Repository[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Repository(entry, context);
    });
};

const deserializeAws_json1_1RepositoryNotEmptyException = (
  output: any,
  context: __SerdeContext
): RepositoryNotEmptyException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryPolicyNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ServerException = (output: any, context: __SerdeContext): ServerException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1SetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): SetRepositoryPolicyResponse => {
  return {
    policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedCommandException = (
  output: any,
  context: __SerdeContext
): UnsupportedCommandException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UploadLayerPartResponse = (
  output: any,
  context: __SerdeContext
): UploadLayerPartResponse => {
  return {
    lastByteReceived:
      output.lastByteReceived !== undefined && output.lastByteReceived !== null ? output.lastByteReceived : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
  } as any;
};

const deserializeAws_json1_1UploadNotFoundException = (
  output: any,
  context: __SerdeContext
): UploadNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
