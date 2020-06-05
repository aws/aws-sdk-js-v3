import { ECRClient } from "./ECRClient";
import {
  BatchCheckLayerAvailabilityCommand,
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput
} from "./commands/BatchCheckLayerAvailabilityCommand";
import {
  BatchDeleteImageCommand,
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput
} from "./commands/BatchDeleteImageCommand";
import {
  BatchGetImageCommand,
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput
} from "./commands/BatchGetImageCommand";
import {
  CompleteLayerUploadCommand,
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput
} from "./commands/CompleteLayerUploadCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput
} from "./commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommand,
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput
} from "./commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput
} from "./commands/DescribeImageScanFindingsCommand";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
} from "./commands/DescribeImagesCommand";
import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput
} from "./commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommand,
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput
} from "./commands/GetDownloadUrlForLayerCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput
} from "./commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput
} from "./commands/GetLifecyclePolicyPreviewCommand";
import {
  GetRepositoryPolicyCommand,
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput
} from "./commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommand,
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput
} from "./commands/InitiateLayerUploadCommand";
import {
  ListImagesCommand,
  ListImagesCommandInput,
  ListImagesCommandOutput
} from "./commands/ListImagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PutImageCommand,
  PutImageCommandInput,
  PutImageCommandOutput
} from "./commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommand,
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput
} from "./commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommand,
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput
} from "./commands/PutImageTagMutabilityCommand";
import {
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput
} from "./commands/PutLifecyclePolicyCommand";
import {
  SetRepositoryPolicyCommand,
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput
} from "./commands/SetRepositoryPolicyCommand";
import {
  StartImageScanCommand,
  StartImageScanCommandInput,
  StartImageScanCommandOutput
} from "./commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommand,
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput
} from "./commands/StartLifecyclePolicyPreviewCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UploadLayerPartCommand,
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput
} from "./commands/UploadLayerPartCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *         <p>Amazon Elastic Container Registry (Amazon ECR) is a managed Docker registry service. Customers can use the familiar
 *             Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and
 *             reliable registry. Amazon ECR supports private Docker repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images. Developers can use the Docker CLI to author and manage
 *             images.</p>
 */
