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
  defaultServiceDiscoveryHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
} from "./commands/CreateHttpNamespaceCommand";
import {
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
} from "./commands/CreatePrivateDnsNamespaceCommand";
import {
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
} from "./commands/CreatePublicDnsNamespaceCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteServiceAttributesCommandInput,
  DeleteServiceAttributesCommandOutput,
} from "./commands/DeleteServiceAttributesCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand";
import { DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput } from "./commands/DiscoverInstancesCommand";
import {
  DiscoverInstancesRevisionCommandInput,
  DiscoverInstancesRevisionCommandOutput,
} from "./commands/DiscoverInstancesRevisionCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import {
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "./commands/GetInstancesHealthStatusCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import {
  GetServiceAttributesCommandInput,
  GetServiceAttributesCommandOutput,
} from "./commands/GetServiceAttributesCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
} from "./commands/UpdateHttpNamespaceCommand";
import {
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
} from "./commands/UpdateInstanceCustomHealthStatusCommand";
import {
  UpdatePrivateDnsNamespaceCommandInput,
  UpdatePrivateDnsNamespaceCommandOutput,
} from "./commands/UpdatePrivateDnsNamespaceCommand";
import {
  UpdatePublicDnsNamespaceCommandInput,
  UpdatePublicDnsNamespaceCommandOutput,
} from "./commands/UpdatePublicDnsNamespaceCommand";
import {
  UpdateServiceAttributesCommandInput,
  UpdateServiceAttributesCommandOutput,
} from "./commands/UpdateServiceAttributesCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
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
  | CreateHttpNamespaceCommandInput
  | CreatePrivateDnsNamespaceCommandInput
  | CreatePublicDnsNamespaceCommandInput
  | CreateServiceCommandInput
  | DeleteNamespaceCommandInput
  | DeleteServiceAttributesCommandInput
  | DeleteServiceCommandInput
  | DeregisterInstanceCommandInput
  | DiscoverInstancesCommandInput
  | DiscoverInstancesRevisionCommandInput
  | GetInstanceCommandInput
  | GetInstancesHealthStatusCommandInput
  | GetNamespaceCommandInput
  | GetOperationCommandInput
  | GetServiceAttributesCommandInput
  | GetServiceCommandInput
  | ListInstancesCommandInput
  | ListNamespacesCommandInput
  | ListOperationsCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | RegisterInstanceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateHttpNamespaceCommandInput
  | UpdateInstanceCustomHealthStatusCommandInput
  | UpdatePrivateDnsNamespaceCommandInput
  | UpdatePublicDnsNamespaceCommandInput
  | UpdateServiceAttributesCommandInput
  | UpdateServiceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateHttpNamespaceCommandOutput
  | CreatePrivateDnsNamespaceCommandOutput
  | CreatePublicDnsNamespaceCommandOutput
  | CreateServiceCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteServiceAttributesCommandOutput
  | DeleteServiceCommandOutput
  | DeregisterInstanceCommandOutput
  | DiscoverInstancesCommandOutput
  | DiscoverInstancesRevisionCommandOutput
  | GetInstanceCommandOutput
  | GetInstancesHealthStatusCommandOutput
  | GetNamespaceCommandOutput
  | GetOperationCommandOutput
  | GetServiceAttributesCommandOutput
  | GetServiceCommandOutput
  | ListInstancesCommandOutput
  | ListNamespacesCommandOutput
  | ListOperationsCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterInstanceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateHttpNamespaceCommandOutput
  | UpdateInstanceCustomHealthStatusCommandOutput
  | UpdatePrivateDnsNamespaceCommandOutput
  | UpdatePublicDnsNamespaceCommandOutput
  | UpdateServiceAttributesCommandOutput
  | UpdateServiceCommandOutput;

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
export type ServiceDiscoveryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ServiceDiscoveryClient class constructor that set the region, credentials and other options.
 */
export interface ServiceDiscoveryClientConfig extends ServiceDiscoveryClientConfigType {}

/**
 * @public
 */
export type ServiceDiscoveryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ServiceDiscoveryClient class. This is resolved and normalized from the {@link ServiceDiscoveryClientConfig | constructor configuration interface}.
 */
export interface ServiceDiscoveryClientResolvedConfig extends ServiceDiscoveryClientResolvedConfigType {}

/**
 * <fullname>Cloud Map</fullname>
 *          <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your
 *    microservice applications run in. When an instance becomes available, you can call the Cloud Map
 *    API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map
 *    automatically creates DNS records and an optional health check. Clients that submit public or
 *    private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 *    eight healthy records. </p>
 * @public
 */
export class ServiceDiscoveryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceDiscoveryClientResolvedConfig
> {
  /**
   * The resolved configuration of ServiceDiscoveryClient class. This is resolved and normalized from the {@link ServiceDiscoveryClientConfig | constructor configuration interface}.
   */
  readonly config: ServiceDiscoveryClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ServiceDiscoveryClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultServiceDiscoveryHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ServiceDiscoveryClientResolvedConfig) =>
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
