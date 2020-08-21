import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>
 *         Contains details about a package version asset.
 *        </p>
 */
export interface AssetSummary {
  __type?: "AssetSummary";
  /**
   * <p>
   *       The size of the asset.
   *     </p>
   */
  size?: number;

  /**
   * <p>
   *          The name of the asset.
   *        </p>
   */
  name: string | undefined;

  /**
   * <p>
   *       The hashes of the asset.
   *     </p>
   */
  hashes?: { [key: string]: string };
}

export namespace AssetSummary {
  export const filterSensitiveLog = (obj: AssetSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetSummary => __isa(o, "AssetSummary");
}

export interface AssociateExternalConnectionRequest {
  __type?: "AssociateExternalConnectionRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The name of the domain that contains the repository.</p>
   */
  domain: string | undefined;

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

export namespace AssociateExternalConnectionRequest {
  export const filterSensitiveLog = (obj: AssociateExternalConnectionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateExternalConnectionRequest =>
    __isa(o, "AssociateExternalConnectionRequest");
}

export interface AssociateExternalConnectionResult {
  __type?: "AssociateExternalConnectionResult";
  /**
   * <p>
   *         Information about the connected repository after processing the request.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export namespace AssociateExternalConnectionResult {
  export const filterSensitiveLog = (obj: AssociateExternalConnectionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateExternalConnectionResult => __isa(o, "AssociateExternalConnectionResult");
}

/**
 * <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>
   *       The type of AWS resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;

  message: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CopyPackageVersionsRequest {
  __type?: "CopyPackageVersionsRequest";
  /**
   * <p>
   *         The name of the domain that contains the source and destination repositories.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *          The name of the repository that contains the package versions to copy.
   *        </p>
   */
  sourceRepository: string | undefined;

  /**
   * <p>
   *       The name of the package that is copied.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p> Set to true to copy packages from repositories that are upstream from the source
   *       repository to the destination repository. The default setting is false. For more information,
   *       see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with
   *         upstream repositories</a>. </p>
   */
  includeFromUpstream?: boolean;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

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
   * <p>
   *       The name of the repository into which package versions are copied.
   *     </p>
   */
  destinationRepository: string | undefined;

  /**
   * <p>
   *         The versions of the package to copy.
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
  versionRevisions?: { [key: string]: string };

  /**
   * <p>
   *       The format of the package that is copied. The valid package types are:
   *     </p>
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
   *          </ul>
   */
  format: PackageFormat | string | undefined;
}

export namespace CopyPackageVersionsRequest {
  export const filterSensitiveLog = (obj: CopyPackageVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CopyPackageVersionsRequest => __isa(o, "CopyPackageVersionsRequest");
}

export interface CopyPackageVersionsResult {
  __type?: "CopyPackageVersionsResult";
  /**
   * <p>
   *       A list of the package versions that were successfully copied to your repository.
   *     </p>
   */
  successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

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
  failedVersions?: { [key: string]: PackageVersionError };
}

export namespace CopyPackageVersionsResult {
  export const filterSensitiveLog = (obj: CopyPackageVersionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CopyPackageVersionsResult => __isa(o, "CopyPackageVersionsResult");
}

export interface CreateDomainRequest {
  __type?: "CreateDomainRequest";
  /**
   * <p> The name of the domain to create. All domain names in an AWS Region that are in the
   *       same AWS account must be unique. The domain name is used as the prefix in DNS hostnames. Do
   *       not use sensitive information in a domain name because it is publicly discoverable. </p>
   */
  domain: string | undefined;

  /**
   * <p> The encryption key for the domain. This is used to encrypt content stored in a domain.
   *       An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key
   *       alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have
   *         <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption
   *       key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>AWS Key Management Service API Reference</i>
   *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">AWS KMS API Permissions
   *         Reference</a> in the <i>AWS Key Management Service Developer Guide</i>. </p>
   *          <important>
   *             <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your
   *         domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric
   *           keys</a> in the <i>AWS Key Management Service Developer Guide</i>. </p>
   *          </important>
   */
  encryptionKey?: string;
}

export namespace CreateDomainRequest {
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainRequest => __isa(o, "CreateDomainRequest");
}

export interface CreateDomainResult {
  __type?: "CreateDomainResult";
  /**
   * <p>
   *         Contains information about the created domain after processing the request.
   *       </p>
   */
  domain?: DomainDescription;
}

export namespace CreateDomainResult {
  export const filterSensitiveLog = (obj: CreateDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDomainResult => __isa(o, "CreateDomainResult");
}

export interface CreateRepositoryRequest {
  __type?: "CreateRepositoryRequest";
  /**
   * <p> The name of the repository to create. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         A description of the created repository.
   *       </p>
   */
  description?: string;

  /**
   * <p>
   *         The domain that contains the created repository.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepository[];
}

export namespace CreateRepositoryRequest {
  export const filterSensitiveLog = (obj: CreateRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRepositoryRequest => __isa(o, "CreateRepositoryRequest");
}

export interface CreateRepositoryResult {
  __type?: "CreateRepositoryResult";
  /**
   * <p>
   *         Information about the created repository after processing the request.
   *       </p>
   */
  repository?: RepositoryDescription;
}

export namespace CreateRepositoryResult {
  export const filterSensitiveLog = (obj: CreateRepositoryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRepositoryResult => __isa(o, "CreateRepositoryResult");
}

export interface DeleteDomainPermissionsPolicyRequest {
  __type?: "DeleteDomainPermissionsPolicyRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the domain associated with the resource policy to be deleted.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   */
  policyRevision?: string;
}

export namespace DeleteDomainPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteDomainPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainPermissionsPolicyRequest =>
    __isa(o, "DeleteDomainPermissionsPolicyRequest");
}

export interface DeleteDomainPermissionsPolicyResult {
  __type?: "DeleteDomainPermissionsPolicyResult";
  /**
   * <p>
   *         Information about the deleted resource policy after processing the request.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export namespace DeleteDomainPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: DeleteDomainPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainPermissionsPolicyResult =>
    __isa(o, "DeleteDomainPermissionsPolicyResult");
}

export interface DeleteDomainRequest {
  __type?: "DeleteDomainRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the domain to delete.
   *        </p>
   */
  domain: string | undefined;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainRequest => __isa(o, "DeleteDomainRequest");
}

export interface DeleteDomainResult {
  __type?: "DeleteDomainResult";
  /**
   * <p>
   *         Contains information about the deleted domain after processing the request.
   *        </p>
   */
  domain?: DomainDescription;
}

export namespace DeleteDomainResult {
  export const filterSensitiveLog = (obj: DeleteDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDomainResult => __isa(o, "DeleteDomainResult");
}

export interface DeletePackageVersionsRequest {
  __type?: "DeletePackageVersionsRequest";
  /**
   * <p>
   *         The name of the domain that contains the package to delete.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The name of the repository that contains the package versions to delete.
   *       </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The format of the package versions to delete. The valid values are:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *         The expected status of the package version to delete. Valid values are:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  expectedStatus?: PackageVersionStatus | string;

  /**
   * <p>
   *         An array of strings that specify the versions of the package to delete.
   *       </p>
   */
  versions: string[] | undefined;

