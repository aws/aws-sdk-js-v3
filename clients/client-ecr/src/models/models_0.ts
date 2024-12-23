// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECRServiceException as __BaseException } from "./ECRServiceException";

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layers to
   *             check. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that is associated with the image layers to check.</p>
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
 * <p>An object representing an Amazon ECR image layer failure.</p>
 * @public
 */
export interface LayerFailure {
  /**
   * <p>The layer digest associated with the failure.</p>
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * <p>The failure code associated with the failure.</p>
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
 * <p>An object representing an Amazon ECR image layer.</p>
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
   *                 <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *                 <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   * @public
   */
  mediaType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityResponse {
  /**
   * <p>A list of image layer objects corresponding to the image layer references in the
   *             request.</p>
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
 *             request.</p>
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
 * <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
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
 * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
 * @public
 */
export interface ImageIdentifier {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The tag used for the image.</p>
   * @public
   */
  imageTag?: string | undefined;
}

/**
 * <p>Deletes specified images within a specified repository. Images are specified with
 *             either the <code>imageTag</code> or <code>imageDigest</code>.</p>
 * @public
 */
export interface BatchDeleteImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image to delete.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository that contains the image to delete.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
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
  UpstreamAccessDenied: "UpstreamAccessDenied",
  UpstreamTooManyRequests: "UpstreamTooManyRequests",
  UpstreamUnavailable: "UpstreamUnavailable",
} as const;

/**
 * @public
 */
export type ImageFailureCode = (typeof ImageFailureCode)[keyof typeof ImageFailureCode];

/**
 * <p>An object representing an Amazon ECR image failure.</p>
 * @public
 */
export interface ImageFailure {
  /**
   * <p>The image ID associated with the failure.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The code associated with the failure.</p>
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
export interface BatchGetImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the images to
   *             describe. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository that contains the images to describe.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to describe. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
   * @public
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * <p>The accepted media types for the request.</p>
   *          <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> |
   *                 <code>application/vnd.docker.distribution.manifest.v2+json</code> |
   *                 <code>application/vnd.oci.image.manifest.v1+json</code>
   *          </p>
   * @public
   */
  acceptedMediaTypes?: string[] | undefined;
}

/**
 * <p>An object representing an Amazon ECR image.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The Amazon Web Services account ID associated with the registry containing the image.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository associated with the image.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An object containing the image tag and image digest associated with an image.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The image manifest associated with the image.</p>
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
 * @public
 */
export interface BatchGetImageResponse {
  /**
   * <p>A list of image objects corresponding to the image references in the request.</p>
   * @public
   */
  images?: Image[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: ImageFailure[] | undefined;
}

/**
 * <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
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
 * <p>The image or images were unable to be pulled using the pull through cache rule. This
 *             is usually caused because of an issue with the Secrets Manager secret containing the credentials
 *             for the upstream registry.</p>
 * @public
 */
export class UnableToGetUpstreamImageException extends __BaseException {
  readonly name: "UnableToGetUpstreamImageException" = "UnableToGetUpstreamImageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToGetUpstreamImageException, __BaseException>) {
    super({
      name: "UnableToGetUpstreamImageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToGetUpstreamImageException.prototype);
  }
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationRequest {
  /**
   * <p>One or more repository names to get the scanning configuration for.</p>
   * @public
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
 * <p>The details about any failures associated with the scanning configuration of a
 *             repository.</p>
 * @public
 */
export interface RepositoryScanningConfigurationFailure {
  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The failure code.</p>
   * @public
   */
  failureCode?: ScanningConfigurationFailureCode | undefined;

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
export const ScanningRepositoryFilterType = {
  WILDCARD: "WILDCARD",
} as const;

/**
 * @public
 */
export type ScanningRepositoryFilterType =
  (typeof ScanningRepositoryFilterType)[keyof typeof ScanningRepositoryFilterType];

/**
 * <p>The details of a scanning repository filter. For more information on how to use
 *             filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using
 *                 filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @public
 */
export interface ScanningRepositoryFilter {
  /**
   * <p>The filter to use when scanning.</p>
   * @public
   */
  filter: string | undefined;

  /**
   * <p>The type associated with the filter.</p>
   * @public
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
 * <p>The details of the scanning configuration for a repository.</p>
 * @public
 */
export interface RepositoryScanningConfiguration {
  /**
   * <p>The ARN of the repository.</p>
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>Whether or not scan on push is configured for the repository.</p>
   * @public
   */
  scanOnPush?: boolean | undefined;

  /**
   * <p>The scan frequency for the repository.</p>
   * @public
   */
  scanFrequency?: ScanFrequency | undefined;

  /**
   * <p>The scan filters applied to the repository.</p>
   * @public
   */
  appliedScanFilters?: ScanningRepositoryFilter[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationResponse {
  /**
   * <p>The scanning configuration for the requested repositories.</p>
   * @public
   */
  scanningConfigurations?: RepositoryScanningConfiguration[] | undefined;

  /**
   * <p>Any failures associated with the call.</p>
   * @public
   */
  failures?: RepositoryScanningConfigurationFailure[] | undefined;
}

/**
 * <p>There was an exception validating this request.</p>
 * @public
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
   * <p>The Amazon Web Services account ID associated with the registry to which to upload layers.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to associate with the image layer.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the image layer.</p>
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
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID associated with the layer.</p>
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
 * <p>The specified layer upload does not contain any layer parts.</p>
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
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
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
 * <p>The operation failed due to a KMS exception.</p>
 * @public
 */
export class KmsException extends __BaseException {
  readonly name: "KmsException" = "KmsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code returned by KMS.</p>
   * @public
   */
  kmsError?: string | undefined;

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
 * <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
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
 * @public
 * @enum
 */
export const UpstreamRegistry = {
  AzureContainerRegistry: "azure-container-registry",
  DockerHub: "docker-hub",
  EcrPublic: "ecr-public",
  GitHubContainerRegistry: "github-container-registry",
  GitLabContainerRegistry: "gitlab-container-registry",
  K8s: "k8s",
  Quay: "quay",
} as const;

/**
 * @public
 */
export type UpstreamRegistry = (typeof UpstreamRegistry)[keyof typeof UpstreamRegistry];

/**
 * @public
 */
export interface CreatePullThroughCacheRuleRequest {
  /**
   * <p>The repository name prefix to use when caching images from the source registry.</p>
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * <p>The registry URL of the upstream public registry to use as the source for the pull
   *             through cache rule. The following is the syntax to use for each supported upstream
   *             registry.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon ECR Public (<code>ecr-public</code>) - <code>public.ecr.aws</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Docker Hub (<code>docker-hub</code>) -
   *                     <code>registry-1.docker.io</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Quay (<code>quay</code>) - <code>quay.io</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Kubernetes (<code>k8s</code>) - <code>registry.k8s.io</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>GitHub Container Registry (<code>github-container-registry</code>) -
   *                         <code>ghcr.io</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Microsoft Azure Container Registry (<code>azure-container-registry</code>) -
   *                         <code><custom>.azurecr.io</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  upstreamRegistryUrl: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry to create the pull through cache
   *             rule for. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the upstream registry.</p>
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that identifies the credentials to authenticate
   *             to the upstream registry.</p>
   * @public
   */
  credentialArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePullThroughCacheRuleResponse {
  /**
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the pull through cache rule was
   *             created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the upstream registry associated with the pull through cache rule.</p>
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache
   *             rule.</p>
   * @public
   */
  credentialArn?: string | undefined;
}

/**
 * <p>A pull through cache rule with these settings already exists for the private
 *             registry.</p>
 * @public
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
 * <p>The ARN of the secret specified in the pull through cache rule was not found. Update
 *             the pull through cache rule with a valid secret ARN and try again.</p>
 * @public
 */
export class SecretNotFoundException extends __BaseException {
  readonly name: "SecretNotFoundException" = "SecretNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecretNotFoundException, __BaseException>) {
    super({
      name: "SecretNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecretNotFoundException.prototype);
  }
}

/**
 * <p>The secret is unable to be accessed. Verify the resource permissions for the secret
 *             and try again.</p>
 * @public
 */
export class UnableToAccessSecretException extends __BaseException {
  readonly name: "UnableToAccessSecretException" = "UnableToAccessSecretException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToAccessSecretException, __BaseException>) {
    super({
      name: "UnableToAccessSecretException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToAccessSecretException.prototype);
  }
}

/**
 * <p>The secret is accessible but is unable to be decrypted. Verify the resource
 *             permisisons and try again.</p>
 * @public
 */
export class UnableToDecryptSecretValueException extends __BaseException {
  readonly name: "UnableToDecryptSecretValueException" = "UnableToDecryptSecretValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToDecryptSecretValueException, __BaseException>) {
    super({
      name: "UnableToDecryptSecretValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToDecryptSecretValueException.prototype);
  }
}

/**
 * <p>The specified upstream registry isn't supported.</p>
 * @public
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
  KMS_DSSE: "KMS_DSSE",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>The encryption configuration for the repository. This determines how the contents of
 *             your repository are encrypted at rest.</p>
 *          <p>By default, when no encryption configuration is set or the <code>AES256</code>
 *             encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption
 *             keys which encrypts your data at rest using an AES256 encryption algorithm. This does
 *             not require any action on your part.</p>
 *          <p>For more control over the encryption of the contents of your repository, you can use
 *             server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your
 *             images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at
 *                 rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The encryption type to use.</p>
   *          <p>If you use the <code>KMS</code> encryption type, the contents of the repository will
   *             be encrypted using server-side encryption with Key Management Service key stored in KMS. When you
   *             use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key
   *             for Amazon ECR, or specify your own KMS key, which you already created.</p>
   *          <p>If you use the <code>KMS_DSSE</code> encryption type, the contents of the repository
   *             will be encrypted with two layers of encryption using server-side encryption with the
   *             KMS Management Service key stored in KMS. Similar to the <code>KMS</code> encryption
   *             type, you can either use the default Amazon Web Services managed KMS key for Amazon ECR, or specify your
   *             own KMS key, which you've already created. </p>
   *          <p>If you use the <code>AES256</code> encryption type, Amazon ECR uses server-side encryption
   *             with Amazon S3-managed encryption keys which encrypts the images in the repository using an
   *             AES256 encryption algorithm.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at
   *                 rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>If you use the <code>KMS</code> encryption type, specify the KMS key to use for
   *             encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key
   *             must exist in the same Region as the repository. If no key is specified, the default
   *             Amazon Web Services managed KMS key for Amazon ECR will be used.</p>
   * @public
   */
  kmsKey?: string | undefined;
}

/**
 * <p>The image scanning configuration for a repository.</p>
 * @public
 */
export interface ImageScanningConfiguration {
  /**
   * <p>The setting that determines whether images are scanned after being pushed to a
   *             repository. If set to <code>true</code>, images will be scanned after being pushed. If
   *             this parameter is not specified, it will default to <code>false</code> and images will
   *             not be scanned unless a scan is manually started with the <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html">API_StartImageScan</a> API.</p>
   * @public
   */
  scanOnPush?: boolean | undefined;
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
 * <p>The metadata to apply to a resource to help you categorize and organize them. Each tag
 *             consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A <code>key</code> is a general label
   *             that acts like a category for more specific tag values.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A <code>value</code> acts as a descriptor within a tag category (key).</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to create the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name to use for the repository. The repository name may be specified on its own
   *             (such as <code>nginx-web-app</code>) or it can be prepended with a namespace to group
   *             the repository into a category (such as <code>project-a/nginx-web-app</code>).</p>
   *          <p>The repository name must start with a letter and can only contain lowercase letters,
   *             numbers, hyphens, underscores, and forward slashes.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The metadata that you apply to the repository to help you categorize and organize
   *             them. Each tag consists of a key and an optional value, both of which you define.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of <code>MUTABLE</code> will be used which will allow image tags to be
   *             overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * <p>The image scanning configuration for the repository. This determines whether images
   *             are scanned for known vulnerabilities after being pushed to the repository.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * <p>An object representing a repository.</p>
 * @public
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the
   *     repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name.
   *     For example, <code>arn:aws:ecr:region:012345678910:repository-namespace/repository-name</code>.</p>
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.</p>
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
   *             and <code>pull</code> operations.</p>
   * @public
   */
  repositoryUri?: string | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The tag mutability setting for the repository.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * <p>The image scanning configuration for a repository.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
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
}

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
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
 *             can be applied to a repository is 50.</p>
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
 * @enum
 */
export const RCTAppliedFor = {
  PULL_THROUGH_CACHE: "PULL_THROUGH_CACHE",
  REPLICATION: "REPLICATION",
} as const;

/**
 * @public
 */
export type RCTAppliedFor = (typeof RCTAppliedFor)[keyof typeof RCTAppliedFor];

/**
 * <p>The encryption configuration to associate with the repository creation
 *             template.</p>
 * @public
 */
export interface EncryptionConfigurationForRepositoryCreationTemplate {
  /**
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
   *             AES256 encryption algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Protecting data using
   *                 server-side encryption with Amazon S3-managed encryption keys (SSE-S3)</a> in the
   *                 <i>Amazon Simple Storage Service Console Developer Guide</i>.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>If you use the <code>KMS</code> encryption type, specify the KMS key to use for
   *             encryption. The full ARN of the KMS key must be specified. The key must exist in the
   *             same Region as the repository. If no key is specified, the default Amazon Web Services managed KMS
   *             key for Amazon ECR will be used.</p>
   * @public
   */
  kmsKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryCreationTemplateRequest {
  /**
   * <p>The repository namespace prefix to associate with the template. All repositories
   *             created using this namespace prefix will have the settings defined in this template
   *             applied. For example, a prefix of <code>prod</code> would apply to all repositories
   *             beginning with <code>prod/</code>. Similarly, a prefix of <code>prod/team</code> would
   *             apply to all repositories beginning with <code>prod/team/</code>.</p>
   *          <p>To apply a template to all repositories in your registry that don't have an associated
   *             creation template, you can use <code>ROOT</code> as the prefix.</p>
   *          <important>
   *             <p>There is always an assumed <code>/</code> applied to the end of the prefix. If you
   *                 specify <code>ecr-public</code> as the prefix, Amazon ECR treats that as
   *                     <code>ecr-public/</code>. When using a pull through cache rule, the repository
   *                 prefix you specify during rule creation is what you should specify as your
   *                 repository creation template prefix as well.</p>
   *          </important>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>A description for the repository creation template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The encryption configuration to use for repositories created using the
   *             template.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * <p>The metadata to apply to the repository to help you categorize and organize. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of <code>MUTABLE</code> will be used which will allow image tags to be
   *             overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * <p>The repository policy to apply to repositories created using the template. A
   *             repository policy is a permissions policy associated with a repository to control access
   *             permissions. </p>
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * <p>The lifecycle policy to use for repositories created using the template.</p>
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * <p>A list of enumerable strings representing the Amazon ECR repository creation scenarios that
   *             this template will apply towards. The two supported scenarios are
   *                 <code>PULL_THROUGH_CACHE</code> and <code>REPLICATION</code>
   *          </p>
   * @public
   */
  appliedFor: RCTAppliedFor[] | undefined;

  /**
   * <p>The ARN of the role to be assumed by Amazon ECR. This role must be in the same account as
   *             the registry that you are configuring. Amazon ECR will assume your supplied role when the
   *             customRoleArn is specified. When this field isn't specified, Amazon ECR will use the
   *             service-linked role for the repository creation template.</p>
   * @public
   */
  customRoleArn?: string | undefined;
}

/**
 * <p>The details of the repository creation template associated with the request.</p>
 * @public
 */
export interface RepositoryCreationTemplate {
  /**
   * <p>The repository namespace prefix associated with the repository creation
   *             template.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>The description associated with the repository creation template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The encryption configuration associated with the repository creation template.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * <p>The metadata to apply to the repository to help you categorize and organize. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of MUTABLE will be used which will allow image tags to be overwritten.
   *             If IMMUTABLE is specified, all image tags within the repository will be immutable which
   *             will prevent them from being overwritten.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * <p>he repository policy to apply to repositories created using the template. A repository
   *             policy is a permissions policy associated with a repository to control access
   *             permissions. </p>
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * <p>The lifecycle policy to use for repositories created using the template.</p>
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * <p>A list of enumerable Strings representing the repository creation scenarios that this
   *             template will apply towards. The two supported scenarios are PULL_THROUGH_CACHE and
   *             REPLICATION</p>
   * @public
   */
  appliedFor?: RCTAppliedFor[] | undefined;

  /**
   * <p>The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role
   *             when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the
   *             service-linked role for the repository creation template.</p>
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the repository creation template
   *             was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the repository creation template
   *             was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryCreationTemplateResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The details of the repository creation template associated with the request.</p>
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * <p>The repository creation template already exists. Specify a unique prefix and try
 *             again.</p>
 * @public
 */
export class TemplateAlreadyExistsException extends __BaseException {
  readonly name: "TemplateAlreadyExistsException" = "TemplateAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplateAlreadyExistsException, __BaseException>) {
    super({
      name: "TemplateAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplateAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON lifecycle policy text.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   * @public
   */
  lastEvaluatedAt?: Date | undefined;
}

/**
 * <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 * @public
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
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule to
   *             delete.</p>
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the pull through cache
   *             rule. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePullThroughCacheRuleResponse {
  /**
   * <p>The Amazon ECR repository prefix associated with the request.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * <p>The timestamp associated with the pull through cache rule.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache
   *             rule.</p>
   * @public
   */
  credentialArn?: string | undefined;
}

/**
 * <p>The pull through cache rule was not found. Specify a valid pull through cache rule and
 *             try again.</p>
 * @public
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
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The contents of the registry permissions policy that was deleted.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * <p>The registry doesn't have an associated registry policy.</p>
 * @public
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
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository to
   *             delete. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to delete.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>If true, deleting the repository force deletes the contents of the repository. If
   *             false, the repository must be empty before attempting to delete it.</p>
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
 *             you must force the deletion with the <code>force</code> parameter.</p>
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
export interface DeleteRepositoryCreationTemplateRequest {
  /**
   * <p>The repository namespace prefix associated with the repository creation
   *             template.</p>
   * @public
   */
  prefix: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryCreationTemplateResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The details of the repository creation template that was deleted.</p>
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * <p>The specified repository creation template can't be found. Verify the registry ID and
 *             prefix and try again.</p>
 * @public
 */
export class TemplateNotFoundException extends __BaseException {
  readonly name: "TemplateNotFoundException" = "TemplateNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplateNotFoundException, __BaseException>) {
    super({
      name: "TemplateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplateNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository policy
   *             to delete. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that is associated with the repository policy to
   *             delete.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
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
 * <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
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
export interface DescribeImageReplicationStatusRequest {
  /**
   * <p>The name of the repository that the image is in.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;
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
 * <p>The status of the replication process for an image.</p>
 * @public
 */
export interface ImageReplicationStatus {
  /**
   * <p>The destination Region for the image replication.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry to which the image belongs.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The image replication status.</p>
   * @public
   */
  status?: ReplicationStatus | undefined;

  /**
   * <p>The failure code for a replication that has failed.</p>
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageReplicationStatusResponse {
  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The replication status details for the images in the specified repository.</p>
   * @public
   */
  replicationStatuses?: ImageReplicationStatus[] | undefined;
}

/**
 * <p>The image requested does not exist in the specified repository.</p>
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
 * <p>An object representing a filter on a <a>DescribeImages</a>
 *             operation.</p>
 * @public
 */
export interface DescribeImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>DescribeImages</a> results. You
   *             can filter results based on whether they are <code>TAGGED</code> or
   *                 <code>UNTAGGED</code>.</p>
   * @public
   */
  tagStatus?: TagStatus | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe images. If you do not specify a registry, the default registry is assumed.</p>
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
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify images with <code>imageIds</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter key and value with which to filter your <code>DescribeImages</code>
   *             results.</p>
   * @public
   */
  filter?: DescribeImagesFilter | undefined;
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
 * <p>A summary of the last completed image scan.</p>
 * @public
 */
export interface ImageScanFindingsSummary {
  /**
   * <p>The time of the last completed image scan.</p>
   * @public
   */
  imageScanCompletedAt?: Date | undefined;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   * @public
   */
  vulnerabilitySourceUpdatedAt?: Date | undefined;

  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   * @public
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>> | undefined;
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
 * <p>The current status of an image scan.</p>
 * @public
 */
export interface ImageScanStatus {
  /**
   * <p>The current state of an image scan.</p>
   * @public
   */
  status?: ScanStatus | undefined;

  /**
   * <p>The description of the image scan status.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>An object that describes an image returned by a <a>DescribeImages</a>
 *             operation.</p>
 * @public
 */
export interface ImageDetail {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which this image belongs.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to which this image belongs.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The list of tags associated with this image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The size, in bytes, of the image in the repository.</p>
   *          <p>If the image is a manifest list, this will be the max size of all manifests in the
   *             list.</p>
   *          <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
   *                 before pushing them to a V2 Docker registry. The output of the <code>docker
   *                     images</code> command shows the uncompressed image size, so it may return a
   *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
   *          </note>
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository. </p>
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * <p>The current state of the scan.</p>
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;

  /**
   * <p>A summary of the last completed image scan.</p>
   * @public
   */
  imageScanFindingsSummary?: ImageScanFindingsSummary | undefined;

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

  /**
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
   * @public
   */
  lastRecordedPullTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResponse {
  /**
   * <p>A list of <a>ImageDetail</a> objects that contain data about the
   *             image.</p>
   * @public
   */
  imageDetails?: ImageDetail[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeImages</code>
   *             request. When the results of a <code>DescribeImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageScanFindingsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository for the image for which to describe the scan findings.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImageScanFindings</code> request where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value. This value
   *             is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The CVSS score for a finding.</p>
 * @public
 */
export interface CvssScore {
  /**
   * <p>The base CVSS score used for the finding.</p>
   * @public
   */
  baseScore?: number | undefined;

  /**
   * <p>The vector string of the CVSS score.</p>
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * <p>The source of the CVSS score.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The version of CVSS used for the score.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Information on the vulnerable package identified by a finding.</p>
 * @public
 */
export interface VulnerablePackage {
  /**
   * <p>The architecture of the vulnerable package.</p>
   * @public
   */
  arch?: string | undefined;

  /**
   * <p>The epoch of the vulnerable package.</p>
   * @public
   */
  epoch?: number | undefined;

  /**
   * <p>The file path of the vulnerable package.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The name of the vulnerable package.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The package manager of the vulnerable package.</p>
   * @public
   */
  packageManager?: string | undefined;

  /**
   * <p>The release of the vulnerable package.</p>
   * @public
   */
  release?: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.</p>
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * <p>The version of the vulnerable package.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   * @public
   */
  fixedInVersion?: string | undefined;
}

/**
 * <p>Information about a package vulnerability finding.</p>
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * <p>An object that contains details about the CVSS score of a finding.</p>
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>The source of the vulnerability information.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>A URL to the source of the vulnerability information.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The date and time that this vulnerability was first added to the vendor's
   *             database.</p>
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * <p>The severity the vendor has given to this vulnerability type.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * <p>The ID given to this vulnerability.</p>
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * <p>The packages impacted by this vulnerability.</p>
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;
}

/**
 * <p>Details about the recommended course of action to remediate the finding.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The URL address to the CVE remediation recommendations.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The recommended course of action to remediate the finding.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Information on how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to
   *             remediate the finding.</p>
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * <p>The image details of the Amazon ECR container image.</p>
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * <p>The architecture of the Amazon ECR container image.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The image author of the Amazon ECR container image.</p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p>The image hash of the Amazon ECR container image.</p>
   * @public
   */
  imageHash?: string | undefined;

  /**
   * <p>The image tags attached to the Amazon ECR container image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The platform of the Amazon ECR container image.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * <p>The registry the Amazon ECR container image belongs to.</p>
   * @public
   */
  registry?: string | undefined;

  /**
   * <p>The name of the repository the Amazon ECR container image resides in.</p>
   * @public
   */
  repositoryName?: string | undefined;
}

/**
 * <p>Contains details about the resource involved in the finding.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>An object that contains details about the Amazon ECR container image involved in the
   *             finding.</p>
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;
}

/**
 * <p>Details about the resource involved in a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>An object that contains details about the resource involved in a finding.</p>
   * @public
   */
  details?: ResourceDetails | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The tags attached to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>Details on adjustments Amazon Inspector made to the CVSS score for a finding.</p>
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * <p>The metric used to adjust the CVSS score.</p>
   * @public
   */
  metric?: string | undefined;

  /**
   * <p>The reason the CVSS score has been adjustment.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Information about the CVSS score.</p>
 * @public
 */
export interface CvssScoreDetails {
  /**
   * <p>An object that contains details about adjustment Amazon Inspector made to the CVSS score.</p>
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;

  /**
   * <p>The CVSS score.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>The source for the CVSS score.</p>
   * @public
   */
  scoreSource?: string | undefined;

  /**
   * <p>The vector for the CVSS score.</p>
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * <p>The CVSS version used in scoring.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 * @public
 */
export interface ScoreDetails {
  /**
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   * @public
   */
  cvss?: CvssScoreDetails | undefined;
}

/**
 * <p>The details of an enhanced image scan. This is returned when enhanced scanning is
 *             enabled for your private registry.</p>
 * @public
 */
export interface EnhancedImageScanFinding {
  /**
   * <p>The Amazon Web Services account ID associated with the image.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   * @public
   */
  findingArn?: string | undefined;

  /**
   * <p>The date and time that the finding was first observed.</p>
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * <p>The date and time that the finding was last observed.</p>
   * @public
   */
  lastObservedAt?: Date | undefined;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * <p>Contains information on the resources involved in a finding.</p>
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * <p>The Amazon Inspector score given to the finding.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   * @public
   */
  scoreDetails?: ScoreDetails | undefined;

  /**
   * <p>The severity of the finding.</p>
   * @public
   */
  severity?: string | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The type of the finding.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The date and time the finding was last updated at.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be
   *                 <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>. A <code>PARTIAL</code>
   *             fix means that some, but not all, of the packages identified in the finding have fixes
   *             available through updated versions.</p>
   * @public
   */
  fixAvailable?: string | undefined;

  /**
   * <p>If a finding discovered in your environment has an exploit available.</p>
   * @public
   */
  exploitAvailable?: string | undefined;
}

/**
 * <p>This data type is used in the <a>ImageScanFinding</a> data type.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The attribute key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains information about an image scan finding.</p>
 * @public
 */
export interface ImageScanFinding {
  /**
   * <p>The name associated with the finding, usually a CVE number.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A link containing additional details about the security vulnerability.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The finding severity.</p>
   * @public
   */
  severity?: FindingSeverity | undefined;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * <p>The details of an image scan.</p>
 * @public
 */
export interface ImageScanFindings {
  /**
   * <p>The time of the last completed image scan.</p>
   * @public
   */
  imageScanCompletedAt?: Date | undefined;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   * @public
   */
  vulnerabilitySourceUpdatedAt?: Date | undefined;

  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   * @public
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>> | undefined;

  /**
   * <p>The findings from the image scan.</p>
   * @public
   */
  findings?: ImageScanFinding[] | undefined;

  /**
   * <p>Details about the enhanced scan findings from Amazon Inspector.</p>
   * @public
   */
  enhancedFindings?: EnhancedImageScanFinding[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageScanFindingsResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The current state of the scan.</p>
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;

  /**
   * <p>The information contained in the image scan findings.</p>
   * @public
   */
  imageScanFindings?: ImageScanFindings | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeImageScanFindings</code> request. When the results of a
   *                 <code>DescribeImageScanFindings</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 * @public
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
   * <p>The Amazon Web Services account ID associated with the registry to return the pull through cache
   *             rules for. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The Amazon ECR repository prefixes associated with the pull through cache rules to return.
   *             If no repository prefix value is specified, all pull through cache rules are
   *             returned.</p>
   * @public
   */
  ecrRepositoryPrefixes?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribePullThroughCacheRulesRequest</code> request where
   *                 <code>maxResults</code> was used and the results exceeded the value of that
   *             parameter. Pagination continues from the end of the previous results that returned the
   *                 <code>nextToken</code> value. This value is null when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of pull through cache rules returned by
   *                 <code>DescribePullThroughCacheRulesRequest</code> in paginated output. When this
   *             parameter is used, <code>DescribePullThroughCacheRulesRequest</code> only returns
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. The remaining results of the initial request can be seen by sending
   *             another <code>DescribePullThroughCacheRulesRequest</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and 1000. If this
   *             parameter is not used, then <code>DescribePullThroughCacheRulesRequest</code> returns up
   *             to 100 results and a <code>nextToken</code> value, if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a pull through cache rule.</p>
 * @public
 */
export interface PullThroughCacheRule {
  /**
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * <p>The date and time the pull through cache was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the registry the pull through cache rule is
   *             associated with.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret associated with the pull through cache rule.</p>
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * <p>The name of the upstream source registry associated with the pull through cache
   *             rule.</p>
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the pull through cache rule was
   *             last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePullThroughCacheRulesResponse {
  /**
   * <p>The details of the pull through cache rules.</p>
   * @public
   */
  pullThroughCacheRules?: PullThroughCacheRule[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribePullThroughCacheRulesRequest</code> request. When the results of a
   *                 <code>DescribePullThroughCacheRulesRequest</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {}

/**
 * <p>An array of objects representing the destination for a replication rule.</p>
 * @public
 */
export interface ReplicationDestination {
  /**
   * <p>The Region to replicate to.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Amazon ECR private registry to replicate to. When configuring
   *             cross-Region replication within your own registry, specify your own account ID.</p>
   * @public
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
 * <p>The filter settings used with image replication. Specifying a repository filter to a
 *             replication rule provides a method for controlling which repositories in a private
 *             registry are replicated. If no filters are added, the contents of all repositories are
 *             replicated.</p>
 * @public
 */
export interface RepositoryFilter {
  /**
   * <p>The repository filter details. When the <code>PREFIX_MATCH</code> filter type is
   *             specified, this value is required and should be the repository name prefix to configure
   *             replication for.</p>
   * @public
   */
  filter: string | undefined;

  /**
   * <p>The repository filter type. The only supported value is <code>PREFIX_MATCH</code>,
   *             which is a repository name prefix specified with the <code>filter</code>
   *             parameter.</p>
   * @public
   */
  filterType: RepositoryFilterType | undefined;
}

/**
 * <p>An array of objects representing the replication destinations and repository filters
 *             for a replication configuration.</p>
 * @public
 */
export interface ReplicationRule {
  /**
   * <p>An array of objects representing the destination for a replication rule.</p>
   * @public
   */
  destinations: ReplicationDestination[] | undefined;

  /**
   * <p>An array of objects representing the filters for a replication rule. Specifying a
   *             repository filter for a replication rule provides a method for controlling which
   *             repositories in a private registry are replicated.</p>
   * @public
   */
  repositoryFilters?: RepositoryFilter[] | undefined;
}

/**
 * <p>The replication configuration for a registry.</p>
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>An array of objects representing the replication destinations and repository filters
   *             for a replication configuration.</p>
   * @public
   */
  rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The replication configuration for the registry.</p>
   * @public
   */
  replicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoriesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repositories to be
   *             described. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all
   *             repositories in a registry are described.</p>
   * @public
   */
  repositoryNames?: string[] | undefined;

  /**
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
   * @public
   */
  nextToken?: string | undefined;

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
   *                 <code>DescribeRepositories</code> request. When the results of a
   *                 <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryCreationTemplatesRequest {
  /**
   * <p>The repository namespace prefixes associated with the repository creation templates to
   *             describe. If this value is not specified, all repository creation templates are
   *             returned.</p>
   * @public
   */
  prefixes?: string[] | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeRepositoryCreationTemplates</code> request where
   *                 <code>maxResults</code> was used and the results exceeded the value of that
   *             parameter. Pagination continues from the end of the previous results that returned the
   *                 <code>nextToken</code> value. This value is <code>null</code> when there are no more
   *             results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of repository results returned by
   *                 <code>DescribeRepositoryCreationTemplatesRequest</code> in paginated output. When
   *             this parameter is used, <code>DescribeRepositoryCreationTemplatesRequest</code> only
   *             returns <code>maxResults</code> results in a single page along with a
   *                 <code>nextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another
   *                 <code>DescribeRepositoryCreationTemplatesRequest</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and
   *             1000. If this parameter is not used, then
   *                 <code>DescribeRepositoryCreationTemplatesRequest</code> returns up to
   *             100 results and a <code>nextToken</code> value, if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryCreationTemplatesResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The details of the repository creation templates.</p>
   * @public
   */
  repositoryCreationTemplates?: RepositoryCreationTemplate[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeRepositoryCreationTemplates</code> request. When the results of a
   *                 <code>DescribeRepositoryCreationTemplates</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingRequest {
  /**
   * <p>The name of the account setting, such as <code>BASIC_SCAN_TYPE_VERSION</code> or
   *                 <code>REGISTRY_POLICY_SCOPE</code>. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingResponse {
  /**
   * <p>Retrieves the name of the account setting.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The setting value for the setting name. The following are valid values for the basic scan
   *             type being used: <code>AWS_NATIVE</code> or <code>CLAIR</code>. The following are valid
   *             values for the registry policy scope being used: <code>V1</code> or
   *             <code>V2</code>.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {
  /**
   * @deprecated
   *
   * <p>A list of Amazon Web Services account IDs that are associated with the registries for which to get
   *             AuthorizationData objects. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryIds?: string[] | undefined;
}

/**
 * <p>An object representing authorization data for an Amazon ECR registry.</p>
 * @public
 */
export interface AuthorizationData {
  /**
   * <p>A base64-encoded string that contains authorization data for the specified Amazon ECR
   *             registry. When the string is decoded, it is presented in the format
   *                 <code>user:password</code> for private registry authentication using <code>docker
   *                 login</code>.</p>
   * @public
   */
  authorizationToken?: string | undefined;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires.
   *             Authorization tokens are valid for 12 hours.</p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>The registry URL to use for this authorization token in a <code>docker login</code>
   *             command. The Amazon ECR registry URL format is
   *         <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example,
   *         <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. </p>
   * @public
   */
  proxyEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenResponse {
  /**
   * <p>A list of authorization token data objects that correspond to the
   *                 <code>registryIds</code> values in the request.</p>
   * @public
   */
  authorizationData?: AuthorizationData[] | undefined;
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layer to
   *             download. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that is associated with the image layer to download.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The digest of the image layer to download.</p>
   * @public
   */
  layerDigest: string | undefined;
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerResponse {
  /**
   * <p>The pre-signed Amazon S3 download URL for the requested layer.</p>
   * @public
   */
  downloadUrl?: string | undefined;

  /**
   * <p>The digest of the image layer to download.</p>
   * @public
   */
  layerDigest?: string | undefined;
}

/**
 * <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 * @public
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
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
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
 * <p>There was an issue getting the upstream layer matching the pull through cache
 *             rule.</p>
 * @public
 */
export class UnableToGetUpstreamLayerException extends __BaseException {
  readonly name: "UnableToGetUpstreamLayerException" = "UnableToGetUpstreamLayerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToGetUpstreamLayerException, __BaseException>) {
    super({
      name: "UnableToGetUpstreamLayerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToGetUpstreamLayerException.prototype);
  }
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON lifecycle policy text.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   * @public
   */
  lastEvaluatedAt?: Date | undefined;
}

/**
 * <p>The filter for the lifecycle policy preview.</p>
 * @public
 */
export interface LifecyclePolicyPreviewFilter {
  /**
   * <p>The tag status of the image.</p>
   * @public
   */
  tagStatus?: TagStatus | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of imageIDs to be included.</p>
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>GetLifecyclePolicyPreviewRequest</code> request where <code>maxResults</code>
   *             was used and the  results exceeded the value of that parameter. Pagination continues
   *             from the end of the  previous results that returned the <code>nextToken</code> value.
   *             This value is  <code>null</code> when there are no more results to return. This option
   *             cannot be used when you specify images with <code>imageIds</code>.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An optional parameter that filters results based on image tag status and all tags, if
   *             tagged.</p>
   * @public
   */
  filter?: LifecyclePolicyPreviewFilter | undefined;
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
 * <p>The type of action to be taken.</p>
 * @public
 */
export interface LifecyclePolicyRuleAction {
  /**
   * <p>The type of action to be taken.</p>
   * @public
   */
  type?: ImageActionType | undefined;
}

/**
 * <p>The result of the lifecycle policy preview.</p>
 * @public
 */
export interface LifecyclePolicyPreviewResult {
  /**
   * <p>The list of tags associated with this image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository.</p>
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * <p>The type of action to be taken.</p>
   * @public
   */
  action?: LifecyclePolicyRuleAction | undefined;

  /**
   * <p>The priority of the applied rule.</p>
   * @public
   */
  appliedRulePriority?: number | undefined;
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
 * <p>The summary of the lifecycle policy preview request.</p>
 * @public
 */
export interface LifecyclePolicyPreviewSummary {
  /**
   * <p>The number of expiring images.</p>
   * @public
   */
  expiringImageTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON lifecycle policy text.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   * @public
   */
  status?: LifecyclePolicyPreviewStatus | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>GetLifecyclePolicyPreview</code> request. When the results of a
   *                 <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The results of the lifecycle policy preview request.</p>
   * @public
   */
  previewResults?: LifecyclePolicyPreviewResult[] | undefined;

  /**
   * <p>The list of images that is returned as a result of the action.</p>
   * @public
   */
  summary?: LifecyclePolicyPreviewSummary | undefined;
}

/**
 * <p>There is no dry run for this repository.</p>
 * @public
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
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The JSON text of the permissions policy for a registry.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationRequest {}

/**
 * <p>The details of a scanning rule for a private registry.</p>
 * @public
 */
export interface RegistryScanningRule {
  /**
   * <p>The frequency that scans are performed at for a private registry. When the
   *                 <code>ENHANCED</code> scan type is specified, the supported scan frequencies are
   *                 <code>CONTINUOUS_SCAN</code> and <code>SCAN_ON_PUSH</code>. When the
   *                 <code>BASIC</code> scan type is specified, the <code>SCAN_ON_PUSH</code> scan
   *             frequency is supported. If scan on push is not specified, then the <code>MANUAL</code>
   *             scan frequency is set by default.</p>
   * @public
   */
  scanFrequency: ScanFrequency | undefined;

  /**
   * <p>The repository filters associated with the scanning configuration for a private
   *             registry.</p>
   * @public
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
 * <p>The scanning configuration for a private registry.</p>
 * @public
 */
export interface RegistryScanningConfiguration {
  /**
   * <p>The type of scanning configured for the registry.</p>
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * <p>The scanning rules associated with the registry.</p>
   * @public
   */
  rules?: RegistryScanningRule[] | undefined;
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The scanning configuration for the registry.</p>
   * @public
   */
  scanningConfiguration?: RegistryScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
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
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy text associated with the repository.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which you intend to upload
   *             layers. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to which you intend to upload layers.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadResponse {
  /**
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a>
   *             operations.</p>
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
 * <p>An object representing a filter on a <a>ListImages</a> operation.</p>
 * @public
 */
export interface ListImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>ListImages</a> results. You can
   *             filter results based on whether they are <code>TAGGED</code> or
   *             <code>UNTAGGED</code>.</p>
   * @public
   */
  tagStatus?: TagStatus | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to list images. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository with image IDs to be listed.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of image results returned by <code>ListImages</code> in paginated
   *             output. When this parameter is used, <code>ListImages</code> only returns
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. The remaining results of the initial request can be seen by sending
   *             another <code>ListImages</code> request with the returned <code>nextToken</code> value.
   *             This value can be between 1 and 1000. If this parameter is
   *             not used, then <code>ListImages</code> returns up to 100 results and a
   *                 <code>nextToken</code> value, if applicable.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter key and value with which to filter your <code>ListImages</code>
   *             results.</p>
   * @public
   */
  filter?: ListImagesFilter | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * <p>The list of image IDs for the requested repository.</p>
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListImages</code>
   *             request. When the results of a <code>ListImages</code> request exceed
   *                 <code>maxResults</code>, this value can be used to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             only supported resource is an Amazon ECR repository.</p>
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
export interface PutAccountSettingRequest {
  /**
   * <p>The name of the account setting, such as <code>BASIC_SCAN_TYPE_VERSION</code> or
   *                 <code>REGISTRY_POLICY_SCOPE</code>. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Setting value that is specified. The following are valid values for the basic scan
   *             type being used: <code>AWS_NATIVE</code> or <code>CLAIR</code>. The following are valid
   *             values for the registry policy scope being used: <code>V1</code> or
   *             <code>V2</code>.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingResponse {
  /**
   * <p>Retrieves the name of the account setting.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Retrieves the value of the specified account setting.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
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
 * <p>The specified image digest does not match the digest that Amazon ECR calculated for the
 *             image.</p>
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
 *             configured for tag immutability.</p>
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
export interface PutImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to put the image. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository in which to put the image.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The image manifest corresponding to the image to be uploaded.</p>
   * @public
   */
  imageManifest: string | undefined;

  /**
   * <p>The media type of the image manifest. If you push an image manifest that does not
   *             contain the <code>mediaType</code> field, you must specify the
   *                 <code>imageManifestMediaType</code> in the request.</p>
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use
   *             the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
   * @public
   */
  imageTag?: string | undefined;

  /**
   * <p>The image digest of the image manifest corresponding to the image.</p>
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
 * <p>The manifest list is referencing an image that does not exist.</p>
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
export interface PutImageScanningConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image scanning configuration setting.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository in which to update the image scanning configuration
   *             setting.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The image scanning configuration for the repository. This setting determines whether
   *             images are scanned for known vulnerabilities after being pushed to the
   *             repository.</p>
   * @public
   */
  imageScanningConfiguration: ImageScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutImageScanningConfigurationResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The image scanning configuration setting for the repository.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutImageTagMutabilityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository in which to update the image tag mutability
   *             settings.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The tag mutability setting for the repository. If <code>MUTABLE</code> is specified,
   *             image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags
   *             within the repository will be immutable which will prevent them from being
   *             overwritten.</p>
   * @public
   */
  imageTagMutability: ImageTagMutability | undefined;
}

/**
 * @public
 */
export interface PutImageTagMutabilityResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The image tag mutability setting for the repository.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository. If you
   *             do  not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to receive the policy.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON repository policy text to apply to the repository.</p>
   * @public
   */
  lifecyclePolicyText: string | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy text.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryPolicyRequest {
  /**
   * <p>The JSON policy text to apply to your registry. The policy text follows the same
   *             format as IAM policy text. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry
   *                 permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   * @public
   */
  policyText: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The JSON policy text for your registry.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationRequest {
  /**
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
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * <p>The scanning rules to use for the registry. A scanning rule is used to determine which
   *             repository filters are used and at what frequency scanning will occur.</p>
   * @public
   */
  rules?: RegistryScanningRule[] | undefined;
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationResponse {
  /**
   * <p>The scanning configuration for your registry.</p>
   * @public
   */
  registryScanningConfiguration?: RegistryScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutReplicationConfigurationRequest {
  /**
   * <p>An object representing the replication configuration for a registry.</p>
   * @public
   */
  replicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutReplicationConfigurationResponse {
  /**
   * <p>The contents of the replication configuration for the registry.</p>
   * @public
   */
  replicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
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
   *                 <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR repository
   *                 policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   * @public
   */
  policyText: string | undefined;

  /**
   * <p>If the policy you are attempting to set on a repository policy would prevent you from
   *             setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental
   *             repository lock outs.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy text applied to the repository.</p>
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface StartImageScanRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to start an image scan request. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository that contains the images to scan.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId: ImageIdentifier | undefined;
}

/**
 * @public
 */
export interface StartImageScanResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An object with identifying information for an image in an Amazon ECR repository.</p>
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * <p>The current state of the scan.</p>
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;
}

/**
 * <p>The image is of a type that cannot be scanned.</p>
 * @public
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
 * <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 * @public
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
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to be evaluated.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The policy to be evaluated against. If you do not specify a policy, the current policy
   *             for the repository is used.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;
}

/**
 * @public
 */
export interface StartLifecyclePolicyPreviewResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The JSON repository policy text.</p>
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   * @public
   */
  status?: LifecyclePolicyPreviewStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.
   *             Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported
   *             resource is an Amazon ECR repository.</p>
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
export interface UpdatePullThroughCacheRuleRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry associated with the pull through
   *             cache rule. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name prefix to use when caching images from the source registry.</p>
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that identifies the credentials to authenticate
   *             to the upstream registry.</p>
   * @public
   */
  credentialArn: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullThroughCacheRuleResponse {
  /**
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The date and time, in JavaScript date format, when the pull through cache rule was
   *             updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache
   *             rule.</p>
   * @public
   */
  credentialArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryCreationTemplateRequest {
  /**
   * <p>The repository namespace prefix that matches an existing repository creation template
   *             in the registry. All repositories created using this namespace prefix will have the
   *             settings defined in this template applied. For example, a prefix of <code>prod</code>
   *             would apply to all repositories beginning with <code>prod/</code>. This includes a
   *             repository named <code>prod/team1</code> as well as a repository named
   *                 <code>prod/repository1</code>.</p>
   *          <p>To apply a template to all repositories in your registry that don't have an associated
   *             creation template, you can use <code>ROOT</code> as the prefix.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>A description for the repository creation template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The encryption configuration to associate with the repository creation
   *             template.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * <p>The metadata to apply to the repository to help you categorize and organize. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
   *             a maximum length of 256 characters.</p>
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * <p>Updates the tag mutability setting for the repository. If this parameter is omitted,
   *             the default setting of <code>MUTABLE</code> will be used which will allow image tags to
   *             be overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * <p>Updates the repository policy created using the template. A repository policy is a
   *             permissions policy associated with a repository to control access permissions. </p>
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * <p>Updates the lifecycle policy associated with the specified repository creation
   *             template.</p>
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * <p>Updates the list of enumerable strings representing the Amazon ECR repository creation
   *             scenarios that this template will apply towards. The two supported scenarios are
   *                 <code>PULL_THROUGH_CACHE</code> and <code>REPLICATION</code>
   *          </p>
   * @public
   */
  appliedFor?: RCTAppliedFor[] | undefined;

  /**
   * <p>The ARN of the role to be assumed by Amazon ECR. This role must be in the same account as
   *             the registry that you are configuring. Amazon ECR will assume your supplied role when the
   *             customRoleArn is specified. When this field isn't specified, Amazon ECR will use the
   *             service-linked role for the repository creation template.</p>
   * @public
   */
  customRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryCreationTemplateResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The details of the repository creation template associated with the request.</p>
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 * @public
 */
export class InvalidLayerPartException extends __BaseException {
  readonly name: "InvalidLayerPartException" = "InvalidLayerPartException";
  readonly $fault: "client" = "client";
  /**
   * <p>The registry ID associated with the exception.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the exception.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID associated with the exception.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The last valid byte received from the layer part upload that is associated with the
   *             exception.</p>
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
 * @public
 */
export interface UploadLayerPartRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which you are uploading layer
   *             parts. If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The name of the repository to which you are uploading layer parts.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The upload ID from a previous <a>InitiateLayerUpload</a> operation to
   *             associate with the layer part upload.</p>
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
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID associated with the request.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The integer value of the last byte received in the request.</p>
   * @public
   */
  lastByteReceived?: number | undefined;
}

/**
 * @public
 */
export interface ValidatePullThroughCacheRuleRequest {
  /**
   * <p>The repository name prefix associated with the pull through cache rule.</p>
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * <p>The registry ID associated with the pull through cache rule.
   *             If you do not specify a registry, the default registry is assumed.</p>
   * @public
   */
  registryId?: string | undefined;
}

/**
 * @public
 */
export interface ValidatePullThroughCacheRuleResponse {
  /**
   * <p>The Amazon ECR repository prefix associated with the pull through cache rule.</p>
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * <p>The registry ID associated with the request.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The upstream registry URL associated with the pull through cache rule.</p>
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache
   *             rule.</p>
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * <p>Whether or not the pull through cache rule was validated. If <code>true</code>, Amazon ECR
   *             was able to reach the upstream registry and authentication was successful. If
   *                 <code>false</code>, there was an issue and validation failed. The
   *                 <code>failure</code> reason indicates the cause.</p>
   * @public
   */
  isValid?: boolean | undefined;

  /**
   * <p>The reason the validation failed. For more details about possible causes and how to
   *             address them, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html">Using pull through cache
   *                 rules</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   * @public
   */
  failure?: string | undefined;
}
