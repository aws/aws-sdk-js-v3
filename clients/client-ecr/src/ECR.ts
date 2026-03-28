// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type BatchCheckLayerAvailabilityCommandInput,
  type BatchCheckLayerAvailabilityCommandOutput,
  BatchCheckLayerAvailabilityCommand,
} from "./commands/BatchCheckLayerAvailabilityCommand";
import {
  type BatchDeleteImageCommandInput,
  type BatchDeleteImageCommandOutput,
  BatchDeleteImageCommand,
} from "./commands/BatchDeleteImageCommand";
import {
  type BatchGetImageCommandInput,
  type BatchGetImageCommandOutput,
  BatchGetImageCommand,
} from "./commands/BatchGetImageCommand";
import {
  type BatchGetRepositoryScanningConfigurationCommandInput,
  type BatchGetRepositoryScanningConfigurationCommandOutput,
  BatchGetRepositoryScanningConfigurationCommand,
} from "./commands/BatchGetRepositoryScanningConfigurationCommand";
import {
  type CompleteLayerUploadCommandInput,
  type CompleteLayerUploadCommandOutput,
  CompleteLayerUploadCommand,
} from "./commands/CompleteLayerUploadCommand";
import {
  type CreatePullThroughCacheRuleCommandInput,
  type CreatePullThroughCacheRuleCommandOutput,
  CreatePullThroughCacheRuleCommand,
} from "./commands/CreatePullThroughCacheRuleCommand";
import {
  type CreateRepositoryCommandInput,
  type CreateRepositoryCommandOutput,
  CreateRepositoryCommand,
} from "./commands/CreateRepositoryCommand";
import {
  type CreateRepositoryCreationTemplateCommandInput,
  type CreateRepositoryCreationTemplateCommandOutput,
  CreateRepositoryCreationTemplateCommand,
} from "./commands/CreateRepositoryCreationTemplateCommand";
import {
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeleteLifecyclePolicyCommand,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  type DeletePullThroughCacheRuleCommandInput,
  type DeletePullThroughCacheRuleCommandOutput,
  DeletePullThroughCacheRuleCommand,
} from "./commands/DeletePullThroughCacheRuleCommand";
import {
  type DeleteRegistryPolicyCommandInput,
  type DeleteRegistryPolicyCommandOutput,
  DeleteRegistryPolicyCommand,
} from "./commands/DeleteRegistryPolicyCommand";
import {
  type DeleteRepositoryCommandInput,
  type DeleteRepositoryCommandOutput,
  DeleteRepositoryCommand,
} from "./commands/DeleteRepositoryCommand";
import {
  type DeleteRepositoryCreationTemplateCommandInput,
  type DeleteRepositoryCreationTemplateCommandOutput,
  DeleteRepositoryCreationTemplateCommand,
} from "./commands/DeleteRepositoryCreationTemplateCommand";
import {
  type DeleteRepositoryPolicyCommandInput,
  type DeleteRepositoryPolicyCommandOutput,
  DeleteRepositoryPolicyCommand,
} from "./commands/DeleteRepositoryPolicyCommand";
import {
  type DeleteSigningConfigurationCommandInput,
  type DeleteSigningConfigurationCommandOutput,
  DeleteSigningConfigurationCommand,
} from "./commands/DeleteSigningConfigurationCommand";
import {
  type DeregisterPullTimeUpdateExclusionCommandInput,
  type DeregisterPullTimeUpdateExclusionCommandOutput,
  DeregisterPullTimeUpdateExclusionCommand,
} from "./commands/DeregisterPullTimeUpdateExclusionCommand";
import {
  type DescribeImageReplicationStatusCommandInput,
  type DescribeImageReplicationStatusCommandOutput,
  DescribeImageReplicationStatusCommand,
} from "./commands/DescribeImageReplicationStatusCommand";
import {
  type DescribeImageScanFindingsCommandInput,
  type DescribeImageScanFindingsCommandOutput,
  DescribeImageScanFindingsCommand,
} from "./commands/DescribeImageScanFindingsCommand";
import {
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  DescribeImagesCommand,
} from "./commands/DescribeImagesCommand";
import {
  type DescribeImageSigningStatusCommandInput,
  type DescribeImageSigningStatusCommandOutput,
  DescribeImageSigningStatusCommand,
} from "./commands/DescribeImageSigningStatusCommand";
import {
  type DescribePullThroughCacheRulesCommandInput,
  type DescribePullThroughCacheRulesCommandOutput,
  DescribePullThroughCacheRulesCommand,
} from "./commands/DescribePullThroughCacheRulesCommand";
import {
  type DescribeRegistryCommandInput,
  type DescribeRegistryCommandOutput,
  DescribeRegistryCommand,
} from "./commands/DescribeRegistryCommand";
import {
  type DescribeRepositoriesCommandInput,
  type DescribeRepositoriesCommandOutput,
  DescribeRepositoriesCommand,
} from "./commands/DescribeRepositoriesCommand";
import {
  type DescribeRepositoryCreationTemplatesCommandInput,
  type DescribeRepositoryCreationTemplatesCommandOutput,
  DescribeRepositoryCreationTemplatesCommand,
} from "./commands/DescribeRepositoryCreationTemplatesCommand";
import {
  type GetAccountSettingCommandInput,
  type GetAccountSettingCommandOutput,
  GetAccountSettingCommand,
} from "./commands/GetAccountSettingCommand";
import {
  type GetAuthorizationTokenCommandInput,
  type GetAuthorizationTokenCommandOutput,
  GetAuthorizationTokenCommand,
} from "./commands/GetAuthorizationTokenCommand";
import {
  type GetDownloadUrlForLayerCommandInput,
  type GetDownloadUrlForLayerCommandOutput,
  GetDownloadUrlForLayerCommand,
} from "./commands/GetDownloadUrlForLayerCommand";
import {
  type GetLifecyclePolicyCommandInput,
  type GetLifecyclePolicyCommandOutput,
  GetLifecyclePolicyCommand,
} from "./commands/GetLifecyclePolicyCommand";
import {
  type GetLifecyclePolicyPreviewCommandInput,
  type GetLifecyclePolicyPreviewCommandOutput,
  GetLifecyclePolicyPreviewCommand,
} from "./commands/GetLifecyclePolicyPreviewCommand";
import {
  type GetRegistryPolicyCommandInput,
  type GetRegistryPolicyCommandOutput,
  GetRegistryPolicyCommand,
} from "./commands/GetRegistryPolicyCommand";
import {
  type GetRegistryScanningConfigurationCommandInput,
  type GetRegistryScanningConfigurationCommandOutput,
  GetRegistryScanningConfigurationCommand,
} from "./commands/GetRegistryScanningConfigurationCommand";
import {
  type GetRepositoryPolicyCommandInput,
  type GetRepositoryPolicyCommandOutput,
  GetRepositoryPolicyCommand,
} from "./commands/GetRepositoryPolicyCommand";
import {
  type GetSigningConfigurationCommandInput,
  type GetSigningConfigurationCommandOutput,
  GetSigningConfigurationCommand,
} from "./commands/GetSigningConfigurationCommand";
import {
  type InitiateLayerUploadCommandInput,
  type InitiateLayerUploadCommandOutput,
  InitiateLayerUploadCommand,
} from "./commands/InitiateLayerUploadCommand";
import {
  type ListImageReferrersCommandInput,
  type ListImageReferrersCommandOutput,
  ListImageReferrersCommand,
} from "./commands/ListImageReferrersCommand";
import {
  type ListImagesCommandInput,
  type ListImagesCommandOutput,
  ListImagesCommand,
} from "./commands/ListImagesCommand";
import {
  type ListPullTimeUpdateExclusionsCommandInput,
  type ListPullTimeUpdateExclusionsCommandOutput,
  ListPullTimeUpdateExclusionsCommand,
} from "./commands/ListPullTimeUpdateExclusionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAccountSettingCommandInput,
  type PutAccountSettingCommandOutput,
  PutAccountSettingCommand,
} from "./commands/PutAccountSettingCommand";
import { type PutImageCommandInput, type PutImageCommandOutput, PutImageCommand } from "./commands/PutImageCommand";
import {
  type PutImageScanningConfigurationCommandInput,
  type PutImageScanningConfigurationCommandOutput,
  PutImageScanningConfigurationCommand,
} from "./commands/PutImageScanningConfigurationCommand";
import {
  type PutImageTagMutabilityCommandInput,
  type PutImageTagMutabilityCommandOutput,
  PutImageTagMutabilityCommand,
} from "./commands/PutImageTagMutabilityCommand";
import {
  type PutLifecyclePolicyCommandInput,
  type PutLifecyclePolicyCommandOutput,
  PutLifecyclePolicyCommand,
} from "./commands/PutLifecyclePolicyCommand";
import {
  type PutRegistryPolicyCommandInput,
  type PutRegistryPolicyCommandOutput,
  PutRegistryPolicyCommand,
} from "./commands/PutRegistryPolicyCommand";
import {
  type PutRegistryScanningConfigurationCommandInput,
  type PutRegistryScanningConfigurationCommandOutput,
  PutRegistryScanningConfigurationCommand,
} from "./commands/PutRegistryScanningConfigurationCommand";
import {
  type PutReplicationConfigurationCommandInput,
  type PutReplicationConfigurationCommandOutput,
  PutReplicationConfigurationCommand,
} from "./commands/PutReplicationConfigurationCommand";
import {
  type PutSigningConfigurationCommandInput,
  type PutSigningConfigurationCommandOutput,
  PutSigningConfigurationCommand,
} from "./commands/PutSigningConfigurationCommand";
import {
  type RegisterPullTimeUpdateExclusionCommandInput,
  type RegisterPullTimeUpdateExclusionCommandOutput,
  RegisterPullTimeUpdateExclusionCommand,
} from "./commands/RegisterPullTimeUpdateExclusionCommand";
import {
  type SetRepositoryPolicyCommandInput,
  type SetRepositoryPolicyCommandOutput,
  SetRepositoryPolicyCommand,
} from "./commands/SetRepositoryPolicyCommand";
import {
  type StartImageScanCommandInput,
  type StartImageScanCommandOutput,
  StartImageScanCommand,
} from "./commands/StartImageScanCommand";
import {
  type StartLifecyclePolicyPreviewCommandInput,
  type StartLifecyclePolicyPreviewCommandOutput,
  StartLifecyclePolicyPreviewCommand,
} from "./commands/StartLifecyclePolicyPreviewCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateImageStorageClassCommandInput,
  type UpdateImageStorageClassCommandOutput,
  UpdateImageStorageClassCommand,
} from "./commands/UpdateImageStorageClassCommand";
import {
  type UpdatePullThroughCacheRuleCommandInput,
  type UpdatePullThroughCacheRuleCommandOutput,
  UpdatePullThroughCacheRuleCommand,
} from "./commands/UpdatePullThroughCacheRuleCommand";
import {
  type UpdateRepositoryCreationTemplateCommandInput,
  type UpdateRepositoryCreationTemplateCommandOutput,
  UpdateRepositoryCreationTemplateCommand,
} from "./commands/UpdateRepositoryCreationTemplateCommand";
import {
  type UploadLayerPartCommandInput,
  type UploadLayerPartCommandOutput,
  UploadLayerPartCommand,
} from "./commands/UploadLayerPartCommand";
import {
  type ValidatePullThroughCacheRuleCommandInput,
  type ValidatePullThroughCacheRuleCommandOutput,
  ValidatePullThroughCacheRuleCommand,
} from "./commands/ValidatePullThroughCacheRuleCommand";
import { ECRClient } from "./ECRClient";
import { paginateDescribeImageScanFindings } from "./pagination/DescribeImageScanFindingsPaginator";
import { paginateDescribeImages } from "./pagination/DescribeImagesPaginator";
import { paginateDescribePullThroughCacheRules } from "./pagination/DescribePullThroughCacheRulesPaginator";
import { paginateDescribeRepositories } from "./pagination/DescribeRepositoriesPaginator";
import { paginateDescribeRepositoryCreationTemplates } from "./pagination/DescribeRepositoryCreationTemplatesPaginator";
import { paginateGetLifecyclePolicyPreview } from "./pagination/GetLifecyclePolicyPreviewPaginator";
import { paginateListImages } from "./pagination/ListImagesPaginator";
import { waitUntilImageScanComplete } from "./waiters/waitForImageScanComplete";
import { waitUntilLifecyclePolicyPreviewComplete } from "./waiters/waitForLifecyclePolicyPreviewComplete";

