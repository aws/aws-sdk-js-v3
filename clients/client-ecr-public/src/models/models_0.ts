// smithy-typescript generated code
import type { ImageFailureCode, LayerAvailability, LayerFailureCode, RegistryAliasStatus } from "./enums";

/**
 * An authorization token data object that corresponds to a public registry.
 *
 * @public
 */
export interface AuthorizationData {
  /**
   * A base64-encoded string that contains authorization data for a public Amazon ECR registry. When the string is decoded, it's presented in the format `user:password` for public registry authentication using `docker login`.
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
}

/**
 * @public
 */
export interface BatchCheckLayerAvailabilityRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, associated with the public registry that contains the image layers to check. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that's associated with the image layers to check.
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
 * An object that represents an Amazon ECR image layer failure.
 *
 * @public
 */
export interface LayerFailure {
  /**
   * The layer digest that's associated with the failure.
   *
   * @public
   */
  layerDigest?: string | undefined;

  /**
   * The failure code that's associated with the failure.
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
 * An object that represents an Amazon ECR image layer.
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
   * A list of image layer objects that correspond to the image layer references in the request.
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
 * An object with identifying information for an Amazon ECR image.
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
   * The tag that's used for the image.
   *
   * @public
   */
  imageTag?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteImageRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, that's associated with the registry that contains the image to delete. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository in a public registry that contains the image to delete.
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
 * An object that represents an Amazon ECR image failure.
 *
 * @public
 */
export interface ImageFailure {
  /**
   * The image ID that's associated with the failure.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The code that's associated with the failure.
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
export interface CompleteLayerUploadRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, associated with the registry where layers are uploaded. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository in a public registry to associate with the image layer.
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
   * The public registry ID that's associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name that's associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The upload ID that's associated with the layer.
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
 * An object that contains the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
 *
 * @public
 */
export interface RepositoryCatalogDataInput {
  /**
   * A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures appear as badges on the repository and are used as search filters.
   *
   * > **Note:** If an unsupported tag is added to your repository catalog data, it's associated with the repository and can be retrieved using the API but isn't discoverable in the Amazon ECR Public Gallery.
   *
   * - `ARM`
   * - `ARM 64`
   * - `x86`
   * - `x86-64`
   *
   * @public
   */
  architectures?: string[] | undefined;

  /**
   * The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems appear as badges on the repository and are used as search filters.
   *
   * > **Note:** If an unsupported tag is added to your repository catalog data, it's associated with the repository and can be retrieved using the API but isn't discoverable in the Amazon ECR Public Gallery.
   *
   * - `Linux`
   * - `Windows`
   *
   * @public
   */
  operatingSystems?: string[] | undefined;

  /**
   * The base64-encoded repository logo payload.
   *
   * > **Note:** The repository logo is only publicly visible in the Amazon ECR Public Gallery for verified accounts.
   *
   * @public
   */
  logoImageBlob?: Uint8Array | undefined;

  /**
   * A detailed description of the contents of the repository. It's publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format.
   *
   * @public
   */
  aboutText?: string | undefined;

  /**
   * Detailed information about how to use the contents of the repository. It's publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format.
   *
   * @public
   */
  usageText?: string | undefined;
}

/**
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * The name to use for the repository. This appears publicly in the Amazon ECR Public Gallery. The repository name can be specified on its own (for example `nginx-web-app`) or prepended with a namespace to group the repository into a category (for example `project-a/nginx-web-app`).
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The details about the repository that are publicly visible in the Amazon ECR Public Gallery.
   *
   * @public
   */
  catalogData?: RepositoryCatalogDataInput | undefined;

  /**
   * The metadata that you apply to each repository to help categorize and organize your repositories. Each tag consists of a key and an optional value. You define both of them. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
 *
 * @public
 */
export interface RepositoryCatalogData {
  /**
   * The short description of the repository.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The architecture tags that are associated with the repository.
   *
   * > **Note:** Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see RepositoryCatalogDataInput.
   *
   * @public
   */
  architectures?: string[] | undefined;

  /**
   * The operating system tags that are associated with the repository.
   *
   * > **Note:** Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see RepositoryCatalogDataInput.
   *
   * @public
   */
  operatingSystems?: string[] | undefined;

