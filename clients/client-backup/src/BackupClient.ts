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
  defaultBackupHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateBackupVaultMpaApprovalTeamCommandInput,
  AssociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/AssociateBackupVaultMpaApprovalTeamCommand";
import type { CancelLegalHoldCommandInput, CancelLegalHoldCommandOutput } from "./commands/CancelLegalHoldCommand";
import type { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "./commands/CreateBackupPlanCommand";
import type {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "./commands/CreateBackupSelectionCommand";
import type {
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput,
} from "./commands/CreateBackupVaultCommand";
import type { CreateFrameworkCommandInput, CreateFrameworkCommandOutput } from "./commands/CreateFrameworkCommand";
import type { CreateLegalHoldCommandInput, CreateLegalHoldCommandOutput } from "./commands/CreateLegalHoldCommand";
import type {
  CreateLogicallyAirGappedBackupVaultCommandInput,
  CreateLogicallyAirGappedBackupVaultCommandOutput,
} from "./commands/CreateLogicallyAirGappedBackupVaultCommand";
import type { CreateReportPlanCommandInput, CreateReportPlanCommandOutput } from "./commands/CreateReportPlanCommand";
import type {
  CreateRestoreAccessBackupVaultCommandInput,
  CreateRestoreAccessBackupVaultCommandOutput,
} from "./commands/CreateRestoreAccessBackupVaultCommand";
import type {
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
} from "./commands/CreateRestoreTestingPlanCommand";
import type {
  CreateRestoreTestingSelectionCommandInput,
  CreateRestoreTestingSelectionCommandOutput,
} from "./commands/CreateRestoreTestingSelectionCommand";
import type {
  CreateTieringConfigurationCommandInput,
  CreateTieringConfigurationCommandOutput,
} from "./commands/CreateTieringConfigurationCommand";
import type { DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput } from "./commands/DeleteBackupPlanCommand";
import type {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "./commands/DeleteBackupSelectionCommand";
import type {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import type {
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput,
} from "./commands/DeleteBackupVaultCommand";
import type {
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
} from "./commands/DeleteBackupVaultLockConfigurationCommand";
import type {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "./commands/DeleteBackupVaultNotificationsCommand";
import type { DeleteFrameworkCommandInput, DeleteFrameworkCommandOutput } from "./commands/DeleteFrameworkCommand";
import type {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "./commands/DeleteRecoveryPointCommand";
import type { DeleteReportPlanCommandInput, DeleteReportPlanCommandOutput } from "./commands/DeleteReportPlanCommand";
import type {
  DeleteRestoreTestingPlanCommandInput,
  DeleteRestoreTestingPlanCommandOutput,
} from "./commands/DeleteRestoreTestingPlanCommand";
import type {
  DeleteRestoreTestingSelectionCommandInput,
  DeleteRestoreTestingSelectionCommandOutput,
} from "./commands/DeleteRestoreTestingSelectionCommand";
import type {
  DeleteTieringConfigurationCommandInput,
  DeleteTieringConfigurationCommandOutput,
} from "./commands/DeleteTieringConfigurationCommand";
import type {
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput,
} from "./commands/DescribeBackupJobCommand";
import type {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "./commands/DescribeBackupVaultCommand";
import type { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "./commands/DescribeCopyJobCommand";
import type {
  DescribeFrameworkCommandInput,
  DescribeFrameworkCommandOutput,
} from "./commands/DescribeFrameworkCommand";
import type {
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "./commands/DescribeGlobalSettingsCommand";
import type {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "./commands/DescribeProtectedResourceCommand";
import type {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "./commands/DescribeRecoveryPointCommand";
import type {
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "./commands/DescribeRegionSettingsCommand";
import type {
  DescribeReportJobCommandInput,
  DescribeReportJobCommandOutput,
} from "./commands/DescribeReportJobCommand";
import type {
  DescribeReportPlanCommandInput,
  DescribeReportPlanCommandOutput,
} from "./commands/DescribeReportPlanCommand";
import type {
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput,
} from "./commands/DescribeRestoreJobCommand";
import type { DescribeScanJobCommandInput, DescribeScanJobCommandOutput } from "./commands/DescribeScanJobCommand";
import type {
  DisassociateBackupVaultMpaApprovalTeamCommandInput,
  DisassociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/DisassociateBackupVaultMpaApprovalTeamCommand";
import type {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "./commands/DisassociateRecoveryPointCommand";
import type {
  DisassociateRecoveryPointFromParentCommandInput,
  DisassociateRecoveryPointFromParentCommandOutput,
} from "./commands/DisassociateRecoveryPointFromParentCommand";
import type {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "./commands/ExportBackupPlanTemplateCommand";
import type { GetBackupPlanCommandInput, GetBackupPlanCommandOutput } from "./commands/GetBackupPlanCommand";
import type {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "./commands/GetBackupPlanFromJSONCommand";
import type {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "./commands/GetBackupPlanFromTemplateCommand";
import type {
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
} from "./commands/GetBackupSelectionCommand";
import type {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "./commands/GetBackupVaultAccessPolicyCommand";
import type {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "./commands/GetBackupVaultNotificationsCommand";
import type { GetLegalHoldCommandInput, GetLegalHoldCommandOutput } from "./commands/GetLegalHoldCommand";
import type {
  GetRecoveryPointIndexDetailsCommandInput,
  GetRecoveryPointIndexDetailsCommandOutput,
} from "./commands/GetRecoveryPointIndexDetailsCommand";
import type {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import type {
  GetRestoreJobMetadataCommandInput,
  GetRestoreJobMetadataCommandOutput,
} from "./commands/GetRestoreJobMetadataCommand";
import type {
  GetRestoreTestingInferredMetadataCommandInput,
  GetRestoreTestingInferredMetadataCommandOutput,
} from "./commands/GetRestoreTestingInferredMetadataCommand";
import type {
  GetRestoreTestingPlanCommandInput,
  GetRestoreTestingPlanCommandOutput,
} from "./commands/GetRestoreTestingPlanCommand";
import type {
  GetRestoreTestingSelectionCommandInput,
  GetRestoreTestingSelectionCommandOutput,
} from "./commands/GetRestoreTestingSelectionCommand";
import type {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "./commands/GetSupportedResourceTypesCommand";
import type {
  GetTieringConfigurationCommandInput,
  GetTieringConfigurationCommandOutput,
} from "./commands/GetTieringConfigurationCommand";
import type { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "./commands/ListBackupJobsCommand";
import type {
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "./commands/ListBackupJobSummariesCommand";
import type { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "./commands/ListBackupPlansCommand";
import type {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "./commands/ListBackupPlanTemplatesCommand";
import type {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "./commands/ListBackupPlanVersionsCommand";
import type {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "./commands/ListBackupSelectionsCommand";
import type { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "./commands/ListBackupVaultsCommand";
import type { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "./commands/ListCopyJobsCommand";
import type {
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
} from "./commands/ListCopyJobSummariesCommand";
import type { ListFrameworksCommandInput, ListFrameworksCommandOutput } from "./commands/ListFrameworksCommand";
import type {
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput,
} from "./commands/ListIndexedRecoveryPointsCommand";
import type { ListLegalHoldsCommandInput, ListLegalHoldsCommandOutput } from "./commands/ListLegalHoldsCommand";
import type {
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "./commands/ListProtectedResourcesByBackupVaultCommand";
import type {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "./commands/ListProtectedResourcesCommand";
import type {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import type {
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "./commands/ListRecoveryPointsByLegalHoldCommand";
import type {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "./commands/ListRecoveryPointsByResourceCommand";
import type { ListReportJobsCommandInput, ListReportJobsCommandOutput } from "./commands/ListReportJobsCommand";
import type { ListReportPlansCommandInput, ListReportPlansCommandOutput } from "./commands/ListReportPlansCommand";
import type {
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput,
} from "./commands/ListRestoreAccessBackupVaultsCommand";
import type {
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput,
} from "./commands/ListRestoreJobsByProtectedResourceCommand";
import type { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "./commands/ListRestoreJobsCommand";
import type {
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
} from "./commands/ListRestoreJobSummariesCommand";
import type {
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "./commands/ListRestoreTestingPlansCommand";
import type {
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "./commands/ListRestoreTestingSelectionsCommand";
import type { ListScanJobsCommandInput, ListScanJobsCommandOutput } from "./commands/ListScanJobsCommand";
import type {
  ListScanJobSummariesCommandInput,
  ListScanJobSummariesCommandOutput,
} from "./commands/ListScanJobSummariesCommand";
import type { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import type {
  ListTieringConfigurationsCommandInput,
  ListTieringConfigurationsCommandOutput,
} from "./commands/ListTieringConfigurationsCommand";
import type {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "./commands/PutBackupVaultAccessPolicyCommand";
import type {
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
} from "./commands/PutBackupVaultLockConfigurationCommand";
import type {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "./commands/PutBackupVaultNotificationsCommand";
import type {
  PutRestoreValidationResultCommandInput,
  PutRestoreValidationResultCommandOutput,
} from "./commands/PutRestoreValidationResultCommand";
import type {
  RevokeRestoreAccessBackupVaultCommandInput,
  RevokeRestoreAccessBackupVaultCommandOutput,
} from "./commands/RevokeRestoreAccessBackupVaultCommand";
import type { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "./commands/StartBackupJobCommand";
import type { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "./commands/StartCopyJobCommand";
import type { StartReportJobCommandInput, StartReportJobCommandOutput } from "./commands/StartReportJobCommand";
import type { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "./commands/StartRestoreJobCommand";
import type { StartScanJobCommandInput, StartScanJobCommandOutput } from "./commands/StartScanJobCommand";
import type { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "./commands/StopBackupJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "./commands/UpdateBackupPlanCommand";
import type { UpdateFrameworkCommandInput, UpdateFrameworkCommandOutput } from "./commands/UpdateFrameworkCommand";
import type {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import type {
  UpdateRecoveryPointIndexSettingsCommandInput,
  UpdateRecoveryPointIndexSettingsCommandOutput,
} from "./commands/UpdateRecoveryPointIndexSettingsCommand";
import type {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import type {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "./commands/UpdateRegionSettingsCommand";
import type { UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput } from "./commands/UpdateReportPlanCommand";
import type {
  UpdateRestoreTestingPlanCommandInput,
  UpdateRestoreTestingPlanCommandOutput,
} from "./commands/UpdateRestoreTestingPlanCommand";
import type {
  UpdateRestoreTestingSelectionCommandInput,
  UpdateRestoreTestingSelectionCommandOutput,
} from "./commands/UpdateRestoreTestingSelectionCommand";
import type {
  UpdateTieringConfigurationCommandInput,
  UpdateTieringConfigurationCommandOutput,
} from "./commands/UpdateTieringConfigurationCommand";
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
