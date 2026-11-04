// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  AllowPublish,
  AllowUpstream,
  DomainStatus,
  EndpointType,
  ExternalConnectionStatus,
  HashAlgorithm,
  PackageFormat,
  PackageGroupAllowedRepositoryUpdateType,
  PackageGroupAssociationType,
  PackageGroupOriginRestrictionMode,
  PackageGroupOriginRestrictionType,
  PackageVersionErrorCode,
  PackageVersionOriginType,
  PackageVersionSortType,
  PackageVersionStatus,
} from "./enums";

/**
 * Contains details about a package version asset.
 *
 * @public
 */
export interface AssetSummary {
  /**
   * The name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The size of the asset.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The hashes of the asset.
   *
   * @public
   */
  hashes?: Partial<Record<HashAlgorithm, string>> | undefined;
}

/**
 * A package associated with a package group.
 *
 * @public
 */
export interface AssociatedPackage {
  /**
   * A format that specifies the type of the associated package.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the associated package. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the associated package.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * Describes the strength of the association between the package and package group. A strong match can be thought of as an exact match, and a weak match can be thought of as a variation match, for example, the package name matches a variation of the package group pattern. For more information about package group pattern matching, including strong and weak matches, see [Package group definition syntax and matching behavior](https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html) in the *CodeArtifact User Guide*.
   *
   * @public
   */
  associationType?: PackageGroupAssociationType | undefined;
}

/**
 * @public
 */
export interface AssociateExternalConnectionRequest {
  /**
   * The name of the domain that contains the repository.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository to which the external connection is added.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The name of the external connection to add to the repository. The following values are supported:
   *
   * - `public:npmjs` - for the npm public repository.
   * - `public:nuget-org` - for the NuGet Gallery.
   * - `public:pypi` - for the Python Package Index.
   * - `public:maven-central` - for Maven Central.
   * - `public:maven-googleandroid` - for the Google Android repository.
   * - `public:maven-gradleplugins` - for the Gradle plugins repository.
   * - `public:maven-commonsware` - for the CommonsWare Android repository.
   * - `public:maven-clojars` - for the Clojars repository.
   * - `public:ruby-gems-org` - for RubyGems.org.
   * - `public:crates-io` - for Crates.io.
   *
   * @public
   */
  externalConnection: string | undefined;
}

/**
 * Contains information about the external connection of a repository.
 *
 * @public
 */
export interface RepositoryExternalConnectionInfo {
  /**
   * The name of the external connection associated with a repository.
   *
   * @public
   */
  externalConnectionName?: string | undefined;

  /**
   * The package format associated with a repository's external connection. The valid package formats are:
   *
   * - `npm`: A Node Package Manager (npm) package.
   * - `pypi`: A Python Package Index (PyPI) package.
   * - `maven`: A Maven package that contains compiled code in a distributable format, such as a JAR file.
   * - `nuget`: A NuGet package.
   * - `generic`: A generic package.
   * - `ruby`: A Ruby package.
   * - `swift`: A Swift package.
   * - `cargo`: A Cargo package.
   *
   * @public
   */
  packageFormat?: PackageFormat | undefined;

  /**
   * The status of the external connection of a repository. There is one valid value, `Available`.
   *
   * @public
   */
  status?: ExternalConnectionStatus | undefined;
}

/**
 * Information about an upstream repository.
 *
 * @public
 */
export interface UpstreamRepositoryInfo {
  /**
   * The name of an upstream repository.
   *
   * @public
   */
  repositoryName?: string | undefined;
}

/**
 * The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the `npm` CLI, the Maven CLI (`mvn`), and `pip`. You can create up to 100 repositories per Amazon Web Services account.
 *
 * @public
 */
export interface RepositoryDescription {
  /**
   * The name of the repository.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that manages the repository.
   *
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * The name of the domain that contains the repository.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the repository.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A text description of the repository.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html).
   *
   * @public
   */
  upstreams?: UpstreamRepositoryInfo[] | undefined;

  /**
   * An array of external connections associated with the repository.
   *
   * @public
   */
  externalConnections?: RepositoryExternalConnectionInfo[] | undefined;

