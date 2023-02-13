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
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "./commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "./commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "./commands/BatchImportFindingsCommand";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "./commands/BatchUpdateFindingsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "./commands/CreateActionTargetCommand";
import {
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "./commands/CreateFindingAggregatorCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "./commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "./commands/DeleteActionTargetCommand";
import {
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
} from "./commands/DeleteFindingAggregatorCommand";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "./commands/DeleteInsightCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "./commands/DescribeActionTargetsCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "./commands/DescribeProductsCommand";
import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "./commands/DescribeStandardsCommand";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "./commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "./commands/DisableImportFindingsForProductCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import { DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput } from "./commands/DisableSecurityHubCommand";
import {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "./commands/EnableImportFindingsForProductCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import { EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput } from "./commands/EnableSecurityHubCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "./commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "./commands/GetFindingAggregatorCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "./commands/GetInsightResultsCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "./commands/ListEnabledProductsForImportCommand";
import {
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "./commands/ListFindingAggregatorsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "./commands/UpdateActionTargetCommand";
import {
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
} from "./commands/UpdateFindingAggregatorCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { UpdateInsightCommandInput, UpdateInsightCommandOutput } from "./commands/UpdateInsightCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "./commands/UpdateSecurityHubConfigurationCommand";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "./commands/UpdateStandardsControlCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptAdministratorInvitationCommandInput
  | AcceptInvitationCommandInput
  | BatchDisableStandardsCommandInput
  | BatchEnableStandardsCommandInput
  | BatchImportFindingsCommandInput
  | BatchUpdateFindingsCommandInput
  | CreateActionTargetCommandInput
  | CreateFindingAggregatorCommandInput
  | CreateInsightCommandInput
  | CreateMembersCommandInput
  | DeclineInvitationsCommandInput
  | DeleteActionTargetCommandInput
  | DeleteFindingAggregatorCommandInput
  | DeleteInsightCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMembersCommandInput
  | DescribeActionTargetsCommandInput
  | DescribeHubCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DescribeProductsCommandInput
  | DescribeStandardsCommandInput
  | DescribeStandardsControlsCommandInput
  | DisableImportFindingsForProductCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisableSecurityHubCommandInput
  | DisassociateFromAdministratorAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMembersCommandInput
  | EnableImportFindingsForProductCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | EnableSecurityHubCommandInput
  | GetAdministratorAccountCommandInput
  | GetEnabledStandardsCommandInput
  | GetFindingAggregatorCommandInput
  | GetFindingsCommandInput
  | GetInsightResultsCommandInput
  | GetInsightsCommandInput
  | GetInvitationsCountCommandInput
  | GetMasterAccountCommandInput
  | GetMembersCommandInput
  | InviteMembersCommandInput
  | ListEnabledProductsForImportCommandInput
  | ListFindingAggregatorsCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateActionTargetCommandInput
  | UpdateFindingAggregatorCommandInput
  | UpdateFindingsCommandInput
  | UpdateInsightCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdateSecurityHubConfigurationCommandInput
  | UpdateStandardsControlCommandInput;

export type ServiceOutputTypes =
  | AcceptAdministratorInvitationCommandOutput
  | AcceptInvitationCommandOutput
  | BatchDisableStandardsCommandOutput
  | BatchEnableStandardsCommandOutput
  | BatchImportFindingsCommandOutput
  | BatchUpdateFindingsCommandOutput
  | CreateActionTargetCommandOutput
  | CreateFindingAggregatorCommandOutput
  | CreateInsightCommandOutput
  | CreateMembersCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteActionTargetCommandOutput
  | DeleteFindingAggregatorCommandOutput
  | DeleteInsightCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMembersCommandOutput
  | DescribeActionTargetsCommandOutput
  | DescribeHubCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DescribeProductsCommandOutput
  | DescribeStandardsCommandOutput
  | DescribeStandardsControlsCommandOutput
  | DisableImportFindingsForProductCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisableSecurityHubCommandOutput
  | DisassociateFromAdministratorAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMembersCommandOutput
  | EnableImportFindingsForProductCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | EnableSecurityHubCommandOutput
  | GetAdministratorAccountCommandOutput
  | GetEnabledStandardsCommandOutput
  | GetFindingAggregatorCommandOutput
  | GetFindingsCommandOutput
  | GetInsightResultsCommandOutput
  | GetInsightsCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMasterAccountCommandOutput
  | GetMembersCommandOutput
  | InviteMembersCommandOutput
  | ListEnabledProductsForImportCommandOutput
  | ListFindingAggregatorsCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateActionTargetCommandOutput
  | UpdateFindingAggregatorCommandOutput
  | UpdateFindingsCommandOutput
  | UpdateInsightCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdateSecurityHubConfigurationCommandOutput
  | UpdateStandardsControlCommandOutput;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type SecurityHubClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SecurityHubClient class constructor that set the region, credentials and other options.
 */
export interface SecurityHubClientConfig extends SecurityHubClientConfigType {}

type SecurityHubClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SecurityHubClient class. This is resolved and normalized from the {@link SecurityHubClientConfig | constructor configuration interface}.
 */
export interface SecurityHubClientResolvedConfig extends SecurityHubClientResolvedConfigType {}

/**
 * <p>Security Hub provides you with a comprehensive view of the security state of your Amazon Web Services environment and resources. It also provides you with the readiness status
 *          of your environment based on controls from supported security standards. Security Hub collects
 *          security data from Amazon Web Services accounts, services, and integrated third-party products and helps
 *          you analyze security trends in your environment to identify the highest priority security
 *          issues. For more information about Security Hub, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
 *                <i>Security HubUser
 *             Guide</i>
 *             </a>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the Amazon Web Services
 *          Region that is currently active or in the specific Amazon Web Services Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to.</p>
 *          <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of
 *          the member account with the administrator account is created only in the <code>us-west-2</code>
 *          Region. Security Hub must be enabled for the member account in the same Region that the invitation
 *          was sent from.</p>
 *          <p>The following throttling limits apply to using Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchEnableStandards</code> - <code>RateLimit</code> of 1
 *                request per second, <code>BurstLimit</code> of 1 request per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second.
 *                   <code>BurstLimit</code> of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second.
 *             <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateStandardsControl</code> - <code>RateLimit</code> of
 *                1 request per second, <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 */
export class SecurityHubClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityHubClientResolvedConfig
> {
  /**
   * The resolved configuration of SecurityHubClient class. This is resolved and normalized from the {@link SecurityHubClientConfig | constructor configuration interface}.
   */
  readonly config: SecurityHubClientResolvedConfig;

  constructor(configuration: SecurityHubClientConfig) {
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
