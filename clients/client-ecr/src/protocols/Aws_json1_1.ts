// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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
import { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "../commands/BatchGetImageCommand";
import {
  BatchGetRepositoryScanningConfigurationCommandInput,
  BatchGetRepositoryScanningConfigurationCommandOutput,
} from "../commands/BatchGetRepositoryScanningConfigurationCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "../commands/CompleteLayerUploadCommand";
import {
  CreatePullThroughCacheRuleCommandInput,
  CreatePullThroughCacheRuleCommandOutput,
} from "../commands/CreatePullThroughCacheRuleCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import {
  DeletePullThroughCacheRuleCommandInput,
  DeletePullThroughCacheRuleCommandOutput,
} from "../commands/DeletePullThroughCacheRuleCommand";
import {
  DeleteRegistryPolicyCommandInput,
  DeleteRegistryPolicyCommandOutput,
} from "../commands/DeleteRegistryPolicyCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "../commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
} from "../commands/DescribeImageReplicationStatusCommand";
import {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "../commands/DescribeImageScanFindingsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import {
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "../commands/DescribePullThroughCacheRulesCommand";
import { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "../commands/DescribeRegistryCommand";
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
import { GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput } from "../commands/GetRegistryPolicyCommand";
import {
  GetRegistryScanningConfigurationCommandInput,
  GetRegistryScanningConfigurationCommandOutput,
} from "../commands/GetRegistryScanningConfigurationCommand";
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
import { PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput } from "../commands/PutRegistryPolicyCommand";
import {
  PutRegistryScanningConfigurationCommandInput,
  PutRegistryScanningConfigurationCommandOutput,
} from "../commands/PutRegistryScanningConfigurationCommand";
import {
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
} from "../commands/PutReplicationConfigurationCommand";
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
import { ECRServiceException as __BaseException } from "../models/ECRServiceException";
import {
  Attribute,
  AuthorizationData,
  AwsEcrContainerImageDetails,
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchDeleteImageRequest,
  BatchDeleteImageResponse,
  BatchGetImageRequest,
  BatchGetImageResponse,
  BatchGetRepositoryScanningConfigurationRequest,
  BatchGetRepositoryScanningConfigurationResponse,
  CompleteLayerUploadRequest,
  CompleteLayerUploadResponse,
  CreatePullThroughCacheRuleRequest,
  CreatePullThroughCacheRuleResponse,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  CvssScore,
  CvssScoreAdjustment,
  CvssScoreDetails,
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeletePullThroughCacheRuleRequest,
  DeletePullThroughCacheRuleResponse,
  DeleteRegistryPolicyRequest,
  DeleteRegistryPolicyResponse,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImageReplicationStatusRequest,
  DescribeImageReplicationStatusResponse,
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsResponse,
  DescribeImagesFilter,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribePullThroughCacheRulesRequest,
  DescribePullThroughCacheRulesResponse,
  DescribeRegistryRequest,
  DescribeRegistryResponse,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  EncryptionConfiguration,
  EnhancedImageScanFinding,
  FindingSeverity,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetDownloadUrlForLayerRequest,
  GetDownloadUrlForLayerResponse,
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetRegistryPolicyRequest,
  GetRegistryPolicyResponse,
  GetRegistryScanningConfigurationRequest,
  GetRegistryScanningConfigurationResponse,
  GetRepositoryPolicyRequest,
  GetRepositoryPolicyResponse,
  Image,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageDigestDoesNotMatchException,
  ImageFailure,
  ImageIdentifier,
  ImageNotFoundException,
  ImageReplicationStatus,
  ImageScanFinding,
  ImageScanFindings,
  ImageScanFindingsSummary,
  ImageScanningConfiguration,
  ImageScanStatus,
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
  PackageVulnerabilityDetails,
  PullThroughCacheRule,
  PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleNotFoundException,
  PutImageRequest,
  PutImageResponse,
  PutImageScanningConfigurationRequest,
  PutImageScanningConfigurationResponse,
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityResponse,
  PutLifecyclePolicyRequest,
  PutLifecyclePolicyResponse,
  PutRegistryPolicyRequest,
  PutRegistryPolicyResponse,
  PutRegistryScanningConfigurationRequest,
  PutRegistryScanningConfigurationResponse,
  PutReplicationConfigurationRequest,
  PutReplicationConfigurationResponse,
  Recommendation,
  ReferencedImagesNotFoundException,
  RegistryPolicyNotFoundException,
  RegistryScanningConfiguration,
  RegistryScanningRule,
  Remediation,
  ReplicationConfiguration,
  ReplicationDestination,
  ReplicationRule,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryFilter,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  RepositoryScanningConfiguration,
  RepositoryScanningConfigurationFailure,
  Resource,
  ResourceDetails,
  ScanningRepositoryFilter,
  ScanNotFoundException,
  ScoreDetails,
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
  UnsupportedUpstreamRegistryException,
  UntagResourceRequest,
  UntagResourceResponse,
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadNotFoundException,
  ValidationException,
  VulnerablePackage,
} from "../models/models_0";

export const serializeAws_json1_1BatchCheckLayerAvailabilityCommand = async (
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability",
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
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.BatchGetImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetRepositoryScanningConfigurationCommand = async (
  input: BatchGetRepositoryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetRepositoryScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CompleteLayerUploadCommand = async (
  input: CompleteLayerUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CompleteLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePullThroughCacheRuleCommand = async (
  input: CreatePullThroughCacheRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePullThroughCacheRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.CreateRepository",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePullThroughCacheRuleCommand = async (
  input: DeletePullThroughCacheRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePullThroughCacheRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegistryPolicyCommand = async (
  input: DeleteRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegistryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DeleteRepository",
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
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImageReplicationStatusCommand = async (
  input: DescribeImageReplicationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImageReplicationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribeImages",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImageScanFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePullThroughCacheRulesCommand = async (
  input: DescribePullThroughCacheRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePullThroughCacheRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRegistryCommand = async (
  input: DescribeRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribeRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRegistryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRepositoriesCommand = async (
  input: DescribeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories",
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
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLifecyclePolicyPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegistryPolicyCommand = async (
  input: GetRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegistryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegistryScanningConfigurationCommand = async (
  input: GetRegistryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegistryScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRepositoryPolicyCommand = async (
  input: GetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy",
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
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.ListImages",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutImage",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRegistryPolicyCommand = async (
  input: PutRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRegistryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRegistryScanningConfigurationCommand = async (
  input: PutRegistryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRegistryScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutReplicationConfigurationCommand = async (
  input: PutReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetRepositoryPolicyCommand = async (
  input: SetRepositoryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.StartImageScan",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.TagResource",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.UntagResource",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart",
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetRepositoryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetRepositoryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetRepositoryScanningConfigurationResponse(data, context);
  const response: BatchGetRepositoryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetRepositoryScanningConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoryScanningConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EmptyUploadException":
    case "com.amazonaws.ecr#EmptyUploadException":
      throw await deserializeAws_json1_1EmptyUploadExceptionResponse(parsedOutput, context);
    case "InvalidLayerException":
    case "com.amazonaws.ecr#InvalidLayerException":
      throw await deserializeAws_json1_1InvalidLayerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "LayerAlreadyExistsException":
    case "com.amazonaws.ecr#LayerAlreadyExistsException":
      throw await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(parsedOutput, context);
    case "LayerPartTooSmallException":
    case "com.amazonaws.ecr#LayerPartTooSmallException":
      throw await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
      throw await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePullThroughCacheRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullThroughCacheRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePullThroughCacheRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePullThroughCacheRuleResponse(data, context);
  const response: CreatePullThroughCacheRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePullThroughCacheRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullThroughCacheRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "PullThroughCacheRuleAlreadyExistsException":
    case "com.amazonaws.ecr#PullThroughCacheRuleAlreadyExistsException":
      throw await deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "UnsupportedUpstreamRegistryException":
    case "com.amazonaws.ecr#UnsupportedUpstreamRegistryException":
      throw await deserializeAws_json1_1UnsupportedUpstreamRegistryExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.ecr#RepositoryAlreadyExistsException":
      throw await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePullThroughCacheRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullThroughCacheRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePullThroughCacheRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePullThroughCacheRuleResponse(data, context);
  const response: DeletePullThroughCacheRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePullThroughCacheRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullThroughCacheRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PullThroughCacheRuleNotFoundException":
    case "com.amazonaws.ecr#PullThroughCacheRuleNotFoundException":
      throw await deserializeAws_json1_1PullThroughCacheRuleNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegistryPolicyResponse(data, context);
  const response: DeleteRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegistryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RegistryPolicyNotFoundException":
    case "com.amazonaws.ecr#RegistryPolicyNotFoundException":
      throw await deserializeAws_json1_1RegistryPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "RepositoryNotEmptyException":
    case "com.amazonaws.ecr#RepositoryNotEmptyException":
      throw await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      throw await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeImageReplicationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageReplicationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImageReplicationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageReplicationStatusResponse(data, context);
  const response: DescribeImageReplicationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImageReplicationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageReplicationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      throw await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      throw await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      throw await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ScanNotFoundException":
    case "com.amazonaws.ecr#ScanNotFoundException":
      throw await deserializeAws_json1_1ScanNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePullThroughCacheRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullThroughCacheRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePullThroughCacheRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePullThroughCacheRulesResponse(data, context);
  const response: DescribePullThroughCacheRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePullThroughCacheRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullThroughCacheRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PullThroughCacheRuleNotFoundException":
    case "com.amazonaws.ecr#PullThroughCacheRuleNotFoundException":
      throw await deserializeAws_json1_1PullThroughCacheRuleNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRegistryResponse(data, context);
  const response: DescribeRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LayerInaccessibleException":
    case "com.amazonaws.ecr#LayerInaccessibleException":
      throw await deserializeAws_json1_1LayerInaccessibleExceptionResponse(parsedOutput, context);
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      throw await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LifecyclePolicyPreviewNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewNotFoundException":
      throw await deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegistryPolicyResponse(data, context);
  const response: GetRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegistryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RegistryPolicyNotFoundException":
    case "com.amazonaws.ecr#RegistryPolicyNotFoundException":
      throw await deserializeAws_json1_1RegistryPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRegistryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegistryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegistryScanningConfigurationResponse(data, context);
  const response: GetRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegistryScanningConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryScanningConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      throw await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageAlreadyExistsException":
    case "com.amazonaws.ecr#ImageAlreadyExistsException":
      throw await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ImageDigestDoesNotMatchException":
    case "com.amazonaws.ecr#ImageDigestDoesNotMatchException":
      throw await deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse(parsedOutput, context);
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.ecr#ImageTagAlreadyExistsException":
      throw await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      throw await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ReferencedImagesNotFoundException":
    case "com.amazonaws.ecr#ReferencedImagesNotFoundException":
      throw await deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRegistryPolicyResponse(data, context);
  const response: PutRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRegistryPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRegistryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRegistryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRegistryScanningConfigurationResponse(data, context);
  const response: PutRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRegistryScanningConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryScanningConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutReplicationConfigurationResponse(data, context);
  const response: PutReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImageNotFoundException":
    case "com.amazonaws.ecr#ImageNotFoundException":
      throw await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "UnsupportedImageTypeException":
    case "com.amazonaws.ecr#UnsupportedImageTypeException":
      throw await deserializeAws_json1_1UnsupportedImageTypeExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "LifecyclePolicyPreviewInProgressException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewInProgressException":
      throw await deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
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
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
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
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidLayerPartException":
    case "com.amazonaws.ecr#InvalidLayerPartException":
      throw await deserializeAws_json1_1InvalidLayerPartExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
      throw await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1EmptyUploadExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyUploadException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EmptyUploadException(body, context);
  const exception = new EmptyUploadException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageAlreadyExistsException(body, context);
  const exception = new ImageAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageDigestDoesNotMatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageDigestDoesNotMatchException(body, context);
  const exception = new ImageDigestDoesNotMatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageNotFoundException(body, context);
  const exception = new ImageNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImageTagAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ImageTagAlreadyExistsException(body, context);
  const exception = new ImageTagAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidLayerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerException(body, context);
  const exception = new InvalidLayerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLayerPartException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLayerPartException(body, context);
  const exception = new InvalidLayerPartException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(body, context);
  const exception = new InvalidTagParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KmsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsException(body, context);
  const exception = new KmsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerAlreadyExistsException(body, context);
  const exception = new LayerAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LayerInaccessibleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerInaccessibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerInaccessibleException(body, context);
  const exception = new LayerInaccessibleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerPartTooSmallException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayerPartTooSmallException(body, context);
  const exception = new LayerPartTooSmallException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayersNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LayersNotFoundException(body, context);
  const exception = new LayersNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LifecyclePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyNotFoundException(body, context);
  const exception = new LifecyclePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewInProgressException(body, context);
  const exception = new LifecyclePolicyPreviewInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException(body, context);
  const exception = new LifecyclePolicyPreviewNotFoundException({
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

const deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullThroughCacheRuleAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsException(body, context);
  const exception = new PullThroughCacheRuleAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PullThroughCacheRuleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullThroughCacheRuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PullThroughCacheRuleNotFoundException(body, context);
  const exception = new PullThroughCacheRuleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferencedImagesNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReferencedImagesNotFoundException(body, context);
  const exception = new ReferencedImagesNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RegistryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegistryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RegistryPolicyNotFoundException(body, context);
  const exception = new RegistryPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryAlreadyExistsException(body, context);
  const exception = new RepositoryAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotEmptyException(body, context);
  const exception = new RepositoryNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryNotFoundException(body, context);
  const exception = new RepositoryNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RepositoryPolicyNotFoundException(body, context);
  const exception = new RepositoryPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ScanNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ScanNotFoundException(body, context);
  const exception = new ScanNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerException(body, context);
  const exception = new ServerException({
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

const deserializeAws_json1_1UnsupportedImageTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedImageTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedImageTypeException(body, context);
  const exception = new UnsupportedImageTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedUpstreamRegistryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUpstreamRegistryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedUpstreamRegistryException(body, context);
  const exception = new UnsupportedUpstreamRegistryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UploadNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UploadNotFoundException(body, context);
  const exception = new UploadNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (
  input: BatchCheckLayerAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests != null && {
      layerDigests: serializeAws_json1_1BatchedOperationLayerDigestList(input.layerDigests, context),
    }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchDeleteImageRequest = (input: BatchDeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageIds != null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchedOperationLayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BatchGetImageRequest = (input: BatchGetImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.acceptedMediaTypes != null && {
      acceptedMediaTypes: serializeAws_json1_1MediaTypeList(input.acceptedMediaTypes, context),
    }),
    ...(input.imageIds != null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1BatchGetRepositoryScanningConfigurationRequest = (
  input: BatchGetRepositoryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryNames != null && {
      repositoryNames: serializeAws_json1_1ScanningConfigurationRepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1CompleteLayerUploadRequest = (
  input: CompleteLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigests != null && {
      layerDigests: serializeAws_json1_1LayerDigestList(input.layerDigests, context),
    }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  };
};

const serializeAws_json1_1CreatePullThroughCacheRuleRequest = (
  input: CreatePullThroughCacheRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefix != null && { ecrRepositoryPrefix: input.ecrRepositoryPrefix }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.upstreamRegistryUrl != null && { upstreamRegistryUrl: input.upstreamRegistryUrl }),
  };
};

const serializeAws_json1_1CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.encryptionConfiguration != null && {
      encryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.encryptionConfiguration, context),
    }),
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: serializeAws_json1_1ImageScanningConfiguration(
        input.imageScanningConfiguration,
        context
      ),
    }),
    ...(input.imageTagMutability != null && { imageTagMutability: input.imageTagMutability }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1DeleteLifecyclePolicyRequest = (
  input: DeleteLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeletePullThroughCacheRuleRequest = (
  input: DeletePullThroughCacheRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefix != null && { ecrRepositoryPrefix: input.ecrRepositoryPrefix }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

const serializeAws_json1_1DeleteRegistryPolicyRequest = (
  input: DeleteRegistryPolicyRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteRepositoryPolicyRequest = (
  input: DeleteRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DeleteRepositoryRequest = (input: DeleteRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImageReplicationStatusRequest = (
  input: DescribeImageReplicationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageId != null && { imageId: serializeAws_json1_1ImageIdentifier(input.imageId, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImageScanFindingsRequest = (
  input: DescribeImageScanFindingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageId != null && { imageId: serializeAws_json1_1ImageIdentifier(input.imageId, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribeImagesFilter = (input: DescribeImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1DescribeImagesFilter(input.filter, context) }),
    ...(input.imageIds != null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1DescribePullThroughCacheRulesRequest = (
  input: DescribePullThroughCacheRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefixes != null && {
      ecrRepositoryPrefixes: serializeAws_json1_1PullThroughCacheRuleRepositoryPrefixList(
        input.ecrRepositoryPrefixes,
        context
      ),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

const serializeAws_json1_1DescribeRegistryRequest = (input: DescribeRegistryRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1DescribeRepositoriesRequest = (
  input: DescribeRepositoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryNames != null && {
      repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
    }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
    ...(input.kmsKey != null && { kmsKey: input.kmsKey }),
  };
};

const serializeAws_json1_1GetAuthorizationTokenRegistryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetAuthorizationTokenRequest = (
  input: GetAuthorizationTokenRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryIds != null && {
      registryIds: serializeAws_json1_1GetAuthorizationTokenRegistryIdList(input.registryIds, context),
    }),
  };
};

const serializeAws_json1_1GetDownloadUrlForLayerRequest = (
  input: GetDownloadUrlForLayerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.layerDigest != null && { layerDigest: input.layerDigest }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetLifecyclePolicyPreviewRequest = (
  input: GetLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1LifecyclePolicyPreviewFilter(input.filter, context) }),
    ...(input.imageIds != null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetLifecyclePolicyRequest = (
  input: GetLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1GetRegistryPolicyRequest = (
  input: GetRegistryPolicyRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetRegistryScanningConfigurationRequest = (
  input: GetRegistryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetRepositoryPolicyRequest = (
  input: GetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ImageIdentifier = (input: ImageIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.imageTag != null && { imageTag: input.imageTag }),
  };
};

const serializeAws_json1_1ImageIdentifierList = (input: ImageIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ImageIdentifier(entry, context);
    });
};

const serializeAws_json1_1ImageScanningConfiguration = (
  input: ImageScanningConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.scanOnPush != null && { scanOnPush: input.scanOnPush }),
  };
};

const serializeAws_json1_1InitiateLayerUploadRequest = (
  input: InitiateLayerUploadRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1LayerDigestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LifecyclePolicyPreviewFilter = (
  input: LifecyclePolicyPreviewFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1ListImagesFilter = (input: ListImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

const serializeAws_json1_1ListImagesRequest = (input: ListImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1ListImagesFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1MediaTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PullThroughCacheRuleRepositoryPrefixList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutImageRequest = (input: PutImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.imageManifest != null && { imageManifest: input.imageManifest }),
    ...(input.imageManifestMediaType != null && { imageManifestMediaType: input.imageManifestMediaType }),
    ...(input.imageTag != null && { imageTag: input.imageTag }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutImageScanningConfigurationRequest = (
  input: PutImageScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: serializeAws_json1_1ImageScanningConfiguration(
        input.imageScanningConfiguration,
        context
      ),
    }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutImageTagMutabilityRequest = (
  input: PutImageTagMutabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageTagMutability != null && { imageTagMutability: input.imageTagMutability }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutLifecyclePolicyRequest = (
  input: PutLifecyclePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.lifecyclePolicyText != null && { lifecyclePolicyText: input.lifecyclePolicyText }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1PutRegistryPolicyRequest = (
  input: PutRegistryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policyText != null && { policyText: input.policyText }),
  };
};

const serializeAws_json1_1PutRegistryScanningConfigurationRequest = (
  input: PutRegistryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.rules != null && { rules: serializeAws_json1_1RegistryScanningRuleList(input.rules, context) }),
    ...(input.scanType != null && { scanType: input.scanType }),
  };
};

const serializeAws_json1_1PutReplicationConfigurationRequest = (
  input: PutReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.replicationConfiguration != null && {
      replicationConfiguration: serializeAws_json1_1ReplicationConfiguration(input.replicationConfiguration, context),
    }),
  };
};

const serializeAws_json1_1RegistryScanningRule = (input: RegistryScanningRule, context: __SerdeContext): any => {
  return {
    ...(input.repositoryFilters != null && {
      repositoryFilters: serializeAws_json1_1ScanningRepositoryFilterList(input.repositoryFilters, context),
    }),
    ...(input.scanFrequency != null && { scanFrequency: input.scanFrequency }),
  };
};

const serializeAws_json1_1RegistryScanningRuleList = (input: RegistryScanningRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RegistryScanningRule(entry, context);
    });
};

const serializeAws_json1_1ReplicationConfiguration = (
  input: ReplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.rules != null && { rules: serializeAws_json1_1ReplicationRuleList(input.rules, context) }),
  };
};

const serializeAws_json1_1ReplicationDestination = (input: ReplicationDestination, context: __SerdeContext): any => {
  return {
    ...(input.region != null && { region: input.region }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

const serializeAws_json1_1ReplicationDestinationList = (
  input: ReplicationDestination[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ReplicationDestination(entry, context);
    });
};

const serializeAws_json1_1ReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  return {
    ...(input.destinations != null && {
      destinations: serializeAws_json1_1ReplicationDestinationList(input.destinations, context),
    }),
    ...(input.repositoryFilters != null && {
      repositoryFilters: serializeAws_json1_1RepositoryFilterList(input.repositoryFilters, context),
    }),
  };
};

const serializeAws_json1_1ReplicationRuleList = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ReplicationRule(entry, context);
    });
};

const serializeAws_json1_1RepositoryFilter = (input: RepositoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.filterType != null && { filterType: input.filterType }),
  };
};

const serializeAws_json1_1RepositoryFilterList = (input: RepositoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RepositoryFilter(entry, context);
    });
};

const serializeAws_json1_1RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ScanningConfigurationRepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ScanningRepositoryFilter = (
  input: ScanningRepositoryFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.filterType != null && { filterType: input.filterType }),
  };
};

const serializeAws_json1_1ScanningRepositoryFilterList = (
  input: ScanningRepositoryFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ScanningRepositoryFilter(entry, context);
    });
};

const serializeAws_json1_1SetRepositoryPolicyRequest = (
  input: SetRepositoryPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.policyText != null && { policyText: input.policyText }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1StartImageScanRequest = (input: StartImageScanRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageId != null && { imageId: serializeAws_json1_1ImageIdentifier(input.imageId, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_json1_1StartLifecyclePolicyPreviewRequest = (
  input: StartLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.lifecyclePolicyText != null && { lifecyclePolicyText: input.lifecyclePolicyText }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
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
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UploadLayerPartRequest = (input: UploadLayerPartRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerPartBlob != null && { layerPartBlob: context.base64Encoder(input.layerPartBlob) }),
    ...(input.partFirstByte != null && { partFirstByte: input.partFirstByte }),
    ...(input.partLastByte != null && { partLastByte: input.partLastByte }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  };
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AuthorizationData = (output: any, context: __SerdeContext): AuthorizationData => {
  return {
    authorizationToken: __expectString(output.authorizationToken),
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
    proxyEndpoint: __expectString(output.proxyEndpoint),
  } as any;
};

const deserializeAws_json1_1AuthorizationDataList = (output: any, context: __SerdeContext): AuthorizationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AuthorizationData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AwsEcrContainerImageDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerImageDetails => {
  return {
    architecture: __expectString(output.architecture),
    author: __expectString(output.author),
    imageHash: __expectString(output.imageHash),
    imageTags: output.imageTags != null ? deserializeAws_json1_1ImageTagsList(output.imageTags, context) : undefined,
    platform: __expectString(output.platform),
    pushedAt:
      output.pushedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pushedAt))) : undefined,
    registry: __expectString(output.registry),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): BatchCheckLayerAvailabilityResponse => {
  return {
    failures: output.failures != null ? deserializeAws_json1_1LayerFailureList(output.failures, context) : undefined,
    layers: output.layers != null ? deserializeAws_json1_1LayerList(output.layers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteImageResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImageResponse => {
  return {
    failures: output.failures != null ? deserializeAws_json1_1ImageFailureList(output.failures, context) : undefined,
    imageIds: output.imageIds != null ? deserializeAws_json1_1ImageIdentifierList(output.imageIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetImageResponse = (output: any, context: __SerdeContext): BatchGetImageResponse => {
  return {
    failures: output.failures != null ? deserializeAws_json1_1ImageFailureList(output.failures, context) : undefined,
    images: output.images != null ? deserializeAws_json1_1ImageList(output.images, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetRepositoryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetRepositoryScanningConfigurationResponse => {
  return {
    failures:
      output.failures != null
        ? deserializeAws_json1_1RepositoryScanningConfigurationFailureList(output.failures, context)
        : undefined,
    scanningConfigurations:
      output.scanningConfigurations != null
        ? deserializeAws_json1_1RepositoryScanningConfigurationList(output.scanningConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CompleteLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): CompleteLayerUploadResponse => {
  return {
    layerDigest: __expectString(output.layerDigest),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

const deserializeAws_json1_1CreatePullThroughCacheRuleResponse = (
  output: any,
  context: __SerdeContext
): CreatePullThroughCacheRuleResponse => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ecrRepositoryPrefix: __expectString(output.ecrRepositoryPrefix),
    registryId: __expectString(output.registryId),
    upstreamRegistryUrl: __expectString(output.upstreamRegistryUrl),
  } as any;
};

const deserializeAws_json1_1CreateRepositoryResponse = (
  output: any,
  context: __SerdeContext
): CreateRepositoryResponse => {
  return {
    repository: output.repository != null ? deserializeAws_json1_1Repository(output.repository, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return {
    baseScore: __limitedParseDouble(output.baseScore),
    scoringVector: __expectString(output.scoringVector),
    source: __expectString(output.source),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1CvssScoreAdjustment = (output: any, context: __SerdeContext): CvssScoreAdjustment => {
  return {
    metric: __expectString(output.metric),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_1CvssScoreAdjustmentList = (output: any, context: __SerdeContext): CvssScoreAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CvssScoreAdjustment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return {
    adjustments:
      output.adjustments != null
        ? deserializeAws_json1_1CvssScoreAdjustmentList(output.adjustments, context)
        : undefined,
    score: __limitedParseDouble(output.score),
    scoreSource: __expectString(output.scoreSource),
    scoringVector: __expectString(output.scoringVector),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CvssScore(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DeleteLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteLifecyclePolicyResponse => {
  return {
    lastEvaluatedAt:
      output.lastEvaluatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastEvaluatedAt)))
        : undefined,
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1DeletePullThroughCacheRuleResponse = (
  output: any,
  context: __SerdeContext
): DeletePullThroughCacheRuleResponse => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ecrRepositoryPrefix: __expectString(output.ecrRepositoryPrefix),
    registryId: __expectString(output.registryId),
    upstreamRegistryUrl: __expectString(output.upstreamRegistryUrl),
  } as any;
};

const deserializeAws_json1_1DeleteRegistryPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
  } as any;
};

const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1DeleteRepositoryResponse = (
  output: any,
  context: __SerdeContext
): DeleteRepositoryResponse => {
  return {
    repository: output.repository != null ? deserializeAws_json1_1Repository(output.repository, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeImageReplicationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageReplicationStatusResponse => {
  return {
    imageId: output.imageId != null ? deserializeAws_json1_1ImageIdentifier(output.imageId, context) : undefined,
    replicationStatuses:
      output.replicationStatuses != null
        ? deserializeAws_json1_1ImageReplicationStatusList(output.replicationStatuses, context)
        : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  return {
    imageId: output.imageId != null ? deserializeAws_json1_1ImageIdentifier(output.imageId, context) : undefined,
    imageScanFindings:
      output.imageScanFindings != null
        ? deserializeAws_json1_1ImageScanFindings(output.imageScanFindings, context)
        : undefined,
    imageScanStatus:
      output.imageScanStatus != null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1DescribeImagesResponse = (output: any, context: __SerdeContext): DescribeImagesResponse => {
  return {
    imageDetails:
      output.imageDetails != null ? deserializeAws_json1_1ImageDetailList(output.imageDetails, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribePullThroughCacheRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribePullThroughCacheRulesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    pullThroughCacheRules:
      output.pullThroughCacheRules != null
        ? deserializeAws_json1_1PullThroughCacheRuleList(output.pullThroughCacheRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRegistryResponse = (
  output: any,
  context: __SerdeContext
): DescribeRegistryResponse => {
  return {
    registryId: __expectString(output.registryId),
    replicationConfiguration:
      output.replicationConfiguration != null
        ? deserializeAws_json1_1ReplicationConfiguration(output.replicationConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRepositoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeRepositoriesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories:
      output.repositories != null ? deserializeAws_json1_1RepositoryList(output.repositories, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EmptyUploadException = (output: any, context: __SerdeContext): EmptyUploadException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    encryptionType: __expectString(output.encryptionType),
    kmsKey: __expectString(output.kmsKey),
  } as any;
};

const deserializeAws_json1_1EnhancedImageScanFinding = (
  output: any,
  context: __SerdeContext
): EnhancedImageScanFinding => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    description: __expectString(output.description),
    findingArn: __expectString(output.findingArn),
    firstObservedAt:
      output.firstObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstObservedAt)))
        : undefined,
    lastObservedAt:
      output.lastObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastObservedAt)))
        : undefined,
    packageVulnerabilityDetails:
      output.packageVulnerabilityDetails != null
        ? deserializeAws_json1_1PackageVulnerabilityDetails(output.packageVulnerabilityDetails, context)
        : undefined,
    remediation:
      output.remediation != null ? deserializeAws_json1_1Remediation(output.remediation, context) : undefined,
    resources: output.resources != null ? deserializeAws_json1_1ResourceList(output.resources, context) : undefined,
    score: __limitedParseDouble(output.score),
    scoreDetails:
      output.scoreDetails != null ? deserializeAws_json1_1ScoreDetails(output.scoreDetails, context) : undefined,
    severity: __expectString(output.severity),
    status: __expectString(output.status),
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1EnhancedImageScanFindingList = (
  output: any,
  context: __SerdeContext
): EnhancedImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnhancedImageScanFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FindingSeverityCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [FindingSeverity | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1GetAuthorizationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetAuthorizationTokenResponse => {
  return {
    authorizationData:
      output.authorizationData != null
        ? deserializeAws_json1_1AuthorizationDataList(output.authorizationData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDownloadUrlForLayerResponse = (
  output: any,
  context: __SerdeContext
): GetDownloadUrlForLayerResponse => {
  return {
    downloadUrl: __expectString(output.downloadUrl),
    layerDigest: __expectString(output.layerDigest),
  } as any;
};

const deserializeAws_json1_1GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  return {
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    nextToken: __expectString(output.nextToken),
    previewResults:
      output.previewResults != null
        ? deserializeAws_json1_1LifecyclePolicyPreviewResultList(output.previewResults, context)
        : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    status: __expectString(output.status),
    summary:
      output.summary != null ? deserializeAws_json1_1LifecyclePolicyPreviewSummary(output.summary, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyResponse => {
  return {
    lastEvaluatedAt:
      output.lastEvaluatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastEvaluatedAt)))
        : undefined,
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1GetRegistryPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
  } as any;
};

const deserializeAws_json1_1GetRegistryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetRegistryScanningConfigurationResponse => {
  return {
    registryId: __expectString(output.registryId),
    scanningConfiguration:
      output.scanningConfiguration != null
        ? deserializeAws_json1_1RegistryScanningConfiguration(output.scanningConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1Image = (output: any, context: __SerdeContext): Image => {
  return {
    imageId: output.imageId != null ? deserializeAws_json1_1ImageIdentifier(output.imageId, context) : undefined,
    imageManifest: __expectString(output.imageManifest),
    imageManifestMediaType: __expectString(output.imageManifestMediaType),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1ImageAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ImageDetail = (output: any, context: __SerdeContext): ImageDetail => {
  return {
    artifactMediaType: __expectString(output.artifactMediaType),
    imageDigest: __expectString(output.imageDigest),
    imageManifestMediaType: __expectString(output.imageManifestMediaType),
    imagePushedAt:
      output.imagePushedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imagePushedAt)))
        : undefined,
    imageScanFindingsSummary:
      output.imageScanFindingsSummary != null
        ? deserializeAws_json1_1ImageScanFindingsSummary(output.imageScanFindingsSummary, context)
        : undefined,
    imageScanStatus:
      output.imageScanStatus != null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
        : undefined,
    imageSizeInBytes: __expectLong(output.imageSizeInBytes),
    imageTags: output.imageTags != null ? deserializeAws_json1_1ImageTagList(output.imageTags, context) : undefined,
    lastRecordedPullTime:
      output.lastRecordedPullTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRecordedPullTime)))
        : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1ImageDetailList = (output: any, context: __SerdeContext): ImageDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageDigestDoesNotMatchException = (
  output: any,
  context: __SerdeContext
): ImageDigestDoesNotMatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ImageFailure = (output: any, context: __SerdeContext): ImageFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    imageId: output.imageId != null ? deserializeAws_json1_1ImageIdentifier(output.imageId, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImageFailureList = (output: any, context: __SerdeContext): ImageFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageIdentifier = (output: any, context: __SerdeContext): ImageIdentifier => {
  return {
    imageDigest: __expectString(output.imageDigest),
    imageTag: __expectString(output.imageTag),
  } as any;
};

const deserializeAws_json1_1ImageIdentifierList = (output: any, context: __SerdeContext): ImageIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageList = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Image(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageNotFoundException = (output: any, context: __SerdeContext): ImageNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ImageReplicationStatus = (output: any, context: __SerdeContext): ImageReplicationStatus => {
  return {
    failureCode: __expectString(output.failureCode),
    region: __expectString(output.region),
    registryId: __expectString(output.registryId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ImageReplicationStatusList = (
  output: any,
  context: __SerdeContext
): ImageReplicationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageReplicationStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return {
    attributes: output.attributes != null ? deserializeAws_json1_1AttributeList(output.attributes, context) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    severity: __expectString(output.severity),
    uri: __expectString(output.uri),
  } as any;
};

const deserializeAws_json1_1ImageScanFindingList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageScanFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageScanFindings = (output: any, context: __SerdeContext): ImageScanFindings => {
  return {
    enhancedFindings:
      output.enhancedFindings != null
        ? deserializeAws_json1_1EnhancedImageScanFindingList(output.enhancedFindings, context)
        : undefined,
    findingSeverityCounts:
      output.findingSeverityCounts != null
        ? deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context)
        : undefined,
    findings:
      output.findings != null ? deserializeAws_json1_1ImageScanFindingList(output.findings, context) : undefined,
    imageScanCompletedAt:
      output.imageScanCompletedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imageScanCompletedAt)))
        : undefined,
    vulnerabilitySourceUpdatedAt:
      output.vulnerabilitySourceUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vulnerabilitySourceUpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanFindingsSummary = (
  output: any,
  context: __SerdeContext
): ImageScanFindingsSummary => {
  return {
    findingSeverityCounts:
      output.findingSeverityCounts != null
        ? deserializeAws_json1_1FindingSeverityCounts(output.findingSeverityCounts, context)
        : undefined,
    imageScanCompletedAt:
      output.imageScanCompletedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imageScanCompletedAt)))
        : undefined,
    vulnerabilitySourceUpdatedAt:
      output.vulnerabilitySourceUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vulnerabilitySourceUpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImageScanningConfiguration = (
  output: any,
  context: __SerdeContext
): ImageScanningConfiguration => {
  return {
    scanOnPush: __expectBoolean(output.scanOnPush),
  } as any;
};

const deserializeAws_json1_1ImageScanStatus = (output: any, context: __SerdeContext): ImageScanStatus => {
  return {
    description: __expectString(output.description),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ImageTagAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ImageTagAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ImageTagList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ImageTagsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InitiateLayerUploadResponse = (
  output: any,
  context: __SerdeContext
): InitiateLayerUploadResponse => {
  return {
    partSize: __expectLong(output.partSize),
    uploadId: __expectString(output.uploadId),
  } as any;
};

const deserializeAws_json1_1InvalidLayerException = (output: any, context: __SerdeContext): InvalidLayerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidLayerPartException = (
  output: any,
  context: __SerdeContext
): InvalidLayerPartException => {
  return {
    lastValidByteReceived: __expectLong(output.lastValidByteReceived),
    message: __expectString(output.message),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KmsException = (output: any, context: __SerdeContext): KmsException => {
  return {
    kmsError: __expectString(output.kmsError),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    layerAvailability: __expectString(output.layerAvailability),
    layerDigest: __expectString(output.layerDigest),
    layerSize: __expectLong(output.layerSize),
    mediaType: __expectString(output.mediaType),
  } as any;
};

const deserializeAws_json1_1LayerAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): LayerAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LayerFailure = (output: any, context: __SerdeContext): LayerFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    layerDigest: __expectString(output.layerDigest),
  } as any;
};

const deserializeAws_json1_1LayerFailureList = (output: any, context: __SerdeContext): LayerFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LayerFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LayerInaccessibleException = (
  output: any,
  context: __SerdeContext
): LayerInaccessibleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LayerList = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Layer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LayerPartTooSmallException = (
  output: any,
  context: __SerdeContext
): LayerPartTooSmallException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LayersNotFoundException = (
  output: any,
  context: __SerdeContext
): LayersNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewInProgressException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResult = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult => {
  return {
    action: output.action != null ? deserializeAws_json1_1LifecyclePolicyRuleAction(output.action, context) : undefined,
    appliedRulePriority: __expectInt32(output.appliedRulePriority),
    imageDigest: __expectString(output.imageDigest),
    imagePushedAt:
      output.imagePushedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imagePushedAt)))
        : undefined,
    imageTags: output.imageTags != null ? deserializeAws_json1_1ImageTagList(output.imageTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyPreviewResultList = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LifecyclePolicyPreviewResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LifecyclePolicyPreviewSummary = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewSummary => {
  return {
    expiringImageTotalCount: __expectInt32(output.expiringImageTotalCount),
  } as any;
};

const deserializeAws_json1_1LifecyclePolicyRuleAction = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyRuleAction => {
  return {
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListImagesResponse = (output: any, context: __SerdeContext): ListImagesResponse => {
  return {
    imageIds: output.imageIds != null ? deserializeAws_json1_1ImageIdentifierList(output.imageIds, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PackageVulnerabilityDetails = (
  output: any,
  context: __SerdeContext
): PackageVulnerabilityDetails => {
  return {
    cvss: output.cvss != null ? deserializeAws_json1_1CvssScoreList(output.cvss, context) : undefined,
    referenceUrls:
      output.referenceUrls != null ? deserializeAws_json1_1ReferenceUrlsList(output.referenceUrls, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? deserializeAws_json1_1RelatedVulnerabilitiesList(output.relatedVulnerabilities, context)
        : undefined,
    source: __expectString(output.source),
    sourceUrl: __expectString(output.sourceUrl),
    vendorCreatedAt:
      output.vendorCreatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorCreatedAt)))
        : undefined,
    vendorSeverity: __expectString(output.vendorSeverity),
    vendorUpdatedAt:
      output.vendorUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorUpdatedAt)))
        : undefined,
    vulnerabilityId: __expectString(output.vulnerabilityId),
    vulnerablePackages:
      output.vulnerablePackages != null
        ? deserializeAws_json1_1VulnerablePackagesList(output.vulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PullThroughCacheRule = (output: any, context: __SerdeContext): PullThroughCacheRule => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ecrRepositoryPrefix: __expectString(output.ecrRepositoryPrefix),
    registryId: __expectString(output.registryId),
    upstreamRegistryUrl: __expectString(output.upstreamRegistryUrl),
  } as any;
};

const deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PullThroughCacheRuleAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PullThroughCacheRuleList = (
  output: any,
  context: __SerdeContext
): PullThroughCacheRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PullThroughCacheRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PullThroughCacheRuleNotFoundException = (
  output: any,
  context: __SerdeContext
): PullThroughCacheRuleNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutImageResponse = (output: any, context: __SerdeContext): PutImageResponse => {
  return {
    image: output.image != null ? deserializeAws_json1_1Image(output.image, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutImageScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutImageScanningConfigurationResponse => {
  return {
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PutImageTagMutabilityResponse = (
  output: any,
  context: __SerdeContext
): PutImageTagMutabilityResponse => {
  return {
    imageTagMutability: __expectString(output.imageTagMutability),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PutLifecyclePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutLifecyclePolicyResponse => {
  return {
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1PutRegistryPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
  } as any;
};

const deserializeAws_json1_1PutRegistryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutRegistryScanningConfigurationResponse => {
  return {
    registryScanningConfiguration:
      output.registryScanningConfiguration != null
        ? deserializeAws_json1_1RegistryScanningConfiguration(output.registryScanningConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutReplicationConfigurationResponse => {
  return {
    replicationConfiguration:
      output.replicationConfiguration != null
        ? deserializeAws_json1_1ReplicationConfiguration(output.replicationConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    text: __expectString(output.text),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1ReferencedImagesNotFoundException = (
  output: any,
  context: __SerdeContext
): ReferencedImagesNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReferenceUrlsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RegistryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RegistryPolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RegistryScanningConfiguration = (
  output: any,
  context: __SerdeContext
): RegistryScanningConfiguration => {
  return {
    rules: output.rules != null ? deserializeAws_json1_1RegistryScanningRuleList(output.rules, context) : undefined,
    scanType: __expectString(output.scanType),
  } as any;
};

const deserializeAws_json1_1RegistryScanningRule = (output: any, context: __SerdeContext): RegistryScanningRule => {
  return {
    repositoryFilters:
      output.repositoryFilters != null
        ? deserializeAws_json1_1ScanningRepositoryFilterList(output.repositoryFilters, context)
        : undefined,
    scanFrequency: __expectString(output.scanFrequency),
  } as any;
};

const deserializeAws_json1_1RegistryScanningRuleList = (
  output: any,
  context: __SerdeContext
): RegistryScanningRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegistryScanningRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelatedVulnerabilitiesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    recommendation:
      output.recommendation != null ? deserializeAws_json1_1Recommendation(output.recommendation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ReplicationConfiguration => {
  return {
    rules: output.rules != null ? deserializeAws_json1_1ReplicationRuleList(output.rules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationDestination = (output: any, context: __SerdeContext): ReplicationDestination => {
  return {
    region: __expectString(output.region),
    registryId: __expectString(output.registryId),
  } as any;
};

const deserializeAws_json1_1ReplicationDestinationList = (
  output: any,
  context: __SerdeContext
): ReplicationDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  return {
    destinations:
      output.destinations != null
        ? deserializeAws_json1_1ReplicationDestinationList(output.destinations, context)
        : undefined,
    repositoryFilters:
      output.repositoryFilters != null
        ? deserializeAws_json1_1RepositoryFilterList(output.repositoryFilters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationRuleList = (output: any, context: __SerdeContext): ReplicationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    encryptionConfiguration:
      output.encryptionConfiguration != null
        ? deserializeAws_json1_1EncryptionConfiguration(output.encryptionConfiguration, context)
        : undefined,
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? deserializeAws_json1_1ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    imageTagMutability: __expectString(output.imageTagMutability),
    registryId: __expectString(output.registryId),
    repositoryArn: __expectString(output.repositoryArn),
    repositoryName: __expectString(output.repositoryName),
    repositoryUri: __expectString(output.repositoryUri),
  } as any;
};

const deserializeAws_json1_1RepositoryAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): RepositoryAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryFilter = (output: any, context: __SerdeContext): RepositoryFilter => {
  return {
    filter: __expectString(output.filter),
    filterType: __expectString(output.filterType),
  } as any;
};

const deserializeAws_json1_1RepositoryFilterList = (output: any, context: __SerdeContext): RepositoryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryList = (output: any, context: __SerdeContext): Repository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Repository(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryNotEmptyException = (
  output: any,
  context: __SerdeContext
): RepositoryNotEmptyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): RepositoryPolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RepositoryScanningConfiguration = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfiguration => {
  return {
    appliedScanFilters:
      output.appliedScanFilters != null
        ? deserializeAws_json1_1ScanningRepositoryFilterList(output.appliedScanFilters, context)
        : undefined,
    repositoryArn: __expectString(output.repositoryArn),
    repositoryName: __expectString(output.repositoryName),
    scanFrequency: __expectString(output.scanFrequency),
    scanOnPush: __expectBoolean(output.scanOnPush),
  } as any;
};

const deserializeAws_json1_1RepositoryScanningConfigurationFailure = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfigurationFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1RepositoryScanningConfigurationFailureList = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfigurationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryScanningConfigurationFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RepositoryScanningConfigurationList = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RepositoryScanningConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    details: output.details != null ? deserializeAws_json1_1ResourceDetails(output.details, context) : undefined,
    id: __expectString(output.id),
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    awsEcrContainerImage:
      output.awsEcrContainerImage != null
        ? deserializeAws_json1_1AwsEcrContainerImageDetails(output.awsEcrContainerImage, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScanningRepositoryFilter = (
  output: any,
  context: __SerdeContext
): ScanningRepositoryFilter => {
  return {
    filter: __expectString(output.filter),
    filterType: __expectString(output.filterType),
  } as any;
};

const deserializeAws_json1_1ScanningRepositoryFilterList = (
  output: any,
  context: __SerdeContext
): ScanningRepositoryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScanningRepositoryFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScanNotFoundException = (output: any, context: __SerdeContext): ScanNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ScoreDetails = (output: any, context: __SerdeContext): ScoreDetails => {
  return {
    cvss: output.cvss != null ? deserializeAws_json1_1CvssScoreDetails(output.cvss, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServerException = (output: any, context: __SerdeContext): ServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SetRepositoryPolicyResponse = (
  output: any,
  context: __SerdeContext
): SetRepositoryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1StartImageScanResponse = (output: any, context: __SerdeContext): StartImageScanResponse => {
  return {
    imageId: output.imageId != null ? deserializeAws_json1_1ImageIdentifier(output.imageId, context) : undefined,
    imageScanStatus:
      output.imageScanStatus != null
        ? deserializeAws_json1_1ImageScanStatus(output.imageScanStatus, context)
        : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

const deserializeAws_json1_1StartLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): StartLifecyclePolicyPreviewResponse => {
  return {
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    status: __expectString(output.status),
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

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedImageTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedImageTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedUpstreamRegistryException = (
  output: any,
  context: __SerdeContext
): UnsupportedUpstreamRegistryException => {
  return {
    message: __expectString(output.message),
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
    lastByteReceived: __expectLong(output.lastByteReceived),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    uploadId: __expectString(output.uploadId),
  } as any;
};

const deserializeAws_json1_1UploadNotFoundException = (
  output: any,
  context: __SerdeContext
): UploadNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1VulnerablePackage = (output: any, context: __SerdeContext): VulnerablePackage => {
  return {
    arch: __expectString(output.arch),
    epoch: __expectInt32(output.epoch),
    filePath: __expectString(output.filePath),
    name: __expectString(output.name),
    packageManager: __expectString(output.packageManager),
    release: __expectString(output.release),
    sourceLayerHash: __expectString(output.sourceLayerHash),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1VulnerablePackagesList = (output: any, context: __SerdeContext): VulnerablePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VulnerablePackage(entry, context);
    });
  return retVal;
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
