// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "../commands/ApplyPendingMaintenanceActionCommand";
import {
  BatchStartRecommendationsCommandInput,
  BatchStartRecommendationsCommandOutput,
} from "../commands/BatchStartRecommendationsCommand";
import {
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
} from "../commands/CancelReplicationTaskAssessmentRunCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "../commands/CreateEventSubscriptionCommand";
import {
  CreateFleetAdvisorCollectorCommandInput,
  CreateFleetAdvisorCollectorCommandOutput,
} from "../commands/CreateFleetAdvisorCollectorCommand";
import {
  CreateReplicationConfigCommandInput,
  CreateReplicationConfigCommandOutput,
} from "../commands/CreateReplicationConfigCommand";
import {
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
} from "../commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
} from "../commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
} from "../commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "../commands/DeleteEventSubscriptionCommand";
import {
  DeleteFleetAdvisorCollectorCommandInput,
  DeleteFleetAdvisorCollectorCommandOutput,
} from "../commands/DeleteFleetAdvisorCollectorCommand";
import {
  DeleteFleetAdvisorDatabasesCommandInput,
  DeleteFleetAdvisorDatabasesCommandOutput,
} from "../commands/DeleteFleetAdvisorDatabasesCommand";
import {
  DeleteReplicationConfigCommandInput,
  DeleteReplicationConfigCommandOutput,
} from "../commands/DeleteReplicationConfigCommand";
import {
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
} from "../commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput,
} from "../commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskAssessmentRunCommandInput,
  DeleteReplicationTaskAssessmentRunCommandOutput,
} from "../commands/DeleteReplicationTaskAssessmentRunCommand";
import {
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput,
} from "../commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "../commands/DescribeApplicableIndividualAssessmentsCommand";
import {
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import {
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "../commands/DescribeEndpointSettingsCommand";
import {
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "../commands/DescribeEndpointTypesCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "../commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import {
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "../commands/DescribeFleetAdvisorCollectorsCommand";
import {
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "../commands/DescribeFleetAdvisorDatabasesCommand";
import {
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "../commands/DescribeFleetAdvisorLsaAnalysisCommand";
import {
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import {
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemasCommand";
import {
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "../commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput,
} from "../commands/DescribeRecommendationLimitationsCommand";
import {
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "../commands/DescribeRecommendationsCommand";
import {
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
} from "../commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
} from "../commands/DescribeReplicationConfigsCommand";
import {
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "../commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "../commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
} from "../commands/DescribeReplicationsCommand";
import {
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "../commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
} from "../commands/DescribeReplicationTableStatisticsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentRunsCommand";
import {
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "../commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import {
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "../commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "../commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "../commands/DescribeTableStatisticsCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "../commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ModifyEndpointCommandInput, ModifyEndpointCommandOutput } from "../commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "../commands/ModifyEventSubscriptionCommand";
import {
  ModifyReplicationConfigCommandInput,
  ModifyReplicationConfigCommandOutput,
} from "../commands/ModifyReplicationConfigCommand";
import {
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
} from "../commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput,
} from "../commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
} from "../commands/ModifyReplicationTaskCommand";
import {
  MoveReplicationTaskCommandInput,
  MoveReplicationTaskCommandOutput,
} from "../commands/MoveReplicationTaskCommand";
import {
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
} from "../commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommandInput, RefreshSchemasCommandOutput } from "../commands/RefreshSchemasCommand";
import {
  ReloadReplicationTablesCommandInput,
  ReloadReplicationTablesCommandOutput,
} from "../commands/ReloadReplicationTablesCommand";
import { ReloadTablesCommandInput, ReloadTablesCommandOutput } from "../commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import {
  RunFleetAdvisorLsaAnalysisCommandInput,
  RunFleetAdvisorLsaAnalysisCommandOutput,
} from "../commands/RunFleetAdvisorLsaAnalysisCommand";
import {
  StartRecommendationsCommandInput,
  StartRecommendationsCommandOutput,
} from "../commands/StartRecommendationsCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "../commands/StartReplicationCommand";
import {
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
} from "../commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
} from "../commands/StartReplicationTaskAssessmentRunCommand";
import {
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
} from "../commands/StartReplicationTaskCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "../commands/StopReplicationCommand";
import {
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput,
} from "../commands/StopReplicationTaskCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "../commands/TestConnectionCommand";
import {
  UpdateSubscriptionsToEventBridgeCommandInput,
  UpdateSubscriptionsToEventBridgeCommandOutput,
} from "../commands/UpdateSubscriptionsToEventBridgeCommand";
import { DatabaseMigrationServiceServiceException as __BaseException } from "../models/DatabaseMigrationServiceServiceException";
import {
  AccessDeniedFault,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResponse,
  BatchStartRecommendationsRequest,
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
  Certificate,
  CollectorNotFoundFault,
  ComputeConfig,
  CreateEndpointMessage,
  CreateEventSubscriptionMessage,
  CreateFleetAdvisorCollectorRequest,
  CreateReplicationConfigMessage,
  CreateReplicationConfigResponse,
  CreateReplicationInstanceMessage,
  CreateReplicationInstanceResponse,
  CreateReplicationSubnetGroupMessage,
  CreateReplicationTaskMessage,
  CreateReplicationTaskResponse,
  DeleteCertificateMessage,
  DeleteCertificateResponse,
  DeleteCollectorRequest,
  DeleteConnectionMessage,
  DeleteEndpointMessage,
  DeleteEventSubscriptionMessage,
  DeleteFleetAdvisorDatabasesRequest,
  DeleteReplicationConfigMessage,
  DeleteReplicationConfigResponse,
  DeleteReplicationInstanceMessage,
  DeleteReplicationInstanceResponse,
  DeleteReplicationSubnetGroupMessage,
  DeleteReplicationTaskAssessmentRunMessage,
  DeleteReplicationTaskAssessmentRunResponse,
  DeleteReplicationTaskMessage,
  DeleteReplicationTaskResponse,
  DescribeAccountAttributesMessage,
  DescribeApplicableIndividualAssessmentsMessage,
  DescribeCertificatesMessage,
  DescribeCertificatesResponse,
  DescribeConnectionsMessage,
  DescribeEndpointSettingsMessage,
  DescribeEndpointsMessage,
  DescribeEndpointTypesMessage,
  DescribeEventCategoriesMessage,
  DescribeEventsMessage,
  DescribeEventsResponse,
  DescribeEventSubscriptionsMessage,
  DescribeFleetAdvisorCollectorsRequest,
  DescribeFleetAdvisorDatabasesRequest,
  DescribeFleetAdvisorLsaAnalysisRequest,
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemasRequest,
  DescribeFleetAdvisorSchemasResponse,
  DescribeOrderableReplicationInstancesMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsResponse,
  DescribeRecommendationLimitationsRequest,
  DescribeRecommendationsRequest,
  DescribeRecommendationsResponse,
  DescribeRefreshSchemasStatusMessage,
  DescribeRefreshSchemasStatusResponse,
  DescribeReplicationConfigsMessage,
  DescribeReplicationConfigsResponse,
  DescribeReplicationInstancesMessage,
  DescribeReplicationInstancesResponse,
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationsMessage,
  DescribeReplicationsResponse,
  DescribeReplicationSubnetGroupsMessage,
  DescribeReplicationTableStatisticsMessage,
  DescribeReplicationTableStatisticsResponse,
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
  DescribeReplicationTaskAssessmentRunsMessage,
  DescribeReplicationTaskAssessmentRunsResponse,
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsResponse,
  DescribeReplicationTasksMessage,
  DescribeReplicationTasksResponse,
  DescribeSchemasMessage,
  DescribeTableStatisticsMessage,
  DescribeTableStatisticsResponse,
  DmsTransferSettings,
  DocDbSettings,
  DynamoDbSettings,
  ElasticsearchSettings,
  Event,
  Filter,
  GcpMySQLSettings,
  IBMDb2Settings,
  ImportCertificateMessage,
  ImportCertificateResponse,
  InsufficientResourceCapacityFault,
  InvalidCertificateFault,
  InvalidOperationFault,
  InvalidResourceStateFault,
  InvalidSubnet,
  KafkaSettings,
  KinesisSettings,
  KMSAccessDeniedFault,
  KMSDisabledFault,
  KMSFault,
  KMSInvalidStateFault,
  KMSKeyNotAccessibleFault,
  KMSNotFoundFault,
  KMSThrottlingFault,
  ListTagsForResourceMessage,
  MicrosoftSQLServerSettings,
  ModifyEndpointMessage,
  ModifyEventSubscriptionMessage,
  ModifyReplicationConfigMessage,
  ModifyReplicationConfigResponse,
  ModifyReplicationInstanceMessage,
  ModifyReplicationInstanceResponse,
  ModifyReplicationSubnetGroupMessage,
  ModifyReplicationTaskMessage,
  ModifyReplicationTaskResponse,
  MongoDbSettings,
  MoveReplicationTaskMessage,
  MoveReplicationTaskResponse,
  MySQLSettings,
  NeptuneSettings,
  OracleSettings,
  PendingMaintenanceAction,
  PostgreSQLSettings,
  ProvisionData,
  RdsConfiguration,
  RdsRecommendation,
  RdsRequirements,
  RebootReplicationInstanceMessage,
  RebootReplicationInstanceResponse,
  Recommendation,
  RecommendationData,
  RecommendationSettings,
  RedisSettings,
  RedshiftSettings,
  RefreshSchemasMessage,
  RefreshSchemasResponse,
  RefreshSchemasStatus,
  ReloadReplicationTablesMessage,
  ReloadTablesMessage,
  RemoveTagsFromResourceMessage,
  Replication,
  ReplicationConfig,
  ReplicationInstance,
  ReplicationStats,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs,
  ReplicationTask,
  ReplicationTaskAssessmentResult,
  ReplicationTaskAssessmentRun,
  ReplicationTaskIndividualAssessment,
  ReplicationTaskStats,
  ResourceAlreadyExistsFault,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  ResourceQuotaExceededFault,
  S3AccessDeniedFault,
  S3ResourceNotFoundFault,
  S3Settings,
  SchemaResponse,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  StartRecommendationsRequest,
  StartRecommendationsRequestEntry,
  StartReplicationMessage,
  StartReplicationResponse,
  StartReplicationTaskAssessmentMessage,
  StartReplicationTaskAssessmentResponse,
  StartReplicationTaskAssessmentRunMessage,
  StartReplicationTaskAssessmentRunResponse,
  StartReplicationTaskMessage,
  StartReplicationTaskResponse,
  StopReplicationMessage,
  StopReplicationResponse,
  StopReplicationTaskMessage,
  StopReplicationTaskResponse,
  StorageQuotaExceededFault,
  SubnetAlreadyInUse,
  SybaseSettings,
  TableStatistics,
  TableToReload,
  Tag,
  TestConnectionMessage,
  TimestreamSettings,
  UpdateSubscriptionsToEventBridgeMessage,
  UpgradeDependencyFailureFault,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ApplyPendingMaintenanceActionCommand
 */
export const se_ApplyPendingMaintenanceActionCommand = async (
  input: ApplyPendingMaintenanceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ApplyPendingMaintenanceAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchStartRecommendationsCommand
 */
export const se_BatchStartRecommendationsCommand = async (
  input: BatchStartRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchStartRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand
 */
export const se_CancelReplicationTaskAssessmentRunCommand = async (
  input: CancelReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelReplicationTaskAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventSubscriptionCommand
 */
export const se_CreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEventSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetAdvisorCollectorCommand
 */
export const se_CreateFleetAdvisorCollectorCommand = async (
  input: CreateFleetAdvisorCollectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFleetAdvisorCollector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationConfigCommand
 */
export const se_CreateReplicationConfigCommand = async (
  input: CreateReplicationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReplicationConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationInstanceCommand
 */
export const se_CreateReplicationInstanceCommand = async (
  input: CreateReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReplicationInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationSubnetGroupCommand
 */
export const se_CreateReplicationSubnetGroupCommand = async (
  input: CreateReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReplicationSubnetGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationTaskCommand
 */
export const se_CreateReplicationTaskCommand = async (
  input: CreateReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReplicationTask");
  let body: any;
  body = JSON.stringify(se_CreateReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventSubscriptionCommand
 */
export const se_DeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetAdvisorCollectorCommand
 */
export const se_DeleteFleetAdvisorCollectorCommand = async (
  input: DeleteFleetAdvisorCollectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleetAdvisorCollector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetAdvisorDatabasesCommand
 */
export const se_DeleteFleetAdvisorDatabasesCommand = async (
  input: DeleteFleetAdvisorDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleetAdvisorDatabases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationConfigCommand
 */
export const se_DeleteReplicationConfigCommand = async (
  input: DeleteReplicationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationInstanceCommand
 */
export const se_DeleteReplicationInstanceCommand = async (
  input: DeleteReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationSubnetGroupCommand
 */
export const se_DeleteReplicationSubnetGroupCommand = async (
  input: DeleteReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationSubnetGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationTaskCommand
 */
export const se_DeleteReplicationTaskCommand = async (
  input: DeleteReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand
 */
export const se_DeleteReplicationTaskAssessmentRunCommand = async (
  input: DeleteReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationTaskAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand
 */
export const se_DescribeApplicableIndividualAssessmentsCommand = async (
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicableIndividualAssessments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificatesCommand
 */
export const se_DescribeCertificatesCommand = async (
  input: DescribeCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCertificates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionsCommand
 */
export const se_DescribeConnectionsCommand = async (
  input: DescribeConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointSettingsCommand
 */
export const se_DescribeEndpointSettingsCommand = async (
  input: DescribeEndpointSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpointSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointTypesCommand
 */
export const se_DescribeEndpointTypesCommand = async (
  input: DescribeEndpointTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpointTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventCategoriesCommand
 */
export const se_DescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventCategories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvents");
  let body: any;
  body = JSON.stringify(se_DescribeEventsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventSubscriptionsCommand
 */
export const se_DescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventSubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorCollectorsCommand
 */
export const se_DescribeFleetAdvisorCollectorsCommand = async (
  input: DescribeFleetAdvisorCollectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAdvisorCollectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorDatabasesCommand
 */
export const se_DescribeFleetAdvisorDatabasesCommand = async (
  input: DescribeFleetAdvisorDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAdvisorDatabases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand
 */
export const se_DescribeFleetAdvisorLsaAnalysisCommand = async (
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAdvisorLsaAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommand
 */
export const se_DescribeFleetAdvisorSchemaObjectSummaryCommand = async (
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAdvisorSchemaObjectSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorSchemasCommand
 */
export const se_DescribeFleetAdvisorSchemasCommand = async (
  input: DescribeFleetAdvisorSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleetAdvisorSchemas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrderableReplicationInstancesCommand
 */
export const se_DescribeOrderableReplicationInstancesCommand = async (
  input: DescribeOrderableReplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrderableReplicationInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePendingMaintenanceActionsCommand
 */
export const se_DescribePendingMaintenanceActionsCommand = async (
  input: DescribePendingMaintenanceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePendingMaintenanceActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRecommendationLimitationsCommand
 */
export const se_DescribeRecommendationLimitationsCommand = async (
  input: DescribeRecommendationLimitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecommendationLimitations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRecommendationsCommand
 */
export const se_DescribeRecommendationsCommand = async (
  input: DescribeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRefreshSchemasStatusCommand
 */
export const se_DescribeRefreshSchemasStatusCommand = async (
  input: DescribeRefreshSchemasStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRefreshSchemasStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationConfigsCommand
 */
export const se_DescribeReplicationConfigsCommand = async (
  input: DescribeReplicationConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationConfigs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationInstancesCommand
 */
export const se_DescribeReplicationInstancesCommand = async (
  input: DescribeReplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand
 */
export const se_DescribeReplicationInstanceTaskLogsCommand = async (
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationInstanceTaskLogs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationsCommand
 */
export const se_DescribeReplicationsCommand = async (
  input: DescribeReplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationSubnetGroupsCommand
 */
export const se_DescribeReplicationSubnetGroupsCommand = async (
  input: DescribeReplicationSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationSubnetGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationTableStatisticsCommand
 */
export const se_DescribeReplicationTableStatisticsCommand = async (
  input: DescribeReplicationTableStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationTableStatistics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand
 */
export const se_DescribeReplicationTaskAssessmentResultsCommand = async (
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationTaskAssessmentResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand
 */
export const se_DescribeReplicationTaskAssessmentRunsCommand = async (
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationTaskAssessmentRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand
 */
export const se_DescribeReplicationTaskIndividualAssessmentsCommand = async (
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationTaskIndividualAssessments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplicationTasksCommand
 */
export const se_DescribeReplicationTasksCommand = async (
  input: DescribeReplicationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplicationTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSchemasCommand
 */
export const se_DescribeSchemasCommand = async (
  input: DescribeSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSchemas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTableStatisticsCommand
 */
export const se_DescribeTableStatisticsCommand = async (
  input: DescribeTableStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTableStatistics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCertificateCommand
 */
export const se_ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCertificate");
  let body: any;
  body = JSON.stringify(se_ImportCertificateMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyEndpointCommand
 */
export const se_ModifyEndpointCommand = async (
  input: ModifyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyEventSubscriptionCommand
 */
export const se_ModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyEventSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReplicationConfigCommand
 */
export const se_ModifyReplicationConfigCommand = async (
  input: ModifyReplicationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyReplicationConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReplicationInstanceCommand
 */
export const se_ModifyReplicationInstanceCommand = async (
  input: ModifyReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyReplicationInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReplicationSubnetGroupCommand
 */
export const se_ModifyReplicationSubnetGroupCommand = async (
  input: ModifyReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyReplicationSubnetGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyReplicationTaskCommand
 */
export const se_ModifyReplicationTaskCommand = async (
  input: ModifyReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyReplicationTask");
  let body: any;
  body = JSON.stringify(se_ModifyReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MoveReplicationTaskCommand
 */
export const se_MoveReplicationTaskCommand = async (
  input: MoveReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MoveReplicationTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootReplicationInstanceCommand
 */
export const se_RebootReplicationInstanceCommand = async (
  input: RebootReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootReplicationInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RefreshSchemasCommand
 */
export const se_RefreshSchemasCommand = async (
  input: RefreshSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RefreshSchemas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReloadReplicationTablesCommand
 */
export const se_ReloadReplicationTablesCommand = async (
  input: ReloadReplicationTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReloadReplicationTables");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReloadTablesCommand
 */
export const se_ReloadTablesCommand = async (
  input: ReloadTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReloadTables");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunFleetAdvisorLsaAnalysisCommand
 */
export const se_RunFleetAdvisorLsaAnalysisCommand = async (
  input: RunFleetAdvisorLsaAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RunFleetAdvisorLsaAnalysis");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRecommendationsCommand
 */
export const se_StartRecommendationsCommand = async (
  input: StartRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplicationCommand
 */
export const se_StartReplicationCommand = async (
  input: StartReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReplication");
  let body: any;
  body = JSON.stringify(se_StartReplicationMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplicationTaskCommand
 */
export const se_StartReplicationTaskCommand = async (
  input: StartReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReplicationTask");
  let body: any;
  body = JSON.stringify(se_StartReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplicationTaskAssessmentCommand
 */
export const se_StartReplicationTaskAssessmentCommand = async (
  input: StartReplicationTaskAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReplicationTaskAssessment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplicationTaskAssessmentRunCommand
 */
export const se_StartReplicationTaskAssessmentRunCommand = async (
  input: StartReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReplicationTaskAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopReplicationCommand
 */
export const se_StopReplicationCommand = async (
  input: StopReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopReplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopReplicationTaskCommand
 */
export const se_StopReplicationTaskCommand = async (
  input: StopReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopReplicationTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestConnectionCommand
 */
export const se_TestConnectionCommand = async (
  input: TestConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand
 */
export const se_UpdateSubscriptionsToEventBridgeCommand = async (
  input: UpdateSubscriptionsToEventBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubscriptionsToEventBridge");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ApplyPendingMaintenanceActionCommand
 */
export const de_ApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApplyPendingMaintenanceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplyPendingMaintenanceActionResponse(data, context);
  const response: ApplyPendingMaintenanceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError
 */
const de_ApplyPendingMaintenanceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchStartRecommendationsCommand
 */
export const de_BatchStartRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStartRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchStartRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchStartRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchStartRecommendationsCommandError
 */
const de_BatchStartRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStartRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand
 */
export const de_CancelReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelReplicationTaskAssessmentRunResponse(data, context);
  const response: CancelReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError
 */
const de_CancelReplicationTaskAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplicationTaskAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointCommandError
 */
const de_CreateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await de_S3AccessDeniedFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEventSubscriptionCommand
 */
export const de_CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEventSubscriptionCommandError
 */
const de_CreateEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "KMSAccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
      throw await de_KMSAccessDeniedFaultRes(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await de_KMSDisabledFaultRes(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await de_KMSInvalidStateFaultRes(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await de_KMSNotFoundFaultRes(parsedOutput, context);
    case "KMSThrottlingFault":
    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
      throw await de_KMSThrottlingFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopicFault":
    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorizationFault":
    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFleetAdvisorCollectorCommand
 */
export const de_CreateFleetAdvisorCollectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetAdvisorCollectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFleetAdvisorCollectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFleetAdvisorCollectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFleetAdvisorCollectorCommandError
 */
const de_CreateFleetAdvisorCollectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetAdvisorCollectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await de_S3AccessDeniedFaultRes(parsedOutput, context);
    case "S3ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault":
      throw await de_S3ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateReplicationConfigCommand
 */
export const de_CreateReplicationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReplicationConfigResponse(data, context);
  const response: CreateReplicationConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReplicationConfigCommandError
 */
const de_CreateReplicationConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateReplicationInstanceCommand
 */
export const de_CreateReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReplicationInstanceResponse(data, context);
  const response: CreateReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReplicationInstanceCommandError
 */
const de_CreateReplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InsufficientResourceCapacityFault":
    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
      throw await de_InsufficientResourceCapacityFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "StorageQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateReplicationSubnetGroupCommand
 */
export const de_CreateReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReplicationSubnetGroupCommandError
 */
const de_CreateReplicationSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateReplicationTaskCommand
 */
export const de_CreateReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReplicationTaskResponse(data, context);
  const response: CreateReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReplicationTaskCommandError
 */
const de_CreateReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCertificateResponse(data, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCertificateCommandError
 */
const de_DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEventSubscriptionCommand
 */
export const de_DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEventSubscriptionCommandError
 */
const de_DeleteEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFleetAdvisorCollectorCommand
 */
export const de_DeleteFleetAdvisorCollectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorCollectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetAdvisorCollectorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFleetAdvisorCollectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFleetAdvisorCollectorCommandError
 */
const de_DeleteFleetAdvisorCollectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorCollectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CollectorNotFoundFault":
    case "com.amazonaws.databasemigrationservice#CollectorNotFoundFault":
      throw await de_CollectorNotFoundFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommand
 */
export const de_DeleteFleetAdvisorDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetAdvisorDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommandError
 */
const de_DeleteFleetAdvisorDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationFault":
    case "com.amazonaws.databasemigrationservice#InvalidOperationFault":
      throw await de_InvalidOperationFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReplicationConfigCommand
 */
export const de_DeleteReplicationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationConfigResponse(data, context);
  const response: DeleteReplicationConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReplicationConfigCommandError
 */
const de_DeleteReplicationConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReplicationInstanceCommand
 */
export const de_DeleteReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationInstanceResponse(data, context);
  const response: DeleteReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReplicationInstanceCommandError
 */
const de_DeleteReplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReplicationSubnetGroupCommand
 */
export const de_DeleteReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError
 */
const de_DeleteReplicationSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskCommand
 */
export const de_DeleteReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationTaskResponse(data, context);
  const response: DeleteReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskCommandError
 */
const de_DeleteReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand
 */
export const de_DeleteReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationTaskAssessmentRunResponse(data, context);
  const response: DeleteReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError
 */
const de_DeleteReplicationTaskAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand
 */
export const de_DescribeApplicableIndividualAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicableIndividualAssessmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeApplicableIndividualAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError
 */
const de_DescribeApplicableIndividualAssessmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCertificatesCommand
 */
export const de_DescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificatesResponse(data, context);
  const response: DescribeCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCertificatesCommandError
 */
const de_DescribeCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionsCommand
 */
export const de_DescribeConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectionsCommandError
 */
const de_DescribeConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEndpointsCommand
 */
export const de_DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointsCommandError
 */
const de_DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEndpointSettingsCommand
 */
export const de_DescribeEndpointSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEndpointSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointSettingsCommandError
 */
const de_DescribeEndpointSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEndpointTypesCommand
 */
export const de_DescribeEndpointTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEndpointTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointTypesCommandError
 */
const de_DescribeEndpointTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEventCategoriesCommand
 */
export const de_DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventCategoriesCommandError
 */
const de_DescribeEventCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEventSubscriptionsCommand
 */
export const de_DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventSubscriptionsCommandError
 */
const de_DescribeEventSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommand
 */
export const de_DescribeFleetAdvisorCollectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorCollectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAdvisorCollectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetAdvisorCollectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommandError
 */
const de_DescribeFleetAdvisorCollectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorCollectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorDatabasesCommand
 */
export const de_DescribeFleetAdvisorDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAdvisorDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorDatabasesCommandError
 */
const de_DescribeFleetAdvisorDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand
 */
export const de_DescribeFleetAdvisorLsaAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAdvisorLsaAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommandError
 */
const de_DescribeFleetAdvisorLsaAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommand
 */
export const de_DescribeFleetAdvisorSchemaObjectSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAdvisorSchemaObjectSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommandError
 */
const de_DescribeFleetAdvisorSchemaObjectSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemasCommand
 */
export const de_DescribeFleetAdvisorSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetAdvisorSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFleetAdvisorSchemasResponse(data, context);
  const response: DescribeFleetAdvisorSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemasCommandError
 */
const de_DescribeFleetAdvisorSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand
 */
export const de_DescribeOrderableReplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableReplicationInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrderableReplicationInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeOrderableReplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError
 */
const de_DescribeOrderableReplicationInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableReplicationInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribePendingMaintenanceActionsCommand
 */
export const de_DescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePendingMaintenanceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePendingMaintenanceActionsResponse(data, context);
  const response: DescribePendingMaintenanceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError
 */
const de_DescribePendingMaintenanceActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRecommendationLimitationsCommand
 */
export const de_DescribeRecommendationLimitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationLimitationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecommendationLimitationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRecommendationLimitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRecommendationLimitationsCommandError
 */
const de_DescribeRecommendationLimitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationLimitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRecommendationsCommand
 */
export const de_DescribeRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRecommendationsResponse(data, context);
  const response: DescribeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRecommendationsCommandError
 */
const de_DescribeRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRefreshSchemasStatusCommand
 */
export const de_DescribeRefreshSchemasStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRefreshSchemasStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRefreshSchemasStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRefreshSchemasStatusResponse(data, context);
  const response: DescribeRefreshSchemasStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError
 */
const de_DescribeRefreshSchemasStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRefreshSchemasStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationConfigsCommand
 */
export const de_DescribeReplicationConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationConfigsResponse(data, context);
  const response: DescribeReplicationConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationConfigsCommandError
 */
const de_DescribeReplicationConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationInstancesCommand
 */
export const de_DescribeReplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationInstancesResponse(data, context);
  const response: DescribeReplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationInstancesCommandError
 */
const de_DescribeReplicationInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand
 */
export const de_DescribeReplicationInstanceTaskLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationInstanceTaskLogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeReplicationInstanceTaskLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError
 */
const de_DescribeReplicationInstanceTaskLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationsCommand
 */
export const de_DescribeReplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationsResponse(data, context);
  const response: DescribeReplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationsCommandError
 */
const de_DescribeReplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand
 */
export const de_DescribeReplicationSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeReplicationSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError
 */
const de_DescribeReplicationSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationTableStatisticsCommand
 */
export const de_DescribeReplicationTableStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTableStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationTableStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationTableStatisticsResponse(data, context);
  const response: DescribeReplicationTableStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationTableStatisticsCommandError
 */
const de_DescribeReplicationTableStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTableStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand
 */
export const de_DescribeReplicationTaskAssessmentResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationTaskAssessmentResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationTaskAssessmentResultsResponse(data, context);
  const response: DescribeReplicationTaskAssessmentResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError
 */
const de_DescribeReplicationTaskAssessmentResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand
 */
export const de_DescribeReplicationTaskAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationTaskAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationTaskAssessmentRunsResponse(data, context);
  const response: DescribeReplicationTaskAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError
 */
const de_DescribeReplicationTaskAssessmentRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand
 */
export const de_DescribeReplicationTaskIndividualAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationTaskIndividualAssessmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationTaskIndividualAssessmentsResponse(data, context);
  const response: DescribeReplicationTaskIndividualAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError
 */
const de_DescribeReplicationTaskIndividualAssessmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReplicationTasksCommand
 */
export const de_DescribeReplicationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplicationTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplicationTasksResponse(data, context);
  const response: DescribeReplicationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplicationTasksCommandError
 */
const de_DescribeReplicationTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSchemasCommand
 */
export const de_DescribeSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSchemasCommandError
 */
const de_DescribeSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTableStatisticsCommand
 */
export const de_DescribeTableStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTableStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTableStatisticsResponse(data, context);
  const response: DescribeTableStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTableStatisticsCommandError
 */
const de_DescribeTableStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportCertificateCommand
 */
export const de_ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportCertificateCommandError
 */
const de_ImportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidCertificateFault":
    case "com.amazonaws.databasemigrationservice#InvalidCertificateFault":
      throw await de_InvalidCertificateFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyEndpointCommand
 */
export const de_ModifyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyEndpointCommandError
 */
const de_ModifyEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyEventSubscriptionCommand
 */
export const de_ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyEventSubscriptionCommandError
 */
const de_ModifyEventSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "KMSAccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
      throw await de_KMSAccessDeniedFaultRes(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await de_KMSDisabledFaultRes(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await de_KMSInvalidStateFaultRes(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await de_KMSNotFoundFaultRes(parsedOutput, context);
    case "KMSThrottlingFault":
    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
      throw await de_KMSThrottlingFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "SNSInvalidTopicFault":
    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
      throw await de_SNSInvalidTopicFaultRes(parsedOutput, context);
    case "SNSNoAuthorizationFault":
    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
      throw await de_SNSNoAuthorizationFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyReplicationConfigCommand
 */
export const de_ModifyReplicationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyReplicationConfigResponse(data, context);
  const response: ModifyReplicationConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyReplicationConfigCommandError
 */
const de_ModifyReplicationConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyReplicationInstanceCommand
 */
export const de_ModifyReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyReplicationInstanceResponse(data, context);
  const response: ModifyReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyReplicationInstanceCommandError
 */
const de_ModifyReplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InsufficientResourceCapacityFault":
    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
      throw await de_InsufficientResourceCapacityFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "StorageQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
      throw await de_StorageQuotaExceededFaultRes(parsedOutput, context);
    case "UpgradeDependencyFailureFault":
    case "com.amazonaws.databasemigrationservice#UpgradeDependencyFailureFault":
      throw await de_UpgradeDependencyFailureFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyReplicationSubnetGroupCommand
 */
export const de_ModifyReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError
 */
const de_ModifyReplicationSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.databasemigrationservice#SubnetAlreadyInUse":
      throw await de_SubnetAlreadyInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyReplicationTaskCommand
 */
export const de_ModifyReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyReplicationTaskResponse(data, context);
  const response: ModifyReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyReplicationTaskCommandError
 */
const de_ModifyReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MoveReplicationTaskCommand
 */
export const de_MoveReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MoveReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MoveReplicationTaskResponse(data, context);
  const response: MoveReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MoveReplicationTaskCommandError
 */
const de_MoveReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebootReplicationInstanceCommand
 */
export const de_RebootReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootReplicationInstanceResponse(data, context);
  const response: RebootReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RebootReplicationInstanceCommandError
 */
const de_RebootReplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootReplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RefreshSchemasCommand
 */
export const de_RefreshSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RefreshSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RefreshSchemasResponse(data, context);
  const response: RefreshSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RefreshSchemasCommandError
 */
const de_RefreshSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReloadReplicationTablesCommand
 */
export const de_ReloadReplicationTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReloadReplicationTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReloadReplicationTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ReloadReplicationTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ReloadReplicationTablesCommandError
 */
const de_ReloadReplicationTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReloadReplicationTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReloadTablesCommand
 */
export const de_ReloadTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReloadTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReloadTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ReloadTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ReloadTablesCommandError
 */
const de_ReloadTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReloadTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RunFleetAdvisorLsaAnalysisCommand
 */
export const de_RunFleetAdvisorLsaAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunFleetAdvisorLsaAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RunFleetAdvisorLsaAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RunFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RunFleetAdvisorLsaAnalysisCommandError
 */
const de_RunFleetAdvisorLsaAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunFleetAdvisorLsaAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartRecommendationsCommand
 */
export const de_StartRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartRecommendationsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartRecommendationsCommandError
 */
const de_StartRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartReplicationCommand
 */
export const de_StartReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplicationResponse(data, context);
  const response: StartReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReplicationCommandError
 */
const de_StartReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartReplicationTaskCommand
 */
export const de_StartReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplicationTaskResponse(data, context);
  const response: StartReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReplicationTaskCommandError
 */
const de_StartReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentCommand
 */
export const de_StartReplicationTaskAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReplicationTaskAssessmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplicationTaskAssessmentResponse(data, context);
  const response: StartReplicationTaskAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentCommandError
 */
const de_StartReplicationTaskAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand
 */
export const de_StartReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplicationTaskAssessmentRunResponse(data, context);
  const response: StartReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError
 */
const de_StartReplicationTaskAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSAccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
      throw await de_KMSAccessDeniedFaultRes(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await de_KMSDisabledFaultRes(parsedOutput, context);
    case "KMSFault":
    case "com.amazonaws.databasemigrationservice#KMSFault":
      throw await de_KMSFaultRes(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await de_KMSInvalidStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await de_KMSNotFoundFaultRes(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await de_ResourceAlreadyExistsFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await de_S3AccessDeniedFaultRes(parsedOutput, context);
    case "S3ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault":
      throw await de_S3ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopReplicationCommand
 */
export const de_StopReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopReplicationResponse(data, context);
  const response: StopReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopReplicationCommandError
 */
const de_StopReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopReplicationTaskCommand
 */
export const de_StopReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopReplicationTaskResponse(data, context);
  const response: StopReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopReplicationTaskCommandError
 */
const de_StopReplicationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TestConnectionCommand
 */
export const de_TestConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TestConnectionCommandError
 */
const de_TestConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await de_KMSKeyNotAccessibleFaultRes(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await de_ResourceNotFoundFaultRes(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await de_ResourceQuotaExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand
 */
export const de_UpdateSubscriptionsToEventBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionsToEventBridgeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubscriptionsToEventBridgeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSubscriptionsToEventBridgeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommandError
 */
const de_UpdateSubscriptionsToEventBridgeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionsToEventBridgeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#AccessDeniedFault":
      throw await de_AccessDeniedFaultRes(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await de_InvalidResourceStateFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedFaultRes
 */
const de_AccessDeniedFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CollectorNotFoundFaultRes
 */
const de_CollectorNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CollectorNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CollectorNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientResourceCapacityFaultRes
 */
const de_InsufficientResourceCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientResourceCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InsufficientResourceCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCertificateFaultRes
 */
const de_InvalidCertificateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCertificateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationFaultRes
 */
const de_InvalidOperationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceStateFaultRes
 */
const de_InvalidResourceStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidResourceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSubnetRes
 */
const de_InvalidSubnetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSAccessDeniedFaultRes
 */
const de_KMSAccessDeniedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSAccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSDisabledFaultRes
 */
const de_KMSDisabledFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSFaultRes
 */
const de_KMSFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInvalidStateFaultRes
 */
const de_KMSInvalidStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSInvalidStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSKeyNotAccessibleFaultRes
 */
const de_KMSKeyNotAccessibleFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSKeyNotAccessibleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSKeyNotAccessibleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSNotFoundFaultRes
 */
const de_KMSNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSThrottlingFaultRes
 */
const de_KMSThrottlingFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSThrottlingFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KMSThrottlingFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsRes
 */
const de_ReplicationSubnetGroupDoesNotCoverEnoughAZsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationSubnetGroupDoesNotCoverEnoughAZs> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReplicationSubnetGroupDoesNotCoverEnoughAZs({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsFaultRes
 */
const de_ResourceAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundFaultRes
 */
const de_ResourceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceQuotaExceededFaultRes
 */
const de_ResourceQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1S3AccessDeniedFaultRes
 */
const de_S3AccessDeniedFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<S3AccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new S3AccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1S3ResourceNotFoundFaultRes
 */
const de_S3ResourceNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new S3ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SNSInvalidTopicFaultRes
 */
const de_SNSInvalidTopicFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SNSNoAuthorizationFaultRes
 */
const de_SNSNoAuthorizationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1StorageQuotaExceededFaultRes
 */
const de_StorageQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StorageQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetAlreadyInUseRes
 */
const de_SubnetAlreadyInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UpgradeDependencyFailureFaultRes
 */
const de_UpgradeDependencyFailureFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpgradeDependencyFailureFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UpgradeDependencyFailureFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsToResourceMessage omitted.

// se_ApplyPendingMaintenanceActionMessage omitted.

// se_ArnList omitted.

// se_BatchStartRecommendationsRequest omitted.

// se_CancelReplicationTaskAssessmentRunMessage omitted.

// se_ComputeConfig omitted.

// se_CreateEndpointMessage omitted.

// se_CreateEventSubscriptionMessage omitted.

// se_CreateFleetAdvisorCollectorRequest omitted.

// se_CreateReplicationConfigMessage omitted.

// se_CreateReplicationInstanceMessage omitted.

// se_CreateReplicationSubnetGroupMessage omitted.

/**
 * serializeAws_json1_1CreateReplicationTaskMessage
 */
const se_CreateReplicationTaskMessage = (input: CreateReplicationTaskMessage, context: __SerdeContext): any => {
  return take(input, {
    CdcStartPosition: [],
    CdcStartTime: (_) => Math.round(_.getTime() / 1000),
    CdcStopPosition: [],
    MigrationType: [],
    ReplicationInstanceArn: [],
    ReplicationTaskIdentifier: [],
    ReplicationTaskSettings: [],
    ResourceIdentifier: [],
    SourceEndpointArn: [],
    TableMappings: [],
    Tags: _json,
    TargetEndpointArn: [],
    TaskData: [],
  });
};

// se_DeleteCertificateMessage omitted.

// se_DeleteCollectorRequest omitted.

// se_DeleteConnectionMessage omitted.

// se_DeleteEndpointMessage omitted.

// se_DeleteEventSubscriptionMessage omitted.

// se_DeleteFleetAdvisorDatabasesRequest omitted.

// se_DeleteReplicationConfigMessage omitted.

// se_DeleteReplicationInstanceMessage omitted.

// se_DeleteReplicationSubnetGroupMessage omitted.

// se_DeleteReplicationTaskAssessmentRunMessage omitted.

// se_DeleteReplicationTaskMessage omitted.

// se_DescribeAccountAttributesMessage omitted.

// se_DescribeApplicableIndividualAssessmentsMessage omitted.

// se_DescribeCertificatesMessage omitted.

// se_DescribeConnectionsMessage omitted.

// se_DescribeEndpointSettingsMessage omitted.

// se_DescribeEndpointsMessage omitted.

// se_DescribeEndpointTypesMessage omitted.

// se_DescribeEventCategoriesMessage omitted.

/**
 * serializeAws_json1_1DescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  return take(input, {
    Duration: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    EventCategories: _json,
    Filters: _json,
    Marker: [],
    MaxRecords: [],
    SourceIdentifier: [],
    SourceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DescribeEventSubscriptionsMessage omitted.

// se_DescribeFleetAdvisorCollectorsRequest omitted.

// se_DescribeFleetAdvisorDatabasesRequest omitted.

// se_DescribeFleetAdvisorLsaAnalysisRequest omitted.

// se_DescribeFleetAdvisorSchemaObjectSummaryRequest omitted.

// se_DescribeFleetAdvisorSchemasRequest omitted.

// se_DescribeOrderableReplicationInstancesMessage omitted.

// se_DescribePendingMaintenanceActionsMessage omitted.

// se_DescribeRecommendationLimitationsRequest omitted.

// se_DescribeRecommendationsRequest omitted.

// se_DescribeRefreshSchemasStatusMessage omitted.

// se_DescribeReplicationConfigsMessage omitted.

// se_DescribeReplicationInstancesMessage omitted.

// se_DescribeReplicationInstanceTaskLogsMessage omitted.

// se_DescribeReplicationsMessage omitted.

// se_DescribeReplicationSubnetGroupsMessage omitted.

// se_DescribeReplicationTableStatisticsMessage omitted.

// se_DescribeReplicationTaskAssessmentResultsMessage omitted.

// se_DescribeReplicationTaskAssessmentRunsMessage omitted.

// se_DescribeReplicationTaskIndividualAssessmentsMessage omitted.

// se_DescribeReplicationTasksMessage omitted.

// se_DescribeSchemasMessage omitted.

// se_DescribeTableStatisticsMessage omitted.

// se_DmsTransferSettings omitted.

// se_DocDbSettings omitted.

// se_DynamoDbSettings omitted.

// se_ElasticsearchSettings omitted.

// se_EventCategoriesList omitted.

// se_ExcludeTestList omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValueList omitted.

// se_GcpMySQLSettings omitted.

// se_IBMDb2Settings omitted.

/**
 * serializeAws_json1_1ImportCertificateMessage
 */
const se_ImportCertificateMessage = (input: ImportCertificateMessage, context: __SerdeContext): any => {
  return take(input, {
    CertificateIdentifier: [],
    CertificatePem: [],
    CertificateWallet: context.base64Encoder,
    Tags: _json,
  });
};

// se_IncludeTestList omitted.

// se_IntegerList omitted.

// se_KafkaSettings omitted.

// se_KeyList omitted.

// se_KinesisSettings omitted.

// se_ListTagsForResourceMessage omitted.

// se_MicrosoftSQLServerSettings omitted.

// se_ModifyEndpointMessage omitted.

// se_ModifyEventSubscriptionMessage omitted.

// se_ModifyReplicationConfigMessage omitted.

// se_ModifyReplicationInstanceMessage omitted.

// se_ModifyReplicationSubnetGroupMessage omitted.

/**
 * serializeAws_json1_1ModifyReplicationTaskMessage
 */
const se_ModifyReplicationTaskMessage = (input: ModifyReplicationTaskMessage, context: __SerdeContext): any => {
  return take(input, {
    CdcStartPosition: [],
    CdcStartTime: (_) => Math.round(_.getTime() / 1000),
    CdcStopPosition: [],
    MigrationType: [],
    ReplicationTaskArn: [],
    ReplicationTaskIdentifier: [],
    ReplicationTaskSettings: [],
    TableMappings: [],
    TaskData: [],
  });
};

// se_MongoDbSettings omitted.

// se_MoveReplicationTaskMessage omitted.

// se_MySQLSettings omitted.

// se_NeptuneSettings omitted.

// se_OracleSettings omitted.

// se_PostgreSQLSettings omitted.

// se_RebootReplicationInstanceMessage omitted.

// se_RecommendationSettings omitted.

// se_RedisSettings omitted.

// se_RedshiftSettings omitted.

// se_RefreshSchemasMessage omitted.

// se_ReloadReplicationTablesMessage omitted.

// se_ReloadTablesMessage omitted.

// se_RemoveTagsFromResourceMessage omitted.

// se_S3Settings omitted.

// se_SourceIdsList omitted.

// se_StartRecommendationsRequest omitted.

// se_StartRecommendationsRequestEntry omitted.

// se_StartRecommendationsRequestEntryList omitted.

/**
 * serializeAws_json1_1StartReplicationMessage
 */
const se_StartReplicationMessage = (input: StartReplicationMessage, context: __SerdeContext): any => {
  return take(input, {
    CdcStartPosition: [],
    CdcStartTime: (_) => Math.round(_.getTime() / 1000),
    CdcStopPosition: [],
    ReplicationConfigArn: [],
    StartReplicationType: [],
  });
};

// se_StartReplicationTaskAssessmentMessage omitted.

// se_StartReplicationTaskAssessmentRunMessage omitted.

/**
 * serializeAws_json1_1StartReplicationTaskMessage
 */
const se_StartReplicationTaskMessage = (input: StartReplicationTaskMessage, context: __SerdeContext): any => {
  return take(input, {
    CdcStartPosition: [],
    CdcStartTime: (_) => Math.round(_.getTime() / 1000),
    CdcStopPosition: [],
    ReplicationTaskArn: [],
    StartReplicationTaskType: [],
  });
};

// se_StopReplicationMessage omitted.

// se_StopReplicationTaskMessage omitted.

// se_StringList omitted.

// se_SubnetIdentifierList omitted.

// se_SybaseSettings omitted.

// se_TableListToReload omitted.

// se_TableToReload omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TestConnectionMessage omitted.

// se_TimestreamSettings omitted.

// se_UpdateSubscriptionsToEventBridgeMessage omitted.

// se_VpcSecurityGroupIdList omitted.

// de_AccessDeniedFault omitted.

// de_AccountQuota omitted.

// de_AccountQuotaList omitted.

// de_AddTagsToResourceResponse omitted.

/**
 * deserializeAws_json1_1ApplyPendingMaintenanceActionResponse
 */
const de_ApplyPendingMaintenanceActionResponse = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResponse => {
  return take(output, {
    ResourcePendingMaintenanceActions: (_: any) => de_ResourcePendingMaintenanceActions(_, context),
  }) as any;
};

// de_AvailabilityZone omitted.

// de_AvailabilityZonesList omitted.

// de_BatchStartRecommendationsErrorEntry omitted.

// de_BatchStartRecommendationsErrorEntryList omitted.

// de_BatchStartRecommendationsResponse omitted.

/**
 * deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse
 */
const de_CancelReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): CancelReplicationTaskAssessmentRunResponse => {
  return take(output, {
    ReplicationTaskAssessmentRun: (_: any) => de_ReplicationTaskAssessmentRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return take(output, {
    CertificateArn: __expectString,
    CertificateCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CertificateIdentifier: __expectString,
    CertificateOwner: __expectString,
    CertificatePem: __expectString,
    CertificateWallet: context.base64Decoder,
    KeyLength: __expectInt32,
    SigningAlgorithm: __expectString,
    ValidFromDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ValidToDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Certificate(entry, context);
    });
  return retVal;
};

// de_CollectorHealthCheck omitted.

// de_CollectorNotFoundFault omitted.

// de_CollectorResponse omitted.

// de_CollectorResponses omitted.

// de_CollectorShortInfoResponse omitted.

// de_CollectorsList omitted.

// de_ComputeConfig omitted.

// de_Connection omitted.

// de_ConnectionList omitted.

// de_CreateEndpointResponse omitted.

// de_CreateEventSubscriptionResponse omitted.

// de_CreateFleetAdvisorCollectorResponse omitted.

/**
 * deserializeAws_json1_1CreateReplicationConfigResponse
 */
const de_CreateReplicationConfigResponse = (output: any, context: __SerdeContext): CreateReplicationConfigResponse => {
  return take(output, {
    ReplicationConfig: (_: any) => de_ReplicationConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateReplicationInstanceResponse
 */
const de_CreateReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationInstanceResponse => {
  return take(output, {
    ReplicationInstance: (_: any) => de_ReplicationInstance(_, context),
  }) as any;
};

// de_CreateReplicationSubnetGroupResponse omitted.

/**
 * deserializeAws_json1_1CreateReplicationTaskResponse
 */
const de_CreateReplicationTaskResponse = (output: any, context: __SerdeContext): CreateReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

// de_DatabaseInstanceSoftwareDetailsResponse omitted.

// de_DatabaseList omitted.

// de_DatabaseResponse omitted.

// de_DatabaseShortInfoResponse omitted.

/**
 * deserializeAws_json1_1DeleteCertificateResponse
 */
const de_DeleteCertificateResponse = (output: any, context: __SerdeContext): DeleteCertificateResponse => {
  return take(output, {
    Certificate: (_: any) => de_Certificate(_, context),
  }) as any;
};

// de_DeleteConnectionResponse omitted.

// de_DeleteEndpointResponse omitted.

// de_DeleteEventSubscriptionResponse omitted.

// de_DeleteFleetAdvisorDatabasesResponse omitted.

/**
 * deserializeAws_json1_1DeleteReplicationConfigResponse
 */
const de_DeleteReplicationConfigResponse = (output: any, context: __SerdeContext): DeleteReplicationConfigResponse => {
  return take(output, {
    ReplicationConfig: (_: any) => de_ReplicationConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationInstanceResponse
 */
const de_DeleteReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationInstanceResponse => {
  return take(output, {
    ReplicationInstance: (_: any) => de_ReplicationInstance(_, context),
  }) as any;
};

// de_DeleteReplicationSubnetGroupResponse omitted.

/**
 * deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse
 */
const de_DeleteReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationTaskAssessmentRunResponse => {
  return take(output, {
    ReplicationTaskAssessmentRun: (_: any) => de_ReplicationTaskAssessmentRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskResponse
 */
const de_DeleteReplicationTaskResponse = (output: any, context: __SerdeContext): DeleteReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

// de_DescribeAccountAttributesResponse omitted.

// de_DescribeApplicableIndividualAssessmentsResponse omitted.

/**
 * deserializeAws_json1_1DescribeCertificatesResponse
 */
const de_DescribeCertificatesResponse = (output: any, context: __SerdeContext): DescribeCertificatesResponse => {
  return take(output, {
    Certificates: (_: any) => de_CertificateList(_, context),
    Marker: __expectString,
  }) as any;
};

// de_DescribeConnectionsResponse omitted.

// de_DescribeEndpointSettingsResponse omitted.

// de_DescribeEndpointsResponse omitted.

// de_DescribeEndpointTypesResponse omitted.

// de_DescribeEventCategoriesResponse omitted.

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return take(output, {
    Events: (_: any) => de_EventList(_, context),
    Marker: __expectString,
  }) as any;
};

// de_DescribeEventSubscriptionsResponse omitted.

// de_DescribeFleetAdvisorCollectorsResponse omitted.

// de_DescribeFleetAdvisorDatabasesResponse omitted.

// de_DescribeFleetAdvisorLsaAnalysisResponse omitted.

// de_DescribeFleetAdvisorSchemaObjectSummaryResponse omitted.

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemasResponse
 */
const de_DescribeFleetAdvisorSchemasResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorSchemasResponse => {
  return take(output, {
    FleetAdvisorSchemas: (_: any) => de_FleetAdvisorSchemaList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeOrderableReplicationInstancesResponse omitted.

/**
 * deserializeAws_json1_1DescribePendingMaintenanceActionsResponse
 */
const de_DescribePendingMaintenanceActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribePendingMaintenanceActionsResponse => {
  return take(output, {
    Marker: __expectString,
    PendingMaintenanceActions: (_: any) => de_PendingMaintenanceActions(_, context),
  }) as any;
};

// de_DescribeRecommendationLimitationsResponse omitted.

/**
 * deserializeAws_json1_1DescribeRecommendationsResponse
 */
const de_DescribeRecommendationsResponse = (output: any, context: __SerdeContext): DescribeRecommendationsResponse => {
  return take(output, {
    NextToken: __expectString,
    Recommendations: (_: any) => de_RecommendationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRefreshSchemasStatusResponse
 */
const de_DescribeRefreshSchemasStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRefreshSchemasStatusResponse => {
  return take(output, {
    RefreshSchemasStatus: (_: any) => de_RefreshSchemasStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationConfigsResponse
 */
const de_DescribeReplicationConfigsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationConfigsResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationConfigs: (_: any) => de_ReplicationConfigList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationInstancesResponse
 */
const de_DescribeReplicationInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationInstancesResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationInstances: (_: any) => de_ReplicationInstanceList(_, context),
  }) as any;
};

// de_DescribeReplicationInstanceTaskLogsResponse omitted.

/**
 * deserializeAws_json1_1DescribeReplicationsResponse
 */
const de_DescribeReplicationsResponse = (output: any, context: __SerdeContext): DescribeReplicationsResponse => {
  return take(output, {
    Marker: __expectString,
    Replications: (_: any) => de_ReplicationList(_, context),
  }) as any;
};

// de_DescribeReplicationSubnetGroupsResponse omitted.

/**
 * deserializeAws_json1_1DescribeReplicationTableStatisticsResponse
 */
const de_DescribeReplicationTableStatisticsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTableStatisticsResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationConfigArn: __expectString,
    ReplicationTableStatistics: (_: any) => de_ReplicationTableStatisticsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse
 */
const de_DescribeReplicationTaskAssessmentResultsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentResultsResponse => {
  return take(output, {
    BucketName: __expectString,
    Marker: __expectString,
    ReplicationTaskAssessmentResults: (_: any) => de_ReplicationTaskAssessmentResultList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse
 */
const de_DescribeReplicationTaskAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentRunsResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationTaskAssessmentRuns: (_: any) => de_ReplicationTaskAssessmentRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse
 */
const de_DescribeReplicationTaskIndividualAssessmentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskIndividualAssessmentsResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationTaskIndividualAssessments: (_: any) => de_ReplicationTaskIndividualAssessmentList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTasksResponse
 */
const de_DescribeReplicationTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTasksResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationTasks: (_: any) => de_ReplicationTaskList(_, context),
  }) as any;
};

// de_DescribeSchemasResponse omitted.

/**
 * deserializeAws_json1_1DescribeTableStatisticsResponse
 */
const de_DescribeTableStatisticsResponse = (output: any, context: __SerdeContext): DescribeTableStatisticsResponse => {
  return take(output, {
    Marker: __expectString,
    ReplicationTaskArn: __expectString,
    TableStatistics: (_: any) => de_TableStatisticsList(_, context),
  }) as any;
};

// de_DmsTransferSettings omitted.

// de_DocDbSettings omitted.

// de_DynamoDbSettings omitted.

// de_ElasticsearchSettings omitted.

// de_Endpoint omitted.

// de_EndpointList omitted.

// de_EndpointSetting omitted.

// de_EndpointSettingEnumValues omitted.

// de_EndpointSettingsList omitted.

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventCategories: _json,
    Message: __expectString,
    SourceIdentifier: __expectString,
    SourceType: __expectString,
  }) as any;
};

// de_EventCategoriesList omitted.

// de_EventCategoryGroup omitted.

// de_EventCategoryGroupList omitted.

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_EventSubscription omitted.

// de_EventSubscriptionsList omitted.

// de_FleetAdvisorLsaAnalysisResponse omitted.

// de_FleetAdvisorLsaAnalysisResponseList omitted.

/**
 * deserializeAws_json1_1FleetAdvisorSchemaList
 */
const de_FleetAdvisorSchemaList = (output: any, context: __SerdeContext): SchemaResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchemaResponse(entry, context);
    });
  return retVal;
};

// de_FleetAdvisorSchemaObjectList omitted.

// de_FleetAdvisorSchemaObjectResponse omitted.

// de_GcpMySQLSettings omitted.

// de_IBMDb2Settings omitted.

/**
 * deserializeAws_json1_1ImportCertificateResponse
 */
const de_ImportCertificateResponse = (output: any, context: __SerdeContext): ImportCertificateResponse => {
  return take(output, {
    Certificate: (_: any) => de_Certificate(_, context),
  }) as any;
};

// de_IndividualAssessmentNameList omitted.

// de_InsufficientResourceCapacityFault omitted.

// de_IntegerList omitted.

// de_InvalidCertificateFault omitted.

// de_InvalidOperationFault omitted.

// de_InvalidResourceStateFault omitted.

// de_InvalidSubnet omitted.

// de_InventoryData omitted.

// de_KafkaSettings omitted.

// de_KinesisSettings omitted.

// de_KMSAccessDeniedFault omitted.

// de_KMSDisabledFault omitted.

// de_KMSFault omitted.

// de_KMSInvalidStateFault omitted.

// de_KMSKeyNotAccessibleFault omitted.

// de_KMSNotFoundFault omitted.

// de_KMSThrottlingFault omitted.

// de_Limitation omitted.

// de_LimitationList omitted.

// de_ListTagsForResourceResponse omitted.

// de_MicrosoftSQLServerSettings omitted.

// de_ModifyEndpointResponse omitted.

// de_ModifyEventSubscriptionResponse omitted.

/**
 * deserializeAws_json1_1ModifyReplicationConfigResponse
 */
const de_ModifyReplicationConfigResponse = (output: any, context: __SerdeContext): ModifyReplicationConfigResponse => {
  return take(output, {
    ReplicationConfig: (_: any) => de_ReplicationConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModifyReplicationInstanceResponse
 */
const de_ModifyReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationInstanceResponse => {
  return take(output, {
    ReplicationInstance: (_: any) => de_ReplicationInstance(_, context),
  }) as any;
};

// de_ModifyReplicationSubnetGroupResponse omitted.

/**
 * deserializeAws_json1_1ModifyReplicationTaskResponse
 */
const de_ModifyReplicationTaskResponse = (output: any, context: __SerdeContext): ModifyReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

// de_MongoDbSettings omitted.

/**
 * deserializeAws_json1_1MoveReplicationTaskResponse
 */
const de_MoveReplicationTaskResponse = (output: any, context: __SerdeContext): MoveReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

// de_MySQLSettings omitted.

// de_NeptuneSettings omitted.

// de_OracleSettings omitted.

// de_OrderableReplicationInstance omitted.

// de_OrderableReplicationInstanceList omitted.

/**
 * deserializeAws_json1_1PendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  return take(output, {
    Action: __expectString,
    AutoAppliedAfterDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentApplyDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ForcedApplyDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OptInStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceActionDetails
 */
const de_PendingMaintenanceActionDetails = (output: any, context: __SerdeContext): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingMaintenanceAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PendingMaintenanceActions
 */
const de_PendingMaintenanceActions = (output: any, context: __SerdeContext): ResourcePendingMaintenanceActions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourcePendingMaintenanceActions(entry, context);
    });
  return retVal;
};

// de_PostgreSQLSettings omitted.

/**
 * deserializeAws_json1_1ProvisionData
 */
const de_ProvisionData = (output: any, context: __SerdeContext): ProvisionData => {
  return take(output, {
    DateNewProvisioningDataAvailable: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateProvisioned: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsNewProvisioningAvailable: __expectBoolean,
    ProvisionState: __expectString,
    ProvisionedCapacityUnits: __expectInt32,
    ReasonForNewProvisioningData: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RdsConfiguration
 */
const de_RdsConfiguration = (output: any, context: __SerdeContext): RdsConfiguration => {
  return take(output, {
    DeploymentOption: __expectString,
    EngineEdition: __expectString,
    EngineVersion: __expectString,
    InstanceMemory: __limitedParseDouble,
    InstanceType: __expectString,
    InstanceVcpu: __limitedParseDouble,
    StorageIops: __expectInt32,
    StorageSize: __expectInt32,
    StorageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RdsRecommendation
 */
const de_RdsRecommendation = (output: any, context: __SerdeContext): RdsRecommendation => {
  return take(output, {
    RequirementsToTarget: (_: any) => de_RdsRequirements(_, context),
    TargetConfiguration: (_: any) => de_RdsConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RdsRequirements
 */
const de_RdsRequirements = (output: any, context: __SerdeContext): RdsRequirements => {
  return take(output, {
    DeploymentOption: __expectString,
    EngineEdition: __expectString,
    EngineVersion: __expectString,
    InstanceMemory: __limitedParseDouble,
    InstanceVcpu: __limitedParseDouble,
    StorageIops: __expectInt32,
    StorageSize: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RebootReplicationInstanceResponse
 */
const de_RebootReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): RebootReplicationInstanceResponse => {
  return take(output, {
    ReplicationInstance: (_: any) => de_ReplicationInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    CreatedDate: __expectString,
    Data: (_: any) => de_RecommendationData(_, context),
    DatabaseId: __expectString,
    EngineName: __expectString,
    Preferred: __expectBoolean,
    Settings: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationData
 */
const de_RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return take(output, {
    RdsEngine: (_: any) => de_RdsRecommendation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
  return retVal;
};

// de_RecommendationSettings omitted.

// de_RedisSettings omitted.

// de_RedshiftSettings omitted.

/**
 * deserializeAws_json1_1RefreshSchemasResponse
 */
const de_RefreshSchemasResponse = (output: any, context: __SerdeContext): RefreshSchemasResponse => {
  return take(output, {
    RefreshSchemasStatus: (_: any) => de_RefreshSchemasStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RefreshSchemasStatus
 */
const de_RefreshSchemasStatus = (output: any, context: __SerdeContext): RefreshSchemasStatus => {
  return take(output, {
    EndpointArn: __expectString,
    LastFailureMessage: __expectString,
    LastRefreshDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationInstanceArn: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ReloadReplicationTablesResponse omitted.

// de_ReloadTablesResponse omitted.

// de_RemoveTagsFromResourceResponse omitted.

/**
 * deserializeAws_json1_1Replication
 */
const de_Replication = (output: any, context: __SerdeContext): Replication => {
  return take(output, {
    CdcStartPosition: __expectString,
    CdcStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CdcStopPosition: __expectString,
    FailureMessages: _json,
    ProvisionData: (_: any) => de_ProvisionData(_, context),
    RecoveryCheckpoint: __expectString,
    ReplicationConfigArn: __expectString,
    ReplicationConfigIdentifier: __expectString,
    ReplicationCreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationLastStopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationStats: (_: any) => de_ReplicationStats(_, context),
    ReplicationType: __expectString,
    ReplicationUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceEndpointArn: __expectString,
    StartReplicationType: __expectString,
    Status: __expectString,
    StopReason: __expectString,
    TargetEndpointArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationConfig
 */
const de_ReplicationConfig = (output: any, context: __SerdeContext): ReplicationConfig => {
  return take(output, {
    ComputeConfig: _json,
    ReplicationConfigArn: __expectString,
    ReplicationConfigCreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationConfigIdentifier: __expectString,
    ReplicationConfigUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationSettings: __expectString,
    ReplicationType: __expectString,
    SourceEndpointArn: __expectString,
    SupplementalSettings: __expectString,
    TableMappings: __expectString,
    TargetEndpointArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationConfigList
 */
const de_ReplicationConfigList = (output: any, context: __SerdeContext): ReplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationInstance
 */
const de_ReplicationInstance = (output: any, context: __SerdeContext): ReplicationInstance => {
  return take(output, {
    AllocatedStorage: __expectInt32,
    AutoMinorVersionUpgrade: __expectBoolean,
    AvailabilityZone: __expectString,
    DnsNameServers: __expectString,
    EngineVersion: __expectString,
    FreeUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InstanceCreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KmsKeyId: __expectString,
    MultiAZ: __expectBoolean,
    NetworkType: __expectString,
    PendingModifiedValues: _json,
    PreferredMaintenanceWindow: __expectString,
    PubliclyAccessible: __expectBoolean,
    ReplicationInstanceArn: __expectString,
    ReplicationInstanceClass: __expectString,
    ReplicationInstanceIdentifier: __expectString,
    ReplicationInstanceIpv6Addresses: _json,
    ReplicationInstancePrivateIpAddress: __expectString,
    ReplicationInstancePrivateIpAddresses: _json,
    ReplicationInstancePublicIpAddress: __expectString,
    ReplicationInstancePublicIpAddresses: _json,
    ReplicationInstanceStatus: __expectString,
    ReplicationSubnetGroup: _json,
    SecondaryAvailabilityZone: __expectString,
    VpcSecurityGroups: _json,
  }) as any;
};

// de_ReplicationInstanceIpv6AddressList omitted.

/**
 * deserializeAws_json1_1ReplicationInstanceList
 */
const de_ReplicationInstanceList = (output: any, context: __SerdeContext): ReplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationInstance(entry, context);
    });
  return retVal;
};

// de_ReplicationInstancePrivateIpAddressList omitted.

// de_ReplicationInstancePublicIpAddressList omitted.

// de_ReplicationInstanceTaskLog omitted.

// de_ReplicationInstanceTaskLogsList omitted.

/**
 * deserializeAws_json1_1ReplicationList
 */
const de_ReplicationList = (output: any, context: __SerdeContext): Replication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Replication(entry, context);
    });
  return retVal;
};

// de_ReplicationPendingModifiedValues omitted.

/**
 * deserializeAws_json1_1ReplicationStats
 */
const de_ReplicationStats = (output: any, context: __SerdeContext): ReplicationStats => {
  return take(output, {
    ElapsedTimeMillis: __expectLong,
    FreshStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FullLoadFinishDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FullLoadProgressPercent: __expectInt32,
    FullLoadStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TablesErrored: __expectInt32,
    TablesLoaded: __expectInt32,
    TablesLoading: __expectInt32,
    TablesQueued: __expectInt32,
  }) as any;
};

// de_ReplicationSubnetGroup omitted.

// de_ReplicationSubnetGroupDoesNotCoverEnoughAZs omitted.

// de_ReplicationSubnetGroups omitted.

/**
 * deserializeAws_json1_1ReplicationTableStatisticsList
 */
const de_ReplicationTableStatisticsList = (output: any, context: __SerdeContext): TableStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTask
 */
const de_ReplicationTask = (output: any, context: __SerdeContext): ReplicationTask => {
  return take(output, {
    CdcStartPosition: __expectString,
    CdcStopPosition: __expectString,
    LastFailureMessage: __expectString,
    MigrationType: __expectString,
    RecoveryCheckpoint: __expectString,
    ReplicationInstanceArn: __expectString,
    ReplicationTaskArn: __expectString,
    ReplicationTaskCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationTaskIdentifier: __expectString,
    ReplicationTaskSettings: __expectString,
    ReplicationTaskStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicationTaskStats: (_: any) => de_ReplicationTaskStats(_, context),
    SourceEndpointArn: __expectString,
    Status: __expectString,
    StopReason: __expectString,
    TableMappings: __expectString,
    TargetEndpointArn: __expectString,
    TargetReplicationInstanceArn: __expectString,
    TaskData: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentResult
 */
const de_ReplicationTaskAssessmentResult = (output: any, context: __SerdeContext): ReplicationTaskAssessmentResult => {
  return take(output, {
    AssessmentResults: __expectString,
    AssessmentResultsFile: __expectString,
    AssessmentStatus: __expectString,
    ReplicationTaskArn: __expectString,
    ReplicationTaskIdentifier: __expectString,
    ReplicationTaskLastAssessmentDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3ObjectUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentResultList
 */
const de_ReplicationTaskAssessmentResultList = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationTaskAssessmentResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentRun
 */
const de_ReplicationTaskAssessmentRun = (output: any, context: __SerdeContext): ReplicationTaskAssessmentRun => {
  return take(output, {
    AssessmentProgress: _json,
    AssessmentRunName: __expectString,
    LastFailureMessage: __expectString,
    ReplicationTaskArn: __expectString,
    ReplicationTaskAssessmentRunArn: __expectString,
    ReplicationTaskAssessmentRunCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResultEncryptionMode: __expectString,
    ResultKmsKeyArn: __expectString,
    ResultLocationBucket: __expectString,
    ResultLocationFolder: __expectString,
    ServiceAccessRoleArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentRunList
 */
const de_ReplicationTaskAssessmentRunList = (output: any, context: __SerdeContext): ReplicationTaskAssessmentRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationTaskAssessmentRun(entry, context);
    });
  return retVal;
};

// de_ReplicationTaskAssessmentRunProgress omitted.

/**
 * deserializeAws_json1_1ReplicationTaskIndividualAssessment
 */
const de_ReplicationTaskIndividualAssessment = (
  output: any,
  context: __SerdeContext
): ReplicationTaskIndividualAssessment => {
  return take(output, {
    IndividualAssessmentName: __expectString,
    ReplicationTaskAssessmentRunArn: __expectString,
    ReplicationTaskIndividualAssessmentArn: __expectString,
    ReplicationTaskIndividualAssessmentStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskIndividualAssessmentList
 */
const de_ReplicationTaskIndividualAssessmentList = (
  output: any,
  context: __SerdeContext
): ReplicationTaskIndividualAssessment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationTaskIndividualAssessment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskList
 */
const de_ReplicationTaskList = (output: any, context: __SerdeContext): ReplicationTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskStats
 */
const de_ReplicationTaskStats = (output: any, context: __SerdeContext): ReplicationTaskStats => {
  return take(output, {
    ElapsedTimeMillis: __expectLong,
    FreshStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FullLoadFinishDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FullLoadProgressPercent: __expectInt32,
    FullLoadStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TablesErrored: __expectInt32,
    TablesLoaded: __expectInt32,
    TablesLoading: __expectInt32,
    TablesQueued: __expectInt32,
  }) as any;
};

// de_ResourceAlreadyExistsFault omitted.

// de_ResourceNotFoundFault omitted.

/**
 * deserializeAws_json1_1ResourcePendingMaintenanceActions
 */
const de_ResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  return take(output, {
    PendingMaintenanceActionDetails: (_: any) => de_PendingMaintenanceActionDetails(_, context),
    ResourceIdentifier: __expectString,
  }) as any;
};

// de_ResourceQuotaExceededFault omitted.

// de_RunFleetAdvisorLsaAnalysisResponse omitted.

// de_S3AccessDeniedFault omitted.

// de_S3ResourceNotFoundFault omitted.

// de_S3Settings omitted.

// de_SchemaList omitted.

/**
 * deserializeAws_json1_1SchemaResponse
 */
const de_SchemaResponse = (output: any, context: __SerdeContext): SchemaResponse => {
  return take(output, {
    CodeLineCount: __expectLong,
    CodeSize: __expectLong,
    Complexity: __expectString,
    DatabaseInstance: _json,
    OriginalSchema: _json,
    SchemaId: __expectString,
    SchemaName: __expectString,
    Server: _json,
    Similarity: __limitedParseDouble,
  }) as any;
};

// de_SchemaShortInfoResponse omitted.

// de_ServerShortInfoResponse omitted.

// de_SNSInvalidTopicFault omitted.

// de_SNSNoAuthorizationFault omitted.

// de_SourceIdsList omitted.

/**
 * deserializeAws_json1_1StartReplicationResponse
 */
const de_StartReplicationResponse = (output: any, context: __SerdeContext): StartReplicationResponse => {
  return take(output, {
    Replication: (_: any) => de_Replication(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentResponse
 */
const de_StartReplicationTaskAssessmentResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse
 */
const de_StartReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentRunResponse => {
  return take(output, {
    ReplicationTaskAssessmentRun: (_: any) => de_ReplicationTaskAssessmentRun(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartReplicationTaskResponse
 */
const de_StartReplicationTaskResponse = (output: any, context: __SerdeContext): StartReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopReplicationResponse
 */
const de_StopReplicationResponse = (output: any, context: __SerdeContext): StopReplicationResponse => {
  return take(output, {
    Replication: (_: any) => de_Replication(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopReplicationTaskResponse
 */
const de_StopReplicationTaskResponse = (output: any, context: __SerdeContext): StopReplicationTaskResponse => {
  return take(output, {
    ReplicationTask: (_: any) => de_ReplicationTask(_, context),
  }) as any;
};

// de_StorageQuotaExceededFault omitted.

// de_StringList omitted.

// de_Subnet omitted.

// de_SubnetAlreadyInUse omitted.

// de_SubnetList omitted.

// de_SupportedEndpointType omitted.

// de_SupportedEndpointTypeList omitted.

// de_SybaseSettings omitted.

/**
 * deserializeAws_json1_1TableStatistics
 */
const de_TableStatistics = (output: any, context: __SerdeContext): TableStatistics => {
  return take(output, {
    AppliedDdls: __expectLong,
    AppliedDeletes: __expectLong,
    AppliedInserts: __expectLong,
    AppliedUpdates: __expectLong,
    Ddls: __expectLong,
    Deletes: __expectLong,
    FullLoadCondtnlChkFailedRows: __expectLong,
    FullLoadEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FullLoadErrorRows: __expectLong,
    FullLoadReloaded: __expectBoolean,
    FullLoadRows: __expectLong,
    FullLoadStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Inserts: __expectLong,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SchemaName: __expectString,
    TableName: __expectString,
    TableState: __expectString,
    Updates: __expectLong,
    ValidationFailedRecords: __expectLong,
    ValidationPendingRecords: __expectLong,
    ValidationState: __expectString,
    ValidationStateDetails: __expectString,
    ValidationSuspendedRecords: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1TableStatisticsList
 */
const de_TableStatisticsList = (output: any, context: __SerdeContext): TableStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableStatistics(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TestConnectionResponse omitted.

// de_TimestreamSettings omitted.

// de_UpdateSubscriptionsToEventBridgeResponse omitted.

// de_UpgradeDependencyFailureFault omitted.

// de_VpcSecurityGroupMembership omitted.

// de_VpcSecurityGroupMembershipList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonDMSv20160101.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
