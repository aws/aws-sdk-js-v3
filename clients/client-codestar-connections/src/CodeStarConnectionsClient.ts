// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
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
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateHostCommandInput, CreateHostCommandOutput } from "./commands/CreateHostCommand";
import {
  CreateRepositoryLinkCommandInput,
  CreateRepositoryLinkCommandOutput,
} from "./commands/CreateRepositoryLinkCommand";
import {
  CreateSyncConfigurationCommandInput,
  CreateSyncConfigurationCommandOutput,
} from "./commands/CreateSyncConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteHostCommandInput, DeleteHostCommandOutput } from "./commands/DeleteHostCommand";
import {
  DeleteRepositoryLinkCommandInput,
  DeleteRepositoryLinkCommandOutput,
} from "./commands/DeleteRepositoryLinkCommand";
import {
  DeleteSyncConfigurationCommandInput,
  DeleteSyncConfigurationCommandOutput,
} from "./commands/DeleteSyncConfigurationCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { GetHostCommandInput, GetHostCommandOutput } from "./commands/GetHostCommand";
import { GetRepositoryLinkCommandInput, GetRepositoryLinkCommandOutput } from "./commands/GetRepositoryLinkCommand";
import {
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "./commands/GetRepositorySyncStatusCommand";
import {
  GetResourceSyncStatusCommandInput,
  GetResourceSyncStatusCommandOutput,
} from "./commands/GetResourceSyncStatusCommand";
import {
  GetSyncBlockerSummaryCommandInput,
  GetSyncBlockerSummaryCommandOutput,
} from "./commands/GetSyncBlockerSummaryCommand";
import {
  GetSyncConfigurationCommandInput,
  GetSyncConfigurationCommandOutput,
} from "./commands/GetSyncConfigurationCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import { ListHostsCommandInput, ListHostsCommandOutput } from "./commands/ListHostsCommand";
import {
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput,
} from "./commands/ListRepositoryLinksCommand";
import {
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import {
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput,
} from "./commands/ListSyncConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateHostCommandInput, UpdateHostCommandOutput } from "./commands/UpdateHostCommand";
import {
  UpdateRepositoryLinkCommandInput,
  UpdateRepositoryLinkCommandOutput,
} from "./commands/UpdateRepositoryLinkCommand";
import { UpdateSyncBlockerCommandInput, UpdateSyncBlockerCommandOutput } from "./commands/UpdateSyncBlockerCommand";
import {
  UpdateSyncConfigurationCommandInput,
  UpdateSyncConfigurationCommandOutput,
} from "./commands/UpdateSyncConfigurationCommand";
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
  | CreateConnectionCommandInput
  | CreateHostCommandInput
  | CreateRepositoryLinkCommandInput
  | CreateSyncConfigurationCommandInput
  | DeleteConnectionCommandInput
  | DeleteHostCommandInput
  | DeleteRepositoryLinkCommandInput
  | DeleteSyncConfigurationCommandInput
  | GetConnectionCommandInput
  | GetHostCommandInput
  | GetRepositoryLinkCommandInput
  | GetRepositorySyncStatusCommandInput
  | GetResourceSyncStatusCommandInput
  | GetSyncBlockerSummaryCommandInput
  | GetSyncConfigurationCommandInput
  | ListConnectionsCommandInput
  | ListHostsCommandInput
  | ListRepositoryLinksCommandInput
  | ListRepositorySyncDefinitionsCommandInput
  | ListSyncConfigurationsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateHostCommandInput
  | UpdateRepositoryLinkCommandInput
  | UpdateSyncBlockerCommandInput
  | UpdateSyncConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateConnectionCommandOutput
  | CreateHostCommandOutput
  | CreateRepositoryLinkCommandOutput
  | CreateSyncConfigurationCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteHostCommandOutput
  | DeleteRepositoryLinkCommandOutput
  | DeleteSyncConfigurationCommandOutput
  | GetConnectionCommandOutput
  | GetHostCommandOutput
  | GetRepositoryLinkCommandOutput
  | GetRepositorySyncStatusCommandOutput
  | GetResourceSyncStatusCommandOutput
  | GetSyncBlockerSummaryCommandOutput
  | GetSyncConfigurationCommandOutput
  | ListConnectionsCommandOutput
  | ListHostsCommandOutput
  | ListRepositoryLinksCommandOutput
  | ListRepositorySyncDefinitionsCommandOutput
  | ListSyncConfigurationsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateHostCommandOutput
  | UpdateRepositoryLinkCommandOutput
  | UpdateSyncBlockerCommandOutput
  | UpdateSyncConfigurationCommandOutput;

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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

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
}

/**
 * @public
 */
export type CodeStarConnectionsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CodeStarConnectionsClient class constructor that set the region, credentials and other options.
 */
export interface CodeStarConnectionsClientConfig extends CodeStarConnectionsClientConfigType {}

/**
 * @public
 */
export type CodeStarConnectionsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CodeStarConnectionsClient class. This is resolved and normalized from the {@link CodeStarConnectionsClientConfig | constructor configuration interface}.
 */
export interface CodeStarConnectionsClientResolvedConfig extends CodeStarConnectionsClientResolvedConfigType {}

/**
 * @public
 * <fullname>AWS CodeStar Connections</fullname>
 *          <p>This Amazon Web Services CodeStar Connections API Reference provides descriptions and usage examples of
 *       the operations and data types for the Amazon Web Services CodeStar Connections API. You can use the
 *       connections API to work with connections and installations.</p>
 *          <p>
 *             <i>Connections</i> are configurations that you use to connect Amazon Web Services
 *       resources to external code repositories. Each connection is a resource that can be given to
 *       services such as CodePipeline to connect to a third-party repository such as Bitbucket. For
 *       example, you can add the connection in CodePipeline so that it triggers your pipeline when a
 *       code change is made to your third-party code repository. Each connection is named and
 *       associated with a unique ARN that is used to reference the connection.</p>
 *          <p>When you create a connection, the console initiates a third-party connection handshake.
 *         <i>Installations</i> are the apps that are used to conduct this handshake. For
 *       example, the installation for the Bitbucket provider type is the Bitbucket app. When you
 *       create a connection, you can choose an existing installation or create one.</p>
 *          <p>When you want to create a connection to an installed provider type such as GitHub
 *       Enterprise Server, you create a <i>host</i> for your connections.</p>
 *          <p>You can work with connections by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateConnection</a>, which creates a uniquely named connection that can be
 *           referenced by services such as CodePipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteConnection</a>, which deletes the specified connection.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetConnection</a>, which returns information about the connection, including
 *           the connection status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListConnections</a>, which lists the connections associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with hosts by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteHost</a>, which deletes the specified host.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetHost</a>, which returns information about the host, including
 *           the setup status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListHosts</a>, which lists the hosts associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with tags in Amazon Web Services CodeStar Connections by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which gets information about Amazon Web Services tags for a
 *           specified Amazon Resource Name (ARN) in Amazon Web Services CodeStar Connections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which adds or updates tags for a resource in Amazon Web Services CodeStar
 *           Connections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes tags for a resource in Amazon Web Services CodeStar
 *           Connections.</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to use Amazon Web Services CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User
 *         Guide</a>.</p>
 */
export class CodeStarConnectionsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeStarConnectionsClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeStarConnectionsClient class. This is resolved and normalized from the {@link CodeStarConnectionsClientConfig | constructor configuration interface}.
   */
  readonly config: CodeStarConnectionsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeStarConnectionsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
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
