import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface BatchCheckLayerAvailabilityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layers to
   *             check. If you do not specify a registry, the default registry is assumed.</p>
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
   *                 <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or
   *                 <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
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
   *             request.</p>
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
 *             request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 * <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 */
export interface RepositoryNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
  /**
   * <p>The error message associated with the exception.</p>
   */
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

/**
 * <p>Deletes specified images within a specified repository. Images are specified with
 *             either the <code>imageTag</code> or <code>imageDigest</code>.</p>
 */
export interface BatchDeleteImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image to delete.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the image to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to delete. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
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

export interface BatchGetImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the images to
   *             describe. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>A list of image ID references that correspond to images to describe. The format of the
   *                 <code>imageIds</code> reference is <code>imageTag=tag</code> or
   *                 <code>imageDigest=digest</code>.</p>
   */
  imageIds: ImageIdentifier[] | undefined;

  /**
   * <p>The accepted media types for the request.</p>
   *         <p>Valid values: <code>application/vnd.docker.distribution.manifest.v1+json</code> |
   *                 <code>application/vnd.docker.distribution.manifest.v2+json</code> |
   *                 <code>application/vnd.oci.image.manifest.v1+json</code>
   *          </p>
   */
  acceptedMediaTypes?: string[];
}

export namespace BatchGetImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetImageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an Amazon ECR image.</p>
 */
export interface Image {
  /**
   * <p>The Amazon Web Services account ID associated with the registry containing the image.</p>
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

export interface BatchGetImageResponse {
  /**
   * <p>A list of image objects corresponding to the image references in the request.</p>
   */
  images?: Image[];

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: ImageFailure[];
}

export namespace BatchGetImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetImageResponse): any => ({
    ...obj,
  });
}

export interface CompleteLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which to upload layers.
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
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
 */
export interface InvalidLayerException extends __SmithyException, $MetadataBearer {
  name: "InvalidLayerException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 * <p>The operation failed due to a KMS exception.</p>
 */
export interface KmsException extends __SmithyException, $MetadataBearer {
  name: "KmsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The error code returned by KMS.</p>
   */
  kmsError?: string;
}

export namespace KmsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsException): any => ({
    ...obj,
  });
}

/**
 * <p>The image layer already exists in the associated repository.</p>
 */
export interface LayerAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "LayerAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 * <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
 */
export interface UploadNotFoundException extends __SmithyException, $MetadataBearer {
  name: "UploadNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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

export enum EncryptionType {
  AES256 = "AES256",
  KMS = "KMS",
}

/**
 * <p>The encryption configuration for the repository. This determines how the contents of
 *             your repository are encrypted at rest.</p>
 *         <p>By default, when no encryption configuration is set or the <code>AES256</code>
 *             encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption
 *             keys which encrypts your data at rest using an AES-256 encryption algorithm. This does
 *             not require any action on your part.</p>
 *         <p>For more control over the encryption of the contents of your repository, you can use
 *             server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your
 *             images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at
 *                 rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>The encryption type to use.</p>
   *         <p>If you use the <code>KMS</code> encryption type, the contents of the repository will
   *             be encrypted using server-side encryption with Key Management Service key stored in KMS. When you
   *             use KMS to encrypt your data, you can either use the default Amazon Web Services managed KMS key
   *             for Amazon ECR, or specify your own KMS key, which you already created. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">Protecting data using server-side
   *                 encryption with an KMS key stored in Key Management Service (SSE-KMS)</a> in the
   *                 <i>Amazon Simple Storage Service Console Developer Guide.</i>.</p>
   *         <p>If you use the <code>AES256</code> encryption type, Amazon ECR uses server-side encryption
   *             with Amazon S3-managed encryption keys which encrypts the images in the repository using an
   *             AES-256 encryption algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Protecting data using
   *                 server-side encryption with Amazon S3-managed encryption keys (SSE-S3)</a> in the
   *                 <i>Amazon Simple Storage Service Console Developer Guide.</i>.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>If you use the <code>KMS</code> encryption type, specify the KMS key to use for
   *             encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key
   *             must exist in the same Region as the repository. If no key is specified, the default
   *             Amazon Web Services managed KMS key for Amazon ECR will be used.</p>
   */
  kmsKey?: string;
}

