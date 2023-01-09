// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ECRPUBLICClient } from "./ECRPUBLICClient";

/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the Docker CLI or
 *          your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable,
 *          and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR
 *          supports public repositories with this API. For information about the Amazon ECR API for private
 *          repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
export class ECRPUBLIC extends ECRPUBLICClient {
  /**
   * <p>Checks the availability of one or more image layers that are within a repository in a
   *          public registry. When an image is pushed to a repository, each image layer is checked to
   *          verify if it has been uploaded before. If it has been uploaded, then the image layer is
   *          skipped.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCheckLayerAvailabilityCommandOutput>;
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): void;
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void),
    cb?: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): Promise<BatchCheckLayerAvailabilityCommandOutput> | void {
    const command = new BatchCheckLayerAvailabilityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a list of specified images that are within a repository in a public registry.
   *          Images are specified with either an <code>imageTag</code> or
   *          <code>imageDigest</code>.</p>
   *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
   *          you remove the last tag from an image, the image is deleted from your repository.</p>
   *          <p>You can completely delete an image (and all of its tags) by specifying the digest of the
   *          image in your request.</p>
   */
  public batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteImageCommandOutput>;
  public batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;
  public batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): void;
  public batchDeleteImage(
    args: BatchDeleteImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteImageCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): Promise<BatchDeleteImageCommandOutput> | void {
    const command = new BatchDeleteImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry,
   *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
   *          the image layer for data validation purposes.</p>
   *          <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image
   *          layer to verify that the upload is complete.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteLayerUploadCommandOutput>;
  public completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;
  public completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): void;
  public completeLayerUpload(
    args: CompleteLayerUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteLayerUploadCommandOutput) => void),
    cb?: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): Promise<CompleteLayerUploadCommandOutput> | void {
    const command = new CompleteLayerUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR
   *             repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  public createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  public createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): Promise<CreateRepositoryCommandOutput> | void {
    const command = new CreateRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a repository in a public registry. If the repository contains images, you must
   *          either manually delete all images in the repository or use the <code>force</code> option.
   *          This option deletes all images on your behalf before deleting the repository.</p>
   */
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): Promise<DeleteRepositoryCommandOutput> | void {
    const command = new DeleteRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the repository policy that's associated with the specified repository.</p>
   */
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryPolicyCommandOutput>;
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): void;
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): Promise<DeleteRepositoryPolicyCommandOutput> | void {
    const command = new DeleteRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata that's related to the images in a repository in a public
   *          registry.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
   *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
   *             command shows the uncompressed image size. Therefore, it might return a larger image
   *             size than the image sizes that are returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  public describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  public describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeImagesCommandOutput) => void
  ): Promise<DescribeImagesCommandOutput> | void {
    const command = new DescribeImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the image tag details for a repository in a public registry.</p>
   */
  public describeImageTags(
    args: DescribeImageTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageTagsCommandOutput>;
  public describeImageTags(
    args: DescribeImageTagsCommandInput,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;
  public describeImageTags(
    args: DescribeImageTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): void;
  public describeImageTags(
    args: DescribeImageTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImageTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageTagsCommandOutput) => void
  ): Promise<DescribeImageTagsCommandOutput> | void {
    const command = new DescribeImageTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details for a public registry.</p>
   */
  public describeRegistries(
    args: DescribeRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistriesCommandOutput>;
  public describeRegistries(
    args: DescribeRegistriesCommandInput,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): void;
  public describeRegistries(
    args: DescribeRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): void;
  public describeRegistries(
    args: DescribeRegistriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegistriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegistriesCommandOutput) => void
  ): Promise<DescribeRegistriesCommandOutput> | void {
    const command = new DescribeRegistriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes repositories that are in a public registry.</p>
   */
  public describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoriesCommandOutput>;
  public describeRepositories(
    args: DescribeRepositoriesCommandInput,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;
  public describeRepositories(
    args: DescribeRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): void;
  public describeRepositories(
    args: DescribeRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): Promise<DescribeRepositoriesCommandOutput> | void {
    const command = new DescribeRepositoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves an authorization token. An authorization token represents your IAM
   *          authentication credentials. You can use it to access any Amazon ECR registry that your IAM
   *          principal has access to. The authorization token is valid for 12 hours. This API requires
   *          the <code>ecr-public:GetAuthorizationToken</code> and
   *             <code>sts:GetServiceBearerToken</code> permissions.</p>
   */
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizationTokenCommandOutput>;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAuthorizationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): Promise<GetAuthorizationTokenCommandOutput> | void {
    const command = new GetAuthorizationTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves catalog metadata for a public registry.</p>
   */
  public getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryCatalogDataCommandOutput>;
  public getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;
  public getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): void;
  public getRegistryCatalogData(
    args: GetRegistryCatalogDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegistryCatalogDataCommandOutput) => void),
    cb?: (err: any, data?: GetRegistryCatalogDataCommandOutput) => void
  ): Promise<GetRegistryCatalogDataCommandOutput> | void {
    const command = new GetRegistryCatalogDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
   *          displayed publicly in the Amazon ECR Public Gallery.</p>
   */
  public getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryCatalogDataCommandOutput>;
  public getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): void;
  public getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): void;
  public getRepositoryCatalogData(
    args: GetRepositoryCatalogDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryCatalogDataCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryCatalogDataCommandOutput) => void
  ): Promise<GetRepositoryCatalogDataCommandOutput> | void {
    const command = new GetRepositoryCatalogDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the repository policy for the specified repository.</p>
   */
  public getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryPolicyCommandOutput>;
  public getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;
  public getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): void;
  public getRepositoryPolicy(
    args: GetRepositoryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): Promise<GetRepositoryPolicyCommandOutput> | void {
    const command = new GetRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
   *          <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer
   *          that hasn't already been uploaded. Whether an image layer uploads is determined by the
   *          BatchCheckLayerAvailability API action.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateLayerUploadCommandOutput>;
  public initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;
  public initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): void;
  public initiateLayerUpload(
    args: InitiateLayerUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateLayerUploadCommandOutput) => void),
    cb?: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): Promise<InitiateLayerUploadCommandOutput> | void {
    const command = new InitiateLayerUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the tags for an Amazon ECR Public resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates the image manifest and tags that are associated with an image.</p>
   *          <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is
   *          called once to create or update the image manifest and the tags that are associated with
   *          the image.</p>
   *
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public putImage(args: PutImageCommandInput, options?: __HttpHandlerOptions): Promise<PutImageCommandOutput>;
  public putImage(args: PutImageCommandInput, cb: (err: any, data?: PutImageCommandOutput) => void): void;
  public putImage(
    args: PutImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;
  public putImage(
    args: PutImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutImageCommandOutput) => void),
    cb?: (err: any, data?: PutImageCommandOutput) => void
  ): Promise<PutImageCommandOutput> | void {
    const command = new PutImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create or update the catalog data for a public registry.</p>
   */
  public putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistryCatalogDataCommandOutput>;
  public putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;
  public putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): void;
  public putRegistryCatalogData(
    args: PutRegistryCatalogDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRegistryCatalogDataCommandOutput) => void),
    cb?: (err: any, data?: PutRegistryCatalogDataCommandOutput) => void
  ): Promise<PutRegistryCatalogDataCommandOutput> | void {
    const command = new PutRegistryCatalogDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates the catalog data for a repository in a public registry.</p>
   */
  public putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryCatalogDataCommandOutput>;
  public putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): void;
  public putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): void;
  public putRepositoryCatalogData(
    args: PutRepositoryCatalogDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRepositoryCatalogDataCommandOutput) => void),
    cb?: (err: any, data?: PutRepositoryCatalogDataCommandOutput) => void
  ): Promise<PutRepositoryCatalogDataCommandOutput> | void {
    const command = new PutRepositoryCatalogDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a repository policy to the specified public repository to control access
   *          permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
   *             Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  public setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRepositoryPolicyCommandOutput>;
  public setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;
  public setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): void;
  public setRepositoryPolicy(
    args: SetRepositoryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): Promise<SetRepositoryPolicyCommandOutput> | void {
    const command = new SetRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
   *          If existing tags on a resource aren't specified in the request parameters, they aren't
   *          changed. When a resource is deleted, the tags associated with that resource are also
   *          deleted.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads an image layer part to Amazon ECR.</p>
   *          <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of
   *          each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called
   *          once for each new image layer part.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadLayerPartCommandOutput>;
  public uploadLayerPart(
    args: UploadLayerPartCommandInput,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;
  public uploadLayerPart(
    args: UploadLayerPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): void;
  public uploadLayerPart(
    args: UploadLayerPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadLayerPartCommandOutput) => void),
    cb?: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): Promise<UploadLayerPartCommandOutput> | void {
    const command = new UploadLayerPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
