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

import {
  AcknowledgeOrderReceiptCommandInput,
  AcknowledgeOrderReceiptCommandOutput,
} from "./commands/AcknowledgeOrderReceiptCommand";
import {
  ActivateDeviceIdentifierCommandInput,
  ActivateDeviceIdentifierCommandOutput,
} from "./commands/ActivateDeviceIdentifierCommand";
import {
  ActivateNetworkSiteCommandInput,
  ActivateNetworkSiteCommandOutput,
} from "./commands/ActivateNetworkSiteCommand";
import {
  ConfigureAccessPointCommandInput,
  ConfigureAccessPointCommandOutput,
} from "./commands/ConfigureAccessPointCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import { CreateNetworkSiteCommandInput, CreateNetworkSiteCommandOutput } from "./commands/CreateNetworkSiteCommand";
import {
  DeactivateDeviceIdentifierCommandInput,
  DeactivateDeviceIdentifierCommandOutput,
} from "./commands/DeactivateDeviceIdentifierCommand";
import { DeleteNetworkCommandInput, DeleteNetworkCommandOutput } from "./commands/DeleteNetworkCommand";
import { DeleteNetworkSiteCommandInput, DeleteNetworkSiteCommandOutput } from "./commands/DeleteNetworkSiteCommand";
import {
  GetDeviceIdentifierCommandInput,
  GetDeviceIdentifierCommandOutput,
} from "./commands/GetDeviceIdentifierCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import { GetNetworkResourceCommandInput, GetNetworkResourceCommandOutput } from "./commands/GetNetworkResourceCommand";
import { GetNetworkSiteCommandInput, GetNetworkSiteCommandOutput } from "./commands/GetNetworkSiteCommand";
import { GetOrderCommandInput, GetOrderCommandOutput } from "./commands/GetOrderCommand";
import {
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
} from "./commands/ListDeviceIdentifiersCommand";
import {
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput,
} from "./commands/ListNetworkResourcesCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import { ListNetworkSitesCommandInput, ListNetworkSitesCommandOutput } from "./commands/ListNetworkSitesCommand";
import { ListOrdersCommandInput, ListOrdersCommandOutput } from "./commands/ListOrdersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PingCommandInput, PingCommandOutput } from "./commands/PingCommand";
import {
  StartNetworkResourceUpdateCommandInput,
  StartNetworkResourceUpdateCommandOutput,
} from "./commands/StartNetworkResourceUpdateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateNetworkSiteCommandInput, UpdateNetworkSiteCommandOutput } from "./commands/UpdateNetworkSiteCommand";
import {
  UpdateNetworkSitePlanCommandInput,
  UpdateNetworkSitePlanCommandOutput,
} from "./commands/UpdateNetworkSitePlanCommand";
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
  | AcknowledgeOrderReceiptCommandInput
  | ActivateDeviceIdentifierCommandInput
  | ActivateNetworkSiteCommandInput
  | ConfigureAccessPointCommandInput
  | CreateNetworkCommandInput
  | CreateNetworkSiteCommandInput
  | DeactivateDeviceIdentifierCommandInput
  | DeleteNetworkCommandInput
  | DeleteNetworkSiteCommandInput
  | GetDeviceIdentifierCommandInput
  | GetNetworkCommandInput
  | GetNetworkResourceCommandInput
  | GetNetworkSiteCommandInput
  | GetOrderCommandInput
  | ListDeviceIdentifiersCommandInput
  | ListNetworkResourcesCommandInput
  | ListNetworkSitesCommandInput
  | ListNetworksCommandInput
  | ListOrdersCommandInput
  | ListTagsForResourceCommandInput
  | PingCommandInput
  | StartNetworkResourceUpdateCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateNetworkSiteCommandInput
  | UpdateNetworkSitePlanCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcknowledgeOrderReceiptCommandOutput
  | ActivateDeviceIdentifierCommandOutput
  | ActivateNetworkSiteCommandOutput
  | ConfigureAccessPointCommandOutput
  | CreateNetworkCommandOutput
  | CreateNetworkSiteCommandOutput
  | DeactivateDeviceIdentifierCommandOutput
  | DeleteNetworkCommandOutput
  | DeleteNetworkSiteCommandOutput
  | GetDeviceIdentifierCommandOutput
  | GetNetworkCommandOutput
  | GetNetworkResourceCommandOutput
  | GetNetworkSiteCommandOutput
  | GetOrderCommandOutput
  | ListDeviceIdentifiersCommandOutput
  | ListNetworkResourcesCommandOutput
  | ListNetworkSitesCommandOutput
  | ListNetworksCommandOutput
  | ListOrdersCommandOutput
  | ListTagsForResourceCommandOutput
  | PingCommandOutput
  | StartNetworkResourceUpdateCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateNetworkSiteCommandOutput
  | UpdateNetworkSitePlanCommandOutput;

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
export type PrivateNetworksClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of PrivateNetworksClient class constructor that set the region, credentials and other options.
 */
export interface PrivateNetworksClientConfig extends PrivateNetworksClientConfigType {}

/**
 * @public
 */
export type PrivateNetworksClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of PrivateNetworksClient class. This is resolved and normalized from the {@link PrivateNetworksClientConfig | constructor configuration interface}.
 */
export interface PrivateNetworksClientResolvedConfig extends PrivateNetworksClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale
 *             your own private mobile network at your on-premises location. Private 5G provides the
 *             pre-configured hardware and software for mobile networks, helps automate setup, and
 *             scales capacity on demand to support additional devices as needed.</p>
 */
export class PrivateNetworksClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PrivateNetworksClientResolvedConfig
> {
  /**
   * The resolved configuration of PrivateNetworksClient class. This is resolved and normalized from the {@link PrivateNetworksClientConfig | constructor configuration interface}.
   */
  readonly config: PrivateNetworksClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PrivateNetworksClientConfig>) {
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