  /**
   * <p>
   *         The name of the package with the versions to delete.
   *       </p>
   */
  package: string | undefined;
}

export namespace DeletePackageVersionsRequest {
  export const filterSensitiveLog = (obj: DeletePackageVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackageVersionsRequest => __isa(o, "DeletePackageVersionsRequest");
}

export interface DeletePackageVersionsResult {
  __type?: "DeletePackageVersionsResult";
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
  failedVersions?: { [key: string]: PackageVersionError };

  /**
   * <p>
   *        A list of the package versions that were successfully deleted.
   *      </p>
   */
  successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };
}

export namespace DeletePackageVersionsResult {
  export const filterSensitiveLog = (obj: DeletePackageVersionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePackageVersionsResult => __isa(o, "DeletePackageVersionsResult");
}

export interface DeleteRepositoryPermissionsPolicyRequest {
  __type?: "DeleteRepositoryPermissionsPolicyRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
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

  /**
   * <p>
   *         The name of the domain that contains the repository associated with the resource policy to be deleted.
   *       </p>
   */
  domain: string | undefined;
}

export namespace DeleteRepositoryPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteRepositoryPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRepositoryPermissionsPolicyRequest =>
    __isa(o, "DeleteRepositoryPermissionsPolicyRequest");
}

export interface DeleteRepositoryPermissionsPolicyResult {
  __type?: "DeleteRepositoryPermissionsPolicyResult";
  /**
   * <p>
   *       Information about the deleted policy after processing the request.
   *     </p>
   */
  policy?: ResourcePolicy;
}

export namespace DeleteRepositoryPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: DeleteRepositoryPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRepositoryPermissionsPolicyResult =>
    __isa(o, "DeleteRepositoryPermissionsPolicyResult");
}

export interface DeleteRepositoryRequest {
  __type?: "DeleteRepositoryRequest";
  /**
   * <p> The name of the repository to delete. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the domain that contains the repository to delete.
   *        </p>
   */
  domain: string | undefined;
}

export namespace DeleteRepositoryRequest {
  export const filterSensitiveLog = (obj: DeleteRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRepositoryRequest => __isa(o, "DeleteRepositoryRequest");
}

export interface DeleteRepositoryResult {
  __type?: "DeleteRepositoryResult";
  /**
   * <p>
   *         Information about the deleted repository after processing the request.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export namespace DeleteRepositoryResult {
  export const filterSensitiveLog = (obj: DeleteRepositoryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRepositoryResult => __isa(o, "DeleteRepositoryResult");
}

export interface DescribeDomainRequest {
  __type?: "DescribeDomainRequest";
  /**
   * <p>
   *          A string that specifies the name of the requested domain.
   *      </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export namespace DescribeDomainRequest {
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDomainRequest => __isa(o, "DescribeDomainRequest");
}

export interface DescribeDomainResult {
  __type?: "DescribeDomainResult";
  /**
   * <p>
   *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
   *        add one or more repositories.
   *       </p>
   */
  domain?: DomainDescription;
}

export namespace DescribeDomainResult {
  export const filterSensitiveLog = (obj: DescribeDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDomainResult => __isa(o, "DescribeDomainResult");
}

export interface DescribePackageVersionRequest {
  __type?: "DescribePackageVersionRequest";
  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p> The name of the requested package version. </p>
   */
  package: string | undefined;

  /**
   * <p> The name of the repository that contains the package version. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       A format that specifies the type of the requested package version. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;
}

export namespace DescribePackageVersionRequest {
  export const filterSensitiveLog = (obj: DescribePackageVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackageVersionRequest => __isa(o, "DescribePackageVersionRequest");
}

export interface DescribePackageVersionResult {
  __type?: "DescribePackageVersionResult";
  /**
   * <p>
   *       A <code>
   *                <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
   *             </code>
   *       object that contains information about the requested package version.
   *     </p>
   */
  packageVersion: PackageVersionDescription | undefined;
}

export namespace DescribePackageVersionResult {
  export const filterSensitiveLog = (obj: DescribePackageVersionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribePackageVersionResult => __isa(o, "DescribePackageVersionResult");
}

export interface DescribeRepositoryRequest {
  __type?: "DescribeRepositoryRequest";
  /**
   * <p>
   *         A string that specifies the name of the requested repository.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *          The name of the domain that contains the repository to describe.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export namespace DescribeRepositoryRequest {
  export const filterSensitiveLog = (obj: DescribeRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRepositoryRequest => __isa(o, "DescribeRepositoryRequest");
}

export interface DescribeRepositoryResult {
  __type?: "DescribeRepositoryResult";
  /**
   * <p>
   *          A <code>RepositoryDescription</code> object that contains the requested repository information.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export namespace DescribeRepositoryResult {
  export const filterSensitiveLog = (obj: DescribeRepositoryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRepositoryResult => __isa(o, "DescribeRepositoryResult");
}

export interface DisassociateExternalConnectionRequest {
  __type?: "DisassociateExternalConnectionRequest";
  /**
   * <p>The name of the repository from which the external connection will be removed. </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The name of the external connection to be removed from the repository. </p>
   */
  externalConnection: string | undefined;

