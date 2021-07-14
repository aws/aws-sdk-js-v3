import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>An authorization token data object that corresponds to a public registry.</p>
 */
export interface AuthorizationData {
  /**
   * <p>A base64-encoded string that contains authorization data for a public Amazon ECR registry.
   *          When the string is decoded, it is presented in the format <code>user:password</code> for
   *          public registry authentication using <code>docker login</code>.</p>
   */
  authorizationToken?: string;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *          Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date;
}

export namespace AuthorizationData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationData): any => ({
    ...obj,
  });
}

export interface BatchCheckLayerAvailabilityRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the image layers to
   *          check. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the image layers to check.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The digests of the image layers to check.</p>
   */
  layerDigests: string[] | undefined;
}

export namespace BatchCheckLayerAvailabilityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCheckLayerAvailabilityRequest): any => ({
    ...obj,
  });
}

export enum LayerFailureCode {
  InvalidLayerDigest = "InvalidLayerDigest",
  MissingLayerDigest = "MissingLayerDigest",
}

/**
 * <p>An object representing an Amazon ECR image layer failure.</p>
 */
export interface LayerFailure {
  /**
   * <p>The layer digest associated with the failure.</p>
   */
  layerDigest?: string;

  /**
   * <p>The failure code associated with the failure.</p>
   */
  failureCode?: LayerFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

export namespace LayerFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerFailure): any => ({
    ...obj,
  });
}

export enum LayerAvailability {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>An object representing an Amazon ECR image layer.</p>
 */
export interface Layer {
  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * <p>The availability status of the image layer.</p>
   */
  layerAvailability?: LayerAvailability | string;

  /**
   * <p>The size, in bytes, of the image layer.</p>
   */
  layerSize?: number;

  /**
   * <p>The media type of the layer, such as
   *             <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *             <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   */
  mediaType?: string;
}

export namespace Layer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Layer): any => ({
    ...obj,
  });
}

export interface BatchCheckLayerAvailabilityResponse {
  /**
   * <p>A list of image layer objects corresponding to the image layer references in the
   *          request.</p>
   */
  layers?: Layer[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: LayerFailure[];
}

export namespace BatchCheckLayerAvailabilityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCheckLayerAvailabilityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The registry does not exist.</p>
 */
export interface RegistryNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RegistryNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace RegistryNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository could not be found. Check the spelling of the specified
 *          repository and ensure that you are performing operations on the correct registry.</p>
 */
export interface RepositoryNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace RepositoryNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export interface ServerException extends __SmithyException, $MetadataBearer {
  name: "ServerException";
  $fault: "server";
  message?: string;
}

export namespace ServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerException): any => ({
    ...obj,
  });
}

/**
 * <p>An object with identifying information for an Amazon ECR image.</p>
 */
export interface ImageIdentifier {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageIdentifier): any => ({
    ...obj,
  });
}

export interface BatchDeleteImageRequest {
  /**
   * <p>The AWS account ID associated with the registry that contains the image to delete.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository in a public registry that contains the image to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *             <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *             <code>imageDigest=digest</code>.</p>
   */
  imageIds: ImageIdentifier[] | undefined;
}

export namespace BatchDeleteImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteImageRequest): any => ({
    ...obj,
  });
}

export enum ImageFailureCode {
  ImageNotFound = "ImageNotFound",
  ImageReferencedByManifestList = "ImageReferencedByManifestList",
  ImageTagDoesNotMatchDigest = "ImageTagDoesNotMatchDigest",
  InvalidImageDigest = "InvalidImageDigest",
  InvalidImageTag = "InvalidImageTag",
  KmsError = "KmsError",
  MissingDigestAndTag = "MissingDigestAndTag",
}

/**
 * <p>An object representing an Amazon ECR image failure.</p>
 */
export interface ImageFailure {
  /**
   * <p>The image ID associated with the failure.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The code associated with the failure.</p>
   */
  failureCode?: ImageFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

export namespace ImageFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageFailure): any => ({
    ...obj,
  });
}

