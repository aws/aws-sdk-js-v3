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
  defaultInspector2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateMemberCommandInput, AssociateMemberCommandOutput } from "./commands/AssociateMemberCommand";
import type {
  BatchAssociateCodeSecurityScanConfigurationCommandInput,
  BatchAssociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchAssociateCodeSecurityScanConfigurationCommand";
import type {
  BatchDisassociateCodeSecurityScanConfigurationCommandInput,
  BatchDisassociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchDisassociateCodeSecurityScanConfigurationCommand";
import type {
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "./commands/BatchGetAccountStatusCommand";
import type {
  BatchGetCodeSnippetCommandInput,
  BatchGetCodeSnippetCommandOutput,
} from "./commands/BatchGetCodeSnippetCommand";
import type {
  BatchGetFindingDetailsCommandInput,
  BatchGetFindingDetailsCommandOutput,
} from "./commands/BatchGetFindingDetailsCommand";
import type {
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "./commands/BatchGetFreeTrialInfoCommand";
import type {
  BatchGetMemberEc2DeepInspectionStatusCommandInput,
  BatchGetMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchGetMemberEc2DeepInspectionStatusCommand";
import type {
  BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchUpdateMemberEc2DeepInspectionStatusCommand";
import type {
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "./commands/CancelFindingsReportCommand";
import type { CancelSbomExportCommandInput, CancelSbomExportCommandOutput } from "./commands/CancelSbomExportCommand";
import type {
  CreateCisScanConfigurationCommandInput,
  CreateCisScanConfigurationCommandOutput,
} from "./commands/CreateCisScanConfigurationCommand";
import type {
  CreateCodeSecurityIntegrationCommandInput,
  CreateCodeSecurityIntegrationCommandOutput,
} from "./commands/CreateCodeSecurityIntegrationCommand";
import type {
  CreateCodeSecurityScanConfigurationCommandInput,
  CreateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/CreateCodeSecurityScanConfigurationCommand";
import type { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import type {
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "./commands/CreateFindingsReportCommand";
import type { CreateSbomExportCommandInput, CreateSbomExportCommandOutput } from "./commands/CreateSbomExportCommand";
import type {
  DeleteCisScanConfigurationCommandInput,
  DeleteCisScanConfigurationCommandOutput,
} from "./commands/DeleteCisScanConfigurationCommand";
import type {
  DeleteCodeSecurityIntegrationCommandInput,
  DeleteCodeSecurityIntegrationCommandOutput,
} from "./commands/DeleteCodeSecurityIntegrationCommand";
import type {
  DeleteCodeSecurityScanConfigurationCommandInput,
  DeleteCodeSecurityScanConfigurationCommandOutput,
} from "./commands/DeleteCodeSecurityScanConfigurationCommand";
import type { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import type {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import type { DisableCommandInput, DisableCommandOutput } from "./commands/DisableCommand";
import type {
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "./commands/DisableDelegatedAdminAccountCommand";
import type {
  DisassociateMemberCommandInput,
  DisassociateMemberCommandOutput,
} from "./commands/DisassociateMemberCommand";
import type { EnableCommandInput, EnableCommandOutput } from "./commands/EnableCommand";
import type {
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "./commands/EnableDelegatedAdminAccountCommand";
import type { GetCisScanReportCommandInput, GetCisScanReportCommandOutput } from "./commands/GetCisScanReportCommand";
import type {
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput,
} from "./commands/GetCisScanResultDetailsCommand";
import type {
  GetClustersForImageCommandInput,
  GetClustersForImageCommandOutput,
} from "./commands/GetClustersForImageCommand";
import type {
  GetCodeSecurityIntegrationCommandInput,
  GetCodeSecurityIntegrationCommandOutput,
} from "./commands/GetCodeSecurityIntegrationCommand";
import type {
  GetCodeSecurityScanCommandInput,
  GetCodeSecurityScanCommandOutput,
} from "./commands/GetCodeSecurityScanCommand";
import type {
  GetCodeSecurityScanConfigurationCommandInput,
  GetCodeSecurityScanConfigurationCommandOutput,
} from "./commands/GetCodeSecurityScanConfigurationCommand";
import type { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import type {
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "./commands/GetDelegatedAdminAccountCommand";
import type {
  GetEc2DeepInspectionConfigurationCommandInput,
  GetEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/GetEc2DeepInspectionConfigurationCommand";
import type { GetEncryptionKeyCommandInput, GetEncryptionKeyCommandOutput } from "./commands/GetEncryptionKeyCommand";
import type {
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "./commands/GetFindingsReportStatusCommand";
import type { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import type { GetSbomExportCommandInput, GetSbomExportCommandOutput } from "./commands/GetSbomExportCommand";
import type {
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "./commands/ListAccountPermissionsCommand";
import type {
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput,
} from "./commands/ListCisScanConfigurationsCommand";
import type {
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByChecksCommand";
import type {
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByTargetResourceCommand";
import type { ListCisScansCommandInput, ListCisScansCommandOutput } from "./commands/ListCisScansCommand";
import type {
  ListCodeSecurityIntegrationsCommandInput,
  ListCodeSecurityIntegrationsCommandOutput,
} from "./commands/ListCodeSecurityIntegrationsCommand";
import type {
  ListCodeSecurityScanConfigurationAssociationsCommandInput,
  ListCodeSecurityScanConfigurationAssociationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationAssociationsCommand";
import type {
  ListCodeSecurityScanConfigurationsCommandInput,
  ListCodeSecurityScanConfigurationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationsCommand";
import type { ListCoverageCommandInput, ListCoverageCommandOutput } from "./commands/ListCoverageCommand";
import type {
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "./commands/ListCoverageStatisticsCommand";
import type {
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "./commands/ListDelegatedAdminAccountsCommand";
import type { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import type {
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "./commands/ListFindingAggregationsCommand";
import type { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import type { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput } from "./commands/ListUsageTotalsCommand";
import type {
  ResetEncryptionKeyCommandInput,
  ResetEncryptionKeyCommandOutput,
} from "./commands/ResetEncryptionKeyCommand";
import type {
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "./commands/SearchVulnerabilitiesCommand";
import type {
  SendCisSessionHealthCommandInput,
  SendCisSessionHealthCommandOutput,
} from "./commands/SendCisSessionHealthCommand";
import type {
  SendCisSessionTelemetryCommandInput,
  SendCisSessionTelemetryCommandOutput,
} from "./commands/SendCisSessionTelemetryCommand";
import type { StartCisSessionCommandInput, StartCisSessionCommandOutput } from "./commands/StartCisSessionCommand";
import type {
  StartCodeSecurityScanCommandInput,
  StartCodeSecurityScanCommandOutput,
} from "./commands/StartCodeSecurityScanCommand";
import type { StopCisSessionCommandInput, StopCisSessionCommandOutput } from "./commands/StopCisSessionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateCisScanConfigurationCommandInput,
  UpdateCisScanConfigurationCommandOutput,
} from "./commands/UpdateCisScanConfigurationCommand";
import type {
  UpdateCodeSecurityIntegrationCommandInput,
  UpdateCodeSecurityIntegrationCommandOutput,
} from "./commands/UpdateCodeSecurityIntegrationCommand";
import type {
  UpdateCodeSecurityScanConfigurationCommandInput,
  UpdateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/UpdateCodeSecurityScanConfigurationCommand";
import type {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import type {
  UpdateEc2DeepInspectionConfigurationCommandInput,
  UpdateEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateEc2DeepInspectionConfigurationCommand";
import type {
  UpdateEncryptionKeyCommandInput,
  UpdateEncryptionKeyCommandOutput,
} from "./commands/UpdateEncryptionKeyCommand";
import type { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import type {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import type {
  UpdateOrgEc2DeepInspectionConfigurationCommandInput,
  UpdateOrgEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateOrgEc2DeepInspectionConfigurationCommand";
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
  | AssociateMemberCommandInput
  | BatchAssociateCodeSecurityScanConfigurationCommandInput
  | BatchDisassociateCodeSecurityScanConfigurationCommandInput
  | BatchGetAccountStatusCommandInput
  | BatchGetCodeSnippetCommandInput
  | BatchGetFindingDetailsCommandInput
  | BatchGetFreeTrialInfoCommandInput
  | BatchGetMemberEc2DeepInspectionStatusCommandInput
  | BatchUpdateMemberEc2DeepInspectionStatusCommandInput
  | CancelFindingsReportCommandInput
  | CancelSbomExportCommandInput
  | CreateCisScanConfigurationCommandInput
  | CreateCodeSecurityIntegrationCommandInput
  | CreateCodeSecurityScanConfigurationCommandInput
  | CreateFilterCommandInput
  | CreateFindingsReportCommandInput
  | CreateSbomExportCommandInput
  | DeleteCisScanConfigurationCommandInput
  | DeleteCodeSecurityIntegrationCommandInput
  | DeleteCodeSecurityScanConfigurationCommandInput
  | DeleteFilterCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DisableCommandInput
  | DisableDelegatedAdminAccountCommandInput
  | DisassociateMemberCommandInput
  | EnableCommandInput
  | EnableDelegatedAdminAccountCommandInput
  | GetCisScanReportCommandInput
  | GetCisScanResultDetailsCommandInput
  | GetClustersForImageCommandInput
  | GetCodeSecurityIntegrationCommandInput
  | GetCodeSecurityScanCommandInput
  | GetCodeSecurityScanConfigurationCommandInput
  | GetConfigurationCommandInput
  | GetDelegatedAdminAccountCommandInput
  | GetEc2DeepInspectionConfigurationCommandInput
  | GetEncryptionKeyCommandInput
  | GetFindingsReportStatusCommandInput
  | GetMemberCommandInput
  | GetSbomExportCommandInput
  | ListAccountPermissionsCommandInput
  | ListCisScanConfigurationsCommandInput
  | ListCisScanResultsAggregatedByChecksCommandInput
  | ListCisScanResultsAggregatedByTargetResourceCommandInput
  | ListCisScansCommandInput
  | ListCodeSecurityIntegrationsCommandInput
  | ListCodeSecurityScanConfigurationAssociationsCommandInput
  | ListCodeSecurityScanConfigurationsCommandInput
  | ListCoverageCommandInput
  | ListCoverageStatisticsCommandInput
  | ListDelegatedAdminAccountsCommandInput
  | ListFiltersCommandInput
  | ListFindingAggregationsCommandInput
  | ListFindingsCommandInput
  | ListMembersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsageTotalsCommandInput
  | ResetEncryptionKeyCommandInput
  | SearchVulnerabilitiesCommandInput
  | SendCisSessionHealthCommandInput
  | SendCisSessionTelemetryCommandInput
  | StartCisSessionCommandInput
  | StartCodeSecurityScanCommandInput
  | StopCisSessionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCisScanConfigurationCommandInput
  | UpdateCodeSecurityIntegrationCommandInput
  | UpdateCodeSecurityScanConfigurationCommandInput
  | UpdateConfigurationCommandInput
  | UpdateEc2DeepInspectionConfigurationCommandInput
  | UpdateEncryptionKeyCommandInput
  | UpdateFilterCommandInput
  | UpdateOrgEc2DeepInspectionConfigurationCommandInput
  | UpdateOrganizationConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateMemberCommandOutput
  | BatchAssociateCodeSecurityScanConfigurationCommandOutput
  | BatchDisassociateCodeSecurityScanConfigurationCommandOutput
  | BatchGetAccountStatusCommandOutput
  | BatchGetCodeSnippetCommandOutput
  | BatchGetFindingDetailsCommandOutput
  | BatchGetFreeTrialInfoCommandOutput
  | BatchGetMemberEc2DeepInspectionStatusCommandOutput
  | BatchUpdateMemberEc2DeepInspectionStatusCommandOutput
  | CancelFindingsReportCommandOutput
  | CancelSbomExportCommandOutput
  | CreateCisScanConfigurationCommandOutput
  | CreateCodeSecurityIntegrationCommandOutput
  | CreateCodeSecurityScanConfigurationCommandOutput
  | CreateFilterCommandOutput
  | CreateFindingsReportCommandOutput
  | CreateSbomExportCommandOutput
  | DeleteCisScanConfigurationCommandOutput
  | DeleteCodeSecurityIntegrationCommandOutput
  | DeleteCodeSecurityScanConfigurationCommandOutput
  | DeleteFilterCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DisableCommandOutput
  | DisableDelegatedAdminAccountCommandOutput
  | DisassociateMemberCommandOutput
  | EnableCommandOutput
  | EnableDelegatedAdminAccountCommandOutput
  | GetCisScanReportCommandOutput
  | GetCisScanResultDetailsCommandOutput
  | GetClustersForImageCommandOutput
  | GetCodeSecurityIntegrationCommandOutput
  | GetCodeSecurityScanCommandOutput
  | GetCodeSecurityScanConfigurationCommandOutput
  | GetConfigurationCommandOutput
  | GetDelegatedAdminAccountCommandOutput
  | GetEc2DeepInspectionConfigurationCommandOutput
  | GetEncryptionKeyCommandOutput
  | GetFindingsReportStatusCommandOutput
  | GetMemberCommandOutput
  | GetSbomExportCommandOutput
  | ListAccountPermissionsCommandOutput
  | ListCisScanConfigurationsCommandOutput
  | ListCisScanResultsAggregatedByChecksCommandOutput
  | ListCisScanResultsAggregatedByTargetResourceCommandOutput
  | ListCisScansCommandOutput
  | ListCodeSecurityIntegrationsCommandOutput
  | ListCodeSecurityScanConfigurationAssociationsCommandOutput
  | ListCodeSecurityScanConfigurationsCommandOutput
  | ListCoverageCommandOutput
  | ListCoverageStatisticsCommandOutput
  | ListDelegatedAdminAccountsCommandOutput
  | ListFiltersCommandOutput
  | ListFindingAggregationsCommandOutput
  | ListFindingsCommandOutput
  | ListMembersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsageTotalsCommandOutput
  | ResetEncryptionKeyCommandOutput
  | SearchVulnerabilitiesCommandOutput
  | SendCisSessionHealthCommandOutput
  | SendCisSessionTelemetryCommandOutput
  | StartCisSessionCommandOutput
  | StartCodeSecurityScanCommandOutput
  | StopCisSessionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCisScanConfigurationCommandOutput
  | UpdateCodeSecurityIntegrationCommandOutput
  | UpdateCodeSecurityScanConfigurationCommandOutput
  | UpdateConfigurationCommandOutput
  | UpdateEc2DeepInspectionConfigurationCommandOutput
  | UpdateEncryptionKeyCommandOutput
  | UpdateFilterCommandOutput
  | UpdateOrgEc2DeepInspectionConfigurationCommandOutput
  | UpdateOrganizationConfigurationCommandOutput;

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
export type Inspector2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Inspector2Client class constructor that set the region, credentials and other options.
 */
export interface Inspector2ClientConfig extends Inspector2ClientConfigType {}

/**
 * @public
 */
export type Inspector2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Inspector2Client class. This is resolved and normalized from the {@link Inspector2ClientConfig | constructor configuration interface}.
 */
export interface Inspector2ClientResolvedConfig extends Inspector2ClientResolvedConfigType {}

/**
 * <p>Amazon Inspector is a vulnerability discovery service that automates continuous scanning for
 *          security vulnerabilities within your Amazon EC2, Amazon ECR, and Amazon Web Services Lambda environments.</p>
 * @public
 */
export class Inspector2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Inspector2ClientResolvedConfig
> {
  /**
   * The resolved configuration of Inspector2Client class. This is resolved and normalized from the {@link Inspector2ClientConfig | constructor configuration interface}.
   */
  readonly config: Inspector2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Inspector2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultInspector2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Inspector2ClientResolvedConfig) =>
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
