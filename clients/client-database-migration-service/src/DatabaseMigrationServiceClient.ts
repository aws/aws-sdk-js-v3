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
  defaultDatabaseMigrationServiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import type {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import type {
  BatchStartRecommendationsCommandInput,
  BatchStartRecommendationsCommandOutput,
} from "./commands/BatchStartRecommendationsCommand";
import type {
  CancelMetadataModelConversionCommandInput,
  CancelMetadataModelConversionCommandOutput,
} from "./commands/CancelMetadataModelConversionCommand";
import type {
  CancelMetadataModelCreationCommandInput,
  CancelMetadataModelCreationCommandOutput,
} from "./commands/CancelMetadataModelCreationCommand";
import type {
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
} from "./commands/CancelReplicationTaskAssessmentRunCommand";
import type {
  CreateDataMigrationCommandInput,
  CreateDataMigrationCommandOutput,
} from "./commands/CreateDataMigrationCommand";
import type {
  CreateDataProviderCommandInput,
  CreateDataProviderCommandOutput,
} from "./commands/CreateDataProviderCommand";
import type { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import type {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import type {
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
} from "./commands/CreateFleetAdvisorCollectorCommand";
import type {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import type {
  CreateMigrationProjectCommandInput,
  CreateMigrationProjectCommandOutput,
} from "./commands/CreateMigrationProjectCommand";
import type {
  CreateReplicationConfigCommandInput,
  CreateReplicationConfigCommandOutput,
} from "./commands/CreateReplicationConfigCommand";
import type {
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
} from "./commands/CreateReplicationInstanceCommand";
import type {
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
} from "./commands/CreateReplicationSubnetGroupCommand";
import type {
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
} from "./commands/CreateReplicationTaskCommand";
import type {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import type { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import type {
  DeleteDataMigrationCommandInput,
  DeleteDataMigrationCommandOutput,
} from "./commands/DeleteDataMigrationCommand";
import type {
  DeleteDataProviderCommandInput,
  DeleteDataProviderCommandOutput,
} from "./commands/DeleteDataProviderCommand";
import type { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import type {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import type {
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
} from "./commands/DeleteFleetAdvisorCollectorCommand";
import type {
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
} from "./commands/DeleteFleetAdvisorDatabasesCommand";
import type {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import type {
  DeleteMigrationProjectCommandInput,
  DeleteMigrationProjectCommandOutput,
} from "./commands/DeleteMigrationProjectCommand";
import type {
  DeleteReplicationConfigCommandInput,
  DeleteReplicationConfigCommandOutput,
} from "./commands/DeleteReplicationConfigCommand";
import type {
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
} from "./commands/DeleteReplicationInstanceCommand";
import type {
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput,
} from "./commands/DeleteReplicationSubnetGroupCommand";
import type {
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
} from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import type {
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput,
} from "./commands/DeleteReplicationTaskCommand";
import type {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import type {
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import type {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import type {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import type {
  DescribeConversionConfigurationCommandInput,
  DescribeConversionConfigurationCommandOutput,
} from "./commands/DescribeConversionConfigurationCommand";
import type {
  DescribeDataMigrationsCommandInput,
  DescribeDataMigrationsCommandOutput,
} from "./commands/DescribeDataMigrationsCommand";
import type {
  DescribeDataProvidersCommandInput,
  DescribeDataProvidersCommandOutput,
} from "./commands/DescribeDataProvidersCommand";
import type {
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import type {
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "./commands/DescribeEndpointSettingsCommand";
import type {
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "./commands/DescribeEndpointTypesCommand";
import type {
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand";
import type {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import type { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import type {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import type {
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput,
} from "./commands/DescribeExtensionPackAssociationsCommand";
import type {
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "./commands/DescribeFleetAdvisorCollectorsCommand";
import type {
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "./commands/DescribeFleetAdvisorDatabasesCommand";
import type {
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/DescribeFleetAdvisorLsaAnalysisCommand";
import type {
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import type {
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemasCommand";
import type {
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput,
} from "./commands/DescribeInstanceProfilesCommand";
import type {
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput,
} from "./commands/DescribeMetadataModelAssessmentsCommand";
import type {
  DescribeMetadataModelChildrenCommandInput,
  DescribeMetadataModelChildrenCommandOutput,
} from "./commands/DescribeMetadataModelChildrenCommand";
import type {
  DescribeMetadataModelCommandInput,
  DescribeMetadataModelCommandOutput,
} from "./commands/DescribeMetadataModelCommand";
import type {
  DescribeMetadataModelConversionsCommandInput,
  DescribeMetadataModelConversionsCommandOutput,
} from "./commands/DescribeMetadataModelConversionsCommand";
import type {
  DescribeMetadataModelCreationsCommandInput,
  DescribeMetadataModelCreationsCommandOutput,
} from "./commands/DescribeMetadataModelCreationsCommand";
import type {
  DescribeMetadataModelExportsAsScriptCommandInput,
  DescribeMetadataModelExportsAsScriptCommandOutput,
} from "./commands/DescribeMetadataModelExportsAsScriptCommand";
import type {
  DescribeMetadataModelExportsToTargetCommandInput,
  DescribeMetadataModelExportsToTargetCommandOutput,
} from "./commands/DescribeMetadataModelExportsToTargetCommand";
import type {
  DescribeMetadataModelImportsCommandInput,
  DescribeMetadataModelImportsCommandOutput,
} from "./commands/DescribeMetadataModelImportsCommand";
import type {
  DescribeMigrationProjectsCommandInput,
  DescribeMigrationProjectsCommandOutput,
} from "./commands/DescribeMigrationProjectsCommand";
import type {
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import type {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import type {
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput,
} from "./commands/DescribeRecommendationLimitationsCommand";
import type {
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "./commands/DescribeRecommendationsCommand";
import type {
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
} from "./commands/DescribeRefreshSchemasStatusCommand";
import type {
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
} from "./commands/DescribeReplicationConfigsCommand";
import type {
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "./commands/DescribeReplicationInstancesCommand";
import type {
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import type {
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
} from "./commands/DescribeReplicationsCommand";
import type {
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import type {
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
} from "./commands/DescribeReplicationTableStatisticsCommand";
import type {
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import type {
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import type {
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import type {
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "./commands/DescribeReplicationTasksCommand";
import type { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "./commands/DescribeSchemasCommand";
import type {
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "./commands/DescribeTableStatisticsCommand";
import type {
  ExportMetadataModelAssessmentCommandInput,
  ExportMetadataModelAssessmentCommandOutput,
} from "./commands/ExportMetadataModelAssessmentCommand";
import type {
  GetTargetSelectionRulesCommandInput,
  GetTargetSelectionRulesCommandOutput,
} from "./commands/GetTargetSelectionRulesCommand";
import type {
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ModifyConversionConfigurationCommandInput,
  ModifyConversionConfigurationCommandOutput,
} from "./commands/ModifyConversionConfigurationCommand";
import type {
  ModifyDataMigrationCommandInput,
  ModifyDataMigrationCommandOutput,
} from "./commands/ModifyDataMigrationCommand";
import type {
  ModifyDataProviderCommandInput,
  ModifyDataProviderCommandOutput,
} from "./commands/ModifyDataProviderCommand";
import type { ModifyEndpointCommandInput, ModifyEndpointCommandOutput } from "./commands/ModifyEndpointCommand";
import type {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import type {
  ModifyInstanceProfileCommandInput,
  ModifyInstanceProfileCommandOutput,
} from "./commands/ModifyInstanceProfileCommand";
import type {
  ModifyMigrationProjectCommandInput,
  ModifyMigrationProjectCommandOutput,
} from "./commands/ModifyMigrationProjectCommand";
import type {
  ModifyReplicationConfigCommandInput,
  ModifyReplicationConfigCommandOutput,
} from "./commands/ModifyReplicationConfigCommand";
import type {
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
} from "./commands/ModifyReplicationInstanceCommand";
import type {
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
} from "./commands/ModifyReplicationSubnetGroupCommand";
import type {
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
} from "./commands/ModifyReplicationTaskCommand";
import type {
  MoveReplicationTaskCommandInput,
  MoveReplicationTaskCommandOutput,
} from "./commands/MoveReplicationTaskCommand";
import type {
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
} from "./commands/RebootReplicationInstanceCommand";
import type { RefreshSchemasCommandInput, RefreshSchemasCommandOutput } from "./commands/RefreshSchemasCommand";
import type {
  ReloadReplicationTablesCommandInput,
  ReloadReplicationTablesCommandOutput,
} from "./commands/ReloadReplicationTablesCommand";
import type { ReloadTablesCommandInput, ReloadTablesCommandOutput } from "./commands/ReloadTablesCommand";
import type {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import type {
  RunFleetAdvisorLsaAnalysisCommandInput,
  RunFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/RunFleetAdvisorLsaAnalysisCommand";
import type {
  StartDataMigrationCommandInput,
  StartDataMigrationCommandOutput,
} from "./commands/StartDataMigrationCommand";
import type {
  StartExtensionPackAssociationCommandInput,
  StartExtensionPackAssociationCommandOutput,
} from "./commands/StartExtensionPackAssociationCommand";
import type {
  StartMetadataModelAssessmentCommandInput,
  StartMetadataModelAssessmentCommandOutput,
} from "./commands/StartMetadataModelAssessmentCommand";
import type {
  StartMetadataModelConversionCommandInput,
  StartMetadataModelConversionCommandOutput,
} from "./commands/StartMetadataModelConversionCommand";
import type {
  StartMetadataModelCreationCommandInput,
  StartMetadataModelCreationCommandOutput,
} from "./commands/StartMetadataModelCreationCommand";
import type {
  StartMetadataModelExportAsScriptCommandInput,
  StartMetadataModelExportAsScriptCommandOutput,
} from "./commands/StartMetadataModelExportAsScriptCommand";
import type {
  StartMetadataModelExportToTargetCommandInput,
  StartMetadataModelExportToTargetCommandOutput,
} from "./commands/StartMetadataModelExportToTargetCommand";
import type {
  StartMetadataModelImportCommandInput,
  StartMetadataModelImportCommandOutput,
} from "./commands/StartMetadataModelImportCommand";
import type {
  StartRecommendationsCommandInput,
  StartRecommendationsCommandOutput,
} from "./commands/StartRecommendationsCommand";
import type { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import type {
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
} from "./commands/StartReplicationTaskAssessmentCommand";
import type {
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
} from "./commands/StartReplicationTaskAssessmentRunCommand";
import type {
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
} from "./commands/StartReplicationTaskCommand";
import type {
  StopDataMigrationCommandInput,
  StopDataMigrationCommandOutput,
} from "./commands/StopDataMigrationCommand";
import type { StopReplicationCommandInput, StopReplicationCommandOutput } from "./commands/StopReplicationCommand";
import type {
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput,
} from "./commands/StopReplicationTaskCommand";
import type { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import type {
  UpdateSubscriptionsToEventBridgeCommandInput,
  UpdateSubscriptionsToEventBridgeCommandOutput,
} from "./commands/UpdateSubscriptionsToEventBridgeCommand";
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
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | BatchStartRecommendationsCommandInput
  | CancelMetadataModelConversionCommandInput
  | CancelMetadataModelCreationCommandInput
  | CancelReplicationTaskAssessmentRunCommandInput
  | CreateDataMigrationCommandInput
  | CreateDataProviderCommandInput
  | CreateEndpointCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateFleetAdvisorCollectorCommandInput
  | CreateInstanceProfileCommandInput
  | CreateMigrationProjectCommandInput
  | CreateReplicationConfigCommandInput
  | CreateReplicationInstanceCommandInput
  | CreateReplicationSubnetGroupCommandInput
  | CreateReplicationTaskCommandInput
  | DeleteCertificateCommandInput
  | DeleteConnectionCommandInput
  | DeleteDataMigrationCommandInput
  | DeleteDataProviderCommandInput
  | DeleteEndpointCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteFleetAdvisorCollectorCommandInput
  | DeleteFleetAdvisorDatabasesCommandInput
  | DeleteInstanceProfileCommandInput
  | DeleteMigrationProjectCommandInput
  | DeleteReplicationConfigCommandInput
  | DeleteReplicationInstanceCommandInput
  | DeleteReplicationSubnetGroupCommandInput
  | DeleteReplicationTaskAssessmentRunCommandInput
  | DeleteReplicationTaskCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeApplicableIndividualAssessmentsCommandInput
  | DescribeCertificatesCommandInput
  | DescribeConnectionsCommandInput
  | DescribeConversionConfigurationCommandInput
  | DescribeDataMigrationsCommandInput
  | DescribeDataProvidersCommandInput
  | DescribeEndpointSettingsCommandInput
  | DescribeEndpointTypesCommandInput
  | DescribeEndpointsCommandInput
  | DescribeEngineVersionsCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeExtensionPackAssociationsCommandInput
  | DescribeFleetAdvisorCollectorsCommandInput
  | DescribeFleetAdvisorDatabasesCommandInput
  | DescribeFleetAdvisorLsaAnalysisCommandInput
  | DescribeFleetAdvisorSchemaObjectSummaryCommandInput
  | DescribeFleetAdvisorSchemasCommandInput
  | DescribeInstanceProfilesCommandInput
  | DescribeMetadataModelAssessmentsCommandInput
  | DescribeMetadataModelChildrenCommandInput
  | DescribeMetadataModelCommandInput
  | DescribeMetadataModelConversionsCommandInput
  | DescribeMetadataModelCreationsCommandInput
  | DescribeMetadataModelExportsAsScriptCommandInput
  | DescribeMetadataModelExportsToTargetCommandInput
  | DescribeMetadataModelImportsCommandInput
  | DescribeMigrationProjectsCommandInput
  | DescribeOrderableReplicationInstancesCommandInput
  | DescribePendingMaintenanceActionsCommandInput
  | DescribeRecommendationLimitationsCommandInput
  | DescribeRecommendationsCommandInput
  | DescribeRefreshSchemasStatusCommandInput
  | DescribeReplicationConfigsCommandInput
  | DescribeReplicationInstanceTaskLogsCommandInput
  | DescribeReplicationInstancesCommandInput
  | DescribeReplicationSubnetGroupsCommandInput
  | DescribeReplicationTableStatisticsCommandInput
  | DescribeReplicationTaskAssessmentResultsCommandInput
  | DescribeReplicationTaskAssessmentRunsCommandInput
  | DescribeReplicationTaskIndividualAssessmentsCommandInput
  | DescribeReplicationTasksCommandInput
  | DescribeReplicationsCommandInput
  | DescribeSchemasCommandInput
  | DescribeTableStatisticsCommandInput
  | ExportMetadataModelAssessmentCommandInput
  | GetTargetSelectionRulesCommandInput
  | ImportCertificateCommandInput
  | ListTagsForResourceCommandInput
  | ModifyConversionConfigurationCommandInput
  | ModifyDataMigrationCommandInput
  | ModifyDataProviderCommandInput
  | ModifyEndpointCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyInstanceProfileCommandInput
  | ModifyMigrationProjectCommandInput
  | ModifyReplicationConfigCommandInput
  | ModifyReplicationInstanceCommandInput
  | ModifyReplicationSubnetGroupCommandInput
  | ModifyReplicationTaskCommandInput
  | MoveReplicationTaskCommandInput
  | RebootReplicationInstanceCommandInput
  | RefreshSchemasCommandInput
  | ReloadReplicationTablesCommandInput
  | ReloadTablesCommandInput
  | RemoveTagsFromResourceCommandInput
  | RunFleetAdvisorLsaAnalysisCommandInput
  | StartDataMigrationCommandInput
  | StartExtensionPackAssociationCommandInput
  | StartMetadataModelAssessmentCommandInput
  | StartMetadataModelConversionCommandInput
  | StartMetadataModelCreationCommandInput
  | StartMetadataModelExportAsScriptCommandInput
  | StartMetadataModelExportToTargetCommandInput
  | StartMetadataModelImportCommandInput
  | StartRecommendationsCommandInput
  | StartReplicationCommandInput
  | StartReplicationTaskAssessmentCommandInput
  | StartReplicationTaskAssessmentRunCommandInput
  | StartReplicationTaskCommandInput
  | StopDataMigrationCommandInput
  | StopReplicationCommandInput
  | StopReplicationTaskCommandInput
  | TestConnectionCommandInput
  | UpdateSubscriptionsToEventBridgeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | ApplyPendingMaintenanceActionCommandOutput
  | BatchStartRecommendationsCommandOutput
  | CancelMetadataModelConversionCommandOutput
  | CancelMetadataModelCreationCommandOutput
  | CancelReplicationTaskAssessmentRunCommandOutput
  | CreateDataMigrationCommandOutput
  | CreateDataProviderCommandOutput
  | CreateEndpointCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateFleetAdvisorCollectorCommandOutput
  | CreateInstanceProfileCommandOutput
  | CreateMigrationProjectCommandOutput
  | CreateReplicationConfigCommandOutput
  | CreateReplicationInstanceCommandOutput
  | CreateReplicationSubnetGroupCommandOutput
  | CreateReplicationTaskCommandOutput
  | DeleteCertificateCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteDataMigrationCommandOutput
  | DeleteDataProviderCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteFleetAdvisorCollectorCommandOutput
  | DeleteFleetAdvisorDatabasesCommandOutput
  | DeleteInstanceProfileCommandOutput
  | DeleteMigrationProjectCommandOutput
  | DeleteReplicationConfigCommandOutput
  | DeleteReplicationInstanceCommandOutput
  | DeleteReplicationSubnetGroupCommandOutput
  | DeleteReplicationTaskAssessmentRunCommandOutput
  | DeleteReplicationTaskCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeApplicableIndividualAssessmentsCommandOutput
  | DescribeCertificatesCommandOutput
  | DescribeConnectionsCommandOutput
  | DescribeConversionConfigurationCommandOutput
  | DescribeDataMigrationsCommandOutput
  | DescribeDataProvidersCommandOutput
  | DescribeEndpointSettingsCommandOutput
  | DescribeEndpointTypesCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeEngineVersionsCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeExtensionPackAssociationsCommandOutput
  | DescribeFleetAdvisorCollectorsCommandOutput
  | DescribeFleetAdvisorDatabasesCommandOutput
  | DescribeFleetAdvisorLsaAnalysisCommandOutput
  | DescribeFleetAdvisorSchemaObjectSummaryCommandOutput
  | DescribeFleetAdvisorSchemasCommandOutput
  | DescribeInstanceProfilesCommandOutput
  | DescribeMetadataModelAssessmentsCommandOutput
  | DescribeMetadataModelChildrenCommandOutput
  | DescribeMetadataModelCommandOutput
  | DescribeMetadataModelConversionsCommandOutput
  | DescribeMetadataModelCreationsCommandOutput
  | DescribeMetadataModelExportsAsScriptCommandOutput
  | DescribeMetadataModelExportsToTargetCommandOutput
  | DescribeMetadataModelImportsCommandOutput
  | DescribeMigrationProjectsCommandOutput
  | DescribeOrderableReplicationInstancesCommandOutput
  | DescribePendingMaintenanceActionsCommandOutput
  | DescribeRecommendationLimitationsCommandOutput
  | DescribeRecommendationsCommandOutput
  | DescribeRefreshSchemasStatusCommandOutput
  | DescribeReplicationConfigsCommandOutput
  | DescribeReplicationInstanceTaskLogsCommandOutput
  | DescribeReplicationInstancesCommandOutput
  | DescribeReplicationSubnetGroupsCommandOutput
  | DescribeReplicationTableStatisticsCommandOutput
  | DescribeReplicationTaskAssessmentResultsCommandOutput
  | DescribeReplicationTaskAssessmentRunsCommandOutput
  | DescribeReplicationTaskIndividualAssessmentsCommandOutput
  | DescribeReplicationTasksCommandOutput
  | DescribeReplicationsCommandOutput
  | DescribeSchemasCommandOutput
  | DescribeTableStatisticsCommandOutput
  | ExportMetadataModelAssessmentCommandOutput
  | GetTargetSelectionRulesCommandOutput
  | ImportCertificateCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyConversionConfigurationCommandOutput
  | ModifyDataMigrationCommandOutput
  | ModifyDataProviderCommandOutput
  | ModifyEndpointCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyInstanceProfileCommandOutput
  | ModifyMigrationProjectCommandOutput
  | ModifyReplicationConfigCommandOutput
  | ModifyReplicationInstanceCommandOutput
  | ModifyReplicationSubnetGroupCommandOutput
  | ModifyReplicationTaskCommandOutput
  | MoveReplicationTaskCommandOutput
  | RebootReplicationInstanceCommandOutput
  | RefreshSchemasCommandOutput
  | ReloadReplicationTablesCommandOutput
  | ReloadTablesCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | RunFleetAdvisorLsaAnalysisCommandOutput
  | StartDataMigrationCommandOutput
  | StartExtensionPackAssociationCommandOutput
  | StartMetadataModelAssessmentCommandOutput
  | StartMetadataModelConversionCommandOutput
  | StartMetadataModelCreationCommandOutput
  | StartMetadataModelExportAsScriptCommandOutput
  | StartMetadataModelExportToTargetCommandOutput
  | StartMetadataModelImportCommandOutput
  | StartRecommendationsCommandOutput
  | StartReplicationCommandOutput
  | StartReplicationTaskAssessmentCommandOutput
  | StartReplicationTaskAssessmentRunCommandOutput
  | StartReplicationTaskCommandOutput
  | StopDataMigrationCommandOutput
  | StopReplicationCommandOutput
  | StopReplicationTaskCommandOutput
  | TestConnectionCommandOutput
  | UpdateSubscriptionsToEventBridgeCommandOutput;

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
export type DatabaseMigrationServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DatabaseMigrationServiceClient class constructor that set the region, credentials and other options.
 */
export interface DatabaseMigrationServiceClientConfig extends DatabaseMigrationServiceClientConfigType {}

/**
 * @public
 */
export type DatabaseMigrationServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DatabaseMigrationServiceClient class. This is resolved and normalized from the {@link DatabaseMigrationServiceClientConfig | constructor configuration interface}.
 */
export interface DatabaseMigrationServiceClientResolvedConfig extends DatabaseMigrationServiceClientResolvedConfigType {}

/**
 * <fullname>Database Migration Service</fullname>
 *          <p>Database Migration Service (DMS) can migrate your data to and from the most
 *          widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
 *          Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
 *          (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
 *          heterogeneous migrations between different database platforms, such as Oracle to MySQL or
 *          SQL Server to PostgreSQL.</p>
 *          <p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a>
 *          in the <i>Database Migration Service User Guide.</i>
 *          </p>
 * @public
 */
export class DatabaseMigrationServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DatabaseMigrationServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of DatabaseMigrationServiceClient class. This is resolved and normalized from the {@link DatabaseMigrationServiceClientConfig | constructor configuration interface}.
   */
  readonly config: DatabaseMigrationServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DatabaseMigrationServiceClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultDatabaseMigrationServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DatabaseMigrationServiceClientResolvedConfig) =>
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