  /**
   * <p>The name of the domain that contains the repository from which to remove the external
   *       repository. </p>
   */
  domain: string | undefined;
}

export namespace DisassociateExternalConnectionRequest {
  export const filterSensitiveLog = (obj: DisassociateExternalConnectionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateExternalConnectionRequest =>
    __isa(o, "DisassociateExternalConnectionRequest");
}

export interface DisassociateExternalConnectionResult {
  __type?: "DisassociateExternalConnectionResult";
  /**
   * <p>
   *       The repository associated with the removed external connection.
   *     </p>
   */
  repository?: RepositoryDescription;
}

export namespace DisassociateExternalConnectionResult {
  export const filterSensitiveLog = (obj: DisassociateExternalConnectionResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateExternalConnectionResult =>
    __isa(o, "DisassociateExternalConnectionResult");
}

export interface DisposePackageVersionsRequest {
  __type?: "DisposePackageVersionsRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       A format that specifies the type of package versions you want to dispose. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the repository that contains the package versions you want to dispose.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The revisions of the package versions you want to dispose.
   *     </p>
   */
  versionRevisions?: { [key: string]: string };

  /**
   * <p>
   *       The name of the domain that contains the repository you want to dispose.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       The versions of the package you want to dispose.
   *     </p>
   */
  versions: string[] | undefined;

  /**
   * <p>
   *       The expected status of the package version to dispose. Valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  expectedStatus?: PackageVersionStatus | string;

  /**
   * <p>
   *       The name of the package with the versions you want to dispose.
   *     </p>
   */
  package: string | undefined;
}

export namespace DisposePackageVersionsRequest {
  export const filterSensitiveLog = (obj: DisposePackageVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisposePackageVersionsRequest => __isa(o, "DisposePackageVersionsRequest");
}

export interface DisposePackageVersionsResult {
  __type?: "DisposePackageVersionsResult";
  /**
   * <p>
   *       A list of the package versions that were successfully disposed.
   *     </p>
   */
  successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

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
  failedVersions?: { [key: string]: PackageVersionError };
}

export namespace DisposePackageVersionsResult {
  export const filterSensitiveLog = (obj: DisposePackageVersionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisposePackageVersionsResult => __isa(o, "DisposePackageVersionsResult");
}

/**
 * <p>
 *        Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you
 *        add one or more repositories.
 *       </p>
 */
export interface DomainDescription {
  __type?: "DomainDescription";
  /**
   * <p> The Amazon Resource Name (ARN) of the domain. </p>
   */
  arn?: string;

  /**
   * <p>
   *       The total size of all assets in the domain.
   *     </p>
   */
  assetSizeBytes?: number;

  /**
   * <p> The AWS account ID that owns the domain. </p>
   */
  owner?: string;

  /**
   * <p>
   *       The number of repositories in the domain.
   *     </p>
   */
  repositoryCount?: number;

  /**
   * <p> The current status of a domain. The valid values are </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: DomainStatus | string;

  /**
   * <p> The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain. </p>
   */
  encryptionKey?: string;

  /**
   * <p>
   *          The name of the domain.
   *        </p>
   */
  name?: string;

  /**
   * <p>
   *       A timestamp that represents the date and time the domain was created.
   *     </p>
   */
  createdTime?: Date;
}

export namespace DomainDescription {
  export const filterSensitiveLog = (obj: DomainDescription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainDescription => __isa(o, "DomainDescription");
}

export enum DomainStatus {
  ACTIVE = "Active",
  DELETED = "Deleted",
}

/**
 * <p> Information about a domain, including its name, Amazon Resource Name (ARN), and status.
 *       The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">
 *                <code>ListDomains</code>
 *             </a> operation returns a list of <code>DomainSummary</code>
 *       objects. </p>
 */
export interface DomainSummary {
  __type?: "DomainSummary";
  /**
   * <p>
   *       The key used to encrypt the domain.
   *     </p>
   */
  encryptionKey?: string;

  /**
   * <p>
   *       A string that contains the status of the domain. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: DomainStatus | string;

  /**
   * <p>
   *       The name of the domain.
   *     </p>
   */
  name?: string;

  /**
   * <p>
   *       The ARN of the domain.
   *     </p>
   */
  arn?: string;

  /**
   * <p>
   *       A timestamp that contains the date and time the domain was created.
   *     </p>
   */
  createdTime?: Date;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  owner?: string;
}

export namespace DomainSummary {
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainSummary => __isa(o, "DomainSummary");
}

export enum ExternalConnectionStatus {
  AVAILABLE = "Available",
}

export interface GetAuthorizationTokenRequest {
  __type?: "GetAuthorizationTokenRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>The time, in seconds, that the generated authorization token is valid.</p>
   */
  durationSeconds?: number;

  /**
   * <p>
   *         The name of the domain that is in scope for the generated authorization token.
   *        </p>
   */
  domain: string | undefined;
}

export namespace GetAuthorizationTokenRequest {
  export const filterSensitiveLog = (obj: GetAuthorizationTokenRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizationTokenRequest => __isa(o, "GetAuthorizationTokenRequest");
}

export interface GetAuthorizationTokenResult {
  __type?: "GetAuthorizationTokenResult";
  /**
   * <p>
   *       A timestamp that specifies the date and time the authorization token expires.
   *     </p>
   */
  expiration?: Date;

