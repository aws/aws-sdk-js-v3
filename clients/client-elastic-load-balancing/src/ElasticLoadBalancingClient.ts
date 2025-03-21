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
  defaultElasticLoadBalancingHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput,
} from "./commands/ApplySecurityGroupsToLoadBalancerCommand";
import {
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
} from "./commands/AttachLoadBalancerToSubnetsCommand";
import {
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
} from "./commands/ConfigureHealthCheckCommand";
import {
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput,
} from "./commands/CreateAppCookieStickinessPolicyCommand";
import {
  CreateLBCookieStickinessPolicyCommandInput,
  CreateLBCookieStickinessPolicyCommandOutput,
} from "./commands/CreateLBCookieStickinessPolicyCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput,
} from "./commands/CreateLoadBalancerListenersCommand";
import {
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
} from "./commands/CreateLoadBalancerPolicyCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerListenersCommandInput,
  DeleteLoadBalancerListenersCommandOutput,
} from "./commands/DeleteLoadBalancerListenersCommand";
import {
  DeleteLoadBalancerPolicyCommandInput,
  DeleteLoadBalancerPolicyCommandOutput,
} from "./commands/DeleteLoadBalancerPolicyCommand";
import {
  DeregisterInstancesFromLoadBalancerCommandInput,
  DeregisterInstancesFromLoadBalancerCommandOutput,
} from "./commands/DeregisterInstancesFromLoadBalancerCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeInstanceHealthCommandInput,
  DescribeInstanceHealthCommandOutput,
} from "./commands/DescribeInstanceHealthCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput,
} from "./commands/DescribeLoadBalancerPoliciesCommand";
import {
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
} from "./commands/DescribeLoadBalancerPolicyTypesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput,
} from "./commands/DetachLoadBalancerFromSubnetsCommand";
import {
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput,
} from "./commands/DisableAvailabilityZonesForLoadBalancerCommand";
import {
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput,
} from "./commands/EnableAvailabilityZonesForLoadBalancerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import {
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput,
} from "./commands/RegisterInstancesWithLoadBalancerCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput,
} from "./commands/SetLoadBalancerListenerSSLCertificateCommand";
import {
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput,
} from "./commands/SetLoadBalancerPoliciesForBackendServerCommand";
import {
  SetLoadBalancerPoliciesOfListenerCommandInput,
  SetLoadBalancerPoliciesOfListenerCommandOutput,
} from "./commands/SetLoadBalancerPoliciesOfListenerCommand";
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
  | AddTagsCommandInput
  | ApplySecurityGroupsToLoadBalancerCommandInput
  | AttachLoadBalancerToSubnetsCommandInput
  | ConfigureHealthCheckCommandInput
  | CreateAppCookieStickinessPolicyCommandInput
  | CreateLBCookieStickinessPolicyCommandInput
  | CreateLoadBalancerCommandInput
  | CreateLoadBalancerListenersCommandInput
  | CreateLoadBalancerPolicyCommandInput
  | DeleteLoadBalancerCommandInput
  | DeleteLoadBalancerListenersCommandInput
  | DeleteLoadBalancerPolicyCommandInput
  | DeregisterInstancesFromLoadBalancerCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeInstanceHealthCommandInput
  | DescribeLoadBalancerAttributesCommandInput
  | DescribeLoadBalancerPoliciesCommandInput
  | DescribeLoadBalancerPolicyTypesCommandInput
  | DescribeLoadBalancersCommandInput
  | DescribeTagsCommandInput
  | DetachLoadBalancerFromSubnetsCommandInput
  | DisableAvailabilityZonesForLoadBalancerCommandInput
  | EnableAvailabilityZonesForLoadBalancerCommandInput
  | ModifyLoadBalancerAttributesCommandInput
  | RegisterInstancesWithLoadBalancerCommandInput
  | RemoveTagsCommandInput
  | SetLoadBalancerListenerSSLCertificateCommandInput
  | SetLoadBalancerPoliciesForBackendServerCommandInput
  | SetLoadBalancerPoliciesOfListenerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | ApplySecurityGroupsToLoadBalancerCommandOutput
  | AttachLoadBalancerToSubnetsCommandOutput
  | ConfigureHealthCheckCommandOutput
  | CreateAppCookieStickinessPolicyCommandOutput
  | CreateLBCookieStickinessPolicyCommandOutput
  | CreateLoadBalancerCommandOutput
  | CreateLoadBalancerListenersCommandOutput
  | CreateLoadBalancerPolicyCommandOutput
  | DeleteLoadBalancerCommandOutput
  | DeleteLoadBalancerListenersCommandOutput
  | DeleteLoadBalancerPolicyCommandOutput
  | DeregisterInstancesFromLoadBalancerCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeInstanceHealthCommandOutput
  | DescribeLoadBalancerAttributesCommandOutput
  | DescribeLoadBalancerPoliciesCommandOutput
  | DescribeLoadBalancerPolicyTypesCommandOutput
  | DescribeLoadBalancersCommandOutput
  | DescribeTagsCommandOutput
  | DetachLoadBalancerFromSubnetsCommandOutput
  | DisableAvailabilityZonesForLoadBalancerCommandOutput
  | EnableAvailabilityZonesForLoadBalancerCommandOutput
  | ModifyLoadBalancerAttributesCommandOutput
  | RegisterInstancesWithLoadBalancerCommandOutput
  | RemoveTagsCommandOutput
  | SetLoadBalancerListenerSSLCertificateCommandOutput
  | SetLoadBalancerPoliciesForBackendServerCommandOutput
  | SetLoadBalancerPoliciesOfListenerCommandOutput;

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
export type ElasticLoadBalancingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ElasticLoadBalancingClient class constructor that set the region, credentials and other options.
 */
export interface ElasticLoadBalancingClientConfig extends ElasticLoadBalancingClientConfigType {}

/**
 * @public
 */
export type ElasticLoadBalancingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ElasticLoadBalancingClient class. This is resolved and normalized from the {@link ElasticLoadBalancingClientConfig | constructor configuration interface}.
 */
export interface ElasticLoadBalancingClientResolvedConfig extends ElasticLoadBalancingClientResolvedConfigType {}

/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *         <p>A load balancer can distribute incoming traffic across your EC2 instances.
 *             This enables you to increase the availability of your application. The load balancer
 *             also monitors the health of its registered instances and ensures that it routes traffic
 *             only to healthy instances. You configure your load balancer to accept incoming traffic
 *             by specifying one or more listeners, which are configured with a protocol and port
 *             number for connections from clients to the load balancer and a protocol and port number
 *             for connections from the load balancer to the instances.</p>
 *         <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
 *             and Classic Load Balancers. You can select a load balancer based on your application needs. For more
 *             information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *         <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
 *             The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>
 *
 *         <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
 *             Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>
 *
 *         <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
 *             that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
 *             response code.</p>
 * @public
 */
export class ElasticLoadBalancingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticLoadBalancingClientResolvedConfig
> {
  /**
   * The resolved configuration of ElasticLoadBalancingClient class. This is resolved and normalized from the {@link ElasticLoadBalancingClientConfig | constructor configuration interface}.
   */
  readonly config: ElasticLoadBalancingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ElasticLoadBalancingClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultElasticLoadBalancingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ElasticLoadBalancingClientResolvedConfig) =>
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
