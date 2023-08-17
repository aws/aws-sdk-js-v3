// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getTokenPlugin, resolveTokenConfig, TokenInputConfig, TokenResolvedConfig } from "@aws-sdk/middleware-token";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { CreateAccessTokenCommandInput, CreateAccessTokenCommandOutput } from "./commands/CreateAccessTokenCommand";
import {
  CreateDevEnvironmentCommandInput,
  CreateDevEnvironmentCommandOutput,
} from "./commands/CreateDevEnvironmentCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateSourceRepositoryBranchCommandInput,
  CreateSourceRepositoryBranchCommandOutput,
} from "./commands/CreateSourceRepositoryBranchCommand";
import {
  CreateSourceRepositoryCommandInput,
  CreateSourceRepositoryCommandOutput,
} from "./commands/CreateSourceRepositoryCommand";
import { DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput } from "./commands/DeleteAccessTokenCommand";
import {
  DeleteDevEnvironmentCommandInput,
  DeleteDevEnvironmentCommandOutput,
} from "./commands/DeleteDevEnvironmentCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteSourceRepositoryCommandInput,
  DeleteSourceRepositoryCommandOutput,
} from "./commands/DeleteSourceRepositoryCommand";
import { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import { GetDevEnvironmentCommandInput, GetDevEnvironmentCommandOutput } from "./commands/GetDevEnvironmentCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
} from "./commands/GetSourceRepositoryCloneUrlsCommand";
import {
  GetSourceRepositoryCommandInput,
  GetSourceRepositoryCommandOutput,
} from "./commands/GetSourceRepositoryCommand";
import { GetSpaceCommandInput, GetSpaceCommandOutput } from "./commands/GetSpaceCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "./commands/GetSubscriptionCommand";
import { GetUserDetailsCommandInput, GetUserDetailsCommandOutput } from "./commands/GetUserDetailsCommand";
import { ListAccessTokensCommandInput, ListAccessTokensCommandOutput } from "./commands/ListAccessTokensCommand";
import {
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "./commands/ListDevEnvironmentsCommand";
import {
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput,
} from "./commands/ListDevEnvironmentSessionsCommand";
import { ListEventLogsCommandInput, ListEventLogsCommandOutput } from "./commands/ListEventLogsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "./commands/ListSourceRepositoriesCommand";
import {
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "./commands/ListSourceRepositoryBranchesCommand";
import { ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import {
  StartDevEnvironmentCommandInput,
  StartDevEnvironmentCommandOutput,
} from "./commands/StartDevEnvironmentCommand";
import {
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
} from "./commands/StartDevEnvironmentSessionCommand";
import { StopDevEnvironmentCommandInput, StopDevEnvironmentCommandOutput } from "./commands/StopDevEnvironmentCommand";
import {
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
} from "./commands/StopDevEnvironmentSessionCommand";
import {
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "./commands/UpdateDevEnvironmentCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import { VerifySessionCommandInput, VerifySessionCommandOutput } from "./commands/VerifySessionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateAccessTokenCommandInput
  | CreateDevEnvironmentCommandInput
  | CreateProjectCommandInput
  | CreateSourceRepositoryBranchCommandInput
  | CreateSourceRepositoryCommandInput
  | DeleteAccessTokenCommandInput
  | DeleteDevEnvironmentCommandInput
  | DeleteProjectCommandInput
  | DeleteSourceRepositoryCommandInput
  | DeleteSpaceCommandInput
  | GetDevEnvironmentCommandInput
  | GetProjectCommandInput
  | GetSourceRepositoryCloneUrlsCommandInput
  | GetSourceRepositoryCommandInput
  | GetSpaceCommandInput
  | GetSubscriptionCommandInput
  | GetUserDetailsCommandInput
  | ListAccessTokensCommandInput
  | ListDevEnvironmentSessionsCommandInput
  | ListDevEnvironmentsCommandInput
  | ListEventLogsCommandInput
  | ListProjectsCommandInput
  | ListSourceRepositoriesCommandInput
  | ListSourceRepositoryBranchesCommandInput
  | ListSpacesCommandInput
  | StartDevEnvironmentCommandInput
  | StartDevEnvironmentSessionCommandInput
  | StopDevEnvironmentCommandInput
  | StopDevEnvironmentSessionCommandInput
  | UpdateDevEnvironmentCommandInput
  | UpdateProjectCommandInput
  | UpdateSpaceCommandInput
  | VerifySessionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAccessTokenCommandOutput
  | CreateDevEnvironmentCommandOutput
  | CreateProjectCommandOutput
  | CreateSourceRepositoryBranchCommandOutput
  | CreateSourceRepositoryCommandOutput
  | DeleteAccessTokenCommandOutput
  | DeleteDevEnvironmentCommandOutput
  | DeleteProjectCommandOutput
  | DeleteSourceRepositoryCommandOutput
  | DeleteSpaceCommandOutput
  | GetDevEnvironmentCommandOutput
  | GetProjectCommandOutput
  | GetSourceRepositoryCloneUrlsCommandOutput
  | GetSourceRepositoryCommandOutput
  | GetSpaceCommandOutput
  | GetSubscriptionCommandOutput
  | GetUserDetailsCommandOutput
  | ListAccessTokensCommandOutput
  | ListDevEnvironmentSessionsCommandOutput
  | ListDevEnvironmentsCommandOutput
  | ListEventLogsCommandOutput
  | ListProjectsCommandOutput
  | ListSourceRepositoriesCommandOutput
  | ListSourceRepositoryBranchesCommandOutput
  | ListSpacesCommandOutput
  | StartDevEnvironmentCommandOutput
  | StartDevEnvironmentSessionCommandOutput
  | StopDevEnvironmentCommandOutput
  | StopDevEnvironmentSessionCommandOutput
  | UpdateDevEnvironmentCommandOutput
  | UpdateProjectCommandOutput
  | UpdateSpaceCommandOutput
  | VerifySessionCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
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
}

/**
 * @public
 */
export type CodeCatalystClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  TokenInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CodeCatalystClient class constructor that set the region, credentials and other options.
 */
export interface CodeCatalystClientConfig extends CodeCatalystClientConfigType {}

/**
 * @public
 */
export type CodeCatalystClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  TokenResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CodeCatalystClient class. This is resolved and normalized from the {@link CodeCatalystClientConfig | constructor configuration interface}.
 */
export interface CodeCatalystClientResolvedConfig extends CodeCatalystClientResolvedConfigType {}

/**
 * @public
 * <p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
 *       API to work with the following objects. </p>
 *          <p>Spaces, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteSpace</a>, which deletes a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSpace</a>, which returns information about a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
 *         and the billing plan for the space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSpaces</a>, which retrieves a list of spaces.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSpace</a>, which hanges one or more values for a space.</p>
 *             </li>
 *          </ul>
 *          <p>Projects, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateProject</a> which creates a project in a specified space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetProject</a>, which returns information about a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListProjects</a>, which retrieves a list of projects in a space.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
 *             </li>
 *          </ul>
 *          <p>Source repositories, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepository</a>, which creates an empty Git-based source repository in a specified project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSourceRepository</a>, which deletes a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepository</a>, which returns information about a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
 *         repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
 *             </li>
 *          </ul>
 *          <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDevEnvironment</a>, which creates a Dev Environment,
 *        where you can quickly work on the code stored in the source repositories of your project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironmentSessions</a>, which retrieves a list of active Dev Environment sessions in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
 *             </li>
 *          </ul>
 *          <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO).
 *         For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a>
 *       and the SSO documentation for your SDK.</p>
 *          </note>
 */
export class CodeCatalystClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeCatalystClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeCatalystClient class. This is resolved and normalized from the {@link CodeCatalystClientConfig | constructor configuration interface}.
   */
  readonly config: CodeCatalystClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeCatalystClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveTokenConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getTokenPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