export interface BatchDeleteImageResponse {
  /**
   * <p>The image IDs of the deleted images.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];
}

export namespace BatchDeleteImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteImageResponse): any => ({
    ...obj,
  });
}

export interface CompleteLayerUploadRequest {
  /**
   * <p>The AWS account ID associated with the registry to which to upload layers.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in a public registry to associate with the image
   *          layer.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *          associate with the image layer.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigests: string[] | undefined;
}

export namespace CompleteLayerUploadRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteLayerUploadRequest): any => ({
    ...obj,
  });
}

export interface CompleteLayerUploadResponse {
  /**
   * <p>The public registry ID associated with the request.</p>
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

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;
}

export namespace CompleteLayerUploadResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteLayerUploadResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified layer upload does not contain any layer parts.</p>
 */
export interface EmptyUploadException extends __SmithyException, $MetadataBearer {
  name: "EmptyUploadException";
  $fault: "client";
  message?: string;
}

export namespace EmptyUploadException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyUploadException): any => ({
    ...obj,
  });
}

/**
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does not
 *          match the digest specified.</p>
 */
export interface InvalidLayerException extends __SmithyException, $MetadataBearer {
  name: "InvalidLayerException";
  $fault: "client";
  message?: string;
}

export namespace InvalidLayerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidLayerException): any => ({
    ...obj,
  });
}

/**
 * <p>The image layer already exists in the associated repository.</p>
 */
export interface LayerAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "LayerAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace LayerAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>Layer parts must be at least 5 MiB in size.</p>
 */
export interface LayerPartTooSmallException extends __SmithyException, $MetadataBearer {
  name: "LayerPartTooSmallException";
  $fault: "client";
  message?: string;
}

export namespace LayerPartTooSmallException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerPartTooSmallException): any => ({
    ...obj,
  });
}

/**
 * <p>The action is not supported in this Region.</p>
 */
export interface UnsupportedCommandException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedCommandException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedCommandException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedCommandException): any => ({
    ...obj,
  });
}

/**
 * <p>The upload could not be found, or the specified upload ID is not valid for this
 *          repository.</p>
 */
export interface UploadNotFoundException extends __SmithyException, $MetadataBearer {
  name: "UploadNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace UploadNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An object containing the catalog data for a repository. This data is publicly visible in
 *          the Amazon ECR Public Gallery.</p>
 */
export interface RepositoryCatalogDataInput {
  /**
   * <p>A short description of the contents of the repository. This text appears in both the
   *          image details and also when searching for repositories on the Amazon ECR Public Gallery.</p>
   */
  description?: string;

  /**
   * <p>The system architecture that the images in the repository are compatible with. On the
   *          Amazon ECR Public Gallery, the following supported architectures will appear as badges on the
   *          repository and are used as search filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Linux</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Windows</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If an unsupported tag is added to your repository catalog data, it will be associated
   *             with the repository and can be retrieved using the API but will not be discoverable in
   *             the Amazon ECR Public Gallery.</p>
   *          </note>
   */
  architectures?: string[];

  /**
   * <p>The operating systems that the images in the repository are compatible with. On the
   *          Amazon ECR Public Gallery, the following supported operating systems will appear as badges on
   *          the repository and are used as search filters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ARM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARM 64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x86</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x86-64</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If an unsupported tag is added to your repository catalog data, it will be associated
   *             with the repository and can be retrieved using the API but will not be discoverable in
   *             the Amazon ECR Public Gallery.</p>
   *          </note>
   */
  operatingSystems?: string[];

  /**
   * <p>The base64-encoded repository logo payload.</p>
   *          <note>
   *             <p>The repository logo is only publicly visible in the Amazon ECR Public Gallery for verified
   *             accounts.</p>
   *          </note>
   */
  logoImageBlob?: Uint8Array;

  /**
   * <p>A detailed description of the contents of the repository. It is publicly visible in the
   *          Amazon ECR Public Gallery. The text must be in markdown format.</p>
   */
  aboutText?: string;