  /**
   * The URL that contains the logo that's associated with the repository.
   *
   * @public
   */
  logoUrl?: string | undefined;

  /**
   * The longform description of the contents of the repository. This text appears in the repository details on the Amazon ECR Public Gallery.
   *
   * @public
   */
  aboutText?: string | undefined;

  /**
   * The longform usage details of the contents of the repository. The usage text provides context for users of the repository.
   *
   * @public
   */
  usageText?: string | undefined;

  /**
   * Indicates whether the repository is certified by Amazon Web Services Marketplace.
   *
   * @public
   */
  marketplaceCertified?: boolean | undefined;
}

/**
 * An object representing a repository.
 *
 * @public
 */
export interface Repository {
  /**
   * The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the `arn:aws:ecr` namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name. For example, `arn:aws:ecr:region:012345678910:repository/test`.
   *
   * @public
   */
  repositoryArn?: string | undefined;

  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository.
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

  /**
   * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
   *
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository to delete. If you do not specify a registry, the default public registry is assumed.
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
   * The force option can be used to delete a repository that contains images. If the force option is not used, the repository must be empty prior to deletion.
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
export interface DeleteRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository policy to delete. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that's associated with the repository policy to delete.
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
   * The registry ID that's associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name that's associated with the request.
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
export interface DescribeImagesRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository where images are described. If you do not specify a registry, the default public registry is assumed.
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
   * The `nextToken` value that's returned from a previous paginated `DescribeImages` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. If there are no more results to return, this value is `null`. If you specify images with `imageIds`, you can't use this option.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results that's returned by `DescribeImages` in paginated output. When this parameter is used, `DescribeImages` only returns `maxResults` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `DescribeImages` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter isn't used, then `DescribeImages` returns up to 100 results and a `nextToken` value, if applicable. If you specify images with `imageIds`, you can't use this option.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that describes an image that's returned by a DescribeImages operation.
 *
 * @public
 */
export interface ImageDetail {
  /**
   * The Amazon Web Services account ID that's associated with the public registry where this image belongs.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository where this image belongs.
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
   * The list of tags that's associated with this image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The size, in bytes, of the image in the repository.
   *
   * If the image is a manifest list, this is the max size of all manifests in the list.
   *
   * > **Note:** Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the `docker images` command shows the uncompressed image size, so it might return a larger image size than the image sizes that are returned by DescribeImages.
   *
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, that the current image was pushed to the repository at.
   *
   * @public
   */
  imagePushedAt?: Date | undefined;

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
   * The `nextToken` value to include in a future `DescribeImages` request. When the results of a `DescribeImages` request exceed `maxResults`, you can use this value to retrieve the next page of results. If there are no more results to return, this value is `null`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageTagsRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository where images are described. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that contains the image tag details to describe.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The `nextToken` value that's returned from a previous paginated `DescribeImageTags` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. If there are no more results to return, this value is `null`. If you specify images with `imageIds`, you can't use this option.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results that's returned by `DescribeImageTags` in paginated output. When this parameter is used, `DescribeImageTags` only returns `maxResults` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `DescribeImageTags` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter isn't used, then `DescribeImageTags` returns up to 100 results and a `nextToken` value, if applicable. If you specify images with `imageIds`, you can't use this option.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that describes the image tag details that are returned by a DescribeImageTags action.
 *
 * @public
 */
export interface ReferencedImageDetail {
  /**
   * The `sha256` digest of the image manifest.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The size, in bytes, of the image in the repository.
   *
   * If the image is a manifest list, this is the max size of all manifests in the list.
   *
   * > **Note:** Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the `docker images` command shows the uncompressed image size, so it might return a larger image size than the image sizes that are returned by DescribeImages.
   *
   * @public
   */
  imageSizeInBytes?: number | undefined;

  /**
   * The date and time, expressed in standard JavaScript date format, which the current image tag was pushed to the repository at.
   *
   * @public
   */
  imagePushedAt?: Date | undefined;

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
}

/**
 * An object that represents the image tag details for an image.
 *
 * @public
 */
export interface ImageTagDetail {
  /**
   * The tag that's associated with the image.
   *
   * @public
   */
  imageTag?: string | undefined;

