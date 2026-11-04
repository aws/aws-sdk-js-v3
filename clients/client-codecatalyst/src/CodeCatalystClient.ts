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
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCodeCatalystHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAccessTokenCommandInput,
  CreateAccessTokenCommandOutput,
} from "./commands/CreateAccessTokenCommand";
import type {
  CreateDevEnvironmentCommandInput,
  CreateDevEnvironmentCommandOutput,
} from "./commands/CreateDevEnvironmentCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type {
  CreateSourceRepositoryBranchCommandInput,
  CreateSourceRepositoryBranchCommandOutput,
} from "./commands/CreateSourceRepositoryBranchCommand";
import type {
  CreateSourceRepositoryCommandInput,
  CreateSourceRepositoryCommandOutput,
} from "./commands/CreateSourceRepositoryCommand";
import type {
  DeleteAccessTokenCommandInput,
  DeleteAccessTokenCommandOutput,
} from "./commands/DeleteAccessTokenCommand";
import type {
  DeleteDevEnvironmentCommandInput,
  DeleteDevEnvironmentCommandOutput,
} from "./commands/DeleteDevEnvironmentCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type {
  DeleteSourceRepositoryCommandInput,
  DeleteSourceRepositoryCommandOutput,
} from "./commands/DeleteSourceRepositoryCommand";
import type { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import type {
  GetDevEnvironmentCommandInput,
  GetDevEnvironmentCommandOutput,
} from "./commands/GetDevEnvironmentCommand";
import type { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import type {
  GetSourceRepositoryCloneUrlsCommandInput,
  GetSourceRepositoryCloneUrlsCommandOutput,
} from "./commands/GetSourceRepositoryCloneUrlsCommand";
import type {
  GetSourceRepositoryCommandInput,
  GetSourceRepositoryCommandOutput,
} from "./commands/GetSourceRepositoryCommand";
import type { GetSpaceCommandInput, GetSpaceCommandOutput } from "./commands/GetSpaceCommand";
import type { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "./commands/GetSubscriptionCommand";
import type { GetUserDetailsCommandInput, GetUserDetailsCommandOutput } from "./commands/GetUserDetailsCommand";
import type { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import type { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand";
import type { ListAccessTokensCommandInput, ListAccessTokensCommandOutput } from "./commands/ListAccessTokensCommand";
import type {
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
} from "./commands/ListDevEnvironmentsCommand";
import type {
  ListDevEnvironmentSessionsCommandInput,
  ListDevEnvironmentSessionsCommandOutput,
} from "./commands/ListDevEnvironmentSessionsCommand";
import type { ListEventLogsCommandInput, ListEventLogsCommandOutput } from "./commands/ListEventLogsCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type {
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "./commands/ListSourceRepositoriesCommand";
import type {
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "./commands/ListSourceRepositoryBranchesCommand";
import type { ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import type { ListWorkflowRunsCommandInput, ListWorkflowRunsCommandOutput } from "./commands/ListWorkflowRunsCommand";
import type { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import type {
  StartDevEnvironmentCommandInput,
  StartDevEnvironmentCommandOutput,
} from "./commands/StartDevEnvironmentCommand";
import type {
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
} from "./commands/StartDevEnvironmentSessionCommand";
import type { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand";
import type {
  StopDevEnvironmentCommandInput,
  StopDevEnvironmentCommandOutput,
} from "./commands/StopDevEnvironmentCommand";
import type {
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
} from "./commands/StopDevEnvironmentSessionCommand";
import type {
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
} from "./commands/UpdateDevEnvironmentCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import type { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import type { VerifySessionCommandInput, VerifySessionCommandOutput } from "./commands/VerifySessionCommand";
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
  | GetWorkflowCommandInput
  | GetWorkflowRunCommandInput
  | ListAccessTokensCommandInput
  | ListDevEnvironmentSessionsCommandInput
  | ListDevEnvironmentsCommandInput
  | ListEventLogsCommandInput
  | ListProjectsCommandInput
  | ListSourceRepositoriesCommandInput
  | ListSourceRepositoryBranchesCommandInput
  | ListSpacesCommandInput
  | ListWorkflowRunsCommandInput
  | ListWorkflowsCommandInput
  | StartDevEnvironmentCommandInput
  | StartDevEnvironmentSessionCommandInput
  | StartWorkflowRunCommandInput
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
  | GetWorkflowCommandOutput
  | GetWorkflowRunCommandOutput
  | ListAccessTokensCommandOutput
  | ListDevEnvironmentSessionsCommandOutput
  | ListDevEnvironmentsCommandOutput
  | ListEventLogsCommandOutput
  | ListProjectsCommandOutput
  | ListSourceRepositoriesCommandOutput
  | ListSourceRepositoryBranchesCommandOutput
  | ListSpacesCommandOutput
  | ListWorkflowRunsCommandOutput
  | ListWorkflowsCommandOutput
  | StartDevEnvironmentCommandOutput
  | StartDevEnvironmentSessionCommandOutput
  | StartWorkflowRunCommandOutput
  | StopDevEnvironmentCommandOutput
  | StopDevEnvironmentSessionCommandOutput
  | UpdateDevEnvironmentCommandOutput
  | UpdateProjectCommandOutput
  | UpdateSpaceCommandOutput
  | VerifySessionCommandOutput;

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
}

/**
 * @public
 */
export type CodeCatalystClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CodeCatalystClient class constructor that set the region, credentials and other options.
 */
export interface CodeCatalystClientConfig extends CodeCatalystClientConfigType {}

/**
 * @public
 */
export type CodeCatalystClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CodeCatalystClient class. This is resolved and normalized from the {@link CodeCatalystClientConfig | constructor configuration interface}.
 */
export interface CodeCatalystClientResolvedConfig extends CodeCatalystClientResolvedConfigType {}

/**
 * Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst API to work with the following objects.
 *
 * Spaces, by calling the following:
 *
 * - DeleteSpace, which deletes a space.
 * - GetSpace, which returns information about a space.
 * - GetSubscription, which returns information about the Amazon Web Services account used for billing purposes and the billing plan for the space.
 * - ListSpaces, which retrieves a list of spaces.
 * - UpdateSpace, which changes one or more values for a space.
 *
 * Projects, by calling the following:
 *
 * - CreateProject which creates a project in a specified space.
 * - GetProject, which returns information about a project.
 * - ListProjects, which retrieves a list of projects in a space.
 *
 * Users, by calling the following:
 *
 * - GetUserDetails, which returns information about a user in Amazon CodeCatalyst.
 *
 * Source repositories, by calling the following:
 *
 * - CreateSourceRepository, which creates an empty Git-based source repository in a specified project.
 * - CreateSourceRepositoryBranch, which creates a branch in a specified repository where you can work on code.
 * - DeleteSourceRepository, which deletes a source repository.
 * - GetSourceRepository, which returns information about a source repository.
 * - GetSourceRepositoryCloneUrls, which returns information about the URLs that can be used with a Git client to clone a source repository.
 * - ListSourceRepositories, which retrieves a list of source repositories in a project.
 * - ListSourceRepositoryBranches, which retrieves a list of branches in a source repository.
 *
 * Dev Environments and the Amazon Web Services Toolkits, by calling the following:
 *
 * - CreateDevEnvironment, which creates a Dev Environment, where you can quickly work on the code stored in the source repositories of your project.
 * - DeleteDevEnvironment, which deletes a Dev Environment.
 * - GetDevEnvironment, which returns information about a Dev Environment.
 * - ListDevEnvironments, which retrieves a list of Dev Environments in a project.
 * - ListDevEnvironmentSessions, which retrieves a list of active Dev Environment sessions in a project.
 * - StartDevEnvironment, which starts a specified Dev Environment and puts it into an active state.
 * - StartDevEnvironmentSession, which starts a session to a specified Dev Environment.
 * - StopDevEnvironment, which stops a specified Dev Environment and puts it into an stopped state.
 * - StopDevEnvironmentSession, which stops a session for a specified Dev Environment.
 * - UpdateDevEnvironment, which changes one or more values for a Dev Environment.
 *
 * Workflows, by calling the following:
 *
 * - GetWorkflow, which returns information about a workflow.
 * - GetWorkflowRun, which returns information about a specified run of a workflow.
 * - ListWorkflowRuns, which retrieves a list of runs of a specified workflow.
 * - ListWorkflows, which retrieves a list of workflows in a specified project.
 * - StartWorkflowRun, which starts a run of a specified workflow.
 *
 * Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:
 *
 * - CreateAccessToken, which creates a personal access token (PAT) for the current user.
 * - DeleteAccessToken, which deletes a specified personal access token (PAT).
 * - ListAccessTokens, which lists all personal access tokens (PATs) associated with a user.
 * - ListEventLogs, which retrieves a list of events that occurred during a specified time period in a space.
 * - VerifySession, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.
 *
 * > **Note:** If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO). For more information, see [Setting up to use the CLI with Amazon CodeCatalyst](https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html) and the SSO documentation for your SDK.
 *
 * @public
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
        httpAuthSchemeParametersProvider: defaultCodeCatalystHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CodeCatalystClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "smithy.api#httpBearerAuth": config.token,
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
