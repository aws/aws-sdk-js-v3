// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  BatchStartRecommendationsCommand,
  BatchStartRecommendationsCommandInput,
  BatchStartRecommendationsCommandOutput,
} from "./commands/BatchStartRecommendationsCommand";
import {
  CancelReplicationTaskAssessmentRunCommand,
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
} from "./commands/CancelReplicationTaskAssessmentRunCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateFleetAdvisorCollectorCommand,
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
} from "./commands/CreateFleetAdvisorCollectorCommand";
import {
  CreateReplicationConfigCommand,
  CreateReplicationConfigCommandInput,
  CreateReplicationConfigCommandOutput,
} from "./commands/CreateReplicationConfigCommand";
import {
  CreateReplicationInstanceCommand,
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
} from "./commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommand,
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
} from "./commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommand,
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
} from "./commands/CreateReplicationTaskCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteFleetAdvisorCollectorCommand,
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
} from "./commands/DeleteFleetAdvisorCollectorCommand";
import {
  DeleteFleetAdvisorDatabasesCommand,
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
} from "./commands/DeleteFleetAdvisorDatabasesCommand";
import {
  DeleteReplicationConfigCommand,
  DeleteReplicationConfigCommandInput,
  DeleteReplicationConfigCommandOutput,
} from "./commands/DeleteReplicationConfigCommand";
import {
  DeleteReplicationInstanceCommand,
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
} from "./commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput,
} from "./commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskAssessmentRunCommand,
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
} from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import {
  DeleteReplicationTaskCommand,
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput,
} from "./commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeEndpointSettingsCommand,
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "./commands/DescribeEndpointSettingsCommand";
import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "./commands/DescribeEndpointTypesCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "./commands/DescribeFleetAdvisorCollectorsCommand";
import {
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "./commands/DescribeFleetAdvisorDatabasesCommand";
import {
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/DescribeFleetAdvisorLsaAnalysisCommand";
import {
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import {
  DescribeFleetAdvisorSchemasCommand,
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "./commands/DescribeFleetAdvisorSchemasCommand";
import {
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRecommendationLimitationsCommand,
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput,
} from "./commands/DescribeRecommendationLimitationsCommand";
import {
  DescribeRecommendationsCommand,
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "./commands/DescribeRecommendationsCommand";
import {
  DescribeRefreshSchemasStatusCommand,
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
} from "./commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationConfigsCommand,
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
} from "./commands/DescribeReplicationConfigsCommand";
import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "./commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationsCommand,
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
} from "./commands/DescribeReplicationsCommand";
import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTableStatisticsCommand,
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
} from "./commands/DescribeReplicationTableStatisticsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import {
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "./commands/DescribeReplicationTasksCommand";
import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput,
} from "./commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "./commands/DescribeTableStatisticsCommand";
import {
  ImportCertificateCommand,
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyEndpointCommand,
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput,
} from "./commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyReplicationConfigCommand,
  ModifyReplicationConfigCommandInput,
  ModifyReplicationConfigCommandOutput,
} from "./commands/ModifyReplicationConfigCommand";
import {
  ModifyReplicationInstanceCommand,
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
} from "./commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
} from "./commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommand,
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
} from "./commands/ModifyReplicationTaskCommand";
import {
  MoveReplicationTaskCommand,
  MoveReplicationTaskCommandInput,
  MoveReplicationTaskCommandOutput,
} from "./commands/MoveReplicationTaskCommand";
import {
  RebootReplicationInstanceCommand,
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
} from "./commands/RebootReplicationInstanceCommand";
import {
  RefreshSchemasCommand,
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
} from "./commands/RefreshSchemasCommand";
import {
  ReloadReplicationTablesCommand,
  ReloadReplicationTablesCommandInput,
  ReloadReplicationTablesCommandOutput,
} from "./commands/ReloadReplicationTablesCommand";
import {
  ReloadTablesCommand,
  ReloadTablesCommandInput,
  ReloadTablesCommandOutput,
} from "./commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  RunFleetAdvisorLsaAnalysisCommand,
  RunFleetAdvisorLsaAnalysisCommandInput,
  RunFleetAdvisorLsaAnalysisCommandOutput,
} from "./commands/RunFleetAdvisorLsaAnalysisCommand";
import {
  StartRecommendationsCommand,
  StartRecommendationsCommandInput,
  StartRecommendationsCommandOutput,
} from "./commands/StartRecommendationsCommand";
import {
  StartReplicationCommand,
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
} from "./commands/StartReplicationCommand";
import {
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
} from "./commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskAssessmentRunCommand,
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
} from "./commands/StartReplicationTaskAssessmentRunCommand";
import {
  StartReplicationTaskCommand,
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
} from "./commands/StartReplicationTaskCommand";
import {
  StopReplicationCommand,
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
} from "./commands/StopReplicationCommand";
import {
  StopReplicationTaskCommand,
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput,
} from "./commands/StopReplicationTaskCommand";
import {
  TestConnectionCommand,
  TestConnectionCommandInput,
  TestConnectionCommandOutput,
} from "./commands/TestConnectionCommand";
import {
  UpdateSubscriptionsToEventBridgeCommand,
  UpdateSubscriptionsToEventBridgeCommandInput,
  UpdateSubscriptionsToEventBridgeCommandOutput,
} from "./commands/UpdateSubscriptionsToEventBridgeCommand";
import { DatabaseMigrationServiceClient, DatabaseMigrationServiceClientConfig } from "./DatabaseMigrationServiceClient";

