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
  defaultAppConfigDataHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
} from "./commands/GetLatestConfigurationCommand";
import {
  StartConfigurationSessionCommandInput,
  StartConfigurationSessionCommandOutput,
} from "./commands/StartConfigurationSessionCommand";
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
  | GetLatestConfigurationCommandInput
  | StartConfigurationSessionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | GetLatestConfigurationCommandOutput
  | StartConfigurationSessionCommandOutput;

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
export type AppConfigDataClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppConfigDataClient class constructor that set the region, credentials and other options.
 */
export interface AppConfigDataClientConfig extends AppConfigDataClientConfigType {}

/**
 * @public
 */
export type AppConfigDataClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppConfigDataClient class. This is resolved and normalized from the {@link AppConfigDataClientConfig | constructor configuration interface}.
 */
export interface AppConfigDataClientResolvedConfig extends AppConfigDataClientResolvedConfigType {}

/**
 * <p>AppConfig Data provides the data plane APIs your application uses to retrieve
 *          configuration data. Here's how it works:</p>
 *          <p>Your application retrieves configuration data by first establishing a configuration
 *          session using the AppConfig Data <a>StartConfigurationSession</a> API action.
 *          Your session's client then makes periodic calls to <a>GetLatestConfiguration</a>
 *          to check for and retrieve the latest data available.</p>
 *          <p>When calling <code>StartConfigurationSession</code>, your code sends the following
 *          information:</p>
 *          <ul>
 *             <li>
 *                <p>Identifiers (ID or name) of an AppConfig application, environment, and
 *                configuration profile that the session tracks.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) The minimum amount of time the session's client must wait between calls
 *                to <code>GetLatestConfiguration</code>.</p>
 *             </li>
 *          </ul>
 *          <p>In response, AppConfig provides an <code>InitialConfigurationToken</code> to be given to
 *          the session's client and used the first time it calls <code>GetLatestConfiguration</code>
 *          for that session.</p>
 *          <important>
 *             <p>This token should only be used once in your first call to
 *                <code>GetLatestConfiguration</code>. You <i>must</i> use the new token
 *             in the <code>GetLatestConfiguration</code> response
 *                (<code>NextPollConfigurationToken</code>) in each subsequent call to
 *                <code>GetLatestConfiguration</code>.</p>
 *          </important>
 *          <p>When calling <code>GetLatestConfiguration</code>, your client code sends the most recent
 *             <code>ConfigurationToken</code> value it has and receives in response:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>NextPollConfigurationToken</code>: the <code>ConfigurationToken</code> value
 *                to use on the next call to <code>GetLatestConfiguration</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NextPollIntervalInSeconds</code>: the duration the client should wait before
 *                making its next call to <code>GetLatestConfiguration</code>. This duration may vary
 *                over the course of the session, so it should be used instead of the value sent on the
 *                   <code>StartConfigurationSession</code> call.</p>
 *             </li>
 *             <li>
 *                <p>The configuration: the latest data intended for the session. This may be empty if
 *                the client already has the latest version of the configuration.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>The <code>InitialConfigurationToken</code> and
 *             <code>NextPollConfigurationToken</code> should only be used once. To support long poll
 *             use cases, the tokens are valid for up to 24 hours. If a
 *             <code>GetLatestConfiguration</code> call uses an expired token, the system returns
 *             <code>BadRequestException</code>.</p>
 *          </important>
 *          <p>For more information and to view example CLI commands that show how to retrieve a
 *          configuration using the AppConfig Data <code>StartConfigurationSession</code> and
 *             <code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>.</p>
 * @public
 */
export class AppConfigDataClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppConfigDataClientResolvedConfig
> {
  /**
   * The resolved configuration of AppConfigDataClient class. This is resolved and normalized from the {@link AppConfigDataClientConfig | constructor configuration interface}.
   */
  readonly config: AppConfigDataClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppConfigDataClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAppConfigDataHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppConfigDataClientResolvedConfig) =>
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
