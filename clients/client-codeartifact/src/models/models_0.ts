// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
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
 * <p>
 *         Contains details about a package version asset.
 *        </p>
 * @public
 */
export interface AssetSummary {
  /**
   * <p>
   *          The name of the asset.
   *        </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *       The size of the asset.
   *     </p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>
   *       The hashes of the asset.
   *     </p>
   * @public
   */
  hashes?: Partial<Record<HashAlgorithm, string>> | undefined;
}

/**
 * <p>
 *       A package associated with a package group.
 *     </p>
 * @public
 */
export interface AssociatedPackage {
  /**
   * <p>A format that specifies the type of the associated package.</p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the associated package. The package component that specifies its
   *     namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the associated package.
   *     </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>Describes the strength of the association between the package and package group. A strong match can be thought of as an
   *       exact match, and a weak match can be thought of as a variation match, for example, the package name matches a variation of the package group pattern.
   *       For more information about package group pattern matching, including strong and weak matches, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html">Package group definition syntax and matching behavior</a>
   *       in the <i>CodeArtifact User Guide</i>.</p>
   * @public
   */
  associationType?: PackageGroupAssociationType | undefined;
}

/**
 * @public
 */
export interface AssociateExternalConnectionRequest {
  /**
   * <p>The name of the domain that contains the repository.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The name of the repository to which the external connection is added.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       The name of the external connection to add to the repository. The following values are supported:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>public:npmjs</code> - for the npm public repository.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:nuget-org</code> - for the NuGet Gallery.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:pypi</code> - for the Python Package Index.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:maven-central</code> - for Maven Central.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:maven-googleandroid</code> - for the Google Android repository.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:maven-gradleplugins</code> - for the Gradle plugins repository.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:maven-commonsware</code> - for the CommonsWare Android repository.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:maven-clojars</code> - for the Clojars repository. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:ruby-gems-org</code> - for RubyGems.org. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public:crates-io</code> - for Crates.io. </p>
   *             </li>
   *          </ul>
   * @public
   */
  externalConnection: string | undefined;
}

/**
 * <p>
 *         Contains information about the external connection of a repository.
 *       </p>
 * @public
 */
export interface RepositoryExternalConnectionInfo {
  /**
   * <p> The name of the external connection associated with a repository. </p>
   * @public
   */
  externalConnectionName?: string | undefined;

  /**
   * <p>
   *         The package format associated with a repository's external connection. The valid package formats are:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>: A Node Package Manager (npm) package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>: A Python Package Index (PyPI) package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>: A Maven package that contains compiled code in a distributable format, such as a JAR file.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nuget</code>: A NuGet package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>generic</code>: A generic package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ruby</code>: A Ruby package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>swift</code>: A Swift package.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cargo</code>: A Cargo package.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  packageFormat?: PackageFormat | undefined;

  /**
   * <p>
   *         The status of the external connection of a repository. There is one valid value, <code>Available</code>.
   *       </p>
   * @public
   */
  status?: ExternalConnectionStatus | undefined;
}

/**
 * <p>
 *         Information about an upstream repository.
 *       </p>
 * @public
 */
export interface UpstreamRepositoryInfo {
  /**
   * <p> The name of an upstream repository. </p>
   * @public
   */
  repositoryName?: string | undefined;
}

/**
 * <p> The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of
 *       package versions, each of which maps to a set of assets. Repositories are polyglot—a single
 *       repository can contain packages of any supported type. Each repository exposes endpoints for
 *       fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI
 *         (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services
 *       account. </p>
 * @public
 */
export interface RepositoryDescription {
  /**
   * <p>
   *         The name of the repository.
   *        </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The 12-digit account number of the Amazon Web Services account that manages the repository. </p>
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * <p>
   *         The name of the domain that contains the repository.
   *        </p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the repository. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       A text description of the repository.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   * @public
   */
  upstreams?: UpstreamRepositoryInfo[] | undefined;

  /**
   * <p>
   *       An array of external connections associated with the repository.
   *     </p>
   * @public
   */
  externalConnections?: RepositoryExternalConnectionInfo[] | undefined;