const commands = {
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  BatchStartRecommendationsCommand,
  CancelReplicationTaskAssessmentRunCommand,
  CreateEndpointCommand,
  CreateEventSubscriptionCommand,
  CreateFleetAdvisorCollectorCommand,
  CreateReplicationConfigCommand,
  CreateReplicationInstanceCommand,
  CreateReplicationSubnetGroupCommand,
  CreateReplicationTaskCommand,
  DeleteCertificateCommand,
  DeleteConnectionCommand,
  DeleteEndpointCommand,
  DeleteEventSubscriptionCommand,
  DeleteFleetAdvisorCollectorCommand,
  DeleteFleetAdvisorDatabasesCommand,
  DeleteReplicationConfigCommand,
  DeleteReplicationInstanceCommand,
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationTaskCommand,
  DeleteReplicationTaskAssessmentRunCommand,
  DescribeAccountAttributesCommand,
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeCertificatesCommand,
  DescribeConnectionsCommand,
  DescribeEndpointsCommand,
  DescribeEndpointSettingsCommand,
  DescribeEndpointTypesCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemasCommand,
  DescribeOrderableReplicationInstancesCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeRecommendationLimitationsCommand,
  DescribeRecommendationsCommand,
  DescribeRefreshSchemasStatusCommand,
  DescribeReplicationConfigsCommand,
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationsCommand,
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationTableStatisticsCommand,
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTasksCommand,
  DescribeSchemasCommand,
  DescribeTableStatisticsCommand,
  ImportCertificateCommand,
  ListTagsForResourceCommand,
  ModifyEndpointCommand,
  ModifyEventSubscriptionCommand,
  ModifyReplicationConfigCommand,
  ModifyReplicationInstanceCommand,
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationTaskCommand,
  MoveReplicationTaskCommand,
  RebootReplicationInstanceCommand,
  RefreshSchemasCommand,
  ReloadReplicationTablesCommand,
  ReloadTablesCommand,
  RemoveTagsFromResourceCommand,
  RunFleetAdvisorLsaAnalysisCommand,
  StartRecommendationsCommand,
  StartReplicationCommand,
  StartReplicationTaskCommand,
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentRunCommand,
  StopReplicationCommand,
  StopReplicationTaskCommand,
  TestConnectionCommand,
  UpdateSubscriptionsToEventBridgeCommand,
};

