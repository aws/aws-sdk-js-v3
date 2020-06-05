import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>This data type is used in the <a>ImageScanFinding</a> data type.</p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p>The attribute key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   */
  value?: string;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

/**
 * <p>An object representing authorization data for an Amazon ECR registry.</p>
 */
export interface AuthorizationData {
  __type?: "AuthorizationData";
  /**
   * <p>A base64-encoded string that contains authorization data for the specified Amazon ECR
   *             registry. When the string is decoded, it is presented in the format
   *                 <code>user:password</code> for private registry authentication using <code>docker
   *                 login</code>.</p>
   */
  authorizationToken?: string;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *             Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The registry URL to use for this authorization token in a <code>docker login</code>
   *             command. The Amazon ECR registry URL format is
   *         <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example,
   *         <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. </p>
   */
  proxyEndpoint?: string;
}

export namespace AuthorizationData {
  export const filterSensitiveLog = (obj: AuthorizationData): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationData =>
    __isa(o, "AuthorizationData");
}

export interface BatchCheckLayerAvailabilityRequest {
  __type?: "BatchCheckLayerAvailabilityRequest";
  /**
   * <p>The digests of the image layers to check.</p>
   */
  layerDigests: string[] | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the image layers to
   *             check. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the image layers to check.</p>
   */
  repositoryName: string | undefined;
}

export namespace BatchCheckLayerAvailabilityRequest {
  export const filterSensitiveLog = (
    obj: BatchCheckLayerAvailabilityRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchCheckLayerAvailabilityRequest =>
    __isa(o, "BatchCheckLayerAvailabilityRequest");
}

export interface BatchCheckLayerAvailabilityResponse {
  __type?: "BatchCheckLayerAvailabilityResponse";
  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: LayerFailure[];

  /**
   * <p>A list of image layer objects corresponding to the image layer references in the
   *             request.</p>
   */
  layers?: Layer[];
}

export namespace BatchCheckLayerAvailabilityResponse {
  export const filterSensitiveLog = (
    obj: BatchCheckLayerAvailabilityResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchCheckLayerAvailabilityResponse =>
    __isa(o, "BatchCheckLayerAvailabilityResponse");
}

/**
 * <p>Deletes specified images within a specified repository. Images are specified with
 *             either the <code>imageTag</code> or <code>imageDigest</code>.</p>
 */
export interface BatchDeleteImageRequest {
  __type?: "BatchDeleteImageRequest";
  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the image to delete.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the image to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace BatchDeleteImageRequest {
  export const filterSensitiveLog = (obj: BatchDeleteImageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteImageRequest =>
    __isa(o, "BatchDeleteImageRequest");
}

export interface BatchDeleteImageResponse {
  __type?: "BatchDeleteImageResponse";
  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];

  /**
   * <p>The image IDs of the deleted images.</p>
   */
  imageIds?: ImageIdentifier[];
}

export namespace BatchDeleteImageResponse {
  export const filterSensitiveLog = (obj: BatchDeleteImageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteImageResponse =>
    __isa(o, "BatchDeleteImageResponse");
}

export interface BatchGetImageRequest {
  __type?: "BatchGetImageRequest";
  /**
   * <p>The accepted media types for the request.</p>
   *         <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> |
   *                 <code>application/vnd.docker.distribution.manifest.v2+json</code> |
   *                 <code>application/vnd.oci.image.manifest.v1+json</code>
   *          </p>
   */
  acceptedMediaTypes?: string[];

  /**
   * <p>A list of image ID references that correspond to images to describe. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the images to describe.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;
}

export namespace BatchGetImageRequest {
  export const filterSensitiveLog = (obj: BatchGetImageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetImageRequest =>
    __isa(o, "BatchGetImageRequest");
}

export interface BatchGetImageResponse {
  __type?: "BatchGetImageResponse";
  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];

  /**
   * <p>A list of image objects corresponding to the image references in the request.</p>
   */
  images?: Image[];
}

export namespace BatchGetImageResponse {
  export const filterSensitiveLog = (obj: BatchGetImageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetImageResponse =>
    __isa(o, "BatchGetImageResponse");
}

export interface CompleteLayerUploadRequest {
  __type?: "CompleteLayerUploadRequest";
  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigests: string[] | undefined;

  /**
   * <p>The AWS account ID associated with the registry to which to upload layers.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to associate with the image layer.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the image layer.</p>
   */
  uploadId: string | undefined;
}

export namespace CompleteLayerUploadRequest {
  export const filterSensitiveLog = (obj: CompleteLayerUploadRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteLayerUploadRequest =>
    __isa(o, "CompleteLayerUploadRequest");
}

export interface CompleteLayerUploadResponse {
  __type?: "CompleteLayerUploadResponse";
  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the layer.</p>
   */
  uploadId?: string;
}

export namespace CompleteLayerUploadResponse {
  export const filterSensitiveLog = (
    obj: CompleteLayerUploadResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteLayerUploadResponse =>
    __isa(o, "CompleteLayerUploadResponse");
}

export interface CreateRepositoryRequest {
  __type?: "CreateRepositoryRequest";
  /**
   * <p>The image scanning configuration for the repository. This setting determines whether
   *             images are scanned for known vulnerabilities after being pushed to the
   *             repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of <code>MUTABLE</code> will be used which will allow image tags to be
   *             overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   */
  imageTagMutability?: ImageTagMutability | string;

