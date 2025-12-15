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
  defaultSocialMessagingHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateWhatsAppBusinessAccountCommandInput,
  AssociateWhatsAppBusinessAccountCommandOutput,
} from "./commands/AssociateWhatsAppBusinessAccountCommand";
import {
  CreateWhatsAppMessageTemplateCommandInput,
  CreateWhatsAppMessageTemplateCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateCommand";
import {
  CreateWhatsAppMessageTemplateFromLibraryCommandInput,
  CreateWhatsAppMessageTemplateFromLibraryCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateFromLibraryCommand";
import {
  CreateWhatsAppMessageTemplateMediaCommandInput,
  CreateWhatsAppMessageTemplateMediaCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateMediaCommand";
import {
  DeleteWhatsAppMessageMediaCommandInput,
  DeleteWhatsAppMessageMediaCommandOutput,
} from "./commands/DeleteWhatsAppMessageMediaCommand";
import {
  DeleteWhatsAppMessageTemplateCommandInput,
  DeleteWhatsAppMessageTemplateCommandOutput,
} from "./commands/DeleteWhatsAppMessageTemplateCommand";
import {
  DisassociateWhatsAppBusinessAccountCommandInput,
  DisassociateWhatsAppBusinessAccountCommandOutput,
} from "./commands/DisassociateWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountCommandInput,
  GetLinkedWhatsAppBusinessAccountCommandOutput,
} from "./commands/GetLinkedWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
} from "./commands/GetLinkedWhatsAppBusinessAccountPhoneNumberCommand";
import {
  GetWhatsAppMessageMediaCommandInput,
  GetWhatsAppMessageMediaCommandOutput,
} from "./commands/GetWhatsAppMessageMediaCommand";
import {
  GetWhatsAppMessageTemplateCommandInput,
  GetWhatsAppMessageTemplateCommandOutput,
} from "./commands/GetWhatsAppMessageTemplateCommand";
import {
  ListLinkedWhatsAppBusinessAccountsCommandInput,
  ListLinkedWhatsAppBusinessAccountsCommandOutput,
} from "./commands/ListLinkedWhatsAppBusinessAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWhatsAppMessageTemplatesCommandInput,
  ListWhatsAppMessageTemplatesCommandOutput,
} from "./commands/ListWhatsAppMessageTemplatesCommand";
import {
  ListWhatsAppTemplateLibraryCommandInput,
  ListWhatsAppTemplateLibraryCommandOutput,
} from "./commands/ListWhatsAppTemplateLibraryCommand";
import {
  PostWhatsAppMessageMediaCommandInput,
  PostWhatsAppMessageMediaCommandOutput,
} from "./commands/PostWhatsAppMessageMediaCommand";
import {
  PutWhatsAppBusinessAccountEventDestinationsCommandInput,
  PutWhatsAppBusinessAccountEventDestinationsCommandOutput,
} from "./commands/PutWhatsAppBusinessAccountEventDestinationsCommand";
import {
  SendWhatsAppMessageCommandInput,
  SendWhatsAppMessageCommandOutput,
} from "./commands/SendWhatsAppMessageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateWhatsAppMessageTemplateCommandInput,
  UpdateWhatsAppMessageTemplateCommandOutput,
} from "./commands/UpdateWhatsAppMessageTemplateCommand";
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
  | AssociateWhatsAppBusinessAccountCommandInput
  | CreateWhatsAppMessageTemplateCommandInput
  | CreateWhatsAppMessageTemplateFromLibraryCommandInput
  | CreateWhatsAppMessageTemplateMediaCommandInput
  | DeleteWhatsAppMessageMediaCommandInput
  | DeleteWhatsAppMessageTemplateCommandInput
  | DisassociateWhatsAppBusinessAccountCommandInput
  | GetLinkedWhatsAppBusinessAccountCommandInput
  | GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput
  | GetWhatsAppMessageMediaCommandInput
  | GetWhatsAppMessageTemplateCommandInput
  | ListLinkedWhatsAppBusinessAccountsCommandInput
  | ListTagsForResourceCommandInput
  | ListWhatsAppMessageTemplatesCommandInput
  | ListWhatsAppTemplateLibraryCommandInput
  | PostWhatsAppMessageMediaCommandInput
  | PutWhatsAppBusinessAccountEventDestinationsCommandInput
  | SendWhatsAppMessageCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateWhatsAppMessageTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateWhatsAppBusinessAccountCommandOutput
  | CreateWhatsAppMessageTemplateCommandOutput
  | CreateWhatsAppMessageTemplateFromLibraryCommandOutput
  | CreateWhatsAppMessageTemplateMediaCommandOutput
  | DeleteWhatsAppMessageMediaCommandOutput
  | DeleteWhatsAppMessageTemplateCommandOutput
  | DisassociateWhatsAppBusinessAccountCommandOutput
  | GetLinkedWhatsAppBusinessAccountCommandOutput
  | GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput
  | GetWhatsAppMessageMediaCommandOutput
  | GetWhatsAppMessageTemplateCommandOutput
  | ListLinkedWhatsAppBusinessAccountsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWhatsAppMessageTemplatesCommandOutput
  | ListWhatsAppTemplateLibraryCommandOutput
  | PostWhatsAppMessageMediaCommandOutput
  | PutWhatsAppBusinessAccountEventDestinationsCommandOutput
  | SendWhatsAppMessageCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateWhatsAppMessageTemplateCommandOutput;

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
export type SocialMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SocialMessagingClient class constructor that set the region, credentials and other options.
 */
