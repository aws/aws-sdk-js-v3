// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCheckLayerAvailabilityCommand,
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "./commands/BatchCheckLayerAvailabilityCommand";
import {
  BatchDeleteImageCommand,
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput,
} from "./commands/BatchDeleteImageCommand";
import {
  BatchGetImageCommand,
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput,
} from "./commands/BatchGetImageCommand";
import {
  BatchGetRepositoryScanningConfigurationCommand,
  BatchGetRepositoryScanningConfigurationCommandInput,
  BatchGetRepositoryScanningConfigurationCommandOutput,
} from "./commands/BatchGetRepositoryScanningConfigurationCommand";
import {
  CompleteLayerUploadCommand,
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "./commands/CompleteLayerUploadCommand";
import {
  CreatePullThroughCacheRuleCommand,
  CreatePullThroughCacheRuleCommandInput,
  CreatePullThroughCacheRuleCommandOutput,
} from "./commands/CreatePullThroughCacheRuleCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeletePullThroughCacheRuleCommand,
  DeletePullThroughCacheRuleCommandInput,
  DeletePullThroughCacheRuleCommandOutput,
} from "./commands/DeletePullThroughCacheRuleCommand";
import {
  DeleteRegistryPolicyCommand,
  DeleteRegistryPolicyCommandInput,
  DeleteRegistryPolicyCommandOutput,
} from "./commands/DeleteRegistryPolicyCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommand,
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "./commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageReplicationStatusCommand,
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
} from "./commands/DescribeImageReplicationStatusCommand";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "./commands/DescribeImageScanFindingsCommand";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "./commands/DescribeImagesCommand";
import {
  DescribePullThroughCacheRulesCommand,
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "./commands/DescribePullThroughCacheRulesCommand";
import {
  DescribeRegistryCommand,
  DescribeRegistryCommandInput,
  DescribeRegistryCommandOutput,
} from "./commands/DescribeRegistryCommand";
import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "./commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommand,
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
} from "./commands/GetDownloadUrlForLayerCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "./commands/GetLifecyclePolicyPreviewCommand";
import {
  GetRegistryPolicyCommand,
  GetRegistryPolicyCommandInput,
  GetRegistryPolicyCommandOutput,
} from "./commands/GetRegistryPolicyCommand";
import {
  GetRegistryScanningConfigurationCommand,
  GetRegistryScanningConfigurationCommandInput,
  GetRegistryScanningConfigurationCommandOutput,
} from "./commands/GetRegistryScanningConfigurationCommand";
import {
  GetRepositoryPolicyCommand,
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "./commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommand,
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "./commands/InitiateLayerUploadCommand";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutImageCommand, PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommand,
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
} from "./commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommand,
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
} from "./commands/PutImageTagMutabilityCommand";
import {
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput,
} from "./commands/PutLifecyclePolicyCommand";
import {
  PutRegistryPolicyCommand,
  PutRegistryPolicyCommandInput,
  PutRegistryPolicyCommandOutput,
} from "./commands/PutRegistryPolicyCommand";
import {
  PutRegistryScanningConfigurationCommand,
  PutRegistryScanningConfigurationCommandInput,
  PutRegistryScanningConfigurationCommandOutput,
} from "./commands/PutRegistryScanningConfigurationCommand";
import {
  PutReplicationConfigurationCommand,
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
} from "./commands/PutReplicationConfigurationCommand";
import {
  SetRepositoryPolicyCommand,
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "./commands/SetRepositoryPolicyCommand";
import {
  StartImageScanCommand,
  StartImageScanCommandInput,
  StartImageScanCommandOutput,
} from "./commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommand,
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
} from "./commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UploadLayerPartCommand,
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput,
} from "./commands/UploadLayerPartCommand";
import { ECRClient, ECRClientConfig } from "./ECRClient";

