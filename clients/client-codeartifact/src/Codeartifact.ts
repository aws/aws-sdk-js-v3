// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeartifactClient } from "./CodeartifactClient";
import {
  AssociateExternalConnectionCommand,
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "./commands/AssociateExternalConnectionCommand";
import {
  CopyPackageVersionsCommand,
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "./commands/CopyPackageVersionsCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainPermissionsPolicyCommand,
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "./commands/DeleteDomainPermissionsPolicyCommand";
import {
  DeletePackageVersionsCommand,
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "./commands/DeletePackageVersionsCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPermissionsPolicyCommand,
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "./commands/DeleteRepositoryPermissionsPolicyCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribePackageCommand,
  DescribePackageCommandInput,
  DescribePackageCommandOutput,
} from "./commands/DescribePackageCommand";
import {
  DescribePackageVersionCommand,
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "./commands/DescribePackageVersionCommand";
import {
  DescribeRepositoryCommand,
  DescribeRepositoryCommandInput,
  DescribeRepositoryCommandOutput,
} from "./commands/DescribeRepositoryCommand";
import {
  DisassociateExternalConnectionCommand,
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "./commands/DisassociateExternalConnectionCommand";
import {
  DisposePackageVersionsCommand,
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "./commands/DisposePackageVersionsCommand";
import {
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDomainPermissionsPolicyCommand,
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "./commands/GetDomainPermissionsPolicyCommand";
import {
  GetPackageVersionAssetCommand,
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "./commands/GetPackageVersionAssetCommand";
import {
  GetPackageVersionReadmeCommand,
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "./commands/GetPackageVersionReadmeCommand";
import {
  GetRepositoryEndpointCommand,
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "./commands/GetRepositoryEndpointCommand";
import {
  GetRepositoryPermissionsPolicyCommand,
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "./commands/GetRepositoryPermissionsPolicyCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "./commands/ListPackagesCommand";
import {
  ListPackageVersionAssetsCommand,
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "./commands/ListPackageVersionAssetsCommand";
import {
  ListPackageVersionDependenciesCommand,
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "./commands/ListPackageVersionDependenciesCommand";
import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "./commands/ListRepositoriesInDomainCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutDomainPermissionsPolicyCommand,
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "./commands/PutDomainPermissionsPolicyCommand";
import {
  PutPackageOriginConfigurationCommand,
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "./commands/PutPackageOriginConfigurationCommand";
import {
  PutRepositoryPermissionsPolicyCommand,
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "./commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePackageVersionsStatusCommand,
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "./commands/UpdatePackageVersionsStatusCommand";
import {
  UpdateRepositoryCommand,
  UpdateRepositoryCommandInput,
  UpdateRepositoryCommandOutput,
} from "./commands/UpdateRepositoryCommand";

/**
 * <p> CodeArtifact is a fully managed artifact repository compatible with language-native
 *       package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to
 *       share packages with development teams and pull packages. Packages can be pulled from both
 *       public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact
 *       repository and another repository, which effectively merges their contents from the point of
 *       view of a package manager client. </p>
 *          <p>
 *             <b>CodeArtifact Components</b>
 *          </p>
 *          <p>Use the information in this guide to help you work with the following CodeArtifact components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package
 *             versions</a>, each of which maps to a set of assets, or files. Repositories are
 *           polyglot, so a single repository can contain packages of any supported type. Each
 *           repository exposes endpoints for fetching and publishing packages using tools like the
 *             <b>
 *                      <code>npm</code>
 *                   </b> CLI, the Maven CLI (<b>
 *                      <code>mvn</code>
 *                   </b>), Python CLIs (<b>
 *                      <code>pip</code>
 *                   </b> and <code>twine</code>), and NuGet CLIs (<code>nuget</code> and <code>dotnet</code>).</p>
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
 *           resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-nuget">NuGet</a> package formats.</p>
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
 *          <p>CodeArtifact supports these operations:</p>
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
 *                   <code>CreateDomain</code>: Creates a domain</p>
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
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository.
 *         </p>
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
 *                   <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateRepository</code>: Updates the properties of a repository.</p>
 *             </li>
 *          </ul>
 */
export class Codeartifact extends CodeartifactClient {
  /**
   * <p>Adds an existing external connection to a repository. One external connection is allowed
   *       per repository.</p>
   *          <note>
   *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
   *          </note>
   */
  public associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateExternalConnectionCommandOutput>;
  public associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void
  ): void;
  public associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void
  ): void;
  public associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateExternalConnectionCommandOutput) => void),
    cb?: (err: any, data?: AssociateExternalConnectionCommandOutput) => void
  ): Promise<AssociateExternalConnectionCommandOutput> | void {
    const command = new AssociateExternalConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Copies package versions from one repository to another repository in the same domain.
   *       </p>
   *          <note>
   *             <p>
   *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
   *       </p>
   *          </note>
   */
  public copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyPackageVersionsCommandOutput>;
  public copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void
  ): void;
  public copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void
  ): void;
  public copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyPackageVersionsCommandOutput) => void),
    cb?: (err: any, data?: CopyPackageVersionsCommandOutput) => void
  ): Promise<CopyPackageVersionsCommandOutput> | void {
    const command = new CopyPackageVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an
   *         organization. You can use a domain to apply permissions across many
   *         repositories owned by different Amazon Web Services accounts. An asset is stored only once
   *         in a domain, even if it's in multiple repositories.
   *     </p>
   *          <p>Although you can have multiple domains, we recommend a single production domain that contains all
   *         published artifacts so that your development teams can find and share packages. You can use a second
   *         pre-production domain to test changes to the production domain configuration.
   *       </p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Creates a repository.
   *       </p>
   */
  public createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  public createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  public createRepository(
    args: CreateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): Promise<CreateRepositoryCommandOutput> | void {
    const command = new CreateRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain
   *          with repositories, first delete its repositories.
   *       </p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Deletes the resource policy set on a domain.
   *       </p>
   */
  public deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainPermissionsPolicyCommandOutput>;
  public deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void
  ): Promise<DeleteDomainPermissionsPolicyCommandOutput> | void {
    const command = new DeleteDomainPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes one or more versions of a package. A deleted package version cannot be restored
   *       in your repository. If you want to remove a package version from your repository and be able
   *       to restore it later, set its status to <code>Archived</code>. Archived packages cannot be
   *       downloaded from a repository and don't show up with list package APIs (for example,
   *           <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. </p>
   */
  public deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackageVersionsCommandOutput>;
  public deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void
  ): void;
  public deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void
  ): void;
  public deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePackageVersionsCommandOutput) => void),
    cb?: (err: any, data?: DeletePackageVersionsCommandOutput) => void
  ): Promise<DeletePackageVersionsCommandOutput> | void {
    const command = new DeletePackageVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Deletes a repository.
   *        </p>
   */
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  public deleteRepository(
    args: DeleteRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): Promise<DeleteRepositoryCommandOutput> | void {
    const command = new DeleteRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
   *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
   *       </p>
   *          <important>
   *             <p>
   *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform
   *          the repository actions granted by the deleted policy.
   *        </p>
   *          </important>
   */
  public deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryPermissionsPolicyCommandOutput>;
  public deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void
  ): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> | void {
    const command = new DeleteRepositoryPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Returns a
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a>
   *       object that contains information about the requested domain.
   *      </p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
   *       object that contains information about the requested package.</p>
   */
  public describePackage(
    args: DescribePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageCommandOutput>;
  public describePackage(
    args: DescribePackageCommandInput,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;
  public describePackage(
    args: DescribePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;
  public describePackage(
    args: DescribePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackageCommandOutput) => void),
    cb?: (err: any, data?: DescribePackageCommandOutput) => void
  ): Promise<DescribePackageCommandOutput> | void {
    const command = new DescribePackageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *        Returns a
   *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
   *        object that contains information about the requested package version.
   *      </p>
   */
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageVersionCommandOutput>;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackageVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): Promise<DescribePackageVersionCommandOutput> | void {
    const command = new DescribePackageVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Returns a <code>RepositoryDescription</code> object that contains detailed information
   *         about the requested repository.
   *        </p>
   */
  public describeRepository(
    args: DescribeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryCommandOutput>;
  public describeRepository(
    args: DescribeRepositoryCommandInput,
    cb: (err: any, data?: DescribeRepositoryCommandOutput) => void
  ): void;
  public describeRepository(
    args: DescribeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryCommandOutput) => void
  ): void;
  public describeRepository(
    args: DescribeRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeRepositoryCommandOutput) => void
  ): Promise<DescribeRepositoryCommandOutput> | void {
    const command = new DescribeRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Removes an existing external connection from a repository.
   *     </p>
   */
  public disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateExternalConnectionCommandOutput>;
  public disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void
  ): void;
  public disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void
  ): void;
  public disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateExternalConnectionCommandOutput) => void),
    cb?: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void
  ): Promise<DisassociateExternalConnectionCommandOutput> | void {
    const command = new DisassociateExternalConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>.
   *       A disposed package version cannot be restored in your repository because its assets are deleted.
   *     </p>
   *          <p>
   *       To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter
   *       to <code>Disposed</code>.
   *     </p>
   *          <p>
   *       To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>.
   *     </p>
   */
  public disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisposePackageVersionsCommandOutput>;
  public disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void
  ): void;
  public disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void
  ): void;
  public disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisposePackageVersionsCommandOutput) => void),
    cb?: (err: any, data?: DisposePackageVersionsCommandOutput) => void
  ): Promise<DisposePackageVersionsCommandOutput> | void {
    const command = new DisposePackageVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Generates a temporary authorization token for accessing repositories in the domain.
   *         This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
   *         For more information about authorization tokens, see
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">CodeArtifact authentication and tokens</a>.
   *       </p>
   *          <note>
   *             <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command.
   *          You can call <code>login</code> periodically to refresh the token. When
   *          you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period,
   *          up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p>
   *             <p>The authorization period begins after <code>login</code>
   *          or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while
   *          assuming a role, the token lifetime is independent of the maximum session duration
   *          of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then
   *          generate a CodeArtifact authorization token, the token will be valid for the full authorization period
   *          even though this is longer than the 15-minute session duration.</p>
   *             <p>See
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a>
   *          for more information on controlling session duration. </p>
   *          </note>
   */
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizationTokenCommandOutput>;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  public getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAuthorizationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): Promise<GetAuthorizationTokenCommandOutput> | void {
    const command = new GetAuthorizationTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Returns the resource policy attached to the specified domain.
   *       </p>
   *          <note>
   *             <p>
   *          The policy is a resource-based policy, not an identity-based policy. For more information, see
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies
   *            and resource-based policies </a> in the <i>IAM User Guide</i>.
   *        </p>
   *          </note>
   */
  public getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainPermissionsPolicyCommandOutput>;
  public getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void
  ): Promise<GetDomainPermissionsPolicyCommandOutput> | void {
    const command = new GetDomainPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
   *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
   *       or any other assets in the package version.
   *     </p>
   */
  public getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionAssetCommandOutput>;
  public getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void
  ): void;
  public getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void
  ): void;
  public getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPackageVersionAssetCommandOutput) => void),
    cb?: (err: any, data?: GetPackageVersionAssetCommandOutput) => void
  ): Promise<GetPackageVersionAssetCommandOutput> | void {
    const command = new GetPackageVersionAssetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Gets the readme file or descriptive text for a package version.
   *       </p>
   *          <p>
   *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
   *      </p>
   */
  public getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionReadmeCommandOutput>;
  public getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void
  ): void;
  public getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void
  ): void;
  public getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPackageVersionReadmeCommandOutput) => void),
    cb?: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void
  ): Promise<GetPackageVersionReadmeCommandOutput> | void {
    const command = new GetPackageVersionReadmeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
   *       package format:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>maven</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>npm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>nuget</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pypi</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryEndpointCommandOutput>;
  public getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void
  ): void;
  public getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void
  ): void;
  public getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryEndpointCommandOutput) => void
  ): Promise<GetRepositoryEndpointCommandOutput> | void {
    const command = new GetRepositoryEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Returns the resource policy that is set on a repository.
   *       </p>
   */
  public getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryPermissionsPolicyCommandOutput>;
  public getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void
  ): Promise<GetRepositoryPermissionsPolicyCommandOutput> | void {
    const command = new GetRepositoryPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes
   *       this call. Each returned <code>DomainSummary</code> object contains information about a
   *       domain. </p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Returns a list of
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
   *         objects for packages in a repository that match the request parameters.
   *       </p>
   */
  public listPackages(
    args: ListPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagesCommandOutput>;
  public listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
  public listPackages(
    args: ListPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesCommandOutput) => void
  ): void;
  public listPackages(
    args: ListPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListPackagesCommandOutput) => void
  ): Promise<ListPackagesCommandOutput> | void {
    const command = new ListPackagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *        Returns a list of
   *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a>
   *        objects for assets in a package version.
   *      </p>
   */
  public listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionAssetsCommandOutput>;
  public listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void
  ): void;
  public listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void
  ): void;
  public listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackageVersionAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void
  ): Promise<ListPackageVersionAssetsCommandOutput> | void {
    const command = new ListPackageVersionAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Returns the direct dependencies for a package version. The dependencies are returned as
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a>
   *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
   *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
   *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
   *       </p>
   */
  public listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionDependenciesCommandOutput>;
  public listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void
  ): void;
  public listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void
  ): void;
  public listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackageVersionDependenciesCommandOutput) => void),
    cb?: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void
  ): Promise<ListPackageVersionDependenciesCommandOutput> | void {
    const command = new ListPackageVersionDependenciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Returns a list of
   *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
   *         objects for package versions in a repository that match the request parameters.
   *       </p>
   */
  public listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionsCommandOutput>;
  public listPackageVersions(
    args: ListPackageVersionsCommandInput,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;
  public listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;
  public listPackageVersions(
    args: ListPackageVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackageVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): Promise<ListPackageVersionsCommandOutput> | void {
    const command = new ListPackageVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *        Returns a list of
   *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
   *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified Amazon Web Services account and that matches the input
   *        parameters.
   *      </p>
   */
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  public listRepositories(
    args: ListRepositoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): Promise<ListRepositoriesCommandOutput> | void {
    const command = new ListRepositoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *        Returns a list of
   *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
   *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
   *        parameters.
   *      </p>
   */
  public listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesInDomainCommandOutput>;
  public listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void
  ): void;
  public listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void
  ): void;
  public listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRepositoriesInDomainCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void
  ): Promise<ListRepositoriesInDomainCommandOutput> | void {
    const command = new ListRepositoriesInDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in CodeArtifact.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Sets a resource policy on a domain that specifies permissions to access it.
   *       </p>
   *          <p>
   *        When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions.
   *        This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being
   *        able to update the resource policy.
   *      </p>
   */
  public putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDomainPermissionsPolicyCommandOutput>;
  public putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void
  ): void;
  public putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void
  ): Promise<PutDomainPermissionsPolicyCommandOutput> | void {
    const command = new PutDomainPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the package origin configuration for a package.</p>
   *          <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct
   *     publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source.
   *     For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p>
   *          <p>
   *             <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called
   *       on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package.
   *       This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block
   *       publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>
   */
  public putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPackageOriginConfigurationCommandOutput>;
  public putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    cb: (err: any, data?: PutPackageOriginConfigurationCommandOutput) => void
  ): void;
  public putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPackageOriginConfigurationCommandOutput) => void
  ): void;
  public putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPackageOriginConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutPackageOriginConfigurationCommandOutput) => void
  ): Promise<PutPackageOriginConfigurationCommandOutput> | void {
    const command = new PutPackageOriginConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Sets the resource policy on a repository that specifies permissions to access it.
   *       </p>
   *          <p>
   *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
   *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
   *        able to update the resource policy.
   *      </p>
   */
  public putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput>;
  public putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  public putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput> | void {
    const command = new PutRepositoryPermissionsPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates tags for a resource in CodeArtifact.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from a resource in CodeArtifact.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>,
   *       you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>.
   *       To set the status of a package version to <code>Disposed</code>, use
   *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>.
   *     </p>
   */
  public updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageVersionsStatusCommandOutput>;
  public updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void
  ): void;
  public updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void
  ): void;
  public updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void
  ): Promise<UpdatePackageVersionsStatusCommandOutput> | void {
    const command = new UpdatePackageVersionsStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *          Update the properties of a repository.
   *        </p>
   */
  public updateRepository(
    args: UpdateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryCommandOutput>;
  public updateRepository(
    args: UpdateRepositoryCommandInput,
    cb: (err: any, data?: UpdateRepositoryCommandOutput) => void
  ): void;
  public updateRepository(
    args: UpdateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryCommandOutput) => void
  ): void;
  public updateRepository(
    args: UpdateRepositoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: UpdateRepositoryCommandOutput) => void
  ): Promise<UpdateRepositoryCommandOutput> | void {
    const command = new UpdateRepositoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