export namespace EncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The image scanning configuration for a repository.</p>
 */
export interface ImageScanningConfiguration {
  /**
   * <p>The setting that determines whether images are scanned after being pushed to a
   *             repository. If set to <code>true</code>, images will be scanned after being pushed. If
   *             this parameter is not specified, it will default to <code>false</code> and images will
   *             not be scanned unless a scan is manually started with the <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html">API_StartImageScan</a> API.</p>
   */
  scanOnPush?: boolean;
}

export namespace ImageScanningConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageScanningConfiguration): any => ({
    ...obj,
  });
}

export enum ImageTagMutability {
  IMMUTABLE = "IMMUTABLE",
  MUTABLE = "MUTABLE",
}

/**
 * <p>The metadata that you apply to a resource to help you categorize and organize them.
 *             Each tag consists of a key and an optional value, both of which you define.
 *             Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 */
export interface Tag {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateRepositoryRequest {
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

  /**
   * <p>The tag mutability setting for the repository. If this parameter is omitted, the
   *             default setting of <code>MUTABLE</code> will be used which will allow image tags to be
   *             overwritten. If <code>IMMUTABLE</code> is specified, all image tags within the
   *             repository will be immutable which will prevent them from being overwritten.</p>
   */
  imageTagMutability?: ImageTagMutability | string;

  /**
   * <p>The image scanning configuration for the repository. This determines whether images
   *             are scanned for known vulnerabilities after being pushed to the repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;
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
 * <p>An object representing a repository.</p>
 */
export interface Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the
   *     repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name.
   *     For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   */
  repositoryArn?: string;

  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The URI for the repository. You can use this URI for container image <code>push</code>
   *             and <code>pull</code> operations.</p>
   */
  repositoryUri?: string;

  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability | string;

  /**
   * <p>The image scanning configuration for a repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;

  /**
   * <p>The encryption configuration for the repository. This determines how the contents of
   *             your repository are encrypted at rest.</p>
   */
  encryptionConfiguration?: EncryptionConfiguration;
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
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
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
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 *             can be applied to a repository is 50.</p>
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

export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteLifecyclePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLifecyclePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;
}

export namespace DeleteLifecyclePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLifecyclePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 */
export interface LifecyclePolicyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LifecyclePolicyNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteRegistryPolicyRequest {}

export namespace DeleteRegistryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteRegistryPolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The contents of the registry permissions policy that was deleted.</p>
   */
  policyText?: string;
}

export namespace DeleteRegistryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The registry doesn't have an associated registry policy.</p>
 */
export interface RegistryPolicyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RegistryPolicyNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace RegistryPolicyNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryPolicyNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteRepositoryRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository to
   *             delete. If you do not specify a registry, the default registry is assumed.</p>
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
 *             you must force the deletion with the <code>force</code> parameter.</p>
 */
export interface RepositoryNotEmptyException extends __SmithyException, $MetadataBearer {
  name: "RepositoryNotEmptyException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository policy
   *             to delete. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the repository policy to
   *             delete.</p>
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
 * <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 */
export interface RepositoryPolicyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RepositoryPolicyNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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

export enum TagStatus {
  ANY = "ANY",
  TAGGED = "TAGGED",
  UNTAGGED = "UNTAGGED",
}

/**
 * <p>An object representing a filter on a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface DescribeImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>DescribeImages</a> results. You
   *             can filter results based on whether they are <code>TAGGED</code> or
   *                 <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace DescribeImagesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesFilter): any => ({
    ...obj,
  });
}

export interface DescribeImagesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe images. If you do not specify a registry, the default registry is assumed.</p>
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
   *                 <code>DescribeImages</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value. This value is
   *                 <code>null</code> when there are no more results to return. This option cannot be
   *             used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

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
   * <p>The filter key and value with which to filter your <code>DescribeImages</code>
   *             results.</p>
   */
  filter?: DescribeImagesFilter;
}

export namespace DescribeImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImagesRequest): any => ({
    ...obj,
  });
}

export enum FindingSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  UNDEFINED = "UNDEFINED",
}

