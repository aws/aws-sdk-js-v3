// smithy-typescript generated code
import type {
  ArtifactStatus,
  ArtifactStatusFilter,
  EncryptionType,
  FindingSeverity,
  ImageActionType,
  ImageFailureCode,
  ImageStatus,
  ImageStatusFilter,
  ImageTagMutability,
  ImageTagMutabilityExclusionFilterType,
  LayerAvailability,
  LayerFailureCode,
  LifecyclePolicyPreviewStatus,
  LifecyclePolicyStorageClass,
  LifecyclePolicyTargetStorageClass,
  RCTAppliedFor,
  ReplicationBackfillResultStatus,
  ReplicationBackfillStatus,
  ReplicationStatus,
  RepositoryFilterType,
  ScanFrequency,
  ScanningConfigurationFailureCode,
  ScanningRepositoryFilterType,
  ScanStatus,
  ScanType,
  SigningRepositoryFilterType,
  SigningStatus,
  TagStatus,
  TargetStorageClass,
  UpstreamRegistry,
} from "./enums";

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the image layers to check. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that is associated with the image layers to check.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The digests of the image layers to check.
   *
   * @public
   */
  layerDigests: string[] | undefined;
}

/**
 * An object representing an Amazon ECR image layer failure.
 *
 * @public
 */
export interface LayerFailure {
  /**
   * The layer digest associated with the failure.
   *
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * The failure code associated with the failure.
   *
   * @public
   */
  failureCode?: LayerFailureCode | undefined;

  /**
   * The reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * An object representing an Amazon ECR image layer.
 *
 * @public
 */
export interface Layer {
  /**
   * The `sha256` digest of the image layer.
   *
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * The availability status of the image layer.
   *
   * @public
   */
  layerAvailability?: LayerAvailability | undefined;

  /**
   * The size, in bytes, of the image layer.
   *
   * @public
   */
  layerSize?: number | undefined;

  /**
   * The media type of the layer, such as `application/vnd.docker.image.rootfs.diff.tar.gzip` or `application/vnd.oci.image.layer.v1.tar+gzip`.
   *
   * @public
   */
  mediaType?: string | undefined;
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityResponse {
  /**
   * A list of image layer objects corresponding to the image layer references in the request.
   *
   * @public
   */
  layers?: Layer[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: LayerFailure[] | undefined;
}

/**
 * An object with identifying information for an image in an Amazon ECR repository.
 *
 * @public
 */
export interface ImageIdentifier {
  /**
   * The `sha256` digest of the image manifest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The tag used for the image.
   *
   * @public
   */
  imageTag?: string | undefined;
}

/**
 * Deletes specified images within a specified repository. Images are specified with either the `imageTag` or `imageDigest`.
 *
 * @public
 */
export interface BatchDeleteImageRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the image to delete. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository that contains the image to delete.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * A list of image ID references that correspond to images to delete. The format of the `imageIds` reference is `imageTag=tag` or `imageDigest=digest`.
   *
   * @public
   */
  imageIds: ImageIdentifier[] | undefined;
}

/**
 * An object representing an Amazon ECR image failure.
 *
 * @public
 */
export interface ImageFailure {
  /**
   * The image ID associated with the failure.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The code associated with the failure.
   *
   * @public
   */
  failureCode?: ImageFailureCode | undefined;

  /**
   * The reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImageResponse {
  /**
   * The image IDs of the deleted images.
   *
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: ImageFailure[] | undefined;
}

/**
 * @public
 */
export interface BatchGetImageRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the images to describe. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository that contains the images to describe.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * A list of image ID references that correspond to images to describe. The format of the `imageIds` reference is `imageTag=tag` or `imageDigest=digest`.
   *
   * @public
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * The accepted media types for the request.
   *
   * Valid values: `application/vnd.docker.distribution.manifest.v1+json` | `application/vnd.docker.distribution.manifest.v2+json` | `application/vnd.oci.image.manifest.v1+json`
   *
   * @public
   */
  acceptedMediaTypes?: string[] | undefined;
}

/**
 * An object representing an Amazon ECR image.
 *
 * @public
 */
export interface Image {
  /**
   * The Amazon Web Services account ID associated with the registry containing the image.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository associated with the image.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object containing the image tag and image digest associated with an image.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The image manifest associated with the image.
   *
   * @public
   */
  imageManifest?: string | undefined;