  /**
   * <p>Detailed information on how to use the contents of the repository. It is publicly
   *          visible in the Amazon ECR Public Gallery. The usage text provides context, support information,
   *          and additional usage details for users of the repository. The text must be in markdown
   *          format.</p>
   */
  usageText?: string;
}

export namespace RepositoryCatalogDataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryCatalogDataInput): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them. Each
 *          tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateRepositoryRequest {
  /**
   * <p>The name to use for the repository. This appears publicly in the Amazon ECR Public Gallery.
   *          The repository name may be specified on its own (such as <code>nginx-web-app</code>) or it
   *          can be prepended with a namespace to group the repository into a category (such as
   *             <code>project-a/nginx-web-app</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The details about the repository that are publicly visible in the
   *          Amazon ECR Public Gallery.</p>
   */
  catalogData?: RepositoryCatalogDataInput;

  /**
   * <p>The metadata that you apply to the repository to help you categorize and organize them.
   *          Each tag consists of a key and an optional value, both of which you define.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Tag[];
}

export namespace CreateRepositoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRepositoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The catalog data for a repository. This data is publicly visible in the
 *          Amazon ECR Public Gallery.</p>
 */
export interface RepositoryCatalogData {
  /**
   * <p>The short description of the repository.</p>
   */
  description?: string;

  /**
   * <p>The architecture tags that are associated with the repository.</p>
   *          <note>
   *             <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For
   *             more information, see <a>RepositoryCatalogDataInput</a>.</p>
   *          </note>
   */
  architectures?: string[];

  /**
   * <p>The operating system tags that are associated with the repository.</p>
   *          <note>
   *             <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For
   *             more information, see <a>RepositoryCatalogDataInput</a>.</p>
   *          </note>
   */
  operatingSystems?: string[];

  /**
   * <p>The URL containing the logo associated with the repository.</p>
   */
  logoUrl?: string;

  /**
   * <p>The longform description of the contents of the repository. This text appears in the
   *          repository details on the Amazon ECR Public Gallery.</p>
   */
  aboutText?: string;

  /**
   * <p>The longform usage details of the contents of the repository. The usage text provides
   *          context for users of the repository.</p>
   */
  usageText?: string;

  /**
   * <p>Whether or not the repository is certified by AWS Marketplace.</p>
   */
  marketplaceCertified?: boolean;
}

export namespace RepositoryCatalogData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryCatalogData): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a repository.</p>
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, AWS account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   */
  repositoryArn?: string;

  /**
   * <p>The AWS account ID associated with the public registry that contains the
   *          repository.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The URI for the repository. You can use this URI for container image <code>push</code>
   *          and <code>pull</code> operations.</p>
   */
  repositoryUri?: string;

  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date;
}

export namespace Repository {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Repository): any => ({
    ...obj,
  });
}

export interface CreateRepositoryResponse {
  /**
   * <p>The repository that was created.</p>
   */
  repository?: Repository;

  /**
   * <p>The catalog data for a repository. This data is publicly visible in the
   *          Amazon ECR Public Gallery.</p>
   */
  catalogData?: RepositoryCatalogData;
}

export namespace CreateRepositoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRepositoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export interface InvalidTagParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTagParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation did not succeed because it would have exceeded a service limit for your
 *          account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR Service Quotas</a> in the
 *          Amazon Elastic Container Registry User Guide.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository already exists in the specified registry.</p>
 */
export interface RepositoryAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "RepositoryAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace RepositoryAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *          can be applied to a repository is 50.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface DeleteRepositoryRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository to
   *          delete. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p> If a repository contains images, forces the deletion.</p>
   */
  force?: boolean;
}

export namespace DeleteRepositoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryRequest): any => ({
    ...obj,
  });
}

export interface DeleteRepositoryResponse {
  /**
   * <p>The repository that was deleted.</p>
   */
  repository?: Repository;
}

export namespace DeleteRepositoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository contains images. To delete a repository that contains images,
 *          you must force the deletion with the <code>force</code> parameter.</p>
 */
export interface RepositoryNotEmptyException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNotEmptyException";
  $fault: "client";
  message?: string;
}

export namespace RepositoryNotEmptyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryNotEmptyException): any => ({
    ...obj,
  });
}

export interface DeleteRepositoryPolicyRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository
   *          policy to delete. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the repository policy to
   *          delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteRepositoryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy that was deleted from the repository.</p>
   */
  policyText?: string;
}

