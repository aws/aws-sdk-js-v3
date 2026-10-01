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
  defaultEndUserMessagingHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateBrandProfileAttributesCommandInput,
  CreateBrandProfileAttributesCommandOutput,
} from "./commands/CreateBrandProfileAttributesCommand";
import type {
  CreateBrandProfileCommandInput,
  CreateBrandProfileCommandOutput,
} from "./commands/CreateBrandProfileCommand";
import type {
  CreateBrandProfileFromRegistrationCommandInput,
  CreateBrandProfileFromRegistrationCommandOutput,
} from "./commands/CreateBrandProfileFromRegistrationCommand";
import type {
  CreateNotifyCodeConfigurationCommandInput,
  CreateNotifyCodeConfigurationCommandOutput,
} from "./commands/CreateNotifyCodeConfigurationCommand";
import type {
  CreateRegistrationsFromBrandProfileCommandInput,
  CreateRegistrationsFromBrandProfileCommandOutput,
} from "./commands/CreateRegistrationsFromBrandProfileCommand";
import type {
  DeleteBrandProfileAttributeCommandInput,
  DeleteBrandProfileAttributeCommandOutput,
} from "./commands/DeleteBrandProfileAttributeCommand";
import type {
  DeleteBrandProfileCommandInput,
  DeleteBrandProfileCommandOutput,
} from "./commands/DeleteBrandProfileCommand";
import type {
  DeleteNotifyCodeConfigurationCommandInput,
  DeleteNotifyCodeConfigurationCommandOutput,
} from "./commands/DeleteNotifyCodeConfigurationCommand";
import type {
  GetBrandProfileAttributeCommandInput,
  GetBrandProfileAttributeCommandOutput,
} from "./commands/GetBrandProfileAttributeCommand";
import type { GetBrandProfileCommandInput, GetBrandProfileCommandOutput } from "./commands/GetBrandProfileCommand";
import type { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import type {
  GetNotifyCodeConfigurationCommandInput,
  GetNotifyCodeConfigurationCommandOutput,
} from "./commands/GetNotifyCodeConfigurationCommand";
import type {
  ListBrandProfileAttributesCommandInput,
  ListBrandProfileAttributesCommandOutput,
} from "./commands/ListBrandProfileAttributesCommand";
import type {
  ListBrandProfilesCommandInput,
  ListBrandProfilesCommandOutput,
} from "./commands/ListBrandProfilesCommand";
import type { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import type {
  ListNotifyCodeConfigurationsCommandInput,
  ListNotifyCodeConfigurationsCommandOutput,
} from "./commands/ListNotifyCodeConfigurationsCommand";
import type {
  ListRegistrationsFromBrandProfileCommandInput,
  ListRegistrationsFromBrandProfileCommandOutput,
} from "./commands/ListRegistrationsFromBrandProfileCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  SendNotifyCodeVerificationCommandInput,
  SendNotifyCodeVerificationCommandOutput,
} from "./commands/SendNotifyCodeVerificationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateBrandProfileAttributeCommandInput,
  UpdateBrandProfileAttributeCommandOutput,
} from "./commands/UpdateBrandProfileAttributeCommand";
import type {
  UpdateBrandProfileCommandInput,
  UpdateBrandProfileCommandOutput,
} from "./commands/UpdateBrandProfileCommand";
import type {
  UpdateBrandProfileFromRegistrationCommandInput,
  UpdateBrandProfileFromRegistrationCommandOutput,
} from "./commands/UpdateBrandProfileFromRegistrationCommand";
import type {
  UpdateNotifyCodeConfigurationCommandInput,
  UpdateNotifyCodeConfigurationCommandOutput,
} from "./commands/UpdateNotifyCodeConfigurationCommand";
import type {
  UpdateRegistrationsFromBrandProfileCommandInput,
  UpdateRegistrationsFromBrandProfileCommandOutput,
} from "./commands/UpdateRegistrationsFromBrandProfileCommand";
import type {
  ValidateNotifyCodeVerificationCommandInput,
  ValidateNotifyCodeVerificationCommandOutput,
} from "./commands/ValidateNotifyCodeVerificationCommand";
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
  | CreateBrandProfileAttributesCommandInput
  | CreateBrandProfileCommandInput
  | CreateBrandProfileFromRegistrationCommandInput
  | CreateNotifyCodeConfigurationCommandInput
  | CreateRegistrationsFromBrandProfileCommandInput
  | DeleteBrandProfileAttributeCommandInput
  | DeleteBrandProfileCommandInput
  | DeleteNotifyCodeConfigurationCommandInput
  | GetBrandProfileAttributeCommandInput
  | GetBrandProfileCommandInput
  | GetJobCommandInput
  | GetNotifyCodeConfigurationCommandInput
  | ListBrandProfileAttributesCommandInput
  | ListBrandProfilesCommandInput
  | ListJobsCommandInput
  | ListNotifyCodeConfigurationsCommandInput
  | ListRegistrationsFromBrandProfileCommandInput
  | ListTagsForResourceCommandInput
  | SendNotifyCodeVerificationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBrandProfileAttributeCommandInput
  | UpdateBrandProfileCommandInput
  | UpdateBrandProfileFromRegistrationCommandInput
  | UpdateNotifyCodeConfigurationCommandInput
  | UpdateRegistrationsFromBrandProfileCommandInput
  | ValidateNotifyCodeVerificationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateBrandProfileAttributesCommandOutput
  | CreateBrandProfileCommandOutput
  | CreateBrandProfileFromRegistrationCommandOutput
  | CreateNotifyCodeConfigurationCommandOutput
  | CreateRegistrationsFromBrandProfileCommandOutput
  | DeleteBrandProfileAttributeCommandOutput
  | DeleteBrandProfileCommandOutput
  | DeleteNotifyCodeConfigurationCommandOutput
  | GetBrandProfileAttributeCommandOutput
  | GetBrandProfileCommandOutput
  | GetJobCommandOutput
  | GetNotifyCodeConfigurationCommandOutput
  | ListBrandProfileAttributesCommandOutput
  | ListBrandProfilesCommandOutput
  | ListJobsCommandOutput
  | ListNotifyCodeConfigurationsCommandOutput
  | ListRegistrationsFromBrandProfileCommandOutput
  | ListTagsForResourceCommandOutput
  | SendNotifyCodeVerificationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBrandProfileAttributeCommandOutput
  | UpdateBrandProfileCommandOutput
  | UpdateBrandProfileFromRegistrationCommandOutput
  | UpdateNotifyCodeConfigurationCommandOutput
  | UpdateRegistrationsFromBrandProfileCommandOutput
  | ValidateNotifyCodeVerificationCommandOutput;

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
export type EndUserMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EndUserMessagingClient class constructor that set the region, credentials and other options.
 */
export interface EndUserMessagingClientConfig extends EndUserMessagingClientConfigType {}

/**
 * @public
 */
export type EndUserMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EndUserMessagingClient class. This is resolved and normalized from the {@link EndUserMessagingClientConfig | constructor configuration interface}.
 */
export interface EndUserMessagingClientResolvedConfig extends EndUserMessagingClientResolvedConfigType {}

/**
 * <p>AWS End User Messaging provides a set of APIs to manage brand profiles, synchronize brand profile data with SMS and Rich Communication Services (RCS) registrations, and send and validate one-time passcodes across the SMS, voice, and WhatsApp channels.</p>
 * @public
 */
export class EndUserMessagingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EndUserMessagingClientResolvedConfig
> {
  /**
   * The resolved configuration of EndUserMessagingClient class. This is resolved and normalized from the {@link EndUserMessagingClientConfig | constructor configuration interface}.
   */
  readonly config: EndUserMessagingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EndUserMessagingClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEndUserMessagingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EndUserMessagingClientResolvedConfig) =>
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