export class ECR extends ECRClient {
  /**
   * <p>Check the availability of multiple image layers in a specified registry and
   *             repository.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void),
    cb?: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void
  ): Promise<BatchCheckLayerAvailabilityCommandOutput> | void {
    const command = new BatchCheckLayerAvailabilityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a list of specified images within a specified repository. Images are specified
   *             with either <code>imageTag</code> or <code>imageDigest</code>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDeleteImageCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteImageCommandOutput) => void
  ): Promise<BatchDeleteImageCommandOutput> | void {
    const command = new BatchDeleteImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets detailed information for specified images within a specified repository. Images
   *             are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetImageCommandOutput) => void),
    cb?: (err: any, data?: BatchGetImageCommandOutput) => void
  ): Promise<BatchGetImageCommandOutput> | void {
    const command = new BatchGetImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry,
   *             repository name, and upload ID. You can optionally provide a <code>sha256</code> digest
   *             of the image layer for data validation purposes.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CompleteLayerUploadCommandOutput) => void),
    cb?: (err: any, data?: CompleteLayerUploadCommandOutput) => void
  ): Promise<CompleteLayerUploadCommandOutput> | void {
    const command = new CompleteLayerUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR Repositories</a> in the
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): Promise<CreateRepositoryCommandOutput> | void {
    const command = new CreateRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified lifecycle policy.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): Promise<DeleteLifecyclePolicyCommandOutput> | void {
    const command = new DeleteLifecyclePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing image repository. If a repository contains images, you must use
   *             the <code>force</code> option to delete it.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): Promise<DeleteRepositoryCommandOutput> | void {
    const command = new DeleteRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the repository policy from a specified repository.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void
  ): Promise<DeleteRepositoryPolicyCommandOutput> | void {
    const command = new DeleteRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata about the images in a repository, including image size, image tags,
   *             and creation date.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeImagesCommandOutput) => void
  ): Promise<DescribeImagesCommandOutput> | void {
    const command = new DescribeImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the image scan findings for the specified image.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeImageScanFindingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void
  ): Promise<DescribeImageScanFindingsCommandOutput> | void {
    const command = new DescribeImageScanFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRepositoriesCommandOutput) => void
  ): Promise<DescribeRepositoriesCommandOutput> | void {
    const command = new DescribeRepositoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a token that is valid for a specified registry for 12 hours. This command
   *             allows you to use the <code>docker</code> CLI to push and pull images with Amazon ECR.
   *             If you do not specify a registry, the default registry is assumed.</p>
   *         <p>The <code>authorizationToken</code> returned for each registry specified is a base64
   *             encoded string that can be decoded and used in a <code>docker login</code> command to
   *             authenticate to a registry. The AWS CLI offers an <code>aws ecr get-login</code> command
   *             that simplifies the login process.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAuthorizationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): Promise<GetAuthorizationTokenCommandOutput> | void {
    const command = new GetAuthorizationTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You
   *             can only get URLs for image layers that are referenced in an image.</p>
   *         <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDownloadUrlForLayerCommandOutput) => void),
    cb?: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void
  ): Promise<GetDownloadUrlForLayerCommandOutput> | void {
    const command = new GetDownloadUrlForLayerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the specified lifecycle policy.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): Promise<GetLifecyclePolicyCommandOutput> | void {
    const command = new GetLifecyclePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the results of the specified lifecycle policy preview request.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void
  ): Promise<GetLifecyclePolicyPreviewCommandOutput> | void {
    const command = new GetLifecyclePolicyPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the repository policy for a specified repository.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryPolicyCommandOutput) => void
  ): Promise<GetRepositoryPolicyCommandOutput> | void {
    const command = new GetRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Notify Amazon ECR that you intend to upload an image layer.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: InitiateLayerUploadCommandOutput) => void),
    cb?: (err: any, data?: InitiateLayerUploadCommandOutput) => void
  ): Promise<InitiateLayerUploadCommandOutput> | void {
    const command = new InitiateLayerUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the image IDs for a given repository.</p>
   *         <p>You can filter images based on whether or not they are tagged by setting the
   *                 <code>tagStatus</code> parameter to <code>TAGGED</code> or <code>UNTAGGED</code>.
   *             For example, you can filter your results to return only <code>UNTAGGED</code> images and
   *             then pipe that result to a <a>BatchDeleteImage</a> operation to delete them.
   *             Or, you can filter your results to return only <code>TAGGED</code> images to list all of
   *             the tags in your repository.</p>
   */
  public listImages(
    args: ListImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagesCommandOutput>;
  public listImages(
    args: ListImagesCommandInput,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;
  public listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;
  public listImages(
    args: ListImagesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListImagesCommandOutput) => void),
    cb?: (err: any, data?: ListImagesCommandOutput) => void
  ): Promise<ListImagesCommandOutput> | void {
    const command = new ListImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates the image manifest and tags associated with an image.</p>
   *
   *         <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
   *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
   *          </note>
   */
  public putImage(
    args: PutImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageCommandOutput>;
  public putImage(
    args: PutImageCommandInput,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;
  public putImage(
    args: PutImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageCommandOutput) => void
  ): void;
  public putImage(
    args: PutImageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutImageCommandOutput) => void),
    cb?: (err: any, data?: PutImageCommandOutput) => void
  ): Promise<PutImageCommandOutput> | void {
    const command = new PutImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the image scanning configuration for a repository.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutImageScanningConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void
  ): Promise<PutImageScanningConfigurationCommandOutput> | void {
    const command = new PutImageScanningConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the image tag mutability settings for a repository. When a repository is
   *             configured with tag immutability, all image tags within the repository will be prevented
   *             them from being overwritten. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
   *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutImageTagMutabilityCommandOutput) => void),
    cb?: (err: any, data?: PutImageTagMutabilityCommandOutput) => void
  ): Promise<PutImageTagMutabilityCommandOutput> | void {
    const command = new PutImageTagMutabilityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a lifecycle policy. For information about lifecycle policy syntax,
   *             see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy Template</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): Promise<PutLifecyclePolicyCommandOutput> | void {
    const command = new PutLifecyclePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a repository policy on a specified repository to control access permissions.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicies.html">Amazon ECR Repository Policies</a> in the
   *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SetRepositoryPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetRepositoryPolicyCommandOutput) => void
  ): Promise<SetRepositoryPolicyCommandOutput> | void {
    const command = new SetRepositoryPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an image vulnerability scan. An image scan can only be started once per day on
   *             an individual image. This limit includes if an image was scanned on initial push. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image Scanning</a> in the
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartImageScanCommandOutput) => void),
    cb?: (err: any, data?: StartImageScanCommandOutput) => void
  ): Promise<StartImageScanCommandOutput> | void {
    const command = new StartImageScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a preview of the specified lifecycle policy. This allows you to see the results
   *             before creating the lifecycle policy.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void),
    cb?: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void
  ): Promise<StartLifecyclePolicyPreviewCommandOutput> | void {
    const command = new StartLifecyclePolicyPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds specified tags to a resource with the specified ARN. Existing tags on a resource
   *             are not changed if they are not specified in the request parameters.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads an image layer part to Amazon ECR.</p>
   *          <note>
   *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UploadLayerPartCommandOutput) => void),
    cb?: (err: any, data?: UploadLayerPartCommandOutput) => void
  ): Promise<UploadLayerPartCommandOutput> | void {
    const command = new UploadLayerPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
