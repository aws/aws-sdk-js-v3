import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "../commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "../commands/BatchDeleteImageCommand";
import { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "../commands/BatchGetImageCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "../commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "../commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "../commands/DescribeImageScanFindingsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
} from "../commands/GetDownloadUrlForLayerCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "../commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "../commands/InitiateLayerUploadCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "../commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
} from "../commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
} from "../commands/PutImageTagMutabilityCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "../commands/PutLifecyclePolicyCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "../commands/SetRepositoryPolicyCommand";
import { StartImageScanCommandInput, StartImageScanCommandOutput } from "../commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
} from "../commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "../commands/UploadLayerPartCommand";
import {
  Attribute,
  AuthorizationData,
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchDeleteImageRequest,
  BatchDeleteImageResponse,
  BatchGetImageRequest,
  BatchGetImageResponse,
  CompleteLayerUploadRequest,
  CompleteLayerUploadResponse,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsResponse,
  DescribeImagesFilter,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  EncryptionConfiguration,
  FindingSeverity,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetDownloadUrlForLayerRequest,
  GetDownloadUrlForLayerResponse,
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetRepositoryPolicyRequest,
  GetRepositoryPolicyResponse,
  Image,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageDigestDoesNotMatchException,
  ImageFailure,
  ImageIdentifier,
  ImageNotFoundException,
  ImageScanFinding,
  ImageScanFindings,
  ImageScanFindingsSummary,
  ImageScanStatus,
  ImageScanningConfiguration,
  ImageTagAlreadyExistsException,
  InitiateLayerUploadRequest,
  InitiateLayerUploadResponse,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  KmsException,
  Layer,
  LayerAlreadyExistsException,
  LayerFailure,
  LayerInaccessibleException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewFilter,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewNotFoundException,
  LifecyclePolicyPreviewResult,
  LifecyclePolicyPreviewSummary,
  LifecyclePolicyRuleAction,
  LimitExceededException,
  ListImagesFilter,
  ListImagesRequest,
  ListImagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutImageRequest,
  PutImageResponse,
  PutImageScanningConfigurationRequest,
  PutImageScanningConfigurationResponse,
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityResponse,
  PutLifecyclePolicyRequest,
  PutLifecyclePolicyResponse,
  ReferencedImagesNotFoundException,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ScanNotFoundException,
  ServerException,
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyResponse,
  StartImageScanRequest,
  StartImageScanResponse,
  StartLifecyclePolicyPreviewRequest,
  StartLifecyclePolicyPreviewResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UnsupportedImageTypeException,
  UntagResourceRequest,
  UntagResourceResponse,
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetImageCommand = async (
  input: BatchGetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.BatchGetImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CompleteLayerUploadCommand = async (
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRepositoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DeleteRepository",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DescribeImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImageScanFindingsCommand = async (
  input: DescribeImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImageScanFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRepositoriesCommand = async (
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAuthorizationTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDownloadUrlForLayerCommand = async (
  input: GetDownloadUrlForLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDownloadUrlForLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLifecyclePolicyPreviewCommand = async (
  input: GetLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryPolicyCommand = async (
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InitiateLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.ListImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutImageCommand = async (
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.PutImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutImageScanningConfigurationCommand = async (
  input: PutImageScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutImageScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutImageTagMutabilityCommand = async (
  input: PutImageTagMutabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutImageTagMutabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLifecyclePolicyCommand = async (
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetRepositoryPolicyCommand = async (
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImageScanCommand = async (
  input: StartImageScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.StartImageScan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartImageScanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartLifecyclePolicyPreviewCommand = async (
  input: StartLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartLifecyclePolicyPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UploadLayerPartCommand = async (
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1BatchGetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetImageResponse(data, context);
  const response: BatchGetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.ecr#EmptyUploadException":
      response = {
        ...(await deserializeAws_json1_1EmptyUploadExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLayerException":
    case "com.amazonaws.ecr#InvalidLayerException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayerAlreadyExistsException":
    case "com.amazonaws.ecr#LayerAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayerPartTooSmallException":
    case "com.amazonaws.ecr#LayerPartTooSmallException":
      response = {
        ...(await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.ecr#RepositoryAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLifecyclePolicyResponse(data, context);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotEmptyException":
    case "com.amazonaws.ecr#RepositoryNotEmptyException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1DescribeImageScanFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImageScanFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageScanFindingsResponse(data, context);
  const response: DescribeImageScanFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImageScanFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ScanNotFoundException":
    case "com.amazonaws.ecr#ScanNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ScanNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1GetDownloadUrlForLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDownloadUrlForLayerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDownloadUrlForLayerResponse(data, context);
  const response: GetDownloadUrlForLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDownloadUrlForLayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayerInaccessibleException":
    case "com.amazonaws.ecr#LayerInaccessibleException":
      response = {
        ...(await deserializeAws_json1_1LayerInaccessibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyResponse(data, context);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1GetLifecyclePolicyPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyPreviewResponse(data, context);
  const response: GetLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecyclePolicyPreviewNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListImagesResponse(data, context);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.ecr#ImageAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageDigestDoesNotMatchException":
    case "com.amazonaws.ecr#ImageDigestDoesNotMatchException":
      response = {
        ...(await deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.ecr#ImageTagAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReferencedImagesNotFoundException":
    case "com.amazonaws.ecr#ReferencedImagesNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1PutImageScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutImageScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageScanningConfigurationResponse(data, context);
  const response: PutImageScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutImageScanningConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1PutImageTagMutabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutImageTagMutabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageTagMutabilityResponse(data, context);
  const response: PutImageTagMutabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutImageTagMutabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1PutLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecyclePolicyResponse(data, context);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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

export const deserializeAws_json1_1StartImageScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImageScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImageScanResponse(data, context);
  const response: StartImageScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImageScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedImageTypeException":
    case "com.amazonaws.ecr#UnsupportedImageTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedImageTypeExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartLifecyclePolicyPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLifecyclePolicyPreviewResponse(data, context);
  const response: StartLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecyclePolicyPreviewInProgressException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewInProgressException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.ecr#InvalidLayerPartException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerPartExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
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

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(body, context);
  const contents: InvalidTagParameterException = {
    name: "InvalidTagParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KmsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsException(body, context);
  const contents: KmsException = {
    name: "KmsException",
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

const deserializeAws_json1_1LayerInaccessibleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerInaccessibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerInaccessibleException(body, context);
  const contents: LayerInaccessibleException = {
    name: "LayerInaccessibleException",
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

const deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyNotFoundException(body, context);
  const contents: LifecyclePolicyNotFoundException = {
    name: "LifecyclePolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewInProgressException(body, context);
  const contents: LifecyclePolicyPreviewInProgressException = {
    name: "LifecyclePolicyPreviewInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException(body, context);
  const contents: LifecyclePolicyPreviewNotFoundException = {
    name: "LifecyclePolicyPreviewNotFoundException",
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

const deserializeAws_json1_1ScanNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ScanNotFoundException(body, context);
  const contents: ScanNotFoundException = {
    name: "ScanNotFoundException",
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

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedImageTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedImageTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedImageTypeException(body, context);
  const contents: UnsupportedImageTypeException = {
    name: "UnsupportedImageTypeException",
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

const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests !== undefined && {
      layerDigests: serializeAws_json1_1BatchedOperationLayerDigestList(input.layerDigests, context),
    }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchDeleteImageRequest = (input: BatchDeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds !== undefined && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchedOperationLayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1BatchGetImageRequest = (input: BatchGetImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.acceptedMediaTypes !== undefined && {
      acceptedMediaTypes: serializeAws_json1_1MediaTypeList(input.acceptedMediaTypes, context),
    }),
    ...(input.imageIds !== undefined && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1CompleteLayerUploadRequest = (
  input: CompleteLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests !== undefined && {
      layerDigests: serializeAws_json1_1LayerDigestList(input.layerDigests, context),
    }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
    ...(input.uploadId !== undefined && { uploadId: input.uploadId }),
  };
};

const serializeAws_json1_1CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.encryptionConfiguration !== undefined && {
      encryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.encryptionConfiguration, context),
    }),
    ...(input.imageScanningConfiguration !== undefined && {
      imageScanningConfiguration: serializeAws_json1_1ImageScanningConfiguration(
        input.imageScanningConfiguration,
        context
      ),
    }),
    ...(input.imageTagMutability !== undefined && { imageTagMutability: input.imageTagMutability }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1DeleteLifecyclePolicyRequest = (
  input: DeleteLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteRepositoryPolicyRequest = (
  input: DeleteRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteRepositoryRequest = (input: DeleteRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.force !== undefined && { force: input.force }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImageScanFindingsRequest = (
  input: DescribeImageScanFindingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageId !== undefined && { imageId: serializeAws_json1_1ImageIdentifier(input.imageId, context) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImagesFilter = (input: DescribeImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus !== undefined && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter !== undefined && { filter: serializeAws_json1_1DescribeImagesFilter(input.filter, context) }),
    ...(input.imageIds !== undefined && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeRepositoriesRequest = (
  input: DescribeRepositoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryNames !== undefined && {
      repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.encryptionType !== undefined && { encryptionType: input.encryptionType }),
    ...(input.kmsKey !== undefined && { kmsKey: input.kmsKey }),
  };
};

const serializeAws_json1_1GetAuthorizationTokenRegistryIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1GetAuthorizationTokenRequest = (
  input: GetAuthorizationTokenRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryIds !== undefined && {
      registryIds: serializeAws_json1_1GetAuthorizationTokenRegistryIdList(input.registryIds, context),
    }),
  };
};

const serializeAws_json1_1GetDownloadUrlForLayerRequest = (
  input: GetDownloadUrlForLayerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigest !== undefined && { layerDigest: input.layerDigest }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetLifecyclePolicyPreviewRequest = (
  input: GetLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1LifecyclePolicyPreviewFilter(input.filter, context),
    }),
    ...(input.imageIds !== undefined && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetLifecyclePolicyRequest = (
  input: GetLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetRepositoryPolicyRequest = (
  input: GetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ImageIdentifier = (input: ImageIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest !== undefined && { imageDigest: input.imageDigest }),
    ...(input.imageTag !== undefined && { imageTag: input.imageTag }),
  };
};

const serializeAws_json1_1ImageIdentifierList = (input: ImageIdentifier[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1ImageIdentifier(entry, context));
};

const serializeAws_json1_1ImageScanningConfiguration = (
  input: ImageScanningConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.scanOnPush !== undefined && { scanOnPush: input.scanOnPush }),
  };
};

const serializeAws_json1_1InitiateLayerUploadRequest = (
  input: InitiateLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1LayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1LifecyclePolicyPreviewFilter = (
  input: LifecyclePolicyPreviewFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.tagStatus !== undefined && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1ListImagesFilter = (input: ListImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus !== undefined && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1ListImagesRequest = (input: ListImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter !== undefined && { filter: serializeAws_json1_1ListImagesFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1MediaTypeList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1PutImageRequest = (input: PutImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest !== undefined && { imageDigest: input.imageDigest }),
    ...(input.imageManifest !== undefined && { imageManifest: input.imageManifest }),
    ...(input.imageManifestMediaType !== undefined && { imageManifestMediaType: input.imageManifestMediaType }),
    ...(input.imageTag !== undefined && { imageTag: input.imageTag }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutImageScanningConfigurationRequest = (
  input: PutImageScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageScanningConfiguration !== undefined && {
      imageScanningConfiguration: serializeAws_json1_1ImageScanningConfiguration(
        input.imageScanningConfiguration,
        context
      ),
    }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutImageTagMutabilityRequest = (
  input: PutImageTagMutabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageTagMutability !== undefined && { imageTagMutability: input.imageTagMutability }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutLifecyclePolicyRequest = (
  input: PutLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.lifecyclePolicyText !== undefined && { lifecyclePolicyText: input.lifecyclePolicyText }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SetRepositoryPolicyRequest = (
  input: SetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.force !== undefined && { force: input.force }),
    ...(input.policyText !== undefined && { policyText: input.policyText }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1StartImageScanRequest = (input: StartImageScanRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageId !== undefined && { imageId: serializeAws_json1_1ImageIdentifier(input.imageId, context) }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1StartLifecyclePolicyPreviewRequest = (
  input: StartLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.lifecyclePolicyText !== undefined && { lifecyclePolicyText: input.lifecyclePolicyText }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UploadLayerPartRequest = (input: UploadLayerPartRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerPartBlob !== undefined && { layerPartBlob: context.base64Encoder(input.layerPartBlob) }),
    ...(input.partFirstByte !== undefined && { partFirstByte: input.partFirstByte }),
    ...(input.partLastByte !== undefined && { partLastByte: input.partLastByte }),
    ...(input.registryId !== undefined && { registryId: input.registryId }),
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
    ...(input.uploadId !== undefined && { uploadId: input.uploadId }),
  };
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Attribute(entry, context));
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
    proxyEndpoint:
      output.proxyEndpoint !== undefined && output.proxyEndpoint !== null ? output.proxyEndpoint : undefined,
  } as any;
};

const deserializeAws_json1_1AuthorizationDataList = (output: any, context: __SerdeContext): AuthorizationData[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AuthorizationData(entry, context));
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

const deserializeAws_json1_1BatchGetImageResponse = (output: any, context: __SerdeContext): BatchGetImageResponse => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_json1_1ImageFailureList(output.failures, context)
        : undefined,
    images:
      output.images !== undefined && output.images !== null
        ? deserializeAws_json1_1ImageList(output.images, context)
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
    repository:
      output.repository !== undefined && output.repository !== null
        ? deserializeAws_json1_1Repository(output.repository, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyResponse => {
  return {
    lastEvaluatedAt:
      output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null
        ? new Date(Math.round(output.lastEvaluatedAt * 1000))
        : undefined,
    lifecyclePolicyText:
      output.lifecyclePolicyText !== undefined && output.lifecyclePolicyText !== null
        ? output.lifecyclePolicyText
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
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

const deserializeAws_json1_1DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  return {
    imageId:
      output.imageId !== undefined && output.imageId !== null
        ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
        : undefined,
    imageScanFindings:
      output.imageScanFindings !== undefined && output.imageScanFindings !== null
        ? deserializeAws_json1_1ImageScanFindings(output.imageScanFindings, context)
        : undefined,
    imageScanStatus:
      output.imageScanStatus !== undefined && output.imageScanStatus !== null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
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

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    encryptionType:
      output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
    kmsKey: output.kmsKey !== undefined && output.kmsKey !== null ? output.kmsKey : undefined,
  } as any;
};

const deserializeAws_json1_1FindingSeverityCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [FindingSeverity | string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1GetAuthorizationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetAuthorizationTokenResponse => {
  return {
    authorizationData:
      output.authorizationData !== undefined && output.authorizationData !== null
        ? deserializeAws_json1_1AuthorizationDataList(output.authorizationData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDownloadUrlForLayerResponse = (
  output: any,
  context: __SerdeContext
): GetDownloadUrlForLayerResponse => {
  return {
    downloadUrl: output.downloadUrl !== undefined && output.downloadUrl !== null ? output.downloadUrl : undefined,
    layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
  } as any;
};

const deserializeAws_json1_1GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  return {
    lifecyclePolicyText:
      output.lifecyclePolicyText !== undefined && output.lifecyclePolicyText !== null
        ? output.lifecyclePolicyText
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    previewResults:
      output.previewResults !== undefined && output.previewResults !== null
        ? deserializeAws_json1_1LifecyclePolicyPreviewResultList(output.previewResults, context)
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1LifecyclePolicyPreviewSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyResponse => {
  return {
    lastEvaluatedAt:
      output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null
        ? new Date(Math.round(output.lastEvaluatedAt * 1000))
        : undefined,
    lifecyclePolicyText:
      output.lifecyclePolicyText !== undefined && output.lifecyclePolicyText !== null
        ? output.lifecyclePolicyText
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
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
    imageScanFindingsSummary:
      output.imageScanFindingsSummary !== undefined && output.imageScanFindingsSummary !== null
        ? deserializeAws_json1_1ImageScanFindingsSummary(output.imageScanFindingsSummary, context)
        : undefined,
    imageScanStatus:
      output.imageScanStatus !== undefined && output.imageScanStatus !== null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
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
  return (output || []).map((entry: any) => deserializeAws_json1_1ImageDetail(entry, context));
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
  return (output || []).map((entry: any) => deserializeAws_json1_1ImageFailure(entry, context));
};

const deserializeAws_json1_1ImageIdentifier = (output: any, context: __SerdeContext): ImageIdentifier => {
  return {
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    imageTag: output.imageTag !== undefined && output.imageTag !== null ? output.imageTag : undefined,
  } as any;
};

const deserializeAws_json1_1ImageIdentifierList = (output: any, context: __SerdeContext): ImageIdentifier[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ImageIdentifier(entry, context));
};

const deserializeAws_json1_1ImageList = (output: any, context: __SerdeContext): Image[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Image(entry, context));
};

const deserializeAws_json1_1ImageNotFoundException = (output: any, context: __SerdeContext): ImageNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1AttributeList(output.attributes, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    severity: output.severity !== undefined && output.severity !== null ? output.severity : undefined,
    uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanFindingList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ImageScanFinding(entry, context));
};

const deserializeAws_json1_1ImageScanFindings = (output: any, context: __SerdeContext): ImageScanFindings => {
  return {
    findingSeverityCounts:
      output.findingSeverityCounts !== undefined && output.findingSeverityCounts !== null
        ? deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context)
        : undefined,
    findings:
      output.findings !== undefined && output.findings !== null
        ? deserializeAws_json1_1ImageScanFindingList(output.findings, context)
        : undefined,
    imageScanCompletedAt:
      output.imageScanCompletedAt !== undefined && output.imageScanCompletedAt !== null
        ? new Date(Math.round(output.imageScanCompletedAt * 1000))
        : undefined,
    vulnerabilitySourceUpdatedAt:
      output.vulnerabilitySourceUpdatedAt !== undefined && output.vulnerabilitySourceUpdatedAt !== null
        ? new Date(Math.round(output.vulnerabilitySourceUpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanFindingsSummary = (
  output: any,
  context: __SerdeContext
): ImageScanFindingsSummary => {
  return {
    findingSeverityCounts:
      output.findingSeverityCounts !== undefined && output.findingSeverityCounts !== null
        ? deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context)
        : undefined,
    imageScanCompletedAt:
      output.imageScanCompletedAt !== undefined && output.imageScanCompletedAt !== null
        ? new Date(Math.round(output.imageScanCompletedAt * 1000))
        : undefined,
    vulnerabilitySourceUpdatedAt:
      output.vulnerabilitySourceUpdatedAt !== undefined && output.vulnerabilitySourceUpdatedAt !== null
        ? new Date(Math.round(output.vulnerabilitySourceUpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanningConfiguration = (
  output: any,
  context: __SerdeContext
): ImageScanningConfiguration => {
  return {
    scanOnPush: output.scanOnPush !== undefined && output.scanOnPush !== null ? output.scanOnPush : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanStatus = (output: any, context: __SerdeContext): ImageScanStatus => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
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

const deserializeAws_json1_1ImageTagList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KmsException = (output: any, context: __SerdeContext): KmsException => {
  return {
    kmsError: output.kmsError !== undefined && output.kmsError !== null ? output.kmsError : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1LayerFailure(entry, context));
};

const deserializeAws_json1_1LayerInaccessibleException = (
  output: any,
  context: __SerdeContext
): LayerInaccessibleException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LayerList = (output: any, context: __SerdeContext): Layer[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Layer(entry, context));
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

const deserializeAws_json1_1LifecyclePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewInProgressException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResult = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_json1_1LifecyclePolicyRuleAction(output.action, context)
        : undefined,
    appliedRulePriority:
      output.appliedRulePriority !== undefined && output.appliedRulePriority !== null
        ? output.appliedRulePriority
        : undefined,
    imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
    imagePushedAt:
      output.imagePushedAt !== undefined && output.imagePushedAt !== null
        ? new Date(Math.round(output.imagePushedAt * 1000))
        : undefined,
    imageTags:
      output.imageTags !== undefined && output.imageTags !== null
        ? deserializeAws_json1_1ImageTagList(output.imageTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResultList = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LifecyclePolicyPreviewResult(entry, context));
};

const deserializeAws_json1_1LifecyclePolicyPreviewSummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewSummary => {
  return {
    expiringImageTotalCount:
      output.expiringImageTotalCount !== undefined && output.expiringImageTotalCount !== null
        ? output.expiringImageTotalCount
        : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyRuleAction = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyRuleAction => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListImagesResponse = (output: any, context: __SerdeContext): ListImagesResponse => {
  return {
    imageIds:
      output.imageIds !== undefined && output.imageIds !== null
        ? deserializeAws_json1_1ImageIdentifierList(output.imageIds, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutImageResponse = (output: any, context: __SerdeContext): PutImageResponse => {
  return {
    image:
      output.image !== undefined && output.image !== null
        ? deserializeAws_json1_1Image(output.image, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutImageScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutImageScanningConfigurationResponse => {
  return {
    imageScanningConfiguration:
      output.imageScanningConfiguration !== undefined && output.imageScanningConfiguration !== null
        ? deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1PutImageTagMutabilityResponse = (
  output: any,
  context: __SerdeContext
): PutImageTagMutabilityResponse => {
  return {
    imageTagMutability:
      output.imageTagMutability !== undefined && output.imageTagMutability !== null
        ? output.imageTagMutability
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1PutLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyResponse => {
  return {
    lifecyclePolicyText:
      output.lifecyclePolicyText !== undefined && output.lifecyclePolicyText !== null
        ? output.lifecyclePolicyText
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
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

const deserializeAws_json1_1Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    encryptionConfiguration:
      output.encryptionConfiguration !== undefined && output.encryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.encryptionConfiguration, context)
        : undefined,
    imageScanningConfiguration:
      output.imageScanningConfiguration !== undefined && output.imageScanningConfiguration !== null
        ? deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    imageTagMutability:
      output.imageTagMutability !== undefined && output.imageTagMutability !== null
        ? output.imageTagMutability
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

const deserializeAws_json1_1RepositoryList = (output: any, context: __SerdeContext): Repository[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Repository(entry, context));
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

const deserializeAws_json1_1ScanNotFoundException = (output: any, context: __SerdeContext): ScanNotFoundException => {
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

const deserializeAws_json1_1StartImageScanResponse = (output: any, context: __SerdeContext): StartImageScanResponse => {
  return {
    imageId:
      output.imageId !== undefined && output.imageId !== null
        ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
        : undefined,
    imageScanStatus:
      output.imageScanStatus !== undefined && output.imageScanStatus !== null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_json1_1StartLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): StartLifecyclePolicyPreviewResponse => {
  return {
    lifecyclePolicyText:
      output.lifecyclePolicyText !== undefined && output.lifecyclePolicyText !== null
        ? output.lifecyclePolicyText
        : undefined,
    registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedImageTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedImageTypeException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
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