  /**
   * A timestamp that represents the date and time the repository was created.
   *
   * @public
   */
  createdTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateExternalConnectionResult {
  /**
   * Information about the connected repository after processing the request.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface CopyPackageVersionsRequest {
  /**
   * The name of the domain that contains the source and destination repositories.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package versions to be copied.
   *
   * @public
   */
  sourceRepository: string | undefined;

  /**
   * The name of the repository into which package versions are copied.
   *
   * @public
   */
  destinationRepository: string | undefined;

  /**
   * The format of the package versions to be copied.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package versions to be copied. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when copying package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the versions to be copied.
   *
   * @public
   */
  package: string | undefined;

  /**
   * The versions of the package to be copied.
   *
   * > **Note:** You must specify `versions` or `versionRevisions`. You cannot specify both.
   *
   * @public
   */
  versions?: string[] | undefined;

  /**
   * A list of key-value pairs. The keys are package versions and the values are package version revisions. A `CopyPackageVersion` operation succeeds if the specified versions in the source repository match the specified package version revision.
   *
   * > **Note:** You must specify `versions` or `versionRevisions`. You cannot specify both.
   *
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the `failedVersions` field of the response with an `ALREADY_EXISTS` error code.
   *
   * @public
   */
  allowOverwrite?: boolean | undefined;

  /**
   * Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html).
   *
   * @public
   */
  includeFromUpstream?: boolean | undefined;
}

/**
 * l An error associated with package.
 *
 * @public
 */
export interface PackageVersionError {
  /**
   * The error code associated with the error. Valid error codes are:
   *
   * - `ALREADY_EXISTS`
   * - `MISMATCHED_REVISION`
   * - `MISMATCHED_STATUS`
   * - `NOT_ALLOWED`
   * - `NOT_FOUND`
   * - `SKIPPED`
   *
   * @public
   */
  errorCode?: PackageVersionErrorCode | undefined;

  /**
   * The error message associated with the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Contains the revision and status of a package version.
 *
 * @public
 */
export interface SuccessfulPackageVersionInfo {
  /**
   * The revision of a package version.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The status of a package version.
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface CopyPackageVersionsResult {
  /**
   * A list of the package versions that were successfully copied to your repository.
   *
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * A map of package versions that failed to copy and their error codes. The possible error codes are in the `PackageVersionError` data type. They are:
   *
   * - `ALREADY_EXISTS`
   * - `MISMATCHED_REVISION`
   * - `MISMATCHED_STATUS`
   * - `NOT_ALLOWED`
   * - `NOT_FOUND`
   * - `SKIPPED`
   *
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * The name of the domain to create. All domain names in an Amazon Web Services Region that are in the same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an `encryptionKey`, your IAM role must have `kms:DescribeKey` and `kms:CreateGrant` permissions on the encryption key that is used. For more information, see [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax) in the *Key Management Service API Reference* and [Key Management Service API Permissions Reference](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) in the *Key Management Service Developer Guide*.
   *
   * > **Important:** CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see [Using symmetric and asymmetric keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * One or more tag key-value pairs for the domain.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories.
 *
 * @public
 */
export interface DomainDescription {
  /**
   * The name of the domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the domain.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the domain.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The current status of a domain.
   *
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * A timestamp that represents the date and time the domain was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * The ARN of an Key Management Service (KMS) key associated with a domain.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * The number of repositories in the domain.
   *
   * @public
   */
  repositoryCount?: number | undefined;

