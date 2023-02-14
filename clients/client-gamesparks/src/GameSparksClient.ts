// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
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
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
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
} from "@aws-sdk/types";

import { CreateGameCommandInput, CreateGameCommandOutput } from "./commands/CreateGameCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { DeleteGameCommandInput, DeleteGameCommandOutput } from "./commands/DeleteGameCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DisconnectPlayerCommandInput, DisconnectPlayerCommandOutput } from "./commands/DisconnectPlayerCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "./commands/ExportSnapshotCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "./commands/GetExtensionCommand";
import {
  GetExtensionVersionCommandInput,
  GetExtensionVersionCommandOutput,
} from "./commands/GetExtensionVersionCommand";
import { GetGameCommandInput, GetGameCommandOutput } from "./commands/GetGameCommand";
import {
  GetGameConfigurationCommandInput,
  GetGameConfigurationCommandOutput,
} from "./commands/GetGameConfigurationCommand";
import {
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
} from "./commands/GetGeneratedCodeJobCommand";
import {
  GetPlayerConnectionStatusCommandInput,
  GetPlayerConnectionStatusCommandOutput,
} from "./commands/GetPlayerConnectionStatusCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStageDeploymentCommandInput, GetStageDeploymentCommandOutput } from "./commands/GetStageDeploymentCommand";
import {
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
} from "./commands/ImportGameConfigurationCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "./commands/ListExtensionsCommand";
import {
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
} from "./commands/ListExtensionVersionsCommand";
import { ListGamesCommandInput, ListGamesCommandOutput } from "./commands/ListGamesCommand";
import {
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
} from "./commands/ListGeneratedCodeJobsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "./commands/ListSnapshotsCommand";
import {
  ListStageDeploymentsCommandInput,
  ListStageDeploymentsCommandOutput,
} from "./commands/ListStageDeploymentsCommand";
import { ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartGeneratedCodeJobCommandInput,
  StartGeneratedCodeJobCommandOutput,
} from "./commands/StartGeneratedCodeJobCommand";
import {
  StartStageDeploymentCommandInput,
  StartStageDeploymentCommandOutput,
} from "./commands/StartStageDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateGameCommandInput, UpdateGameCommandOutput } from "./commands/UpdateGameCommand";
import {
  UpdateGameConfigurationCommandInput,
  UpdateGameConfigurationCommandOutput,
} from "./commands/UpdateGameConfigurationCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateGameCommandInput
  | CreateSnapshotCommandInput
  | CreateStageCommandInput
  | DeleteGameCommandInput
  | DeleteStageCommandInput
  | DisconnectPlayerCommandInput
  | ExportSnapshotCommandInput
  | GetExtensionCommandInput
  | GetExtensionVersionCommandInput
  | GetGameCommandInput
  | GetGameConfigurationCommandInput
  | GetGeneratedCodeJobCommandInput
  | GetPlayerConnectionStatusCommandInput
  | GetSnapshotCommandInput
  | GetStageCommandInput
  | GetStageDeploymentCommandInput
  | ImportGameConfigurationCommandInput
  | ListExtensionVersionsCommandInput
  | ListExtensionsCommandInput
  | ListGamesCommandInput
  | ListGeneratedCodeJobsCommandInput
  | ListSnapshotsCommandInput
  | ListStageDeploymentsCommandInput
  | ListStagesCommandInput
  | ListTagsForResourceCommandInput
  | StartGeneratedCodeJobCommandInput
  | StartStageDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGameCommandInput
  | UpdateGameConfigurationCommandInput
  | UpdateSnapshotCommandInput
  | UpdateStageCommandInput;

export type ServiceOutputTypes =
  | CreateGameCommandOutput
  | CreateSnapshotCommandOutput
  | CreateStageCommandOutput
  | DeleteGameCommandOutput
  | DeleteStageCommandOutput
  | DisconnectPlayerCommandOutput
  | ExportSnapshotCommandOutput
  | GetExtensionCommandOutput
  | GetExtensionVersionCommandOutput
  | GetGameCommandOutput
  | GetGameConfigurationCommandOutput
  | GetGeneratedCodeJobCommandOutput
  | GetPlayerConnectionStatusCommandOutput
  | GetSnapshotCommandOutput
  | GetStageCommandOutput
  | GetStageDeploymentCommandOutput
  | ImportGameConfigurationCommandOutput
  | ListExtensionVersionsCommandOutput
  | ListExtensionsCommandOutput
  | ListGamesCommandOutput
  | ListGeneratedCodeJobsCommandOutput
  | ListSnapshotsCommandOutput
  | ListStageDeploymentsCommandOutput
  | ListStagesCommandOutput
  | ListTagsForResourceCommandOutput
  | StartGeneratedCodeJobCommandOutput
  | StartStageDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGameCommandOutput
  | UpdateGameConfigurationCommandOutput
  | UpdateSnapshotCommandOutput
  | UpdateStageCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type GameSparksClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of GameSparksClient class constructor that set the region, credentials and other options.
 */
export interface GameSparksClientConfig extends GameSparksClientConfigType {}

type GameSparksClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of GameSparksClient class. This is resolved and normalized from the {@link GameSparksClientConfig | constructor configuration interface}.
 */
export interface GameSparksClientResolvedConfig extends GameSparksClientResolvedConfigType {}

/**
 * <p/>
 */
export class GameSparksClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GameSparksClientResolvedConfig
> {
  /**
   * The resolved configuration of GameSparksClient class. This is resolved and normalized from the {@link GameSparksClientConfig | constructor configuration interface}.
   */
  readonly config: GameSparksClientResolvedConfig;

  constructor(configuration: GameSparksClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
