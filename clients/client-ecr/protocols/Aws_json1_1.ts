import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput
} from "../commands/BatchCheckLayerAvailabilityCommand";
import {
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput
} from "../commands/BatchDeleteImageCommand";
import {
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput
} from "../commands/BatchGetImageCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput
} from "../commands/CompleteLayerUploadCommand";
import {
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput
} from "../commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput
} from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput
} from "../commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput
} from "../commands/DescribeImageScanFindingsCommand";
import {
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
} from "../commands/DescribeImagesCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput
} from "../commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput
} from "../commands/GetDownloadUrlForLayerCommand";
import {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "../commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput
} from "../commands/GetLifecyclePolicyPreviewCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput
} from "../commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput
} from "../commands/InitiateLayerUploadCommand";
import {
  ListImagesCommandInput,
  ListImagesCommandOutput
} from "../commands/ListImagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutImageCommandInput,
  PutImageCommandOutput
} from "../commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput
} from "../commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput
} from "../commands/PutImageTagMutabilityCommand";
import {
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput
} from "../commands/PutLifecyclePolicyCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput
} from "../commands/SetRepositoryPolicyCommand";
import {
  StartImageScanCommandInput,
  StartImageScanCommandOutput
} from "../commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput
} from "../commands/StartLifecyclePolicyPreviewCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput
} from "../commands/UploadLayerPartCommand";
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
  UntagResourceRequest,
  UntagResourceResponse,
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadNotFoundException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1BatchCheckLayerAvailabilityCommand(
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchCheckLayerAvailabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchDeleteImageCommand(
  input: BatchDeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDeleteImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetImageCommand(
  input: BatchGetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.BatchGetImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CompleteLayerUploadCommand(
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CompleteLayerUploadRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateRepositoryCommand(
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.CreateRepository";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRepositoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLifecyclePolicyCommand(
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLifecyclePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRepositoryCommand(
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteRepository";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRepositoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRepositoryPolicyCommand(
  input: DeleteRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRepositoryPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeImageScanFindingsCommand(
  input: DescribeImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImageScanFindingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeImagesCommand(
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeImages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeRepositoriesCommand(
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeRepositoriesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAuthorizationTokenCommand(
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAuthorizationTokenRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDownloadUrlForLayerCommand(
  input: GetDownloadUrlForLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDownloadUrlForLayerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLifecyclePolicyCommand(
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLifecyclePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLifecyclePolicyPreviewCommand(
  input: GetLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLifecyclePolicyPreviewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRepositoryPolicyCommand(
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRepositoryPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1InitiateLayerUploadCommand(
  input: InitiateLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InitiateLayerUploadRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListImagesCommand(
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.ListImages";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutImageCommand(
  input: PutImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.PutImage";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutImageScanningConfigurationCommand(
  input: PutImageScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutImageScanningConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutImageTagMutabilityCommand(
  input: PutImageTagMutabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutImageTagMutabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutLifecyclePolicyCommand(
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLifecyclePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetRepositoryPolicyCommand(
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetRepositoryPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartImageScanCommand(
  input: StartImageScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.StartImageScan";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartImageScanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartLifecyclePolicyPreviewCommand(
  input: StartLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartLifecyclePolicyPreviewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonEC2ContainerRegistry_V20150921.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UploadLayerPartCommand(
  input: UploadLayerPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UploadLayerPartRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCheckLayerAvailabilityResponse(
    data,
    context
  );
  const response: BatchCheckLayerAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchCheckLayerAvailabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCheckLayerAvailabilityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1BatchDeleteImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteImageResponse(data, context);
  const response: BatchDeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchDeleteImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1BatchGetImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetImageResponse(data, context);
  const response: BatchGetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchGetImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CompleteLayerUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CompleteLayerUploadCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CompleteLayerUploadResponse(data, context);
  const response: CompleteLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompleteLayerUploadResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CompleteLayerUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLayerUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.starport.frontend#EmptyUploadException":
      response = {
        ...(await deserializeAws_json1_1EmptyUploadExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLayerException":
    case "com.amazonaws.starport.frontend#InvalidLayerException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LayerAlreadyExistsException":
    case "com.amazonaws.starport.frontend#LayerAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LayerPartTooSmallException":
    case "com.amazonaws.starport.frontend#LayerPartTooSmallException":
      response = {
        ...(await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.starport.frontend#UploadNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRepositoryResponse(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRepositoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.starport.frontend#RepositoryAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLifecyclePolicyResponse(data, context);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryResponse(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotEmptyException":
    case "com.amazonaws.starport.frontend#RepositoryNotEmptyException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRepositoryPolicyResponse(
    data,
    context
  );
  const response: DeleteRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeImageScanFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImageScanFindingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageScanFindingsResponse(
    data,
    context
  );
  const response: DescribeImageScanFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImageScanFindingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeImageScanFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScanNotFoundException":
    case "com.amazonaws.starport.frontend#ScanNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ScanNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagesResponse(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeRepositoriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRepositoriesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRepositoriesResponse(data, context);
  const response: DescribeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRepositoriesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeRepositoriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoriesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetAuthorizationTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAuthorizationTokenCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAuthorizationTokenResponse(data, context);
  const response: GetAuthorizationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAuthorizationTokenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAuthorizationTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetDownloadUrlForLayerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDownloadUrlForLayerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDownloadUrlForLayerResponse(
    data,
    context
  );
  const response: GetDownloadUrlForLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDownloadUrlForLayerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDownloadUrlForLayerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LayerInaccessibleException":
    case "com.amazonaws.starport.frontend#LayerInaccessibleException":
      response = {
        ...(await deserializeAws_json1_1LayerInaccessibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.starport.frontend#LayersNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyResponse(data, context);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLifecyclePolicyPreviewResponse(
    data,
    context
  );
  const response: GetLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLifecyclePolicyPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecyclePolicyPreviewNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRepositoryPolicyResponse(data, context);
  const response: GetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryPolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1InitiateLayerUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InitiateLayerUploadCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitiateLayerUploadResponse(data, context);
  const response: InitiateLayerUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateLayerUploadResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1InitiateLayerUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateLayerUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListImagesResponse(data, context);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageResponse(data, context);
  const response: PutImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.starport.frontend#ImageAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.starport.frontend#ImageTagAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LayersNotFoundException":
    case "com.amazonaws.starport.frontend#LayersNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutImageScanningConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageScanningConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageScanningConfigurationResponse(
    data,
    context
  );
  const response: PutImageScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageScanningConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageScanningConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutImageTagMutabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutImageTagMutabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutImageTagMutabilityResponse(data, context);
  const response: PutImageTagMutabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageTagMutabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutImageTagMutabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutLifecyclePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLifecyclePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecyclePolicyResponse(data, context);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLifecyclePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutLifecyclePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SetRepositoryPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetRepositoryPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetRepositoryPolicyResponse(data, context);
  const response: SetRepositoryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetRepositoryPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SetRepositoryPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRepositoryPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartImageScanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartImageScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImageScanResponse(data, context);
  const response: StartImageScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImageScanResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartImageScanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.starport.frontend#ImageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLifecyclePolicyPreviewResponse(
    data,
    context
  );
  const response: StartLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartLifecyclePolicyPreviewResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecyclePolicyPreviewInProgressException":
    case "com.amazonaws.starport.frontend#LifecyclePolicyPreviewInProgressException":
      response = {
        ...(await deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.starport.frontend#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.starport.frontend#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UploadLayerPartCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UploadLayerPartCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UploadLayerPartResponse(data, context);
  const response: UploadLayerPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadLayerPartResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UploadLayerPartCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadLayerPartCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.starport.frontend#InvalidLayerPartException":
      response = {
        ...(await deserializeAws_json1_1InvalidLayerPartExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.starport.frontend#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.starport.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RepositoryNotFoundException":
    case "com.amazonaws.starport.frontend#RepositoryNotFoundException":
      response = {
        ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.starport.frontend#ServerException":
      response = {
        ...(await deserializeAws_json1_1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UploadNotFoundException":
    case "com.amazonaws.starport.frontend#UploadNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1EmptyUploadExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyUploadException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EmptyUploadException(
    body,
    context
  );
  const contents: EmptyUploadException = {
    name: "EmptyUploadException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageAlreadyExistsException(
    body,
    context
  );
  const contents: ImageAlreadyExistsException = {
    name: "ImageAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageNotFoundException(
    body,
    context
  );
  const contents: ImageNotFoundException = {
    name: "ImageNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTagAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTagAlreadyExistsException(
    body,
    context
  );
  const contents: ImageTagAlreadyExistsException = {
    name: "ImageTagAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerException(
    body,
    context
  );
  const contents: InvalidLayerException = {
    name: "InvalidLayerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerPartException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerPartException(
    body,
    context
  );
  const contents: InvalidLayerPartException = {
    name: "InvalidLayerPartException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(
    body,
    context
  );
  const contents: InvalidTagParameterException = {
    name: "InvalidTagParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerAlreadyExistsException(
    body,
    context
  );
  const contents: LayerAlreadyExistsException = {
    name: "LayerAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerInaccessibleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerInaccessibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerInaccessibleException(
    body,
    context
  );
  const contents: LayerInaccessibleException = {
    name: "LayerInaccessibleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerPartTooSmallException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerPartTooSmallException(
    body,
    context
  );
  const contents: LayerPartTooSmallException = {
    name: "LayerPartTooSmallException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayersNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayersNotFoundException(
    body,
    context
  );
  const contents: LayersNotFoundException = {
    name: "LayersNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyNotFoundException(
    body,
    context
  );
  const contents: LifecyclePolicyNotFoundException = {
    name: "LifecyclePolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewInProgressException(
    body,
    context
  );
  const contents: LifecyclePolicyPreviewInProgressException = {
    name: "LifecyclePolicyPreviewInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException(
    body,
    context
  );
  const contents: LifecyclePolicyPreviewNotFoundException = {
    name: "LifecyclePolicyPreviewNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryAlreadyExistsException(
    body,
    context
  );
  const contents: RepositoryAlreadyExistsException = {
    name: "RepositoryAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotEmptyException(
    body,
    context
  );
  const contents: RepositoryNotEmptyException = {
    name: "RepositoryNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotFoundException(
    body,
    context
  );
  const contents: RepositoryNotFoundException = {
    name: "RepositoryNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryPolicyNotFoundException(
    body,
    context
  );
  const contents: RepositoryPolicyNotFoundException = {
    name: "RepositoryPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ScanNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ScanNotFoundException(
    body,
    context
  );
  const contents: ScanNotFoundException = {
    name: "ScanNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerException(
    body,
    context
  );
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UploadNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UploadNotFoundException(
    body,
    context
  );
  const contents: UploadNotFoundException = {
    name: "UploadNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.layerDigests !== undefined) {
    bodyParams[
      "layerDigests"
    ] = serializeAws_json1_1BatchedOperationLayerDigestList(
      input.layerDigests,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchDeleteImageRequest = (
  input: BatchDeleteImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetImageRequest = (
  input: BatchGetImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.acceptedMediaTypes !== undefined) {
    bodyParams["acceptedMediaTypes"] = serializeAws_json1_1MediaTypeList(
      input.acceptedMediaTypes,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchedOperationLayerDigestList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CompleteLayerUploadRequest = (
  input: CompleteLayerUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.layerDigests !== undefined) {
    bodyParams["layerDigests"] = serializeAws_json1_1LayerDigestList(
      input.layerDigests,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.uploadId !== undefined) {
    bodyParams["uploadId"] = input.uploadId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRepositoryRequest = (
  input: CreateRepositoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageScanningConfiguration !== undefined) {
    bodyParams[
      "imageScanningConfiguration"
    ] = serializeAws_json1_1ImageScanningConfiguration(
      input.imageScanningConfiguration,
      context
    );
  }
  if (input.imageTagMutability !== undefined) {
    bodyParams["imageTagMutability"] = input.imageTagMutability;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLifecyclePolicyRequest = (
  input: DeleteLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRepositoryPolicyRequest = (
  input: DeleteRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRepositoryRequest = (
  input: DeleteRepositoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImageScanFindingsRequest = (
  input: DescribeImageScanFindingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageId !== undefined) {
    bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(
      input.imageId,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagesFilter = (
  input: DescribeImagesFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagesRequest = (
  input: DescribeImagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1DescribeImagesFilter(
      input.filter,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeRepositoriesRequest = (
  input: DescribeRepositoriesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryNames !== undefined) {
    bodyParams["repositoryNames"] = serializeAws_json1_1RepositoryNameList(
      input.repositoryNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetAuthorizationTokenRegistryIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetAuthorizationTokenRequest = (
  input: GetAuthorizationTokenRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryIds !== undefined) {
    bodyParams[
      "registryIds"
    ] = serializeAws_json1_1GetAuthorizationTokenRegistryIdList(
      input.registryIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetDownloadUrlForLayerRequest = (
  input: GetDownloadUrlForLayerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.layerDigest !== undefined) {
    bodyParams["layerDigest"] = input.layerDigest;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLifecyclePolicyPreviewRequest = (
  input: GetLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1LifecyclePolicyPreviewFilter(
      input.filter,
      context
    );
  }
  if (input.imageIds !== undefined) {
    bodyParams["imageIds"] = serializeAws_json1_1ImageIdentifierList(
      input.imageIds,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLifecyclePolicyRequest = (
  input: GetLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRepositoryPolicyRequest = (
  input: GetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1ImageIdentifier = (
  input: ImageIdentifier,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageDigest !== undefined) {
    bodyParams["imageDigest"] = input.imageDigest;
  }
  if (input.imageTag !== undefined) {
    bodyParams["imageTag"] = input.imageTag;
  }
  return bodyParams;
};

const serializeAws_json1_1ImageIdentifierList = (
  input: Array<ImageIdentifier>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ImageIdentifier(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ImageScanningConfiguration = (
  input: ImageScanningConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.scanOnPush !== undefined) {
    bodyParams["scanOnPush"] = input.scanOnPush;
  }
  return bodyParams;
};

const serializeAws_json1_1InitiateLayerUploadRequest = (
  input: InitiateLayerUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1LayerDigestList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1LifecyclePolicyPreviewFilter = (
  input: LifecyclePolicyPreviewFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1ListImagesFilter = (
  input: ListImagesFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tagStatus !== undefined) {
    bodyParams["tagStatus"] = input.tagStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1ListImagesRequest = (
  input: ListImagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1ListImagesFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1MediaTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1PutImageRequest = (
  input: PutImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageManifest !== undefined) {
    bodyParams["imageManifest"] = input.imageManifest;
  }
  if (input.imageTag !== undefined) {
    bodyParams["imageTag"] = input.imageTag;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutImageScanningConfigurationRequest = (
  input: PutImageScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageScanningConfiguration !== undefined) {
    bodyParams[
      "imageScanningConfiguration"
    ] = serializeAws_json1_1ImageScanningConfiguration(
      input.imageScanningConfiguration,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutImageTagMutabilityRequest = (
  input: PutImageTagMutabilityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageTagMutability !== undefined) {
    bodyParams["imageTagMutability"] = input.imageTagMutability;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutLifecyclePolicyRequest = (
  input: PutLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.lifecyclePolicyText !== undefined) {
    bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1RepositoryNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SetRepositoryPolicyRequest = (
  input: SetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.policyText !== undefined) {
    bodyParams["policyText"] = input.policyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartImageScanRequest = (
  input: StartImageScanRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageId !== undefined) {
    bodyParams["imageId"] = serializeAws_json1_1ImageIdentifier(
      input.imageId,
      context
    );
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartLifecyclePolicyPreviewRequest = (
  input: StartLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.lifecyclePolicyText !== undefined) {
    bodyParams["lifecyclePolicyText"] = input.lifecyclePolicyText;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UploadLayerPartRequest = (
  input: UploadLayerPartRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.layerPartBlob !== undefined) {
    bodyParams["layerPartBlob"] = context.base64Encoder(input.layerPartBlob);
  }
  if (input.partFirstByte !== undefined) {
    bodyParams["partFirstByte"] = input.partFirstByte;
  }
  if (input.partLastByte !== undefined) {
    bodyParams["partLastByte"] = input.partLastByte;
  }
  if (input.registryId !== undefined) {
    bodyParams["registryId"] = input.registryId;
  }
  if (input.repositoryName !== undefined) {
    bodyParams["repositoryName"] = input.repositoryName;
  }
  if (input.uploadId !== undefined) {
    bodyParams["uploadId"] = input.uploadId;
  }
  return bodyParams;
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1AttributeList = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1AuthorizationData = (
  output: any,
  context: __SerdeContext
): AuthorizationData => {
  let contents: any = {
    __type: "AuthorizationData",
    authorizationToken: undefined,
    expiresAt: undefined,
    proxyEndpoint: undefined
  };
  if (
    output.authorizationToken !== undefined &&
    output.authorizationToken !== null
  ) {
    contents.authorizationToken = output.authorizationToken;
  }
  if (output.expiresAt !== undefined && output.expiresAt !== null) {
    contents.expiresAt = new Date(Math.round(output.expiresAt * 1000));
  }
  if (output.proxyEndpoint !== undefined && output.proxyEndpoint !== null) {
    contents.proxyEndpoint = output.proxyEndpoint;
  }
  return contents;
};

const deserializeAws_json1_1AuthorizationDataList = (
  output: any,
  context: __SerdeContext
): Array<AuthorizationData> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AuthorizationData(entry, context)
  );
};

const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): BatchCheckLayerAvailabilityResponse => {
  let contents: any = {
    __type: "BatchCheckLayerAvailabilityResponse",
    failures: undefined,
    layers: undefined
  };
  if (output.failures !== undefined && output.failures !== null) {
    contents.failures = deserializeAws_json1_1LayerFailureList(
      output.failures,
      context
    );
  }
  if (output.layers !== undefined && output.layers !== null) {
    contents.layers = deserializeAws_json1_1LayerList(output.layers, context);
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteImageResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImageResponse => {
  let contents: any = {
    __type: "BatchDeleteImageResponse",
    failures: undefined,
    imageIds: undefined
  };
  if (output.failures !== undefined && output.failures !== null) {
    contents.failures = deserializeAws_json1_1ImageFailureList(
      output.failures,
      context
    );
  }
  if (output.imageIds !== undefined && output.imageIds !== null) {
    contents.imageIds = deserializeAws_json1_1ImageIdentifierList(
      output.imageIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetImageResponse = (
  output: any,
  context: __SerdeContext
): BatchGetImageResponse => {
  let contents: any = {
    __type: "BatchGetImageResponse",
    failures: undefined,
    images: undefined
  };
  if (output.failures !== undefined && output.failures !== null) {
    contents.failures = deserializeAws_json1_1ImageFailureList(
      output.failures,
      context
    );
  }
  if (output.images !== undefined && output.images !== null) {
    contents.images = deserializeAws_json1_1ImageList(output.images, context);
  }
  return contents;
};

const deserializeAws_json1_1CompleteLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): CompleteLayerUploadResponse => {
  let contents: any = {
    __type: "CompleteLayerUploadResponse",
    layerDigest: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (output.layerDigest !== undefined && output.layerDigest !== null) {
    contents.layerDigest = output.layerDigest;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1CreateRepositoryResponse = (
  output: any,
  context: __SerdeContext
): CreateRepositoryResponse => {
  let contents: any = {
    __type: "CreateRepositoryResponse",
    repository: undefined
  };
  if (output.repository !== undefined && output.repository !== null) {
    contents.repository = deserializeAws_json1_1Repository(
      output.repository,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyResponse => {
  let contents: any = {
    __type: "DeleteLifecyclePolicyResponse",
    lastEvaluatedAt: undefined,
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null) {
    contents.lastEvaluatedAt = new Date(
      Math.round(output.lastEvaluatedAt * 1000)
    );
  }
  if (
    output.lifecyclePolicyText !== undefined &&
    output.lifecyclePolicyText !== null
  ) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryPolicyResponse => {
  let contents: any = {
    __type: "DeleteRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined && output.policyText !== null) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteRepositoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryResponse => {
  let contents: any = {
    __type: "DeleteRepositoryResponse",
    repository: undefined
  };
  if (output.repository !== undefined && output.repository !== null) {
    contents.repository = deserializeAws_json1_1Repository(
      output.repository,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  let contents: any = {
    __type: "DescribeImageScanFindingsResponse",
    imageId: undefined,
    imageScanFindings: undefined,
    imageScanStatus: undefined,
    nextToken: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (
    output.imageScanFindings !== undefined &&
    output.imageScanFindings !== null
  ) {
    contents.imageScanFindings = deserializeAws_json1_1ImageScanFindings(
      output.imageScanFindings,
      context
    );
  }
  if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeImagesResponse = (
  output: any,
  context: __SerdeContext
): DescribeImagesResponse => {
  let contents: any = {
    __type: "DescribeImagesResponse",
    imageDetails: undefined,
    nextToken: undefined
  };
  if (output.imageDetails !== undefined && output.imageDetails !== null) {
    contents.imageDetails = deserializeAws_json1_1ImageDetailList(
      output.imageDetails,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeRepositoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRepositoriesResponse => {
  let contents: any = {
    __type: "DescribeRepositoriesResponse",
    nextToken: undefined,
    repositories: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.repositories !== undefined && output.repositories !== null) {
    contents.repositories = deserializeAws_json1_1RepositoryList(
      output.repositories,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EmptyUploadException = (
  output: any,
  context: __SerdeContext
): EmptyUploadException => {
  let contents: any = {
    __type: "EmptyUploadException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1FindingSeverityCounts = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1GetAuthorizationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetAuthorizationTokenResponse => {
  let contents: any = {
    __type: "GetAuthorizationTokenResponse",
    authorizationData: undefined
  };
  if (
    output.authorizationData !== undefined &&
    output.authorizationData !== null
  ) {
    contents.authorizationData = deserializeAws_json1_1AuthorizationDataList(
      output.authorizationData,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDownloadUrlForLayerResponse = (
  output: any,
  context: __SerdeContext
): GetDownloadUrlForLayerResponse => {
  let contents: any = {
    __type: "GetDownloadUrlForLayerResponse",
    downloadUrl: undefined,
    layerDigest: undefined
  };
  if (output.downloadUrl !== undefined && output.downloadUrl !== null) {
    contents.downloadUrl = output.downloadUrl;
  }
  if (output.layerDigest !== undefined && output.layerDigest !== null) {
    contents.layerDigest = output.layerDigest;
  }
  return contents;
};

const deserializeAws_json1_1GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  let contents: any = {
    __type: "GetLifecyclePolicyPreviewResponse",
    lifecyclePolicyText: undefined,
    nextToken: undefined,
    previewResults: undefined,
    registryId: undefined,
    repositoryName: undefined,
    status: undefined,
    summary: undefined
  };
  if (
    output.lifecyclePolicyText !== undefined &&
    output.lifecyclePolicyText !== null
  ) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.previewResults !== undefined && output.previewResults !== null) {
    contents.previewResults = deserializeAws_json1_1LifecyclePolicyPreviewResultList(
      output.previewResults,
      context
    );
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1LifecyclePolicyPreviewSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyResponse => {
  let contents: any = {
    __type: "GetLifecyclePolicyResponse",
    lastEvaluatedAt: undefined,
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.lastEvaluatedAt !== undefined && output.lastEvaluatedAt !== null) {
    contents.lastEvaluatedAt = new Date(
      Math.round(output.lastEvaluatedAt * 1000)
    );
  }
  if (
    output.lifecyclePolicyText !== undefined &&
    output.lifecyclePolicyText !== null
  ) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1GetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryPolicyResponse => {
  let contents: any = {
    __type: "GetRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined && output.policyText !== null) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1Image = (
  output: any,
  context: __SerdeContext
): Image => {
  let contents: any = {
    __type: "Image",
    imageId: undefined,
    imageManifest: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (output.imageManifest !== undefined && output.imageManifest !== null) {
    contents.imageManifest = output.imageManifest;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1ImageAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageAlreadyExistsException => {
  let contents: any = {
    __type: "ImageAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageDetail = (
  output: any,
  context: __SerdeContext
): ImageDetail => {
  let contents: any = {
    __type: "ImageDetail",
    imageDigest: undefined,
    imagePushedAt: undefined,
    imageScanFindingsSummary: undefined,
    imageScanStatus: undefined,
    imageSizeInBytes: undefined,
    imageTags: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageDigest !== undefined && output.imageDigest !== null) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imagePushedAt !== undefined && output.imagePushedAt !== null) {
    contents.imagePushedAt = new Date(Math.round(output.imagePushedAt * 1000));
  }
  if (
    output.imageScanFindingsSummary !== undefined &&
    output.imageScanFindingsSummary !== null
  ) {
    contents.imageScanFindingsSummary = deserializeAws_json1_1ImageScanFindingsSummary(
      output.imageScanFindingsSummary,
      context
    );
  }
  if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (
    output.imageSizeInBytes !== undefined &&
    output.imageSizeInBytes !== null
  ) {
    contents.imageSizeInBytes = output.imageSizeInBytes;
  }
  if (output.imageTags !== undefined && output.imageTags !== null) {
    contents.imageTags = deserializeAws_json1_1ImageTagList(
      output.imageTags,
      context
    );
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1ImageDetailList = (
  output: any,
  context: __SerdeContext
): Array<ImageDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageDetail(entry, context)
  );
};

const deserializeAws_json1_1ImageFailure = (
  output: any,
  context: __SerdeContext
): ImageFailure => {
  let contents: any = {
    __type: "ImageFailure",
    failureCode: undefined,
    failureReason: undefined,
    imageId: undefined
  };
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageFailureList = (
  output: any,
  context: __SerdeContext
): Array<ImageFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageFailure(entry, context)
  );
};

const deserializeAws_json1_1ImageIdentifier = (
  output: any,
  context: __SerdeContext
): ImageIdentifier => {
  let contents: any = {
    __type: "ImageIdentifier",
    imageDigest: undefined,
    imageTag: undefined
  };
  if (output.imageDigest !== undefined && output.imageDigest !== null) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imageTag !== undefined && output.imageTag !== null) {
    contents.imageTag = output.imageTag;
  }
  return contents;
};

const deserializeAws_json1_1ImageIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<ImageIdentifier> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageIdentifier(entry, context)
  );
};

const deserializeAws_json1_1ImageList = (
  output: any,
  context: __SerdeContext
): Array<Image> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Image(entry, context)
  );
};

const deserializeAws_json1_1ImageNotFoundException = (
  output: any,
  context: __SerdeContext
): ImageNotFoundException => {
  let contents: any = {
    __type: "ImageNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFinding = (
  output: any,
  context: __SerdeContext
): ImageScanFinding => {
  let contents: any = {
    __type: "ImageScanFinding",
    attributes: undefined,
    description: undefined,
    name: undefined,
    severity: undefined,
    uri: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_json1_1AttributeList(
      output.attributes,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.severity !== undefined && output.severity !== null) {
    contents.severity = output.severity;
  }
  if (output.uri !== undefined && output.uri !== null) {
    contents.uri = output.uri;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFindingList = (
  output: any,
  context: __SerdeContext
): Array<ImageScanFinding> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageScanFinding(entry, context)
  );
};

const deserializeAws_json1_1ImageScanFindings = (
  output: any,
  context: __SerdeContext
): ImageScanFindings => {
  let contents: any = {
    __type: "ImageScanFindings",
    findingSeverityCounts: undefined,
    findings: undefined,
    imageScanCompletedAt: undefined,
    vulnerabilitySourceUpdatedAt: undefined
  };
  if (
    output.findingSeverityCounts !== undefined &&
    output.findingSeverityCounts !== null
  ) {
    contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(
      output.findingSeverityCounts,
      context
    );
  }
  if (output.findings !== undefined && output.findings !== null) {
    contents.findings = deserializeAws_json1_1ImageScanFindingList(
      output.findings,
      context
    );
  }
  if (
    output.imageScanCompletedAt !== undefined &&
    output.imageScanCompletedAt !== null
  ) {
    contents.imageScanCompletedAt = new Date(
      Math.round(output.imageScanCompletedAt * 1000)
    );
  }
  if (
    output.vulnerabilitySourceUpdatedAt !== undefined &&
    output.vulnerabilitySourceUpdatedAt !== null
  ) {
    contents.vulnerabilitySourceUpdatedAt = new Date(
      Math.round(output.vulnerabilitySourceUpdatedAt * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageScanFindingsSummary = (
  output: any,
  context: __SerdeContext
): ImageScanFindingsSummary => {
  let contents: any = {
    __type: "ImageScanFindingsSummary",
    findingSeverityCounts: undefined,
    imageScanCompletedAt: undefined,
    vulnerabilitySourceUpdatedAt: undefined
  };
  if (
    output.findingSeverityCounts !== undefined &&
    output.findingSeverityCounts !== null
  ) {
    contents.findingSeverityCounts = deserializeAws_json1_1FindingSeverityCounts(
      output.findingSeverityCounts,
      context
    );
  }
  if (
    output.imageScanCompletedAt !== undefined &&
    output.imageScanCompletedAt !== null
  ) {
    contents.imageScanCompletedAt = new Date(
      Math.round(output.imageScanCompletedAt * 1000)
    );
  }
  if (
    output.vulnerabilitySourceUpdatedAt !== undefined &&
    output.vulnerabilitySourceUpdatedAt !== null
  ) {
    contents.vulnerabilitySourceUpdatedAt = new Date(
      Math.round(output.vulnerabilitySourceUpdatedAt * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageScanStatus = (
  output: any,
  context: __SerdeContext
): ImageScanStatus => {
  let contents: any = {
    __type: "ImageScanStatus",
    description: undefined,
    status: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1ImageScanningConfiguration = (
  output: any,
  context: __SerdeContext
): ImageScanningConfiguration => {
  let contents: any = {
    __type: "ImageScanningConfiguration",
    scanOnPush: undefined
  };
  if (output.scanOnPush !== undefined && output.scanOnPush !== null) {
    contents.scanOnPush = output.scanOnPush;
  }
  return contents;
};

const deserializeAws_json1_1ImageTagAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageTagAlreadyExistsException => {
  let contents: any = {
    __type: "ImageTagAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImageTagList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InitiateLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): InitiateLayerUploadResponse => {
  let contents: any = {
    __type: "InitiateLayerUploadResponse",
    partSize: undefined,
    uploadId: undefined
  };
  if (output.partSize !== undefined && output.partSize !== null) {
    contents.partSize = output.partSize;
  }
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLayerException = (
  output: any,
  context: __SerdeContext
): InvalidLayerException => {
  let contents: any = {
    __type: "InvalidLayerException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLayerPartException = (
  output: any,
  context: __SerdeContext
): InvalidLayerPartException => {
  let contents: any = {
    __type: "InvalidLayerPartException",
    lastValidByteReceived: undefined,
    message: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (
    output.lastValidByteReceived !== undefined &&
    output.lastValidByteReceived !== null
  ) {
    contents.lastValidByteReceived = output.lastValidByteReceived;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  let contents: any = {
    __type: "InvalidTagParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Layer = (
  output: any,
  context: __SerdeContext
): Layer => {
  let contents: any = {
    __type: "Layer",
    layerAvailability: undefined,
    layerDigest: undefined,
    layerSize: undefined,
    mediaType: undefined
  };
  if (
    output.layerAvailability !== undefined &&
    output.layerAvailability !== null
  ) {
    contents.layerAvailability = output.layerAvailability;
  }
  if (output.layerDigest !== undefined && output.layerDigest !== null) {
    contents.layerDigest = output.layerDigest;
  }
  if (output.layerSize !== undefined && output.layerSize !== null) {
    contents.layerSize = output.layerSize;
  }
  if (output.mediaType !== undefined && output.mediaType !== null) {
    contents.mediaType = output.mediaType;
  }
  return contents;
};

const deserializeAws_json1_1LayerAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): LayerAlreadyExistsException => {
  let contents: any = {
    __type: "LayerAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayerFailure = (
  output: any,
  context: __SerdeContext
): LayerFailure => {
  let contents: any = {
    __type: "LayerFailure",
    failureCode: undefined,
    failureReason: undefined,
    layerDigest: undefined
  };
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.layerDigest !== undefined && output.layerDigest !== null) {
    contents.layerDigest = output.layerDigest;
  }
  return contents;
};

const deserializeAws_json1_1LayerFailureList = (
  output: any,
  context: __SerdeContext
): Array<LayerFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LayerFailure(entry, context)
  );
};

const deserializeAws_json1_1LayerInaccessibleException = (
  output: any,
  context: __SerdeContext
): LayerInaccessibleException => {
  let contents: any = {
    __type: "LayerInaccessibleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayerList = (
  output: any,
  context: __SerdeContext
): Array<Layer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Layer(entry, context)
  );
};

const deserializeAws_json1_1LayerPartTooSmallException = (
  output: any,
  context: __SerdeContext
): LayerPartTooSmallException => {
  let contents: any = {
    __type: "LayerPartTooSmallException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LayersNotFoundException = (
  output: any,
  context: __SerdeContext
): LayersNotFoundException => {
  let contents: any = {
    __type: "LayersNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyNotFoundException => {
  let contents: any = {
    __type: "LifecyclePolicyNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewInProgressException => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewInProgressException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewNotFoundException => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResult = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewResult",
    action: undefined,
    appliedRulePriority: undefined,
    imageDigest: undefined,
    imagePushedAt: undefined,
    imageTags: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_json1_1LifecyclePolicyRuleAction(
      output.action,
      context
    );
  }
  if (
    output.appliedRulePriority !== undefined &&
    output.appliedRulePriority !== null
  ) {
    contents.appliedRulePriority = output.appliedRulePriority;
  }
  if (output.imageDigest !== undefined && output.imageDigest !== null) {
    contents.imageDigest = output.imageDigest;
  }
  if (output.imagePushedAt !== undefined && output.imagePushedAt !== null) {
    contents.imagePushedAt = new Date(Math.round(output.imagePushedAt * 1000));
  }
  if (output.imageTags !== undefined && output.imageTags !== null) {
    contents.imageTags = deserializeAws_json1_1ImageTagList(
      output.imageTags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResultList = (
  output: any,
  context: __SerdeContext
): Array<LifecyclePolicyPreviewResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LifecyclePolicyPreviewResult(entry, context)
  );
};

const deserializeAws_json1_1LifecyclePolicyPreviewSummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewSummary => {
  let contents: any = {
    __type: "LifecyclePolicyPreviewSummary",
    expiringImageTotalCount: undefined
  };
  if (
    output.expiringImageTotalCount !== undefined &&
    output.expiringImageTotalCount !== null
  ) {
    contents.expiringImageTotalCount = output.expiringImageTotalCount;
  }
  return contents;
};

const deserializeAws_json1_1LifecyclePolicyRuleAction = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyRuleAction => {
  let contents: any = {
    __type: "LifecyclePolicyRuleAction",
    type: undefined
  };
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListImagesResponse = (
  output: any,
  context: __SerdeContext
): ListImagesResponse => {
  let contents: any = {
    __type: "ListImagesResponse",
    imageIds: undefined,
    nextToken: undefined
  };
  if (output.imageIds !== undefined && output.imageIds !== null) {
    contents.imageIds = deserializeAws_json1_1ImageIdentifierList(
      output.imageIds,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1PutImageResponse = (
  output: any,
  context: __SerdeContext
): PutImageResponse => {
  let contents: any = {
    __type: "PutImageResponse",
    image: undefined
  };
  if (output.image !== undefined && output.image !== null) {
    contents.image = deserializeAws_json1_1Image(output.image, context);
  }
  return contents;
};

const deserializeAws_json1_1PutImageScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutImageScanningConfigurationResponse => {
  let contents: any = {
    __type: "PutImageScanningConfigurationResponse",
    imageScanningConfiguration: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (
    output.imageScanningConfiguration !== undefined &&
    output.imageScanningConfiguration !== null
  ) {
    contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(
      output.imageScanningConfiguration,
      context
    );
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1PutImageTagMutabilityResponse = (
  output: any,
  context: __SerdeContext
): PutImageTagMutabilityResponse => {
  let contents: any = {
    __type: "PutImageTagMutabilityResponse",
    imageTagMutability: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (
    output.imageTagMutability !== undefined &&
    output.imageTagMutability !== null
  ) {
    contents.imageTagMutability = output.imageTagMutability;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1PutLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyResponse => {
  let contents: any = {
    __type: "PutLifecyclePolicyResponse",
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (
    output.lifecyclePolicyText !== undefined &&
    output.lifecyclePolicyText !== null
  ) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1Repository = (
  output: any,
  context: __SerdeContext
): Repository => {
  let contents: any = {
    __type: "Repository",
    createdAt: undefined,
    imageScanningConfiguration: undefined,
    imageTagMutability: undefined,
    registryId: undefined,
    repositoryArn: undefined,
    repositoryName: undefined,
    repositoryUri: undefined
  };
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (
    output.imageScanningConfiguration !== undefined &&
    output.imageScanningConfiguration !== null
  ) {
    contents.imageScanningConfiguration = deserializeAws_json1_1ImageScanningConfiguration(
      output.imageScanningConfiguration,
      context
    );
  }
  if (
    output.imageTagMutability !== undefined &&
    output.imageTagMutability !== null
  ) {
    contents.imageTagMutability = output.imageTagMutability;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryArn !== undefined && output.repositoryArn !== null) {
    contents.repositoryArn = output.repositoryArn;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.repositoryUri !== undefined && output.repositoryUri !== null) {
    contents.repositoryUri = output.repositoryUri;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryAlreadyExistsException => {
  let contents: any = {
    __type: "RepositoryAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryList = (
  output: any,
  context: __SerdeContext
): Array<Repository> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Repository(entry, context)
  );
};

const deserializeAws_json1_1RepositoryNotEmptyException = (
  output: any,
  context: __SerdeContext
): RepositoryNotEmptyException => {
  let contents: any = {
    __type: "RepositoryNotEmptyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryNotFoundException => {
  let contents: any = {
    __type: "RepositoryNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryPolicyNotFoundException => {
  let contents: any = {
    __type: "RepositoryPolicyNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ScanNotFoundException = (
  output: any,
  context: __SerdeContext
): ScanNotFoundException => {
  let contents: any = {
    __type: "ScanNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServerException = (
  output: any,
  context: __SerdeContext
): ServerException => {
  let contents: any = {
    __type: "ServerException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): SetRepositoryPolicyResponse => {
  let contents: any = {
    __type: "SetRepositoryPolicyResponse",
    policyText: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.policyText !== undefined && output.policyText !== null) {
    contents.policyText = output.policyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1StartImageScanResponse = (
  output: any,
  context: __SerdeContext
): StartImageScanResponse => {
  let contents: any = {
    __type: "StartImageScanResponse",
    imageId: undefined,
    imageScanStatus: undefined,
    registryId: undefined,
    repositoryName: undefined
  };
  if (output.imageId !== undefined && output.imageId !== null) {
    contents.imageId = deserializeAws_json1_1ImageIdentifier(
      output.imageId,
      context
    );
  }
  if (output.imageScanStatus !== undefined && output.imageScanStatus !== null) {
    contents.imageScanStatus = deserializeAws_json1_1ImageScanStatus(
      output.imageScanStatus,
      context
    );
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  return contents;
};

const deserializeAws_json1_1StartLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): StartLifecyclePolicyPreviewResponse => {
  let contents: any = {
    __type: "StartLifecyclePolicyPreviewResponse",
    lifecyclePolicyText: undefined,
    registryId: undefined,
    repositoryName: undefined,
    status: undefined
  };
  if (
    output.lifecyclePolicyText !== undefined &&
    output.lifecyclePolicyText !== null
  ) {
    contents.lifecyclePolicyText = output.lifecyclePolicyText;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UploadLayerPartResponse = (
  output: any,
  context: __SerdeContext
): UploadLayerPartResponse => {
  let contents: any = {
    __type: "UploadLayerPartResponse",
    lastByteReceived: undefined,
    registryId: undefined,
    repositoryName: undefined,
    uploadId: undefined
  };
  if (
    output.lastByteReceived !== undefined &&
    output.lastByteReceived !== null
  ) {
    contents.lastByteReceived = output.lastByteReceived;
  }
  if (output.registryId !== undefined && output.registryId !== null) {
    contents.registryId = output.registryId;
  }
  if (output.repositoryName !== undefined && output.repositoryName !== null) {
    contents.repositoryName = output.repositoryName;
  }
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1UploadNotFoundException = (
  output: any,
  context: __SerdeContext
): UploadNotFoundException => {
  let contents: any = {
    __type: "UploadNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
