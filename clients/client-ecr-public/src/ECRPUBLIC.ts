// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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
  type CompleteLayerUploadCommandInput,
  type CompleteLayerUploadCommandOutput,
  CompleteLayerUploadCommand,
} from "./commands/CompleteLayerUploadCommand";
import {
  type CreateRepositoryCommandInput,
  type CreateRepositoryCommandOutput,
  CreateRepositoryCommand,
} from "./commands/CreateRepositoryCommand";
import {
  type DeleteRepositoryCommandInput,
  type DeleteRepositoryCommandOutput,
  DeleteRepositoryCommand,
} from "./commands/DeleteRepositoryCommand";
import {
  type DeleteRepositoryPolicyCommandInput,
  type DeleteRepositoryPolicyCommandOutput,
  DeleteRepositoryPolicyCommand,
} from "./commands/DeleteRepositoryPolicyCommand";
import {
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  DescribeImagesCommand,
} from "./commands/DescribeImagesCommand";
import {
  type DescribeImageTagsCommandInput,
  type DescribeImageTagsCommandOutput,
  DescribeImageTagsCommand,
} from "./commands/DescribeImageTagsCommand";
import {
  type DescribeRegistriesCommandInput,
  type DescribeRegistriesCommandOutput,
  DescribeRegistriesCommand,
} from "./commands/DescribeRegistriesCommand";
import {
  type DescribeRepositoriesCommandInput,
  type DescribeRepositoriesCommandOutput,
  DescribeRepositoriesCommand,
} from "./commands/DescribeRepositoriesCommand";
import {
  type GetAuthorizationTokenCommandInput,
  type GetAuthorizationTokenCommandOutput,
  GetAuthorizationTokenCommand,
} from "./commands/GetAuthorizationTokenCommand";
import {
  type GetRegistryCatalogDataCommandInput,
  type GetRegistryCatalogDataCommandOutput,
  GetRegistryCatalogDataCommand,
} from "./commands/GetRegistryCatalogDataCommand";
import {
  type GetRepositoryCatalogDataCommandInput,
  type GetRepositoryCatalogDataCommandOutput,
  GetRepositoryCatalogDataCommand,
} from "./commands/GetRepositoryCatalogDataCommand";
import {
  type GetRepositoryPolicyCommandInput,
  type GetRepositoryPolicyCommandOutput,
  GetRepositoryPolicyCommand,
} from "./commands/GetRepositoryPolicyCommand";
import {
  type InitiateLayerUploadCommandInput,
  type InitiateLayerUploadCommandOutput,
  InitiateLayerUploadCommand,
} from "./commands/InitiateLayerUploadCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type PutImageCommandInput, type PutImageCommandOutput, PutImageCommand } from "./commands/PutImageCommand";
import {
  type PutRegistryCatalogDataCommandInput,
  type PutRegistryCatalogDataCommandOutput,
  PutRegistryCatalogDataCommand,
} from "./commands/PutRegistryCatalogDataCommand";
import {
  type PutRepositoryCatalogDataCommandInput,
  type PutRepositoryCatalogDataCommandOutput,
  PutRepositoryCatalogDataCommand,
} from "./commands/PutRepositoryCatalogDataCommand";
import {
  type SetRepositoryPolicyCommandInput,
  type SetRepositoryPolicyCommandOutput,
  SetRepositoryPolicyCommand,
} from "./commands/SetRepositoryPolicyCommand";
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
  type UploadLayerPartCommandInput,
  type UploadLayerPartCommandOutput,
  UploadLayerPartCommand,
} from "./commands/UploadLayerPartCommand";
import { ECRPUBLICClient } from "./ECRPUBLICClient";
import { paginateDescribeImages } from "./pagination/DescribeImagesPaginator";
import { paginateDescribeImageTags } from "./pagination/DescribeImageTagsPaginator";
import { paginateDescribeRegistries } from "./pagination/DescribeRegistriesPaginator";
import { paginateDescribeRepositories } from "./pagination/DescribeRepositoriesPaginator";

