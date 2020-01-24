import {
  CloneReceiptRuleSetRequest,
  CloneReceiptRuleSetResponse,
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse,
  CreateConfigurationSetTrackingOptionsRequest,
  CreateConfigurationSetTrackingOptionsResponse,
  CreateCustomVerificationEmailTemplateRequest,
  CreateReceiptFilterRequest,
  CreateReceiptFilterResponse,
  CreateReceiptRuleRequest,
  CreateReceiptRuleResponse,
  CreateReceiptRuleSetRequest,
  CreateReceiptRuleSetResponse,
  CreateTemplateRequest,
  CreateTemplateResponse,
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
  DeleteCustomVerificationEmailTemplateRequest,
  DeleteIdentityPolicyRequest,
  DeleteIdentityPolicyResponse,
  DeleteIdentityRequest,
  DeleteIdentityResponse,
  DeleteReceiptFilterRequest,
  DeleteReceiptFilterResponse,
  DeleteReceiptRuleRequest,
  DeleteReceiptRuleResponse,
  DeleteReceiptRuleSetRequest,
  DeleteReceiptRuleSetResponse,
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteVerifiedEmailAddressRequest,
  DescribeActiveReceiptRuleSetRequest,
  DescribeActiveReceiptRuleSetResponse,
  DescribeConfigurationSetRequest,
  DescribeConfigurationSetResponse,
  DescribeReceiptRuleRequest,
  DescribeReceiptRuleResponse,
  DescribeReceiptRuleSetRequest,
  DescribeReceiptRuleSetResponse,
  GetAccountSendingEnabledResponse,
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
  GetIdentityDkimAttributesRequest,
  GetIdentityDkimAttributesResponse,
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesResponse,
  GetIdentityPoliciesRequest,
  GetIdentityPoliciesResponse,
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
  GetSendQuotaResponse,
  GetSendStatisticsResponse,
  GetTemplateRequest,
  GetTemplateResponse,
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
  ListIdentitiesRequest,
  ListIdentitiesResponse,
  ListIdentityPoliciesRequest,
  ListIdentityPoliciesResponse,
  ListReceiptFiltersRequest,
  ListReceiptFiltersResponse,
  ListReceiptRuleSetsRequest,
  ListReceiptRuleSetsResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListVerifiedEmailAddressesResponse,
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutIdentityPolicyRequest,
  PutIdentityPolicyResponse,
  ReorderReceiptRuleSetRequest,
  ReorderReceiptRuleSetResponse,
  SendBounceRequest,
  SendBounceResponse,
  SendBulkTemplatedEmailRequest,
  SendBulkTemplatedEmailResponse,
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
  SendEmailRequest,
  SendEmailResponse,
  SendRawEmailRequest,
  SendRawEmailResponse,
  SendTemplatedEmailRequest,
  SendTemplatedEmailResponse,
  SetActiveReceiptRuleSetRequest,
  SetActiveReceiptRuleSetResponse,
  SetIdentityDkimEnabledRequest,
  SetIdentityDkimEnabledResponse,
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
  SetIdentityHeadersInNotificationsEnabledRequest,
  SetIdentityHeadersInNotificationsEnabledResponse,
  SetIdentityMailFromDomainRequest,
  SetIdentityMailFromDomainResponse,
  SetIdentityNotificationTopicRequest,
  SetIdentityNotificationTopicResponse,
  SetReceiptRulePositionRequest,
  SetReceiptRulePositionResponse,
  TestRenderTemplateRequest,
  TestRenderTemplateResponse,
  UpdateAccountSendingEnabledRequest,
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
  UpdateConfigurationSetReputationMetricsEnabledRequest,
  UpdateConfigurationSetSendingEnabledRequest,
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateReceiptRuleRequest,
  UpdateReceiptRuleResponse,
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  VerifyDomainDkimRequest,
  VerifyDomainDkimResponse,
  VerifyDomainIdentityRequest,
  VerifyDomainIdentityResponse,
  VerifyEmailAddressRequest,
  VerifyEmailIdentityRequest,
  VerifyEmailIdentityResponse
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | CloneReceiptRuleSetRequest
  | CreateConfigurationSetEventDestinationRequest
  | CreateConfigurationSetRequest
  | CreateConfigurationSetTrackingOptionsRequest
  | CreateCustomVerificationEmailTemplateRequest
  | CreateReceiptFilterRequest
  | CreateReceiptRuleRequest
  | CreateReceiptRuleSetRequest
  | CreateTemplateRequest
  | DeleteConfigurationSetEventDestinationRequest
  | DeleteConfigurationSetRequest
  | DeleteConfigurationSetTrackingOptionsRequest
  | DeleteCustomVerificationEmailTemplateRequest
  | DeleteIdentityPolicyRequest
  | DeleteIdentityRequest
  | DeleteReceiptFilterRequest
  | DeleteReceiptRuleRequest
  | DeleteReceiptRuleSetRequest
  | DeleteTemplateRequest
  | DeleteVerifiedEmailAddressRequest
  | DescribeActiveReceiptRuleSetRequest
  | DescribeConfigurationSetRequest
  | DescribeReceiptRuleRequest
  | DescribeReceiptRuleSetRequest
  | GetCustomVerificationEmailTemplateRequest
  | GetIdentityDkimAttributesRequest
  | GetIdentityMailFromDomainAttributesRequest
  | GetIdentityNotificationAttributesRequest
  | GetIdentityPoliciesRequest
  | GetIdentityVerificationAttributesRequest
  | GetTemplateRequest
  | ListConfigurationSetsRequest
  | ListCustomVerificationEmailTemplatesRequest
  | ListIdentitiesRequest
  | ListIdentityPoliciesRequest
  | ListReceiptFiltersRequest
  | ListReceiptRuleSetsRequest
  | ListTemplatesRequest
  | PutConfigurationSetDeliveryOptionsRequest
  | PutIdentityPolicyRequest
  | ReorderReceiptRuleSetRequest
  | SendBounceRequest
  | SendBulkTemplatedEmailRequest
  | SendCustomVerificationEmailRequest
  | SendEmailRequest
  | SendRawEmailRequest
  | SendTemplatedEmailRequest
  | SetActiveReceiptRuleSetRequest
  | SetIdentityDkimEnabledRequest
  | SetIdentityFeedbackForwardingEnabledRequest
  | SetIdentityHeadersInNotificationsEnabledRequest
  | SetIdentityMailFromDomainRequest
  | SetIdentityNotificationTopicRequest
  | SetReceiptRulePositionRequest
  | TestRenderTemplateRequest
  | UpdateAccountSendingEnabledRequest
  | UpdateConfigurationSetEventDestinationRequest
  | UpdateConfigurationSetReputationMetricsEnabledRequest
  | UpdateConfigurationSetSendingEnabledRequest
  | UpdateConfigurationSetTrackingOptionsRequest
  | UpdateCustomVerificationEmailTemplateRequest
  | UpdateReceiptRuleRequest
  | UpdateTemplateRequest
  | VerifyDomainDkimRequest
  | VerifyDomainIdentityRequest
  | VerifyEmailAddressRequest
  | VerifyEmailIdentityRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CloneReceiptRuleSetResponse
  | CreateConfigurationSetEventDestinationResponse
  | CreateConfigurationSetResponse
  | CreateConfigurationSetTrackingOptionsResponse
  | CreateReceiptFilterResponse
  | CreateReceiptRuleResponse
  | CreateReceiptRuleSetResponse
  | CreateTemplateResponse
  | DeleteConfigurationSetEventDestinationResponse
  | DeleteConfigurationSetResponse
  | DeleteConfigurationSetTrackingOptionsResponse
  | DeleteIdentityPolicyResponse
  | DeleteIdentityResponse
  | DeleteReceiptFilterResponse
  | DeleteReceiptRuleResponse
  | DeleteReceiptRuleSetResponse
  | DeleteTemplateResponse
  | DescribeActiveReceiptRuleSetResponse
  | DescribeConfigurationSetResponse
  | DescribeReceiptRuleResponse
  | DescribeReceiptRuleSetResponse
  | GetAccountSendingEnabledResponse
  | GetCustomVerificationEmailTemplateResponse
  | GetIdentityDkimAttributesResponse
  | GetIdentityMailFromDomainAttributesResponse
  | GetIdentityNotificationAttributesResponse
  | GetIdentityPoliciesResponse
  | GetIdentityVerificationAttributesResponse
  | GetSendQuotaResponse
  | GetSendStatisticsResponse
  | GetTemplateResponse
  | ListConfigurationSetsResponse
  | ListCustomVerificationEmailTemplatesResponse
  | ListIdentitiesResponse
  | ListIdentityPoliciesResponse
  | ListReceiptFiltersResponse
  | ListReceiptRuleSetsResponse
  | ListTemplatesResponse
  | ListVerifiedEmailAddressesResponse
  | PutConfigurationSetDeliveryOptionsResponse
  | PutIdentityPolicyResponse
  | ReorderReceiptRuleSetResponse
  | SendBounceResponse
  | SendBulkTemplatedEmailResponse
  | SendCustomVerificationEmailResponse
  | SendEmailResponse
  | SendRawEmailResponse
  | SendTemplatedEmailResponse
  | SetActiveReceiptRuleSetResponse
  | SetIdentityDkimEnabledResponse
  | SetIdentityFeedbackForwardingEnabledResponse
  | SetIdentityHeadersInNotificationsEnabledResponse
  | SetIdentityMailFromDomainResponse
  | SetIdentityNotificationTopicResponse
  | SetReceiptRulePositionResponse
  | TestRenderTemplateResponse
  | UpdateConfigurationSetEventDestinationResponse
  | UpdateConfigurationSetTrackingOptionsResponse
  | UpdateReceiptRuleResponse
  | UpdateTemplateResponse
  | VerifyDomainDkimResponse
  | VerifyDomainIdentityResponse
  | VerifyEmailIdentityResponse;

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

export type SESClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SESClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>Amazon Simple Email Service</fullname>
 *         <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version
 *             2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>. </p>
 *         <note>
 *             <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and
 *                     Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         </note>
 */
export class SESClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig
> {
  readonly config: SESClientResolvedConfig;

  constructor(configuration: SESClientConfig) {
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
