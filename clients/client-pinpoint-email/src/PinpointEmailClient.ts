// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "./commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "./commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "./commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "./commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import {
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "./commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "./commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "./commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "./commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "./commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "./commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "./commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "./commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput } from "./commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "./commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "./commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "./commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "./commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "./commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "./commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "./commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "./commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "./commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateConfigurationSetCommandInput
  | CreateConfigurationSetEventDestinationCommandInput
  | CreateDedicatedIpPoolCommandInput
  | CreateDeliverabilityTestReportCommandInput
  | CreateEmailIdentityCommandInput
  | DeleteConfigurationSetCommandInput
  | DeleteConfigurationSetEventDestinationCommandInput
  | DeleteDedicatedIpPoolCommandInput
  | DeleteEmailIdentityCommandInput
  | GetAccountCommandInput
  | GetBlacklistReportsCommandInput
  | GetConfigurationSetCommandInput
  | GetConfigurationSetEventDestinationsCommandInput
  | GetDedicatedIpCommandInput
  | GetDedicatedIpsCommandInput
  | GetDeliverabilityDashboardOptionsCommandInput
  | GetDeliverabilityTestReportCommandInput
  | GetDomainDeliverabilityCampaignCommandInput
  | GetDomainStatisticsReportCommandInput
  | GetEmailIdentityCommandInput
  | ListConfigurationSetsCommandInput
  | ListDedicatedIpPoolsCommandInput
  | ListDeliverabilityTestReportsCommandInput
  | ListDomainDeliverabilityCampaignsCommandInput
  | ListEmailIdentitiesCommandInput
  | ListTagsForResourceCommandInput
  | PutAccountDedicatedIpWarmupAttributesCommandInput
  | PutAccountSendingAttributesCommandInput
  | PutConfigurationSetDeliveryOptionsCommandInput
  | PutConfigurationSetReputationOptionsCommandInput
  | PutConfigurationSetSendingOptionsCommandInput
  | PutConfigurationSetTrackingOptionsCommandInput
  | PutDedicatedIpInPoolCommandInput
  | PutDedicatedIpWarmupAttributesCommandInput
  | PutDeliverabilityDashboardOptionCommandInput
  | PutEmailIdentityDkimAttributesCommandInput
  | PutEmailIdentityFeedbackAttributesCommandInput
  | PutEmailIdentityMailFromAttributesCommandInput
  | SendEmailCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConfigurationSetEventDestinationCommandInput;

export type ServiceOutputTypes =
  | CreateConfigurationSetCommandOutput
  | CreateConfigurationSetEventDestinationCommandOutput
  | CreateDedicatedIpPoolCommandOutput
  | CreateDeliverabilityTestReportCommandOutput
  | CreateEmailIdentityCommandOutput
  | DeleteConfigurationSetCommandOutput
  | DeleteConfigurationSetEventDestinationCommandOutput
  | DeleteDedicatedIpPoolCommandOutput
  | DeleteEmailIdentityCommandOutput
  | GetAccountCommandOutput
  | GetBlacklistReportsCommandOutput
  | GetConfigurationSetCommandOutput
  | GetConfigurationSetEventDestinationsCommandOutput
  | GetDedicatedIpCommandOutput
  | GetDedicatedIpsCommandOutput
  | GetDeliverabilityDashboardOptionsCommandOutput
  | GetDeliverabilityTestReportCommandOutput
  | GetDomainDeliverabilityCampaignCommandOutput
  | GetDomainStatisticsReportCommandOutput
  | GetEmailIdentityCommandOutput
  | ListConfigurationSetsCommandOutput
  | ListDedicatedIpPoolsCommandOutput
  | ListDeliverabilityTestReportsCommandOutput
  | ListDomainDeliverabilityCampaignsCommandOutput
  | ListEmailIdentitiesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAccountDedicatedIpWarmupAttributesCommandOutput
  | PutAccountSendingAttributesCommandOutput
  | PutConfigurationSetDeliveryOptionsCommandOutput
  | PutConfigurationSetReputationOptionsCommandOutput
  | PutConfigurationSetSendingOptionsCommandOutput
  | PutConfigurationSetTrackingOptionsCommandOutput
  | PutDedicatedIpInPoolCommandOutput
  | PutDedicatedIpWarmupAttributesCommandOutput
  | PutDeliverabilityDashboardOptionCommandOutput
  | PutEmailIdentityDkimAttributesCommandOutput
  | PutEmailIdentityFeedbackAttributesCommandOutput
  | PutEmailIdentityMailFromAttributesCommandOutput
  | SendEmailCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConfigurationSetEventDestinationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type PinpointEmailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of PinpointEmailClient class constructor that set the region, credentials and other options.
 */
export interface PinpointEmailClientConfig extends PinpointEmailClientConfigType {}

type PinpointEmailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of PinpointEmailClient class. This is resolved and normalized from the {@link PinpointEmailClientConfig | constructor configuration interface}.
 */
export interface PinpointEmailClientResolvedConfig extends PinpointEmailClientResolvedConfigType {}

/**
 * <fullname>Amazon Pinpoint Email Service</fullname>
 *         <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides
 *             information about the Amazon Pinpoint Email API (version 1.0), including supported
 *             operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you
 *             can use to engage with your customers across multiple messaging channels. You can use
 *             Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The
 *             Amazon Pinpoint Email API provides programmatic access to options that are unique to the
 *             email channel and supplement the options provided by the Amazon Pinpoint API.</p>
 *         <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon
 *                 Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer
 *                 Guide</i> provides tutorials, code samples, and procedures that demonstrate
 *             how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into
 *             mobile apps and other types of applications. The guide also provides information about
 *             key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply
 *             to using the service.</p>
 *         <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint
 *             for each of these Regions. For a list of all the Regions and endpoints where the API is
 *             currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in
 *             the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
 *                 Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 */
export class PinpointEmailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PinpointEmailClientResolvedConfig
> {
  /**
   * The resolved configuration of PinpointEmailClient class. This is resolved and normalized from the {@link PinpointEmailClientConfig | constructor configuration interface}.
   */
  readonly config: PinpointEmailClientResolvedConfig;

  constructor(configuration: PinpointEmailClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