  /**
   * The time stamp that indicates when the image tag was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * An object that describes the details of an image.
   *
   * @public
   */
  imageDetail?: ReferencedImageDetail | undefined;
}

/**
 * @public
 */
export interface DescribeImageTagsResponse {
  /**
   * The image tag details for the images in the requested repository.
   *
   * @public
   */
  imageTagDetails?: ImageTagDetail[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeImageTags` request. When the results of a `DescribeImageTags` request exceed `maxResults`, you can use this value to retrieve the next page of results. If there are no more results to return, this value is `null`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistriesRequest {
  /**
   * The `nextToken` value that's returned from a previous paginated `DescribeRegistries` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. If there are no more results to return, this value is `null`.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results that's returned by `DescribeRegistries` in paginated output. When this parameter is used, `DescribeRegistries` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `DescribeRegistries` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter isn't used, then `DescribeRegistries` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object representing the aliases for a public registry. A public registry is given an alias when it's created. However, a custom alias can be set using the Amazon ECR console. For more information, see [Registries](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @public
 */
export interface RegistryAlias {
  /**
   * The name of the registry alias.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the registry alias.
   *
   * @public
   */
  status: RegistryAliasStatus | undefined;

  /**
   * Indicates whether the registry alias is the primary alias for the registry. If true, the alias is the primary registry alias and is displayed in both the repository URL and the image URI used in the `docker pull` commands on the Amazon ECR Public Gallery.
   *
   * > **Note:** A registry alias that isn't the primary registry alias can be used in the repository URI in a `docker pull` command.
   *
   * @public
   */
  primaryRegistryAlias: boolean | undefined;

  /**
   * Indicates whether the registry alias is the default alias for the registry. When the first public repository is created, your public registry is assigned a default registry alias.
   *
   * @public
   */
  defaultRegistryAlias: boolean | undefined;
}

/**
 * The details of a public registry.
 *
 * @public
 */
export interface Registry {
  /**
   * The Amazon Web Services account ID that's associated with the registry. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the public registry.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The URI of a public registry. The URI contains a universal prefix and the registry alias.
   *
   * @public
   */
  registryUri: string | undefined;

  /**
   * Indicates whether the account is a verified Amazon Web Services Marketplace vendor. If an account is verified, each public repository receives a verified account badge on the Amazon ECR Public Gallery.
   *
   * @public
   */
  verified: boolean | undefined;

  /**
   * An array of objects that represents the aliases for a public registry.
   *
   * @public
   */
  aliases: RegistryAlias[] | undefined;
}

/**
 * @public
 */
export interface DescribeRegistriesResponse {
  /**
   * An object that contains the details for a public registry.
   *
   * @public
   */
  registries: Registry[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeRepositories` request. If the results of a `DescribeRepositories` request exceed `maxResults`, you can use this value to retrieve the next page of results. If there are no more results, this value is `null`.
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
   * The Amazon Web Services account ID that's associated with the registry that contains the repositories to be described. If you do not specify a registry, the default public registry is assumed.
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
   * The `nextToken` value that's returned from a previous paginated `DescribeRepositories` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. If there are no more results to return, this value is `null`. If you specify repositories with `repositoryNames`, you can't use this option.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of repository results that's returned by `DescribeRepositories` in paginated output. When this parameter is used, `DescribeRepositories` only returns `maxResults` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `DescribeRepositories` request with the returned `nextToken` value. This value can be between 1 and 1000. If this parameter isn't used, then `DescribeRepositories` returns up to 100 results and a `nextToken` value, if applicable. If you specify repositories with `repositoryNames`, you can't use this option.
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
   * The `nextToken` value to include in a future `DescribeRepositories` request. When the results of a `DescribeRepositories` request exceed `maxResults`, this value can be used to retrieve the next page of results. If there are no more results to return, this value is `null`.
   *
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
   * An authorization token data object that corresponds to a public registry.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
}

/**
 * @public
 */
export interface GetRegistryCatalogDataRequest {}

/**
 * The metadata for a public registry.
 *
 * @public
 */
export interface RegistryCatalogData {
  /**
   * The display name for a public registry. This appears on the Amazon ECR Public Gallery.
   *
   * > **Important:** Only accounts that have the verified account badge can have a registry display name.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryCatalogDataResponse {
  /**
   * The catalog metadata for the public registry.
   *
   * @public
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

/**
 * @public
 */
export interface GetRepositoryCatalogDataRequest {
  /**
   * The Amazon Web Services account ID that's associated with the registry that contains the repositories to be described. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to retrieve the catalog metadata for.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryCatalogDataResponse {
  /**
   * The catalog metadata for the repository.
   *
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry that contains the repository. If you do not specify a registry, the default public registry is assumed.
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
   * The registry ID that's associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name that's associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The repository policy text that's associated with the repository. The policy text will be in JSON format.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * An object that represents an Amazon ECR image.
 *
 * @public
 */
export interface Image {
  /**
   * The Amazon Web Services account ID that's associated with the registry containing the image.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that's associated with the image.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An object that contains the image tag and image digest associated with an image.
   *
   * @public
   */
  imageId?: ImageIdentifier | undefined;

