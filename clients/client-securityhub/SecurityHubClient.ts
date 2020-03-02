import {
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput
} from "./commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput
} from "./commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput
} from "./commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput
} from "./commands/BatchImportFindingsCommand";
import {
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput
} from "./commands/CreateActionTargetCommand";
import {
  CreateInsightCommandInput,
  CreateInsightCommandOutput
} from "./commands/CreateInsightCommand";
import {
  CreateMembersCommandInput,
  CreateMembersCommandOutput
} from "./commands/CreateMembersCommand";
import {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput
} from "./commands/DeleteActionTargetCommand";
import {
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput
} from "./commands/DeleteInsightCommand";
import {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput
} from "./commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput
} from "./commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput
} from "./commands/DescribeActionTargetsCommand";
import {
  DescribeHubCommandInput,
  DescribeHubCommandOutput
} from "./commands/DescribeHubCommand";
import {
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput
} from "./commands/DescribeProductsCommand";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput
} from "./commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput
} from "./commands/DisableImportFindingsForProductCommand";
import {
  DisableSecurityHubCommandInput,
  DisableSecurityHubCommandOutput
} from "./commands/DisableSecurityHubCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput
} from "./commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput
} from "./commands/EnableImportFindingsForProductCommand";
import {
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput
} from "./commands/EnableSecurityHubCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput
} from "./commands/GetEnabledStandardsCommand";
import {
  GetFindingsCommandInput,
  GetFindingsCommandOutput
} from "./commands/GetFindingsCommand";
import {
  GetInsightResultsCommandInput,
  GetInsightResultsCommandOutput
} from "./commands/GetInsightResultsCommand";
import {
  GetInsightsCommandInput,
  GetInsightsCommandOutput
} from "./commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput
} from "./commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput
} from "./commands/GetMasterAccountCommand";
import {
  GetMembersCommandInput,
  GetMembersCommandOutput
} from "./commands/GetMembersCommand";
import {
  InviteMembersCommandInput,
  InviteMembersCommandOutput
} from "./commands/InviteMembersCommand";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput
} from "./commands/ListEnabledProductsForImportCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "./commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "./commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateActionTargetCommandInput,
  UpdateActionTargetCommandOutput
} from "./commands/UpdateActionTargetCommand";
import {
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput
} from "./commands/UpdateFindingsCommand";
import {
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput
} from "./commands/UpdateInsightCommand";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput
} from "./commands/UpdateStandardsControlCommand";
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
  | AcceptInvitationCommandInput
  | BatchDisableStandardsCommandInput
  | BatchEnableStandardsCommandInput
  | BatchImportFindingsCommandInput
  | CreateActionTargetCommandInput
  | CreateInsightCommandInput
  | CreateMembersCommandInput
  | DeclineInvitationsCommandInput
  | DeleteActionTargetCommandInput
  | DeleteInsightCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMembersCommandInput
  | DescribeActionTargetsCommandInput
  | DescribeHubCommandInput
  | DescribeProductsCommandInput
  | DescribeStandardsControlsCommandInput
  | DisableImportFindingsForProductCommandInput
  | DisableSecurityHubCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMembersCommandInput
  | EnableImportFindingsForProductCommandInput
  | EnableSecurityHubCommandInput
  | GetEnabledStandardsCommandInput
  | GetFindingsCommandInput
  | GetInsightResultsCommandInput
  | GetInsightsCommandInput
  | GetInvitationsCountCommandInput
  | GetMasterAccountCommandInput
  | GetMembersCommandInput
  | InviteMembersCommandInput
  | ListEnabledProductsForImportCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateActionTargetCommandInput
  | UpdateFindingsCommandInput
  | UpdateInsightCommandInput
  | UpdateStandardsControlCommandInput;

export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | BatchDisableStandardsCommandOutput
  | BatchEnableStandardsCommandOutput
  | BatchImportFindingsCommandOutput
  | CreateActionTargetCommandOutput
  | CreateInsightCommandOutput
  | CreateMembersCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteActionTargetCommandOutput
  | DeleteInsightCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMembersCommandOutput
  | DescribeActionTargetsCommandOutput
  | DescribeHubCommandOutput
  | DescribeProductsCommandOutput
  | DescribeStandardsControlsCommandOutput
  | DisableImportFindingsForProductCommandOutput
  | DisableSecurityHubCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMembersCommandOutput
  | EnableImportFindingsForProductCommandOutput
  | EnableSecurityHubCommandOutput
  | GetEnabledStandardsCommandOutput
  | GetFindingsCommandOutput
  | GetInsightResultsCommandOutput
  | GetInsightsCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMasterAccountCommandOutput
  | GetMembersCommandOutput
  | InviteMembersCommandOutput
  | ListEnabledProductsForImportCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateActionTargetCommandOutput
  | UpdateFindingsCommandOutput
  | UpdateInsightCommandOutput
  | UpdateStandardsControlCommandOutput;

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

export type SecurityHubClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SecurityHubClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Security Hub provides you with a comprehensive view of the security state of your AWS
 *          environment and resources. It also provides you with the compliance status of your
 *          environment based on CIS AWS Foundations compliance checks. Security Hub collects security data
 *          from AWS accounts, services, and integrated third-party products and helps you analyze
 *          security trends in your environment to identify the highest priority security issues. For
 *          more information about Security Hub, see the <i>
 *                <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User Guide</a>
 *             </i>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the AWS
 *          Region that is currently active or in the specific AWS Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to. For example, if your Region is set to
 *             <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account
 *          to Security Hub, the association of the member account with the master account is created only in
 *          the us-west-2 Region. Security Hub must be enabled for the member account in the same Region that
 *          the invite was sent from.</p>
 *          <p>The following throttling limits apply to using Security Hub API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>GetFindings</code> - RateLimit of 3 requests per second, and a BurstLimit of 6 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateFindings</code> - RateLimit of 1 request per second, and a BurstLimit of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - RateLimit of 10 request per second, and a BurstLimit of 30 requests per second.</p>
 *             </li>
 *          </ul>
 */
export class SecurityHubClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityHubClientResolvedConfig
> {
  readonly config: SecurityHubClientResolvedConfig;

  constructor(configuration: SecurityHubClientConfig) {
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