/**
 * <p>A summary of the last completed image scan.</p>
 */
export interface ImageScanFindingsSummary {
  /**
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;

  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: { [key: string]: number };
}

export namespace ImageScanFindingsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageScanFindingsSummary): any => ({
    ...obj,
  });
}

export enum ScanStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The current status of an image scan.</p>
 */
export interface ImageScanStatus {
  /**
   * <p>The current state of an image scan.</p>
   */
  status?: ScanStatus | string;

  /**
   * <p>The description of the image scan status.</p>
   */
  description?: string;
}

export namespace ImageScanStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageScanStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An object that describes an image returned by a <a>DescribeImages</a>
 *             operation.</p>
 */
export interface ImageDetail {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which this image belongs.</p>
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
   *         <p>If the image is a manifest list, this will be the max size of all manifests in the
   *             list.</p>
   *         <note>
   *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers
   *                 before pushing them to a V2 Docker registry. The output of the <code>docker
   *                     images</code> command shows the uncompressed image size, so it may return a
   *                 larger image size than the image sizes returned by <a>DescribeImages</a>.</p>
   *         </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current
   *             image was pushed to the repository. </p>
   */
  imagePushedAt?: Date;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * <p>A summary of the last completed image scan.</p>
   */
  imageScanFindingsSummary?: ImageScanFindingsSummary;

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

export interface DescribeImageScanFindingsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to describe the image scan findings for. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository for the image for which to describe the scan findings.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId: ImageIdentifier | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeImageScanFindings</code> request where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value. This value
   *             is null when there are no more results to return.</p>
   */
  nextToken?: string;

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
}

export namespace DescribeImageScanFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageScanFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used in the <a>ImageScanFinding</a> data type.</p>
 */
export interface Attribute {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an image scan finding.</p>
 */
export interface ImageScanFinding {
  /**
   * <p>The name associated with the finding, usually a CVE number.</p>
   */
  name?: string;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>A link containing additional details about the security vulnerability.</p>
   */
  uri?: string;

  /**
   * <p>The finding severity.</p>
   */
  severity?: FindingSeverity | string;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  attributes?: Attribute[];
}

export namespace ImageScanFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageScanFinding): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an image scan.</p>
 */
export interface ImageScanFindings {
  /**
   * <p>The time of the last completed image scan.</p>
   */
  imageScanCompletedAt?: Date;

  /**
   * <p>The time when the vulnerability data was last scanned.</p>
   */
  vulnerabilitySourceUpdatedAt?: Date;

  /**
   * <p>The findings from the image scan.</p>
   */
  findings?: ImageScanFinding[];

  /**
   * <p>The image vulnerability counts, sorted by severity.</p>
   */
  findingSeverityCounts?: { [key: string]: number };
}

export namespace ImageScanFindings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageScanFindings): any => ({
    ...obj,
  });
}

export interface DescribeImageScanFindingsResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;

  /**
   * <p>The information contained in the image scan findings.</p>
   */
  imageScanFindings?: ImageScanFindings;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeImageScanFindings</code> request. When the results of a
   *                 <code>DescribeImageScanFindings</code> request exceed <code>maxResults</code>, this
   *             value can be used to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeImageScanFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageScanFindingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 */
export interface ScanNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ScanNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ScanNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScanNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeRegistryRequest {}

export namespace DescribeRegistryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegistryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An array of objects representing the details of a replication destination.</p>
 */
export interface ReplicationDestination {
  /**
   * <p>A Region to replicate to.</p>
   */
  region: string | undefined;

  /**
   * <p>The account ID of the destination registry to replicate to.</p>
   */
  registryId: string | undefined;
}

export namespace ReplicationDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationDestination): any => ({
    ...obj,
  });
}

/**
 * <p>An array of objects representing the replication destinations for a replication
 *             configuration. A replication configuration may contain only one replication rule but the
 *             rule may contain one or more replication destinations.</p>
 */
export interface ReplicationRule {
  /**
   * <p>An array of objects representing the details of a replication destination.</p>
   */
  destinations: ReplicationDestination[] | undefined;
}

