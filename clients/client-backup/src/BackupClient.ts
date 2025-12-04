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
  defaultBackupHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateBackupVaultMpaApprovalTeamCommandInput,
  AssociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/AssociateBackupVaultMpaApprovalTeamCommand";
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
  CreateRestoreAccessBackupVaultCommandInput,
  CreateRestoreAccessBackupVaultCommandOutput,
} from "./commands/CreateRestoreAccessBackupVaultCommand";
import {
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
} from "./commands/CreateRestoreTestingPlanCommand";
import {
  CreateRestoreTestingSelectionCommandInput,
  CreateRestoreTestingSelectionCommandOutput,
} from "./commands/CreateRestoreTestingSelectionCommand";
import {
  CreateTieringConfigurationCommandInput,
  CreateTieringConfigurationCommandOutput,
} from "./commands/CreateTieringConfigurationCommand";
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
import {
  DeleteTieringConfigurationCommandInput,
  DeleteTieringConfigurationCommandOutput,
} from "./commands/DeleteTieringConfigurationCommand";
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
import { DescribeScanJobCommandInput, DescribeScanJobCommandOutput } from "./commands/DescribeScanJobCommand";
import {
  DisassociateBackupVaultMpaApprovalTeamCommandInput,
  DisassociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/DisassociateBackupVaultMpaApprovalTeamCommand";
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
  GetRecoveryPointIndexDetailsCommandInput,
  GetRecoveryPointIndexDetailsCommandOutput,
} from "./commands/GetRecoveryPointIndexDetailsCommand";
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
import {
  GetTieringConfigurationCommandInput,
  GetTieringConfigurationCommandOutput,
} from "./commands/GetTieringConfigurationCommand";
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
import {
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput,
} from "./commands/ListIndexedRecoveryPointsCommand";
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
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput,
} from "./commands/ListRestoreAccessBackupVaultsCommand";
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
import { ListScanJobsCommandInput, ListScanJobsCommandOutput } from "./commands/ListScanJobsCommand";
import {
  ListScanJobSummariesCommandInput,
  ListScanJobSummariesCommandOutput,
} from "./commands/ListScanJobSummariesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListTieringConfigurationsCommandInput,
  ListTieringConfigurationsCommandOutput,
} from "./commands/ListTieringConfigurationsCommand";
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
import {
  RevokeRestoreAccessBackupVaultCommandInput,
  RevokeRestoreAccessBackupVaultCommandOutput,
} from "./commands/RevokeRestoreAccessBackupVaultCommand";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "./commands/StartBackupJobCommand";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "./commands/StartCopyJobCommand";
import { StartReportJobCommandInput, StartReportJobCommandOutput } from "./commands/StartReportJobCommand";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "./commands/StartRestoreJobCommand";
import { StartScanJobCommandInput, StartScanJobCommandOutput } from "./commands/StartScanJobCommand";
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
  UpdateRecoveryPointIndexSettingsCommandInput,
  UpdateRecoveryPointIndexSettingsCommandOutput,
} from "./commands/UpdateRecoveryPointIndexSettingsCommand";
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
  UpdateTieringConfigurationCommandInput,
  UpdateTieringConfigurationCommandOutput,
} from "./commands/UpdateTieringConfigurationCommand";
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
  | AssociateBackupVaultMpaApprovalTeamCommandInput
  | CancelLegalHoldCommandInput
  | CreateBackupPlanCommandInput
  | CreateBackupSelectionCommandInput
  | CreateBackupVaultCommandInput
  | CreateFrameworkCommandInput
  | CreateLegalHoldCommandInput
  | CreateLogicallyAirGappedBackupVaultCommandInput
  | CreateReportPlanCommandInput
  | CreateRestoreAccessBackupVaultCommandInput
  | CreateRestoreTestingPlanCommandInput
  | CreateRestoreTestingSelectionCommandInput
  | CreateTieringConfigurationCommandInput
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
  | DeleteTieringConfigurationCommandInput
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
  | DescribeScanJobCommandInput
  | DisassociateBackupVaultMpaApprovalTeamCommandInput
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
  | GetRecoveryPointIndexDetailsCommandInput
  | GetRecoveryPointRestoreMetadataCommandInput
  | GetRestoreJobMetadataCommandInput
  | GetRestoreTestingInferredMetadataCommandInput
  | GetRestoreTestingPlanCommandInput
  | GetRestoreTestingSelectionCommandInput
  | GetSupportedResourceTypesCommandInput
  | GetTieringConfigurationCommandInput
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
  | ListIndexedRecoveryPointsCommandInput
  | ListLegalHoldsCommandInput
  | ListProtectedResourcesByBackupVaultCommandInput
  | ListProtectedResourcesCommandInput
  | ListRecoveryPointsByBackupVaultCommandInput
  | ListRecoveryPointsByLegalHoldCommandInput
  | ListRecoveryPointsByResourceCommandInput
  | ListReportJobsCommandInput
  | ListReportPlansCommandInput
  | ListRestoreAccessBackupVaultsCommandInput
  | ListRestoreJobSummariesCommandInput
  | ListRestoreJobsByProtectedResourceCommandInput
  | ListRestoreJobsCommandInput
  | ListRestoreTestingPlansCommandInput
  | ListRestoreTestingSelectionsCommandInput
  | ListScanJobSummariesCommandInput
  | ListScanJobsCommandInput
  | ListTagsCommandInput
  | ListTieringConfigurationsCommandInput
  | PutBackupVaultAccessPolicyCommandInput
  | PutBackupVaultLockConfigurationCommandInput
  | PutBackupVaultNotificationsCommandInput
  | PutRestoreValidationResultCommandInput
  | RevokeRestoreAccessBackupVaultCommandInput
  | StartBackupJobCommandInput
  | StartCopyJobCommandInput
  | StartReportJobCommandInput
  | StartRestoreJobCommandInput
  | StartScanJobCommandInput
  | StopBackupJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBackupPlanCommandInput
  | UpdateFrameworkCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdateRecoveryPointIndexSettingsCommandInput
  | UpdateRecoveryPointLifecycleCommandInput
  | UpdateRegionSettingsCommandInput
  | UpdateReportPlanCommandInput
  | UpdateRestoreTestingPlanCommandInput
  | UpdateRestoreTestingSelectionCommandInput
  | UpdateTieringConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateBackupVaultMpaApprovalTeamCommandOutput
  | CancelLegalHoldCommandOutput
  | CreateBackupPlanCommandOutput
  | CreateBackupSelectionCommandOutput
  | CreateBackupVaultCommandOutput
  | CreateFrameworkCommandOutput
  | CreateLegalHoldCommandOutput
  | CreateLogicallyAirGappedBackupVaultCommandOutput
  | CreateReportPlanCommandOutput
  | CreateRestoreAccessBackupVaultCommandOutput
  | CreateRestoreTestingPlanCommandOutput
  | CreateRestoreTestingSelectionCommandOutput
  | CreateTieringConfigurationCommandOutput
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
  | DeleteTieringConfigurationCommandOutput
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
  | DescribeScanJobCommandOutput
  | DisassociateBackupVaultMpaApprovalTeamCommandOutput
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
  | GetRecoveryPointIndexDetailsCommandOutput
  | GetRecoveryPointRestoreMetadataCommandOutput
  | GetRestoreJobMetadataCommandOutput
  | GetRestoreTestingInferredMetadataCommandOutput
  | GetRestoreTestingPlanCommandOutput
  | GetRestoreTestingSelectionCommandOutput
  | GetSupportedResourceTypesCommandOutput
  | GetTieringConfigurationCommandOutput
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
  | ListIndexedRecoveryPointsCommandOutput
  | ListLegalHoldsCommandOutput
  | ListProtectedResourcesByBackupVaultCommandOutput
  | ListProtectedResourcesCommandOutput
  | ListRecoveryPointsByBackupVaultCommandOutput
  | ListRecoveryPointsByLegalHoldCommandOutput
  | ListRecoveryPointsByResourceCommandOutput
  | ListReportJobsCommandOutput
  | ListReportPlansCommandOutput
  | ListRestoreAccessBackupVaultsCommandOutput
  | ListRestoreJobSummariesCommandOutput
  | ListRestoreJobsByProtectedResourceCommandOutput
  | ListRestoreJobsCommandOutput
  | ListRestoreTestingPlansCommandOutput
  | ListRestoreTestingSelectionsCommandOutput
  | ListScanJobSummariesCommandOutput
  | ListScanJobsCommandOutput
  | ListTagsCommandOutput
  | ListTieringConfigurationsCommandOutput
  | PutBackupVaultAccessPolicyCommandOutput
  | PutBackupVaultLockConfigurationCommandOutput
  | PutBackupVaultNotificationsCommandOutput
  | PutRestoreValidationResultCommandOutput
  | RevokeRestoreAccessBackupVaultCommandOutput
  | StartBackupJobCommandOutput
  | StartCopyJobCommandOutput
  | StartReportJobCommandOutput
  | StartRestoreJobCommandOutput
  | StartScanJobCommandOutput
  | StopBackupJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBackupPlanCommandOutput
  | UpdateFrameworkCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdateRecoveryPointIndexSettingsCommandOutput
  | UpdateRecoveryPointLifecycleCommandOutput
  | UpdateRegionSettingsCommandOutput
  | UpdateReportPlanCommandOutput
  | UpdateRestoreTestingPlanCommandOutput
  | UpdateRestoreTestingSelectionCommandOutput
  | UpdateTieringConfigurationCommandOutput;

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
