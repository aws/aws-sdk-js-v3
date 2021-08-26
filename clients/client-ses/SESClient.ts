import {
  CloneReceiptRuleSetCommandInput,
  CloneReceiptRuleSetCommandOutput,
} from "./commands/CloneReceiptRuleSetCommand";
import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateConfigurationSetTrackingOptionsCommandInput,
  CreateConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import {
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/CreateCustomVerificationEmailTemplateCommand";
import {
  CreateReceiptFilterCommandInput,
  CreateReceiptFilterCommandOutput,
} from "./commands/CreateReceiptFilterCommand";
import { CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput } from "./commands/CreateReceiptRuleCommand";
import {
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
} from "./commands/CreateReceiptRuleSetCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetTrackingOptionsCommandInput,
  DeleteConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import {
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteIdentityCommandInput, DeleteIdentityCommandOutput } from "./commands/DeleteIdentityCommand";
import {
  DeleteIdentityPolicyCommandInput,
  DeleteIdentityPolicyCommandOutput,
} from "./commands/DeleteIdentityPolicyCommand";
import {
  DeleteReceiptFilterCommandInput,
  DeleteReceiptFilterCommandOutput,
} from "./commands/DeleteReceiptFilterCommand";
import { DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput } from "./commands/DeleteReceiptRuleCommand";
import {
  DeleteReceiptRuleSetCommandInput,
  DeleteReceiptRuleSetCommandOutput,
} from "./commands/DeleteReceiptRuleSetCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import {
  DeleteVerifiedEmailAddressCommandInput,
  DeleteVerifiedEmailAddressCommandOutput,
} from "./commands/DeleteVerifiedEmailAddressCommand";
import {
  DescribeActiveReceiptRuleSetCommandInput,
  DescribeActiveReceiptRuleSetCommandOutput,
} from "./commands/DescribeActiveReceiptRuleSetCommand";
import {
  DescribeConfigurationSetCommandInput,
  DescribeConfigurationSetCommandOutput,
} from "./commands/DescribeConfigurationSetCommand";
import {
  DescribeReceiptRuleCommandInput,
  DescribeReceiptRuleCommandOutput,
} from "./commands/DescribeReceiptRuleCommand";
import {
  DescribeReceiptRuleSetCommandInput,
  DescribeReceiptRuleSetCommandOutput,
} from "./commands/DescribeReceiptRuleSetCommand";
import {
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
} from "./commands/GetAccountSendingEnabledCommand";
import {
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "./commands/GetCustomVerificationEmailTemplateCommand";
import {
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
} from "./commands/GetIdentityDkimAttributesCommand";
import {
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
} from "./commands/GetIdentityMailFromDomainAttributesCommand";
import {
  GetIdentityNotificationAttributesCommandInput,
  GetIdentityNotificationAttributesCommandOutput,
} from "./commands/GetIdentityNotificationAttributesCommand";
import {
  GetIdentityPoliciesCommandInput,
  GetIdentityPoliciesCommandOutput,
} from "./commands/GetIdentityPoliciesCommand";
import {
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
} from "./commands/GetIdentityVerificationAttributesCommand";
import { GetSendQuotaCommandInput, GetSendQuotaCommandOutput } from "./commands/GetSendQuotaCommand";
import { GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput } from "./commands/GetSendStatisticsCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "./commands/ListCustomVerificationEmailTemplatesCommand";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "./commands/ListIdentitiesCommand";
import {
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
} from "./commands/ListIdentityPoliciesCommand";
import { ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput } from "./commands/ListReceiptFiltersCommand";
import {
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
} from "./commands/ListReceiptRuleSetsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import {
  ListVerifiedEmailAddressesCommandInput,
  ListVerifiedEmailAddressesCommandOutput,
} from "./commands/ListVerifiedEmailAddressesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput } from "./commands/PutIdentityPolicyCommand";
import {
  ReorderReceiptRuleSetCommandInput,
  ReorderReceiptRuleSetCommandOutput,
} from "./commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommandInput, SendBounceCommandOutput } from "./commands/SendBounceCommand";
import {
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
} from "./commands/SendBulkTemplatedEmailCommand";
import {
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { SendRawEmailCommandInput, SendRawEmailCommandOutput } from "./commands/SendRawEmailCommand";
import { SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput } from "./commands/SendTemplatedEmailCommand";
import {
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
} from "./commands/SetActiveReceiptRuleSetCommand";
import {
  SetIdentityDkimEnabledCommandInput,
  SetIdentityDkimEnabledCommandOutput,
} from "./commands/SetIdentityDkimEnabledCommand";
import {
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
} from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import {
  SetIdentityHeadersInNotificationsEnabledCommandInput,
  SetIdentityHeadersInNotificationsEnabledCommandOutput,
} from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import {
  SetIdentityMailFromDomainCommandInput,
  SetIdentityMailFromDomainCommandOutput,
} from "./commands/SetIdentityMailFromDomainCommand";
import {
  SetIdentityNotificationTopicCommandInput,
  SetIdentityNotificationTopicCommandOutput,
} from "./commands/SetIdentityNotificationTopicCommand";
import {
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
} from "./commands/SetReceiptRulePositionCommand";
import { TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput } from "./commands/TestRenderTemplateCommand";
import {
  UpdateAccountSendingEnabledCommandInput,
  UpdateAccountSendingEnabledCommandOutput,
} from "./commands/UpdateAccountSendingEnabledCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import {
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
} from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import {
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
} from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import {
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import {
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput } from "./commands/UpdateReceiptRuleCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import { VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput } from "./commands/VerifyDomainDkimCommand";
import {
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
} from "./commands/VerifyDomainIdentityCommand";
import { VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput } from "./commands/VerifyEmailAddressCommand";
import {
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
} from "./commands/VerifyEmailIdentityCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CloneReceiptRuleSetCommandInput
  | CreateConfigurationSetCommandInput
  | CreateConfigurationSetEventDestinationCommandInput
  | CreateConfigurationSetTrackingOptionsCommandInput
  | CreateCustomVerificationEmailTemplateCommandInput
  | CreateReceiptFilterCommandInput
  | CreateReceiptRuleCommandInput
  | CreateReceiptRuleSetCommandInput
  | CreateTemplateCommandInput
  | DeleteConfigurationSetCommandInput
  | DeleteConfigurationSetEventDestinationCommandInput
  | DeleteConfigurationSetTrackingOptionsCommandInput
  | DeleteCustomVerificationEmailTemplateCommandInput
  | DeleteIdentityCommandInput
  | DeleteIdentityPolicyCommandInput
  | DeleteReceiptFilterCommandInput
  | DeleteReceiptRuleCommandInput
  | DeleteReceiptRuleSetCommandInput
  | DeleteTemplateCommandInput
  | DeleteVerifiedEmailAddressCommandInput
  | DescribeActiveReceiptRuleSetCommandInput
  | DescribeConfigurationSetCommandInput
  | DescribeReceiptRuleCommandInput
  | DescribeReceiptRuleSetCommandInput
  | GetAccountSendingEnabledCommandInput
  | GetCustomVerificationEmailTemplateCommandInput
  | GetIdentityDkimAttributesCommandInput
  | GetIdentityMailFromDomainAttributesCommandInput
  | GetIdentityNotificationAttributesCommandInput
  | GetIdentityPoliciesCommandInput
  | GetIdentityVerificationAttributesCommandInput
  | GetSendQuotaCommandInput
  | GetSendStatisticsCommandInput
  | GetTemplateCommandInput
  | ListConfigurationSetsCommandInput
  | ListCustomVerificationEmailTemplatesCommandInput
  | ListIdentitiesCommandInput
  | ListIdentityPoliciesCommandInput
  | ListReceiptFiltersCommandInput
  | ListReceiptRuleSetsCommandInput
  | ListTemplatesCommandInput
  | ListVerifiedEmailAddressesCommandInput
  | PutConfigurationSetDeliveryOptionsCommandInput
  | PutIdentityPolicyCommandInput
  | ReorderReceiptRuleSetCommandInput
  | SendBounceCommandInput
  | SendBulkTemplatedEmailCommandInput
  | SendCustomVerificationEmailCommandInput
  | SendEmailCommandInput
  | SendRawEmailCommandInput
  | SendTemplatedEmailCommandInput
  | SetActiveReceiptRuleSetCommandInput
  | SetIdentityDkimEnabledCommandInput
  | SetIdentityFeedbackForwardingEnabledCommandInput
  | SetIdentityHeadersInNotificationsEnabledCommandInput
  | SetIdentityMailFromDomainCommandInput
  | SetIdentityNotificationTopicCommandInput
  | SetReceiptRulePositionCommandInput
  | TestRenderTemplateCommandInput
  | UpdateAccountSendingEnabledCommandInput
  | UpdateConfigurationSetEventDestinationCommandInput
  | UpdateConfigurationSetReputationMetricsEnabledCommandInput
  | UpdateConfigurationSetSendingEnabledCommandInput
  | UpdateConfigurationSetTrackingOptionsCommandInput
  | UpdateCustomVerificationEmailTemplateCommandInput
  | UpdateReceiptRuleCommandInput
  | UpdateTemplateCommandInput
  | VerifyDomainDkimCommandInput
  | VerifyDomainIdentityCommandInput
  | VerifyEmailAddressCommandInput
  | VerifyEmailIdentityCommandInput;

export type ServiceOutputTypes =
  | CloneReceiptRuleSetCommandOutput
  | CreateConfigurationSetCommandOutput
  | CreateConfigurationSetEventDestinationCommandOutput
  | CreateConfigurationSetTrackingOptionsCommandOutput
  | CreateCustomVerificationEmailTemplateCommandOutput
  | CreateReceiptFilterCommandOutput
  | CreateReceiptRuleCommandOutput
  | CreateReceiptRuleSetCommandOutput
  | CreateTemplateCommandOutput
  | DeleteConfigurationSetCommandOutput
  | DeleteConfigurationSetEventDestinationCommandOutput
  | DeleteConfigurationSetTrackingOptionsCommandOutput
  | DeleteCustomVerificationEmailTemplateCommandOutput
  | DeleteIdentityCommandOutput
  | DeleteIdentityPolicyCommandOutput
  | DeleteReceiptFilterCommandOutput
  | DeleteReceiptRuleCommandOutput
  | DeleteReceiptRuleSetCommandOutput
  | DeleteTemplateCommandOutput
  | DeleteVerifiedEmailAddressCommandOutput
  | DescribeActiveReceiptRuleSetCommandOutput
  | DescribeConfigurationSetCommandOutput
  | DescribeReceiptRuleCommandOutput
  | DescribeReceiptRuleSetCommandOutput
  | GetAccountSendingEnabledCommandOutput
  | GetCustomVerificationEmailTemplateCommandOutput
  | GetIdentityDkimAttributesCommandOutput
  | GetIdentityMailFromDomainAttributesCommandOutput
  | GetIdentityNotificationAttributesCommandOutput
  | GetIdentityPoliciesCommandOutput
  | GetIdentityVerificationAttributesCommandOutput
  | GetSendQuotaCommandOutput
  | GetSendStatisticsCommandOutput
  | GetTemplateCommandOutput
  | ListConfigurationSetsCommandOutput
  | ListCustomVerificationEmailTemplatesCommandOutput
  | ListIdentitiesCommandOutput
  | ListIdentityPoliciesCommandOutput
  | ListReceiptFiltersCommandOutput
  | ListReceiptRuleSetsCommandOutput
  | ListTemplatesCommandOutput
  | ListVerifiedEmailAddressesCommandOutput
  | PutConfigurationSetDeliveryOptionsCommandOutput
  | PutIdentityPolicyCommandOutput
  | ReorderReceiptRuleSetCommandOutput
  | SendBounceCommandOutput
  | SendBulkTemplatedEmailCommandOutput
  | SendCustomVerificationEmailCommandOutput
  | SendEmailCommandOutput
  | SendRawEmailCommandOutput
  | SendTemplatedEmailCommandOutput
  | SetActiveReceiptRuleSetCommandOutput
  | SetIdentityDkimEnabledCommandOutput
  | SetIdentityFeedbackForwardingEnabledCommandOutput
  | SetIdentityHeadersInNotificationsEnabledCommandOutput
  | SetIdentityMailFromDomainCommandOutput
  | SetIdentityNotificationTopicCommandOutput
  | SetReceiptRulePositionCommandOutput
  | TestRenderTemplateCommandOutput
  | UpdateAccountSendingEnabledCommandOutput
  | UpdateConfigurationSetEventDestinationCommandOutput
  | UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  | UpdateConfigurationSetSendingEnabledCommandOutput
  | UpdateConfigurationSetTrackingOptionsCommandOutput
  | UpdateCustomVerificationEmailTemplateCommandOutput
  | UpdateReceiptRuleCommandOutput
  | UpdateTemplateCommandOutput
  | VerifyDomainDkimCommandOutput
  | VerifyDomainIdentityCommandOutput
  | VerifyEmailAddressCommandOutput
  | VerifyEmailIdentityCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type SESClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SESClient class constructor that set the region, credentials and other options.
 */
export interface SESClientConfig extends SESClientConfigType {}

type SESClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SESClient class. This is resolved and normalized from the {@link SESClientConfig | constructor configuration interface}.
 */
export interface SESClientResolvedConfig extends SESClientResolvedConfigType {}

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
  /**
   * The resolved configuration of SESClient class. This is resolved and normalized from the {@link SESClientConfig | constructor configuration interface}.
   */
  readonly config: SESClientResolvedConfig;

  constructor(configuration: SESClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