const commands = {
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  BatchGetImageCommand,
  BatchGetRepositoryScanningConfigurationCommand,
  CompleteLayerUploadCommand,
  CreatePullThroughCacheRuleCommand,
  CreateRepositoryCommand,
  DeleteLifecyclePolicyCommand,
  DeletePullThroughCacheRuleCommand,
  DeleteRegistryPolicyCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryPolicyCommand,
  DescribeImageReplicationStatusCommand,
  DescribeImagesCommand,
  DescribeImageScanFindingsCommand,
  DescribePullThroughCacheRulesCommand,
  DescribeRegistryCommand,
  DescribeRepositoriesCommand,
  GetAuthorizationTokenCommand,
  GetDownloadUrlForLayerCommand,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyPreviewCommand,
  GetRegistryPolicyCommand,
  GetRegistryScanningConfigurationCommand,
  GetRepositoryPolicyCommand,
  InitiateLayerUploadCommand,
  ListImagesCommand,
  ListTagsForResourceCommand,
  PutImageCommand,
  PutImageScanningConfigurationCommand,
  PutImageTagMutabilityCommand,
  PutLifecyclePolicyCommand,
  PutRegistryPolicyCommand,
  PutRegistryScanningConfigurationCommand,
  PutReplicationConfigurationCommand,
  SetRepositoryPolicyCommand,
  StartImageScanCommand,
  StartLifecyclePolicyPreviewCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UploadLayerPartCommand,
};