  /**
   * <p>
   *         The returned authentication token.
   *        </p>
   */
  authorizationToken?: string;
}

export namespace GetAuthorizationTokenResult {
  export const filterSensitiveLog = (obj: GetAuthorizationTokenResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAuthorizationTokenResult => __isa(o, "GetAuthorizationTokenResult");
}

export interface GetDomainPermissionsPolicyRequest {
  __type?: "GetDomainPermissionsPolicyRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the domain to which the resource policy is attached.
   *       </p>
   */
  domain: string | undefined;
}

export namespace GetDomainPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: GetDomainPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainPermissionsPolicyRequest => __isa(o, "GetDomainPermissionsPolicyRequest");
}

export interface GetDomainPermissionsPolicyResult {
  __type?: "GetDomainPermissionsPolicyResult";
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export namespace GetDomainPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: GetDomainPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainPermissionsPolicyResult => __isa(o, "GetDomainPermissionsPolicyResult");
}

export interface GetPackageVersionAssetRequest {
  __type?: "GetPackageVersionAssetRequest";
  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *       The domain that contains the repository that contains the package version with the requested asset.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       The name of the package that contains the requested asset.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *         The name of the package version revision that contains the requested asset.
   *     </p>
   */
  packageVersionRevision?: string;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested asset file. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The name of the requested asset.
   *     </p>
   */
  asset: string | undefined;

  /**
   * <p>
   *       The repository that contains the package version with the requested asset.
   *     </p>
   */
  repository: string | undefined;
}

export namespace GetPackageVersionAssetRequest {
  export const filterSensitiveLog = (obj: GetPackageVersionAssetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPackageVersionAssetRequest => __isa(o, "GetPackageVersionAssetRequest");
}

export interface GetPackageVersionAssetResult {
  __type?: "GetPackageVersionAssetResult";
  /**
   * <p>
   *       The name of the package version revision that contains the downloaded asset.
   *     </p>
   */
  packageVersionRevision?: string;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion?: string;

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
}

export namespace GetPackageVersionAssetResult {
  export const filterSensitiveLog = (obj: GetPackageVersionAssetResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPackageVersionAssetResult => __isa(o, "GetPackageVersionAssetResult");
}

export interface GetPackageVersionReadmeRequest {
  __type?: "GetPackageVersionReadmeRequest";
  /**
   * <p>
   *       The name of the package version that contains the requested readme file.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       The repository that contains the package with the requested readme file.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       A format that specifies the type of the package version with the requested readme file. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *       The name of the domain that contains the repository that contains the package version with the requested readme file.
   *     </p>
   */
  domain: string | undefined;
}

export namespace GetPackageVersionReadmeRequest {
  export const filterSensitiveLog = (obj: GetPackageVersionReadmeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPackageVersionReadmeRequest => __isa(o, "GetPackageVersionReadmeRequest");
}

export interface GetPackageVersionReadmeResult {
  __type?: "GetPackageVersionReadmeResult";
  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The text of the returned readme file.
   *     </p>
   */
  readme?: string;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   */
  versionRevision?: string;

  /**
   * <p>
   *       The format of the package with the requested readme file. Valid format types are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format?: PackageFormat | string;

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
}

export namespace GetPackageVersionReadmeResult {
  export const filterSensitiveLog = (obj: GetPackageVersionReadmeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPackageVersionReadmeResult => __isa(o, "GetPackageVersionReadmeResult");
}

export interface GetRepositoryEndpointRequest {
  __type?: "GetRepositoryEndpointRequest";
  /**
   * <p>
   *          The name of the domain that contains the repository.
   *      </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       Returns which endpoint of a repository to return. A repository has one endpoint for each
   *       package format:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain that contains the repository. It does not include
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
}

export namespace GetRepositoryEndpointRequest {
  export const filterSensitiveLog = (obj: GetRepositoryEndpointRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRepositoryEndpointRequest => __isa(o, "GetRepositoryEndpointRequest");
}

export interface GetRepositoryEndpointResult {
  __type?: "GetRepositoryEndpointResult";
  /**
   * <p>
   *          A string that specifies the URL of the returned endpoint.
   *      </p>
   */
  repositoryEndpoint?: string;
}

export namespace GetRepositoryEndpointResult {
  export const filterSensitiveLog = (obj: GetRepositoryEndpointResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRepositoryEndpointResult => __isa(o, "GetRepositoryEndpointResult");
}

export interface GetRepositoryPermissionsPolicyRequest {
  __type?: "GetRepositoryPermissionsPolicyRequest";
  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the domain containing the repository whose associated resource policy is to be retrieved.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The name of the repository whose associated resource policy is to be retrieved.
   *       </p>
   */
  repository: string | undefined;
}

export namespace GetRepositoryPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: GetRepositoryPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRepositoryPermissionsPolicyRequest =>
    __isa(o, "GetRepositoryPermissionsPolicyRequest");
}

export interface GetRepositoryPermissionsPolicyResult {
  __type?: "GetRepositoryPermissionsPolicyResult";
  /**
   * <p>
   *         The returned resource policy.
   *       </p>
   */
  policy?: ResourcePolicy;
}

export namespace GetRepositoryPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: GetRepositoryPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRepositoryPermissionsPolicyResult =>
    __isa(o, "GetRepositoryPermissionsPolicyResult");
}

export enum HashAlgorithm {
  MD5 = "MD5",
  SHA1 = "SHA-1",
  SHA256 = "SHA-256",
  SHA512 = "SHA-512",
}

/**
 * <p> The operation did not succeed because of an error that occurred inside AWS CodeArtifact. </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>
 *         Details of the license data.
 *       </p>
 */
export interface LicenseInfo {
  __type?: "LicenseInfo";
  /**
   * <p>
   *         The URL for license data.
   *       </p>
   */
  url?: string;

  /**
   * <p>
   *         Name of the license.
   *       </p>
   */
  name?: string;
}

export namespace LicenseInfo {
  export const filterSensitiveLog = (obj: LicenseInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LicenseInfo => __isa(o, "LicenseInfo");
}

export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
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

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainsRequest => __isa(o, "ListDomainsRequest");
}

export interface ListDomainsResult {
  __type?: "ListDomainsResult";
  /**
   * <p>
   *       The returned list of <code>
   *                <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainSummary.html">DomainSummary</a>
   *             </code> objects.
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

export namespace ListDomainsResult {
  export const filterSensitiveLog = (obj: ListDomainsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainsResult => __isa(o, "ListDomainsResult");
}

export interface ListPackagesRequest {
  __type?: "ListPackagesRequest";
  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The format of the packages. The valid package types are:
   *     </p>
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
   *          </ul>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       A prefix used to filter returned repositories. Only repositories with names that start with
   *       <code>repositoryPrefix</code> are returned.
   *     </p>
   */
  packagePrefix?: string;