export interface DatabaseMigrationService {
  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStartRecommendationsCommand}
   */
  batchStartRecommendations(
    args: BatchStartRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStartRecommendationsCommandOutput>;
  batchStartRecommendations(
    args: BatchStartRecommendationsCommandInput,
    cb: (err: any, data?: BatchStartRecommendationsCommandOutput) => void
  ): void;
  batchStartRecommendations(
    args: BatchStartRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStartRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelReplicationTaskAssessmentRunCommand}
   */
  cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReplicationTaskAssessmentRunCommandOutput>;
  cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  cancelReplicationTaskAssessmentRun(
    args: CancelReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetAdvisorCollectorCommand}
   */
  createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetAdvisorCollectorCommandOutput>;
  createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    cb: (err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void
  ): void;
  createFleetAdvisorCollector(
    args: CreateFleetAdvisorCollectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetAdvisorCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationConfigCommand}
   */
  createReplicationConfig(
    args: CreateReplicationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationConfigCommandOutput>;
  createReplicationConfig(
    args: CreateReplicationConfigCommandInput,
    cb: (err: any, data?: CreateReplicationConfigCommandOutput) => void
  ): void;
  createReplicationConfig(
    args: CreateReplicationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationInstanceCommand}
   */
  createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationInstanceCommandOutput>;
  createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;
  createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationSubnetGroupCommand}
   */
  createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationSubnetGroupCommandOutput>;
  createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;
  createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationTaskCommand}
   */
  createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationTaskCommandOutput>;
  createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;
  createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetAdvisorCollectorCommand}
   */
  deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetAdvisorCollectorCommandOutput>;
  deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    cb: (err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void
  ): void;
  deleteFleetAdvisorCollector(
    args: DeleteFleetAdvisorCollectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetAdvisorCollectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetAdvisorDatabasesCommand}
   */
  deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetAdvisorDatabasesCommandOutput>;
  deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    cb: (err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  deleteFleetAdvisorDatabases(
    args: DeleteFleetAdvisorDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetAdvisorDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationConfigCommand}
   */
  deleteReplicationConfig(
    args: DeleteReplicationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationConfigCommandOutput>;
  deleteReplicationConfig(
    args: DeleteReplicationConfigCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigCommandOutput) => void
  ): void;
  deleteReplicationConfig(
    args: DeleteReplicationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationInstanceCommand}
   */
  deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationInstanceCommandOutput>;
  deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;
  deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationSubnetGroupCommand}
   */
  deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationSubnetGroupCommandOutput>;
  deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;
  deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationTaskCommand}
   */
  deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationTaskCommandOutput>;
  deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;
  deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationTaskAssessmentRunCommand}
   */
  deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationTaskAssessmentRunCommandOutput>;
  deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  deleteReplicationTaskAssessmentRun(
    args: DeleteReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicableIndividualAssessmentsCommand}
   */
  describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicableIndividualAssessmentsCommandOutput>;
  describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void
  ): void;
  describeApplicableIndividualAssessments(
    args: DescribeApplicableIndividualAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionsCommand}
   */
  describeConnections(
    args: DescribeConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsCommandOutput>;
  describeConnections(
    args: DescribeConnectionsCommandInput,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  describeConnections(
    args: DescribeConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointSettingsCommand}
   */
  describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointSettingsCommandOutput>;
  describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void
  ): void;
  describeEndpointSettings(
    args: DescribeEndpointSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointTypesCommand}
   */
  describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointTypesCommandOutput>;
  describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;
  describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAdvisorCollectorsCommand}
   */
  describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorCollectorsCommandOutput>;
  describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void
  ): void;
  describeFleetAdvisorCollectors(
    args: DescribeFleetAdvisorCollectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorCollectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAdvisorDatabasesCommand}
   */
  describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorDatabasesCommandOutput>;
  describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void
  ): void;
  describeFleetAdvisorDatabases(
    args: DescribeFleetAdvisorDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAdvisorLsaAnalysisCommand}
   */
  describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput>;
  describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  describeFleetAdvisorLsaAnalysis(
    args: DescribeFleetAdvisorLsaAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAdvisorSchemaObjectSummaryCommand}
   */
  describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput>;
  describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void
  ): void;
  describeFleetAdvisorSchemaObjectSummary(
    args: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetAdvisorSchemasCommand}
   */
  describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAdvisorSchemasCommandOutput>;
  describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    cb: (err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void
  ): void;
  describeFleetAdvisorSchemas(
    args: DescribeFleetAdvisorSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAdvisorSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableReplicationInstancesCommand}
   */
  describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput>;
  describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void
  ): void;
  describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationLimitationsCommand}
   */
  describeRecommendationLimitations(
    args: DescribeRecommendationLimitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationLimitationsCommandOutput>;
  describeRecommendationLimitations(
    args: DescribeRecommendationLimitationsCommandInput,
    cb: (err: any, data?: DescribeRecommendationLimitationsCommandOutput) => void
  ): void;
  describeRecommendationLimitations(
    args: DescribeRecommendationLimitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationLimitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationsCommand}
   */
  describeRecommendations(
    args: DescribeRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationsCommandOutput>;
  describeRecommendations(
    args: DescribeRecommendationsCommandInput,
    cb: (err: any, data?: DescribeRecommendationsCommandOutput) => void
  ): void;
  describeRecommendations(
    args: DescribeRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRefreshSchemasStatusCommand}
   */
  describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRefreshSchemasStatusCommandOutput>;
  describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;
  describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationConfigsCommand}
   */
  describeReplicationConfigs(
    args: DescribeReplicationConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationConfigsCommandOutput>;
  describeReplicationConfigs(
    args: DescribeReplicationConfigsCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigsCommandOutput) => void
  ): void;
  describeReplicationConfigs(
    args: DescribeReplicationConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationInstancesCommand}
   */
  describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstancesCommandOutput>;
  describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;
  describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationInstanceTaskLogsCommand}
   */
  describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput>;
  describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void
  ): void;
  describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationsCommand}
   */
  describeReplications(
    args: DescribeReplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationsCommandOutput>;
  describeReplications(
    args: DescribeReplicationsCommandInput,
    cb: (err: any, data?: DescribeReplicationsCommandOutput) => void
  ): void;
  describeReplications(
    args: DescribeReplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationSubnetGroupsCommand}
   */
  describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput>;
  describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;
  describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationTableStatisticsCommand}
   */
  describeReplicationTableStatistics(
    args: DescribeReplicationTableStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTableStatisticsCommandOutput>;
  describeReplicationTableStatistics(
    args: DescribeReplicationTableStatisticsCommandInput,
    cb: (err: any, data?: DescribeReplicationTableStatisticsCommandOutput) => void
  ): void;
  describeReplicationTableStatistics(
    args: DescribeReplicationTableStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTableStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationTaskAssessmentResultsCommand}
   */
  describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput>;
  describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void
  ): void;
  describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationTaskAssessmentRunsCommand}
   */
  describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput>;
  describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void
  ): void;
  describeReplicationTaskAssessmentRuns(
    args: DescribeReplicationTaskAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationTaskIndividualAssessmentsCommand}
   */
  describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput>;
  describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void
  ): void;
  describeReplicationTaskIndividualAssessments(
    args: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationTasksCommand}
   */
  describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTasksCommandOutput>;
  describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;
  describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSchemasCommand}
   */
  describeSchemas(
    args: DescribeSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemasCommandOutput>;
  describeSchemas(args: DescribeSchemasCommandInput, cb: (err: any, data?: DescribeSchemasCommandOutput) => void): void;
  describeSchemas(
    args: DescribeSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableStatisticsCommand}
   */
  describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableStatisticsCommandOutput>;
  describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;
  describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCertificateCommand}
   */
  importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEndpointCommand}
   */
  modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointCommandOutput>;
  modifyEndpoint(args: ModifyEndpointCommandInput, cb: (err: any, data?: ModifyEndpointCommandOutput) => void): void;
  modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationConfigCommand}
   */
  modifyReplicationConfig(
    args: ModifyReplicationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationConfigCommandOutput>;
  modifyReplicationConfig(
    args: ModifyReplicationConfigCommandInput,
    cb: (err: any, data?: ModifyReplicationConfigCommandOutput) => void
  ): void;
  modifyReplicationConfig(
    args: ModifyReplicationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationInstanceCommand}
   */
  modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationInstanceCommandOutput>;
  modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;
  modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationSubnetGroupCommand}
   */
  modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationSubnetGroupCommandOutput>;
  modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;
  modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationTaskCommand}
   */
  modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationTaskCommandOutput>;
  modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;
  modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link MoveReplicationTaskCommand}
   */
  moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveReplicationTaskCommandOutput>;
  moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void
  ): void;
  moveReplicationTask(
    args: MoveReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootReplicationInstanceCommand}
   */
  rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootReplicationInstanceCommandOutput>;
  rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;
  rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RefreshSchemasCommand}
   */
  refreshSchemas(
    args: RefreshSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshSchemasCommandOutput>;
  refreshSchemas(args: RefreshSchemasCommandInput, cb: (err: any, data?: RefreshSchemasCommandOutput) => void): void;
  refreshSchemas(
    args: RefreshSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ReloadReplicationTablesCommand}
   */
  reloadReplicationTables(
    args: ReloadReplicationTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReloadReplicationTablesCommandOutput>;
  reloadReplicationTables(
    args: ReloadReplicationTablesCommandInput,
    cb: (err: any, data?: ReloadReplicationTablesCommandOutput) => void
  ): void;
  reloadReplicationTables(
    args: ReloadReplicationTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReloadReplicationTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ReloadTablesCommand}
   */
  reloadTables(args: ReloadTablesCommandInput, options?: __HttpHandlerOptions): Promise<ReloadTablesCommandOutput>;
  reloadTables(args: ReloadTablesCommandInput, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
  reloadTables(
    args: ReloadTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReloadTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RunFleetAdvisorLsaAnalysisCommand}
   */
  runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunFleetAdvisorLsaAnalysisCommandOutput>;
  runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    cb: (err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;
  runFleetAdvisorLsaAnalysis(
    args: RunFleetAdvisorLsaAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunFleetAdvisorLsaAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecommendationsCommand}
   */
  startRecommendations(
    args: StartRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommendationsCommandOutput>;
  startRecommendations(
    args: StartRecommendationsCommandInput,
    cb: (err: any, data?: StartRecommendationsCommandOutput) => void
  ): void;
  startRecommendations(
    args: StartRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationCommand}
   */
  startReplication(
    args: StartReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationCommandOutput>;
  startReplication(
    args: StartReplicationCommandInput,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  startReplication(
    args: StartReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationTaskCommand}
   */
  startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskCommandOutput>;
  startReplicationTask(
    args: StartReplicationTaskCommandInput,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;
  startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationTaskAssessmentCommand}
   */
  startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskAssessmentCommandOutput>;
  startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;
  startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationTaskAssessmentRunCommand}
   */
  startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskAssessmentRunCommandOutput>;
  startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void
  ): void;
  startReplicationTaskAssessmentRun(
    args: StartReplicationTaskAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationCommand}
   */
  stopReplication(
    args: StopReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationCommandOutput>;
  stopReplication(args: StopReplicationCommandInput, cb: (err: any, data?: StopReplicationCommandOutput) => void): void;
  stopReplication(
    args: StopReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationTaskCommand}
   */
  stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationTaskCommandOutput>;
  stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;
  stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConnectionCommand}
   */
  testConnection(
    args: TestConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionCommandOutput>;
  testConnection(args: TestConnectionCommandInput, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
  testConnection(
    args: TestConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionsToEventBridgeCommand}
   */
  updateSubscriptionsToEventBridge(
    args: UpdateSubscriptionsToEventBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionsToEventBridgeCommandOutput>;
  updateSubscriptionsToEventBridge(
    args: UpdateSubscriptionsToEventBridgeCommandInput,
    cb: (err: any, data?: UpdateSubscriptionsToEventBridgeCommandOutput) => void
  ): void;
  updateSubscriptionsToEventBridge(
    args: UpdateSubscriptionsToEventBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionsToEventBridgeCommandOutput) => void
  ): void;
}

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
export class DatabaseMigrationService extends DatabaseMigrationServiceClient implements DatabaseMigrationService {}
createAggregatedClient(commands, DatabaseMigrationService);
