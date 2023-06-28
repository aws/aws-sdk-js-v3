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
  CompleteLayerUploadCommand,
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "./commands/CompleteLayerUploadCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
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
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "./commands/DescribeImagesCommand";
import {
  DescribeImageTagsCommand,
  DescribeImageTagsCommandInput,
  DescribeImageTagsCommandOutput,
} from "./commands/DescribeImageTagsCommand";
import {
  DescribeRegistriesCommand,
  DescribeRegistriesCommandInput,
  DescribeRegistriesCommandOutput,
} from "./commands/DescribeRegistriesCommand";
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
  GetRegistryCatalogDataCommand,
  GetRegistryCatalogDataCommandInput,
  GetRegistryCatalogDataCommandOutput,
} from "./commands/GetRegistryCatalogDataCommand";
import {
  GetRepositoryCatalogDataCommand,
  GetRepositoryCatalogDataCommandInput,
  GetRepositoryCatalogDataCommandOutput,
} from "./commands/GetRepositoryCatalogDataCommand";
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
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutImageCommand, PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import {
  PutRegistryCatalogDataCommand,
  PutRegistryCatalogDataCommandInput,
  PutRegistryCatalogDataCommandOutput,
} from "./commands/PutRegistryCatalogDataCommand";
import {
  PutRepositoryCatalogDataCommand,
  PutRepositoryCatalogDataCommandInput,
  PutRepositoryCatalogDataCommandOutput,
} from "./commands/PutRepositoryCatalogDataCommand";
import {
  SetRepositoryPolicyCommand,
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "./commands/SetRepositoryPolicyCommand";
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
import { ECRPUBLICClient, ECRPUBLICClientConfig } from "./ECRPUBLICClient";

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

export interface ECRPUBLIC {
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
   * @see {@link DescribeImageTagsCommand}
   */
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageTagsCommandOutput>;
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;
  describeImageTags(
    args: DescribeImageTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistriesCommand}
   */
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistriesCommandOutput>;
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): void;
  describeRegistries(
    args: DescribeRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
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
   * @see {@link GetRegistryCatalogDataCommand}
   */
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryCatalogDataCommandOutput>;
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;
  getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryCatalogDataCommand}
   */
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryCatalogDataCommandOutput>;
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): void;
  getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
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
   * @see {@link PutRegistryCatalogDataCommand}
   */
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistryCatalogDataCommandOutput>;
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;
  putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRepositoryCatalogDataCommand}
   */
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryCatalogDataCommandOutput>;
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): void;
  putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
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
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the Docker CLI or
 *          your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable,
 *          and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR
 *          supports public repositories with this API. For information about the Amazon ECR API for private
 *          repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
export class ECRPUBLIC extends ECRPUBLICClient implements ECRPUBLIC {}
createAggregatedClient(commands, ECRPUBLIC);
