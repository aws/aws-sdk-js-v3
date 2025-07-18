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
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
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

import {
  defaultOutpostsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelCapacityTaskCommandInput, CancelCapacityTaskCommandOutput } from "./commands/CancelCapacityTaskCommand";
import { CancelOrderCommandInput, CancelOrderCommandOutput } from "./commands/CancelOrderCommand";
import { CreateOrderCommandInput, CreateOrderCommandOutput } from "./commands/CreateOrderCommand";
import { CreateOutpostCommandInput, CreateOutpostCommandOutput } from "./commands/CreateOutpostCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import { DeleteOutpostCommandInput, DeleteOutpostCommandOutput } from "./commands/DeleteOutpostCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import { GetCapacityTaskCommandInput, GetCapacityTaskCommandOutput } from "./commands/GetCapacityTaskCommand";
import { GetCatalogItemCommandInput, GetCatalogItemCommandOutput } from "./commands/GetCatalogItemCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { GetOrderCommandInput, GetOrderCommandOutput } from "./commands/GetOrderCommand";
import {
  GetOutpostBillingInformationCommandInput,
  GetOutpostBillingInformationCommandOutput,
} from "./commands/GetOutpostBillingInformationCommand";
import { GetOutpostCommandInput, GetOutpostCommandOutput } from "./commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "./commands/GetOutpostInstanceTypesCommand";
import {
  GetOutpostSupportedInstanceTypesCommandInput,
  GetOutpostSupportedInstanceTypesCommandOutput,
} from "./commands/GetOutpostSupportedInstanceTypesCommand";
import { GetSiteAddressCommandInput, GetSiteAddressCommandOutput } from "./commands/GetSiteAddressCommand";
import { GetSiteCommandInput, GetSiteCommandOutput } from "./commands/GetSiteCommand";
import { ListAssetInstancesCommandInput, ListAssetInstancesCommandOutput } from "./commands/ListAssetInstancesCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListBlockingInstancesForCapacityTaskCommandInput,
  ListBlockingInstancesForCapacityTaskCommandOutput,
} from "./commands/ListBlockingInstancesForCapacityTaskCommand";
import { ListCapacityTasksCommandInput, ListCapacityTasksCommandOutput } from "./commands/ListCapacityTasksCommand";
import { ListCatalogItemsCommandInput, ListCatalogItemsCommandOutput } from "./commands/ListCatalogItemsCommand";
import { ListOrdersCommandInput, ListOrdersCommandOutput } from "./commands/ListOrdersCommand";
import { ListOutpostsCommandInput, ListOutpostsCommandOutput } from "./commands/ListOutpostsCommand";
import { ListSitesCommandInput, ListSitesCommandOutput } from "./commands/ListSitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartCapacityTaskCommandInput, StartCapacityTaskCommandOutput } from "./commands/StartCapacityTaskCommand";
import { StartConnectionCommandInput, StartConnectionCommandOutput } from "./commands/StartConnectionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateOutpostCommandInput, UpdateOutpostCommandOutput } from "./commands/UpdateOutpostCommand";
import { UpdateSiteAddressCommandInput, UpdateSiteAddressCommandOutput } from "./commands/UpdateSiteAddressCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateSiteRackPhysicalPropertiesCommandInput,
  UpdateSiteRackPhysicalPropertiesCommandOutput,
} from "./commands/UpdateSiteRackPhysicalPropertiesCommand";
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
  | CancelCapacityTaskCommandInput
  | CancelOrderCommandInput
  | CreateOrderCommandInput
  | CreateOutpostCommandInput
  | CreateSiteCommandInput
  | DeleteOutpostCommandInput
  | DeleteSiteCommandInput
  | GetCapacityTaskCommandInput
  | GetCatalogItemCommandInput
  | GetConnectionCommandInput
  | GetOrderCommandInput
  | GetOutpostBillingInformationCommandInput
  | GetOutpostCommandInput
  | GetOutpostInstanceTypesCommandInput
  | GetOutpostSupportedInstanceTypesCommandInput
  | GetSiteAddressCommandInput
  | GetSiteCommandInput
  | ListAssetInstancesCommandInput
  | ListAssetsCommandInput
  | ListBlockingInstancesForCapacityTaskCommandInput
  | ListCapacityTasksCommandInput
  | ListCatalogItemsCommandInput
  | ListOrdersCommandInput
  | ListOutpostsCommandInput
  | ListSitesCommandInput
  | ListTagsForResourceCommandInput
  | StartCapacityTaskCommandInput
  | StartConnectionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateOutpostCommandInput
  | UpdateSiteAddressCommandInput
  | UpdateSiteCommandInput
  | UpdateSiteRackPhysicalPropertiesCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelCapacityTaskCommandOutput
  | CancelOrderCommandOutput
  | CreateOrderCommandOutput
  | CreateOutpostCommandOutput
  | CreateSiteCommandOutput
  | DeleteOutpostCommandOutput
  | DeleteSiteCommandOutput
  | GetCapacityTaskCommandOutput
  | GetCatalogItemCommandOutput
  | GetConnectionCommandOutput
  | GetOrderCommandOutput
  | GetOutpostBillingInformationCommandOutput
  | GetOutpostCommandOutput
  | GetOutpostInstanceTypesCommandOutput
  | GetOutpostSupportedInstanceTypesCommandOutput
  | GetSiteAddressCommandOutput
  | GetSiteCommandOutput
  | ListAssetInstancesCommandOutput
  | ListAssetsCommandOutput
  | ListBlockingInstancesForCapacityTaskCommandOutput
  | ListCapacityTasksCommandOutput
  | ListCatalogItemsCommandOutput
  | ListOrdersCommandOutput
  | ListOutpostsCommandOutput
  | ListSitesCommandOutput
  | ListTagsForResourceCommandOutput
  | StartCapacityTaskCommandOutput
  | StartConnectionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateOutpostCommandOutput
  | UpdateSiteAddressCommandOutput
  | UpdateSiteCommandOutput
  | UpdateSiteRackPhysicalPropertiesCommandOutput;

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
}

/**
 * @public
 */
export type OutpostsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of OutpostsClient class constructor that set the region, credentials and other options.
 */
export interface OutpostsClientConfig extends OutpostsClientConfigType {}

/**
 * @public
 */
export type OutpostsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of OutpostsClient class. This is resolved and normalized from the {@link OutpostsClientConfig | constructor configuration interface}.
 */
export interface OutpostsClientResolvedConfig extends OutpostsClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to
 *       customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables
 *       customers to build and run applications on premises using the same programming interfaces as
 *       in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local
 *       data processing needs.</p>
 * @public
 */
export class OutpostsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OutpostsClientResolvedConfig
> {
  /**
   * The resolved configuration of OutpostsClient class. This is resolved and normalized from the {@link OutpostsClientConfig | constructor configuration interface}.
   */
  readonly config: OutpostsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<OutpostsClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultOutpostsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OutpostsClientResolvedConfig) =>
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
