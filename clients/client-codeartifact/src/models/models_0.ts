// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { CodeartifactServiceException as __BaseException } from "./CodeartifactServiceException";

/**
 * <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum AllowPublish {
  ALLOW = "ALLOW",
  BLOCK = "BLOCK",
}

export enum AllowUpstream {
  ALLOW = "ALLOW",
  BLOCK = "BLOCK",
}

export enum HashAlgorithm {
  MD5 = "MD5",
  SHA1 = "SHA-1",
  SHA256 = "SHA-256",
  SHA512 = "SHA-512",
}

/**
 * <p>
 *         Contains details about a package version asset.
 *        </p>
 */
export interface AssetSummary {
  /**
   * <p>
   *          The name of the asset.
   *        </p>
   */
  name: string | undefined;

  /**
   * <p>
   *       The size of the asset.
   *     </p>
   */
  size?: number;

  /**
   * <p>
   *       The hashes of the asset.
   *     </p>
   */
  hashes?: Record<string, string>;
}

export interface AssociateExternalConnectionRequest {
  /**
   * <p>The name of the domain that contains the repository.</p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The name of the repository to which the external connection is added.
   *     </p>
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
   *          </ul>
   */
  externalConnection: string | undefined;
}

export enum PackageFormat {
  MAVEN = "maven",
  NPM = "npm",
  NUGET = "nuget",
  PYPI = "pypi",
}

export enum ExternalConnectionStatus {
  AVAILABLE = "Available",
}

/**
 * <p>
 *         Contains information about the external connection of a repository.
 *       </p>
 */
export interface RepositoryExternalConnectionInfo {
  /**
   * <p> The name of the external connection associated with a repository. </p>
   */
  externalConnectionName?: string;

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
   *          </ul>
   */
  packageFormat?: PackageFormat | string;

  /**
   * <p>
   *         The status of the external connection of a repository. There is one valid value, <code>Available</code>.
   *       </p>
   */
  status?: ExternalConnectionStatus | string;
}

/**
 * <p>
 *         Information about an upstream repository.
 *       </p>
 */
export interface UpstreamRepositoryInfo {
  /**
   * <p> The name of an upstream repository. </p>
   */
  repositoryName?: string;
}

/**
 * <p> The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of
 *       package versions, each of which maps to a set of assets. Repositories are polyglot—a single
 *       repository can contain packages of any supported type. Each repository exposes endpoints for
 *       fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI
 *         (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services
 *       account. </p>
 */
export interface RepositoryDescription {
  /**
   * <p>
   *         The name of the repository.
   *        </p>
   */
  name?: string;

  /**
   * <p> The 12-digit account number of the Amazon Web Services account that manages the repository. </p>
   */
  administratorAccount?: string;

  /**
   * <p>
   *         The name of the domain that contains the repository.
   *        </p>
   */
  domainName?: string;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the repository. </p>
   */
  arn?: string;

  /**
   * <p>
   *       A text description of the repository.
   *     </p>
   */
  description?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepositoryInfo[];

  /**
   * <p>
   *       An array of external connections associated with the repository.
   *     </p>
   */
  externalConnections?: RepositoryExternalConnectionInfo[];
}

export interface AssociateExternalConnectionResult {
  /**
   * <p>
   *         Information about the connected repository after processing the request.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export enum ResourceType {
  ASSET = "asset",
  DOMAIN = "domain",
  PACKAGE = "package",
  PACKAGE_VERSION = "package-version",
  REPOSITORY = "repository",
}

/**
 * <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;

  /**
   * <p>
   *       The type of Amazon Web Services resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;

  /**
   * <p>
   *       The type of Amazon Web Services resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;

  /**
   * <p>
   *       The type of Amazon Web Services resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The time period, in seconds, to wait before retrying the request.
   *     </p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  ENCRYPTION_KEY_ERROR = "ENCRYPTION_KEY_ERROR",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *
   *     </p>
   */
  reason?: ValidationExceptionReason | string;

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
    this.reason = opts.reason;
  }
}

export interface CopyPackageVersionsRequest {
  /**
   * <p>
   *         The name of the domain that contains the source and destination repositories.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the repository that contains the package versions to be copied.
   *        </p>
   */
  sourceRepository: string | undefined;

  /**
   * <p>
   *       The name of the repository into which package versions are copied.
   *     </p>
   */
  destinationRepository: string | undefined;

  /**
   * <p>
   *       The format of the package versions to be copied.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package versions to be copied. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when copying Maven package versions.
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package that contains the versions to be copied.
   *     </p>
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
   */
  versions?: string[];

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
   */
  versionRevisions?: Record<string, string>;

  /**
   * <p>
   *        Set to true to overwrite a package version that already exists in the destination repository.
   *        If set to false and the package version already exists in the destination repository,
   *        the package version is returned in the <code>failedVersions</code> field of the response with
   *        an <code>ALREADY_EXISTS</code> error code.
   *      </p>
   */
  allowOverwrite?: boolean;

  /**
   * <p> Set to true to copy packages from repositories that are upstream from the source
   *       repository to the destination repository. The default setting is false. For more information,
   *       see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with
   *         upstream repositories</a>. </p>
   */
  includeFromUpstream?: boolean;
}

