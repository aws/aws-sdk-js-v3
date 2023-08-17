// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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
  AuthorizationData,
  AwsEcrContainerImageDetails,
  BatchCheckLayerAvailabilityRequest,
  BatchDeleteImageRequest,
  BatchGetImageRequest,
  BatchGetRepositoryScanningConfigurationRequest,
  CompleteLayerUploadRequest,
  CreatePullThroughCacheRuleRequest,
  CreatePullThroughCacheRuleResponse,
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  CvssScore,
  CvssScoreDetails,
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeletePullThroughCacheRuleRequest,
  DeletePullThroughCacheRuleResponse,
  DeleteRegistryPolicyRequest,
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DescribeImageReplicationStatusRequest,
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsResponse,
  DescribeImagesFilter,
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribePullThroughCacheRulesRequest,
  DescribePullThroughCacheRulesResponse,
  DescribeRegistryRequest,
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  EmptyUploadException,
  EncryptionConfiguration,
  EnhancedImageScanFinding,
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetDownloadUrlForLayerRequest,
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetRegistryPolicyRequest,
  GetRegistryScanningConfigurationRequest,
  GetRepositoryPolicyRequest,
  ImageAlreadyExistsException,
  ImageDetail,
  ImageDigestDoesNotMatchException,
  ImageIdentifier,
  ImageNotFoundException,
  ImageScanFindings,
  ImageScanFindingsSummary,
  ImageScanningConfiguration,
  ImageTagAlreadyExistsException,
  InitiateLayerUploadRequest,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  KmsException,
  LayerAlreadyExistsException,
  LayerInaccessibleException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewFilter,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewNotFoundException,
  LifecyclePolicyPreviewResult,
  LimitExceededException,
  ListImagesFilter,
  ListImagesRequest,
  ListTagsForResourceRequest,
  PackageVulnerabilityDetails,
  PullThroughCacheRule,
  PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleNotFoundException,
  PutImageRequest,
  PutImageScanningConfigurationRequest,
  PutImageTagMutabilityRequest,
  PutLifecyclePolicyRequest,
  PutRegistryPolicyRequest,
  PutRegistryScanningConfigurationRequest,
  PutReplicationConfigurationRequest,
  ReferencedImagesNotFoundException,
  RegistryPolicyNotFoundException,
  RegistryScanningRule,
  ReplicationConfiguration,
  ReplicationDestination,
  ReplicationRule,
  Repository,
  RepositoryAlreadyExistsException,
  RepositoryFilter,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  Resource,
  ResourceDetails,
  ScanningRepositoryFilter,
  ScanNotFoundException,
  ScoreDetails,
  ServerException,
  SetRepositoryPolicyRequest,
  StartImageScanRequest,
  StartLifecyclePolicyPreviewRequest,
  Tag,
  TagResourceRequest,
  TooManyTagsException,
  UnsupportedImageTypeException,
  UnsupportedUpstreamRegistryException,
  UntagResourceRequest,
  UploadLayerPartRequest,
  UploadNotFoundException,
  ValidationException,
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
 * serializeAws_json1_1BatchGetImageCommand
 */
