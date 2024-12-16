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
  defaultBackupHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelLegalHoldCommandInput, CancelLegalHoldCommandOutput } from "./commands/CancelLegalHoldCommand";
import { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "./commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "./commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput } from "./commands/CreateBackupVaultCommand";
import { CreateFrameworkCommandInput, CreateFrameworkCommandOutput } from "./commands/CreateFrameworkCommand";
import { CreateLegalHoldCommandInput, CreateLegalHoldCommandOutput } from "./commands/CreateLegalHoldCommand";
import {
  CreateLogicallyAirGappedBackupVaultCommandInput,
  CreateLogicallyAirGappedBackupVaultCommandOutput,
} from "./commands/CreateLogicallyAirGappedBackupVaultCommand";
import { CreateReportPlanCommandInput, CreateReportPlanCommandOutput } from "./commands/CreateReportPlanCommand";
import {
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
} from "./commands/CreateRestoreTestingPlanCommand";
import {
  CreateRestoreTestingSelectionCommandInput,
  CreateRestoreTestingSelectionCommandOutput,
} from "./commands/CreateRestoreTestingSelectionCommand";
import { DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput } from "./commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "./commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import { DeleteBackupVaultCommandInput, DeleteBackupVaultCommandOutput } from "./commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
} from "./commands/DeleteBackupVaultLockConfigurationCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "./commands/DeleteBackupVaultNotificationsCommand";
import { DeleteFrameworkCommandInput, DeleteFrameworkCommandOutput } from "./commands/DeleteFrameworkCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "./commands/DeleteRecoveryPointCommand";
import { DeleteReportPlanCommandInput, DeleteReportPlanCommandOutput } from "./commands/DeleteReportPlanCommand";
import {
  DeleteRestoreTestingPlanCommandInput,
  DeleteRestoreTestingPlanCommandOutput,
} from "./commands/DeleteRestoreTestingPlanCommand";
import {
  DeleteRestoreTestingSelectionCommandInput,
  DeleteRestoreTestingSelectionCommandOutput,
} from "./commands/DeleteRestoreTestingSelectionCommand";
import { DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput } from "./commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "./commands/DescribeBackupVaultCommand";
import { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "./commands/DescribeCopyJobCommand";
import { DescribeFrameworkCommandInput, DescribeFrameworkCommandOutput } from "./commands/DescribeFrameworkCommand";
import {
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "./commands/DescribeGlobalSettingsCommand";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "./commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "./commands/DescribeRecoveryPointCommand";
import {
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "./commands/DescribeRegionSettingsCommand";
import { DescribeReportJobCommandInput, DescribeReportJobCommandOutput } from "./commands/DescribeReportJobCommand";
import { DescribeReportPlanCommandInput, DescribeReportPlanCommandOutput } from "./commands/DescribeReportPlanCommand";
import { DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput } from "./commands/DescribeRestoreJobCommand";
import {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "./commands/DisassociateRecoveryPointCommand";
import {
  DisassociateRecoveryPointFromParentCommandInput,
  DisassociateRecoveryPointFromParentCommandOutput,
} from "./commands/DisassociateRecoveryPointFromParentCommand";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "./commands/ExportBackupPlanTemplateCommand";
import { GetBackupPlanCommandInput, GetBackupPlanCommandOutput } from "./commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "./commands/GetBackupPlanFromTemplateCommand";
import { GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput } from "./commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "./commands/GetBackupVaultNotificationsCommand";
import { GetLegalHoldCommandInput, GetLegalHoldCommandOutput } from "./commands/GetLegalHoldCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetRestoreJobMetadataCommandInput,
  GetRestoreJobMetadataCommandOutput,
} from "./commands/GetRestoreJobMetadataCommand";
import {
  GetRestoreTestingInferredMetadataCommandInput,
  GetRestoreTestingInferredMetadataCommandOutput,
} from "./commands/GetRestoreTestingInferredMetadataCommand";
import {
  GetRestoreTestingPlanCommandInput,
  GetRestoreTestingPlanCommandOutput,
} from "./commands/GetRestoreTestingPlanCommand";
import {
  GetRestoreTestingSelectionCommandInput,
  GetRestoreTestingSelectionCommandOutput,
} from "./commands/GetRestoreTestingSelectionCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "./commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "./commands/ListBackupJobsCommand";
import {
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "./commands/ListBackupJobSummariesCommand";
import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "./commands/ListBackupPlansCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "./commands/ListBackupPlanVersionsCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "./commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "./commands/ListBackupVaultsCommand";
import { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "./commands/ListCopyJobsCommand";
import {
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
} from "./commands/ListCopyJobSummariesCommand";
import { ListFrameworksCommandInput, ListFrameworksCommandOutput } from "./commands/ListFrameworksCommand";
import { ListLegalHoldsCommandInput, ListLegalHoldsCommandOutput } from "./commands/ListLegalHoldsCommand";
import {
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "./commands/ListProtectedResourcesByBackupVaultCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "./commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "./commands/ListRecoveryPointsByLegalHoldCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "./commands/ListRecoveryPointsByResourceCommand";
import { ListReportJobsCommandInput, ListReportJobsCommandOutput } from "./commands/ListReportJobsCommand";
import { ListReportPlansCommandInput, ListReportPlansCommandOutput } from "./commands/ListReportPlansCommand";
import {
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput,
} from "./commands/ListRestoreJobsByProtectedResourceCommand";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "./commands/ListRestoreJobsCommand";
import {
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
} from "./commands/ListRestoreJobSummariesCommand";
import {
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "./commands/ListRestoreTestingPlansCommand";
import {
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "./commands/ListRestoreTestingSelectionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
} from "./commands/PutBackupVaultLockConfigurationCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  PutRestoreValidationResultCommandInput,
  PutRestoreValidationResultCommandOutput,
} from "./commands/PutRestoreValidationResultCommand";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "./commands/StartBackupJobCommand";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "./commands/StartCopyJobCommand";
import { StartReportJobCommandInput, StartReportJobCommandOutput } from "./commands/StartReportJobCommand";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "./commands/StartRestoreJobCommand";
import { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "./commands/StopBackupJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "./commands/UpdateBackupPlanCommand";
import { UpdateFrameworkCommandInput, UpdateFrameworkCommandOutput } from "./commands/UpdateFrameworkCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "./commands/UpdateRegionSettingsCommand";
import { UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput } from "./commands/UpdateReportPlanCommand";
import {
  UpdateRestoreTestingPlanCommandInput,
  UpdateRestoreTestingPlanCommandOutput,
} from "./commands/UpdateRestoreTestingPlanCommand";
import {
  UpdateRestoreTestingSelectionCommandInput,
  UpdateRestoreTestingSelectionCommandOutput,
} from "./commands/UpdateRestoreTestingSelectionCommand";
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
  | CancelLegalHoldCommandInput
  | CreateBackupPlanCommandInput
  | CreateBackupSelectionCommandInput
  | CreateBackupVaultCommandInput
  | CreateFrameworkCommandInput
  | CreateLegalHoldCommandInput
  | CreateLogicallyAirGappedBackupVaultCommandInput
  | CreateReportPlanCommandInput
  | CreateRestoreTestingPlanCommandInput
  | CreateRestoreTestingSelectionCommandInput
  | DeleteBackupPlanCommandInput
  | DeleteBackupSelectionCommandInput
  | DeleteBackupVaultAccessPolicyCommandInput
  | DeleteBackupVaultCommandInput
  | DeleteBackupVaultLockConfigurationCommandInput
  | DeleteBackupVaultNotificationsCommandInput
  | DeleteFrameworkCommandInput
  | DeleteRecoveryPointCommandInput
  | DeleteReportPlanCommandInput
  | DeleteRestoreTestingPlanCommandInput
  | DeleteRestoreTestingSelectionCommandInput
  | DescribeBackupJobCommandInput
  | DescribeBackupVaultCommandInput
  | DescribeCopyJobCommandInput
  | DescribeFrameworkCommandInput
  | DescribeGlobalSettingsCommandInput
  | DescribeProtectedResourceCommandInput
  | DescribeRecoveryPointCommandInput
  | DescribeRegionSettingsCommandInput
  | DescribeReportJobCommandInput
  | DescribeReportPlanCommandInput
  | DescribeRestoreJobCommandInput
  | DisassociateRecoveryPointCommandInput
  | DisassociateRecoveryPointFromParentCommandInput
  | ExportBackupPlanTemplateCommandInput
  | GetBackupPlanCommandInput
  | GetBackupPlanFromJSONCommandInput
  | GetBackupPlanFromTemplateCommandInput
  | GetBackupSelectionCommandInput
  | GetBackupVaultAccessPolicyCommandInput
  | GetBackupVaultNotificationsCommandInput
  | GetLegalHoldCommandInput
  | GetRecoveryPointRestoreMetadataCommandInput
  | GetRestoreJobMetadataCommandInput
  | GetRestoreTestingInferredMetadataCommandInput
  | GetRestoreTestingPlanCommandInput
  | GetRestoreTestingSelectionCommandInput
  | GetSupportedResourceTypesCommandInput
  | ListBackupJobSummariesCommandInput
  | ListBackupJobsCommandInput
  | ListBackupPlanTemplatesCommandInput
  | ListBackupPlanVersionsCommandInput
  | ListBackupPlansCommandInput
  | ListBackupSelectionsCommandInput
  | ListBackupVaultsCommandInput
  | ListCopyJobSummariesCommandInput
  | ListCopyJobsCommandInput
  | ListFrameworksCommandInput
  | ListLegalHoldsCommandInput
  | ListProtectedResourcesByBackupVaultCommandInput
  | ListProtectedResourcesCommandInput
  | ListRecoveryPointsByBackupVaultCommandInput
  | ListRecoveryPointsByLegalHoldCommandInput
  | ListRecoveryPointsByResourceCommandInput
  | ListReportJobsCommandInput
  | ListReportPlansCommandInput
  | ListRestoreJobSummariesCommandInput
  | ListRestoreJobsByProtectedResourceCommandInput
  | ListRestoreJobsCommandInput
  | ListRestoreTestingPlansCommandInput
  | ListRestoreTestingSelectionsCommandInput
  | ListTagsCommandInput
  | PutBackupVaultAccessPolicyCommandInput
  | PutBackupVaultLockConfigurationCommandInput
  | PutBackupVaultNotificationsCommandInput
  | PutRestoreValidationResultCommandInput
  | StartBackupJobCommandInput
  | StartCopyJobCommandInput
  | StartReportJobCommandInput
  | StartRestoreJobCommandInput
  | StopBackupJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBackupPlanCommandInput
  | UpdateFrameworkCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdateRecoveryPointLifecycleCommandInput
  | UpdateRegionSettingsCommandInput
  | UpdateReportPlanCommandInput
  | UpdateRestoreTestingPlanCommandInput
  | UpdateRestoreTestingSelectionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelLegalHoldCommandOutput
  | CreateBackupPlanCommandOutput
  | CreateBackupSelectionCommandOutput
  | CreateBackupVaultCommandOutput
  | CreateFrameworkCommandOutput
  | CreateLegalHoldCommandOutput
  | CreateLogicallyAirGappedBackupVaultCommandOutput
  | CreateReportPlanCommandOutput
  | CreateRestoreTestingPlanCommandOutput
  | CreateRestoreTestingSelectionCommandOutput
  | DeleteBackupPlanCommandOutput
  | DeleteBackupSelectionCommandOutput
  | DeleteBackupVaultAccessPolicyCommandOutput
  | DeleteBackupVaultCommandOutput
  | DeleteBackupVaultLockConfigurationCommandOutput
  | DeleteBackupVaultNotificationsCommandOutput
  | DeleteFrameworkCommandOutput
  | DeleteRecoveryPointCommandOutput
  | DeleteReportPlanCommandOutput
  | DeleteRestoreTestingPlanCommandOutput
  | DeleteRestoreTestingSelectionCommandOutput
  | DescribeBackupJobCommandOutput
  | DescribeBackupVaultCommandOutput
  | DescribeCopyJobCommandOutput
  | DescribeFrameworkCommandOutput
  | DescribeGlobalSettingsCommandOutput
  | DescribeProtectedResourceCommandOutput
  | DescribeRecoveryPointCommandOutput
  | DescribeRegionSettingsCommandOutput
  | DescribeReportJobCommandOutput
  | DescribeReportPlanCommandOutput
  | DescribeRestoreJobCommandOutput
  | DisassociateRecoveryPointCommandOutput
  | DisassociateRecoveryPointFromParentCommandOutput
  | ExportBackupPlanTemplateCommandOutput
  | GetBackupPlanCommandOutput
  | GetBackupPlanFromJSONCommandOutput
  | GetBackupPlanFromTemplateCommandOutput
  | GetBackupSelectionCommandOutput
  | GetBackupVaultAccessPolicyCommandOutput
  | GetBackupVaultNotificationsCommandOutput
  | GetLegalHoldCommandOutput
  | GetRecoveryPointRestoreMetadataCommandOutput
  | GetRestoreJobMetadataCommandOutput
  | GetRestoreTestingInferredMetadataCommandOutput
  | GetRestoreTestingPlanCommandOutput
  | GetRestoreTestingSelectionCommandOutput
  | GetSupportedResourceTypesCommandOutput
  | ListBackupJobSummariesCommandOutput
  | ListBackupJobsCommandOutput
  | ListBackupPlanTemplatesCommandOutput
  | ListBackupPlanVersionsCommandOutput
  | ListBackupPlansCommandOutput
  | ListBackupSelectionsCommandOutput
  | ListBackupVaultsCommandOutput
  | ListCopyJobSummariesCommandOutput
  | ListCopyJobsCommandOutput
  | ListFrameworksCommandOutput
  | ListLegalHoldsCommandOutput
  | ListProtectedResourcesByBackupVaultCommandOutput
  | ListProtectedResourcesCommandOutput
  | ListRecoveryPointsByBackupVaultCommandOutput
  | ListRecoveryPointsByLegalHoldCommandOutput
  | ListRecoveryPointsByResourceCommandOutput
  | ListReportJobsCommandOutput
  | ListReportPlansCommandOutput
  | ListRestoreJobSummariesCommandOutput
  | ListRestoreJobsByProtectedResourceCommandOutput
  | ListRestoreJobsCommandOutput
  | ListRestoreTestingPlansCommandOutput
  | ListRestoreTestingSelectionsCommandOutput
  | ListTagsCommandOutput
  | PutBackupVaultAccessPolicyCommandOutput
  | PutBackupVaultLockConfigurationCommandOutput
  | PutBackupVaultNotificationsCommandOutput
  | PutRestoreValidationResultCommandOutput
  | StartBackupJobCommandOutput
  | StartCopyJobCommandOutput
  | StartReportJobCommandOutput
  | StartRestoreJobCommandOutput
  | StopBackupJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBackupPlanCommandOutput
  | UpdateFrameworkCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdateRecoveryPointLifecycleCommandOutput
  | UpdateRegionSettingsCommandOutput
  | UpdateReportPlanCommandOutput
  | UpdateRestoreTestingPlanCommandOutput
  | UpdateRestoreTestingSelectionCommandOutput;

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
export type BackupClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BackupClient class constructor that set the region, credentials and other options.
 */
export interface BackupClientConfig extends BackupClientConfigType {}

/**
 * @public
 */
export type BackupClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BackupClient class. This is resolved and normalized from the {@link BackupClientConfig | constructor configuration interface}.
 */
export interface BackupClientResolvedConfig extends BackupClientResolvedConfigType {}

/**
 * <fullname>Backup</fullname>
 *          <p>Backup is a unified backup service designed to protect Amazon Web Services
 *          services and their associated data. Backup simplifies the creation, migration,
 *          restoration, and deletion of backups, while also providing reporting and
 *          auditing.</p>
 * @public
 */
export class BackupClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BackupClientResolvedConfig
> {
  /**
   * The resolved configuration of BackupClient class. This is resolved and normalized from the {@link BackupClientConfig | constructor configuration interface}.
   */
  readonly config: BackupClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BackupClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBackupHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BackupClientResolvedConfig) =>
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
