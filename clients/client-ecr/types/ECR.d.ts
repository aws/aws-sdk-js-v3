import { ECRClient } from "./ECRClient";
import { BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput } from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "./commands/BatchDeleteImageCommand";
import { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "./commands/BatchGetImageCommand";
import { CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput } from "./commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput } from "./commands/DeleteLifecyclePolicyCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import { DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput } from "./commands/DeleteRepositoryPolicyCommand";
import { DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput } from "./commands/DescribeImageScanFindingsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput } from "./commands/DescribeRepositoriesCommand";
import { GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput } from "./commands/GetAuthorizationTokenCommand";
import { GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput } from "./commands/GetDownloadUrlForLayerCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "./commands/GetLifecyclePolicyCommand";
import { GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput } from "./commands/GetLifecyclePolicyPreviewCommand";
import { GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput } from "./commands/GetRepositoryPolicyCommand";
import { InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput } from "./commands/InitiateLayerUploadCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import { PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput } from "./commands/PutImageScanningConfigurationCommand";
import { PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput } from "./commands/PutImageTagMutabilityCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "./commands/PutLifecyclePolicyCommand";
import { SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput } from "./commands/SetRepositoryPolicyCommand";
import { StartImageScanCommandInput, StartImageScanCommandOutput } from "./commands/StartImageScanCommand";
import { StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput } from "./commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "./commands/UploadLayerPartCommand";
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
export declare class ECR extends ECRClient {
    /**
     * <p>Check the availability of multiple image layers in a specified registry and
     *             repository.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, options?: __HttpHandlerOptions): Promise<BatchCheckLayerAvailabilityCommandOutput>;
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void): void;
    batchCheckLayerAvailability(args: BatchCheckLayerAvailabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchCheckLayerAvailabilityCommandOutput) => void): void;
    /**
     * <p>Deletes a list of specified images within a specified repository. Images are specified
     *             with either <code>imageTag</code> or <code>imageDigest</code>.</p>
     *         <p>You can remove a tag from an image by specifying the image's tag in your request. When
     *             you remove the last tag from an image, the image is deleted from your repository.</p>
     *         <p>You can completely delete an image (and all of its tags) by specifying the image's
     *             digest in your request.</p>
     */
    batchDeleteImage(args: BatchDeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteImageCommandOutput>;
    batchDeleteImage(args: BatchDeleteImageCommandInput, cb: (err: any, data?: BatchDeleteImageCommandOutput) => void): void;
    batchDeleteImage(args: BatchDeleteImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteImageCommandOutput) => void): void;
    /**
     * <p>Gets detailed information for specified images within a specified repository. Images
     *             are specified with either <code>imageTag</code> or <code>imageDigest</code>.</p>
     */
    batchGetImage(args: BatchGetImageCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetImageCommandOutput>;
    batchGetImage(args: BatchGetImageCommandInput, cb: (err: any, data?: BatchGetImageCommandOutput) => void): void;
    batchGetImage(args: BatchGetImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetImageCommandOutput) => void): void;
    /**
     * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry,
     *             repository name, and upload ID. You can optionally provide a <code>sha256</code> digest
     *             of the image layer for data validation purposes.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    completeLayerUpload(args: CompleteLayerUploadCommandInput, options?: __HttpHandlerOptions): Promise<CompleteLayerUploadCommandOutput>;
    completeLayerUpload(args: CompleteLayerUploadCommandInput, cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void): void;
    completeLayerUpload(args: CompleteLayerUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteLayerUploadCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For
     *             more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR Repositories</a> in the
     *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    createRepository(args: CreateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateRepositoryCommandOutput>;
    createRepository(args: CreateRepositoryCommandInput, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    createRepository(args: CreateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    /**
     * <p>Deletes the specified lifecycle policy.</p>
     */
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLifecyclePolicyCommandOutput>;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    deleteLifecyclePolicy(args: DeleteLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes an existing image repository. If a repository contains images, you must use
     *             the <code>force</code> option to delete it.</p>
     */
    deleteRepository(args: DeleteRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryCommandOutput>;
    deleteRepository(args: DeleteRepositoryCommandInput, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    deleteRepository(args: DeleteRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    /**
     * <p>Deletes the repository policy from a specified repository.</p>
     */
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryPolicyCommandOutput>;
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void): void;
    deleteRepositoryPolicy(args: DeleteRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Describes the image scan findings for the specified image.</p>
     */
    describeImageScanFindings(args: DescribeImageScanFindingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageScanFindingsCommandOutput>;
    describeImageScanFindings(args: DescribeImageScanFindingsCommandInput, cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void): void;
    describeImageScanFindings(args: DescribeImageScanFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImageScanFindingsCommandOutput) => void): void;
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
    describeImages(args: DescribeImagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImagesCommandOutput>;
    describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    describeImages(args: DescribeImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
    /**
     * <p>Describes image repositories in a registry.</p>
     */
    describeRepositories(args: DescribeRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRepositoriesCommandOutput>;
    describeRepositories(args: DescribeRepositoriesCommandInput, cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void): void;
    describeRepositories(args: DescribeRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRepositoriesCommandOutput) => void): void;
    /**
     * <p>Retrieves a token that is valid for a specified registry for 12 hours. This command
     *             allows you to use the <code>docker</code> CLI to push and pull images with Amazon ECR.
     *             If you do not specify a registry, the default registry is assumed.</p>
     *         <p>The <code>authorizationToken</code> returned for each registry specified is a base64
     *             encoded string that can be decoded and used in a <code>docker login</code> command to
     *             authenticate to a registry. The AWS CLI offers an <code>aws ecr get-login</code> command
     *             that simplifies the login process.</p>
     */
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizationTokenCommandOutput>;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    /**
     * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You
     *             can only get URLs for image layers that are referenced in an image.</p>
     *         <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    getDownloadUrlForLayer(args: GetDownloadUrlForLayerCommandInput, options?: __HttpHandlerOptions): Promise<GetDownloadUrlForLayerCommandOutput>;
    getDownloadUrlForLayer(args: GetDownloadUrlForLayerCommandInput, cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void): void;
    getDownloadUrlForLayer(args: GetDownloadUrlForLayerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDownloadUrlForLayerCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified lifecycle policy.</p>
     */
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetLifecyclePolicyCommandOutput>;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    getLifecyclePolicy(args: GetLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves the results of the specified lifecycle policy preview request.</p>
     */
    getLifecyclePolicyPreview(args: GetLifecyclePolicyPreviewCommandInput, options?: __HttpHandlerOptions): Promise<GetLifecyclePolicyPreviewCommandOutput>;
    getLifecyclePolicyPreview(args: GetLifecyclePolicyPreviewCommandInput, cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void): void;
    getLifecyclePolicyPreview(args: GetLifecyclePolicyPreviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLifecyclePolicyPreviewCommandOutput) => void): void;
    /**
     * <p>Retrieves the repository policy for a specified repository.</p>
     */
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryPolicyCommandOutput>;
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void): void;
    getRepositoryPolicy(args: GetRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Notify Amazon ECR that you intend to upload an image layer.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, options?: __HttpHandlerOptions): Promise<InitiateLayerUploadCommandOutput>;
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void): void;
    initiateLayerUpload(args: InitiateLayerUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitiateLayerUploadCommandOutput) => void): void;
    /**
     * <p>Lists all the image IDs for a given repository.</p>
     *         <p>You can filter images based on whether or not they are tagged by setting the
     *                 <code>tagStatus</code> parameter to <code>TAGGED</code> or <code>UNTAGGED</code>.
     *             For example, you can filter your results to return only <code>UNTAGGED</code> images and
     *             then pipe that result to a <a>BatchDeleteImage</a> operation to delete them.
     *             Or, you can filter your results to return only <code>TAGGED</code> images to list all of
     *             the tags in your repository.</p>
     */
    listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
    listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    listImages(args: ListImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    /**
     * <p>List the tags for an Amazon ECR resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Creates or updates the image manifest and tags associated with an image.</p>
     *
     *         <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    putImage(args: PutImageCommandInput, options?: __HttpHandlerOptions): Promise<PutImageCommandOutput>;
    putImage(args: PutImageCommandInput, cb: (err: any, data?: PutImageCommandOutput) => void): void;
    putImage(args: PutImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImageCommandOutput) => void): void;
    /**
     * <p>Updates the image scanning configuration for a repository.</p>
     */
    putImageScanningConfiguration(args: PutImageScanningConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutImageScanningConfigurationCommandOutput>;
    putImageScanningConfiguration(args: PutImageScanningConfigurationCommandInput, cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void): void;
    putImageScanningConfiguration(args: PutImageScanningConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImageScanningConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the image tag mutability settings for a repository. When a repository is
     *             configured with tag immutability, all image tags within the repository will be prevented
     *             them from being overwritten. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image Tag
     *                 Mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    putImageTagMutability(args: PutImageTagMutabilityCommandInput, options?: __HttpHandlerOptions): Promise<PutImageTagMutabilityCommandOutput>;
    putImageTagMutability(args: PutImageTagMutabilityCommandInput, cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void): void;
    putImageTagMutability(args: PutImageTagMutabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutImageTagMutabilityCommandOutput) => void): void;
    /**
     * <p>Creates or updates a lifecycle policy. For information about lifecycle policy syntax,
     *             see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy Template</a>.</p>
     */
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutLifecyclePolicyCommandOutput>;
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void): void;
    putLifecyclePolicy(args: PutLifecyclePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void): void;
    /**
     * <p>Applies a repository policy on a specified repository to control access permissions.
     *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicies.html">Amazon ECR Repository Policies</a> in the
     *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, options?: __HttpHandlerOptions): Promise<SetRepositoryPolicyCommandOutput>;
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void): void;
    setRepositoryPolicy(args: SetRepositoryPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetRepositoryPolicyCommandOutput) => void): void;
    /**
     * <p>Starts an image vulnerability scan. An image scan can only be started once per day on
     *             an individual image. This limit includes if an image was scanned on initial push. For
     *             more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image Scanning</a> in the
     *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
     */
    startImageScan(args: StartImageScanCommandInput, options?: __HttpHandlerOptions): Promise<StartImageScanCommandOutput>;
    startImageScan(args: StartImageScanCommandInput, cb: (err: any, data?: StartImageScanCommandOutput) => void): void;
    startImageScan(args: StartImageScanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartImageScanCommandOutput) => void): void;
    /**
     * <p>Starts a preview of the specified lifecycle policy. This allows you to see the results
     *             before creating the lifecycle policy.</p>
     */
    startLifecyclePolicyPreview(args: StartLifecyclePolicyPreviewCommandInput, options?: __HttpHandlerOptions): Promise<StartLifecyclePolicyPreviewCommandOutput>;
    startLifecyclePolicyPreview(args: StartLifecyclePolicyPreviewCommandInput, cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void): void;
    startLifecyclePolicyPreview(args: StartLifecyclePolicyPreviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartLifecyclePolicyPreviewCommandOutput) => void): void;
    /**
     * <p>Adds specified tags to a resource with the specified ARN. Existing tags on a resource
     *             are not changed if they are not specified in the request parameters.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Uploads an image layer part to Amazon ECR.</p>
     *          <note>
     *             <p>This operation is used by the Amazon ECR proxy, and it is not intended for general use by
     *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
     *          </note>
     */
    uploadLayerPart(args: UploadLayerPartCommandInput, options?: __HttpHandlerOptions): Promise<UploadLayerPartCommandOutput>;
    uploadLayerPart(args: UploadLayerPartCommandInput, cb: (err: any, data?: UploadLayerPartCommandOutput) => void): void;
    uploadLayerPart(args: UploadLayerPartCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadLayerPartCommandOutput) => void): void;
}