  /**
   * <p>
   *          The name of the repository from which packages are to be listed.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The domain that contains the repository that contains the requested list of packages.
   *       </p>
   */
  domain: string | undefined;
}

export namespace ListPackagesRequest {
  export const filterSensitiveLog = (obj: ListPackagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackagesRequest => __isa(o, "ListPackagesRequest");
}

export interface ListPackagesResult {
  __type?: "ListPackagesResult";
  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *         The list of returned <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">
   *                <code>PackageSummary</code>
   *             </a>
   *         objects.
   *        </p>
   */
  packages?: PackageSummary[];
}

export namespace ListPackagesResult {
  export const filterSensitiveLog = (obj: ListPackagesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackagesResult => __isa(o, "ListPackagesResult");
}

export interface ListPackageVersionAssetsRequest {
  __type?: "ListPackageVersionAssetsRequest";
  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       A string that contains the package version (for example, <code>3.5.2</code>).
   *     </p>
   */
  packageVersion: string | undefined;

  /**
   * <p>
   *          The name of the domain that contains the repository associated with the package version assets.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The format of the package that contains the returned package version assets. The valid package types are:
   *     </p>
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
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *          The name of the package that contains the returned package version assets.
   *        </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       The name of the repository that contains the package that contains the returned package version assets.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;
}

export namespace ListPackageVersionAssetsRequest {
  export const filterSensitiveLog = (obj: ListPackageVersionAssetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionAssetsRequest => __isa(o, "ListPackageVersionAssetsRequest");
}

export interface ListPackageVersionAssetsResult {
  __type?: "ListPackageVersionAssetsResult";
  /**
   * <p>
   *       The version of the package associated with the returned assets.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">
   *                <code>AssetSummary</code>
   *             </a> objects.
   *     </p>
   */
  assets?: AssetSummary[];

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       The format of the package that contains the returned package version assets.
   *     </p>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *       The current revision associated with the package version.
   *     </p>
   */
  versionRevision?: string;

  /**
   * <p>
   *       The name of the package that contains the returned package version assets.
   *     </p>
   */
  package?: string;
}

export namespace ListPackageVersionAssetsResult {
  export const filterSensitiveLog = (obj: ListPackageVersionAssetsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionAssetsResult => __isa(o, "ListPackageVersionAssetsResult");
}

export interface ListPackageVersionDependenciesRequest {
  __type?: "ListPackageVersionDependenciesRequest";
  /**
   * <p>
   *       The domain that contains the repository that contains the requested package version dependencies.
   *     </p>
   */
  domain: string | undefined;

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
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The format of the package with the requested dependencies. The valid package types are:
   *     </p>
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
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *       The name of the repository that contains the requested package version.
   *     </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;
}

export namespace ListPackageVersionDependenciesRequest {
  export const filterSensitiveLog = (obj: ListPackageVersionDependenciesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionDependenciesRequest =>
    __isa(o, "ListPackageVersionDependenciesRequest");
}

export interface ListPackageVersionDependenciesResult {
  __type?: "ListPackageVersionDependenciesResult";
  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *       A format that specifies the type of the package that contains the returned dependencies. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">
   *                <code>PackageDependency</code>
   *             </a> objects.
   *     </p>
   */
  dependencies?: PackageDependency[];

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
}

export namespace ListPackageVersionDependenciesResult {
  export const filterSensitiveLog = (obj: ListPackageVersionDependenciesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionDependenciesResult =>
    __isa(o, "ListPackageVersionDependenciesResult");
}

export interface ListPackageVersionsRequest {
  __type?: "ListPackageVersionsRequest";
  /**
   * <p>
   *          The name of the repository that contains the package.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *       A string that specifies the status of the package versions to include in the returned list. It can be one of the following:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>
   *          The name of the domain that contains the repository that contains the returned package versions.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       The name of the package for which you want to return a list of package versions.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *       The format of the returned packages. The valid package types are:
   *     </p>
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
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       How to sort the returned list of package versions.
   *     </p>
   */
  sortBy?: PackageVersionSortType | string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;
}

export namespace ListPackageVersionsRequest {
  export const filterSensitiveLog = (obj: ListPackageVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionsRequest => __isa(o, "ListPackageVersionsRequest");
}

export interface ListPackageVersionsResult {
  __type?: "ListPackageVersionsResult";
  /**
   * <p>
   *         The returned list of
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">
   *                <code>PackageVersionSummary</code>
   *             </a>
   *         objects.
   *        </p>
   */
  versions?: PackageVersionSummary[];

  /**
   * <p>
   *       A format of the package. Valid package format values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *          The name of the package.
   *        </p>
   */
  package?: string;

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
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;
}

export namespace ListPackageVersionsResult {
  export const filterSensitiveLog = (obj: ListPackageVersionsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPackageVersionsResult => __isa(o, "ListPackageVersionsResult");
}

export interface ListRepositoriesInDomainRequest {
  __type?: "ListRepositoriesInDomainRequest";
  /**
   * <p>
   *         The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *          Filter the list of repositories to only include those that are managed by the AWS account ID.
   *        </p>
   */
  administratorAccount?: string;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *        </p>
   */
  maxResults?: number;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          The name of the domain that contains the returned list of repositories.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       A prefix used to filter returned repositories. Only repositories with names that start with
   *       <code>repositoryPrefix</code> are returned.
   *     </p>
   */
  repositoryPrefix?: string;
}

export namespace ListRepositoriesInDomainRequest {
  export const filterSensitiveLog = (obj: ListRepositoriesInDomainRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoriesInDomainRequest => __isa(o, "ListRepositoriesInDomainRequest");
}

export interface ListRepositoriesInDomainResult {
  __type?: "ListRepositoriesInDomainResult";
  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *        The returned list of repositories.
   *      </p>
   */
  repositories?: RepositorySummary[];
}

export namespace ListRepositoriesInDomainResult {
  export const filterSensitiveLog = (obj: ListRepositoriesInDomainResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoriesInDomainResult => __isa(o, "ListRepositoriesInDomainResult");
}

export interface ListRepositoriesRequest {
  __type?: "ListRepositoriesRequest";
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

export namespace ListRepositoriesRequest {
  export const filterSensitiveLog = (obj: ListRepositoriesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoriesRequest => __isa(o, "ListRepositoriesRequest");
}

export interface ListRepositoriesResult {
  __type?: "ListRepositoriesResult";
  /**
   * <p>
   *         If there are additional results, this is the token for the next set of results.
   *        </p>
   */
  nextToken?: string;