export namespace DeleteRepositoryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository and registry combination does not have an associated repository
 *          policy.</p>
 */
export interface RepositoryPolicyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RepositoryPolicyNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace RepositoryPolicyNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryPolicyNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeImagesRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository in
   *          which to describe images. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return. This option cannot be used
   *          when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results returned by <code>DescribeImages</code> in
   *          paginated output. When this parameter is used, <code>DescribeImages</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>DescribeImages</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 1000. If this parameter is not
   *          used, then <code>DescribeImages</code> returns up to 100 results and a
   *             <code>nextToken</code> value, if applicable. This option cannot be used when you specify
   *          images with <code>imageIds</code>.</p>
   */
  maxResults?: number;
}

export namespace DescribeImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that describes an image returned by a <a>DescribeImages</a>
 *          operation.</p>
 */
export interface ImageDetail {
  /**
   * <p>The AWS account ID associated with the public registry to which this image
   *          belongs.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which this image belongs.</p>
   */
  repositoryName?: string;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this will be the max size of all manifests in the
   *          list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
   *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
   *             command shows the uncompressed image size, so it may return a larger image size than the
   *             image sizes returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *          image was pushed to the repository. </p>
   */
  imagePushedAt?: Date;

  /**
   * <p>The media type of the image manifest.</p>
   */
  imageManifestMediaType?: string;

  /**
   * <p>The artifact media type of the image.</p>
   */
  artifactMediaType?: string;
}

export namespace ImageDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageDetail): any => ({
    ...obj,
  });
}

export interface DescribeImagesResponse {
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *          image.</p>
   */
  imageDetails?: ImageDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *          request. When the results of a <code>DescribeImages</code> request exceed
   *             <code>maxResults</code>, this value can be used to retrieve the next page of results.
   *          This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeImagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The image requested does not exist in the specified repository.</p>
 */
export interface ImageNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ImageNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ImageNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeImageTagsRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository in
   *          which to describe images. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that contains the image tag details to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>DescribeImageTags</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return. This option cannot be used
   *          when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results returned by <code>DescribeImageTags</code> in
   *          paginated output. When this parameter is used, <code>DescribeImageTags</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>DescribeImageTags</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 1000. If this parameter
   *          is not used, then <code>DescribeImageTags</code> returns up to 100
   *          results and a <code>nextToken</code> value, if applicable. This option cannot be used when
   *          you specify images with <code>imageIds</code>.</p>
   */
  maxResults?: number;
}

export namespace DescribeImageTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that describes the image tag details returned by a <a>DescribeImageTags</a> action.</p>
 */
export interface ReferencedImageDetail {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this will be the max size of all manifests in the
   *          list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
   *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
   *             command shows the uncompressed image size, so it may return a larger image size than the
   *             image sizes returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *          image tag was pushed to the repository.</p>
   */
  imagePushedAt?: Date;

  /**
   * <p>The media type of the image manifest.</p>
   */
  imageManifestMediaType?: string;

  /**
   * <p>The artifact media type of the image.</p>
   */
  artifactMediaType?: string;
}

export namespace ReferencedImageDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferencedImageDetail): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the image tag details for an image.</p>
 */
export interface ImageTagDetail {
  /**
   * <p>The tag associated with the image.</p>
   */
  imageTag?: string;

  /**
   * <p>The time stamp indicating when the image tag was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the details of an image.</p>
   */
  imageDetail?: ReferencedImageDetail;
}

export namespace ImageTagDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageTagDetail): any => ({
    ...obj,
  });
}

export interface DescribeImageTagsResponse {
  /**
   * <p>The image tag details for the images in the requested repository.</p>
   */
  imageTagDetails?: ImageTagDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImageTags</code>
   *          request. When the results of a <code>DescribeImageTags</code> request exceed
   *             <code>maxResults</code>, this value can be used to retrieve the next page of results.
   *          This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeImageTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageTagsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRegistriesRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>DescribeRegistries</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results returned by <code>DescribeRegistries</code> in
   *          paginated output. When this parameter is used, <code>DescribeRegistries</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>DescribeRegistries</code> request with the returned <code>nextToken</code>
   *          value. This value can be between 1 and 1000. If this parameter
   *          is not used, then <code>DescribeRegistries</code> returns up to 100
   *          results and a <code>nextToken</code> value, if applicable.</p>
   */
  maxResults?: number;
}

