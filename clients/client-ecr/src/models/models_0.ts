// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECRServiceException as __BaseException } from "./ECRServiceException";

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layers to
   *             check. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository that is associated with the image layers to check.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The digests of the image layers to check.</p>
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
 * @public
 * <p>An object representing an Amazon ECR image layer failure.</p>
 */
export interface LayerFailure {
  /**
   * @public
   * <p>The layer digest associated with the failure.</p>
   */
  layerDigest?: string;

  /**
   * @public
   * <p>The failure code associated with the failure.</p>
   */
  failureCode?: LayerFailureCode;

  /**
   * @public
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
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
 * @public
 * <p>An object representing an Amazon ECR image layer.</p>
 */
export interface Layer {
  /**
   * @public
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * @public
   * <p>The availability status of the image layer.</p>
   */
  layerAvailability?: LayerAvailability;

  /**
   * @public
   * <p>The size, in bytes, of the image layer.</p>
   */
  layerSize?: number;

  /**
   * @public
   * <p>The media type of the layer, such as
   *                 <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *                 <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   */
  mediaType?: string;
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityResponse {
  /**
   * @public
   * <p>A list of image layer objects corresponding to the image layer references in the
   *             request.</p>
   */
  layers?: Layer[];

  /**
   * @public
   * <p>Any failures associated with the call.</p>
   */
  failures?: LayerFailure[];
}

/**
 * @public
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
 * @public
 * <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
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
 * @public
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
 * @public
 * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
 */
export interface ImageIdentifier {
  /**
   * @public
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * @public
   * <p>The tag used for the image.</p>
   */
  imageTag?: string;
}

/**
 * @public
 * <p>Deletes specified images within a specified repository. Images are specified with
 *             either the <code>imageTag</code> or <code>imageDigest</code>.</p>
 */
export interface BatchDeleteImageRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the image to delete.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository that contains the image to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
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
 * @public
 * <p>An object representing an Amazon ECR image failure.</p>
 */
export interface ImageFailure {
  /**
   * @public
   * <p>The image ID associated with the failure.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * @public
   * <p>The code associated with the failure.</p>
   */
  failureCode?: ImageFailureCode;

  /**
   * @public
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

/**
 * @public
 */
export interface BatchDeleteImageResponse {
  /**
   * @public
   * <p>The image IDs of the deleted images.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * @public
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];
}

/**
 * @public
 */
export interface BatchGetImageRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the images to
   *             describe. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>A list of image ID references that correspond to images to describe. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * @public
   * <p>The accepted media types for the request.</p>
   *          <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> |
   *                 <code>application/vnd.docker.distribution.manifest.v2+json</code> |
   *                 <code>application/vnd.oci.image.manifest.v1+json</code>
   *          </p>
   */
  acceptedMediaTypes?: string[];
}

/**
 * @public
 * <p>An object representing an Amazon ECR image.</p>
 */
export interface Image {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry containing the image.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository associated with the image.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>An object containing the image tag and image digest associated with an image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * @public
   * <p>The image manifest associated with the image.</p>
   */
  imageManifest?: string;

  /**
   * @public
   * <p>The manifest media type of the image.</p>
   */
  imageManifestMediaType?: string;
}

/**
 * @public
 */
export interface BatchGetImageResponse {
  /**
   * @public
   * <p>A list of image objects corresponding to the image references in the request.</p>
   */
  images?: Image[];

  /**
   * @public
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationRequest {
  /**
   * @public
   * <p>One or more repository names to get the scanning configuration for.</p>
   */
  repositoryNames: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanningConfigurationFailureCode = {
  REPOSITORY_NOT_FOUND: "REPOSITORY_NOT_FOUND",
} as const;

/**
 * @public
 */
export type ScanningConfigurationFailureCode =
  (typeof ScanningConfigurationFailureCode)[keyof typeof ScanningConfigurationFailureCode];

/**
 * @public
 * <p>The details about any failures associated with the scanning configuration of a
 *             repository.</p>
 */
export interface RepositoryScanningConfigurationFailure {
  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The failure code.</p>
   */
  failureCode?: ScanningConfigurationFailureCode;

  /**
   * @public
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

/**
 * @public
 * @enum
 */
export const ScanningRepositoryFilterType = {
  WILDCARD: "WILDCARD",
} as const;

/**
 * @public
 */
export type ScanningRepositoryFilterType =
  (typeof ScanningRepositoryFilterType)[keyof typeof ScanningRepositoryFilterType];

/**
 * @public
 * <p>The details of a scanning repository filter. For more information on how to use
 *             filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using
 *                 filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 */
export interface ScanningRepositoryFilter {
  /**
   * @public
   * <p>The filter to use when scanning.</p>
   */
  filter: string | undefined;

  /**
   * @public
   * <p>The type associated with the filter.</p>
   */
  filterType: ScanningRepositoryFilterType | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanFrequency = {
  CONTINUOUS_SCAN: "CONTINUOUS_SCAN",
  MANUAL: "MANUAL",
  SCAN_ON_PUSH: "SCAN_ON_PUSH",
} as const;

/**
 * @public
 */
export type ScanFrequency = (typeof ScanFrequency)[keyof typeof ScanFrequency];

/**
 * @public
 * <p>The details of the scanning configuration for a repository.</p>
 */
export interface RepositoryScanningConfiguration {
  /**
   * @public
   * <p>The ARN of the repository.</p>
   */
  repositoryArn?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>Whether or not scan on push is configured for the repository.</p>
   */
  scanOnPush?: boolean;

  /**
   * @public
   * <p>The scan frequency for the repository.</p>
   */
  scanFrequency?: ScanFrequency;

