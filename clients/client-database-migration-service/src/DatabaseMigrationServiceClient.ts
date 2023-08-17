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
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  BatchStartRecommendationsCommandInput,
  BatchStartRecommendationsCommandOutput,
} from "./commands/BatchStartRecommendationsCommand";
import {
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
} from "./commands/CancelReplicationTaskAssessmentRunCommand";
import { CreateDataProviderCommandInput, CreateDataProviderCommandOutput } from "./commands/CreateDataProviderCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
} from "./commands/CreateFleetAdvisorCollectorCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateMigrationProjectCommandInput,
  CreateMigrationProjectCommandOutput,
} from "./commands/CreateMigrationProjectCommand";
import {
  CreateReplicationConfigCommandInput,
  CreateReplicationConfigCommandOutput,
} from "./commands/CreateReplicationConfigCommand";
import {
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
} from "./commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
} from "./commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
} from "./commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteDataProviderCommandInput, DeleteDataProviderCommandOutput } from "./commands/DeleteDataProviderCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
} from "./commands/DeleteFleetAdvisorCollectorCommand";
import {
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
} from "./commands/DeleteFleetAdvisorDatabasesCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteMigrationProjectCommandInput,
  DeleteMigrationProjectCommandOutput,
} from "./commands/DeleteMigrationProjectCommand";
import {
  DeleteReplicationConfigCommandInput,
  DeleteReplicationConfigCommandOutput,
} from "./commands/DeleteReplicationConfigCommand";
import {
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
} from "./commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput,
} from "./commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
} from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import {
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput,
} from "./commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeConversionConfigurationCommandInput,
  DescribeConversionConfigurationCommandOutput,
} from "./commands/DescribeConversionConfigurationCommand";
import {
  DescribeDataProvidersCommandInput,
  DescribeDataProvidersCommandOutput,
} from "./commands/DescribeDataProvidersCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import {
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "./commands/DescribeEndpointSettingsCommand";
import {
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "./commands/DescribeEndpointTypesCommand";
import {
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput,
} from "./commands/DescribeExtensionPackAssociationsCommand";
import {
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "./commands/DescribeFleetAdvisorCollectorsCommand";
import {
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "./commands/DescribeFleetAdvisorDatabasesCommand";
import {
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/DescribeFleetAdvisorLsaAnalysisCommand";
import {
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import {
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemasCommand";
import {
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput,
} from "./commands/DescribeInstanceProfilesCommand";
import {
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput,
} from "./commands/DescribeMetadataModelAssessmentsCommand";
import {
  DescribeMetadataModelConversionsCommandInput,
  DescribeMetadataModelConversionsCommandOutput,
} from "./commands/DescribeMetadataModelConversionsCommand";
import {
  DescribeMetadataModelExportsAsScriptCommandInput,
  DescribeMetadataModelExportsAsScriptCommandOutput,
} from "./commands/DescribeMetadataModelExportsAsScriptCommand";
import {
  DescribeMetadataModelExportsToTargetCommandInput,
  DescribeMetadataModelExportsToTargetCommandOutput,
} from "./commands/DescribeMetadataModelExportsToTargetCommand";
import {
  DescribeMetadataModelImportsCommandInput,
  DescribeMetadataModelImportsCommandOutput,
} from "./commands/DescribeMetadataModelImportsCommand";
import {
  DescribeMigrationProjectsCommandInput,
  DescribeMigrationProjectsCommandOutput,
} from "./commands/DescribeMigrationProjectsCommand";
import {
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput,
} from "./commands/DescribeRecommendationLimitationsCommand";
import {
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "./commands/DescribeRecommendationsCommand";
import {
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
} from "./commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
} from "./commands/DescribeReplicationConfigsCommand";
import {
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "./commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
} from "./commands/DescribeReplicationsCommand";
import {
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
} from "./commands/DescribeReplicationTableStatisticsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import {
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import {
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "./commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "./commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "./commands/DescribeTableStatisticsCommand";
import {
  ExportMetadataModelAssessmentCommandInput,
  ExportMetadataModelAssessmentCommandOutput,
} from "./commands/ExportMetadataModelAssessmentCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyConversionConfigurationCommandInput,
  ModifyConversionConfigurationCommandOutput,
} from "./commands/ModifyConversionConfigurationCommand";
import { ModifyDataProviderCommandInput, ModifyDataProviderCommandOutput } from "./commands/ModifyDataProviderCommand";
import { ModifyEndpointCommandInput, ModifyEndpointCommandOutput } from "./commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyInstanceProfileCommandInput,
  ModifyInstanceProfileCommandOutput,
} from "./commands/ModifyInstanceProfileCommand";
import {
  ModifyMigrationProjectCommandInput,
  ModifyMigrationProjectCommandOutput,
} from "./commands/ModifyMigrationProjectCommand";
import {
  ModifyReplicationConfigCommandInput,
  ModifyReplicationConfigCommandOutput,
} from "./commands/ModifyReplicationConfigCommand";
import {
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
} from "./commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
} from "./commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
} from "./commands/ModifyReplicationTaskCommand";
import {
  MoveReplicationTaskCommandInput,
  MoveReplicationTaskCommandOutput,
} from "./commands/MoveReplicationTaskCommand";
import {
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
} from "./commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommandInput, RefreshSchemasCommandOutput } from "./commands/RefreshSchemasCommand";
import {
  ReloadReplicationTablesCommandInput,
  ReloadReplicationTablesCommandOutput,
} from "./commands/ReloadReplicationTablesCommand";
import { ReloadTablesCommandInput, ReloadTablesCommandOutput } from "./commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  RunFleetAdvisorLsaAnalysisCommandInput,
  RunFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/RunFleetAdvisorLsaAnalysisCommand";
import {
  StartExtensionPackAssociationCommandInput,
  StartExtensionPackAssociationCommandOutput,
} from "./commands/StartExtensionPackAssociationCommand";
import {
  StartMetadataModelAssessmentCommandInput,
  StartMetadataModelAssessmentCommandOutput,
} from "./commands/StartMetadataModelAssessmentCommand";
import {
  StartMetadataModelConversionCommandInput,
  StartMetadataModelConversionCommandOutput,
} from "./commands/StartMetadataModelConversionCommand";
import {
  StartMetadataModelExportAsScriptCommandInput,
  StartMetadataModelExportAsScriptCommandOutput,
} from "./commands/StartMetadataModelExportAsScriptCommand";
import {
  StartMetadataModelExportToTargetCommandInput,
  StartMetadataModelExportToTargetCommandOutput,
} from "./commands/StartMetadataModelExportToTargetCommand";
import {
  StartMetadataModelImportCommandInput,
  StartMetadataModelImportCommandOutput,
} from "./commands/StartMetadataModelImportCommand";
import {
  StartRecommendationsCommandInput,
  StartRecommendationsCommandOutput,
} from "./commands/StartRecommendationsCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import {
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
} from "./commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
} from "./commands/StartReplicationTaskAssessmentRunCommand";
import {
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
} from "./commands/StartReplicationTaskCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "./commands/StopReplicationCommand";
import {
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput,
} from "./commands/StopReplicationTaskCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import {
  UpdateSubscriptionsToEventBridgeCommandInput,
  UpdateSubscriptionsToEventBridgeCommandOutput,
} from "./commands/UpdateSubscriptionsToEventBridgeCommand";
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
  | AddTagsToResourceCommandInput
  | ApplyPendingMaintenanceActionCommandInput
  | BatchStartRecommendationsCommandInput
  | CancelReplicationTaskAssessmentRunCommandInput
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
  | DescribeMetadataModelConversionsCommandInput
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
  | ImportCertificateCommandInput
  | ListTagsForResourceCommandInput
  | ModifyConversionConfigurationCommandInput
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
  | StartExtensionPackAssociationCommandInput
  | StartMetadataModelAssessmentCommandInput
  | StartMetadataModelConversionCommandInput
  | StartMetadataModelExportAsScriptCommandInput
  | StartMetadataModelExportToTargetCommandInput
  | StartMetadataModelImportCommandInput
  | StartRecommendationsCommandInput
  | StartReplicationCommandInput
  | StartReplicationTaskAssessmentCommandInput
  | StartReplicationTaskAssessmentRunCommandInput
  | StartReplicationTaskCommandInput
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
  | CancelReplicationTaskAssessmentRunCommandOutput
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
  | DescribeMetadataModelConversionsCommandOutput
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
  | ImportCertificateCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyConversionConfigurationCommandOutput
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
  | StartExtensionPackAssociationCommandOutput
  | StartMetadataModelAssessmentCommandOutput
  | StartMetadataModelConversionCommandOutput
  | StartMetadataModelExportAsScriptCommandOutput
  | StartMetadataModelExportToTargetCommandOutput
  | StartMetadataModelImportCommandOutput
  | StartRecommendationsCommandOutput
  | StartReplicationCommandOutput
  | StartReplicationTaskAssessmentCommandOutput
  | StartReplicationTaskAssessmentRunCommandOutput
  | StartReplicationTaskCommandOutput
  | StopReplicationCommandOutput
  | StopReplicationTaskCommandOutput
  | TestConnectionCommandOutput
  | UpdateSubscriptionsToEventBridgeCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
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
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
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
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DatabaseMigrationServiceClient class. This is resolved and normalized from the {@link DatabaseMigrationServiceClientConfig | constructor configuration interface}.
 */
export interface DatabaseMigrationServiceClientResolvedConfig
  extends DatabaseMigrationServiceClientResolvedConfigType {}

/**
 * @public
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