export namespace DescribeRegistriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegistriesRequest): any => ({
    ...obj,
  });
}

export enum RegistryAliasStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>An object representing the aliases for a public registry. A public registry is given an
 *          alias upon creation but a custom alias can be set using the Amazon ECR console. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 */
export interface RegistryAlias {
  /**
   * <p>The name of the registry alias.</p>
   */
  name: string | undefined;

  /**
   * <p>The status of the registry alias.</p>
   */
  status: RegistryAliasStatus | string | undefined;

  /**
   * <p>Whether or not the registry alias is the primary alias for the registry. If true, the
   *          alias is the primary registry alias and is displayed in both the repository URL and the
   *          image URI used in the <code>docker pull</code> commands on the Amazon ECR Public Gallery.</p>
   *          <note>
   *             <p>A registry alias that is not the primary registry alias can be used in the repository
   *             URI in a <code>docker pull</code> command.</p>
   *          </note>
   */
  primaryRegistryAlias: boolean | undefined;

  /**
   * <p>Whether or not the registry alias is the default alias for the registry. When the first
   *          public repository is created, your public registry is assigned a default registry
   *          alias.</p>
   */
  defaultRegistryAlias: boolean | undefined;
}

export namespace RegistryAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryAlias): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a public registry.</p>
 */
export interface Registry {
  /**
   * <p>The AWS account ID associated with the registry. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the public registry.</p>
   */
  registryArn: string | undefined;

  /**
   * <p>The URI of a public registry. The URI contains a universal prefix and the registry
   *          alias.</p>
   */
  registryUri: string | undefined;

  /**
   * <p>Whether the account is verified. This indicates whether the account is an AWS
   *          Marketplace vendor. If an account is verified, each public repository will received a
   *          verified account badge on the Amazon ECR Public Gallery.</p>
   */
  verified: boolean | undefined;

  /**
   * <p>An array of objects representing the aliases for a public registry.</p>
   */
  aliases: RegistryAlias[] | undefined;
}

export namespace Registry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Registry): any => ({
    ...obj,
  });
}

export interface DescribeRegistriesResponse {
  /**
   * <p>An object containing the details for a public registry.</p>
   */
  registries: Registry[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *             <code>DescribeRepositories</code> request. When the results of a
   *             <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can
   *          be used to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeRegistriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegistriesResponse): any => ({
    ...obj,
  });
}

export interface DescribeRepositoriesRequest {
  /**
   * <p>The AWS account ID associated with the registry that contains the repositories to be
   *          described. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all repositories
   *          in a registry are described.</p>
   */
  repositoryNames?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *             <code>DescribeRepositories</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return. This option cannot be used
   *          when you specify repositories with <code>repositoryNames</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results returned by <code>DescribeRepositories</code>
   *          in paginated output. When this parameter is used, <code>DescribeRepositories</code> only
   *          returns <code>maxResults</code> results in a single page along with a
   *             <code>nextToken</code> response element. The remaining results of the initial request
   *          can be seen by sending another <code>DescribeRepositories</code> request with the returned
   *             <code>nextToken</code> value. This value can be between 1 and
   *          1000. If this parameter is not used, then <code>DescribeRepositories</code>
   *          returns up to 100 results and a <code>nextToken</code> value, if
   *          applicable. This option cannot be used when you specify repositories with
   *             <code>repositoryNames</code>.</p>
   */
  maxResults?: number;
}

export namespace DescribeRepositoriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRepositoriesRequest): any => ({
    ...obj,
  });
}

export interface DescribeRepositoriesResponse {
  /**
   * <p>A list of repository objects corresponding to valid repositories.</p>
   */
  repositories?: Repository[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *             <code>DescribeRepositories</code> request. When the results of a
   *             <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can
   *          be used to retrieve the next page of results. This value is <code>null</code> when there
   *          are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeRepositoriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRepositoriesResponse): any => ({
    ...obj,
  });
}

export interface GetAuthorizationTokenRequest {}

