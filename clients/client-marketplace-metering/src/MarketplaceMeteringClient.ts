import { BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput } from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommandInput, MeterUsageCommandOutput } from "./commands/MeterUsageCommand";
import { RegisterUsageCommandInput, RegisterUsageCommandOutput } from "./commands/RegisterUsageCommand";
import { ResolveCustomerCommandInput, ResolveCustomerCommandOutput } from "./commands/ResolveCustomerCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchMeterUsageCommandInput
  | MeterUsageCommandInput
  | RegisterUsageCommandInput
  | ResolveCustomerCommandInput;

export type ServiceOutputTypes =
  | BatchMeterUsageCommandOutput
  | MeterUsageCommandOutput
  | RegisterUsageCommandOutput
  | ResolveCustomerCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type MarketplaceMeteringClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MarketplaceMeteringClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Marketplace Metering Service</fullname>
 *         <p>This reference provides descriptions of the low-level AWS Marketplace Metering
 *             Service API.</p>
 *         <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *         <p>
 *             <b>Submitting Metering Records</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>MeterUsage</i>- Submits the metering record for a Marketplace
 *                     product. MeterUsage is called from an EC2 instance or a container running on EKS
 *                     or ECS.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>BatchMeterUsage</i>- Submits the metering record for a set of
 *                     customers. BatchMeterUsage is called from a software-as-a-service (SaaS)
 *                     application.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Accepting New Customers</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>ResolveCustomer</i>- Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a CustomerIdentifier
 *                     and Product Code.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p> Paid container software products sold through AWS Marketplace must
 *                     integrate with the AWS Marketplace Metering Service and call the RegisterUsage
 *                     operation for software entitlement and metering. Free and BYOL products for
 *                     Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do
 *                     so if you want to receive usage data in your seller reports. For more
 *                     information on using the RegisterUsage operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *         <p>BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to
 *             verify that the SaaS metering records that you sent are accurate by searching for
 *             records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit
 *             records over time. For more information, see the <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>
 *             </i>.</p>
 */
export class MarketplaceMeteringClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MarketplaceMeteringClientResolvedConfig
> {
  readonly config: MarketplaceMeteringClientResolvedConfig;

  constructor(configuration: MarketplaceMeteringClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
