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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultPartnerCentralRevenueMeasurementHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateMarketplaceRevenueShareAllocationCommandInput,
  CreateMarketplaceRevenueShareAllocationCommandOutput,
} from "./commands/CreateMarketplaceRevenueShareAllocationCommand";
import type {
  CreateMarketplaceRevenueShareCommandInput,
  CreateMarketplaceRevenueShareCommandOutput,
} from "./commands/CreateMarketplaceRevenueShareCommand";
import type {
  CreateRevenueAttributionCommandInput,
  CreateRevenueAttributionCommandOutput,
} from "./commands/CreateRevenueAttributionCommand";
import type {
  GetMarketplaceRevenueShareAllocationCommandInput,
  GetMarketplaceRevenueShareAllocationCommandOutput,
} from "./commands/GetMarketplaceRevenueShareAllocationCommand";
import type {
  GetMarketplaceRevenueShareCommandInput,
  GetMarketplaceRevenueShareCommandOutput,
} from "./commands/GetMarketplaceRevenueShareCommand";
import type {
  GetRevenueAttributionAllocationCommandInput,
  GetRevenueAttributionAllocationCommandOutput,
} from "./commands/GetRevenueAttributionAllocationCommand";
import type {
  GetRevenueAttributionAllocationsTaskCommandInput,
  GetRevenueAttributionAllocationsTaskCommandOutput,
} from "./commands/GetRevenueAttributionAllocationsTaskCommand";
import type {
  GetRevenueAttributionCommandInput,
  GetRevenueAttributionCommandOutput,
} from "./commands/GetRevenueAttributionCommand";
import type {
  ListMarketplaceRevenueShareAllocationsCommandInput,
  ListMarketplaceRevenueShareAllocationsCommandOutput,
} from "./commands/ListMarketplaceRevenueShareAllocationsCommand";
import type {
  ListMarketplaceRevenueSharesCommandInput,
  ListMarketplaceRevenueSharesCommandOutput,
} from "./commands/ListMarketplaceRevenueSharesCommand";
import type {
  ListRevenueAttributionAllocationsCommandInput,
  ListRevenueAttributionAllocationsCommandOutput,
} from "./commands/ListRevenueAttributionAllocationsCommand";
import type {
  ListRevenueAttributionsCommandInput,
  ListRevenueAttributionsCommandOutput,
} from "./commands/ListRevenueAttributionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  StartRevenueAttributionAllocationsTaskCommandInput,
  StartRevenueAttributionAllocationsTaskCommandOutput,
} from "./commands/StartRevenueAttributionAllocationsTaskCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateMarketplaceRevenueShareAllocationCommandInput,
  UpdateMarketplaceRevenueShareAllocationCommandOutput,
} from "./commands/UpdateMarketplaceRevenueShareAllocationCommand";
import type {
  UpdateRevenueAttributionCommandInput,
  UpdateRevenueAttributionCommandOutput,
} from "./commands/UpdateRevenueAttributionCommand";
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
  | CreateMarketplaceRevenueShareAllocationCommandInput
  | CreateMarketplaceRevenueShareCommandInput
  | CreateRevenueAttributionCommandInput
  | GetMarketplaceRevenueShareAllocationCommandInput
  | GetMarketplaceRevenueShareCommandInput
  | GetRevenueAttributionAllocationCommandInput
  | GetRevenueAttributionAllocationsTaskCommandInput
  | GetRevenueAttributionCommandInput
  | ListMarketplaceRevenueShareAllocationsCommandInput
  | ListMarketplaceRevenueSharesCommandInput
  | ListRevenueAttributionAllocationsCommandInput
  | ListRevenueAttributionsCommandInput
  | ListTagsForResourceCommandInput
  | StartRevenueAttributionAllocationsTaskCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMarketplaceRevenueShareAllocationCommandInput
  | UpdateRevenueAttributionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateMarketplaceRevenueShareAllocationCommandOutput
  | CreateMarketplaceRevenueShareCommandOutput
  | CreateRevenueAttributionCommandOutput
  | GetMarketplaceRevenueShareAllocationCommandOutput
  | GetMarketplaceRevenueShareCommandOutput
  | GetRevenueAttributionAllocationCommandOutput
  | GetRevenueAttributionAllocationsTaskCommandOutput
  | GetRevenueAttributionCommandOutput
  | ListMarketplaceRevenueShareAllocationsCommandOutput
  | ListMarketplaceRevenueSharesCommandOutput
  | ListRevenueAttributionAllocationsCommandOutput
  | ListRevenueAttributionsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartRevenueAttributionAllocationsTaskCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMarketplaceRevenueShareAllocationCommandOutput
  | UpdateRevenueAttributionCommandOutput;

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
export type PartnerCentralRevenueMeasurementClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of PartnerCentralRevenueMeasurementClient class constructor that set the region, credentials and other options.
 */
export interface PartnerCentralRevenueMeasurementClientConfig extends PartnerCentralRevenueMeasurementClientConfigType {}

/**
 * @public
 */
export type PartnerCentralRevenueMeasurementClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of PartnerCentralRevenueMeasurementClient class. This is resolved and normalized from the {@link PartnerCentralRevenueMeasurementClientConfig | constructor configuration interface}.
 */
export interface PartnerCentralRevenueMeasurementClientResolvedConfig extends PartnerCentralRevenueMeasurementClientResolvedConfigType {}

/**
 * <p>AWS Partner Central Revenue Measurement API for creating, managing, and tracking revenue attributions and their allocations with deal entities such as offers and opportunities.</p>
 * @public
 */
export class PartnerCentralRevenueMeasurementClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PartnerCentralRevenueMeasurementClientResolvedConfig
> {
  /**
   * The resolved configuration of PartnerCentralRevenueMeasurementClient class. This is resolved and normalized from the {@link PartnerCentralRevenueMeasurementClientConfig | constructor configuration interface}.
   */
  readonly config: PartnerCentralRevenueMeasurementClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PartnerCentralRevenueMeasurementClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultPartnerCentralRevenueMeasurementHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: PartnerCentralRevenueMeasurementClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials,
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
