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

/**
 * serializeAws_json1_1BatchCheckLayerAvailabilityCommand
 */
export const se_BatchCheckLayerAvailabilityCommand = async (
  input: BatchCheckLayerAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCheckLayerAvailability");
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
  const headers: __HeaderBag = sharedHeaders("BatchDeleteImage");
  let body: any;
  body = JSON.stringify(se_BatchDeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetImageCommand
 */
export const se_BatchGetImageCommand = async (
  input: BatchGetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetImage");
  let body: any;
  body = JSON.stringify(se_BatchGetImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetRepositoryScanningConfigurationCommand
 */
export const se_BatchGetRepositoryScanningConfigurationCommand = async (
  input: BatchGetRepositoryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetRepositoryScanningConfiguration");
  let body: any;
  body = JSON.stringify(se_BatchGetRepositoryScanningConfigurationRequest(input, context));
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
  body = JSON.stringify(se_CompleteLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePullThroughCacheRuleCommand
 */
export const se_CreatePullThroughCacheRuleCommand = async (
  input: CreatePullThroughCacheRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePullThroughCacheRule");
  let body: any;
  body = JSON.stringify(se_CreatePullThroughCacheRuleRequest(input, context));
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
 * serializeAws_json1_1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_DeleteLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePullThroughCacheRuleCommand
 */
export const se_DeletePullThroughCacheRuleCommand = async (
  input: DeletePullThroughCacheRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePullThroughCacheRule");
  let body: any;
  body = JSON.stringify(se_DeletePullThroughCacheRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegistryPolicyCommand
 */
export const se_DeleteRegistryPolicyCommand = async (
  input: DeleteRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegistryPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteRegistryPolicyRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("DeleteRepositoryPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageReplicationStatusCommand
 */
export const se_DescribeImageReplicationStatusCommand = async (
  input: DescribeImageReplicationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageReplicationStatus");
  let body: any;
  body = JSON.stringify(se_DescribeImageReplicationStatusRequest(input, context));
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
  body = JSON.stringify(se_DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageScanFindingsCommand
 */
export const se_DescribeImageScanFindingsCommand = async (
  input: DescribeImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageScanFindings");
  let body: any;
  body = JSON.stringify(se_DescribeImageScanFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePullThroughCacheRulesCommand
 */
export const se_DescribePullThroughCacheRulesCommand = async (
  input: DescribePullThroughCacheRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePullThroughCacheRules");
  let body: any;
  body = JSON.stringify(se_DescribePullThroughCacheRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRegistryCommand
 */
export const se_DescribeRegistryCommand = async (
  input: DescribeRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistry");
  let body: any;
  body = JSON.stringify(se_DescribeRegistryRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("GetAuthorizationToken");
  let body: any;
  body = JSON.stringify(se_GetAuthorizationTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDownloadUrlForLayerCommand
 */
export const se_GetDownloadUrlForLayerCommand = async (
  input: GetDownloadUrlForLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDownloadUrlForLayer");
  let body: any;
  body = JSON.stringify(se_GetDownloadUrlForLayerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_GetLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLifecyclePolicyPreviewCommand
 */
export const se_GetLifecyclePolicyPreviewCommand = async (
  input: GetLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLifecyclePolicyPreview");
  let body: any;
  body = JSON.stringify(se_GetLifecyclePolicyPreviewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegistryPolicyCommand
 */
export const se_GetRegistryPolicyCommand = async (
  input: GetRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegistryPolicy");
  let body: any;
  body = JSON.stringify(se_GetRegistryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegistryScanningConfigurationCommand
 */
export const se_GetRegistryScanningConfigurationCommand = async (
  input: GetRegistryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegistryScanningConfiguration");
  let body: any;
  body = JSON.stringify(se_GetRegistryScanningConfigurationRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("InitiateLayerUpload");
  let body: any;
  body = JSON.stringify(se_InitiateLayerUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImages");
  let body: any;
  body = JSON.stringify(se_ListImagesRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("PutImage");
  let body: any;
  body = JSON.stringify(se_PutImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutImageScanningConfigurationCommand
 */
export const se_PutImageScanningConfigurationCommand = async (
  input: PutImageScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutImageScanningConfiguration");
  let body: any;
  body = JSON.stringify(se_PutImageScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutImageTagMutabilityCommand
 */
export const se_PutImageTagMutabilityCommand = async (
  input: PutImageTagMutabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutImageTagMutability");
  let body: any;
  body = JSON.stringify(se_PutImageTagMutabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLifecyclePolicyCommand
 */
export const se_PutLifecyclePolicyCommand = async (
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_PutLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRegistryPolicyCommand
 */
export const se_PutRegistryPolicyCommand = async (
  input: PutRegistryPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRegistryPolicy");
  let body: any;
  body = JSON.stringify(se_PutRegistryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRegistryScanningConfigurationCommand
 */
export const se_PutRegistryScanningConfigurationCommand = async (
  input: PutRegistryScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRegistryScanningConfiguration");
  let body: any;
  body = JSON.stringify(se_PutRegistryScanningConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutReplicationConfigurationCommand
 */
export const se_PutReplicationConfigurationCommand = async (
  input: PutReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutReplicationConfiguration");
  let body: any;
  body = JSON.stringify(se_PutReplicationConfigurationRequest(input, context));
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
  body = JSON.stringify(se_SetRepositoryPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImageScanCommand
 */
export const se_StartImageScanCommand = async (
  input: StartImageScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImageScan");
  let body: any;
  body = JSON.stringify(se_StartImageScanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLifecyclePolicyPreviewCommand
 */
export const se_StartLifecyclePolicyPreviewCommand = async (
  input: StartLifecyclePolicyPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartLifecyclePolicyPreview");
  let body: any;
  body = JSON.stringify(se_StartLifecyclePolicyPreviewRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchGetImageCommand
 */
export const de_BatchGetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetImageResponse(data, context);
  const response: BatchGetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetImageCommandError
 */
const de_BatchGetImageCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchGetRepositoryScanningConfigurationCommand
 */
export const de_BatchGetRepositoryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetRepositoryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetRepositoryScanningConfigurationResponse(data, context);
  const response: BatchGetRepositoryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetRepositoryScanningConfigurationCommandError
 */
const de_BatchGetRepositoryScanningConfigurationCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#EmptyUploadException":
      throw await de_EmptyUploadExceptionRes(parsedOutput, context);
    case "InvalidLayerException":
    case "com.amazonaws.ecr#InvalidLayerException":
      throw await de_InvalidLayerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "LayerAlreadyExistsException":
    case "com.amazonaws.ecr#LayerAlreadyExistsException":
      throw await de_LayerAlreadyExistsExceptionRes(parsedOutput, context);
    case "LayerPartTooSmallException":
    case "com.amazonaws.ecr#LayerPartTooSmallException":
      throw await de_LayerPartTooSmallExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
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
 * deserializeAws_json1_1CreatePullThroughCacheRuleCommand
 */
export const de_CreatePullThroughCacheRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullThroughCacheRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePullThroughCacheRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePullThroughCacheRuleResponse(data, context);
  const response: CreatePullThroughCacheRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePullThroughCacheRuleCommandError
 */
const de_CreatePullThroughCacheRuleCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PullThroughCacheRuleAlreadyExistsException":
    case "com.amazonaws.ecr#PullThroughCacheRuleAlreadyExistsException":
      throw await de_PullThroughCacheRuleAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedUpstreamRegistryException":
    case "com.amazonaws.ecr#UnsupportedUpstreamRegistryException":
      throw await de_UnsupportedUpstreamRegistryExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RepositoryAlreadyExistsException":
    case "com.amazonaws.ecr#RepositoryAlreadyExistsException":
      throw await de_RepositoryAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLifecyclePolicyResponse(data, context);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLifecyclePolicyCommandError
 */
const de_DeleteLifecyclePolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await de_LifecyclePolicyNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePullThroughCacheRuleCommand
 */
export const de_DeletePullThroughCacheRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullThroughCacheRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePullThroughCacheRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePullThroughCacheRuleResponse(data, context);
  const response: DeletePullThroughCacheRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePullThroughCacheRuleCommandError
 */
const de_DeletePullThroughCacheRuleCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PullThroughCacheRuleNotFoundException":
    case "com.amazonaws.ecr#PullThroughCacheRuleNotFoundException":
      throw await de_PullThroughCacheRuleNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1DeleteRegistryPolicyCommand
 */
export const de_DeleteRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRegistryPolicyResponse(data, context);
  const response: DeleteRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRegistryPolicyCommandError
 */
const de_DeleteRegistryPolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RegistryPolicyNotFoundException":
    case "com.amazonaws.ecr#RegistryPolicyNotFoundException":
      throw await de_RegistryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "RepositoryNotEmptyException":
    case "com.amazonaws.ecr#RepositoryNotEmptyException":
      throw await de_RepositoryNotEmptyExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      throw await de_RepositoryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeImageReplicationStatusCommand
 */
export const de_DescribeImageReplicationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageReplicationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageReplicationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageReplicationStatusResponse(data, context);
  const response: DescribeImageReplicationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImageReplicationStatusCommandError
 */
const de_DescribeImageReplicationStatusCommandError = async (
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
      throw await de_ImageNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#ImageNotFoundException":
      throw await de_ImageNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeImageScanFindingsCommand
 */
export const de_DescribeImageScanFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageScanFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageScanFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageScanFindingsResponse(data, context);
  const response: DescribeImageScanFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImageScanFindingsCommandError
 */
const de_DescribeImageScanFindingsCommandError = async (
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
      throw await de_ImageNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ScanNotFoundException":
    case "com.amazonaws.ecr#ScanNotFoundException":
      throw await de_ScanNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1DescribePullThroughCacheRulesCommand
 */
export const de_DescribePullThroughCacheRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullThroughCacheRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePullThroughCacheRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePullThroughCacheRulesResponse(data, context);
  const response: DescribePullThroughCacheRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePullThroughCacheRulesCommandError
 */
const de_DescribePullThroughCacheRulesCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PullThroughCacheRuleNotFoundException":
    case "com.amazonaws.ecr#PullThroughCacheRuleNotFoundException":
      throw await de_PullThroughCacheRuleNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1DescribeRegistryCommand
 */
export const de_DescribeRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegistryResponse(data, context);
  const response: DescribeRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRegistryCommandError
 */
const de_DescribeRegistryCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDownloadUrlForLayerCommand
 */
export const de_GetDownloadUrlForLayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDownloadUrlForLayerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDownloadUrlForLayerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDownloadUrlForLayerResponse(data, context);
  const response: GetDownloadUrlForLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDownloadUrlForLayerCommandError
 */
const de_GetDownloadUrlForLayerCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LayerInaccessibleException":
    case "com.amazonaws.ecr#LayerInaccessibleException":
      throw await de_LayerInaccessibleExceptionRes(parsedOutput, context);
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      throw await de_LayersNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLifecyclePolicyResponse(data, context);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyCommandError
 */
const de_GetLifecyclePolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await de_LifecyclePolicyNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLifecyclePolicyPreviewCommand
 */
export const de_GetLifecyclePolicyPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLifecyclePolicyPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLifecyclePolicyPreviewResponse(data, context);
  const response: GetLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyPreviewCommandError
 */
const de_GetLifecyclePolicyPreviewCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LifecyclePolicyPreviewNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewNotFoundException":
      throw await de_LifecyclePolicyPreviewNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRegistryPolicyCommand
 */
export const de_GetRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegistryPolicyResponse(data, context);
  const response: GetRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegistryPolicyCommandError
 */
const de_GetRegistryPolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RegistryPolicyNotFoundException":
    case "com.amazonaws.ecr#RegistryPolicyNotFoundException":
      throw await de_RegistryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1GetRegistryScanningConfigurationCommand
 */
export const de_GetRegistryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegistryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegistryScanningConfigurationResponse(data, context);
  const response: GetRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegistryScanningConfigurationCommandError
 */
const de_GetRegistryScanningConfigurationCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryPolicyNotFoundException":
    case "com.amazonaws.ecr#RepositoryPolicyNotFoundException":
      throw await de_RepositoryPolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListImagesCommand
 */
export const de_ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImagesResponse(data, context);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListImagesCommandError
 */
const de_ListImagesCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#ImageAlreadyExistsException":
      throw await de_ImageAlreadyExistsExceptionRes(parsedOutput, context);
    case "ImageDigestDoesNotMatchException":
    case "com.amazonaws.ecr#ImageDigestDoesNotMatchException":
      throw await de_ImageDigestDoesNotMatchExceptionRes(parsedOutput, context);
    case "ImageTagAlreadyExistsException":
    case "com.amazonaws.ecr#ImageTagAlreadyExistsException":
      throw await de_ImageTagAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "LayersNotFoundException":
    case "com.amazonaws.ecr#LayersNotFoundException":
      throw await de_LayersNotFoundExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ReferencedImagesNotFoundException":
    case "com.amazonaws.ecr#ReferencedImagesNotFoundException":
      throw await de_ReferencedImagesNotFoundExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutImageScanningConfigurationCommand
 */
export const de_PutImageScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutImageScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutImageScanningConfigurationResponse(data, context);
  const response: PutImageScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutImageScanningConfigurationCommandError
 */
const de_PutImageScanningConfigurationCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1PutImageTagMutabilityCommand
 */
export const de_PutImageTagMutabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageTagMutabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutImageTagMutabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutImageTagMutabilityResponse(data, context);
  const response: PutImageTagMutabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutImageTagMutabilityCommandError
 */
const de_PutImageTagMutabilityCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutLifecyclePolicyCommand
 */
export const de_PutLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLifecyclePolicyResponse(data, context);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLifecyclePolicyCommandError
 */
const de_PutLifecyclePolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutRegistryPolicyCommand
 */
export const de_PutRegistryPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRegistryPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRegistryPolicyResponse(data, context);
  const response: PutRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRegistryPolicyCommandError
 */
const de_PutRegistryPolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1PutRegistryScanningConfigurationCommand
 */
export const de_PutRegistryScanningConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistryScanningConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRegistryScanningConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRegistryScanningConfigurationResponse(data, context);
  const response: PutRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRegistryScanningConfigurationCommandError
 */
const de_PutRegistryScanningConfigurationCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1PutReplicationConfigurationCommand
 */
export const de_PutReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutReplicationConfigurationResponse(data, context);
  const response: PutReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutReplicationConfigurationCommandError
 */
const de_PutReplicationConfigurationCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartImageScanCommand
 */
export const de_StartImageScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageScanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartImageScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartImageScanResponse(data, context);
  const response: StartImageScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartImageScanCommandError
 */
const de_StartImageScanCommandError = async (
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
      throw await de_ImageNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedImageTypeException":
    case "com.amazonaws.ecr#UnsupportedImageTypeException":
      throw await de_UnsupportedImageTypeExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ecr#ValidationException":
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
 * deserializeAws_json1_1StartLifecyclePolicyPreviewCommand
 */
export const de_StartLifecyclePolicyPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLifecyclePolicyPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartLifecyclePolicyPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartLifecyclePolicyPreviewResponse(data, context);
  const response: StartLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartLifecyclePolicyPreviewCommandError
 */
const de_StartLifecyclePolicyPreviewCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LifecyclePolicyNotFoundException":
    case "com.amazonaws.ecr#LifecyclePolicyNotFoundException":
      throw await de_LifecyclePolicyNotFoundExceptionRes(parsedOutput, context);
    case "LifecyclePolicyPreviewInProgressException":
    case "com.amazonaws.ecr#LifecyclePolicyPreviewInProgressException":
      throw await de_LifecyclePolicyPreviewInProgressExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.ecr#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.ecr#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.ecr#InvalidLayerPartException":
      throw await de_InvalidLayerPartExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.ecr#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.ecr#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RepositoryNotFoundException":
    case "com.amazonaws.ecr#RepositoryNotFoundException":
      throw await de_RepositoryNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UploadNotFoundException":
    case "com.amazonaws.ecr#UploadNotFoundException":
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
 * deserializeAws_json1_1KmsExceptionRes
 */
const de_KmsExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KmsException(body, context);
  const exception = new KmsException({
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
 * deserializeAws_json1_1LayerInaccessibleExceptionRes
 */
const de_LayerInaccessibleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LayerInaccessibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LayerInaccessibleException(body, context);
  const exception = new LayerInaccessibleException({
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
 * deserializeAws_json1_1LifecyclePolicyNotFoundExceptionRes
 */
const de_LifecyclePolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LifecyclePolicyNotFoundException(body, context);
  const exception = new LifecyclePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewInProgressExceptionRes
 */
const de_LifecyclePolicyPreviewInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LifecyclePolicyPreviewInProgressException(body, context);
  const exception = new LifecyclePolicyPreviewInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewNotFoundExceptionRes
 */
const de_LifecyclePolicyPreviewNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyPreviewNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LifecyclePolicyPreviewNotFoundException(body, context);
  const exception = new LifecyclePolicyPreviewNotFoundException({
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
 * deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsExceptionRes
 */
const de_PullThroughCacheRuleAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullThroughCacheRuleAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PullThroughCacheRuleAlreadyExistsException(body, context);
  const exception = new PullThroughCacheRuleAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullThroughCacheRuleNotFoundExceptionRes
 */
const de_PullThroughCacheRuleNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullThroughCacheRuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PullThroughCacheRuleNotFoundException(body, context);
  const exception = new PullThroughCacheRuleNotFoundException({
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
 * deserializeAws_json1_1RegistryPolicyNotFoundExceptionRes
 */
const de_RegistryPolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegistryPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RegistryPolicyNotFoundException(body, context);
  const exception = new RegistryPolicyNotFoundException({
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
 * deserializeAws_json1_1ScanNotFoundExceptionRes
 */
const de_ScanNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScanNotFoundException(body, context);
  const exception = new ScanNotFoundException({
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
 * deserializeAws_json1_1UnsupportedImageTypeExceptionRes
 */
const de_UnsupportedImageTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedImageTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedImageTypeException(body, context);
  const exception = new UnsupportedImageTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedUpstreamRegistryExceptionRes
 */
const de_UnsupportedUpstreamRegistryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUpstreamRegistryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedUpstreamRegistryException(body, context);
  const exception = new UnsupportedUpstreamRegistryException({
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
 * deserializeAws_json1_1ValidationExceptionRes
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
 * serializeAws_json1_1BatchGetImageRequest
 */
const se_BatchGetImageRequest = (input: BatchGetImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.acceptedMediaTypes != null && {
      acceptedMediaTypes: se_MediaTypeList(input.acceptedMediaTypes, context),
    }),
    ...(input.imageIds != null && { imageIds: se_ImageIdentifierList(input.imageIds, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1BatchGetRepositoryScanningConfigurationRequest
 */
const se_BatchGetRepositoryScanningConfigurationRequest = (
  input: BatchGetRepositoryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.repositoryNames != null && {
      repositoryNames: se_ScanningConfigurationRepositoryNameList(input.repositoryNames, context),
    }),
  };
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
 * serializeAws_json1_1CreatePullThroughCacheRuleRequest
 */
const se_CreatePullThroughCacheRuleRequest = (
  input: CreatePullThroughCacheRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefix != null && { ecrRepositoryPrefix: input.ecrRepositoryPrefix }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.upstreamRegistryUrl != null && { upstreamRegistryUrl: input.upstreamRegistryUrl }),
  };
};

/**
 * serializeAws_json1_1CreateRepositoryRequest
 */
const se_CreateRepositoryRequest = (input: CreateRepositoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.encryptionConfiguration != null && {
      encryptionConfiguration: se_EncryptionConfiguration(input.encryptionConfiguration, context),
    }),
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: se_ImageScanningConfiguration(input.imageScanningConfiguration, context),
    }),
    ...(input.imageTagMutability != null && { imageTagMutability: input.imageTagMutability }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteLifecyclePolicyRequest
 */
const se_DeleteLifecyclePolicyRequest = (input: DeleteLifecyclePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DeletePullThroughCacheRuleRequest
 */
const se_DeletePullThroughCacheRuleRequest = (
  input: DeletePullThroughCacheRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefix != null && { ecrRepositoryPrefix: input.ecrRepositoryPrefix }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

/**
 * serializeAws_json1_1DeleteRegistryPolicyRequest
 */
const se_DeleteRegistryPolicyRequest = (input: DeleteRegistryPolicyRequest, context: __SerdeContext): any => {
  return {};
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
 * serializeAws_json1_1DescribeImageReplicationStatusRequest
 */
const se_DescribeImageReplicationStatusRequest = (
  input: DescribeImageReplicationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageId != null && { imageId: se_ImageIdentifier(input.imageId, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeImageScanFindingsRequest
 */
const se_DescribeImageScanFindingsRequest = (input: DescribeImageScanFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageId != null && { imageId: se_ImageIdentifier(input.imageId, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeImagesFilter
 */
const se_DescribeImagesFilter = (input: DescribeImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

/**
 * serializeAws_json1_1DescribeImagesRequest
 */
const se_DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_DescribeImagesFilter(input.filter, context) }),
    ...(input.imageIds != null && { imageIds: se_ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribePullThroughCacheRulesRequest
 */
const se_DescribePullThroughCacheRulesRequest = (
  input: DescribePullThroughCacheRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrRepositoryPrefixes != null && {
      ecrRepositoryPrefixes: se_PullThroughCacheRuleRepositoryPrefixList(input.ecrRepositoryPrefixes, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

/**
 * serializeAws_json1_1DescribeRegistryRequest
 */
const se_DescribeRegistryRequest = (input: DescribeRegistryRequest, context: __SerdeContext): any => {
  return {};
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
 * serializeAws_json1_1EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
    ...(input.kmsKey != null && { kmsKey: input.kmsKey }),
  };
};

/**
 * serializeAws_json1_1GetAuthorizationTokenRegistryIdList
 */
const se_GetAuthorizationTokenRegistryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetAuthorizationTokenRequest
 */
const se_GetAuthorizationTokenRequest = (input: GetAuthorizationTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryIds != null && {
      registryIds: se_GetAuthorizationTokenRegistryIdList(input.registryIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetDownloadUrlForLayerRequest
 */
const se_GetDownloadUrlForLayerRequest = (input: GetDownloadUrlForLayerRequest, context: __SerdeContext): any => {
  return {
    ...(input.layerDigest != null && { layerDigest: input.layerDigest }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetLifecyclePolicyPreviewRequest
 */
const se_GetLifecyclePolicyPreviewRequest = (input: GetLifecyclePolicyPreviewRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_LifecyclePolicyPreviewFilter(input.filter, context) }),
    ...(input.imageIds != null && { imageIds: se_ImageIdentifierList(input.imageIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetLifecyclePolicyRequest
 */
const se_GetLifecyclePolicyRequest = (input: GetLifecyclePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetRegistryPolicyRequest
 */
const se_GetRegistryPolicyRequest = (input: GetRegistryPolicyRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetRegistryScanningConfigurationRequest
 */
const se_GetRegistryScanningConfigurationRequest = (
  input: GetRegistryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {};
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
 * serializeAws_json1_1ImageScanningConfiguration
 */
const se_ImageScanningConfiguration = (input: ImageScanningConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.scanOnPush != null && { scanOnPush: input.scanOnPush }),
  };
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
 * serializeAws_json1_1LifecyclePolicyPreviewFilter
 */
const se_LifecyclePolicyPreviewFilter = (input: LifecyclePolicyPreviewFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

/**
 * serializeAws_json1_1ListImagesFilter
 */
const se_ListImagesFilter = (input: ListImagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagStatus != null && { tagStatus: input.tagStatus }),
  };
};

/**
 * serializeAws_json1_1ListImagesRequest
 */
const se_ListImagesRequest = (input: ListImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_ListImagesFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
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
 * serializeAws_json1_1MediaTypeList
 */
const se_MediaTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PullThroughCacheRuleRepositoryPrefixList
 */
const se_PullThroughCacheRuleRepositoryPrefixList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_json1_1PutImageScanningConfigurationRequest
 */
const se_PutImageScanningConfigurationRequest = (
  input: PutImageScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: se_ImageScanningConfiguration(input.imageScanningConfiguration, context),
    }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PutImageTagMutabilityRequest
 */
const se_PutImageTagMutabilityRequest = (input: PutImageTagMutabilityRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageTagMutability != null && { imageTagMutability: input.imageTagMutability }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PutLifecyclePolicyRequest
 */
const se_PutLifecyclePolicyRequest = (input: PutLifecyclePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.lifecyclePolicyText != null && { lifecyclePolicyText: input.lifecyclePolicyText }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PutRegistryPolicyRequest
 */
const se_PutRegistryPolicyRequest = (input: PutRegistryPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.policyText != null && { policyText: input.policyText }),
  };
};

/**
 * serializeAws_json1_1PutRegistryScanningConfigurationRequest
 */
const se_PutRegistryScanningConfigurationRequest = (
  input: PutRegistryScanningConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.rules != null && { rules: se_RegistryScanningRuleList(input.rules, context) }),
    ...(input.scanType != null && { scanType: input.scanType }),
  };
};

/**
 * serializeAws_json1_1PutReplicationConfigurationRequest
 */
const se_PutReplicationConfigurationRequest = (
  input: PutReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.replicationConfiguration != null && {
      replicationConfiguration: se_ReplicationConfiguration(input.replicationConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1RegistryScanningRule
 */
const se_RegistryScanningRule = (input: RegistryScanningRule, context: __SerdeContext): any => {
  return {
    ...(input.repositoryFilters != null && {
      repositoryFilters: se_ScanningRepositoryFilterList(input.repositoryFilters, context),
    }),
    ...(input.scanFrequency != null && { scanFrequency: input.scanFrequency }),
  };
};

/**
 * serializeAws_json1_1RegistryScanningRuleList
 */
const se_RegistryScanningRuleList = (input: RegistryScanningRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RegistryScanningRule(entry, context);
    });
};

/**
 * serializeAws_json1_1ReplicationConfiguration
 */
const se_ReplicationConfiguration = (input: ReplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.rules != null && { rules: se_ReplicationRuleList(input.rules, context) }),
  };
};

/**
 * serializeAws_json1_1ReplicationDestination
 */
const se_ReplicationDestination = (input: ReplicationDestination, context: __SerdeContext): any => {
  return {
    ...(input.region != null && { region: input.region }),
    ...(input.registryId != null && { registryId: input.registryId }),
  };
};

/**
 * serializeAws_json1_1ReplicationDestinationList
 */
const se_ReplicationDestinationList = (input: ReplicationDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicationDestination(entry, context);
    });
};

/**
 * serializeAws_json1_1ReplicationRule
 */
const se_ReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  return {
    ...(input.destinations != null && { destinations: se_ReplicationDestinationList(input.destinations, context) }),
    ...(input.repositoryFilters != null && {
      repositoryFilters: se_RepositoryFilterList(input.repositoryFilters, context),
    }),
  };
};

/**
 * serializeAws_json1_1ReplicationRuleList
 */
const se_ReplicationRuleList = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicationRule(entry, context);
    });
};

/**
 * serializeAws_json1_1RepositoryFilter
 */
const se_RepositoryFilter = (input: RepositoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.filterType != null && { filterType: input.filterType }),
  };
};

/**
 * serializeAws_json1_1RepositoryFilterList
 */
const se_RepositoryFilterList = (input: RepositoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RepositoryFilter(entry, context);
    });
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
 * serializeAws_json1_1ScanningConfigurationRepositoryNameList
 */
const se_ScanningConfigurationRepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ScanningRepositoryFilter
 */
const se_ScanningRepositoryFilter = (input: ScanningRepositoryFilter, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.filterType != null && { filterType: input.filterType }),
  };
};

/**
 * serializeAws_json1_1ScanningRepositoryFilterList
 */
const se_ScanningRepositoryFilterList = (input: ScanningRepositoryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScanningRepositoryFilter(entry, context);
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
 * serializeAws_json1_1StartImageScanRequest
 */
const se_StartImageScanRequest = (input: StartImageScanRequest, context: __SerdeContext): any => {
  return {
    ...(input.imageId != null && { imageId: se_ImageIdentifier(input.imageId, context) }),
    ...(input.registryId != null && { registryId: input.registryId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1StartLifecyclePolicyPreviewRequest
 */
const se_StartLifecyclePolicyPreviewRequest = (
  input: StartLifecyclePolicyPreviewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.lifecyclePolicyText != null && { lifecyclePolicyText: input.lifecyclePolicyText }),
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
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeList
 */
const de_AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
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
    proxyEndpoint: __expectString(output.proxyEndpoint),
  } as any;
};

/**
 * deserializeAws_json1_1AuthorizationDataList
 */
const de_AuthorizationDataList = (output: any, context: __SerdeContext): AuthorizationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AuthorizationData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AwsEcrContainerImageDetails
 */
const de_AwsEcrContainerImageDetails = (output: any, context: __SerdeContext): AwsEcrContainerImageDetails => {
  return {
    architecture: __expectString(output.architecture),
    author: __expectString(output.author),
    imageHash: __expectString(output.imageHash),
    imageTags: output.imageTags != null ? de_ImageTagsList(output.imageTags, context) : undefined,
    platform: __expectString(output.platform),
    pushedAt:
      output.pushedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.pushedAt))) : undefined,
    registry: __expectString(output.registry),
    repositoryName: __expectString(output.repositoryName),
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
 * deserializeAws_json1_1BatchGetImageResponse
 */
const de_BatchGetImageResponse = (output: any, context: __SerdeContext): BatchGetImageResponse => {
  return {
    failures: output.failures != null ? de_ImageFailureList(output.failures, context) : undefined,
    images: output.images != null ? de_ImageList(output.images, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetRepositoryScanningConfigurationResponse
 */
const de_BatchGetRepositoryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetRepositoryScanningConfigurationResponse => {
  return {
    failures:
      output.failures != null ? de_RepositoryScanningConfigurationFailureList(output.failures, context) : undefined,
    scanningConfigurations:
      output.scanningConfigurations != null
        ? de_RepositoryScanningConfigurationList(output.scanningConfigurations, context)
        : undefined,
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
 * deserializeAws_json1_1CreatePullThroughCacheRuleResponse
 */
const de_CreatePullThroughCacheRuleResponse = (
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

/**
 * deserializeAws_json1_1CreateRepositoryResponse
 */
const de_CreateRepositoryResponse = (output: any, context: __SerdeContext): CreateRepositoryResponse => {
  return {
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return {
    baseScore: __limitedParseDouble(output.baseScore),
    scoringVector: __expectString(output.scoringVector),
    source: __expectString(output.source),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1CvssScoreAdjustment
 */
const de_CvssScoreAdjustment = (output: any, context: __SerdeContext): CvssScoreAdjustment => {
  return {
    metric: __expectString(output.metric),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1CvssScoreAdjustmentList
 */
const de_CvssScoreAdjustmentList = (output: any, context: __SerdeContext): CvssScoreAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScoreAdjustment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return {
    adjustments: output.adjustments != null ? de_CvssScoreAdjustmentList(output.adjustments, context) : undefined,
    score: __limitedParseDouble(output.score),
    scoreSource: __expectString(output.scoreSource),
    scoringVector: __expectString(output.scoringVector),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteLifecyclePolicyResponse
 */
const de_DeleteLifecyclePolicyResponse = (output: any, context: __SerdeContext): DeleteLifecyclePolicyResponse => {
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

/**
 * deserializeAws_json1_1DeletePullThroughCacheRuleResponse
 */
const de_DeletePullThroughCacheRuleResponse = (
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

/**
 * deserializeAws_json1_1DeleteRegistryPolicyResponse
 */
const de_DeleteRegistryPolicyResponse = (output: any, context: __SerdeContext): DeleteRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
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
 * deserializeAws_json1_1DescribeImageReplicationStatusResponse
 */
const de_DescribeImageReplicationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageReplicationStatusResponse => {
  return {
    imageId: output.imageId != null ? de_ImageIdentifier(output.imageId, context) : undefined,
    replicationStatuses:
      output.replicationStatuses != null
        ? de_ImageReplicationStatusList(output.replicationStatuses, context)
        : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImageScanFindingsResponse
 */
const de_DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  return {
    imageId: output.imageId != null ? de_ImageIdentifier(output.imageId, context) : undefined,
    imageScanFindings:
      output.imageScanFindings != null ? de_ImageScanFindings(output.imageScanFindings, context) : undefined,
    imageScanStatus: output.imageScanStatus != null ? de_ImageScanStatus(output.imageScanStatus, context) : undefined,
    nextToken: __expectString(output.nextToken),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
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
 * deserializeAws_json1_1DescribePullThroughCacheRulesResponse
 */
const de_DescribePullThroughCacheRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribePullThroughCacheRulesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    pullThroughCacheRules:
      output.pullThroughCacheRules != null
        ? de_PullThroughCacheRuleList(output.pullThroughCacheRules, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRegistryResponse
 */
const de_DescribeRegistryResponse = (output: any, context: __SerdeContext): DescribeRegistryResponse => {
  return {
    registryId: __expectString(output.registryId),
    replicationConfiguration:
      output.replicationConfiguration != null
        ? de_ReplicationConfiguration(output.replicationConfiguration, context)
        : undefined,
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
 * deserializeAws_json1_1EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    encryptionType: __expectString(output.encryptionType),
    kmsKey: __expectString(output.kmsKey),
  } as any;
};

/**
 * deserializeAws_json1_1EnhancedImageScanFinding
 */
const de_EnhancedImageScanFinding = (output: any, context: __SerdeContext): EnhancedImageScanFinding => {
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
        ? de_PackageVulnerabilityDetails(output.packageVulnerabilityDetails, context)
        : undefined,
    remediation: output.remediation != null ? de_Remediation(output.remediation, context) : undefined,
    resources: output.resources != null ? de_ResourceList(output.resources, context) : undefined,
    score: __limitedParseDouble(output.score),
    scoreDetails: output.scoreDetails != null ? de_ScoreDetails(output.scoreDetails, context) : undefined,
    severity: __expectString(output.severity),
    status: __expectString(output.status),
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnhancedImageScanFindingList
 */
const de_EnhancedImageScanFindingList = (output: any, context: __SerdeContext): EnhancedImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnhancedImageScanFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FindingSeverityCounts
 */
const de_FindingSeverityCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [FindingSeverity | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1GetAuthorizationTokenResponse
 */
const de_GetAuthorizationTokenResponse = (output: any, context: __SerdeContext): GetAuthorizationTokenResponse => {
  return {
    authorizationData:
      output.authorizationData != null ? de_AuthorizationDataList(output.authorizationData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDownloadUrlForLayerResponse
 */
const de_GetDownloadUrlForLayerResponse = (output: any, context: __SerdeContext): GetDownloadUrlForLayerResponse => {
  return {
    downloadUrl: __expectString(output.downloadUrl),
    layerDigest: __expectString(output.layerDigest),
  } as any;
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyPreviewResponse
 */
const de_GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  return {
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    nextToken: __expectString(output.nextToken),
    previewResults:
      output.previewResults != null ? de_LifecyclePolicyPreviewResultList(output.previewResults, context) : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
    status: __expectString(output.status),
    summary: output.summary != null ? de_LifecyclePolicyPreviewSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyResponse
 */
const de_GetLifecyclePolicyResponse = (output: any, context: __SerdeContext): GetLifecyclePolicyResponse => {
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

/**
 * deserializeAws_json1_1GetRegistryPolicyResponse
 */
const de_GetRegistryPolicyResponse = (output: any, context: __SerdeContext): GetRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
  } as any;
};

/**
 * deserializeAws_json1_1GetRegistryScanningConfigurationResponse
 */
const de_GetRegistryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetRegistryScanningConfigurationResponse => {
  return {
    registryId: __expectString(output.registryId),
    scanningConfiguration:
      output.scanningConfiguration != null
        ? de_RegistryScanningConfiguration(output.scanningConfiguration, context)
        : undefined,
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
    imageScanFindingsSummary:
      output.imageScanFindingsSummary != null
        ? de_ImageScanFindingsSummary(output.imageScanFindingsSummary, context)
        : undefined,
    imageScanStatus: output.imageScanStatus != null ? de_ImageScanStatus(output.imageScanStatus, context) : undefined,
    imageSizeInBytes: __expectLong(output.imageSizeInBytes),
    imageTags: output.imageTags != null ? de_ImageTagList(output.imageTags, context) : undefined,
    lastRecordedPullTime:
      output.lastRecordedPullTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRecordedPullTime)))
        : undefined,
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
 * deserializeAws_json1_1ImageList
 */
const de_ImageList = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Image(entry, context);
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
 * deserializeAws_json1_1ImageReplicationStatus
 */
const de_ImageReplicationStatus = (output: any, context: __SerdeContext): ImageReplicationStatus => {
  return {
    failureCode: __expectString(output.failureCode),
    region: __expectString(output.region),
    registryId: __expectString(output.registryId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ImageReplicationStatusList
 */
const de_ImageReplicationStatusList = (output: any, context: __SerdeContext): ImageReplicationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageReplicationStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageScanFinding
 */
const de_ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return {
    attributes: output.attributes != null ? de_AttributeList(output.attributes, context) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    severity: __expectString(output.severity),
    uri: __expectString(output.uri),
  } as any;
};

/**
 * deserializeAws_json1_1ImageScanFindingList
 */
const de_ImageScanFindingList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageScanFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageScanFindings
 */
const de_ImageScanFindings = (output: any, context: __SerdeContext): ImageScanFindings => {
  return {
    enhancedFindings:
      output.enhancedFindings != null ? de_EnhancedImageScanFindingList(output.enhancedFindings, context) : undefined,
    findingSeverityCounts:
      output.findingSeverityCounts != null
        ? de_FindingSeverityCounts(output.findingSeverityCounts, context)
        : undefined,
    findings: output.findings != null ? de_ImageScanFindingList(output.findings, context) : undefined,
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

/**
 * deserializeAws_json1_1ImageScanFindingsSummary
 */
const de_ImageScanFindingsSummary = (output: any, context: __SerdeContext): ImageScanFindingsSummary => {
  return {
    findingSeverityCounts:
      output.findingSeverityCounts != null
        ? de_FindingSeverityCounts(output.findingSeverityCounts, context)
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

/**
 * deserializeAws_json1_1ImageScanningConfiguration
 */
const de_ImageScanningConfiguration = (output: any, context: __SerdeContext): ImageScanningConfiguration => {
  return {
    scanOnPush: __expectBoolean(output.scanOnPush),
  } as any;
};

/**
 * deserializeAws_json1_1ImageScanStatus
 */
const de_ImageScanStatus = (output: any, context: __SerdeContext): ImageScanStatus => {
  return {
    description: __expectString(output.description),
    status: __expectString(output.status),
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
 * deserializeAws_json1_1ImageTagsList
 */
const de_ImageTagsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1KmsException
 */
const de_KmsException = (output: any, context: __SerdeContext): KmsException => {
  return {
    kmsError: __expectString(output.kmsError),
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
 * deserializeAws_json1_1LayerInaccessibleException
 */
const de_LayerInaccessibleException = (output: any, context: __SerdeContext): LayerInaccessibleException => {
  return {
    message: __expectString(output.message),
  } as any;
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
 * deserializeAws_json1_1LifecyclePolicyNotFoundException
 */
const de_LifecyclePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewInProgressException
 */
const de_LifecyclePolicyPreviewInProgressException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewNotFoundException
 */
const de_LifecyclePolicyPreviewNotFoundException = (
  output: any,
  context: __SerdeContext
): LifecyclePolicyPreviewNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewResult
 */
const de_LifecyclePolicyPreviewResult = (output: any, context: __SerdeContext): LifecyclePolicyPreviewResult => {
  return {
    action: output.action != null ? de_LifecyclePolicyRuleAction(output.action, context) : undefined,
    appliedRulePriority: __expectInt32(output.appliedRulePriority),
    imageDigest: __expectString(output.imageDigest),
    imagePushedAt:
      output.imagePushedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.imagePushedAt)))
        : undefined,
    imageTags: output.imageTags != null ? de_ImageTagList(output.imageTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewResultList
 */
const de_LifecyclePolicyPreviewResultList = (output: any, context: __SerdeContext): LifecyclePolicyPreviewResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LifecyclePolicyPreviewResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewSummary
 */
const de_LifecyclePolicyPreviewSummary = (output: any, context: __SerdeContext): LifecyclePolicyPreviewSummary => {
  return {
    expiringImageTotalCount: __expectInt32(output.expiringImageTotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyRuleAction
 */
const de_LifecyclePolicyRuleAction = (output: any, context: __SerdeContext): LifecyclePolicyRuleAction => {
  return {
    type: __expectString(output.type),
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
 * deserializeAws_json1_1ListImagesResponse
 */
const de_ListImagesResponse = (output: any, context: __SerdeContext): ListImagesResponse => {
  return {
    imageIds: output.imageIds != null ? de_ImageIdentifierList(output.imageIds, context) : undefined,
    nextToken: __expectString(output.nextToken),
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
 * deserializeAws_json1_1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return {
    cvss: output.cvss != null ? de_CvssScoreList(output.cvss, context) : undefined,
    referenceUrls: output.referenceUrls != null ? de_ReferenceUrlsList(output.referenceUrls, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? de_RelatedVulnerabilitiesList(output.relatedVulnerabilities, context)
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
      output.vulnerablePackages != null ? de_VulnerablePackagesList(output.vulnerablePackages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PullThroughCacheRule
 */
const de_PullThroughCacheRule = (output: any, context: __SerdeContext): PullThroughCacheRule => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ecrRepositoryPrefix: __expectString(output.ecrRepositoryPrefix),
    registryId: __expectString(output.registryId),
    upstreamRegistryUrl: __expectString(output.upstreamRegistryUrl),
  } as any;
};

/**
 * deserializeAws_json1_1PullThroughCacheRuleAlreadyExistsException
 */
const de_PullThroughCacheRuleAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PullThroughCacheRuleAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullThroughCacheRuleList
 */
const de_PullThroughCacheRuleList = (output: any, context: __SerdeContext): PullThroughCacheRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PullThroughCacheRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PullThroughCacheRuleNotFoundException
 */
const de_PullThroughCacheRuleNotFoundException = (
  output: any,
  context: __SerdeContext
): PullThroughCacheRuleNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
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
 * deserializeAws_json1_1PutImageScanningConfigurationResponse
 */
const de_PutImageScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutImageScanningConfigurationResponse => {
  return {
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? de_ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PutImageTagMutabilityResponse
 */
const de_PutImageTagMutabilityResponse = (output: any, context: __SerdeContext): PutImageTagMutabilityResponse => {
  return {
    imageTagMutability: __expectString(output.imageTagMutability),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PutLifecyclePolicyResponse
 */
const de_PutLifecyclePolicyResponse = (output: any, context: __SerdeContext): PutLifecyclePolicyResponse => {
  return {
    lifecyclePolicyText: __expectString(output.lifecyclePolicyText),
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PutRegistryPolicyResponse
 */
const de_PutRegistryPolicyResponse = (output: any, context: __SerdeContext): PutRegistryPolicyResponse => {
  return {
    policyText: __expectString(output.policyText),
    registryId: __expectString(output.registryId),
  } as any;
};

/**
 * deserializeAws_json1_1PutRegistryScanningConfigurationResponse
 */
const de_PutRegistryScanningConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutRegistryScanningConfigurationResponse => {
  return {
    registryScanningConfiguration:
      output.registryScanningConfiguration != null
        ? de_RegistryScanningConfiguration(output.registryScanningConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutReplicationConfigurationResponse
 */
const de_PutReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutReplicationConfigurationResponse => {
  return {
    replicationConfiguration:
      output.replicationConfiguration != null
        ? de_ReplicationConfiguration(output.replicationConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    text: __expectString(output.text),
    url: __expectString(output.url),
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
 * deserializeAws_json1_1ReferenceUrlsList
 */
const de_ReferenceUrlsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RegistryPolicyNotFoundException
 */
const de_RegistryPolicyNotFoundException = (output: any, context: __SerdeContext): RegistryPolicyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryScanningConfiguration
 */
const de_RegistryScanningConfiguration = (output: any, context: __SerdeContext): RegistryScanningConfiguration => {
  return {
    rules: output.rules != null ? de_RegistryScanningRuleList(output.rules, context) : undefined,
    scanType: __expectString(output.scanType),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryScanningRule
 */
const de_RegistryScanningRule = (output: any, context: __SerdeContext): RegistryScanningRule => {
  return {
    repositoryFilters:
      output.repositoryFilters != null ? de_ScanningRepositoryFilterList(output.repositoryFilters, context) : undefined,
    scanFrequency: __expectString(output.scanFrequency),
  } as any;
};

/**
 * deserializeAws_json1_1RegistryScanningRuleList
 */
const de_RegistryScanningRuleList = (output: any, context: __SerdeContext): RegistryScanningRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegistryScanningRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelatedVulnerabilitiesList
 */
const de_RelatedVulnerabilitiesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Remediation
 */
const de_Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    recommendation: output.recommendation != null ? de_Recommendation(output.recommendation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationConfiguration
 */
const de_ReplicationConfiguration = (output: any, context: __SerdeContext): ReplicationConfiguration => {
  return {
    rules: output.rules != null ? de_ReplicationRuleList(output.rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationDestination
 */
const de_ReplicationDestination = (output: any, context: __SerdeContext): ReplicationDestination => {
  return {
    region: __expectString(output.region),
    registryId: __expectString(output.registryId),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationDestinationList
 */
const de_ReplicationDestinationList = (output: any, context: __SerdeContext): ReplicationDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationRule
 */
const de_ReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  return {
    destinations: output.destinations != null ? de_ReplicationDestinationList(output.destinations, context) : undefined,
    repositoryFilters:
      output.repositoryFilters != null ? de_RepositoryFilterList(output.repositoryFilters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationRuleList
 */
const de_ReplicationRuleList = (output: any, context: __SerdeContext): ReplicationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Repository
 */
const de_Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    encryptionConfiguration:
      output.encryptionConfiguration != null
        ? de_EncryptionConfiguration(output.encryptionConfiguration, context)
        : undefined,
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? de_ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    imageTagMutability: __expectString(output.imageTagMutability),
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
 * deserializeAws_json1_1RepositoryFilter
 */
const de_RepositoryFilter = (output: any, context: __SerdeContext): RepositoryFilter => {
  return {
    filter: __expectString(output.filter),
    filterType: __expectString(output.filterType),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryFilterList
 */
const de_RepositoryFilterList = (output: any, context: __SerdeContext): RepositoryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryFilter(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_1RepositoryScanningConfiguration
 */
const de_RepositoryScanningConfiguration = (output: any, context: __SerdeContext): RepositoryScanningConfiguration => {
  return {
    appliedScanFilters:
      output.appliedScanFilters != null
        ? de_ScanningRepositoryFilterList(output.appliedScanFilters, context)
        : undefined,
    repositoryArn: __expectString(output.repositoryArn),
    repositoryName: __expectString(output.repositoryName),
    scanFrequency: __expectString(output.scanFrequency),
    scanOnPush: __expectBoolean(output.scanOnPush),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryScanningConfigurationFailure
 */
const de_RepositoryScanningConfigurationFailure = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfigurationFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryScanningConfigurationFailureList
 */
const de_RepositoryScanningConfigurationFailureList = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfigurationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryScanningConfigurationFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryScanningConfigurationList
 */
const de_RepositoryScanningConfigurationList = (
  output: any,
  context: __SerdeContext
): RepositoryScanningConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryScanningConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    details: output.details != null ? de_ResourceDetails(output.details, context) : undefined,
    id: __expectString(output.id),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    awsEcrContainerImage:
      output.awsEcrContainerImage != null
        ? de_AwsEcrContainerImageDetails(output.awsEcrContainerImage, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScanningRepositoryFilter
 */
const de_ScanningRepositoryFilter = (output: any, context: __SerdeContext): ScanningRepositoryFilter => {
  return {
    filter: __expectString(output.filter),
    filterType: __expectString(output.filterType),
  } as any;
};

/**
 * deserializeAws_json1_1ScanningRepositoryFilterList
 */
const de_ScanningRepositoryFilterList = (output: any, context: __SerdeContext): ScanningRepositoryFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScanningRepositoryFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScanNotFoundException
 */
const de_ScanNotFoundException = (output: any, context: __SerdeContext): ScanNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ScoreDetails
 */
const de_ScoreDetails = (output: any, context: __SerdeContext): ScoreDetails => {
  return {
    cvss: output.cvss != null ? de_CvssScoreDetails(output.cvss, context) : undefined,
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
 * deserializeAws_json1_1StartImageScanResponse
 */
const de_StartImageScanResponse = (output: any, context: __SerdeContext): StartImageScanResponse => {
  return {
    imageId: output.imageId != null ? de_ImageIdentifier(output.imageId, context) : undefined,
    imageScanStatus: output.imageScanStatus != null ? de_ImageScanStatus(output.imageScanStatus, context) : undefined,
    registryId: __expectString(output.registryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1StartLifecyclePolicyPreviewResponse
 */
const de_StartLifecyclePolicyPreviewResponse = (
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
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
 * deserializeAws_json1_1UnsupportedImageTypeException
 */
const de_UnsupportedImageTypeException = (output: any, context: __SerdeContext): UnsupportedImageTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedUpstreamRegistryException
 */
const de_UnsupportedUpstreamRegistryException = (
  output: any,
  context: __SerdeContext
): UnsupportedUpstreamRegistryException => {
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

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1VulnerablePackage
 */
const de_VulnerablePackage = (output: any, context: __SerdeContext): VulnerablePackage => {
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

/**
 * deserializeAws_json1_1VulnerablePackagesList
 */
const de_VulnerablePackagesList = (output: any, context: __SerdeContext): VulnerablePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VulnerablePackage(entry, context);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonEC2ContainerRegistry_V20150921.${operation}`,
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
