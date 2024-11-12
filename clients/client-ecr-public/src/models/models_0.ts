// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECRPUBLICServiceException as __BaseException } from "./ECRPUBLICServiceException";

/**
 * <p>An authorization token data object that corresponds to a public registry.</p>
 * @public
 */
export interface AuthorizationData {
  /**
   * <p>A base64-encoded string that contains authorization data for a public Amazon ECR registry.
   *          When the string is decoded, it's presented in the format <code>user:password</code> for
   *          public registry authentication using <code>docker login</code>.</p>
   * @public
   */
  authorizationToken?: string | undefined;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *          Authorization tokens are valid for 12 hours.</p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, associated with the public registry that
   *          contains the image layers to check. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that's associated with the image layers to check.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The digests of the image layers to check.</p>
   * @public
   */
  layerDigests: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LayerFailureCode = {
  InvalidLayerDigest: "InvalidLayerDigest",
  MissingLayerDigest: "MissingLayerDigest",
} as const;

/**
 * @public
 */
export type LayerFailureCode = (typeof LayerFailureCode)[keyof typeof LayerFailureCode];

/**
 * <p>An object that represents an Amazon ECR image layer failure.</p>
 * @public
 */
export interface LayerFailure {
  /**
   * <p>The layer digest that's associated with the failure.</p>
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * <p>The failure code that's associated with the failure.</p>
   * @public
   */
  failureCode?: LayerFailureCode | undefined;

  /**
   * <p>The reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LayerAvailability = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type LayerAvailability = (typeof LayerAvailability)[keyof typeof LayerAvailability];

/**
 * <p>An object that represents an Amazon ECR image layer.</p>
 * @public
 */
export interface Layer {
  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * <p>The availability status of the image layer.</p>
   * @public
   */
  layerAvailability?: LayerAvailability | undefined;

  /**
   * <p>The size, in bytes, of the image layer.</p>
   * @public
   */
  layerSize?: number | undefined;