export namespace ReplicationRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationRule): any => ({
    ...obj,
  });
}

/**
 * <p>The replication configuration for a registry.</p>
 */
export interface ReplicationConfiguration {
  /**
   * <p>An array of objects representing the replication rules for a replication
   *             configuration. A replication configuration may contain only one replication rule but the
   *             rule may contain one or more replication destinations.</p>
   */
  rules: ReplicationRule[] | undefined;
}

export namespace ReplicationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationConfiguration): any => ({
    ...obj,
  });
}

export interface DescribeRegistryResponse {
  /**
   * <p>The ID of the registry.</p>
   */
  registryId?: string;

  /**
   * <p>The replication configuration for the registry.</p>
   */
  replicationConfiguration?: ReplicationConfiguration;
}

export namespace DescribeRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegistryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was an exception validating this request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DescribeRepositoriesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repositories to be
   *             described. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>A list of repositories to describe. If this parameter is omitted, then all
   *             repositories in a registry are described.</p>
   */
  repositoryNames?: string[];

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
   *                 <code>DescribeRepositories</code> request. When the results of a
   *                 <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
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

export interface GetAuthorizationTokenRequest {
  /**
   * @deprecated
   *
   * <p>A list of Amazon Web Services account IDs that are associated with the registries for which to get
   *             AuthorizationData objects. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryIds?: string[];
}

export namespace GetAuthorizationTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizationTokenRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing authorization data for an Amazon ECR registry.</p>
 */
export interface AuthorizationData {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationData): any => ({
    ...obj,
  });
}

export interface GetAuthorizationTokenResponse {
  /**
   * <p>A list of authorization token data objects that correspond to the
   *                 <code>registryIds</code> values in the request.</p>
   */
  authorizationData?: AuthorizationData[];
}

export namespace GetAuthorizationTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAuthorizationTokenResponse): any => ({
    ...obj,
  });
}

export interface GetDownloadUrlForLayerRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the image layer to
   *             download. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that is associated with the image layer to download.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest: string | undefined;
}

export namespace GetDownloadUrlForLayerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDownloadUrlForLayerRequest): any => ({
    ...obj,
  });
}

export interface GetDownloadUrlForLayerResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDownloadUrlForLayerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 */
export interface LayerInaccessibleException extends __SmithyException, $MetadataBearer {
  name: "LayerInaccessibleException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}

export namespace LayerInaccessibleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerInaccessibleException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 */
export interface LayersNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LayersNotFoundException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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

export interface GetLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetLifecyclePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLifecyclePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The time stamp of the last time that the lifecycle policy was run.</p>
   */
  lastEvaluatedAt?: Date;
}

export namespace GetLifecyclePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLifecyclePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The filter for the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewFilter {
  /**
   * <p>The tag status of the image.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace LifecyclePolicyPreviewFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyPreviewFilter): any => ({
    ...obj,
  });
}

export interface GetLifecyclePolicyPreviewRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of imageIDs to be included.</p>
   */
  imageIds?: ImageIdentifier[];

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
   * <p>An optional parameter that filters results based on image tag status and all tags, if
   *             tagged.</p>
   */
  filter?: LifecyclePolicyPreviewFilter;
}

export namespace GetLifecyclePolicyPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLifecyclePolicyPreviewRequest): any => ({
    ...obj,
  });
}

export enum ImageActionType {
  EXPIRE = "EXPIRE",
}

/**
 * <p>The type of action to be taken.</p>
 */
export interface LifecyclePolicyRuleAction {
  /**
   * <p>The type of action to be taken.</p>
   */
  type?: ImageActionType | string;
}

export namespace LifecyclePolicyRuleAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyRuleAction): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the lifecycle policy preview.</p>
 */
export interface LifecyclePolicyPreviewResult {
  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: string[];

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
   * <p>The type of action to be taken.</p>
   */
  action?: LifecyclePolicyRuleAction;

  /**
   * <p>The priority of the applied rule.</p>
   */
  appliedRulePriority?: number;
}

export namespace LifecyclePolicyPreviewResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyPreviewResult): any => ({
    ...obj,
  });
}

