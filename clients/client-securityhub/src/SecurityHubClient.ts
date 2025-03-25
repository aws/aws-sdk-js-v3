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
  defaultSecurityHubHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import {
  BatchDeleteAutomationRulesCommandInput,
  BatchDeleteAutomationRulesCommandOutput,
} from "./commands/BatchDeleteAutomationRulesCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "./commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "./commands/BatchEnableStandardsCommand";
import {
  BatchGetAutomationRulesCommandInput,
  BatchGetAutomationRulesCommandOutput,
} from "./commands/BatchGetAutomationRulesCommand";
import {
  BatchGetConfigurationPolicyAssociationsCommandInput,
  BatchGetConfigurationPolicyAssociationsCommandOutput,
} from "./commands/BatchGetConfigurationPolicyAssociationsCommand";
import {
  BatchGetSecurityControlsCommandInput,
  BatchGetSecurityControlsCommandOutput,
} from "./commands/BatchGetSecurityControlsCommand";
import {
  BatchGetStandardsControlAssociationsCommandInput,
  BatchGetStandardsControlAssociationsCommandOutput,
} from "./commands/BatchGetStandardsControlAssociationsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "./commands/BatchImportFindingsCommand";
import {
  BatchUpdateAutomationRulesCommandInput,
  BatchUpdateAutomationRulesCommandOutput,
} from "./commands/BatchUpdateAutomationRulesCommand";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "./commands/BatchUpdateFindingsCommand";
import {
  BatchUpdateStandardsControlAssociationsCommandInput,
  BatchUpdateStandardsControlAssociationsCommandOutput,
} from "./commands/BatchUpdateStandardsControlAssociationsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "./commands/CreateActionTargetCommand";
import {
  CreateAutomationRuleCommandInput,
  CreateAutomationRuleCommandOutput,
} from "./commands/CreateAutomationRuleCommand";
import {
  CreateConfigurationPolicyCommandInput,
  CreateConfigurationPolicyCommandOutput,
} from "./commands/CreateConfigurationPolicyCommand";
import {
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "./commands/CreateFindingAggregatorCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "./commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "./commands/DeleteActionTargetCommand";
import {
  DeleteConfigurationPolicyCommandInput,
  DeleteConfigurationPolicyCommandOutput,
} from "./commands/DeleteConfigurationPolicyCommand";
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
  GetConfigurationPolicyAssociationCommandInput,
  GetConfigurationPolicyAssociationCommandOutput,
} from "./commands/GetConfigurationPolicyAssociationCommand";
import {
  GetConfigurationPolicyCommandInput,
  GetConfigurationPolicyCommandOutput,
} from "./commands/GetConfigurationPolicyCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "./commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "./commands/GetFindingAggregatorCommand";
import { GetFindingHistoryCommandInput, GetFindingHistoryCommandOutput } from "./commands/GetFindingHistoryCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "./commands/GetInsightResultsCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  GetSecurityControlDefinitionCommandInput,
  GetSecurityControlDefinitionCommandOutput,
} from "./commands/GetSecurityControlDefinitionCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import {
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
} from "./commands/ListAutomationRulesCommand";
import {
  ListConfigurationPoliciesCommandInput,
  ListConfigurationPoliciesCommandOutput,
} from "./commands/ListConfigurationPoliciesCommand";
import {
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput,
} from "./commands/ListConfigurationPolicyAssociationsCommand";
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
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
} from "./commands/ListSecurityControlDefinitionsCommand";
import {
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
} from "./commands/ListStandardsControlAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartConfigurationPolicyAssociationCommandInput,
  StartConfigurationPolicyAssociationCommandOutput,
} from "./commands/StartConfigurationPolicyAssociationCommand";
import {
  StartConfigurationPolicyDisassociationCommandInput,
  StartConfigurationPolicyDisassociationCommandOutput,
} from "./commands/StartConfigurationPolicyDisassociationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "./commands/UpdateActionTargetCommand";
import {
  UpdateConfigurationPolicyCommandInput,
  UpdateConfigurationPolicyCommandOutput,
} from "./commands/UpdateConfigurationPolicyCommand";
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
  UpdateSecurityControlCommandInput,
  UpdateSecurityControlCommandOutput,
} from "./commands/UpdateSecurityControlCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptAdministratorInvitationCommandInput
  | AcceptInvitationCommandInput
  | BatchDeleteAutomationRulesCommandInput
  | BatchDisableStandardsCommandInput
  | BatchEnableStandardsCommandInput
  | BatchGetAutomationRulesCommandInput
  | BatchGetConfigurationPolicyAssociationsCommandInput
  | BatchGetSecurityControlsCommandInput
  | BatchGetStandardsControlAssociationsCommandInput
  | BatchImportFindingsCommandInput
  | BatchUpdateAutomationRulesCommandInput
  | BatchUpdateFindingsCommandInput
  | BatchUpdateStandardsControlAssociationsCommandInput
  | CreateActionTargetCommandInput
  | CreateAutomationRuleCommandInput
  | CreateConfigurationPolicyCommandInput
  | CreateFindingAggregatorCommandInput
  | CreateInsightCommandInput
  | CreateMembersCommandInput
  | DeclineInvitationsCommandInput
  | DeleteActionTargetCommandInput
  | DeleteConfigurationPolicyCommandInput
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
  | GetConfigurationPolicyAssociationCommandInput
  | GetConfigurationPolicyCommandInput
  | GetEnabledStandardsCommandInput
  | GetFindingAggregatorCommandInput
  | GetFindingHistoryCommandInput
  | GetFindingsCommandInput
  | GetInsightResultsCommandInput
  | GetInsightsCommandInput
  | GetInvitationsCountCommandInput
  | GetMasterAccountCommandInput
  | GetMembersCommandInput
  | GetSecurityControlDefinitionCommandInput
  | InviteMembersCommandInput
  | ListAutomationRulesCommandInput
  | ListConfigurationPoliciesCommandInput
  | ListConfigurationPolicyAssociationsCommandInput
  | ListEnabledProductsForImportCommandInput
  | ListFindingAggregatorsCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListSecurityControlDefinitionsCommandInput
  | ListStandardsControlAssociationsCommandInput
  | ListTagsForResourceCommandInput
  | StartConfigurationPolicyAssociationCommandInput
  | StartConfigurationPolicyDisassociationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateActionTargetCommandInput
  | UpdateConfigurationPolicyCommandInput
  | UpdateFindingAggregatorCommandInput
  | UpdateFindingsCommandInput
  | UpdateInsightCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdateSecurityControlCommandInput
  | UpdateSecurityHubConfigurationCommandInput
  | UpdateStandardsControlCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptAdministratorInvitationCommandOutput
  | AcceptInvitationCommandOutput
  | BatchDeleteAutomationRulesCommandOutput
  | BatchDisableStandardsCommandOutput
  | BatchEnableStandardsCommandOutput
  | BatchGetAutomationRulesCommandOutput
  | BatchGetConfigurationPolicyAssociationsCommandOutput
  | BatchGetSecurityControlsCommandOutput
  | BatchGetStandardsControlAssociationsCommandOutput
  | BatchImportFindingsCommandOutput
  | BatchUpdateAutomationRulesCommandOutput
  | BatchUpdateFindingsCommandOutput
  | BatchUpdateStandardsControlAssociationsCommandOutput
  | CreateActionTargetCommandOutput
  | CreateAutomationRuleCommandOutput
  | CreateConfigurationPolicyCommandOutput
  | CreateFindingAggregatorCommandOutput
  | CreateInsightCommandOutput
  | CreateMembersCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteActionTargetCommandOutput
  | DeleteConfigurationPolicyCommandOutput
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
  | GetConfigurationPolicyAssociationCommandOutput
  | GetConfigurationPolicyCommandOutput
  | GetEnabledStandardsCommandOutput
  | GetFindingAggregatorCommandOutput
  | GetFindingHistoryCommandOutput
  | GetFindingsCommandOutput
  | GetInsightResultsCommandOutput
  | GetInsightsCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMasterAccountCommandOutput
  | GetMembersCommandOutput
  | GetSecurityControlDefinitionCommandOutput
  | InviteMembersCommandOutput
  | ListAutomationRulesCommandOutput
  | ListConfigurationPoliciesCommandOutput
  | ListConfigurationPolicyAssociationsCommandOutput
  | ListEnabledProductsForImportCommandOutput
  | ListFindingAggregatorsCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListSecurityControlDefinitionsCommandOutput
  | ListStandardsControlAssociationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartConfigurationPolicyAssociationCommandOutput
  | StartConfigurationPolicyDisassociationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateActionTargetCommandOutput
  | UpdateConfigurationPolicyCommandOutput
  | UpdateFindingAggregatorCommandOutput
  | UpdateFindingsCommandOutput
  | UpdateInsightCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdateSecurityControlCommandOutput
  | UpdateSecurityHubConfigurationCommandOutput
  | UpdateStandardsControlCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SecurityHubClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SecurityHubClient class constructor that set the region, credentials and other options.
 */
