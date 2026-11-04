// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCodeartifactHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "./commands/AssociateExternalConnectionCommand";
import type {
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "./commands/CopyPackageVersionsCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type {
  CreatePackageGroupCommandInput,
  CreatePackageGroupCommandOutput,
} from "./commands/CreatePackageGroupCommand";
import type { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type {
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "./commands/DeleteDomainPermissionsPolicyCommand";
import type { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import type {
  DeletePackageGroupCommandInput,
  DeletePackageGroupCommandOutput,
} from "./commands/DeletePackageGroupCommand";
import type {
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "./commands/DeletePackageVersionsCommand";
import type { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import type {
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "./commands/DeleteRepositoryPermissionsPolicyCommand";
import type { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import type { DescribePackageCommandInput, DescribePackageCommandOutput } from "./commands/DescribePackageCommand";
import type {
  DescribePackageGroupCommandInput,
  DescribePackageGroupCommandOutput,
} from "./commands/DescribePackageGroupCommand";
import type {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "./commands/DescribePackageVersionCommand";
import type {
  DescribeRepositoryCommandInput,
  DescribeRepositoryCommandOutput,
} from "./commands/DescribeRepositoryCommand";
import type {
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "./commands/DisassociateExternalConnectionCommand";
import type {
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "./commands/DisposePackageVersionsCommand";
import type {
  GetAssociatedPackageGroupCommandInput,
  GetAssociatedPackageGroupCommandOutput,
} from "./commands/GetAssociatedPackageGroupCommand";
import type {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import type {
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "./commands/GetDomainPermissionsPolicyCommand";
import type {
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "./commands/GetPackageVersionAssetCommand";
import type {
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "./commands/GetPackageVersionReadmeCommand";
import type {
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "./commands/GetRepositoryEndpointCommand";
import type {
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "./commands/GetRepositoryPermissionsPolicyCommand";
import type {
  ListAllowedRepositoriesForGroupCommandInput,
  ListAllowedRepositoriesForGroupCommandOutput,
} from "./commands/ListAllowedRepositoriesForGroupCommand";
import type {
  ListAssociatedPackagesCommandInput,
  ListAssociatedPackagesCommandOutput,
} from "./commands/ListAssociatedPackagesCommand";
import type { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import type {
  ListPackageGroupsCommandInput,
  ListPackageGroupsCommandOutput,
} from "./commands/ListPackageGroupsCommand";
import type { ListPackagesCommandInput, ListPackagesCommandOutput } from "./commands/ListPackagesCommand";
import type {
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "./commands/ListPackageVersionAssetsCommand";
import type {
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "./commands/ListPackageVersionDependenciesCommand";
import type {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import type { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import type {
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "./commands/ListRepositoriesInDomainCommand";
import type {
  ListSubPackageGroupsCommandInput,
  ListSubPackageGroupsCommandOutput,
} from "./commands/ListSubPackageGroupsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
} from "./commands/PublishPackageVersionCommand";
import type {
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "./commands/PutDomainPermissionsPolicyCommand";
import type {
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "./commands/PutPackageOriginConfigurationCommand";
import type {
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "./commands/PutRepositoryPermissionsPolicyCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdatePackageGroupCommandInput,
  UpdatePackageGroupCommandOutput,
} from "./commands/UpdatePackageGroupCommand";
import type {
  UpdatePackageGroupOriginConfigurationCommandInput,
  UpdatePackageGroupOriginConfigurationCommandOutput,
} from "./commands/UpdatePackageGroupOriginConfigurationCommand";
import type {
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "./commands/UpdatePackageVersionsStatusCommand";
import type { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "./commands/UpdateRepositoryCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
   * Accepted values are "standard" and "adaptive".
   * @see https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
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
 * CodeArtifact is a fully managed artifact repository compatible with language-native package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to share packages with development teams and pull packages. Packages can be pulled from both public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact repository and another repository, which effectively merges their contents from the point of view of a package manager client.
 *
 * **CodeArtifact concepts**
 *
 * - **Repository**: A CodeArtifact repository contains a set of [package versions](https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version), each of which maps to a set of assets, or files. Repositories are polyglot, so a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools such as the **`npm`** CLI or the Maven CLI ( **`mvn`** ). For a list of supported package managers, see the [CodeArtifact User Guide](https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html).
 * - **Domain**: Repositories are aggregated into a higher-level entity known as a *domain*. All package assets and metadata are stored in the domain, but are consumed through repositories. A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it's present in. All of the assets and metadata in a domain are encrypted with the same customer master key (CMK) stored in Key Management Service (KMS).
 *
 *   Each repository is a member of a single domain and can't be moved to a different domain.
 *
 *   The domain allows organizational policy to be applied across multiple repositories, such as which accounts can access repositories in the domain, and which public repositories can be used as sources of packages.
 *
 *   Although an organization can have multiple domains, we recommend a single production domain that contains all published artifacts so that teams can find and share packages across their organization.
 * - **Package**: A *package* is a bundle of software and the metadata required to resolve dependencies and install the software. CodeArtifact supports npm, PyPI, Maven, NuGet, Swift, Ruby, Cargo, and generic package formats. For more information about the supported package formats and how to use CodeArtifact with them, see the [CodeArtifact User Guide](https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html).
 *
 *   In CodeArtifact, a package consists of:
 *
 *   - A *name* (for example, `webpack` is the name of a popular npm package)
 *   - An optional namespace (for example, `@types` in `@types/node`)
 *   - A set of versions (for example, `1.0.0`, `1.0.1`, `1.0.2`, etc.)
 *   - Package-level metadata (for example, npm tags)
 * - **Package group**: A group of packages that match a specified definition. Package groups can be used to apply configuration to multiple packages that match a defined pattern using package format, package namespace, and package name. You can use package groups to more conveniently configure package origin controls for multiple packages. Package origin controls are used to block or allow ingestion or publishing of new package versions, which protects users from malicious actions known as dependency substitution attacks.
 * - **Package version**: A version of a package, such as `@types/node 12.6.9`. The version number format and semantics vary for different package formats. For example, npm package versions must conform to the [Semantic Versioning specification](https://semver.org/). In CodeArtifact, a package version consists of the version identifier, metadata at the package version level, and a set of assets.
 * - **Upstream repository**: One repository is *upstream* of another when the package versions in it can be accessed from the repository endpoint of the downstream repository, effectively merging the contents of the two repositories from the point of view of a client. CodeArtifact allows creating an upstream relationship between two repositories.
 * - **Asset**: An individual file stored in CodeArtifact associated with a package version, such as an npm `.tgz` file or Maven POM and JAR files.
 *
 * **CodeArtifact supported API operations**
 *
 * - `AssociateExternalConnection`: Adds an existing external connection to a repository.
 * - `CopyPackageVersions`: Copies package versions from one repository to another repository in the same domain.
 * - `CreateDomain`: Creates a domain.
 * - `CreatePackageGroup`: Creates a package group.
 * - `CreateRepository`: Creates a CodeArtifact repository in a domain.
 * - `DeleteDomain`: Deletes a domain. You cannot delete a domain that contains repositories.
 * - `DeleteDomainPermissionsPolicy`: Deletes the resource policy that is set on a domain.
 * - `DeletePackage`: Deletes a package and all associated package versions.
 * - `DeletePackageGroup`: Deletes a package group. Does not delete packages or package versions that are associated with a package group.
 * - `DeletePackageVersions`: Deletes versions of a package. After a package has been deleted, it can be republished, but its assets and metadata cannot be restored because they have been permanently removed from storage.
 * - `DeleteRepository`: Deletes a repository.
 * - `DeleteRepositoryPermissionsPolicy`: Deletes the resource policy that is set on a repository.
 * - `DescribeDomain`: Returns a `DomainDescription` object that contains information about the requested domain.
 * - `DescribePackage`: Returns a [PackageDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html) object that contains details about a package.
 * - `DescribePackageGroup`: Returns a [PackageGroup](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageGroup.html) object that contains details about a package group.
 * - `DescribePackageVersion`: Returns a [PackageVersionDescription](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html) object that contains details about a package version.
 * - `DescribeRepository`: Returns a `RepositoryDescription` object that contains detailed information about the requested repository.
 * - `DisposePackageVersions`: Disposes versions of a package. A package version with the status `Disposed` cannot be restored because they have been permanently removed from storage.
 * - `DisassociateExternalConnection`: Removes an existing external connection from a repository.
 * - `GetAssociatedPackageGroup`: Returns the most closely associated package group to the specified package.
 * - `GetAuthorizationToken`: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed. The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.
 * - `GetDomainPermissionsPolicy`: Returns the policy of a resource that is attached to the specified domain.
 * - `GetPackageVersionAsset`: Returns the contents of an asset that is in a package version.
 * - `GetPackageVersionReadme`: Gets the readme file or descriptive text for a package version.
 * - `GetRepositoryEndpoint`: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format:
 *
 *   - `cargo`
 *   - `generic`
 *   - `maven`
 *   - `npm`
 *   - `nuget`
 *   - `pypi`
 *   - `ruby`
 *   - `swift`
 * - `GetRepositoryPermissionsPolicy`: Returns the resource policy that is set on a repository.
 * - `ListAllowedRepositoriesForGroup`: Lists the allowed repositories for a package group that has origin configuration set to `ALLOW_SPECIFIC_REPOSITORIES`.
 * - `ListAssociatedPackages`: Returns a list of packages associated with the requested package group.
 * - `ListDomains`: Returns a list of `DomainSummary` objects. Each returned `DomainSummary` object contains information about a domain.
 * - `ListPackages`: Lists the packages in a repository.
 * - `ListPackageGroups`: Returns a list of package groups in the requested domain.
 * - `ListPackageVersionAssets`: Lists the assets for a given package version.
 * - `ListPackageVersionDependencies`: Returns a list of the direct dependencies for a package version.
 * - `ListPackageVersions`: Returns a list of package versions for a specified package in a repository.
 * - `ListRepositories`: Returns a list of repositories owned by the Amazon Web Services account that called this method.
 * - `ListRepositoriesInDomain`: Returns a list of the repositories in a domain.
 * - `ListSubPackageGroups`: Returns a list of direct children of the specified package group.
 * - `PublishPackageVersion`: Creates a new package version containing one or more assets.
 * - `PutDomainPermissionsPolicy`: Attaches a resource policy to a domain.
 * - `PutPackageOriginConfiguration`: Sets the package origin configuration for a package, which determine how new versions of the package can be added to a specific repository.
 * - `PutRepositoryPermissionsPolicy`: Sets the resource policy on a repository that specifies permissions to access it.
 * - `UpdatePackageGroup`: Updates a package group. This API cannot be used to update a package group's origin configuration or pattern.
 * - `UpdatePackageGroupOriginConfiguration`: Updates the package origin configuration for a package group.
 * - `UpdatePackageVersionsStatus`: Updates the status of one or more versions of a package.
 * - `UpdateRepository`: Updates the properties of a repository.
 *
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
