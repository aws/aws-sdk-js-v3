import { ECRClient } from "./ECRClient";
import { BatchCheckLayerAvailabilityInput } from "./types/BatchCheckLayerAvailabilityInput";
import { BatchCheckLayerAvailabilityOutput } from "./types/BatchCheckLayerAvailabilityOutput";
import { BatchDeleteImageInput } from "./types/BatchDeleteImageInput";
import { BatchDeleteImageOutput } from "./types/BatchDeleteImageOutput";
import { BatchGetImageInput } from "./types/BatchGetImageInput";
import { BatchGetImageOutput } from "./types/BatchGetImageOutput";
import { CompleteLayerUploadInput } from "./types/CompleteLayerUploadInput";
import { CompleteLayerUploadOutput } from "./types/CompleteLayerUploadOutput";
import { CreateRepositoryInput } from "./types/CreateRepositoryInput";
import { CreateRepositoryOutput } from "./types/CreateRepositoryOutput";
import { DeleteLifecyclePolicyInput } from "./types/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "./types/DeleteLifecyclePolicyOutput";
import { DeleteRepositoryInput } from "./types/DeleteRepositoryInput";
import { DeleteRepositoryOutput } from "./types/DeleteRepositoryOutput";
import { DeleteRepositoryPolicyInput } from "./types/DeleteRepositoryPolicyInput";
import { DeleteRepositoryPolicyOutput } from "./types/DeleteRepositoryPolicyOutput";
import { DescribeImagesInput } from "./types/DescribeImagesInput";
import { DescribeImagesOutput } from "./types/DescribeImagesOutput";
import { DescribeRepositoriesInput } from "./types/DescribeRepositoriesInput";
import { DescribeRepositoriesOutput } from "./types/DescribeRepositoriesOutput";
import { EmptyUploadException } from "./types/EmptyUploadException";
import { GetAuthorizationTokenInput } from "./types/GetAuthorizationTokenInput";
import { GetAuthorizationTokenOutput } from "./types/GetAuthorizationTokenOutput";
import { GetDownloadUrlForLayerInput } from "./types/GetDownloadUrlForLayerInput";
import { GetDownloadUrlForLayerOutput } from "./types/GetDownloadUrlForLayerOutput";
import { GetLifecyclePolicyInput } from "./types/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "./types/GetLifecyclePolicyOutput";
import { GetLifecyclePolicyPreviewInput } from "./types/GetLifecyclePolicyPreviewInput";
import { GetLifecyclePolicyPreviewOutput } from "./types/GetLifecyclePolicyPreviewOutput";
import { GetRepositoryPolicyInput } from "./types/GetRepositoryPolicyInput";
import { GetRepositoryPolicyOutput } from "./types/GetRepositoryPolicyOutput";
import { ImageAlreadyExistsException } from "./types/ImageAlreadyExistsException";
import { ImageNotFoundException } from "./types/ImageNotFoundException";
import { ImageTagAlreadyExistsException } from "./types/ImageTagAlreadyExistsException";
import { InitiateLayerUploadInput } from "./types/InitiateLayerUploadInput";
import { InitiateLayerUploadOutput } from "./types/InitiateLayerUploadOutput";
import { InvalidLayerException } from "./types/InvalidLayerException";
import { InvalidLayerPartException } from "./types/InvalidLayerPartException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidTagParameterException } from "./types/InvalidTagParameterException";
import { LayerAlreadyExistsException } from "./types/LayerAlreadyExistsException";
import { LayerInaccessibleException } from "./types/LayerInaccessibleException";
import { LayerPartTooSmallException } from "./types/LayerPartTooSmallException";
import { LayersNotFoundException } from "./types/LayersNotFoundException";
import { LifecyclePolicyNotFoundException } from "./types/LifecyclePolicyNotFoundException";
import { LifecyclePolicyPreviewInProgressException } from "./types/LifecyclePolicyPreviewInProgressException";
import { LifecyclePolicyPreviewNotFoundException } from "./types/LifecyclePolicyPreviewNotFoundException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListImagesInput } from "./types/ListImagesInput";
import { ListImagesOutput } from "./types/ListImagesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { PutImageInput } from "./types/PutImageInput";
import { PutImageOutput } from "./types/PutImageOutput";
import { PutImageTagMutabilityInput } from "./types/PutImageTagMutabilityInput";
import { PutImageTagMutabilityOutput } from "./types/PutImageTagMutabilityOutput";
import { PutLifecyclePolicyInput } from "./types/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "./types/PutLifecyclePolicyOutput";
import { RepositoryAlreadyExistsException } from "./types/RepositoryAlreadyExistsException";
import { RepositoryNotEmptyException } from "./types/RepositoryNotEmptyException";
import { RepositoryNotFoundException } from "./types/RepositoryNotFoundException";
import { RepositoryPolicyNotFoundException } from "./types/RepositoryPolicyNotFoundException";
import { ServerException } from "./types/ServerException";
import { SetRepositoryPolicyInput } from "./types/SetRepositoryPolicyInput";
import { SetRepositoryPolicyOutput } from "./types/SetRepositoryPolicyOutput";
import { StartLifecyclePolicyPreviewInput } from "./types/StartLifecyclePolicyPreviewInput";
import { StartLifecyclePolicyPreviewOutput } from "./types/StartLifecyclePolicyPreviewOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UploadLayerPartInput } from "./types/UploadLayerPartInput";
import { UploadLayerPartOutput } from "./types/UploadLayerPartOutput";
import { UploadNotFoundException } from "./types/UploadNotFoundException";
import { BatchCheckLayerAvailabilityCommand } from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommand } from "./commands/BatchDeleteImageCommand";
import { BatchGetImageCommand } from "./commands/BatchGetImageCommand";
import { CompleteLayerUploadCommand } from "./commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommand } from "./commands/CreateRepositoryCommand";
import { DeleteLifecyclePolicyCommand } from "./commands/DeleteLifecyclePolicyCommand";
import { DeleteRepositoryCommand } from "./commands/DeleteRepositoryCommand";
import { DeleteRepositoryPolicyCommand } from "./commands/DeleteRepositoryPolicyCommand";
import { DescribeImagesCommand } from "./commands/DescribeImagesCommand";
import { DescribeRepositoriesCommand } from "./commands/DescribeRepositoriesCommand";
import { GetAuthorizationTokenCommand } from "./commands/GetAuthorizationTokenCommand";
import { GetDownloadUrlForLayerCommand } from "./commands/GetDownloadUrlForLayerCommand";
import { GetLifecyclePolicyCommand } from "./commands/GetLifecyclePolicyCommand";
import { GetLifecyclePolicyPreviewCommand } from "./commands/GetLifecyclePolicyPreviewCommand";
import { GetRepositoryPolicyCommand } from "./commands/GetRepositoryPolicyCommand";
import { InitiateLayerUploadCommand } from "./commands/InitiateLayerUploadCommand";
import { ListImagesCommand } from "./commands/ListImagesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PutImageCommand } from "./commands/PutImageCommand";
import { PutImageTagMutabilityCommand } from "./commands/PutImageTagMutabilityCommand";
import { PutLifecyclePolicyCommand } from "./commands/PutLifecyclePolicyCommand";
import { SetRepositoryPolicyCommand } from "./commands/SetRepositoryPolicyCommand";
import { StartLifecyclePolicyPreviewCommand } from "./commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommand } from "./commands/UploadLayerPartCommand";