  /**
   * <p>The name to use for the repository. The repository name may be specified on its own
   *             (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group
   *             the repository into a category (such as <code>project-a/nginx-web-app</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The metadata that you apply to the repository to help you categorize and organize
   *             them. Each tag consists of a key and an optional value, both of which you define.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: Tag[];
}

export namespace CreateRepositoryRequest {
  export const filterSensitiveLog = (obj: CreateRepositoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRepositoryRequest =>
    __isa(o, "CreateRepositoryRequest");
}

export interface CreateRepositoryResponse {
  __type?: "CreateRepositoryResponse";
  /**
   * <p>The repository that was created.</p>
   */
  repository?: Repository;
}

export namespace CreateRepositoryResponse {
  export const filterSensitiveLog = (obj: CreateRepositoryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRepositoryResponse =>
    __isa(o, "CreateRepositoryResponse");
}

export interface DeleteLifecyclePolicyRequest {
  __type?: "DeleteLifecyclePolicyRequest";
  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteLifecyclePolicyRequest {
  export const filterSensitiveLog = (
    obj: DeleteLifecyclePolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLifecyclePolicyRequest =>
    __isa(o, "DeleteLifecyclePolicyRequest");
}

export interface DeleteLifecyclePolicyResponse {
  __type?: "DeleteLifecyclePolicyResponse";
  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace DeleteLifecyclePolicyResponse {
  export const filterSensitiveLog = (
    obj: DeleteLifecyclePolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLifecyclePolicyResponse =>
    __isa(o, "DeleteLifecyclePolicyResponse");
}

export interface DeleteRepositoryPolicyRequest {
  __type?: "DeleteRepositoryPolicyRequest";
  /**
   * <p>The AWS account ID associated with the registry that contains the repository policy to
   *             delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the repository policy to
   *             delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryPolicyRequest {
  export const filterSensitiveLog = (
    obj: DeleteRepositoryPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryPolicyRequest =>
    __isa(o, "DeleteRepositoryPolicyRequest");
}

export interface DeleteRepositoryPolicyResponse {
  __type?: "DeleteRepositoryPolicyResponse";
  /**
   * <p>The JSON repository policy that was deleted from the repository.</p>
   */
  policyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace DeleteRepositoryPolicyResponse {
  export const filterSensitiveLog = (
    obj: DeleteRepositoryPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryPolicyResponse =>
    __isa(o, "DeleteRepositoryPolicyResponse");
}

export interface DeleteRepositoryRequest {
  __type?: "DeleteRepositoryRequest";
  /**
   * <p> If a repository contains images, forces the deletion.</p>
   */
  force?: boolean;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository to
   *             delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryRequest {
  export const filterSensitiveLog = (obj: DeleteRepositoryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryRequest =>
    __isa(o, "DeleteRepositoryRequest");
}

export interface DeleteRepositoryResponse {
  __type?: "DeleteRepositoryResponse";
  /**
   * <p>The repository that was deleted.</p>
   */
  repository?: Repository;
}

export namespace DeleteRepositoryResponse {
  export const filterSensitiveLog = (obj: DeleteRepositoryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRepositoryResponse =>
    __isa(o, "DeleteRepositoryResponse");
}

export interface DescribeImageScanFindingsRequest {
  __type?: "DescribeImageScanFindingsRequest";
  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId: ImageIdentifier | undefined;

  /**
   * <p>The maximum number of image scan results returned by
   *                 <code>DescribeImageScanFindings</code> in paginated output. When this parameter is
   *             used, <code>DescribeImageScanFindings</code> only returns <code>maxResults</code>
   *             results in a single page along with a <code>nextToken</code> response element. The
   *             remaining results of the initial request can be seen by sending another
   *                 <code>DescribeImageScanFindings</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and 1000. If this
   *             parameter is not used, then <code>DescribeImageScanFindings</code> returns up to 100
   *             results and a <code>nextToken</code> value, if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImageScanFindings</code> request where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value. This value
   *             is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in
   *             which to describe the image scan findings for. If you do not specify a registry, the
   *             default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository for the image for which to describe the scan findings.</p>
   */
  repositoryName: string | undefined;
}

export namespace DescribeImageScanFindingsRequest {
  export const filterSensitiveLog = (
    obj: DescribeImageScanFindingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImageScanFindingsRequest =>
    __isa(o, "DescribeImageScanFindingsRequest");
}

export interface DescribeImageScanFindingsResponse {
  __type?: "DescribeImageScanFindingsResponse";
  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The information contained in the image scan findings.</p>
   */
  imageScanFindings?: ImageScanFindings;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeImageScanFindings</code> request. When the results of a
   *                 <code>DescribeImageScanFindings</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace DescribeImageScanFindingsResponse {
  export const filterSensitiveLog = (
    obj: DescribeImageScanFindingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImageScanFindingsResponse =>
    __isa(o, "DescribeImageScanFindingsResponse");
}

/**
 * <p>An object representing a filter on a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface DescribeImagesFilter {
  __type?: "DescribeImagesFilter";
  /**
   * <p>The tag status with which to filter your <a>DescribeImages</a> results. You
   *             can filter results based on whether they are <code>TAGGED</code> or
   *                 <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace DescribeImagesFilter {
  export const filterSensitiveLog = (obj: DescribeImagesFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImagesFilter =>
    __isa(o, "DescribeImagesFilter");
}

export interface DescribeImagesRequest {
  __type?: "DescribeImagesRequest";
  /**
   * <p>The filter key and value with which to filter your <code>DescribeImages</code>
   *             results.</p>
   */
  filter?: DescribeImagesFilter;

  /**
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * <p>The maximum number of repository results returned by <code>DescribeImages</code> in
   *             paginated output. When this parameter is used, <code>DescribeImages</code> only returns
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. The remaining results of the initial request can be seen by sending
   *             another <code>DescribeImages</code> request with the returned <code>nextToken</code>
   *             value. This value can be between 1 and 1000. If this
   *             parameter is not used, then <code>DescribeImages</code> returns up to
   *             100 results and a <code>nextToken</code> value, if applicable. This
   *             option cannot be used when you specify images with <code>imageIds</code>.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which
   *             to describe images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;
}

export namespace DescribeImagesRequest {
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImagesRequest =>
    __isa(o, "DescribeImagesRequest");
}

export interface DescribeImagesResponse {
  __type?: "DescribeImagesResponse";
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *             image.</p>
   */
  imageDetails?: ImageDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *             request. When the results of a <code>DescribeImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace DescribeImagesResponse {
  export const filterSensitiveLog = (obj: DescribeImagesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeImagesResponse =>
    __isa(o, "DescribeImagesResponse");
}

export interface DescribeRepositoriesRequest {
  __type?: "DescribeRepositoriesRequest";
  /**
   * <p>The maximum number of repository results returned by <code>DescribeRepositories</code>
   *             in paginated output. When this parameter is used, <code>DescribeRepositories</code> only
   *             returns <code>maxResults</code> results in a single page along with a
   *                 <code>nextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another <code>DescribeRepositories</code> request with
   *             the returned <code>nextToken</code> value. This value can be between 1
   *             and 1000. If this parameter is not used, then
   *                 <code>DescribeRepositories</code> returns up to 100 results and a
   *                 <code>nextToken</code> value, if applicable. This option cannot be used when you
   *             specify repositories with <code>repositoryNames</code>.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeRepositories</code> request where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify repositories with <code>repositoryNames</code>.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repositories to be
   *             described. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all
   *             repositories in a registry are described.</p>
   */
  repositoryNames?: string[];
}

export namespace DescribeRepositoriesRequest {
  export const filterSensitiveLog = (
    obj: DescribeRepositoriesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRepositoriesRequest =>
    __isa(o, "DescribeRepositoriesRequest");
}

export interface DescribeRepositoriesResponse {
  __type?: "DescribeRepositoriesResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeRepositories</code> request. When the results of a
   *                 <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of repository objects corresponding to valid repositories.</p>
   */
  repositories?: Repository[];
}

export namespace DescribeRepositoriesResponse {
  export const filterSensitiveLog = (
    obj: DescribeRepositoriesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRepositoriesResponse =>
    __isa(o, "DescribeRepositoriesResponse");
}

/**
 * <p>The specified layer upload does not contain any layer parts.</p>
 */
export interface EmptyUploadException
  extends __SmithyException,
    $MetadataBearer {
  name: "EmptyUploadException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace EmptyUploadException {
  export const filterSensitiveLog = (obj: EmptyUploadException): any => ({
    ...obj
  });
  export const isa = (o: any): o is EmptyUploadException =>
    __isa(o, "EmptyUploadException");
}

export enum FindingSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  UNDEFINED = "UNDEFINED"
}

export interface GetAuthorizationTokenRequest {
  __type?: "GetAuthorizationTokenRequest";
  /**
   * <p>A list of AWS account IDs that are associated with the registries for which to get
   *             authorization tokens. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryIds?: string[];
}

export namespace GetAuthorizationTokenRequest {
  export const filterSensitiveLog = (
    obj: GetAuthorizationTokenRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAuthorizationTokenRequest =>
    __isa(o, "GetAuthorizationTokenRequest");
}

export interface GetAuthorizationTokenResponse {
  __type?: "GetAuthorizationTokenResponse";
  /**
   * <p>A list of authorization token data objects that correspond to the
   *                 <code>registryIds</code> values in the request.</p>
   */
  authorizationData?: AuthorizationData[];
}

export namespace GetAuthorizationTokenResponse {
  export const filterSensitiveLog = (
    obj: GetAuthorizationTokenResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAuthorizationTokenResponse =>
    __isa(o, "GetAuthorizationTokenResponse");
}

export interface GetDownloadUrlForLayerRequest {
  __type?: "GetDownloadUrlForLayerRequest";
  /**
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest: string | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the image layer to
   *             download. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the image layer to download.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetDownloadUrlForLayerRequest {
  export const filterSensitiveLog = (
    obj: GetDownloadUrlForLayerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDownloadUrlForLayerRequest =>
    __isa(o, "GetDownloadUrlForLayerRequest");
}

export interface GetDownloadUrlForLayerResponse {
  __type?: "GetDownloadUrlForLayerResponse";
  /**
   * <p>The pre-signed Amazon S3 download URL for the requested layer.</p>
   */
  downloadUrl?: string;

  /**
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest?: string;
}

export namespace GetDownloadUrlForLayerResponse {
  export const filterSensitiveLog = (
    obj: GetDownloadUrlForLayerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDownloadUrlForLayerResponse =>
    __isa(o, "GetDownloadUrlForLayerResponse");
}

export interface GetLifecyclePolicyPreviewRequest {
  __type?: "GetLifecyclePolicyPreviewRequest";
  /**
   * <p>An optional parameter that filters results based on image tag status and all tags, if
   *             tagged.</p>
   */
  filter?: LifecyclePolicyPreviewFilter;

  /**
   * <p>The list of imageIDs to be included.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * <p>The maximum number of repository results returned by
   *                 <code>GetLifecyclePolicyPreviewRequest</code> in  paginated output. When this
   *             parameter is used, <code>GetLifecyclePolicyPreviewRequest</code> only returns
   *                 <code>maxResults</code> results in a single page along with a
   *             <code>nextToken</code>  response element. The remaining results of the initial request
   *             can be seen by sending  another <code>GetLifecyclePolicyPreviewRequest</code> request
   *             with the returned <code>nextToken</code>  value. This value can be between
   *             1 and 1000. If this  parameter is not used, then
   *                 <code>GetLifecyclePolicyPreviewRequest</code> returns up to  100
   *             results and a <code>nextToken</code> value, if  applicable. This option cannot be used
   *             when you specify images with <code>imageIds</code>.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>GetLifecyclePolicyPreviewRequest</code> request where <code>maxResults</code>
   *             was used and the  results exceeded the value of that parameter. Pagination continues
   *             from the end of the  previous results that returned the <code>nextToken</code> value.
   *             This value is  <code>null</code> when there are no more results to return. This option
   *             cannot be used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetLifecyclePolicyPreviewRequest {
  export const filterSensitiveLog = (
    obj: GetLifecyclePolicyPreviewRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLifecyclePolicyPreviewRequest =>
    __isa(o, "GetLifecyclePolicyPreviewRequest");
}

export interface GetLifecyclePolicyPreviewResponse {
  __type?: "GetLifecyclePolicyPreviewResponse";
  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>GetLifecyclePolicyPreview</code> request. When the results of a
   *                 <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The results of the lifecycle policy preview request.</p>
   */
  previewResults?: LifecyclePolicyPreviewResult[];

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus | string;

  /**
   * <p>The list of images that is returned as a result of the action.</p>
   */
  summary?: LifecyclePolicyPreviewSummary;
}

export namespace GetLifecyclePolicyPreviewResponse {
  export const filterSensitiveLog = (
    obj: GetLifecyclePolicyPreviewResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLifecyclePolicyPreviewResponse =>
    __isa(o, "GetLifecyclePolicyPreviewResponse");
}

export interface GetLifecyclePolicyRequest {
  __type?: "GetLifecyclePolicyRequest";
  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: GetLifecyclePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLifecyclePolicyRequest =>
    __isa(o, "GetLifecyclePolicyRequest");
}

export interface GetLifecyclePolicyResponse {
  __type?: "GetLifecyclePolicyResponse";
  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace GetLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: GetLifecyclePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLifecyclePolicyResponse =>
    __isa(o, "GetLifecyclePolicyResponse");
}

export interface GetRepositoryPolicyRequest {
  __type?: "GetRepositoryPolicyRequest";
  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository with the policy to retrieve.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryPolicyRequest {
  export const filterSensitiveLog = (obj: GetRepositoryPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryPolicyRequest =>
    __isa(o, "GetRepositoryPolicyRequest");
}

export interface GetRepositoryPolicyResponse {
  __type?: "GetRepositoryPolicyResponse";
  /**
   * <p>The JSON repository policy text associated with the repository.</p>
   */
  policyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace GetRepositoryPolicyResponse {
  export const filterSensitiveLog = (
    obj: GetRepositoryPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRepositoryPolicyResponse =>
    __isa(o, "GetRepositoryPolicyResponse");
}

/**
 * <p>An object representing an Amazon ECR image.</p>
 */
export interface Image {
  __type?: "Image";
  /**
   * <p>An object containing the image tag and image digest associated with an image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The image manifest associated with the image.</p>
   */
  imageManifest?: string;

  /**
   * <p>The AWS account ID associated with the registry containing the image.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository associated with the image.</p>
   */
  repositoryName?: string;
}

export namespace Image {
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj
  });
  export const isa = (o: any): o is Image => __isa(o, "Image");
}

export enum ImageActionType {
  EXPIRE = "EXPIRE"
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
 */
export interface ImageAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ImageAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace ImageAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ImageAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageAlreadyExistsException =>
    __isa(o, "ImageAlreadyExistsException");
}

/**
 * <p>An object that describes an image returned by a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface ImageDetail {
  __type?: "ImageDetail";
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository. </p>
   */
  imagePushedAt?: Date;

  /**
   * <p>A summary of the last completed image scan.</p>
   */
  imageScanFindingsSummary?: ImageScanFindingsSummary;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *         <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
   *                 before pushing them to a V2 Docker registry. The output of the <code>docker
   *                     images</code> command shows the uncompressed image size, so it may return a
   *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
   *         </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];

  /**
   * <p>The AWS account ID associated with the registry to which this image belongs.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which this image belongs.</p>
   */
  repositoryName?: string;
}

export namespace ImageDetail {
  export const filterSensitiveLog = (obj: ImageDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageDetail => __isa(o, "ImageDetail");
}

/**
 * <p>An object representing an Amazon ECR image failure.</p>
 */
export interface ImageFailure {
  __type?: "ImageFailure";
  /**
   * <p>The code associated with the failure.</p>
   */
  failureCode?: ImageFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The image ID associated with the failure.</p>
   */
  imageId?: ImageIdentifier;
}

export namespace ImageFailure {
  export const filterSensitiveLog = (obj: ImageFailure): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageFailure => __isa(o, "ImageFailure");
}

export enum ImageFailureCode {
  ImageNotFound = "ImageNotFound",
  ImageTagDoesNotMatchDigest = "ImageTagDoesNotMatchDigest",
  InvalidImageDigest = "InvalidImageDigest",
  InvalidImageTag = "InvalidImageTag",
  MissingDigestAndTag = "MissingDigestAndTag"
}

/**
 * <p>An object with identifying information for an Amazon ECR image.</p>
 */
export interface ImageIdentifier {
  __type?: "ImageIdentifier";
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The tag used for the image.</p>
   */
  imageTag?: string;
}

export namespace ImageIdentifier {
  export const filterSensitiveLog = (obj: ImageIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageIdentifier =>
    __isa(o, "ImageIdentifier");
}

/**
 * <p>The image requested does not exist in the specified repository.</p>
 */
export interface ImageNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ImageNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ImageNotFoundException {
  export const filterSensitiveLog = (obj: ImageNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageNotFoundException =>
    __isa(o, "ImageNotFoundException");
}

/**
 * <p>Contains information about an image scan finding.</p>
 */
export interface ImageScanFinding {
  __type?: "ImageScanFinding";
  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The name associated with the finding, usually a CVE number.</p>
   */
  name?: string;

  /**
   * <p>The finding severity.</p>
   */
  severity?: FindingSeverity | string;

  /**
   * <p>A link containing additional details about the security vulnerability.</p>
   */
  uri?: string;
}

export namespace ImageScanFinding {
  export const filterSensitiveLog = (obj: ImageScanFinding): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageScanFinding =>
    __isa(o, "ImageScanFinding");
}

/**
 * <p>The details of an image scan.</p>
 */
export interface ImageScanFindings {
  __type?: "ImageScanFindings";
  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: { [key: string]: number };

  /**
   * <p>The findings from the image scan.</p>
   */
  findings?: ImageScanFinding[];

  /**
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;
}

export namespace ImageScanFindings {
  export const filterSensitiveLog = (obj: ImageScanFindings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageScanFindings =>
    __isa(o, "ImageScanFindings");
}

/**
 * <p>A summary of the last completed image scan.</p>
 */
export interface ImageScanFindingsSummary {
  __type?: "ImageScanFindingsSummary";
  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: { [key: string]: number };

  /**
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;
}

export namespace ImageScanFindingsSummary {
  export const filterSensitiveLog = (obj: ImageScanFindingsSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageScanFindingsSummary =>
    __isa(o, "ImageScanFindingsSummary");
}

/**
 * <p>The image scanning configuration for a repository.</p>
 */
export interface ImageScanningConfiguration {
  __type?: "ImageScanningConfiguration";
  /**
   * <p>The setting that determines whether images are scanned after being pushed to a
   *             repository. If set to <code>true</code>, images will be scanned after being pushed. If
   *             this parameter is not specified, it will default to <code>false</code> and images will
   *             not be scanned unless a scan is manually started with the <a>StartImageScan</a> API.</p>
   */
  scanOnPush?: boolean;
}

export namespace ImageScanningConfiguration {
  export const filterSensitiveLog = (obj: ImageScanningConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageScanningConfiguration =>
    __isa(o, "ImageScanningConfiguration");
}

/**
 * <p>The current status of an image scan.</p>
 */
export interface ImageScanStatus {
  __type?: "ImageScanStatus";
  /**
   * <p>The description of the image scan status.</p>
   */
  description?: string;

  /**
   * <p>The current state of an image scan.</p>
   */
  status?: ScanStatus | string;
}

export namespace ImageScanStatus {
  export const filterSensitiveLog = (obj: ImageScanStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageScanStatus =>
    __isa(o, "ImageScanStatus");
}

/**
 * <p>The specified image is tagged with a tag that already exists. The repository is
 *             configured for tag immutability.</p>
 */
export interface ImageTagAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ImageTagAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ImageTagAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ImageTagAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImageTagAlreadyExistsException =>
    __isa(o, "ImageTagAlreadyExistsException");
}

export enum ImageTagMutability {
  IMMUTABLE = "IMMUTABLE",
  MUTABLE = "MUTABLE"
}

export interface InitiateLayerUploadRequest {
  __type?: "InitiateLayerUploadRequest";
  /**
   * <p>The AWS account ID associated with the registry to which you intend to upload layers.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which you intend to upload layers.</p>
   */
  repositoryName: string | undefined;
}

export namespace InitiateLayerUploadRequest {
  export const filterSensitiveLog = (obj: InitiateLayerUploadRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is InitiateLayerUploadRequest =>
    __isa(o, "InitiateLayerUploadRequest");
}

export interface InitiateLayerUploadResponse {
  __type?: "InitiateLayerUploadResponse";
  /**
   * <p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>
   */
  partSize?: number;

  /**
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a>
   *             operations.</p>
   */
  uploadId?: string;
}

export namespace InitiateLayerUploadResponse {
  export const filterSensitiveLog = (
    obj: InitiateLayerUploadResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InitiateLayerUploadResponse =>
    __isa(o, "InitiateLayerUploadResponse");
}

/**
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
 */
export interface InvalidLayerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLayerException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidLayerException {
  export const filterSensitiveLog = (obj: InvalidLayerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidLayerException =>
    __isa(o, "InvalidLayerException");
}

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 */
export interface InvalidLayerPartException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLayerPartException";
  $fault: "client";
  /**
   * <p>The last valid byte received from the layer part upload that is associated with the
   *             exception.</p>
   */
  lastValidByteReceived?: number;

  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;

  /**
   * <p>The registry ID associated with the exception.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the exception.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the exception.</p>
   */
  uploadId?: string;
}

export namespace InvalidLayerPartException {
  export const filterSensitiveLog = (obj: InvalidLayerPartException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidLayerPartException =>
    __isa(o, "InvalidLayerPartException");
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface InvalidTagParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagParameterException {
  export const filterSensitiveLog = (
    obj: InvalidTagParameterException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagParameterException =>
    __isa(o, "InvalidTagParameterException");
}

/**
 * <p>An object representing an Amazon ECR image layer.</p>
 */
export interface Layer {
  __type?: "Layer";
  /**
   * <p>The availability status of the image layer.</p>
   */
  layerAvailability?: LayerAvailability | string;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * <p>The size, in bytes, of the image layer.</p>
   */
  layerSize?: number;

  /**
   * <p>The media type of the layer, such as
   *                 <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *                 <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   */
  mediaType?: string;
}

export namespace Layer {
  export const filterSensitiveLog = (obj: Layer): any => ({
    ...obj
  });
  export const isa = (o: any): o is Layer => __isa(o, "Layer");
}

/**
 * <p>The image layer already exists in the associated repository.</p>
 */
export interface LayerAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "LayerAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LayerAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: LayerAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LayerAlreadyExistsException =>
    __isa(o, "LayerAlreadyExistsException");
}

export enum LayerAvailability {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE"
}

/**
 * <p>An object representing an Amazon ECR image layer failure.</p>
 */
export interface LayerFailure {
  __type?: "LayerFailure";
  /**
   * <p>The failure code associated with the failure.</p>
   */
  failureCode?: LayerFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The layer digest associated with the failure.</p>
   */
  layerDigest?: string;
}

export namespace LayerFailure {
  export const filterSensitiveLog = (obj: LayerFailure): any => ({
    ...obj
  });
  export const isa = (o: any): o is LayerFailure => __isa(o, "LayerFailure");
}

export enum LayerFailureCode {
  InvalidLayerDigest = "InvalidLayerDigest",
  MissingLayerDigest = "MissingLayerDigest"
}

/**
 * <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 */
export interface LayerInaccessibleException
  extends __SmithyException,
    $MetadataBearer {
  name: "LayerInaccessibleException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LayerInaccessibleException {
  export const filterSensitiveLog = (obj: LayerInaccessibleException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LayerInaccessibleException =>
    __isa(o, "LayerInaccessibleException");
}

/**
 * <p>Layer parts must be at least 5 MiB in size.</p>
 */
export interface LayerPartTooSmallException
  extends __SmithyException,
    $MetadataBearer {
  name: "LayerPartTooSmallException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LayerPartTooSmallException {
  export const filterSensitiveLog = (obj: LayerPartTooSmallException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LayerPartTooSmallException =>
    __isa(o, "LayerPartTooSmallException");
}

/**
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 */
export interface LayersNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "LayersNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LayersNotFoundException {
  export const filterSensitiveLog = (obj: LayersNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LayersNotFoundException =>
    __isa(o, "LayersNotFoundException");
}

/**
 * <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 */
export interface LifecyclePolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "LifecyclePolicyNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyNotFoundException {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyNotFoundException =>
    __isa(o, "LifecyclePolicyNotFoundException");
}

/**
 * <p>The filter for the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewFilter {
  __type?: "LifecyclePolicyPreviewFilter";
  /**
   * <p>The tag status of the image.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace LifecyclePolicyPreviewFilter {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyPreviewFilter
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyPreviewFilter =>
    __isa(o, "LifecyclePolicyPreviewFilter");
}

/**
 * <p>The previous lifecycle policy preview request has not completed. Please try again
 *             later.</p>
 */
export interface LifecyclePolicyPreviewInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "LifecyclePolicyPreviewInProgressException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyPreviewInProgressException {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyPreviewInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyPreviewInProgressException =>
    __isa(o, "LifecyclePolicyPreviewInProgressException");
}

/**
 * <p>There is no dry run for this repository.</p>
 */
export interface LifecyclePolicyPreviewNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "LifecyclePolicyPreviewNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyPreviewNotFoundException {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyPreviewNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyPreviewNotFoundException =>
    __isa(o, "LifecyclePolicyPreviewNotFoundException");
}

/**
 * <p>The result of the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewResult {
  __type?: "LifecyclePolicyPreviewResult";
  /**
   * <p>The type of action to be taken.</p>
   */
  action?: LifecyclePolicyRuleAction;

  /**
   * <p>The priority of the applied rule.</p>
   */
  appliedRulePriority?: number;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository.</p>
   */
  imagePushedAt?: Date;

  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];
}

export namespace LifecyclePolicyPreviewResult {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyPreviewResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyPreviewResult =>
    __isa(o, "LifecyclePolicyPreviewResult");
}

export enum LifecyclePolicyPreviewStatus {
  COMPLETE = "COMPLETE",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>The summary of the lifecycle policy preview request.</p>
 */
export interface LifecyclePolicyPreviewSummary {
  __type?: "LifecyclePolicyPreviewSummary";
  /**
   * <p>The number of expiring images.</p>
   */
  expiringImageTotalCount?: number;
}

export namespace LifecyclePolicyPreviewSummary {
  export const filterSensitiveLog = (
    obj: LifecyclePolicyPreviewSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyPreviewSummary =>
    __isa(o, "LifecyclePolicyPreviewSummary");
}

/**
 * <p>The type of action to be taken.</p>
 */
export interface LifecyclePolicyRuleAction {
  __type?: "LifecyclePolicyRuleAction";
  /**
   * <p>The type of action to be taken.</p>
   */
  type?: ImageActionType | string;
}

export namespace LifecyclePolicyRuleAction {
  export const filterSensitiveLog = (obj: LifecyclePolicyRuleAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecyclePolicyRuleAction =>
    __isa(o, "LifecyclePolicyRuleAction");
}

/**
 * <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html">Amazon ECR Default Service
 *                 Limits</a> in the Amazon Elastic Container Registry User Guide.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

/**
 * <p>An object representing a filter on a <a>ListImages</a> operation.</p>
 */
export interface ListImagesFilter {
  __type?: "ListImagesFilter";
  /**
   * <p>The tag status with which to filter your <a>ListImages</a> results. You can
   *             filter results based on whether they are <code>TAGGED</code> or
   *             <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace ListImagesFilter {
  export const filterSensitiveLog = (obj: ListImagesFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListImagesFilter =>
    __isa(o, "ListImagesFilter");
}

export interface ListImagesRequest {
  __type?: "ListImagesRequest";
  /**
   * <p>The filter key and value with which to filter your <code>ListImages</code>
   *             results.</p>
   */
  filter?: ListImagesFilter;

  /**
   * <p>The maximum number of image results returned by <code>ListImages</code> in paginated
   *             output. When this parameter is used, <code>ListImages</code> only returns
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. The remaining results of the initial request can be seen by sending
   *             another <code>ListImages</code> request with the returned <code>nextToken</code> value.
   *             This value can be between 1 and 1000. If this parameter is
   *             not used, then <code>ListImages</code> returns up to 100 results and a
   *                 <code>nextToken</code> value, if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which
   *             to list images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository with image IDs to be listed.</p>
   */
  repositoryName: string | undefined;
}

export namespace ListImagesRequest {
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListImagesRequest =>
    __isa(o, "ListImagesRequest");
}

export interface ListImagesResponse {
  __type?: "ListImagesResponse";
  /**
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListImages</code>
   *             request. When the results of a <code>ListImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace ListImagesResponse {
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListImagesResponse =>
    __isa(o, "ListImagesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             only supported resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface PutImageRequest {
  __type?: "PutImageRequest";
  /**
   * <p>The image manifest corresponding to the image to be uploaded.</p>
   */
  imageManifest: string | undefined;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use
   *             the Docker Image Manifest V2 Schema 2 or OCI formats.</p>
   */
  imageTag?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which
   *             to put the image. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to put the image.</p>
   */
  repositoryName: string | undefined;
}

export namespace PutImageRequest {
  export const filterSensitiveLog = (obj: PutImageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageRequest =>
    __isa(o, "PutImageRequest");
}

export interface PutImageResponse {
  __type?: "PutImageResponse";
  /**
   * <p>Details of the image uploaded.</p>
   */
  image?: Image;
}

export namespace PutImageResponse {
  export const filterSensitiveLog = (obj: PutImageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageResponse =>
    __isa(o, "PutImageResponse");
}

export interface PutImageScanningConfigurationRequest {
  __type?: "PutImageScanningConfigurationRequest";
  /**
   * <p>The image scanning configuration for the repository. This setting determines whether
   *             images are scanned for known vulnerabilities after being pushed to the
   *             repository.</p>
   */
  imageScanningConfiguration: ImageScanningConfiguration | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in
   *             which to update the image scanning configuration setting.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to update the image scanning configuration
   *             setting.</p>
   */
  repositoryName: string | undefined;
}

export namespace PutImageScanningConfigurationRequest {
  export const filterSensitiveLog = (
    obj: PutImageScanningConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageScanningConfigurationRequest =>
    __isa(o, "PutImageScanningConfigurationRequest");
}

export interface PutImageScanningConfigurationResponse {
  __type?: "PutImageScanningConfigurationResponse";
  /**
   * <p>The image scanning configuration setting for the repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace PutImageScanningConfigurationResponse {
  export const filterSensitiveLog = (
    obj: PutImageScanningConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageScanningConfigurationResponse =>
    __isa(o, "PutImageScanningConfigurationResponse");
}

export interface PutImageTagMutabilityRequest {
  __type?: "PutImageTagMutabilityRequest";
  /**
   * <p>The tag mutability setting for the repository. If <code>MUTABLE</code> is specified,
   *             image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags
   *             within the repository will be immutable which will prevent them from being
   *             overwritten.</p>
   */
  imageTagMutability: ImageTagMutability | string | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which
   *             to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to update the image tag mutability
   *             settings.</p>
   */
  repositoryName: string | undefined;
}

export namespace PutImageTagMutabilityRequest {
  export const filterSensitiveLog = (
    obj: PutImageTagMutabilityRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageTagMutabilityRequest =>
    __isa(o, "PutImageTagMutabilityRequest");
}

export interface PutImageTagMutabilityResponse {
  __type?: "PutImageTagMutabilityResponse";
  /**
   * <p>The image tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability | string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace PutImageTagMutabilityResponse {
  export const filterSensitiveLog = (
    obj: PutImageTagMutabilityResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutImageTagMutabilityResponse =>
    __isa(o, "PutImageTagMutabilityResponse");
}

export interface PutLifecyclePolicyRequest {
  __type?: "PutLifecyclePolicyRequest";
  /**
   * <p>The JSON repository policy text to apply to the repository.</p>
   */
  lifecyclePolicyText: string | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository. If you
   *             do  not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;
}

export namespace PutLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: PutLifecyclePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLifecyclePolicyRequest =>
    __isa(o, "PutLifecyclePolicyRequest");
}

export interface PutLifecyclePolicyResponse {
  __type?: "PutLifecyclePolicyResponse";
  /**
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace PutLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: PutLifecyclePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLifecyclePolicyResponse =>
    __isa(o, "PutLifecyclePolicyResponse");
}

/**
 * <p>An object representing a repository.</p>
 */
export interface Repository {
  __type?: "Repository";
  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The image scanning configuration for a repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * <p>The tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability | string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository.</p>
   */
  registryId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the
   *     repository, AWS account ID of the repository owner, repository namespace, and repository name.
   *     For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   */
  repositoryArn?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The URI for the repository. You can use this URI for Docker <code>push</code> or
   *                 <code>pull</code> operations.</p>
   */
  repositoryUri?: string;
}

export namespace Repository {
  export const filterSensitiveLog = (obj: Repository): any => ({
    ...obj
  });
  export const isa = (o: any): o is Repository => __isa(o, "Repository");
}

/**
 * <p>The specified repository already exists in the specified registry.</p>
 */
export interface RepositoryAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: RepositoryAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryAlreadyExistsException =>
    __isa(o, "RepositoryAlreadyExistsException");
}

/**
 * <p>The specified repository contains images. To delete a repository that contains images,
 *             you must force the deletion with the <code>force</code> parameter.</p>
 */
export interface RepositoryNotEmptyException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNotEmptyException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNotEmptyException {
  export const filterSensitiveLog = (
    obj: RepositoryNotEmptyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNotEmptyException =>
    __isa(o, "RepositoryNotEmptyException");
}

/**
 * <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 */
export interface RepositoryNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryNotFoundException {
  export const filterSensitiveLog = (
    obj: RepositoryNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryNotFoundException =>
    __isa(o, "RepositoryNotFoundException");
}

/**
 * <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 */
export interface RepositoryPolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "RepositoryPolicyNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace RepositoryPolicyNotFoundException {
  export const filterSensitiveLog = (
    obj: RepositoryPolicyNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepositoryPolicyNotFoundException =>
    __isa(o, "RepositoryPolicyNotFoundException");
}

/**
 * <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 */
export interface ScanNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ScanNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ScanNotFoundException {
  export const filterSensitiveLog = (obj: ScanNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScanNotFoundException =>
    __isa(o, "ScanNotFoundException");
}

export enum ScanStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export interface ServerException extends __SmithyException, $MetadataBearer {
  name: "ServerException";
  $fault: "server";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace ServerException {
  export const filterSensitiveLog = (obj: ServerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServerException =>
    __isa(o, "ServerException");
}

export interface SetRepositoryPolicyRequest {
  __type?: "SetRepositoryPolicyRequest";
  /**
   * <p>If the policy you are attempting to set on a repository policy would prevent you from
   *             setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental
   *             repository lock outs.</p>
   */
  force?: boolean;

  /**
   * <p>The JSON repository policy text to apply to the repository. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html">Amazon ECR
   *                 Repository Policy Examples</a> in the
   *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;
}

export namespace SetRepositoryPolicyRequest {
  export const filterSensitiveLog = (obj: SetRepositoryPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetRepositoryPolicyRequest =>
    __isa(o, "SetRepositoryPolicyRequest");
}

export interface SetRepositoryPolicyResponse {
  __type?: "SetRepositoryPolicyResponse";
  /**
   * <p>The JSON repository policy text applied to the repository.</p>
   */
  policyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace SetRepositoryPolicyResponse {
  export const filterSensitiveLog = (
    obj: SetRepositoryPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetRepositoryPolicyResponse =>
    __isa(o, "SetRepositoryPolicyResponse");
}

export interface StartImageScanRequest {
  __type?: "StartImageScanRequest";
  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId: ImageIdentifier | undefined;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository in
   *             which to start an image scan request. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that contains the images to scan.</p>
   */
  repositoryName: string | undefined;
}

export namespace StartImageScanRequest {
  export const filterSensitiveLog = (obj: StartImageScanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImageScanRequest =>
    __isa(o, "StartImageScanRequest");
}

export interface StartImageScanResponse {
  __type?: "StartImageScanResponse";
  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;
}

export namespace StartImageScanResponse {
  export const filterSensitiveLog = (obj: StartImageScanResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImageScanResponse =>
    __isa(o, "StartImageScanResponse");
}

export interface StartLifecyclePolicyPreviewRequest {
  __type?: "StartLifecyclePolicyPreviewRequest";
  /**
   * <p>The policy to be evaluated against. If you do not specify a policy, the current policy
   *             for the repository is used.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to be evaluated.</p>
   */
  repositoryName: string | undefined;
}

export namespace StartLifecyclePolicyPreviewRequest {
  export const filterSensitiveLog = (
    obj: StartLifecyclePolicyPreviewRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartLifecyclePolicyPreviewRequest =>
    __isa(o, "StartLifecyclePolicyPreviewRequest");
}

export interface StartLifecyclePolicyPreviewResponse {
  __type?: "StartLifecyclePolicyPreviewResponse";
  /**
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus | string;
}

export namespace StartLifecyclePolicyPreviewResponse {
  export const filterSensitiveLog = (
    obj: StartLifecyclePolicyPreviewResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartLifecyclePolicyPreviewResponse =>
    __isa(o, "StartLifecyclePolicyPreviewResponse");
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them.
 *             Each tag consists of a key and an optional value, both of which you define.
 *             Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *             that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as
   *             a descriptor within a tag category (key).</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

export enum TagStatus {
  ANY = "ANY",
  TAGGED = "TAGGED",
  UNTAGGED = "UNTAGGED"
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UploadLayerPartRequest {
  __type?: "UploadLayerPartRequest";
  /**
   * <p>The base64-encoded layer part payload.</p>
   */
  layerPartBlob: Uint8Array | undefined;

  /**
   * <p>The integer value of the first byte of the layer part.</p>
   */
  partFirstByte: number | undefined;

  /**
   * <p>The integer value of the last byte of the layer part.</p>
   */
  partLastByte: number | undefined;

  /**
   * <p>The AWS account ID associated with the registry to which you are uploading layer
   *             parts. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which you are uploading layer parts.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the layer part upload.</p>
   */
  uploadId: string | undefined;
}

export namespace UploadLayerPartRequest {
  export const filterSensitiveLog = (obj: UploadLayerPartRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadLayerPartRequest =>
    __isa(o, "UploadLayerPartRequest");
}

export interface UploadLayerPartResponse {
  __type?: "UploadLayerPartResponse";
  /**
   * <p>The integer value of the last byte received in the request.</p>
   */
  lastByteReceived?: number;

  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the request.</p>
   */
  uploadId?: string;
}

export namespace UploadLayerPartResponse {
  export const filterSensitiveLog = (obj: UploadLayerPartResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadLayerPartResponse =>
    __isa(o, "UploadLayerPartResponse");
}

/**
 * <p>The upload could not be found, or the specified upload id is not valid for this
 *             repository.</p>
 */
export interface UploadNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "UploadNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace UploadNotFoundException {
  export const filterSensitiveLog = (obj: UploadNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadNotFoundException =>
    __isa(o, "UploadNotFoundException");
}