export enum PackageVersionErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  MISMATCHED_REVISION = "MISMATCHED_REVISION",
  MISMATCHED_STATUS = "MISMATCHED_STATUS",
  NOT_ALLOWED = "NOT_ALLOWED",
  NOT_FOUND = "NOT_FOUND",
  SKIPPED = "SKIPPED",
}

/**
 * <p>l
 *        An error associated with package.
 *    </p>
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
   */
  errorCode?: PackageVersionErrorCode | string;

  /**
   * <p>
   *          The error message associated with the error.
   *      </p>
   */
  errorMessage?: string;
}

export enum PackageVersionStatus {
  ARCHIVED = "Archived",
  DELETED = "Deleted",
  DISPOSED = "Disposed",
  PUBLISHED = "Published",
  UNFINISHED = "Unfinished",
  UNLISTED = "Unlisted",
}

/**
 * <p>
 *       Contains the revision and status of a package version.
 *     </p>
 */
export interface SuccessfulPackageVersionInfo {
  /**
   * <p>
   *       The revision of a package version.
   *     </p>
   */
  revision?: string;

  /**
   * <p>
   *       The status of a package version.
   *     </p>
   */
  status?: PackageVersionStatus | string;
}

export interface CopyPackageVersionsResult {
  /**
   * <p>
   *       A list of the package versions that were successfully copied to your repository.
   *     </p>
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;

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
   */
  failedVersions?: Record<string, PackageVersionError>;
}

/**
 * <p>A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  value: string | undefined;
}

export interface CreateDomainRequest {
  /**
   * <p> The name of the domain to create. All domain names in an Amazon Web Services Region that are in the
   *       same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do
   *       not use sensitive information in a domain name because it is publicly discoverable. </p>
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
   */
  encryptionKey?: string;

  /**
   * <p>One or more tag key-value pairs for the domain.</p>
   */
  tags?: Tag[];
}

export enum DomainStatus {
  ACTIVE = "Active",
  DELETED = "Deleted",
}

/**
 * <p>
 *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
 *        add one or more repositories.
 *       </p>
 */
export interface DomainDescription {
  /**
   * <p>
   *          The name of the domain.
   *        </p>
   */
  name?: string;

  /**
   * <p> The Amazon Web Services account ID that owns the domain. </p>
   */
  owner?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the domain. </p>
   */
  arn?: string;

  /**
   * <p>
   *         The current status of a domain.
   *       </p>
   */
  status?: DomainStatus | string;

  /**
   * <p>
   *       A timestamp that represents the date and time the domain was created.
   *     </p>
   */
  createdTime?: Date;

  /**
   * <p> The ARN of an Key Management Service (KMS) key associated with a domain. </p>
   */
  encryptionKey?: string;

  /**
   * <p>
   *       The number of repositories in the domain.
   *     </p>
   */
  repositoryCount?: number;

  /**
   * <p>
   *       The total size of all assets in the domain.
   *     </p>
   */
  assetSizeBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket that is used to store package assets in the domain.</p>
   */
  s3BucketArn?: string;
}

export interface CreateDomainResult {
  /**
   * <p>
   *         Contains information about the created domain after processing the request.
   *       </p>
   */
  domain?: DomainDescription;
}

/**
 * <p>
 *        Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a>
 *        and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.
 *      </p>
 */
export interface UpstreamRepository {
  /**
   * <p> The name of an upstream repository. </p>
   */
  repositoryName: string | undefined;
}

export interface CreateRepositoryRequest {
  /**
   * <p>
   *         The name of the domain that contains the created repository.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The name of the repository to create. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A description of the created repository.
   *     </p>
   */
  description?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepository[];

  /**
   * <p>One or more tag key-value pairs for the repository.</p>
   */
  tags?: Tag[];
}

export interface CreateRepositoryResult {
  /**
   * <p>
   *         Information about the created repository after processing the request.
   *       </p>
   */
  repository?: RepositoryDescription;
}

export interface DeleteDomainRequest {
  /**
   * <p>
   *          The name of the domain to delete.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export interface DeleteDomainResult {
  /**
   * <p>
   *         Contains information about the deleted domain after processing the request.
   *        </p>
   */
  domain?: DomainDescription;
}

export interface DeleteDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain associated with the resource policy to be deleted.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   */
  policyRevision?: string;
}

/**
 * <p>
 *         An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.
 *       </p>
 */
export interface ResourcePolicy {
  /**
   * <p>
   *         The ARN of the resource associated with the resource policy
   *       </p>
   */
  resourceArn?: string;

  /**
   * <p>
   *         The current revision of the resource policy.
   *       </p>
   */
  revision?: string;

  /**
   * <p>
   *       The resource policy formatted in JSON.
   *     </p>
   */
  document?: string;
}

export interface DeleteDomainPermissionsPolicyResult {
  /**
   * <p>
   *         Information about the deleted resource policy after processing the request.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export interface DeletePackageVersionsRequest {
  /**
   * <p>
   *         The name of the domain that contains the package to delete.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the repository that contains the package versions to delete.
   *       </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The format of the package versions to delete.
   *       </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package versions to be deleted. The package version component that specifies its
   *         namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *             The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when deleting Maven package versions.
   *           </p>
   *             </li>
   *             <li>
   *                <p>
   *             The namespace of an npm package version is its <code>scope</code>.
   *           </p>
   *             </li>
   *             <li>
   *                <p>
   *             Python and NuGet package versions do not contain a corresponding component, package versions
   *             of those formats do not have a namespace.
   *           </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *         The name of the package with the versions to delete.
   *       </p>
   */
  package: string | undefined;

