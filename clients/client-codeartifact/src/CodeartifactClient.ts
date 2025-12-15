// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type SdkStreamMixinInjector as __SdkStreamMixinInjector,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCodeartifactHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "./commands/AssociateExternalConnectionCommand";
import {
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "./commands/CopyPackageVersionsCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreatePackageGroupCommandInput, CreatePackageGroupCommandOutput } from "./commands/CreatePackageGroupCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import {
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "./commands/DeleteDomainPermissionsPolicyCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import { DeletePackageGroupCommandInput, DeletePackageGroupCommandOutput } from "./commands/DeletePackageGroupCommand";
import {
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "./commands/DeletePackageVersionsCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "./commands/DeleteRepositoryPermissionsPolicyCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribePackageCommandInput, DescribePackageCommandOutput } from "./commands/DescribePackageCommand";
import {
  DescribePackageGroupCommandInput,
  DescribePackageGroupCommandOutput,
} from "./commands/DescribePackageGroupCommand";
import {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "./commands/DescribePackageVersionCommand";
import { DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput } from "./commands/DescribeRepositoryCommand";
import {
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "./commands/DisassociateExternalConnectionCommand";
import {
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "./commands/DisposePackageVersionsCommand";
import {
  GetAssociatedPackageGroupCommandInput,
  GetAssociatedPackageGroupCommandOutput,
} from "./commands/GetAssociatedPackageGroupCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "./commands/GetDomainPermissionsPolicyCommand";
import {
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "./commands/GetPackageVersionAssetCommand";
import {
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "./commands/GetPackageVersionReadmeCommand";
import {
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "./commands/GetRepositoryEndpointCommand";
import {
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "./commands/GetRepositoryPermissionsPolicyCommand";
import {
  ListAllowedRepositoriesForGroupCommandInput,
  ListAllowedRepositoriesForGroupCommandOutput,
} from "./commands/ListAllowedRepositoriesForGroupCommand";
import {
  ListAssociatedPackagesCommandInput,
  ListAssociatedPackagesCommandOutput,
} from "./commands/ListAssociatedPackagesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListPackageGroupsCommandInput, ListPackageGroupsCommandOutput } from "./commands/ListPackageGroupsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "./commands/ListPackagesCommand";
import {
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "./commands/ListPackageVersionAssetsCommand";
import {
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "./commands/ListPackageVersionDependenciesCommand";
import {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "./commands/ListRepositoriesInDomainCommand";
import {
  ListSubPackageGroupsCommandInput,
  ListSubPackageGroupsCommandOutput,
} from "./commands/ListSubPackageGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
} from "./commands/PublishPackageVersionCommand";
import {
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "./commands/PutDomainPermissionsPolicyCommand";
import {
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "./commands/PutPackageOriginConfigurationCommand";
import {
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "./commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePackageGroupCommandInput, UpdatePackageGroupCommandOutput } from "./commands/UpdatePackageGroupCommand";
import {
  UpdatePackageGroupOriginConfigurationCommandInput,
  UpdatePackageGroupOriginConfigurationCommandOutput,
} from "./commands/UpdatePackageGroupOriginConfigurationCommand";
import {
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "./commands/UpdatePackageVersionsStatusCommand";
import { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "./commands/UpdateRepositoryCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateExternalConnectionCommandInput
  | CopyPackageVersionsCommandInput
  | CreateDomainCommandInput
  | CreatePackageGroupCommandInput
  | CreateRepositoryCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainPermissionsPolicyCommandInput
  | DeletePackageCommandInput
  | DeletePackageGroupCommandInput
  | DeletePackageVersionsCommandInput
  | DeleteRepositoryCommandInput
  | DeleteRepositoryPermissionsPolicyCommandInput
  | DescribeDomainCommandInput
  | DescribePackageCommandInput
  | DescribePackageGroupCommandInput
  | DescribePackageVersionCommandInput
  | DescribeRepositoryCommandInput
  | DisassociateExternalConnectionCommandInput
  | DisposePackageVersionsCommandInput
  | GetAssociatedPackageGroupCommandInput
  | GetAuthorizationTokenCommandInput
  | GetDomainPermissionsPolicyCommandInput
  | GetPackageVersionAssetCommandInput
  | GetPackageVersionReadmeCommandInput
  | GetRepositoryEndpointCommandInput
  | GetRepositoryPermissionsPolicyCommandInput
  | ListAllowedRepositoriesForGroupCommandInput
  | ListAssociatedPackagesCommandInput
  | ListDomainsCommandInput
  | ListPackageGroupsCommandInput
  | ListPackageVersionAssetsCommandInput
  | ListPackageVersionDependenciesCommandInput
  | ListPackageVersionsCommandInput
  | ListPackagesCommandInput
  | ListRepositoriesCommandInput
  | ListRepositoriesInDomainCommandInput
  | ListSubPackageGroupsCommandInput
  | ListTagsForResourceCommandInput
  | PublishPackageVersionCommandInput
  | PutDomainPermissionsPolicyCommandInput
  | PutPackageOriginConfigurationCommandInput
  | PutRepositoryPermissionsPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdatePackageGroupCommandInput
  | UpdatePackageGroupOriginConfigurationCommandInput
  | UpdatePackageVersionsStatusCommandInput
  | UpdateRepositoryCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateExternalConnectionCommandOutput
  | CopyPackageVersionsCommandOutput
  | CreateDomainCommandOutput
  | CreatePackageGroupCommandOutput
  | CreateRepositoryCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainPermissionsPolicyCommandOutput
  | DeletePackageCommandOutput
  | DeletePackageGroupCommandOutput
  | DeletePackageVersionsCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteRepositoryPermissionsPolicyCommandOutput
  | DescribeDomainCommandOutput
  | DescribePackageCommandOutput
  | DescribePackageGroupCommandOutput
  | DescribePackageVersionCommandOutput
  | DescribeRepositoryCommandOutput
  | DisassociateExternalConnectionCommandOutput
  | DisposePackageVersionsCommandOutput
  | GetAssociatedPackageGroupCommandOutput
  | GetAuthorizationTokenCommandOutput
  | GetDomainPermissionsPolicyCommandOutput
  | GetPackageVersionAssetCommandOutput
  | GetPackageVersionReadmeCommandOutput
  | GetRepositoryEndpointCommandOutput
  | GetRepositoryPermissionsPolicyCommandOutput
  | ListAllowedRepositoriesForGroupCommandOutput
  | ListAssociatedPackagesCommandOutput
  | ListDomainsCommandOutput
  | ListPackageGroupsCommandOutput
  | ListPackageVersionAssetsCommandOutput
  | ListPackageVersionDependenciesCommandOutput
  | ListPackageVersionsCommandOutput
  | ListPackagesCommandOutput
  | ListRepositoriesCommandOutput
  | ListRepositoriesInDomainCommandOutput
  | ListSubPackageGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | PublishPackageVersionCommandOutput
  | PutDomainPermissionsPolicyCommandOutput
  | PutPackageOriginConfigurationCommandOutput
  | PutRepositoryPermissionsPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdatePackageGroupCommandOutput
  | UpdatePackageGroupOriginConfigurationCommandOutput
  | UpdatePackageVersionsStatusCommandOutput
  | UpdateRepositoryCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type CodeartifactClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CodeartifactClient class constructor that set the region, credentials and other options.
 */
export interface CodeartifactClientConfig extends CodeartifactClientConfigType {}

/**
 * @public
 */
export type CodeartifactClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CodeartifactClient class. This is resolved and normalized from the {@link CodeartifactClientConfig | constructor configuration interface}.
 */
export interface CodeartifactClientResolvedConfig extends CodeartifactClientResolvedConfigType {}

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
 *           resolve dependencies and install the software. CodeArtifact supports npm, PyPI, Maven, NuGet, Swift, Ruby, Cargo, and generic package formats.
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
 *                         <code>cargo</code>
 *                      </p>
 *                   </li>
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
 * @public
 */
export class CodeartifactClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeartifactClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeartifactClient class. This is resolved and normalized from the {@link CodeartifactClientConfig | constructor configuration interface}.
   */
  readonly config: CodeartifactClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeartifactClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCodeartifactHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CodeartifactClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
