import {
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse,
  CreateDedicatedIpPoolRequest,
  CreateDedicatedIpPoolResponse,
  CreateDeliverabilityTestReportRequest,
  CreateDeliverabilityTestReportResponse,
  CreateEmailIdentityRequest,
  CreateEmailIdentityResponse,
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
  DeleteDedicatedIpPoolRequest,
  DeleteDedicatedIpPoolResponse,
  DeleteEmailIdentityRequest,
  DeleteEmailIdentityResponse,
  GetAccountRequest,
  GetAccountResponse,
  GetBlacklistReportsRequest,
  GetBlacklistReportsResponse,
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
  GetConfigurationSetRequest,
  GetConfigurationSetResponse,
  GetDedicatedIpRequest,
  GetDedicatedIpResponse,
  GetDedicatedIpsRequest,
  GetDedicatedIpsResponse,
  GetDeliverabilityDashboardOptionsRequest,
  GetDeliverabilityDashboardOptionsResponse,
  GetDeliverabilityTestReportRequest,
  GetDeliverabilityTestReportResponse,
  GetDomainDeliverabilityCampaignRequest,
  GetDomainDeliverabilityCampaignResponse,
  GetDomainStatisticsReportRequest,
  GetDomainStatisticsReportResponse,
  GetEmailIdentityRequest,
  GetEmailIdentityResponse,
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
  ListDedicatedIpPoolsRequest,
  ListDedicatedIpPoolsResponse,
  ListDeliverabilityTestReportsRequest,
  ListDeliverabilityTestReportsResponse,
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsResponse,
  ListEmailIdentitiesRequest,
  ListEmailIdentitiesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
  PutAccountSendingAttributesRequest,
  PutAccountSendingAttributesResponse,
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
  PutConfigurationSetSendingOptionsRequest,
  PutConfigurationSetSendingOptionsResponse,
  PutConfigurationSetTrackingOptionsRequest,
  PutConfigurationSetTrackingOptionsResponse,
  PutDedicatedIpInPoolRequest,
  PutDedicatedIpInPoolResponse,
  PutDedicatedIpWarmupAttributesRequest,
  PutDedicatedIpWarmupAttributesResponse,
  PutDeliverabilityDashboardOptionRequest,
  PutDeliverabilityDashboardOptionResponse,
  PutEmailIdentityDkimAttributesRequest,
  PutEmailIdentityDkimAttributesResponse,
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse,
  PutEmailIdentityMailFromAttributesRequest,
  PutEmailIdentityMailFromAttributesResponse,
  SendEmailRequest,
  SendEmailResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
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
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateConfigurationSetEventDestinationRequest
  | CreateConfigurationSetRequest
  | CreateDedicatedIpPoolRequest
  | CreateDeliverabilityTestReportRequest
  | CreateEmailIdentityRequest
  | DeleteConfigurationSetEventDestinationRequest
  | DeleteConfigurationSetRequest
  | DeleteDedicatedIpPoolRequest
  | DeleteEmailIdentityRequest
  | GetAccountRequest
  | GetBlacklistReportsRequest
  | GetConfigurationSetEventDestinationsRequest
  | GetConfigurationSetRequest
  | GetDedicatedIpRequest
  | GetDedicatedIpsRequest
  | GetDeliverabilityDashboardOptionsRequest
  | GetDeliverabilityTestReportRequest
  | GetDomainDeliverabilityCampaignRequest
  | GetDomainStatisticsReportRequest
  | GetEmailIdentityRequest
  | ListConfigurationSetsRequest
  | ListDedicatedIpPoolsRequest
  | ListDeliverabilityTestReportsRequest
  | ListDomainDeliverabilityCampaignsRequest
  | ListEmailIdentitiesRequest
  | ListTagsForResourceRequest
  | PutAccountDedicatedIpWarmupAttributesRequest
  | PutAccountSendingAttributesRequest
  | PutConfigurationSetDeliveryOptionsRequest
  | PutConfigurationSetReputationOptionsRequest
  | PutConfigurationSetSendingOptionsRequest
  | PutConfigurationSetTrackingOptionsRequest
  | PutDedicatedIpInPoolRequest
  | PutDedicatedIpWarmupAttributesRequest
  | PutDeliverabilityDashboardOptionRequest
  | PutEmailIdentityDkimAttributesRequest
  | PutEmailIdentityFeedbackAttributesRequest
  | PutEmailIdentityMailFromAttributesRequest
  | SendEmailRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateConfigurationSetEventDestinationRequest;

export type ServiceOutputTypes =
  | CreateConfigurationSetEventDestinationResponse
  | CreateConfigurationSetResponse
  | CreateDedicatedIpPoolResponse
  | CreateDeliverabilityTestReportResponse
  | CreateEmailIdentityResponse
  | DeleteConfigurationSetEventDestinationResponse
  | DeleteConfigurationSetResponse
  | DeleteDedicatedIpPoolResponse
  | DeleteEmailIdentityResponse
  | GetAccountResponse
  | GetBlacklistReportsResponse
  | GetConfigurationSetEventDestinationsResponse
  | GetConfigurationSetResponse
  | GetDedicatedIpResponse
  | GetDedicatedIpsResponse
  | GetDeliverabilityDashboardOptionsResponse
  | GetDeliverabilityTestReportResponse
  | GetDomainDeliverabilityCampaignResponse
  | GetDomainStatisticsReportResponse
  | GetEmailIdentityResponse
  | ListConfigurationSetsResponse
  | ListDedicatedIpPoolsResponse
  | ListDeliverabilityTestReportsResponse
  | ListDomainDeliverabilityCampaignsResponse
  | ListEmailIdentitiesResponse
  | ListTagsForResourceResponse
  | PutAccountDedicatedIpWarmupAttributesResponse
  | PutAccountSendingAttributesResponse
  | PutConfigurationSetDeliveryOptionsResponse
  | PutConfigurationSetReputationOptionsResponse
  | PutConfigurationSetSendingOptionsResponse
  | PutConfigurationSetTrackingOptionsResponse
  | PutDedicatedIpInPoolResponse
  | PutDedicatedIpWarmupAttributesResponse
  | PutDeliverabilityDashboardOptionResponse
  | PutEmailIdentityDkimAttributesResponse
  | PutEmailIdentityFeedbackAttributesResponse
  | PutEmailIdentityMailFromAttributesResponse
  | SendEmailResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateConfigurationSetEventDestinationResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type PinpointEmailClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type PinpointEmailClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *         <fullname>Amazon Pinpoint Email Service</fullname>
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
 *
 */
export class PinpointEmailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PinpointEmailClientResolvedConfig
> {
  readonly config: PinpointEmailClientResolvedConfig;

  constructor(configuration: PinpointEmailClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
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

  destroy(): void {}
}