export enum LifecyclePolicyPreviewStatus {
  COMPLETE = "COMPLETE",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The summary of the lifecycle policy preview request.</p>
 */
export interface LifecyclePolicyPreviewSummary {
  /**
   * <p>The number of expiring images.</p>
   */
  expiringImageTotalCount?: number;
}

export namespace LifecyclePolicyPreviewSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyPreviewSummary): any => ({
    ...obj,
  });
}

export interface GetLifecyclePolicyPreviewResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus | string;

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
   * <p>The list of images that is returned as a result of the action.</p>
   */
  summary?: LifecyclePolicyPreviewSummary;
}

export namespace GetLifecyclePolicyPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLifecyclePolicyPreviewResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There is no dry run for this repository.</p>
 */
export interface LifecyclePolicyPreviewNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LifecyclePolicyPreviewNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyPreviewNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyPreviewNotFoundException): any => ({
    ...obj,
  });
}

export interface GetRegistryPolicyRequest {}

export namespace GetRegistryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetRegistryPolicyResponse {
  /**
   * <p>The ID of the registry.</p>
   */
  registryId?: string;

  /**
   * <p>The JSON text of the permissions policy for a registry.</p>
   */
  policyText?: string;
}

export namespace GetRegistryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
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
   * <p>The JSON repository policy text associated with the repository.</p>
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

export interface InitiateLayerUploadRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which you intend to upload
   *             layers. If you do not specify a registry, the default registry is assumed.</p>
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
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a>
   *             operations.</p>
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
 * <p>An object representing a filter on a <a>ListImages</a> operation.</p>
 */
export interface ListImagesFilter {
  /**
   * <p>The tag status with which to filter your <a>ListImages</a> results. You can
   *             filter results based on whether they are <code>TAGGED</code> or
   *             <code>UNTAGGED</code>.</p>
   */
  tagStatus?: TagStatus | string;
}

export namespace ListImagesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesFilter): any => ({
    ...obj,
  });
}

export interface ListImagesRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to list images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository with image IDs to be listed.</p>
   */
  repositoryName: string | undefined;

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
   * <p>The filter key and value with which to filter your <code>ListImages</code>
   *             results.</p>
   */
  filter?: ListImagesFilter;
}

export namespace ListImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesRequest): any => ({
    ...obj,
  });
}

export interface ListImagesResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImagesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             only supported resource is an Amazon ECR repository.</p>
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

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
 */
export interface ImageAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ImageAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The error message associated with the exception.</p>
   */
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
 *             image.</p>
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
 *             configured for tag immutability.</p>
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

export interface PutImageRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to put the image. If you do not specify a registry, the default registry is assumed.</p>
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
   *             contain the <code>mediaType</code> field, you must specify the
   *                 <code>imageManifestMediaType</code> in the request.</p>
   */
  imageManifestMediaType?: string;

  /**
   * <p>The tag to associate with the image. This parameter is required for images that use
   *             the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.</p>
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

export interface PutImageScanningConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image scanning configuration setting.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to update the image scanning configuration
   *             setting.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The image scanning configuration for the repository. This setting determines whether
   *             images are scanned for known vulnerabilities after being pushed to the
   *             repository.</p>
   */
  imageScanningConfiguration: ImageScanningConfiguration | undefined;
}

export namespace PutImageScanningConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageScanningConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutImageScanningConfigurationResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The image scanning configuration setting for the repository.</p>
   */
  imageScanningConfiguration?: ImageScanningConfiguration;
}

export namespace PutImageScanningConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageScanningConfigurationResponse): any => ({
    ...obj,
  });
}

export interface PutImageTagMutabilityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to update the image tag mutability settings. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository in which to update the image tag mutability
   *             settings.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The tag mutability setting for the repository. If <code>MUTABLE</code> is specified,
   *             image tags can be overwritten. If <code>IMMUTABLE</code> is specified, all image tags
   *             within the repository will be immutable which will prevent them from being
   *             overwritten.</p>
   */
  imageTagMutability: ImageTagMutability | string | undefined;
}

export namespace PutImageTagMutabilityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageTagMutabilityRequest): any => ({
    ...obj,
  });
}