const commands = {
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  CompleteLayerUploadCommand,
  CreateRepositoryCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryPolicyCommand,
  DescribeImagesCommand,
  DescribeImageTagsCommand,
  DescribeRegistriesCommand,
  DescribeRepositoriesCommand,
  GetAuthorizationTokenCommand,
  GetRegistryCatalogDataCommand,
  GetRepositoryCatalogDataCommand,
  GetRepositoryPolicyCommand,
  InitiateLayerUploadCommand,
  ListTagsForResourceCommand,
  PutImageCommand,
  PutRegistryCatalogDataCommand,
  PutRepositoryCatalogDataCommand,
  SetRepositoryPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UploadLayerPartCommand,
};
const paginators = {
  paginateDescribeImages,
  paginateDescribeImageTags,
  paginateDescribeRegistries,
  paginateDescribeRepositories,
};

/**
 * @public
 */
export interface ECRPUBLICRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ECRPUBLIC {
  /**
   * @see {@link BatchCheckLayerAvailabilityCommand}
   */
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<BatchCheckLayerAvailabilityCommandOutput>;
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;
  batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteImageCommand}
   */
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<BatchDeleteImageCommandOutput>;
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;
  batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteLayerUploadCommand}
   */
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<CompleteLayerUploadCommandOutput>;
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;
  completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<CreateRepositoryCommandOutput>;
  createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  createRepository(
    args: CreateRepositoryCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryPolicyCommand}
   */
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DeleteRepositoryPolicyCommandOutput>;
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;
  deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(
    args: DescribeImagesCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DescribeImagesCommandOutput>;
  describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  describeImages(
    args: DescribeImagesCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageTagsCommand}
   */
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DescribeImageTagsCommandOutput>;
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistriesCommand}
   */
  describeRegistries(): Promise<DescribeRegistriesCommandOutput>;
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DescribeRegistriesCommandOutput>;
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): void;
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRepositoriesCommand}
   */
  describeRepositories(): Promise<DescribeRepositoriesCommandOutput>;
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<DescribeRepositoriesCommandOutput>;
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;
  describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizationTokenCommand}
   */
  getAuthorizationToken(): Promise<GetAuthorizationTokenCommandOutput>;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<GetAuthorizationTokenCommandOutput>;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryCatalogDataCommand}
   */
  getRegistryCatalogData(): Promise<GetRegistryCatalogDataCommandOutput>;
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<GetRegistryCatalogDataCommandOutput>;
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryCatalogDataCommand}
   */
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<GetRepositoryCatalogDataCommandOutput>;
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): void;
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryPolicyCommand}
   */
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<GetRepositoryPolicyCommandOutput>;
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;
  getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateLayerUploadCommand}
   */
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<InitiateLayerUploadCommandOutput>;
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;
  initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageCommand}
   */
  putImage(
    args: PutImageCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<PutImageCommandOutput>;
  putImage(
    args: PutImageCommandInput,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;
  putImage(
    args: PutImageCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRegistryCatalogDataCommand}
   */
  putRegistryCatalogData(): Promise<PutRegistryCatalogDataCommandOutput>;
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<PutRegistryCatalogDataCommandOutput>;
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRepositoryCatalogDataCommand}
   */
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<PutRepositoryCatalogDataCommandOutput>;
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): void;
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link SetRepositoryPolicyCommand}
   */
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<SetRepositoryPolicyCommandOutput>;
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;
  setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadLayerPartCommand}
   */
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options?: ECRPUBLICRequestOptions
  ): Promise<UploadLayerPartCommandOutput>;
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;
  uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options: ECRPUBLICRequestOptions,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
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
   * @see {@link DescribeImageTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeImageTagsCommandOutput}.
   */
  paginateDescribeImageTags(
    args: DescribeImageTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeImageTagsCommandOutput>;

  /**
   * @see {@link DescribeRegistriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRegistriesCommandOutput}.
   */
  paginateDescribeRegistries(
    args?: DescribeRegistriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRegistriesCommandOutput>;

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
}

/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the Docker CLI or
 *          your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable,
 *          and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR
 *          supports public repositories with this API. For information about the Amazon ECR API for private
 *          repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 * @public
 */
export class ECRPUBLIC extends ECRPUBLICClient implements ECRPUBLIC {}
createAggregatedClient(commands, ECRPUBLIC, { paginators });