export interface ECR {
  /**
   * @see {@link BatchCheckLayerAvailabilityCommand}
   */
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCheckLayerAvailabilityCommandOutput>;
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteImageCommand}
   */
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteImageCommandOutput>;
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetImageCommand}
   */
  batchGetImage(args: BatchGetImageCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetImageCommandOutput>;
  batchGetImage(args: BatchGetImageCommandInput, cb: (err: any, data?: BatchGetImageCommandOutput) => void): void;
  batchGetImage(
    args: BatchGetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetImageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRepositoryScanningConfigurationCommand}
   */
  batchGetRepositoryScanningConfiguration(
    args: BatchGetRepositoryScanningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRepositoryScanningConfigurationCommandOutput>;
  batchGetRepositoryScanningConfiguration(
    args: BatchGetRepositoryScanningConfigurationCommandInput,
    cb: (err: any, data?: BatchGetRepositoryScanningConfigurationCommandOutput) => void
  ): void;
  batchGetRepositoryScanningConfiguration(
    args: BatchGetRepositoryScanningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRepositoryScanningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteLayerUploadCommand}
   */
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteLayerUploadCommandOutput>;
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePullThroughCacheRuleCommand}
   */
  createPullThroughCacheRule(
    args: CreatePullThroughCacheRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePullThroughCacheRuleCommandOutput>;
  createPullThroughCacheRule(
    args: CreatePullThroughCacheRuleCommandInput,
    cb: (err: any, data?: CreatePullThroughCacheRuleCommandOutput) => void
  ): void;
  createPullThroughCacheRule(
    args: CreatePullThroughCacheRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePullThroughCacheRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePullThroughCacheRuleCommand}
   */
  deletePullThroughCacheRule(
    args: DeletePullThroughCacheRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePullThroughCacheRuleCommandOutput>;
  deletePullThroughCacheRule(
    args: DeletePullThroughCacheRuleCommandInput,
    cb: (err: any, data?: DeletePullThroughCacheRuleCommandOutput) => void
  ): void;
  deletePullThroughCacheRule(
    args: DeletePullThroughCacheRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePullThroughCacheRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryPolicyCommand}
   */
  deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryPolicyCommandOutput>;
  deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    cb: (err: any, data?: DeleteRegistryPolicyCommandOutput) => void
  ): void;
  deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryPolicyCommand}
   */
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryPolicyCommandOutput>;
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageReplicationStatusCommand}
   */
  describeImageReplicationStatus(
    args: DescribeImageReplicationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageReplicationStatusCommandOutput>;
  describeImageReplicationStatus(
    args: DescribeImageReplicationStatusCommandInput,
    cb: (err: any, data?: DescribeImageReplicationStatusCommandOutput) => void
  ): void;
  describeImageReplicationStatus(
    args: DescribeImageReplicationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageReplicationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
  describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageScanFindingsCommand}
   */
  describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageScanFindingsCommandOutput>;
  describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): void;
  describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePullThroughCacheRulesCommand}
   */
  describePullThroughCacheRules(
    args: DescribePullThroughCacheRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePullThroughCacheRulesCommandOutput>;
  describePullThroughCacheRules(
    args: DescribePullThroughCacheRulesCommandInput,
    cb: (err: any, data?: DescribePullThroughCacheRulesCommandOutput) => void
  ): void;
  describePullThroughCacheRules(
    args: DescribePullThroughCacheRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePullThroughCacheRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistryCommand}
   */
  describeRegistry(
    args: DescribeRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistryCommandOutput>;
  describeRegistry(
    args: DescribeRegistryCommandInput,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  describeRegistry(
    args: DescribeRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRepositoriesCommand}
   */
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoriesCommandOutput>;
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizationTokenCommand}
   */
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizationTokenCommandOutput>;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDownloadUrlForLayerCommand}
   */
  getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDownloadUrlForLayerCommandOutput>;
  getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): void;
  getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePolicyCommand}
   */
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePolicyPreviewCommand}
   */
  getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyPreviewCommandOutput>;
  getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryPolicyCommand}
   */
  getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryPolicyCommandOutput>;
  getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    cb: (err: any, data?: GetRegistryPolicyCommandOutput) => void
  ): void;
  getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryScanningConfigurationCommand}
   */
  getRegistryScanningConfiguration(
    args: GetRegistryScanningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryScanningConfigurationCommandOutput>;
  getRegistryScanningConfiguration(
    args: GetRegistryScanningConfigurationCommandInput,
    cb: (err: any, data?: GetRegistryScanningConfigurationCommandOutput) => void
  ): void;
  getRegistryScanningConfiguration(
    args: GetRegistryScanningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryScanningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryPolicyCommand}
   */
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryPolicyCommandOutput>;
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateLayerUploadCommand}
   */
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateLayerUploadCommandOutput>;
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagesCommand}
   */
  listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
  listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
  listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageCommand}
   */
  putImage(args: PutImageCommandInput, options?: __HttpHandlerOptions): Promise<PutImageCommandOutput>;
  putImage(args: PutImageCommandInput, cb: (err: any, data?: PutImageCommandOutput) => void): void;
  putImage(
    args: PutImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageScanningConfigurationCommand}
   */
  putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageScanningConfigurationCommandOutput>;
  putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): void;
  putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageTagMutabilityCommand}
   */
  putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageTagMutabilityCommandOutput>;
  putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): void;
  putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLifecyclePolicyCommand}
   */
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecyclePolicyCommandOutput>;
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRegistryPolicyCommand}
   */
  putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistryPolicyCommandOutput>;
  putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    cb: (err: any, data?: PutRegistryPolicyCommandOutput) => void
  ): void;
  putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRegistryScanningConfigurationCommand}
   */
  putRegistryScanningConfiguration(
    args: PutRegistryScanningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistryScanningConfigurationCommandOutput>;
  putRegistryScanningConfiguration(
    args: PutRegistryScanningConfigurationCommandInput,
    cb: (err: any, data?: PutRegistryScanningConfigurationCommandOutput) => void
  ): void;
  putRegistryScanningConfiguration(
    args: PutRegistryScanningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistryScanningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutReplicationConfigurationCommand}
   */
  putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutReplicationConfigurationCommandOutput>;
  putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    cb: (err: any, data?: PutReplicationConfigurationCommandOutput) => void
  ): void;
  putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRepositoryPolicyCommand}
   */
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRepositoryPolicyCommandOutput>;
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImageScanCommand}
   */
  startImageScan(
    args: StartImageScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImageScanCommandOutput>;
  startImageScan(args: StartImageScanCommandInput, cb: (err: any, data?: StartImageScanCommandOutput) => void): void;
  startImageScan(
    args: StartImageScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImageScanCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLifecyclePolicyPreviewCommand}
   */
  startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLifecyclePolicyPreviewCommandOutput>;
  startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadLayerPartCommand}
   */
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadLayerPartCommandOutput>;
  uploadLayerPart(args: UploadLayerPartCommandInput, cb: (err: any, data?: UploadLayerPartCommandOutput) => void): void;
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Elastic Container Registry</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *          <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 */
export class ECR extends ECRClient implements ECR {}
createAggregatedClient(commands, ECR);