export interface SocialMessagingClientConfig extends SocialMessagingClientConfigType {}

/**
 * @public
 */
export type SocialMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SocialMessagingClient class. This is resolved and normalized from the {@link SocialMessagingClientConfig | constructor configuration interface}.
 */
export interface SocialMessagingClientResolvedConfig extends SocialMessagingClientResolvedConfigType {}

/**
 * <p>
 *             <i>Amazon Web Services End User Messaging Social</i>, also referred to as Social messaging, is a messaging service that enables
 *          application developers to incorporate WhatsApp into their existing workflows. The <i>Amazon Web Services End User Messaging Social API</i> provides information about the
 *          <i>Amazon Web Services End User Messaging Social API</i> resources, including supported HTTP methods, parameters, and schemas.</p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> provides programmatic access to options that are unique to the WhatsApp Business Platform.</p>
 *          <p>If you're new to the <i>Amazon Web Services End User Messaging Social API</i>, it's also helpful to review <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">What is
 *                Amazon Web Services End User Messaging Social</a> in the <i>Amazon Web Services End User Messaging Social User Guide</i>. The
 *          <i>Amazon Web Services End User Messaging Social User Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use
 *          <i>Amazon Web Services End User Messaging Social API</i> features programmatically and how to integrate functionality into applications.
 *          The guide also provides key information, such as integration with other Amazon Web Services
 *          services, and the quotas that apply to use of the service.</p>
 *          <p>
 *             <b>Regional availability</b>
 *          </p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of
 *          all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">Amazon Web Services End User Messaging endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
 *                Amazon Web Services Regions</a> in the Amazon Web Services General
 *          Reference.</p>
 *          <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
 *          Availability Zones are physically isolated from each other, but are united by private,
 *          low-latency, high-throughput, and highly redundant network connections. These Availability
 *          Zones enable us to provide very high levels of availability and redundancy, while also
 *          minimizing latency. To learn more about the number of Availability Zones that are available
 *          in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a>
 *          </p>
 * @public
 */
export class SocialMessagingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig
> {
  /**
   * The resolved configuration of SocialMessagingClient class. This is resolved and normalized from the {@link SocialMessagingClientConfig | constructor configuration interface}.
   */
  readonly config: SocialMessagingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SocialMessagingClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultSocialMessagingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SocialMessagingClientResolvedConfig) =>
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