  /**
   * @public
   * <p>The scan filters applied to the repository.</p>
   */
  appliedScanFilters?: ScanningRepositoryFilter[];
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationResponse {
  /**
   * @public
   * <p>The scanning configuration for the requested repositories.</p>
   */
  scanningConfigurations?: RepositoryScanningConfiguration[];

  /**
   * @public
   * <p>Any failures associated with the call.</p>
   */
  failures?: RepositoryScanningConfigurationFailure[];
}

/**
 * @public
 * <p>There was an exception validating this request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface CompleteLayerUploadRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to which to upload layers.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to associate with the image layer.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the image layer.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigests: string[] | undefined;
}

/**
 * @public
 */
export interface CompleteLayerUploadResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The upload ID associated with the layer.</p>
   */
  uploadId?: string;

  /**
   * @public
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;
}

/**
 * @public
 * <p>The specified layer upload does not contain any layer parts.</p>
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
 * @public
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
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
 * @public
 * <p>The operation failed due to a KMS exception.</p>
 */
export class KmsException extends __BaseException {
  readonly name: "KmsException" = "KmsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code returned by KMS.</p>
   */
  kmsError?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsException, __BaseException>) {
    super({
      name: "KmsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsException.prototype);
    this.kmsError = opts.kmsError;
  }
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
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
 * @public
 */
export interface CreatePullThroughCacheRuleRequest {
  /**
   * @public
   * <p>The repository name prefix to use when caching images from the source registry.</p>
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * @public
   * <p>The registry URL of the upstream public registry to use as the source for the pull
   *             through cache rule.</p>
   */
  upstreamRegistryUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to create the pull through cache
   *             rule for. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;
}

/**
 * @public
 */
export interface CreatePullThroughCacheRuleResponse {
  /**
   * @public
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   */
  ecrRepositoryPrefix?: string;

  /**
   * @public
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   */
  upstreamRegistryUrl?: string;

  /**
   * @public
   * <p>The date and time, in JavaScript date format, when the pull through cache rule was
   *             created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;
}

/**
 * @public
 * <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
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
 * @public
 * <p>A pull through cache rule with these settings already exists for the private
 *             registry.</p>
 */
export class PullThroughCacheRuleAlreadyExistsException extends __BaseException {
  readonly name: "PullThroughCacheRuleAlreadyExistsException" = "PullThroughCacheRuleAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullThroughCacheRuleAlreadyExistsException, __BaseException>) {
    super({
      name: "PullThroughCacheRuleAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullThroughCacheRuleAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p>The specified upstream registry isn't supported.</p>
 */
export class UnsupportedUpstreamRegistryException extends __BaseException {
  readonly name: "UnsupportedUpstreamRegistryException" = "UnsupportedUpstreamRegistryException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUpstreamRegistryException, __BaseException>) {
    super({
      name: "UnsupportedUpstreamRegistryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUpstreamRegistryException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AES256: "AES256",
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * <p>The encryption configuration for the repository. This determines how the contents of
 *             your repository are encrypted at rest.</p>
 *          <p>By default, when no encryption configuration is set or the <code>AES256</code>
 *             encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption
 *             keys which encrypts your data at rest using an AES-256 encryption algorithm. This does
 *             not require any action on your part.</p>
 *          <p>For more control over the encryption of the contents of your repository, you can use
 *             server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your
 *             images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at
 *                 rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>The encryption type to use.</p>
   *          <p>If you use the <code>KMS</code> encryption type, the contents of the repository will
   *             be encrypted using server-side encryption with Key Management Service key stored in KMS. When you
   *             use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key
   *             for Amazon ECR, or specify your own KMS key, which you already created. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">Protecting data using server-side
   *                 encryption with an KMS key stored in Key Management Service (SSE-KMS)</a> in the
   *                 <i>Amazon Simple Storage Service Console Developer Guide</i>.</p>
   *          <p>If you use the <code>AES256</code> encryption type, Amazon ECR uses server-side encryption
   *             with Amazon S3-managed encryption keys which encrypts the images in the repository using an
   *             AES-256 encryption algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Protecting data using
   *                 server-side encryption with Amazon S3-managed encryption keys (SSE-S3)</a> in the
   *                 <i>Amazon Simple Storage Service Console Developer Guide</i>.</p>
   */
  encryptionType: EncryptionType | undefined;

  /**
   * @public
   * <p>If you use the <code>KMS</code> encryption type, specify the KMS key to use for
   *             encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key
   *             must exist in the same Region as the repository. If no key is specified, the default
   *             Amazon Web Services managed KMS key for Amazon ECR will be used.</p>
   */
  kmsKey?: string;
}

/**
 * @public
 * <p>The image scanning configuration for a repository.</p>
 */
export interface ImageScanningConfiguration {
  /**
   * @public
   * <p>The setting that determines whether images are scanned after being pushed to a
   *             repository. If set to <code>true</code>, images will be scanned after being pushed. If
   *             this parameter is not specified, it will default to <code>false</code> and images will
   *             not be scanned unless a scan is manually started with the <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html">API_StartImageScan</a> API.</p>
   */
  scanOnPush?: boolean;
}

/**
 * @public
 * @enum
 */
export const ImageTagMutability = {
  IMMUTABLE: "IMMUTABLE",
  MUTABLE: "MUTABLE",
} as const;

/**
 * @public
 */
export type ImageTagMutability = (typeof ImageTagMutability)[keyof typeof ImageTagMutability];

/**
 * @public
 * <p>The metadata to apply to a resource to help you categorize and organize them. Each tag
 *             consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *             that acts like a category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A <code>value</code> acts as a descriptor within a tag category (key).</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to create the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name to use for the repository. The repository name may be specified on its own
   *             (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group
   *             the repository into a category (such as <code>project-a/nginx-web-app</code>).</p>
   *          <p>The repository name must start with a letter and can only contain lowercase letters,
   *             numbers, hyphens, underscores, and forward slashes.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The metadata that you apply to the repository to help you categorize and organize
   *             them. Each tag consists of a key and an optional value, both of which you define.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of <code>MUTABLE</code> will be used which will allow image tags to be
   *             overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   */
  imageTagMutability?: ImageTagMutability;

  /**
   * @public
   * <p>The image scanning configuration for the repository. This determines whether images
   *             are scanned for known vulnerabilities after being pushed to the repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * @public
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;
}

/**
 * @public
 * <p>An object representing a repository.</p>
 */
export interface Repository {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the
   *     repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name.
   *     For example, <code>arn:aws:ecr:region:012345678910:repository-namespace/repository-name</code>.</p>
   */
  repositoryArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The URI for the repository. You can use this URI for container image <code>push</code>
   *             and <code>pull</code> operations.</p>
   */
  repositoryUri?: string;

  /**
   * @public
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability;

  /**
   * @public
   * <p>The image scanning configuration for a repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * @public
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;
}

/**
 * @public
 */
export interface CreateRepositoryResponse {
  /**
   * @public
   * <p>The repository that was created.</p>
   */
  repository?: Repository;
}

/**
 * @public
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
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
 * @public
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
 * @public
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50.</p>
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
export interface DeleteLifecyclePolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * @public
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;
}

/**
 * @public
 * <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 */
export class LifecyclePolicyNotFoundException extends __BaseException {
  readonly name: "LifecyclePolicyNotFoundException" = "LifecyclePolicyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyNotFoundException, __BaseException>) {
    super({
      name: "LifecyclePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeletePullThroughCacheRuleRequest {
  /**
   * @public
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule to
   *             delete.</p>
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the pull through cache
   *             rule. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;
}

/**
 * @public
 */
export interface DeletePullThroughCacheRuleResponse {
  /**
   * @public
   * <p>The Amazon ECR repository prefix associated with the request.</p>
   */
  ecrRepositoryPrefix?: string;

  /**
   * @public
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   */
  upstreamRegistryUrl?: string;

  /**
   * @public
   * <p>The timestamp associated with the pull through cache rule.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;
}

/**
 * @public
 * <p>The pull through cache rule was not found. Specify a valid pull through cache rule and
 *             try again.</p>
 */
export class PullThroughCacheRuleNotFoundException extends __BaseException {
  readonly name: "PullThroughCacheRuleNotFoundException" = "PullThroughCacheRuleNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullThroughCacheRuleNotFoundException, __BaseException>) {
    super({
      name: "PullThroughCacheRuleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullThroughCacheRuleNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteRegistryPolicyRequest {}

/**
 * @public
 */
export interface DeleteRegistryPolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The contents of the registry permissions policy that was deleted.</p>
   */
  policyText?: string;
}

/**
 * @public
 * <p>The registry doesn't have an associated registry policy.</p>
 */
export class RegistryPolicyNotFoundException extends __BaseException {
  readonly name: "RegistryPolicyNotFoundException" = "RegistryPolicyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistryPolicyNotFoundException, __BaseException>) {
    super({
      name: "RegistryPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistryPolicyNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository to
   *             delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p> If a repository contains images, forces the deletion.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface DeleteRepositoryResponse {
  /**
   * @public
   * <p>The repository that was deleted.</p>
   */
  repository?: Repository;
}

/**
 * @public
 * <p>The specified repository contains images. To delete a repository that contains images,
 *             you must force the deletion with the <code>force</code> parameter.</p>
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
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository policy
   *             to delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository that is associated with the repository policy to
   *             delete.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON repository policy that was deleted from the repository.</p>
   */
  policyText?: string;
}

/**
 * @public
 * <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
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
export interface DescribeImageReplicationStatusRequest {
  /**
   * @public
   * <p>The name of the repository that the image is in.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId: ImageIdentifier | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * <p>The status of the replication process for an image.</p>
 */
export interface ImageReplicationStatus {
  /**
   * @public
   * <p>The destination Region for the image replication.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to which the image belongs.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The image replication status.</p>
   */
  status?: ReplicationStatus;

  /**
   * @public
   * <p>The failure code for a replication that has failed.</p>
   */
  failureCode?: string;
}

/**
 * @public
 */
export interface DescribeImageReplicationStatusResponse {
  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * @public
   * <p>The replication status details for the images in the specified repository.</p>
   */
  replicationStatuses?: ImageReplicationStatus[];
}

/**
 * @public
 * <p>The image requested does not exist in the specified repository.</p>
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
 * @enum
 */
export const TagStatus = {
  ANY: "ANY",
  TAGGED: "TAGGED",
  UNTAGGED: "UNTAGGED",
} as const;

/**
 * @public
 */
export type TagStatus = (typeof TagStatus)[keyof typeof TagStatus];

/**
 * @public
 * <p>An object representing a filter on a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface DescribeImagesFilter {
  /**
   * @public
   * <p>The tag status with which to filter your <a>DescribeImages</a> results. You
   *             can filter results based on whether they are <code>TAGGED</code> or
   *                 <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The filter key and value with which to filter your <code>DescribeImages</code>
   *             results.</p>
   */
  filter?: DescribeImagesFilter;
}

/**
 * @public
 * @enum
 */
export const FindingSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNDEFINED: "UNDEFINED",
} as const;

/**
 * @public
 */
export type FindingSeverity = (typeof FindingSeverity)[keyof typeof FindingSeverity];

/**
 * @public
 * <p>A summary of the last completed image scan.</p>
 */
export interface ImageScanFindingsSummary {
  /**
   * @public
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * @public
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;

  /**
   * @public
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>>;
}

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  ACTIVE: "ACTIVE",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  FINDINGS_UNAVAILABLE: "FINDINGS_UNAVAILABLE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
  UNSUPPORTED_IMAGE: "UNSUPPORTED_IMAGE",
} as const;

/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * <p>The current status of an image scan.</p>
 */
export interface ImageScanStatus {
  /**
   * @public
   * <p>The current state of an image scan.</p>
   */
  status?: ScanStatus;

  /**
   * @public
   * <p>The description of the image scan status.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>An object that describes an image returned by a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface ImageDetail {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to which this image belongs.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to which this image belongs.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * @public
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];

  /**
   * @public
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this will be the max size of all manifests in the
   *             list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
   *                 before pushing them to a V2 Docker registry. The output of the <code>docker
   *                     images</code> command shows the uncompressed image size, so it may return a
   *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
   *          </note>
   */
  imageSizeInBytes?: number;

  /**
   * @public
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository. </p>
   */
  imagePushedAt?: Date;

  /**
   * @public
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * @public
   * <p>A summary of the last completed image scan.</p>
   */
  imageScanFindingsSummary?: ImageScanFindingsSummary;

  /**
   * @public
   * <p>The media type of the image manifest.</p>
   */
  imageManifestMediaType?: string;

  /**
   * @public
   * <p>The artifact media type of the image.</p>
   */
  artifactMediaType?: string;

  /**
   * @public
   * <p>The date and time, expressed in standard JavaScript date format, when Amazon ECR recorded
   *             the last image pull.</p>
   *          <note>
   *             <p>Amazon ECR refreshes the last image pull timestamp at least once every 24 hours. For
   *                 example, if you pull an image once a day then the <code>lastRecordedPullTime</code>
   *                 timestamp will indicate the exact time that the image was last pulled. However, if
   *                 you pull an image once an hour, because Amazon ECR refreshes the
   *                     <code>lastRecordedPullTime</code> timestamp at least once every 24 hours, the
   *                 result may not be the exact time that the image was last pulled.</p>
   *          </note>
   */
  lastRecordedPullTime?: Date;
}

/**
 * @public
 */
export interface DescribeImagesResponse {
  /**
   * @public
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *             image.</p>
   */
  imageDetails?: ImageDetail[];

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *             request. When the results of a <code>DescribeImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeImageScanFindingsRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository for the image for which to describe the scan findings.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId: ImageIdentifier | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImageScanFindings</code> request where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value. This value
   *             is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * @public
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
}

/**
 * @public
 * <p>The CVSS score for a finding.</p>
 */
export interface CvssScore {
  /**
   * @public
   * <p>The base CVSS score used for the finding.</p>
   */
  baseScore?: number;

  /**
   * @public
   * <p>The vector string of the CVSS score.</p>
   */
  scoringVector?: string;

  /**
   * @public
   * <p>The source of the CVSS score.</p>
   */
  source?: string;

  /**
   * @public
   * <p>The version of CVSS used for the score.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>Information on the vulnerable package identified by a finding.</p>
 */
export interface VulnerablePackage {
  /**
   * @public
   * <p>The architecture of the vulnerable package.</p>
   */
  arch?: string;

  /**
   * @public
   * <p>The epoch of the vulnerable package.</p>
   */
  epoch?: number;

  /**
   * @public
   * <p>The file path of the vulnerable package.</p>
   */
  filePath?: string;

  /**
   * @public
   * <p>The name of the vulnerable package.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The package manager of the vulnerable package.</p>
   */
  packageManager?: string;

  /**
   * @public
   * <p>The release of the vulnerable package.</p>
   */
  release?: string;

  /**
   * @public
   * <p>The source layer hash of the vulnerable package.</p>
   */
  sourceLayerHash?: string;

  /**
   * @public
   * <p>The version of the vulnerable package.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>Information about a package vulnerability finding.</p>
 */
export interface PackageVulnerabilityDetails {
  /**
   * @public
   * <p>An object that contains details about the CVSS score of a finding.</p>
   */
  cvss?: CvssScore[];

  /**
   * @public
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>The source of the vulnerability information.</p>
   */
  source?: string;

  /**
   * @public
   * <p>A URL to the source of the vulnerability information.</p>
   */
  sourceUrl?: string;

  /**
   * @public
   * <p>The date and time that this vulnerability was first added to the vendor's
   *             database.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * @public
   * <p>The severity the vendor has given to this vulnerability type.</p>
   */
  vendorSeverity?: string;

  /**
   * @public
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * @public
   * <p>The ID given to this vulnerability.</p>
   */
  vulnerabilityId?: string;

  /**
   * @public
   * <p>The packages impacted by this vulnerability.</p>
   */
  vulnerablePackages?: VulnerablePackage[];
}

/**
 * @public
 * <p>Details about the recommended course of action to remediate the finding.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The URL address to the CVE remediation recommendations.</p>
   */
  url?: string;

  /**
   * @public
   * <p>The recommended course of action to remediate the finding.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>Information on how to remediate a finding.</p>
 */
export interface Remediation {
  /**
   * @public
   * <p>An object that contains information about the recommended course of action to
   *             remediate the finding.</p>
   */
  recommendation?: Recommendation;
}

/**
 * @public
 * <p>The image details of the Amazon ECR container image.</p>
 */
export interface AwsEcrContainerImageDetails {
  /**
   * @public
   * <p>The architecture of the Amazon ECR container image.</p>
   */
  architecture?: string;

  /**
   * @public
   * <p>The image author of the Amazon ECR container image.</p>
   */
  author?: string;

  /**
   * @public
   * <p>The image hash of the Amazon ECR container image.</p>
   */
  imageHash?: string;

  /**
   * @public
   * <p>The image tags attached to the Amazon ECR container image.</p>
   */
  imageTags?: string[];

  /**
   * @public
   * <p>The platform of the Amazon ECR container image.</p>
   */
  platform?: string;

  /**
   * @public
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   */
  pushedAt?: Date;

  /**
   * @public
   * <p>The registry the Amazon ECR container image belongs to.</p>
   */
  registry?: string;

  /**
   * @public
   * <p>The name of the repository the Amazon ECR container image resides in.</p>
   */
  repositoryName?: string;
}

/**
 * @public
 * <p>Contains details about the resource involved in the finding.</p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>An object that contains details about the Amazon ECR container image involved in the
   *             finding.</p>
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
}

/**
 * @public
 * <p>Details about the resource involved in a finding.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>An object that contains details about the resource involved in a finding.</p>
   */
  details?: ResourceDetails;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The tags attached to the resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>Details on adjustments Amazon Inspector made to the CVSS score for a finding.</p>
 */
export interface CvssScoreAdjustment {
  /**
   * @public
   * <p>The metric used to adjust the CVSS score.</p>
   */
  metric?: string;

  /**
   * @public
   * <p>The reason the CVSS score has been adjustment.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Information about the CVSS score.</p>
 */
export interface CvssScoreDetails {
  /**
   * @public
   * <p>An object that contains details about adjustment Amazon Inspector made to the CVSS score.</p>
   */
  adjustments?: CvssScoreAdjustment[];

  /**
   * @public
   * <p>The CVSS score.</p>
   */
  score?: number;

  /**
   * @public
   * <p>The source for the CVSS score.</p>
   */
  scoreSource?: string;

  /**
   * @public
   * <p>The vector for the CVSS score.</p>
   */
  scoringVector?: string;

  /**
   * @public
   * <p>The CVSS version used in scoring.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 */
export interface ScoreDetails {
  /**
   * @public
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   */
  cvss?: CvssScoreDetails;
}

/**
 * @public
 * <p>The details of an enhanced image scan. This is returned when enhanced scanning is
 *             enabled for your private registry.</p>
 */
export interface EnhancedImageScanFinding {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the image.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   */
  findingArn?: string;

  /**
   * @public
   * <p>The date and time that the finding was first observed.</p>
   */
  firstObservedAt?: Date;

  /**
   * @public
   * <p>The date and time that the finding was last observed.</p>
   */
  lastObservedAt?: Date;

  /**
   * @public
   * <p>An object that contains the details of a package vulnerability finding.</p>
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;

  /**
   * @public
   * <p>An object that contains the details about how to remediate a finding.</p>
   */
  remediation?: Remediation;

  /**
   * @public
   * <p>Contains information on the resources involved in a finding.</p>
   */
  resources?: Resource[];

  /**
   * @public
   * <p>The Amazon Inspector score given to the finding.</p>
   */
  score?: number;

  /**
   * @public
   * <p>An object that contains details of the Amazon Inspector score.</p>
   */
  scoreDetails?: ScoreDetails;

  /**
   * @public
   * <p>The severity of the finding.</p>
   */
  severity?: string;

  /**
   * @public
   * <p>The status of the finding.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The title of the finding.</p>
   */
  title?: string;

  /**
   * @public
   * <p>The type of the finding.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The date and time the finding was last updated at.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 * <p>This data type is used in the <a>ImageScanFinding</a> data type.</p>
 */
export interface Attribute {
  /**
   * @public
   * <p>The attribute key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value assigned to the attribute key.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains information about an image scan finding.</p>
 */
export interface ImageScanFinding {
  /**
   * @public
   * <p>The name associated with the finding, usually a CVE number.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A link containing additional details about the security vulnerability.</p>
   */
  uri?: string;

  /**
   * @public
   * <p>The finding severity.</p>
   */
  severity?: FindingSeverity;

  /**
   * @public
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  attributes?: Attribute[];
}

/**
 * @public
 * <p>The details of an image scan.</p>
 */
export interface ImageScanFindings {
  /**
   * @public
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * @public
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;

  /**
   * @public
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>>;

  /**
   * @public
   * <p>The findings from the image scan.</p>
   */
  findings?: ImageScanFinding[];

  /**
   * @public
   * <p>Details about the enhanced scan findings from Amazon Inspector.</p>
   */
  enhancedFindings?: EnhancedImageScanFinding[];
}

/**
 * @public
 */
export interface DescribeImageScanFindingsResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * @public
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * @public
   * <p>The information contained in the image scan findings.</p>
   */
  imageScanFindings?: ImageScanFindings;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeImageScanFindings</code> request. When the results of a
   *                 <code>DescribeImageScanFindings</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 */
export class ScanNotFoundException extends __BaseException {
  readonly name: "ScanNotFoundException" = "ScanNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScanNotFoundException, __BaseException>) {
    super({
      name: "ScanNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScanNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DescribePullThroughCacheRulesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to return the pull through cache
   *             rules for. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The Amazon ECR repository prefixes associated with the pull through cache rules to return.
   *             If no repository prefix value is specified, all pull through cache rules are
   *             returned.</p>
   */
  ecrRepositoryPrefixes?: string[];

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribePullThroughCacheRulesRequest</code> request where
   *                 <code>maxResults</code> was used and the results exceeded the value of that
   *             parameter. Pagination continues from the end of the previous results that returned the
   *                 <code>nextToken</code> value. This value is null when there are no more results to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of pull through cache rules returned by
   *                 <code>DescribePullThroughCacheRulesRequest</code> in paginated output. When this
   *             parameter is used, <code>DescribePullThroughCacheRulesRequest</code> only returns
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. The remaining results of the initial request can be seen by sending
   *             another <code>DescribePullThroughCacheRulesRequest</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and 1000. If this
   *             parameter is not used, then <code>DescribePullThroughCacheRulesRequest</code> returns up
   *             to 100 results and a <code>nextToken</code> value, if applicable.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of a pull through cache rule.</p>
 */
export interface PullThroughCacheRule {
  /**
   * @public
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   */
  ecrRepositoryPrefix?: string;

  /**
   * @public
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   */
  upstreamRegistryUrl?: string;

  /**
   * @public
   * <p>The date and time the pull through cache was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry the pull through cache rule is
   *             associated with.</p>
   */
  registryId?: string;
}

/**
 * @public
 */
export interface DescribePullThroughCacheRulesResponse {
  /**
   * @public
   * <p>The details of the pull through cache rules.</p>
   */
  pullThroughCacheRules?: PullThroughCacheRule[];

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribePullThroughCacheRulesRequest</code> request. When the results of a
   *                 <code>DescribePullThroughCacheRulesRequest</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {}

/**
 * @public
 * <p>An array of objects representing the destination for a replication rule.</p>
 */
export interface ReplicationDestination {
  /**
   * @public
   * <p>The Region to replicate to.</p>
   */
  region: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon ECR private registry to replicate to. When configuring
   *             cross-Region replication within your own registry, specify your own account ID.</p>
   */
  registryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RepositoryFilterType = {
  PREFIX_MATCH: "PREFIX_MATCH",
} as const;

/**
 * @public
 */
export type RepositoryFilterType = (typeof RepositoryFilterType)[keyof typeof RepositoryFilterType];

/**
 * @public
 * <p>The filter settings used with image replication. Specifying a repository filter to a
 *             replication rule provides a method for controlling which repositories in a private
 *             registry are replicated. If no filters are added, the contents of all repositories are
 *             replicated.</p>
 */
export interface RepositoryFilter {
  /**
   * @public
   * <p>The repository filter details. When the <code>PREFIX_MATCH</code> filter type is
   *             specified, this value is required and should be the repository name prefix to configure
   *             replication for.</p>
   */
  filter: string | undefined;

  /**
   * @public
   * <p>The repository filter type. The only supported value is <code>PREFIX_MATCH</code>,
   *             which is a repository name prefix specified with the <code>filter</code>
   *             parameter.</p>
   */
  filterType: RepositoryFilterType | undefined;
}

/**
 * @public
 * <p>An array of objects representing the replication destinations and repository filters
 *             for a replication configuration.</p>
 */
export interface ReplicationRule {
  /**
   * @public
   * <p>An array of objects representing the destination for a replication rule.</p>
   */
  destinations: ReplicationDestination[] | undefined;

  /**
   * @public
   * <p>An array of objects representing the filters for a replication rule. Specifying a
   *             repository filter for a replication rule provides a method for controlling which
   *             repositories in a private registry are replicated.</p>
   */
  repositoryFilters?: RepositoryFilter[];
}

/**
 * @public
 * <p>The replication configuration for a registry.</p>
 */
export interface ReplicationConfiguration {
  /**
   * @public
   * <p>An array of objects representing the replication destinations and repository filters
   *             for a replication configuration.</p>
   */
  rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * @public
   * <p>The ID of the registry.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The replication configuration for the registry.</p>
   */
  replicationConfiguration?: ReplicationConfiguration;
}

/**
 * @public
 */
export interface DescribeRepositoriesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repositories to be
   *             described. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>A list of repositories to describe. If this parameter is omitted, then all
   *             repositories in a registry are described.</p>
   */
  repositoryNames?: string[];

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeRepositories</code> request where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify repositories with <code>repositoryNames</code>.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * @public
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
}

/**
 * @public
 */
export interface DescribeRepositoriesResponse {
  /**
   * @public
   * <p>A list of repository objects corresponding to valid repositories.</p>
   */
  repositories?: Repository[];

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeRepositories</code> request. When the results of a
   *                 <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {
  /**
   * @public
   * @deprecated
   *
   * <p>A list of Amazon Web Services account IDs that are associated with the registries for which to get
   *             AuthorizationData objects. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryIds?: string[];
}

/**
 * @public
 * <p>An object representing authorization data for an Amazon ECR registry.</p>
 */
export interface AuthorizationData {
  /**
   * @public
   * <p>A base64-encoded string that contains authorization data for the specified Amazon ECR
   *             registry. When the string is decoded, it is presented in the format
   *                 <code>user:password</code> for private registry authentication using <code>docker
   *                 login</code>.</p>
   */
  authorizationToken?: string;

  /**
   * @public
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *             Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date;

  /**
   * @public
   * <p>The registry URL to use for this authorization token in a <code>docker login</code>
   *             command. The Amazon ECR registry URL format is
   *         <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example,
   *         <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. </p>
   */
  proxyEndpoint?: string;
}

/**
 * @public
 */
export interface GetAuthorizationTokenResponse {
  /**
   * @public
   * <p>A list of authorization token data objects that correspond to the
   *                 <code>registryIds</code> values in the request.</p>
   */
  authorizationData?: AuthorizationData[];
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layer to
   *             download. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository that is associated with the image layer to download.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest: string | undefined;
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerResponse {
  /**
   * @public
   * <p>The pre-signed Amazon S3 download URL for the requested layer.</p>
   */
  downloadUrl?: string;

  /**
   * @public
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest?: string;
}

/**
 * @public
 * <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 */
export class LayerInaccessibleException extends __BaseException {
  readonly name: "LayerInaccessibleException" = "LayerInaccessibleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerInaccessibleException, __BaseException>) {
    super({
      name: "LayerInaccessibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerInaccessibleException.prototype);
  }
}

/**
 * @public
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
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
export interface GetLifecyclePolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * @public
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;
}

/**
 * @public
 * <p>The filter for the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewFilter {
  /**
   * @public
   * <p>The tag status of the image.</p>
   */
  tagStatus?: TagStatus;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The list of imageIDs to be included.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>GetLifecyclePolicyPreviewRequest</code> request where <code>maxResults</code>
   *             was used and the  results exceeded the value of that parameter. Pagination continues
   *             from the end of the  previous results that returned the <code>nextToken</code> value.
   *             This value is  <code>null</code> when there are no more results to return. This option
   *             cannot be used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>An optional parameter that filters results based on image tag status and all tags, if
   *             tagged.</p>
   */
  filter?: LifecyclePolicyPreviewFilter;
}

/**
 * @public
 * @enum
 */
export const ImageActionType = {
  EXPIRE: "EXPIRE",
} as const;

/**
 * @public
 */
export type ImageActionType = (typeof ImageActionType)[keyof typeof ImageActionType];

/**
 * @public
 * <p>The type of action to be taken.</p>
 */
export interface LifecyclePolicyRuleAction {
  /**
   * @public
   * <p>The type of action to be taken.</p>
   */
  type?: ImageActionType;
}

/**
 * @public
 * <p>The result of the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewResult {
  /**
   * @public
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];

  /**
   * @public
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * @public
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository.</p>
   */
  imagePushedAt?: Date;

  /**
   * @public
   * <p>The type of action to be taken.</p>
   */
  action?: LifecyclePolicyRuleAction;

  /**
   * @public
   * <p>The priority of the applied rule.</p>
   */
  appliedRulePriority?: number;
}

/**
 * @public
 * @enum
 */
export const LifecyclePolicyPreviewStatus = {
  COMPLETE: "COMPLETE",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type LifecyclePolicyPreviewStatus =
  (typeof LifecyclePolicyPreviewStatus)[keyof typeof LifecyclePolicyPreviewStatus];

/**
 * @public
 * <p>The summary of the lifecycle policy preview request.</p>
 */
export interface LifecyclePolicyPreviewSummary {
  /**
   * @public
   * <p>The number of expiring images.</p>
   */
  expiringImageTotalCount?: number;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * @public
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus;

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>GetLifecyclePolicyPreview</code> request. When the results of a
   *                 <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The results of the lifecycle policy preview request.</p>
   */
  previewResults?: LifecyclePolicyPreviewResult[];

  /**
   * @public
   * <p>The list of images that is returned as a result of the action.</p>
   */
  summary?: LifecyclePolicyPreviewSummary;
}

/**
 * @public
 * <p>There is no dry run for this repository.</p>
 */
export class LifecyclePolicyPreviewNotFoundException extends __BaseException {
  readonly name: "LifecyclePolicyPreviewNotFoundException" = "LifecyclePolicyPreviewNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyPreviewNotFoundException, __BaseException>) {
    super({
      name: "LifecyclePolicyPreviewNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyPreviewNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetRegistryPolicyRequest {}

/**
 * @public
 */
export interface GetRegistryPolicyResponse {
  /**
   * @public
   * <p>The ID of the registry.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The JSON text of the permissions policy for a registry.</p>
   */
  policyText?: string;
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationRequest {}

/**
 * @public
 * <p>The details of a scanning rule for a private registry.</p>
 */
export interface RegistryScanningRule {
  /**
   * @public
   * <p>The frequency that scans are performed at for a private registry. When the
   *                 <code>ENHANCED</code> scan type is specified, the supported scan frequencies are
   *                 <code>CONTINUOUS_SCAN</code> and <code>SCAN_ON_PUSH</code>. When the
   *                 <code>BASIC</code> scan type is specified, the <code>SCAN_ON_PUSH</code> scan
   *             frequency is supported. If scan on push is not specified, then the <code>MANUAL</code>
   *             scan frequency is set by default.</p>
   */
  scanFrequency: ScanFrequency | undefined;

  /**
   * @public
   * <p>The repository filters associated with the scanning configuration for a private
   *             registry.</p>
   */
  repositoryFilters: ScanningRepositoryFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanType = {
  BASIC: "BASIC",
  ENHANCED: "ENHANCED",
} as const;

/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * <p>The scanning configuration for a private registry.</p>
 */
export interface RegistryScanningConfiguration {
  /**
   * @public
   * <p>The type of scanning configured for the registry.</p>
   */
  scanType?: ScanType;

  /**
   * @public
   * <p>The scanning rules associated with the registry.</p>
   */
  rules?: RegistryScanningRule[];
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationResponse {
  /**
   * @public
   * <p>The ID of the registry.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The scanning configuration for the registry.</p>
   */
  scanningConfiguration?: RegistryScanningConfiguration;
}

/**
 * @public
 */
export interface GetRepositoryPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository with the policy to retrieve.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON repository policy text associated with the repository.</p>
   */
  policyText?: string;
}

/**
 * @public
 */
export interface InitiateLayerUploadRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to which you intend to upload
   *             layers. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to which you intend to upload layers.</p>
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadResponse {
  /**
   * @public
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a>
   *             operations.</p>
   */
  uploadId?: string;

  /**
   * @public
   * <p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>
   */
  partSize?: number;
}

/**
 * @public
 * <p>An object representing a filter on a <a>ListImages</a> operation.</p>
 */
export interface ListImagesFilter {
  /**
   * @public
   * <p>The tag status with which to filter your <a>ListImages</a> results. You can
   *             filter results based on whether they are <code>TAGGED</code> or
   *             <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to list images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository with image IDs to be listed.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The filter key and value with which to filter your <code>ListImages</code>
   *             results.</p>
   */
  filter?: ListImagesFilter;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * @public
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: ImageIdentifier[];

  /**
   * @public
   * <p>The <code>nextToken</code> value to include in a future <code>ListImages</code>
   *             request. When the results of a <code>ListImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             only supported resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
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
 * @public
 * <p>The specified image digest does not match the digest that Amazon ECR calculated for the
 *             image.</p>
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
 * @public
 * <p>The specified image is tagged with a tag that already exists. The repository is
 *             configured for tag immutability.</p>
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
export interface PutImageRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to put the image. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository in which to put the image.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The image manifest corresponding to the image to be uploaded.</p>
   */
  imageManifest: string | undefined;

  /**
   * @public
   * <p>The media type of the image manifest. If you push an image manifest that does not
   *             contain the <code>mediaType</code> field, you must specify the
   *                 <code>imageManifestMediaType</code> in the request.</p>
   */
  imageManifestMediaType?: string;

  /**
   * @public
   * <p>The tag to associate with the image. This parameter is required for images that use
   *             the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
   */
  imageTag?: string;

  /**
   * @public
   * <p>The image digest of the image manifest corresponding to the image.</p>
   */
  imageDigest?: string;
}

/**
 * @public
 */
export interface PutImageResponse {
  /**
   * @public
   * <p>Details of the image uploaded.</p>
   */
  image?: Image;
}

/**
 * @public
 * <p>The manifest list is referencing an image that does not exist.</p>
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
export interface PutImageScanningConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image scanning configuration setting.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository in which to update the image scanning configuration
   *             setting.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The image scanning configuration for the repository. This setting determines whether
   *             images are scanned for known vulnerabilities after being pushed to the
   *             repository.</p>
   */
  imageScanningConfiguration: ImageScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutImageScanningConfigurationResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The image scanning configuration setting for the repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

/**
 * @public
 */
export interface PutImageTagMutabilityRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository in which to update the image tag mutability
   *             settings.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The tag mutability setting for the repository. If <code>MUTABLE</code> is specified,
   *             image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags
   *             within the repository will be immutable which will prevent them from being
   *             overwritten.</p>
   */
  imageTagMutability: ImageTagMutability | undefined;
}

/**
 * @public
 */
export interface PutImageTagMutabilityResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The image tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability;
}

/**
 * @public
 */
export interface PutLifecyclePolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository. If you
   *             do  not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The JSON repository policy text to apply to the repository.</p>
   */
  lifecyclePolicyText: string | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;
}

/**
 * @public
 */
export interface PutRegistryPolicyRequest {
  /**
   * @public
   * <p>The JSON policy text to apply to your registry. The policy text follows the same
   *             format as IAM policy text. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry
   *                 permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryPolicyResponse {
  /**
   * @public
   * <p>The registry ID.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The JSON policy text for your registry.</p>
   */
  policyText?: string;
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationRequest {
  /**
   * @public
   * <p>The scanning type to set for the registry.</p>
   *          <p>When a registry scanning configuration is not defined, by default the
   *                 <code>BASIC</code> scan type is used. When basic scanning is used, you may specify
   *             filters to determine which individual repositories, or all repositories, are scanned
   *             when new images are pushed to those repositories. Alternatively, you can do manual scans
   *             of images with basic scanning.</p>
   *          <p>When the <code>ENHANCED</code> scan type is set, Amazon Inspector provides automated
   *             vulnerability scanning. You may choose between continuous scanning or scan on push and
   *             you may specify filters to determine which individual repositories, or all repositories,
   *             are scanned.</p>
   */
  scanType?: ScanType;

  /**
   * @public
   * <p>The scanning rules to use for the registry. A scanning rule is used to determine which
   *             repository filters are used and at what frequency scanning will occur.</p>
   */
  rules?: RegistryScanningRule[];
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationResponse {
  /**
   * @public
   * <p>The scanning configuration for your registry.</p>
   */
  registryScanningConfiguration?: RegistryScanningConfiguration;
}

/**
 * @public
 */
export interface PutReplicationConfigurationRequest {
  /**
   * @public
   * <p>An object representing the replication configuration for a registry.</p>
   */
  replicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutReplicationConfigurationResponse {
  /**
   * @public
   * <p>The contents of the replication configuration for the registry.</p>
   */
  replicationConfiguration?: ReplicationConfiguration;
}

/**
 * @public
 */
export interface SetRepositoryPolicyRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The JSON repository policy text to apply to the repository. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR repository
   *                 policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;

  /**
   * @public
   * <p>If the policy you are attempting to set on a repository policy would prevent you from
   *             setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental
   *             repository lock outs.</p>
   */
  force?: boolean;
}

/**
 * @public
 */
export interface SetRepositoryPolicyResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON repository policy text applied to the repository.</p>
   */
  policyText?: string;
}

/**
 * @public
 */
export interface StartImageScanRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to start an image scan request. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository that contains the images to scan.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId: ImageIdentifier | undefined;
}

/**
 * @public
 */
export interface StartImageScanResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * @public
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;
}

/**
 * @public
 * <p>The image is of a type that cannot be scanned.</p>
 */
export class UnsupportedImageTypeException extends __BaseException {
  readonly name: "UnsupportedImageTypeException" = "UnsupportedImageTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedImageTypeException, __BaseException>) {
    super({
      name: "UnsupportedImageTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedImageTypeException.prototype);
  }
}

/**
 * @public
 * <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 */
export class LifecyclePolicyPreviewInProgressException extends __BaseException {
  readonly name: "LifecyclePolicyPreviewInProgressException" = "LifecyclePolicyPreviewInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyPreviewInProgressException, __BaseException>) {
    super({
      name: "LifecyclePolicyPreviewInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyPreviewInProgressException.prototype);
  }
}

/**
 * @public
 */
export interface StartLifecyclePolicyPreviewRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to be evaluated.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The policy to be evaluated against. If you do not specify a policy, the current policy
   *             for the repository is used.</p>
   */
  lifecyclePolicyText?: string;
}

/**
 * @public
 */
export interface StartLifecyclePolicyPreviewResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * @public
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 */
export class InvalidLayerPartException extends __BaseException {
  readonly name: "InvalidLayerPartException" = "InvalidLayerPartException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The registry ID associated with the exception.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the exception.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The upload ID associated with the exception.</p>
   */
  uploadId?: string;

  /**
   * @public
   * <p>The last valid byte received from the layer part upload that is associated with the
   *             exception.</p>
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
 * @public
 */
export interface UploadLayerPartRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the registry to which you are uploading layer
   *             parts. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The name of the repository to which you are uploading layer parts.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the layer part upload.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The position of the first byte of the layer part witin the overall image layer.</p>
   */
  partFirstByte: number | undefined;

  /**
   * @public
   * <p>The position of the last byte of the layer part within the overall image layer.</p>
   */
  partLastByte: number | undefined;

  /**
   * @public
   * <p>The base64-encoded layer part payload.</p>
   */
  layerPartBlob: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UploadLayerPartResponse {
  /**
   * @public
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * @public
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The upload ID associated with the request.</p>
   */
  uploadId?: string;

  /**
   * @public
   * <p>The integer value of the last byte received in the request.</p>
   */
  lastByteReceived?: number;
}