  /**
   * <p>
   *         An array of strings that specify the versions of the package to delete.
   *       </p>
   */
  versions: string[] | undefined;

  /**
   * <p>
   *         The expected status of the package version to delete.
   *       </p>
   */
  expectedStatus?: PackageVersionStatus | string;
}

export interface DeletePackageVersionsResult {
  /**
   * <p>
   *        A list of the package versions that were successfully deleted. The
   *        status of every successful version will be <code>Deleted</code>.
   *      </p>
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;

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
   */
  failedVersions?: Record<string, PackageVersionError>;
}

export interface DeleteRepositoryRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository to delete.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The name of the repository to delete. </p>
   */
  repository: string | undefined;
}

export interface DeleteRepositoryResult {
  /**
   * <p>
   *         Information about the deleted repository after processing the request.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export interface DeleteRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain that contains the repository associated with the resource policy to be deleted.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The name of the repository that is associated with the resource policy to be deleted
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which
   *       prevents others from accidentally overwriting your changes to the repository's resource policy.
   *     </p>
   */
  policyRevision?: string;
}

export interface DeleteRepositoryPermissionsPolicyResult {
  /**
   * <p>
   *       Information about the deleted policy after processing the request.
   *     </p>
   */
  policy?: ResourcePolicy;
}

export interface DescribeDomainRequest {
  /**
   * <p>
   *          A string that specifies the name of the requested domain.
   *      </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export interface DescribeDomainResult {
  /**
   * <p>
   *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
   *        add one or more repositories.
   *       </p>
   */
  domain?: DomainDescription;
}

export interface DescribePackageRequest {
  /**
   * <p>The name of the domain that contains the repository that contains the package.</p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The name of the repository that contains the requested package. </p>
   */
  repository: string | undefined;

  /**
   * <p>A format that specifies the type of the requested package.</p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the requested package. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>. The namespace is required when requesting Maven packages.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>The name of the requested package.</p>
   */
  package: string | undefined;
}

/**
 * <p>Details about the origin restrictions set on the package.
 *       The package origin restrictions determine how new versions of a package
 *       can be added to a specific repository.</p>
 */
export interface PackageOriginRestrictions {
  /**
   * <p>The package origin configuration that determines if new versions of the package can be published directly to the repository.</p>
   */
  publish: AllowPublish | string | undefined;

  /**
   * <p>The package origin configuration that determines if new versions of the package can be added to the repository from an external connection or upstream source.</p>
   */
  upstream: AllowUpstream | string | undefined;
}

/**
 * <p>Details about the package origin configuration of a package.</p>
 */
export interface PackageOriginConfiguration {
  /**
   * <p>A <code>PackageOriginRestrictions</code> object that contains information
   *     about the upstream and publish package origin configuration for the package.</p>
   */
  restrictions?: PackageOriginRestrictions;
}

/**
 * <p>Details about a package.</p>
 */
export interface PackageDescription {
  /**
   * <p>A format that specifies the type of the package.</p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>The name of the package.</p>
   */
  name?: string;

  /**
   * <p>The package origin configuration for the package.</p>
   */
  originConfiguration?: PackageOriginConfiguration;
}

export interface DescribePackageResult {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
   *       object that contains information about the requested package.</p>
   */
  package: PackageDescription | undefined;
}

export interface DescribePackageVersionRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The name of the repository that contains the package version. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the requested package version.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the requested package version. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p> The name of the requested package version. </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;
}

/**
 * <p>
 *         Details of the license data.
 *       </p>
 */
export interface LicenseInfo {
  /**
   * <p>
   *         Name of the license.
   *       </p>
   */
  name?: string;

  /**
   * <p>
   *         The URL for license data.
   *       </p>
   */
  url?: string;
}

/**
 * <p>Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to.
 *       For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external
 *     connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery.</p>
 */
export interface DomainEntryPoint {
  /**
   * <p>The name of the repository that a package was originally published to.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the external connection that a package was ingested from.</p>
   */
  externalConnectionName?: string;
}

export enum PackageVersionOriginType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Information about how a package version was added to a repository.</p>
 */
export interface PackageVersionOrigin {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainEntryPoint.html">DomainEntryPoint</a> object that contains
   *     information about from which repository or external connection the package version was added to the domain.</p>
   */
  domainEntryPoint?: DomainEntryPoint;

  /**
   * <p>Describes how the package version was originally added to the domain. An <code>INTERNAL</code> origin type means the package version was published
   *     directly to a repository in the domain. An <code>EXTERNAL</code> origin type means the package version was ingested from an external connection.</p>
   */
  originType?: PackageVersionOriginType | string;
}

/**
 * <p>
 *       Details about a package version.
 *     </p>
 */
export interface PackageVersionDescription {
  /**
   * <p>
   *       The format of the package version.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package version. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the requested package.
   *     </p>
   */
  packageName?: string;

