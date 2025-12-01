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
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
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
  defaultGreengrassV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "./commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "./commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "./commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "./commands/CreateComponentVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "./commands/DeleteCoreDeviceCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "./commands/DescribeComponentCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "./commands/GetComponentVersionArtifactCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "./commands/GetCoreDeviceCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "./commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import {
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "./commands/ListComponentVersionsCommand";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "./commands/ListCoreDevicesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "./commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "./commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "./commands/ResolveComponentCandidatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
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
  | AssociateServiceRoleToAccountCommandInput
  | BatchAssociateClientDeviceWithCoreDeviceCommandInput
  | BatchDisassociateClientDeviceFromCoreDeviceCommandInput
  | CancelDeploymentCommandInput
  | CreateComponentVersionCommandInput
  | CreateDeploymentCommandInput
  | DeleteComponentCommandInput
  | DeleteCoreDeviceCommandInput
  | DeleteDeploymentCommandInput
  | DescribeComponentCommandInput
  | DisassociateServiceRoleFromAccountCommandInput
  | GetComponentCommandInput
  | GetComponentVersionArtifactCommandInput
  | GetConnectivityInfoCommandInput
  | GetCoreDeviceCommandInput
  | GetDeploymentCommandInput
  | GetServiceRoleForAccountCommandInput
  | ListClientDevicesAssociatedWithCoreDeviceCommandInput
  | ListComponentVersionsCommandInput
  | ListComponentsCommandInput
  | ListCoreDevicesCommandInput
  | ListDeploymentsCommandInput
  | ListEffectiveDeploymentsCommandInput
  | ListInstalledComponentsCommandInput
  | ListTagsForResourceCommandInput
  | ResolveComponentCandidatesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectivityInfoCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateServiceRoleToAccountCommandOutput
  | BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  | BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  | CancelDeploymentCommandOutput
  | CreateComponentVersionCommandOutput
  | CreateDeploymentCommandOutput
  | DeleteComponentCommandOutput
  | DeleteCoreDeviceCommandOutput
  | DeleteDeploymentCommandOutput
  | DescribeComponentCommandOutput
  | DisassociateServiceRoleFromAccountCommandOutput
  | GetComponentCommandOutput
  | GetComponentVersionArtifactCommandOutput
  | GetConnectivityInfoCommandOutput
  | GetCoreDeviceCommandOutput
  | GetDeploymentCommandOutput
  | GetServiceRoleForAccountCommandOutput
  | ListClientDevicesAssociatedWithCoreDeviceCommandOutput
  | ListComponentVersionsCommandOutput
  | ListComponentsCommandOutput
  | ListCoreDevicesCommandOutput
  | ListDeploymentsCommandOutput
  | ListEffectiveDeploymentsCommandOutput
  | ListInstalledComponentsCommandOutput
  | ListTagsForResourceCommandOutput
  | ResolveComponentCandidatesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectivityInfoCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type GreengrassV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of GreengrassV2Client class constructor that set the region, credentials and other options.
 */
export interface GreengrassV2ClientConfig extends GreengrassV2ClientConfigType {}

/**
 * @public
 */
export type GreengrassV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of GreengrassV2Client class. This is resolved and normalized from the {@link GreengrassV2ClientConfig | constructor configuration interface}.
 */
export interface GreengrassV2ClientResolvedConfig extends GreengrassV2ClientResolvedConfigType {}

/**
 * <p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data
 *       to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the
 *         <i>IoT Greengrass V2 Developer Guide</i>.</p>
 * @public
 */
export class GreengrassV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GreengrassV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of GreengrassV2Client class. This is resolved and normalized from the {@link GreengrassV2ClientConfig | constructor configuration interface}.
   */
  readonly config: GreengrassV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GreengrassV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultGreengrassV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GreengrassV2ClientResolvedConfig) =>
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
