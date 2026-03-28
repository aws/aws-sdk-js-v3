// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultGuardDutyHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import type { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import type { ArchiveFindingsCommandInput, ArchiveFindingsCommandOutput } from "./commands/ArchiveFindingsCommand";
import type { CreateDetectorCommandInput, CreateDetectorCommandOutput } from "./commands/CreateDetectorCommand";
import type { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import type { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import type {
  CreateMalwareProtectionPlanCommandInput,
  CreateMalwareProtectionPlanCommandOutput,
} from "./commands/CreateMalwareProtectionPlanCommand";
import type { CreateMembersCommandInput, CreateMembersCommandOutput } from "./commands/CreateMembersCommand";
import type {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "./commands/CreatePublishingDestinationCommand";
import type {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import type {
  CreateThreatEntitySetCommandInput,
  CreateThreatEntitySetCommandOutput,
} from "./commands/CreateThreatEntitySetCommand";
import type {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "./commands/CreateThreatIntelSetCommand";
import type {
  CreateTrustedEntitySetCommandInput,
  CreateTrustedEntitySetCommandOutput,
} from "./commands/CreateTrustedEntitySetCommand";
import type {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import type { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "./commands/DeleteDetectorCommand";
import type { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import type {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import type { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import type {
  DeleteMalwareProtectionPlanCommandInput,
  DeleteMalwareProtectionPlanCommandOutput,
} from "./commands/DeleteMalwareProtectionPlanCommand";
import type { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "./commands/DeleteMembersCommand";
import type {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "./commands/DeletePublishingDestinationCommand";
import type {
  DeleteThreatEntitySetCommandInput,
  DeleteThreatEntitySetCommandOutput,
} from "./commands/DeleteThreatEntitySetCommand";
import type {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "./commands/DeleteThreatIntelSetCommand";
import type {
  DeleteTrustedEntitySetCommandInput,
  DeleteTrustedEntitySetCommandOutput,
} from "./commands/DeleteTrustedEntitySetCommand";
import type {
  DescribeMalwareScansCommandInput,
  DescribeMalwareScansCommandOutput,
} from "./commands/DescribeMalwareScansCommand";
import type {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import type {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "./commands/DescribePublishingDestinationCommand";
import type {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import type {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import type {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import type {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import type {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import type {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import type {
  GetCoverageStatisticsCommandInput,
  GetCoverageStatisticsCommandOutput,
} from "./commands/GetCoverageStatisticsCommand";
import type { GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand";
import type { GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand";
import type { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import type {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "./commands/GetFindingsStatisticsCommand";
import type {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import type { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import type {
  GetMalwareProtectionPlanCommandInput,
  GetMalwareProtectionPlanCommandOutput,
} from "./commands/GetMalwareProtectionPlanCommand";
import type { GetMalwareScanCommandInput, GetMalwareScanCommandOutput } from "./commands/GetMalwareScanCommand";
import type {
  GetMalwareScanSettingsCommandInput,
  GetMalwareScanSettingsCommandOutput,
} from "./commands/GetMalwareScanSettingsCommand";
import type { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import type {
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
} from "./commands/GetMemberDetectorsCommand";
import type { GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import type {
  GetOrganizationStatisticsCommandInput,
  GetOrganizationStatisticsCommandOutput,
} from "./commands/GetOrganizationStatisticsCommand";
import type {
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
} from "./commands/GetRemainingFreeTrialDaysCommand";
import type {
  GetThreatEntitySetCommandInput,
  GetThreatEntitySetCommandOutput,
} from "./commands/GetThreatEntitySetCommand";
import type {
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput,
} from "./commands/GetThreatIntelSetCommand";
import type {
  GetTrustedEntitySetCommandInput,
  GetTrustedEntitySetCommandOutput,
} from "./commands/GetTrustedEntitySetCommand";
import type {
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "./commands/GetUsageStatisticsCommand";
import type { InviteMembersCommandInput, InviteMembersCommandOutput } from "./commands/InviteMembersCommand";
import type { ListCoverageCommandInput, ListCoverageCommandOutput } from "./commands/ListCoverageCommand";
import type { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "./commands/ListDetectorsCommand";
import type { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import type { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import type { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import type { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import type {
  ListMalwareProtectionPlansCommandInput,
  ListMalwareProtectionPlansCommandOutput,
} from "./commands/ListMalwareProtectionPlansCommand";
import type { ListMalwareScansCommandInput, ListMalwareScansCommandOutput } from "./commands/ListMalwareScansCommand";
import type { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import type {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import type {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "./commands/ListPublishingDestinationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListThreatEntitySetsCommandInput,
  ListThreatEntitySetsCommandOutput,
} from "./commands/ListThreatEntitySetsCommand";
import type {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "./commands/ListThreatIntelSetsCommand";
import type {
  ListTrustedEntitySetsCommandInput,
  ListTrustedEntitySetsCommandOutput,
} from "./commands/ListTrustedEntitySetsCommand";
import type {
  SendObjectMalwareScanCommandInput,
  SendObjectMalwareScanCommandOutput,
} from "./commands/SendObjectMalwareScanCommand";
import type { StartMalwareScanCommandInput, StartMalwareScanCommandOutput } from "./commands/StartMalwareScanCommand";
import type {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "./commands/StartMonitoringMembersCommand";
import type {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "./commands/StopMonitoringMembersCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
} from "./commands/UnarchiveFindingsCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateDetectorCommandInput, UpdateDetectorCommandOutput } from "./commands/UpdateDetectorCommand";
import type { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import type {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "./commands/UpdateFindingsFeedbackCommand";
import type { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import type {
  UpdateMalwareProtectionPlanCommandInput,
  UpdateMalwareProtectionPlanCommandOutput,
} from "./commands/UpdateMalwareProtectionPlanCommand";
import type {
  UpdateMalwareScanSettingsCommandInput,
  UpdateMalwareScanSettingsCommandOutput,
} from "./commands/UpdateMalwareScanSettingsCommand";
import type {
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "./commands/UpdateMemberDetectorsCommand";
import type {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import type {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "./commands/UpdatePublishingDestinationCommand";
import type {
  UpdateThreatEntitySetCommandInput,
  UpdateThreatEntitySetCommandOutput,
} from "./commands/UpdateThreatEntitySetCommand";
import type {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "./commands/UpdateThreatIntelSetCommand";
import type {
  UpdateTrustedEntitySetCommandInput,
  UpdateTrustedEntitySetCommandOutput,
} from "./commands/UpdateTrustedEntitySetCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

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
  | GetMalwareScanCommandInput
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
  | ListMalwareScansCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListPublishingDestinationsCommandInput
  | ListTagsForResourceCommandInput
  | ListThreatEntitySetsCommandInput
  | ListThreatIntelSetsCommandInput
  | ListTrustedEntitySetsCommandInput
  | SendObjectMalwareScanCommandInput
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
  | GetMalwareScanCommandOutput
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
  | ListMalwareScansCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListPublishingDestinationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThreatEntitySetsCommandOutput
  | ListThreatIntelSetsCommandOutput
  | ListTrustedEntitySetsCommandOutput
  | SendObjectMalwareScanCommandOutput
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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