  /**
   * <p>
   *         The returned list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">
   *                <code>RepositorySummary</code>
   *             </a>
   *         objects.
   *        </p>
   */
  repositories?: RepositorySummary[];
}

export namespace ListRepositoriesResult {
  export const filterSensitiveLog = (obj: ListRepositoriesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRepositoriesResult => __isa(o, "ListRepositoriesResult");
}

/**
 * <p>
 *         Details about a package dependency.
 *       </p>
 */
export interface PackageDependency {
  __type?: "PackageDependency";
  /**
   * <p>
   *         The required version, or version range, of the package that this package depends on. The version format
   *         is specific to the package type. For example, the following are possible valid required versions: <code>1.2.3</code>,
   *         <code>^2.3.4</code>, or <code>4.x</code>.
   *       </p>
   */
  versionRequirement?: string;

  /**
   * <p>
   *         The name of the package that this package depends on.
   *        </p>
   */
  package?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p> The type of a package dependency. The possible values depend on the package type.
   *       Example types are <code>compile</code>, <code>runtime</code>, and <code>test</code> for Maven
   *       packages, and <code>dev</code>, <code>prod</code>, and <code>optional</code> for npm packages. </p>
   */
  dependencyType?: string;
}

export namespace PackageDependency {
  export const filterSensitiveLog = (obj: PackageDependency): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackageDependency => __isa(o, "PackageDependency");
}

export enum PackageFormat {
  MAVEN = "maven",
  NPM = "npm",
  PYPI = "pypi",
}

/**
 * <p>
 *       Details about a package, including its format, namespace, and name. The
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html">
 *                <code>ListPackages</code>
 *             </a>
 *       operation returns a list of <code>PackageSummary</code> objects.
 *     </p>
 */
export interface PackageSummary {
  __type?: "PackageSummary";
  /**
   * <p>
   *       The name of the package.
   *     </p>
   */
  package?: string;

  /**
   * <p>
   *       The format of the package. Valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;
}

export namespace PackageSummary {
  export const filterSensitiveLog = (obj: PackageSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackageSummary => __isa(o, "PackageSummary");
}

/**
 * <p>
 *       Details about a package version.
 *     </p>
 */
export interface PackageVersionDescription {
  __type?: "PackageVersionDescription";
  /**
   * <p>
   *       A summary of the package version. The summary is extracted from the package. The information in and
   *       detail level of the summary depends on the package version's format.
   *     </p>
   */
  summary?: string;

  /**
   * <p>
   *       The repository for the source code in the package version, or the source code used to build it.
   *     </p>
   */
  sourceCodeRepository?: string;

  /**
   * <p>
   *       The version of the package.
   *     </p>
   */
  version?: string;

  /**
   * <p>
   *       A string that contains the status of the package version. It can be one of the following:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>
   *       Information about licenses associated with the package version.
   *     </p>
   */
  licenses?: LicenseInfo[];

  /**
   * <p>
   *       The homepage associated with the package.
   *     </p>
   */
  homePage?: string;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
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
   *       The format of the package version. The valid package formats are:
   *     </p>
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
   *          </ul>
   */
  format?: PackageFormat | string;

  /**
   * <p>
   *       The revision of the package version.
   *     </p>
   */
  revision?: string;

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
   *       A timestamp that contains the date and time the package version was published.
   *     </p>
   */
  publishedTime?: Date;
}

export namespace PackageVersionDescription {
  export const filterSensitiveLog = (obj: PackageVersionDescription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackageVersionDescription => __isa(o, "PackageVersionDescription");
}

/**
 * <p>
 *        An error associated with package.
 *    </p>
 */
export interface PackageVersionError {
  __type?: "PackageVersionError";
  /**
   * <p>
   *          The error message associated with the error.
   *      </p>
   */
  errorMessage?: string;

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
}

export namespace PackageVersionError {
  export const filterSensitiveLog = (obj: PackageVersionError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackageVersionError => __isa(o, "PackageVersionError");
}

export enum PackageVersionErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  MISMATCHED_REVISION = "MISMATCHED_REVISION",
  MISMATCHED_STATUS = "MISMATCHED_STATUS",
  NOT_ALLOWED = "NOT_ALLOWED",
  NOT_FOUND = "NOT_FOUND",
  SKIPPED = "SKIPPED",
}

export enum PackageVersionSortType {
  PUBLISHED_TIME = "PUBLISHED_TIME",
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
 *        Details about a package version, including its status, version, and revision. The
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">
 *                <code>ListPackageVersions</code>
 *             </a>
 *        operation returns a list of <code>PackageVersionSummary</code> objects.
 *      </p>
 */
export interface PackageVersionSummary {
  __type?: "PackageVersionSummary";
  /**
   * <p>
   *         Information about a package version.
   *        </p>
   */
  version: string | undefined;

