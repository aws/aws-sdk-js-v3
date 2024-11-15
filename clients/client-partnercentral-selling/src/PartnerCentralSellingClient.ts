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
  defaultPartnerCentralSellingHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssignOpportunityCommandInput, AssignOpportunityCommandOutput } from "./commands/AssignOpportunityCommand";
import {
  AssociateOpportunityCommandInput,
  AssociateOpportunityCommandOutput,
} from "./commands/AssociateOpportunityCommand";
import { CreateOpportunityCommandInput, CreateOpportunityCommandOutput } from "./commands/CreateOpportunityCommand";
import {
  DisassociateOpportunityCommandInput,
  DisassociateOpportunityCommandOutput,
} from "./commands/DisassociateOpportunityCommand";
import {
  GetAwsOpportunitySummaryCommandInput,
  GetAwsOpportunitySummaryCommandOutput,
} from "./commands/GetAwsOpportunitySummaryCommand";
import {
  GetEngagementInvitationCommandInput,
  GetEngagementInvitationCommandOutput,
} from "./commands/GetEngagementInvitationCommand";
import { GetOpportunityCommandInput, GetOpportunityCommandOutput } from "./commands/GetOpportunityCommand";
import {
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "./commands/ListEngagementInvitationsCommand";
import { ListOpportunitiesCommandInput, ListOpportunitiesCommandOutput } from "./commands/ListOpportunitiesCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "./commands/ListSolutionsCommand";
import {
  RejectEngagementInvitationCommandInput,
  RejectEngagementInvitationCommandOutput,
} from "./commands/RejectEngagementInvitationCommand";
import {
  StartEngagementByAcceptingInvitationTaskCommandInput,
  StartEngagementByAcceptingInvitationTaskCommandOutput,
} from "./commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  StartEngagementFromOpportunityTaskCommandInput,
  StartEngagementFromOpportunityTaskCommandOutput,
} from "./commands/StartEngagementFromOpportunityTaskCommand";
import { UpdateOpportunityCommandInput, UpdateOpportunityCommandOutput } from "./commands/UpdateOpportunityCommand";
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
  | AssignOpportunityCommandInput
  | AssociateOpportunityCommandInput
  | CreateOpportunityCommandInput
  | DisassociateOpportunityCommandInput
  | GetAwsOpportunitySummaryCommandInput
  | GetEngagementInvitationCommandInput
  | GetOpportunityCommandInput
  | ListEngagementInvitationsCommandInput
  | ListOpportunitiesCommandInput
  | ListSolutionsCommandInput
  | RejectEngagementInvitationCommandInput
  | StartEngagementByAcceptingInvitationTaskCommandInput
  | StartEngagementFromOpportunityTaskCommandInput
  | UpdateOpportunityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssignOpportunityCommandOutput
  | AssociateOpportunityCommandOutput
  | CreateOpportunityCommandOutput
  | DisassociateOpportunityCommandOutput
  | GetAwsOpportunitySummaryCommandOutput
  | GetEngagementInvitationCommandOutput
  | GetOpportunityCommandOutput
  | ListEngagementInvitationsCommandOutput
  | ListOpportunitiesCommandOutput
  | ListSolutionsCommandOutput
  | RejectEngagementInvitationCommandOutput
  | StartEngagementByAcceptingInvitationTaskCommandOutput
  | StartEngagementFromOpportunityTaskCommandOutput
  | UpdateOpportunityCommandOutput;

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
export type PartnerCentralSellingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of PartnerCentralSellingClient class constructor that set the region, credentials and other options.
 */
export interface PartnerCentralSellingClientConfig extends PartnerCentralSellingClientConfigType {}

/**
 * @public
 */
export type PartnerCentralSellingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of PartnerCentralSellingClient class. This is resolved and normalized from the {@link PartnerCentralSellingClientConfig | constructor configuration interface}.
 */
export interface PartnerCentralSellingClientResolvedConfig extends PartnerCentralSellingClientResolvedConfigType {}

/**
 * <fullname>AWS Partner Central API for Selling</fullname>
 *          <p>
 *             <b>AWS Partner Central API for Selling Reference Guide</b>
 *          </p>
 *          <p>This Amazon Web Services (AWS) Partner Central API reference is
 *       designed to help <a href="http://aws.amazon.com/partners/programs/">AWS
 *         Partners</a> integrate Customer Relationship Management (CRM)
 *       systems with AWS Partner Central. Partners can automate interactions with
 *       AWS Partner Central, which helps to ensure effective engagements in joint
 *       business activities.</p>
 *          <p>The API provides standard AWS API functionality. Access it by
 *       either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your
 *       programming language or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with
 *         AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p>
 *          <p class="title">
 *             <b>Features offered by AWS Partner Central API</b>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <b>Opportunity management:</b>
 *           Manages coselling opportunities through API actions such as
 *             <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>,
 *             <code>ListOpportunities</code>, <code>GetOpportunity</code>, and
 *             <code>AssignOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>AWS referral management:</b>
 *           Manages referrals shared by AWS using actions such as
 *             <code>ListEngagementInvitations</code>,
 *             <code>GetEngagementInvitation</code>,
 *             <code>StartEngagementByAcceptingInvitation</code>, and
 *             <code>RejectEngagementInvitation</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Entity association:</b>
 *           Associates related entities such as <i>AWS Products</i>,
 *             <i>Partner Solutions</i>, and <i>AWS
 *             Marketplace Private Offers</i> with opportunities using the
 *           actions <code>AssociateOpportunity</code>, and
 *             <code>DisassociateOpportunity</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>View AWS opportunity
 *             details:</b> Retrieves real-time summaries of AWS
 *           opportunities using the <code>GetAWSOpportunitySummary</code>
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>List solutions:</b> Provides
 *           list APIs for listing partner offers using
 *           <code>ListSolutions</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Event subscription:</b>
 *           Subscribe to real-time opportunity updates through AWS EventBridge by
 *           using actions such as <i>Opportunity Created</i>,
 *             <i>Opportunity Updated</i>, <i>Engagement
 *             Invitation Accepted</i>, <i>Engagement Invitation
 *             Rejected</i>, and <i>Engagement Invitation
 *             Created</i>.</p>
 *             </li>
 *          </ol>
 * @public
 */
export class PartnerCentralSellingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PartnerCentralSellingClientResolvedConfig
> {
  /**
   * The resolved configuration of PartnerCentralSellingClient class. This is resolved and normalized from the {@link PartnerCentralSellingClientConfig | constructor configuration interface}.
   */
  readonly config: PartnerCentralSellingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PartnerCentralSellingClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
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
        httpAuthSchemeParametersProvider: defaultPartnerCentralSellingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: PartnerCentralSellingClientResolvedConfig) =>
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