  /**
   * <p>The media type of the layer, such as
   *             <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *             <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   * @public
   */
  mediaType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityResponse {
  /**
   * <p>A list of image layer objects that correspond to the image layer references in the
   *          request.</p>
   * @public
   */
  layers?: Layer[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: LayerFailure[] | undefined;
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface ImageIdentifier {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The tag that's used for the image.</p>
   * @public
   */
  imageTag?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImageRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the registry that
   *          contains the image to delete. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository in a public registry that contains the image to delete.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *             <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *             <code>imageDigest=digest</code>.</p>
   * @public
   */
  imageIds: ImageIdentifier[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageFailureCode = {
  ImageNotFound: "ImageNotFound",
  ImageReferencedByManifestList: "ImageReferencedByManifestList",
  ImageTagDoesNotMatchDigest: "ImageTagDoesNotMatchDigest",
  InvalidImageDigest: "InvalidImageDigest",
  InvalidImageTag: "InvalidImageTag",
  KmsError: "KmsError",
  MissingDigestAndTag: "MissingDigestAndTag",
} as const;

/**
 * @public
 */
export type ImageFailureCode = (typeof ImageFailureCode)[keyof typeof ImageFailureCode];

/**
 * <p>An object that represents an Amazon ECR image failure.</p>
 * @public
 */
export interface ImageFailure {
  /**
   * <p>The image ID that's associated with the failure.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The code that's associated with the failure.</p>
   * @public
   */
  failureCode?: ImageFailureCode | undefined;

  /**
   * <p>The reason for the failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImageResponse {
  /**
   * <p>The image IDs of the deleted images.</p>
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: ImageFailure[] | undefined;
}

/**
 * @public
 */
export interface CompleteLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, associated with the registry where layers are
   *          uploaded. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository in a public registry to associate with the image
   *          layer.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *          associate with the image layer.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   * @public
   */
  layerDigests: string[] | undefined;
}

/**
 * @public
 */
export interface CompleteLayerUploadResponse {
  /**
   * <p>The public registry ID that's associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name that's associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID that's associated with the layer.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   * @public
   */
  layerDigest?: string | undefined;
}

/**
 * <p>The specified layer upload doesn't contain any layer parts.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface RepositoryCatalogDataInput {
  /**
   * <p>A short description of the contents of the repository. This text appears in both the
   *          image details and also when searching for repositories on the Amazon ECR Public Gallery.</p>
   * @public
   */
  description?: string | undefined;

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
   * @public
   */
  architectures?: string[] | undefined;

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
   * @public
   */
  operatingSystems?: string[] | undefined;

  /**
   * <p>The base64-encoded repository logo payload.</p>
   *          <note>
   *             <p>The repository logo is only publicly visible in the Amazon ECR Public Gallery for verified
   *             accounts.</p>
   *          </note>
   * @public
   */
  logoImageBlob?: Uint8Array | undefined;

  /**
   * <p>A detailed description of the contents of the repository. It's publicly visible in the
   *          Amazon ECR Public Gallery. The text must be in markdown format.</p>
   * @public
   */
  aboutText?: string | undefined;

  /**
   * <p>Detailed information about how to use the contents of the repository. It's publicly
   *          visible in the Amazon ECR Public Gallery. The usage text provides context, support information,
   *          and additional usage details for users of the repository. The text must be in markdown
   *          format.</p>
   * @public
   */
  usageText?: string | undefined;
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them. Each
 *          tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *          that acts like a category for more specific tag values.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a
   *          descriptor within a tag category (key).</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * <p>The name to use for the repository. This appears publicly in the Amazon ECR Public Gallery.
   *          The repository name can be specified on its own (for example <code>nginx-web-app</code>) or
   *          prepended with a namespace to group the repository into a category (for example
   *             <code>project-a/nginx-web-app</code>).</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The details about the repository that are publicly visible in the
   *          Amazon ECR Public Gallery.</p>
   * @public
   */
  catalogData?: RepositoryCatalogDataInput | undefined;

  /**
   * <p>The metadata that you apply to each repository to help categorize and organize your
   *          repositories. Each tag consists of a key and an optional value. You define both of them.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The catalog data for a repository. This data is publicly visible in the
 *          Amazon ECR Public Gallery.</p>
 * @public
 */
export interface RepositoryCatalogData {
  /**
   * <p>The short description of the repository.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The architecture tags that are associated with the repository.</p>
   *          <note>
   *             <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For
   *             more information, see <a>RepositoryCatalogDataInput</a>.</p>
   *          </note>
   * @public
   */
  architectures?: string[] | undefined;

  /**
   * <p>The operating system tags that are associated with the repository.</p>
   *          <note>
   *             <p>Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For
   *             more information, see <a>RepositoryCatalogDataInput</a>.</p>
   *          </note>
   * @public
   */
  operatingSystems?: string[] | undefined;

  /**
   * <p>The URL that contains the logo that's associated with the repository.</p>
   * @public
   */
  logoUrl?: string | undefined;

  /**
   * <p>The longform description of the contents of the repository. This text appears in the
   *          repository details on the Amazon ECR Public Gallery.</p>
   * @public
   */
  aboutText?: string | undefined;

  /**
   * <p>The longform usage details of the contents of the repository. The usage text provides
   *          context for users of the repository.</p>
   * @public
   */
  usageText?: string | undefined;

  /**
   * <p>Indicates whether the repository is certified by Amazon Web Services Marketplace.</p>
   * @public
   */
  marketplaceCertified?: boolean | undefined;
}

/**
 * <p>An object representing a repository.</p>
 * @public
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The URI for the repository. You can use this URI for container image <code>push</code>
   *          and <code>pull</code> operations.</p>
   * @public
   */
  repositoryUri?: string | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryResponse {
  /**
   * <p>The repository that was created.</p>
   * @public
   */
  repository?: Repository | undefined;

  /**
   * <p>The catalog data for a repository. This data is publicly visible in the
   *          Amazon ECR Public Gallery.</p>
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository to delete. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to delete.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p> The force option can be used to delete a repository that contains images. If the force
   *          option is not used, the repository must be empty prior to deletion.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryResponse {
  /**
   * <p>The repository that was deleted.</p>
   * @public
   */
  repository?: Repository | undefined;
}

/**
 * <p>The specified repository contains images. To delete a repository that contains images,
 *          you must force the deletion with the <code>force</code> parameter.</p>
 * @public
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

/**
 * @public
 */
export interface DeleteRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository policy to delete. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that's associated with the repository policy to
   *          delete.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name that's associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy that was deleted from the repository.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * <p>The specified repository and registry combination doesn't have an associated repository
 *          policy.</p>
 * @public
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

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository where images are described. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository that contains the images to describe.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of image IDs for the requested repository.</p>
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>. If you specify images with
   *             <code>imageIds</code>, you can't use this option.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object that describes an image that's returned by a <a>DescribeImages</a>
 *          operation.</p>
 * @public
 */
export interface ImageDetail {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry where this image
   *          belongs.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository where this image belongs.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The list of tags that's associated with this image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

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
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, that the current image
   *          was pushed to the repository at. </p>
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * <p>The media type of the image manifest.</p>
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * <p>The artifact media type of the image.</p>
   * @public
   */
  artifactMediaType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResponse {
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *          image.</p>
   * @public
   */
  imageDetails?: ImageDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *          request. When the results of a <code>DescribeImages</code> request exceed
   *             <code>maxResults</code>, you can use this value to retrieve the next page of results. If
   *          there are no more results to return, this value is <code>null</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The image requested doesn't exist in the specified repository.</p>
 * @public
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

/**
 * @public
 */
export interface DescribeImageTagsRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository where images are described. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that contains the image tag details to describe.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value that's returned from a previous paginated
   *             <code>DescribeImageTags</code> request where <code>maxResults</code> was used and the
   *          results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>nextToken</code> value. If there are no more
   *          results to return, this value is <code>null</code>. If you specify images with
   *             <code>imageIds</code>, you can't use this option.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.</p>
 * @public
 */
export interface ReferencedImageDetail {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

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
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, which the current image
   *          tag was pushed to the repository at.</p>
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * <p>The media type of the image manifest.</p>
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * <p>The artifact media type of the image.</p>
   * @public
   */
  artifactMediaType?: string | undefined;
}

/**
 * <p>An object that represents the image tag details for an image.</p>
 * @public
 */
export interface ImageTagDetail {
  /**
   * <p>The tag that's associated with the image.</p>
   * @public
   */
  imageTag?: string | undefined;

  /**
   * <p>The time stamp that indicates when the image tag was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>An object that describes the details of an image.</p>
   * @public
   */
  imageDetail?: ReferencedImageDetail | undefined;
}

/**
 * @public
 */
export interface DescribeImageTagsResponse {
  /**
   * <p>The image tag details for the images in the requested repository.</p>
   * @public
   */
  imageTagDetails?: ImageTagDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImageTags</code>
   *          request. When the results of a <code>DescribeImageTags</code> request exceed
   *             <code>maxResults</code>, you can use this value to retrieve the next page of results. If
   *          there are no more results to return, this value is <code>null</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RegistryAliasStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type RegistryAliasStatus = (typeof RegistryAliasStatus)[keyof typeof RegistryAliasStatus];

/**
 * <p>An object representing the aliases for a public registry. A public registry is given an
 *          alias when it's created. However, a custom alias can be set using the Amazon ECR console. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @public
 */
export interface RegistryAlias {
  /**
   * <p>The name of the registry alias.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the registry alias.</p>
   * @public
   */
  status: RegistryAliasStatus | undefined;

  /**
   * <p>Indicates whether the registry alias is the primary alias for the registry. If true, the
   *          alias is the primary registry alias and is displayed in both the repository URL and the
   *          image URI used in the <code>docker pull</code> commands on the Amazon ECR Public Gallery.</p>
   *          <note>
   *             <p>A registry alias that isn't the primary registry alias can be used in the repository
   *             URI in a <code>docker pull</code> command.</p>
   *          </note>
   * @public
   */
  primaryRegistryAlias: boolean | undefined;

  /**
   * <p>Indicates whether the registry alias is the default alias for the registry. When the
   *          first public repository is created, your public registry is assigned a default registry
   *          alias.</p>
   * @public
   */
  defaultRegistryAlias: boolean | undefined;
}

/**
 * <p>The details of a public registry.</p>
 * @public
 */
export interface Registry {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the public registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The URI of a public registry. The URI contains a universal prefix and the registry
   *          alias.</p>
   * @public
   */
  registryUri: string | undefined;

  /**
   * <p>Indicates whether the account is a verified Amazon Web Services Marketplace vendor. If an account is verified,
   *          each public repository receives a verified account badge on the
   *          Amazon ECR Public Gallery.</p>
   * @public
   */
  verified: boolean | undefined;

  /**
   * <p>An array of objects that represents the aliases for a public registry.</p>
   * @public
   */
  aliases: RegistryAlias[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistriesResponse {
  /**
   * <p>An object that contains the details for a public registry.</p>
   * @public
   */
  registries: Registry[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *             <code>DescribeRepositories</code> request. If the results of a
   *             <code>DescribeRepositories</code> request exceed <code>maxResults</code>, you can use
   *          this value to retrieve the next page of results. If there are no more results, this value
   *          is <code>null</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoriesRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repositories
   *          to be described. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all repositories
   *          in a registry are described.</p>
   * @public
   */
  repositoryNames?: string[] | undefined;

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
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoriesResponse {
  /**
   * <p>A list of repository objects corresponding to valid repositories.</p>
   * @public
   */
  repositories?: Repository[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *             <code>DescribeRepositories</code> request. When the results of a
   *             <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can
   *          be used to retrieve the next page of results. If there are no more results to return, this
   *          value is <code>null</code>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {}

/**
 * @public
 */
export interface GetAuthorizationTokenResponse {
  /**
   * <p>An authorization token data object that corresponds to a public registry.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
}

/**
 * @public
 */
export interface GetRegistryCatalogDataRequest {}

/**
 * <p>The metadata for a public registry.</p>
 * @public
 */
export interface RegistryCatalogData {
  /**
   * <p>The display name for a public registry. This appears on the Amazon ECR Public Gallery.</p>
   *          <important>
   *             <p>Only accounts that have the verified account badge can have a registry display
   *             name.</p>
   *          </important>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the public registry.</p>
   * @public
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

/**
 * @public
 */
export interface GetRepositoryCatalogDataRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repositories
   *          to be described. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to retrieve the catalog metadata for.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryCatalogDataResponse {
  /**
   * <p>The catalog metadata for the repository.</p>
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * <p>The repository catalog data doesn't exist.</p>
 * @public
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

/**
 * @public
 */
export interface GetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry that contains the
   *          repository. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository with the policy to retrieve.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name that's associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The repository policy text that's associated with the repository. The policy text will
   *          be in JSON format.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * <p>An object that represents an Amazon ECR image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry containing the image.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that's associated with the image.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An object that contains the image tag and image digest associated with an image.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The image manifest that's associated with the image.</p>
   * @public
   */
  imageManifest?: string | undefined;

  /**
   * <p>The manifest media type of the image.</p>
   * @public
   */
  imageManifestMediaType?: string | undefined;
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *          or image tag after the last push.</p>
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface InitiateLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the registry to which
   *          you intend to upload layers. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that you want to upload layers to.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadResponse {
  /**
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a> operations.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>
   * @public
   */
  partSize?: number | undefined;
}

/**
 * <p>The layer part size isn't valid, or the first byte specified isn't consecutive to the
 *          last byte of a previous layer part upload.</p>
 * @public
 */
export class InvalidLayerPartException extends __BaseException {
  readonly name: "InvalidLayerPartException" = "InvalidLayerPartException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon Web Services account ID that's associated with the layer part.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID that's associated with the layer part.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The position of the last byte of the layer part.</p>
   * @public
   */
  lastValidByteReceived?: number | undefined;

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
 * @public
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

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the
   *          supported resource is an Amazon ECR Public repository.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutImageRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the public registry that
   *          contains the repository where the image is put. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository where the image is put.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The image manifest that corresponds to the image to be uploaded.</p>
   * @public
   */
  imageManifest: string | undefined;

  /**
   * <p>The media type of the image manifest. If you push an image manifest that doesn't contain
   *          the <code>mediaType</code> field, you must specify the <code>imageManifestMediaType</code>
   *          in the request.</p>
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use the
   *          Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
   * @public
   */
  imageTag?: string | undefined;

  /**
   * <p>The image digest of the image manifest that corresponds to the image.</p>
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface PutImageResponse {
  /**
   * <p>Details of the image uploaded.</p>
   * @public
   */
  image?: Image | undefined;
}

/**
 * <p>The manifest list is referencing an image that doesn't exist.</p>
 * @public
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

/**
 * @public
 */
export interface PutRegistryCatalogDataRequest {
  /**
   * <p>The display name for a public registry. The display name is shown as the repository
   *          author in the Amazon ECR Public Gallery.</p>
   *          <note>
   *             <p>The registry display name is only publicly visible in the Amazon ECR Public Gallery for
   *             verified accounts.</p>
   *          </note>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryCatalogDataResponse {
  /**
   * <p>The catalog data for the public registry.</p>
   * @public
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

/**
 * @public
 */
export interface PutRepositoryCatalogDataRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the public registry the repository is in.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to create or update the catalog data for.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An object containing the catalog data for a repository. This data is publicly visible in
   *          the Amazon ECR Public Gallery.</p>
   * @public
   */
  catalogData: RepositoryCatalogDataInput | undefined;
}

/**
 * @public
 */
export interface PutRepositoryCatalogDataResponse {
  /**
   * <p>The catalog data for the repository.</p>
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID that's associated with the registry that contains the repository.
   *          If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to receive the policy.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON repository policy text to apply to the repository. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR Repository
   *             Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   * @public
   */
  policyText: string | undefined;

  /**
   * <p>If the policy that you want to set on a repository policy would prevent you from setting
   *          another policy in the future, you must force the <a>SetRepositoryPolicy</a>
   *          operation. This prevents accidental repository lockouts.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name that's associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy text that's applied to the repository.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported
   *          resource is an Amazon ECR Public repository.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *          Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resource is
   *          an Amazon ECR Public repository.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UploadLayerPartRequest {
  /**
   * <p>The Amazon Web Services account ID, or registry alias, that's associated with the registry that you're
   *          uploading layer parts to. If you do not specify a registry, the default public registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that you're uploading layer parts to.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *          associate with the layer part upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The position of the first byte of the layer part witin the overall image layer.</p>
   * @public
   */
  partFirstByte: number | undefined;

  /**
   * <p>The position of the last byte of the layer part within the overall image layer.</p>
   * @public
   */
  partLastByte: number | undefined;

  /**
   * <p>The base64-encoded layer part payload.</p>
   * @public
   */
  layerPartBlob: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UploadLayerPartResponse {
  /**
   * <p>The registry ID that's associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name that's associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID that's associated with the request.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The integer value of the last byte that's received in the request.</p>
   * @public
   */
  lastByteReceived?: number | undefined;
}
