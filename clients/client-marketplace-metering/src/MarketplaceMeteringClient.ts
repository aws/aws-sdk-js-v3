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
  defaultMarketplaceMeteringHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput } from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommandInput, MeterUsageCommandOutput } from "./commands/MeterUsageCommand";
import { RegisterUsageCommandInput, RegisterUsageCommandOutput } from "./commands/RegisterUsageCommand";
import { ResolveCustomerCommandInput, ResolveCustomerCommandOutput } from "./commands/ResolveCustomerCommand";
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
  | BatchMeterUsageCommandInput
  | MeterUsageCommandInput
  | RegisterUsageCommandInput
  | ResolveCustomerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchMeterUsageCommandOutput
  | MeterUsageCommandOutput
  | RegisterUsageCommandOutput
  | ResolveCustomerCommandOutput;

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
export type MarketplaceMeteringClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MarketplaceMeteringClient class constructor that set the region, credentials and other options.
 */
export interface MarketplaceMeteringClientConfig extends MarketplaceMeteringClientConfigType {}

/**
 * @public
 */
export type MarketplaceMeteringClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MarketplaceMeteringClient class. This is resolved and normalized from the {@link MarketplaceMeteringClientConfig | constructor configuration interface}.
 */
export interface MarketplaceMeteringClientResolvedConfig extends MarketplaceMeteringClientResolvedConfigType {}

/**
 * <fullname>Amazon Web Services Marketplace Metering Service</fullname>
 *          <p>This reference provides descriptions of the low-level Marketplace Metering Service API.</p>
 *          <p>Amazon Web Services Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *          <p>For information about the permissions that you need to use this API, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">Amazon Web Services Marketplace metering and entitlement API permissions</a> in the <i>Amazon Web Services Marketplace
 *                 Seller Guide.</i>
 *          </p>
 *          <p>
 *             <b>Submitting metering records</b>
 *          </p>
 *          <p>
 *             <i>MeterUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Submits the metering record for an Amazon Web Services Marketplace product.</p>
 *             </li>
 *             <li>
 *                <p>Called from: Amazon Elastic Compute Cloud (Amazon EC2) instance or a container running on either
 *                     Amazon Elastic Kubernetes Service (Amazon EKS) or Amazon Elastic Container Service (Amazon ECS)</p>
 *             </li>
 *             <li>
 *                <p>Supported product types: Amazon Machine Images (AMIs) and containers</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Supported allocation tagging</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <i>BatchMeterUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Submits the metering record for a set of customers.
 *                         <code>BatchMeterUsage</code> API calls are captured by CloudTrail. You can use
 *                     CloudTrail to verify that the software as a subscription (SaaS) metering records that
 *                     you sent are accurate by searching for records with the <code>eventName</code>
 *                     of <code>BatchMeterUsage</code>. You can also use CloudTrail to audit records over
 *                     time. For more information, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">CloudTrail User
 *                         Guide</a>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: SaaS applications</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: SaaS</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Supports allocation tagging</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Accepting new customers</b>
 *          </p>
 *          <p>
 *             <i>ResolveCustomer</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Resolves the registration token that the buyer submits through the browser
 *                     during the registration process. Obtains a <code>CustomerIdentifier</code> along
 *                     with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: SaaS application during the registration process</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: SaaS</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Not applicable</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement and metering for paid container
 *             products</b>
 *          </p>
 *          <p>
 *             <i>RegisteredUsage</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Provides software entitlement and metering. Paid container software products
 *                     sold through Amazon Web Services Marketplace must integrate with the Marketplace Metering Service and call the
 *                         <code>RegisterUsage</code> operation. Free and Bring Your Own License model
 *                     (BYOL) products for Amazon ECS or Amazon EKS aren't required to call
 *                         <code>RegisterUsage</code>. However, you can do so if you want to receive
 *                     usage data in your seller reports. For more information about using the
 *                         <code>RegisterUsage</code> operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
 *             </li>
 *             <li>
 *                <p>Called from: Paid container software products</p>
 *             </li>
 *             <li>
 *                <p>Supported product type: Containers</p>
 *             </li>
 *             <li>
 *                <p>Vendor-metered tagging: Not applicable</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Entitlement custom metering for container
 *             products</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>MeterUsage API is available in GovCloud Regions but only supports AMI
 *                     FCP products in GovCloud Regions. Flexible Consumption Pricing (FCP) Container
 *                     products aren’t supported in GovCloud Regions: us-gov-west-1 and us-gov-east-1.
 *                     For more information, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-based products</a>.</p>
 *             </li>
 *             <li>
 *                <p>Custom metering for container products are called using the
 *                     MeterUsage API. The API is used for FCP AMI and FCP Container product
 *                     metering.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Custom metering for Amazon EKS is available in 17
 *                 Amazon Web Services Regions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The metering service supports Amazon ECS and EKS for Flexible Consumption Pricing
 *                     (FCP) products using MeterUsage API. Amazon ECS is supported in all
 *                     Amazon Web Services Regions that MeterUsage API is available except for
 *                     GovCloud.</p>
 *             </li>
 *             <li>
 *                <p>Amazon EKS is supported in the following: us-east-1, us-east-2, us-west-1,
 *                     us-west-2, eu-west-1, eu-central-1, eu-west-2, eu-west-3, eu-north-1, ap-east-1,
 *                     ap-southeast-1, ap-northeast-1, ap-southeast-2, ap-northeast-2, ap-south-1,
 *                     ca-central-1, sa-east-1.</p>
 *                <note>
 *                   <p>For questions about adding Amazon Web Services Regions for metering, contact <a href="mailto://aws.amazon.com/marketplace/management/contact-us/">Amazon Web Services
 *                             Marketplace Seller Operations</a>.</p>
 *                </note>
 *             </li>
 *          </ul>
 * @public
 */
export class MarketplaceMeteringClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MarketplaceMeteringClientResolvedConfig
> {
  /**
   * The resolved configuration of MarketplaceMeteringClient class. This is resolved and normalized from the {@link MarketplaceMeteringClientConfig | constructor configuration interface}.
   */
  readonly config: MarketplaceMeteringClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MarketplaceMeteringClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMarketplaceMeteringHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MarketplaceMeteringClientResolvedConfig) =>
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
