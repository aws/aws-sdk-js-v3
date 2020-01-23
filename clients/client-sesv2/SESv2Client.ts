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
  DeleteSuppressedDestinationRequest,
  DeleteSuppressedDestinationResponse,
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
  GetSuppressedDestinationRequest,
  GetSuppressedDestinationResponse,
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
  ListSuppressedDestinationsRequest,
  ListSuppressedDestinationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
  PutAccountSendingAttributesRequest,
  PutAccountSendingAttributesResponse,
  PutAccountSuppressionAttributesRequest,
  PutAccountSuppressionAttributesResponse,
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
  PutConfigurationSetSendingOptionsRequest,
  PutConfigurationSetSendingOptionsResponse,
  PutConfigurationSetSuppressionOptionsRequest,
  PutConfigurationSetSuppressionOptionsResponse,
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
  PutSuppressedDestinationRequest,
  PutSuppressedDestinationResponse,
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
  | DeleteSuppressedDestinationRequest
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
  | GetSuppressedDestinationRequest
  | ListConfigurationSetsRequest
  | ListDedicatedIpPoolsRequest
  | ListDeliverabilityTestReportsRequest
  | ListDomainDeliverabilityCampaignsRequest
  | ListEmailIdentitiesRequest
  | ListSuppressedDestinationsRequest
  | ListTagsForResourceRequest
  | PutAccountDedicatedIpWarmupAttributesRequest
  | PutAccountSendingAttributesRequest
  | PutAccountSuppressionAttributesRequest
  | PutConfigurationSetDeliveryOptionsRequest
  | PutConfigurationSetReputationOptionsRequest
  | PutConfigurationSetSendingOptionsRequest
  | PutConfigurationSetSuppressionOptionsRequest
  | PutConfigurationSetTrackingOptionsRequest
  | PutDedicatedIpInPoolRequest
  | PutDedicatedIpWarmupAttributesRequest
  | PutDeliverabilityDashboardOptionRequest
  | PutEmailIdentityDkimAttributesRequest
  | PutEmailIdentityFeedbackAttributesRequest
  | PutEmailIdentityMailFromAttributesRequest
  | PutSuppressedDestinationRequest
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
  | DeleteSuppressedDestinationResponse
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
  | GetSuppressedDestinationResponse
  | ListConfigurationSetsResponse
  | ListDedicatedIpPoolsResponse
  | ListDeliverabilityTestReportsResponse
  | ListDomainDeliverabilityCampaignsResponse
  | ListEmailIdentitiesResponse
  | ListSuppressedDestinationsResponse
  | ListTagsForResourceResponse
  | PutAccountDedicatedIpWarmupAttributesResponse
  | PutAccountSendingAttributesResponse
  | PutAccountSuppressionAttributesResponse
  | PutConfigurationSetDeliveryOptionsResponse
  | PutConfigurationSetReputationOptionsResponse
  | PutConfigurationSetSendingOptionsResponse
  | PutConfigurationSetSuppressionOptionsResponse
  | PutConfigurationSetTrackingOptionsResponse
  | PutDedicatedIpInPoolResponse
  | PutDedicatedIpWarmupAttributesResponse
  | PutDeliverabilityDashboardOptionResponse
  | PutEmailIdentityDkimAttributesResponse
  | PutEmailIdentityFeedbackAttributesResponse
  | PutEmailIdentityMailFromAttributesResponse
  | PutSuppressedDestinationResponse
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

export type SESv2ClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SESv2ClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <fullname>Amazon SES API v2</fullname>
 *         <p>Welcome to the Amazon SES API v2 Reference. This guide provides information about the Amazon SES API v2,
 *             including supported operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon SES</a> is an AWS service that
 *             you can use to send email messages to your customers.</p>
 *         <p>If you're new to Amazon SES API v2, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
 *                 Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
 *             and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
 *         <p>The Amazon SES API v2 is available in several AWS Regions and it provides an endpoint for each
 *             of these Regions. For a list of all the Regions and endpoints where the API is currently
 *             available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To
 *             learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 *
 */
export class SESv2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SESv2ClientResolvedConfig
> {
  readonly config: SESv2ClientResolvedConfig;

  constructor(configuration: SESv2ClientConfig) {
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