  /**
   * <p>A timestamp that represents the date and time the repository was created.</p>
   * @public
   */
  createdTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateExternalConnectionResult {
  /**
   * <p>
   *         Information about the connected repository after processing the request.
   *        </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface CopyPackageVersionsRequest {
  /**
   * <p>
   *         The name of the domain that contains the source and destination repositories.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          The name of the repository that contains the package versions to be copied.
   *        </p>
   * @public
   */
  sourceRepository: string | undefined;

  /**
   * <p>
   *       The name of the repository into which package versions are copied.
   *     </p>
   * @public
   */
  destinationRepository: string | undefined;

  /**
   * <p>
   *       The format of the package versions to be copied.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package versions to be copied. The package component that specifies its namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when copying package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the versions to be copied.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *         The versions of the package to be copied.
   *       </p>
   *          <note>
   *             <p>
   *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
   *       </p>
   *          </note>
   * @public
   */
  versions?: string[] | undefined;

  /**
   * <p>
   *        A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation
   *       succeeds if the specified versions in the source repository match the specified package version revision.
   *     </p>
   *          <note>
   *             <p>
   *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
   *       </p>
   *          </note>
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * <p>
   *        Set to true to overwrite a package version that already exists in the destination repository.
   *        If set to false and the package version already exists in the destination repository,
   *        the package version is returned in the <code>failedVersions</code> field of the response with
   *        an <code>ALREADY_EXISTS</code> error code.
   *      </p>
   * @public
   */
  allowOverwrite?: boolean | undefined;

  /**
   * <p> Set to true to copy packages from repositories that are upstream from the source
   *       repository to the destination repository. The default setting is false. For more information,
   *       see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with
   *         upstream repositories</a>. </p>
   * @public
   */
  includeFromUpstream?: boolean | undefined;
}

/**
 * <p>l
 *        An error associated with package.
 *    </p>
 * @public
 */
export interface PackageVersionError {
  /**
   * <p> The error code associated with the error. Valid error codes are: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALREADY_EXISTS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_REVISION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_STATUS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ALLOWED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  errorCode?: PackageVersionErrorCode | undefined;

  /**
   * <p>
   *          The error message associated with the error.
   *      </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>
 *       Contains the revision and status of a package version.
 *     </p>
 * @public
 */
export interface SuccessfulPackageVersionInfo {
  /**
   * <p>
   *       The revision of a package version.
   *     </p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>
   *       The status of a package version.
   *     </p>
   * @public
   */
  status?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface CopyPackageVersionsResult {
  /**
   * <p>
   *       A list of the package versions that were successfully copied to your repository.
   *     </p>
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * <p>
   *       A map of package versions that failed to copy and their error codes. The possible error codes are in
   *       the <code>PackageVersionError</code> data type. They are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALREADY_EXISTS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_REVISION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_STATUS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ALLOWED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * <p>A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p> The name of the domain to create. All domain names in an Amazon Web Services Region that are in the
   *       same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do
   *       not use sensitive information in a domain name because it is publicly discoverable. </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p> The encryption key for the domain. This is used to encrypt content stored in a domain.
   *       An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key
   *       alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have
   *         <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption
   *       key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i>
   *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions
   *         Reference</a> in the <i>Key Management Service Developer Guide</i>. </p>
   *          <important>
   *             <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your
   *         domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric
   *           keys</a> in the <i>Key Management Service Developer Guide</i>. </p>
   *          </important>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>One or more tag key-value pairs for the domain.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>
 *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
 *        add one or more repositories.
 *       </p>
 * @public
 */
export interface DomainDescription {
  /**
   * <p>
   *          The name of the domain.
   *        </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID that owns the domain. </p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the domain. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *         The current status of a domain.
   *       </p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>
   *       A timestamp that represents the date and time the domain was created.
   *     </p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p> The ARN of an Key Management Service (KMS) key associated with a domain. </p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>
   *       The number of repositories in the domain.
   *     </p>
   * @public
   */
  repositoryCount?: number | undefined;

  /**
   * <p>
   *       The total size of all assets in the domain.
   *     </p>
   * @public
   */
  assetSizeBytes?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket that is used to store package assets in the domain.</p>
   * @public
   */
  s3BucketArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainResult {
  /**
   * <p>
   *         Contains information about the created domain after processing the request.
   *       </p>
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface CreatePackageGroupRequest {
  /**
   * <p>
   *       The name of the domain in which you want to create a package group.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The pattern of the package group to create. The pattern is also the identifier of the package group. </p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>
   *       The contact information for the created package group.
   *     </p>
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * <p>
   *       A description of the package group.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>One or more tag key-value pairs for the package group.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Information about the identifiers of a package group.</p>
 * @public
 */
export interface PackageGroupReference {
  /**
   * <p>
   *       The ARN of the package group.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group. The pattern determines which packages are associated with the package group, and is
   *       also the identifier of the package group.
   *     </p>
   * @public
   */
  pattern?: string | undefined;
}

/**
 * <p>Contains information about the configured restrictions of the origin controls of a package group.</p>
 * @public
 */
export interface PackageGroupOriginRestriction {
  /**
   * <p>The package group origin restriction setting. If the value of <code>mode</code> is <code>ALLOW</code>,
   *       <code>ALLOW_SPECIFIC_REPOSITORIES</code>, or <code>BLOCK</code>, then the value of <code>effectiveMode</code>
   *     is the same. Otherwise, when the value is <code>INHERIT</code>, then the value of <code>effectiveMode</code> is the value of
   *     <code>mode</code> of the first parent group which does not have a value of <code>INHERIT</code>.</p>
   * @public
   */
  mode?: PackageGroupOriginRestrictionMode | undefined;

  /**
   * <p>The effective package group origin restriction setting. If the value of <code>mode</code> is <code>ALLOW</code>,
   *       <code>ALLOW_SPECIFIC_REPOSITORIES</code>, or <code>BLOCK</code>, then the value of <code>effectiveMode</code>
   *       is the same. Otherwise, when the value of <code>mode</code> is <code>INHERIT</code>, then the value of <code>effectiveMode</code> is the value of
   *       <code>mode</code> of the first parent group which does not have a value of <code>INHERIT</code>.</p>
   * @public
   */
  effectiveMode?: PackageGroupOriginRestrictionMode | undefined;

  /**
   * <p>The parent package group that the package group origin restrictions are inherited from.</p>
   * @public
   */
  inheritedFrom?: PackageGroupReference | undefined;

  /**
   * <p>The number of repositories in the allowed repository list.</p>
   * @public
   */
  repositoriesCount?: number | undefined;
}

/**
 * <p>The package group origin configuration that determines how package versions can enter repositories.</p>
 * @public
 */
export interface PackageGroupOriginConfiguration {
  /**
   * <p>The origin configuration settings that determine how package versions can enter repositories.</p>
   * @public
   */
  restrictions?: Partial<Record<PackageGroupOriginRestrictionType, PackageGroupOriginRestriction>> | undefined;
}

/**
 * <p>
 *       The description of the package group.
 *     </p>
 * @public
 */
export interface PackageGroupDescription {
  /**
   * <p>
   *       The ARN of the package group.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group. The pattern determines which packages are associated with the package group.
   *     </p>
   * @public
   */
  pattern?: string | undefined;

  /**
   * <p>
   *       The name of the domain that contains the package group.
   *     </p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>A timestamp that represents the date and time the package group was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>
   *       The contact information of the package group.
   *     </p>
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * <p>
   *       The description of the package group.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The package group origin configuration that determines how package versions can enter repositories.</p>
   * @public
   */
  originConfiguration?: PackageGroupOriginConfiguration | undefined;

  /**
   * <p>
   *       The direct parent package group of the package group.
   *     </p>
   * @public
   */
  parent?: PackageGroupReference | undefined;
}

/**
 * @public
 */
export interface CreatePackageGroupResult {
  /**
   * <p>
   *       Information about the created package group after processing the request.
   *     </p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * <p>
 *        Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a>
 *        and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.
 *      </p>
 * @public
 */
export interface UpstreamRepository {
  /**
   * <p> The name of an upstream repository. </p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryRequest {
  /**
   * <p>
   *         The name of the domain that contains the created repository.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository to create. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A description of the created repository.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   * @public
   */
  upstreams?: UpstreamRepository[] | undefined;

  /**
   * <p>One or more tag key-value pairs for the repository.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRepositoryResult {
  /**
   * <p>
   *         Information about the created repository after processing the request.
   *       </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>
   *          The name of the domain to delete.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResult {
  /**
   * <p>
   *         Contains information about the deleted domain after processing the request.
   *        </p>
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface DeleteDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain associated with the resource policy to be deleted.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   * @public
   */
  policyRevision?: string | undefined;
}

/**
 * <p>
 *         An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.
 *       </p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>
   *         The ARN of the resource associated with the resource policy
   *       </p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>
   *         The current revision of the resource policy.
   *       </p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>
   *       The resource policy formatted in JSON.
   *     </p>
   * @public
   */
  document?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainPermissionsPolicyResult {
  /**
   * <p>
   *         Information about the deleted resource policy after processing the request.
   *       </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The name of the domain that contains the package to delete.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository that contains the package to delete.</p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The format of the requested package to delete.</p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when deleting packages of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the package to delete.</p>
   * @public
   */
  package: string | undefined;
}

/**
 * <p>Details about the origin restrictions set on the package.
 *       The package origin restrictions determine how new versions of a package
 *       can be added to a specific repository.</p>
 * @public
 */
export interface PackageOriginRestrictions {
  /**
   * <p>The package origin configuration that determines if new versions of the package can be published directly to the repository.</p>
   * @public
   */
  publish: AllowPublish | undefined;

  /**
   * <p>The package origin configuration that determines if new versions of the package can be added to the repository from an external connection or upstream source.</p>
   * @public
   */
  upstream: AllowUpstream | undefined;
}

/**
 * <p>Details about the package origin configuration of a package.</p>
 * @public
 */
export interface PackageOriginConfiguration {
  /**
   * <p>A <code>PackageOriginRestrictions</code> object that contains information
   *     about the upstream and publish package origin configuration for the package.</p>
   * @public
   */
  restrictions?: PackageOriginRestrictions | undefined;
}

/**
 * <p>
 *       Details about a package, including its format, namespace, and name.
 *     </p>
 * @public
 */
export interface PackageSummary {
  /**
   * <p>
   *       The format of the package.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package.
   *     </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a>
   *       object that contains a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a> object
   *       that contains information about the upstream and publish package origin restrictions.</p>
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface DeletePackageResult {
  /**
   * <p>
   *       Details about a package, including its format, namespace, and name.
   *     </p>
   * @public
   */
  deletedPackage?: PackageSummary | undefined;
}

/**
 * @public
 */
export interface DeletePackageGroupRequest {
  /**
   * <p>
   *       The domain that contains the package group to be deleted.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The pattern of the package group to be deleted.</p>
   * @public
   */
  packageGroup: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageGroupResult {
  /**
   * <p>
   *       Information about the deleted package group after processing the request.
   *     </p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionsRequest {
  /**
   * <p>
   *         The name of the domain that contains the package to delete.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         The name of the repository that contains the package versions to delete.
   *       </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *         The format of the package versions to delete.
   *       </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package versions to be deleted. The package component that specifies its namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when deleting package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *         The name of the package with the versions to delete.
   *       </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *         An array of strings that specify the versions of the package to delete.
   *       </p>
   * @public
   */
  versions: string[] | undefined;

  /**
   * <p>
   *         The expected status of the package version to delete.
   *       </p>
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionsResult {
  /**
   * <p>
   *        A list of the package versions that were successfully deleted. The
   *        status of every successful version will be <code>Deleted</code>.
   *      </p>
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * <p>
   *        A <code>PackageVersionError</code> object that contains a map of errors codes for the
   *        deleted package that failed. The possible error codes are:
   *      </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALREADY_EXISTS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_REVISION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_STATUS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ALLOWED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository to delete.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p> The name of the repository to delete. </p>
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryResult {
  /**
   * <p>
   *         Information about the deleted repository after processing the request.
   *        </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain that contains the repository associated with the resource policy to be deleted.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The name of the repository that is associated with the resource policy to be deleted
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which
   *       prevents others from accidentally overwriting your changes to the repository's resource policy.
   *     </p>
   * @public
   */
  policyRevision?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRepositoryPermissionsPolicyResult {
  /**
   * <p>
   *       Information about the deleted policy after processing the request.
   *     </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>
   *          A string that specifies the name of the requested domain.
   *      </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResult {
  /**
   * <p>
   *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
   *        add one or more repositories.
   *       </p>
   * @public
   */
  domain?: DomainDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageRequest {
  /**
   * <p>The name of the domain that contains the repository that contains the package.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository that contains the requested package. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>A format that specifies the type of the requested package.</p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when requesting packages of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the requested package.</p>
   * @public
   */
  package: string | undefined;
}

/**
 * <p>Details about a package.</p>
 * @public
 */
export interface PackageDescription {
  /**
   * <p>A format that specifies the type of the package.</p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the package.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The package origin configuration for the package.</p>
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribePackageResult {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
   *       object that contains information about the requested package.</p>
   * @public
   */
  package: PackageDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageGroupRequest {
  /**
   * <p>
   *       The name of the domain that contains the package group.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The pattern of the requested package group.</p>
   * @public
   */
  packageGroup: string | undefined;
}

/**
 * @public
 */
export interface DescribePackageGroupResult {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageGroupDescription.html">PackageGroupDescription</a> object
   *     that contains information about the requested package group.</p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p> The name of the repository that contains the package version. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the requested package version.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the requested package version. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when requesting package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p> The name of the requested package version. </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion: string | undefined;
}

/**
 * <p>
 *         Details of the license data.
 *       </p>
 * @public
 */
export interface LicenseInfo {
  /**
   * <p>
   *         Name of the license.
   *       </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The URL for license data.
   *       </p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to.
 *       For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external
 *     connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery.</p>
 *          <note>
 *             <p>If a package version exists in a repository and is updated, for example if a package of the same version is added
 *       with additional assets, the package version's <code>DomainEntryPoint</code> will not change from the original package version's value.</p>
 *          </note>
 * @public
 */
export interface DomainEntryPoint {
  /**
   * <p>The name of the repository that a package was originally published to.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The name of the external connection that a package was ingested from.</p>
   * @public
   */
  externalConnectionName?: string | undefined;
}

/**
 * <p>Information about how a package version was added to a repository.</p>
 * @public
 */
export interface PackageVersionOrigin {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainEntryPoint.html">DomainEntryPoint</a> object that contains
   *     information about from which repository or external connection the package version was added to the domain.</p>
   * @public
   */
  domainEntryPoint?: DomainEntryPoint | undefined;

  /**
   * <p>Describes how the package version was originally added to the domain. An <code>INTERNAL</code> origin type means the package version was published
   *     directly to a repository in the domain. An <code>EXTERNAL</code> origin type means the package version was ingested from an external connection.</p>
   * @public
   */
  originType?: PackageVersionOriginType | undefined;
}

/**
 * <p>
 *       Details about a package version.
 *     </p>
 * @public
 */
export interface PackageVersionDescription {
  /**
   * <p>
   *       The format of the package version.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the requested package.
   *     </p>
   * @public
   */
  packageName?: string | undefined;

  /**
   * <p>
   *       The name of the package that is displayed. The <code>displayName</code> varies depending
   *       on the package version's format. For example, if an npm package is named <code>ui</code>,
   *       is in the namespace <code>vue</code>, and has the format <code>npm</code>, then
   *       the <code>displayName</code> is <code>@vue/ui</code>.
   *     </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>
   *       The version of the package.
   *     </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>
   *       A summary of the package version. The summary is extracted from the package. The information in and
   *       detail level of the summary depends on the package version's format.
   *     </p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>
   *       The homepage associated with the package.
   *     </p>
   * @public
   */
  homePage?: string | undefined;

  /**
   * <p>
   *       The repository for the source code in the package version, or the source code used to build it.
   *     </p>
   * @public
   */
  sourceCodeRepository?: string | undefined;

  /**
   * <p>
   *       A timestamp that contains the date and time the package version was published.
   *     </p>
   * @public
   */
  publishedTime?: Date | undefined;

  /**
   * <p>
   *       Information about licenses associated with the package version.
   *     </p>
   * @public
   */
  licenses?: LicenseInfo[] | undefined;

  /**
   * <p>
   *       The revision of the package version.
   *     </p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>
   *       A string that contains the status of the package version.
   *     </p>
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains
   *     information about how the package version was added to the repository.</p>
   * @public
   */
  origin?: PackageVersionOrigin | undefined;
}

/**
 * @public
 */
export interface DescribePackageVersionResult {
  /**
   * <p>
   *       A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
   *       object that contains information about the requested package version.
   *     </p>
   * @public
   */
  packageVersion: PackageVersionDescription | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository to describe.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         A string that specifies the name of the requested repository.
   *        </p>
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface DescribeRepositoryResult {
  /**
   * <p>
   *          A <code>RepositoryDescription</code> object that contains the requested repository information.
   *        </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DisassociateExternalConnectionRequest {
  /**
   * <p>The name of the domain that contains the repository from which to remove the external
   *       repository. </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository from which the external connection will be removed. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The name of the external connection to be removed from the repository. </p>
   * @public
   */
  externalConnection: string | undefined;
}

/**
 * @public
 */
export interface DisassociateExternalConnectionResult {
  /**
   * <p>
   *       The repository associated with the removed external connection.
   *     </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}

/**
 * @public
 */
export interface DisposePackageVersionsRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository you want to dispose.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The name of the repository that contains the package versions you want to dispose.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of package versions you want to dispose.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package versions to be disposed. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when disposing package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package with the versions you want to dispose.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       The versions of the package you want to dispose.
   *     </p>
   * @public
   */
  versions: string[] | undefined;

  /**
   * <p>
   *       The revisions of the package versions you want to dispose.
   *     </p>
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * <p>
   *       The expected status of the package version to dispose.
   *     </p>
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface DisposePackageVersionsResult {
  /**
   * <p>
   *       A list of the package versions that were successfully disposed.
   *     </p>
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * <p>
   *       A <code>PackageVersionError</code> object that contains a map of errors codes for the
   *       disposed package versions that failed. The possible error codes are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALREADY_EXISTS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_REVISION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISMATCHED_STATUS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ALLOWED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_FOUND</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface GetAssociatedPackageGroupRequest {
  /**
   * <p>
   *       The name of the domain that contains the package from which to get the associated package group.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The format of the package from which to get the associated package group.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package from which to get the associated package group. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when getting associated package groups from packages of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The package from which to get the associated package group.
   *     </p>
   * @public
   */
  package: string | undefined;
}

/**
 * @public
 */
export interface GetAssociatedPackageGroupResult {
  /**
   * <p>The package group that is associated with the requested package.</p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;

  /**
   * <p>Describes the strength of the association between the package and package group. A strong match is also known as an
   *     exact match, and a weak match is known as a relative match.</p>
   * @public
   */
  associationType?: PackageGroupAssociationType | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenRequest {
  /**
   * <p>
   *         The name of the domain that is in scope for the generated authorization token.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The time, in seconds, that the generated authorization token is valid. Valid values are
   *     <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours).
   *     A value of <code>0</code> will set the expiration of the authorization token to the same expiration of
   *     the user's role's temporary credentials.</p>
   * @public
   */
  durationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface GetAuthorizationTokenResult {
  /**
   * <p>
   *         The returned authentication token.
   *        </p>
   * @public
   */
  authorizationToken?: string | undefined;

  /**
   * <p>
   *       A timestamp that specifies the date and time the authorization token expires.
   *     </p>
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain to which the resource policy is attached.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainPermissionsPolicyResult {
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionAssetRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version with the requested asset.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The repository that contains the package version with the requested asset.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested asset file.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version with the requested asset file. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when requesting assets from package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the requested asset.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *       The name of the requested asset.
   *     </p>
   * @public
   */
  asset: string | undefined;

  /**
   * <p>
   *         The name of the package version revision that contains the requested asset.
   *     </p>
   * @public
   */
  packageVersionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionAssetResult {
  /**
   * <p> The binary file, or asset, that is downloaded.</p>
   * @public
   */
  asset?: StreamingBlobTypes | undefined;

  /**
   * <p>
   *       The name of the asset that is downloaded.
   *     </p>
   * @public
   */
  assetName?: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion?: string | undefined;

  /**
   * <p>
   *       The name of the package version revision that contains the downloaded asset.
   *     </p>
   * @public
   */
  packageVersionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionReadmeRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version with the requested readme file.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The repository that contains the package with the requested readme file.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested readme file.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version with the requested readme file. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when requesting the readme from package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package version that contains the requested readme file.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionReadmeResult {
  /**
   * <p>
   *       The format of the package with the requested readme file.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version with the requested readme file. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the returned readme file.
   *     </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>
   *       The version of the package with the requested readme file.
   *     </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * <p>
   *       The text of the returned readme file.
   *     </p>
   * @public
   */
  readme?: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryEndpointRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository.
   *      </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          The name of the repository.
   *      </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       Returns which endpoint of a repository to return. A repository has one endpoint for each
   *       package format.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>A string that specifies the type of endpoint.</p>
   * @public
   */
  endpointType?: EndpointType | undefined;
}

/**
 * @public
 */
export interface GetRepositoryEndpointResult {
  /**
   * <p>
   *          A string that specifies the URL of the returned endpoint.
   *      </p>
   * @public
   */
  repositoryEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain containing the repository whose associated resource policy is to be retrieved.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         The name of the repository whose associated resource policy is to be retrieved.
   *       </p>
   * @public
   */
  repository: string | undefined;
}

/**
 * @public
 */
export interface GetRepositoryPermissionsPolicyResult {
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface ListAllowedRepositoriesForGroupRequest {
  /**
   * <p>
   *       The name of the domain that contains the package group from which to list allowed repositories.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The pattern of the package group from which to list allowed repositories.</p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>The origin configuration restriction type of which to list allowed repositories.</p>
   * @public
   */
  originRestrictionType: PackageGroupOriginRestrictionType | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedRepositoriesForGroupResult {
  /**
   * <p>The list of allowed repositories for the package group and origin configuration restriction type.</p>
   * @public
   */
  allowedRepositories?: string[] | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedPackagesRequest {
  /**
   * <p>
   *       The name of the domain that contains the package group from which to list associated packages.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group from which to list associated packages.
   *     </p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       When this flag is included, <code>ListAssociatedPackages</code> will return a list of packages that would be associated with a package
   *       group, even if it does not exist.
   *     </p>
   * @public
   */
  preview?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAssociatedPackagesResult {
  /**
   * <p>
   *       The list of packages associated with the requested package group.
   *     </p>
   * @public
   */
  packages?: AssociatedPackage[] | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Information about a domain, including its name, Amazon Resource Name (ARN), and status.
 *       The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code>
 *       objects. </p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>
   *       The name of the domain.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>
   *       The ARN of the domain.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       A string that contains the status of the domain.
   *     </p>
   * @public
   */
  status?: DomainStatus | undefined;

  /**
   * <p>
   *       A timestamp that contains the date and time the domain was created.
   *     </p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>
   *       The key used to encrypt the domain.
   *     </p>
   * @public
   */
  encryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsResult {
  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html">DomainSummary</a> objects.
   *      </p>
   * @public
   */
  domains?: DomainSummary[] | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageGroupsRequest {
  /**
   * <p>
   *       The domain for which you want to list package groups.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       A prefix for which to search package groups. When included, <code>ListPackageGroups</code> will return only
   *       package groups with patterns that match the prefix.
   *     </p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Details about a package group.</p>
 * @public
 */
export interface PackageGroupSummary {
  /**
   * <p>
   *       The ARN of the package group.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group. The pattern determines which packages are associated with the package group.
   *     </p>
   * @public
   */
  pattern?: string | undefined;

  /**
   * <p>
   *       The domain that contains the package group.
   *     </p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>A timestamp that represents the date and time the repository was created.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>
   *       The contact information of the package group.
   *     </p>
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * <p>
   *       The description of the package group.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Details about the package origin configuration of a package group.</p>
   * @public
   */
  originConfiguration?: PackageGroupOriginConfiguration | undefined;

  /**
   * <p>
   *       The direct parent package group of the package group.
   *     </p>
   * @public
   */
  parent?: PackageGroupReference | undefined;
}

/**
 * @public
 */
export interface ListPackageGroupsResult {
  /**
   * <p>
   *       The list of package groups in the requested domain.
   *     </p>
   * @public
   */
  packageGroups?: PackageGroupSummary[] | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * <p>
   *         The name of the domain that contains the repository that contains the requested packages.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          The name of the repository that contains the requested packages.
   *        </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The format used to filter requested packages. Only packages from the provided format will be returned.</p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace prefix used to filter requested packages.
   *       Only packages with a namespace that starts with the provided string value are returned.
   *       Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p>
   *          <p>Each package format uses namespace as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       A prefix used to filter requested packages. Only packages with names that start with
   *       <code>packagePrefix</code> are returned.
   *     </p>
   * @public
   */
  packagePrefix?: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The value of the <code>Publish</code> package origin control restriction used to filter requested packages.
   *       Only packages with the provided restriction are returned.
   *       For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.</p>
   * @public
   */
  publish?: AllowPublish | undefined;

  /**
   * <p>The value of the <code>Upstream</code> package origin control restriction used to filter requested packages.
   *       Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.</p>
   * @public
   */
  upstream?: AllowUpstream | undefined;
}

/**
 * @public
 */
export interface ListPackagesResult {
  /**
   * <p>
   *         The list of returned <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
   *         objects.
   *        </p>
   * @public
   */
  packages?: PackageSummary[] | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionAssetsRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository associated with the package version assets.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The name of the repository that contains the package that contains the requested package version assets.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the package that contains the requested package version assets.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version that contains the requested package version assets. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required requesting assets from package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *          The name of the package that contains the requested package version assets.
   *        </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionAssetsResult {
  /**
   * <p>
   *       The format of the package that contains the requested package version assets.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version that contains the requested package version assets. The package component that specifies its
   *        namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the requested package version assets.
   *     </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>
   *       The version of the package associated with the requested assets.
   *     </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects.
   *     </p>
   * @public
   */
  assets?: AssetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionDependenciesRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the requested package version dependencies.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The name of the repository that contains the requested package version.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the package with the requested dependencies.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version with the requested dependencies. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when listing dependencies from package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package versions' package.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   * @public
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *         Details about a package dependency.
 *       </p>
 * @public
 */
export interface PackageDependency {
  /**
   * <p>The namespace of the package that this package depends on. The package component that specifies its
   *        namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *         The name of the package that this package depends on.
   *        </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p> The type of a package dependency. The possible values depend on the package type.</p>
   *          <ul>
   *             <li>
   *                <p>npm: <code>regular</code>, <code>dev</code>, <code>peer</code>, <code>optional</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>maven: <code>optional</code>, <code>parent</code>, <code>compile</code>, <code>runtime</code>, <code>test</code>, <code>system</code>, <code>provided</code>.</p>
   *                <note>
   *                   <p>Note that <code>parent</code> is not a regular Maven dependency type; instead this is extracted from the <code><parent></code> element if one is defined in the package version's POM file.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>nuget: The <code>dependencyType</code> field is never set for NuGet packages.</p>
   *             </li>
   *             <li>
   *                <p>pypi: <code>Requires-Dist</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  dependencyType?: string | undefined;

  /**
   * <p>
   *         The required version, or version range, of the package that this package depends on. The version format
   *         is specific to the package type. For example, the following are possible valid required versions: <code>1.2.3</code>,
   *         <code>^2.3.4</code>, or <code>4.x</code>.
   *       </p>
   * @public
   */
  versionRequirement?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionDependenciesResult {
  /**
   * <p>
   *       A format that specifies the type of the package that contains the returned dependencies.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version that contains the returned dependencies. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when listing dependencies from package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the returned package versions dependencies.
   *     </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>
   *       The version of the package that is specified in the request.
   *     </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects.
   *     </p>
   * @public
   */
  dependencies?: PackageDependency[] | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository that contains the requested package versions.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          The name of the repository that contains the requested package versions.
   *        </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the package versions you want to list.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package that contains the requested package versions. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <note>
   *             <p>The namespace is required when deleting package versions of the following formats:</p>
   *             <ul>
   *                <li>
   *                   <p>Maven</p>
   *                </li>
   *                <li>
   *                   <p>Swift</p>
   *                </li>
   *                <li>
   *                   <p>generic</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package for which you want to request package versions.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that filters the requested package versions by status.
   *     </p>
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * <p>
   *       How to sort the requested list of package versions.
   *     </p>
   * @public
   */
  sortBy?: PackageVersionSortType | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The <code>originType</code> used to filter package versions.
   *       Only package versions with the provided <code>originType</code> will be returned.</p>
   * @public
   */
  originType?: PackageVersionOriginType | undefined;
}

/**
 * <p>
 *        Details about a package version, including its status, version, and revision. The
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>
 *        operation returns a list of <code>PackageVersionSummary</code> objects.
 *      </p>
 * @public
 */
export interface PackageVersionSummary {
  /**
   * <p>
   *         Information about a package version.
   *        </p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>
   *       The revision associated with a package version.
   *     </p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>
   *       A string that contains the status of the package version. It can be one of the following:
   *     </p>
   * @public
   */
  status: PackageVersionStatus | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains information
   *     about how the package version was added to the repository.</p>
   * @public
   */
  origin?: PackageVersionOrigin | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsResult {
  /**
   * <p>
   *       The default package version to display. This depends on the package format:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *           For Maven and PyPI packages, it's the most recently published package version.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           For npm packages, it's the version referenced by the
   *           <code>latest</code> tag. If the  <code>latest</code> tag is not set, it's the most recently published package version.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  defaultDisplayVersion?: string | undefined;

  /**
   * <p>
   *       A format of the package.
   *     </p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package that contains the requested package versions. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *          The name of the package.
   *        </p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>
   *         The returned list of
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
   *         objects.
   *        </p>
   * @public
   */
  versions?: PackageVersionSummary[] | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesRequest {
  /**
   * <p> A prefix used to filter returned repositories. Only repositories with names that start
   *       with <code>repositoryPrefix</code> are returned.</p>
   * @public
   */
  repositoryPrefix?: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> Details about a repository, including its Amazon Resource Name (ARN), description, and
 *       domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of
 *         <code>RepositorySummary</code> objects. </p>
 * @public
 */
export interface RepositorySummary {
  /**
   * <p>
   *          The name of the repository.
   *       </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *          The Amazon Web Services account ID that manages the repository.
   *       </p>
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * <p>
   *          The name of the domain that contains the repository.
   *       </p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p> The ARN of the repository. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       The description of the repository.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A timestamp that represents the date and time the repository was created.</p>
   * @public
   */
  createdTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesResult {
  /**
   * <p>
   *         The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
   *         objects.
   *        </p>
   * @public
   */
  repositories?: RepositorySummary[] | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInDomainRequest {
  /**
   * <p>
   *          The name of the domain that contains the returned list of repositories.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID.
   *        </p>
   * @public
   */
  administratorAccount?: string | undefined;

  /**
   * <p>
   *       A prefix used to filter returned repositories. Only repositories with names that start with
   *       <code>repositoryPrefix</code> are returned.
   *     </p>
   * @public
   */
  repositoryPrefix?: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesInDomainResult {
  /**
   * <p>
   *        The returned list of repositories.
   *      </p>
   * @public
   */
  repositories?: RepositorySummary[] | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubPackageGroupsRequest {
  /**
   * <p>
   *       The name of the domain which contains the package group from which to list sub package groups.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group from which to list sub package groups.
   *     </p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubPackageGroupsResult {
  /**
   * <p>
   *       A list of sub package groups for the requested package group.
   *     </p>
   * @public
   */
  packageGroups?: PackageGroupSummary[] | undefined;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PublishPackageVersionRequest {
  /**
   * <p>The name of the domain that contains the repository that contains the package version to publish.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.</p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository that the package version will be published to.</p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>A format that specifies the type of the package version with the requested asset file.</p>
   *          <p>The only supported value is <code>generic</code>.</p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version to publish.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the package version to publish.</p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>The package version to publish (for example, <code>3.5.2</code>).</p>
   * @public
   */
  packageVersion: string | undefined;

  /**
   * <p>The content of the asset to publish.</p>
   * @public
   */
  assetContent: StreamingBlobTypes | undefined;

  /**
   * <p>The name of the asset to publish. Asset names can include Unicode letters and numbers, and
   *       the following special characters: <code>~ ! @ ^ & ( ) - ` _ + [ ] \{ \} ; , .
   *         `</code>
   *          </p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>The SHA256 hash of the <code>assetContent</code> to publish. This value must be calculated
   *       by the caller and provided with the request (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html#publishing-generic-packages">Publishing a generic package</a> in the <i>CodeArtifact User
   *           Guide</i>).</p>
   *          <p>This value is used as an integrity check to verify that the <code>assetContent</code> has
   *       not changed after it was originally sent.</p>
   * @public
   */
  assetSHA256: string | undefined;

  /**
   * <p>Specifies whether the package version should remain in the <code>unfinished</code>
   *       state. If omitted, the package version status will be set to <code>Published</code> (see
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>).</p>
   *          <p>Valid values: <code>unfinished</code>
   *          </p>
   * @public
   */
  unfinished?: boolean | undefined;
}

/**
 * @public
 */
export interface PublishPackageVersionResult {
  /**
   * <p>The format of the package version.</p>
   * @public
   */
  format?: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the package.</p>
   * @public
   */
  package?: string | undefined;

  /**
   * <p>The version of the package.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The revision of the package version.</p>
   * @public
   */
  versionRevision?: string | undefined;

  /**
   * <p>A string that contains the status of the package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>.</p>
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> for the published asset.</p>
   * @public
   */
  asset?: AssetSummary | undefined;
}

/**
 * @public
 */
export interface PutDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain on which to set the resource policy.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *         The current revision of the resource policy to be set. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   * @public
   */
  policyRevision?: string | undefined;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided domain. </p>
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutDomainPermissionsPolicyResult {
  /**
   * <p> The resource policy that was set after processing the request. </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface PutPackageOriginConfigurationRequest {
  /**
   * <p>The name of the domain that contains the repository that contains the package.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>The name of the repository that contains the package.</p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>A format that specifies the type of the package to be updated.</p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package to be updated. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The name of the package to be updated.</p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>
   *       object that contains information about the <code>upstream</code> and <code>publish</code> package origin restrictions.
   *       The <code>upstream</code> restriction determines if new package versions can be ingested or retained from external connections or upstream repositories.
   *     The <code>publish</code> restriction determines if new package versions can be published directly to the repository.</p>
   *          <p>You must include both the desired <code>upstream</code> and <code>publish</code> restrictions.</p>
   * @public
   */
  restrictions: PackageOriginRestrictions | undefined;
}

/**
 * @public
 */
export interface PutPackageOriginConfigurationResult {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a>
   *       object that describes the origin configuration set for the package. It contains a
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>
   *       object that describes how new versions of the package can be introduced to the repository.</p>
   * @public
   */
  originConfiguration?: PackageOriginConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain containing the repository to set the resource policy on.
   *       </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p> The name of the repository to set the resource policy on. </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *         Sets the revision of the resource policy that specifies permissions to access the repository.
   *         This revision is used for optimistic locking, which prevents others from overwriting your
   *         changes to the repository's resource policy.
   *       </p>
   * @public
   */
  policyRevision?: string | undefined;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided repository. </p>
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutRepositoryPermissionsPolicyResult {
  /**
   * <p> The resource policy that was set after processing the request. </p>
   * @public
   */
  policy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
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
   * <p>
   *       The name of the domain which contains the package group to be updated.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group to be updated.
   *     </p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>
   *       Contact information which you want to update the requested package group with.
   *     </p>
   * @public
   */
  contactInfo?: string | undefined;

  /**
   * <p>
   *       The description you want to update the requested package group with.
   *     </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupResult {
  /**
   * <p>
   *       The package group and information about it after the request has been processed.
   *     </p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;
}

/**
 * <p>
 *       Details about an allowed repository for a package group, including its name and origin configuration.
 *     </p>
 * @public
 */
export interface PackageGroupAllowedRepository {
  /**
   * <p>
   *       The name of the allowed repository.
   *     </p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The origin configuration restriction type of the allowed repository.</p>
   * @public
   */
  originRestrictionType?: PackageGroupOriginRestrictionType | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupOriginConfigurationRequest {
  /**
   * <p>
   *       The name of the domain which contains the package group for which to update the origin configuration.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The pattern of the package group for which to update the origin configuration.
   *     </p>
   * @public
   */
  packageGroup: string | undefined;

  /**
   * <p>
   *         The origin configuration settings that determine how package versions can enter repositories.
   *       </p>
   * @public
   */
  restrictions?: Partial<Record<PackageGroupOriginRestrictionType, PackageGroupOriginRestrictionMode>> | undefined;

  /**
   * <p>The repository name and restrictions to add to the allowed repository list of the specified package group.</p>
   * @public
   */
  addAllowedRepositories?: PackageGroupAllowedRepository[] | undefined;

  /**
   * <p>The repository name and restrictions to remove from the allowed repository list of the specified package group.</p>
   * @public
   */
  removeAllowedRepositories?: PackageGroupAllowedRepository[] | undefined;
}

/**
 * @public
 */
export interface UpdatePackageGroupOriginConfigurationResult {
  /**
   * <p>
   *       The package group and information about it after processing the request.
   *     </p>
   * @public
   */
  packageGroup?: PackageGroupDescription | undefined;

  /**
   * <p>Information about the updated allowed repositories after processing the request.</p>
   * @public
   */
  allowedRepositoryUpdates?:
    | Partial<
        Record<PackageGroupOriginRestrictionType, Partial<Record<PackageGroupAllowedRepositoryUpdateType, string[]>>>
      >
    | undefined;
}

/**
 * @public
 */
export interface UpdatePackageVersionsStatusRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package versions with a status to be updated.
   *     </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *       The repository that contains the package versions with the status you want to update.
   *     </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package with the statuses to update.
   *     </p>
   * @public
   */
  format: PackageFormat | undefined;

  /**
   * <p>The namespace of the package version to be updated. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm or Swift package version is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>The namespace of a generic package is its <code>namespace</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *           Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>
   *       The name of the package with the version statuses to update.
   *     </p>
   * @public
   */
  package: string | undefined;

  /**
   * <p>
   *       An array of strings that specify the versions of the package with the statuses to update.
   *     </p>
   * @public
   */
  versions: string[] | undefined;

  /**
   * <p> A map of package versions and package version revisions. The map <code>key</code> is the
   *       package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the
   *       package version revision. </p>
   * @public
   */
  versionRevisions?: Record<string, string> | undefined;

  /**
   * <p> The package version’s expected status before it is updated. If
   *         <code>expectedStatus</code> is provided, the package version's status is updated only if its
   *       status at the time <code>UpdatePackageVersionsStatus</code> is called matches
   *         <code>expectedStatus</code>. </p>
   * @public
   */
  expectedStatus?: PackageVersionStatus | undefined;

  /**
   * <p>
   *       The status you want to change the package version status to.
   *     </p>
   * @public
   */
  targetStatus: PackageVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePackageVersionsStatusResult {
  /**
   * <p>
   *       A list of <code>PackageVersionError</code> objects, one for each package version with
   *       a status that failed to update.
   *     </p>
   * @public
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo> | undefined;

  /**
   * <p> A list of <code>SuccessfulPackageVersionInfo</code> objects, one for each package version
   *       with a status that successfully updated. </p>
   * @public
   */
  failedVersions?: Record<string, PackageVersionError> | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryRequest {
  /**
   * <p>
   *          The name of the domain associated with the repository to update.
   *        </p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   * @public
   */
  domainOwner?: string | undefined;

  /**
   * <p>
   *          The name of the repository to update.
   *        </p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>
   *          An updated repository description.
   *        </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   * @public
   */
  upstreams?: UpstreamRepository[] | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryResult {
  /**
   * <p>
   *          The updated repository.
   *        </p>
   * @public
   */
  repository?: RepositoryDescription | undefined;
}