  /**
   * The image manifest that's associated with the image.
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
export interface InitiateLayerUploadRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, that's associated with the registry to which you intend to upload layers. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that you want to upload layers to.
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
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resource is an Amazon ECR Public repository.
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
export interface PutImageRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, that's associated with the public registry that contains the repository where the image is put. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository where the image is put.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The image manifest that corresponds to the image to be uploaded.
   *
   * @public
   */
  imageManifest: string | undefined;

  /**
   * The media type of the image manifest. If you push an image manifest that doesn't contain the `mediaType` field, you must specify the `imageManifestMediaType` in the request.
   *
   * @public
   */
  imageManifestMediaType?: string | undefined;

  /**
   * The tag to associate with the image. This parameter is required for images that use the Docker Image Manifest V2 Schema 2 or Open Container Initiative (OCI) formats.
   *
   * @public
   */
  imageTag?: string | undefined;

  /**
   * The image digest of the image manifest that corresponds to the image.
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
export interface PutRegistryCatalogDataRequest {
  /**
   * The display name for a public registry. The display name is shown as the repository author in the Amazon ECR Public Gallery.
   *
   * > **Note:** The registry display name is only publicly visible in the Amazon ECR Public Gallery for verified accounts.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface PutRegistryCatalogDataResponse {
  /**
   * The catalog data for the public registry.
   *
   * @public
   */
  registryCatalogData: RegistryCatalogData | undefined;
}

/**
 * @public
 */
export interface PutRepositoryCatalogDataRequest {
  /**
   * The Amazon Web Services account ID that's associated with the public registry the repository is in. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository to create or update the catalog data for.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
   *
   * @public
   */
  catalogData: RepositoryCatalogDataInput | undefined;
}

/**
 * @public
 */
export interface PutRepositoryCatalogDataResponse {
  /**
   * The catalog data for the repository.
   *
   * @public
   */
  catalogData?: RepositoryCatalogData | undefined;
}

/**
 * @public
 */
export interface SetRepositoryPolicyRequest {
  /**
   * The Amazon Web Services account ID that's associated with the registry that contains the repository. If you do not specify a registry, the default public registry is assumed.
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
   * The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR Repository Policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
   *
   * @public
   */
  policyText: string | undefined;

  /**
   * If the policy that you want to set on a repository policy would prevent you from setting another policy in the future, you must force the SetRepositoryPolicy operation. This prevents accidental repository lockouts.
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
   * The registry ID that's associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name that's associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The JSON repository policy text that's applied to the repository.
   *
   * @public
   */
  policyText?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resource is an Amazon ECR Public repository.
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
   * The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resource is an Amazon ECR Public repository.
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
export interface UploadLayerPartRequest {
  /**
   * The Amazon Web Services account ID, or registry alias, that's associated with the registry that you're uploading layer parts to. If you do not specify a registry, the default public registry is assumed.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository that you're uploading layer parts to.
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
   * The registry ID that's associated with the request.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The repository name that's associated with the request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The upload ID that's associated with the request.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The integer value of the last byte that's received in the request.
   *
   * @public
   */
  lastByteReceived?: number | undefined;
}
