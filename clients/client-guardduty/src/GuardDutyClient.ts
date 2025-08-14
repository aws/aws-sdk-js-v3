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
  defaultGuardDutyHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "./commands/ArchiveFindingsCommand";
import { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "./commands/CreateDetectorCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateMalwareProtectionPlanCommandInput,
  CreateMalwareProtectionPlanCommandOutput,
} from "./commands/CreateMalwareProtectionPlanCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "./commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import {
  CreateThreatEntitySetCommandInput,
  CreateThreatEntitySetCommandOutput,
} from "./commands/CreateThreatEntitySetCommand";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "./commands/CreateThreatIntelSetCommand";
import {
  CreateTrustedEntitySetCommandInput,
  CreateTrustedEntitySetCommandOutput,
} from "./commands/CreateTrustedEntitySetCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteMalwareProtectionPlanCommandInput,
  DeleteMalwareProtectionPlanCommandOutput,
} from "./commands/DeleteMalwareProtectionPlanCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "./commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatEntitySetCommandInput,
  DeleteThreatEntitySetCommandOutput,
} from "./commands/DeleteThreatEntitySetCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "./commands/DeleteThreatIntelSetCommand";
import {
  DeleteTrustedEntitySetCommandInput,
  DeleteTrustedEntitySetCommandOutput,
} from "./commands/DeleteTrustedEntitySetCommand";
import {
  DescribeMalwareScansCommandInput,
  DescribeMalwareScansCommandOutput,
} from "./commands/DescribeMalwareScansCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "./commands/DescribePublishingDestinationCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
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
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import {
  GetCoverageStatisticsCommandInput,
  GetCoverageStatisticsCommandOutput,
} from "./commands/GetCoverageStatisticsCommand";
import { GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand";
import { GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "./commands/GetFindingsStatisticsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetMalwareProtectionPlanCommandInput,
  GetMalwareProtectionPlanCommandOutput,
} from "./commands/GetMalwareProtectionPlanCommand";
import {
  GetMalwareScanSettingsCommandInput,
  GetMalwareScanSettingsCommandOutput,
} from "./commands/GetMalwareScanSettingsCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput } from "./commands/GetMemberDetectorsCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  GetOrganizationStatisticsCommandInput,
  GetOrganizationStatisticsCommandOutput,
} from "./commands/GetOrganizationStatisticsCommand";
import {
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
} from "./commands/GetRemainingFreeTrialDaysCommand";
import { GetThreatEntitySetCommandInput, GetThreatEntitySetCommandOutput } from "./commands/GetThreatEntitySetCommand";
import { GetThreatIntelSetCommandInput, GetThreatIntelSetCommandOutput } from "./commands/GetThreatIntelSetCommand";
import {
  GetTrustedEntitySetCommandInput,
  GetTrustedEntitySetCommandOutput,
} from "./commands/GetTrustedEntitySetCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "./commands/ListCoverageCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "./commands/ListDetectorsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListMalwareProtectionPlansCommandInput,
  ListMalwareProtectionPlansCommandOutput,
} from "./commands/ListMalwareProtectionPlansCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "./commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThreatEntitySetsCommandInput,
  ListThreatEntitySetsCommandOutput,
} from "./commands/ListThreatEntitySetsCommand";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "./commands/ListThreatIntelSetsCommand";
import {
  ListTrustedEntitySetsCommandInput,
  ListTrustedEntitySetsCommandOutput,
} from "./commands/ListTrustedEntitySetsCommand";
import { StartMalwareScanCommandInput, StartMalwareScanCommandOutput } from "./commands/StartMalwareScanCommand";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "./commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "./commands/StopMonitoringMembersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput } from "./commands/UnarchiveFindingsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "./commands/UpdateDetectorCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "./commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateMalwareProtectionPlanCommandInput,
  UpdateMalwareProtectionPlanCommandOutput,
} from "./commands/UpdateMalwareProtectionPlanCommand";
import {
  UpdateMalwareScanSettingsCommandInput,
  UpdateMalwareScanSettingsCommandOutput,
} from "./commands/UpdateMalwareScanSettingsCommand";
import {
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "./commands/UpdateMemberDetectorsCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "./commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatEntitySetCommandInput,
  UpdateThreatEntitySetCommandOutput,
} from "./commands/UpdateThreatEntitySetCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "./commands/UpdateThreatIntelSetCommand";
import {
  UpdateTrustedEntitySetCommandInput,
  UpdateTrustedEntitySetCommandOutput,
} from "./commands/UpdateTrustedEntitySetCommand";
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
  | ArchiveFindingsCommandInput
  | CreateDetectorCommandInput
  | CreateFilterCommandInput
  | CreateIPSetCommandInput
  | CreateMalwareProtectionPlanCommandInput
  | CreateMembersCommandInput
  | CreatePublishingDestinationCommandInput
  | CreateSampleFindingsCommandInput
  | CreateThreatEntitySetCommandInput
  | CreateThreatIntelSetCommandInput
  | CreateTrustedEntitySetCommandInput
  | DeclineInvitationsCommandInput
  | DeleteDetectorCommandInput
  | DeleteFilterCommandInput
  | DeleteIPSetCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMalwareProtectionPlanCommandInput
  | DeleteMembersCommandInput
  | DeletePublishingDestinationCommandInput
  | DeleteThreatEntitySetCommandInput
  | DeleteThreatIntelSetCommandInput
  | DeleteTrustedEntitySetCommandInput
  | DescribeMalwareScansCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DescribePublishingDestinationCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisassociateFromAdministratorAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMembersCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | GetAdministratorAccountCommandInput
  | GetCoverageStatisticsCommandInput
  | GetDetectorCommandInput
  | GetFilterCommandInput
  | GetFindingsCommandInput
  | GetFindingsStatisticsCommandInput
  | GetIPSetCommandInput
  | GetInvitationsCountCommandInput
  | GetMalwareProtectionPlanCommandInput
  | GetMalwareScanSettingsCommandInput
  | GetMasterAccountCommandInput
  | GetMemberDetectorsCommandInput
  | GetMembersCommandInput
  | GetOrganizationStatisticsCommandInput
  | GetRemainingFreeTrialDaysCommandInput
  | GetThreatEntitySetCommandInput
  | GetThreatIntelSetCommandInput
  | GetTrustedEntitySetCommandInput
  | GetUsageStatisticsCommandInput
  | InviteMembersCommandInput
  | ListCoverageCommandInput
  | ListDetectorsCommandInput
  | ListFiltersCommandInput
  | ListFindingsCommandInput
  | ListIPSetsCommandInput
  | ListInvitationsCommandInput
  | ListMalwareProtectionPlansCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListPublishingDestinationsCommandInput
  | ListTagsForResourceCommandInput
  | ListThreatEntitySetsCommandInput
  | ListThreatIntelSetsCommandInput
  | ListTrustedEntitySetsCommandInput
  | StartMalwareScanCommandInput
  | StartMonitoringMembersCommandInput
  | StopMonitoringMembersCommandInput
  | TagResourceCommandInput
  | UnarchiveFindingsCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorCommandInput
  | UpdateFilterCommandInput
  | UpdateFindingsFeedbackCommandInput
  | UpdateIPSetCommandInput
  | UpdateMalwareProtectionPlanCommandInput
  | UpdateMalwareScanSettingsCommandInput
  | UpdateMemberDetectorsCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdatePublishingDestinationCommandInput
  | UpdateThreatEntitySetCommandInput
  | UpdateThreatIntelSetCommandInput
  | UpdateTrustedEntitySetCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptAdministratorInvitationCommandOutput
  | AcceptInvitationCommandOutput
  | ArchiveFindingsCommandOutput
  | CreateDetectorCommandOutput
  | CreateFilterCommandOutput
  | CreateIPSetCommandOutput
  | CreateMalwareProtectionPlanCommandOutput
  | CreateMembersCommandOutput
  | CreatePublishingDestinationCommandOutput
  | CreateSampleFindingsCommandOutput
  | CreateThreatEntitySetCommandOutput
  | CreateThreatIntelSetCommandOutput
  | CreateTrustedEntitySetCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteDetectorCommandOutput
  | DeleteFilterCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMalwareProtectionPlanCommandOutput
  | DeleteMembersCommandOutput
  | DeletePublishingDestinationCommandOutput
  | DeleteThreatEntitySetCommandOutput
  | DeleteThreatIntelSetCommandOutput
  | DeleteTrustedEntitySetCommandOutput
  | DescribeMalwareScansCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DescribePublishingDestinationCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisassociateFromAdministratorAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMembersCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | GetAdministratorAccountCommandOutput
  | GetCoverageStatisticsCommandOutput
  | GetDetectorCommandOutput
  | GetFilterCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsStatisticsCommandOutput
  | GetIPSetCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMalwareProtectionPlanCommandOutput
  | GetMalwareScanSettingsCommandOutput
  | GetMasterAccountCommandOutput
  | GetMemberDetectorsCommandOutput
  | GetMembersCommandOutput
  | GetOrganizationStatisticsCommandOutput
  | GetRemainingFreeTrialDaysCommandOutput
  | GetThreatEntitySetCommandOutput
  | GetThreatIntelSetCommandOutput
  | GetTrustedEntitySetCommandOutput
  | GetUsageStatisticsCommandOutput
  | InviteMembersCommandOutput
  | ListCoverageCommandOutput
  | ListDetectorsCommandOutput
  | ListFiltersCommandOutput
  | ListFindingsCommandOutput
  | ListIPSetsCommandOutput
  | ListInvitationsCommandOutput
  | ListMalwareProtectionPlansCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListPublishingDestinationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThreatEntitySetsCommandOutput
  | ListThreatIntelSetsCommandOutput
  | ListTrustedEntitySetsCommandOutput
  | StartMalwareScanCommandOutput
  | StartMonitoringMembersCommandOutput
  | StopMonitoringMembersCommandOutput
  | TagResourceCommandOutput
  | UnarchiveFindingsCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorCommandOutput
  | UpdateFilterCommandOutput
  | UpdateFindingsFeedbackCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateMalwareProtectionPlanCommandOutput
  | UpdateMalwareScanSettingsCommandOutput
  | UpdateMemberDetectorsCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdatePublishingDestinationCommandOutput
  | UpdateThreatEntitySetCommandOutput
  | UpdateThreatIntelSetCommandOutput
  | UpdateTrustedEntitySetCommandOutput;

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
export type GuardDutyClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of GuardDutyClient class constructor that set the region, credentials and other options.
 */
