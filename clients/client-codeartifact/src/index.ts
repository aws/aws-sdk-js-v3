// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> CodeArtifact is a fully managed artifact repository compatible with language-native
 *       package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to
 *       share packages with development teams and pull packages. Packages can be pulled from both
 *       public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact
 *       repository and another repository, which effectively merges their contents from the point of
 *       view of a package manager client. </p>
 *          <p>
 *             <b>CodeArtifact concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package
 *             versions</a>, each of which maps to a set of assets, or files. Repositories are
 *           polyglot, so a single repository can contain packages of any supported type. Each
 *           repository exposes endpoints for fetching and publishing packages using tools such as the <b>
 *                      <code>npm</code>
 *                   </b> CLI or the Maven CLI (<b>
 *                      <code>mvn</code>
 *                   </b>). For a list of supported package managers, see the
 *           <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html">CodeArtifact User Guide</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Domain</b>: Repositories are aggregated into a higher-level entity known as a
 *             <i>domain</i>. All package assets and metadata are stored in the domain,
 *             but are consumed through repositories. A given package asset, such as a Maven JAR file, is
 *             stored once per domain, no matter how many repositories it's present in. All of the assets
 *             and metadata in a domain are encrypted with the same customer master key (CMK) stored in
 *             Key Management Service (KMS).</p>
 *                <p>Each repository is a member of a single domain and can't be moved to a
 *             different domain.</p>
 *                <p>The domain allows organizational policy to be applied across multiple
 *             repositories, such as which accounts can access repositories in the domain, and
 *             which public repositories can be used as sources of packages.</p>
 *                <p>Although an organization can have multiple domains, we recommend a single production
 *             domain that contains all published artifacts so that teams can find and share packages
 *             across their organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to
 *           resolve dependencies and install the software. CodeArtifact supports npm, PyPI, Maven, NuGet, Swift, Ruby, and generic package formats.
 *         For more information about the supported package formats and how to use CodeArtifact with them, see the
 *           <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html">CodeArtifact User Guide</a>.</p>
 *                <p>In CodeArtifact, a package consists of:</p>
 *                <ul>
 *                   <li>
 *                      <p>A <i>name</i> (for example, <code>webpack</code> is the name of a
 *               popular npm package)</p>
 *                   </li>
 *                   <li>
 *                      <p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p>
 *                   </li>
 *                   <li>
 *                      <p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>,
 *                 <code>1.0.2</code>, etc.)</p>
 *                   </li>
 *                   <li>
 *                      <p> Package-level metadata (for example, npm tags)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package group</b>: A group of packages that match a specified definition. Package
 *           groups can be used to apply configuration to multiple packages that match a defined pattern using
 *           package format, package namespace, and package name. You can use package groups to more conveniently
 *           configure package origin controls for multiple packages. Package origin controls are used to block or allow ingestion or publishing
 *           of new package versions, which protects users from malicious actions known as dependency substitution attacks.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number
 *           format and semantics vary for different package formats. For example, npm package versions
 *           must conform to the <a href="https://semver.org/">Semantic Versioning
 *             specification</a>. In CodeArtifact, a package version consists of the version identifier,
 *           metadata at the package version level, and a set of assets.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in
 *           it can be accessed from the repository endpoint of the downstream repository, effectively
 *           merging the contents of the two repositories from the point of view of a client. CodeArtifact
 *           allows creating an upstream relationship between two repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm
 *             <code>.tgz</code> file or Maven POM and JAR files.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>CodeArtifact supported API operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateExternalConnection</code>: Adds an existing external
 *           connection to a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CopyPackageVersions</code>: Copies package versions from one
 *           repository to another repository in the same domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDomain</code>: Creates a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreatePackageGroup</code>: Creates a package group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains
 *           repositories. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackage</code>: Deletes a package and all associated package versions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackageGroup</code>: Deletes a package group. Does not delete packages or package versions that are associated with a package group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackageVersions</code>: Deletes versions of a package. After a package has
 *           been deleted, it can be republished, but its assets and metadata cannot be restored
 *           because they have been permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepository</code>: Deletes a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that
 *           contains information about the requested domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackage</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
 *           object that contains details about a package. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackageGroup</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageGroup.html">PackageGroup</a>
 *           object that contains details about a package group. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackageVersion</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *           object that contains details about a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object
 *           that contains detailed information about the requested repository. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisposePackageVersions</code>: Disposes versions of a package. A package version
 *           with the status <code>Disposed</code> cannot be restored because they have been
 *           permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetAssociatedPackageGroup</code>: Returns the most closely associated package group to the specified package.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed.
 *           The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource
 *           that is attached to the specified domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *           package format:
 *         </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>generic</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>maven</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>npm</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>nuget</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>pypi</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>ruby</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>swift</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListAllowedRepositoriesForGroup</code>: Lists the allowed repositories for a package group that has origin configuration set to <code>ALLOW_SPECIFIC_REPOSITORIES</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListAssociatedPackages</code>: Returns a list of packages associated with the requested package group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each
 *           returned <code>DomainSummary</code> object contains information about a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackages</code>: Lists the packages in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageGroups</code>: Returns a list of package groups in the requested domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a
 *           package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersions</code>: Returns a list of package versions for a specified
 *           package in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositories</code>: Returns a list of repositories owned by the Amazon Web Services account that called this method.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSubPackageGroups</code>: Returns a list of direct children of the specified package group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PublishPackageVersion</code>: Creates a new package version containing one or more assets.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutPackageOriginConfiguration</code>: Sets the package origin configuration for a package, which determine
 *         how new versions of the package can be added to a specific repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository
 *           that specifies permissions to access it. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdatePackageGroup</code>: Updates a package group. This API cannot be used to update a package group's origin configuration or pattern.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdatePackageGroupOriginConfiguration</code>: Updates the package origin configuration for a package group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateRepository</code>: Updates the properties of a repository.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./CodeartifactClient";
export * from "./Codeartifact";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CodeartifactExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CodeartifactServiceException } from "./models/CodeartifactServiceException";
