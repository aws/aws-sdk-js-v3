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
  RebootReplicationInstanceMessage,
  RebootReplicationInstanceResponse,
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

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToResourceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ApplyPendingMaintenanceActionCommand = async (
  input: ApplyPendingMaintenanceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ApplyPendingMaintenanceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ApplyPendingMaintenanceActionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = async (
  input: CancelReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEndpointMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventSubscriptionCommand = async (
  input: CreateEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateEventSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEventSubscriptionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFleetAdvisorCollectorCommand = async (
  input: CreateFleetAdvisorCollectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateFleetAdvisorCollector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFleetAdvisorCollectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReplicationInstanceCommand = async (
  input: CreateReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateReplicationInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReplicationInstanceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReplicationSubnetGroupCommand = async (
  input: CreateReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateReplicationSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReplicationSubnetGroupMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReplicationTaskCommand = async (
  input: CreateReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.CreateReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEndpointMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventSubscriptionCommand = async (
  input: DeleteEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteEventSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventSubscriptionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetAdvisorCollectorCommand = async (
  input: DeleteFleetAdvisorCollectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteFleetAdvisorCollector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCollectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetAdvisorDatabasesCommand = async (
  input: DeleteFleetAdvisorDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteFleetAdvisorDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetAdvisorDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReplicationInstanceCommand = async (
  input: DeleteReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteReplicationInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReplicationInstanceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReplicationSubnetGroupCommand = async (
  input: DeleteReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteReplicationSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReplicationSubnetGroupMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReplicationTaskCommand = async (
  input: DeleteReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = async (
  input: DeleteReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeAccountAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = async (
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeApplicableIndividualAssessments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificatesCommand = async (
  input: DescribeCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificatesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionsCommand = async (
  input: DescribeConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEndpointsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointSettingsCommand = async (
  input: DescribeEndpointSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEndpointSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEndpointSettingsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointTypesCommand = async (
  input: DescribeEndpointTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEndpointTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEndpointTypesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventCategoriesCommand = async (
  input: DescribeEventCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEventCategories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventCategoriesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventSubscriptionsCommand = async (
  input: DescribeEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeEventSubscriptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventSubscriptionsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAdvisorCollectorsCommand = async (
  input: DescribeFleetAdvisorCollectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeFleetAdvisorCollectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAdvisorCollectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAdvisorDatabasesCommand = async (
  input: DescribeFleetAdvisorDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeFleetAdvisorDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAdvisorDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand = async (
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommand = async (
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetAdvisorSchemasCommand = async (
  input: DescribeFleetAdvisorSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeFleetAdvisorSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetAdvisorSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrderableReplicationInstancesCommand = async (
  input: DescribeOrderableReplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeOrderableReplicationInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrderableReplicationInstancesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePendingMaintenanceActionsCommand = async (
  input: DescribePendingMaintenanceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribePendingMaintenanceActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePendingMaintenanceActionsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRefreshSchemasStatusCommand = async (
  input: DescribeRefreshSchemasStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeRefreshSchemasStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRefreshSchemasStatusMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationInstancesCommand = async (
  input: DescribeReplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstancesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = async (
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationSubnetGroupsCommand = async (
  input: DescribeReplicationSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationSubnetGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationSubnetGroupsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = async (
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = async (
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = async (
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplicationTasksCommand = async (
  input: DescribeReplicationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeReplicationTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplicationTasksMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSchemasCommand = async (
  input: DescribeSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSchemasMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTableStatisticsCommand = async (
  input: DescribeTableStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.DescribeTableStatistics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTableStatisticsMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ImportCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyEndpointCommand = async (
  input: ModifyEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ModifyEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyEndpointMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyEventSubscriptionCommand = async (
  input: ModifyEventSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ModifyEventSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyEventSubscriptionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyReplicationInstanceCommand = async (
  input: ModifyReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ModifyReplicationInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyReplicationInstanceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyReplicationSubnetGroupCommand = async (
  input: ModifyReplicationSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ModifyReplicationSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyReplicationSubnetGroupMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyReplicationTaskCommand = async (
  input: ModifyReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ModifyReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MoveReplicationTaskCommand = async (
  input: MoveReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.MoveReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MoveReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootReplicationInstanceCommand = async (
  input: RebootReplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.RebootReplicationInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootReplicationInstanceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RefreshSchemasCommand = async (
  input: RefreshSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.RefreshSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RefreshSchemasMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReloadTablesCommand = async (
  input: ReloadTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.ReloadTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReloadTablesMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunFleetAdvisorLsaAnalysisCommand = async (
  input: RunFleetAdvisorLsaAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReplicationTaskCommand = async (
  input: StartReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.StartReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReplicationTaskAssessmentCommand = async (
  input: StartReplicationTaskAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReplicationTaskAssessmentRunCommand = async (
  input: StartReplicationTaskAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.StartReplicationTaskAssessmentRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReplicationTaskAssessmentRunMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopReplicationTaskCommand = async (
  input: StopReplicationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.StopReplicationTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopReplicationTaskMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestConnectionCommand = async (
  input: TestConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.TestConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestConnectionMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand = async (
  input: UpdateSubscriptionsToEventBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDMSv20160101.UpdateSubscriptionsToEventBridge",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSubscriptionsToEventBridgeMessage(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ApplyPendingMaintenanceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyPendingMaintenanceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ApplyPendingMaintenanceActionResponse(data, context);
  const response: ApplyPendingMaintenanceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ApplyPendingMaintenanceActionCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse(data, context);
  const response: CancelReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEndpointCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventSubscriptionResponse(data, context);
  const response: CreateEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventSubscriptionCommandError = async (
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
      throw await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context);
    case "KMSThrottlingFault":
    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
      throw await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopicFault":
    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
      throw await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorizationFault":
    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
      throw await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFleetAdvisorCollectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetAdvisorCollectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFleetAdvisorCollectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFleetAdvisorCollectorResponse(data, context);
  const response: CreateFleetAdvisorCollectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFleetAdvisorCollectorCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context);
    case "S3ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault":
      throw await deserializeAws_json1_1S3ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReplicationInstanceResponse(data, context);
  const response: CreateReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReplicationInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InsufficientResourceCapacityFault":
    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
      throw await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "StorageQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
      throw await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReplicationSubnetGroupResponse(data, context);
  const response: CreateReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReplicationSubnetGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReplicationTaskResponse(data, context);
  const response: CreateReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCertificateResponse(data, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEndpointCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEventSubscriptionResponse(data, context);
  const response: DeleteEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventSubscriptionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFleetAdvisorCollectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorCollectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetAdvisorCollectorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFleetAdvisorCollectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetAdvisorCollectorCommandError = async (
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
      throw await deserializeAws_json1_1CollectorNotFoundFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetAdvisorDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFleetAdvisorDatabasesResponse(data, context);
  const response: DeleteFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetAdvisorDatabasesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidOperationFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationInstanceResponse(data, context);
  const response: DeleteReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReplicationInstanceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationSubnetGroupResponse(data, context);
  const response: DeleteReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReplicationSubnetGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationTaskResponse(data, context);
  const response: DeleteReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse(data, context);
  const response: DeleteReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountAttributesCommandError = async (
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

export const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse(data, context);
  const response: DescribeApplicableIndividualAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificatesResponse(data, context);
  const response: DescribeCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificatesCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectionsResponse(data, context);
  const response: DescribeConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEndpointsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEndpointSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEndpointSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointSettingsResponse(data, context);
  const response: DescribeEndpointSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEndpointSettingsCommandError = async (
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

export const deserializeAws_json1_1DescribeEndpointTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEndpointTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointTypesResponse(data, context);
  const response: DescribeEndpointTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEndpointTypesCommandError = async (
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

export const deserializeAws_json1_1DescribeEventCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventCategoriesResponse(data, context);
  const response: DescribeEventCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventCategoriesCommandError = async (
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

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
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

export const deserializeAws_json1_1DescribeEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventSubscriptionsResponse(data, context);
  const response: DescribeEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventSubscriptionsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorCollectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAdvisorCollectorsResponse(data, context);
  const response: DescribeFleetAdvisorCollectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAdvisorCollectorsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAdvisorDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAdvisorDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAdvisorDatabasesResponse(data, context);
  const response: DescribeFleetAdvisorDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAdvisorDatabasesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisResponse(data, context);
  const response: DescribeFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryResponse(data, context);
  const response: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetAdvisorSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetAdvisorSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetAdvisorSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetAdvisorSchemasResponse(data, context);
  const response: DescribeFleetAdvisorSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetAdvisorSchemasCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrderableReplicationInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse(data, context);
  const response: DescribeOrderableReplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrderableReplicationInstancesCommandError = async (
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

export const deserializeAws_json1_1DescribePendingMaintenanceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePendingMaintenanceActionsResponse(data, context);
  const response: DescribePendingMaintenanceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePendingMaintenanceActionsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRefreshSchemasStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRefreshSchemasStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRefreshSchemasStatusResponse(data, context);
  const response: DescribeRefreshSchemasStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRefreshSchemasStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationInstancesResponse(data, context);
  const response: DescribeReplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationInstancesCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse(data, context);
  const response: DescribeReplicationInstanceTaskLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse(data, context);
  const response: DescribeReplicationSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationSubnetGroupsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse(data, context);
  const response: DescribeReplicationTaskAssessmentResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse(data, context);
  const response: DescribeReplicationTaskAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse(data, context);
  const response: DescribeReplicationTaskIndividualAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReplicationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplicationTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplicationTasksResponse(data, context);
  const response: DescribeReplicationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplicationTasksCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSchemasResponse(data, context);
  const response: DescribeSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSchemasCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTableStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTableStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTableStatisticsResponse(data, context);
  const response: DescribeTableStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTableStatisticsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InvalidCertificateFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyEndpointResponse(data, context);
  const response: ModifyEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyEndpointCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyEventSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEventSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyEventSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyEventSubscriptionResponse(data, context);
  const response: ModifyEventSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyEventSubscriptionCommandError = async (
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
      throw await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context);
    case "KMSThrottlingFault":
    case "com.amazonaws.databasemigrationservice#KMSThrottlingFault":
      throw await deserializeAws_json1_1KMSThrottlingFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "SNSInvalidTopicFault":
    case "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault":
      throw await deserializeAws_json1_1SNSInvalidTopicFaultResponse(parsedOutput, context);
    case "SNSNoAuthorizationFault":
    case "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault":
      throw await deserializeAws_json1_1SNSNoAuthorizationFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyReplicationInstanceResponse(data, context);
  const response: ModifyReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyReplicationInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InsufficientResourceCapacityFault":
    case "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault":
      throw await deserializeAws_json1_1InsufficientResourceCapacityFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "StorageQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault":
      throw await deserializeAws_json1_1StorageQuotaExceededFaultResponse(parsedOutput, context);
    case "UpgradeDependencyFailureFault":
    case "com.amazonaws.databasemigrationservice#UpgradeDependencyFailureFault":
      throw await deserializeAws_json1_1UpgradeDependencyFailureFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyReplicationSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyReplicationSubnetGroupResponse(data, context);
  const response: ModifyReplicationSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyReplicationSubnetGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.databasemigrationservice#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ReplicationSubnetGroupDoesNotCoverEnoughAZs":
    case "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs":
      throw await deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
    case "SubnetAlreadyInUse":
    case "com.amazonaws.databasemigrationservice#SubnetAlreadyInUse":
      throw await deserializeAws_json1_1SubnetAlreadyInUseResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyReplicationTaskResponse(data, context);
  const response: ModifyReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MoveReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MoveReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MoveReplicationTaskResponse(data, context);
  const response: MoveReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MoveReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootReplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootReplicationInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootReplicationInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootReplicationInstanceResponse(data, context);
  const response: RebootReplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootReplicationInstanceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RefreshSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RefreshSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RefreshSchemasResponse(data, context);
  const response: RefreshSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RefreshSchemasCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReloadTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReloadTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReloadTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReloadTablesResponse(data, context);
  const response: ReloadTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReloadTablesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RunFleetAdvisorLsaAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunFleetAdvisorLsaAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RunFleetAdvisorLsaAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunFleetAdvisorLsaAnalysisResponse(data, context);
  const response: RunFleetAdvisorLsaAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunFleetAdvisorLsaAnalysisCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReplicationTaskResponse(data, context);
  const response: StartReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartReplicationTaskAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReplicationTaskAssessmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReplicationTaskAssessmentResponse(data, context);
  const response: StartReplicationTaskAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReplicationTaskAssessmentCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationTaskAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse(data, context);
  const response: StartReplicationTaskAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReplicationTaskAssessmentRunCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSAccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault":
      throw await deserializeAws_json1_1KMSAccessDeniedFaultResponse(parsedOutput, context);
    case "KMSDisabledFault":
    case "com.amazonaws.databasemigrationservice#KMSDisabledFault":
      throw await deserializeAws_json1_1KMSDisabledFaultResponse(parsedOutput, context);
    case "KMSFault":
    case "com.amazonaws.databasemigrationservice#KMSFault":
      throw await deserializeAws_json1_1KMSFaultResponse(parsedOutput, context);
    case "KMSInvalidStateFault":
    case "com.amazonaws.databasemigrationservice#KMSInvalidStateFault":
      throw await deserializeAws_json1_1KMSInvalidStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "KMSNotFoundFault":
    case "com.amazonaws.databasemigrationservice#KMSNotFoundFault":
      throw await deserializeAws_json1_1KMSNotFoundFaultResponse(parsedOutput, context);
    case "ResourceAlreadyExistsFault":
    case "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault":
      throw await deserializeAws_json1_1ResourceAlreadyExistsFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "S3AccessDeniedFault":
    case "com.amazonaws.databasemigrationservice#S3AccessDeniedFault":
      throw await deserializeAws_json1_1S3AccessDeniedFaultResponse(parsedOutput, context);
    case "S3ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault":
      throw await deserializeAws_json1_1S3ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopReplicationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopReplicationTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopReplicationTaskResponse(data, context);
  const response: StopReplicationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopReplicationTaskCommandError = async (
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
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestConnectionResponse(data, context);
  const response: TestConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestConnectionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
    case "KMSKeyNotAccessibleFault":
    case "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault":
      throw await deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse(parsedOutput, context);
    case "ResourceNotFoundFault":
    case "com.amazonaws.databasemigrationservice#ResourceNotFoundFault":
      throw await deserializeAws_json1_1ResourceNotFoundFaultResponse(parsedOutput, context);
    case "ResourceQuotaExceededFault":
    case "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault":
      throw await deserializeAws_json1_1ResourceQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionsToEventBridgeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubscriptionsToEventBridgeResponse(data, context);
  const response: UpdateSubscriptionsToEventBridgeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubscriptionsToEventBridgeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedFaultResponse(parsedOutput, context);
    case "InvalidResourceStateFault":
    case "com.amazonaws.databasemigrationservice#InvalidResourceStateFault":
      throw await deserializeAws_json1_1InvalidResourceStateFaultResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedFault(body, context);
  const exception = new AccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CollectorNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CollectorNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CollectorNotFoundFault(body, context);
  const exception = new CollectorNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientResourceCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientResourceCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientResourceCapacityFault(body, context);
  const exception = new InsufficientResourceCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCertificateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCertificateFault(body, context);
  const exception = new InvalidCertificateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOperationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationFault(body, context);
  const exception = new InvalidOperationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateFault(body, context);
  const exception = new InvalidResourceStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(body, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSAccessDeniedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSAccessDeniedFault(body, context);
  const exception = new KMSAccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSDisabledFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSDisabledFault(body, context);
  const exception = new KMSDisabledFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSFault(body, context);
  const exception = new KMSFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInvalidStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateFault(body, context);
  const exception = new KMSInvalidStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSKeyNotAccessibleFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSKeyNotAccessibleFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSKeyNotAccessibleFault(body, context);
  const exception = new KMSKeyNotAccessibleFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSNotFoundFault(body, context);
  const exception = new KMSNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSThrottlingFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSThrottlingFault(body, context);
  const exception = new KMSThrottlingFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationSubnetGroupDoesNotCoverEnoughAZs> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs(body, context);
  const exception = new ReplicationSubnetGroupDoesNotCoverEnoughAZs({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsFault(body, context);
  const exception = new ResourceAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundFault(body, context);
  const exception = new ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceQuotaExceededFault(body, context);
  const exception = new ResourceQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1S3AccessDeniedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3AccessDeniedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1S3AccessDeniedFault(body, context);
  const exception = new S3AccessDeniedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1S3ResourceNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3ResourceNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1S3ResourceNotFoundFault(body, context);
  const exception = new S3ResourceNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SNSInvalidTopicFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSInvalidTopicFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SNSInvalidTopicFault(body, context);
  const exception = new SNSInvalidTopicFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SNSNoAuthorizationFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SNSNoAuthorizationFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SNSNoAuthorizationFault(body, context);
  const exception = new SNSNoAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1StorageQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StorageQuotaExceededFault(body, context);
  const exception = new StorageQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetAlreadyInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetAlreadyInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetAlreadyInUse(body, context);
  const exception = new SubnetAlreadyInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UpgradeDependencyFailureFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpgradeDependencyFailureFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UpgradeDependencyFailureFault(body, context);
  const exception = new UpgradeDependencyFailureFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsToResourceMessage = (
  input: AddTagsToResourceMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1ApplyPendingMaintenanceActionMessage = (
  input: ApplyPendingMaintenanceActionMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyAction != null && { ApplyAction: input.ApplyAction }),
    ...(input.OptInType != null && { OptInType: input.OptInType }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CancelReplicationTaskAssessmentRunMessage = (
  input: CancelReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskAssessmentRunArn != null && {
      ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }),
  };
};

const serializeAws_json1_1CreateEndpointMessage = (input: CreateEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DmsTransferSettings != null && {
      DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
    }),
    ...(input.DocDbSettings != null && {
      DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
    }),
    ...(input.DynamoDbSettings != null && {
      DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
    }),
    ...(input.ElasticsearchSettings != null && {
      ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
    }),
    ...(input.EndpointIdentifier != null && { EndpointIdentifier: input.EndpointIdentifier }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.ExternalTableDefinition != null && { ExternalTableDefinition: input.ExternalTableDefinition }),
    ...(input.ExtraConnectionAttributes != null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
    ...(input.GcpMySQLSettings != null && {
      GcpMySQLSettings: serializeAws_json1_1GcpMySQLSettings(input.GcpMySQLSettings, context),
    }),
    ...(input.IBMDb2Settings != null && {
      IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
    }),
    ...(input.KafkaSettings != null && {
      KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
    }),
    ...(input.KinesisSettings != null && {
      KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MicrosoftSQLServerSettings != null && {
      MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(
        input.MicrosoftSQLServerSettings,
        context
      ),
    }),
    ...(input.MongoDbSettings != null && {
      MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
    }),
    ...(input.MySQLSettings != null && {
      MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
    }),
    ...(input.NeptuneSettings != null && {
      NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
    }),
    ...(input.OracleSettings != null && {
      OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PostgreSQLSettings != null && {
      PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
    }),
    ...(input.RedisSettings != null && {
      RedisSettings: serializeAws_json1_1RedisSettings(input.RedisSettings, context),
    }),
    ...(input.RedshiftSettings != null && {
      RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
    }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
    ...(input.S3Settings != null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.SslMode != null && { SslMode: input.SslMode }),
    ...(input.SybaseSettings != null && {
      SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1CreateEventSubscriptionMessage = (
  input: CreateEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventCategories != null && {
      EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceIds != null && { SourceIds: serializeAws_json1_1SourceIdsList(input.SourceIds, context) }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateFleetAdvisorCollectorRequest = (
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

const serializeAws_json1_1CreateReplicationInstanceMessage = (
  input: CreateReplicationInstanceMessage,
  context: __SerdeContext
): any => {
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
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VpcSecurityGroupIds != null && {
      VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }),
  };
};

const serializeAws_json1_1CreateReplicationSubnetGroupMessage = (
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
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateReplicationTaskMessage = (
  input: CreateReplicationTaskMessage,
  context: __SerdeContext
): any => {
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
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TargetEndpointArn != null && { TargetEndpointArn: input.TargetEndpointArn }),
    ...(input.TaskData != null && { TaskData: input.TaskData }),
  };
};

const serializeAws_json1_1DeleteCertificateMessage = (
  input: DeleteCertificateMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1DeleteCollectorRequest = (input: DeleteCollectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.CollectorReferencedId != null && { CollectorReferencedId: input.CollectorReferencedId }),
  };
};

const serializeAws_json1_1DeleteConnectionMessage = (input: DeleteConnectionMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1DeleteEndpointMessage = (input: DeleteEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DeleteEventSubscriptionMessage = (
  input: DeleteEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

const serializeAws_json1_1DeleteFleetAdvisorDatabasesRequest = (
  input: DeleteFleetAdvisorDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseIds != null && { DatabaseIds: serializeAws_json1_1StringList(input.DatabaseIds, context) }),
  };
};

const serializeAws_json1_1DeleteReplicationInstanceMessage = (
  input: DeleteReplicationInstanceMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1DeleteReplicationSubnetGroupMessage = (
  input: DeleteReplicationSubnetGroupMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationSubnetGroupIdentifier != null && {
      ReplicationSubnetGroupIdentifier: input.ReplicationSubnetGroupIdentifier,
    }),
  };
};

const serializeAws_json1_1DeleteReplicationTaskAssessmentRunMessage = (
  input: DeleteReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskAssessmentRunArn != null && {
      ReplicationTaskAssessmentRunArn: input.ReplicationTaskAssessmentRunArn,
    }),
  };
};

const serializeAws_json1_1DeleteReplicationTaskMessage = (
  input: DeleteReplicationTaskMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

const serializeAws_json1_1DescribeAccountAttributesMessage = (
  input: DescribeAccountAttributesMessage,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeApplicableIndividualAssessmentsMessage = (
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

const serializeAws_json1_1DescribeCertificatesMessage = (
  input: DescribeCertificatesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeConnectionsMessage = (
  input: DescribeConnectionsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeEndpointSettingsMessage = (
  input: DescribeEndpointSettingsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeEndpointsMessage = (
  input: DescribeEndpointsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeEndpointTypesMessage = (
  input: DescribeEndpointTypesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeEventCategoriesMessage = (
  input: DescribeEventCategoriesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

const serializeAws_json1_1DescribeEventsMessage = (input: DescribeEventsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventCategories != null && {
      EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.SourceIdentifier != null && { SourceIdentifier: input.SourceIdentifier }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeEventSubscriptionsMessage = (
  input: DescribeEventSubscriptionsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

const serializeAws_json1_1DescribeFleetAdvisorCollectorsRequest = (
  input: DescribeFleetAdvisorCollectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetAdvisorDatabasesRequest = (
  input: DescribeFleetAdvisorDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetAdvisorLsaAnalysisRequest = (
  input: DescribeFleetAdvisorLsaAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryRequest = (
  input: DescribeFleetAdvisorSchemaObjectSummaryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFleetAdvisorSchemasRequest = (
  input: DescribeFleetAdvisorSchemasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeOrderableReplicationInstancesMessage = (
  input: DescribeOrderableReplicationInstancesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribePendingMaintenanceActionsMessage = (
  input: DescribePendingMaintenanceActionsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1DescribeRefreshSchemasStatusMessage = (
  input: DescribeRefreshSchemasStatusMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
  };
};

const serializeAws_json1_1DescribeReplicationInstancesMessage = (
  input: DescribeReplicationInstancesMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeReplicationInstanceTaskLogsMessage = (
  input: DescribeReplicationInstanceTaskLogsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1DescribeReplicationSubnetGroupsMessage = (
  input: DescribeReplicationSubnetGroupsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeReplicationTaskAssessmentResultsMessage = (
  input: DescribeReplicationTaskAssessmentResultsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

const serializeAws_json1_1DescribeReplicationTaskAssessmentRunsMessage = (
  input: DescribeReplicationTaskAssessmentRunsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsMessage = (
  input: DescribeReplicationTaskIndividualAssessmentsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeReplicationTasksMessage = (
  input: DescribeReplicationTasksMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.WithoutSettings != null && { WithoutSettings: input.WithoutSettings }),
  };
};

const serializeAws_json1_1DescribeSchemasMessage = (input: DescribeSchemasMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
  };
};

const serializeAws_json1_1DescribeTableStatisticsMessage = (
  input: DescribeTableStatisticsMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxRecords != null && { MaxRecords: input.MaxRecords }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

const serializeAws_json1_1DmsTransferSettings = (input: DmsTransferSettings, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

const serializeAws_json1_1DocDbSettings = (input: DocDbSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1DynamoDbSettings = (input: DynamoDbSettings, context: __SerdeContext): any => {
  return {
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

const serializeAws_json1_1ElasticsearchSettings = (input: ElasticsearchSettings, context: __SerdeContext): any => {
  return {
    ...(input.EndpointUri != null && { EndpointUri: input.EndpointUri }),
    ...(input.ErrorRetryDuration != null && { ErrorRetryDuration: input.ErrorRetryDuration }),
    ...(input.FullLoadErrorPercentage != null && { FullLoadErrorPercentage: input.FullLoadErrorPercentage }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.UseNewMappingType != null && { UseNewMappingType: input.UseNewMappingType }),
  };
};

const serializeAws_json1_1EventCategoriesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExcludeTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GcpMySQLSettings = (input: GcpMySQLSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1IBMDb2Settings = (input: IBMDb2Settings, context: __SerdeContext): any => {
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

const serializeAws_json1_1ImportCertificateMessage = (
  input: ImportCertificateMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateIdentifier != null && { CertificateIdentifier: input.CertificateIdentifier }),
    ...(input.CertificatePem != null && { CertificatePem: input.CertificatePem }),
    ...(input.CertificateWallet != null && { CertificateWallet: context.base64Encoder(input.CertificateWallet) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1IncludeTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1KafkaSettings = (input: KafkaSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1KinesisSettings = (input: KinesisSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1ListTagsForResourceMessage = (
  input: ListTagsForResourceMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceArnList != null && {
      ResourceArnList: serializeAws_json1_1ArnList(input.ResourceArnList, context),
    }),
  };
};

const serializeAws_json1_1MicrosoftSQLServerSettings = (
  input: MicrosoftSQLServerSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BcpPacketSize != null && { BcpPacketSize: input.BcpPacketSize }),
    ...(input.ControlTablesFileGroup != null && { ControlTablesFileGroup: input.ControlTablesFileGroup }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
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
    ...(input.TrimSpaceInChar != null && { TrimSpaceInChar: input.TrimSpaceInChar }),
    ...(input.UseBcpFullLoad != null && { UseBcpFullLoad: input.UseBcpFullLoad }),
    ...(input.UseThirdPartyBackupDevice != null && { UseThirdPartyBackupDevice: input.UseThirdPartyBackupDevice }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1ModifyEndpointMessage = (input: ModifyEndpointMessage, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DmsTransferSettings != null && {
      DmsTransferSettings: serializeAws_json1_1DmsTransferSettings(input.DmsTransferSettings, context),
    }),
    ...(input.DocDbSettings != null && {
      DocDbSettings: serializeAws_json1_1DocDbSettings(input.DocDbSettings, context),
    }),
    ...(input.DynamoDbSettings != null && {
      DynamoDbSettings: serializeAws_json1_1DynamoDbSettings(input.DynamoDbSettings, context),
    }),
    ...(input.ElasticsearchSettings != null && {
      ElasticsearchSettings: serializeAws_json1_1ElasticsearchSettings(input.ElasticsearchSettings, context),
    }),
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.EndpointIdentifier != null && { EndpointIdentifier: input.EndpointIdentifier }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.EngineName != null && { EngineName: input.EngineName }),
    ...(input.ExactSettings != null && { ExactSettings: input.ExactSettings }),
    ...(input.ExternalTableDefinition != null && { ExternalTableDefinition: input.ExternalTableDefinition }),
    ...(input.ExtraConnectionAttributes != null && { ExtraConnectionAttributes: input.ExtraConnectionAttributes }),
    ...(input.GcpMySQLSettings != null && {
      GcpMySQLSettings: serializeAws_json1_1GcpMySQLSettings(input.GcpMySQLSettings, context),
    }),
    ...(input.IBMDb2Settings != null && {
      IBMDb2Settings: serializeAws_json1_1IBMDb2Settings(input.IBMDb2Settings, context),
    }),
    ...(input.KafkaSettings != null && {
      KafkaSettings: serializeAws_json1_1KafkaSettings(input.KafkaSettings, context),
    }),
    ...(input.KinesisSettings != null && {
      KinesisSettings: serializeAws_json1_1KinesisSettings(input.KinesisSettings, context),
    }),
    ...(input.MicrosoftSQLServerSettings != null && {
      MicrosoftSQLServerSettings: serializeAws_json1_1MicrosoftSQLServerSettings(
        input.MicrosoftSQLServerSettings,
        context
      ),
    }),
    ...(input.MongoDbSettings != null && {
      MongoDbSettings: serializeAws_json1_1MongoDbSettings(input.MongoDbSettings, context),
    }),
    ...(input.MySQLSettings != null && {
      MySQLSettings: serializeAws_json1_1MySQLSettings(input.MySQLSettings, context),
    }),
    ...(input.NeptuneSettings != null && {
      NeptuneSettings: serializeAws_json1_1NeptuneSettings(input.NeptuneSettings, context),
    }),
    ...(input.OracleSettings != null && {
      OracleSettings: serializeAws_json1_1OracleSettings(input.OracleSettings, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PostgreSQLSettings != null && {
      PostgreSQLSettings: serializeAws_json1_1PostgreSQLSettings(input.PostgreSQLSettings, context),
    }),
    ...(input.RedisSettings != null && {
      RedisSettings: serializeAws_json1_1RedisSettings(input.RedisSettings, context),
    }),
    ...(input.RedshiftSettings != null && {
      RedshiftSettings: serializeAws_json1_1RedshiftSettings(input.RedshiftSettings, context),
    }),
    ...(input.S3Settings != null && { S3Settings: serializeAws_json1_1S3Settings(input.S3Settings, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
    ...(input.SslMode != null && { SslMode: input.SslMode }),
    ...(input.SybaseSettings != null && {
      SybaseSettings: serializeAws_json1_1SybaseSettings(input.SybaseSettings, context),
    }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1ModifyEventSubscriptionMessage = (
  input: ModifyEventSubscriptionMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventCategories != null && {
      EventCategories: serializeAws_json1_1EventCategoriesList(input.EventCategories, context),
    }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
  };
};

const serializeAws_json1_1ModifyReplicationInstanceMessage = (
  input: ModifyReplicationInstanceMessage,
  context: __SerdeContext
): any => {
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
      VpcSecurityGroupIds: serializeAws_json1_1VpcSecurityGroupIdList(input.VpcSecurityGroupIds, context),
    }),
  };
};

const serializeAws_json1_1ModifyReplicationSubnetGroupMessage = (
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
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1ModifyReplicationTaskMessage = (
  input: ModifyReplicationTaskMessage,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1MongoDbSettings = (input: MongoDbSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1MoveReplicationTaskMessage = (
  input: MoveReplicationTaskMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.TargetReplicationInstanceArn != null && {
      TargetReplicationInstanceArn: input.TargetReplicationInstanceArn,
    }),
  };
};

const serializeAws_json1_1MySQLSettings = (input: MySQLSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1NeptuneSettings = (input: NeptuneSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1OracleSettings = (input: OracleSettings, context: __SerdeContext): any => {
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
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DirectPathNoLog != null && { DirectPathNoLog: input.DirectPathNoLog }),
    ...(input.DirectPathParallelLoad != null && { DirectPathParallelLoad: input.DirectPathParallelLoad }),
    ...(input.EnableHomogenousTablespace != null && { EnableHomogenousTablespace: input.EnableHomogenousTablespace }),
    ...(input.ExtraArchivedLogDestIds != null && {
      ExtraArchivedLogDestIds: serializeAws_json1_1IntegerList(input.ExtraArchivedLogDestIds, context),
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

const serializeAws_json1_1PostgreSQLSettings = (input: PostgreSQLSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1RebootReplicationInstanceMessage = (
  input: RebootReplicationInstanceMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForceFailover != null && { ForceFailover: input.ForceFailover }),
    ...(input.ForcePlannedFailover != null && { ForcePlannedFailover: input.ForcePlannedFailover }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1RedisSettings = (input: RedisSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1RedshiftSettings = (input: RedshiftSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1RefreshSchemasMessage = (input: RefreshSchemasMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1ReloadTablesMessage = (input: ReloadTablesMessage, context: __SerdeContext): any => {
  return {
    ...(input.ReloadOption != null && { ReloadOption: input.ReloadOption }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.TablesToReload != null && {
      TablesToReload: serializeAws_json1_1TableListToReload(input.TablesToReload, context),
    }),
  };
};

const serializeAws_json1_1RemoveTagsFromResourceMessage = (
  input: RemoveTagsFromResourceMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1S3Settings = (input: S3Settings, context: __SerdeContext): any => {
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

const serializeAws_json1_1SourceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartReplicationTaskAssessmentMessage = (
  input: StartReplicationTaskAssessmentMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

const serializeAws_json1_1StartReplicationTaskAssessmentRunMessage = (
  input: StartReplicationTaskAssessmentRunMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssessmentRunName != null && { AssessmentRunName: input.AssessmentRunName }),
    ...(input.Exclude != null && { Exclude: serializeAws_json1_1ExcludeTestList(input.Exclude, context) }),
    ...(input.IncludeOnly != null && { IncludeOnly: serializeAws_json1_1IncludeTestList(input.IncludeOnly, context) }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.ResultEncryptionMode != null && { ResultEncryptionMode: input.ResultEncryptionMode }),
    ...(input.ResultKmsKeyArn != null && { ResultKmsKeyArn: input.ResultKmsKeyArn }),
    ...(input.ResultLocationBucket != null && { ResultLocationBucket: input.ResultLocationBucket }),
    ...(input.ResultLocationFolder != null && { ResultLocationFolder: input.ResultLocationFolder }),
    ...(input.ServiceAccessRoleArn != null && { ServiceAccessRoleArn: input.ServiceAccessRoleArn }),
  };
};

const serializeAws_json1_1StartReplicationTaskMessage = (
  input: StartReplicationTaskMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.CdcStartPosition != null && { CdcStartPosition: input.CdcStartPosition }),
    ...(input.CdcStartTime != null && { CdcStartTime: Math.round(input.CdcStartTime.getTime() / 1000) }),
    ...(input.CdcStopPosition != null && { CdcStopPosition: input.CdcStopPosition }),
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
    ...(input.StartReplicationTaskType != null && { StartReplicationTaskType: input.StartReplicationTaskType }),
  };
};

const serializeAws_json1_1StopReplicationTaskMessage = (
  input: StopReplicationTaskMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReplicationTaskArn != null && { ReplicationTaskArn: input.ReplicationTaskArn }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SybaseSettings = (input: SybaseSettings, context: __SerdeContext): any => {
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

const serializeAws_json1_1TableListToReload = (input: TableToReload[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TableToReload(entry, context);
    });
};

const serializeAws_json1_1TableToReload = (input: TableToReload, context: __SerdeContext): any => {
  return {
    ...(input.SchemaName != null && { SchemaName: input.SchemaName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TestConnectionMessage = (input: TestConnectionMessage, context: __SerdeContext): any => {
  return {
    ...(input.EndpointArn != null && { EndpointArn: input.EndpointArn }),
    ...(input.ReplicationInstanceArn != null && { ReplicationInstanceArn: input.ReplicationInstanceArn }),
  };
};

const serializeAws_json1_1UpdateSubscriptionsToEventBridgeMessage = (
  input: UpdateSubscriptionsToEventBridgeMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForceMove != null && { ForceMove: input.ForceMove }),
  };
};

const serializeAws_json1_1VpcSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AccessDeniedFault = (output: any, context: __SerdeContext): AccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AccountQuota = (output: any, context: __SerdeContext): AccountQuota => {
  return {
    AccountQuotaName: __expectString(output.AccountQuotaName),
    Max: __expectLong(output.Max),
    Used: __expectLong(output.Used),
  } as any;
};

const deserializeAws_json1_1AccountQuotaList = (output: any, context: __SerdeContext): AccountQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountQuota(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AddTagsToResourceResponse = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ApplyPendingMaintenanceActionResponse = (
  output: any,
  context: __SerdeContext
): ApplyPendingMaintenanceActionResponse => {
  return {
    ResourcePendingMaintenanceActions:
      output.ResourcePendingMaintenanceActions != null
        ? deserializeAws_json1_1ResourcePendingMaintenanceActions(output.ResourcePendingMaintenanceActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AvailabilityZonesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CancelReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): CancelReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Certificate = (output: any, context: __SerdeContext): Certificate => {
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

const deserializeAws_json1_1CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Certificate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CollectorHealthCheck = (output: any, context: __SerdeContext): CollectorHealthCheck => {
  return {
    CollectorStatus: __expectString(output.CollectorStatus),
    LocalCollectorS3Access: __expectBoolean(output.LocalCollectorS3Access),
    WebCollectorGrantedRoleBasedAccess: __expectBoolean(output.WebCollectorGrantedRoleBasedAccess),
    WebCollectorS3Access: __expectBoolean(output.WebCollectorS3Access),
  } as any;
};

const deserializeAws_json1_1CollectorNotFoundFault = (output: any, context: __SerdeContext): CollectorNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CollectorResponse = (output: any, context: __SerdeContext): CollectorResponse => {
  return {
    CollectorHealthCheck:
      output.CollectorHealthCheck != null
        ? deserializeAws_json1_1CollectorHealthCheck(output.CollectorHealthCheck, context)
        : undefined,
    CollectorName: __expectString(output.CollectorName),
    CollectorReferencedId: __expectString(output.CollectorReferencedId),
    CollectorVersion: __expectString(output.CollectorVersion),
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    InventoryData:
      output.InventoryData != null ? deserializeAws_json1_1InventoryData(output.InventoryData, context) : undefined,
    LastDataReceived: __expectString(output.LastDataReceived),
    ModifiedDate: __expectString(output.ModifiedDate),
    RegisteredDate: __expectString(output.RegisteredDate),
    S3BucketName: __expectString(output.S3BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    VersionStatus: __expectString(output.VersionStatus),
  } as any;
};

const deserializeAws_json1_1CollectorResponses = (output: any, context: __SerdeContext): CollectorResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CollectorResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CollectorShortInfoResponse = (
  output: any,
  context: __SerdeContext
): CollectorShortInfoResponse => {
  return {
    CollectorName: __expectString(output.CollectorName),
    CollectorReferencedId: __expectString(output.CollectorReferencedId),
  } as any;
};

const deserializeAws_json1_1CollectorsList = (output: any, context: __SerdeContext): CollectorShortInfoResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CollectorShortInfoResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    EndpointArn: __expectString(output.EndpointArn),
    EndpointIdentifier: __expectString(output.EndpointIdentifier),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceIdentifier: __expectString(output.ReplicationInstanceIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? deserializeAws_json1_1Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEventSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null
        ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFleetAdvisorCollectorResponse = (
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

const deserializeAws_json1_1CreateReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null
        ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationSubnetGroupResponse => {
  return {
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseInstanceSoftwareDetailsResponse = (
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

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): DatabaseResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatabaseResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatabaseResponse = (output: any, context: __SerdeContext): DatabaseResponse => {
  return {
    Collectors:
      output.Collectors != null ? deserializeAws_json1_1CollectorsList(output.Collectors, context) : undefined,
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseName: __expectString(output.DatabaseName),
    IpAddress: __expectString(output.IpAddress),
    NumberOfSchemas: __expectLong(output.NumberOfSchemas),
    Server: output.Server != null ? deserializeAws_json1_1ServerShortInfoResponse(output.Server, context) : undefined,
    SoftwareDetails:
      output.SoftwareDetails != null
        ? deserializeAws_json1_1DatabaseInstanceSoftwareDetailsResponse(output.SoftwareDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseShortInfoResponse = (
  output: any,
  context: __SerdeContext
): DatabaseShortInfoResponse => {
  return {
    DatabaseEngine: __expectString(output.DatabaseEngine),
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseIpAddress: __expectString(output.DatabaseIpAddress),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

const deserializeAws_json1_1DeleteCertificateResponse = (
  output: any,
  context: __SerdeContext
): DeleteCertificateResponse => {
  return {
    Certificate:
      output.Certificate != null ? deserializeAws_json1_1Certificate(output.Certificate, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {
    Connection: output.Connection != null ? deserializeAws_json1_1Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? deserializeAws_json1_1Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteEventSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null
        ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFleetAdvisorDatabasesResponse = (
  output: any,
  context: __SerdeContext
): DeleteFleetAdvisorDatabasesResponse => {
  return {
    DatabaseIds: output.DatabaseIds != null ? deserializeAws_json1_1StringList(output.DatabaseIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null
        ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationSubnetGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAccountAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResponse => {
  return {
    AccountQuotas:
      output.AccountQuotas != null ? deserializeAws_json1_1AccountQuotaList(output.AccountQuotas, context) : undefined,
    UniqueAccountIdentifier: __expectString(output.UniqueAccountIdentifier),
  } as any;
};

const deserializeAws_json1_1DescribeApplicableIndividualAssessmentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicableIndividualAssessmentsResponse => {
  return {
    IndividualAssessmentNames:
      output.IndividualAssessmentNames != null
        ? deserializeAws_json1_1IndividualAssessmentNameList(output.IndividualAssessmentNames, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeCertificatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificatesResponse => {
  return {
    Certificates:
      output.Certificates != null ? deserializeAws_json1_1CertificateList(output.Certificates, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeConnectionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConnectionsResponse => {
  return {
    Connections:
      output.Connections != null ? deserializeAws_json1_1ConnectionList(output.Connections, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeEndpointSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointSettingsResponse => {
  return {
    EndpointSettings:
      output.EndpointSettings != null
        ? deserializeAws_json1_1EndpointSettingsList(output.EndpointSettings, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? deserializeAws_json1_1EndpointList(output.Endpoints, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeEndpointTypesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointTypesResponse => {
  return {
    Marker: __expectString(output.Marker),
    SupportedEndpointTypes:
      output.SupportedEndpointTypes != null
        ? deserializeAws_json1_1SupportedEndpointTypeList(output.SupportedEndpointTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventCategoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventCategoriesResponse => {
  return {
    EventCategoryGroupList:
      output.EventCategoryGroupList != null
        ? deserializeAws_json1_1EventCategoryGroupList(output.EventCategoryGroupList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventList(output.Events, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeEventSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSubscriptionsResponse => {
  return {
    EventSubscriptionsList:
      output.EventSubscriptionsList != null
        ? deserializeAws_json1_1EventSubscriptionsList(output.EventSubscriptionsList, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1DescribeFleetAdvisorCollectorsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorCollectorsResponse => {
  return {
    Collectors:
      output.Collectors != null ? deserializeAws_json1_1CollectorResponses(output.Collectors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetAdvisorDatabasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorDatabasesResponse => {
  return {
    Databases: output.Databases != null ? deserializeAws_json1_1DatabaseList(output.Databases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetAdvisorLsaAnalysisResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorLsaAnalysisResponse => {
  return {
    Analysis:
      output.Analysis != null
        ? deserializeAws_json1_1FleetAdvisorLsaAnalysisResponseList(output.Analysis, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetAdvisorSchemaObjectSummaryResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorSchemaObjectSummaryResponse => {
  return {
    FleetAdvisorSchemaObjects:
      output.FleetAdvisorSchemaObjects != null
        ? deserializeAws_json1_1FleetAdvisorSchemaObjectList(output.FleetAdvisorSchemaObjects, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetAdvisorSchemasResponse = (
  output: any,
  context: __SerdeContext
): DescribeFleetAdvisorSchemasResponse => {
  return {
    FleetAdvisorSchemas:
      output.FleetAdvisorSchemas != null
        ? deserializeAws_json1_1FleetAdvisorSchemaList(output.FleetAdvisorSchemas, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeOrderableReplicationInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrderableReplicationInstancesResponse => {
  return {
    Marker: __expectString(output.Marker),
    OrderableReplicationInstances:
      output.OrderableReplicationInstances != null
        ? deserializeAws_json1_1OrderableReplicationInstanceList(output.OrderableReplicationInstances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePendingMaintenanceActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribePendingMaintenanceActionsResponse => {
  return {
    Marker: __expectString(output.Marker),
    PendingMaintenanceActions:
      output.PendingMaintenanceActions != null
        ? deserializeAws_json1_1PendingMaintenanceActions(output.PendingMaintenanceActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRefreshSchemasStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeRefreshSchemasStatusResponse => {
  return {
    RefreshSchemasStatus:
      output.RefreshSchemasStatus != null
        ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationInstancesResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationInstancesResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationInstances:
      output.ReplicationInstances != null
        ? deserializeAws_json1_1ReplicationInstanceList(output.ReplicationInstances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationInstanceTaskLogsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationInstanceTaskLogsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceTaskLogs:
      output.ReplicationInstanceTaskLogs != null
        ? deserializeAws_json1_1ReplicationInstanceTaskLogsList(output.ReplicationInstanceTaskLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationSubnetGroupsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationSubnetGroups:
      output.ReplicationSubnetGroups != null
        ? deserializeAws_json1_1ReplicationSubnetGroups(output.ReplicationSubnetGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentResultsResponse => {
  return {
    BucketName: __expectString(output.BucketName),
    Marker: __expectString(output.Marker),
    ReplicationTaskAssessmentResults:
      output.ReplicationTaskAssessmentResults != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentResultList(output.ReplicationTaskAssessmentResults, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskAssessmentRunsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskAssessmentRuns:
      output.ReplicationTaskAssessmentRuns != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentRunList(output.ReplicationTaskAssessmentRuns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTaskIndividualAssessmentsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskIndividualAssessments:
      output.ReplicationTaskIndividualAssessments != null
        ? deserializeAws_json1_1ReplicationTaskIndividualAssessmentList(
            output.ReplicationTaskIndividualAssessments,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplicationTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeReplicationTasksResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTasks:
      output.ReplicationTasks != null
        ? deserializeAws_json1_1ReplicationTaskList(output.ReplicationTasks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSchemasResponse = (
  output: any,
  context: __SerdeContext
): DescribeSchemasResponse => {
  return {
    Marker: __expectString(output.Marker),
    Schemas: output.Schemas != null ? deserializeAws_json1_1SchemaList(output.Schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTableStatisticsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTableStatisticsResponse => {
  return {
    Marker: __expectString(output.Marker),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    TableStatistics:
      output.TableStatistics != null
        ? deserializeAws_json1_1TableStatisticsList(output.TableStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DmsTransferSettings = (output: any, context: __SerdeContext): DmsTransferSettings => {
  return {
    BucketName: __expectString(output.BucketName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

const deserializeAws_json1_1DocDbSettings = (output: any, context: __SerdeContext): DocDbSettings => {
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

const deserializeAws_json1_1DynamoDbSettings = (output: any, context: __SerdeContext): DynamoDbSettings => {
  return {
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
  } as any;
};

const deserializeAws_json1_1ElasticsearchSettings = (output: any, context: __SerdeContext): ElasticsearchSettings => {
  return {
    EndpointUri: __expectString(output.EndpointUri),
    ErrorRetryDuration: __expectInt32(output.ErrorRetryDuration),
    FullLoadErrorPercentage: __expectInt32(output.FullLoadErrorPercentage),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    UseNewMappingType: __expectBoolean(output.UseNewMappingType),
  } as any;
};

const deserializeAws_json1_1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    DatabaseName: __expectString(output.DatabaseName),
    DmsTransferSettings:
      output.DmsTransferSettings != null
        ? deserializeAws_json1_1DmsTransferSettings(output.DmsTransferSettings, context)
        : undefined,
    DocDbSettings:
      output.DocDbSettings != null ? deserializeAws_json1_1DocDbSettings(output.DocDbSettings, context) : undefined,
    DynamoDbSettings:
      output.DynamoDbSettings != null
        ? deserializeAws_json1_1DynamoDbSettings(output.DynamoDbSettings, context)
        : undefined,
    ElasticsearchSettings:
      output.ElasticsearchSettings != null
        ? deserializeAws_json1_1ElasticsearchSettings(output.ElasticsearchSettings, context)
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
      output.GcpMySQLSettings != null
        ? deserializeAws_json1_1GcpMySQLSettings(output.GcpMySQLSettings, context)
        : undefined,
    IBMDb2Settings:
      output.IBMDb2Settings != null ? deserializeAws_json1_1IBMDb2Settings(output.IBMDb2Settings, context) : undefined,
    KafkaSettings:
      output.KafkaSettings != null ? deserializeAws_json1_1KafkaSettings(output.KafkaSettings, context) : undefined,
    KinesisSettings:
      output.KinesisSettings != null
        ? deserializeAws_json1_1KinesisSettings(output.KinesisSettings, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    MicrosoftSQLServerSettings:
      output.MicrosoftSQLServerSettings != null
        ? deserializeAws_json1_1MicrosoftSQLServerSettings(output.MicrosoftSQLServerSettings, context)
        : undefined,
    MongoDbSettings:
      output.MongoDbSettings != null
        ? deserializeAws_json1_1MongoDbSettings(output.MongoDbSettings, context)
        : undefined,
    MySQLSettings:
      output.MySQLSettings != null ? deserializeAws_json1_1MySQLSettings(output.MySQLSettings, context) : undefined,
    NeptuneSettings:
      output.NeptuneSettings != null
        ? deserializeAws_json1_1NeptuneSettings(output.NeptuneSettings, context)
        : undefined,
    OracleSettings:
      output.OracleSettings != null ? deserializeAws_json1_1OracleSettings(output.OracleSettings, context) : undefined,
    Port: __expectInt32(output.Port),
    PostgreSQLSettings:
      output.PostgreSQLSettings != null
        ? deserializeAws_json1_1PostgreSQLSettings(output.PostgreSQLSettings, context)
        : undefined,
    RedisSettings:
      output.RedisSettings != null ? deserializeAws_json1_1RedisSettings(output.RedisSettings, context) : undefined,
    RedshiftSettings:
      output.RedshiftSettings != null
        ? deserializeAws_json1_1RedshiftSettings(output.RedshiftSettings, context)
        : undefined,
    S3Settings: output.S3Settings != null ? deserializeAws_json1_1S3Settings(output.S3Settings, context) : undefined,
    ServerName: __expectString(output.ServerName),
    ServiceAccessRoleArn: __expectString(output.ServiceAccessRoleArn),
    SslMode: __expectString(output.SslMode),
    Status: __expectString(output.Status),
    SybaseSettings:
      output.SybaseSettings != null ? deserializeAws_json1_1SybaseSettings(output.SybaseSettings, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1EndpointList = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Endpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EndpointSetting = (output: any, context: __SerdeContext): EndpointSetting => {
  return {
    Applicability: __expectString(output.Applicability),
    DefaultValue: __expectString(output.DefaultValue),
    EnumValues:
      output.EnumValues != null
        ? deserializeAws_json1_1EndpointSettingEnumValues(output.EnumValues, context)
        : undefined,
    IntValueMax: __expectInt32(output.IntValueMax),
    IntValueMin: __expectInt32(output.IntValueMin),
    Name: __expectString(output.Name),
    Sensitive: __expectBoolean(output.Sensitive),
    Type: __expectString(output.Type),
    Units: __expectString(output.Units),
  } as any;
};

const deserializeAws_json1_1EndpointSettingEnumValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EndpointSettingsList = (output: any, context: __SerdeContext): EndpointSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EndpointSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    EventCategories:
      output.EventCategories != null
        ? deserializeAws_json1_1EventCategoriesList(output.EventCategories, context)
        : undefined,
    Message: __expectString(output.Message),
    SourceIdentifier: __expectString(output.SourceIdentifier),
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_json1_1EventCategoriesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EventCategoryGroup = (output: any, context: __SerdeContext): EventCategoryGroup => {
  return {
    EventCategories:
      output.EventCategories != null
        ? deserializeAws_json1_1EventCategoriesList(output.EventCategories, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_json1_1EventCategoryGroupList = (output: any, context: __SerdeContext): EventCategoryGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventCategoryGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  return {
    CustSubscriptionId: __expectString(output.CustSubscriptionId),
    CustomerAwsId: __expectString(output.CustomerAwsId),
    Enabled: __expectBoolean(output.Enabled),
    EventCategoriesList:
      output.EventCategoriesList != null
        ? deserializeAws_json1_1EventCategoriesList(output.EventCategoriesList, context)
        : undefined,
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SourceIdsList:
      output.SourceIdsList != null ? deserializeAws_json1_1SourceIdsList(output.SourceIdsList, context) : undefined,
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    SubscriptionCreationTime: __expectString(output.SubscriptionCreationTime),
  } as any;
};

const deserializeAws_json1_1EventSubscriptionsList = (output: any, context: __SerdeContext): EventSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventSubscription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetAdvisorLsaAnalysisResponse = (
  output: any,
  context: __SerdeContext
): FleetAdvisorLsaAnalysisResponse => {
  return {
    LsaAnalysisId: __expectString(output.LsaAnalysisId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1FleetAdvisorLsaAnalysisResponseList = (
  output: any,
  context: __SerdeContext
): FleetAdvisorLsaAnalysisResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetAdvisorLsaAnalysisResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetAdvisorSchemaList = (output: any, context: __SerdeContext): SchemaResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetAdvisorSchemaObjectList = (
  output: any,
  context: __SerdeContext
): FleetAdvisorSchemaObjectResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetAdvisorSchemaObjectResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetAdvisorSchemaObjectResponse = (
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

const deserializeAws_json1_1GcpMySQLSettings = (output: any, context: __SerdeContext): GcpMySQLSettings => {
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

const deserializeAws_json1_1IBMDb2Settings = (output: any, context: __SerdeContext): IBMDb2Settings => {
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

const deserializeAws_json1_1ImportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ImportCertificateResponse => {
  return {
    Certificate:
      output.Certificate != null ? deserializeAws_json1_1Certificate(output.Certificate, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IndividualAssessmentNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InsufficientResourceCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientResourceCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IntegerList = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1InvalidCertificateFault = (
  output: any,
  context: __SerdeContext
): InvalidCertificateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOperationFault = (output: any, context: __SerdeContext): InvalidOperationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateFault = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InventoryData = (output: any, context: __SerdeContext): InventoryData => {
  return {
    NumberOfDatabases: __expectInt32(output.NumberOfDatabases),
    NumberOfSchemas: __expectInt32(output.NumberOfSchemas),
  } as any;
};

const deserializeAws_json1_1KafkaSettings = (output: any, context: __SerdeContext): KafkaSettings => {
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

const deserializeAws_json1_1KinesisSettings = (output: any, context: __SerdeContext): KinesisSettings => {
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

const deserializeAws_json1_1KMSAccessDeniedFault = (output: any, context: __SerdeContext): KMSAccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSDisabledFault = (output: any, context: __SerdeContext): KMSDisabledFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSFault = (output: any, context: __SerdeContext): KMSFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInvalidStateFault = (output: any, context: __SerdeContext): KMSInvalidStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSKeyNotAccessibleFault = (
  output: any,
  context: __SerdeContext
): KMSKeyNotAccessibleFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSNotFoundFault = (output: any, context: __SerdeContext): KMSNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSThrottlingFault = (output: any, context: __SerdeContext): KMSThrottlingFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MicrosoftSQLServerSettings = (
  output: any,
  context: __SerdeContext
): MicrosoftSQLServerSettings => {
  return {
    BcpPacketSize: __expectInt32(output.BcpPacketSize),
    ControlTablesFileGroup: __expectString(output.ControlTablesFileGroup),
    DatabaseName: __expectString(output.DatabaseName),
    Password: __expectString(output.Password),
    Port: __expectInt32(output.Port),
    QuerySingleAlwaysOnNode: __expectBoolean(output.QuerySingleAlwaysOnNode),
    ReadBackupOnly: __expectBoolean(output.ReadBackupOnly),
    SafeguardPolicy: __expectString(output.SafeguardPolicy),
    SecretsManagerAccessRoleArn: __expectString(output.SecretsManagerAccessRoleArn),
    SecretsManagerSecretId: __expectString(output.SecretsManagerSecretId),
    ServerName: __expectString(output.ServerName),
    TrimSpaceInChar: __expectBoolean(output.TrimSpaceInChar),
    UseBcpFullLoad: __expectBoolean(output.UseBcpFullLoad),
    UseThirdPartyBackupDevice: __expectBoolean(output.UseThirdPartyBackupDevice),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1ModifyEndpointResponse = (output: any, context: __SerdeContext): ModifyEndpointResponse => {
  return {
    Endpoint: output.Endpoint != null ? deserializeAws_json1_1Endpoint(output.Endpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyEventSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): ModifyEventSubscriptionResponse => {
  return {
    EventSubscription:
      output.EventSubscription != null
        ? deserializeAws_json1_1EventSubscription(output.EventSubscription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null
        ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyReplicationSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationSubnetGroupResponse => {
  return {
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): ModifyReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MongoDbSettings = (output: any, context: __SerdeContext): MongoDbSettings => {
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

const deserializeAws_json1_1MoveReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): MoveReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MySQLSettings = (output: any, context: __SerdeContext): MySQLSettings => {
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

const deserializeAws_json1_1NeptuneSettings = (output: any, context: __SerdeContext): NeptuneSettings => {
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

const deserializeAws_json1_1OracleSettings = (output: any, context: __SerdeContext): OracleSettings => {
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
    DatabaseName: __expectString(output.DatabaseName),
    DirectPathNoLog: __expectBoolean(output.DirectPathNoLog),
    DirectPathParallelLoad: __expectBoolean(output.DirectPathParallelLoad),
    EnableHomogenousTablespace: __expectBoolean(output.EnableHomogenousTablespace),
    ExtraArchivedLogDestIds:
      output.ExtraArchivedLogDestIds != null
        ? deserializeAws_json1_1IntegerList(output.ExtraArchivedLogDestIds, context)
        : undefined,
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

const deserializeAws_json1_1OrderableReplicationInstance = (
  output: any,
  context: __SerdeContext
): OrderableReplicationInstance => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_json1_1AvailabilityZonesList(output.AvailabilityZones, context)
        : undefined,
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

const deserializeAws_json1_1OrderableReplicationInstanceList = (
  output: any,
  context: __SerdeContext
): OrderableReplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrderableReplicationInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
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

const deserializeAws_json1_1PendingMaintenanceActionDetails = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingMaintenanceAction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourcePendingMaintenanceActions(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PostgreSQLSettings = (output: any, context: __SerdeContext): PostgreSQLSettings => {
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

const deserializeAws_json1_1RebootReplicationInstanceResponse = (
  output: any,
  context: __SerdeContext
): RebootReplicationInstanceResponse => {
  return {
    ReplicationInstance:
      output.ReplicationInstance != null
        ? deserializeAws_json1_1ReplicationInstance(output.ReplicationInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RedisSettings = (output: any, context: __SerdeContext): RedisSettings => {
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

const deserializeAws_json1_1RedshiftSettings = (output: any, context: __SerdeContext): RedshiftSettings => {
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

const deserializeAws_json1_1RefreshSchemasResponse = (output: any, context: __SerdeContext): RefreshSchemasResponse => {
  return {
    RefreshSchemasStatus:
      output.RefreshSchemasStatus != null
        ? deserializeAws_json1_1RefreshSchemasStatus(output.RefreshSchemasStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RefreshSchemasStatus = (output: any, context: __SerdeContext): RefreshSchemasStatus => {
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

const deserializeAws_json1_1ReloadTablesResponse = (output: any, context: __SerdeContext): ReloadTablesResponse => {
  return {
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
  } as any;
};

const deserializeAws_json1_1RemoveTagsFromResourceResponse = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ReplicationInstance = (output: any, context: __SerdeContext): ReplicationInstance => {
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
        ? deserializeAws_json1_1ReplicationPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ReplicationInstanceArn: __expectString(output.ReplicationInstanceArn),
    ReplicationInstanceClass: __expectString(output.ReplicationInstanceClass),
    ReplicationInstanceIdentifier: __expectString(output.ReplicationInstanceIdentifier),
    ReplicationInstanceIpv6Addresses:
      output.ReplicationInstanceIpv6Addresses != null
        ? deserializeAws_json1_1ReplicationInstanceIpv6AddressList(output.ReplicationInstanceIpv6Addresses, context)
        : undefined,
    ReplicationInstancePrivateIpAddress: __expectString(output.ReplicationInstancePrivateIpAddress),
    ReplicationInstancePrivateIpAddresses:
      output.ReplicationInstancePrivateIpAddresses != null
        ? deserializeAws_json1_1ReplicationInstancePrivateIpAddressList(
            output.ReplicationInstancePrivateIpAddresses,
            context
          )
        : undefined,
    ReplicationInstancePublicIpAddress: __expectString(output.ReplicationInstancePublicIpAddress),
    ReplicationInstancePublicIpAddresses:
      output.ReplicationInstancePublicIpAddresses != null
        ? deserializeAws_json1_1ReplicationInstancePublicIpAddressList(
            output.ReplicationInstancePublicIpAddresses,
            context
          )
        : undefined,
    ReplicationInstanceStatus: __expectString(output.ReplicationInstanceStatus),
    ReplicationSubnetGroup:
      output.ReplicationSubnetGroup != null
        ? deserializeAws_json1_1ReplicationSubnetGroup(output.ReplicationSubnetGroup, context)
        : undefined,
    SecondaryAvailabilityZone: __expectString(output.SecondaryAvailabilityZone),
    VpcSecurityGroups:
      output.VpcSecurityGroups != null
        ? deserializeAws_json1_1VpcSecurityGroupMembershipList(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationInstanceIpv6AddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ReplicationInstanceList = (output: any, context: __SerdeContext): ReplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationInstancePrivateIpAddressList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1ReplicationInstancePublicIpAddressList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1ReplicationInstanceTaskLog = (
  output: any,
  context: __SerdeContext
): ReplicationInstanceTaskLog => {
  return {
    ReplicationInstanceTaskLogSize: __expectLong(output.ReplicationInstanceTaskLogSize),
    ReplicationTaskArn: __expectString(output.ReplicationTaskArn),
    ReplicationTaskName: __expectString(output.ReplicationTaskName),
  } as any;
};

const deserializeAws_json1_1ReplicationInstanceTaskLogsList = (
  output: any,
  context: __SerdeContext
): ReplicationInstanceTaskLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationInstanceTaskLog(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationPendingModifiedValues = (
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

const deserializeAws_json1_1ReplicationSubnetGroup = (output: any, context: __SerdeContext): ReplicationSubnetGroup => {
  return {
    ReplicationSubnetGroupDescription: __expectString(output.ReplicationSubnetGroupDescription),
    ReplicationSubnetGroupIdentifier: __expectString(output.ReplicationSubnetGroupIdentifier),
    SubnetGroupStatus: __expectString(output.SubnetGroupStatus),
    Subnets: output.Subnets != null ? deserializeAws_json1_1SubnetList(output.Subnets, context) : undefined,
    SupportedNetworkTypes:
      output.SupportedNetworkTypes != null
        ? deserializeAws_json1_1StringList(output.SupportedNetworkTypes, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ReplicationSubnetGroupDoesNotCoverEnoughAZs = (
  output: any,
  context: __SerdeContext
): ReplicationSubnetGroupDoesNotCoverEnoughAZs => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplicationSubnetGroups = (
  output: any,
  context: __SerdeContext
): ReplicationSubnetGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationSubnetGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationTask = (output: any, context: __SerdeContext): ReplicationTask => {
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
      output.ReplicationTaskStats != null
        ? deserializeAws_json1_1ReplicationTaskStats(output.ReplicationTaskStats, context)
        : undefined,
    SourceEndpointArn: __expectString(output.SourceEndpointArn),
    Status: __expectString(output.Status),
    StopReason: __expectString(output.StopReason),
    TableMappings: __expectString(output.TableMappings),
    TargetEndpointArn: __expectString(output.TargetEndpointArn),
    TargetReplicationInstanceArn: __expectString(output.TargetReplicationInstanceArn),
    TaskData: __expectString(output.TaskData),
  } as any;
};

const deserializeAws_json1_1ReplicationTaskAssessmentResult = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentResult => {
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

const deserializeAws_json1_1ReplicationTaskAssessmentResultList = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationTaskAssessmentResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationTaskAssessmentRun = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentRun => {
  return {
    AssessmentProgress:
      output.AssessmentProgress != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentRunProgress(output.AssessmentProgress, context)
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

const deserializeAws_json1_1ReplicationTaskAssessmentRunList = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationTaskAssessmentRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationTaskAssessmentRunProgress = (
  output: any,
  context: __SerdeContext
): ReplicationTaskAssessmentRunProgress => {
  return {
    IndividualAssessmentCompletedCount: __expectInt32(output.IndividualAssessmentCompletedCount),
    IndividualAssessmentCount: __expectInt32(output.IndividualAssessmentCount),
  } as any;
};

const deserializeAws_json1_1ReplicationTaskIndividualAssessment = (
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

const deserializeAws_json1_1ReplicationTaskIndividualAssessmentList = (
  output: any,
  context: __SerdeContext
): ReplicationTaskIndividualAssessment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationTaskIndividualAssessment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationTaskList = (output: any, context: __SerdeContext): ReplicationTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationTaskStats = (output: any, context: __SerdeContext): ReplicationTaskStats => {
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

const deserializeAws_json1_1ResourceAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundFault = (output: any, context: __SerdeContext): ResourceNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourcePendingMaintenanceActions = (
  output: any,
  context: __SerdeContext
): ResourcePendingMaintenanceActions => {
  return {
    PendingMaintenanceActionDetails:
      output.PendingMaintenanceActionDetails != null
        ? deserializeAws_json1_1PendingMaintenanceActionDetails(output.PendingMaintenanceActionDetails, context)
        : undefined,
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
  } as any;
};

const deserializeAws_json1_1ResourceQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ResourceQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RunFleetAdvisorLsaAnalysisResponse = (
  output: any,
  context: __SerdeContext
): RunFleetAdvisorLsaAnalysisResponse => {
  return {
    LsaAnalysisId: __expectString(output.LsaAnalysisId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1S3AccessDeniedFault = (output: any, context: __SerdeContext): S3AccessDeniedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1S3ResourceNotFoundFault = (
  output: any,
  context: __SerdeContext
): S3ResourceNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1S3Settings = (output: any, context: __SerdeContext): S3Settings => {
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

const deserializeAws_json1_1SchemaList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SchemaResponse = (output: any, context: __SerdeContext): SchemaResponse => {
  return {
    CodeLineCount: __expectLong(output.CodeLineCount),
    CodeSize: __expectLong(output.CodeSize),
    Complexity: __expectString(output.Complexity),
    DatabaseInstance:
      output.DatabaseInstance != null
        ? deserializeAws_json1_1DatabaseShortInfoResponse(output.DatabaseInstance, context)
        : undefined,
    OriginalSchema:
      output.OriginalSchema != null
        ? deserializeAws_json1_1SchemaShortInfoResponse(output.OriginalSchema, context)
        : undefined,
    SchemaId: __expectString(output.SchemaId),
    SchemaName: __expectString(output.SchemaName),
    Server: output.Server != null ? deserializeAws_json1_1ServerShortInfoResponse(output.Server, context) : undefined,
    Similarity: __limitedParseDouble(output.Similarity),
  } as any;
};

const deserializeAws_json1_1SchemaShortInfoResponse = (
  output: any,
  context: __SerdeContext
): SchemaShortInfoResponse => {
  return {
    DatabaseId: __expectString(output.DatabaseId),
    DatabaseIpAddress: __expectString(output.DatabaseIpAddress),
    DatabaseName: __expectString(output.DatabaseName),
    SchemaId: __expectString(output.SchemaId),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1ServerShortInfoResponse = (
  output: any,
  context: __SerdeContext
): ServerShortInfoResponse => {
  return {
    IpAddress: __expectString(output.IpAddress),
    ServerId: __expectString(output.ServerId),
    ServerName: __expectString(output.ServerName),
  } as any;
};

const deserializeAws_json1_1SNSInvalidTopicFault = (output: any, context: __SerdeContext): SNSInvalidTopicFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SNSNoAuthorizationFault = (
  output: any,
  context: __SerdeContext
): SNSNoAuthorizationFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SourceIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StartReplicationTaskAssessmentResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartReplicationTaskAssessmentRunResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskAssessmentRunResponse => {
  return {
    ReplicationTaskAssessmentRun:
      output.ReplicationTaskAssessmentRun != null
        ? deserializeAws_json1_1ReplicationTaskAssessmentRun(output.ReplicationTaskAssessmentRun, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): StartReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopReplicationTaskResponse = (
  output: any,
  context: __SerdeContext
): StopReplicationTaskResponse => {
  return {
    ReplicationTask:
      output.ReplicationTask != null
        ? deserializeAws_json1_1ReplicationTask(output.ReplicationTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StorageQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): StorageQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    SubnetAvailabilityZone:
      output.SubnetAvailabilityZone != null
        ? deserializeAws_json1_1AvailabilityZone(output.SubnetAvailabilityZone, context)
        : undefined,
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
    SubnetStatus: __expectString(output.SubnetStatus),
  } as any;
};

const deserializeAws_json1_1SubnetAlreadyInUse = (output: any, context: __SerdeContext): SubnetAlreadyInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subnet(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SupportedEndpointType = (output: any, context: __SerdeContext): SupportedEndpointType => {
  return {
    EndpointType: __expectString(output.EndpointType),
    EngineDisplayName: __expectString(output.EngineDisplayName),
    EngineName: __expectString(output.EngineName),
    ReplicationInstanceEngineMinimumVersion: __expectString(output.ReplicationInstanceEngineMinimumVersion),
    SupportsCDC: __expectBoolean(output.SupportsCDC),
  } as any;
};

const deserializeAws_json1_1SupportedEndpointTypeList = (
  output: any,
  context: __SerdeContext
): SupportedEndpointType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SupportedEndpointType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SybaseSettings = (output: any, context: __SerdeContext): SybaseSettings => {
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

const deserializeAws_json1_1TableStatistics = (output: any, context: __SerdeContext): TableStatistics => {
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

const deserializeAws_json1_1TableStatisticsList = (output: any, context: __SerdeContext): TableStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    ResourceArn: __expectString(output.ResourceArn),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestConnectionResponse = (output: any, context: __SerdeContext): TestConnectionResponse => {
  return {
    Connection: output.Connection != null ? deserializeAws_json1_1Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSubscriptionsToEventBridgeResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriptionsToEventBridgeResponse => {
  return {
    Result: __expectString(output.Result),
  } as any;
};

const deserializeAws_json1_1UpgradeDependencyFailureFault = (
  output: any,
  context: __SerdeContext
): UpgradeDependencyFailureFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1VpcSecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

const deserializeAws_json1_1VpcSecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): VpcSecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcSecurityGroupMembership(entry, context);
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