  /**
   * <p>
   *       A string that contains the status of the package version. It can be one of the following:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status: PackageVersionStatus | string | undefined;

  /**
   * <p>
   *       The revision associated with a package version.
   *     </p>
   */
  revision?: string;
}

export namespace PackageVersionSummary {
  export const filterSensitiveLog = (obj: PackageVersionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PackageVersionSummary => __isa(o, "PackageVersionSummary");
}

export interface PutDomainPermissionsPolicyRequest {
  __type?: "PutDomainPermissionsPolicyRequest";
  /**
   * <p>
   *         The current revision of the resource policy to be set. This revision is used for optimistic locking, which
   *         prevents others from overwriting your changes to the domain's resource policy.
   *       </p>
   */
  policyRevision?: string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the domain on which to set the resource policy.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided domain. </p>
   */
  policyDocument: string | undefined;
}

export namespace PutDomainPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: PutDomainPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDomainPermissionsPolicyRequest => __isa(o, "PutDomainPermissionsPolicyRequest");
}

export interface PutDomainPermissionsPolicyResult {
  __type?: "PutDomainPermissionsPolicyResult";
  /**
   * <p> The resource policy that was set after processing the request. </p>
   */
  policy?: ResourcePolicy;
}

export namespace PutDomainPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: PutDomainPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDomainPermissionsPolicyResult => __isa(o, "PutDomainPermissionsPolicyResult");
}

export interface PutRepositoryPermissionsPolicyRequest {
  __type?: "PutRepositoryPermissionsPolicyRequest";
  /**
   * <p>
   *         Sets the revision of the resource policy that specifies permissions to access the repository.
   *         This revision is used for optimistic locking, which prevents others from overwriting your
   *         changes to the repository's resource policy.
   *       </p>
   */
  policyRevision?: string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *         The name of the domain containing the repository to set the resource policy on.
   *       </p>
   */
  domain: string | undefined;

  /**
   * <p> A valid displayable JSON Aspen policy string to be set as the access control resource
   *       policy on the provided repository. </p>
   */
  policyDocument: string | undefined;

  /**
   * <p> The name of the repository to set the resource policy on. </p>
   */
  repository: string | undefined;
}

export namespace PutRepositoryPermissionsPolicyRequest {
  export const filterSensitiveLog = (obj: PutRepositoryPermissionsPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRepositoryPermissionsPolicyRequest =>
    __isa(o, "PutRepositoryPermissionsPolicyRequest");
}

export interface PutRepositoryPermissionsPolicyResult {
  __type?: "PutRepositoryPermissionsPolicyResult";
  /**
   * <p> The resource policy that was set after processing the request. </p>
   */
  policy?: ResourcePolicy;
}

export namespace PutRepositoryPermissionsPolicyResult {
  export const filterSensitiveLog = (obj: PutRepositoryPermissionsPolicyResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRepositoryPermissionsPolicyResult =>
    __isa(o, "PutRepositoryPermissionsPolicyResult");
}

/**
 * <p> The details of a repository stored in AWS CodeArtifact. A CodeArtifact repository contains a set of
 *       package versions, each of which maps to a set of assets. Repositories are polyglot—a single
 *       repository can contain packages of any supported type. Each repository exposes endpoints for
 *       fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI
 *         (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per AWS
 *       account. </p>
 */
export interface RepositoryDescription {
  __type?: "RepositoryDescription";
  /**
   * <p>
   *         The name of the domain that contains the repository.
   *        </p>
   */
  domainName?: string;

  /**
   * <p>
   *       A text description of the repository.
   *     </p>
   */
  description?: string;

  /**
   * <p>
   *         The name of the repository.
   *        </p>
   */
  name?: string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain that contains the repository. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepositoryInfo[];

  /**
   * <p>
   *       An array of external connections associated with the repository.
   *     </p>
   */
  externalConnections?: RepositoryExternalConnectionInfo[];

  /**
   * <p> The Amazon Resource Name (ARN) of the repository. </p>
   */
  arn?: string;

  /**
   * <p> The 12-digit account number of the AWS account that manages the repository. </p>
   */
  administratorAccount?: string;
}

export namespace RepositoryDescription {
  export const filterSensitiveLog = (obj: RepositoryDescription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RepositoryDescription => __isa(o, "RepositoryDescription");
}

/**
 * <p>
 *         Contains information about the external connection of a repository.
 *       </p>
 */
export interface RepositoryExternalConnectionInfo {
  __type?: "RepositoryExternalConnectionInfo";
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
   *          </ul>
   */
  packageFormat?: PackageFormat | string;

  /**
   * <p>
   *         The status of the external connection of a repository. There is one valid value, <code>Available</code>.
   *       </p>
   */
  status?: ExternalConnectionStatus | string;

  /**
   * <p> The name of the external connection associated with a repository. </p>
   */
  externalConnectionName?: string;
}

export namespace RepositoryExternalConnectionInfo {
  export const filterSensitiveLog = (obj: RepositoryExternalConnectionInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RepositoryExternalConnectionInfo => __isa(o, "RepositoryExternalConnectionInfo");
}

/**
 * <p> Details about a repository, including its Amazon Resource Name (ARN), description, and
 *       domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">
 *                <code>ListRepositories</code>
 *             </a> operation returns a list of
 *         <code>RepositorySummary</code> objects. </p>
 */
export interface RepositorySummary {
  __type?: "RepositorySummary";
  /**
   * <p>
   *          The AWS account ID that manages the repository.
   *       </p>
   */
  administratorAccount?: string;

  /**
   * <p>
   *          The name of the repository.
   *       </p>
   */
  name?: string;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
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
   *          The name of the domain that contains the repository.
   *       </p>
   */
  domainName?: string;

  /**
   * <p>
   *       The description of the repository.
   *     </p>
   */
  description?: string;
}

export namespace RepositorySummary {
  export const filterSensitiveLog = (obj: RepositorySummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RepositorySummary => __isa(o, "RepositorySummary");
}

/**
 * <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;

  /**
   * <p>
   *       The type of AWS resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>
 *         An AWS CodeArtifact resource policy that contains a resource ARN, document details, and a revision.
 *       </p>
 */
export interface ResourcePolicy {
  __type?: "ResourcePolicy";
  /**
   * <p>
   *       The resource policy formatted in JSON.
   *     </p>
   */
  document?: string;

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
}

export namespace ResourcePolicy {
  export const filterSensitiveLog = (obj: ResourcePolicy): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourcePolicy => __isa(o, "ResourcePolicy");
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
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>
   *       The type of AWS resource.
   *     </p>
   */
  resourceType?: ResourceType | string;

