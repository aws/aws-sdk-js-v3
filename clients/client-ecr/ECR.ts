import { ECRClient } from "./ECRClient";
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
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *         <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *         <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 */
export class ECR extends ECRClient {
  /**
   * <p>Checks the availability of one or more image layers in a repository.</p>
   *         <p>When an image is pushed to a repository, each image layer is checked to verify if it
   *             has been uploaded before. If it has been uploaded, then the image layer is
   *             skipped.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
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
   * <p>Deletes a list of specified images within a repository. Images are specified with
   *             either an <code>imageTag</code> or <code>imageDigest</code>.</p>
   *         <p>You can remove a tag from an image by specifying the image's tag in your request. When
   *             you remove the last tag from an image, the image is deleted from your repository.</p>
   *         <p>You can completely delete an image (and all of its tags) by specifying the image's
   *             digest in your request.</p>
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
   * <p>Gets detailed information for an image. Images are specified with either an
   *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
   *         <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
   *             manifest.</p>
   */
  public batchGetImage(
    args: BatchGetImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetImageCommandOutput>;
  public batchGetImage(
    args: BatchGetImageCommandInput,
    cb: (err: any, data?: BatchGetImageCommandOutput) => void
  ): void;
  public batchGetImage(
    args: BatchGetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetImageCommandOutput) => void
  ): void;
  public batchGetImage(
    args: BatchGetImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetImageCommandOutput) => void),
    cb?: (err: any, data?: BatchGetImageCommandOutput) => void
  ): Promise<BatchGetImageCommandOutput> | void {
    const command = new BatchGetImageCommand(args);
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
   * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry,
   *             repository name, and upload ID. You can optionally provide a <code>sha256</code> digest
   *             of the image layer for data validation purposes.</p>
   *         <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
   *             layer to verify that the upload has completed.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
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
   * <p>Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the
   *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
   * <p>Deletes the lifecycle policy associated with the specified repository.</p>
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): Promise<DeleteLifecyclePolicyCommandOutput> | void {
    const command = new DeleteLifecyclePolicyCommand(args);
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
   * <p>Deletes the registry permissions policy.</p>
   */
  public deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryPolicyCommandOutput>;
  public deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    cb: (err: any, data?: DeleteRegistryPolicyCommandOutput) => void
  ): void;
  public deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryPolicyCommandOutput) => void
  ): void;
  public deleteRegistryPolicy(
    args: DeleteRegistryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegistryPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegistryPolicyCommandOutput) => void
  ): Promise<DeleteRegistryPolicyCommandOutput> | void {
    const command = new DeleteRegistryPolicyCommand(args);
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
   * <p>Deletes a repository. If the repository contains images, you must either delete all
   *             images in the repository or use the <code>force</code> option to delete the
   *             repository.</p>
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
   * <p>Deletes the repository policy associated with the specified repository.</p>
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
   * <p>Returns metadata about the images in a repository.</p>
   *         <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
   *                 before pushing them to a V2 Docker registry. The output of the <code>docker
   *                     images</code> command shows the uncompressed image size, so it may return a
   *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
   *         </note>
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
   * <p>Returns the scan findings for the specified image.</p>
   */
  public describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageScanFindingsCommandOutput>;
  public describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): void;
  public describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): void;
  public describeImageScanFindings(
    args: DescribeImageScanFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImageScanFindingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): Promise<DescribeImageScanFindingsCommandOutput> | void {
    const command = new DescribeImageScanFindingsCommand(args);
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
   * <p>Describes the settings for a registry. The replication configuration for a repository
   *             can be created or updated with the <a>PutReplicationConfiguration</a> API
   *             action.</p>
   */
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistryCommandOutput>;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegistryCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): Promise<DescribeRegistryCommandOutput> | void {
    const command = new DescribeRegistryCommand(args);
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
   * <p>Describes image repositories in a registry.</p>
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
   *             authentication credentials and can be used to access any Amazon ECR registry that your IAM
   *             principal has access to. The authorization token is valid for 12 hours.</p>
   *         <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be
   *             decoded and used in a <code>docker login</code> command to authenticate to a registry.
   *             The CLI offers an <code>get-login-password</code> command that simplifies the login
   *             process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry
   *                 authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
   * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
   *             only get URLs for image layers that are referenced in an image.</p>
   *         <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
   *             that is not already cached.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDownloadUrlForLayerCommandOutput>;
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): void;
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): void;
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDownloadUrlForLayerCommandOutput) => void),
    cb?: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): Promise<GetDownloadUrlForLayerCommandOutput> | void {
    const command = new GetDownloadUrlForLayerCommand(args);
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
   * <p>Retrieves the lifecycle policy for the specified repository.</p>
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): Promise<GetLifecyclePolicyCommandOutput> | void {
    const command = new GetLifecyclePolicyCommand(args);
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
   * <p>Retrieves the results of the lifecycle policy preview request for the specified
   *             repository.</p>
   */
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyPreviewCommandOutput>;
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): Promise<GetLifecyclePolicyPreviewCommandOutput> | void {
    const command = new GetLifecyclePolicyPreviewCommand(args);
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
   * <p>Retrieves the permissions policy for a registry.</p>
   */
  public getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistryPolicyCommandOutput>;
  public getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    cb: (err: any, data?: GetRegistryPolicyCommandOutput) => void
  ): void;
  public getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryPolicyCommandOutput) => void
  ): void;
  public getRegistryPolicy(
    args: GetRegistryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegistryPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetRegistryPolicyCommandOutput) => void
  ): Promise<GetRegistryPolicyCommandOutput> | void {
    const command = new GetRegistryPolicyCommand(args);
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
   *         <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer
   *             that has not already been uploaded. Whether or not an image layer has been uploaded is
   *             determined by the BatchCheckLayerAvailability API action.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
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
   * <p>Lists all the image IDs for the specified repository.</p>
   *         <p>You can filter images based on whether or not they are tagged by using the
   *                 <code>tagStatus</code> filter and specifying either <code>TAGGED</code>,
   *                 <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results
   *             to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your
   *             results to return only <code>TAGGED</code> images to list all of the tags in your
   *             repository.</p>
   */
  public listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
  public listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
  public listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;
  public listImages(
    args: ListImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImagesCommandOutput) => void),
    cb?: (err: any, data?: ListImagesCommandOutput) => void
  ): Promise<ListImagesCommandOutput> | void {
    const command = new ListImagesCommand(args);
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
   * <p>List the tags for an Amazon ECR resource.</p>
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
   * <p>Creates or updates the image manifest and tags associated with an image.</p>
   *         <p>When an image is pushed and all new image layers have been uploaded, the PutImage API
   *             is called once to create or update the image manifest and the tags associated with the
   *             image.</p>
   *
   *         <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
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
   * <p>Updates the image scanning configuration for the specified repository.</p>
   */
  public putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageScanningConfigurationCommandOutput>;
  public putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): void;
  public putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): void;
  public putImageScanningConfiguration(
    args: PutImageScanningConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutImageScanningConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): Promise<PutImageScanningConfigurationCommandOutput> | void {
    const command = new PutImageScanningConfigurationCommand(args);
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
   * <p>Updates the image tag mutability settings for the specified repository. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag
   *                 mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  public putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageTagMutabilityCommandOutput>;
  public putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): void;
  public putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): void;
  public putImageTagMutability(
    args: PutImageTagMutabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutImageTagMutabilityCommandOutput) => void),
    cb?: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): Promise<PutImageTagMutabilityCommandOutput> | void {
    const command = new PutImageTagMutabilityCommand(args);
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
   * <p>Creates or updates the lifecycle policy for the specified repository. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy
   *                 template</a>.</p>
   */
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecyclePolicyCommandOutput>;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): Promise<PutLifecyclePolicyCommandOutput> | void {
    const command = new PutLifecyclePolicyCommand(args);
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
   * <p>Creates or updates the permissions policy for your registry.</p>
   *         <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used
   *             when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  public putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistryPolicyCommandOutput>;
  public putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    cb: (err: any, data?: PutRegistryPolicyCommandOutput) => void
  ): void;
  public putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistryPolicyCommandOutput) => void
  ): void;
  public putRegistryPolicy(
    args: PutRegistryPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRegistryPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutRegistryPolicyCommandOutput) => void
  ): Promise<PutRegistryPolicyCommandOutput> | void {
    const command = new PutRegistryPolicyCommand(args);
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
   * <p>Creates or updates the replication configuration for a registry. The existing
   *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
   *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
   *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
   *                 service-linked roles for Amazon ECR</a> in the
   *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
   *         <note>
   *             <p>When configuring cross-account replication, the destination account must grant the
   *                 source account permission to replicate. This permission is controlled using a
   *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
   *         </note>
   */
  public putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutReplicationConfigurationCommandOutput>;
  public putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    cb: (err: any, data?: PutReplicationConfigurationCommandOutput) => void
  ): void;
  public putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutReplicationConfigurationCommandOutput) => void
  ): void;
  public putReplicationConfiguration(
    args: PutReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutReplicationConfigurationCommandOutput) => void
  ): Promise<PutReplicationConfigurationCommandOutput> | void {
    const command = new PutReplicationConfigurationCommand(args);
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
   * <p>Applies a repository policy to the specified repository to control access permissions.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
   *                 policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
   * <p>Starts an image vulnerability scan. An image scan can only be started once per 24
   *             hours on an individual image. This limit includes if an image was scanned on initial
   *             push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the
   *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  public startImageScan(
    args: StartImageScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImageScanCommandOutput>;
  public startImageScan(
    args: StartImageScanCommandInput,
    cb: (err: any, data?: StartImageScanCommandOutput) => void
  ): void;
  public startImageScan(
    args: StartImageScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImageScanCommandOutput) => void
  ): void;
  public startImageScan(
    args: StartImageScanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImageScanCommandOutput) => void),
    cb?: (err: any, data?: StartImageScanCommandOutput) => void
  ): Promise<StartImageScanCommandOutput> | void {
    const command = new StartImageScanCommand(args);
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
   * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
   *             to see the results before associating the lifecycle policy with the repository.</p>
   */
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLifecyclePolicyPreviewCommandOutput>;
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): void;
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void),
    cb?: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): Promise<StartLifecyclePolicyPreviewCommandOutput> | void {
    const command = new StartLifecyclePolicyPreviewCommand(args);
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
   * <p>Adds specified tags to a resource with the specified ARN. Existing tags on a resource
   *             are not changed if they are not specified in the request parameters.</p>
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
   *         <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size
   *             of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API
   *             is called once per each new image layer part.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
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