export interface SecurityHubClientConfig extends SecurityHubClientConfigType {}

/**
 * @public
 */
export type SecurityHubClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SecurityHubClient class. This is resolved and normalized from the {@link SecurityHubClientConfig | constructor configuration interface}.
 */
export interface SecurityHubClientResolvedConfig extends SecurityHubClientResolvedConfigType {}

/**
 * <p>Security Hub provides you with a comprehensive view of your security state in Amazon Web Services and helps
 *            you assess your Amazon Web Services environment against security industry standards and best practices.</p>
 *          <p>Security Hub collects security data across Amazon Web Services accounts, Amazon Web Services services, and
 *             supported third-party products and helps you analyze your security trends and identify the highest priority security
 *             issues.</p>
 *          <p>To help you manage the security state of your organization, Security Hub supports multiple security standards.
 *            These include the Amazon Web Services Foundational Security Best Practices (FSBP) standard developed by Amazon Web Services,
 *             and external compliance frameworks such as the Center for Internet Security (CIS), the Payment Card Industry Data
 *             Security Standard (PCI DSS), and the National Institute of Standards and Technology (NIST). Each standard includes
 *             several security controls, each of which represents a security best practice. Security Hub runs checks against
 *             security controls and generates control findings to help you assess your compliance against security best practices.</p>
 *          <p>In addition to generating control findings, Security Hub also receives findings from other Amazon Web Services services,
 *             such as Amazon GuardDuty and Amazon Inspector, and
 *             supported third-party products. This gives you a single pane of glass into a variety of security-related issues. You
 *             can also send Security Hub findings to other Amazon Web Services services and supported third-party products.</p>
 *          <p>Security Hub offers automation features that help you triage and remediate security issues. For example,
 *            you can use automation rules to automatically update critical findings when a security check fails. You can also leverage the integration with
 *            Amazon EventBridge  to trigger automatic responses to specific findings.</p>
 *          <p>This guide, the <i>Security Hub API Reference</i>, provides
 *            information about the Security Hub API. This includes supported resources, HTTP methods, parameters,
 *            and schemas. If you're new to Security Hub, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">
 *                <i>Security Hub User Guide</i>
 *             </a>. The
 *            user guide explains key concepts and provides procedures
 *            that demonstrate how to use Security Hub features. It also provides information about topics such as
 *            integrating Security Hub with other Amazon Web Services services.</p>
 *          <p>In addition to interacting with Security Hub  by making calls to the Security Hub API, you can
 *            use a current version of an Amazon Web Services command line tool or SDK. Amazon Web Services provides tools
 *             and SDKs that consist of libraries and sample code for various languages and platforms, such as PowerShell,
 *            Java, Go, Python, C++, and .NET. These tools and SDKs provide convenient, programmatic access to
 *            Security Hub  and other Amazon Web Services services . They also handle tasks such as signing requests,
 *            managing errors, and retrying requests automatically. For information about installing and using the Amazon Web Services  tools
 *            and SDKs, see <a href="http://aws.amazon.com/developer/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          <p>With the exception of operations that are related to central configuration, Security Hub API requests are executed only in
 *          the Amazon Web Services Region that is currently active or in the specific Amazon Web Services Region that you specify in your request. Any configuration or settings change
 *          that results from the operation is applied only to that Region. To make the same change in
 *          other Regions, call the same API operation in each Region in which you want to apply the change. When you use central configuration,
 * API requests for enabling Security Hub, standards, and controls are executed in the home Region and all linked Regions. For a list of
 * central configuration operations, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html#central-configuration-concepts">Central configuration
 * terms and concepts</a> section of the <i>Security Hub User Guide</i>.</p>
 *          <p>The following throttling limits apply to Security Hub API operations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchEnableStandards</code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 1 request per second.</p>
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
 *                   <code>UpdateStandardsControl</code> - <code>RateLimit</code> of 1 request per
 *                second. <code>BurstLimit</code> of 5 requests per second.</p>
 *             </li>
 *             <li>
 *                <p>All other operations - <code>RateLimit</code> of 10 requests per second.
 *                   <code>BurstLimit</code> of 30 requests per second.</p>
 *             </li>
 *          </ul>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<SecurityHubClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultSecurityHubHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SecurityHubClientResolvedConfig) =>
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
