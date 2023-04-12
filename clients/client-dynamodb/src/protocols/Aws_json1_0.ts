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
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "../commands/BatchExecuteStatementCommand";
import { BatchGetItemCommandInput, BatchGetItemCommandOutput } from "../commands/BatchGetItemCommand";
import { BatchWriteItemCommandInput, BatchWriteItemCommandOutput } from "../commands/BatchWriteItemCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "../commands/CreateBackupCommand";
import { CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput } from "../commands/CreateGlobalTableCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteItemCommandInput, DeleteItemCommandOutput } from "../commands/DeleteItemCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DescribeBackupCommandInput, DescribeBackupCommandOutput } from "../commands/DescribeBackupCommand";
import {
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
} from "../commands/DescribeContinuousBackupsCommand";
import {
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
} from "../commands/DescribeContributorInsightsCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "../commands/DescribeExportCommand";
import {
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
} from "../commands/DescribeGlobalTableCommand";
import {
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
} from "../commands/DescribeGlobalTableSettingsCommand";
import { DescribeImportCommandInput, DescribeImportCommandOutput } from "../commands/DescribeImportCommand";
import {
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
} from "../commands/DescribeKinesisStreamingDestinationCommand";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "../commands/DescribeLimitsCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import {
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
} from "../commands/DescribeTableReplicaAutoScalingCommand";
import { DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput } from "../commands/DescribeTimeToLiveCommand";
import {
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
} from "../commands/DisableKinesisStreamingDestinationCommand";
import {
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
} from "../commands/EnableKinesisStreamingDestinationCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "../commands/ExecuteStatementCommand";
import { ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput } from "../commands/ExecuteTransactionCommand";
import {
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
} from "../commands/ExportTableToPointInTimeCommand";
import { GetItemCommandInput, GetItemCommandOutput } from "../commands/GetItemCommand";
import { ImportTableCommandInput, ImportTableCommandOutput } from "../commands/ImportTableCommand";
import { ListBackupsCommandInput, ListBackupsCommandOutput } from "../commands/ListBackupsCommand";
import {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput } from "../commands/ListGlobalTablesCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput } from "../commands/ListTagsOfResourceCommand";
import { PutItemCommandInput, PutItemCommandOutput } from "../commands/PutItemCommand";
import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import {
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
} from "../commands/RestoreTableFromBackupCommand";
import {
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
} from "../commands/RestoreTableToPointInTimeCommand";
import { ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TransactGetItemsCommandInput, TransactGetItemsCommandOutput } from "../commands/TransactGetItemsCommand";
import { TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput } from "../commands/TransactWriteItemsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
} from "../commands/UpdateContinuousBackupsCommand";
import {
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
} from "../commands/UpdateContributorInsightsCommand";
import { UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput } from "../commands/UpdateGlobalTableCommand";
import {
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
} from "../commands/UpdateGlobalTableSettingsCommand";
import { UpdateItemCommandInput, UpdateItemCommandOutput } from "../commands/UpdateItemCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import {
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
} from "../commands/UpdateTableReplicaAutoScalingCommand";
import { UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput } from "../commands/UpdateTimeToLiveCommand";
import { DynamoDBServiceException as __BaseException } from "../models/DynamoDBServiceException";
import {
  ArchivalSummary,
  AttributeDefinition,
  AttributeValue,
  AttributeValueUpdate,
  AutoScalingPolicyDescription,
  AutoScalingPolicyUpdate,
  AutoScalingSettingsDescription,
  AutoScalingSettingsUpdate,
  AutoScalingTargetTrackingScalingPolicyConfigurationDescription,
  AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  BackupDescription,
  BackupDetails,
  BackupInUseException,
  BackupNotFoundException,
  BackupSummary,
  BatchExecuteStatementInput,
  BatchExecuteStatementOutput,
  BatchGetItemInput,
  BatchGetItemOutput,
  BatchStatementError,
  BatchStatementRequest,
  BatchStatementResponse,
  BatchWriteItemInput,
  BatchWriteItemOutput,
  BillingModeSummary,
  CancellationReason,
  Capacity,
  Condition,
  ConditionalCheckFailedException,
  ConditionCheck,
  ConsumedCapacity,
  ContinuousBackupsDescription,
  ContinuousBackupsUnavailableException,
  ContributorInsightsSummary,
  CreateBackupInput,
  CreateBackupOutput,
  CreateGlobalSecondaryIndexAction,
  CreateGlobalTableInput,
  CreateGlobalTableOutput,
  CreateReplicaAction,
  CreateReplicationGroupMemberAction,
  CreateTableInput,
  CreateTableOutput,
  CsvOptions,
  Delete,
  DeleteBackupInput,
  DeleteBackupOutput,
  DeleteGlobalSecondaryIndexAction,
  DeleteItemInput,
  DeleteItemOutput,
  DeleteReplicaAction,
  DeleteReplicationGroupMemberAction,
  DeleteRequest,
  DeleteTableInput,
  DeleteTableOutput,
  DescribeBackupInput,
  DescribeBackupOutput,
  DescribeContinuousBackupsInput,
  DescribeContinuousBackupsOutput,
  DescribeContributorInsightsInput,
  DescribeContributorInsightsOutput,
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
  DescribeExportInput,
  DescribeExportOutput,
  DescribeGlobalTableInput,
  DescribeGlobalTableOutput,
  DescribeGlobalTableSettingsInput,
  DescribeGlobalTableSettingsOutput,
  DescribeImportInput,
  DescribeImportOutput,
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput,
  DescribeLimitsInput,
  DescribeLimitsOutput,
  DescribeTableInput,
  DescribeTableOutput,
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput,
  DescribeTimeToLiveInput,
  DescribeTimeToLiveOutput,
  DuplicateItemException,
  Endpoint,
  ExecuteStatementInput,
  ExecuteStatementOutput,
  ExecuteTransactionInput,
  ExecuteTransactionOutput,
  ExpectedAttributeValue,
  ExportConflictException,
  ExportDescription,
  ExportNotFoundException,
  ExportSummary,
  ExportTableToPointInTimeInput,
  ExportTableToPointInTimeOutput,
  FailureException,
  Get,
  GetItemInput,
  GetItemOutput,
  GlobalSecondaryIndex,
  GlobalSecondaryIndexAutoScalingUpdate,
  GlobalSecondaryIndexDescription,
  GlobalSecondaryIndexInfo,
  GlobalSecondaryIndexUpdate,
  GlobalTable,
  GlobalTableAlreadyExistsException,
  GlobalTableDescription,
  GlobalTableGlobalSecondaryIndexSettingsUpdate,
  GlobalTableNotFoundException,
  IdempotentParameterMismatchException,
  ImportConflictException,
  ImportNotFoundException,
  ImportSummary,
  ImportTableDescription,
  ImportTableInput,
  ImportTableOutput,
  IndexNotFoundException,
  InputFormatOptions,
  InternalServerError,
  InvalidEndpointException,
  InvalidExportTimeException,
  InvalidRestoreTimeException,
  ItemCollectionMetrics,
  ItemCollectionSizeLimitExceededException,
  ItemResponse,
  KeysAndAttributes,
  KeySchemaElement,
  KinesisDataStreamDestination,
  KinesisStreamingDestinationInput,
  KinesisStreamingDestinationOutput,
  LimitExceededException,
  ListBackupsInput,
  ListBackupsOutput,
  ListContributorInsightsInput,
  ListContributorInsightsOutput,
  ListExportsInput,
  ListExportsOutput,
  ListGlobalTablesInput,
  ListGlobalTablesOutput,
  ListImportsInput,
  ListImportsOutput,
  ListTablesInput,
  ListTablesOutput,
  ListTagsOfResourceInput,
  ListTagsOfResourceOutput,
  LocalSecondaryIndex,
  LocalSecondaryIndexDescription,
  LocalSecondaryIndexInfo,
  ParameterizedStatement,
  PointInTimeRecoveryDescription,
  PointInTimeRecoverySpecification,
  PointInTimeRecoveryUnavailableException,
  Projection,
  ProvisionedThroughput,
  ProvisionedThroughputDescription,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputOverride,
  Put,
  PutItemInput,
  PutItemOutput,
  PutRequest,
  QueryInput,
  QueryOutput,
  Replica,
  ReplicaAlreadyExistsException,
  ReplicaAutoScalingDescription,
  ReplicaAutoScalingUpdate,
  ReplicaDescription,
  ReplicaGlobalSecondaryIndex,
  ReplicaGlobalSecondaryIndexAutoScalingDescription,
  ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  ReplicaGlobalSecondaryIndexDescription,
  ReplicaGlobalSecondaryIndexSettingsDescription,
  ReplicaGlobalSecondaryIndexSettingsUpdate,
  ReplicaNotFoundException,
  ReplicaSettingsDescription,
  ReplicaSettingsUpdate,
  ReplicationGroupUpdate,
  ReplicaUpdate,
  RequestLimitExceeded,
  ResourceInUseException,
  ResourceNotFoundException,
  RestoreSummary,
  RestoreTableFromBackupInput,
  RestoreTableFromBackupOutput,
  RestoreTableToPointInTimeInput,
  RestoreTableToPointInTimeOutput,
  S3BucketSource,
  ScanInput,
  ScanOutput,
  SourceTableDetails,
  SourceTableFeatureDetails,
  SSEDescription,
  SSESpecification,
  StreamSpecification,
  TableAlreadyExistsException,
  TableAutoScalingDescription,
  TableClassSummary,
  TableCreationParameters,
  TableDescription,
  TableInUseException,
  TableNotFoundException,
  Tag,
  TagResourceInput,
  TimeToLiveDescription,
  TimeToLiveSpecification,
  TransactGetItem,
  TransactGetItemsInput,
  TransactGetItemsOutput,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
  TransactWriteItem,
  TransactWriteItemsInput,
  TransactWriteItemsOutput,
  UntagResourceInput,
  Update,
  UpdateContinuousBackupsInput,
  UpdateContinuousBackupsOutput,
  UpdateContributorInsightsInput,
  UpdateContributorInsightsOutput,
  UpdateGlobalSecondaryIndexAction,
  UpdateGlobalTableInput,
  UpdateGlobalTableOutput,
  UpdateGlobalTableSettingsInput,
  UpdateGlobalTableSettingsOutput,
  UpdateItemInput,
  UpdateItemOutput,
  UpdateReplicationGroupMemberAction,
  UpdateTableInput,
  UpdateTableOutput,
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingOutput,
  UpdateTimeToLiveInput,
  UpdateTimeToLiveOutput,
  WriteRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_0BatchExecuteStatementCommand
 */
export const se_BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchExecuteStatement");
  let body: any;
  body = JSON.stringify(se_BatchExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchGetItemCommand
 */
export const se_BatchGetItemCommand = async (
  input: BatchGetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetItem");
  let body: any;
  body = JSON.stringify(se_BatchGetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchWriteItemCommand
 */
export const se_BatchWriteItemCommand = async (
  input: BatchWriteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchWriteItem");
  let body: any;
  body = JSON.stringify(se_BatchWriteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateBackupCommand
 */
export const se_CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBackup");
  let body: any;
  body = JSON.stringify(se_CreateBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateGlobalTableCommand
 */
export const se_CreateGlobalTableCommand = async (
  input: CreateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGlobalTable");
  let body: any;
  body = JSON.stringify(se_CreateGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTable");
  let body: any;
  body = JSON.stringify(se_CreateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteBackupCommand
 */
export const se_DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBackup");
  let body: any;
  body = JSON.stringify(se_DeleteBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteItemCommand
 */
export const se_DeleteItemCommand = async (
  input: DeleteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteItem");
  let body: any;
  body = JSON.stringify(se_DeleteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTable");
  let body: any;
  body = JSON.stringify(se_DeleteTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeBackupCommand
 */
export const se_DescribeBackupCommand = async (
  input: DescribeBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBackup");
  let body: any;
  body = JSON.stringify(se_DescribeBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeContinuousBackupsCommand
 */
export const se_DescribeContinuousBackupsCommand = async (
  input: DescribeContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContinuousBackups");
  let body: any;
  body = JSON.stringify(se_DescribeContinuousBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeContributorInsightsCommand
 */
export const se_DescribeContributorInsightsCommand = async (
  input: DescribeContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContributorInsights");
  let body: any;
  body = JSON.stringify(se_DescribeContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoints");
  let body: any;
  body = JSON.stringify(se_DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeExportCommand
 */
export const se_DescribeExportCommand = async (
  input: DescribeExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExport");
  let body: any;
  body = JSON.stringify(se_DescribeExportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeGlobalTableCommand
 */
export const se_DescribeGlobalTableCommand = async (
  input: DescribeGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGlobalTable");
  let body: any;
  body = JSON.stringify(se_DescribeGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeGlobalTableSettingsCommand
 */
export const se_DescribeGlobalTableSettingsCommand = async (
  input: DescribeGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGlobalTableSettings");
  let body: any;
  body = JSON.stringify(se_DescribeGlobalTableSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeImportCommand
 */
export const se_DescribeImportCommand = async (
  input: DescribeImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImport");
  let body: any;
  body = JSON.stringify(se_DescribeImportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeKinesisStreamingDestinationCommand
 */
export const se_DescribeKinesisStreamingDestinationCommand = async (
  input: DescribeKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeKinesisStreamingDestination");
  let body: any;
  body = JSON.stringify(se_DescribeKinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeLimitsCommand
 */
export const se_DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLimits");
  let body: any;
  body = JSON.stringify(se_DescribeLimitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTableCommand
 */
export const se_DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTable");
  let body: any;
  body = JSON.stringify(se_DescribeTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTableReplicaAutoScalingCommand
 */
export const se_DescribeTableReplicaAutoScalingCommand = async (
  input: DescribeTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTableReplicaAutoScaling");
  let body: any;
  body = JSON.stringify(se_DescribeTableReplicaAutoScalingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTimeToLiveCommand
 */
export const se_DescribeTimeToLiveCommand = async (
  input: DescribeTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTimeToLive");
  let body: any;
  body = JSON.stringify(se_DescribeTimeToLiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisableKinesisStreamingDestinationCommand
 */
export const se_DisableKinesisStreamingDestinationCommand = async (
  input: DisableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableKinesisStreamingDestination");
  let body: any;
  body = JSON.stringify(se_KinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0EnableKinesisStreamingDestinationCommand
 */
export const se_EnableKinesisStreamingDestinationCommand = async (
  input: EnableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableKinesisStreamingDestination");
  let body: any;
  body = JSON.stringify(se_KinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExecuteStatementCommand
 */
export const se_ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteStatement");
  let body: any;
  body = JSON.stringify(se_ExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExecuteTransactionCommand
 */
export const se_ExecuteTransactionCommand = async (
  input: ExecuteTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteTransaction");
  let body: any;
  body = JSON.stringify(se_ExecuteTransactionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportTableToPointInTimeCommand
 */
export const se_ExportTableToPointInTimeCommand = async (
  input: ExportTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportTableToPointInTime");
  let body: any;
  body = JSON.stringify(se_ExportTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetItemCommand
 */
export const se_GetItemCommand = async (
  input: GetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetItem");
  let body: any;
  body = JSON.stringify(se_GetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportTableCommand
 */
export const se_ImportTableCommand = async (
  input: ImportTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportTable");
  let body: any;
  body = JSON.stringify(se_ImportTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBackupsCommand
 */
export const se_ListBackupsCommand = async (
  input: ListBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBackups");
  let body: any;
  body = JSON.stringify(se_ListBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListContributorInsightsCommand
 */
export const se_ListContributorInsightsCommand = async (
  input: ListContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContributorInsights");
  let body: any;
  body = JSON.stringify(se_ListContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExports");
  let body: any;
  body = JSON.stringify(se_ListExportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListGlobalTablesCommand
 */
export const se_ListGlobalTablesCommand = async (
  input: ListGlobalTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGlobalTables");
  let body: any;
  body = JSON.stringify(se_ListGlobalTablesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImports");
  let body: any;
  body = JSON.stringify(se_ListImportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTables");
  let body: any;
  body = JSON.stringify(se_ListTablesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsOfResourceCommand
 */
export const se_ListTagsOfResourceCommand = async (
  input: ListTagsOfResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsOfResource");
  let body: any;
  body = JSON.stringify(se_ListTagsOfResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutItemCommand
 */
export const se_PutItemCommand = async (
  input: PutItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutItem");
  let body: any;
  body = JSON.stringify(se_PutItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0QueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Query");
  let body: any;
  body = JSON.stringify(se_QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RestoreTableFromBackupCommand
 */
export const se_RestoreTableFromBackupCommand = async (
  input: RestoreTableFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTableFromBackup");
  let body: any;
  body = JSON.stringify(se_RestoreTableFromBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RestoreTableToPointInTimeCommand
 */
export const se_RestoreTableToPointInTimeCommand = async (
  input: RestoreTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTableToPointInTime");
  let body: any;
  body = JSON.stringify(se_RestoreTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ScanCommand
 */
export const se_ScanCommand = async (input: ScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Scan");
  let body: any;
  body = JSON.stringify(se_ScanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TransactGetItemsCommand
 */
export const se_TransactGetItemsCommand = async (
  input: TransactGetItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TransactGetItems");
  let body: any;
  body = JSON.stringify(se_TransactGetItemsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TransactWriteItemsCommand
 */
export const se_TransactWriteItemsCommand = async (
  input: TransactWriteItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TransactWriteItems");
  let body: any;
  body = JSON.stringify(se_TransactWriteItemsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateContinuousBackupsCommand
 */
export const se_UpdateContinuousBackupsCommand = async (
  input: UpdateContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContinuousBackups");
  let body: any;
  body = JSON.stringify(se_UpdateContinuousBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateContributorInsightsCommand
 */
export const se_UpdateContributorInsightsCommand = async (
  input: UpdateContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContributorInsights");
  let body: any;
  body = JSON.stringify(se_UpdateContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateGlobalTableCommand
 */
export const se_UpdateGlobalTableCommand = async (
  input: UpdateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGlobalTable");
  let body: any;
  body = JSON.stringify(se_UpdateGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateGlobalTableSettingsCommand
 */
export const se_UpdateGlobalTableSettingsCommand = async (
  input: UpdateGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGlobalTableSettings");
  let body: any;
  body = JSON.stringify(se_UpdateGlobalTableSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateItemCommand
 */
export const se_UpdateItemCommand = async (
  input: UpdateItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateItem");
  let body: any;
  body = JSON.stringify(se_UpdateItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTable");
  let body: any;
  body = JSON.stringify(se_UpdateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTableReplicaAutoScalingCommand
 */
export const se_UpdateTableReplicaAutoScalingCommand = async (
  input: UpdateTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTableReplicaAutoScaling");
  let body: any;
  body = JSON.stringify(se_UpdateTableReplicaAutoScalingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTimeToLiveCommand
 */
export const se_UpdateTimeToLiveCommand = async (
  input: UpdateTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTimeToLive");
  let body: any;
  body = JSON.stringify(se_UpdateTimeToLiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0BatchExecuteStatementCommand
 */
export const de_BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchExecuteStatementOutput(data, context);
  const response: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchExecuteStatementCommandError
 */
const de_BatchExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_0BatchGetItemCommand
 */
export const de_BatchGetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetItemOutput(data, context);
  const response: BatchGetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchGetItemCommandError
 */
const de_BatchGetItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0BatchWriteItemCommand
 */
export const de_BatchWriteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchWriteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchWriteItemOutput(data, context);
  const response: BatchWriteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchWriteItemCommandError
 */
const de_BatchWriteItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateBackupCommand
 */
export const de_CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBackupOutput(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateBackupCommandError
 */
const de_CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateGlobalTableCommand
 */
export const de_CreateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGlobalTableOutput(data, context);
  const response: CreateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateGlobalTableCommandError
 */
const de_CreateGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTableOutput(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateTableCommandError
 */
const de_CreateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteBackupCommand
 */
export const de_DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBackupOutput(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteBackupCommandError
 */
const de_DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteItemCommand
 */
export const de_DeleteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteItemOutput(data, context);
  const response: DeleteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteItemCommandError
 */
const de_DeleteItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTableOutput(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteTableCommandError
 */
const de_DeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeBackupCommand
 */
export const de_DescribeBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBackupOutput(data, context);
  const response: DescribeBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeBackupCommandError
 */
const de_DescribeBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeContinuousBackupsCommand
 */
export const de_DescribeContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContinuousBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContinuousBackupsOutput(data, context);
  const response: DescribeContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeContinuousBackupsCommandError
 */
const de_DescribeContinuousBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeContributorInsightsCommand
 */
export const de_DescribeContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContributorInsightsOutput(data, context);
  const response: DescribeContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeContributorInsightsCommandError
 */
const de_DescribeContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeEndpointsCommand
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
 * deserializeAws_json1_0DescribeEndpointsCommandError
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_0DescribeExportCommand
 */
export const de_DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportOutput(data, context);
  const response: DescribeExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeExportCommandError
 */
const de_DescribeExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExportNotFoundException":
    case "com.amazonaws.dynamodb#ExportNotFoundException":
      throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeGlobalTableCommand
 */
export const de_DescribeGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGlobalTableOutput(data, context);
  const response: DescribeGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeGlobalTableCommandError
 */
const de_DescribeGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeGlobalTableSettingsCommand
 */
export const de_DescribeGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGlobalTableSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGlobalTableSettingsOutput(data, context);
  const response: DescribeGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeGlobalTableSettingsCommandError
 */
const de_DescribeGlobalTableSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeImportCommand
 */
export const de_DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImportOutput(data, context);
  const response: DescribeImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeImportCommandError
 */
const de_DescribeImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImportNotFoundException":
    case "com.amazonaws.dynamodb#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand
 */
export const de_DescribeKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeKinesisStreamingDestinationOutput(data, context);
  const response: DescribeKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError
 */
const de_DescribeKinesisStreamingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeLimitsCommand
 */
export const de_DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeLimitsCommandError
 */
const de_DescribeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeTableCommand
 */
export const de_DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTableOutput(data, context);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeTableCommandError
 */
const de_DescribeTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand
 */
export const de_DescribeTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTableReplicaAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTableReplicaAutoScalingOutput(data, context);
  const response: DescribeTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError
 */
const de_DescribeTableReplicaAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeTimeToLiveCommand
 */
export const de_DescribeTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTimeToLiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTimeToLiveOutput(data, context);
  const response: DescribeTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeTimeToLiveCommandError
 */
const de_DescribeTimeToLiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DisableKinesisStreamingDestinationCommand
 */
export const de_DisableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_KinesisStreamingDestinationOutput(data, context);
  const response: DisableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError
 */
const de_DisableKinesisStreamingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0EnableKinesisStreamingDestinationCommand
 */
export const de_EnableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_KinesisStreamingDestinationOutput(data, context);
  const response: EnableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError
 */
const de_EnableKinesisStreamingDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExecuteStatementCommand
 */
export const de_ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteStatementOutput(data, context);
  const response: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ExecuteStatementCommandError
 */
const de_ExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await de_DuplicateItemExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExecuteTransactionCommand
 */
export const de_ExecuteTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteTransactionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteTransactionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteTransactionOutput(data, context);
  const response: ExecuteTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ExecuteTransactionCommandError
 */
const de_ExecuteTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportTableToPointInTimeCommand
 */
export const de_ExportTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportTableToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportTableToPointInTimeOutput(data, context);
  const response: ExportTableToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ExportTableToPointInTimeCommandError
 */
const de_ExportTableToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportTableToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExportConflictException":
    case "com.amazonaws.dynamodb#ExportConflictException":
      throw await de_ExportConflictExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetItemCommand
 */
export const de_GetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetItemOutput(data, context);
  const response: GetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetItemCommandError
 */
const de_GetItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ImportTableCommand
 */
export const de_ImportTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportTableOutput(data, context);
  const response: ImportTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ImportTableCommandError
 */
const de_ImportTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImportConflictException":
    case "com.amazonaws.dynamodb#ImportConflictException":
      throw await de_ImportConflictExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListBackupsCommand
 */
export const de_ListBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBackupsOutput(data, context);
  const response: ListBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListBackupsCommandError
 */
const de_ListBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListContributorInsightsCommand
 */
export const de_ListContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListContributorInsightsOutput(data, context);
  const response: ListContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListContributorInsightsCommandError
 */
const de_ListContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExportsOutput(data, context);
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListExportsCommandError
 */
const de_ListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListGlobalTablesCommand
 */
export const de_ListGlobalTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGlobalTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGlobalTablesOutput(data, context);
  const response: ListGlobalTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListGlobalTablesCommandError
 */
const de_ListGlobalTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImportsOutput(data, context);
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListImportsCommandError
 */
const de_ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTablesOutput(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTablesCommandError
 */
const de_ListTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsOfResourceCommand
 */
export const de_ListTagsOfResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsOfResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsOfResourceOutput(data, context);
  const response: ListTagsOfResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsOfResourceCommandError
 */
const de_ListTagsOfResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutItemCommand
 */
export const de_PutItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutItemOutput(data, context);
  const response: PutItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutItemCommandError
 */
const de_PutItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0QueryCommand
 */
export const de_QueryCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_QueryOutput(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0QueryCommandError
 */
const de_QueryCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0RestoreTableFromBackupCommand
 */
export const de_RestoreTableFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreTableFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableFromBackupOutput(data, context);
  const response: RestoreTableFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RestoreTableFromBackupCommandError
 */
const de_RestoreTableFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0RestoreTableToPointInTimeCommand
 */
export const de_RestoreTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreTableToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableToPointInTimeOutput(data, context);
  const response: RestoreTableToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RestoreTableToPointInTimeCommandError
 */
const de_RestoreTableToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ScanCommand
 */
export const de_ScanCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<ScanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScanOutput(data, context);
  const response: ScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ScanCommandError
 */
const de_ScanCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<ScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TransactGetItemsCommand
 */
export const de_TransactGetItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TransactGetItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TransactGetItemsOutput(data, context);
  const response: TransactGetItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TransactGetItemsCommandError
 */
const de_TransactGetItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TransactWriteItemsCommand
 */
export const de_TransactWriteItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TransactWriteItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TransactWriteItemsOutput(data, context);
  const response: TransactWriteItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TransactWriteItemsCommandError
 */
const de_TransactWriteItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateContinuousBackupsCommand
 */
export const de_UpdateContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContinuousBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContinuousBackupsOutput(data, context);
  const response: UpdateContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateContinuousBackupsCommandError
 */
const de_UpdateContinuousBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateContributorInsightsCommand
 */
export const de_UpdateContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContributorInsightsOutput(data, context);
  const response: UpdateContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateContributorInsightsCommandError
 */
const de_UpdateContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateGlobalTableCommand
 */
export const de_UpdateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGlobalTableOutput(data, context);
  const response: UpdateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateGlobalTableCommandError
 */
const de_UpdateGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateGlobalTableSettingsCommand
 */
export const de_UpdateGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGlobalTableSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGlobalTableSettingsOutput(data, context);
  const response: UpdateGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateGlobalTableSettingsCommandError
 */
const de_UpdateGlobalTableSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateItemCommand
 */
export const de_UpdateItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateItemOutput(data, context);
  const response: UpdateItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateItemCommandError
 */
const de_UpdateItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateTableCommand
 */
export const de_UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTableOutput(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateTableCommandError
 */
const de_UpdateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand
 */
export const de_UpdateTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTableReplicaAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTableReplicaAutoScalingOutput(data, context);
  const response: UpdateTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError
 */
const de_UpdateTableReplicaAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateTimeToLiveCommand
 */
export const de_UpdateTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTimeToLiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTimeToLiveOutput(data, context);
  const response: UpdateTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateTimeToLiveCommandError
 */
const de_UpdateTimeToLiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0BackupInUseExceptionRes
 */
const de_BackupInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BackupInUseException(body, context);
  const exception = new BackupInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0BackupNotFoundExceptionRes
 */
const de_BackupNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BackupNotFoundException(body, context);
  const exception = new BackupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConditionalCheckFailedExceptionRes
 */
const de_ConditionalCheckFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionalCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConditionalCheckFailedException(body, context);
  const exception = new ConditionalCheckFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ContinuousBackupsUnavailableExceptionRes
 */
const de_ContinuousBackupsUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContinuousBackupsUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ContinuousBackupsUnavailableException(body, context);
  const exception = new ContinuousBackupsUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0DuplicateItemExceptionRes
 */
const de_DuplicateItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateItemException(body, context);
  const exception = new DuplicateItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ExportConflictExceptionRes
 */
const de_ExportConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExportConflictException(body, context);
  const exception = new ExportConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ExportNotFoundExceptionRes
 */
const de_ExportNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExportNotFoundException(body, context);
  const exception = new ExportNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0GlobalTableAlreadyExistsExceptionRes
 */
const de_GlobalTableAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalTableAlreadyExistsException(body, context);
  const exception = new GlobalTableAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0GlobalTableNotFoundExceptionRes
 */
const de_GlobalTableNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GlobalTableNotFoundException(body, context);
  const exception = new GlobalTableNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ImportConflictExceptionRes
 */
const de_ImportConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImportConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImportConflictException(body, context);
  const exception = new ImportConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ImportNotFoundExceptionRes
 */
const de_ImportNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImportNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImportNotFoundException(body, context);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0IndexNotFoundExceptionRes
 */
const de_IndexNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IndexNotFoundException(body, context);
  const exception = new IndexNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidEndpointExceptionRes
 */
const de_InvalidEndpointExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEndpointException(body, context);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidExportTimeExceptionRes
 */
const de_InvalidExportTimeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportTimeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExportTimeException(body, context);
  const exception = new InvalidExportTimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidRestoreTimeExceptionRes
 */
const de_InvalidRestoreTimeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreTimeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRestoreTimeException(body, context);
  const exception = new InvalidRestoreTimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionRes
 */
const de_ItemCollectionSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemCollectionSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ItemCollectionSizeLimitExceededException(body, context);
  const exception = new ItemCollectionSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionRes
 */
const de_PointInTimeRecoveryUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PointInTimeRecoveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PointInTimeRecoveryUnavailableException(body, context);
  const exception = new PointInTimeRecoveryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ProvisionedThroughputExceededExceptionRes
 */
const de_ProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ReplicaAlreadyExistsExceptionRes
 */
const de_ReplicaAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicaAlreadyExistsException(body, context);
  const exception = new ReplicaAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ReplicaNotFoundExceptionRes
 */
const de_ReplicaNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicaNotFoundException(body, context);
  const exception = new ReplicaNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RequestLimitExceededRes
 */
const de_RequestLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestLimitExceeded(body, context);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TableAlreadyExistsExceptionRes
 */
const de_TableAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TableAlreadyExistsException(body, context);
  const exception = new TableAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TableInUseExceptionRes
 */
const de_TableInUseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TableInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TableInUseException(body, context);
  const exception = new TableInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TableNotFoundExceptionRes
 */
const de_TableNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TableNotFoundException(body, context);
  const exception = new TableNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TransactionCanceledExceptionRes
 */
const de_TransactionCanceledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TransactionCanceledException(body, context);
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TransactionConflictExceptionRes
 */
const de_TransactionConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TransactionConflictException(body, context);
  const exception = new TransactionConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TransactionInProgressExceptionRes
 */
const de_TransactionInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TransactionInProgressException(body, context);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AttributeDefinition
 */
const se_AttributeDefinition = (input: AttributeDefinition, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
  };
};

/**
 * serializeAws_json1_0AttributeDefinitions
 */
const se_AttributeDefinitions = (input: AttributeDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_0AttributeNameList
 */
const se_AttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0AttributeUpdates
 */
const se_AttributeUpdates = (input: Record<string, AttributeValueUpdate>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValueUpdate(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0AttributeValue
 */
const se_AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return AttributeValue.visit(input, {
    B: (value) => ({ B: context.base64Encoder(value) }),
    BOOL: (value) => ({ BOOL: value }),
    BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
    L: (value) => ({ L: se_ListAttributeValue(value, context) }),
    M: (value) => ({ M: se_MapAttributeValue(value, context) }),
    N: (value) => ({ N: value }),
    NS: (value) => ({ NS: se_NumberSetAttributeValue(value, context) }),
    NULL: (value) => ({ NULL: value }),
    S: (value) => ({ S: value }),
    SS: (value) => ({ SS: se_StringSetAttributeValue(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0AttributeValueList
 */
const se_AttributeValueList = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

/**
 * serializeAws_json1_0AttributeValueUpdate
 */
const se_AttributeValueUpdate = (input: AttributeValueUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Value != null && { Value: se_AttributeValue(input.Value, context) }),
  };
};

/**
 * serializeAws_json1_0AutoScalingPolicyUpdate
 */
const se_AutoScalingPolicyUpdate = (input: AutoScalingPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.TargetTrackingScalingPolicyConfiguration != null && {
      TargetTrackingScalingPolicyConfiguration: se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(
        input.TargetTrackingScalingPolicyConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0AutoScalingSettingsUpdate
 */
const se_AutoScalingSettingsUpdate = (input: AutoScalingSettingsUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingDisabled != null && { AutoScalingDisabled: input.AutoScalingDisabled }),
    ...(input.AutoScalingRoleArn != null && { AutoScalingRoleArn: input.AutoScalingRoleArn }),
    ...(input.MaximumUnits != null && { MaximumUnits: input.MaximumUnits }),
    ...(input.MinimumUnits != null && { MinimumUnits: input.MinimumUnits }),
    ...(input.ScalingPolicyUpdate != null && {
      ScalingPolicyUpdate: se_AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
 */
const se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (
  input: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DisableScaleIn != null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.ScaleInCooldown != null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown != null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

/**
 * serializeAws_json1_0BatchExecuteStatementInput
 */
const se_BatchExecuteStatementInput = (input: BatchExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.Statements != null && { Statements: se_PartiQLBatchRequest(input.Statements, context) }),
  };
};

/**
 * serializeAws_json1_0BatchGetItemInput
 */
const se_BatchGetItemInput = (input: BatchGetItemInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestItems != null && { RequestItems: se_BatchGetRequestMap(input.RequestItems, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
  };
};

/**
 * serializeAws_json1_0BatchGetRequestMap
 */
const se_BatchGetRequestMap = (input: Record<string, KeysAndAttributes>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_KeysAndAttributes(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0BatchStatementRequest
 */
const se_BatchStatementRequest = (input: BatchStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.Parameters != null && { Parameters: se_PreparedStatementParameters(input.Parameters, context) }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

/**
 * serializeAws_json1_0BatchWriteItemInput
 */
const se_BatchWriteItemInput = (input: BatchWriteItemInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestItems != null && { RequestItems: se_BatchWriteItemRequestMap(input.RequestItems, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
  };
};

/**
 * serializeAws_json1_0BatchWriteItemRequestMap
 */
const se_BatchWriteItemRequestMap = (input: Record<string, WriteRequest[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_WriteRequests(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0BinarySetAttributeValue
 */
const se_BinarySetAttributeValue = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

/**
 * serializeAws_json1_0Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.AttributeValueList != null && {
      AttributeValueList: se_AttributeValueList(input.AttributeValueList, context),
    }),
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
  };
};

/**
 * serializeAws_json1_0ConditionCheck
 */
const se_ConditionCheck = (input: ConditionCheck, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0CreateBackupInput
 */
const se_CreateBackupInput = (input: CreateBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupName != null && { BackupName: input.BackupName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0CreateGlobalSecondaryIndexAction
 */
const se_CreateGlobalSecondaryIndexAction = (input: CreateGlobalSecondaryIndexAction, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: se_KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: se_Projection(input.Projection, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

/**
 * serializeAws_json1_0CreateGlobalTableInput
 */
const se_CreateGlobalTableInput = (input: CreateGlobalTableInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.ReplicationGroup != null && { ReplicationGroup: se_ReplicaList(input.ReplicationGroup, context) }),
  };
};

/**
 * serializeAws_json1_0CreateReplicaAction
 */
const se_CreateReplicaAction = (input: CreateReplicaAction, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_0CreateReplicationGroupMemberAction
 */
const se_CreateReplicationGroupMemberAction = (
  input: CreateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: se_ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: se_ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.TableClassOverride != null && { TableClassOverride: input.TableClassOverride }),
  };
};

/**
 * serializeAws_json1_0CreateTableInput
 */
const se_CreateTableInput = (input: CreateTableInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: se_AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: se_GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KeySchema != null && { KeySchema: se_KeySchema(input.KeySchema, context) }),
    ...(input.LocalSecondaryIndexes != null && {
      LocalSecondaryIndexes: se_LocalSecondaryIndexList(input.LocalSecondaryIndexes, context),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.SSESpecification != null && { SSESpecification: se_SSESpecification(input.SSESpecification, context) }),
    ...(input.StreamSpecification != null && {
      StreamSpecification: se_StreamSpecification(input.StreamSpecification, context),
    }),
    ...(input.TableClass != null && { TableClass: input.TableClass }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CsvHeaderList
 */
const se_CsvHeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CsvOptions
 */
const se_CsvOptions = (input: CsvOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.HeaderList != null && { HeaderList: se_CsvHeaderList(input.HeaderList, context) }),
  };
};

/**
 * serializeAws_json1_0Delete
 */
const se_Delete = (input: Delete, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DeleteBackupInput
 */
const se_DeleteBackupInput = (input: DeleteBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
  };
};

/**
 * serializeAws_json1_0DeleteGlobalSecondaryIndexAction
 */
const se_DeleteGlobalSecondaryIndexAction = (input: DeleteGlobalSecondaryIndexAction, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
  };
};

/**
 * serializeAws_json1_0DeleteItemInput
 */
const se_DeleteItemInput = (input: DeleteItemInput, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: se_ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DeleteReplicaAction
 */
const se_DeleteReplicaAction = (input: DeleteReplicaAction, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_0DeleteReplicationGroupMemberAction
 */
const se_DeleteReplicationGroupMemberAction = (
  input: DeleteReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_0DeleteRequest
 */
const se_DeleteRequest = (input: DeleteRequest, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
  };
};

/**
 * serializeAws_json1_0DeleteTableInput
 */
const se_DeleteTableInput = (input: DeleteTableInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeBackupInput
 */
const se_DescribeBackupInput = (input: DescribeBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
  };
};

/**
 * serializeAws_json1_0DescribeContinuousBackupsInput
 */
const se_DescribeContinuousBackupsInput = (input: DescribeContinuousBackupsInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeContributorInsightsInput
 */
const se_DescribeContributorInsightsInput = (input: DescribeContributorInsightsInput, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeEndpointsRequest
 */
const se_DescribeEndpointsRequest = (input: DescribeEndpointsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0DescribeExportInput
 */
const se_DescribeExportInput = (input: DescribeExportInput, context: __SerdeContext): any => {
  return {
    ...(input.ExportArn != null && { ExportArn: input.ExportArn }),
  };
};

/**
 * serializeAws_json1_0DescribeGlobalTableInput
 */
const se_DescribeGlobalTableInput = (input: DescribeGlobalTableInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
  };
};

/**
 * serializeAws_json1_0DescribeGlobalTableSettingsInput
 */
const se_DescribeGlobalTableSettingsInput = (input: DescribeGlobalTableSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
  };
};

/**
 * serializeAws_json1_0DescribeImportInput
 */
const se_DescribeImportInput = (input: DescribeImportInput, context: __SerdeContext): any => {
  return {
    ...(input.ImportArn != null && { ImportArn: input.ImportArn }),
  };
};

/**
 * serializeAws_json1_0DescribeKinesisStreamingDestinationInput
 */
const se_DescribeKinesisStreamingDestinationInput = (
  input: DescribeKinesisStreamingDestinationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeLimitsInput
 */
const se_DescribeLimitsInput = (input: DescribeLimitsInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0DescribeTableInput
 */
const se_DescribeTableInput = (input: DescribeTableInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeTableReplicaAutoScalingInput
 */
const se_DescribeTableReplicaAutoScalingInput = (
  input: DescribeTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeTimeToLiveInput
 */
const se_DescribeTimeToLiveInput = (input: DescribeTimeToLiveInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0ExecuteStatementInput
 */
const se_ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Parameters != null && { Parameters: se_PreparedStatementParameters(input.Parameters, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

/**
 * serializeAws_json1_0ExecuteTransactionInput
 */
const se_ExecuteTransactionInput = (input: ExecuteTransactionInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TransactStatements != null && {
      TransactStatements: se_ParameterizedStatements(input.TransactStatements, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExpectedAttributeMap
 */
const se_ExpectedAttributeMap = (input: Record<string, ExpectedAttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ExpectedAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0ExpectedAttributeValue
 */
const se_ExpectedAttributeValue = (input: ExpectedAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.AttributeValueList != null && {
      AttributeValueList: se_AttributeValueList(input.AttributeValueList, context),
    }),
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Exists != null && { Exists: input.Exists }),
    ...(input.Value != null && { Value: se_AttributeValue(input.Value, context) }),
  };
};

/**
 * serializeAws_json1_0ExportTableToPointInTimeInput
 */
const se_ExportTableToPointInTimeInput = (input: ExportTableToPointInTimeInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ExportFormat != null && { ExportFormat: input.ExportFormat }),
    ...(input.ExportTime != null && { ExportTime: Math.round(input.ExportTime.getTime() / 1000) }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3BucketOwner != null && { S3BucketOwner: input.S3BucketOwner }),
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
    ...(input.S3SseAlgorithm != null && { S3SseAlgorithm: input.S3SseAlgorithm }),
    ...(input.S3SseKmsKeyId != null && { S3SseKmsKeyId: input.S3SseKmsKeyId }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  };
};

/**
 * serializeAws_json1_0ExpressionAttributeNameMap
 */
const se_ExpressionAttributeNameMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0ExpressionAttributeValueMap
 */
const se_ExpressionAttributeValueMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0FilterConditionMap
 */
const se_FilterConditionMap = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0Get
 */
const se_Get = (input: Get, context: __SerdeContext): any => {
  return {
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0GetItemInput
 */
const se_GetItemInput = (input: GetItemInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && { AttributesToGet: se_AttributeNameList(input.AttributesToGet, context) }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0GlobalSecondaryIndex
 */
const se_GlobalSecondaryIndex = (input: GlobalSecondaryIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: se_KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: se_Projection(input.Projection, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

/**
 * serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate
 */
const se_GlobalSecondaryIndexAutoScalingUpdate = (
  input: GlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate != null && {
      ProvisionedWriteCapacityAutoScalingUpdate: se_AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList
 */
const se_GlobalSecondaryIndexAutoScalingUpdateList = (
  input: GlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0GlobalSecondaryIndexList
 */
const se_GlobalSecondaryIndexList = (input: GlobalSecondaryIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GlobalSecondaryIndex(entry, context);
    });
};

/**
 * serializeAws_json1_0GlobalSecondaryIndexUpdate
 */
const se_GlobalSecondaryIndexUpdate = (input: GlobalSecondaryIndexUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Create != null && { Create: se_CreateGlobalSecondaryIndexAction(input.Create, context) }),
    ...(input.Delete != null && { Delete: se_DeleteGlobalSecondaryIndexAction(input.Delete, context) }),
    ...(input.Update != null && { Update: se_UpdateGlobalSecondaryIndexAction(input.Update, context) }),
  };
};

/**
 * serializeAws_json1_0GlobalSecondaryIndexUpdateList
 */
const se_GlobalSecondaryIndexUpdateList = (input: GlobalSecondaryIndexUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GlobalSecondaryIndexUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate
 */
const se_GlobalTableGlobalSecondaryIndexSettingsUpdate = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate != null && {
      ProvisionedWriteCapacityAutoScalingSettingsUpdate: se_AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.ProvisionedWriteCapacityUnits != null && {
      ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits,
    }),
  };
};

/**
 * serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList
 */
const se_GlobalTableGlobalSecondaryIndexSettingsUpdateList = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ImportTableInput
 */
const se_ImportTableInput = (input: ImportTableInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InputCompressionType != null && { InputCompressionType: input.InputCompressionType }),
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.InputFormatOptions != null && {
      InputFormatOptions: se_InputFormatOptions(input.InputFormatOptions, context),
    }),
    ...(input.S3BucketSource != null && { S3BucketSource: se_S3BucketSource(input.S3BucketSource, context) }),
    ...(input.TableCreationParameters != null && {
      TableCreationParameters: se_TableCreationParameters(input.TableCreationParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_0InputFormatOptions
 */
const se_InputFormatOptions = (input: InputFormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv != null && { Csv: se_CsvOptions(input.Csv, context) }),
  };
};

/**
 * serializeAws_json1_0Key
 */
const se_Key = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0KeyConditions
 */
const se_KeyConditions = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Condition(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0KeyList
 */
const se_KeyList = (input: Record<string, AttributeValue>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Key(entry, context);
    });
};

/**
 * serializeAws_json1_0KeysAndAttributes
 */
const se_KeysAndAttributes = (input: KeysAndAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && { AttributesToGet: se_AttributeNameList(input.AttributesToGet, context) }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Keys != null && { Keys: se_KeyList(input.Keys, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
  };
};

/**
 * serializeAws_json1_0KeySchema
 */
const se_KeySchema = (input: KeySchemaElement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeySchemaElement(entry, context);
    });
};

/**
 * serializeAws_json1_0KeySchemaElement
 */
const se_KeySchemaElement = (input: KeySchemaElement, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.KeyType != null && { KeyType: input.KeyType }),
  };
};

/**
 * serializeAws_json1_0KinesisStreamingDestinationInput
 */
const se_KinesisStreamingDestinationInput = (input: KinesisStreamingDestinationInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0ListAttributeValue
 */
const se_ListAttributeValue = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

/**
 * serializeAws_json1_0ListBackupsInput
 */
const se_ListBackupsInput = (input: ListBackupsInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupType != null && { BackupType: input.BackupType }),
    ...(input.ExclusiveStartBackupArn != null && { ExclusiveStartBackupArn: input.ExclusiveStartBackupArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TimeRangeLowerBound != null && {
      TimeRangeLowerBound: Math.round(input.TimeRangeLowerBound.getTime() / 1000),
    }),
    ...(input.TimeRangeUpperBound != null && {
      TimeRangeUpperBound: Math.round(input.TimeRangeUpperBound.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_0ListContributorInsightsInput
 */
const se_ListContributorInsightsInput = (input: ListContributorInsightsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0ListExportsInput
 */
const se_ListExportsInput = (input: ListExportsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  };
};

/**
 * serializeAws_json1_0ListGlobalTablesInput
 */
const se_ListGlobalTablesInput = (input: ListGlobalTablesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartGlobalTableName != null && {
      ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_0ListImportsInput
 */
const se_ListImportsInput = (input: ListImportsInput, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  };
};

/**
 * serializeAws_json1_0ListTablesInput
 */
const se_ListTablesInput = (input: ListTablesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartTableName != null && { ExclusiveStartTableName: input.ExclusiveStartTableName }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

/**
 * serializeAws_json1_0ListTagsOfResourceInput
 */
const se_ListTagsOfResourceInput = (input: ListTagsOfResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0LocalSecondaryIndex
 */
const se_LocalSecondaryIndex = (input: LocalSecondaryIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: se_KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: se_Projection(input.Projection, context) }),
  };
};

/**
 * serializeAws_json1_0LocalSecondaryIndexList
 */
const se_LocalSecondaryIndexList = (input: LocalSecondaryIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LocalSecondaryIndex(entry, context);
    });
};

/**
 * serializeAws_json1_0MapAttributeValue
 */
const se_MapAttributeValue = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0NonKeyAttributeNameList
 */
const se_NonKeyAttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0NumberSetAttributeValue
 */
const se_NumberSetAttributeValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ParameterizedStatement
 */
const se_ParameterizedStatement = (input: ParameterizedStatement, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_PreparedStatementParameters(input.Parameters, context) }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

/**
 * serializeAws_json1_0ParameterizedStatements
 */
const se_ParameterizedStatements = (input: ParameterizedStatement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterizedStatement(entry, context);
    });
};

/**
 * serializeAws_json1_0PartiQLBatchRequest
 */
const se_PartiQLBatchRequest = (input: BatchStatementRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchStatementRequest(entry, context);
    });
};

/**
 * serializeAws_json1_0PointInTimeRecoverySpecification
 */
const se_PointInTimeRecoverySpecification = (input: PointInTimeRecoverySpecification, context: __SerdeContext): any => {
  return {
    ...(input.PointInTimeRecoveryEnabled != null && { PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled }),
  };
};

/**
 * serializeAws_json1_0PreparedStatementParameters
 */
const se_PreparedStatementParameters = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

/**
 * serializeAws_json1_0Projection
 */
const se_Projection = (input: Projection, context: __SerdeContext): any => {
  return {
    ...(input.NonKeyAttributes != null && {
      NonKeyAttributes: se_NonKeyAttributeNameList(input.NonKeyAttributes, context),
    }),
    ...(input.ProjectionType != null && { ProjectionType: input.ProjectionType }),
  };
};

/**
 * serializeAws_json1_0ProvisionedThroughput
 */
const se_ProvisionedThroughput = (input: ProvisionedThroughput, context: __SerdeContext): any => {
  return {
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
    ...(input.WriteCapacityUnits != null && { WriteCapacityUnits: input.WriteCapacityUnits }),
  };
};

/**
 * serializeAws_json1_0ProvisionedThroughputOverride
 */
const se_ProvisionedThroughputOverride = (input: ProvisionedThroughputOverride, context: __SerdeContext): any => {
  return {
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
  };
};

/**
 * serializeAws_json1_0Put
 */
const se_Put = (input: Put, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Item != null && { Item: se_PutItemInputAttributeMap(input.Item, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0PutItemInput
 */
const se_PutItemInput = (input: PutItemInput, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: se_ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Item != null && { Item: se_PutItemInputAttributeMap(input.Item, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0PutItemInputAttributeMap
 */
const se_PutItemInputAttributeMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0PutRequest
 */
const se_PutRequest = (input: PutRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item != null && { Item: se_PutItemInputAttributeMap(input.Item, context) }),
  };
};

/**
 * serializeAws_json1_0QueryInput
 */
const se_QueryInput = (input: QueryInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && { AttributesToGet: se_AttributeNameList(input.AttributesToGet, context) }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExclusiveStartKey != null && { ExclusiveStartKey: se_Key(input.ExclusiveStartKey, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeyConditionExpression != null && { KeyConditionExpression: input.KeyConditionExpression }),
    ...(input.KeyConditions != null && { KeyConditions: se_KeyConditions(input.KeyConditions, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.QueryFilter != null && { QueryFilter: se_FilterConditionMap(input.QueryFilter, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ScanIndexForward != null && { ScanIndexForward: input.ScanIndexForward }),
    ...(input.Select != null && { Select: input.Select }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0Replica
 */
const se_Replica = (input: Replica, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_0ReplicaAutoScalingUpdate
 */
const se_ReplicaAutoScalingUpdate = (input: ReplicaAutoScalingUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexUpdates != null && {
      ReplicaGlobalSecondaryIndexUpdates: se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(
        input.ReplicaGlobalSecondaryIndexUpdates,
        context
      ),
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingUpdate != null && {
      ReplicaProvisionedReadCapacityAutoScalingUpdate: se_AutoScalingSettingsUpdate(
        input.ReplicaProvisionedReadCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0ReplicaAutoScalingUpdateList
 */
const se_ReplicaAutoScalingUpdateList = (input: ReplicaAutoScalingUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaAutoScalingUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndex
 */
const se_ReplicaGlobalSecondaryIndex = (input: ReplicaGlobalSecondaryIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: se_ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    }),
  };
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate
 */
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdate = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingUpdate != null && {
      ProvisionedReadCapacityAutoScalingUpdate: se_AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList
 */
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexList
 */
const se_ReplicaGlobalSecondaryIndexList = (input: ReplicaGlobalSecondaryIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaGlobalSecondaryIndex(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate
 */
const se_ReplicaGlobalSecondaryIndexSettingsUpdate = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingSettingsUpdate != null && {
      ProvisionedReadCapacityAutoScalingSettingsUpdate: se_AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.ProvisionedReadCapacityUnits != null && {
      ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits,
    }),
  };
};

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList
 */
const se_ReplicaGlobalSecondaryIndexSettingsUpdateList = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaList
 */
const se_ReplicaList = (input: Replica[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Replica(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaSettingsUpdate
 */
const se_ReplicaSettingsUpdate = (input: ReplicaSettingsUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexSettingsUpdate != null && {
      ReplicaGlobalSecondaryIndexSettingsUpdate: se_ReplicaGlobalSecondaryIndexSettingsUpdateList(
        input.ReplicaGlobalSecondaryIndexSettingsUpdate,
        context
      ),
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate != null && {
      ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: se_AutoScalingSettingsUpdate(
        input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.ReplicaProvisionedReadCapacityUnits != null && {
      ReplicaProvisionedReadCapacityUnits: input.ReplicaProvisionedReadCapacityUnits,
    }),
    ...(input.ReplicaTableClass != null && { ReplicaTableClass: input.ReplicaTableClass }),
  };
};

/**
 * serializeAws_json1_0ReplicaSettingsUpdateList
 */
const se_ReplicaSettingsUpdateList = (input: ReplicaSettingsUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaSettingsUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicationGroupUpdate
 */
const se_ReplicationGroupUpdate = (input: ReplicationGroupUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Create != null && { Create: se_CreateReplicationGroupMemberAction(input.Create, context) }),
    ...(input.Delete != null && { Delete: se_DeleteReplicationGroupMemberAction(input.Delete, context) }),
    ...(input.Update != null && { Update: se_UpdateReplicationGroupMemberAction(input.Update, context) }),
  };
};

/**
 * serializeAws_json1_0ReplicationGroupUpdateList
 */
const se_ReplicationGroupUpdateList = (input: ReplicationGroupUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicationGroupUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0ReplicaUpdate
 */
const se_ReplicaUpdate = (input: ReplicaUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Create != null && { Create: se_CreateReplicaAction(input.Create, context) }),
    ...(input.Delete != null && { Delete: se_DeleteReplicaAction(input.Delete, context) }),
  };
};

/**
 * serializeAws_json1_0ReplicaUpdateList
 */
const se_ReplicaUpdateList = (input: ReplicaUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_0RestoreTableFromBackupInput
 */
const se_RestoreTableFromBackupInput = (input: RestoreTableFromBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
    ...(input.BillingModeOverride != null && { BillingModeOverride: input.BillingModeOverride }),
    ...(input.GlobalSecondaryIndexOverride != null && {
      GlobalSecondaryIndexOverride: se_GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
    }),
    ...(input.LocalSecondaryIndexOverride != null && {
      LocalSecondaryIndexOverride: se_LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
    }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: se_ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
    }),
    ...(input.SSESpecificationOverride != null && {
      SSESpecificationOverride: se_SSESpecification(input.SSESpecificationOverride, context),
    }),
    ...(input.TargetTableName != null && { TargetTableName: input.TargetTableName }),
  };
};

/**
 * serializeAws_json1_0RestoreTableToPointInTimeInput
 */
const se_RestoreTableToPointInTimeInput = (input: RestoreTableToPointInTimeInput, context: __SerdeContext): any => {
  return {
    ...(input.BillingModeOverride != null && { BillingModeOverride: input.BillingModeOverride }),
    ...(input.GlobalSecondaryIndexOverride != null && {
      GlobalSecondaryIndexOverride: se_GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
    }),
    ...(input.LocalSecondaryIndexOverride != null && {
      LocalSecondaryIndexOverride: se_LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
    }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: se_ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
    }),
    ...(input.RestoreDateTime != null && { RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1000) }),
    ...(input.SSESpecificationOverride != null && {
      SSESpecificationOverride: se_SSESpecification(input.SSESpecificationOverride, context),
    }),
    ...(input.SourceTableArn != null && { SourceTableArn: input.SourceTableArn }),
    ...(input.SourceTableName != null && { SourceTableName: input.SourceTableName }),
    ...(input.TargetTableName != null && { TargetTableName: input.TargetTableName }),
    ...(input.UseLatestRestorableTime != null && { UseLatestRestorableTime: input.UseLatestRestorableTime }),
  };
};

/**
 * serializeAws_json1_0S3BucketSource
 */
const se_S3BucketSource = (input: S3BucketSource, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3BucketOwner != null && { S3BucketOwner: input.S3BucketOwner }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

/**
 * serializeAws_json1_0ScanInput
 */
const se_ScanInput = (input: ScanInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && { AttributesToGet: se_AttributeNameList(input.AttributesToGet, context) }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExclusiveStartKey != null && { ExclusiveStartKey: se_Key(input.ExclusiveStartKey, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ScanFilter != null && { ScanFilter: se_FilterConditionMap(input.ScanFilter, context) }),
    ...(input.Segment != null && { Segment: input.Segment }),
    ...(input.Select != null && { Select: input.Select }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TotalSegments != null && { TotalSegments: input.TotalSegments }),
  };
};

/**
 * serializeAws_json1_0SSESpecification
 */
const se_SSESpecification = (input: SSESpecification, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.SSEType != null && { SSEType: input.SSEType }),
  };
};

/**
 * serializeAws_json1_0StreamSpecification
 */
const se_StreamSpecification = (input: StreamSpecification, context: __SerdeContext): any => {
  return {
    ...(input.StreamEnabled != null && { StreamEnabled: input.StreamEnabled }),
    ...(input.StreamViewType != null && { StreamViewType: input.StreamViewType }),
  };
};

/**
 * serializeAws_json1_0StringSetAttributeValue
 */
const se_StringSetAttributeValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TableCreationParameters
 */
const se_TableCreationParameters = (input: TableCreationParameters, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: se_AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: se_GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KeySchema != null && { KeySchema: se_KeySchema(input.KeySchema, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.SSESpecification != null && { SSESpecification: se_SSESpecification(input.SSESpecification, context) }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0TimeToLiveSpecification
 */
const se_TimeToLiveSpecification = (input: TimeToLiveSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_json1_0TransactGetItem
 */
const se_TransactGetItem = (input: TransactGetItem, context: __SerdeContext): any => {
  return {
    ...(input.Get != null && { Get: se_Get(input.Get, context) }),
  };
};

/**
 * serializeAws_json1_0TransactGetItemList
 */
const se_TransactGetItemList = (input: TransactGetItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransactGetItem(entry, context);
    });
};

/**
 * serializeAws_json1_0TransactGetItemsInput
 */
const se_TransactGetItemsInput = (input: TransactGetItemsInput, context: __SerdeContext): any => {
  return {
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TransactItems != null && { TransactItems: se_TransactGetItemList(input.TransactItems, context) }),
  };
};

/**
 * serializeAws_json1_0TransactWriteItem
 */
const se_TransactWriteItem = (input: TransactWriteItem, context: __SerdeContext): any => {
  return {
    ...(input.ConditionCheck != null && { ConditionCheck: se_ConditionCheck(input.ConditionCheck, context) }),
    ...(input.Delete != null && { Delete: se_Delete(input.Delete, context) }),
    ...(input.Put != null && { Put: se_Put(input.Put, context) }),
    ...(input.Update != null && { Update: se_Update(input.Update, context) }),
  };
};

/**
 * serializeAws_json1_0TransactWriteItemList
 */
const se_TransactWriteItemList = (input: TransactWriteItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransactWriteItem(entry, context);
    });
};

/**
 * serializeAws_json1_0TransactWriteItemsInput
 */
const se_TransactWriteItemsInput = (input: TransactWriteItemsInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.TransactItems != null && { TransactItems: se_TransactWriteItemList(input.TransactItems, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0Update
 */
const se_Update = (input: Update, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.UpdateExpression != null && { UpdateExpression: input.UpdateExpression }),
  };
};

/**
 * serializeAws_json1_0UpdateContinuousBackupsInput
 */
const se_UpdateContinuousBackupsInput = (input: UpdateContinuousBackupsInput, context: __SerdeContext): any => {
  return {
    ...(input.PointInTimeRecoverySpecification != null && {
      PointInTimeRecoverySpecification: se_PointInTimeRecoverySpecification(
        input.PointInTimeRecoverySpecification,
        context
      ),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0UpdateContributorInsightsInput
 */
const se_UpdateContributorInsightsInput = (input: UpdateContributorInsightsInput, context: __SerdeContext): any => {
  return {
    ...(input.ContributorInsightsAction != null && { ContributorInsightsAction: input.ContributorInsightsAction }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0UpdateGlobalSecondaryIndexAction
 */
const se_UpdateGlobalSecondaryIndexAction = (input: UpdateGlobalSecondaryIndexAction, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateGlobalTableInput
 */
const se_UpdateGlobalTableInput = (input: UpdateGlobalTableInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.ReplicaUpdates != null && { ReplicaUpdates: se_ReplicaUpdateList(input.ReplicaUpdates, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateGlobalTableSettingsInput
 */
const se_UpdateGlobalTableSettingsInput = (input: UpdateGlobalTableSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableBillingMode != null && { GlobalTableBillingMode: input.GlobalTableBillingMode }),
    ...(input.GlobalTableGlobalSecondaryIndexSettingsUpdate != null && {
      GlobalTableGlobalSecondaryIndexSettingsUpdate: se_GlobalTableGlobalSecondaryIndexSettingsUpdateList(
        input.GlobalTableGlobalSecondaryIndexSettingsUpdate,
        context
      ),
    }),
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate != null && {
      GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: se_AutoScalingSettingsUpdate(
        input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.GlobalTableProvisionedWriteCapacityUnits != null && {
      GlobalTableProvisionedWriteCapacityUnits: input.GlobalTableProvisionedWriteCapacityUnits,
    }),
    ...(input.ReplicaSettingsUpdate != null && {
      ReplicaSettingsUpdate: se_ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateItemInput
 */
const se_UpdateItemInput = (input: UpdateItemInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeUpdates != null && { AttributeUpdates: se_AttributeUpdates(input.AttributeUpdates, context) }),
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: se_ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: se_ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: se_ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    }),
    ...(input.Key != null && { Key: se_Key(input.Key, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.UpdateExpression != null && { UpdateExpression: input.UpdateExpression }),
  };
};

/**
 * serializeAws_json1_0UpdateReplicationGroupMemberAction
 */
const se_UpdateReplicationGroupMemberAction = (
  input: UpdateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: se_ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: se_ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.TableClassOverride != null && { TableClassOverride: input.TableClassOverride }),
  };
};

/**
 * serializeAws_json1_0UpdateTableInput
 */
const se_UpdateTableInput = (input: UpdateTableInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: se_AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.GlobalSecondaryIndexUpdates != null && {
      GlobalSecondaryIndexUpdates: se_GlobalSecondaryIndexUpdateList(input.GlobalSecondaryIndexUpdates, context),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.ReplicaUpdates != null && {
      ReplicaUpdates: se_ReplicationGroupUpdateList(input.ReplicaUpdates, context),
    }),
    ...(input.SSESpecification != null && { SSESpecification: se_SSESpecification(input.SSESpecification, context) }),
    ...(input.StreamSpecification != null && {
      StreamSpecification: se_StreamSpecification(input.StreamSpecification, context),
    }),
    ...(input.TableClass != null && { TableClass: input.TableClass }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0UpdateTableReplicaAutoScalingInput
 */
const se_UpdateTableReplicaAutoScalingInput = (
  input: UpdateTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexUpdates != null && {
      GlobalSecondaryIndexUpdates: se_GlobalSecondaryIndexAutoScalingUpdateList(
        input.GlobalSecondaryIndexUpdates,
        context
      ),
    }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate != null && {
      ProvisionedWriteCapacityAutoScalingUpdate: se_AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      ),
    }),
    ...(input.ReplicaUpdates != null && {
      ReplicaUpdates: se_ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0UpdateTimeToLiveInput
 */
const se_UpdateTimeToLiveInput = (input: UpdateTimeToLiveInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TimeToLiveSpecification != null && {
      TimeToLiveSpecification: se_TimeToLiveSpecification(input.TimeToLiveSpecification, context),
    }),
  };
};

/**
 * serializeAws_json1_0WriteRequest
 */
const se_WriteRequest = (input: WriteRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteRequest != null && { DeleteRequest: se_DeleteRequest(input.DeleteRequest, context) }),
    ...(input.PutRequest != null && { PutRequest: se_PutRequest(input.PutRequest, context) }),
  };
};

/**
 * serializeAws_json1_0WriteRequests
 */
const se_WriteRequests = (input: WriteRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WriteRequest(entry, context);
    });
};

/**
 * deserializeAws_json1_0ArchivalSummary
 */
const de_ArchivalSummary = (output: any, context: __SerdeContext): ArchivalSummary => {
  return {
    ArchivalBackupArn: __expectString(output.ArchivalBackupArn),
    ArchivalDateTime:
      output.ArchivalDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ArchivalDateTime)))
        : undefined,
    ArchivalReason: __expectString(output.ArchivalReason),
  } as any;
};

/**
 * deserializeAws_json1_0AttributeDefinition
 */
const de_AttributeDefinition = (output: any, context: __SerdeContext): AttributeDefinition => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

/**
 * deserializeAws_json1_0AttributeDefinitions
 */
const de_AttributeDefinitions = (output: any, context: __SerdeContext): AttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AttributeMap
 */
const de_AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0AttributeNameList
 */
const de_AttributeNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  if (output.B != null) {
    return {
      B: context.base64Decoder(output.B),
    };
  }
  if (__expectBoolean(output.BOOL) !== undefined) {
    return { BOOL: __expectBoolean(output.BOOL) as any };
  }
  if (output.BS != null) {
    return {
      BS: de_BinarySetAttributeValue(output.BS, context),
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context),
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context),
    };
  }
  if (__expectString(output.N) !== undefined) {
    return { N: __expectString(output.N) as any };
  }
  if (output.NS != null) {
    return {
      NS: de_NumberSetAttributeValue(output.NS, context),
    };
  }
  if (__expectBoolean(output.NULL) !== undefined) {
    return { NULL: __expectBoolean(output.NULL) as any };
  }
  if (__expectString(output.S) !== undefined) {
    return { S: __expectString(output.S) as any };
  }
  if (output.SS != null) {
    return {
      SS: de_StringSetAttributeValue(output.SS, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0AutoScalingPolicyDescription
 */
const de_AutoScalingPolicyDescription = (output: any, context: __SerdeContext): AutoScalingPolicyDescription => {
  return {
    PolicyName: __expectString(output.PolicyName),
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration != null
        ? de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingPolicyDescriptionList
 */
const de_AutoScalingPolicyDescriptionList = (output: any, context: __SerdeContext): AutoScalingPolicyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoScalingPolicyDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AutoScalingSettingsDescription
 */
const de_AutoScalingSettingsDescription = (output: any, context: __SerdeContext): AutoScalingSettingsDescription => {
  return {
    AutoScalingDisabled: __expectBoolean(output.AutoScalingDisabled),
    AutoScalingRoleArn: __expectString(output.AutoScalingRoleArn),
    MaximumUnits: __expectLong(output.MaximumUnits),
    MinimumUnits: __expectLong(output.MinimumUnits),
    ScalingPolicies:
      output.ScalingPolicies != null ? de_AutoScalingPolicyDescriptionList(output.ScalingPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 */
const de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingTargetTrackingScalingPolicyConfigurationDescription => {
  return {
    DisableScaleIn: __expectBoolean(output.DisableScaleIn),
    ScaleInCooldown: __expectInt32(output.ScaleInCooldown),
    ScaleOutCooldown: __expectInt32(output.ScaleOutCooldown),
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

/**
 * deserializeAws_json1_0BackupDescription
 */
const de_BackupDescription = (output: any, context: __SerdeContext): BackupDescription => {
  return {
    BackupDetails: output.BackupDetails != null ? de_BackupDetails(output.BackupDetails, context) : undefined,
    SourceTableDetails:
      output.SourceTableDetails != null ? de_SourceTableDetails(output.SourceTableDetails, context) : undefined,
    SourceTableFeatureDetails:
      output.SourceTableFeatureDetails != null
        ? de_SourceTableFeatureDetails(output.SourceTableFeatureDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BackupDetails
 */
const de_BackupDetails = (output: any, context: __SerdeContext): BackupDetails => {
  return {
    BackupArn: __expectString(output.BackupArn),
    BackupCreationDateTime:
      output.BackupCreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BackupCreationDateTime)))
        : undefined,
    BackupExpiryDateTime:
      output.BackupExpiryDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BackupExpiryDateTime)))
        : undefined,
    BackupName: __expectString(output.BackupName),
    BackupSizeBytes: __expectLong(output.BackupSizeBytes),
    BackupStatus: __expectString(output.BackupStatus),
    BackupType: __expectString(output.BackupType),
  } as any;
};

/**
 * deserializeAws_json1_0BackupInUseException
 */
const de_BackupInUseException = (output: any, context: __SerdeContext): BackupInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0BackupNotFoundException
 */
const de_BackupNotFoundException = (output: any, context: __SerdeContext): BackupNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0BackupSummaries
 */
const de_BackupSummaries = (output: any, context: __SerdeContext): BackupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BackupSummary
 */
const de_BackupSummary = (output: any, context: __SerdeContext): BackupSummary => {
  return {
    BackupArn: __expectString(output.BackupArn),
    BackupCreationDateTime:
      output.BackupCreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BackupCreationDateTime)))
        : undefined,
    BackupExpiryDateTime:
      output.BackupExpiryDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BackupExpiryDateTime)))
        : undefined,
    BackupName: __expectString(output.BackupName),
    BackupSizeBytes: __expectLong(output.BackupSizeBytes),
    BackupStatus: __expectString(output.BackupStatus),
    BackupType: __expectString(output.BackupType),
    TableArn: __expectString(output.TableArn),
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0BatchExecuteStatementOutput
 */
const de_BatchExecuteStatementOutput = (output: any, context: __SerdeContext): BatchExecuteStatementOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    Responses: output.Responses != null ? de_PartiQLBatchResponse(output.Responses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchGetItemOutput
 */
const de_BatchGetItemOutput = (output: any, context: __SerdeContext): BatchGetItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    Responses: output.Responses != null ? de_BatchGetResponseMap(output.Responses, context) : undefined,
    UnprocessedKeys:
      output.UnprocessedKeys != null ? de_BatchGetRequestMap(output.UnprocessedKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchGetRequestMap
 */
const de_BatchGetRequestMap = (output: any, context: __SerdeContext): Record<string, KeysAndAttributes> => {
  return Object.entries(output).reduce((acc: Record<string, KeysAndAttributes>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_KeysAndAttributes(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0BatchGetResponseMap
 */
const de_BatchGetResponseMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, AttributeValue>[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, AttributeValue>[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ItemList(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_0BatchStatementError
 */
const de_BatchStatementError = (output: any, context: __SerdeContext): BatchStatementError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0BatchStatementResponse
 */
const de_BatchStatementResponse = (output: any, context: __SerdeContext): BatchStatementResponse => {
  return {
    Error: output.Error != null ? de_BatchStatementError(output.Error, context) : undefined,
    Item: output.Item != null ? de_AttributeMap(output.Item, context) : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0BatchWriteItemOutput
 */
const de_BatchWriteItemOutput = (output: any, context: __SerdeContext): BatchWriteItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? de_ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
        : undefined,
    UnprocessedItems:
      output.UnprocessedItems != null ? de_BatchWriteItemRequestMap(output.UnprocessedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchWriteItemRequestMap
 */
const de_BatchWriteItemRequestMap = (output: any, context: __SerdeContext): Record<string, WriteRequest[]> => {
  return Object.entries(output).reduce((acc: Record<string, WriteRequest[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_WriteRequests(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0BillingModeSummary
 */
const de_BillingModeSummary = (output: any, context: __SerdeContext): BillingModeSummary => {
  return {
    BillingMode: __expectString(output.BillingMode),
    LastUpdateToPayPerRequestDateTime:
      output.LastUpdateToPayPerRequestDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateToPayPerRequestDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BinarySetAttributeValue
 */
const de_BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return context.base64Decoder(entry);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CancellationReason
 */
const de_CancellationReason = (output: any, context: __SerdeContext): CancellationReason => {
  return {
    Code: __expectString(output.Code),
    Item: output.Item != null ? de_AttributeMap(output.Item, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CancellationReasonList
 */
const de_CancellationReasonList = (output: any, context: __SerdeContext): CancellationReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CancellationReason(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Capacity
 */
const de_Capacity = (output: any, context: __SerdeContext): Capacity => {
  return {
    CapacityUnits: __limitedParseDouble(output.CapacityUnits),
    ReadCapacityUnits: __limitedParseDouble(output.ReadCapacityUnits),
    WriteCapacityUnits: __limitedParseDouble(output.WriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ConditionalCheckFailedException
 */
const de_ConditionalCheckFailedException = (output: any, context: __SerdeContext): ConditionalCheckFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ConsumedCapacity
 */
const de_ConsumedCapacity = (output: any, context: __SerdeContext): ConsumedCapacity => {
  return {
    CapacityUnits: __limitedParseDouble(output.CapacityUnits),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context)
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? de_SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context)
        : undefined,
    ReadCapacityUnits: __limitedParseDouble(output.ReadCapacityUnits),
    Table: output.Table != null ? de_Capacity(output.Table, context) : undefined,
    TableName: __expectString(output.TableName),
    WriteCapacityUnits: __limitedParseDouble(output.WriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ConsumedCapacityMultiple
 */
const de_ConsumedCapacityMultiple = (output: any, context: __SerdeContext): ConsumedCapacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConsumedCapacity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ContinuousBackupsDescription
 */
const de_ContinuousBackupsDescription = (output: any, context: __SerdeContext): ContinuousBackupsDescription => {
  return {
    ContinuousBackupsStatus: __expectString(output.ContinuousBackupsStatus),
    PointInTimeRecoveryDescription:
      output.PointInTimeRecoveryDescription != null
        ? de_PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ContinuousBackupsUnavailableException
 */
const de_ContinuousBackupsUnavailableException = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ContributorInsightsRuleList
 */
const de_ContributorInsightsRuleList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0ContributorInsightsSummaries
 */
const de_ContributorInsightsSummaries = (output: any, context: __SerdeContext): ContributorInsightsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContributorInsightsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ContributorInsightsSummary
 */
const de_ContributorInsightsSummary = (output: any, context: __SerdeContext): ContributorInsightsSummary => {
  return {
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    IndexName: __expectString(output.IndexName),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0CreateBackupOutput
 */
const de_CreateBackupOutput = (output: any, context: __SerdeContext): CreateBackupOutput => {
  return {
    BackupDetails: output.BackupDetails != null ? de_BackupDetails(output.BackupDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateGlobalTableOutput
 */
const de_CreateGlobalTableOutput = (output: any, context: __SerdeContext): CreateGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? de_GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateTableOutput
 */
const de_CreateTableOutput = (output: any, context: __SerdeContext): CreateTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null ? de_TableDescription(output.TableDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CsvHeaderList
 */
const de_CsvHeaderList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0CsvOptions
 */
const de_CsvOptions = (output: any, context: __SerdeContext): CsvOptions => {
  return {
    Delimiter: __expectString(output.Delimiter),
    HeaderList: output.HeaderList != null ? de_CsvHeaderList(output.HeaderList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteBackupOutput
 */
const de_DeleteBackupOutput = (output: any, context: __SerdeContext): DeleteBackupOutput => {
  return {
    BackupDescription:
      output.BackupDescription != null ? de_BackupDescription(output.BackupDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteItemOutput
 */
const de_DeleteItemOutput = (output: any, context: __SerdeContext): DeleteItemOutput => {
  return {
    Attributes: output.Attributes != null ? de_AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? de_ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteRequest
 */
const de_DeleteRequest = (output: any, context: __SerdeContext): DeleteRequest => {
  return {
    Key: output.Key != null ? de_Key(output.Key, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteTableOutput
 */
const de_DeleteTableOutput = (output: any, context: __SerdeContext): DeleteTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null ? de_TableDescription(output.TableDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeBackupOutput
 */
const de_DescribeBackupOutput = (output: any, context: __SerdeContext): DescribeBackupOutput => {
  return {
    BackupDescription:
      output.BackupDescription != null ? de_BackupDescription(output.BackupDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeContinuousBackupsOutput
 */
const de_DescribeContinuousBackupsOutput = (output: any, context: __SerdeContext): DescribeContinuousBackupsOutput => {
  return {
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription != null
        ? de_ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeContributorInsightsOutput
 */
const de_DescribeContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContributorInsightsOutput => {
  return {
    ContributorInsightsRuleList:
      output.ContributorInsightsRuleList != null
        ? de_ContributorInsightsRuleList(output.ContributorInsightsRuleList, context)
        : undefined,
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    FailureException:
      output.FailureException != null ? de_FailureException(output.FailureException, context) : undefined,
    IndexName: __expectString(output.IndexName),
    LastUpdateDateTime:
      output.LastUpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateDateTime)))
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeEndpointsResponse
 */
const de_DescribeEndpointsResponse = (output: any, context: __SerdeContext): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? de_Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeExportOutput
 */
const de_DescribeExportOutput = (output: any, context: __SerdeContext): DescribeExportOutput => {
  return {
    ExportDescription:
      output.ExportDescription != null ? de_ExportDescription(output.ExportDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeGlobalTableOutput
 */
const de_DescribeGlobalTableOutput = (output: any, context: __SerdeContext): DescribeGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? de_GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeGlobalTableSettingsOutput
 */
const de_DescribeGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableSettingsOutput => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicaSettings:
      output.ReplicaSettings != null ? de_ReplicaSettingsDescriptionList(output.ReplicaSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeImportOutput
 */
const de_DescribeImportOutput = (output: any, context: __SerdeContext): DescribeImportOutput => {
  return {
    ImportTableDescription:
      output.ImportTableDescription != null
        ? de_ImportTableDescription(output.ImportTableDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput
 */
const de_DescribeKinesisStreamingDestinationOutput = (
  output: any,
  context: __SerdeContext
): DescribeKinesisStreamingDestinationOutput => {
  return {
    KinesisDataStreamDestinations:
      output.KinesisDataStreamDestinations != null
        ? de_KinesisDataStreamDestinations(output.KinesisDataStreamDestinations, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeLimitsOutput
 */
const de_DescribeLimitsOutput = (output: any, context: __SerdeContext): DescribeLimitsOutput => {
  return {
    AccountMaxReadCapacityUnits: __expectLong(output.AccountMaxReadCapacityUnits),
    AccountMaxWriteCapacityUnits: __expectLong(output.AccountMaxWriteCapacityUnits),
    TableMaxReadCapacityUnits: __expectLong(output.TableMaxReadCapacityUnits),
    TableMaxWriteCapacityUnits: __expectLong(output.TableMaxWriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeTableOutput
 */
const de_DescribeTableOutput = (output: any, context: __SerdeContext): DescribeTableOutput => {
  return {
    Table: output.Table != null ? de_TableDescription(output.Table, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput
 */
const de_DescribeTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableReplicaAutoScalingOutput => {
  return {
    TableAutoScalingDescription:
      output.TableAutoScalingDescription != null
        ? de_TableAutoScalingDescription(output.TableAutoScalingDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeTimeToLiveOutput
 */
const de_DescribeTimeToLiveOutput = (output: any, context: __SerdeContext): DescribeTimeToLiveOutput => {
  return {
    TimeToLiveDescription:
      output.TimeToLiveDescription != null
        ? de_TimeToLiveDescription(output.TimeToLiveDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DuplicateItemException
 */
const de_DuplicateItemException = (output: any, context: __SerdeContext): DuplicateItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    CachePeriodInMinutes: __expectLong(output.CachePeriodInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_0Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
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
 * deserializeAws_json1_0ExecuteStatementOutput
 */
const de_ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    Items: output.Items != null ? de_ItemList(output.Items, context) : undefined,
    LastEvaluatedKey: output.LastEvaluatedKey != null ? de_Key(output.LastEvaluatedKey, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ExecuteTransactionOutput
 */
const de_ExecuteTransactionOutput = (output: any, context: __SerdeContext): ExecuteTransactionOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    Responses: output.Responses != null ? de_ItemResponseList(output.Responses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportConflictException
 */
const de_ExportConflictException = (output: any, context: __SerdeContext): ExportConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ExportDescription
 */
const de_ExportDescription = (output: any, context: __SerdeContext): ExportDescription => {
  return {
    BilledSizeBytes: __expectLong(output.BilledSizeBytes),
    ClientToken: __expectString(output.ClientToken),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExportArn: __expectString(output.ExportArn),
    ExportFormat: __expectString(output.ExportFormat),
    ExportManifest: __expectString(output.ExportManifest),
    ExportStatus: __expectString(output.ExportStatus),
    ExportTime:
      output.ExportTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExportTime))) : undefined,
    FailureCode: __expectString(output.FailureCode),
    FailureMessage: __expectString(output.FailureMessage),
    ItemCount: __expectLong(output.ItemCount),
    S3Bucket: __expectString(output.S3Bucket),
    S3BucketOwner: __expectString(output.S3BucketOwner),
    S3Prefix: __expectString(output.S3Prefix),
    S3SseAlgorithm: __expectString(output.S3SseAlgorithm),
    S3SseKmsKeyId: __expectString(output.S3SseKmsKeyId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TableArn: __expectString(output.TableArn),
    TableId: __expectString(output.TableId),
  } as any;
};

/**
 * deserializeAws_json1_0ExportNotFoundException
 */
const de_ExportNotFoundException = (output: any, context: __SerdeContext): ExportNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ExportSummaries
 */
const de_ExportSummaries = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ExportSummary
 */
const de_ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
  return {
    ExportArn: __expectString(output.ExportArn),
    ExportStatus: __expectString(output.ExportStatus),
  } as any;
};

/**
 * deserializeAws_json1_0ExportTableToPointInTimeOutput
 */
const de_ExportTableToPointInTimeOutput = (output: any, context: __SerdeContext): ExportTableToPointInTimeOutput => {
  return {
    ExportDescription:
      output.ExportDescription != null ? de_ExportDescription(output.ExportDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExpressionAttributeNameMap
 */
const de_ExpressionAttributeNameMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0FailureException
 */
const de_FailureException = (output: any, context: __SerdeContext): FailureException => {
  return {
    ExceptionDescription: __expectString(output.ExceptionDescription),
    ExceptionName: __expectString(output.ExceptionName),
  } as any;
};

/**
 * deserializeAws_json1_0GetItemOutput
 */
const de_GetItemOutput = (output: any, context: __SerdeContext): GetItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    Item: output.Item != null ? de_AttributeMap(output.Item, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndex
 */
const de_GlobalSecondaryIndex = (output: any, context: __SerdeContext): GlobalSecondaryIndex => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? de_Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndexDescription
 */
const de_GlobalSecondaryIndexDescription = (output: any, context: __SerdeContext): GlobalSecondaryIndexDescription => {
  return {
    Backfilling: __expectBoolean(output.Backfilling),
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    IndexStatus: __expectString(output.IndexStatus),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? de_Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndexDescriptionList
 */
const de_GlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlobalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndexes
 */
const de_GlobalSecondaryIndexes = (output: any, context: __SerdeContext): GlobalSecondaryIndexInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlobalSecondaryIndexInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndexInfo
 */
const de_GlobalSecondaryIndexInfo = (output: any, context: __SerdeContext): GlobalSecondaryIndexInfo => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? de_Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalSecondaryIndexList
 */
const de_GlobalSecondaryIndexList = (output: any, context: __SerdeContext): GlobalSecondaryIndex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlobalSecondaryIndex(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GlobalTable
 */
const de_GlobalTable = (output: any, context: __SerdeContext): GlobalTable => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicationGroup: output.ReplicationGroup != null ? de_ReplicaList(output.ReplicationGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalTableAlreadyExistsException
 */
const de_GlobalTableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): GlobalTableAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0GlobalTableDescription
 */
const de_GlobalTableDescription = (output: any, context: __SerdeContext): GlobalTableDescription => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    GlobalTableArn: __expectString(output.GlobalTableArn),
    GlobalTableName: __expectString(output.GlobalTableName),
    GlobalTableStatus: __expectString(output.GlobalTableStatus),
    ReplicationGroup:
      output.ReplicationGroup != null ? de_ReplicaDescriptionList(output.ReplicationGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GlobalTableList
 */
const de_GlobalTableList = (output: any, context: __SerdeContext): GlobalTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlobalTable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GlobalTableNotFoundException
 */
const de_GlobalTableNotFoundException = (output: any, context: __SerdeContext): GlobalTableNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0IdempotentParameterMismatchException
 */
const de_IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ImportConflictException
 */
const de_ImportConflictException = (output: any, context: __SerdeContext): ImportConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ImportNotFoundException
 */
const de_ImportNotFoundException = (output: any, context: __SerdeContext): ImportNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ImportSummary
 */
const de_ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return {
    CloudWatchLogGroupArn: __expectString(output.CloudWatchLogGroupArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ImportArn: __expectString(output.ImportArn),
    ImportStatus: __expectString(output.ImportStatus),
    InputFormat: __expectString(output.InputFormat),
    S3BucketSource: output.S3BucketSource != null ? de_S3BucketSource(output.S3BucketSource, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TableArn: __expectString(output.TableArn),
  } as any;
};

/**
 * deserializeAws_json1_0ImportSummaryList
 */
const de_ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ImportTableDescription
 */
const de_ImportTableDescription = (output: any, context: __SerdeContext): ImportTableDescription => {
  return {
    ClientToken: __expectString(output.ClientToken),
    CloudWatchLogGroupArn: __expectString(output.CloudWatchLogGroupArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ErrorCount: __expectLong(output.ErrorCount),
    FailureCode: __expectString(output.FailureCode),
    FailureMessage: __expectString(output.FailureMessage),
    ImportArn: __expectString(output.ImportArn),
    ImportStatus: __expectString(output.ImportStatus),
    ImportedItemCount: __expectLong(output.ImportedItemCount),
    InputCompressionType: __expectString(output.InputCompressionType),
    InputFormat: __expectString(output.InputFormat),
    InputFormatOptions:
      output.InputFormatOptions != null ? de_InputFormatOptions(output.InputFormatOptions, context) : undefined,
    ProcessedItemCount: __expectLong(output.ProcessedItemCount),
    ProcessedSizeBytes: __expectLong(output.ProcessedSizeBytes),
    S3BucketSource: output.S3BucketSource != null ? de_S3BucketSource(output.S3BucketSource, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TableArn: __expectString(output.TableArn),
    TableCreationParameters:
      output.TableCreationParameters != null
        ? de_TableCreationParameters(output.TableCreationParameters, context)
        : undefined,
    TableId: __expectString(output.TableId),
  } as any;
};

/**
 * deserializeAws_json1_0ImportTableOutput
 */
const de_ImportTableOutput = (output: any, context: __SerdeContext): ImportTableOutput => {
  return {
    ImportTableDescription:
      output.ImportTableDescription != null
        ? de_ImportTableDescription(output.ImportTableDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0IndexNotFoundException
 */
const de_IndexNotFoundException = (output: any, context: __SerdeContext): IndexNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InputFormatOptions
 */
const de_InputFormatOptions = (output: any, context: __SerdeContext): InputFormatOptions => {
  return {
    Csv: output.Csv != null ? de_CsvOptions(output.Csv, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidEndpointException
 */
const de_InvalidEndpointException = (output: any, context: __SerdeContext): InvalidEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidExportTimeException
 */
const de_InvalidExportTimeException = (output: any, context: __SerdeContext): InvalidExportTimeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidRestoreTimeException
 */
const de_InvalidRestoreTimeException = (output: any, context: __SerdeContext): InvalidRestoreTimeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ItemCollectionKeyAttributeMap
 */
const de_ItemCollectionKeyAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0ItemCollectionMetrics
 */
const de_ItemCollectionMetrics = (output: any, context: __SerdeContext): ItemCollectionMetrics => {
  return {
    ItemCollectionKey:
      output.ItemCollectionKey != null
        ? de_ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context)
        : undefined,
    SizeEstimateRangeGB:
      output.SizeEstimateRangeGB != null
        ? de_ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ItemCollectionMetricsMultiple
 */
const de_ItemCollectionMetricsMultiple = (output: any, context: __SerdeContext): ItemCollectionMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ItemCollectionMetrics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ItemCollectionMetricsPerTable
 */
const de_ItemCollectionMetricsPerTable = (
  output: any,
  context: __SerdeContext
): Record<string, ItemCollectionMetrics[]> => {
  return Object.entries(output).reduce((acc: Record<string, ItemCollectionMetrics[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ItemCollectionMetricsMultiple(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0ItemCollectionSizeEstimateRange
 */
const de_ItemCollectionSizeEstimateRange = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ItemCollectionSizeLimitExceededException
 */
const de_ItemCollectionSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): ItemCollectionSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ItemResponse
 */
const de_ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    Item: output.Item != null ? de_AttributeMap(output.Item, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ItemResponseList
 */
const de_ItemResponseList = (output: any, context: __SerdeContext): ItemResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ItemResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Key
 */
const de_Key = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0KeyList
 */
const de_KeyList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Key(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeysAndAttributes
 */
const de_KeysAndAttributes = (output: any, context: __SerdeContext): KeysAndAttributes => {
  return {
    AttributesToGet: output.AttributesToGet != null ? de_AttributeNameList(output.AttributesToGet, context) : undefined,
    ConsistentRead: __expectBoolean(output.ConsistentRead),
    ExpressionAttributeNames:
      output.ExpressionAttributeNames != null
        ? de_ExpressionAttributeNameMap(output.ExpressionAttributeNames, context)
        : undefined,
    Keys: output.Keys != null ? de_KeyList(output.Keys, context) : undefined,
    ProjectionExpression: __expectString(output.ProjectionExpression),
  } as any;
};

/**
 * deserializeAws_json1_0KeySchema
 */
const de_KeySchema = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeySchemaElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeySchemaElement
 */
const de_KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

/**
 * deserializeAws_json1_0KinesisDataStreamDestination
 */
const de_KinesisDataStreamDestination = (output: any, context: __SerdeContext): KinesisDataStreamDestination => {
  return {
    DestinationStatus: __expectString(output.DestinationStatus),
    DestinationStatusDescription: __expectString(output.DestinationStatusDescription),
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

/**
 * deserializeAws_json1_0KinesisDataStreamDestinations
 */
const de_KinesisDataStreamDestinations = (output: any, context: __SerdeContext): KinesisDataStreamDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KinesisDataStreamDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KinesisStreamingDestinationOutput
 */
const de_KinesisStreamingDestinationOutput = (
  output: any,
  context: __SerdeContext
): KinesisStreamingDestinationOutput => {
  return {
    DestinationStatus: __expectString(output.DestinationStatus),
    StreamArn: __expectString(output.StreamArn),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ListAttributeValue
 */
const de_ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListBackupsOutput
 */
const de_ListBackupsOutput = (output: any, context: __SerdeContext): ListBackupsOutput => {
  return {
    BackupSummaries: output.BackupSummaries != null ? de_BackupSummaries(output.BackupSummaries, context) : undefined,
    LastEvaluatedBackupArn: __expectString(output.LastEvaluatedBackupArn),
  } as any;
};

/**
 * deserializeAws_json1_0ListContributorInsightsOutput
 */
const de_ListContributorInsightsOutput = (output: any, context: __SerdeContext): ListContributorInsightsOutput => {
  return {
    ContributorInsightsSummaries:
      output.ContributorInsightsSummaries != null
        ? de_ContributorInsightsSummaries(output.ContributorInsightsSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListExportsOutput
 */
const de_ListExportsOutput = (output: any, context: __SerdeContext): ListExportsOutput => {
  return {
    ExportSummaries: output.ExportSummaries != null ? de_ExportSummaries(output.ExportSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListGlobalTablesOutput
 */
const de_ListGlobalTablesOutput = (output: any, context: __SerdeContext): ListGlobalTablesOutput => {
  return {
    GlobalTables: output.GlobalTables != null ? de_GlobalTableList(output.GlobalTables, context) : undefined,
    LastEvaluatedGlobalTableName: __expectString(output.LastEvaluatedGlobalTableName),
  } as any;
};

/**
 * deserializeAws_json1_0ListImportsOutput
 */
const de_ListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  return {
    ImportSummaryList:
      output.ImportSummaryList != null ? de_ImportSummaryList(output.ImportSummaryList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListTablesOutput
 */
const de_ListTablesOutput = (output: any, context: __SerdeContext): ListTablesOutput => {
  return {
    LastEvaluatedTableName: __expectString(output.LastEvaluatedTableName),
    TableNames: output.TableNames != null ? de_TableNameList(output.TableNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsOfResourceOutput
 */
const de_ListTagsOfResourceOutput = (output: any, context: __SerdeContext): ListTagsOfResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LocalSecondaryIndexDescription
 */
const de_LocalSecondaryIndexDescription = (output: any, context: __SerdeContext): LocalSecondaryIndexDescription => {
  return {
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? de_Projection(output.Projection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LocalSecondaryIndexDescriptionList
 */
const de_LocalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LocalSecondaryIndexes
 */
const de_LocalSecondaryIndexes = (output: any, context: __SerdeContext): LocalSecondaryIndexInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LocalSecondaryIndexInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LocalSecondaryIndexInfo
 */
const de_LocalSecondaryIndexInfo = (output: any, context: __SerdeContext): LocalSecondaryIndexInfo => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? de_Projection(output.Projection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MapAttributeValue
 */
const de_MapAttributeValue = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0NonKeyAttributeNameList
 */
const de_NonKeyAttributeNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0NumberSetAttributeValue
 */
const de_NumberSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0PartiQLBatchResponse
 */
const de_PartiQLBatchResponse = (output: any, context: __SerdeContext): BatchStatementResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchStatementResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PointInTimeRecoveryDescription
 */
const de_PointInTimeRecoveryDescription = (output: any, context: __SerdeContext): PointInTimeRecoveryDescription => {
  return {
    EarliestRestorableDateTime:
      output.EarliestRestorableDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EarliestRestorableDateTime)))
        : undefined,
    LatestRestorableDateTime:
      output.LatestRestorableDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestRestorableDateTime)))
        : undefined,
    PointInTimeRecoveryStatus: __expectString(output.PointInTimeRecoveryStatus),
  } as any;
};

/**
 * deserializeAws_json1_0PointInTimeRecoveryUnavailableException
 */
const de_PointInTimeRecoveryUnavailableException = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Projection
 */
const de_Projection = (output: any, context: __SerdeContext): Projection => {
  return {
    NonKeyAttributes:
      output.NonKeyAttributes != null ? de_NonKeyAttributeNameList(output.NonKeyAttributes, context) : undefined,
    ProjectionType: __expectString(output.ProjectionType),
  } as any;
};

/**
 * deserializeAws_json1_0ProvisionedThroughput
 */
const de_ProvisionedThroughput = (output: any, context: __SerdeContext): ProvisionedThroughput => {
  return {
    ReadCapacityUnits: __expectLong(output.ReadCapacityUnits),
    WriteCapacityUnits: __expectLong(output.WriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ProvisionedThroughputDescription
 */
const de_ProvisionedThroughputDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputDescription => {
  return {
    LastDecreaseDateTime:
      output.LastDecreaseDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastDecreaseDateTime)))
        : undefined,
    LastIncreaseDateTime:
      output.LastIncreaseDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastIncreaseDateTime)))
        : undefined,
    NumberOfDecreasesToday: __expectLong(output.NumberOfDecreasesToday),
    ReadCapacityUnits: __expectLong(output.ReadCapacityUnits),
    WriteCapacityUnits: __expectLong(output.WriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ProvisionedThroughputExceededException
 */
const de_ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ProvisionedThroughputOverride
 */
const de_ProvisionedThroughputOverride = (output: any, context: __SerdeContext): ProvisionedThroughputOverride => {
  return {
    ReadCapacityUnits: __expectLong(output.ReadCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0PutItemInputAttributeMap
 */
const de_PutItemInputAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0PutItemOutput
 */
const de_PutItemOutput = (output: any, context: __SerdeContext): PutItemOutput => {
  return {
    Attributes: output.Attributes != null ? de_AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? de_ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0PutRequest
 */
const de_PutRequest = (output: any, context: __SerdeContext): PutRequest => {
  return {
    Item: output.Item != null ? de_PutItemInputAttributeMap(output.Item, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0QueryOutput
 */
const de_QueryOutput = (output: any, context: __SerdeContext): QueryOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    Count: __expectInt32(output.Count),
    Items: output.Items != null ? de_ItemList(output.Items, context) : undefined,
    LastEvaluatedKey: output.LastEvaluatedKey != null ? de_Key(output.LastEvaluatedKey, context) : undefined,
    ScannedCount: __expectInt32(output.ScannedCount),
  } as any;
};

/**
 * deserializeAws_json1_0Replica
 */
const de_Replica = (output: any, context: __SerdeContext): Replica => {
  return {
    RegionName: __expectString(output.RegionName),
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaAlreadyExistsException
 */
const de_ReplicaAlreadyExistsException = (output: any, context: __SerdeContext): ReplicaAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaAutoScalingDescription
 */
const de_ReplicaAutoScalingDescription = (output: any, context: __SerdeContext): ReplicaAutoScalingDescription => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(output.GlobalSecondaryIndexes, context)
        : undefined,
    RegionName: __expectString(output.RegionName),
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
        : undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
        : undefined,
    ReplicaStatus: __expectString(output.ReplicaStatus),
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaAutoScalingDescriptionList
 */
const de_ReplicaAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaAutoScalingDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaDescription
 */
const de_ReplicaDescription = (output: any, context: __SerdeContext): ReplicaDescription => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
        : undefined,
    KMSMasterKeyId: __expectString(output.KMSMasterKeyId),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? de_ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
        : undefined,
    RegionName: __expectString(output.RegionName),
    ReplicaInaccessibleDateTime:
      output.ReplicaInaccessibleDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplicaInaccessibleDateTime)))
        : undefined,
    ReplicaStatus: __expectString(output.ReplicaStatus),
    ReplicaStatusDescription: __expectString(output.ReplicaStatusDescription),
    ReplicaStatusPercentProgress: __expectString(output.ReplicaStatusPercentProgress),
    ReplicaTableClassSummary:
      output.ReplicaTableClassSummary != null
        ? de_TableClassSummary(output.ReplicaTableClassSummary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaDescriptionList
 */
const de_ReplicaDescriptionList = (output: any, context: __SerdeContext): ReplicaDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription
 */
const de_ReplicaGlobalSecondaryIndexAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
        : undefined,
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList
 */
const de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription
 */
const de_ReplicaGlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? de_ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList
 */
const de_ReplicaGlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaGlobalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription
 */
const de_ReplicaGlobalSecondaryIndexSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
        : undefined,
    ProvisionedReadCapacityUnits: __expectLong(output.ProvisionedReadCapacityUnits),
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
        : undefined,
    ProvisionedWriteCapacityUnits: __expectLong(output.ProvisionedWriteCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList
 */
const de_ReplicaGlobalSecondaryIndexSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaList
 */
const de_ReplicaList = (output: any, context: __SerdeContext): Replica[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Replica(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaNotFoundException
 */
const de_ReplicaNotFoundException = (output: any, context: __SerdeContext): ReplicaNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaSettingsDescription
 */
const de_ReplicaSettingsDescription = (output: any, context: __SerdeContext): ReplicaSettingsDescription => {
  return {
    RegionName: __expectString(output.RegionName),
    ReplicaBillingModeSummary:
      output.ReplicaBillingModeSummary != null
        ? de_BillingModeSummary(output.ReplicaBillingModeSummary, context)
        : undefined,
    ReplicaGlobalSecondaryIndexSettings:
      output.ReplicaGlobalSecondaryIndexSettings != null
        ? de_ReplicaGlobalSecondaryIndexSettingsDescriptionList(output.ReplicaGlobalSecondaryIndexSettings, context)
        : undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
        : undefined,
    ReplicaProvisionedReadCapacityUnits: __expectLong(output.ReplicaProvisionedReadCapacityUnits),
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings != null
        ? de_AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
        : undefined,
    ReplicaProvisionedWriteCapacityUnits: __expectLong(output.ReplicaProvisionedWriteCapacityUnits),
    ReplicaStatus: __expectString(output.ReplicaStatus),
    ReplicaTableClassSummary:
      output.ReplicaTableClassSummary != null
        ? de_TableClassSummary(output.ReplicaTableClassSummary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReplicaSettingsDescriptionList
 */
const de_ReplicaSettingsDescriptionList = (output: any, context: __SerdeContext): ReplicaSettingsDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicaSettingsDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RequestLimitExceeded
 */
const de_RequestLimitExceeded = (output: any, context: __SerdeContext): RequestLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0RestoreSummary
 */
const de_RestoreSummary = (output: any, context: __SerdeContext): RestoreSummary => {
  return {
    RestoreDateTime:
      output.RestoreDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RestoreDateTime)))
        : undefined,
    RestoreInProgress: __expectBoolean(output.RestoreInProgress),
    SourceBackupArn: __expectString(output.SourceBackupArn),
    SourceTableArn: __expectString(output.SourceTableArn),
  } as any;
};

/**
 * deserializeAws_json1_0RestoreTableFromBackupOutput
 */
const de_RestoreTableFromBackupOutput = (output: any, context: __SerdeContext): RestoreTableFromBackupOutput => {
  return {
    TableDescription:
      output.TableDescription != null ? de_TableDescription(output.TableDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RestoreTableToPointInTimeOutput
 */
const de_RestoreTableToPointInTimeOutput = (output: any, context: __SerdeContext): RestoreTableToPointInTimeOutput => {
  return {
    TableDescription:
      output.TableDescription != null ? de_TableDescription(output.TableDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0S3BucketSource
 */
const de_S3BucketSource = (output: any, context: __SerdeContext): S3BucketSource => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3BucketOwner: __expectString(output.S3BucketOwner),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_0ScanOutput
 */
const de_ScanOutput = (output: any, context: __SerdeContext): ScanOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    Count: __expectInt32(output.Count),
    Items: output.Items != null ? de_ItemList(output.Items, context) : undefined,
    LastEvaluatedKey: output.LastEvaluatedKey != null ? de_Key(output.LastEvaluatedKey, context) : undefined,
    ScannedCount: __expectInt32(output.ScannedCount),
  } as any;
};

/**
 * deserializeAws_json1_0SecondaryIndexesCapacityMap
 */
const de_SecondaryIndexesCapacityMap = (output: any, context: __SerdeContext): Record<string, Capacity> => {
  return Object.entries(output).reduce((acc: Record<string, Capacity>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Capacity(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0SourceTableDetails
 */
const de_SourceTableDetails = (output: any, context: __SerdeContext): SourceTableDetails => {
  return {
    BillingMode: __expectString(output.BillingMode),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
    TableArn: __expectString(output.TableArn),
    TableCreationDateTime:
      output.TableCreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TableCreationDateTime)))
        : undefined,
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
    TableSizeBytes: __expectLong(output.TableSizeBytes),
  } as any;
};

/**
 * deserializeAws_json1_0SourceTableFeatureDetails
 */
const de_SourceTableFeatureDetails = (output: any, context: __SerdeContext): SourceTableFeatureDetails => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context)
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? de_LocalSecondaryIndexes(output.LocalSecondaryIndexes, context)
        : undefined,
    SSEDescription: output.SSEDescription != null ? de_SSEDescription(output.SSEDescription, context) : undefined,
    StreamDescription:
      output.StreamDescription != null ? de_StreamSpecification(output.StreamDescription, context) : undefined,
    TimeToLiveDescription:
      output.TimeToLiveDescription != null
        ? de_TimeToLiveDescription(output.TimeToLiveDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0SSEDescription
 */
const de_SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
  return {
    InaccessibleEncryptionDateTime:
      output.InaccessibleEncryptionDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InaccessibleEncryptionDateTime)))
        : undefined,
    KMSMasterKeyArn: __expectString(output.KMSMasterKeyArn),
    SSEType: __expectString(output.SSEType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0SSESpecification
 */
const de_SSESpecification = (output: any, context: __SerdeContext): SSESpecification => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KMSMasterKeyId: __expectString(output.KMSMasterKeyId),
    SSEType: __expectString(output.SSEType),
  } as any;
};

/**
 * deserializeAws_json1_0StreamSpecification
 */
const de_StreamSpecification = (output: any, context: __SerdeContext): StreamSpecification => {
  return {
    StreamEnabled: __expectBoolean(output.StreamEnabled),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

/**
 * deserializeAws_json1_0StringSetAttributeValue
 */
const de_StringSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0TableAlreadyExistsException
 */
const de_TableAlreadyExistsException = (output: any, context: __SerdeContext): TableAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TableAutoScalingDescription
 */
const de_TableAutoScalingDescription = (output: any, context: __SerdeContext): TableAutoScalingDescription => {
  return {
    Replicas: output.Replicas != null ? de_ReplicaAutoScalingDescriptionList(output.Replicas, context) : undefined,
    TableName: __expectString(output.TableName),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

/**
 * deserializeAws_json1_0TableClassSummary
 */
const de_TableClassSummary = (output: any, context: __SerdeContext): TableClassSummary => {
  return {
    LastUpdateDateTime:
      output.LastUpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateDateTime)))
        : undefined,
    TableClass: __expectString(output.TableClass),
  } as any;
};

/**
 * deserializeAws_json1_0TableCreationParameters
 */
const de_TableCreationParameters = (output: any, context: __SerdeContext): TableCreationParameters => {
  return {
    AttributeDefinitions:
      output.AttributeDefinitions != null ? de_AttributeDefinitions(output.AttributeDefinitions, context) : undefined,
    BillingMode: __expectString(output.BillingMode),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_GlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
        : undefined,
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
    SSESpecification:
      output.SSESpecification != null ? de_SSESpecification(output.SSESpecification, context) : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0TableDescription
 */
const de_TableDescription = (output: any, context: __SerdeContext): TableDescription => {
  return {
    ArchivalSummary: output.ArchivalSummary != null ? de_ArchivalSummary(output.ArchivalSummary, context) : undefined,
    AttributeDefinitions:
      output.AttributeDefinitions != null ? de_AttributeDefinitions(output.AttributeDefinitions, context) : undefined,
    BillingModeSummary:
      output.BillingModeSummary != null ? de_BillingModeSummary(output.BillingModeSummary, context) : undefined,
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? de_GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
        : undefined,
    GlobalTableVersion: __expectString(output.GlobalTableVersion),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    LatestStreamArn: __expectString(output.LatestStreamArn),
    LatestStreamLabel: __expectString(output.LatestStreamLabel),
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? de_LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? de_ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
        : undefined,
    Replicas: output.Replicas != null ? de_ReplicaDescriptionList(output.Replicas, context) : undefined,
    RestoreSummary: output.RestoreSummary != null ? de_RestoreSummary(output.RestoreSummary, context) : undefined,
    SSEDescription: output.SSEDescription != null ? de_SSEDescription(output.SSEDescription, context) : undefined,
    StreamSpecification:
      output.StreamSpecification != null ? de_StreamSpecification(output.StreamSpecification, context) : undefined,
    TableArn: __expectString(output.TableArn),
    TableClassSummary:
      output.TableClassSummary != null ? de_TableClassSummary(output.TableClassSummary, context) : undefined,
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
    TableSizeBytes: __expectLong(output.TableSizeBytes),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

/**
 * deserializeAws_json1_0TableInUseException
 */
const de_TableInUseException = (output: any, context: __SerdeContext): TableInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TableNameList
 */
const de_TableNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0TableNotFoundException
 */
const de_TableNotFoundException = (output: any, context: __SerdeContext): TableNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TimeToLiveDescription
 */
const de_TimeToLiveDescription = (output: any, context: __SerdeContext): TimeToLiveDescription => {
  return {
    AttributeName: __expectString(output.AttributeName),
    TimeToLiveStatus: __expectString(output.TimeToLiveStatus),
  } as any;
};

/**
 * deserializeAws_json1_0TimeToLiveSpecification
 */
const de_TimeToLiveSpecification = (output: any, context: __SerdeContext): TimeToLiveSpecification => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_json1_0TransactGetItemsOutput
 */
const de_TransactGetItemsOutput = (output: any, context: __SerdeContext): TransactGetItemsOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    Responses: output.Responses != null ? de_ItemResponseList(output.Responses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TransactionCanceledException
 */
const de_TransactionCanceledException = (output: any, context: __SerdeContext): TransactionCanceledException => {
  return {
    CancellationReasons:
      output.CancellationReasons != null ? de_CancellationReasonList(output.CancellationReasons, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0TransactionConflictException
 */
const de_TransactionConflictException = (output: any, context: __SerdeContext): TransactionConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TransactionInProgressException
 */
const de_TransactionInProgressException = (output: any, context: __SerdeContext): TransactionInProgressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0TransactWriteItemsOutput
 */
const de_TransactWriteItemsOutput = (output: any, context: __SerdeContext): TransactWriteItemsOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacityMultiple(output.ConsumedCapacity, context) : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? de_ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateContinuousBackupsOutput
 */
const de_UpdateContinuousBackupsOutput = (output: any, context: __SerdeContext): UpdateContinuousBackupsOutput => {
  return {
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription != null
        ? de_ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateContributorInsightsOutput
 */
const de_UpdateContributorInsightsOutput = (output: any, context: __SerdeContext): UpdateContributorInsightsOutput => {
  return {
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    IndexName: __expectString(output.IndexName),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateGlobalTableOutput
 */
const de_UpdateGlobalTableOutput = (output: any, context: __SerdeContext): UpdateGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? de_GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateGlobalTableSettingsOutput
 */
const de_UpdateGlobalTableSettingsOutput = (output: any, context: __SerdeContext): UpdateGlobalTableSettingsOutput => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicaSettings:
      output.ReplicaSettings != null ? de_ReplicaSettingsDescriptionList(output.ReplicaSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateItemOutput
 */
const de_UpdateItemOutput = (output: any, context: __SerdeContext): UpdateItemOutput => {
  return {
    Attributes: output.Attributes != null ? de_AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null ? de_ConsumedCapacity(output.ConsumedCapacity, context) : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? de_ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateTableOutput
 */
const de_UpdateTableOutput = (output: any, context: __SerdeContext): UpdateTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null ? de_TableDescription(output.TableDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput
 */
const de_UpdateTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableReplicaAutoScalingOutput => {
  return {
    TableAutoScalingDescription:
      output.TableAutoScalingDescription != null
        ? de_TableAutoScalingDescription(output.TableAutoScalingDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateTimeToLiveOutput
 */
const de_UpdateTimeToLiveOutput = (output: any, context: __SerdeContext): UpdateTimeToLiveOutput => {
  return {
    TimeToLiveSpecification:
      output.TimeToLiveSpecification != null
        ? de_TimeToLiveSpecification(output.TimeToLiveSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WriteRequest
 */
const de_WriteRequest = (output: any, context: __SerdeContext): WriteRequest => {
  return {
    DeleteRequest: output.DeleteRequest != null ? de_DeleteRequest(output.DeleteRequest, context) : undefined,
    PutRequest: output.PutRequest != null ? de_PutRequest(output.PutRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WriteRequests
 */
const de_WriteRequests = (output: any, context: __SerdeContext): WriteRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WriteRequest(entry, context);
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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDB_20120810.${operation}`,
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