export namespace GetAuthorizationTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizationTokenRequest): any => ({
    ...obj,
  });
}

export interface GetAuthorizationTokenResponse {
  /**
   * <p>An authorization token data object that corresponds to a public registry.</p>
   */
  authorizationData?: AuthorizationData;
}

export namespace GetAuthorizationTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizationTokenResponse): any => ({
    ...obj,
  });
}

export interface GetRegistryCatalogDataRequest {}

export namespace GetRegistryCatalogDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryCatalogDataRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata for a public registry.</p>
 */
export interface RegistryCatalogData {
  /**
   * <p>The display name for a public registry. This appears on the Amazon ECR Public Gallery.</p>
   *          <important>
   *             <p>Only accounts that have the verified account badge can have a registry display
   *             name.</p>
   *          </important>
   */
  displayName?: string;
}

export namespace RegistryCatalogData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryCatalogData): any => ({
    ...obj,
  });
}

export interface GetRegistryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the public registry.</p>
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

export namespace GetRegistryCatalogDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryCatalogDataResponse): any => ({
    ...obj,
  });
}

export interface GetRepositoryCatalogDataRequest {
  /**
   * <p>The AWS account ID associated with the registry that contains the repositories to be
   *          described. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to retrieve the catalog metadata for.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryCatalogDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryCatalogDataRequest): any => ({
    ...obj,
  });
}

export interface GetRepositoryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the repository.</p>
   */
  catalogData?: RepositoryCatalogData;
}

export namespace GetRepositoryCatalogDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryCatalogDataResponse): any => ({
    ...obj,
  });
}

export interface GetRepositoryPolicyRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository with the policy to retrieve.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetRepositoryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The repository policy text associated with the repository. The policy text will be in
   *          JSON format.</p>
   */
  policyText?: string;
}

export namespace GetRepositoryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an Amazon ECR image.</p>
 */
export interface Image {
  /**
   * <p>The AWS account ID associated with the registry containing the image.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository associated with the image.</p>
   */
  repositoryName?: string;

  /**
   * <p>An object containing the image tag and image digest associated with an image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The image manifest associated with the image.</p>
   */
  imageManifest?: string;

  /**
   * <p>The manifest media type of the image.</p>
   */
  imageManifestMediaType?: string;
}

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *          or image tag after the last push.</p>
 */
export interface ImageAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ImageAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ImageAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified image digest does not match the digest that Amazon ECR calculated for the
 *          image.</p>
 */
export interface ImageDigestDoesNotMatchException extends __SmithyException, $MetadataBearer {
  name: "ImageDigestDoesNotMatchException";
  $fault: "client";
  message?: string;
}

export namespace ImageDigestDoesNotMatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageDigestDoesNotMatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified image is tagged with a tag that already exists. The repository is
 *          configured for tag immutability.</p>
 */
export interface ImageTagAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ImageTagAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ImageTagAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageTagAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface InitiateLayerUploadRequest {
  /**
   * <p>The AWS account ID associated with the registry to which you intend to upload layers.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which you intend to upload layers.</p>
   */
  repositoryName: string | undefined;
}

export namespace InitiateLayerUploadRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitiateLayerUploadRequest): any => ({
    ...obj,
  });
}

export interface InitiateLayerUploadResponse {
  /**
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a> operations.</p>
   */
  uploadId?: string;

  /**
   * <p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>
   */
  partSize?: number;
}

export namespace InitiateLayerUploadResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InitiateLayerUploadResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to the
 *          last byte of a previous layer part upload.</p>
 */
export interface InvalidLayerPartException extends __SmithyException, $MetadataBearer {
  name: "InvalidLayerPartException";
  $fault: "client";
  /**
   * <p>The AWS account ID associated with the layer part.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the layer part.</p>
   */
  uploadId?: string;

  /**
   * <p>The position of the last byte of the layer part.</p>
   */
  lastValidByteReceived?: number;

  message?: string;
}

export namespace InvalidLayerPartException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidLayerPartException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *          repository.</p>
 */
