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
  defaultMacie2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "./commands/AcceptInvitationCommand";
import {
  BatchGetCustomDataIdentifiersCommandInput,
  BatchGetCustomDataIdentifiersCommandOutput,
} from "./commands/BatchGetCustomDataIdentifiersCommand";
import {
  BatchUpdateAutomatedDiscoveryAccountsCommandInput,
  BatchUpdateAutomatedDiscoveryAccountsCommandOutput,
} from "./commands/BatchUpdateAutomatedDiscoveryAccountsCommand";
import { CreateAllowListCommandInput, CreateAllowListCommandOutput } from "./commands/CreateAllowListCommand";
import {
  CreateClassificationJobCommandInput,
  CreateClassificationJobCommandOutput,
} from "./commands/CreateClassificationJobCommand";
import {
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
} from "./commands/CreateCustomDataIdentifierCommand";
import {
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
} from "./commands/CreateFindingsFilterCommand";
import { CreateInvitationsCommandInput, CreateInvitationsCommandOutput } from "./commands/CreateInvitationsCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "./commands/DeclineInvitationsCommand";
import { DeleteAllowListCommandInput, DeleteAllowListCommandOutput } from "./commands/DeleteAllowListCommand";
import {
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
} from "./commands/DeleteCustomDataIdentifierCommand";
import {
  DeleteFindingsFilterCommandInput,
  DeleteFindingsFilterCommandOutput,
} from "./commands/DeleteFindingsFilterCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "./commands/DeleteInvitationsCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DescribeBucketsCommandInput, DescribeBucketsCommandOutput } from "./commands/DescribeBucketsCommand";
import {
  DescribeClassificationJobCommandInput,
  DescribeClassificationJobCommandOutput,
} from "./commands/DescribeClassificationJobCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableMacieCommandInput, DisableMacieCommandOutput } from "./commands/DisableMacieCommand";
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
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "./commands/DisassociateMemberCommand";
import { EnableMacieCommandInput, EnableMacieCommandOutput } from "./commands/EnableMacieCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import { GetAllowListCommandInput, GetAllowListCommandOutput } from "./commands/GetAllowListCommand";
import {
  GetAutomatedDiscoveryConfigurationCommandInput,
  GetAutomatedDiscoveryConfigurationCommandOutput,
} from "./commands/GetAutomatedDiscoveryConfigurationCommand";
import {
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
} from "./commands/GetBucketStatisticsCommand";
import {
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
} from "./commands/GetClassificationExportConfigurationCommand";
import {
  GetClassificationScopeCommandInput,
  GetClassificationScopeCommandOutput,
} from "./commands/GetClassificationScopeCommand";
import {
  GetCustomDataIdentifierCommandInput,
  GetCustomDataIdentifierCommandOutput,
} from "./commands/GetCustomDataIdentifierCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import { GetFindingsFilterCommandInput, GetFindingsFilterCommandOutput } from "./commands/GetFindingsFilterCommand";
import {
  GetFindingsPublicationConfigurationCommandInput,
  GetFindingsPublicationConfigurationCommandOutput,
} from "./commands/GetFindingsPublicationConfigurationCommand";
import {
  GetFindingStatisticsCommandInput,
  GetFindingStatisticsCommandOutput,
} from "./commands/GetFindingStatisticsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetMacieSessionCommandInput, GetMacieSessionCommandOutput } from "./commands/GetMacieSessionCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "./commands/GetMasterAccountCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetResourceProfileCommandInput, GetResourceProfileCommandOutput } from "./commands/GetResourceProfileCommand";
import {
  GetRevealConfigurationCommandInput,
  GetRevealConfigurationCommandOutput,
} from "./commands/GetRevealConfigurationCommand";
import {
  GetSensitiveDataOccurrencesAvailabilityCommandInput,
  GetSensitiveDataOccurrencesAvailabilityCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesAvailabilityCommand";
import {
  GetSensitiveDataOccurrencesCommandInput,
  GetSensitiveDataOccurrencesCommandOutput,
} from "./commands/GetSensitiveDataOccurrencesCommand";
import {
  GetSensitivityInspectionTemplateCommandInput,
  GetSensitivityInspectionTemplateCommandOutput,
} from "./commands/GetSensitivityInspectionTemplateCommand";
import { GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput } from "./commands/GetUsageStatisticsCommand";
import { GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput } from "./commands/GetUsageTotalsCommand";
import { ListAllowListsCommandInput, ListAllowListsCommandOutput } from "./commands/ListAllowListsCommand";
import {
  ListAutomatedDiscoveryAccountsCommandInput,
  ListAutomatedDiscoveryAccountsCommandOutput,
} from "./commands/ListAutomatedDiscoveryAccountsCommand";
import {
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "./commands/ListClassificationJobsCommand";
import {
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput,
} from "./commands/ListClassificationScopesCommand";
import {
  ListCustomDataIdentifiersCommandInput,
  ListCustomDataIdentifiersCommandOutput,
} from "./commands/ListCustomDataIdentifiersCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import {
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "./commands/ListFindingsFiltersCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import {
  ListManagedDataIdentifiersCommandInput,
  ListManagedDataIdentifiersCommandOutput,
} from "./commands/ListManagedDataIdentifiersCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput,
} from "./commands/ListResourceProfileArtifactsCommand";
import {
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput,
} from "./commands/ListResourceProfileDetectionsCommand";
import {
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput,
} from "./commands/ListSensitivityInspectionTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
} from "./commands/PutClassificationExportConfigurationCommand";
import {
  PutFindingsPublicationConfigurationCommandInput,
  PutFindingsPublicationConfigurationCommandOutput,
} from "./commands/PutFindingsPublicationConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
} from "./commands/TestCustomDataIdentifierCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAllowListCommandInput, UpdateAllowListCommandOutput } from "./commands/UpdateAllowListCommand";
import {
  UpdateAutomatedDiscoveryConfigurationCommandInput,
  UpdateAutomatedDiscoveryConfigurationCommandOutput,
} from "./commands/UpdateAutomatedDiscoveryConfigurationCommand";
import {
  UpdateClassificationJobCommandInput,
  UpdateClassificationJobCommandOutput,
} from "./commands/UpdateClassificationJobCommand";
import {
  UpdateClassificationScopeCommandInput,
  UpdateClassificationScopeCommandOutput,
} from "./commands/UpdateClassificationScopeCommand";
import {
  UpdateFindingsFilterCommandInput,
  UpdateFindingsFilterCommandOutput,
} from "./commands/UpdateFindingsFilterCommand";
import { UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput } from "./commands/UpdateMacieSessionCommand";
import {
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
} from "./commands/UpdateMemberSessionCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateResourceProfileCommandInput,
  UpdateResourceProfileCommandOutput,
} from "./commands/UpdateResourceProfileCommand";
import {
  UpdateResourceProfileDetectionsCommandInput,
  UpdateResourceProfileDetectionsCommandOutput,
} from "./commands/UpdateResourceProfileDetectionsCommand";
import {
  UpdateRevealConfigurationCommandInput,
  UpdateRevealConfigurationCommandOutput,
} from "./commands/UpdateRevealConfigurationCommand";
import {
  UpdateSensitivityInspectionTemplateCommandInput,
  UpdateSensitivityInspectionTemplateCommandOutput,
} from "./commands/UpdateSensitivityInspectionTemplateCommand";
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
  | AcceptInvitationCommandInput
  | BatchGetCustomDataIdentifiersCommandInput
  | BatchUpdateAutomatedDiscoveryAccountsCommandInput
  | CreateAllowListCommandInput
  | CreateClassificationJobCommandInput
  | CreateCustomDataIdentifierCommandInput
  | CreateFindingsFilterCommandInput
  | CreateInvitationsCommandInput
  | CreateMemberCommandInput
  | CreateSampleFindingsCommandInput
  | DeclineInvitationsCommandInput
  | DeleteAllowListCommandInput
  | DeleteCustomDataIdentifierCommandInput
  | DeleteFindingsFilterCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMemberCommandInput
  | DescribeBucketsCommandInput
  | DescribeClassificationJobCommandInput
  | DescribeOrganizationConfigurationCommandInput
  | DisableMacieCommandInput
  | DisableOrganizationAdminAccountCommandInput
  | DisassociateFromAdministratorAccountCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMemberCommandInput
  | EnableMacieCommandInput
  | EnableOrganizationAdminAccountCommandInput
  | GetAdministratorAccountCommandInput
  | GetAllowListCommandInput
  | GetAutomatedDiscoveryConfigurationCommandInput
  | GetBucketStatisticsCommandInput
  | GetClassificationExportConfigurationCommandInput
  | GetClassificationScopeCommandInput
  | GetCustomDataIdentifierCommandInput
  | GetFindingStatisticsCommandInput
  | GetFindingsCommandInput
  | GetFindingsFilterCommandInput
  | GetFindingsPublicationConfigurationCommandInput
  | GetInvitationsCountCommandInput
  | GetMacieSessionCommandInput
  | GetMasterAccountCommandInput
  | GetMemberCommandInput
  | GetResourceProfileCommandInput
  | GetRevealConfigurationCommandInput
  | GetSensitiveDataOccurrencesAvailabilityCommandInput
  | GetSensitiveDataOccurrencesCommandInput
  | GetSensitivityInspectionTemplateCommandInput
  | GetUsageStatisticsCommandInput
  | GetUsageTotalsCommandInput
  | ListAllowListsCommandInput
  | ListAutomatedDiscoveryAccountsCommandInput
  | ListClassificationJobsCommandInput
  | ListClassificationScopesCommandInput
  | ListCustomDataIdentifiersCommandInput
  | ListFindingsCommandInput
  | ListFindingsFiltersCommandInput
  | ListInvitationsCommandInput
  | ListManagedDataIdentifiersCommandInput
  | ListMembersCommandInput
  | ListOrganizationAdminAccountsCommandInput
  | ListResourceProfileArtifactsCommandInput
  | ListResourceProfileDetectionsCommandInput
  | ListSensitivityInspectionTemplatesCommandInput
  | ListTagsForResourceCommandInput
  | PutClassificationExportConfigurationCommandInput
  | PutFindingsPublicationConfigurationCommandInput
  | SearchResourcesCommandInput
  | TagResourceCommandInput
  | TestCustomDataIdentifierCommandInput
  | UntagResourceCommandInput
  | UpdateAllowListCommandInput
  | UpdateAutomatedDiscoveryConfigurationCommandInput
  | UpdateClassificationJobCommandInput
  | UpdateClassificationScopeCommandInput
  | UpdateFindingsFilterCommandInput
  | UpdateMacieSessionCommandInput
  | UpdateMemberSessionCommandInput
  | UpdateOrganizationConfigurationCommandInput
  | UpdateResourceProfileCommandInput
  | UpdateResourceProfileDetectionsCommandInput
  | UpdateRevealConfigurationCommandInput
  | UpdateSensitivityInspectionTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | BatchGetCustomDataIdentifiersCommandOutput
  | BatchUpdateAutomatedDiscoveryAccountsCommandOutput
  | CreateAllowListCommandOutput
  | CreateClassificationJobCommandOutput
  | CreateCustomDataIdentifierCommandOutput
  | CreateFindingsFilterCommandOutput
  | CreateInvitationsCommandOutput
  | CreateMemberCommandOutput
  | CreateSampleFindingsCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteAllowListCommandOutput
  | DeleteCustomDataIdentifierCommandOutput
  | DeleteFindingsFilterCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMemberCommandOutput
  | DescribeBucketsCommandOutput
  | DescribeClassificationJobCommandOutput
  | DescribeOrganizationConfigurationCommandOutput
  | DisableMacieCommandOutput
  | DisableOrganizationAdminAccountCommandOutput
  | DisassociateFromAdministratorAccountCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMemberCommandOutput
  | EnableMacieCommandOutput
  | EnableOrganizationAdminAccountCommandOutput
  | GetAdministratorAccountCommandOutput
  | GetAllowListCommandOutput
  | GetAutomatedDiscoveryConfigurationCommandOutput
  | GetBucketStatisticsCommandOutput
  | GetClassificationExportConfigurationCommandOutput
  | GetClassificationScopeCommandOutput
  | GetCustomDataIdentifierCommandOutput
  | GetFindingStatisticsCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsFilterCommandOutput
  | GetFindingsPublicationConfigurationCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMacieSessionCommandOutput
  | GetMasterAccountCommandOutput
  | GetMemberCommandOutput
  | GetResourceProfileCommandOutput
  | GetRevealConfigurationCommandOutput
  | GetSensitiveDataOccurrencesAvailabilityCommandOutput
  | GetSensitiveDataOccurrencesCommandOutput
  | GetSensitivityInspectionTemplateCommandOutput
  | GetUsageStatisticsCommandOutput
  | GetUsageTotalsCommandOutput
  | ListAllowListsCommandOutput
  | ListAutomatedDiscoveryAccountsCommandOutput
  | ListClassificationJobsCommandOutput
  | ListClassificationScopesCommandOutput
  | ListCustomDataIdentifiersCommandOutput
  | ListFindingsCommandOutput
  | ListFindingsFiltersCommandOutput
  | ListInvitationsCommandOutput
  | ListManagedDataIdentifiersCommandOutput
  | ListMembersCommandOutput
  | ListOrganizationAdminAccountsCommandOutput
  | ListResourceProfileArtifactsCommandOutput
  | ListResourceProfileDetectionsCommandOutput
  | ListSensitivityInspectionTemplatesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutClassificationExportConfigurationCommandOutput
  | PutFindingsPublicationConfigurationCommandOutput
  | SearchResourcesCommandOutput
  | TagResourceCommandOutput
  | TestCustomDataIdentifierCommandOutput
  | UntagResourceCommandOutput
  | UpdateAllowListCommandOutput
  | UpdateAutomatedDiscoveryConfigurationCommandOutput
  | UpdateClassificationJobCommandOutput
  | UpdateClassificationScopeCommandOutput
  | UpdateFindingsFilterCommandOutput
  | UpdateMacieSessionCommandOutput
  | UpdateMemberSessionCommandOutput
  | UpdateOrganizationConfigurationCommandOutput
  | UpdateResourceProfileCommandOutput
  | UpdateResourceProfileDetectionsCommandOutput
  | UpdateRevealConfigurationCommandOutput
  | UpdateSensitivityInspectionTemplateCommandOutput;

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
export type Macie2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Macie2Client class constructor that set the region, credentials and other options.
 */
export interface Macie2ClientConfig extends Macie2ClientConfigType {}

/**
 * @public
 */
export type Macie2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Macie2Client class. This is resolved and normalized from the {@link Macie2ClientConfig | constructor configuration interface}.
 */
export interface Macie2ClientResolvedConfig extends Macie2ClientResolvedConfigType {}

/**
 * <p>Amazon Macie</p>
 * @public
 */
export class Macie2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Macie2ClientResolvedConfig
> {
  /**
   * The resolved configuration of Macie2Client class. This is resolved and normalized from the {@link Macie2ClientConfig | constructor configuration interface}.
   */
  readonly config: Macie2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Macie2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMacie2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Macie2ClientResolvedConfig) =>
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