export interface PutImageTagMutabilityResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The image tag mutability setting for the repository.</p>
   */
  imageTagMutability?: ImageTagMutability | string;
}

export namespace PutImageTagMutabilityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutImageTagMutabilityResponse): any => ({
    ...obj,
  });
}

export interface PutLifecyclePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository. If you
   *             do  not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON repository policy text to apply to the repository.</p>
   */
  lifecyclePolicyText: string | undefined;
}

export namespace PutLifecyclePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLifecyclePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutLifecyclePolicyResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;
}

export namespace PutLifecyclePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLifecyclePolicyResponse): any => ({
    ...obj,
  });
}

export interface PutRegistryPolicyRequest {
  /**
   * <p>The JSON policy text to apply to your registry. The policy text follows the same
   *             format as IAM policy text. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry
   *                 permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;
}

export namespace PutRegistryPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRegistryPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutRegistryPolicyResponse {
  /**
   * <p>The registry ID.</p>
   */
  registryId?: string;

  /**
   * <p>The JSON policy text for your registry.</p>
   */
  policyText?: string;
}

export namespace PutRegistryPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRegistryPolicyResponse): any => ({
    ...obj,
  });
}

export interface PutReplicationConfigurationRequest {
  /**
   * <p>An object representing the replication configuration for a registry.</p>
   */
  replicationConfiguration: ReplicationConfiguration | undefined;
}

export namespace PutReplicationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutReplicationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutReplicationConfigurationResponse {
  /**
   * <p>The contents of the replication configuration for the registry.</p>
   */
  replicationConfiguration?: ReplicationConfiguration;
}

export namespace PutReplicationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutReplicationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface SetRepositoryPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to receive the policy.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON repository policy text to apply to the repository. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Amazon ECR repository
   *                 policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
   */
  policyText: string | undefined;

  /**
   * <p>If the policy you are attempting to set on a repository policy would prevent you from
   *             setting another policy in the future, you must force the <a>SetRepositoryPolicy</a> operation. This is intended to prevent accidental
   *             repository lock outs.</p>
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

export interface StartImageScanRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository in
   *             which to start an image scan request. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository that contains the images to scan.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId: ImageIdentifier | undefined;
}

export namespace StartImageScanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImageScanRequest): any => ({
    ...obj,
  });
}

export interface StartImageScanResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>An object with identifying information for an Amazon ECR image.</p>
   */
  imageId?: ImageIdentifier;

  /**
   * <p>The current state of the scan.</p>
   */
  imageScanStatus?: ImageScanStatus;
}

export namespace StartImageScanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImageScanResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The image is of a type that cannot be scanned.</p>
 */
export interface UnsupportedImageTypeException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedImageTypeException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedImageTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedImageTypeException): any => ({
    ...obj,
  });
}

/**
 * <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 */
export interface LifecyclePolicyPreviewInProgressException extends __SmithyException, $MetadataBearer {
  name: "LifecyclePolicyPreviewInProgressException";
  $fault: "client";
  message?: string;
}

export namespace LifecyclePolicyPreviewInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecyclePolicyPreviewInProgressException): any => ({
    ...obj,
  });
}

export interface StartLifecyclePolicyPreviewRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry that contains the repository.
   *             If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to be evaluated.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The policy to be evaluated against. If you do not specify a policy, the current policy
   *             for the repository is used.</p>
   */
  lifecyclePolicyText?: string;
}

export namespace StartLifecyclePolicyPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLifecyclePolicyPreviewRequest): any => ({
    ...obj,
  });
}

export interface StartLifecyclePolicyPreviewResponse {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON repository policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: LifecyclePolicyPreviewStatus | string;
}

export namespace StartLifecyclePolicyPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLifecyclePolicyPreviewResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
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

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 */
export interface InvalidLayerPartException extends __SmithyException, $MetadataBearer {
  name: "InvalidLayerPartException";
  $fault: "client";
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

  /**
   * <p>The last valid byte received from the layer part upload that is associated with the
   *             exception.</p>
   */
  lastValidByteReceived?: number;

  /**
   * <p>The error message associated with the exception.</p>
   */
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

export interface UploadLayerPartRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the registry to which you are uploading layer
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
