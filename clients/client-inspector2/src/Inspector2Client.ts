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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultInspector2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateMemberCommandInput, AssociateMemberCommandOutput } from "./commands/AssociateMemberCommand";
import {
  BatchAssociateCodeSecurityScanConfigurationCommandInput,
  BatchAssociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchAssociateCodeSecurityScanConfigurationCommand";
import {
  BatchDisassociateCodeSecurityScanConfigurationCommandInput,
  BatchDisassociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchDisassociateCodeSecurityScanConfigurationCommand";
import {
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "./commands/BatchGetAccountStatusCommand";
import {
  BatchGetCodeSnippetCommandInput,
  BatchGetCodeSnippetCommandOutput,
} from "./commands/BatchGetCodeSnippetCommand";
import {
  BatchGetFindingDetailsCommandInput,
  BatchGetFindingDetailsCommandOutput,
} from "./commands/BatchGetFindingDetailsCommand";
import {
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "./commands/BatchGetFreeTrialInfoCommand";
import {
  BatchGetMemberEc2DeepInspectionStatusCommandInput,
  BatchGetMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchGetMemberEc2DeepInspectionStatusCommand";
import {
  BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchUpdateMemberEc2DeepInspectionStatusCommand";
import {
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "./commands/CancelFindingsReportCommand";
import { CancelSbomExportCommandInput, CancelSbomExportCommandOutput } from "./commands/CancelSbomExportCommand";
import {
  CreateCisScanConfigurationCommandInput,
  CreateCisScanConfigurationCommandOutput,
} from "./commands/CreateCisScanConfigurationCommand";
import {
  CreateCodeSecurityIntegrationCommandInput,
  CreateCodeSecurityIntegrationCommandOutput,
} from "./commands/CreateCodeSecurityIntegrationCommand";
import {
  CreateCodeSecurityScanConfigurationCommandInput,
  CreateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/CreateCodeSecurityScanConfigurationCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import {
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "./commands/CreateFindingsReportCommand";
import { CreateSbomExportCommandInput, CreateSbomExportCommandOutput } from "./commands/CreateSbomExportCommand";
import {
  DeleteCisScanConfigurationCommandInput,
  DeleteCisScanConfigurationCommandOutput,
} from "./commands/DeleteCisScanConfigurationCommand";
import {
  DeleteCodeSecurityIntegrationCommandInput,
  DeleteCodeSecurityIntegrationCommandOutput,
} from "./commands/DeleteCodeSecurityIntegrationCommand";
import {
  DeleteCodeSecurityScanConfigurationCommandInput,
  DeleteCodeSecurityScanConfigurationCommandOutput,
} from "./commands/DeleteCodeSecurityScanConfigurationCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableCommandInput, DisableCommandOutput } from "./commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "./commands/DisableDelegatedAdminAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand";
import { EnableCommandInput, EnableCommandOutput } from "./commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "./commands/EnableDelegatedAdminAccountCommand";
import { GetCisScanReportCommandInput, GetCisScanReportCommandOutput } from "./commands/GetCisScanReportCommand";
import {
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput,
} from "./commands/GetCisScanResultDetailsCommand";
import {
  GetClustersForImageCommandInput,
  GetClustersForImageCommandOutput,
} from "./commands/GetClustersForImageCommand";
import {
  GetCodeSecurityIntegrationCommandInput,
  GetCodeSecurityIntegrationCommandOutput,
} from "./commands/GetCodeSecurityIntegrationCommand";
import {
  GetCodeSecurityScanCommandInput,
  GetCodeSecurityScanCommandOutput,
} from "./commands/GetCodeSecurityScanCommand";
import {
  GetCodeSecurityScanConfigurationCommandInput,
  GetCodeSecurityScanConfigurationCommandOutput,
} from "./commands/GetCodeSecurityScanConfigurationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import {
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "./commands/GetDelegatedAdminAccountCommand";
import {
  GetEc2DeepInspectionConfigurationCommandInput,
  GetEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/GetEc2DeepInspectionConfigurationCommand";
import { GetEncryptionKeyCommandInput, GetEncryptionKeyCommandOutput } from "./commands/GetEncryptionKeyCommand";
import {
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "./commands/GetFindingsReportStatusCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetSbomExportCommandInput, GetSbomExportCommandOutput } from "./commands/GetSbomExportCommand";
import {
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "./commands/ListAccountPermissionsCommand";
import {
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput,
} from "./commands/ListCisScanConfigurationsCommand";
import {
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByChecksCommand";
import {
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByTargetResourceCommand";
import { ListCisScansCommandInput, ListCisScansCommandOutput } from "./commands/ListCisScansCommand";
import {
  ListCodeSecurityIntegrationsCommandInput,
  ListCodeSecurityIntegrationsCommandOutput,
} from "./commands/ListCodeSecurityIntegrationsCommand";
import {
  ListCodeSecurityScanConfigurationAssociationsCommandInput,
  ListCodeSecurityScanConfigurationAssociationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationAssociationsCommand";
import {
  ListCodeSecurityScanConfigurationsCommandInput,
  ListCodeSecurityScanConfigurationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationsCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "./commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "./commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "./commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "./commands/ListFindingAggregationsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput } from "./commands/ListUsageTotalsCommand";
import { ResetEncryptionKeyCommandInput, ResetEncryptionKeyCommandOutput } from "./commands/ResetEncryptionKeyCommand";
import {
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "./commands/SearchVulnerabilitiesCommand";
import {
  SendCisSessionHealthCommandInput,
  SendCisSessionHealthCommandOutput,
} from "./commands/SendCisSessionHealthCommand";
import {
  SendCisSessionTelemetryCommandInput,
  SendCisSessionTelemetryCommandOutput,
} from "./commands/SendCisSessionTelemetryCommand";
import { StartCisSessionCommandInput, StartCisSessionCommandOutput } from "./commands/StartCisSessionCommand";
import {
  StartCodeSecurityScanCommandInput,
  StartCodeSecurityScanCommandOutput,
} from "./commands/StartCodeSecurityScanCommand";
import { StopCisSessionCommandInput, StopCisSessionCommandOutput } from "./commands/StopCisSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCisScanConfigurationCommandInput,
  UpdateCisScanConfigurationCommandOutput,
} from "./commands/UpdateCisScanConfigurationCommand";
import {
  UpdateCodeSecurityIntegrationCommandInput,
  UpdateCodeSecurityIntegrationCommandOutput,
} from "./commands/UpdateCodeSecurityIntegrationCommand";
import {
  UpdateCodeSecurityScanConfigurationCommandInput,
  UpdateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/UpdateCodeSecurityScanConfigurationCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import {
  UpdateEc2DeepInspectionConfigurationCommandInput,
  UpdateEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateEc2DeepInspectionConfigurationCommand";
import {
  UpdateEncryptionKeyCommandInput,
  UpdateEncryptionKeyCommandOutput,
} from "./commands/UpdateEncryptionKeyCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "./commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateOrgEc2DeepInspectionConfigurationCommandInput,
  UpdateOrgEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateOrgEc2DeepInspectionConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

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