export interface LayersNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LayersNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LayersNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayersNotFoundException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *          supported resource is an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutImageRequest {
  /**
   * <p>The AWS account ID associated with the public registry that contains the repository in
   *          which to put the image. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to put the image.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The image manifest corresponding to the image to be uploaded.</p>
   */
  imageManifest: string | undefined;

  /**
   * <p>The media type of the image manifest. If you push an image manifest that does not
   *          contain the <code>mediaType</code> field, you must specify the
   *             <code>imageManifestMediaType</code> in the request.</p>
   */
  imageManifestMediaType?: string;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use the
   *          Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
   */
  imageTag?: string;

  /**
   * <p>The image digest of the image manifest corresponding to the image.</p>
   */
  imageDigest?: string;
}

export namespace PutImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageRequest): any => ({
    ...obj,
  });
}

export interface PutImageResponse {
  /**
   * <p>Details of the image uploaded.</p>
   */
  image?: Image;
}

export namespace PutImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The manifest list is referencing an image that does not exist.</p>
 */
export interface ReferencedImagesNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ReferencedImagesNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ReferencedImagesNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferencedImagesNotFoundException): any => ({
    ...obj,
  });
}

export interface PutRegistryCatalogDataRequest {
  /**
   * <p>The display name for a public registry. The display name is shown as the repository
   *          author in the Amazon ECR Public Gallery.</p>
   *          <note>
   *             <p>The registry display name is only publicly visible in the Amazon ECR Public Gallery for
   *             verified accounts.</p>
   *          </note>
   */
  displayName?: string;
}

export namespace PutRegistryCatalogDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRegistryCatalogDataRequest): any => ({
    ...obj,
  });
}

export interface PutRegistryCatalogDataResponse {
  /**
   * <p>The catalog data for the public registry.</p>
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

export namespace PutRegistryCatalogDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRegistryCatalogDataResponse): any => ({
    ...obj,
  });
}

export interface PutRepositoryCatalogDataRequest {
  /**
   * <p>The AWS account ID associated with the public registry the repository is in.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to create or update the catalog data for.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An object containing the catalog data for a repository. This data is publicly visible in
   *          the Amazon ECR Public Gallery.</p>
   */
  catalogData: RepositoryCatalogDataInput | undefined;
}

export namespace PutRepositoryCatalogDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRepositoryCatalogDataRequest): any => ({
    ...obj,
  });
}

export interface PutRepositoryCatalogDataResponse {
  /**
   * <p>The catalog data for the repository.</p>
   */
  catalogData?: RepositoryCatalogData;
}

export namespace PutRepositoryCatalogDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRepositoryCatalogDataResponse): any => ({
    ...obj,
  });
}

export interface SetRepositoryPolicyRequest {
  /**
   * <p>The AWS account ID associated with the registry that contains the repository.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON repository policy text to apply to the repository. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR Repository
   *             Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;

  /**
   * <p>If the policy you are attempting to set on a repository policy would prevent you from
   *          setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental
   *          repository lock outs.</p>
   */
  force?: boolean;
}

export namespace SetRepositoryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetRepositoryPolicyRequest): any => ({
    ...obj,
  });
}

export interface SetRepositoryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy text applied to the repository.</p>
   */
  policyText?: string;
}

export namespace SetRepositoryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetRepositoryPolicyResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the
   *          supported resource is an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported
   *          resource is an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UploadLayerPartRequest {
  /**
   * <p>The AWS account ID associated with the registry to which you are uploading layer parts.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which you are uploading layer parts.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *          associate with the layer part upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The position of the first byte of the layer part witin the overall image layer.</p>
   */
  partFirstByte: number | undefined;

  /**
   * <p>The position of the last byte of the layer part within the overall image layer.</p>
   */
  partLastByte: number | undefined;

  /**
   * <p>The base64-encoded layer part payload.</p>
   */
  layerPartBlob: Uint8Array | undefined;
}

export namespace UploadLayerPartRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadLayerPartRequest): any => ({
    ...obj,
  });
}

export interface UploadLayerPartResponse {
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

  /**
   * <p>The integer value of the last byte received in the request.</p>
   */
  lastByteReceived?: number;
}

export namespace UploadLayerPartResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadLayerPartResponse): any => ({
    ...obj,
  });
}