export const se_BatchGetImageCommand = async (
  input: BatchGetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetImage");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1CreatePullThroughCacheRuleCommand
 */
export const se_CreatePullThroughCacheRuleCommand = async (
  input: CreatePullThroughCacheRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePullThroughCacheRule");
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1DescribeImageReplicationStatusCommand
 */
export const se_DescribeImageReplicationStatusCommand = async (
  input: DescribeImageReplicationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageReplicationStatus");
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
 * serializeAws_json1_1DescribeImageScanFindingsCommand
 */
export const se_DescribeImageScanFindingsCommand = async (
  input: DescribeImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageScanFindings");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1GetDownloadUrlForLayerCommand
 */
export const se_GetDownloadUrlForLayerCommand = async (
  input: GetDownloadUrlForLayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDownloadUrlForLayer");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImages");
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
 * serializeAws_json1_1PutImageScanningConfigurationCommand
 */
export const se_PutImageScanningConfigurationCommand = async (
  input: PutImageScanningConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutImageScanningConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1StartImageScanCommand
 */
export const se_StartImageScanCommand = async (
  input: StartImageScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImageScan");
  let body: any;
  body = JSON.stringify(_json(input));
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchGetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchGetRepositoryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeImageReplicationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "com.amazonaws.ecr#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.ecr#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: GetDownloadUrlForLayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutImageScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutImageTagMutabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRegistryPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRegistryScanningConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartImageScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartLifecyclePolicyPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
 * deserializeAws_json1_1KmsExceptionRes
 */
const de_KmsExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1LifecyclePolicyNotFoundExceptionRes
 */
const de_LifecyclePolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecyclePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1ScanNotFoundExceptionRes
 */
const de_ScanNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScanNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1UnsupportedImageTypeExceptionRes
 */
const de_UnsupportedImageTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedImageTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_BatchCheckLayerAvailabilityRequest omitted.

// se_BatchDeleteImageRequest omitted.

// se_BatchedOperationLayerDigestList omitted.

// se_BatchGetImageRequest omitted.

// se_BatchGetRepositoryScanningConfigurationRequest omitted.

// se_CompleteLayerUploadRequest omitted.

// se_CreatePullThroughCacheRuleRequest omitted.

// se_CreateRepositoryRequest omitted.

// se_DeleteLifecyclePolicyRequest omitted.

// se_DeletePullThroughCacheRuleRequest omitted.

// se_DeleteRegistryPolicyRequest omitted.

// se_DeleteRepositoryPolicyRequest omitted.

// se_DeleteRepositoryRequest omitted.

// se_DescribeImageReplicationStatusRequest omitted.

// se_DescribeImageScanFindingsRequest omitted.

// se_DescribeImagesFilter omitted.

// se_DescribeImagesRequest omitted.

// se_DescribePullThroughCacheRulesRequest omitted.

// se_DescribeRegistryRequest omitted.

// se_DescribeRepositoriesRequest omitted.

// se_EncryptionConfiguration omitted.

// se_GetAuthorizationTokenRegistryIdList omitted.

// se_GetAuthorizationTokenRequest omitted.

// se_GetDownloadUrlForLayerRequest omitted.

// se_GetLifecyclePolicyPreviewRequest omitted.

// se_GetLifecyclePolicyRequest omitted.

// se_GetRegistryPolicyRequest omitted.

// se_GetRegistryScanningConfigurationRequest omitted.

// se_GetRepositoryPolicyRequest omitted.

// se_ImageIdentifier omitted.

// se_ImageIdentifierList omitted.

// se_ImageScanningConfiguration omitted.

// se_InitiateLayerUploadRequest omitted.

// se_LayerDigestList omitted.

// se_LifecyclePolicyPreviewFilter omitted.

// se_ListImagesFilter omitted.

// se_ListImagesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MediaTypeList omitted.

// se_PullThroughCacheRuleRepositoryPrefixList omitted.

// se_PutImageRequest omitted.

// se_PutImageScanningConfigurationRequest omitted.

// se_PutImageTagMutabilityRequest omitted.

// se_PutLifecyclePolicyRequest omitted.

// se_PutRegistryPolicyRequest omitted.

// se_PutRegistryScanningConfigurationRequest omitted.

// se_PutReplicationConfigurationRequest omitted.

// se_RegistryScanningRule omitted.

// se_RegistryScanningRuleList omitted.

// se_ReplicationConfiguration omitted.

// se_ReplicationDestination omitted.

// se_ReplicationDestinationList omitted.

// se_ReplicationRule omitted.

// se_ReplicationRuleList omitted.

// se_RepositoryFilter omitted.

// se_RepositoryFilterList omitted.

// se_RepositoryNameList omitted.

// se_ScanningConfigurationRepositoryNameList omitted.

// se_ScanningRepositoryFilter omitted.

// se_ScanningRepositoryFilterList omitted.

// se_SetRepositoryPolicyRequest omitted.

// se_StartImageScanRequest omitted.

// se_StartLifecyclePolicyPreviewRequest omitted.

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

// de_Attribute omitted.

// de_AttributeList omitted.

/**
 * deserializeAws_json1_1AuthorizationData
 */
const de_AuthorizationData = (output: any, context: __SerdeContext): AuthorizationData => {
  return take(output, {
    authorizationToken: __expectString,
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    proxyEndpoint: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AuthorizationDataList
 */
const de_AuthorizationDataList = (output: any, context: __SerdeContext): AuthorizationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthorizationData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AwsEcrContainerImageDetails
 */
const de_AwsEcrContainerImageDetails = (output: any, context: __SerdeContext): AwsEcrContainerImageDetails => {
  return take(output, {
    architecture: __expectString,
    author: __expectString,
    imageHash: __expectString,
    imageTags: _json,
    platform: __expectString,
    pushedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registry: __expectString,
    repositoryName: __expectString,
  }) as any;
};

// de_BatchCheckLayerAvailabilityResponse omitted.

// de_BatchDeleteImageResponse omitted.

// de_BatchGetImageResponse omitted.

// de_BatchGetRepositoryScanningConfigurationResponse omitted.

// de_CompleteLayerUploadResponse omitted.

/**
 * deserializeAws_json1_1CreatePullThroughCacheRuleResponse
 */
const de_CreatePullThroughCacheRuleResponse = (
  output: any,
  context: __SerdeContext
): CreatePullThroughCacheRuleResponse => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ecrRepositoryPrefix: __expectString,
    registryId: __expectString,
    upstreamRegistryUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRepositoryResponse
 */
const de_CreateRepositoryResponse = (output: any, context: __SerdeContext): CreateRepositoryResponse => {
  return take(output, {
    repository: (_: any) => de_Repository(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
    source: __expectString,
    version: __expectString,
  }) as any;
};

// de_CvssScoreAdjustment omitted.

// de_CvssScoreAdjustmentList omitted.

/**
 * deserializeAws_json1_1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return take(output, {
    adjustments: _json,
    score: __limitedParseDouble,
    scoreSource: __expectString,
    scoringVector: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CvssScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteLifecyclePolicyResponse
 */
const de_DeleteLifecyclePolicyResponse = (output: any, context: __SerdeContext): DeleteLifecyclePolicyResponse => {
  return take(output, {
    lastEvaluatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecyclePolicyText: __expectString,
    registryId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeletePullThroughCacheRuleResponse
 */
const de_DeletePullThroughCacheRuleResponse = (
  output: any,
  context: __SerdeContext
): DeletePullThroughCacheRuleResponse => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ecrRepositoryPrefix: __expectString,
    registryId: __expectString,
    upstreamRegistryUrl: __expectString,
  }) as any;
};

// de_DeleteRegistryPolicyResponse omitted.

// de_DeleteRepositoryPolicyResponse omitted.

/**
 * deserializeAws_json1_1DeleteRepositoryResponse
 */
const de_DeleteRepositoryResponse = (output: any, context: __SerdeContext): DeleteRepositoryResponse => {
  return take(output, {
    repository: (_: any) => de_Repository(_, context),
  }) as any;
};

// de_DescribeImageReplicationStatusResponse omitted.

/**
 * deserializeAws_json1_1DescribeImageScanFindingsResponse
 */
const de_DescribeImageScanFindingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeImageScanFindingsResponse => {
  return take(output, {
    imageId: _json,
    imageScanFindings: (_: any) => de_ImageScanFindings(_, context),
    imageScanStatus: _json,
    nextToken: __expectString,
    registryId: __expectString,
    repositoryName: __expectString,
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
 * deserializeAws_json1_1DescribePullThroughCacheRulesResponse
 */
const de_DescribePullThroughCacheRulesResponse = (
  output: any,
  context: __SerdeContext
): DescribePullThroughCacheRulesResponse => {
  return take(output, {
    nextToken: __expectString,
    pullThroughCacheRules: (_: any) => de_PullThroughCacheRuleList(_, context),
  }) as any;
};

// de_DescribeRegistryResponse omitted.

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

// de_EncryptionConfiguration omitted.

/**
 * deserializeAws_json1_1EnhancedImageScanFinding
 */
const de_EnhancedImageScanFinding = (output: any, context: __SerdeContext): EnhancedImageScanFinding => {
  return take(output, {
    awsAccountId: __expectString,
    description: __expectString,
    findingArn: __expectString,
    firstObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    packageVulnerabilityDetails: (_: any) => de_PackageVulnerabilityDetails(_, context),
    remediation: _json,
    resources: (_: any) => de_ResourceList(_, context),
    score: __limitedParseDouble,
    scoreDetails: (_: any) => de_ScoreDetails(_, context),
    severity: __expectString,
    status: __expectString,
    title: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EnhancedImageScanFindingList
 */
const de_EnhancedImageScanFindingList = (output: any, context: __SerdeContext): EnhancedImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnhancedImageScanFinding(entry, context);
    });
  return retVal;
};

// de_FindingSeverityCounts omitted.

/**
 * deserializeAws_json1_1GetAuthorizationTokenResponse
 */
const de_GetAuthorizationTokenResponse = (output: any, context: __SerdeContext): GetAuthorizationTokenResponse => {
  return take(output, {
    authorizationData: (_: any) => de_AuthorizationDataList(_, context),
  }) as any;
};

// de_GetDownloadUrlForLayerResponse omitted.

/**
 * deserializeAws_json1_1GetLifecyclePolicyPreviewResponse
 */
const de_GetLifecyclePolicyPreviewResponse = (
  output: any,
  context: __SerdeContext
): GetLifecyclePolicyPreviewResponse => {
  return take(output, {
    lifecyclePolicyText: __expectString,
    nextToken: __expectString,
    previewResults: (_: any) => de_LifecyclePolicyPreviewResultList(_, context),
    registryId: __expectString,
    repositoryName: __expectString,
    status: __expectString,
    summary: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyResponse
 */
const de_GetLifecyclePolicyResponse = (output: any, context: __SerdeContext): GetLifecyclePolicyResponse => {
  return take(output, {
    lastEvaluatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecyclePolicyText: __expectString,
    registryId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

// de_GetRegistryPolicyResponse omitted.

// de_GetRegistryScanningConfigurationResponse omitted.

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
    imageScanFindingsSummary: (_: any) => de_ImageScanFindingsSummary(_, context),
    imageScanStatus: _json,
    imageSizeInBytes: __expectLong,
    imageTags: _json,
    lastRecordedPullTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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

// de_ImageList omitted.

// de_ImageNotFoundException omitted.

// de_ImageReplicationStatus omitted.

// de_ImageReplicationStatusList omitted.

// de_ImageScanFinding omitted.

// de_ImageScanFindingList omitted.

/**
 * deserializeAws_json1_1ImageScanFindings
 */
const de_ImageScanFindings = (output: any, context: __SerdeContext): ImageScanFindings => {
  return take(output, {
    enhancedFindings: (_: any) => de_EnhancedImageScanFindingList(_, context),
    findingSeverityCounts: _json,
    findings: _json,
    imageScanCompletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilitySourceUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ImageScanFindingsSummary
 */
const de_ImageScanFindingsSummary = (output: any, context: __SerdeContext): ImageScanFindingsSummary => {
  return take(output, {
    findingSeverityCounts: _json,
    imageScanCompletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilitySourceUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ImageScanningConfiguration omitted.

// de_ImageScanStatus omitted.

// de_ImageTagAlreadyExistsException omitted.

// de_ImageTagList omitted.

// de_ImageTagsList omitted.

// de_InitiateLayerUploadResponse omitted.

// de_InvalidLayerException omitted.

// de_InvalidLayerPartException omitted.

// de_InvalidParameterException omitted.

// de_InvalidTagParameterException omitted.

// de_KmsException omitted.

// de_Layer omitted.

// de_LayerAlreadyExistsException omitted.

// de_LayerFailure omitted.

// de_LayerFailureList omitted.

// de_LayerInaccessibleException omitted.

// de_LayerList omitted.

// de_LayerPartTooSmallException omitted.

// de_LayersNotFoundException omitted.

// de_LifecyclePolicyNotFoundException omitted.

// de_LifecyclePolicyPreviewInProgressException omitted.

// de_LifecyclePolicyPreviewNotFoundException omitted.

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewResult
 */
const de_LifecyclePolicyPreviewResult = (output: any, context: __SerdeContext): LifecyclePolicyPreviewResult => {
  return take(output, {
    action: _json,
    appliedRulePriority: __expectInt32,
    imageDigest: __expectString,
    imagePushedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageTags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1LifecyclePolicyPreviewResultList
 */
const de_LifecyclePolicyPreviewResultList = (output: any, context: __SerdeContext): LifecyclePolicyPreviewResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecyclePolicyPreviewResult(entry, context);
    });
  return retVal;
};

// de_LifecyclePolicyPreviewSummary omitted.

// de_LifecyclePolicyRuleAction omitted.

// de_LimitExceededException omitted.

// de_ListImagesResponse omitted.

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return take(output, {
    cvss: (_: any) => de_CvssScoreList(_, context),
    referenceUrls: _json,
    relatedVulnerabilities: _json,
    source: __expectString,
    sourceUrl: __expectString,
    vendorCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vendorSeverity: __expectString,
    vendorUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilityId: __expectString,
    vulnerablePackages: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PullThroughCacheRule
 */
const de_PullThroughCacheRule = (output: any, context: __SerdeContext): PullThroughCacheRule => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ecrRepositoryPrefix: __expectString,
    registryId: __expectString,
    upstreamRegistryUrl: __expectString,
  }) as any;
};

// de_PullThroughCacheRuleAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1PullThroughCacheRuleList
 */
const de_PullThroughCacheRuleList = (output: any, context: __SerdeContext): PullThroughCacheRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PullThroughCacheRule(entry, context);
    });
  return retVal;
};

// de_PullThroughCacheRuleNotFoundException omitted.

// de_PutImageResponse omitted.

// de_PutImageScanningConfigurationResponse omitted.

// de_PutImageTagMutabilityResponse omitted.

// de_PutLifecyclePolicyResponse omitted.

// de_PutRegistryPolicyResponse omitted.

// de_PutRegistryScanningConfigurationResponse omitted.

// de_PutReplicationConfigurationResponse omitted.

// de_Recommendation omitted.

// de_ReferencedImagesNotFoundException omitted.

// de_ReferenceUrlsList omitted.

// de_RegistryPolicyNotFoundException omitted.

// de_RegistryScanningConfiguration omitted.

// de_RegistryScanningRule omitted.

// de_RegistryScanningRuleList omitted.

// de_RelatedVulnerabilitiesList omitted.

// de_Remediation omitted.

// de_ReplicationConfiguration omitted.

// de_ReplicationDestination omitted.

// de_ReplicationDestinationList omitted.

// de_ReplicationRule omitted.

// de_ReplicationRuleList omitted.

/**
 * deserializeAws_json1_1Repository
 */
const de_Repository = (output: any, context: __SerdeContext): Repository => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionConfiguration: _json,
    imageScanningConfiguration: _json,
    imageTagMutability: __expectString,
    registryId: __expectString,
    repositoryArn: __expectString,
    repositoryName: __expectString,
    repositoryUri: __expectString,
  }) as any;
};

// de_RepositoryAlreadyExistsException omitted.

// de_RepositoryFilter omitted.

// de_RepositoryFilterList omitted.

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

// de_RepositoryScanningConfiguration omitted.

// de_RepositoryScanningConfigurationFailure omitted.

// de_RepositoryScanningConfigurationFailureList omitted.

// de_RepositoryScanningConfigurationList omitted.

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    details: (_: any) => de_ResourceDetails(_, context),
    id: __expectString,
    tags: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return take(output, {
    awsEcrContainerImage: (_: any) => de_AwsEcrContainerImageDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

// de_ScanningRepositoryFilter omitted.

// de_ScanningRepositoryFilterList omitted.

// de_ScanNotFoundException omitted.

/**
 * deserializeAws_json1_1ScoreDetails
 */
const de_ScoreDetails = (output: any, context: __SerdeContext): ScoreDetails => {
  return take(output, {
    cvss: (_: any) => de_CvssScoreDetails(_, context),
  }) as any;
};

// de_ServerException omitted.

// de_SetRepositoryPolicyResponse omitted.

// de_StartImageScanResponse omitted.

// de_StartLifecyclePolicyPreviewResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TooManyTagsException omitted.

// de_UnsupportedImageTypeException omitted.

// de_UnsupportedUpstreamRegistryException omitted.

// de_UntagResourceResponse omitted.

// de_UploadLayerPartResponse omitted.

// de_UploadNotFoundException omitted.

// de_ValidationException omitted.

// de_VulnerablePackage omitted.

// de_VulnerablePackagesList omitted.

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