  /**
   * The total size of all assets in the domain.
   *
   * @public
   */
  assetSizeBytes?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket that is used to store package assets in the domain.
   *
   * @public
   */
  s3BucketArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainResult {
  /**
   * Contains information about the created domain after processing the request.
   *
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface CreatePackageGroupRequest {
  /**
   * The name of the domain in which you want to create a package group.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group to create. The pattern is also the identifier of the package group.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * The contact information for the created package group.
   *
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * A description of the package group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * One or more tag key-value pairs for the package group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Information about the identifiers of a package group.
 *
 * @public
 */
export interface PackageGroupReference {
  /**
   * The ARN of the package group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The pattern of the package group. The pattern determines which packages are associated with the package group, and is also the identifier of the package group.
   *
   * @public
   */
  pattern?: string | undefined;
}

/**
 * Contains information about the configured restrictions of the origin controls of a package group.
 *
 * @public
 */
export interface PackageGroupOriginRestriction {
  /**
   * The package group origin restriction setting. If the value of `mode` is `ALLOW`, `ALLOW_SPECIFIC_REPOSITORIES`, or `BLOCK`, then the value of `effectiveMode` is the same. Otherwise, when the value is `INHERIT`, then the value of `effectiveMode` is the value of `mode` of the first parent group which does not have a value of `INHERIT`.
   *
   * @public
   */
  mode?: PackageGroupOriginRestrictionMode | undefined;

  /**
   * The effective package group origin restriction setting. If the value of `mode` is `ALLOW`, `ALLOW_SPECIFIC_REPOSITORIES`, or `BLOCK`, then the value of `effectiveMode` is the same. Otherwise, when the value of `mode` is `INHERIT`, then the value of `effectiveMode` is the value of `mode` of the first parent group which does not have a value of `INHERIT`.
   *
   * @public
   */
  effectiveMode?: PackageGroupOriginRestrictionMode | undefined;

  /**
   * The parent package group that the package group origin restrictions are inherited from.
   *
   * @public
   */
  inheritedFrom?: PackageGroupReference | undefined;

  /**
   * The number of repositories in the allowed repository list.
   *
   * @public
   */
  repositoriesCount?: number | undefined;
}

/**
 * The package group origin configuration that determines how package versions can enter repositories.
 *
 * @public
 */
export interface PackageGroupOriginConfiguration {
  /**
   * The origin configuration settings that determine how package versions can enter repositories.
   *
   * @public
   */
  restrictions?: Partial<Record<PackageGroupOriginRestrictionType, PackageGroupOriginRestriction>> | undefined;
}

/**
 * The description of the package group.
 *
 * @public
 */
export interface PackageGroupDescription {
  /**
   * The ARN of the package group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The pattern of the package group. The pattern determines which packages are associated with the package group.
   *
   * @public
   */
  pattern?: string | undefined;

  /**
   * The name of the domain that contains the package group.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * A timestamp that represents the date and time the package group was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * The contact information of the package group.
   *
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * The description of the package group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The package group origin configuration that determines how package versions can enter repositories.
   *
   * @public
   */
  originConfiguration?: PackageGroupOriginConfiguration | undefined;

  /**
   * The direct parent package group of the package group.
   *
   * @public
   */
  parent?: PackageGroupReference | undefined;
}

/**
 * @public
 */
export interface CreatePackageGroupResult {
  /**
   * Information about the created package group after processing the request.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * Information about an upstream repository. A list of `UpstreamRepository` objects is an input parameter to [CreateRepository](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html) and [UpdateRepository](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html).
 *
 * @public
 */
export interface UpstreamRepository {
  /**
   * The name of an upstream repository.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * The name of the domain that contains the created repository.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository to create.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A description of the created repository.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html).
   *
   * @public
   */
  upstreams?: UpstreamRepository[] | undefined;

  /**
   * One or more tag key-value pairs for the repository.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryResult {
  /**
   * Information about the created repository after processing the request.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The name of the domain to delete.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResult {
  /**
   * Contains information about the deleted domain after processing the request.
   *
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainPermissionsPolicyRequest {
  /**
   * The name of the domain associated with the resource policy to be deleted.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
   *
   * @public
   */
  policyRevision?: string | undefined;
}

/**
 * An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The ARN of the resource associated with the resource policy
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The current revision of the resource policy.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The resource policy formatted in JSON.
   *
   * @public
   */
  document?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainPermissionsPolicyResult {
  /**
   * Information about the deleted resource policy after processing the request.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * The name of the domain that contains the package to delete.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package to delete.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format of the requested package to delete.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when deleting packages of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package to delete.
   *
   * @public
   */
  package: string | undefined;
}

/**
 * Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.
 *
 * @public
 */
export interface PackageOriginRestrictions {
  /**
   * The package origin configuration that determines if new versions of the package can be published directly to the repository.
   *
   * @public
   */
  publish: AllowPublish | undefined;

  /**
   * The package origin configuration that determines if new versions of the package can be added to the repository from an external connection or upstream source.
   *
   * @public
   */
  upstream: AllowUpstream | undefined;
}

/**
 * Details about the package origin configuration of a package.
 *
 * @public
 */
export interface PackageOriginConfiguration {
  /**
   * A `PackageOriginRestrictions` object that contains information about the upstream and publish package origin configuration for the package.
   *
   * @public
   */
  restrictions?: PackageOriginRestrictions | undefined;
}

/**
 * Details about a package, including its format, namespace, and name.
 *
 * @public
 */
export interface PackageSummary {
  /**
   * The format of the package.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * A [PackageOriginConfiguration](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html) object that contains a [PackageOriginRestrictions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html) object that contains information about the upstream and publish package origin restrictions.
   *
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface DeletePackageResult {
  /**
   * Details about a package, including its format, namespace, and name.
   *
   * @public
   */
  deletedPackage?: PackageSummary | undefined;
}

/**
 * @public
 */
export interface DeletePackageGroupRequest {
  /**
   * The domain that contains the package group to be deleted.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group to be deleted.
   *
   * @public
   */
  packageGroup: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageGroupResult {
  /**
   * Information about the deleted package group after processing the request.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionsRequest {
  /**
   * The name of the domain that contains the package to delete.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package versions to delete.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format of the package versions to delete.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package versions to be deleted. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when deleting package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package with the versions to delete.
   *
   * @public
   */
  package: string | undefined;

  /**
   * An array of strings that specify the versions of the package to delete.
   *
   * @public
   */
  versions: string[] | undefined;

  /**
   * The expected status of the package version to delete.
   *
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionsResult {
  /**
   * A list of the package versions that were successfully deleted. The status of every successful version will be `Deleted`.
   *
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * A `PackageVersionError` object that contains a map of errors codes for the deleted package that failed. The possible error codes are:
   *
   * - `ALREADY_EXISTS`
   * - `MISMATCHED_REVISION`
   * - `MISMATCHED_STATUS`
   * - `NOT_ALLOWED`
   * - `NOT_FOUND`
   * - `SKIPPED`
   *
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * The name of the domain that contains the repository to delete.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository to delete.
   *
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryResult {
  /**
   * Information about the deleted repository after processing the request.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPermissionsPolicyRequest {
  /**
   * The name of the domain that contains the repository associated with the resource policy to be deleted.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that is associated with the resource policy to be deleted
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy.
   *
   * @public
   */
  policyRevision?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPermissionsPolicyResult {
  /**
   * Information about the deleted policy after processing the request.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * A string that specifies the name of the requested domain.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResult {
  /**
   * Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories.
   *
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageRequest {
  /**
   * The name of the domain that contains the repository that contains the package.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the requested package.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the requested package.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when requesting packages of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the requested package.
   *
   * @public
   */
  package: string | undefined;
}

/**
 * Details about a package.
 *
 * @public
 */
export interface PackageDescription {
  /**
   * A format that specifies the type of the package.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The package origin configuration for the package.
   *
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribePackageResult {
  /**
   * A [PackageDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html) object that contains information about the requested package.
   *
   * @public
   */
  package: PackageDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageGroupRequest {
  /**
   * The name of the domain that contains the package group.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the requested package group.
   *
   * @public
   */
  packageGroup: string | undefined;
}

/**
 * @public
 */
export interface DescribePackageGroupResult {
  /**
   * A [PackageGroupDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageGroupDescription.html) object that contains information about the requested package group.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionRequest {
  /**
   * The name of the domain that contains the repository that contains the package version.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package version.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the requested package version.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the requested package version. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when requesting package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the requested package version.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;
}

/**
 * Details of the license data.
 *
 * @public
 */
export interface LicenseInfo {
  /**
   * Name of the license.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The URL for license data.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to. For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery.
 *
 * > **Note:** If a package version exists in a repository and is updated, for example if a package of the same version is added with additional assets, the package version's `DomainEntryPoint` will not change from the original package version's value.
 *
 * @public
 */
export interface DomainEntryPoint {
  /**
   * The name of the repository that a package was originally published to.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The name of the external connection that a package was ingested from.
   *
   * @public
   */
  externalConnectionName?: string | undefined;
}

/**
 * Information about how a package version was added to a repository.
 *
 * @public
 */
export interface PackageVersionOrigin {
  /**
   * A [DomainEntryPoint](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainEntryPoint.html) object that contains information about from which repository or external connection the package version was added to the domain.
   *
   * @public
   */
  domainEntryPoint?: DomainEntryPoint | undefined;

  /**
   * Describes how the package version was originally added to the domain. An `INTERNAL` origin type means the package version was published directly to a repository in the domain. An `EXTERNAL` origin type means the package version was ingested from an external connection.
   *
   * @public
   */
  originType?: PackageVersionOriginType | undefined;
}

/**
 * Details about a package version.
 *
 * @public
 */
export interface PackageVersionDescription {
  /**
   * The format of the package version.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package version. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the requested package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the package that is displayed. The `displayName` varies depending on the package version's format. For example, if an npm package is named `ui`, is in the namespace `vue`, and has the format `npm`, then the `displayName` is `@vue/ui`.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The version of the package.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * A summary of the package version. The summary is extracted from the package. The information in and detail level of the summary depends on the package version's format.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The homepage associated with the package.
   *
   * @public
   */
  homePage?: string | undefined;

  /**
   * The repository for the source code in the package version, or the source code used to build it.
   *
   * @public
   */
  sourceCodeRepository?: string | undefined;

  /**
   * A timestamp that contains the date and time the package version was published.
   *
   * @public
   */
  publishedTime?: Date | undefined;

  /**
   * Information about licenses associated with the package version.
   *
   * @public
   */
  licenses?: LicenseInfo[] | undefined;

  /**
   * The revision of the package version.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * A string that contains the status of the package version.
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * A [PackageVersionOrigin](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html) object that contains information about how the package version was added to the repository.
   *
   * @public
   */
  origin?: PackageVersionOrigin | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionResult {
  /**
   * A [PackageVersionDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html) object that contains information about the requested package version.
   *
   * @public
   */
  packageVersion: PackageVersionDescription | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryRequest {
  /**
   * The name of the domain that contains the repository to describe.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * A string that specifies the name of the requested repository.
   *
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryResult {
  /**
   * A `RepositoryDescription` object that contains the requested repository information.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DisassociateExternalConnectionRequest {
  /**
   * The name of the domain that contains the repository from which to remove the external repository.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository from which the external connection will be removed.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The name of the external connection to be removed from the repository.
   *
   * @public
   */
  externalConnection: string | undefined;
}

/**
 * @public
 */
export interface DisassociateExternalConnectionResult {
  /**
   * The repository associated with the removed external connection.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DisposePackageVersionsRequest {
  /**
   * The name of the domain that contains the repository you want to dispose.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package versions you want to dispose.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of package versions you want to dispose.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package versions to be disposed. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when disposing package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package with the versions you want to dispose.
   *
   * @public
   */
  package: string | undefined;

  /**
   * The versions of the package you want to dispose.
   *
   * @public
   */
  versions: string[] | undefined;

  /**
   * The revisions of the package versions you want to dispose.
   *
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * The expected status of the package version to dispose.
   *
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface DisposePackageVersionsResult {
  /**
   * A list of the package versions that were successfully disposed.
   *
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * A `PackageVersionError` object that contains a map of errors codes for the disposed package versions that failed. The possible error codes are:
   *
   * - `ALREADY_EXISTS`
   * - `MISMATCHED_REVISION`
   * - `MISMATCHED_STATUS`
   * - `NOT_ALLOWED`
   * - `NOT_FOUND`
   * - `SKIPPED`
   *
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface GetAssociatedPackageGroupRequest {
  /**
   * The name of the domain that contains the package from which to get the associated package group.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The format of the package from which to get the associated package group.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package from which to get the associated package group. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when getting associated package groups from packages of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The package from which to get the associated package group.
   *
   * @public
   */
  package: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedPackageGroupResult {
  /**
   * The package group that is associated with the requested package.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;

  /**
   * Describes the strength of the association between the package and package group. A strong match is also known as an exact match, and a weak match is known as a relative match.
   *
   * @public
   */
  associationType?: PackageGroupAssociationType | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {
  /**
   * The name of the domain that is in scope for the generated authorization token.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The time, in seconds, that the generated authorization token is valid. Valid values are `0` and any number between `900` (15 minutes) and `43200` (12 hours). A value of `0` will set the expiration of the authorization token to the same expiration of the user's role's temporary credentials.
   *
   * @public
   */
  durationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenResult {
  /**
   * The returned authentication token.
   *
   * @public
   */
  authorizationToken?: string | undefined;

  /**
   * A timestamp that specifies the date and time the authorization token expires.
   *
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetDomainPermissionsPolicyRequest {
  /**
   * The name of the domain to which the resource policy is attached.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainPermissionsPolicyResult {
  /**
   * The returned resource policy.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionAssetRequest {
  /**
   * The name of the domain that contains the repository that contains the package version with the requested asset.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The repository that contains the package version with the requested asset.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the package version with the requested asset file.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version with the requested asset file. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when requesting assets from package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the requested asset.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;

  /**
   * The name of the requested asset.
   *
   * @public
   */
  asset: string | undefined;

  /**
   * The name of the package version revision that contains the requested asset.
   *
   * @public
   */
  packageVersionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionAssetResult {
  /**
   * The binary file, or asset, that is downloaded.
   *
   * @public
   */
  asset?: StreamingBlobTypes | undefined;

  /**
   * The name of the asset that is downloaded.
   *
   * @public
   */
  assetName?: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion?: string | undefined;

  /**
   * The name of the package version revision that contains the downloaded asset.
   *
   * @public
   */
  packageVersionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionReadmeRequest {
  /**
   * The name of the domain that contains the repository that contains the package version with the requested readme file.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The repository that contains the package with the requested readme file.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the package version with the requested readme file.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version with the requested readme file. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when requesting the readme from package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package version that contains the requested readme file.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionReadmeResult {
  /**
   * The format of the package with the requested readme file.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package version with the requested readme file. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the returned readme file.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The version of the package with the requested readme file.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The current revision associated with the package version.
   *
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * The text of the returned readme file.
   *
   * @public
   */
  readme?: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryEndpointRequest {
  /**
   * The name of the domain that contains the repository.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * Returns which endpoint of a repository to return. A repository has one endpoint for each package format.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * A string that specifies the type of endpoint.
   *
   * @public
   */
  endpointType?: EndpointType | undefined;
}

/**
 * @public
 */
export interface GetRepositoryEndpointResult {
  /**
   * A string that specifies the URL of the returned endpoint.
   *
   * @public
   */
  repositoryEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPermissionsPolicyRequest {
  /**
   * The name of the domain containing the repository whose associated resource policy is to be retrieved.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository whose associated resource policy is to be retrieved.
   *
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPermissionsPolicyResult {
  /**
   * The returned resource policy.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface ListAllowedRepositoriesForGroupRequest {
  /**
   * The name of the domain that contains the package group from which to list allowed repositories.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group from which to list allowed repositories.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * The origin configuration restriction type of which to list allowed repositories.
   *
   * @public
   */
  originRestrictionType: PackageGroupOriginRestrictionType | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedRepositoriesForGroupResult {
  /**
   * The list of allowed repositories for the package group and origin configuration restriction type.
   *
   * @public
   */
  allowedRepositories?: string[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedPackagesRequest {
  /**
   * The name of the domain that contains the package group from which to list associated packages.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group from which to list associated packages.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * When this flag is included, `ListAssociatedPackages` will return a list of packages that would be associated with a package group, even if it does not exist.
   *
   * @public
   */
  preview?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAssociatedPackagesResult {
  /**
   * The list of packages associated with the requested package group.
   *
   * @public
   */
  packages?: AssociatedPackage[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a domain, including its name, Amazon Resource Name (ARN), and status. The [ListDomains](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html) operation returns a list of `DomainSummary` objects.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The name of the domain.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The ARN of the domain.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A string that contains the status of the domain.
   *
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * A timestamp that contains the date and time the domain was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * The key used to encrypt the domain.
   *
   * @public
   */
  encryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsResult {
  /**
   * The returned list of [DomainSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html) objects.
   *
   * @public
   */
  domains?: DomainSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageGroupsRequest {
  /**
   * The domain for which you want to list package groups.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A prefix for which to search package groups. When included, `ListPackageGroups` will return only package groups with patterns that match the prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Details about a package group.
 *
 * @public
 */
export interface PackageGroupSummary {
  /**
   * The ARN of the package group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The pattern of the package group. The pattern determines which packages are associated with the package group.
   *
   * @public
   */
  pattern?: string | undefined;

  /**
   * The domain that contains the package group.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * A timestamp that represents the date and time the repository was created.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * The contact information of the package group.
   *
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * The description of the package group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Details about the package origin configuration of a package group.
   *
   * @public
   */
  originConfiguration?: PackageGroupOriginConfiguration | undefined;

  /**
   * The direct parent package group of the package group.
   *
   * @public
   */
  parent?: PackageGroupReference | undefined;
}

/**
 * @public
 */
export interface ListPackageGroupsResult {
  /**
   * The list of package groups in the requested domain.
   *
   * @public
   */
  packageGroups?: PackageGroupSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * The name of the domain that contains the repository that contains the requested packages.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the requested packages.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format used to filter requested packages. Only packages from the provided format will be returned.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called `--namespace` and not `--namespace-prefix`, it has prefix-matching behavior.
   *
   * Each package format uses namespace as follows:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * A prefix used to filter requested packages. Only packages with names that start with `packagePrefix` are returned.
   *
   * @public
   */
  packagePrefix?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The value of the `Publish` package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see [PackageOriginRestrictions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html).
   *
   * @public
   */
  publish?: AllowPublish | undefined;

  /**
   * The value of the `Upstream` package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see [PackageOriginRestrictions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html).
   *
   * @public
   */
  upstream?: AllowUpstream | undefined;
}

/**
 * @public
 */
export interface ListPackagesResult {
  /**
   * The list of returned [PackageSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html) objects.
   *
   * @public
   */
  packages?: PackageSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionAssetsRequest {
  /**
   * The name of the domain that contains the repository associated with the package version assets.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package that contains the requested package version assets.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format of the package that contains the requested package version assets.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version that contains the requested package version assets. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required requesting assets from package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the requested package version assets.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionAssetsResult {
  /**
   * The format of the package that contains the requested package version assets.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package version that contains the requested package version assets. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the requested package version assets.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The version of the package associated with the requested assets.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The current revision associated with the package version.
   *
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned list of [AssetSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html) objects.
   *
   * @public
   */
  assets?: AssetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionDependenciesRequest {
  /**
   * The name of the domain that contains the repository that contains the requested package version dependencies.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the requested package version.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format of the package with the requested dependencies.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version with the requested dependencies. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when listing dependencies from package versions of the following formats:
   * >
   * > - Maven
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm package version is its `scope`.
   * - Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package versions' package.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that contains the package version (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a package dependency.
 *
 * @public
 */
export interface PackageDependency {
  /**
   * The namespace of the package that this package depends on. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that this package depends on.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The type of a package dependency. The possible values depend on the package type.
   *
   * - npm: `regular`, `dev`, `peer`, `optional`
   * - maven: `optional`, `parent`, `compile`, `runtime`, `test`, `system`, `provided`.
   *
   *   > **Note:** Note that `parent` is not a regular Maven dependency type; instead this is extracted from the `<parent>` element if one is defined in the package version's POM file.
   * - nuget: The `dependencyType` field is never set for NuGet packages.
   * - pypi: `Requires-Dist`
   *
   * @public
   */
  dependencyType?: string | undefined;

  /**
   * The required version, or version range, of the package that this package depends on. The version format is specific to the package type. For example, the following are possible valid required versions: `1.2.3`, `^2.3.4`, or `4.x`.
   *
   * @public
   */
  versionRequirement?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionDependenciesResult {
  /**
   * A format that specifies the type of the package that contains the returned dependencies.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package version that contains the returned dependencies. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when listing dependencies from package versions of the following formats:
   * >
   * > - Maven
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm package version is its `scope`.
   * - Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package that contains the returned package versions dependencies.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The version of the package that is specified in the request.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The current revision associated with the package version.
   *
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned list of [PackageDependency](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html) objects.
   *
   * @public
   */
  dependencies?: PackageDependency[] | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsRequest {
  /**
   * The name of the domain that contains the repository that contains the requested package versions.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the requested package versions.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The format of the package versions you want to list.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:
   *
   * > **Note:**
   * >
   * > The namespace is required when deleting package versions of the following formats:
   * >
   * > - Maven
   * > - Swift
   * > - generic
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package for which you want to request package versions.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A string that filters the requested package versions by status.
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * How to sort the requested list of package versions.
   *
   * @public
   */
  sortBy?: PackageVersionSortType | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The `originType` used to filter package versions. Only package versions with the provided `originType` will be returned.
   *
   * @public
   */
  originType?: PackageVersionOriginType | undefined;
}

/**
 * Details about a package version, including its status, version, and revision. The [ListPackageVersions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html) operation returns a list of `PackageVersionSummary` objects.
 *
 * @public
 */
export interface PackageVersionSummary {
  /**
   * Information about a package version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The revision associated with a package version.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * A string that contains the status of the package version. It can be one of the following:
   *
   * @public
   */
  status: PackageVersionStatus | undefined;

  /**
   * A [PackageVersionOrigin](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html) object that contains information about how the package version was added to the repository.
   *
   * @public
   */
  origin?: PackageVersionOrigin | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsResult {
  /**
   * The default package version to display. This depends on the package format:
   *
   * - For Maven and PyPI packages, it's the most recently published package version.
   * - For npm packages, it's the version referenced by the `latest` tag. If the `latest` tag is not set, it's the most recently published package version.
   *
   * @public
   */
  defaultDisplayVersion?: string | undefined;

  /**
   * A format of the package.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The returned list of [PackageVersionSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html) objects.
   *
   * @public
   */
  versions?: PackageVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesRequest {
  /**
   * A prefix used to filter returned repositories. Only repositories with names that start with `repositoryPrefix` are returned.
   *
   * @public
   */
  repositoryPrefix?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The [ListRepositories](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html) operation returns a list of `RepositorySummary` objects.
 *
 * @public
 */
export interface RepositorySummary {
  /**
   * The name of the repository.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Web Services account ID that manages the repository.
   *
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * The name of the domain that contains the repository.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The ARN of the repository.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description of the repository.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A timestamp that represents the date and time the repository was created.
   *
   * @public
   */
  createdTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesResult {
  /**
   * The returned list of [RepositorySummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html) objects.
   *
   * @public
   */
  repositories?: RepositorySummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInDomainRequest {
  /**
   * The name of the domain that contains the returned list of repositories.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID.
   *
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * A prefix used to filter returned repositories. Only repositories with names that start with `repositoryPrefix` are returned.
   *
   * @public
   */
  repositoryPrefix?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInDomainResult {
  /**
   * The returned list of repositories.
   *
   * @public
   */
  repositories?: RepositorySummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubPackageGroupsRequest {
  /**
   * The name of the domain which contains the package group from which to list sub package groups.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group from which to list sub package groups.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubPackageGroupsResult {
  /**
   * A list of sub package groups for the requested package group.
   *
   * @public
   */
  packageGroups?: PackageGroupSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
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
   * The Amazon Resource Name (ARN) of the resource to get tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * A list of tag key and value pairs associated with the specified resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PublishPackageVersionRequest {
  /**
   * The name of the domain that contains the repository that contains the package version to publish.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that the package version will be published to.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the package version with the requested asset file.
   *
   * The only supported value is `generic`.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version to publish.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package version to publish.
   *
   * @public
   */
  package: string | undefined;

  /**
   * The package version to publish (for example, `3.5.2`).
   *
   * @public
   */
  packageVersion: string | undefined;

  /**
   * The content of the asset to publish.
   *
   * @public
   */
  assetContent: StreamingBlobTypes | undefined;

  /**
   * The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: `` ~ ! @ ^ & ( ) - ` _ + [ ] \{ \} ; , . ` ``
   *
   * @public
   */
  assetName: string | undefined;

  /**
   * The SHA256 hash of the `assetContent` to publish. This value must be calculated by the caller and provided with the request (see [Publishing a generic package](https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html#publishing-generic-packages) in the *CodeArtifact User Guide*).
   *
   * This value is used as an integrity check to verify that the `assetContent` has not changed after it was originally sent.
   *
   * @public
   */
  assetSHA256: string | undefined;

  /**
   * Specifies whether the package version should remain in the `unfinished` state. If omitted, the package version status will be set to `Published` (see [Package version status](https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status) in the *CodeArtifact User Guide*).
   *
   * Valid values: `unfinished`
   *
   * @public
   */
  unfinished?: boolean | undefined;
}

/**
 * @public
 */
export interface PublishPackageVersionResult {
  /**
   * The format of the package version.
   *
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * The namespace of the package version.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package.
   *
   * @public
   */
  package?: string | undefined;

  /**
   * The version of the package.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The revision of the package version.
   *
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * A string that contains the status of the package version. For more information, see [Package version status](https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status) in the *CodeArtifact User Guide*.
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * An [AssetSummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html) for the published asset.
   *
   * @public
   */
  asset?: AssetSummary | undefined;
}

/**
 * @public
 */
export interface PutDomainPermissionsPolicyRequest {
  /**
   * The name of the domain on which to set the resource policy.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
   *
   * @public
   */
  policyRevision?: string | undefined;

  /**
   * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain.
   *
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutDomainPermissionsPolicyResult {
  /**
   * The resource policy that was set after processing the request.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface PutPackageOriginConfigurationRequest {
  /**
   * The name of the domain that contains the repository that contains the package.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository that contains the package.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the package to be updated.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package to be updated. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package to be updated.
   *
   * @public
   */
  package: string | undefined;

  /**
   * A [PackageOriginRestrictions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html) object that contains information about the `upstream` and `publish` package origin restrictions. The `upstream` restriction determines if new package versions can be ingested or retained from external connections or upstream repositories. The `publish` restriction determines if new package versions can be published directly to the repository.
   *
   * You must include both the desired `upstream` and `publish` restrictions.
   *
   * @public
   */
  restrictions: PackageOriginRestrictions | undefined;
}

/**
 * @public
 */
export interface PutPackageOriginConfigurationResult {
  /**
   * A [PackageOriginConfiguration](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html) object that describes the origin configuration set for the package. It contains a [PackageOriginRestrictions](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html) object that describes how new versions of the package can be introduced to the repository.
   *
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRepositoryPermissionsPolicyRequest {
  /**
   * The name of the domain containing the repository to set the resource policy on.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository to set the resource policy on.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy.
   *
   * @public
   */
  policyRevision?: string | undefined;

  /**
   * A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository.
   *
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutRepositoryPermissionsPolicyResult {
  /**
   * The resource policy that was set after processing the request.
   *
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags you want to modify or add to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag key for each tag that you want to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdatePackageGroupRequest {
  /**
   * The name of the domain which contains the package group to be updated.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group to be updated.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * Contact information which you want to update the requested package group with.
   *
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * The description you want to update the requested package group with.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupResult {
  /**
   * The package group and information about it after the request has been processed.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * Details about an allowed repository for a package group, including its name and origin configuration.
 *
 * @public
 */
export interface PackageGroupAllowedRepository {
  /**
   * The name of the allowed repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The origin configuration restriction type of the allowed repository.
   *
   * @public
   */
  originRestrictionType?: PackageGroupOriginRestrictionType | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupOriginConfigurationRequest {
  /**
   * The name of the domain which contains the package group for which to update the origin configuration.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The pattern of the package group for which to update the origin configuration.
   *
   * @public
   */
  packageGroup: string | undefined;

  /**
   * The origin configuration settings that determine how package versions can enter repositories.
   *
   * @public
   */
  restrictions?: Partial<Record<PackageGroupOriginRestrictionType, PackageGroupOriginRestrictionMode>> | undefined;

  /**
   * The repository name and restrictions to add to the allowed repository list of the specified package group.
   *
   * @public
   */
  addAllowedRepositories?: PackageGroupAllowedRepository[] | undefined;

  /**
   * The repository name and restrictions to remove from the allowed repository list of the specified package group.
   *
   * @public
   */
  removeAllowedRepositories?: PackageGroupAllowedRepository[] | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupOriginConfigurationResult {
  /**
   * The package group and information about it after processing the request.
   *
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;

  /**
   * Information about the updated allowed repositories after processing the request.
   *
   * @public
   */
  allowedRepositoryUpdates?: Partial<Record<PackageGroupOriginRestrictionType, Partial<Record<PackageGroupAllowedRepositoryUpdateType, string[]>>>> | undefined;
}

/**
 * @public
 */
export interface UpdatePackageVersionsStatusRequest {
  /**
   * The name of the domain that contains the repository that contains the package versions with a status to be updated.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The repository that contains the package versions with the status you want to update.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * A format that specifies the type of the package with the statuses to update.
   *
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * The namespace of the package version to be updated. The package component that specifies its namespace depends on its type. For example:
   *
   * - The namespace of a Maven package version is its `groupId`.
   * - The namespace of an npm or Swift package version is its `scope`.
   * - The namespace of a generic package is its `namespace`.
   * - Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the package with the version statuses to update.
   *
   * @public
   */
  package: string | undefined;

  /**
   * An array of strings that specify the versions of the package with the statuses to update.
   *
   * @public
   */
  versions: string[] | undefined;

  /**
   * A map of package versions and package version revisions. The map `key` is the package version (for example, `3.5.2`), and the map `value` is the package version revision.
   *
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * The package version’s expected status before it is updated. If `expectedStatus` is provided, the package version's status is updated only if its status at the time `UpdatePackageVersionsStatus` is called matches `expectedStatus`.
   *
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;

  /**
   * The status you want to change the package version status to.
   *
   * @public
   */
  targetStatus: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePackageVersionsStatusResult {
  /**
   * A list of `PackageVersionError` objects, one for each package version with a status that failed to update.
   *
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * A list of `SuccessfulPackageVersionInfo` objects, one for each package version with a status that successfully updated.
   *
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryRequest {
  /**
   * The name of the domain associated with the repository to update.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
   *
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * The name of the repository to update.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * An updated repository description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see [Working with upstream repositories](https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html).
   *
   * @public
   */
  upstreams?: UpstreamRepository[] | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryResult {
  /**
   * The updated repository.
   *
   * @public
   */
  repository?: RepositoryDescription | undefined;
}