export interface GuardDutyClientConfig extends GuardDutyClientConfigType {}

/**
 * @public
 */
export type GuardDutyClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of GuardDutyClient class. This is resolved and normalized from the {@link GuardDutyClientConfig | constructor configuration interface}.
 */
export interface GuardDutyClientResolvedConfig extends GuardDutyClientResolvedConfigType {}

/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
 *       logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such
 *       as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances.
 *       It uses threat intelligence
 *       feeds, such as lists of malicious IPs and domains, and machine learning to identify
 *       unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment.
 *       This can include issues like escalations of privileges, uses of exposed credentials, or
 *       communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances
 *       and container workloads. For example, GuardDuty can detect compromised EC2 instances and
 *       container workloads serving malware, or mining bitcoin. </p>
 *          <p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as
 *       unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never
 *       been used, or unusual API calls like a password policy change to reduce password strength. </p>
 *          <p>GuardDuty informs you about the status of your Amazon Web Services environment by producing security
 *       findings that you can view in the GuardDuty console or through Amazon EventBridge. For more
 *       information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 * @public
 */
export class GuardDutyClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GuardDutyClientResolvedConfig
> {
  /**
   * The resolved configuration of GuardDutyClient class. This is resolved and normalized from the {@link GuardDutyClientConfig | constructor configuration interface}.
   */
  readonly config: GuardDutyClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GuardDutyClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultGuardDutyHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GuardDutyClientResolvedConfig) =>
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
