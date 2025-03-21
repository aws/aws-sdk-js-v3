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
  defaultAppIntegrationsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateDataIntegrationAssociationCommandInput,
  CreateDataIntegrationAssociationCommandOutput,
} from "./commands/CreateDataIntegrationAssociationCommand";
import {
  CreateDataIntegrationCommandInput,
  CreateDataIntegrationCommandOutput,
} from "./commands/CreateDataIntegrationCommand";
import {
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "./commands/CreateEventIntegrationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteDataIntegrationCommandInput,
  DeleteDataIntegrationCommandOutput,
} from "./commands/DeleteDataIntegrationCommand";
import {
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "./commands/DeleteEventIntegrationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetDataIntegrationCommandInput, GetDataIntegrationCommandOutput } from "./commands/GetDataIntegrationCommand";
import {
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "./commands/GetEventIntegrationCommand";
import {
  ListApplicationAssociationsCommandInput,
  ListApplicationAssociationsCommandOutput,
} from "./commands/ListApplicationAssociationsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "./commands/ListDataIntegrationAssociationsCommand";
import {
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput,
} from "./commands/ListDataIntegrationsCommand";
import {
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "./commands/ListEventIntegrationAssociationsCommand";
import {
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "./commands/ListEventIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateDataIntegrationAssociationCommandInput,
  UpdateDataIntegrationAssociationCommandOutput,
} from "./commands/UpdateDataIntegrationAssociationCommand";
import {
  UpdateDataIntegrationCommandInput,
  UpdateDataIntegrationCommandOutput,
} from "./commands/UpdateDataIntegrationCommand";
import {
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "./commands/UpdateEventIntegrationCommand";
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
  | CreateApplicationCommandInput
  | CreateDataIntegrationAssociationCommandInput
  | CreateDataIntegrationCommandInput
  | CreateEventIntegrationCommandInput
  | DeleteApplicationCommandInput
  | DeleteDataIntegrationCommandInput
  | DeleteEventIntegrationCommandInput
  | GetApplicationCommandInput
  | GetDataIntegrationCommandInput
  | GetEventIntegrationCommandInput
  | ListApplicationAssociationsCommandInput
  | ListApplicationsCommandInput
  | ListDataIntegrationAssociationsCommandInput
  | ListDataIntegrationsCommandInput
  | ListEventIntegrationAssociationsCommandInput
  | ListEventIntegrationsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateDataIntegrationAssociationCommandInput
  | UpdateDataIntegrationCommandInput
  | UpdateEventIntegrationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateApplicationCommandOutput
  | CreateDataIntegrationAssociationCommandOutput
  | CreateDataIntegrationCommandOutput
  | CreateEventIntegrationCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDataIntegrationCommandOutput
  | DeleteEventIntegrationCommandOutput
  | GetApplicationCommandOutput
  | GetDataIntegrationCommandOutput
  | GetEventIntegrationCommandOutput
  | ListApplicationAssociationsCommandOutput
  | ListApplicationsCommandOutput
  | ListDataIntegrationAssociationsCommandOutput
  | ListDataIntegrationsCommandOutput
  | ListEventIntegrationAssociationsCommandOutput
  | ListEventIntegrationsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDataIntegrationAssociationCommandOutput
  | UpdateDataIntegrationCommandOutput
  | UpdateEventIntegrationCommandOutput;

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
export type AppIntegrationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppIntegrationsClient class constructor that set the region, credentials and other options.
 */
export interface AppIntegrationsClientConfig extends AppIntegrationsClientConfigType {}

/**
 * @public
 */
export type AppIntegrationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppIntegrationsClient class. This is resolved and normalized from the {@link AppIntegrationsClientConfig | constructor configuration interface}.
 */
export interface AppIntegrationsClientResolvedConfig extends AppIntegrationsClientResolvedConfigType {}

/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_AppIntegrations_Service.html">Amazon AppIntegrations
 *             actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_AppIntegrations_Service.html">Amazon AppIntegrations
 *             data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external
 *       applications.</p>
 *          <p>For information about how you can use external applications with Amazon Connect, see
 *       the following topics in the <i>Amazon Connect Administrator
 *       Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/3p-apps.html">Third-party
 *             applications (3p apps) in the agent workspace</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use
 *             Amazon Q in Connect for generative AI–powered agent assistance in
 *           real-time</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class AppIntegrationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppIntegrationsClientResolvedConfig
> {
  /**
   * The resolved configuration of AppIntegrationsClient class. This is resolved and normalized from the {@link AppIntegrationsClientConfig | constructor configuration interface}.
   */
  readonly config: AppIntegrationsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppIntegrationsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultAppIntegrationsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppIntegrationsClientResolvedConfig) =>
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
