// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ECRPUBLICServiceException as __BaseException } from "./ECRPUBLICServiceException";

/**
 * <p>An authorization token data object that corresponds to a public registry.</p>
 */
export interface AuthorizationData {
  /**
   * <p>A base64-encoded string that contains authorization data for a public Amazon ECR registry.
   *          When the string is decoded, it's presented in the format <code>user:password</code> for
   *          public registry authentication using <code>docker login</code>.</p>
   */
  authorizationToken?: string;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *          Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date;
}

export interface BatchCheckLayerAvailabilityRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, associated with the public registry that
   *          contains the image layers to check. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that's associated with the image layers to check.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The digests of the image layers to check.</p>
   */
  layerDigests: string[] | undefined;
}

export enum LayerFailureCode {
  InvalidLayerDigest = "InvalidLayerDigest",
  MissingLayerDigest = "MissingLayerDigest",
}

/**
 * <p>An object that represents an Amazon ECR image layer failure.</p>
 */
export interface LayerFailure {
  /**
   * <p>The layer digest that's associated with the failure.</p>
   */
  layerDigest?: string;

  /**
   * <p>The failure code that's associated with the failure.</p>
   */
  failureCode?: LayerFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

export enum LayerAvailability {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>An object that represents an Amazon ECR image layer.</p>
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

export interface BatchCheckLayerAvailabilityResponse {
  /**
   * <p>A list of image layer objects that correspond to the image layer references in the
   *          request.</p>
   */
  layers?: Layer[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: LayerFailure[];
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The registry doesn't exist.</p>
 */
export class RegistryNotFoundException extends __BaseException {
  readonly name: "RegistryNotFoundException" = "RegistryNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistryNotFoundException, __BaseException>) {
    super({
      name: "RegistryNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistryNotFoundException.prototype);
  }
}

/**
 * <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 */
export class RepositoryNotFoundException extends __BaseException {
  readonly name: "RepositoryNotFoundException" = "RepositoryNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNotFoundException, __BaseException>) {
    super({
      name: "RepositoryNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNotFoundException.prototype);
  }
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export class ServerException extends __BaseException {
  readonly name: "ServerException" = "ServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>) {
    super({
      name: "ServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerException.prototype);
  }
}

/**
 * <p>The action isn't supported in this Region.</p>
 */
export class UnsupportedCommandException extends __BaseException {
  readonly name: "UnsupportedCommandException" = "UnsupportedCommandException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedCommandException, __BaseException>) {
    super({
      name: "UnsupportedCommandException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedCommandException.prototype);
  }
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
   * <p>The tag that's used for the image.</p>
   */
  imageTag?: string;
}

export interface BatchDeleteImageRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the image to
   *          delete. If you do not specify a registry, the default public registry is assumed.</p>
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
 * <p>An object that represents an Amazon ECR image failure.</p>
 */
export interface ImageFailure {
  /**
   * <p>The image ID that's associated with the failure.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The code that's associated with the failure.</p>
   */
  failureCode?: ImageFailureCode | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
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

export interface CompleteLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, associated with the registry where layers are
   *          uploaded. If you do not specify a registry, the default public registry is assumed.</p>
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

export interface CompleteLayerUploadResponse {
  /**
   * <p>The public registry ID that's associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name that's associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID that's associated with the layer.</p>
   */
  uploadId?: string;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;
}

/**
 * <p>The specified layer upload doesn't contain any layer parts.</p>
 */
export class EmptyUploadException extends __BaseException {
  readonly name: "EmptyUploadException" = "EmptyUploadException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmptyUploadException, __BaseException>) {
    super({
      name: "EmptyUploadException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmptyUploadException.prototype);
  }
}

/**
 * <p>The layer digest calculation performed by Amazon ECR when the image layer doesn't match the
 *          digest specified.</p>
 */
export class InvalidLayerException extends __BaseException {
  readonly name: "InvalidLayerException" = "InvalidLayerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLayerException, __BaseException>) {
    super({
      name: "InvalidLayerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLayerException.prototype);
  }
}

/**
 * <p>The image layer already exists in the associated repository.</p>
 */
export class LayerAlreadyExistsException extends __BaseException {
  readonly name: "LayerAlreadyExistsException" = "LayerAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerAlreadyExistsException, __BaseException>) {
    super({
      name: "LayerAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerAlreadyExistsException.prototype);
  }
}

/**
 * <p>Layer parts must be at least 5 MiB in size.</p>
 */
export class LayerPartTooSmallException extends __BaseException {
  readonly name: "LayerPartTooSmallException" = "LayerPartTooSmallException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerPartTooSmallException, __BaseException>) {
    super({
      name: "LayerPartTooSmallException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerPartTooSmallException.prototype);
  }
}

/**
 * <p>The upload can't be found, or the specified upload ID isn't valid for this
 *          repository.</p>
 */
export class UploadNotFoundException extends __BaseException {
  readonly name: "UploadNotFoundException" = "UploadNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UploadNotFoundException, __BaseException>) {
    super({
      name: "UploadNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UploadNotFoundException.prototype);
  }
}

/**
 * <p>An object that contains the catalog data for a repository. This data is publicly visible
 *          in the Amazon ECR Public Gallery.</p>
 */
export interface RepositoryCatalogDataInput {
  /**
   * <p>A short description of the contents of the repository. This text appears in both the
   *          image details and also when searching for repositories on the Amazon ECR Public Gallery.</p>
   */
  description?: string;

  /**
   * <p>The system architecture that the images in the repository are compatible with. On the
   *          Amazon ECR Public Gallery, the following supported architectures appear as badges on the
   *          repository and are used as search filters.</p>
   *          <note>
   *             <p>If an unsupported tag is added to your repository catalog data, it's associated with
   *             the repository and can be retrieved using the API but isn't discoverable in the
   *             Amazon ECR Public Gallery.</p>
   *          </note>
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
   */
  architectures?: string[];

  /**
   * <p>The operating systems that the images in the repository are compatible with. On the
   *          Amazon ECR Public Gallery, the following supported operating systems appear as badges on the
   *          repository and are used as search filters.</p>
   *          <note>
   *             <p>If an unsupported tag is added to your repository catalog data, it's associated with
   *             the repository and can be retrieved using the API but isn't discoverable in the
   *             Amazon ECR Public Gallery.</p>
   *          </note>
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
   * <p>A detailed description of the contents of the repository. It's publicly visible in the
   *          Amazon ECR Public Gallery. The text must be in markdown format.</p>
   */
  aboutText?: string;

  /**
   * <p>Detailed information about how to use the contents of the repository. It's publicly
   *          visible in the Amazon ECR Public Gallery. The usage text provides context, support information,
   *          and additional usage details for users of the repository. The text must be in markdown
   *          format.</p>
   */
  usageText?: string;
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them. Each
 *          tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
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

export interface CreateRepositoryRequest {
  /**
   * <p>The name to use for the repository. This appears publicly in the Amazon ECR Public Gallery.
   *          The repository name can be specified on its own (for example <code>nginx-web-app</code>) or
   *          prepended with a namespace to group the repository into a category (for example
   *             <code>project-a/nginx-web-app</code>).</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The details about the repository that are publicly visible in the
   *          Amazon ECR Public Gallery.</p>
   */
  catalogData?: RepositoryCatalogDataInput;

  /**
   * <p>The metadata that you apply to each repository to help categorize and organize your
   *          repositories. Each tag consists of a key and an optional value. You define both of them.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Tag[];
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
   * <p>The URL that contains the logo that's associated with the repository.</p>
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
   * <p>Indicates whether the repository is certified by Amazon Web Services Marketplace.</p>
   */
  marketplaceCertified?: boolean;
}

/**
 * <p>An object representing a repository.</p>
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   */
  repositoryArn?: string;

  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
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

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export class InvalidTagParameterException extends __BaseException {
  readonly name: "InvalidTagParameterException" = "InvalidTagParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagParameterException, __BaseException>) {
    super({
      name: "InvalidTagParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagParameterException.prototype);
  }
}

/**
 * <p>The operation didn't succeed because it would have exceeded a service limit for your
 *          account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR Service Quotas</a> in the
 *          Amazon Elastic Container Registry User Guide.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The specified repository already exists in the specified registry.</p>
 */
export class RepositoryAlreadyExistsException extends __BaseException {
  readonly name: "RepositoryAlreadyExistsException" = "RepositoryAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryAlreadyExistsException, __BaseException>) {
    super({
      name: "RepositoryAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryAlreadyExistsException.prototype);
  }
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *          can be applied to a repository is 50.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

export interface DeleteRepositoryRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository to delete. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p> The force option can be used to delete a repository that contains images. If the force
   *          option is not used, the repository must be empty prior to deletion.</p>
   */
  force?: boolean;
}

export interface DeleteRepositoryResponse {
  /**
   * <p>The repository that was deleted.</p>
   */
  repository?: Repository;
}

/**
 * <p>The specified repository contains images. To delete a repository that contains images,
 *          you must force the deletion with the <code>force</code> parameter.</p>
 */
export class RepositoryNotEmptyException extends __BaseException {
  readonly name: "RepositoryNotEmptyException" = "RepositoryNotEmptyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNotEmptyException, __BaseException>) {
    super({
      name: "RepositoryNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNotEmptyException.prototype);
  }
}

export interface DeleteRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository policy to delete. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that's associated with the repository policy to
   *          delete.</p>
   */
  repositoryName: string | undefined;
}

export interface DeleteRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name that's associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy that was deleted from the repository.</p>
   */
  policyText?: string;
}

/**
 * <p>The specified repository and registry combination doesn't have an associated repository
 *          policy.</p>
 */
export class RepositoryPolicyNotFoundException extends __BaseException {
  readonly name: "RepositoryPolicyNotFoundException" = "RepositoryPolicyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryPolicyNotFoundException, __BaseException>) {
    super({
      name: "RepositoryPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryPolicyNotFoundException.prototype);
  }
}

export interface DescribeImagesRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository where images are described. If you do not specify a registry, the default public registry is assumed.</p>
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
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>. If you specify images with
   *             <code>imageIds</code>, you can't use this option.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results that's returned by <code>DescribeImages</code>
   *          in paginated output. When this parameter is used, <code>DescribeImages</code> only returns
   *             <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *          response element. You can see the remaining results of the initial request by sending
   *          another <code>DescribeImages</code> request with the returned <code>nextToken</code> value.
   *          This value can be between 1 and 1000. If this parameter isn't
   *          used, then <code>DescribeImages</code> returns up to 100 results and a
   *             <code>nextToken</code> value, if applicable. If you specify images with
   *             <code>imageIds</code>, you can't use this option.</p>
   */
  maxResults?: number;
}

/**
 * <p>An object that describes an image that's returned by a <a>DescribeImages</a>
 *          operation.</p>
 */
export interface ImageDetail {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry where this image
   *          belongs.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository where this image belongs.</p>
   */
  repositoryName?: string;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The list of tags that's associated with this image.</p>
   */
  imageTags?: string[];

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this is the max size of all manifests in the
   *          list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
   *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
   *             command shows the uncompressed image size, so it might return a larger image size than
   *             the image sizes that are returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, that the current image
   *          was pushed to the repository at. </p>
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

export interface DescribeImagesResponse {
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *          image.</p>
   */
  imageDetails?: ImageDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *          request. When the results of a <code>DescribeImages</code> request exceed
   *             <code>maxResults</code>, you can use this value to retrieve the next page of results. If
   *          there are no more results to return, this value is <code>null</code>.</p>
   */
  nextToken?: string;
}

/**
 * <p>The image requested doesn't exist in the specified repository.</p>
 */
export class ImageNotFoundException extends __BaseException {
  readonly name: "ImageNotFoundException" = "ImageNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageNotFoundException, __BaseException>) {
    super({
      name: "ImageNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageNotFoundException.prototype);
  }
}

export interface DescribeImageTagsRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository where images are described. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that contains the image tag details to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeImageTags</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>. If you specify images with
   *             <code>imageIds</code>, you can't use this option.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results that's returned by
   *             <code>DescribeImageTags</code> in paginated output. When this parameter is used,
   *             <code>DescribeImageTags</code> only returns <code>maxResults</code> results in a single
   *          page along with a <code>nextToken</code> response element. You can see the remaining
   *          results of the initial request by sending another <code>DescribeImageTags</code> request
   *          with the returned <code>nextToken</code> value. This value can be between 1
   *          and 1000. If this parameter isn't used, then <code>DescribeImageTags</code>
   *          returns up to 100 results and a <code>nextToken</code> value, if
   *          applicable. If you specify images with <code>imageIds</code>, you can't use this
   *          option.</p>
   */
  maxResults?: number;
}

/**
 * <p>An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.</p>
 */
export interface ReferencedImageDetail {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this is the max size of all manifests in the
   *          list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
   *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
   *             command shows the uncompressed image size, so it might return a larger image size than
   *             the image sizes that are returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, which the current image
   *          tag was pushed to the repository at.</p>
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

/**
 * <p>An object that represents the image tag details for an image.</p>
 */
export interface ImageTagDetail {
  /**
   * <p>The tag that's associated with the image.</p>
   */
  imageTag?: string;

  /**
   * <p>The time stamp that indicates when the image tag was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>An object that describes the details of an image.</p>
   */
  imageDetail?: ReferencedImageDetail;
}

export interface DescribeImageTagsResponse {
  /**
   * <p>The image tag details for the images in the requested repository.</p>
   */
  imageTagDetails?: ImageTagDetail[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImageTags</code>
   *          request. When the results of a <code>DescribeImageTags</code> request exceed
   *             <code>maxResults</code>, you can use this value to retrieve the next page of results. If
   *          there are no more results to return, this value is <code>null</code>.</p>
   */
  nextToken?: string;
}

export interface DescribeRegistriesRequest {
  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeRegistries</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results that's returned by
   *             <code>DescribeRegistries</code> in paginated output. When this parameter is used,
   *             <code>DescribeRegistries</code> only returns <code>maxResults</code> results in a single
   *          page along with a <code>nextToken</code> response element. The remaining results of the
   *          initial request can be seen by sending another <code>DescribeRegistries</code> request with
   *          the returned <code>nextToken</code> value. This value can be between 1 and
   *          1000. If this parameter isn't used, then <code>DescribeRegistries</code>
   *          returns up to 100 results and a <code>nextToken</code> value, if
   *          applicable.</p>
   */
  maxResults?: number;
}

export enum RegistryAliasStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>An object representing the aliases for a public registry. A public registry is given an
 *          alias when it's created. However, a custom alias can be set using the Amazon ECR console. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the
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
   * <p>Indicates whether the registry alias is the primary alias for the registry. If true, the
   *          alias is the primary registry alias and is displayed in both the repository URL and the
   *          image URI used in the <code>docker pull</code> commands on the Amazon ECR Public Gallery.</p>
   *          <note>
   *             <p>A registry alias that isn't the primary registry alias can be used in the repository
   *             URI in a <code>docker pull</code> command.</p>
   *          </note>
   */
  primaryRegistryAlias: boolean | undefined;

  /**
   * <p>Indicates whether the registry alias is the default alias for the registry. When the
   *          first public repository is created, your public registry is assigned a default registry
   *          alias.</p>
   */
  defaultRegistryAlias: boolean | undefined;
}

/**
 * <p>The details of a public registry.</p>
 */
export interface Registry {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry.
   *          If you do not specify a registry, the default public registry is assumed.</p>
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
   * <p>Indicates whether the account is a verified Amazon Web Services Marketplace vendor. If an account is verified,
   *          each public repository receives a verified account badge on the
   *          Amazon ECR Public Gallery.</p>
   */
  verified: boolean | undefined;

  /**
   * <p>An array of objects that represents the aliases for a public registry.</p>
   */
  aliases: RegistryAlias[] | undefined;
}

export interface DescribeRegistriesResponse {
  /**
   * <p>An object that contains the details for a public registry.</p>
   */
  registries: Registry[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *             <code>DescribeRepositories</code> request. If the results of a
   *             <code>DescribeRepositories</code> request exceed <code>maxResults</code>, you can use
   *          this value to retrieve the next page of results. If there are no more results, this value
   *          is <code>null</code>.</p>
   */
  nextToken?: string;
}

export interface DescribeRepositoriesRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repositories
   *          to be described. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all repositories
   *          in a registry are described.</p>
   */
  repositoryNames?: string[];

  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeRepositories</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>. If you specify repositories with
   *             <code>repositoryNames</code>, you can't use this option.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results that's returned by
   *             <code>DescribeRepositories</code> in paginated output. When this parameter is used,
   *             <code>DescribeRepositories</code> only returns <code>maxResults</code> results in a
   *          single page along with a <code>nextToken</code> response element. You can see the remaining
   *          results of the initial request by sending another <code>DescribeRepositories</code> request
   *          with the returned <code>nextToken</code> value. This value can be between 1
   *          and 1000. If this parameter isn't used, then <code>DescribeRepositories</code>
   *          returns up to 100 results and a <code>nextToken</code> value, if
   *          applicable. If you specify repositories with <code>repositoryNames</code>, you can't use
   *          this option.</p>
   */
  maxResults?: number;
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
   *          be used to retrieve the next page of results. If there are no more results to return, this
   *          value is <code>null</code>.</p>
   */
  nextToken?: string;
}

export interface GetAuthorizationTokenRequest {}

export interface GetAuthorizationTokenResponse {
  /**
   * <p>An authorization token data object that corresponds to a public registry.</p>
   */
  authorizationData?: AuthorizationData;
}

export interface GetRegistryCatalogDataRequest {}

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

export interface GetRegistryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the public registry.</p>
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

export interface GetRepositoryCatalogDataRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repositories
   *          to be described. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to retrieve the catalog metadata for.</p>
   */
  repositoryName: string | undefined;
}

export interface GetRepositoryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the repository.</p>
   */
  catalogData?: RepositoryCatalogData;
}

/**
 * <p>The repository catalog data doesn't exist.</p>
 */
export class RepositoryCatalogDataNotFoundException extends __BaseException {
  readonly name: "RepositoryCatalogDataNotFoundException" = "RepositoryCatalogDataNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryCatalogDataNotFoundException, __BaseException>) {
    super({
      name: "RepositoryCatalogDataNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryCatalogDataNotFoundException.prototype);
  }
}

export interface GetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository with the policy to retrieve.</p>
   */
  repositoryName: string | undefined;
}

export interface GetRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name that's associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The repository policy text that's associated with the repository. The policy text will
   *          be in JSON format.</p>
   */
  policyText?: string;
}

/**
 * <p>An object that represents an Amazon ECR image.</p>
 */
export interface Image {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry containing the image.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that's associated with the image.</p>
   */
  repositoryName?: string;

  /**
   * <p>An object that contains the image tag and image digest associated with an image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The image manifest that's associated with the image.</p>
   */
  imageManifest?: string;

  /**
   * <p>The manifest media type of the image.</p>
   */
  imageManifestMediaType?: string;
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *          or image tag after the last push.</p>
 */
export class ImageAlreadyExistsException extends __BaseException {
  readonly name: "ImageAlreadyExistsException" = "ImageAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageAlreadyExistsException, __BaseException>) {
    super({
      name: "ImageAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified image digest doesn't match the digest that Amazon ECR calculated for the
 *          image.</p>
 */
export class ImageDigestDoesNotMatchException extends __BaseException {
  readonly name: "ImageDigestDoesNotMatchException" = "ImageDigestDoesNotMatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageDigestDoesNotMatchException, __BaseException>) {
    super({
      name: "ImageDigestDoesNotMatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageDigestDoesNotMatchException.prototype);
  }
}

/**
 * <p>The specified image is tagged with a tag that already exists. The repository is
 *          configured for tag immutability.</p>
 */
export class ImageTagAlreadyExistsException extends __BaseException {
  readonly name: "ImageTagAlreadyExistsException" = "ImageTagAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageTagAlreadyExistsException, __BaseException>) {
    super({
      name: "ImageTagAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageTagAlreadyExistsException.prototype);
  }
}

export interface InitiateLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the registry to which
   *          you intend to upload layers. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that you want to upload layers to.</p>
   */
  repositoryName: string | undefined;
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

/**
 * <p>The layer part size isn't valid, or the first byte specified isn't consecutive to the
 *          last byte of a previous layer part upload.</p>
 */
export class InvalidLayerPartException extends __BaseException {
  readonly name: "InvalidLayerPartException" = "InvalidLayerPartException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon Web Services account ID that's associated with the layer part.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID that's associated with the layer part.</p>
   */
  uploadId?: string;

  /**
   * <p>The position of the last byte of the layer part.</p>
   */
  lastValidByteReceived?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLayerPartException, __BaseException>) {
    super({
      name: "InvalidLayerPartException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLayerPartException.prototype);
    this.registryId = opts.registryId;
    this.repositoryName = opts.repositoryName;
    this.uploadId = opts.uploadId;
    this.lastValidByteReceived = opts.lastValidByteReceived;
  }
}

/**
 * <p>The specified layers can't be found, or the specified layer isn't valid for this
 *          repository.</p>
 */
export class LayersNotFoundException extends __BaseException {
  readonly name: "LayersNotFoundException" = "LayersNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayersNotFoundException, __BaseException>) {
    super({
      name: "LayersNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayersNotFoundException.prototype);
  }
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the
   *          supported resource is an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];
}

export interface PutImageRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the public registry that
   *          contains the repository where the image is put. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository where the image is put.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The image manifest that corresponds to the image to be uploaded.</p>
   */
  imageManifest: string | undefined;

  /**
   * <p>The media type of the image manifest. If you push an image manifest that doesn't contain
   *          the <code>mediaType</code> field, you must specify the <code>imageManifestMediaType</code>
   *          in the request.</p>
   */
  imageManifestMediaType?: string;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use the
   *          Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
   */
  imageTag?: string;

  /**
   * <p>The image digest of the image manifest that corresponds to the image.</p>
   */
  imageDigest?: string;
}

export interface PutImageResponse {
  /**
   * <p>Details of the image uploaded.</p>
   */
  image?: Image;
}

/**
 * <p>The manifest list is referencing an image that doesn't exist.</p>
 */
export class ReferencedImagesNotFoundException extends __BaseException {
  readonly name: "ReferencedImagesNotFoundException" = "ReferencedImagesNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReferencedImagesNotFoundException, __BaseException>) {
    super({
      name: "ReferencedImagesNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReferencedImagesNotFoundException.prototype);
  }
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

export interface PutRegistryCatalogDataResponse {
  /**
   * <p>The catalog data for the public registry.</p>
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

export interface PutRepositoryCatalogDataRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry the repository is in.
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

export interface PutRepositoryCatalogDataResponse {
  /**
   * <p>The catalog data for the repository.</p>
   */
  catalogData?: RepositoryCatalogData;
}

export interface SetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repository.
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
   * <p>If the policy that you want to set on a repository policy would prevent you from setting
   *          another policy in the future, you must force the <a>SetRepositoryPolicy</a>
   *          operation. This prevents accidental repository lockouts.</p>
   */
  force?: boolean;
}

export interface SetRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name that's associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy text that's applied to the repository.</p>
   */
  policyText?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported
   *          resource is an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resource is
   *          an Amazon ECR Public repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UploadLayerPartRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the registry that you're
   *          uploading layer parts to. If you do not specify a registry, the default public registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that you're uploading layer parts to.</p>
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

export interface UploadLayerPartResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name that's associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID that's associated with the request.</p>
   */
  uploadId?: string;

  /**
   * <p>The integer value of the last byte that's received in the request.</p>
   */
  lastByteReceived?: number;
}

/**
 * @internal
 */
export const AuthorizationDataFilterSensitiveLog = (obj: AuthorizationData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCheckLayerAvailabilityRequestFilterSensitiveLog = (obj: BatchCheckLayerAvailabilityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayerFailureFilterSensitiveLog = (obj: LayerFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LayerFilterSensitiveLog = (obj: Layer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCheckLayerAvailabilityResponseFilterSensitiveLog = (
  obj: BatchCheckLayerAvailabilityResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageIdentifierFilterSensitiveLog = (obj: ImageIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteImageRequestFilterSensitiveLog = (obj: BatchDeleteImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFailureFilterSensitiveLog = (obj: ImageFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteImageResponseFilterSensitiveLog = (obj: BatchDeleteImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteLayerUploadRequestFilterSensitiveLog = (obj: CompleteLayerUploadRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteLayerUploadResponseFilterSensitiveLog = (obj: CompleteLayerUploadResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryCatalogDataInputFilterSensitiveLog = (obj: RepositoryCatalogDataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryRequestFilterSensitiveLog = (obj: CreateRepositoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryCatalogDataFilterSensitiveLog = (obj: RepositoryCatalogData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryFilterSensitiveLog = (obj: Repository): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryResponseFilterSensitiveLog = (obj: CreateRepositoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryRequestFilterSensitiveLog = (obj: DeleteRepositoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryResponseFilterSensitiveLog = (obj: DeleteRepositoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryPolicyRequestFilterSensitiveLog = (obj: DeleteRepositoryPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryPolicyResponseFilterSensitiveLog = (obj: DeleteRepositoryPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImagesRequestFilterSensitiveLog = (obj: DescribeImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageDetailFilterSensitiveLog = (obj: ImageDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImagesResponseFilterSensitiveLog = (obj: DescribeImagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageTagsRequestFilterSensitiveLog = (obj: DescribeImageTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferencedImageDetailFilterSensitiveLog = (obj: ReferencedImageDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageTagDetailFilterSensitiveLog = (obj: ImageTagDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageTagsResponseFilterSensitiveLog = (obj: DescribeImageTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegistriesRequestFilterSensitiveLog = (obj: DescribeRegistriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistryAliasFilterSensitiveLog = (obj: RegistryAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistryFilterSensitiveLog = (obj: Registry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegistriesResponseFilterSensitiveLog = (obj: DescribeRegistriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRepositoriesRequestFilterSensitiveLog = (obj: DescribeRepositoriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRepositoriesResponseFilterSensitiveLog = (obj: DescribeRepositoriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAuthorizationTokenRequestFilterSensitiveLog = (obj: GetAuthorizationTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAuthorizationTokenResponseFilterSensitiveLog = (obj: GetAuthorizationTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRegistryCatalogDataRequestFilterSensitiveLog = (obj: GetRegistryCatalogDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistryCatalogDataFilterSensitiveLog = (obj: RegistryCatalogData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRegistryCatalogDataResponseFilterSensitiveLog = (obj: GetRegistryCatalogDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryCatalogDataRequestFilterSensitiveLog = (obj: GetRepositoryCatalogDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryCatalogDataResponseFilterSensitiveLog = (obj: GetRepositoryCatalogDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryPolicyRequestFilterSensitiveLog = (obj: GetRepositoryPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryPolicyResponseFilterSensitiveLog = (obj: GetRepositoryPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitiateLayerUploadRequestFilterSensitiveLog = (obj: InitiateLayerUploadRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitiateLayerUploadResponseFilterSensitiveLog = (obj: InitiateLayerUploadResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImageRequestFilterSensitiveLog = (obj: PutImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImageResponseFilterSensitiveLog = (obj: PutImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRegistryCatalogDataRequestFilterSensitiveLog = (obj: PutRegistryCatalogDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRegistryCatalogDataResponseFilterSensitiveLog = (obj: PutRegistryCatalogDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRepositoryCatalogDataRequestFilterSensitiveLog = (obj: PutRepositoryCatalogDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRepositoryCatalogDataResponseFilterSensitiveLog = (obj: PutRepositoryCatalogDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetRepositoryPolicyRequestFilterSensitiveLog = (obj: SetRepositoryPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetRepositoryPolicyResponseFilterSensitiveLog = (obj: SetRepositoryPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadLayerPartRequestFilterSensitiveLog = (obj: UploadLayerPartRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UploadLayerPartResponseFilterSensitiveLog = (obj: UploadLayerPartResponse): any => ({
  ...obj,
});