const commands = {
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  BatchGetImageCommand,
  BatchGetRepositoryScanningConfigurationCommand,
  CompleteLayerUploadCommand,
  CreatePullThroughCacheRuleCommand,
  CreateRepositoryCommand,
  CreateRepositoryCreationTemplateCommand,
  DeleteLifecyclePolicyCommand,
  DeletePullThroughCacheRuleCommand,
  DeleteRegistryPolicyCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryCreationTemplateCommand,
  DeleteRepositoryPolicyCommand,
  DeleteSigningConfigurationCommand,
  DeregisterPullTimeUpdateExclusionCommand,
  DescribeImageReplicationStatusCommand,
  DescribeImagesCommand,
  DescribeImageScanFindingsCommand,
  DescribeImageSigningStatusCommand,
  DescribePullThroughCacheRulesCommand,
  DescribeRegistryCommand,
  DescribeRepositoriesCommand,
  DescribeRepositoryCreationTemplatesCommand,
  GetAccountSettingCommand,
  GetAuthorizationTokenCommand,
  GetDownloadUrlForLayerCommand,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyPreviewCommand,
  GetRegistryPolicyCommand,
  GetRegistryScanningConfigurationCommand,
  GetRepositoryPolicyCommand,
  GetSigningConfigurationCommand,
  InitiateLayerUploadCommand,
  ListImageReferrersCommand,
  ListImagesCommand,
  ListPullTimeUpdateExclusionsCommand,
  ListTagsForResourceCommand,
  PutAccountSettingCommand,
  PutImageCommand,
  PutImageScanningConfigurationCommand,
  PutImageTagMutabilityCommand,
  PutLifecyclePolicyCommand,
  PutRegistryPolicyCommand,
  PutRegistryScanningConfigurationCommand,
  PutReplicationConfigurationCommand,
  PutSigningConfigurationCommand,
  RegisterPullTimeUpdateExclusionCommand,
  SetRepositoryPolicyCommand,
  StartImageScanCommand,
  StartLifecyclePolicyPreviewCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateImageStorageClassCommand,
  UpdatePullThroughCacheRuleCommand,
  UpdateRepositoryCreationTemplateCommand,
  UploadLayerPartCommand,
  ValidatePullThroughCacheRuleCommand,
};
const paginators = {
  paginateDescribeImages,
  paginateDescribeImageScanFindings,
  paginateDescribePullThroughCacheRules,
  paginateDescribeRepositories,
  paginateDescribeRepositoryCreationTemplates,
  paginateGetLifecyclePolicyPreview,
  paginateListImages,
};
const waiters = {
  waitUntilImageScanComplete,
  waitUntilLifecyclePolicyPreviewComplete,
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
  batchGetImage(
    args: BatchGetImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetImageCommandOutput>;
  batchGetImage(
    args: BatchGetImageCommandInput,
    cb: (err: any, data?: BatchGetImageCommandOutput) => void
  ): void;
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
   * @see {@link CreateRepositoryCreationTemplateCommand}
   */
  createRepositoryCreationTemplate(
    args: CreateRepositoryCreationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCreationTemplateCommandOutput>;
  createRepositoryCreationTemplate(
    args: CreateRepositoryCreationTemplateCommandInput,
    cb: (err: any, data?: CreateRepositoryCreationTemplateCommandOutput) => void
  ): void;
  createRepositoryCreationTemplate(
    args: CreateRepositoryCreationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCreationTemplateCommandOutput) => void
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
  deleteRegistryPolicy(): Promise<DeleteRegistryPolicyCommandOutput>;
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
   * @see {@link DeleteRepositoryCreationTemplateCommand}
   */
  deleteRepositoryCreationTemplate(
    args: DeleteRepositoryCreationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCreationTemplateCommandOutput>;
  deleteRepositoryCreationTemplate(
    args: DeleteRepositoryCreationTemplateCommandInput,
    cb: (err: any, data?: DeleteRepositoryCreationTemplateCommandOutput) => void
  ): void;
  deleteRepositoryCreationTemplate(
    args: DeleteRepositoryCreationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCreationTemplateCommandOutput) => void
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
   * @see {@link DeleteSigningConfigurationCommand}
   */
  deleteSigningConfiguration(): Promise<DeleteSigningConfigurationCommandOutput>;
  deleteSigningConfiguration(
    args: DeleteSigningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSigningConfigurationCommandOutput>;
  deleteSigningConfiguration(
    args: DeleteSigningConfigurationCommandInput,
    cb: (err: any, data?: DeleteSigningConfigurationCommandOutput) => void
  ): void;
  deleteSigningConfiguration(
    args: DeleteSigningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSigningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterPullTimeUpdateExclusionCommand}
   */
  deregisterPullTimeUpdateExclusion(
    args: DeregisterPullTimeUpdateExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterPullTimeUpdateExclusionCommandOutput>;
  deregisterPullTimeUpdateExclusion(
    args: DeregisterPullTimeUpdateExclusionCommandInput,
    cb: (err: any, data?: DeregisterPullTimeUpdateExclusionCommandOutput) => void
  ): void;
  deregisterPullTimeUpdateExclusion(
    args: DeregisterPullTimeUpdateExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterPullTimeUpdateExclusionCommandOutput) => void
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
  describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
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
   * @see {@link DescribeImageSigningStatusCommand}
   */
  describeImageSigningStatus(
    args: DescribeImageSigningStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageSigningStatusCommandOutput>;
  describeImageSigningStatus(
    args: DescribeImageSigningStatusCommandInput,
    cb: (err: any, data?: DescribeImageSigningStatusCommandOutput) => void
  ): void;
  describeImageSigningStatus(
    args: DescribeImageSigningStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageSigningStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePullThroughCacheRulesCommand}
   */
  describePullThroughCacheRules(): Promise<DescribePullThroughCacheRulesCommandOutput>;
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
  describeRegistry(): Promise<DescribeRegistryCommandOutput>;
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
  describeRepositories(): Promise<DescribeRepositoriesCommandOutput>;
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
   * @see {@link DescribeRepositoryCreationTemplatesCommand}
   */
  describeRepositoryCreationTemplates(): Promise<DescribeRepositoryCreationTemplatesCommandOutput>;
  describeRepositoryCreationTemplates(
    args: DescribeRepositoryCreationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryCreationTemplatesCommandOutput>;
  describeRepositoryCreationTemplates(
    args: DescribeRepositoryCreationTemplatesCommandInput,
    cb: (err: any, data?: DescribeRepositoryCreationTemplatesCommandOutput) => void
  ): void;
  describeRepositoryCreationTemplates(
    args: DescribeRepositoryCreationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryCreationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingCommand}
   */
  getAccountSetting(
    args: GetAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingCommandOutput>;
  getAccountSetting(
    args: GetAccountSettingCommandInput,
    cb: (err: any, data?: GetAccountSettingCommandOutput) => void
  ): void;
  getAccountSetting(
    args: GetAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizationTokenCommand}
   */
  getAuthorizationToken(): Promise<GetAuthorizationTokenCommandOutput>;
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
  getRegistryPolicy(): Promise<GetRegistryPolicyCommandOutput>;
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
  getRegistryScanningConfiguration(): Promise<GetRegistryScanningConfigurationCommandOutput>;
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
   * @see {@link GetSigningConfigurationCommand}
   */
  getSigningConfiguration(): Promise<GetSigningConfigurationCommandOutput>;
  getSigningConfiguration(
    args: GetSigningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningConfigurationCommandOutput>;
  getSigningConfiguration(
    args: GetSigningConfigurationCommandInput,
    cb: (err: any, data?: GetSigningConfigurationCommandOutput) => void
  ): void;
  getSigningConfiguration(
    args: GetSigningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningConfigurationCommandOutput) => void
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
   * @see {@link ListImageReferrersCommand}
   */
  listImageReferrers(
    args: ListImageReferrersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageReferrersCommandOutput>;
  listImageReferrers(
    args: ListImageReferrersCommandInput,
    cb: (err: any, data?: ListImageReferrersCommandOutput) => void
  ): void;
  listImageReferrers(
    args: ListImageReferrersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageReferrersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagesCommand}
   */
  listImages(
    args: ListImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagesCommandOutput>;
  listImages(
    args: ListImagesCommandInput,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;
  listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPullTimeUpdateExclusionsCommand}
   */
  listPullTimeUpdateExclusions(): Promise<ListPullTimeUpdateExclusionsCommandOutput>;
  listPullTimeUpdateExclusions(
    args: ListPullTimeUpdateExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPullTimeUpdateExclusionsCommandOutput>;
  listPullTimeUpdateExclusions(
    args: ListPullTimeUpdateExclusionsCommandInput,
    cb: (err: any, data?: ListPullTimeUpdateExclusionsCommandOutput) => void
  ): void;
  listPullTimeUpdateExclusions(
    args: ListPullTimeUpdateExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPullTimeUpdateExclusionsCommandOutput) => void
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
   * @see {@link PutAccountSettingCommand}
   */
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingCommandOutput>;
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageCommand}
   */
  putImage(
    args: PutImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageCommandOutput>;
  putImage(
    args: PutImageCommandInput,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;
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
  putRegistryScanningConfiguration(): Promise<PutRegistryScanningConfigurationCommandOutput>;
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
   * @see {@link PutSigningConfigurationCommand}
   */
  putSigningConfiguration(
    args: PutSigningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSigningConfigurationCommandOutput>;
  putSigningConfiguration(
    args: PutSigningConfigurationCommandInput,
    cb: (err: any, data?: PutSigningConfigurationCommandOutput) => void
  ): void;
  putSigningConfiguration(
    args: PutSigningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSigningConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterPullTimeUpdateExclusionCommand}
   */
  registerPullTimeUpdateExclusion(
    args: RegisterPullTimeUpdateExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPullTimeUpdateExclusionCommandOutput>;
  registerPullTimeUpdateExclusion(
    args: RegisterPullTimeUpdateExclusionCommandInput,
    cb: (err: any, data?: RegisterPullTimeUpdateExclusionCommandOutput) => void
  ): void;
  registerPullTimeUpdateExclusion(
    args: RegisterPullTimeUpdateExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPullTimeUpdateExclusionCommandOutput) => void
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
  startImageScan(
    args: StartImageScanCommandInput,
    cb: (err: any, data?: StartImageScanCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImageStorageClassCommand}
   */
  updateImageStorageClass(
    args: UpdateImageStorageClassCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImageStorageClassCommandOutput>;
  updateImageStorageClass(
    args: UpdateImageStorageClassCommandInput,
    cb: (err: any, data?: UpdateImageStorageClassCommandOutput) => void
  ): void;
  updateImageStorageClass(
    args: UpdateImageStorageClassCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageStorageClassCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullThroughCacheRuleCommand}
   */
  updatePullThroughCacheRule(
    args: UpdatePullThroughCacheRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullThroughCacheRuleCommandOutput>;
  updatePullThroughCacheRule(
    args: UpdatePullThroughCacheRuleCommandInput,
    cb: (err: any, data?: UpdatePullThroughCacheRuleCommandOutput) => void
  ): void;
  updatePullThroughCacheRule(
    args: UpdatePullThroughCacheRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullThroughCacheRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRepositoryCreationTemplateCommand}
   */
  updateRepositoryCreationTemplate(
    args: UpdateRepositoryCreationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryCreationTemplateCommandOutput>;
  updateRepositoryCreationTemplate(
    args: UpdateRepositoryCreationTemplateCommandInput,
    cb: (err: any, data?: UpdateRepositoryCreationTemplateCommandOutput) => void
  ): void;
  updateRepositoryCreationTemplate(
    args: UpdateRepositoryCreationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryCreationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadLayerPartCommand}
   */
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadLayerPartCommandOutput>;
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidatePullThroughCacheRuleCommand}
   */
  validatePullThroughCacheRule(
    args: ValidatePullThroughCacheRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePullThroughCacheRuleCommandOutput>;
  validatePullThroughCacheRule(
    args: ValidatePullThroughCacheRuleCommandInput,
    cb: (err: any, data?: ValidatePullThroughCacheRuleCommandOutput) => void
  ): void;
  validatePullThroughCacheRule(
    args: ValidatePullThroughCacheRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePullThroughCacheRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeImagesCommandOutput}.
   */
  paginateDescribeImages(
    args: DescribeImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeImagesCommandOutput>;

  /**
   * @see {@link DescribeImageScanFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeImageScanFindingsCommandOutput}.
   */
  paginateDescribeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeImageScanFindingsCommandOutput>;

  /**
   * @see {@link DescribePullThroughCacheRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePullThroughCacheRulesCommandOutput}.
   */
  paginateDescribePullThroughCacheRules(
    args?: DescribePullThroughCacheRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePullThroughCacheRulesCommandOutput>;

  /**
   * @see {@link DescribeRepositoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRepositoriesCommandOutput}.
   */
  paginateDescribeRepositories(
    args?: DescribeRepositoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRepositoriesCommandOutput>;

  /**
   * @see {@link DescribeRepositoryCreationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRepositoryCreationTemplatesCommandOutput}.
   */
  paginateDescribeRepositoryCreationTemplates(
    args?: DescribeRepositoryCreationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRepositoryCreationTemplatesCommandOutput>;

  /**
   * @see {@link GetLifecyclePolicyPreviewCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLifecyclePolicyPreviewCommandOutput}.
   */
  paginateGetLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLifecyclePolicyPreviewCommandOutput>;

  /**
   * @see {@link ListImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImagesCommandOutput}.
   */
  paginateListImages(
    args: ListImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImagesCommandOutput>;

  /**
   * @see {@link DescribeImageScanFindingsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilImageScanComplete(
    args: DescribeImageScanFindingsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ECR>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetLifecyclePolicyPreviewCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLifecyclePolicyPreviewComplete(
    args: GetLifecyclePolicyPreviewCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ECR>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *          <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class ECR extends ECRClient implements ECR {}
createAggregatedClient(commands, ECR, { paginators, waiters });