  message: string | undefined;
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   */
  resourceId?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>
 *       Contains the revision and status of a package version.
 *     </p>
 */
export interface SuccessfulPackageVersionInfo {
  __type?: "SuccessfulPackageVersionInfo";
  /**
   * <p>
   *       The revision of a package version.
   *     </p>
   */
  revision?: string;

  /**
   * <p>
   *       The status of a package version. Valid statuses are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Published</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unfinished</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unlisted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Disposed</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: PackageVersionStatus | string;
}

export namespace SuccessfulPackageVersionInfo {
  export const filterSensitiveLog = (obj: SuccessfulPackageVersionInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuccessfulPackageVersionInfo => __isa(o, "SuccessfulPackageVersionInfo");
}

/**
 * <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>
   *       The time period, in seconds, to wait before retrying the request.
   *     </p>
   */
  retryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

export interface UpdatePackageVersionsStatusRequest {
  __type?: "UpdatePackageVersionsStatusRequest";
  /**
   * <p>
   *       The domain that contains the repository that contains the package versions with a status to be updated.
   *     </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *       An array of strings that specify the versions of the package with the statuses to update.
   *     </p>
   */
  versions: string[] | undefined;

  /**
   * <p> The package version’s expected status before it is updated. If
   *         <code>expectedStatus</code> is provided, the package version's status is updated only if its
   *       status at the time <code>UpdatePackageVersionsStatus</code> is called matches
   *         <code>expectedStatus</code>. </p>
   */
  expectedStatus?: PackageVersionStatus | string;

  /**
   * <p>
   *       The name of the package with the version statuses to update.
   *     </p>
   */
  package: string | undefined;

  /**
   * <p>
   *       The namespace of the package. The package component that specifies its
   *       namespace depends on its type. For example:
   *     </p>
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
   *           A Python package does not contain a corresponding component, so
   *           Python packages do not have a namespace.
   *         </p>
   *             </li>
   *          </ul>
   */
  namespace?: string;

  /**
   * <p> A map of package versions and package version revisions. The map <code>key</code> is the
   *       package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the
   *       package version revision. </p>
   */
  versionRevisions?: { [key: string]: string };

  /**
   * <p>
   *       A format that specifies the type of the package with the statuses to update. The valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  format: PackageFormat | string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
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
   *       The status you want to change the package version status to.
   *     </p>
   */
  targetStatus: PackageVersionStatus | string | undefined;
}

export namespace UpdatePackageVersionsStatusRequest {
  export const filterSensitiveLog = (obj: UpdatePackageVersionsStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePackageVersionsStatusRequest =>
    __isa(o, "UpdatePackageVersionsStatusRequest");
}

export interface UpdatePackageVersionsStatusResult {
  __type?: "UpdatePackageVersionsStatusResult";
  /**
   * <p> A list of <code>SuccessfulPackageVersionInfo</code> objects, one for each package version
   *       with a status that successfully updated. </p>
   */
  failedVersions?: { [key: string]: PackageVersionError };

  /**
   * <p>
   *       A list of <code>PackageVersionError</code> objects, one for each package version with
   *       a status that failed to update.
   *     </p>
   */
  successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };
}

export namespace UpdatePackageVersionsStatusResult {
  export const filterSensitiveLog = (obj: UpdatePackageVersionsStatusResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdatePackageVersionsStatusResult => __isa(o, "UpdatePackageVersionsStatusResult");
}

export interface UpdateRepositoryRequest {
  __type?: "UpdateRepositoryRequest";
  /**
   * <p>
   *          The name of the domain associated with the repository to update.
   *        </p>
   */
  domain: string | undefined;

  /**
   * <p>
   *          The name of the repository to update.
   *        </p>
   */
  repository: string | undefined;

  /**
   * <p>
   *         The 12-digit account number of the AWS account that owns the domain. It does not include
   *         dashes or spaces.
   *       </p>
   */
  domainOwner?: string;

  /**
   * <p>
   *          An updated repository description.
   *        </p>
   */
  description?: string;

  /**
   * <p> A list of upstream repositories to associate with the repository. The order of the upstream repositories
   *         in the list determines their priority order when AWS CodeArtifact looks for a requested package version. For more
   *         information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. </p>
   */
  upstreams?: UpstreamRepository[];
}

export namespace UpdateRepositoryRequest {
  export const filterSensitiveLog = (obj: UpdateRepositoryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRepositoryRequest => __isa(o, "UpdateRepositoryRequest");
}

export interface UpdateRepositoryResult {
  __type?: "UpdateRepositoryResult";
  /**
   * <p>
   *          The updated repository.
   *        </p>
   */
  repository?: RepositoryDescription;
}

export namespace UpdateRepositoryResult {
  export const filterSensitiveLog = (obj: UpdateRepositoryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRepositoryResult => __isa(o, "UpdateRepositoryResult");
}

/**
 * <p>
 *        Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">
 *                <code>CreateRepository</code>
 *             </a>
 *        and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">
 *                <code>UpdateRepository</code>
 *             </a>.
 *      </p>
 */
export interface UpstreamRepository {
  __type?: "UpstreamRepository";
  /**
   * <p> The name of an upstream repository. </p>
   */
  repositoryName: string | undefined;
}

export namespace UpstreamRepository {
  export const filterSensitiveLog = (obj: UpstreamRepository): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpstreamRepository => __isa(o, "UpstreamRepository");
}

/**
 * <p>
 *         Information about an upstream repository.
 *       </p>
 */
export interface UpstreamRepositoryInfo {
  __type?: "UpstreamRepositoryInfo";
  /**
   * <p> The name of an upstream repository. </p>
   */
  repositoryName?: string;
}

export namespace UpstreamRepositoryInfo {
  export const filterSensitiveLog = (obj: UpstreamRepositoryInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpstreamRepositoryInfo => __isa(o, "UpstreamRepositoryInfo");
}

/**
 * <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>
   *
   *     </p>
   */
  reason?: ValidationExceptionReason | string;

  message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  ENCRYPTION_KEY_ERROR = "ENCRYPTION_KEY_ERROR",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}
