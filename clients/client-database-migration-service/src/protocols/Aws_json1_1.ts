// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "../commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "../commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "../commands/DescribeReplicationSubnetGroupsCommand";
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
  AccountQuota,
  AddTagsToResourceMessage,
  AddTagsToResourceResponse,
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResponse,
  AvailabilityZone,
  BatchStartRecommendationsErrorEntry,
  BatchStartRecommendationsRequest,
  BatchStartRecommendationsResponse,
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
  Certificate,
  CollectorHealthCheck,
  CollectorNotFoundFault,
  CollectorResponse,
  CollectorShortInfoResponse,
  Connection,
  CreateEndpointMessage,
  CreateEndpointResponse,
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResponse,
  CreateFleetAdvisorCollectorRequest,
  CreateFleetAdvisorCollectorResponse,
  CreateReplicationInstanceMessage,
  CreateReplicationInstanceResponse,
  CreateReplicationSubnetGroupMessage,
  CreateReplicationSubnetGroupResponse,
  CreateReplicationTaskMessage,
  CreateReplicationTaskResponse,
  DatabaseInstanceSoftwareDetailsResponse,
  DatabaseResponse,
  DatabaseShortInfoResponse,
  DeleteCertificateMessage,
  DeleteCertificateResponse,
  DeleteCollectorRequest,
  DeleteConnectionMessage,
  DeleteConnectionResponse,
  DeleteEndpointMessage,
  DeleteEndpointResponse,
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResponse,
  DeleteFleetAdvisorDatabasesRequest,
  DeleteFleetAdvisorDatabasesResponse,
  DeleteReplicationInstanceMessage,
  DeleteReplicationInstanceResponse,
  DeleteReplicationSubnetGroupMessage,
  DeleteReplicationSubnetGroupResponse,
  DeleteReplicationTaskAssessmentRunMessage,
  DeleteReplicationTaskAssessmentRunResponse,
  DeleteReplicationTaskMessage,
  DeleteReplicationTaskResponse,
  DescribeAccountAttributesMessage,
  DescribeAccountAttributesResponse,
  DescribeApplicableIndividualAssessmentsMessage,
  DescribeApplicableIndividualAssessmentsResponse,
  DescribeCertificatesMessage,
  DescribeCertificatesResponse,
  DescribeConnectionsMessage,
  DescribeConnectionsResponse,
  DescribeEndpointSettingsMessage,
  DescribeEndpointSettingsResponse,
  DescribeEndpointsMessage,
  DescribeEndpointsResponse,
  DescribeEndpointTypesMessage,
  DescribeEndpointTypesResponse,
  DescribeEventCategoriesMessage,
  DescribeEventCategoriesResponse,
  DescribeEventsMessage,
  DescribeEventsResponse,
  DescribeEventSubscriptionsMessage,
  DescribeEventSubscriptionsResponse,
  DescribeFleetAdvisorCollectorsRequest,
  DescribeFleetAdvisorCollectorsResponse,
  DescribeFleetAdvisorDatabasesRequest,
  DescribeFleetAdvisorDatabasesResponse,
  DescribeFleetAdvisorLsaAnalysisRequest,
  DescribeFleetAdvisorLsaAnalysisResponse,
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemaObjectSummaryResponse,
  DescribeFleetAdvisorSchemasRequest,
  DescribeFleetAdvisorSchemasResponse,
  DescribeOrderableReplicationInstancesMessage,
  DescribeOrderableReplicationInstancesResponse,
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsResponse,
  DescribeRecommendationLimitationsRequest,
  DescribeRecommendationLimitationsResponse,
  DescribeRecommendationsRequest,
  DescribeRecommendationsResponse,
  DescribeRefreshSchemasStatusMessage,
  DescribeRefreshSchemasStatusResponse,
  DescribeReplicationInstancesMessage,
  DescribeReplicationInstancesResponse,
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationInstanceTaskLogsResponse,
  DescribeReplicationSubnetGroupsMessage,
  DescribeReplicationSubnetGroupsResponse,
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
  DescribeReplicationTaskAssessmentRunsMessage,
  DescribeReplicationTaskAssessmentRunsResponse,
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsResponse,
  DescribeReplicationTasksMessage,
  DescribeReplicationTasksResponse,
  DescribeSchemasMessage,
  DescribeSchemasResponse,
  DescribeTableStatisticsMessage,
  DescribeTableStatisticsResponse,
  DmsTransferSettings,
  DocDbSettings,
  DynamoDbSettings,
  ElasticsearchSettings,
  Endpoint,
  EndpointSetting,
  Event,
  EventCategoryGroup,
  EventSubscription,
  Filter,
  FleetAdvisorLsaAnalysisResponse,
  FleetAdvisorSchemaObjectResponse,
  GcpMySQLSettings,
  IBMDb2Settings,
  ImportCertificateMessage,
  ImportCertificateResponse,
  InsufficientResourceCapacityFault,
  InvalidCertificateFault,
  InvalidOperationFault,
  InvalidResourceStateFault,
  InvalidSubnet,
  InventoryData,
  KafkaSettings,
  KinesisSettings,
  KMSAccessDeniedFault,
  KMSDisabledFault,
  KMSFault,
  KMSInvalidStateFault,
  KMSKeyNotAccessibleFault,
  KMSNotFoundFault,
  KMSThrottlingFault,
  Limitation,
  ListTagsForResourceMessage,
  ListTagsForResourceResponse,
  MicrosoftSQLServerSettings,
  ModifyEndpointMessage,
  ModifyEndpointResponse,
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResponse,
  ModifyReplicationInstanceMessage,
  ModifyReplicationInstanceResponse,
  ModifyReplicationSubnetGroupMessage,
  ModifyReplicationSubnetGroupResponse,
  ModifyReplicationTaskMessage,
  ModifyReplicationTaskResponse,
  MongoDbSettings,
  MoveReplicationTaskMessage,
  MoveReplicationTaskResponse,
  MySQLSettings,
  NeptuneSettings,
  OracleSettings,
  OrderableReplicationInstance,
  PendingMaintenanceAction,
  PostgreSQLSettings,
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
  ReloadTablesMessage,
  ReloadTablesResponse,
  RemoveTagsFromResourceMessage,
  RemoveTagsFromResourceResponse,
  ReplicationInstance,
  ReplicationInstanceTaskLog,
  ReplicationPendingModifiedValues,
  ReplicationSubnetGroup,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs,
  ReplicationTask,
  ReplicationTaskAssessmentResult,
  ReplicationTaskAssessmentRun,
  ReplicationTaskAssessmentRunProgress,
  ReplicationTaskIndividualAssessment,
  ReplicationTaskStats,
  ResourceAlreadyExistsFault,
  ResourceNotFoundFault,
  ResourcePendingMaintenanceActions,
  ResourceQuotaExceededFault,
  RunFleetAdvisorLsaAnalysisResponse,
  S3AccessDeniedFault,
  S3ResourceNotFoundFault,
  S3Settings,
  SchemaResponse,
  SchemaShortInfoResponse,
  ServerShortInfoResponse,
  SNSInvalidTopicFault,
  SNSNoAuthorizationFault,
  StartRecommendationsRequest,
  StartRecommendationsRequestEntry,
  StartReplicationTaskAssessmentMessage,
  StartReplicationTaskAssessmentResponse,
  StartReplicationTaskAssessmentRunMessage,
  StartReplicationTaskAssessmentRunResponse,
  StartReplicationTaskMessage,
  StartReplicationTaskResponse,
  StopReplicationTaskMessage,
  StopReplicationTaskResponse,
  StorageQuotaExceededFault,
  Subnet,
  SubnetAlreadyInUse,
  SupportedEndpointType,
  SybaseSettings,
  TableStatistics,
  TableToReload,
  Tag,
  TestConnectionMessage,
  TestConnectionResponse,
  UpdateSubscriptionsToEventBridgeMessage,
  UpdateSubscriptionsToEventBridgeResponse,
  UpgradeDependencyFailureFault,
  VpcSecurityGroupMembership,
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
  body = JSON.stringify(se_AddTagsToResourceMessage(input, context));
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
  body = JSON.stringify(se_ApplyPendingMaintenanceActionMessage(input, context));
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
  body = JSON.stringify(se_BatchStartRecommendationsRequest(input, context));
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
  body = JSON.stringify(se_CancelReplicationTaskAssessmentRunMessage(input, context));
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
  body = JSON.stringify(se_CreateEndpointMessage(input, context));
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
  body = JSON.stringify(se_CreateEventSubscriptionMessage(input, context));
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
  body = JSON.stringify(se_CreateFleetAdvisorCollectorRequest(input, context));
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
  body = JSON.stringify(se_CreateReplicationInstanceMessage(input, context));
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
  body = JSON.stringify(se_CreateReplicationSubnetGroupMessage(input, context));
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
  body = JSON.stringify(se_DeleteCertificateMessage(input, context));
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
  body = JSON.stringify(se_DeleteConnectionMessage(input, context));
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
  body = JSON.stringify(se_DeleteEndpointMessage(input, context));
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
  body = JSON.stringify(se_DeleteEventSubscriptionMessage(input, context));
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
  body = JSON.stringify(se_DeleteCollectorRequest(input, context));
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
  body = JSON.stringify(se_DeleteFleetAdvisorDatabasesRequest(input, context));
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
  body = JSON.stringify(se_DeleteReplicationInstanceMessage(input, context));
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
  body = JSON.stringify(se_DeleteReplicationSubnetGroupMessage(input, context));
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
  body = JSON.stringify(se_DeleteReplicationTaskMessage(input, context));
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
  body = JSON.stringify(se_DeleteReplicationTaskAssessmentRunMessage(input, context));
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
  body = JSON.stringify(se_DescribeAccountAttributesMessage(input, context));
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
  body = JSON.stringify(se_DescribeApplicableIndividualAssessmentsMessage(input, context));
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
  body = JSON.stringify(se_DescribeCertificatesMessage(input, context));
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
  body = JSON.stringify(se_DescribeConnectionsMessage(input, context));
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
  body = JSON.stringify(se_DescribeEndpointsMessage(input, context));
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
  body = JSON.stringify(se_DescribeEndpointSettingsMessage(input, context));
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
  body = JSON.stringify(se_DescribeEndpointTypesMessage(input, context));
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
  body = JSON.stringify(se_DescribeEventCategoriesMessage(input, context));
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
  body = JSON.stringify(se_DescribeEventSubscriptionsMessage(input, context));
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
  body = JSON.stringify(se_DescribeFleetAdvisorCollectorsRequest(input, context));
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
  body = JSON.stringify(se_DescribeFleetAdvisorDatabasesRequest(input, context));
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
  body = JSON.stringify(se_DescribeFleetAdvisorLsaAnalysisRequest(input, context));
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
  body = JSON.stringify(se_DescribeFleetAdvisorSchemaObjectSummaryRequest(input, context));
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
  body = JSON.stringify(se_DescribeFleetAdvisorSchemasRequest(input, context));
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
  body = JSON.stringify(se_DescribeOrderableReplicationInstancesMessage(input, context));
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
  body = JSON.stringify(se_DescribePendingMaintenanceActionsMessage(input, context));
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
  body = JSON.stringify(se_DescribeRecommendationLimitationsRequest(input, context));
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
  body = JSON.stringify(se_DescribeRecommendationsRequest(input, context));
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
  body = JSON.stringify(se_DescribeRefreshSchemasStatusMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationInstancesMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationInstanceTaskLogsMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationSubnetGroupsMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationTaskAssessmentResultsMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationTaskAssessmentRunsMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationTaskIndividualAssessmentsMessage(input, context));
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
  body = JSON.stringify(se_DescribeReplicationTasksMessage(input, context));
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
  body = JSON.stringify(se_DescribeSchemasMessage(input, context));
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
  body = JSON.stringify(se_DescribeTableStatisticsMessage(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceMessage(input, context));
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
  body = JSON.stringify(se_ModifyEndpointMessage(input, context));
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
  body = JSON.stringify(se_ModifyEventSubscriptionMessage(input, context));
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
  body = JSON.stringify(se_ModifyReplicationInstanceMessage(input, context));
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
  body = JSON.stringify(se_ModifyReplicationSubnetGroupMessage(input, context));
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
  body = JSON.stringify(se_MoveReplicationTaskMessage(input, context));
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
  body = JSON.stringify(se_RebootReplicationInstanceMessage(input, context));
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
  body = JSON.stringify(se_RefreshSchemasMessage(input, context));
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
  body = JSON.stringify(se_ReloadTablesMessage(input, context));
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
  body = JSON.stringify(se_RemoveTagsFromResourceMessage(input, context));
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
  body = JSON.stringify(se_StartRecommendationsRequest(input, context));
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
  body = JSON.stringify(se_StartReplicationTaskAssessmentMessage(input, context));
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
  body = JSON.stringify(se_StartReplicationTaskAssessmentRunMessage(input, context));
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
  body = JSON.stringify(se_StopReplicationTaskMessage(input, context));
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
  body = JSON.stringify(se_TestConnectionMessage(input, context));
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
  body = JSON.stringify(se_UpdateSubscriptionsToEventBridgeMessage(input, context));
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
  contents = de_AddTagsToResourceResponse(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchStartRecommendationsResponse(data, context);
  const response: BatchStartRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateEventSubscriptionResponse(data, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateFleetAdvisorCollectorResponse(data, context);
  const response: CreateFleetAdvisorCollectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateReplicationSubnetGroupResponse(data, context);
  const response: CreateReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteEventSubscriptionResponse(data, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFleetAdvisorDatabasesResponse(data, context);
  const response: DeleteFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteReplicationSubnetGroupResponse(data, context);
  const response: DeleteReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeAccountAttributesResponse(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_DescribeApplicableIndividualAssessmentsResponse(data, context);
  const response: DescribeApplicableIndividualAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeConnectionsResponse(data, context);
  const response: DescribeConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeEndpointSettingsResponse(data, context);
  const response: DescribeEndpointSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_DescribeEndpointTypesResponse(data, context);
  const response: DescribeEndpointTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_DescribeEventCategoriesResponse(data, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_DescribeEventSubscriptionsResponse(data, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetAdvisorCollectorsResponse(data, context);
  const response: DescribeFleetAdvisorCollectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetAdvisorDatabasesResponse(data, context);
  const response: DescribeFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetAdvisorLsaAnalysisResponse(data, context);
  const response: DescribeFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFleetAdvisorSchemaObjectSummaryResponse(data, context);
  const response: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeOrderableReplicationInstancesResponse(data, context);
  const response: DescribeOrderableReplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeRecommendationLimitationsResponse(data, context);
  const response: DescribeRecommendationLimitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeReplicationInstanceTaskLogsResponse(data, context);
  const response: DescribeReplicationInstanceTaskLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeReplicationSubnetGroupsResponse(data, context);
  const response: DescribeReplicationSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeSchemasResponse(data, context);
  const response: DescribeSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ModifyEndpointResponse(data, context);
  const response: ModifyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ModifyEventSubscriptionResponse(data, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ModifyReplicationSubnetGroupResponse(data, context);
  const response: ModifyReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ReloadTablesResponse(data, context);
  const response: ReloadTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_RemoveTagsFromResourceResponse(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_RunFleetAdvisorLsaAnalysisResponse(data, context);
  const response: RunFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TestConnectionResponse(data, context);
  const response: TestConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateSubscriptionsToEventBridgeResponse(data, context);
  const response: UpdateSubscriptionsToEventBridgeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedFaultRes
 */
const de_AccessDeniedFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedFault(body, context);
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
  const deserialized: any = de_CollectorNotFoundFault(body, context);
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
  const deserialized: any = de_InsufficientResourceCapacityFault(body, context);
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
  const deserialized: any = de_InvalidCertificateFault(body, context);
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
  const deserialized: any = de_InvalidOperationFault(body, context);
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
  const deserialized: any = de_InvalidResourceStateFault(body, context);
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
  const deserialized: any = de_InvalidSubnet(body, context);
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
  const deserialized: any = de_KMSAccessDeniedFault(body, context);
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
  const deserialized: any = de_KMSDisabledFault(body, context);
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
  const deserialized: any = de_KMSFault(body, context);
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
  const deserialized: any = de_KMSInvalidStateFault(body, context);
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
  const deserialized: any = de_KMSKeyNotAccessibleFault(body, context);
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
  const deserialized: any = de_KMSNotFoundFault(body, context);
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
  const deserialized: any = de_KMSThrottlingFault(body, context);
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
  const deserialized: any = de_ReplicationSubnetGroupDoesNotCoverEnoughAZs(body, context);
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
  const deserialized: any = de_ResourceAlreadyExistsFault(body, context);
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
  const deserialized: any = de_ResourceNotFoundFault(body, context);
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
  const deserialized: any = de_ResourceQuotaExceededFault(body, context);
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
  const deserialized: any = de_S3AccessDeniedFault(body, context);
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
  const deserialized: any = de_S3ResourceNotFoundFault(body, context);
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
  const deserialized: any = de_SNSInvalidTopicFault(body, context);
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
  const deserialized: any = de_SNSNoAuthorizationFault(body, context);
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
  const deserialized: any = de_StorageQuotaExceededFault(body, context);
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
  const deserialized: any = de_SubnetAlreadyInUse(body, context);
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
  const deserialized: any = de_UpgradeDependencyFailureFault(body, context);
  const exception = new UpgradeDependencyFailureFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsToResourceMessage
 */
const se_AddTagsToResourceMessage = (input: AddTagsToResourceMessage, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1ApplyPendingMaintenanceActionMessage
 */
const se_ApplyPendingMaintenanceActionMessage = (
  input: ApplyPendingMaintenanceActionMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyAction != null && { ApplyAction: input.ApplyAction }),
    ...(input.OptInType != null && { OptInType: input.OptInType }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchStartRecommendationsRequest
 */
const se_BatchStartRecommendationsRequest = (input: BatchStartRecommendationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: se_StartRecommendationsRequestEntryList(input.Data, context) }),
  };
};

/**
 * serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage
 */
const se_CancelReplicationTaskAssessmentRunMessage = (
  input: CancelReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskAssessmentRunArn != null && {
      ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }),
  };
};

/**
 * serializeAws_json1_1CreateEndpointMessage
 */
const se_CreateEndpointMessage = (input: CreateEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DmsTransferSettings != null && {
      DmsTransferSettings: se_DmsTransferSettings(input.DmsTransferSettings, context),
    }),
    ...(input.DocDbSettings != null && { DocDbSettings: se_DocDbSettings(input.DocDbSettings, context) }),
    ...(input.DynamoDbSettings != null && { DynamoDbSettings: se_DynamoDbSettings(input.DynamoDbSettings, context) }),
    ...(input.ElasticsearchSettings != null && {
      ElasticsearchSettings: se_ElasticsearchSettings(input.ElasticsearchSettings, context),
    }),
    ...(input.EndpointIdentifier != null && { EndpointIdentifier: input.EndpointIdentifier }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.ExternalTableDefinition != null && { ExternalTableDefinition: input.ExternalTableDefinition }),
    ...(input.ExtraConnectionAttributes != null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
    ...(input.GcpMySQLSettings != null && { GcpMySQLSettings: se_GcpMySQLSettings(input.GcpMySQLSettings, context) }),
    ...(input.IBMDb2Settings != null && { IBMDb2Settings: se_IBMDb2Settings(input.IBMDb2Settings, context) }),
    ...(input.KafkaSettings != null && { KafkaSettings: se_KafkaSettings(input.KafkaSettings, context) }),
    ...(input.KinesisSettings != null && { KinesisSettings: se_KinesisSettings(input.KinesisSettings, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MicrosoftSQLServerSettings != null && {
      MicrosoftSQLServerSettings: se_MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
    }),
    ...(input.MongoDbSettings != null && { MongoDbSettings: se_MongoDbSettings(input.MongoDbSettings, context) }),
    ...(input.MySQLSettings != null && { MySQLSettings: se_MySQLSettings(input.MySQLSettings, context) }),
    ...(input.NeptuneSettings != null && { NeptuneSettings: se_NeptuneSettings(input.NeptuneSettings, context) }),
    ...(input.OracleSettings != null && { OracleSettings: se_OracleSettings(input.OracleSettings, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PostgreSQLSettings != null && {
      PostgreSQLSettings: se_PostgreSQLSettings(input.PostgreSQLSettings, context),
    }),
    ...(input.RedisSettings != null && { RedisSettings: se_RedisSettings(input.RedisSettings, context) }),
    ...(input.RedshiftSettings != null && { RedshiftSettings: se_RedshiftSettings(input.RedshiftSettings, context) }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.S3Settings != null && { S3Settings: se_S3Settings(input.S3Settings, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.SslMode != null && { SslMode: input.SslMode }),
    ...(input.SybaseSettings != null && { SybaseSettings: se_SybaseSettings(input.SybaseSettings, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1CreateEventSubscriptionMessage
 */
const se_CreateEventSubscriptionMessage = (input: CreateEventSubscriptionMessage, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventCategories != null && { EventCategories: se_EventCategoriesList(input.EventCategories, context) }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceIds != null && { SourceIds: se_SourceIdsList(input.SourceIds, context) }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFleetAdvisorCollectorRequest
 */
const se_CreateFleetAdvisorCollectorRequest = (
  input: CreateFleetAdvisorCollectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CollectorName != null && { CollectorName: input.CollectorName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1CreateReplicationInstanceMessage
 */
const se_CreateReplicationInstanceMessage = (input: CreateReplicationInstanceMessage, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AutoMinorVersionUpgrade != null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.DnsNameServers != null && { DnsNameServers: input.DnsNameServers }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MultiAZ != null && { MultiAZ: input.MultiAZ }),
    ...(input.NetworkType != null && { NetworkType: input.NetworkType }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.PubliclyAccessible != null && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.ReplicationInstanceClass != null && { ReplicationInstanceClass: input.ReplicationInstanceClass }),
    ...(input.ReplicationInstanceIdentifier != null && {
      ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
    }),
    ...(input.ReplicationSubnetGroupIdentifier != null && {
      ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcSecurityGroupIds != null && {
      VpcSecurityGroupIds: se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateReplicationSubnetGroupMessage
 */
const se_CreateReplicationSubnetGroupMessage = (
  input: CreateReplicationSubnetGroupMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationSubnetGroupDescription != null && {
      ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
    }),
    ...(input.ReplicationSubnetGroupIdentifier != null && {
      ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateReplicationTaskMessage
 */
const se_CreateReplicationTaskMessage = (input: CreateReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.CdcStartPosition != null && { CdcStartPosition: input.CdcStartPosition }),
    ...(input.CdcStartTime != null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
    ...(input.CdcStopPosition != null && { CdcStopPosition: input.CdcStopPosition }),
    ...(input.MigrationType != null && { MigrationType: input.MigrationType }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    ...(input.ReplicationTaskIdentifier != null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier }),
    ...(input.ReplicationTaskSettings != null && { ReplicationTaskSettings: input.ReplicationTaskSettings }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.SourceEndpointArn != null && { SourceEndpointArn: input.SourceEndpointArn }),
    ...(input.TableMappings != null && { TableMappings: input.TableMappings }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetEndpointArn != null && { TargetEndpointArn: input.TargetEndpointArn }),
    ...(input.TaskData != null && { TaskData: input.TaskData }),
  };
};

/**
 * serializeAws_json1_1DeleteCertificateMessage
 */
const se_DeleteCertificateMessage = (input: DeleteCertificateMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1DeleteCollectorRequest
 */
const se_DeleteCollectorRequest = (input: DeleteCollectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectorReferencedId != null && { CollectorReferencedId: input.CollectorReferencedId }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectionMessage
 */
const se_DeleteConnectionMessage = (input: DeleteConnectionMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEndpointMessage
 */
const se_DeleteEndpointMessage = (input: DeleteEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEventSubscriptionMessage
 */
const se_DeleteEventSubscriptionMessage = (input: DeleteEventSubscriptionMessage, context: __SerdeContext): any => {
  return {
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

/**
 * serializeAws_json1_1DeleteFleetAdvisorDatabasesRequest
 */
const se_DeleteFleetAdvisorDatabasesRequest = (
  input: DeleteFleetAdvisorDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseIds != null && { DatabaseIds: se_StringList(input.DatabaseIds, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteReplicationInstanceMessage
 */
const se_DeleteReplicationInstanceMessage = (input: DeleteReplicationInstanceMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteReplicationSubnetGroupMessage
 */
const se_DeleteReplicationSubnetGroupMessage = (
  input: DeleteReplicationSubnetGroupMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationSubnetGroupIdentifier != null && {
      ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage
 */
const se_DeleteReplicationTaskAssessmentRunMessage = (
  input: DeleteReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskAssessmentRunArn != null && {
      ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteReplicationTaskMessage
 */
const se_DeleteReplicationTaskMessage = (input: DeleteReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountAttributesMessage
 */
const se_DescribeAccountAttributesMessage = (input: DescribeAccountAttributesMessage, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage
 */
const se_DescribeApplicableIndividualAssessmentsMessage = (
  input: DescribeApplicableIndividualAssessmentsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.MigrationType != null && { MigrationType: input.MigrationType }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.SourceEngineName != null && { SourceEngineName: input.SourceEngineName }),
    ...(input.TargetEngineName != null && { TargetEngineName: input.TargetEngineName }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificatesMessage
 */
const se_DescribeCertificatesMessage = (input: DescribeCertificatesMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionsMessage
 */
const se_DescribeConnectionsMessage = (input: DescribeConnectionsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointSettingsMessage
 */
const se_DescribeEndpointSettingsMessage = (input: DescribeEndpointSettingsMessage, context: __SerdeContext): any => {
  return {
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointsMessage
 */
const se_DescribeEndpointsMessage = (input: DescribeEndpointsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointTypesMessage
 */
const se_DescribeEndpointTypesMessage = (input: DescribeEndpointTypesMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeEventCategoriesMessage
 */
const se_DescribeEventCategoriesMessage = (input: DescribeEventCategoriesMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsMessage
 */
const se_DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventCategories != null && { EventCategories: se_EventCategoriesList(input.EventCategories, context) }),
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.SourceIdentifier != null && { SourceIdentifier: input.SourceIdentifier }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DescribeEventSubscriptionsMessage
 */
const se_DescribeEventSubscriptionsMessage = (
  input: DescribeEventSubscriptionsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorCollectorsRequest
 */
const se_DescribeFleetAdvisorCollectorsRequest = (
  input: DescribeFleetAdvisorCollectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorDatabasesRequest
 */
const se_DescribeFleetAdvisorDatabasesRequest = (
  input: DescribeFleetAdvisorDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisRequest
 */
const se_DescribeFleetAdvisorLsaAnalysisRequest = (
  input: DescribeFleetAdvisorLsaAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryRequest
 */
const se_DescribeFleetAdvisorSchemaObjectSummaryRequest = (
  input: DescribeFleetAdvisorSchemaObjectSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetAdvisorSchemasRequest
 */
const se_DescribeFleetAdvisorSchemasRequest = (
  input: DescribeFleetAdvisorSchemasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeOrderableReplicationInstancesMessage
 */
const se_DescribeOrderableReplicationInstancesMessage = (
  input: DescribeOrderableReplicationInstancesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribePendingMaintenanceActionsMessage
 */
const se_DescribePendingMaintenanceActionsMessage = (
  input: DescribePendingMaintenanceActionsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeRecommendationLimitationsRequest
 */
const se_DescribeRecommendationLimitationsRequest = (
  input: DescribeRecommendationLimitationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeRecommendationsRequest
 */
const se_DescribeRecommendationsRequest = (input: DescribeRecommendationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeRefreshSchemasStatusMessage
 */
const se_DescribeRefreshSchemasStatusMessage = (
  input: DescribeRefreshSchemasStatusMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationInstancesMessage
 */
const se_DescribeReplicationInstancesMessage = (
  input: DescribeReplicationInstancesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage
 */
const se_DescribeReplicationInstanceTaskLogsMessage = (
  input: DescribeReplicationInstanceTaskLogsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationSubnetGroupsMessage
 */
const se_DescribeReplicationSubnetGroupsMessage = (
  input: DescribeReplicationSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage
 */
const se_DescribeReplicationTaskAssessmentResultsMessage = (
  input: DescribeReplicationTaskAssessmentResultsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage
 */
const se_DescribeReplicationTaskAssessmentRunsMessage = (
  input: DescribeReplicationTaskAssessmentRunsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage
 */
const se_DescribeReplicationTaskIndividualAssessmentsMessage = (
  input: DescribeReplicationTaskIndividualAssessmentsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeReplicationTasksMessage
 */
const se_DescribeReplicationTasksMessage = (input: DescribeReplicationTasksMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.WithoutSettings != null && { WithoutSettings: input.WithoutSettings }),
  };
};

/**
 * serializeAws_json1_1DescribeSchemasMessage
 */
const se_DescribeSchemasMessage = (input: DescribeSchemasMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

/**
 * serializeAws_json1_1DescribeTableStatisticsMessage
 */
const se_DescribeTableStatisticsMessage = (input: DescribeTableStatisticsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

/**
 * serializeAws_json1_1DmsTransferSettings
 */
const se_DmsTransferSettings = (input: DmsTransferSettings, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1DocDbSettings
 */
const se_DocDbSettings = (input: DocDbSettings, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DocsToInvestigate != null && { DocsToInvestigate: input.DocsToInvestigate }),
    ...(input.ExtractDocId != null && { ExtractDocId: input.ExtractDocId }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.NestingLevel != null && { NestingLevel: input.NestingLevel }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1DynamoDbSettings
 */
const se_DynamoDbSettings = (input: DynamoDbSettings, context: __SerdeContext): any => {
  return {
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1ElasticsearchSettings
 */
const se_ElasticsearchSettings = (input: ElasticsearchSettings, context: __SerdeContext): any => {
  return {
    ...(input.EndpointUri != null && { EndpointUri: input.EndpointUri }),
    ...(input.ErrorRetryDuration != null && { ErrorRetryDuration: input.ErrorRetryDuration }),
    ...(input.FullLoadErrorPercentage != null && { FullLoadErrorPercentage: input.FullLoadErrorPercentage }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.UseNewMappingType != null && { UseNewMappingType: input.UseNewMappingType }),
  };
};

/**
 * serializeAws_json1_1EventCategoriesList
 */
const se_EventCategoriesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExcludeTestList
 */
const se_ExcludeTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GcpMySQLSettings
 */
const se_GcpMySQLSettings = (input: GcpMySQLSettings, context: __SerdeContext): any => {
  return {
    ...(input.AfterConnectScript != null && { AfterConnectScript: input.AfterConnectScript }),
    ...(input.CleanSourceMetadataOnMismatch != null && {
      CleanSourceMetadataOnMismatch: input.CleanSourceMetadataOnMismatch,
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.EventsPollInterval != null && { EventsPollInterval: input.EventsPollInterval }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.ParallelLoadThreads != null && { ParallelLoadThreads: input.ParallelLoadThreads }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServerTimezone != null && { ServerTimezone: input.ServerTimezone }),
    ...(input.TargetDbType != null && { TargetDbType: input.TargetDbType }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1IBMDb2Settings
 */
const se_IBMDb2Settings = (input: IBMDb2Settings, context: __SerdeContext): any => {
  return {
    ...(input.CurrentLsn != null && { CurrentLsn: input.CurrentLsn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxKBytesPerRead != null && { MaxKBytesPerRead: input.MaxKBytesPerRead }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.SetDataCaptureChanges != null && { SetDataCaptureChanges: input.SetDataCaptureChanges }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ImportCertificateMessage
 */
const se_ImportCertificateMessage = (input: ImportCertificateMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateIdentifier != null && { CertificateIdentifier: input.CertificateIdentifier }),
    ...(input.CertificatePem != null && { CertificatePem: input.CertificatePem }),
    ...(input.CertificateWallet != null && { CertificateWallet: context.base64Encoder(input.CertificateWallet) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1IncludeTestList
 */
const se_IncludeTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1KafkaSettings
 */
const se_KafkaSettings = (input: KafkaSettings, context: __SerdeContext): any => {
  return {
    ...(input.Broker != null && { Broker: input.Broker }),
    ...(input.IncludeControlDetails != null && { IncludeControlDetails: input.IncludeControlDetails }),
    ...(input.IncludeNullAndEmpty != null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty }),
    ...(input.IncludePartitionValue != null && { IncludePartitionValue: input.IncludePartitionValue }),
    ...(input.IncludeTableAlterOperations != null && {
      IncludeTableAlterOperations: input.IncludeTableAlterOperations,
    }),
    ...(input.IncludeTransactionDetails != null && { IncludeTransactionDetails: input.IncludeTransactionDetails }),
    ...(input.MessageFormat != null && { MessageFormat: input.MessageFormat }),
    ...(input.MessageMaxBytes != null && { MessageMaxBytes: input.MessageMaxBytes }),
    ...(input.NoHexPrefix != null && { NoHexPrefix: input.NoHexPrefix }),
    ...(input.PartitionIncludeSchemaTable != null && {
      PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable,
    }),
    ...(input.SaslMechanism != null && { SaslMechanism: input.SaslMechanism }),
    ...(input.SaslPassword != null && { SaslPassword: input.SaslPassword }),
    ...(input.SaslUsername != null && { SaslUsername: input.SaslUsername }),
    ...(input.SecurityProtocol != null && { SecurityProtocol: input.SecurityProtocol }),
    ...(input.SslCaCertificateArn != null && { SslCaCertificateArn: input.SslCaCertificateArn }),
    ...(input.SslClientCertificateArn != null && { SslClientCertificateArn: input.SslClientCertificateArn }),
    ...(input.SslClientKeyArn != null && { SslClientKeyArn: input.SslClientKeyArn }),
    ...(input.SslClientKeyPassword != null && { SslClientKeyPassword: input.SslClientKeyPassword }),
    ...(input.Topic != null && { Topic: input.Topic }),
  };
};

/**
 * serializeAws_json1_1KeyList
 */
const se_KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1KinesisSettings
 */
const se_KinesisSettings = (input: KinesisSettings, context: __SerdeContext): any => {
  return {
    ...(input.IncludeControlDetails != null && { IncludeControlDetails: input.IncludeControlDetails }),
    ...(input.IncludeNullAndEmpty != null && { IncludeNullAndEmpty: input.IncludeNullAndEmpty }),
    ...(input.IncludePartitionValue != null && { IncludePartitionValue: input.IncludePartitionValue }),
    ...(input.IncludeTableAlterOperations != null && {
      IncludeTableAlterOperations: input.IncludeTableAlterOperations,
    }),
    ...(input.IncludeTransactionDetails != null && { IncludeTransactionDetails: input.IncludeTransactionDetails }),
    ...(input.MessageFormat != null && { MessageFormat: input.MessageFormat }),
    ...(input.NoHexPrefix != null && { NoHexPrefix: input.NoHexPrefix }),
    ...(input.PartitionIncludeSchemaTable != null && {
      PartitionIncludeSchemaTable: input.PartitionIncludeSchemaTable,
    }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceMessage
 */
const se_ListTagsForResourceMessage = (input: ListTagsForResourceMessage, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceArnList != null && { ResourceArnList: se_ArnList(input.ResourceArnList, context) }),
  };
};

/**
 * serializeAws_json1_1MicrosoftSQLServerSettings
 */
const se_MicrosoftSQLServerSettings = (input: MicrosoftSQLServerSettings, context: __SerdeContext): any => {
  return {
    ...(input.BcpPacketSize != null && { BcpPacketSize: input.BcpPacketSize }),
    ...(input.ControlTablesFileGroup != null && { ControlTablesFileGroup: input.ControlTablesFileGroup }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.ForceLobLookup != null && { ForceLobLookup: input.ForceLobLookup }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.QuerySingleAlwaysOnNode != null && { QuerySingleAlwaysOnNode: input.QuerySingleAlwaysOnNode }),
    ...(input.ReadBackupOnly != null && { ReadBackupOnly: input.ReadBackupOnly }),
    ...(input.SafeguardPolicy != null && { SafeguardPolicy: input.SafeguardPolicy }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.TlogAccessMode != null && { TlogAccessMode: input.TlogAccessMode }),
    ...(input.TrimSpaceInChar != null && { TrimSpaceInChar: input.TrimSpaceInChar }),
    ...(input.UseBcpFullLoad != null && { UseBcpFullLoad: input.UseBcpFullLoad }),
    ...(input.UseThirdPartyBackupDevice != null && { UseThirdPartyBackupDevice: input.UseThirdPartyBackupDevice }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ModifyEndpointMessage
 */
const se_ModifyEndpointMessage = (input: ModifyEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DmsTransferSettings != null && {
      DmsTransferSettings: se_DmsTransferSettings(input.DmsTransferSettings, context),
    }),
    ...(input.DocDbSettings != null && { DocDbSettings: se_DocDbSettings(input.DocDbSettings, context) }),
    ...(input.DynamoDbSettings != null && { DynamoDbSettings: se_DynamoDbSettings(input.DynamoDbSettings, context) }),
    ...(input.ElasticsearchSettings != null && {
      ElasticsearchSettings: se_ElasticsearchSettings(input.ElasticsearchSettings, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.EndpointIdentifier != null && { EndpointIdentifier: input.EndpointIdentifier }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.ExactSettings != null && { ExactSettings: input.ExactSettings }),
    ...(input.ExternalTableDefinition != null && { ExternalTableDefinition: input.ExternalTableDefinition }),
    ...(input.ExtraConnectionAttributes != null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
    ...(input.GcpMySQLSettings != null && { GcpMySQLSettings: se_GcpMySQLSettings(input.GcpMySQLSettings, context) }),
    ...(input.IBMDb2Settings != null && { IBMDb2Settings: se_IBMDb2Settings(input.IBMDb2Settings, context) }),
    ...(input.KafkaSettings != null && { KafkaSettings: se_KafkaSettings(input.KafkaSettings, context) }),
    ...(input.KinesisSettings != null && { KinesisSettings: se_KinesisSettings(input.KinesisSettings, context) }),
    ...(input.MicrosoftSQLServerSettings != null && {
      MicrosoftSQLServerSettings: se_MicrosoftSQLServerSettings(input.MicrosoftSQLServerSettings, context),
    }),
    ...(input.MongoDbSettings != null && { MongoDbSettings: se_MongoDbSettings(input.MongoDbSettings, context) }),
    ...(input.MySQLSettings != null && { MySQLSettings: se_MySQLSettings(input.MySQLSettings, context) }),
    ...(input.NeptuneSettings != null && { NeptuneSettings: se_NeptuneSettings(input.NeptuneSettings, context) }),
    ...(input.OracleSettings != null && { OracleSettings: se_OracleSettings(input.OracleSettings, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PostgreSQLSettings != null && {
      PostgreSQLSettings: se_PostgreSQLSettings(input.PostgreSQLSettings, context),
    }),
    ...(input.RedisSettings != null && { RedisSettings: se_RedisSettings(input.RedisSettings, context) }),
    ...(input.RedshiftSettings != null && { RedshiftSettings: se_RedshiftSettings(input.RedshiftSettings, context) }),
    ...(input.S3Settings != null && { S3Settings: se_S3Settings(input.S3Settings, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.SslMode != null && { SslMode: input.SslMode }),
    ...(input.SybaseSettings != null && { SybaseSettings: se_SybaseSettings(input.SybaseSettings, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ModifyEventSubscriptionMessage
 */
const se_ModifyEventSubscriptionMessage = (input: ModifyEventSubscriptionMessage, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventCategories != null && { EventCategories: se_EventCategoriesList(input.EventCategories, context) }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

/**
 * serializeAws_json1_1ModifyReplicationInstanceMessage
 */
const se_ModifyReplicationInstanceMessage = (input: ModifyReplicationInstanceMessage, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AllowMajorVersionUpgrade != null && { AllowMajorVersionUpgrade: input.AllowMajorVersionUpgrade }),
    ...(input.ApplyImmediately != null && { ApplyImmediately: input.ApplyImmediately }),
    ...(input.AutoMinorVersionUpgrade != null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.MultiAZ != null && { MultiAZ: input.MultiAZ }),
    ...(input.NetworkType != null && { NetworkType: input.NetworkType }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
    ...(input.ReplicationInstanceClass != null && { ReplicationInstanceClass: input.ReplicationInstanceClass }),
    ...(input.ReplicationInstanceIdentifier != null && {
      ReplicationInstanceIdentifier: input.ReplicationInstanceIdentifier,
    }),
    ...(input.VpcSecurityGroupIds != null && {
      VpcSecurityGroupIds: se_VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyReplicationSubnetGroupMessage
 */
const se_ModifyReplicationSubnetGroupMessage = (
  input: ModifyReplicationSubnetGroupMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationSubnetGroupDescription != null && {
      ReplicationSubnetGroupDescription: input.ReplicationSubnetGroupDescription,
    }),
    ...(input.ReplicationSubnetGroupIdentifier != null && {
      ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1ModifyReplicationTaskMessage
 */
const se_ModifyReplicationTaskMessage = (input: ModifyReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.CdcStartPosition != null && { CdcStartPosition: input.CdcStartPosition }),
    ...(input.CdcStartTime != null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
    ...(input.CdcStopPosition != null && { CdcStopPosition: input.CdcStopPosition }),
    ...(input.MigrationType != null && { MigrationType: input.MigrationType }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.ReplicationTaskIdentifier != null && { ReplicationTaskIdentifier: input.ReplicationTaskIdentifier }),
    ...(input.ReplicationTaskSettings != null && { ReplicationTaskSettings: input.ReplicationTaskSettings }),
    ...(input.TableMappings != null && { TableMappings: input.TableMappings }),
    ...(input.TaskData != null && { TaskData: input.TaskData }),
  };
};

/**
 * serializeAws_json1_1MongoDbSettings
 */
const se_MongoDbSettings = (input: MongoDbSettings, context: __SerdeContext): any => {
  return {
    ...(input.AuthMechanism != null && { AuthMechanism: input.AuthMechanism }),
    ...(input.AuthSource != null && { AuthSource: input.AuthSource }),
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DocsToInvestigate != null && { DocsToInvestigate: input.DocsToInvestigate }),
    ...(input.ExtractDocId != null && { ExtractDocId: input.ExtractDocId }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.NestingLevel != null && { NestingLevel: input.NestingLevel }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1MoveReplicationTaskMessage
 */
const se_MoveReplicationTaskMessage = (input: MoveReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.TargetReplicationInstanceArn != null && {
      TargetReplicationInstanceArn: input.TargetReplicationInstanceArn,
    }),
  };
};

/**
 * serializeAws_json1_1MySQLSettings
 */
const se_MySQLSettings = (input: MySQLSettings, context: __SerdeContext): any => {
  return {
    ...(input.AfterConnectScript != null && { AfterConnectScript: input.AfterConnectScript }),
    ...(input.CleanSourceMetadataOnMismatch != null && {
      CleanSourceMetadataOnMismatch: input.CleanSourceMetadataOnMismatch,
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.EventsPollInterval != null && { EventsPollInterval: input.EventsPollInterval }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.ParallelLoadThreads != null && { ParallelLoadThreads: input.ParallelLoadThreads }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServerTimezone != null && { ServerTimezone: input.ServerTimezone }),
    ...(input.TargetDbType != null && { TargetDbType: input.TargetDbType }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1NeptuneSettings
 */
const se_NeptuneSettings = (input: NeptuneSettings, context: __SerdeContext): any => {
  return {
    ...(input.ErrorRetryDuration != null && { ErrorRetryDuration: input.ErrorRetryDuration }),
    ...(input.IamAuthEnabled != null && { IamAuthEnabled: input.IamAuthEnabled }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.MaxRetryCount != null && { MaxRetryCount: input.MaxRetryCount }),
    ...(input.S3BucketFolder != null && { S3BucketFolder: input.S3BucketFolder }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1OracleSettings
 */
const se_OracleSettings = (input: OracleSettings, context: __SerdeContext): any => {
  return {
    ...(input.AccessAlternateDirectly != null && { AccessAlternateDirectly: input.AccessAlternateDirectly }),
    ...(input.AddSupplementalLogging != null && { AddSupplementalLogging: input.AddSupplementalLogging }),
    ...(input.AdditionalArchivedLogDestId != null && {
      AdditionalArchivedLogDestId: input.AdditionalArchivedLogDestId,
    }),
    ...(input.AllowSelectNestedTables != null && { AllowSelectNestedTables: input.AllowSelectNestedTables }),
    ...(input.ArchivedLogDestId != null && { ArchivedLogDestId: input.ArchivedLogDestId }),
    ...(input.ArchivedLogsOnly != null && { ArchivedLogsOnly: input.ArchivedLogsOnly }),
    ...(input.AsmPassword != null && { AsmPassword: input.AsmPassword }),
    ...(input.AsmServer != null && { AsmServer: input.AsmServer }),
    ...(input.AsmUser != null && { AsmUser: input.AsmUser }),
    ...(input.CharLengthSemantics != null && { CharLengthSemantics: input.CharLengthSemantics }),
    ...(input.ConvertTimestampWithZoneToUTC != null && {
      ConvertTimestampWithZoneToUTC: input.ConvertTimestampWithZoneToUTC,
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DirectPathNoLog != null && { DirectPathNoLog: input.DirectPathNoLog }),
    ...(input.DirectPathParallelLoad != null && { DirectPathParallelLoad: input.DirectPathParallelLoad }),
    ...(input.EnableHomogenousTablespace != null && { EnableHomogenousTablespace: input.EnableHomogenousTablespace }),
    ...(input.ExtraArchivedLogDestIds != null && {
      ExtraArchivedLogDestIds: se_IntegerList(input.ExtraArchivedLogDestIds, context),
    }),
    ...(input.FailTasksOnLobTruncation != null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation }),
    ...(input.NumberDatatypeScale != null && { NumberDatatypeScale: input.NumberDatatypeScale }),
    ...(input.OraclePathPrefix != null && { OraclePathPrefix: input.OraclePathPrefix }),
    ...(input.ParallelAsmReadThreads != null && { ParallelAsmReadThreads: input.ParallelAsmReadThreads }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.ReadAheadBlocks != null && { ReadAheadBlocks: input.ReadAheadBlocks }),
    ...(input.ReadTableSpaceName != null && { ReadTableSpaceName: input.ReadTableSpaceName }),
    ...(input.ReplacePathPrefix != null && { ReplacePathPrefix: input.ReplacePathPrefix }),
    ...(input.RetryInterval != null && { RetryInterval: input.RetryInterval }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerOracleAsmAccessRoleArn != null && {
      SecretsManagerOracleAsmAccessRoleArn: input.SecretsManagerOracleAsmAccessRoleArn,
    }),
    ...(input.SecretsManagerOracleAsmSecretId != null && {
      SecretsManagerOracleAsmSecretId: input.SecretsManagerOracleAsmSecretId,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.SecurityDbEncryption != null && { SecurityDbEncryption: input.SecurityDbEncryption }),
    ...(input.SecurityDbEncryptionName != null && { SecurityDbEncryptionName: input.SecurityDbEncryptionName }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.SpatialDataOptionToGeoJsonFunctionName != null && {
      SpatialDataOptionToGeoJsonFunctionName: input.SpatialDataOptionToGeoJsonFunctionName,
    }),
    ...(input.StandbyDelayTime != null && { StandbyDelayTime: input.StandbyDelayTime }),
    ...(input.TrimSpaceInChar != null && { TrimSpaceInChar: input.TrimSpaceInChar }),
    ...(input.UseAlternateFolderForOnline != null && {
      UseAlternateFolderForOnline: input.UseAlternateFolderForOnline,
    }),
    ...(input.UseBFile != null && { UseBFile: input.UseBFile }),
    ...(input.UseDirectPathFullLoad != null && { UseDirectPathFullLoad: input.UseDirectPathFullLoad }),
    ...(input.UseLogminerReader != null && { UseLogminerReader: input.UseLogminerReader }),
    ...(input.UsePathPrefix != null && { UsePathPrefix: input.UsePathPrefix }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1PostgreSQLSettings
 */
const se_PostgreSQLSettings = (input: PostgreSQLSettings, context: __SerdeContext): any => {
  return {
    ...(input.AfterConnectScript != null && { AfterConnectScript: input.AfterConnectScript }),
    ...(input.CaptureDdls != null && { CaptureDdls: input.CaptureDdls }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DdlArtifactsSchema != null && { DdlArtifactsSchema: input.DdlArtifactsSchema }),
    ...(input.ExecuteTimeout != null && { ExecuteTimeout: input.ExecuteTimeout }),
    ...(input.FailTasksOnLobTruncation != null && { FailTasksOnLobTruncation: input.FailTasksOnLobTruncation }),
    ...(input.HeartbeatEnable != null && { HeartbeatEnable: input.HeartbeatEnable }),
    ...(input.HeartbeatFrequency != null && { HeartbeatFrequency: input.HeartbeatFrequency }),
    ...(input.HeartbeatSchema != null && { HeartbeatSchema: input.HeartbeatSchema }),
    ...(input.MapBooleanAsBoolean != null && { MapBooleanAsBoolean: input.MapBooleanAsBoolean }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.PluginName != null && { PluginName: input.PluginName }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.SlotName != null && { SlotName: input.SlotName }),
    ...(input.TrimSpaceInChar != null && { TrimSpaceInChar: input.TrimSpaceInChar }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1RebootReplicationInstanceMessage
 */
const se_RebootReplicationInstanceMessage = (input: RebootReplicationInstanceMessage, context: __SerdeContext): any => {
  return {
    ...(input.ForceFailover != null && { ForceFailover: input.ForceFailover }),
    ...(input.ForcePlannedFailover != null && { ForcePlannedFailover: input.ForcePlannedFailover }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1RecommendationSettings
 */
const se_RecommendationSettings = (input: RecommendationSettings, context: __SerdeContext): any => {
  return {
    ...(input.InstanceSizingType != null && { InstanceSizingType: input.InstanceSizingType }),
    ...(input.WorkloadType != null && { WorkloadType: input.WorkloadType }),
  };
};

/**
 * serializeAws_json1_1RedisSettings
 */
const se_RedisSettings = (input: RedisSettings, context: __SerdeContext): any => {
  return {
    ...(input.AuthPassword != null && { AuthPassword: input.AuthPassword }),
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.AuthUserName != null && { AuthUserName: input.AuthUserName }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.SslCaCertificateArn != null && { SslCaCertificateArn: input.SslCaCertificateArn }),
    ...(input.SslSecurityProtocol != null && { SslSecurityProtocol: input.SslSecurityProtocol }),
  };
};

/**
 * serializeAws_json1_1RedshiftSettings
 */
const se_RedshiftSettings = (input: RedshiftSettings, context: __SerdeContext): any => {
  return {
    ...(input.AcceptAnyDate != null && { AcceptAnyDate: input.AcceptAnyDate }),
    ...(input.AfterConnectScript != null && { AfterConnectScript: input.AfterConnectScript }),
    ...(input.BucketFolder != null && { BucketFolder: input.BucketFolder }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.CaseSensitiveNames != null && { CaseSensitiveNames: input.CaseSensitiveNames }),
    ...(input.CompUpdate != null && { CompUpdate: input.CompUpdate }),
    ...(input.ConnectionTimeout != null && { ConnectionTimeout: input.ConnectionTimeout }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DateFormat != null && { DateFormat: input.DateFormat }),
    ...(input.EmptyAsNull != null && { EmptyAsNull: input.EmptyAsNull }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.ExplicitIds != null && { ExplicitIds: input.ExplicitIds }),
    ...(input.FileTransferUploadStreams != null && { FileTransferUploadStreams: input.FileTransferUploadStreams }),
    ...(input.LoadTimeout != null && { LoadTimeout: input.LoadTimeout }),
    ...(input.MapBooleanAsBoolean != null && { MapBooleanAsBoolean: input.MapBooleanAsBoolean }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.RemoveQuotes != null && { RemoveQuotes: input.RemoveQuotes }),
    ...(input.ReplaceChars != null && { ReplaceChars: input.ReplaceChars }),
    ...(input.ReplaceInvalidChars != null && { ReplaceInvalidChars: input.ReplaceInvalidChars }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServerSideEncryptionKmsKeyId != null && {
      ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
    }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.TimeFormat != null && { TimeFormat: input.TimeFormat }),
    ...(input.TrimBlanks != null && { TrimBlanks: input.TrimBlanks }),
    ...(input.TruncateColumns != null && { TruncateColumns: input.TruncateColumns }),
    ...(input.Username != null && { Username: input.Username }),
    ...(input.WriteBufferSize != null && { WriteBufferSize: input.WriteBufferSize }),
  };
};

/**
 * serializeAws_json1_1RefreshSchemasMessage
 */
const se_RefreshSchemasMessage = (input: RefreshSchemasMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1ReloadTablesMessage
 */
const se_ReloadTablesMessage = (input: ReloadTablesMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReloadOption != null && { ReloadOption: input.ReloadOption }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.TablesToReload != null && { TablesToReload: se_TableListToReload(input.TablesToReload, context) }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceMessage
 */
const se_RemoveTagsFromResourceMessage = (input: RemoveTagsFromResourceMessage, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_KeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1S3Settings
 */
const se_S3Settings = (input: S3Settings, context: __SerdeContext): any => {
  return {
    ...(input.AddColumnName != null && { AddColumnName: input.AddColumnName }),
    ...(input.AddTrailingPaddingCharacter != null && {
      AddTrailingPaddingCharacter: input.AddTrailingPaddingCharacter,
    }),
    ...(input.BucketFolder != null && { BucketFolder: input.BucketFolder }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.CannedAclForObjects != null && { CannedAclForObjects: input.CannedAclForObjects }),
    ...(input.CdcInsertsAndUpdates != null && { CdcInsertsAndUpdates: input.CdcInsertsAndUpdates }),
    ...(input.CdcInsertsOnly != null && { CdcInsertsOnly: input.CdcInsertsOnly }),
    ...(input.CdcMaxBatchInterval != null && { CdcMaxBatchInterval: input.CdcMaxBatchInterval }),
    ...(input.CdcMinFileSize != null && { CdcMinFileSize: input.CdcMinFileSize }),
    ...(input.CdcPath != null && { CdcPath: input.CdcPath }),
    ...(input.CompressionType != null && { CompressionType: input.CompressionType }),
    ...(input.CsvDelimiter != null && { CsvDelimiter: input.CsvDelimiter }),
    ...(input.CsvNoSupValue != null && { CsvNoSupValue: input.CsvNoSupValue }),
    ...(input.CsvNullValue != null && { CsvNullValue: input.CsvNullValue }),
    ...(input.CsvRowDelimiter != null && { CsvRowDelimiter: input.CsvRowDelimiter }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.DataPageSize != null && { DataPageSize: input.DataPageSize }),
    ...(input.DatePartitionDelimiter != null && { DatePartitionDelimiter: input.DatePartitionDelimiter }),
    ...(input.DatePartitionEnabled != null && { DatePartitionEnabled: input.DatePartitionEnabled }),
    ...(input.DatePartitionSequence != null && { DatePartitionSequence: input.DatePartitionSequence }),
    ...(input.DatePartitionTimezone != null && { DatePartitionTimezone: input.DatePartitionTimezone }),
    ...(input.DictPageSizeLimit != null && { DictPageSizeLimit: input.DictPageSizeLimit }),
    ...(input.EnableStatistics != null && { EnableStatistics: input.EnableStatistics }),
    ...(input.EncodingType != null && { EncodingType: input.EncodingType }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.ExpectedBucketOwner != null && { ExpectedBucketOwner: input.ExpectedBucketOwner }),
    ...(input.ExternalTableDefinition != null && { ExternalTableDefinition: input.ExternalTableDefinition }),
    ...(input.GlueCatalogGeneration != null && { GlueCatalogGeneration: input.GlueCatalogGeneration }),
    ...(input.IgnoreHeaderRows != null && { IgnoreHeaderRows: input.IgnoreHeaderRows }),
    ...(input.IncludeOpForFullLoad != null && { IncludeOpForFullLoad: input.IncludeOpForFullLoad }),
    ...(input.MaxFileSize != null && { MaxFileSize: input.MaxFileSize }),
    ...(input.ParquetTimestampInMillisecond != null && {
      ParquetTimestampInMillisecond: input.ParquetTimestampInMillisecond,
    }),
    ...(input.ParquetVersion != null && { ParquetVersion: input.ParquetVersion }),
    ...(input.PreserveTransactions != null && { PreserveTransactions: input.PreserveTransactions }),
    ...(input.Rfc4180 != null && { Rfc4180: input.Rfc4180 }),
    ...(input.RowGroupLength != null && { RowGroupLength: input.RowGroupLength }),
    ...(input.ServerSideEncryptionKmsKeyId != null && {
      ServerSideEncryptionKmsKeyId: input.ServerSideEncryptionKmsKeyId,
    }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.TimestampColumnName != null && { TimestampColumnName: input.TimestampColumnName }),
    ...(input.UseCsvNoSupValue != null && { UseCsvNoSupValue: input.UseCsvNoSupValue }),
    ...(input.UseTaskStartTimeForFullLoadTimestamp != null && {
      UseTaskStartTimeForFullLoadTimestamp: input.UseTaskStartTimeForFullLoadTimestamp,
    }),
  };
};

/**
 * serializeAws_json1_1SourceIdsList
 */
const se_SourceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartRecommendationsRequest
 */
const se_StartRecommendationsRequest = (input: StartRecommendationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseId != null && { DatabaseId: input.DatabaseId }),
    ...(input.Settings != null && { Settings: se_RecommendationSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1StartRecommendationsRequestEntry
 */
const se_StartRecommendationsRequestEntry = (input: StartRecommendationsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseId != null && { DatabaseId: input.DatabaseId }),
    ...(input.Settings != null && { Settings: se_RecommendationSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1StartRecommendationsRequestEntryList
 */
const se_StartRecommendationsRequestEntryList = (
  input: StartRecommendationsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartRecommendationsRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1StartReplicationTaskAssessmentMessage
 */
const se_StartReplicationTaskAssessmentMessage = (
  input: StartReplicationTaskAssessmentMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

/**
 * serializeAws_json1_1StartReplicationTaskAssessmentRunMessage
 */
const se_StartReplicationTaskAssessmentRunMessage = (
  input: StartReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssessmentRunName != null && { AssessmentRunName: input.AssessmentRunName }),
    ...(input.Exclude != null && { Exclude: se_ExcludeTestList(input.Exclude, context) }),
    ...(input.IncludeOnly != null && { IncludeOnly: se_IncludeTestList(input.IncludeOnly, context) }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.ResultEncryptionMode != null && { ResultEncryptionMode: input.ResultEncryptionMode }),
    ...(input.ResultKmsKeyArn != null && { ResultKmsKeyArn: input.ResultKmsKeyArn }),
    ...(input.ResultLocationBucket != null && { ResultLocationBucket: input.ResultLocationBucket }),
    ...(input.ResultLocationFolder != null && { ResultLocationFolder: input.ResultLocationFolder }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

/**
 * serializeAws_json1_1StartReplicationTaskMessage
 */
const se_StartReplicationTaskMessage = (input: StartReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.CdcStartPosition != null && { CdcStartPosition: input.CdcStartPosition }),
    ...(input.CdcStartTime != null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
    ...(input.CdcStopPosition != null && { CdcStopPosition: input.CdcStopPosition }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.StartReplicationTaskType != null && { StartReplicationTaskType: input.StartReplicationTaskType }),
  };
};

/**
 * serializeAws_json1_1StopReplicationTaskMessage
 */
const se_StopReplicationTaskMessage = (input: StopReplicationTaskMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIdentifierList
 */
const se_SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SybaseSettings
 */
const se_SybaseSettings = (input: SybaseSettings, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SecretsManagerAccessRoleArn != null && {
      SecretsManagerAccessRoleArn: input.SecretsManagerAccessRoleArn,
    }),
    ...(input.SecretsManagerSecretId != null && { SecretsManagerSecretId: input.SecretsManagerSecretId }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1TableListToReload
 */
const se_TableListToReload = (input: TableToReload[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TableToReload(entry, context);
    });
};

/**
 * serializeAws_json1_1TableToReload
 */
const se_TableToReload = (input: TableToReload, context: __SerdeContext): any => {
  return {
    ...(input.SchemaName != null && { SchemaName: input.SchemaName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TestConnectionMessage
 */
const se_TestConnectionMessage = (input: TestConnectionMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

/**
 * serializeAws_json1_1UpdateSubscriptionsToEventBridgeMessage
 */
const se_UpdateSubscriptionsToEventBridgeMessage = (
  input: UpdateSubscriptionsToEventBridgeMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForceMove != null && { ForceMove: input.ForceMove }),
  };
};

/**
 * serializeAws_json1_1VpcSecurityGroupIdList
 */
const se_VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AccessDeniedFault
 */
const de_AccessDeniedFault = (output: any, context: __SerdeContext): AccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountQuota
 */
const de_AccountQuota = (output: any, context: __SerdeContext): AccountQuota => {
  return {
    AccountQuotaName: __expectString(output.AccountQuotaName),
    Max: __expectLong(output.Max),
    Used: __expectLong(output.Used),
  } as any;
};

/**
 * deserializeAws_json1_1AccountQuotaList
 */
const de_AccountQuotaList = (output: any, context: __SerdeContext): AccountQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountQuota(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AddTagsToResourceResponse
 */
const de_AddTagsToResourceResponse = (output: any, context: __SerdeContext): AddTagsToResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ApplyPendingMaintenanceActionResponse
 */
const de_ApplyPendingMaintenanceActionResponse = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResponse => {
  return {
    ResourcePendingMaintenanceActions:
      output.ResourcePendingMaintenanceActions != null
        ? de_ResourcePendingMaintenanceActions(output.ResourcePendingMaintenanceActions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityZonesList
 */
const de_AvailabilityZonesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchStartRecommendationsErrorEntry
 */
const de_BatchStartRecommendationsErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchStartRecommendationsErrorEntry => {
  return {
    Code: __expectString(output.Code),
    DatabaseId: __expectString(output.DatabaseId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchStartRecommendationsErrorEntryList
 */
const de_BatchStartRecommendationsErrorEntryList = (
  output: any,
  context: __SerdeContext
): BatchStartRecommendationsErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchStartRecommendationsErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchStartRecommendationsResponse
 */
const de_BatchStartRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): BatchStartRecommendationsResponse => {
  return {
    ErrorEntries:
      output.ErrorEntries != null
        ? de_BatchStartRecommendationsErrorEntryList(output.ErrorEntries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse
 */
const de_CancelReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): CancelReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? de_ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateCreationDate:
      output.CertificateCreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CertificateCreationDate)))
        : undefined,
    CertificateIdentifier: __expectString(output.CertificateIdentifier),
    CertificateOwner: __expectString(output.CertificateOwner),
    CertificatePem: __expectString(output.CertificatePem),
    CertificateWallet: output.CertificateWallet != null ? context.base64Decoder(output.CertificateWallet) : undefined,
    KeyLength: __expectInt32(output.KeyLength),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
    ValidFromDate:
      output.ValidFromDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidFromDate)))
        : undefined,
    ValidToDate:
      output.ValidToDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidToDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Certificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CollectorHealthCheck
 */
const de_CollectorHealthCheck = (output: any, context: __SerdeContext): CollectorHealthCheck => {
  return {
    CollectorStatus: __expectString(output.CollectorStatus),
    LocalCollectorS3Access: __expectBoolean(output.LocalCollectorS3Access),
    WebCollectorGrantedRoleBasedAccess: __expectBoolean(output.WebCollectorGrantedRoleBasedAccess),
    WebCollectorS3Access: __expectBoolean(output.WebCollectorS3Access),
  } as any;
};

/**
 * deserializeAws_json1_1CollectorNotFoundFault
 */
const de_CollectorNotFoundFault = (output: any, context: __SerdeContext): CollectorNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CollectorResponse
 */
const de_CollectorResponse = (output: any, context: __SerdeContext): CollectorResponse => {
  return {
    CollectorHealthCheck:
      output.CollectorHealthCheck != null ? de_CollectorHealthCheck(output.CollectorHealthCheck, context) : undefined,
    CollectorName: __expectString(output.CollectorName),
    CollectorReferencedId: __expectString(output.CollectorReferencedId),
    CollectorVersion: __expectString(output.CollectorVersion),
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    InventoryData: output.InventoryData != null ? de_InventoryData(output.InventoryData, context) : undefined,
    LastDataReceived: __expectString(output.LastDataReceived),
    ModifiedDate: __expectString(output.ModifiedDate),
    RegisteredDate: __expectString(output.RegisteredDate),
    S3BucketName: __expectString(output.S3BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    VersionStatus: __expectString(output.VersionStatus),
  } as any;
};

/**
 * deserializeAws_json1_1CollectorResponses
 */
const de_CollectorResponses = (output: any, context: __SerdeContext): CollectorResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollectorResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CollectorShortInfoResponse
 */
const de_CollectorShortInfoResponse = (output: any, context: __SerdeContext): CollectorShortInfoResponse => {
  return {
    CollectorName: __expectString(output.CollectorName),
    CollectorReferencedId: __expectString(output.CollectorReferencedId),
  } as any;
};

/**
 * deserializeAws_json1_1CollectorsList
 */
const de_CollectorsList = (output: any, context: __SerdeContext): CollectorShortInfoResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollectorShortInfoResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    EndpointArn: __expectString(output.EndpointArn),
    EndpointIdentifier: __expectString(output.EndpointIdentifier),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceIdentifier: __expectString(output.ReplicationInstanceIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateEndpointResponse
 */
const de_CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? de_Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEventSubscriptionResponse
 */
const de_CreateEventSubscriptionResponse = (output: any, context: __SerdeContext): CreateEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null ? de_EventSubscription(output.EventSubscription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFleetAdvisorCollectorResponse
 */
const de_CreateFleetAdvisorCollectorResponse = (
  output: any,
  context: __SerdeContext
): CreateFleetAdvisorCollectorResponse => {
  return {
    CollectorName: __expectString(output.CollectorName),
    CollectorReferencedId: __expectString(output.CollectorReferencedId),
    Description: __expectString(output.Description),
    S3BucketName: __expectString(output.S3BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateReplicationInstanceResponse
 */
const de_CreateReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null ? de_ReplicationInstance(output.ReplicationInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateReplicationSubnetGroupResponse
 */
const de_CreateReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationSubnetGroupResponse => {
  return {
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? de_ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateReplicationTaskResponse
 */
const de_CreateReplicationTaskResponse = (output: any, context: __SerdeContext): CreateReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseInstanceSoftwareDetailsResponse
 */
const de_DatabaseInstanceSoftwareDetailsResponse = (
  output: any,
  context: __SerdeContext
): DatabaseInstanceSoftwareDetailsResponse => {
  return {
    Engine: __expectString(output.Engine),
    EngineEdition: __expectString(output.EngineEdition),
    EngineVersion: __expectString(output.EngineVersion),
    OsArchitecture: __expectInt32(output.OsArchitecture),
    ServicePack: __expectString(output.ServicePack),
    SupportLevel: __expectString(output.SupportLevel),
    Tooltip: __expectString(output.Tooltip),
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseList
 */
const de_DatabaseList = (output: any, context: __SerdeContext): DatabaseResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatabaseResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatabaseResponse
 */
const de_DatabaseResponse = (output: any, context: __SerdeContext): DatabaseResponse => {
  return {
    Collectors: output.Collectors != null ? de_CollectorsList(output.Collectors, context) : undefined,
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseName: __expectString(output.DatabaseName),
    IpAddress: __expectString(output.IpAddress),
    NumberOfSchemas: __expectLong(output.NumberOfSchemas),
    Server: output.Server != null ? de_ServerShortInfoResponse(output.Server, context) : undefined,
    SoftwareDetails:
      output.SoftwareDetails != null
        ? de_DatabaseInstanceSoftwareDetailsResponse(output.SoftwareDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseShortInfoResponse
 */
const de_DatabaseShortInfoResponse = (output: any, context: __SerdeContext): DatabaseShortInfoResponse => {
  return {
    DatabaseEngine: __expectString(output.DatabaseEngine),
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseIpAddress: __expectString(output.DatabaseIpAddress),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCertificateResponse
 */
const de_DeleteCertificateResponse = (output: any, context: __SerdeContext): DeleteCertificateResponse => {
  return {
    Certificate: output.Certificate != null ? de_Certificate(output.Certificate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteConnectionResponse
 */
const de_DeleteConnectionResponse = (output: any, context: __SerdeContext): DeleteConnectionResponse => {
  return {
    Connection: output.Connection != null ? de_Connection(output.Connection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEndpointResponse
 */
const de_DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? de_Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEventSubscriptionResponse
 */
const de_DeleteEventSubscriptionResponse = (output: any, context: __SerdeContext): DeleteEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null ? de_EventSubscription(output.EventSubscription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFleetAdvisorDatabasesResponse
 */
const de_DeleteFleetAdvisorDatabasesResponse = (
  output: any,
  context: __SerdeContext
): DeleteFleetAdvisorDatabasesResponse => {
  return {
    DatabaseIds: output.DatabaseIds != null ? de_StringList(output.DatabaseIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationInstanceResponse
 */
const de_DeleteReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null ? de_ReplicationInstance(output.ReplicationInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationSubnetGroupResponse
 */
const de_DeleteReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationSubnetGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse
 */
const de_DeleteReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? de_ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationTaskResponse
 */
const de_DeleteReplicationTaskResponse = (output: any, context: __SerdeContext): DeleteReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAccountAttributesResponse
 */
const de_DescribeAccountAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResponse => {
  return {
    AccountQuotas: output.AccountQuotas != null ? de_AccountQuotaList(output.AccountQuotas, context) : undefined,
    UniqueAccountIdentifier: __expectString(output.UniqueAccountIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse
 */
const de_DescribeApplicableIndividualAssessmentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicableIndividualAssessmentsResponse => {
  return {
    IndividualAssessmentNames:
      output.IndividualAssessmentNames != null
        ? de_IndividualAssessmentNameList(output.IndividualAssessmentNames, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCertificatesResponse
 */
const de_DescribeCertificatesResponse = (output: any, context: __SerdeContext): DescribeCertificatesResponse => {
  return {
    Certificates: output.Certificates != null ? de_CertificateList(output.Certificates, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectionsResponse
 */
const de_DescribeConnectionsResponse = (output: any, context: __SerdeContext): DescribeConnectionsResponse => {
  return {
    Connections: output.Connections != null ? de_ConnectionList(output.Connections, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointSettingsResponse
 */
const de_DescribeEndpointSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointSettingsResponse => {
  return {
    EndpointSettings:
      output.EndpointSettings != null ? de_EndpointSettingsList(output.EndpointSettings, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointsResponse
 */
const de_DescribeEndpointsResponse = (output: any, context: __SerdeContext): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? de_EndpointList(output.Endpoints, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointTypesResponse
 */
const de_DescribeEndpointTypesResponse = (output: any, context: __SerdeContext): DescribeEndpointTypesResponse => {
  return {
    Marker: __expectString(output.Marker),
    SupportedEndpointTypes:
      output.SupportedEndpointTypes != null
        ? de_SupportedEndpointTypeList(output.SupportedEndpointTypes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventCategoriesResponse
 */
const de_DescribeEventCategoriesResponse = (output: any, context: __SerdeContext): DescribeEventCategoriesResponse => {
  return {
    EventCategoryGroupList:
      output.EventCategoryGroupList != null
        ? de_EventCategoryGroupList(output.EventCategoryGroupList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? de_EventList(output.Events, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventSubscriptionsResponse
 */
const de_DescribeEventSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSubscriptionsResponse => {
  return {
    EventSubscriptionsList:
      output.EventSubscriptionsList != null
        ? de_EventSubscriptionsList(output.EventSubscriptionsList, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorCollectorsResponse
 */
const de_DescribeFleetAdvisorCollectorsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorCollectorsResponse => {
  return {
    Collectors: output.Collectors != null ? de_CollectorResponses(output.Collectors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorDatabasesResponse
 */
const de_DescribeFleetAdvisorDatabasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorDatabasesResponse => {
  return {
    Databases: output.Databases != null ? de_DatabaseList(output.Databases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisResponse
 */
const de_DescribeFleetAdvisorLsaAnalysisResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorLsaAnalysisResponse => {
  return {
    Analysis: output.Analysis != null ? de_FleetAdvisorLsaAnalysisResponseList(output.Analysis, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryResponse
 */
const de_DescribeFleetAdvisorSchemaObjectSummaryResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorSchemaObjectSummaryResponse => {
  return {
    FleetAdvisorSchemaObjects:
      output.FleetAdvisorSchemaObjects != null
        ? de_FleetAdvisorSchemaObjectList(output.FleetAdvisorSchemaObjects, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetAdvisorSchemasResponse
 */
const de_DescribeFleetAdvisorSchemasResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorSchemasResponse => {
  return {
    FleetAdvisorSchemas:
      output.FleetAdvisorSchemas != null ? de_FleetAdvisorSchemaList(output.FleetAdvisorSchemas, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse
 */
const de_DescribeOrderableReplicationInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrderableReplicationInstancesResponse => {
  return {
    Marker: __expectString(output.Marker),
    OrderableReplicationInstances:
      output.OrderableReplicationInstances != null
        ? de_OrderableReplicationInstanceList(output.OrderableReplicationInstances, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePendingMaintenanceActionsResponse
 */
const de_DescribePendingMaintenanceActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribePendingMaintenanceActionsResponse => {
  return {
    Marker: __expectString(output.Marker),
    PendingMaintenanceActions:
      output.PendingMaintenanceActions != null
        ? de_PendingMaintenanceActions(output.PendingMaintenanceActions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRecommendationLimitationsResponse
 */
const de_DescribeRecommendationLimitationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecommendationLimitationsResponse => {
  return {
    Limitations: output.Limitations != null ? de_LimitationList(output.Limitations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRecommendationsResponse
 */
const de_DescribeRecommendationsResponse = (output: any, context: __SerdeContext): DescribeRecommendationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Recommendations:
      output.Recommendations != null ? de_RecommendationList(output.Recommendations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRefreshSchemasStatusResponse
 */
const de_DescribeRefreshSchemasStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRefreshSchemasStatusResponse => {
  return {
    RefreshSchemasStatus:
      output.RefreshSchemasStatus != null ? de_RefreshSchemasStatus(output.RefreshSchemasStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationInstancesResponse
 */
const de_DescribeReplicationInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationInstancesResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationInstances:
      output.ReplicationInstances != null
        ? de_ReplicationInstanceList(output.ReplicationInstances, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse
 */
const de_DescribeReplicationInstanceTaskLogsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationInstanceTaskLogsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceTaskLogs:
      output.ReplicationInstanceTaskLogs != null
        ? de_ReplicationInstanceTaskLogsList(output.ReplicationInstanceTaskLogs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse
 */
const de_DescribeReplicationSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationSubnetGroupsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationSubnetGroups:
      output.ReplicationSubnetGroups != null
        ? de_ReplicationSubnetGroups(output.ReplicationSubnetGroups, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse
 */
const de_DescribeReplicationTaskAssessmentResultsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentResultsResponse => {
  return {
    BucketName: __expectString(output.BucketName),
    Marker: __expectString(output.Marker),
    ReplicationTaskAssessmentResults:
      output.ReplicationTaskAssessmentResults != null
        ? de_ReplicationTaskAssessmentResultList(output.ReplicationTaskAssessmentResults, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse
 */
const de_DescribeReplicationTaskAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentRunsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskAssessmentRuns:
      output.ReplicationTaskAssessmentRuns != null
        ? de_ReplicationTaskAssessmentRunList(output.ReplicationTaskAssessmentRuns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse
 */
const de_DescribeReplicationTaskIndividualAssessmentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskIndividualAssessmentsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskIndividualAssessments:
      output.ReplicationTaskIndividualAssessments != null
        ? de_ReplicationTaskIndividualAssessmentList(output.ReplicationTaskIndividualAssessments, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplicationTasksResponse
 */
const de_DescribeReplicationTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTasksResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTasks:
      output.ReplicationTasks != null ? de_ReplicationTaskList(output.ReplicationTasks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSchemasResponse
 */
const de_DescribeSchemasResponse = (output: any, context: __SerdeContext): DescribeSchemasResponse => {
  return {
    Marker: __expectString(output.Marker),
    Schemas: output.Schemas != null ? de_SchemaList(output.Schemas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTableStatisticsResponse
 */
const de_DescribeTableStatisticsResponse = (output: any, context: __SerdeContext): DescribeTableStatisticsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    TableStatistics:
      output.TableStatistics != null ? de_TableStatisticsList(output.TableStatistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DmsTransferSettings
 */
const de_DmsTransferSettings = (output: any, context: __SerdeContext): DmsTransferSettings => {
  return {
    BucketName: __expectString(output.BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1DocDbSettings
 */
const de_DocDbSettings = (output: any, context: __SerdeContext): DocDbSettings => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    DocsToInvestigate: __expectInt32(output.DocsToInvestigate),
    ExtractDocId: __expectBoolean(output.ExtractDocId),
    KmsKeyId: __expectString(output.KmsKeyId),
    NestingLevel: __expectString(output.NestingLevel),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1DynamoDbSettings
 */
const de_DynamoDbSettings = (output: any, context: __SerdeContext): DynamoDbSettings => {
  return {
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1ElasticsearchSettings
 */
const de_ElasticsearchSettings = (output: any, context: __SerdeContext): ElasticsearchSettings => {
  return {
    EndpointUri: __expectString(output.EndpointUri),
    ErrorRetryDuration: __expectInt32(output.ErrorRetryDuration),
    FullLoadErrorPercentage: __expectInt32(output.FullLoadErrorPercentage),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    UseNewMappingType: __expectBoolean(output.UseNewMappingType),
  } as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    DatabaseName: __expectString(output.DatabaseName),
    DmsTransferSettings:
      output.DmsTransferSettings != null ? de_DmsTransferSettings(output.DmsTransferSettings, context) : undefined,
    DocDbSettings: output.DocDbSettings != null ? de_DocDbSettings(output.DocDbSettings, context) : undefined,
    DynamoDbSettings:
      output.DynamoDbSettings != null ? de_DynamoDbSettings(output.DynamoDbSettings, context) : undefined,
    ElasticsearchSettings:
      output.ElasticsearchSettings != null
        ? de_ElasticsearchSettings(output.ElasticsearchSettings, context)
        : undefined,
    EndpointArn: __expectString(output.EndpointArn),
    EndpointIdentifier: __expectString(output.EndpointIdentifier),
    EndpointType: __expectString(output.EndpointType),
    EngineDisplayName: __expectString(output.EngineDisplayName),
    EngineName: __expectString(output.EngineName),
    ExternalId: __expectString(output.ExternalId),
    ExternalTableDefinition: __expectString(output.ExternalTableDefinition),
    ExtraConnectionAttributes: __expectString(output.ExtraConnectionAttributes),
    GcpMySQLSettings:
      output.GcpMySQLSettings != null ? de_GcpMySQLSettings(output.GcpMySQLSettings, context) : undefined,
    IBMDb2Settings: output.IBMDb2Settings != null ? de_IBMDb2Settings(output.IBMDb2Settings, context) : undefined,
    KafkaSettings: output.KafkaSettings != null ? de_KafkaSettings(output.KafkaSettings, context) : undefined,
    KinesisSettings: output.KinesisSettings != null ? de_KinesisSettings(output.KinesisSettings, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    MicrosoftSQLServerSettings:
      output.MicrosoftSQLServerSettings != null
        ? de_MicrosoftSQLServerSettings(output.MicrosoftSQLServerSettings, context)
        : undefined,
    MongoDbSettings: output.MongoDbSettings != null ? de_MongoDbSettings(output.MongoDbSettings, context) : undefined,
    MySQLSettings: output.MySQLSettings != null ? de_MySQLSettings(output.MySQLSettings, context) : undefined,
    NeptuneSettings: output.NeptuneSettings != null ? de_NeptuneSettings(output.NeptuneSettings, context) : undefined,
    OracleSettings: output.OracleSettings != null ? de_OracleSettings(output.OracleSettings, context) : undefined,
    Port: __expectInt32(output.Port),
    PostgreSQLSettings:
      output.PostgreSQLSettings != null ? de_PostgreSQLSettings(output.PostgreSQLSettings, context) : undefined,
    RedisSettings: output.RedisSettings != null ? de_RedisSettings(output.RedisSettings, context) : undefined,
    RedshiftSettings:
      output.RedshiftSettings != null ? de_RedshiftSettings(output.RedshiftSettings, context) : undefined,
    S3Settings: output.S3Settings != null ? de_S3Settings(output.S3Settings, context) : undefined,
    ServerName: __expectString(output.ServerName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    SslMode: __expectString(output.SslMode),
    Status: __expectString(output.Status),
    SybaseSettings: output.SybaseSettings != null ? de_SybaseSettings(output.SybaseSettings, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointList
 */
const de_EndpointList = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointSetting
 */
const de_EndpointSetting = (output: any, context: __SerdeContext): EndpointSetting => {
  return {
    Applicability: __expectString(output.Applicability),
    DefaultValue: __expectString(output.DefaultValue),
    EnumValues: output.EnumValues != null ? de_EndpointSettingEnumValues(output.EnumValues, context) : undefined,
    IntValueMax: __expectInt32(output.IntValueMax),
    IntValueMin: __expectInt32(output.IntValueMin),
    Name: __expectString(output.Name),
    Sensitive: __expectBoolean(output.Sensitive),
    Type: __expectString(output.Type),
    Units: __expectString(output.Units),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointSettingEnumValues
 */
const de_EndpointSettingEnumValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointSettingsList
 */
const de_EndpointSettingsList = (output: any, context: __SerdeContext): EndpointSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    EventCategories:
      output.EventCategories != null ? de_EventCategoriesList(output.EventCategories, context) : undefined,
    Message: __expectString(output.Message),
    SourceIdentifier: __expectString(output.SourceIdentifier),
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1EventCategoriesList
 */
const de_EventCategoriesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventCategoryGroup
 */
const de_EventCategoryGroup = (output: any, context: __SerdeContext): EventCategoryGroup => {
  return {
    EventCategories:
      output.EventCategories != null ? de_EventCategoriesList(output.EventCategories, context) : undefined,
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1EventCategoryGroupList
 */
const de_EventCategoryGroupList = (output: any, context: __SerdeContext): EventCategoryGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventCategoryGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  return {
    CustSubscriptionId: __expectString(output.CustSubscriptionId),
    CustomerAwsId: __expectString(output.CustomerAwsId),
    Enabled: __expectBoolean(output.Enabled),
    EventCategoriesList:
      output.EventCategoriesList != null ? de_EventCategoriesList(output.EventCategoriesList, context) : undefined,
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SourceIdsList: output.SourceIdsList != null ? de_SourceIdsList(output.SourceIdsList, context) : undefined,
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    SubscriptionCreationTime: __expectString(output.SubscriptionCreationTime),
  } as any;
};

/**
 * deserializeAws_json1_1EventSubscriptionsList
 */
const de_EventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetAdvisorLsaAnalysisResponse
 */
const de_FleetAdvisorLsaAnalysisResponse = (output: any, context: __SerdeContext): FleetAdvisorLsaAnalysisResponse => {
  return {
    LsaAnalysisId: __expectString(output.LsaAnalysisId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FleetAdvisorLsaAnalysisResponseList
 */
const de_FleetAdvisorLsaAnalysisResponseList = (
  output: any,
  context: __SerdeContext
): FleetAdvisorLsaAnalysisResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetAdvisorLsaAnalysisResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetAdvisorSchemaList
 */
const de_FleetAdvisorSchemaList = (output: any, context: __SerdeContext): SchemaResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetAdvisorSchemaObjectList
 */
const de_FleetAdvisorSchemaObjectList = (output: any, context: __SerdeContext): FleetAdvisorSchemaObjectResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetAdvisorSchemaObjectResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetAdvisorSchemaObjectResponse
 */
const de_FleetAdvisorSchemaObjectResponse = (
  output: any,
  context: __SerdeContext
): FleetAdvisorSchemaObjectResponse => {
  return {
    CodeLineCount: __expectLong(output.CodeLineCount),
    CodeSize: __expectLong(output.CodeSize),
    NumberOfObjects: __expectLong(output.NumberOfObjects),
    ObjectType: __expectString(output.ObjectType),
    SchemaId: __expectString(output.SchemaId),
  } as any;
};

/**
 * deserializeAws_json1_1GcpMySQLSettings
 */
const de_GcpMySQLSettings = (output: any, context: __SerdeContext): GcpMySQLSettings => {
  return {
    AfterConnectScript: __expectString(output.AfterConnectScript),
    CleanSourceMetadataOnMismatch: __expectBoolean(output.CleanSourceMetadataOnMismatch),
    DatabaseName: __expectString(output.DatabaseName),
    EventsPollInterval: __expectInt32(output.EventsPollInterval),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    ParallelLoadThreads: __expectInt32(output.ParallelLoadThreads),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    ServerTimezone: __expectString(output.ServerTimezone),
    TargetDbType: __expectString(output.TargetDbType),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1IBMDb2Settings
 */
const de_IBMDb2Settings = (output: any, context: __SerdeContext): IBMDb2Settings => {
  return {
    CurrentLsn: __expectString(output.CurrentLsn),
    DatabaseName: __expectString(output.DatabaseName),
    MaxKBytesPerRead: __expectInt32(output.MaxKBytesPerRead),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    SetDataCaptureChanges: __expectBoolean(output.SetDataCaptureChanges),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1ImportCertificateResponse
 */
const de_ImportCertificateResponse = (output: any, context: __SerdeContext): ImportCertificateResponse => {
  return {
    Certificate: output.Certificate != null ? de_Certificate(output.Certificate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IndividualAssessmentNameList
 */
const de_IndividualAssessmentNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InsufficientResourceCapacityFault
 */
const de_InsufficientResourceCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientResourceCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidCertificateFault
 */
const de_InvalidCertificateFault = (output: any, context: __SerdeContext): InvalidCertificateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationFault
 */
const de_InvalidOperationFault = (output: any, context: __SerdeContext): InvalidOperationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceStateFault
 */
const de_InvalidResourceStateFault = (output: any, context: __SerdeContext): InvalidResourceStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InventoryData
 */
const de_InventoryData = (output: any, context: __SerdeContext): InventoryData => {
  return {
    NumberOfDatabases: __expectInt32(output.NumberOfDatabases),
    NumberOfSchemas: __expectInt32(output.NumberOfSchemas),
  } as any;
};

/**
 * deserializeAws_json1_1KafkaSettings
 */
const de_KafkaSettings = (output: any, context: __SerdeContext): KafkaSettings => {
  return {
    Broker: __expectString(output.Broker),
    IncludeControlDetails: __expectBoolean(output.IncludeControlDetails),
    IncludeNullAndEmpty: __expectBoolean(output.IncludeNullAndEmpty),
    IncludePartitionValue: __expectBoolean(output.IncludePartitionValue),
    IncludeTableAlterOperations: __expectBoolean(output.IncludeTableAlterOperations),
    IncludeTransactionDetails: __expectBoolean(output.IncludeTransactionDetails),
    MessageFormat: __expectString(output.MessageFormat),
    MessageMaxBytes: __expectInt32(output.MessageMaxBytes),
    NoHexPrefix: __expectBoolean(output.NoHexPrefix),
    PartitionIncludeSchemaTable: __expectBoolean(output.PartitionIncludeSchemaTable),
    SaslMechanism: __expectString(output.SaslMechanism),
    SaslPassword: __expectString(output.SaslPassword),
    SaslUsername: __expectString(output.SaslUsername),
    SecurityProtocol: __expectString(output.SecurityProtocol),
    SslCaCertificateArn: __expectString(output.SslCaCertificateArn),
    SslClientCertificateArn: __expectString(output.SslClientCertificateArn),
    SslClientKeyArn: __expectString(output.SslClientKeyArn),
    SslClientKeyPassword: __expectString(output.SslClientKeyPassword),
    Topic: __expectString(output.Topic),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisSettings
 */
const de_KinesisSettings = (output: any, context: __SerdeContext): KinesisSettings => {
  return {
    IncludeControlDetails: __expectBoolean(output.IncludeControlDetails),
    IncludeNullAndEmpty: __expectBoolean(output.IncludeNullAndEmpty),
    IncludePartitionValue: __expectBoolean(output.IncludePartitionValue),
    IncludeTableAlterOperations: __expectBoolean(output.IncludeTableAlterOperations),
    IncludeTransactionDetails: __expectBoolean(output.IncludeTransactionDetails),
    MessageFormat: __expectString(output.MessageFormat),
    NoHexPrefix: __expectBoolean(output.NoHexPrefix),
    PartitionIncludeSchemaTable: __expectBoolean(output.PartitionIncludeSchemaTable),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

/**
 * deserializeAws_json1_1KMSAccessDeniedFault
 */
const de_KMSAccessDeniedFault = (output: any, context: __SerdeContext): KMSAccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSDisabledFault
 */
const de_KMSDisabledFault = (output: any, context: __SerdeContext): KMSDisabledFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSFault
 */
const de_KMSFault = (output: any, context: __SerdeContext): KMSFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInvalidStateFault
 */
const de_KMSInvalidStateFault = (output: any, context: __SerdeContext): KMSInvalidStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSKeyNotAccessibleFault
 */
const de_KMSKeyNotAccessibleFault = (output: any, context: __SerdeContext): KMSKeyNotAccessibleFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSNotFoundFault
 */
const de_KMSNotFoundFault = (output: any, context: __SerdeContext): KMSNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSThrottlingFault
 */
const de_KMSThrottlingFault = (output: any, context: __SerdeContext): KMSThrottlingFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Limitation
 */
const de_Limitation = (output: any, context: __SerdeContext): Limitation => {
  return {
    DatabaseId: __expectString(output.DatabaseId),
    Description: __expectString(output.Description),
    EngineName: __expectString(output.EngineName),
    Impact: __expectString(output.Impact),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1LimitationList
 */
const de_LimitationList = (output: any, context: __SerdeContext): Limitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Limitation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MicrosoftSQLServerSettings
 */
const de_MicrosoftSQLServerSettings = (output: any, context: __SerdeContext): MicrosoftSQLServerSettings => {
  return {
    BcpPacketSize: __expectInt32(output.BcpPacketSize),
    ControlTablesFileGroup: __expectString(output.ControlTablesFileGroup),
    DatabaseName: __expectString(output.DatabaseName),
    ForceLobLookup: __expectBoolean(output.ForceLobLookup),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    QuerySingleAlwaysOnNode: __expectBoolean(output.QuerySingleAlwaysOnNode),
    ReadBackupOnly: __expectBoolean(output.ReadBackupOnly),
    SafeguardPolicy: __expectString(output.SafeguardPolicy),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    TlogAccessMode: __expectString(output.TlogAccessMode),
    TrimSpaceInChar: __expectBoolean(output.TrimSpaceInChar),
    UseBcpFullLoad: __expectBoolean(output.UseBcpFullLoad),
    UseThirdPartyBackupDevice: __expectBoolean(output.UseThirdPartyBackupDevice),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyEndpointResponse
 */
const de_ModifyEndpointResponse = (output: any, context: __SerdeContext): ModifyEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? de_Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyEventSubscriptionResponse
 */
const de_ModifyEventSubscriptionResponse = (output: any, context: __SerdeContext): ModifyEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null ? de_EventSubscription(output.EventSubscription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyReplicationInstanceResponse
 */
const de_ModifyReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null ? de_ReplicationInstance(output.ReplicationInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyReplicationSubnetGroupResponse
 */
const de_ModifyReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationSubnetGroupResponse => {
  return {
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? de_ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyReplicationTaskResponse
 */
const de_ModifyReplicationTaskResponse = (output: any, context: __SerdeContext): ModifyReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MongoDbSettings
 */
const de_MongoDbSettings = (output: any, context: __SerdeContext): MongoDbSettings => {
  return {
    AuthMechanism: __expectString(output.AuthMechanism),
    AuthSource: __expectString(output.AuthSource),
    AuthType: __expectString(output.AuthType),
    DatabaseName: __expectString(output.DatabaseName),
    DocsToInvestigate: __expectString(output.DocsToInvestigate),
    ExtractDocId: __expectString(output.ExtractDocId),
    KmsKeyId: __expectString(output.KmsKeyId),
    NestingLevel: __expectString(output.NestingLevel),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1MoveReplicationTaskResponse
 */
const de_MoveReplicationTaskResponse = (output: any, context: __SerdeContext): MoveReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MySQLSettings
 */
const de_MySQLSettings = (output: any, context: __SerdeContext): MySQLSettings => {
  return {
    AfterConnectScript: __expectString(output.AfterConnectScript),
    CleanSourceMetadataOnMismatch: __expectBoolean(output.CleanSourceMetadataOnMismatch),
    DatabaseName: __expectString(output.DatabaseName),
    EventsPollInterval: __expectInt32(output.EventsPollInterval),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    ParallelLoadThreads: __expectInt32(output.ParallelLoadThreads),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    ServerTimezone: __expectString(output.ServerTimezone),
    TargetDbType: __expectString(output.TargetDbType),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1NeptuneSettings
 */
const de_NeptuneSettings = (output: any, context: __SerdeContext): NeptuneSettings => {
  return {
    ErrorRetryDuration: __expectInt32(output.ErrorRetryDuration),
    IamAuthEnabled: __expectBoolean(output.IamAuthEnabled),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    MaxRetryCount: __expectInt32(output.MaxRetryCount),
    S3BucketFolder: __expectString(output.S3BucketFolder),
    S3BucketName: __expectString(output.S3BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1OracleSettings
 */
const de_OracleSettings = (output: any, context: __SerdeContext): OracleSettings => {
  return {
    AccessAlternateDirectly: __expectBoolean(output.AccessAlternateDirectly),
    AddSupplementalLogging: __expectBoolean(output.AddSupplementalLogging),
    AdditionalArchivedLogDestId: __expectInt32(output.AdditionalArchivedLogDestId),
    AllowSelectNestedTables: __expectBoolean(output.AllowSelectNestedTables),
    ArchivedLogDestId: __expectInt32(output.ArchivedLogDestId),
    ArchivedLogsOnly: __expectBoolean(output.ArchivedLogsOnly),
    AsmPassword: __expectString(output.AsmPassword),
    AsmServer: __expectString(output.AsmServer),
    AsmUser: __expectString(output.AsmUser),
    CharLengthSemantics: __expectString(output.CharLengthSemantics),
    ConvertTimestampWithZoneToUTC: __expectBoolean(output.ConvertTimestampWithZoneToUTC),
    DatabaseName: __expectString(output.DatabaseName),
    DirectPathNoLog: __expectBoolean(output.DirectPathNoLog),
    DirectPathParallelLoad: __expectBoolean(output.DirectPathParallelLoad),
    EnableHomogenousTablespace: __expectBoolean(output.EnableHomogenousTablespace),
    ExtraArchivedLogDestIds:
      output.ExtraArchivedLogDestIds != null ? de_IntegerList(output.ExtraArchivedLogDestIds, context) : undefined,
    FailTasksOnLobTruncation: __expectBoolean(output.FailTasksOnLobTruncation),
    NumberDatatypeScale: __expectInt32(output.NumberDatatypeScale),
    OraclePathPrefix: __expectString(output.OraclePathPrefix),
    ParallelAsmReadThreads: __expectInt32(output.ParallelAsmReadThreads),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    ReadAheadBlocks: __expectInt32(output.ReadAheadBlocks),
    ReadTableSpaceName: __expectBoolean(output.ReadTableSpaceName),
    ReplacePathPrefix: __expectBoolean(output.ReplacePathPrefix),
    RetryInterval: __expectInt32(output.RetryInterval),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerOracleAsmAccessRoleArn: __expectString(output.SecretsManagerOracleAsmAccessRoleArn),
    SecretsManagerOracleAsmSecretId: __expectString(output.SecretsManagerOracleAsmSecretId),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    SecurityDbEncryption: __expectString(output.SecurityDbEncryption),
    SecurityDbEncryptionName: __expectString(output.SecurityDbEncryptionName),
    ServerName: __expectString(output.ServerName),
    SpatialDataOptionToGeoJsonFunctionName: __expectString(output.SpatialDataOptionToGeoJsonFunctionName),
    StandbyDelayTime: __expectInt32(output.StandbyDelayTime),
    TrimSpaceInChar: __expectBoolean(output.TrimSpaceInChar),
    UseAlternateFolderForOnline: __expectBoolean(output.UseAlternateFolderForOnline),
    UseBFile: __expectBoolean(output.UseBFile),
    UseDirectPathFullLoad: __expectBoolean(output.UseDirectPathFullLoad),
    UseLogminerReader: __expectBoolean(output.UseLogminerReader),
    UsePathPrefix: __expectString(output.UsePathPrefix),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1OrderableReplicationInstance
 */
const de_OrderableReplicationInstance = (output: any, context: __SerdeContext): OrderableReplicationInstance => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null ? de_AvailabilityZonesList(output.AvailabilityZones, context) : undefined,
    DefaultAllocatedStorage: __expectInt32(output.DefaultAllocatedStorage),
    EngineVersion: __expectString(output.EngineVersion),
    IncludedAllocatedStorage: __expectInt32(output.IncludedAllocatedStorage),
    MaxAllocatedStorage: __expectInt32(output.MaxAllocatedStorage),
    MinAllocatedStorage: __expectInt32(output.MinAllocatedStorage),
    ReleaseStatus: __expectString(output.ReleaseStatus),
    ReplicationInstanceClass: __expectString(output.ReplicationInstanceClass),
    StorageType: __expectString(output.StorageType),
  } as any;
};

/**
 * deserializeAws_json1_1OrderableReplicationInstanceList
 */
const de_OrderableReplicationInstanceList = (output: any, context: __SerdeContext): OrderableReplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrderableReplicationInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  return {
    Action: __expectString(output.Action),
    AutoAppliedAfterDate:
      output.AutoAppliedAfterDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AutoAppliedAfterDate)))
        : undefined,
    CurrentApplyDate:
      output.CurrentApplyDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CurrentApplyDate)))
        : undefined,
    Description: __expectString(output.Description),
    ForcedApplyDate:
      output.ForcedApplyDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ForcedApplyDate)))
        : undefined,
    OptInStatus: __expectString(output.OptInStatus),
  } as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceActionDetails
 */
const de_PendingMaintenanceActionDetails = (output: any, context: __SerdeContext): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_ResourcePendingMaintenanceActions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PostgreSQLSettings
 */
const de_PostgreSQLSettings = (output: any, context: __SerdeContext): PostgreSQLSettings => {
  return {
    AfterConnectScript: __expectString(output.AfterConnectScript),
    CaptureDdls: __expectBoolean(output.CaptureDdls),
    DatabaseName: __expectString(output.DatabaseName),
    DdlArtifactsSchema: __expectString(output.DdlArtifactsSchema),
    ExecuteTimeout: __expectInt32(output.ExecuteTimeout),
    FailTasksOnLobTruncation: __expectBoolean(output.FailTasksOnLobTruncation),
    HeartbeatEnable: __expectBoolean(output.HeartbeatEnable),
    HeartbeatFrequency: __expectInt32(output.HeartbeatFrequency),
    HeartbeatSchema: __expectString(output.HeartbeatSchema),
    MapBooleanAsBoolean: __expectBoolean(output.MapBooleanAsBoolean),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    Password: __expectString(output.Password),
    PluginName: __expectString(output.PluginName),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    SlotName: __expectString(output.SlotName),
    TrimSpaceInChar: __expectBoolean(output.TrimSpaceInChar),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1RdsConfiguration
 */
const de_RdsConfiguration = (output: any, context: __SerdeContext): RdsConfiguration => {
  return {
    DeploymentOption: __expectString(output.DeploymentOption),
    EngineEdition: __expectString(output.EngineEdition),
    InstanceMemory: __limitedParseDouble(output.InstanceMemory),
    InstanceType: __expectString(output.InstanceType),
    InstanceVcpu: __limitedParseDouble(output.InstanceVcpu),
    StorageIops: __expectInt32(output.StorageIops),
    StorageSize: __expectInt32(output.StorageSize),
    StorageType: __expectString(output.StorageType),
  } as any;
};

/**
 * deserializeAws_json1_1RdsRecommendation
 */
const de_RdsRecommendation = (output: any, context: __SerdeContext): RdsRecommendation => {
  return {
    RequirementsToTarget:
      output.RequirementsToTarget != null ? de_RdsRequirements(output.RequirementsToTarget, context) : undefined,
    TargetConfiguration:
      output.TargetConfiguration != null ? de_RdsConfiguration(output.TargetConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RdsRequirements
 */
const de_RdsRequirements = (output: any, context: __SerdeContext): RdsRequirements => {
  return {
    DeploymentOption: __expectString(output.DeploymentOption),
    EngineEdition: __expectString(output.EngineEdition),
    InstanceMemory: __limitedParseDouble(output.InstanceMemory),
    InstanceVcpu: __limitedParseDouble(output.InstanceVcpu),
    StorageIops: __expectInt32(output.StorageIops),
    StorageSize: __expectInt32(output.StorageSize),
  } as any;
};

/**
 * deserializeAws_json1_1RebootReplicationInstanceResponse
 */
const de_RebootReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): RebootReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null ? de_ReplicationInstance(output.ReplicationInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    CreatedDate: __expectString(output.CreatedDate),
    Data: output.Data != null ? de_RecommendationData(output.Data, context) : undefined,
    DatabaseId: __expectString(output.DatabaseId),
    EngineName: __expectString(output.EngineName),
    Preferred: __expectBoolean(output.Preferred),
    Settings: output.Settings != null ? de_RecommendationSettings(output.Settings, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1RecommendationData
 */
const de_RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return {
    RdsEngine: output.RdsEngine != null ? de_RdsRecommendation(output.RdsEngine, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommendationSettings
 */
const de_RecommendationSettings = (output: any, context: __SerdeContext): RecommendationSettings => {
  return {
    InstanceSizingType: __expectString(output.InstanceSizingType),
    WorkloadType: __expectString(output.WorkloadType),
  } as any;
};

/**
 * deserializeAws_json1_1RedisSettings
 */
const de_RedisSettings = (output: any, context: __SerdeContext): RedisSettings => {
  return {
    AuthPassword: __expectString(output.AuthPassword),
    AuthType: __expectString(output.AuthType),
    AuthUserName: __expectString(output.AuthUserName),
    Port: __expectInt32(output.Port),
    ServerName: __expectString(output.ServerName),
    SslCaCertificateArn: __expectString(output.SslCaCertificateArn),
    SslSecurityProtocol: __expectString(output.SslSecurityProtocol),
  } as any;
};

/**
 * deserializeAws_json1_1RedshiftSettings
 */
const de_RedshiftSettings = (output: any, context: __SerdeContext): RedshiftSettings => {
  return {
    AcceptAnyDate: __expectBoolean(output.AcceptAnyDate),
    AfterConnectScript: __expectString(output.AfterConnectScript),
    BucketFolder: __expectString(output.BucketFolder),
    BucketName: __expectString(output.BucketName),
    CaseSensitiveNames: __expectBoolean(output.CaseSensitiveNames),
    CompUpdate: __expectBoolean(output.CompUpdate),
    ConnectionTimeout: __expectInt32(output.ConnectionTimeout),
    DatabaseName: __expectString(output.DatabaseName),
    DateFormat: __expectString(output.DateFormat),
    EmptyAsNull: __expectBoolean(output.EmptyAsNull),
    EncryptionMode: __expectString(output.EncryptionMode),
    ExplicitIds: __expectBoolean(output.ExplicitIds),
    FileTransferUploadStreams: __expectInt32(output.FileTransferUploadStreams),
    LoadTimeout: __expectInt32(output.LoadTimeout),
    MapBooleanAsBoolean: __expectBoolean(output.MapBooleanAsBoolean),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    RemoveQuotes: __expectBoolean(output.RemoveQuotes),
    ReplaceChars: __expectString(output.ReplaceChars),
    ReplaceInvalidChars: __expectString(output.ReplaceInvalidChars),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    ServerSideEncryptionKmsKeyId: __expectString(output.ServerSideEncryptionKmsKeyId),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    TimeFormat: __expectString(output.TimeFormat),
    TrimBlanks: __expectBoolean(output.TrimBlanks),
    TruncateColumns: __expectBoolean(output.TruncateColumns),
    Username: __expectString(output.Username),
    WriteBufferSize: __expectInt32(output.WriteBufferSize),
  } as any;
};

/**
 * deserializeAws_json1_1RefreshSchemasResponse
 */
const de_RefreshSchemasResponse = (output: any, context: __SerdeContext): RefreshSchemasResponse => {
  return {
    RefreshSchemasStatus:
      output.RefreshSchemasStatus != null ? de_RefreshSchemasStatus(output.RefreshSchemasStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RefreshSchemasStatus
 */
const de_RefreshSchemasStatus = (output: any, context: __SerdeContext): RefreshSchemasStatus => {
  return {
    EndpointArn: __expectString(output.EndpointArn),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    LastRefreshDate:
      output.LastRefreshDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRefreshDate)))
        : undefined,
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ReloadTablesResponse
 */
const de_ReloadTablesResponse = (output: any, context: __SerdeContext): ReloadTablesResponse => {
  return {
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceResponse
 */
const de_RemoveTagsFromResourceResponse = (output: any, context: __SerdeContext): RemoveTagsFromResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ReplicationInstance
 */
const de_ReplicationInstance = (output: any, context: __SerdeContext): ReplicationInstance => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AutoMinorVersionUpgrade: __expectBoolean(output.AutoMinorVersionUpgrade),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    DnsNameServers: __expectString(output.DnsNameServers),
    EngineVersion: __expectString(output.EngineVersion),
    FreeUntil:
      output.FreeUntil != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FreeUntil))) : undefined,
    InstanceCreateTime:
      output.InstanceCreateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InstanceCreateTime)))
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    MultiAZ: __expectBoolean(output.MultiAZ),
    NetworkType: __expectString(output.NetworkType),
    PendingModifiedValues:
      output.PendingModifiedValues != null
        ? de_ReplicationPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceClass: __expectString(output.ReplicationInstanceClass),
    ReplicationInstanceIdentifier: __expectString(output.ReplicationInstanceIdentifier),
    ReplicationInstanceIpv6Addresses:
      output.ReplicationInstanceIpv6Addresses != null
        ? de_ReplicationInstanceIpv6AddressList(output.ReplicationInstanceIpv6Addresses, context)
        : undefined,
    ReplicationInstancePrivateIpAddress: __expectString(output.ReplicationInstancePrivateIpAddress),
    ReplicationInstancePrivateIpAddresses:
      output.ReplicationInstancePrivateIpAddresses != null
        ? de_ReplicationInstancePrivateIpAddressList(output.ReplicationInstancePrivateIpAddresses, context)
        : undefined,
    ReplicationInstancePublicIpAddress: __expectString(output.ReplicationInstancePublicIpAddress),
    ReplicationInstancePublicIpAddresses:
      output.ReplicationInstancePublicIpAddresses != null
        ? de_ReplicationInstancePublicIpAddressList(output.ReplicationInstancePublicIpAddresses, context)
        : undefined,
    ReplicationInstanceStatus: __expectString(output.ReplicationInstanceStatus),
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? de_ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
    SecondaryAvailabilityZone: __expectString(output.SecondaryAvailabilityZone),
    VpcSecurityGroups:
      output.VpcSecurityGroups != null
        ? de_VpcSecurityGroupMembershipList(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationInstanceIpv6AddressList
 */
const de_ReplicationInstanceIpv6AddressList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationInstanceList
 */
const de_ReplicationInstanceList = (output: any, context: __SerdeContext): ReplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationInstancePrivateIpAddressList
 */
const de_ReplicationInstancePrivateIpAddressList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationInstancePublicIpAddressList
 */
const de_ReplicationInstancePublicIpAddressList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationInstanceTaskLog
 */
const de_ReplicationInstanceTaskLog = (output: any, context: __SerdeContext): ReplicationInstanceTaskLog => {
  return {
    ReplicationInstanceTaskLogSize: __expectLong(output.ReplicationInstanceTaskLogSize),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    ReplicationTaskName: __expectString(output.ReplicationTaskName),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationInstanceTaskLogsList
 */
const de_ReplicationInstanceTaskLogsList = (output: any, context: __SerdeContext): ReplicationInstanceTaskLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationInstanceTaskLog(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationPendingModifiedValues
 */
const de_ReplicationPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): ReplicationPendingModifiedValues => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    EngineVersion: __expectString(output.EngineVersion),
    MultiAZ: __expectBoolean(output.MultiAZ),
    NetworkType: __expectString(output.NetworkType),
    ReplicationInstanceClass: __expectString(output.ReplicationInstanceClass),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationSubnetGroup
 */
const de_ReplicationSubnetGroup = (output: any, context: __SerdeContext): ReplicationSubnetGroup => {
  return {
    ReplicationSubnetGroupDescription: __expectString(output.ReplicationSubnetGroupDescription),
    ReplicationSubnetGroupIdentifier: __expectString(output.ReplicationSubnetGroupIdentifier),
    SubnetGroupStatus: __expectString(output.SubnetGroupStatus),
    Subnets: output.Subnets != null ? de_SubnetList(output.Subnets, context) : undefined,
    SupportedNetworkTypes:
      output.SupportedNetworkTypes != null ? de_StringList(output.SupportedNetworkTypes, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs
 */
const de_ReplicationSubnetGroupDoesNotCoverEnoughAZs = (
  output: any,
  context: __SerdeContext
): ReplicationSubnetGroupDoesNotCoverEnoughAZs => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationSubnetGroups
 */
const de_ReplicationSubnetGroups = (output: any, context: __SerdeContext): ReplicationSubnetGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationSubnetGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTask
 */
const de_ReplicationTask = (output: any, context: __SerdeContext): ReplicationTask => {
  return {
    CdcStartPosition: __expectString(output.CdcStartPosition),
    CdcStopPosition: __expectString(output.CdcStopPosition),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    MigrationType: __expectString(output.MigrationType),
    RecoveryCheckpoint: __expectString(output.RecoveryCheckpoint),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    ReplicationTaskCreationDate:
      output.ReplicationTaskCreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicationTaskCreationDate)))
        : undefined,
    ReplicationTaskIdentifier: __expectString(output.ReplicationTaskIdentifier),
    ReplicationTaskSettings: __expectString(output.ReplicationTaskSettings),
    ReplicationTaskStartDate:
      output.ReplicationTaskStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicationTaskStartDate)))
        : undefined,
    ReplicationTaskStats:
      output.ReplicationTaskStats != null ? de_ReplicationTaskStats(output.ReplicationTaskStats, context) : undefined,
    SourceEndpointArn: __expectString(output.SourceEndpointArn),
    Status: __expectString(output.Status),
    StopReason: __expectString(output.StopReason),
    TableMappings: __expectString(output.TableMappings),
    TargetEndpointArn: __expectString(output.TargetEndpointArn),
    TargetReplicationInstanceArn: __expectString(output.TargetReplicationInstanceArn),
    TaskData: __expectString(output.TaskData),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentResult
 */
const de_ReplicationTaskAssessmentResult = (output: any, context: __SerdeContext): ReplicationTaskAssessmentResult => {
  return {
    AssessmentResults: __expectString(output.AssessmentResults),
    AssessmentResultsFile: __expectString(output.AssessmentResultsFile),
    AssessmentStatus: __expectString(output.AssessmentStatus),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    ReplicationTaskIdentifier: __expectString(output.ReplicationTaskIdentifier),
    ReplicationTaskLastAssessmentDate:
      output.ReplicationTaskLastAssessmentDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicationTaskLastAssessmentDate)))
        : undefined,
    S3ObjectUrl: __expectString(output.S3ObjectUrl),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationTaskAssessmentResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentRun
 */
const de_ReplicationTaskAssessmentRun = (output: any, context: __SerdeContext): ReplicationTaskAssessmentRun => {
  return {
    AssessmentProgress:
      output.AssessmentProgress != null
        ? de_ReplicationTaskAssessmentRunProgress(output.AssessmentProgress, context)
        : undefined,
    AssessmentRunName: __expectString(output.AssessmentRunName),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    ReplicationTaskAssessmentRunArn: __expectString(output.ReplicationTaskAssessmentRunArn),
    ReplicationTaskAssessmentRunCreationDate:
      output.ReplicationTaskAssessmentRunCreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicationTaskAssessmentRunCreationDate)))
        : undefined,
    ResultEncryptionMode: __expectString(output.ResultEncryptionMode),
    ResultKmsKeyArn: __expectString(output.ResultKmsKeyArn),
    ResultLocationBucket: __expectString(output.ResultLocationBucket),
    ResultLocationFolder: __expectString(output.ResultLocationFolder),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentRunList
 */
const de_ReplicationTaskAssessmentRunList = (output: any, context: __SerdeContext): ReplicationTaskAssessmentRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationTaskAssessmentRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskAssessmentRunProgress
 */
const de_ReplicationTaskAssessmentRunProgress = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentRunProgress => {
  return {
    IndividualAssessmentCompletedCount: __expectInt32(output.IndividualAssessmentCompletedCount),
    IndividualAssessmentCount: __expectInt32(output.IndividualAssessmentCount),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationTaskIndividualAssessment
 */
const de_ReplicationTaskIndividualAssessment = (
  output: any,
  context: __SerdeContext
): ReplicationTaskIndividualAssessment => {
  return {
    IndividualAssessmentName: __expectString(output.IndividualAssessmentName),
    ReplicationTaskAssessmentRunArn: __expectString(output.ReplicationTaskAssessmentRunArn),
    ReplicationTaskIndividualAssessmentArn: __expectString(output.ReplicationTaskIndividualAssessmentArn),
    ReplicationTaskIndividualAssessmentStartDate:
      output.ReplicationTaskIndividualAssessmentStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicationTaskIndividualAssessmentStartDate)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationTaskStats
 */
const de_ReplicationTaskStats = (output: any, context: __SerdeContext): ReplicationTaskStats => {
  return {
    ElapsedTimeMillis: __expectLong(output.ElapsedTimeMillis),
    FreshStartDate:
      output.FreshStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FreshStartDate)))
        : undefined,
    FullLoadFinishDate:
      output.FullLoadFinishDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FullLoadFinishDate)))
        : undefined,
    FullLoadProgressPercent: __expectInt32(output.FullLoadProgressPercent),
    FullLoadStartDate:
      output.FullLoadStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FullLoadStartDate)))
        : undefined,
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    StopDate:
      output.StopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopDate))) : undefined,
    TablesErrored: __expectInt32(output.TablesErrored),
    TablesLoaded: __expectInt32(output.TablesLoaded),
    TablesLoading: __expectInt32(output.TablesLoading),
    TablesQueued: __expectInt32(output.TablesQueued),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsFault
 */
const de_ResourceAlreadyExistsFault = (output: any, context: __SerdeContext): ResourceAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundFault
 */
const de_ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePendingMaintenanceActions
 */
const de_ResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  return {
    PendingMaintenanceActionDetails:
      output.PendingMaintenanceActionDetails != null
        ? de_PendingMaintenanceActionDetails(output.PendingMaintenanceActionDetails, context)
        : undefined,
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceQuotaExceededFault
 */
const de_ResourceQuotaExceededFault = (output: any, context: __SerdeContext): ResourceQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RunFleetAdvisorLsaAnalysisResponse
 */
const de_RunFleetAdvisorLsaAnalysisResponse = (
  output: any,
  context: __SerdeContext
): RunFleetAdvisorLsaAnalysisResponse => {
  return {
    LsaAnalysisId: __expectString(output.LsaAnalysisId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1S3AccessDeniedFault
 */
const de_S3AccessDeniedFault = (output: any, context: __SerdeContext): S3AccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1S3ResourceNotFoundFault
 */
const de_S3ResourceNotFoundFault = (output: any, context: __SerdeContext): S3ResourceNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Settings
 */
const de_S3Settings = (output: any, context: __SerdeContext): S3Settings => {
  return {
    AddColumnName: __expectBoolean(output.AddColumnName),
    AddTrailingPaddingCharacter: __expectBoolean(output.AddTrailingPaddingCharacter),
    BucketFolder: __expectString(output.BucketFolder),
    BucketName: __expectString(output.BucketName),
    CannedAclForObjects: __expectString(output.CannedAclForObjects),
    CdcInsertsAndUpdates: __expectBoolean(output.CdcInsertsAndUpdates),
    CdcInsertsOnly: __expectBoolean(output.CdcInsertsOnly),
    CdcMaxBatchInterval: __expectInt32(output.CdcMaxBatchInterval),
    CdcMinFileSize: __expectInt32(output.CdcMinFileSize),
    CdcPath: __expectString(output.CdcPath),
    CompressionType: __expectString(output.CompressionType),
    CsvDelimiter: __expectString(output.CsvDelimiter),
    CsvNoSupValue: __expectString(output.CsvNoSupValue),
    CsvNullValue: __expectString(output.CsvNullValue),
    CsvRowDelimiter: __expectString(output.CsvRowDelimiter),
    DataFormat: __expectString(output.DataFormat),
    DataPageSize: __expectInt32(output.DataPageSize),
    DatePartitionDelimiter: __expectString(output.DatePartitionDelimiter),
    DatePartitionEnabled: __expectBoolean(output.DatePartitionEnabled),
    DatePartitionSequence: __expectString(output.DatePartitionSequence),
    DatePartitionTimezone: __expectString(output.DatePartitionTimezone),
    DictPageSizeLimit: __expectInt32(output.DictPageSizeLimit),
    EnableStatistics: __expectBoolean(output.EnableStatistics),
    EncodingType: __expectString(output.EncodingType),
    EncryptionMode: __expectString(output.EncryptionMode),
    ExpectedBucketOwner: __expectString(output.ExpectedBucketOwner),
    ExternalTableDefinition: __expectString(output.ExternalTableDefinition),
    GlueCatalogGeneration: __expectBoolean(output.GlueCatalogGeneration),
    IgnoreHeaderRows: __expectInt32(output.IgnoreHeaderRows),
    IncludeOpForFullLoad: __expectBoolean(output.IncludeOpForFullLoad),
    MaxFileSize: __expectInt32(output.MaxFileSize),
    ParquetTimestampInMillisecond: __expectBoolean(output.ParquetTimestampInMillisecond),
    ParquetVersion: __expectString(output.ParquetVersion),
    PreserveTransactions: __expectBoolean(output.PreserveTransactions),
    Rfc4180: __expectBoolean(output.Rfc4180),
    RowGroupLength: __expectInt32(output.RowGroupLength),
    ServerSideEncryptionKmsKeyId: __expectString(output.ServerSideEncryptionKmsKeyId),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    TimestampColumnName: __expectString(output.TimestampColumnName),
    UseCsvNoSupValue: __expectBoolean(output.UseCsvNoSupValue),
    UseTaskStartTimeForFullLoadTimestamp: __expectBoolean(output.UseTaskStartTimeForFullLoadTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaList
 */
const de_SchemaList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SchemaResponse
 */
const de_SchemaResponse = (output: any, context: __SerdeContext): SchemaResponse => {
  return {
    CodeLineCount: __expectLong(output.CodeLineCount),
    CodeSize: __expectLong(output.CodeSize),
    Complexity: __expectString(output.Complexity),
    DatabaseInstance:
      output.DatabaseInstance != null ? de_DatabaseShortInfoResponse(output.DatabaseInstance, context) : undefined,
    OriginalSchema:
      output.OriginalSchema != null ? de_SchemaShortInfoResponse(output.OriginalSchema, context) : undefined,
    SchemaId: __expectString(output.SchemaId),
    SchemaName: __expectString(output.SchemaName),
    Server: output.Server != null ? de_ServerShortInfoResponse(output.Server, context) : undefined,
    Similarity: __limitedParseDouble(output.Similarity),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaShortInfoResponse
 */
const de_SchemaShortInfoResponse = (output: any, context: __SerdeContext): SchemaShortInfoResponse => {
  return {
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseIpAddress: __expectString(output.DatabaseIpAddress),
    DatabaseName: __expectString(output.DatabaseName),
    SchemaId: __expectString(output.SchemaId),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

/**
 * deserializeAws_json1_1ServerShortInfoResponse
 */
const de_ServerShortInfoResponse = (output: any, context: __SerdeContext): ServerShortInfoResponse => {
  return {
    IpAddress: __expectString(output.IpAddress),
    ServerId: __expectString(output.ServerId),
    ServerName: __expectString(output.ServerName),
  } as any;
};

/**
 * deserializeAws_json1_1SNSInvalidTopicFault
 */
const de_SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SNSNoAuthorizationFault
 */
const de_SNSNoAuthorizationFault = (output: any, context: __SerdeContext): SNSNoAuthorizationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SourceIdsList
 */
const de_SourceIdsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentResponse
 */
const de_StartReplicationTaskAssessmentResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse
 */
const de_StartReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? de_ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartReplicationTaskResponse
 */
const de_StartReplicationTaskResponse = (output: any, context: __SerdeContext): StartReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopReplicationTaskResponse
 */
const de_StopReplicationTaskResponse = (output: any, context: __SerdeContext): StopReplicationTaskResponse => {
  return {
    ReplicationTask: output.ReplicationTask != null ? de_ReplicationTask(output.ReplicationTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StorageQuotaExceededFault
 */
const de_StorageQuotaExceededFault = (output: any, context: __SerdeContext): StorageQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Subnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    SubnetAvailabilityZone:
      output.SubnetAvailabilityZone != null ? de_AvailabilityZone(output.SubnetAvailabilityZone, context) : undefined,
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
    SubnetStatus: __expectString(output.SubnetStatus),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetAlreadyInUse
 */
const de_SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subnet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SupportedEndpointType
 */
const de_SupportedEndpointType = (output: any, context: __SerdeContext): SupportedEndpointType => {
  return {
    EndpointType: __expectString(output.EndpointType),
    EngineDisplayName: __expectString(output.EngineDisplayName),
    EngineName: __expectString(output.EngineName),
    ReplicationInstanceEngineMinimumVersion: __expectString(output.ReplicationInstanceEngineMinimumVersion),
    SupportsCDC: __expectBoolean(output.SupportsCDC),
  } as any;
};

/**
 * deserializeAws_json1_1SupportedEndpointTypeList
 */
const de_SupportedEndpointTypeList = (output: any, context: __SerdeContext): SupportedEndpointType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SupportedEndpointType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SybaseSettings
 */
const de_SybaseSettings = (output: any, context: __SerdeContext): SybaseSettings => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1TableStatistics
 */
const de_TableStatistics = (output: any, context: __SerdeContext): TableStatistics => {
  return {
    AppliedDdls: __expectLong(output.AppliedDdls),
    AppliedDeletes: __expectLong(output.AppliedDeletes),
    AppliedInserts: __expectLong(output.AppliedInserts),
    AppliedUpdates: __expectLong(output.AppliedUpdates),
    Ddls: __expectLong(output.Ddls),
    Deletes: __expectLong(output.Deletes),
    FullLoadCondtnlChkFailedRows: __expectLong(output.FullLoadCondtnlChkFailedRows),
    FullLoadEndTime:
      output.FullLoadEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FullLoadEndTime)))
        : undefined,
    FullLoadErrorRows: __expectLong(output.FullLoadErrorRows),
    FullLoadReloaded: __expectBoolean(output.FullLoadReloaded),
    FullLoadRows: __expectLong(output.FullLoadRows),
    FullLoadStartTime:
      output.FullLoadStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FullLoadStartTime)))
        : undefined,
    Inserts: __expectLong(output.Inserts),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    SchemaName: __expectString(output.SchemaName),
    TableName: __expectString(output.TableName),
    TableState: __expectString(output.TableState),
    Updates: __expectLong(output.Updates),
    ValidationFailedRecords: __expectLong(output.ValidationFailedRecords),
    ValidationPendingRecords: __expectLong(output.ValidationPendingRecords),
    ValidationState: __expectString(output.ValidationState),
    ValidationStateDetails: __expectString(output.ValidationStateDetails),
    ValidationSuspendedRecords: __expectLong(output.ValidationSuspendedRecords),
  } as any;
};

/**
 * deserializeAws_json1_1TableStatisticsList
 */
const de_TableStatisticsList = (output: any, context: __SerdeContext): TableStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    ResourceArn: __expectString(output.ResourceArn),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestConnectionResponse
 */
const de_TestConnectionResponse = (output: any, context: __SerdeContext): TestConnectionResponse => {
  return {
    Connection: output.Connection != null ? de_Connection(output.Connection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSubscriptionsToEventBridgeResponse
 */
const de_UpdateSubscriptionsToEventBridgeResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriptionsToEventBridgeResponse => {
  return {
    Result: __expectString(output.Result),
  } as any;
};

/**
 * deserializeAws_json1_1UpgradeDependencyFailureFault
 */
const de_UpgradeDependencyFailureFault = (output: any, context: __SerdeContext): UpgradeDependencyFailureFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupMembership
 */
const de_VpcSecurityGroupMembership = (output: any, context: __SerdeContext): VpcSecurityGroupMembership => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupMembershipList
 */
const de_VpcSecurityGroupMembershipList = (output: any, context: __SerdeContext): VpcSecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcSecurityGroupMembership(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