  /**
   * <p>
   *       The name of the package that is displayed. The <code>displayName</code> varies depending
   *       on the package version's format. For example, if an npm package is named <code>ui</code>,
   *       is in the namespace <code>vue</code>, and has the format <code>npm</code>, then
   *       the <code>displayName</code> is <code>@vue/ui</code>.
   *     </p>
   */
  displayName?: string;

  /**
   * <p>
   *       The version of the package.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *       A summary of the package version. The summary is extracted from the package. The information in and
   *       detail level of the summary depends on the package version's format.
   *     </p>
   */
  summary?: string;

  /**
   * <p>
   *       The homepage associated with the package.
   *     </p>
   */
  homePage?: string;

  /**
   * <p>
   *       The repository for the source code in the package version, or the source code used to build it.
   *     </p>
   */
  sourceCodeRepository?: string;

  /**
   * <p>
   *       A timestamp that contains the date and time the package version was published.
   *     </p>
   */
  publishedTime?: Date;

  /**
   * <p>
   *       Information about licenses associated with the package version.
   *     </p>
   */
  licenses?: LicenseInfo[];

  /**
   * <p>
   *       The revision of the package version.
   *     </p>
   */
  revision?: string;

  /**
   * <p>
   *       A string that contains the status of the package version.
   *     </p>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains
   *     information about how the package version was added to the repository.</p>
   */
  origin?: PackageVersionOrigin;
}

export interface DescribePackageVersionResult {
  /**
   * <p>
   *       A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
   *       object that contains information about the requested package version.
   *     </p>
   */
  packageVersion: PackageVersionDescription | undefined;
}

export interface DescribeRepositoryRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository to describe.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         A string that specifies the name of the requested repository.
   *        </p>
   */
  repository: string | undefined;
}

export interface DescribeRepositoryResult {
  /**
   * <p>
   *          A <code>RepositoryDescription</code> object that contains the requested repository information.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export interface DisassociateExternalConnectionRequest {
  /**
   * <p>The name of the domain that contains the repository from which to remove the external
   *       repository. </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The name of the repository from which the external connection will be removed. </p>
   */
  repository: string | undefined;

  /**
   * <p>The name of the external connection to be removed from the repository. </p>
   */
  externalConnection: string | undefined;
}

export interface DisassociateExternalConnectionResult {
  /**
   * <p>
   *       The repository associated with the removed external connection.
   *     </p>
   */
  repository?: RepositoryDescription;
}

export interface DisposePackageVersionsRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository you want to dispose.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The name of the repository that contains the package versions you want to dispose.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of package versions you want to dispose.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package versions to be disposed. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package with the versions you want to dispose.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       The versions of the package you want to dispose.
   *     </p>
   */
  versions: string[] | undefined;

  /**
   * <p>
   *       The revisions of the package versions you want to dispose.
   *     </p>
   */
  versionRevisions?: Record<string, string>;

  /**
   * <p>
   *       The expected status of the package version to dispose.
   *     </p>
   */
  expectedStatus?: PackageVersionStatus | string;
}

export interface DisposePackageVersionsResult {
  /**
   * <p>
   *       A list of the package versions that were successfully disposed.
   *     </p>
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;

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
   */
  failedVersions?: Record<string, PackageVersionError>;
}

export interface GetAuthorizationTokenRequest {
  /**
   * <p>
   *         The name of the domain that is in scope for the generated authorization token.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The time, in seconds, that the generated authorization token is valid. Valid values are
   *     <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours).
   *     A value of <code>0</code> will set the expiration of the authorization token to the same expiration of
   *     the user's role's temporary credentials.</p>
   */
  durationSeconds?: number;
}

export interface GetAuthorizationTokenResult {
  /**
   * <p>
   *         The returned authentication token.
   *        </p>
   */
  authorizationToken?: string;

  /**
   * <p>
   *       A timestamp that specifies the date and time the authorization token expires.
   *     </p>
   */
  expiration?: Date;
}

export interface GetDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain to which the resource policy is attached.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export interface GetDomainPermissionsPolicyResult {
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export interface GetPackageVersionAssetRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version with the requested asset.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The repository that contains the package version with the requested asset.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested asset file.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package version with the requested asset file. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package that contains the requested asset.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *       The name of the requested asset.
   *     </p>
   */
  asset: string | undefined;

  /**
   * <p>
   *         The name of the package version revision that contains the requested asset.
   *     </p>
   */
  packageVersionRevision?: string;
}

export interface GetPackageVersionAssetResult {
  /**
   * <p> The binary file, or asset, that is downloaded.</p>
   */
  asset?: Readable | ReadableStream | Blob;

  /**
   * <p>
   *       The name of the asset that is downloaded.
   *     </p>
   */
  assetName?: string;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion?: string;

  /**
   * <p>
   *       The name of the package version revision that contains the downloaded asset.
   *     </p>
   */
  packageVersionRevision?: string;
}

export interface GetPackageVersionReadmeRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version with the requested readme file.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The repository that contains the package with the requested readme file.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested readme file.
   *     </p>
   *          <note>
   *             <p>Although <code>maven</code> is
   *       listed as a valid value, CodeArtifact does not support displaying readme files for Maven packages.</p>
   *          </note>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package version with the requested readme file. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package version that contains the requested readme file.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;
}