  /**
   * The manifest media type of the image.
   *
   * @public
   */
  imageManifestMediaType?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetImageResponse {
  /**
   * A list of image objects corresponding to the image references in the request.
   *
   * @public
   */
  images?: Image[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: ImageFailure[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationRequest {
  /**
   * One or more repository names to get the scanning configuration for.
   *
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * The details about any failures associated with the scanning configuration of a repository.
 *
 * @public
 */
export interface RepositoryScanningConfigurationFailure {
  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The failure code.
   *
   * @public
   */
  failureCode?: ScanningConfigurationFailureCode | undefined;

  /**
   * The reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @public
 */
export interface ScanningRepositoryFilter {
  /**
   * The filter to use when scanning.
   *
   * @public
   */
  filter: string | undefined;

  /**
   * The type associated with the filter.
   *
   * @public
   */
  filterType: ScanningRepositoryFilterType | undefined;
}

/**
 * The details of the scanning configuration for a repository.
 *
 * @public
 */
export interface RepositoryScanningConfiguration {
  /**
   * The ARN of the repository.
   *
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * Whether or not scan on push is configured for the repository.
   *
   * @public
   */
  scanOnPush?: boolean | undefined;

  /**
   * The scan frequency for the repository.
   *
   * @public
   */
  scanFrequency?: ScanFrequency | undefined;

  /**
   * The scan filters applied to the repository.
   *
   * @public
   */
  appliedScanFilters?: ScanningRepositoryFilter[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRepositoryScanningConfigurationResponse {
  /**
   * The scanning configuration for the requested repositories.
   *
   * @public
   */
  scanningConfigurations?: RepositoryScanningConfiguration[] | undefined;

  /**
   * Any failures associated with the call.
   *
   * @public
   */
  failures?: RepositoryScanningConfigurationFailure[] | undefined;
}

/**
 * @public
 */
export interface CompleteLayerUploadRequest {
  /**
   * The Amazon Web Services account ID associated with the registry to which to upload layers. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to associate with the image layer.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The upload ID from a previous InitiateLayerUpload operation to associate with the image layer.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The `sha256` digest of the image layer.
   *
   * @public
   */
  layerDigests: string[] | undefined;
}

/**
 * @public
 */
export interface CompleteLayerUploadResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The upload ID associated with the layer.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The `sha256` digest of the image layer.
   *
   * @public
   */
  layerDigest?: string | undefined;
}

/**
 * @public
 */
export interface CreatePullThroughCacheRuleRequest {
  /**
   * The repository name prefix to use when caching images from the source registry.
   *
   * > **Important:** There is always an assumed `/` applied to the end of the prefix. If you specify `ecr-public` as the prefix, Amazon ECR treats that as `ecr-public/`.
   *
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * The registry URL of the upstream public registry to use as the source for the pull through cache rule. The following is the syntax to use for each supported upstream registry.
   *
   * - Amazon ECR (`ecr`) – `<accountId>.dkr.ecr.<region>.amazonaws.com`
   * - Amazon ECR Public (`ecr-public`) – `public.ecr.aws`
   * - Docker Hub (`docker-hub`) – `registry-1.docker.io`
   * - GitHub Container Registry (`github-container-registry`) – `ghcr.io`
   * - GitLab Container Registry (`gitlab-container-registry`) – `registry.gitlab.com`
   * - Kubernetes (`k8s`) – `registry.k8s.io`
   * - Microsoft Azure Container Registry (`azure-container-registry`) – `<custom>.azurecr.io`
   * - Quay (`quay`) – `quay.io`
   *
   * @public
   */
  upstreamRegistryUrl: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry to create the pull through cache rule for. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the upstream registry.
   *
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM role to be assumed by Amazon ECR to authenticate to the ECR upstream registry. This role must be in the same account as the registry that you are configuring.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The repository name prefix of the upstream registry to match with the upstream repository name. When this field isn't specified, Amazon ECR will use the `ROOT`.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreatePullThroughCacheRuleResponse {
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * The upstream registry URL associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * The date and time, in JavaScript date format, when the pull through cache rule was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the upstream registry associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache rule.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the pull through cache rule.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The upstream repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;
}

/**
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
 *
 * By default, when no encryption configuration is set or the `AES256` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
 *
 * For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The encryption type to use.
   *
   * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with Key Management Service key stored in KMS. When you use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
   *
   * If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default Amazon Web Services managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
   *
   * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
   *
   * For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * If you use the `KMS` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default Amazon Web Services managed KMS key for Amazon ECR will be used.
   *
   * @public
   */
  kmsKey?: string | undefined;
}

/**
 * The image scanning configuration for a repository.
 *
 * @public
 */
export interface ImageScanningConfiguration {
  /**
   * The setting that determines whether images are scanned after being pushed to a repository. If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started with the [API_StartImageScan](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html) API.
   *
   * @public
   */
  scanOnPush?: boolean | undefined;
}

/**
 * A filter that specifies which image tags should be excluded from the repository's image tag mutability setting.
 *
 * @public
 */
export interface ImageTagMutabilityExclusionFilter {
  /**
   * The type of filter to apply for excluding image tags from mutability settings.
   *
   * @public
   */
  filterType: ImageTagMutabilityExclusionFilterType | undefined;

  /**
   * The filter value used to match image tags for exclusion from mutability settings.
   *
   * @public
   */
  filter: string | undefined;
}

/**
 * The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A `value` acts as a descriptor within a tag category (key).
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * The Amazon Web Services account ID associated with the registry to create the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name to use for the repository. The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`).
   *
   * The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The metadata that you apply to the repository to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags should be excluded from the repository's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;

  /**
   * > **Important:** The `imageScanningConfiguration` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see `PutRegistryScanningConfiguration`.
   *
   * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * An object representing a repository.
 *
 * @public
 */
export interface Repository {
  /**
   * The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the `arn:aws:ecr` namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, and repository name. For example, `arn:aws:ecr:region:012345678910:repository/repository-name`.
   *
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The URI for the repository. You can use this URI for container image `push` and `pull` operations.
   *
   * @public
   */
  repositoryUri?: string | undefined;

  /**
   * The date and time, in JavaScript date format, when the repository was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The tag mutability setting for the repository.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;

  /**
   * The image scanning configuration for a repository.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryResponse {
  /**
   * The repository that was created.
   *
   * @public
   */
  repository?: Repository | undefined;
}

/**
 * The encryption configuration to associate with the repository creation template.
 *
 * @public
 */
export interface EncryptionConfigurationForRepositoryCreationTemplate {
  /**
   * The encryption type to use.
   *
   * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with Key Management Service key stored in KMS. When you use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key for Amazon ECR, or specify your own KMS key, which you already created. For more information, see [Protecting data using server-side encryption with an KMS key stored in Key Management Service (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Console Developer Guide*.
   *
   * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm. For more information, see [Protecting data using server-side encryption with Amazon S3-managed encryption keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) in the *Amazon Simple Storage Service Console Developer Guide*.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * If you use the `KMS` encryption type, specify the KMS key to use for encryption. The full ARN of the KMS key must be specified. The key must exist in the same Region as the repository. If no key is specified, the default Amazon Web Services managed KMS key for Amazon ECR will be used.
   *
   * @public
   */
  kmsKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryCreationTemplateRequest {
  /**
   * The repository namespace prefix to associate with the template. All repositories created using this namespace prefix will have the settings defined in this template applied. For example, a prefix of `prod` would apply to all repositories beginning with `prod/`. Similarly, a prefix of `prod/team` would apply to all repositories beginning with `prod/team/`.
   *
   * To apply a template to all repositories in your registry that don't have an associated creation template, you can use `ROOT` as the prefix.
   *
   * > **Important:** There is always an assumed `/` applied to the end of the prefix. If you specify `ecr-public` as the prefix, Amazon ECR treats that as `ecr-public/`. When using a pull through cache rule, the repository prefix you specify during rule creation is what you should specify as your repository creation template prefix as well.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * A description for the repository creation template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The encryption configuration to use for repositories created using the template.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags should be excluded from the repository creation template's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;

  /**
   * The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
   *
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * The lifecycle policy to use for repositories created using the template.
   *
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * A list of enumerable strings representing the Amazon ECR repository creation scenarios that this template will apply towards. The supported scenarios are `PULL_THROUGH_CACHE`, `REPLICATION`, and `CREATE_ON_PUSH`
   *
   * @public
   */
  appliedFor: RCTAppliedFor[] | undefined;

  /**
   * The ARN of the role to be assumed by Amazon ECR. This role must be in the same account as the registry that you are configuring. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
   *
   * @public
   */
  customRoleArn?: string | undefined;
}

/**
 * The details of the repository creation template associated with the request.
 *
 * @public
 */
export interface RepositoryCreationTemplate {
  /**
   * The repository namespace prefix associated with the repository creation template.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The description associated with the repository creation template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The encryption configuration associated with the repository creation template.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;

  /**
   * The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
   *
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * The lifecycle policy to use for repositories created using the template.
   *
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH
   *
   * @public
   */
  appliedFor?: RCTAppliedFor[] | undefined;

  /**
   * The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The date and time, in JavaScript date format, when the repository creation template was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time, in JavaScript date format, when the repository creation template was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryCreationTemplateResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The details of the repository creation template associated with the request.
   *
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON lifecycle policy text.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * The time stamp of the last time that the lifecycle policy was run.
   *
   * @public
   */
  lastEvaluatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeletePullThroughCacheRuleRequest {
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule to delete.
   *
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry that contains the pull through cache rule. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePullThroughCacheRuleResponse {
  /**
   * The Amazon ECR repository prefix associated with the request.
   *
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * The upstream registry URL associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * The timestamp associated with the pull through cache rule.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache rule.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the pull through cache rule.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The upstream repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;
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
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The contents of the registry permissions policy that was deleted.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository to delete. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to delete.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryResponse {
  /**
   * The repository that was deleted.
   *
   * @public
   */
  repository?: Repository | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryCreationTemplateRequest {
  /**
   * The repository namespace prefix associated with the repository creation template.
   *
   * @public
   */
  prefix: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryCreationTemplateResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The details of the repository creation template that was deleted.
   *
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository policy to delete. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that is associated with the repository policy to delete.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy that was deleted from the repository.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSigningConfigurationRequest {}

/**
 * A repository filter used to determine which repositories have their images automatically signed on push. Each filter consists of a filter type and filter value.
 *
 * @public
 */
export interface SigningRepositoryFilter {
  /**
   * The filter value used to match repository names. When using `WILDCARD_MATCH`, the `*` character matches any sequence of characters.
   *
   * Examples:
   *
   * - `myapp/*` - Matches all repositories starting with `myapp/`
   * - `*\/production` - Matches all repositories ending with `/production`
   * - `*prod*` - Matches all repositories containing `prod`
   *
   * @public
   */
  filter: string | undefined;

  /**
   * The type of filter to apply. Currently, only `WILDCARD_MATCH` is supported, which uses wildcard patterns to match repository names.
   *
   * @public
   */
  filterType: SigningRepositoryFilterType | undefined;
}

/**
 * A signing rule that specifies a signing profile and optional repository filters. When an image is pushed to a matching repository, a signing job is created using the specified profile.
 *
 * @public
 */
export interface SigningRule {
  /**
   * The ARN of the Amazon Web Services Signer signing profile to use for signing images that match this rule. For more information about signing profiles, see [Signing profiles](https://docs.aws.amazon.com/signer/latest/developerguide/signing-profiles.html) in the *Amazon Web Services Signer Developer Guide*.
   *
   * @public
   */
  signingProfileArn: string | undefined;

  /**
   * A list of repository filters that determine which repositories have their images signed on push. If no filters are specified, all images pushed to the registry are signed using the rule's signing profile. Maximum of 100 filters per rule.
   *
   * @public
   */
  repositoryFilters?: SigningRepositoryFilter[] | undefined;
}

/**
 * The signing configuration for a registry, which specifies rules for automatically signing images when pushed.
 *
 * @public
 */
export interface SigningConfiguration {
  /**
   * A list of signing rules. Each rule defines a signing profile and optional repository filters that determine which images are automatically signed. Maximum of 10 rules.
   *
   * @public
   */
  rules: SigningRule[] | undefined;
}

/**
 * @public
 */
export interface DeleteSigningConfigurationResponse {
  /**
   * The Amazon Web Services account ID associated with the registry.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The registry's deleted signing configuration.
   *
   * @public
   */
  signingConfiguration?: SigningConfiguration | undefined;
}

/**
 * @public
 */
export interface DeregisterPullTimeUpdateExclusionRequest {
  /**
   * The ARN of the IAM principal to remove from the pull time update exclusion list.
   *
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterPullTimeUpdateExclusionResponse {
  /**
   * The ARN of the IAM principal that was removed from the pull time update exclusion list.
   *
   * @public
   */
  principalArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageReplicationStatusRequest {
  /**
   * The name of the repository that the image is in.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;
}

/**
 * The status of the replication process for an image.
 *
 * @public
 */
export interface ImageReplicationStatus {
  /**
   * The destination Region for the image replication.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry to which the image belongs.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The image replication status.
   *
   * @public
   */
  status?: ReplicationStatus | undefined;

  /**
   * The failure code for a replication that has failed.
   *
   * @public
   */
  failureCode?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageReplicationStatusResponse {
  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The replication status details for the images in the specified repository.
   *
   * @public
   */
  replicationStatuses?: ImageReplicationStatus[] | undefined;
}

/**
 * An object representing a filter on a DescribeImages operation.
 *
 * @public
 */
export interface DescribeImagesFilter {
  /**
   * The tag status with which to filter your DescribeImages results. You can filter results based on whether they are `TAGGED` or `UNTAGGED`.
   *
   * @public
   */
  tagStatus?: TagStatus | undefined;

  /**
   * The image status with which to filter your DescribeImages results. Valid values are `ACTIVE`, `ARCHIVED`, and `ACTIVATING`. If not specified, only images with `ACTIVE` status are returned.
   *
   * @public
   */
  imageStatus?: ImageStatusFilter | undefined;
}

/**
 * @public
 */
export interface DescribeImagesRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to describe images. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository that contains the images to describe.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The list of image IDs for the requested repository.
   *
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeImages` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return. This option cannot be used when you specify images with `imageIds`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results returned by `DescribeImages` in paginated output. When this parameter is used, `DescribeImages` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeImages` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribeImages` returns up to 100 results and a `nextToken` value, if applicable. This option cannot be used when you specify images with `imageIds`.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The filter key and value with which to filter your `DescribeImages` results.
   *
   * @public
   */
  filter?: DescribeImagesFilter | undefined;
}

/**
 * A summary of the last completed image scan.
 *
 * @public
 */
export interface ImageScanFindingsSummary {
  /**
   * The time of the last completed image scan.
   *
   * @public
   */
  imageScanCompletedAt?: Date | undefined;

  /**
   * The time when the vulnerability data was last scanned.
   *
   * @public
   */
  vulnerabilitySourceUpdatedAt?: Date | undefined;

  /**
   * The image vulnerability counts, sorted by severity.
   *
   * @public
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>> | undefined;
}

/**
 * The current status of an image scan.
 *
 * @public
 */
export interface ImageScanStatus {
  /**
   * The current state of an image scan.
   *
   * @public
   */
  status?: ScanStatus | undefined;

  /**
   * The description of the image scan status.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * An object that describes an image returned by a DescribeImages operation.
 *
 * @public
 */
export interface ImageDetail {
  /**
   * The Amazon Web Services account ID associated with the registry to which this image belongs.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to which this image belongs.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The `sha256` digest of the image manifest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The list of tags associated with this image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The size, in bytes, of the image in the repository.
   *
   * If the image is a manifest list, this will be the max size of all manifests in the list.
   *
   * > **Note:** Starting with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the `docker images` command shows the uncompressed image size. Therefore, Docker might return a larger image than the image shown in the Amazon Web Services Management Console.
   *
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.
   *
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * The current state of the scan.
   *
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;

  /**
   * A summary of the last completed image scan.
   *
   * @public
   */
  imageScanFindingsSummary?: ImageScanFindingsSummary | undefined;

  /**
   * The media type of the image manifest.
   *
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * The artifact media type of the image.
   *
   * @public
   */
  artifactMediaType?: string | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, when Amazon ECR recorded the last image pull.
   *
   * > **Note:** Amazon ECR refreshes the last image pull timestamp at least once every 24 hours. For example, if you pull an image once a day then the `lastRecordedPullTime` timestamp will indicate the exact time that the image was last pulled. However, if you pull an image once an hour, because Amazon ECR refreshes the `lastRecordedPullTime` timestamp at least once every 24 hours, the result may not be the exact time that the image was last pulled.
   *
   * @public
   */
  lastRecordedPullTime?: Date | undefined;

  /**
   * The digest of the subject manifest for images that are referrers.
   *
   * @public
   */
  subjectManifestDigest?: string | undefined;

  /**
   * The current status of the image.
   *
   * @public
   */
  imageStatus?: ImageStatus | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, when the image was last transitioned to Amazon ECR archive.
   *
   * @public
   */
  lastArchivedAt?: Date | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, when the image was last restored from Amazon ECR archive to Amazon ECR standard.
   *
   * @public
   */
  lastActivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeImagesResponse {
  /**
   * A list of ImageDetail objects that contain data about the image.
   *
   * @public
   */
  imageDetails?: ImageDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeImages` request. When the results of a `DescribeImages` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageScanFindingsRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository for the image for which to describe the scan findings.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeImageScanFindings` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of image scan results returned by `DescribeImageScanFindings` in paginated output. When this parameter is used, `DescribeImageScanFindings` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeImageScanFindings` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribeImageScanFindings` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The CVSS score for a finding.
 *
 * @public
 */
export interface CvssScore {
  /**
   * The base CVSS score used for the finding.
   *
   * @public
   */
  baseScore?: number | undefined;

  /**
   * The vector string of the CVSS score.
   *
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * The source of the CVSS score.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The version of CVSS used for the score.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Information on the vulnerable package identified by a finding.
 *
 * @public
 */
export interface VulnerablePackage {
  /**
   * The architecture of the vulnerable package.
   *
   * @public
   */
  arch?: string | undefined;

  /**
   * The epoch of the vulnerable package.
   *
   * @public
   */
  epoch?: number | undefined;

  /**
   * The file path of the vulnerable package.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The name of the vulnerable package.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The package manager of the vulnerable package.
   *
   * @public
   */
  packageManager?: string | undefined;

  /**
   * The release of the vulnerable package.
   *
   * @public
   */
  release?: string | undefined;

  /**
   * The source layer hash of the vulnerable package.
   *
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * The version of the vulnerable package.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The version of the package that contains the vulnerability fix.
   *
   * @public
   */
  fixedInVersion?: string | undefined;
}

/**
 * Information about a package vulnerability finding.
 *
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * An object that contains details about the CVSS score of a finding.
   *
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * One or more URLs that contain details about this vulnerability type.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * One or more vulnerabilities related to the one identified in this finding.
   *
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * The source of the vulnerability information.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * A URL to the source of the vulnerability information.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The date and time that this vulnerability was first added to the vendor's database.
   *
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * The severity the vendor has given to this vulnerability type.
   *
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * The date and time the vendor last updated this vulnerability in their database.
   *
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * The ID given to this vulnerability.
   *
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * The packages impacted by this vulnerability.
   *
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;
}

/**
 * Details about the recommended course of action to remediate the finding.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The URL address to the CVE remediation recommendations.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The recommended course of action to remediate the finding.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Information on how to remediate a finding.
 *
 * @public
 */
export interface Remediation {
  /**
   * An object that contains information about the recommended course of action to remediate the finding.
   *
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * The image details of the Amazon ECR container image.
 *
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * The architecture of the Amazon ECR container image.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The image author of the Amazon ECR container image.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The image hash of the Amazon ECR container image.
   *
   * @public
   */
  imageHash?: string | undefined;

  /**
   * The image tags attached to the Amazon ECR container image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The platform of the Amazon ECR container image.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The date and time the Amazon ECR container image was pushed.
   *
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * The most recent date and time a cluster was running the image.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of Amazon ECS or Amazon EKS clusters currently running the image.
   *
   * @public
   */
  inUseCount?: number | undefined;

  /**
   * The registry the Amazon ECR container image belongs to.
   *
   * @public
   */
  registry?: string | undefined;

  /**
   * The name of the repository the Amazon ECR container image resides in.
   *
   * @public
   */
  repositoryName?: string | undefined;
}

/**
 * Contains details about the resource involved in the finding.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * An object that contains details about the Amazon ECR container image involved in the finding.
   *
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;
}

/**
 * Details about the resource involved in a finding.
 *
 * @public
 */
export interface Resource {
  /**
   * An object that contains details about the resource involved in a finding.
   *
   * @public
   */
  details?: ResourceDetails | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The tags attached to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * Details on adjustments Amazon Inspector made to the CVSS score for a finding.
 *
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * The metric used to adjust the CVSS score.
   *
   * @public
   */
  metric?: string | undefined;

  /**
   * The reason the CVSS score has been adjustment.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Information about the CVSS score.
 *
 * @public
 */
export interface CvssScoreDetails {
  /**
   * An object that contains details about adjustment Amazon Inspector made to the CVSS score.
   *
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;

  /**
   * The CVSS score.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * The source for the CVSS score.
   *
   * @public
   */
  scoreSource?: string | undefined;

  /**
   * The vector for the CVSS score.
   *
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * The CVSS version used in scoring.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Information about the Amazon Inspector score given to a finding.
 *
 * @public
 */
export interface ScoreDetails {
  /**
   * An object that contains details about the CVSS score given to a finding.
   *
   * @public
   */
  cvss?: CvssScoreDetails | undefined;
}

/**
 * The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry.
 *
 * @public
 */
export interface EnhancedImageScanFinding {
  /**
   * The Amazon Web Services account ID associated with the image.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the finding.
   *
   * @public
   */
  findingArn?: string | undefined;

  /**
   * The date and time that the finding was first observed.
   *
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * The date and time that the finding was last observed.
   *
   * @public
   */
  lastObservedAt?: Date | undefined;

  /**
   * An object that contains the details of a package vulnerability finding.
   *
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * An object that contains the details about how to remediate a finding.
   *
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * Contains information on the resources involved in a finding.
   *
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * The Amazon Inspector score given to the finding.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * An object that contains details of the Amazon Inspector score.
   *
   * @public
   */
  scoreDetails?: ScoreDetails | undefined;

  /**
   * The severity of the finding.
   *
   * @public
   */
  severity?: string | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The type of the finding.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The date and time the finding was last updated at.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Details on whether a fix is available through a version update. This value can be `YES`, `NO`, or `PARTIAL`. A `PARTIAL` fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.
   *
   * @public
   */
  fixAvailable?: string | undefined;

  /**
   * If a finding discovered in your environment has an exploit available.
   *
   * @public
   */
  exploitAvailable?: string | undefined;
}

/**
 * This data type is used in the ImageScanFinding data type.
 *
 * @public
 */
export interface Attribute {
  /**
   * The attribute key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value assigned to the attribute key.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains information about an image scan finding.
 *
 * @public
 */
export interface ImageScanFinding {
  /**
   * The name associated with the finding, usually a CVE number.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A link containing additional details about the security vulnerability.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The finding severity.
   *
   * @public
   */
  severity?: FindingSeverity | undefined;

  /**
   * A collection of attributes of the host from which the finding is generated.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * The details of an image scan.
 *
 * @public
 */
export interface ImageScanFindings {
  /**
   * The time of the last completed image scan.
   *
   * @public
   */
  imageScanCompletedAt?: Date | undefined;

  /**
   * The time when the vulnerability data was last scanned.
   *
   * @public
   */
  vulnerabilitySourceUpdatedAt?: Date | undefined;

  /**
   * The image vulnerability counts, sorted by severity.
   *
   * @public
   */
  findingSeverityCounts?: Partial<Record<FindingSeverity, number>> | undefined;

  /**
   * The findings from the image scan.
   *
   * @public
   */
  findings?: ImageScanFinding[] | undefined;

  /**
   * Details about the enhanced scan findings from Amazon Inspector.
   *
   * @public
   */
  enhancedFindings?: EnhancedImageScanFinding[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageScanFindingsResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The current state of the scan.
   *
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;

  /**
   * The information contained in the image scan findings.
   *
   * @public
   */
  imageScanFindings?: ImageScanFindings | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeImageScanFindings` request. When the results of a `DescribeImageScanFindings` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageSigningStatusRequest {
  /**
   * The name of the repository that contains the image.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object containing identifying information for an image.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;
}

/**
 * The signing status for an image. Each status corresponds to a signing profile.
 *
 * @public
 */
export interface ImageSigningStatus {
  /**
   * The ARN of the Amazon Web Services Signer signing profile used to sign the image.
   *
   * @public
   */
  signingProfileArn?: string | undefined;

  /**
   * The failure code, which is only present if `status` is `FAILED`.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * A description of why signing the image failed. This field is only present if `status` is `FAILED`.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The image's signing status. Possible values are:
   *
   * - `IN_PROGRESS` - Signing is currently in progress.
   * - `COMPLETE` - The signature was successfully generated.
   * - `FAILED` - Signing failed. See `failureCode` and `failureReason` for details.
   *
   * @public
   */
  status?: SigningStatus | undefined;
}

/**
 * @public
 */
export interface DescribeImageSigningStatusResponse {
  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object with identifying information for the image.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * A list of signing statuses for the specified image. Each status corresponds to a signing profile.
   *
   * @public
   */
  signingStatuses?: ImageSigningStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribePullThroughCacheRulesRequest {
  /**
   * The Amazon Web Services account ID associated with the registry to return the pull through cache rules for. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The Amazon ECR repository prefixes associated with the pull through cache rules to return. If no repository prefix value is specified, all pull through cache rules are returned.
   *
   * @public
   */
  ecrRepositoryPrefixes?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribePullThroughCacheRulesRequest` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of pull through cache rules returned by `DescribePullThroughCacheRulesRequest` in paginated output. When this parameter is used, `DescribePullThroughCacheRulesRequest` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribePullThroughCacheRulesRequest` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribePullThroughCacheRulesRequest` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a pull through cache rule.
 *
 * @public
 */
export interface PullThroughCacheRule {
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * The upstream registry URL associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * The date and time the pull through cache was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Web Services account ID associated with the registry the pull through cache rule is associated with.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The ARN of the Secrets Manager secret associated with the pull through cache rule.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the pull through cache rule.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The upstream repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;

  /**
   * The name of the upstream source registry associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistry?: UpstreamRegistry | undefined;

  /**
   * The date and time, in JavaScript date format, when the pull through cache rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePullThroughCacheRulesResponse {
  /**
   * The details of the pull through cache rules.
   *
   * @public
   */
  pullThroughCacheRules?: PullThroughCacheRule[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribePullThroughCacheRulesRequest` request. When the results of a `DescribePullThroughCacheRulesRequest` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {}

/**
 * An array of objects representing the destination for a replication rule.
 *
 * @public
 */
export interface ReplicationDestination {
  /**
   * The Region to replicate to.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The Amazon Web Services account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
   *
   * @public
   */
  registryId: string | undefined;
}

/**
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
 *
 * @public
 */
export interface RepositoryFilter {
  /**
   * The repository filter details. When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
   *
   * @public
   */
  filter: string | undefined;

  /**
   * The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter.
   *
   * @public
   */
  filterType: RepositoryFilterType | undefined;
}

/**
 * An array of objects representing the replication destinations and repository filters for a replication configuration.
 *
 * @public
 */
export interface ReplicationRule {
  /**
   * An array of objects representing the destination for a replication rule.
   *
   * @public
   */
  destinations: ReplicationDestination[] | undefined;

  /**
   * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
   *
   * @public
   */
  repositoryFilters?: RepositoryFilter[] | undefined;
}

/**
 * The replication configuration for a registry.
 *
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * An array of objects representing the replication destinations and repository filters for a replication configuration.
   *
   * @public
   */
  rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The replication configuration for the registry.
   *
   * @public
   */
  replicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationBackfillResultsRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the replication backfill to describe. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The ID of the replication backfill to describe.
   *
   * @public
   */
  replicationBackfillId: string | undefined;

  /**
   * The status used to filter the returned results. Each result has a status of `COMPLETE` or `FAILED`. If you omit this parameter, results with both statuses are returned.
   *
   * @public
   */
  resultStatusFilter?: ReplicationBackfillResultStatus | undefined;

  /**
   * The maximum number of replication backfill results returned by `DescribeReplicationBackfillResults` in paginated output. When this parameter is used, `DescribeReplicationBackfillResults` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeReplicationBackfillResults` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribeReplicationBackfillResults` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeReplicationBackfillResults` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object representing the progress of a replication backfill, including the total, completed, and failed replication counts.
 *
 * @public
 */
export interface ReplicationBackfillProgress {
  /**
   * The total number of replications that the backfill will perform. Each image and tag combination is counted as a single replication.
   *
   * @public
   */
  totalReplicationCount: number | undefined;

  /**
   * The number of replications that have completed successfully.
   *
   * @public
   */
  completedReplicationCount: number | undefined;

  /**
   * The number of replications that have failed.
   *
   * @public
   */
  failedReplicationCount: number | undefined;

  /**
   * The distinct failure codes for the replications that have failed. Each failure code appears at most once, regardless of how many replications failed with that code.
   *
   * @public
   */
  failureCodes: string[] | undefined;
}

/**
 * An object representing the result of a single replication during a replication backfill. Each image and tag combination is replicated as a single replication.
 *
 * @public
 */
export interface ReplicationBackfillResult {
  /**
   * The name of the repository that contains the image.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object with identifying information for the image.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * The replication status of the image.
   *
   * @public
   */
  status: ReplicationBackfillResultStatus | undefined;

  /**
   * The failure code for a replication that has failed.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The distinct failure codes for the images referenced by a manifest list that failed to replicate. Each failure code appears at most once, regardless of how many referenced images failed with that code. This field is present only when the image is a manifest list.
   *
   * @public
   */
  subImageFailureCodes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplicationBackfillResultsResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The ID of the replication backfill.
   *
   * @public
   */
  replicationBackfillId?: string | undefined;

  /**
   * The destination Region and registry to which the images are replicated.
   *
   * @public
   */
  destination?: ReplicationDestination | undefined;

  /**
   * The current status of the replication backfill.
   *
   * @public
   */
  status?: ReplicationBackfillStatus | undefined;

  /**
   * The failure code for a replication backfill that has failed.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The progress of the replication backfill, including the total, completed, and failed replication counts. This value is `null` until the replication backfill finishes preparing the set of images to replicate. It is therefore `null` while the replication backfill is `PREPARING`, and remains `null` if the replication backfill is stopped before preparation completes.
   *
   * @public
   */
  progress?: ReplicationBackfillProgress | undefined;

  /**
   * The per-image results for the replication backfill. Results are available only after the replication backfill reaches a terminal status.
   *
   * @public
   */
  results?: ReplicationBackfillResult[] | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill ended. This value is `null` while the replication backfill is still in progress.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeReplicationBackfillResults` request. When the results of a `DescribeReplicationBackfillResults` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoriesRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repositories to be described. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * A list of repositories to describe. If this parameter is omitted, then all repositories in a registry are described.
   *
   * @public
   */
  repositoryNames?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeRepositories` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return. This option cannot be used when you specify repositories with `repositoryNames`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results returned by `DescribeRepositories` in paginated output. When this parameter is used, `DescribeRepositories` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeRepositories` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribeRepositories` returns up to 100 results and a `nextToken` value, if applicable. This option cannot be used when you specify repositories with `repositoryNames`.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoriesResponse {
  /**
   * A list of repository objects corresponding to valid repositories.
   *
   * @public
   */
  repositories?: Repository[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeRepositories` request. When the results of a `DescribeRepositories` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryCreationTemplatesRequest {
  /**
   * The repository namespace prefixes associated with the repository creation templates to describe. If this value is not specified, all repository creation templates are returned.
   *
   * @public
   */
  prefixes?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `DescribeRepositoryCreationTemplates` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results returned by `DescribeRepositoryCreationTemplatesRequest` in paginated output. When this parameter is used, `DescribeRepositoryCreationTemplatesRequest` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeRepositoryCreationTemplatesRequest` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `DescribeRepositoryCreationTemplatesRequest` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryCreationTemplatesResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The details of the repository creation templates.
   *
   * @public
   */
  repositoryCreationTemplates?: RepositoryCreationTemplate[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeRepositoryCreationTemplates` request. When the results of a `DescribeRepositoryCreationTemplates` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingRequest {
  /**
   * The name of the account setting, such as `BASIC_SCAN_TYPE_VERSION`, `REGISTRY_POLICY_SCOPE`, or `BLOB_MOUNTING`.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingResponse {
  /**
   * Retrieves the name of the account setting.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The setting value for the setting name. Valid value for basic scan type: `AWS_NATIVE`. Valid values for registry policy scope: `V2`. Valid values for blob mounting: `ENABLED` or `DISABLED`.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {
  /**
   * A list of Amazon Web Services account IDs that are associated with the registries for which to get AuthorizationData objects. If you do not specify a registry, the default registry is assumed.
   *
   * @deprecated This field is deprecated. The returned authorization token can be used to access any Amazon ECR registry that the IAM principal has access to, specifying a registry ID doesn't change the permissions scope of the authorization token.
   * @public
   */
  registryIds?: string[] | undefined;
}

/**
 * An object representing authorization data for an Amazon ECR registry.
 *
 * @public
 */
export interface AuthorizationData {
  /**
   * A base64-encoded string that contains authorization data for the specified Amazon ECR registry. When the string is decoded, it is presented in the format `user:password` for private registry authentication using `docker login`.
   *
   * @public
   */
  authorizationToken?: string | undefined;

  /**
   * The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The registry URL to use for this authorization token in a `docker login` command. The Amazon ECR registry URL format is `https://aws_account_id.dkr.ecr.region.amazonaws.com`. For example, `https://012345678910.dkr.ecr.us-east-1.amazonaws.com`..
   *
   * @public
   */
  proxyEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenResponse {
  /**
   * A list of authorization token data objects that correspond to the `registryIds` values in the request.
   *
   * > **Note:** The size of the authorization token returned by Amazon ECR is not fixed. We recommend that you don't make assumptions about the maximum size.
   *
   * @public
   */
  authorizationData?: AuthorizationData[] | undefined;
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the image layer to download. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that is associated with the image layer to download.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The digest of the image layer to download.
   *
   * @public
   */
  layerDigest: string | undefined;
}

/**
 * @public
 */
export interface GetDownloadUrlForLayerResponse {
  /**
   * The pre-signed Amazon S3 download URL for the requested layer.
   *
   * @public
   */
  downloadUrl?: string | undefined;

  /**
   * The digest of the image layer to download.
   *
   * @public
   */
  layerDigest?: string | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON lifecycle policy text.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * The time stamp of the last time that the lifecycle policy was run.
   *
   * @public
   */
  lastEvaluatedAt?: Date | undefined;
}

/**
 * The filter for the lifecycle policy preview.
 *
 * @public
 */
export interface LifecyclePolicyPreviewFilter {
  /**
   * The tag status of the image.
   *
   * @public
   */
  tagStatus?: TagStatus | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The list of imageIDs to be included.
   *
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated  `GetLifecyclePolicyPreviewRequest` request where `maxResults` was used and the  results exceeded the value of that parameter. Pagination continues from the end of the  previous results that returned the `nextToken` value. This value is  `null` when there are no more results to return. This option cannot be used when you specify images with `imageIds`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results returned by `GetLifecyclePolicyPreviewRequest` in  paginated output. When this parameter is used, `GetLifecyclePolicyPreviewRequest` only returns  `maxResults` results in a single page along with a `nextToken`  response element. The remaining results of the initial request can be seen by sending  another `GetLifecyclePolicyPreviewRequest` request with the returned `nextToken`  value. This value can be between 1 and 100. If this  parameter is not used, then `GetLifecyclePolicyPreviewRequest` returns up to 100 results and a `nextToken` value, if  applicable. This option cannot be used when you specify images with `imageIds`.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional parameter that filters results based on image tag status and all tags, if tagged.
   *
   * @public
   */
  filter?: LifecyclePolicyPreviewFilter | undefined;
}

/**
 * The type of action to be taken.
 *
 * @public
 */
export interface LifecyclePolicyRuleAction {
  /**
   * The type of action to be taken.
   *
   * @public
   */
  type?: ImageActionType | undefined;

  /**
   * The target storage class for the action. This is only present when the `type` is `TRANSITION.`
   *
   * @public
   */
  targetStorageClass?: LifecyclePolicyTargetStorageClass | undefined;
}

/**
 * The result of the lifecycle policy preview.
 *
 * @public
 */
export interface LifecyclePolicyPreviewResult {
  /**
   * The list of tags associated with this image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The `sha256` digest of the image manifest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.
   *
   * @public
   */
  imagePushedAt?: Date | undefined;

  /**
   * The type of action to be taken.
   *
   * @public
   */
  action?: LifecyclePolicyRuleAction | undefined;

  /**
   * The priority of the applied rule.
   *
   * @public
   */
  appliedRulePriority?: number | undefined;

  /**
   * The storage class of the image.
   *
   * @public
   */
  storageClass?: LifecyclePolicyStorageClass | undefined;
}

/**
 * The total count of images transitioning to a storage class.
 *
 * @public
 */
export interface TransitioningImageTotalCount {
  /**
   * The target storage class.
   *
   * @public
   */
  targetStorageClass?: LifecyclePolicyTargetStorageClass | undefined;

  /**
   * The total number of images transitioning to the storage class.
   *
   * @public
   */
  imageTotalCount?: number | undefined;
}

/**
 * The summary of the lifecycle policy preview request.
 *
 * @public
 */
export interface LifecyclePolicyPreviewSummary {
  /**
   * The number of expiring images.
   *
   * @public
   */
  expiringImageTotalCount?: number | undefined;

  /**
   * The total count of images that will be transitioned to each storage class. This field is only present if at least one image will be transitoned in the summary.
   *
   * @public
   */
  transitioningImageTotalCounts?: TransitioningImageTotalCount[] | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyPreviewResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON lifecycle policy text.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * The status of the lifecycle policy preview request.
   *
   * @public
   */
  status?: LifecyclePolicyPreviewStatus | undefined;

  /**
   * The `nextToken` value to include in a future `GetLifecyclePolicyPreview` request. When the results of a `GetLifecyclePolicyPreview` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The results of the lifecycle policy preview request.
   *
   * @public
   */
  previewResults?: LifecyclePolicyPreviewResult[] | undefined;

  /**
   * The list of images that is returned as a result of the action.
   *
   * @public
   */
  summary?: LifecyclePolicyPreviewSummary | undefined;
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
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The JSON text of the permissions policy for a registry.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationRequest {}

/**
 * The details of a scanning rule for a private registry.
 *
 * @public
 */
export interface RegistryScanningRule {
  /**
   * The frequency that scans are performed at for a private registry. When the `ENHANCED` scan type is specified, the supported scan frequencies are `CONTINUOUS_SCAN` and `SCAN_ON_PUSH`. When the `BASIC` scan type is specified, the `SCAN_ON_PUSH` scan frequency is supported. If scan on push is not specified, then the `MANUAL` scan frequency is set by default.
   *
   * @public
   */
  scanFrequency: ScanFrequency | undefined;

  /**
   * The repository filters associated with the scanning configuration for a private registry.
   *
   * @public
   */
  repositoryFilters: ScanningRepositoryFilter[] | undefined;
}

/**
 * The scanning configuration for a private registry.
 *
 * @public
 */
export interface RegistryScanningConfiguration {
  /**
   * The type of scanning configured for the registry.
   *
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * The scanning rules associated with the registry.
   *
   * @public
   */
  rules?: RegistryScanningRule[] | undefined;
}

/**
 * @public
 */
export interface GetRegistryScanningConfigurationResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The scanning configuration for the registry.
   *
   * @public
   */
  scanningConfiguration?: RegistryScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository with the policy to retrieve.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy text associated with the repository.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface GetSigningConfigurationRequest {}

/**
 * @public
 */
export interface GetSigningConfigurationResponse {
  /**
   * The Amazon Web Services account ID associated with the registry.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The registry's signing configuration.
   *
   * @public
   */
  signingConfiguration?: SigningConfiguration | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadRequest {
  /**
   * The Amazon Web Services account ID associated with the registry to which you intend to upload layers. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to which you intend to upload layers.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface InitiateLayerUploadResponse {
  /**
   * The upload ID for the layer upload. This parameter is passed to further UploadLayerPart and CompleteLayerUpload operations.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The size, in bytes, that Amazon ECR expects future layer part uploads to be.
   *
   * @public
   */
  partSize?: number | undefined;
}

/**
 * An object representing a filter on a ListImageReferrers operation.
 *
 * @public
 */
export interface ListImageReferrersFilter {
  /**
   * The artifact types with which to filter your ListImageReferrers results.
   *
   * @public
   */
  artifactTypes?: string[] | undefined;

  /**
   * The artifact status with which to filter your ListImageReferrers results. Valid values are `ACTIVE`, `ARCHIVED`, `ACTIVATING`, or `ANY`. If not specified, only artifacts with `ACTIVE` status are returned.
   *
   * @public
   */
  artifactStatus?: ArtifactStatusFilter | undefined;
}

/**
 * An object that identifies an image subject.
 *
 * @public
 */
export interface SubjectIdentifier {
  /**
   * The digest of the image.
   *
   * @public
   */
  imageDigest: string | undefined;
}

/**
 * @public
 */
export interface ListImageReferrersRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to list image referrers. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that contains the subject image.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object containing the image digest of the subject image for which to retrieve associated artifacts.
   *
   * @public
   */
  subjectId: SubjectIdentifier | undefined;

  /**
   * The filter key and value with which to filter your `ListImageReferrers` results. If no filter is specified, only artifacts with `ACTIVE` status are returned.
   *
   * @public
   */
  filter?: ListImageReferrersFilter | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListImageReferrers` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of image referrer results returned by `ListImageReferrers` in paginated output. When this parameter is used, `ListImageReferrers` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListImageReferrers` request with the returned `nextToken` value. This value can be between 1 and 50. If this parameter is not used, then `ListImageReferrers` returns up to 20 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object representing an artifact associated with a subject image.
 *
 * @public
 */
export interface ImageReferrer {
  /**
   * The digest of the artifact manifest.
   *
   * @public
   */
  digest: string | undefined;

  /**
   * The media type of the artifact manifest.
   *
   * @public
   */
  mediaType: string | undefined;

  /**
   * A string identifying the type of artifact.
   *
   * @public
   */
  artifactType?: string | undefined;

  /**
   * The size, in bytes, of the artifact.
   *
   * @public
   */
  size: number | undefined;

  /**
   * A map of annotations associated with the artifact.
   *
   * @public
   */
  annotations?: Record<string, string> | undefined;

  /**
   * The status of the artifact. Valid values are `ACTIVE`, `ARCHIVED`, or `ACTIVATING`.
   *
   * @public
   */
  artifactStatus?: ArtifactStatus | undefined;
}

/**
 * @public
 */
export interface ListImageReferrersResponse {
  /**
   * The list of artifacts associated with the subject image.
   *
   * @public
   */
  referrers?: ImageReferrer[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListImageReferrers` request. When the results of a `ListImageReferrers` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object representing a filter on a ListImages operation.
 *
 * @public
 */
export interface ListImagesFilter {
  /**
   * The tag status with which to filter your ListImages results.
   *
   * @public
   */
  tagStatus?: TagStatus | undefined;

  /**
   * The image status with which to filter your ListImages results. Valid values are `ACTIVE`, `ARCHIVED`, and `ACTIVATING`. If not specified, only images with `ACTIVE` status are returned.
   *
   * @public
   */
  imageStatus?: ImageStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to list images. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository with image IDs to be listed.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListImages` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of image results returned by `ListImages` in paginated output. When this parameter is used, `ListImages` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListImages` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `ListImages` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The filter key and value with which to filter your `ListImages` results.
   *
   * @public
   */
  filter?: ListImagesFilter | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * The list of image IDs for the requested repository.
   *
   * @public
   */
  imageIds?: ImageIdentifier[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListImages` request. When the results of a `ListImages` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPullTimeUpdateExclusionsRequest {
  /**
   * The maximum number of pull time update exclusion results returned by `ListPullTimeUpdateExclusions` in paginated output. When this parameter is used, `ListPullTimeUpdateExclusions` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListPullTimeUpdateExclusions` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter is not used, then `ListPullTimeUpdateExclusions` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListPullTimeUpdateExclusions` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPullTimeUpdateExclusionsResponse {
  /**
   * The list of IAM principal ARNs that are excluded from having their image pull times recorded.
   *
   * @public
   */
  pullTimeUpdateExclusions?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListPullTimeUpdateExclusions` request. When the results of a `ListPullTimeUpdateExclusions` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationBackfillsRequest {
  /**
   * The Amazon Web Services account ID associated with the registry for which to list replication backfills. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The maximum number of replication backfill results returned by `ListReplicationBackfills` in paginated output. When this parameter is used, `ListReplicationBackfills` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListReplicationBackfills` request with the returned `nextToken` value. This value can be between 1 and 50. If this parameter is not used, then `ListReplicationBackfills` returns up to 25 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListReplicationBackfills` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object representing a summary of a replication backfill, including its status, destination, progress, and start and end times.
 *
 * @public
 */
export interface ReplicationBackfillSummary {
  /**
   * The ID of the replication backfill.
   *
   * @public
   */
  replicationBackfillId: string | undefined;

  /**
   * The destination Region and registry to which the images are replicated.
   *
   * @public
   */
  destination: ReplicationDestination | undefined;

  /**
   * The current status of the replication backfill.
   *
   * @public
   */
  status: ReplicationBackfillStatus | undefined;

  /**
   * The failure code for a replication backfill that has failed.
   *
   * @public
   */
  failureCode?: string | undefined;

  /**
   * The progress of the replication backfill, including the total, completed, and failed replication counts. This value is `null` until the replication backfill finishes preparing the set of images to replicate. It is therefore `null` while the replication backfill is `PREPARING`, and remains `null` if the replication backfill is stopped before preparation completes.
   *
   * @public
   */
  progress?: ReplicationBackfillProgress | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill was started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill ended. This value is `null` while the replication backfill is still in progress.
   *
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListReplicationBackfillsResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * A list of the replication backfills for the registry.
   *
   * @public
   */
  backfills?: ReplicationBackfillSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListReplicationBackfills` request. When the results of a `ListReplicationBackfills` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the only supported resource is an Amazon ECR repository.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingRequest {
  /**
   * The name of the account setting, such as `BASIC_SCAN_TYPE_VERSION`, `REGISTRY_POLICY_SCOPE`, or `BLOB_MOUNTING`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Setting value that is specified. Valid value for basic scan type: `AWS_NATIVE`. Valid values for registry policy scope: `V2`. Valid values for blob mounting: `ENABLED` or `DISABLED`.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingResponse {
  /**
   * Retrieves the name of the account setting.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Retrieves the value of the specified account setting.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface PutImageRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to put the image. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository in which to put the image.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The image manifest corresponding to the image to be uploaded.
   *
   * @public
   */
  imageManifest: string | undefined;

  /**
   * The media type of the image manifest. If you push an image manifest that does not contain the `mediaType` field, you must specify the `imageManifestMediaType` in the request.
   *
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * The tag to associate with the image. This parameter is optional.
   *
   * @public
   */
  imageTag?: string | undefined;

  /**
   * The image digest of the image manifest corresponding to the image.
   *
   * @public
   */
  imageDigest?: string | undefined;
}

/**
 * @public
 */
export interface PutImageResponse {
  /**
   * Details of the image uploaded.
   *
   * @public
   */
  image?: Image | undefined;
}

/**
 * @public
 */
export interface PutImageScanningConfigurationRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to update the image scanning configuration setting. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository in which to update the image scanning configuration setting.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The image scanning configuration for the repository. This setting determines whether images are scanned for known vulnerabilities after being pushed to the repository.
   *
   * @public
   */
  imageScanningConfiguration: ImageScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutImageScanningConfigurationResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The image scanning configuration setting for the repository.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutImageTagMutabilityRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository in which to update the image tag mutability settings.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The tag mutability setting for the repository. If `MUTABLE` is specified, image tags can be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @public
   */
  imageTagMutability: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags should be excluded from the image tag mutability setting being applied.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;
}

/**
 * @public
 */
export interface PutImageTagMutabilityResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The image tag mutability setting for the repository.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * The list of filters that specify which image tags are excluded from the repository's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do  not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to receive the policy.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The JSON repository policy text to apply to the repository.
   *
   * @public
   */
  lifecyclePolicyText: string | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy text.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryPolicyRequest {
  /**
   * The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see [Registry permissions](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the *Amazon Elastic Container Registry User Guide*.
   *
   * @public
   */
  policyText: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryPolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The JSON policy text for your registry.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationRequest {
  /**
   * The scanning type to set for the registry.
   *
   * When a registry scanning configuration is not defined, by default the `BASIC` scan type is used. When basic scanning is used, you may specify filters to determine which individual repositories, or all repositories, are scanned when new images are pushed to those repositories. Alternatively, you can do manual scans of images with basic scanning.
   *
   * When the `ENHANCED` scan type is set, Amazon Inspector provides automated vulnerability scanning. You may choose between continuous scanning or scan on push and you may specify filters to determine which individual repositories, or all repositories, are scanned.
   *
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * The scanning rules to use for the registry. A scanning rule is used to determine which repository filters are used and at what frequency scanning will occur.
   *
   * @public
   */
  rules?: RegistryScanningRule[] | undefined;
}

/**
 * @public
 */
export interface PutRegistryScanningConfigurationResponse {
  /**
   * The scanning configuration for your registry.
   *
   * @public
   */
  registryScanningConfiguration?: RegistryScanningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutReplicationConfigurationRequest {
  /**
   * An object representing the replication configuration for a registry.
   *
   * @public
   */
  replicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutReplicationConfigurationResponse {
  /**
   * The contents of the replication configuration for the registry.
   *
   * @public
   */
  replicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSigningConfigurationRequest {
  /**
   * The signing configuration to assign to the registry.
   *
   * @public
   */
  signingConfiguration: SigningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSigningConfigurationResponse {
  /**
   * The registry's updated signing configuration.
   *
   * @public
   */
  signingConfiguration?: SigningConfiguration | undefined;
}

/**
 * @public
 */
export interface RegisterPullTimeUpdateExclusionRequest {
  /**
   * The ARN of the IAM principal to exclude from having image pull times recorded.
   *
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface RegisterPullTimeUpdateExclusionResponse {
  /**
   * The ARN of the IAM principal that was added to the pull time update exclusion list.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, when the exclusion was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to receive the policy.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
   *
   * @public
   */
  policyText: string | undefined;

  /**
   * If the policy you are attempting to set on a repository policy would prevent you from setting another policy in the future, you must force the SetRepositoryPolicy operation. This is intended to prevent accidental repository lock outs.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy text applied to the repository.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface StartImageScanRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository in which to start an image scan request. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that contains the images to scan.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;
}

/**
 * @public
 */
export interface StartImageScanResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The current state of the scan.
   *
   * @public
   */
  imageScanStatus?: ImageScanStatus | undefined;
}

/**
 * @public
 */
export interface StartLifecyclePolicyPreviewRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to be evaluated.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The policy to be evaluated against. If you do not specify a policy, the current policy for the repository is used.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;
}

/**
 * @public
 */
export interface StartLifecyclePolicyPreviewResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy text.
   *
   * @public
   */
  lifecyclePolicyText?: string | undefined;

  /**
   * The status of the lifecycle policy preview request.
   *
   * @public
   */
  status?: LifecyclePolicyPreviewStatus | undefined;
}

/**
 * @public
 */
export interface StartReplicationBackfillRequest {
  /**
   * The Amazon Web Services account ID associated with the registry from which to start the replication backfill. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The destination Region and registry to which the images are replicated.
   *
   * @public
   */
  destination: ReplicationDestination | undefined;
}

/**
 * @public
 */
export interface StartReplicationBackfillResponse {
  /**
   * The ID of the replication backfill that was started. Use this value to describe or stop the backfill.
   *
   * @public
   */
  replicationBackfillId?: string | undefined;

  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The destination Region and registry to which the images are replicated.
   *
   * @public
   */
  destination?: ReplicationDestination | undefined;

  /**
   * The current status of the replication backfill. A newly started replication backfill is returned with a status of `PREPARING`.
   *
   * @public
   */
  status?: ReplicationBackfillStatus | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill was started.
   *
   * @public
   */
  startedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StopReplicationBackfillRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the replication backfill to stop. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The ID of the replication backfill to stop.
   *
   * @public
   */
  replicationBackfillId: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationBackfillResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The ID of the replication backfill.
   *
   * @public
   */
  replicationBackfillId?: string | undefined;

  /**
   * The destination Region and registry to which the images are replicated.
   *
   * @public
   */
  destination?: ReplicationDestination | undefined;

  /**
   * The current status of the replication backfill. When you stop a replication backfill, its status is `STOPPED` if the backfill is stopped immediately, or `STOPPING` if there are replications still in progress that must complete before the backfill stops.
   *
   * @public
   */
  status?: ReplicationBackfillStatus | undefined;

  /**
   * The date and time, in JavaScript date format, when the replication backfill was started.
   *
   * @public
   */
  startedAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the the resource to which to add tags. Currently, the only supported resource is an Amazon ECR repository.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which to remove tags. Currently, the only supported resource is an Amazon ECR repository.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
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
export interface UpdateImageStorageClassRequest {
  /**
   * The Amazon Web Services account ID associated with the registry that contains the image to transition. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that contains the image to transition.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId: ImageIdentifier | undefined;

  /**
   * The target storage class for the image.
   *
   * @public
   */
  targetStorageClass: TargetStorageClass | undefined;
}

/**
 * @public
 */
export interface UpdateImageStorageClassResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object with identifying information for an image in an Amazon ECR repository.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The current status of the image after the call to UpdateImageStorageClass is complete. Valid values are `ACTIVE`, `ARCHIVED`, and `ACTIVATING`.
   *
   * @public
   */
  imageStatus?: ImageStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePullThroughCacheRuleRequest {
  /**
   * The Amazon Web Services account ID associated with the registry associated with the pull through cache rule. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name prefix to use when caching images from the source registry.
   *
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM role to be assumed by Amazon ECR to authenticate to the ECR upstream registry. This role must be in the same account as the registry that you are configuring.
   *
   * @public
   */
  customRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullThroughCacheRuleResponse {
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The date and time, in JavaScript date format, when the pull through cache rule was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache rule.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the pull through cache rule.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The upstream repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryCreationTemplateRequest {
  /**
   * The repository namespace prefix that matches an existing repository creation template in the registry. All repositories created using this namespace prefix will have the settings defined in this template applied. For example, a prefix of `prod` would apply to all repositories beginning with `prod/`. This includes a repository named `prod/team1` as well as a repository named `prod/repository1`.
   *
   * To apply a template to all repositories in your registry that don't have an associated creation template, you can use `ROOT` as the prefix.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * A description for the repository creation template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The encryption configuration to associate with the repository creation template.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate | undefined;

  /**
   * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  resourceTags?: Tag[] | undefined;

  /**
   * Updates the tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * @public
   */
  imageTagMutability?: ImageTagMutability | undefined;

  /**
   * A list of filters that specify which image tags should be excluded from the repository creation template's image tag mutability setting.
   *
   * @public
   */
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[] | undefined;

  /**
   * Updates the repository policy created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
   *
   * @public
   */
  repositoryPolicy?: string | undefined;

  /**
   * Updates the lifecycle policy associated with the specified repository creation template.
   *
   * @public
   */
  lifecyclePolicy?: string | undefined;

  /**
   * Updates the list of enumerable strings representing the Amazon ECR repository creation scenarios that this template will apply towards. The supported scenarios are `PULL_THROUGH_CACHE`, `REPLICATION`, and `CREATE_ON_PUSH`
   *
   * @public
   */
  appliedFor?: RCTAppliedFor[] | undefined;

  /**
   * The ARN of the role to be assumed by Amazon ECR. This role must be in the same account as the registry that you are configuring. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
   *
   * @public
   */
  customRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryCreationTemplateResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The details of the repository creation template associated with the request.
   *
   * @public
   */
  repositoryCreationTemplate?: RepositoryCreationTemplate | undefined;
}

/**
 * @public
 */
export interface UploadLayerPartRequest {
  /**
   * The Amazon Web Services account ID associated with the registry to which you are uploading layer parts. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to which you are uploading layer parts.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The upload ID from a previous InitiateLayerUpload operation to associate with the layer part upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The position of the first byte of the layer part witin the overall image layer.
   *
   * @public
   */
  partFirstByte: number | undefined;

  /**
   * The position of the last byte of the layer part within the overall image layer.
   *
   * @public
   */
  partLastByte: number | undefined;

  /**
   * The base64-encoded layer part payload.
   *
   * @public
   */
  layerPartBlob: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UploadLayerPartResponse {
  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The upload ID associated with the request.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The integer value of the last byte received in the request.
   *
   * @public
   */
  lastByteReceived?: number | undefined;
}

/**
 * @public
 */
export interface ValidatePullThroughCacheRuleRequest {
  /**
   * The repository name prefix associated with the pull through cache rule.
   *
   * @public
   */
  ecrRepositoryPrefix: string | undefined;

  /**
   * The registry ID associated with the pull through cache rule. If you do not specify a registry, the default registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;
}

/**
 * @public
 */
export interface ValidatePullThroughCacheRuleResponse {
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  ecrRepositoryPrefix?: string | undefined;

  /**
   * The registry ID associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The upstream registry URL associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRegistryUrl?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret associated with the pull through cache rule.
   *
   * @public
   */
  credentialArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the pull through cache rule.
   *
   * @public
   */
  customRoleArn?: string | undefined;

  /**
   * The upstream repository prefix associated with the pull through cache rule.
   *
   * @public
   */
  upstreamRepositoryPrefix?: string | undefined;

  /**
   * Whether or not the pull through cache rule was validated. If `true`, Amazon ECR was able to reach the upstream registry and authentication was successful. If `false`, there was an issue and validation failed. The `failure` reason indicates the cause.
   *
   * @public
   */
  isValid?: boolean | undefined;

  /**
   * The reason the validation failed. For more details about possible causes and how to address them, see [Using pull through cache rules](https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html) in the *Amazon Elastic Container Registry User Guide*.
   *
   * @public
   */
  failure?: string | undefined;
}
