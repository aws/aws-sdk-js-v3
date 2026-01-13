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
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
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
  defaultAuditManagerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
} from "./commands/BatchCreateDelegationByAssessmentCommand";
import {
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
} from "./commands/BatchDeleteDelegationByAssessmentCommand";
import {
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
} from "./commands/BatchImportEvidenceToAssessmentControlCommand";
import { CreateAssessmentCommandInput, CreateAssessmentCommandOutput } from "./commands/CreateAssessmentCommand";
import {
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
} from "./commands/CreateAssessmentFrameworkCommand";
import {
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
} from "./commands/CreateAssessmentReportCommand";
import { CreateControlCommandInput, CreateControlCommandOutput } from "./commands/CreateControlCommand";
import { DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput } from "./commands/DeleteAssessmentCommand";
import {
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
} from "./commands/DeleteAssessmentFrameworkCommand";
import {
  DeleteAssessmentFrameworkShareCommandInput,
  DeleteAssessmentFrameworkShareCommandOutput,
} from "./commands/DeleteAssessmentFrameworkShareCommand";
import {
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
} from "./commands/DeleteAssessmentReportCommand";
import { DeleteControlCommandInput, DeleteControlCommandOutput } from "./commands/DeleteControlCommand";
import { DeregisterAccountCommandInput, DeregisterAccountCommandOutput } from "./commands/DeregisterAccountCommand";
import {
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
} from "./commands/DeregisterOrganizationAdminAccountCommand";
import {
  DisassociateAssessmentReportEvidenceFolderCommandInput,
  DisassociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/DisassociateAssessmentReportEvidenceFolderCommand";
import { GetAccountStatusCommandInput, GetAccountStatusCommandOutput } from "./commands/GetAccountStatusCommand";
import { GetAssessmentCommandInput, GetAssessmentCommandOutput } from "./commands/GetAssessmentCommand";
import {
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
} from "./commands/GetAssessmentFrameworkCommand";
import {
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
} from "./commands/GetAssessmentReportUrlCommand";
import { GetChangeLogsCommandInput, GetChangeLogsCommandOutput } from "./commands/GetChangeLogsCommand";
import { GetControlCommandInput, GetControlCommandOutput } from "./commands/GetControlCommand";
import { GetDelegationsCommandInput, GetDelegationsCommandOutput } from "./commands/GetDelegationsCommand";
import {
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "./commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommandInput, GetEvidenceCommandOutput } from "./commands/GetEvidenceCommand";
import {
  GetEvidenceFileUploadUrlCommandInput,
  GetEvidenceFileUploadUrlCommandOutput,
} from "./commands/GetEvidenceFileUploadUrlCommand";
import { GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput } from "./commands/GetEvidenceFolderCommand";
import {
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentCommand";
import {
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  GetInsightsByAssessmentCommandInput,
  GetInsightsByAssessmentCommandOutput,
} from "./commands/GetInsightsByAssessmentCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "./commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput } from "./commands/GetServicesInScopeCommand";
import { GetSettingsCommandInput, GetSettingsCommandOutput } from "./commands/GetSettingsCommand";
import {
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput,
} from "./commands/ListAssessmentControlInsightsByControlDomainCommand";
import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "./commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
} from "./commands/ListAssessmentFrameworkShareRequestsCommand";
import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "./commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "./commands/ListAssessmentsCommand";
import {
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput,
} from "./commands/ListControlDomainInsightsByAssessmentCommand";
import {
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput,
} from "./commands/ListControlDomainInsightsCommand";
import {
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
} from "./commands/ListControlInsightsByControlDomainCommand";
import { ListControlsCommandInput, ListControlsCommandOutput } from "./commands/ListControlsCommand";
import {
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "./commands/ListKeywordsForDataSourceCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "./commands/RegisterAccountCommand";
import {
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
} from "./commands/RegisterOrganizationAdminAccountCommand";
import {
  StartAssessmentFrameworkShareCommandInput,
  StartAssessmentFrameworkShareCommandOutput,
} from "./commands/StartAssessmentFrameworkShareCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput } from "./commands/UpdateAssessmentCommand";
import {
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
} from "./commands/UpdateAssessmentControlCommand";
import {
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
} from "./commands/UpdateAssessmentControlSetStatusCommand";
import {
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
} from "./commands/UpdateAssessmentFrameworkCommand";
import {
  UpdateAssessmentFrameworkShareCommandInput,
  UpdateAssessmentFrameworkShareCommandOutput,
} from "./commands/UpdateAssessmentFrameworkShareCommand";
import {
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "./commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommandInput, UpdateControlCommandOutput } from "./commands/UpdateControlCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "./commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "./commands/ValidateAssessmentReportIntegrityCommand";
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
  | AssociateAssessmentReportEvidenceFolderCommandInput
  | BatchAssociateAssessmentReportEvidenceCommandInput
  | BatchCreateDelegationByAssessmentCommandInput
  | BatchDeleteDelegationByAssessmentCommandInput
  | BatchDisassociateAssessmentReportEvidenceCommandInput
  | BatchImportEvidenceToAssessmentControlCommandInput
  | CreateAssessmentCommandInput
  | CreateAssessmentFrameworkCommandInput
  | CreateAssessmentReportCommandInput
  | CreateControlCommandInput
  | DeleteAssessmentCommandInput
  | DeleteAssessmentFrameworkCommandInput
  | DeleteAssessmentFrameworkShareCommandInput
  | DeleteAssessmentReportCommandInput
  | DeleteControlCommandInput
  | DeregisterAccountCommandInput
  | DeregisterOrganizationAdminAccountCommandInput
  | DisassociateAssessmentReportEvidenceFolderCommandInput
  | GetAccountStatusCommandInput
  | GetAssessmentCommandInput
  | GetAssessmentFrameworkCommandInput
  | GetAssessmentReportUrlCommandInput
  | GetChangeLogsCommandInput
  | GetControlCommandInput
  | GetDelegationsCommandInput
  | GetEvidenceByEvidenceFolderCommandInput
  | GetEvidenceCommandInput
  | GetEvidenceFileUploadUrlCommandInput
  | GetEvidenceFolderCommandInput
  | GetEvidenceFoldersByAssessmentCommandInput
  | GetEvidenceFoldersByAssessmentControlCommandInput
  | GetInsightsByAssessmentCommandInput
  | GetInsightsCommandInput
  | GetOrganizationAdminAccountCommandInput
  | GetServicesInScopeCommandInput
  | GetSettingsCommandInput
  | ListAssessmentControlInsightsByControlDomainCommandInput
  | ListAssessmentFrameworkShareRequestsCommandInput
  | ListAssessmentFrameworksCommandInput
  | ListAssessmentReportsCommandInput
  | ListAssessmentsCommandInput
  | ListControlDomainInsightsByAssessmentCommandInput
  | ListControlDomainInsightsCommandInput
  | ListControlInsightsByControlDomainCommandInput
  | ListControlsCommandInput
  | ListKeywordsForDataSourceCommandInput
  | ListNotificationsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterAccountCommandInput
  | RegisterOrganizationAdminAccountCommandInput
  | StartAssessmentFrameworkShareCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAssessmentCommandInput
  | UpdateAssessmentControlCommandInput
  | UpdateAssessmentControlSetStatusCommandInput
  | UpdateAssessmentFrameworkCommandInput
  | UpdateAssessmentFrameworkShareCommandInput
  | UpdateAssessmentStatusCommandInput
  | UpdateControlCommandInput
  | UpdateSettingsCommandInput
  | ValidateAssessmentReportIntegrityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAssessmentReportEvidenceFolderCommandOutput
  | BatchAssociateAssessmentReportEvidenceCommandOutput
  | BatchCreateDelegationByAssessmentCommandOutput
  | BatchDeleteDelegationByAssessmentCommandOutput
  | BatchDisassociateAssessmentReportEvidenceCommandOutput
  | BatchImportEvidenceToAssessmentControlCommandOutput
  | CreateAssessmentCommandOutput
  | CreateAssessmentFrameworkCommandOutput
  | CreateAssessmentReportCommandOutput
  | CreateControlCommandOutput
  | DeleteAssessmentCommandOutput
  | DeleteAssessmentFrameworkCommandOutput
  | DeleteAssessmentFrameworkShareCommandOutput
  | DeleteAssessmentReportCommandOutput
  | DeleteControlCommandOutput
  | DeregisterAccountCommandOutput
  | DeregisterOrganizationAdminAccountCommandOutput
  | DisassociateAssessmentReportEvidenceFolderCommandOutput
  | GetAccountStatusCommandOutput
  | GetAssessmentCommandOutput
  | GetAssessmentFrameworkCommandOutput
  | GetAssessmentReportUrlCommandOutput
  | GetChangeLogsCommandOutput
  | GetControlCommandOutput
  | GetDelegationsCommandOutput
  | GetEvidenceByEvidenceFolderCommandOutput
  | GetEvidenceCommandOutput
  | GetEvidenceFileUploadUrlCommandOutput
  | GetEvidenceFolderCommandOutput
  | GetEvidenceFoldersByAssessmentCommandOutput
  | GetEvidenceFoldersByAssessmentControlCommandOutput
  | GetInsightsByAssessmentCommandOutput
  | GetInsightsCommandOutput
  | GetOrganizationAdminAccountCommandOutput
  | GetServicesInScopeCommandOutput
  | GetSettingsCommandOutput
  | ListAssessmentControlInsightsByControlDomainCommandOutput
  | ListAssessmentFrameworkShareRequestsCommandOutput
  | ListAssessmentFrameworksCommandOutput
  | ListAssessmentReportsCommandOutput
  | ListAssessmentsCommandOutput
  | ListControlDomainInsightsByAssessmentCommandOutput
  | ListControlDomainInsightsCommandOutput
  | ListControlInsightsByControlDomainCommandOutput
  | ListControlsCommandOutput
  | ListKeywordsForDataSourceCommandOutput
  | ListNotificationsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterAccountCommandOutput
  | RegisterOrganizationAdminAccountCommandOutput
  | StartAssessmentFrameworkShareCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAssessmentCommandOutput
  | UpdateAssessmentControlCommandOutput
  | UpdateAssessmentControlSetStatusCommandOutput
  | UpdateAssessmentFrameworkCommandOutput
  | UpdateAssessmentFrameworkShareCommandOutput
  | UpdateAssessmentStatusCommandOutput
  | UpdateControlCommandOutput
  | UpdateSettingsCommandOutput
  | ValidateAssessmentReportIntegrityCommandOutput;

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
export type AuditManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AuditManagerClient class constructor that set the region, credentials and other options.
 */
export interface AuditManagerClientConfig extends AuditManagerClientConfigType {}

/**
 * @public
 */
export type AuditManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AuditManagerClient class. This is resolved and normalized from the {@link AuditManagerClientConfig | constructor configuration interface}.
 */
export interface AuditManagerClientResolvedConfig extends AuditManagerClientResolvedConfigType {}

/**
 * <p>Welcome to the Audit Manager API reference. This guide is for developers who
 *          need detailed information about the Audit Manager API operations, data types, and
 *          errors. </p>
 *          <p>Audit Manager is a service that provides automated evidence collection so that you
 *          can continually audit your Amazon Web Services usage. You can use it to assess the
 *          effectiveness of your controls, manage risk, and simplify compliance.</p>
 *          <p>Audit Manager provides prebuilt frameworks that structure and automate assessments
 *          for a given compliance standard. Frameworks include a prebuilt collection of controls with
 *          descriptions and testing procedures. These controls are grouped according to the
 *          requirements of the specified compliance standard or regulation. You can also customize
 *          frameworks and controls to support internal audits with specific requirements. </p>
 *          <p>Use the following links to get started with the Audit Manager API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An
 *                alphabetical list of all Audit Manager API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common
 *                   parameters</a>: Parameters that all operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>:
 *                Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html">
 *             Audit Manager User Guide</a>.</p>
 * @public
 */
export class AuditManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AuditManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of AuditManagerClient class. This is resolved and normalized from the {@link AuditManagerClientConfig | constructor configuration interface}.
   */
  readonly config: AuditManagerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AuditManagerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAuditManagerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AuditManagerClientResolvedConfig) =>
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