export interface GetPackageVersionReadmeResult {
  /**
   * <p>
   *       The format of the package with the requested readme file.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package version with the requested readme file. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package that contains the returned readme file.
   *     </p>
   */
  package?: string;

  /**
   * <p>
   *       The version of the package with the requested readme file.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   */
  versionRevision?: string;

  /**
   * <p>
   *       The text of the returned readme file.
   *     </p>
   */
  readme?: string;
}

export interface GetRepositoryEndpointRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository.
   *      </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the repository.
   *      </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       Returns which endpoint of a repository to return. A repository has one endpoint for each
   *       package format.
   *     </p>
   */
  format: PackageFormat | string | undefined;
}

export interface GetRepositoryEndpointResult {
  /**
   * <p>
   *          A string that specifies the URL of the returned endpoint.
   *      </p>
   */
  repositoryEndpoint?: string;
}

export interface GetRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain containing the repository whose associated resource policy is to be retrieved.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the repository whose associated resource policy is to be retrieved.
   *       </p>
   */
  repository: string | undefined;
}

export interface GetRepositoryPermissionsPolicyResult {
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export interface ListDomainsRequest {
  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

/**
 * <p> Information about a domain, including its name, Amazon Resource Name (ARN), and status.
 *       The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code>
 *       objects. </p>
 */
export interface DomainSummary {
  /**
   * <p>
   *       The name of the domain.
   *     </p>
   */
  name?: string;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  owner?: string;

  /**
   * <p>
   *       The ARN of the domain.
   *     </p>
   */
  arn?: string;

  /**
   * <p>
   *       A string that contains the status of the domain.
   *     </p>
   */
  status?: DomainStatus | string;

  /**
   * <p>
   *       A timestamp that contains the date and time the domain was created.
   *     </p>
   */
  createdTime?: Date;

  /**
   * <p>
   *       The key used to encrypt the domain.
   *     </p>
   */
  encryptionKey?: string;
}

export interface ListDomainsResult {
  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html">DomainSummary</a> objects.
   *      </p>
   */
  domains?: DomainSummary[];

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListPackagesRequest {
  /**
   * <p>
   *         The name of the domain that contains the repository that contains the requested packages.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the repository that contains the requested packages.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>The format used to filter requested packages. Only packages from the provided format will be returned.</p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p>
   *          <p>Each package format uses namespace as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       A prefix used to filter requested packages. Only packages with names that start with
   *       <code>packagePrefix</code> are returned.
   *     </p>
   */
  packagePrefix?: string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>The value of the <code>Publish</code> package origin control restriction used to filter requested packages.
   *       Only packages with the provided restriction are returned.
   *       For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.</p>
   */
  publish?: AllowPublish | string;

  /**
   * <p>The value of the <code>Upstream</code> package origin control restriction used to filter requested packages.
   *       Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.</p>
   */
  upstream?: AllowUpstream | string;
}

/**
 * <p>
 *       Details about a package, including its format, namespace, and name. The
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html">ListPackages</a>
 *       operation returns a list of <code>PackageSummary</code> objects.
 *     </p>
 */
export interface PackageSummary {
  /**
   * <p>
   *       The format of the package.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package.
   *     </p>
   */
  package?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a>
   *       object that contains a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a> object
   *       that contains information about the upstream and publish package origin restrictions.</p>
   */
  originConfiguration?: PackageOriginConfiguration;
}

export interface ListPackagesResult {
  /**
   * <p>
   *         The list of returned <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
   *         objects.
   *        </p>
   */
  packages?: PackageSummary[];

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListPackageVersionAssetsRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository associated with the package version assets.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The name of the repository that contains the package that contains the requested package version assets.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the package that contains the requested package version assets.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *          The name of the package that contains the requested package version assets.
   *        </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListPackageVersionAssetsResult {
  /**
   * <p>
   *       The format of the package that contains the requested package version assets.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its
   *        namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *            The namespace of a Maven package version is its <code>groupId</code>.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *            The namespace of an npm package version is its <code>scope</code>.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *            Python and NuGet package versions do not contain a corresponding component, package versions
   *            of those formats do not have a namespace.
   *          </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package that contains the requested package version assets.
   *     </p>
   */
  package?: string;

  /**
   * <p>
   *       The version of the package associated with the requested assets.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   */
  versionRevision?: string;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects.
   *     </p>
   */
  assets?: AssetSummary[];
}

export interface ListPackageVersionDependenciesRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the requested package version dependencies.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The name of the repository that contains the requested package version.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the package with the requested dependencies.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package version with the requested dependencies. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package versions' package.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

/**
 * <p>
 *         Details about a package dependency.
 *       </p>
 */
export interface PackageDependency {
  /**
   * <p>The namespace of the package that this package depends on. The package component that specifies its
   *        namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *            The namespace of a Maven package is its <code>groupId</code>.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *            The namespace of an npm package is its <code>scope</code>.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *            Python and NuGet packages do not contain a corresponding component, packages
   *            of those formats do not have a namespace.
   *          </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *         The name of the package that this package depends on.
   *        </p>
   */
  package?: string;

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
   */
  dependencyType?: string;

  /**
   * <p>
   *         The required version, or version range, of the package that this package depends on. The version format
   *         is specific to the package type. For example, the following are possible valid required versions: <code>1.2.3</code>,
   *         <code>^2.3.4</code>, or <code>4.x</code>.
   *       </p>
   */
  versionRequirement?: string;
}

export interface ListPackageVersionDependenciesResult {
  /**
   * <p>
   *       A format that specifies the type of the package that contains the returned dependencies.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package version that contains the returned dependencies. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package that contains the returned package versions dependencies.
   *     </p>
   */
  package?: string;

  /**
   * <p>
   *       The version of the package that is specified in the request.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   */
  versionRevision?: string;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects.
   *     </p>
   */
  dependencies?: PackageDependency[];
}

export enum PackageVersionSortType {
  PUBLISHED_TIME = "PUBLISHED_TIME",
}

export interface ListPackageVersionsRequest {
  /**
   * <p>
   *          The name of the domain that contains the repository that contains the requested package versions.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the repository that contains the requested package versions.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The format of the returned package versions.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package that contains the requested package versions. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package for which you want to request package versions.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       A string that filters the requested package versions by status.
   *     </p>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>
   *       How to sort the requested list of package versions.
   *     </p>
   */
  sortBy?: PackageVersionSortType | string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>The <code>originType</code> used to filter package versions.
   *       Only package versions with the provided <code>originType</code> will be returned.</p>
   */
  originType?: PackageVersionOriginType | string;
}

/**
 * <p>
 *        Details about a package version, including its status, version, and revision. The
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>
 *        operation returns a list of <code>PackageVersionSummary</code> objects.
 *      </p>
 */
export interface PackageVersionSummary {
  /**
   * <p>
   *         Information about a package version.
   *        </p>
   */
  version: string | undefined;

  /**
   * <p>
   *       The revision associated with a package version.
   *     </p>
   */
  revision?: string;

  /**
   * <p>
   *       A string that contains the status of the package version. It can be one of the following:
   *     </p>
   */
  status: PackageVersionStatus | string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionOrigin.html">PackageVersionOrigin</a> object that contains information
   *     about how the package version was added to the repository.</p>
   */
  origin?: PackageVersionOrigin;
}

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
   */
  defaultDisplayVersion?: string;

  /**
   * <p>
   *       A format of the package.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>The namespace of the package that contains the requested package versions. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *          The name of the package.
   *        </p>
   */
  package?: string;

  /**
   * <p>
   *         The returned list of
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
   *         objects.
   *        </p>
   */
  versions?: PackageVersionSummary[];

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListRepositoriesRequest {
  /**
   * <p> A prefix used to filter returned repositories. Only repositories with names that start
   *       with <code>repositoryPrefix</code> are returned.</p>
   */
  repositoryPrefix?: string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

/**
 * <p> Details about a repository, including its Amazon Resource Name (ARN), description, and
 *       domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of
 *         <code>RepositorySummary</code> objects. </p>
 */
export interface RepositorySummary {
  /**
   * <p>
   *          The name of the repository.
   *       </p>
   */
  name?: string;

  /**
   * <p>
   *          The Amazon Web Services account ID that manages the repository.
   *       </p>
   */
  administratorAccount?: string;

  /**
   * <p>
   *          The name of the domain that contains the repository.
   *       </p>
   */
  domainName?: string;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The ARN of the repository. </p>
   */
  arn?: string;

  /**
   * <p>
   *       The description of the repository.
   *     </p>
   */
  description?: string;
}

export interface ListRepositoriesResult {
  /**
   * <p>
   *         The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
   *         objects.
   *        </p>
   */
  repositories?: RepositorySummary[];

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListRepositoriesInDomainRequest {
  /**
   * <p>
   *          The name of the domain that contains the returned list of repositories.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID.
   *        </p>
   */
  administratorAccount?: string;

  /**
   * <p>
   *       A prefix used to filter returned repositories. Only repositories with names that start with
   *       <code>repositoryPrefix</code> are returned.
   *     </p>
   */
  repositoryPrefix?: string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListRepositoriesInDomainResult {
  /**
   * <p>
   *        The returned list of repositories.
   *      </p>
   */
  repositories?: RepositorySummary[];

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  tags?: Tag[];
}

export interface PutDomainPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain on which to set the resource policy.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The current revision of the resource policy to be set. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   */
  policyRevision?: string;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided domain. </p>
   */
  policyDocument: string | undefined;
}

export interface PutDomainPermissionsPolicyResult {
  /**
   * <p> The resource policy that was set after processing the request. </p>
   */
  policy?: ResourcePolicy;
}

export interface PutPackageOriginConfigurationRequest {
  /**
   * <p>The name of the domain that contains the repository that contains the package.</p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The name of the repository that contains the package.</p>
   */
  repository: string | undefined;

  /**
   * <p>A format that specifies the type of the package to be updated.</p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package to be updated. The package component that specifies its
   *       namespace depends on its type. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *           The namespace of a Maven package is its <code>groupId</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           The namespace of an npm package is its <code>scope</code>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Python and NuGet packages do not contain a corresponding component, packages
   *           of those formats do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>The name of the package to be updated.</p>
   */
  package: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>
   *       object that contains information about the <code>upstream</code> and <code>publish</code> package origin restrictions.
   *       The <code>upstream</code> restriction determines if new package versions can be ingested or retained from external connections or upstream repositories.
   *     The <code>publish</code> restriction determines if new package versions can be published directly to the repository.</p>
   *          <p>You must include both the desired <code>upstream</code> and <code>publish</code> restrictions.</p>
   */
  restrictions: PackageOriginRestrictions | undefined;
}

export interface PutPackageOriginConfigurationResult {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginConfiguration.html">PackageOriginConfiguration</a>
   *       object that describes the origin configuration set for the package. It contains a
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>
   *       object that describes how new versions of the package can be introduced to the repository.</p>
   */
  originConfiguration?: PackageOriginConfiguration;
}

export interface PutRepositoryPermissionsPolicyRequest {
  /**
   * <p>
   *         The name of the domain containing the repository to set the resource policy on.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> The name of the repository to set the resource policy on. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         Sets the revision of the resource policy that specifies permissions to access the repository.
   *         This revision is used for optimistic locking, which prevents others from overwriting your
   *         changes to the repository's resource policy.
   *       </p>
   */
  policyRevision?: string;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided repository. </p>
   */
  policyDocument: string | undefined;
}

export interface PutRepositoryPermissionsPolicyResult {
  /**
   * <p> The resource policy that was set after processing the request. </p>
   */
  policy?: ResourcePolicy;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceResult {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResult {}

export interface UpdatePackageVersionsStatusRequest {
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package versions with a status to be updated.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The repository that contains the package versions with the status you want to update.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A format that specifies the type of the package with the statuses to update.
   *     </p>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>The namespace of the package version to be updated. The package version component that specifies its
   *       namespace depends on its type. For example:</p>
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
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the package with the version statuses to update.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       An array of strings that specify the versions of the package with the statuses to update.
   *     </p>
   */
  versions: string[] | undefined;

  /**
   * <p> A map of package versions and package version revisions. The map <code>key</code> is the
   *       package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the
   *       package version revision. </p>
   */
  versionRevisions?: Record<string, string>;

  /**
   * <p> The package version’s expected status before it is updated. If
   *         <code>expectedStatus</code> is provided, the package version's status is updated only if its
   *       status at the time <code>UpdatePackageVersionsStatus</code> is called matches
   *         <code>expectedStatus</code>. </p>
   */
  expectedStatus?: PackageVersionStatus | string;

  /**
   * <p>
   *       The status you want to change the package version status to.
   *     </p>
   */
  targetStatus: PackageVersionStatus | string | undefined;
}

export interface UpdatePackageVersionsStatusResult {
  /**
   * <p>
   *       A list of <code>PackageVersionError</code> objects, one for each package version with
   *       a status that failed to update.
   *     </p>
   */
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;

  /**
   * <p> A list of <code>SuccessfulPackageVersionInfo</code> objects, one for each package version
   *       with a status that successfully updated. </p>
   */
  failedVersions?: Record<string, PackageVersionError>;
}

export interface UpdateRepositoryRequest {
  /**
   * <p>
   *          The name of the domain associated with the repository to update.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the repository to update.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *          An updated repository description.
   *        </p>
   */
  description?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepository[];
}

export interface UpdateRepositoryResult {
  /**
   * <p>
   *          The updated repository.
   *        </p>
   */
  repository?: RepositoryDescription;
}

/**
 * @internal
 */
export const AssetSummaryFilterSensitiveLog = (obj: AssetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateExternalConnectionRequestFilterSensitiveLog = (obj: AssociateExternalConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryExternalConnectionInfoFilterSensitiveLog = (obj: RepositoryExternalConnectionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpstreamRepositoryInfoFilterSensitiveLog = (obj: UpstreamRepositoryInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryDescriptionFilterSensitiveLog = (obj: RepositoryDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateExternalConnectionResultFilterSensitiveLog = (obj: AssociateExternalConnectionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyPackageVersionsRequestFilterSensitiveLog = (obj: CopyPackageVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionErrorFilterSensitiveLog = (obj: PackageVersionError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessfulPackageVersionInfoFilterSensitiveLog = (obj: SuccessfulPackageVersionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyPackageVersionsResultFilterSensitiveLog = (obj: CopyPackageVersionsResult): any => ({
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
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDescriptionFilterSensitiveLog = (obj: DomainDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResultFilterSensitiveLog = (obj: CreateDomainResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpstreamRepositoryFilterSensitiveLog = (obj: UpstreamRepository): any => ({
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
export const CreateRepositoryResultFilterSensitiveLog = (obj: CreateRepositoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainRequestFilterSensitiveLog = (obj: DeleteDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainResultFilterSensitiveLog = (obj: DeleteDomainResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainPermissionsPolicyRequestFilterSensitiveLog = (
  obj: DeleteDomainPermissionsPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcePolicyFilterSensitiveLog = (obj: ResourcePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainPermissionsPolicyResultFilterSensitiveLog = (
  obj: DeleteDomainPermissionsPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageVersionsRequestFilterSensitiveLog = (obj: DeletePackageVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageVersionsResultFilterSensitiveLog = (obj: DeletePackageVersionsResult): any => ({
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
export const DeleteRepositoryResultFilterSensitiveLog = (obj: DeleteRepositoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryPermissionsPolicyRequestFilterSensitiveLog = (
  obj: DeleteRepositoryPermissionsPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryPermissionsPolicyResultFilterSensitiveLog = (
  obj: DeleteRepositoryPermissionsPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResultFilterSensitiveLog = (obj: DescribeDomainResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageRequestFilterSensitiveLog = (obj: DescribePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageOriginRestrictionsFilterSensitiveLog = (obj: PackageOriginRestrictions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageOriginConfigurationFilterSensitiveLog = (obj: PackageOriginConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageDescriptionFilterSensitiveLog = (obj: PackageDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageResultFilterSensitiveLog = (obj: DescribePackageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageVersionRequestFilterSensitiveLog = (obj: DescribePackageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseInfoFilterSensitiveLog = (obj: LicenseInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEntryPointFilterSensitiveLog = (obj: DomainEntryPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionOriginFilterSensitiveLog = (obj: PackageVersionOrigin): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionDescriptionFilterSensitiveLog = (obj: PackageVersionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackageVersionResultFilterSensitiveLog = (obj: DescribePackageVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRepositoryRequestFilterSensitiveLog = (obj: DescribeRepositoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRepositoryResultFilterSensitiveLog = (obj: DescribeRepositoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateExternalConnectionRequestFilterSensitiveLog = (
  obj: DisassociateExternalConnectionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateExternalConnectionResultFilterSensitiveLog = (
  obj: DisassociateExternalConnectionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisposePackageVersionsRequestFilterSensitiveLog = (obj: DisposePackageVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisposePackageVersionsResultFilterSensitiveLog = (obj: DisposePackageVersionsResult): any => ({
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
export const GetAuthorizationTokenResultFilterSensitiveLog = (obj: GetAuthorizationTokenResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainPermissionsPolicyRequestFilterSensitiveLog = (obj: GetDomainPermissionsPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainPermissionsPolicyResultFilterSensitiveLog = (obj: GetDomainPermissionsPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionAssetRequestFilterSensitiveLog = (obj: GetPackageVersionAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionAssetResultFilterSensitiveLog = (obj: GetPackageVersionAssetResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionReadmeRequestFilterSensitiveLog = (obj: GetPackageVersionReadmeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionReadmeResultFilterSensitiveLog = (obj: GetPackageVersionReadmeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryEndpointRequestFilterSensitiveLog = (obj: GetRepositoryEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryEndpointResultFilterSensitiveLog = (obj: GetRepositoryEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryPermissionsPolicyRequestFilterSensitiveLog = (
  obj: GetRepositoryPermissionsPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryPermissionsPolicyResultFilterSensitiveLog = (
  obj: GetRepositoryPermissionsPolicyResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsRequestFilterSensitiveLog = (obj: ListDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsResultFilterSensitiveLog = (obj: ListDomainsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesRequestFilterSensitiveLog = (obj: ListPackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageSummaryFilterSensitiveLog = (obj: PackageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesResultFilterSensitiveLog = (obj: ListPackagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionAssetsRequestFilterSensitiveLog = (obj: ListPackageVersionAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionAssetsResultFilterSensitiveLog = (obj: ListPackageVersionAssetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionDependenciesRequestFilterSensitiveLog = (
  obj: ListPackageVersionDependenciesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageDependencyFilterSensitiveLog = (obj: PackageDependency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionDependenciesResultFilterSensitiveLog = (
  obj: ListPackageVersionDependenciesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionsRequestFilterSensitiveLog = (obj: ListPackageVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionSummaryFilterSensitiveLog = (obj: PackageVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackageVersionsResultFilterSensitiveLog = (obj: ListPackageVersionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesRequestFilterSensitiveLog = (obj: ListRepositoriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositorySummaryFilterSensitiveLog = (obj: RepositorySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesResultFilterSensitiveLog = (obj: ListRepositoriesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesInDomainRequestFilterSensitiveLog = (obj: ListRepositoriesInDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRepositoriesInDomainResultFilterSensitiveLog = (obj: ListRepositoriesInDomainResult): any => ({
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
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDomainPermissionsPolicyRequestFilterSensitiveLog = (obj: PutDomainPermissionsPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDomainPermissionsPolicyResultFilterSensitiveLog = (obj: PutDomainPermissionsPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPackageOriginConfigurationRequestFilterSensitiveLog = (
  obj: PutPackageOriginConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPackageOriginConfigurationResultFilterSensitiveLog = (
  obj: PutPackageOriginConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRepositoryPermissionsPolicyRequestFilterSensitiveLog = (
  obj: PutRepositoryPermissionsPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRepositoryPermissionsPolicyResultFilterSensitiveLog = (
  obj: PutRepositoryPermissionsPolicyResult
): any => ({
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
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
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
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageVersionsStatusRequestFilterSensitiveLog = (obj: UpdatePackageVersionsStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageVersionsStatusResultFilterSensitiveLog = (obj: UpdatePackageVersionsStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRepositoryRequestFilterSensitiveLog = (obj: UpdateRepositoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRepositoryResultFilterSensitiveLog = (obj: UpdateRepositoryResult): any => ({
  ...obj,
});