export class ECR extends ECRClient {
  /**
   * <p>Check the availability of multiple image layers in a specified registry and repository.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityInput
  ): Promise<BatchCheckLayerAvailabilityOutput>;
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityInput,
    cb: (err: any, data?: BatchCheckLayerAvailabilityOutput) => void
  ): void;
  public batchCheckLayerAvailability(
    args: BatchCheckLayerAvailabilityInput,
    cb?: (err: any, data?: BatchCheckLayerAvailabilityOutput) => void
  ): Promise<BatchCheckLayerAvailabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchCheckLayerAvailabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a list of specified images within a specified repository. Images are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteImage(
    args: BatchDeleteImageInput
  ): Promise<BatchDeleteImageOutput>;
  public batchDeleteImage(
    args: BatchDeleteImageInput,
    cb: (err: any, data?: BatchDeleteImageOutput) => void
  ): void;
  public batchDeleteImage(
    args: BatchDeleteImageInput,
    cb?: (err: any, data?: BatchDeleteImageOutput) => void
  ): Promise<BatchDeleteImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets detailed information for specified images within a specified repository. Images are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetImage(args: BatchGetImageInput): Promise<BatchGetImageOutput>;
  public batchGetImage(
    args: BatchGetImageInput,
    cb: (err: any, data?: BatchGetImageOutput) => void
  ): void;
  public batchGetImage(
    args: BatchGetImageInput,
    cb?: (err: any, data?: BatchGetImageOutput) => void
  ): Promise<BatchGetImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {UploadNotFoundException} <p>The upload could not be found, or the specified upload id is not valid for this repository.</p>
   *   - {InvalidLayerException} <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does not match the digest specified.</p>
   *   - {LayerPartTooSmallException} <p>Layer parts must be at least 5 MiB in size.</p>
   *   - {LayerAlreadyExistsException} <p>The image layer already exists in the associated repository.</p>
   *   - {EmptyUploadException} <p>The specified layer upload does not contain any layer parts.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public completeLayerUpload(
    args: CompleteLayerUploadInput
  ): Promise<CompleteLayerUploadOutput>;
  public completeLayerUpload(
    args: CompleteLayerUploadInput,
    cb: (err: any, data?: CompleteLayerUploadOutput) => void
  ): void;
  public completeLayerUpload(
    args: CompleteLayerUploadInput,
    cb?: (err: any, data?: CompleteLayerUploadOutput) => void
  ): Promise<CompleteLayerUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CompleteLayerUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an image repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {InvalidTagParameterException} <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   *   - {TooManyTagsException} <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.</p>
   *   - {RepositoryAlreadyExistsException} <p>The specified repository already exists in the specified registry.</p>
   *   - {LimitExceededException} <p>The operation did not succeed because it would have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html">Amazon ECR Default Service Limits</a> in the Amazon Elastic Container Registry User Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRepository(
    args: CreateRepositoryInput
  ): Promise<CreateRepositoryOutput>;
  public createRepository(
    args: CreateRepositoryInput,
    cb: (err: any, data?: CreateRepositoryOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryInput,
    cb?: (err: any, data?: CreateRepositoryOutput) => void
  ): Promise<CreateRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified lifecycle policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {LifecyclePolicyNotFoundException} <p>The lifecycle policy could not be found, and no policy is set to the repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput
  ): Promise<DeleteLifecyclePolicyOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyInput,
    cb?: (err: any, data?: DeleteLifecyclePolicyOutput) => void
  ): Promise<DeleteLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing image repository. If a repository contains images, you must use the <code>force</code> option to delete it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {RepositoryNotEmptyException} <p>The specified repository contains images. To delete a repository that contains images, you must force the deletion with the <code>force</code> parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRepository(
    args: DeleteRepositoryInput
  ): Promise<DeleteRepositoryOutput>;
  public deleteRepository(
    args: DeleteRepositoryInput,
    cb: (err: any, data?: DeleteRepositoryOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryInput,
    cb?: (err: any, data?: DeleteRepositoryOutput) => void
  ): Promise<DeleteRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the repository policy from a specified repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {RepositoryPolicyNotFoundException} <p>The specified repository and registry combination does not have an associated repository policy.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyInput
  ): Promise<DeleteRepositoryPolicyOutput>;
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyInput,
    cb: (err: any, data?: DeleteRepositoryPolicyOutput) => void
  ): void;
  public deleteRepositoryPolicy(
    args: DeleteRepositoryPolicyInput,
    cb?: (err: any, data?: DeleteRepositoryPolicyOutput) => void
  ): Promise<DeleteRepositoryPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRepositoryPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about the images in a repository, including image size, image tags, and creation date.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {ImageNotFoundException} <p>The image requested does not exist in the specified repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImages(
    args: DescribeImagesInput
  ): Promise<DescribeImagesOutput>;
  public describeImages(
    args: DescribeImagesInput,
    cb: (err: any, data?: DescribeImagesOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesInput,
    cb?: (err: any, data?: DescribeImagesOutput) => void
  ): Promise<DescribeImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes image repositories in a registry.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRepositories(
    args: DescribeRepositoriesInput
  ): Promise<DescribeRepositoriesOutput>;
  public describeRepositories(
    args: DescribeRepositoriesInput,
    cb: (err: any, data?: DescribeRepositoriesOutput) => void
  ): void;
  public describeRepositories(
    args: DescribeRepositoriesInput,
    cb?: (err: any, data?: DescribeRepositoriesOutput) => void
  ): Promise<DescribeRepositoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRepositoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a token that is valid for a specified registry for 12 hours. This command allows you to use the <code>docker</code> CLI to push and pull images with Amazon ECR. If you do not specify a registry, the default registry is assumed.</p> <p>The <code>authorizationToken</code> returned for each registry specified is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The AWS CLI offers an <code>aws ecr get-login</code> command that simplifies the login process.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAuthorizationToken(
    args: GetAuthorizationTokenInput
  ): Promise<GetAuthorizationTokenOutput>;
  public getAuthorizationToken(
    args: GetAuthorizationTokenInput,
    cb: (err: any, data?: GetAuthorizationTokenOutput) => void
  ): void;
  public getAuthorizationToken(
    args: GetAuthorizationTokenInput,
    cb?: (err: any, data?: GetAuthorizationTokenOutput) => void
  ): Promise<GetAuthorizationTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAuthorizationTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {LayersNotFoundException} <p>The specified layers could not be found, or the specified layer is not valid for this repository.</p>
   *   - {LayerInaccessibleException} <p>The specified layer is not available because it is not associated with an image. Unassociated image layers may be cleaned up at any time.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerInput
  ): Promise<GetDownloadUrlForLayerOutput>;
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerInput,
    cb: (err: any, data?: GetDownloadUrlForLayerOutput) => void
  ): void;
  public getDownloadUrlForLayer(
    args: GetDownloadUrlForLayerInput,
    cb?: (err: any, data?: GetDownloadUrlForLayerOutput) => void
  ): Promise<GetDownloadUrlForLayerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDownloadUrlForLayerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified lifecycle policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {LifecyclePolicyNotFoundException} <p>The lifecycle policy could not be found, and no policy is set to the repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput
  ): Promise<GetLifecyclePolicyOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyInput,
    cb?: (err: any, data?: GetLifecyclePolicyOutput) => void
  ): Promise<GetLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the results of the specified lifecycle policy preview request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {LifecyclePolicyPreviewNotFoundException} <p>There is no dry run for this repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewInput
  ): Promise<GetLifecyclePolicyPreviewOutput>;
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewInput,
    cb: (err: any, data?: GetLifecyclePolicyPreviewOutput) => void
  ): void;
  public getLifecyclePolicyPreview(
    args: GetLifecyclePolicyPreviewInput,
    cb?: (err: any, data?: GetLifecyclePolicyPreviewOutput) => void
  ): Promise<GetLifecyclePolicyPreviewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLifecyclePolicyPreviewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the repository policy for a specified repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {RepositoryPolicyNotFoundException} <p>The specified repository and registry combination does not have an associated repository policy.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRepositoryPolicy(
    args: GetRepositoryPolicyInput
  ): Promise<GetRepositoryPolicyOutput>;
  public getRepositoryPolicy(
    args: GetRepositoryPolicyInput,
    cb: (err: any, data?: GetRepositoryPolicyOutput) => void
  ): void;
  public getRepositoryPolicy(
    args: GetRepositoryPolicyInput,
    cb?: (err: any, data?: GetRepositoryPolicyOutput) => void
  ): Promise<GetRepositoryPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRepositoryPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Notify Amazon ECR that you intend to upload an image layer.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public initiateLayerUpload(
    args: InitiateLayerUploadInput
  ): Promise<InitiateLayerUploadOutput>;
  public initiateLayerUpload(
    args: InitiateLayerUploadInput,
    cb: (err: any, data?: InitiateLayerUploadOutput) => void
  ): void;
  public initiateLayerUpload(
    args: InitiateLayerUploadInput,
    cb?: (err: any, data?: InitiateLayerUploadOutput) => void
  ): Promise<InitiateLayerUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InitiateLayerUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the image IDs for a given repository.</p> <p>You can filter images based on whether or not they are tagged by setting the <code>tagStatus</code> parameter to <code>TAGGED</code> or <code>UNTAGGED</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listImages(args: ListImagesInput): Promise<ListImagesOutput>;
  public listImages(
    args: ListImagesInput,
    cb: (err: any, data?: ListImagesOutput) => void
  ): void;
  public listImages(
    args: ListImagesInput,
    cb?: (err: any, data?: ListImagesOutput) => void
  ): Promise<ListImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the tags for an Amazon ECR resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates the image manifest and tags associated with an image.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {ImageAlreadyExistsException} <p>The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.</p>
   *   - {LayersNotFoundException} <p>The specified layers could not be found, or the specified layer is not valid for this repository.</p>
   *   - {LimitExceededException} <p>The operation did not succeed because it would have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html">Amazon ECR Default Service Limits</a> in the Amazon Elastic Container Registry User Guide.</p>
   *   - {ImageTagAlreadyExistsException} <p>The specified image is tagged with a tag that already exists. The repository is configured for tag immutability.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putImage(args: PutImageInput): Promise<PutImageOutput>;
  public putImage(
    args: PutImageInput,
    cb: (err: any, data?: PutImageOutput) => void
  ): void;
  public putImage(
    args: PutImageInput,
    cb?: (err: any, data?: PutImageOutput) => void
  ): Promise<PutImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the image tag mutability settings for a repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putImageTagMutability(
    args: PutImageTagMutabilityInput
  ): Promise<PutImageTagMutabilityOutput>;
  public putImageTagMutability(
    args: PutImageTagMutabilityInput,
    cb: (err: any, data?: PutImageTagMutabilityOutput) => void
  ): void;
  public putImageTagMutability(
    args: PutImageTagMutabilityInput,
    cb?: (err: any, data?: PutImageTagMutabilityOutput) => void
  ): Promise<PutImageTagMutabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutImageTagMutabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy Template</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput
  ): Promise<PutLifecyclePolicyOutput>;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput,
    cb: (err: any, data?: PutLifecyclePolicyOutput) => void
  ): void;
  public putLifecyclePolicy(
    args: PutLifecyclePolicyInput,
    cb?: (err: any, data?: PutLifecyclePolicyOutput) => void
  ): Promise<PutLifecyclePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLifecyclePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a repository policy on a specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setRepositoryPolicy(
    args: SetRepositoryPolicyInput
  ): Promise<SetRepositoryPolicyOutput>;
  public setRepositoryPolicy(
    args: SetRepositoryPolicyInput,
    cb: (err: any, data?: SetRepositoryPolicyOutput) => void
  ): void;
  public setRepositoryPolicy(
    args: SetRepositoryPolicyInput,
    cb?: (err: any, data?: SetRepositoryPolicyOutput) => void
  ): Promise<SetRepositoryPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetRepositoryPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a preview of the specified lifecycle policy. This allows you to see the results before creating the lifecycle policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {LifecyclePolicyNotFoundException} <p>The lifecycle policy could not be found, and no policy is set to the repository.</p>
   *   - {LifecyclePolicyPreviewInProgressException} <p>The previous lifecycle policy preview request has not completed. Please try again later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewInput
  ): Promise<StartLifecyclePolicyPreviewOutput>;
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewInput,
    cb: (err: any, data?: StartLifecyclePolicyPreviewOutput) => void
  ): void;
  public startLifecyclePolicyPreview(
    args: StartLifecyclePolicyPreviewInput,
    cb?: (err: any, data?: StartLifecyclePolicyPreviewOutput) => void
  ): Promise<StartLifecyclePolicyPreviewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartLifecyclePolicyPreviewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {InvalidTagParameterException} <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   *   - {TooManyTagsException} <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {InvalidTagParameterException} <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   *   - {TooManyTagsException} <p>The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads an image layer part to Amazon ECR.</p> <note> <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server-side issue.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {InvalidLayerPartException} <p>The layer part size is not valid, or the first byte specified is not consecutive to the last byte of a previous layer part upload.</p>
   *   - {RepositoryNotFoundException} <p>The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.</p>
   *   - {UploadNotFoundException} <p>The upload could not be found, or the specified upload id is not valid for this repository.</p>
   *   - {LimitExceededException} <p>The operation did not succeed because it would have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html">Amazon ECR Default Service Limits</a> in the Amazon Elastic Container Registry User Guide.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadLayerPart(
    args: UploadLayerPartInput
  ): Promise<UploadLayerPartOutput>;
  public uploadLayerPart(
    args: UploadLayerPartInput,
    cb: (err: any, data?: UploadLayerPartOutput) => void
  ): void;
  public uploadLayerPart(
    args: UploadLayerPartInput,
    cb?: (err: any, data?: UploadLayerPartOutput) => void
  ): Promise<UploadLayerPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadLayerPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
