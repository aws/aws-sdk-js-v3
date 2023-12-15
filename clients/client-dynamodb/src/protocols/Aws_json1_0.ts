// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
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
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  DescribeExportInput,
  DescribeExportOutput,
  DescribeGlobalTableInput,
  DescribeGlobalTableOutput,
  DescribeGlobalTableSettingsInput,
  DescribeGlobalTableSettingsOutput,
  DescribeImportInput,
  DescribeImportOutput,
  DescribeKinesisStreamingDestinationInput,
  DescribeLimitsInput,
  DescribeTableInput,
  DescribeTableOutput,
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput,
  DescribeTimeToLiveInput,
  DuplicateItemException,
  ExecuteStatementInput,
  ExecuteStatementOutput,
  ExecuteTransactionInput,
  ExecuteTransactionOutput,
  ExpectedAttributeValue,
  ExportConflictException,
  ExportDescription,
  ExportNotFoundException,
  ExportTableToPointInTimeInput,
  ExportTableToPointInTimeOutput,
  Get,
  GetItemInput,
  GetItemOutput,
  GlobalSecondaryIndex,
  GlobalSecondaryIndexAutoScalingUpdate,
  GlobalSecondaryIndexDescription,
  GlobalSecondaryIndexUpdate,
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
  IncrementalExportSpecification,
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
  KinesisStreamingDestinationInput,
  LimitExceededException,
  ListBackupsInput,
  ListBackupsOutput,
  ListContributorInsightsInput,
  ListExportsInput,
  ListGlobalTablesInput,
  ListImportsInput,
  ListImportsOutput,
  ListTablesInput,
  ListTagsOfResourceInput,
  LocalSecondaryIndex,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGlobalTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsOfResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AttributeDefinition omitted.

// se_AttributeDefinitions omitted.

// se_AttributeNameList omitted.

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
    NS: (value) => ({ NS: _json(value) }),
    NULL: (value) => ({ NULL: value }),
    S: (value) => ({ S: value }),
    SS: (value) => ({ SS: _json(value) }),
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
  return take(input, {
    Action: [],
    Value: (_) => se_AttributeValue(_, context),
  });
};

/**
 * serializeAws_json1_0AutoScalingPolicyUpdate
 */
const se_AutoScalingPolicyUpdate = (input: AutoScalingPolicyUpdate, context: __SerdeContext): any => {
  return take(input, {
    PolicyName: [],
    TargetTrackingScalingPolicyConfiguration: (_) =>
      se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(_, context),
  });
};

/**
 * serializeAws_json1_0AutoScalingSettingsUpdate
 */
const se_AutoScalingSettingsUpdate = (input: AutoScalingSettingsUpdate, context: __SerdeContext): any => {
  return take(input, {
    AutoScalingDisabled: [],
    AutoScalingRoleArn: [],
    MaximumUnits: [],
    MinimumUnits: [],
    ScalingPolicyUpdate: (_) => se_AutoScalingPolicyUpdate(_, context),
  });
};

/**
 * serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
 */
const se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (
  input: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    DisableScaleIn: [],
    ScaleInCooldown: [],
    ScaleOutCooldown: [],
    TargetValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_0BatchExecuteStatementInput
 */
const se_BatchExecuteStatementInput = (input: BatchExecuteStatementInput, context: __SerdeContext): any => {
  return take(input, {
    ReturnConsumedCapacity: [],
    Statements: (_) => se_PartiQLBatchRequest(_, context),
  });
};

/**
 * serializeAws_json1_0BatchGetItemInput
 */
const se_BatchGetItemInput = (input: BatchGetItemInput, context: __SerdeContext): any => {
  return take(input, {
    RequestItems: (_) => se_BatchGetRequestMap(_, context),
    ReturnConsumedCapacity: [],
  });
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
  return take(input, {
    ConsistentRead: [],
    Parameters: (_) => se_PreparedStatementParameters(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    Statement: [],
  });
};

/**
 * serializeAws_json1_0BatchWriteItemInput
 */
const se_BatchWriteItemInput = (input: BatchWriteItemInput, context: __SerdeContext): any => {
  return take(input, {
    RequestItems: (_) => se_BatchWriteItemRequestMap(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
  });
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
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: [],
  });
};

/**
 * serializeAws_json1_0ConditionCheck
 */
const se_ConditionCheck = (input: ConditionCheck, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Key: (_) => se_Key(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
  });
};

// se_CreateBackupInput omitted.

// se_CreateGlobalSecondaryIndexAction omitted.

// se_CreateGlobalTableInput omitted.

// se_CreateReplicaAction omitted.

// se_CreateReplicationGroupMemberAction omitted.

// se_CreateTableInput omitted.

// se_CsvHeaderList omitted.

// se_CsvOptions omitted.

/**
 * serializeAws_json1_0Delete
 */
const se_Delete = (input: Delete, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Key: (_) => se_Key(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
  });
};

// se_DeleteBackupInput omitted.

// se_DeleteGlobalSecondaryIndexAction omitted.

/**
 * serializeAws_json1_0DeleteItemInput
 */
const se_DeleteItemInput = (input: DeleteItemInput, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Key: (_) => se_Key(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
  });
};

// se_DeleteReplicaAction omitted.

// se_DeleteReplicationGroupMemberAction omitted.

/**
 * serializeAws_json1_0DeleteRequest
 */
const se_DeleteRequest = (input: DeleteRequest, context: __SerdeContext): any => {
  return take(input, {
    Key: (_) => se_Key(_, context),
  });
};

// se_DeleteTableInput omitted.

// se_DescribeBackupInput omitted.

// se_DescribeContinuousBackupsInput omitted.

// se_DescribeContributorInsightsInput omitted.

// se_DescribeEndpointsRequest omitted.

// se_DescribeExportInput omitted.

// se_DescribeGlobalTableInput omitted.

// se_DescribeGlobalTableSettingsInput omitted.

// se_DescribeImportInput omitted.

// se_DescribeKinesisStreamingDestinationInput omitted.

// se_DescribeLimitsInput omitted.

// se_DescribeTableInput omitted.

// se_DescribeTableReplicaAutoScalingInput omitted.

// se_DescribeTimeToLiveInput omitted.

/**
 * serializeAws_json1_0ExecuteStatementInput
 */
const se_ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return take(input, {
    ConsistentRead: [],
    Limit: [],
    NextToken: [],
    Parameters: (_) => se_PreparedStatementParameters(_, context),
    ReturnConsumedCapacity: [],
    ReturnValuesOnConditionCheckFailure: [],
    Statement: [],
  });
};

/**
 * serializeAws_json1_0ExecuteTransactionInput
 */
const se_ExecuteTransactionInput = (input: ExecuteTransactionInput, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ReturnConsumedCapacity: [],
    TransactStatements: (_) => se_ParameterizedStatements(_, context),
  });
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
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: [],
    Exists: [],
    Value: (_) => se_AttributeValue(_, context),
  });
};

/**
 * serializeAws_json1_0ExportTableToPointInTimeInput
 */
const se_ExportTableToPointInTimeInput = (input: ExportTableToPointInTimeInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ExportFormat: [],
    ExportTime: (_) => Math.round(_.getTime() / 1000),
    ExportType: [],
    IncrementalExportSpecification: (_) => se_IncrementalExportSpecification(_, context),
    S3Bucket: [],
    S3BucketOwner: [],
    S3Prefix: [],
    S3SseAlgorithm: [],
    S3SseKmsKeyId: [],
    TableArn: [],
  });
};

// se_ExpressionAttributeNameMap omitted.

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
  return take(input, {
    ExpressionAttributeNames: _json,
    Key: (_) => se_Key(_, context),
    ProjectionExpression: [],
    TableName: [],
  });
};

/**
 * serializeAws_json1_0GetItemInput
 */
const se_GetItemInput = (input: GetItemInput, context: __SerdeContext): any => {
  return take(input, {
    AttributesToGet: _json,
    ConsistentRead: [],
    ExpressionAttributeNames: _json,
    Key: (_) => se_Key(_, context),
    ProjectionExpression: [],
    ReturnConsumedCapacity: [],
    TableName: [],
  });
};

// se_GlobalSecondaryIndex omitted.

/**
 * serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate
 */
const se_GlobalSecondaryIndexAutoScalingUpdate = (
  input: GlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    IndexName: [],
    ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
  });
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

// se_GlobalSecondaryIndexList omitted.

// se_GlobalSecondaryIndexUpdate omitted.

// se_GlobalSecondaryIndexUpdateList omitted.

/**
 * serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate
 */
const se_GlobalTableGlobalSecondaryIndexSettingsUpdate = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    IndexName: [],
    ProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    ProvisionedWriteCapacityUnits: [],
  });
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    InputCompressionType: [],
    InputFormat: [],
    InputFormatOptions: _json,
    S3BucketSource: _json,
    TableCreationParameters: _json,
  });
};

/**
 * serializeAws_json1_0IncrementalExportSpecification
 */
const se_IncrementalExportSpecification = (input: IncrementalExportSpecification, context: __SerdeContext): any => {
  return take(input, {
    ExportFromTime: (_) => Math.round(_.getTime() / 1000),
    ExportToTime: (_) => Math.round(_.getTime() / 1000),
    ExportViewType: [],
  });
};

// se_InputFormatOptions omitted.

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
  return take(input, {
    AttributesToGet: _json,
    ConsistentRead: [],
    ExpressionAttributeNames: _json,
    Keys: (_) => se_KeyList(_, context),
    ProjectionExpression: [],
  });
};

// se_KeySchema omitted.

// se_KeySchemaElement omitted.

// se_KinesisStreamingDestinationInput omitted.

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
  return take(input, {
    BackupType: [],
    ExclusiveStartBackupArn: [],
    Limit: [],
    TableName: [],
    TimeRangeLowerBound: (_) => Math.round(_.getTime() / 1000),
    TimeRangeUpperBound: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListContributorInsightsInput omitted.

// se_ListExportsInput omitted.

// se_ListGlobalTablesInput omitted.

// se_ListImportsInput omitted.

// se_ListTablesInput omitted.

// se_ListTagsOfResourceInput omitted.

// se_LocalSecondaryIndex omitted.

// se_LocalSecondaryIndexList omitted.

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

// se_NonKeyAttributeNameList omitted.

// se_NumberSetAttributeValue omitted.

/**
 * serializeAws_json1_0ParameterizedStatement
 */
const se_ParameterizedStatement = (input: ParameterizedStatement, context: __SerdeContext): any => {
  return take(input, {
    Parameters: (_) => se_PreparedStatementParameters(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    Statement: [],
  });
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

// se_PointInTimeRecoverySpecification omitted.

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

// se_Projection omitted.

// se_ProvisionedThroughput omitted.

// se_ProvisionedThroughputOverride omitted.

/**
 * serializeAws_json1_0Put
 */
const se_Put = (input: Put, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Item: (_) => se_PutItemInputAttributeMap(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
  });
};

/**
 * serializeAws_json1_0PutItemInput
 */
const se_PutItemInput = (input: PutItemInput, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Item: (_) => se_PutItemInputAttributeMap(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
  });
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
  return take(input, {
    Item: (_) => se_PutItemInputAttributeMap(_, context),
  });
};

/**
 * serializeAws_json1_0QueryInput
 */
const se_QueryInput = (input: QueryInput, context: __SerdeContext): any => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    FilterExpression: [],
    IndexName: [],
    KeyConditionExpression: [],
    KeyConditions: (_) => se_KeyConditions(_, context),
    Limit: [],
    ProjectionExpression: [],
    QueryFilter: (_) => se_FilterConditionMap(_, context),
    ReturnConsumedCapacity: [],
    ScanIndexForward: [],
    Select: [],
    TableName: [],
  });
};

// se_Replica omitted.

/**
 * serializeAws_json1_0ReplicaAutoScalingUpdate
 */
const se_ReplicaAutoScalingUpdate = (input: ReplicaAutoScalingUpdate, context: __SerdeContext): any => {
  return take(input, {
    RegionName: [],
    ReplicaGlobalSecondaryIndexUpdates: (_) => se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(_, context),
    ReplicaProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
  });
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

// se_ReplicaGlobalSecondaryIndex omitted.

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate
 */
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdate = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    IndexName: [],
    ProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
  });
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

// se_ReplicaGlobalSecondaryIndexList omitted.

/**
 * serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate
 */
const se_ReplicaGlobalSecondaryIndexSettingsUpdate = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    IndexName: [],
    ProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    ProvisionedReadCapacityUnits: [],
  });
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

// se_ReplicaList omitted.

/**
 * serializeAws_json1_0ReplicaSettingsUpdate
 */
const se_ReplicaSettingsUpdate = (input: ReplicaSettingsUpdate, context: __SerdeContext): any => {
  return take(input, {
    RegionName: [],
    ReplicaGlobalSecondaryIndexSettingsUpdate: (_) => se_ReplicaGlobalSecondaryIndexSettingsUpdateList(_, context),
    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    ReplicaProvisionedReadCapacityUnits: [],
    ReplicaTableClass: [],
  });
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

// se_ReplicationGroupUpdate omitted.

// se_ReplicationGroupUpdateList omitted.

// se_ReplicaUpdate omitted.

// se_ReplicaUpdateList omitted.

// se_RestoreTableFromBackupInput omitted.

/**
 * serializeAws_json1_0RestoreTableToPointInTimeInput
 */
const se_RestoreTableToPointInTimeInput = (input: RestoreTableToPointInTimeInput, context: __SerdeContext): any => {
  return take(input, {
    BillingModeOverride: [],
    GlobalSecondaryIndexOverride: _json,
    LocalSecondaryIndexOverride: _json,
    ProvisionedThroughputOverride: _json,
    RestoreDateTime: (_) => Math.round(_.getTime() / 1000),
    SSESpecificationOverride: _json,
    SourceTableArn: [],
    SourceTableName: [],
    TargetTableName: [],
    UseLatestRestorableTime: [],
  });
};

// se_S3BucketSource omitted.

/**
 * serializeAws_json1_0ScanInput
 */
const se_ScanInput = (input: ScanInput, context: __SerdeContext): any => {
  return take(input, {
    AttributesToGet: _json,
    ConditionalOperator: [],
    ConsistentRead: [],
    ExclusiveStartKey: (_) => se_Key(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    FilterExpression: [],
    IndexName: [],
    Limit: [],
    ProjectionExpression: [],
    ReturnConsumedCapacity: [],
    ScanFilter: (_) => se_FilterConditionMap(_, context),
    Segment: [],
    Select: [],
    TableName: [],
    TotalSegments: [],
  });
};

// se_SSESpecification omitted.

// se_StreamSpecification omitted.

// se_StringSetAttributeValue omitted.

// se_TableCreationParameters omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TimeToLiveSpecification omitted.

/**
 * serializeAws_json1_0TransactGetItem
 */
const se_TransactGetItem = (input: TransactGetItem, context: __SerdeContext): any => {
  return take(input, {
    Get: (_) => se_Get(_, context),
  });
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
  return take(input, {
    ReturnConsumedCapacity: [],
    TransactItems: (_) => se_TransactGetItemList(_, context),
  });
};

/**
 * serializeAws_json1_0TransactWriteItem
 */
const se_TransactWriteItem = (input: TransactWriteItem, context: __SerdeContext): any => {
  return take(input, {
    ConditionCheck: (_) => se_ConditionCheck(_, context),
    Delete: (_) => se_Delete(_, context),
    Put: (_) => se_Put(_, context),
    Update: (_) => se_Update(_, context),
  });
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
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    TransactItems: (_) => se_TransactWriteItemList(_, context),
  });
};

// se_UntagResourceInput omitted.

/**
 * serializeAws_json1_0Update
 */
const se_Update = (input: Update, context: __SerdeContext): any => {
  return take(input, {
    ConditionExpression: [],
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Key: (_) => se_Key(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
    UpdateExpression: [],
  });
};

// se_UpdateContinuousBackupsInput omitted.

// se_UpdateContributorInsightsInput omitted.

// se_UpdateGlobalSecondaryIndexAction omitted.

// se_UpdateGlobalTableInput omitted.

/**
 * serializeAws_json1_0UpdateGlobalTableSettingsInput
 */
const se_UpdateGlobalTableSettingsInput = (input: UpdateGlobalTableSettingsInput, context: __SerdeContext): any => {
  return take(input, {
    GlobalTableBillingMode: [],
    GlobalTableGlobalSecondaryIndexSettingsUpdate: (_) =>
      se_GlobalTableGlobalSecondaryIndexSettingsUpdateList(_, context),
    GlobalTableName: [],
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    GlobalTableProvisionedWriteCapacityUnits: [],
    ReplicaSettingsUpdate: (_) => se_ReplicaSettingsUpdateList(_, context),
  });
};

/**
 * serializeAws_json1_0UpdateItemInput
 */
const se_UpdateItemInput = (input: UpdateItemInput, context: __SerdeContext): any => {
  return take(input, {
    AttributeUpdates: (_) => se_AttributeUpdates(_, context),
    ConditionExpression: [],
    ConditionalOperator: [],
    Expected: (_) => se_ExpectedAttributeMap(_, context),
    ExpressionAttributeNames: _json,
    ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
    Key: (_) => se_Key(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
    ReturnValues: [],
    ReturnValuesOnConditionCheckFailure: [],
    TableName: [],
    UpdateExpression: [],
  });
};

// se_UpdateReplicationGroupMemberAction omitted.

// se_UpdateTableInput omitted.

/**
 * serializeAws_json1_0UpdateTableReplicaAutoScalingInput
 */
const se_UpdateTableReplicaAutoScalingInput = (
  input: UpdateTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return take(input, {
    GlobalSecondaryIndexUpdates: (_) => se_GlobalSecondaryIndexAutoScalingUpdateList(_, context),
    ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    ReplicaUpdates: (_) => se_ReplicaAutoScalingUpdateList(_, context),
    TableName: [],
  });
};

// se_UpdateTimeToLiveInput omitted.

/**
 * serializeAws_json1_0WriteRequest
 */
const se_WriteRequest = (input: WriteRequest, context: __SerdeContext): any => {
  return take(input, {
    DeleteRequest: (_) => se_DeleteRequest(_, context),
    PutRequest: (_) => se_PutRequest(_, context),
  });
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
  return take(output, {
    ArchivalBackupArn: __expectString,
    ArchivalDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ArchivalReason: __expectString,
  }) as any;
};

// de_AttributeDefinition omitted.

// de_AttributeDefinitions omitted.

/**
 * deserializeAws_json1_0AttributeMap
 */
const de_AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

// de_AttributeNameList omitted.

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
      NS: _json(output.NS),
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
      SS: _json(output.SS),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0AutoScalingPolicyDescription
 */
const de_AutoScalingPolicyDescription = (output: any, context: __SerdeContext): AutoScalingPolicyDescription => {
  return take(output, {
    PolicyName: __expectString,
    TargetTrackingScalingPolicyConfiguration: (_: any) =>
      de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingPolicyDescriptionList
 */
const de_AutoScalingPolicyDescriptionList = (output: any, context: __SerdeContext): AutoScalingPolicyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingPolicyDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AutoScalingSettingsDescription
 */
const de_AutoScalingSettingsDescription = (output: any, context: __SerdeContext): AutoScalingSettingsDescription => {
  return take(output, {
    AutoScalingDisabled: __expectBoolean,
    AutoScalingRoleArn: __expectString,
    MaximumUnits: __expectLong,
    MinimumUnits: __expectLong,
    ScalingPolicies: (_: any) => de_AutoScalingPolicyDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 */
const de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingTargetTrackingScalingPolicyConfigurationDescription => {
  return take(output, {
    DisableScaleIn: __expectBoolean,
    ScaleInCooldown: __expectInt32,
    ScaleOutCooldown: __expectInt32,
    TargetValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0BackupDescription
 */
const de_BackupDescription = (output: any, context: __SerdeContext): BackupDescription => {
  return take(output, {
    BackupDetails: (_: any) => de_BackupDetails(_, context),
    SourceTableDetails: (_: any) => de_SourceTableDetails(_, context),
    SourceTableFeatureDetails: (_: any) => de_SourceTableFeatureDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BackupDetails
 */
const de_BackupDetails = (output: any, context: __SerdeContext): BackupDetails => {
  return take(output, {
    BackupArn: __expectString,
    BackupCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupName: __expectString,
    BackupSizeBytes: __expectLong,
    BackupStatus: __expectString,
    BackupType: __expectString,
  }) as any;
};

// de_BackupInUseException omitted.

// de_BackupNotFoundException omitted.

/**
 * deserializeAws_json1_0BackupSummaries
 */
const de_BackupSummaries = (output: any, context: __SerdeContext): BackupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BackupSummary
 */
const de_BackupSummary = (output: any, context: __SerdeContext): BackupSummary => {
  return take(output, {
    BackupArn: __expectString,
    BackupCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupName: __expectString,
    BackupSizeBytes: __expectLong,
    BackupStatus: __expectString,
    BackupType: __expectString,
    TableArn: __expectString,
    TableId: __expectString,
    TableName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchExecuteStatementOutput
 */
const de_BatchExecuteStatementOutput = (output: any, context: __SerdeContext): BatchExecuteStatementOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_PartiQLBatchResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchGetItemOutput
 */
const de_BatchGetItemOutput = (output: any, context: __SerdeContext): BatchGetItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_BatchGetResponseMap(_, context),
    UnprocessedKeys: (_: any) => de_BatchGetRequestMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchGetRequestMap
 */
const de_BatchGetRequestMap = (output: any, context: __SerdeContext): Record<string, KeysAndAttributes> => {
  return Object.entries(output).reduce((acc: Record<string, KeysAndAttributes>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_KeysAndAttributes(value, context);
    return acc;
  }, {} as Record<string, KeysAndAttributes>);
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
      acc[key as string] = de_ItemList(value, context);
      return acc;
    },
    {} as Record<string, Record<string, AttributeValue>[]>
  );
};

/**
 * deserializeAws_json1_0BatchStatementError
 */
const de_BatchStatementError = (output: any, context: __SerdeContext): BatchStatementError => {
  return take(output, {
    Code: __expectString,
    Item: (_: any) => de_AttributeMap(_, context),
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchStatementResponse
 */
const de_BatchStatementResponse = (output: any, context: __SerdeContext): BatchStatementResponse => {
  return take(output, {
    Error: (_: any) => de_BatchStatementError(_, context),
    Item: (_: any) => de_AttributeMap(_, context),
    TableName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchWriteItemOutput
 */
const de_BatchWriteItemOutput = (output: any, context: __SerdeContext): BatchWriteItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetricsPerTable(_, context),
    UnprocessedItems: (_: any) => de_BatchWriteItemRequestMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchWriteItemRequestMap
 */
const de_BatchWriteItemRequestMap = (output: any, context: __SerdeContext): Record<string, WriteRequest[]> => {
  return Object.entries(output).reduce((acc: Record<string, WriteRequest[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_WriteRequests(value, context);
    return acc;
  }, {} as Record<string, WriteRequest[]>);
};

/**
 * deserializeAws_json1_0BillingModeSummary
 */
const de_BillingModeSummary = (output: any, context: __SerdeContext): BillingModeSummary => {
  return take(output, {
    BillingMode: __expectString,
    LastUpdateToPayPerRequestDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0BinarySetAttributeValue
 */
const de_BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return context.base64Decoder(entry);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CancellationReason
 */
const de_CancellationReason = (output: any, context: __SerdeContext): CancellationReason => {
  return take(output, {
    Code: __expectString,
    Item: (_: any) => de_AttributeMap(_, context),
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CancellationReasonList
 */
const de_CancellationReasonList = (output: any, context: __SerdeContext): CancellationReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CancellationReason(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Capacity
 */
const de_Capacity = (output: any, context: __SerdeContext): Capacity => {
  return take(output, {
    CapacityUnits: __limitedParseDouble,
    ReadCapacityUnits: __limitedParseDouble,
    WriteCapacityUnits: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ConditionalCheckFailedException
 */
const de_ConditionalCheckFailedException = (output: any, context: __SerdeContext): ConditionalCheckFailedException => {
  return take(output, {
    Item: (_: any) => de_AttributeMap(_, context),
    message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ConsumedCapacity
 */
const de_ConsumedCapacity = (output: any, context: __SerdeContext): ConsumedCapacity => {
  return take(output, {
    CapacityUnits: __limitedParseDouble,
    GlobalSecondaryIndexes: (_: any) => de_SecondaryIndexesCapacityMap(_, context),
    LocalSecondaryIndexes: (_: any) => de_SecondaryIndexesCapacityMap(_, context),
    ReadCapacityUnits: __limitedParseDouble,
    Table: (_: any) => de_Capacity(_, context),
    TableName: __expectString,
    WriteCapacityUnits: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ConsumedCapacityMultiple
 */
const de_ConsumedCapacityMultiple = (output: any, context: __SerdeContext): ConsumedCapacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConsumedCapacity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ContinuousBackupsDescription
 */
const de_ContinuousBackupsDescription = (output: any, context: __SerdeContext): ContinuousBackupsDescription => {
  return take(output, {
    ContinuousBackupsStatus: __expectString,
    PointInTimeRecoveryDescription: (_: any) => de_PointInTimeRecoveryDescription(_, context),
  }) as any;
};

// de_ContinuousBackupsUnavailableException omitted.

// de_ContributorInsightsRuleList omitted.

// de_ContributorInsightsSummaries omitted.

// de_ContributorInsightsSummary omitted.

/**
 * deserializeAws_json1_0CreateBackupOutput
 */
const de_CreateBackupOutput = (output: any, context: __SerdeContext): CreateBackupOutput => {
  return take(output, {
    BackupDetails: (_: any) => de_BackupDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateGlobalTableOutput
 */
const de_CreateGlobalTableOutput = (output: any, context: __SerdeContext): CreateGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateTableOutput
 */
const de_CreateTableOutput = (output: any, context: __SerdeContext): CreateTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

// de_CsvHeaderList omitted.

// de_CsvOptions omitted.

/**
 * deserializeAws_json1_0DeleteBackupOutput
 */
const de_DeleteBackupOutput = (output: any, context: __SerdeContext): DeleteBackupOutput => {
  return take(output, {
    BackupDescription: (_: any) => de_BackupDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteItemOutput
 */
const de_DeleteItemOutput = (output: any, context: __SerdeContext): DeleteItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteRequest
 */
const de_DeleteRequest = (output: any, context: __SerdeContext): DeleteRequest => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteTableOutput
 */
const de_DeleteTableOutput = (output: any, context: __SerdeContext): DeleteTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeBackupOutput
 */
const de_DescribeBackupOutput = (output: any, context: __SerdeContext): DescribeBackupOutput => {
  return take(output, {
    BackupDescription: (_: any) => de_BackupDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeContinuousBackupsOutput
 */
const de_DescribeContinuousBackupsOutput = (output: any, context: __SerdeContext): DescribeContinuousBackupsOutput => {
  return take(output, {
    ContinuousBackupsDescription: (_: any) => de_ContinuousBackupsDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeContributorInsightsOutput
 */
const de_DescribeContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContributorInsightsOutput => {
  return take(output, {
    ContributorInsightsRuleList: _json,
    ContributorInsightsStatus: __expectString,
    FailureException: _json,
    IndexName: __expectString,
    LastUpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableName: __expectString,
  }) as any;
};

// de_DescribeEndpointsResponse omitted.

/**
 * deserializeAws_json1_0DescribeExportOutput
 */
const de_DescribeExportOutput = (output: any, context: __SerdeContext): DescribeExportOutput => {
  return take(output, {
    ExportDescription: (_: any) => de_ExportDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeGlobalTableOutput
 */
const de_DescribeGlobalTableOutput = (output: any, context: __SerdeContext): DescribeGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeGlobalTableSettingsOutput
 */
const de_DescribeGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableSettingsOutput => {
  return take(output, {
    GlobalTableName: __expectString,
    ReplicaSettings: (_: any) => de_ReplicaSettingsDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeImportOutput
 */
const de_DescribeImportOutput = (output: any, context: __SerdeContext): DescribeImportOutput => {
  return take(output, {
    ImportTableDescription: (_: any) => de_ImportTableDescription(_, context),
  }) as any;
};

// de_DescribeKinesisStreamingDestinationOutput omitted.

// de_DescribeLimitsOutput omitted.

/**
 * deserializeAws_json1_0DescribeTableOutput
 */
const de_DescribeTableOutput = (output: any, context: __SerdeContext): DescribeTableOutput => {
  return take(output, {
    Table: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput
 */
const de_DescribeTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableReplicaAutoScalingOutput => {
  return take(output, {
    TableAutoScalingDescription: (_: any) => de_TableAutoScalingDescription(_, context),
  }) as any;
};

// de_DescribeTimeToLiveOutput omitted.

// de_DuplicateItemException omitted.

// de_Endpoint omitted.

// de_Endpoints omitted.

/**
 * deserializeAws_json1_0ExecuteStatementOutput
 */
const de_ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    Items: (_: any) => de_ItemList(_, context),
    LastEvaluatedKey: (_: any) => de_Key(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ExecuteTransactionOutput
 */
const de_ExecuteTransactionOutput = (output: any, context: __SerdeContext): ExecuteTransactionOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_ItemResponseList(_, context),
  }) as any;
};

// de_ExportConflictException omitted.

/**
 * deserializeAws_json1_0ExportDescription
 */
const de_ExportDescription = (output: any, context: __SerdeContext): ExportDescription => {
  return take(output, {
    BilledSizeBytes: __expectLong,
    ClientToken: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportArn: __expectString,
    ExportFormat: __expectString,
    ExportManifest: __expectString,
    ExportStatus: __expectString,
    ExportTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportType: __expectString,
    FailureCode: __expectString,
    FailureMessage: __expectString,
    IncrementalExportSpecification: (_: any) => de_IncrementalExportSpecification(_, context),
    ItemCount: __expectLong,
    S3Bucket: __expectString,
    S3BucketOwner: __expectString,
    S3Prefix: __expectString,
    S3SseAlgorithm: __expectString,
    S3SseKmsKeyId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableArn: __expectString,
    TableId: __expectString,
  }) as any;
};

// de_ExportNotFoundException omitted.

// de_ExportSummaries omitted.

// de_ExportSummary omitted.

/**
 * deserializeAws_json1_0ExportTableToPointInTimeOutput
 */
const de_ExportTableToPointInTimeOutput = (output: any, context: __SerdeContext): ExportTableToPointInTimeOutput => {
  return take(output, {
    ExportDescription: (_: any) => de_ExportDescription(_, context),
  }) as any;
};

// de_ExpressionAttributeNameMap omitted.

// de_FailureException omitted.

/**
 * deserializeAws_json1_0GetItemOutput
 */
const de_GetItemOutput = (output: any, context: __SerdeContext): GetItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    Item: (_: any) => de_AttributeMap(_, context),
  }) as any;
};

// de_GlobalSecondaryIndex omitted.

/**
 * deserializeAws_json1_0GlobalSecondaryIndexDescription
 */
const de_GlobalSecondaryIndexDescription = (output: any, context: __SerdeContext): GlobalSecondaryIndexDescription => {
  return take(output, {
    Backfilling: __expectBoolean,
    IndexArn: __expectString,
    IndexName: __expectString,
    IndexSizeBytes: __expectLong,
    IndexStatus: __expectString,
    ItemCount: __expectLong,
    KeySchema: _json,
    Projection: _json,
    ProvisionedThroughput: (_: any) => de_ProvisionedThroughputDescription(_, context),
  }) as any;
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
      return de_GlobalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

// de_GlobalSecondaryIndexes omitted.

// de_GlobalSecondaryIndexInfo omitted.

// de_GlobalSecondaryIndexList omitted.

// de_GlobalTable omitted.

// de_GlobalTableAlreadyExistsException omitted.

/**
 * deserializeAws_json1_0GlobalTableDescription
 */
const de_GlobalTableDescription = (output: any, context: __SerdeContext): GlobalTableDescription => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GlobalTableArn: __expectString,
    GlobalTableName: __expectString,
    GlobalTableStatus: __expectString,
    ReplicationGroup: (_: any) => de_ReplicaDescriptionList(_, context),
  }) as any;
};

// de_GlobalTableList omitted.

// de_GlobalTableNotFoundException omitted.

// de_IdempotentParameterMismatchException omitted.

// de_ImportConflictException omitted.

// de_ImportNotFoundException omitted.

/**
 * deserializeAws_json1_0ImportSummary
 */
const de_ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return take(output, {
    CloudWatchLogGroupArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImportArn: __expectString,
    ImportStatus: __expectString,
    InputFormat: __expectString,
    S3BucketSource: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ImportSummaryList
 */
const de_ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ImportTableDescription
 */
const de_ImportTableDescription = (output: any, context: __SerdeContext): ImportTableDescription => {
  return take(output, {
    ClientToken: __expectString,
    CloudWatchLogGroupArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorCount: __expectLong,
    FailureCode: __expectString,
    FailureMessage: __expectString,
    ImportArn: __expectString,
    ImportStatus: __expectString,
    ImportedItemCount: __expectLong,
    InputCompressionType: __expectString,
    InputFormat: __expectString,
    InputFormatOptions: _json,
    ProcessedItemCount: __expectLong,
    ProcessedSizeBytes: __expectLong,
    S3BucketSource: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableArn: __expectString,
    TableCreationParameters: _json,
    TableId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ImportTableOutput
 */
const de_ImportTableOutput = (output: any, context: __SerdeContext): ImportTableOutput => {
  return take(output, {
    ImportTableDescription: (_: any) => de_ImportTableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0IncrementalExportSpecification
 */
const de_IncrementalExportSpecification = (output: any, context: __SerdeContext): IncrementalExportSpecification => {
  return take(output, {
    ExportFromTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportToTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportViewType: __expectString,
  }) as any;
};

// de_IndexNotFoundException omitted.

// de_InputFormatOptions omitted.

// de_InternalServerError omitted.

// de_InvalidEndpointException omitted.

// de_InvalidExportTimeException omitted.

// de_InvalidRestoreTimeException omitted.

/**
 * deserializeAws_json1_0ItemCollectionKeyAttributeMap
 */
const de_ItemCollectionKeyAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeAws_json1_0ItemCollectionMetrics
 */
const de_ItemCollectionMetrics = (output: any, context: __SerdeContext): ItemCollectionMetrics => {
  return take(output, {
    ItemCollectionKey: (_: any) => de_ItemCollectionKeyAttributeMap(_, context),
    SizeEstimateRangeGB: (_: any) => de_ItemCollectionSizeEstimateRange(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ItemCollectionMetricsMultiple
 */
const de_ItemCollectionMetricsMultiple = (output: any, context: __SerdeContext): ItemCollectionMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
    acc[key as string] = de_ItemCollectionMetricsMultiple(value, context);
    return acc;
  }, {} as Record<string, ItemCollectionMetrics[]>);
};

/**
 * deserializeAws_json1_0ItemCollectionSizeEstimateRange
 */
const de_ItemCollectionSizeEstimateRange = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_ItemCollectionSizeLimitExceededException omitted.

/**
 * deserializeAws_json1_0ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ItemResponse
 */
const de_ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return take(output, {
    Item: (_: any) => de_AttributeMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ItemResponseList
 */
const de_ItemResponseList = (output: any, context: __SerdeContext): ItemResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeAws_json1_0KeyList
 */
const de_KeyList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Key(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeysAndAttributes
 */
const de_KeysAndAttributes = (output: any, context: __SerdeContext): KeysAndAttributes => {
  return take(output, {
    AttributesToGet: _json,
    ConsistentRead: __expectBoolean,
    ExpressionAttributeNames: _json,
    Keys: (_: any) => de_KeyList(_, context),
    ProjectionExpression: __expectString,
  }) as any;
};

// de_KeySchema omitted.

// de_KeySchemaElement omitted.

// de_KinesisDataStreamDestination omitted.

// de_KinesisDataStreamDestinations omitted.

// de_KinesisStreamingDestinationOutput omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_0ListAttributeValue
 */
const de_ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListBackupsOutput
 */
const de_ListBackupsOutput = (output: any, context: __SerdeContext): ListBackupsOutput => {
  return take(output, {
    BackupSummaries: (_: any) => de_BackupSummaries(_, context),
    LastEvaluatedBackupArn: __expectString,
  }) as any;
};

// de_ListContributorInsightsOutput omitted.

// de_ListExportsOutput omitted.

// de_ListGlobalTablesOutput omitted.

/**
 * deserializeAws_json1_0ListImportsOutput
 */
const de_ListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  return take(output, {
    ImportSummaryList: (_: any) => de_ImportSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTablesOutput omitted.

// de_ListTagsOfResourceOutput omitted.

// de_LocalSecondaryIndexDescription omitted.

// de_LocalSecondaryIndexDescriptionList omitted.

// de_LocalSecondaryIndexes omitted.

// de_LocalSecondaryIndexInfo omitted.

/**
 * deserializeAws_json1_0MapAttributeValue
 */
const de_MapAttributeValue = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

// de_NonKeyAttributeNameList omitted.

// de_NumberSetAttributeValue omitted.

/**
 * deserializeAws_json1_0PartiQLBatchResponse
 */
const de_PartiQLBatchResponse = (output: any, context: __SerdeContext): BatchStatementResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchStatementResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PointInTimeRecoveryDescription
 */
const de_PointInTimeRecoveryDescription = (output: any, context: __SerdeContext): PointInTimeRecoveryDescription => {
  return take(output, {
    EarliestRestorableDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestRestorableDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PointInTimeRecoveryStatus: __expectString,
  }) as any;
};

// de_PointInTimeRecoveryUnavailableException omitted.

// de_Projection omitted.

// de_ProvisionedThroughput omitted.

/**
 * deserializeAws_json1_0ProvisionedThroughputDescription
 */
const de_ProvisionedThroughputDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputDescription => {
  return take(output, {
    LastDecreaseDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastIncreaseDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfDecreasesToday: __expectLong,
    ReadCapacityUnits: __expectLong,
    WriteCapacityUnits: __expectLong,
  }) as any;
};

// de_ProvisionedThroughputExceededException omitted.

// de_ProvisionedThroughputOverride omitted.

/**
 * deserializeAws_json1_0PutItemInputAttributeMap
 */
const de_PutItemInputAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeAws_json1_0PutItemOutput
 */
const de_PutItemOutput = (output: any, context: __SerdeContext): PutItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0PutRequest
 */
const de_PutRequest = (output: any, context: __SerdeContext): PutRequest => {
  return take(output, {
    Item: (_: any) => de_PutItemInputAttributeMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0QueryOutput
 */
const de_QueryOutput = (output: any, context: __SerdeContext): QueryOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    Count: __expectInt32,
    Items: (_: any) => de_ItemList(_, context),
    LastEvaluatedKey: (_: any) => de_Key(_, context),
    ScannedCount: __expectInt32,
  }) as any;
};

// de_Replica omitted.

// de_ReplicaAlreadyExistsException omitted.

/**
 * deserializeAws_json1_0ReplicaAutoScalingDescription
 */
const de_ReplicaAutoScalingDescription = (output: any, context: __SerdeContext): ReplicaAutoScalingDescription => {
  return take(output, {
    GlobalSecondaryIndexes: (_: any) => de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(_, context),
    RegionName: __expectString,
    ReplicaProvisionedReadCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ReplicaProvisionedWriteCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ReplicaStatus: __expectString,
  }) as any;
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
      return de_ReplicaAutoScalingDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaDescription
 */
const de_ReplicaDescription = (output: any, context: __SerdeContext): ReplicaDescription => {
  return take(output, {
    GlobalSecondaryIndexes: _json,
    KMSMasterKeyId: __expectString,
    ProvisionedThroughputOverride: _json,
    RegionName: __expectString,
    ReplicaInaccessibleDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplicaStatus: __expectString,
    ReplicaStatusDescription: __expectString,
    ReplicaStatusPercentProgress: __expectString,
    ReplicaTableClassSummary: (_: any) => de_TableClassSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ReplicaDescriptionList
 */
const de_ReplicaDescriptionList = (output: any, context: __SerdeContext): ReplicaDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    IndexName: __expectString,
    IndexStatus: __expectString,
    ProvisionedReadCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ProvisionedWriteCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
  }) as any;
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
      return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
  return retVal;
};

// de_ReplicaGlobalSecondaryIndexDescription omitted.

// de_ReplicaGlobalSecondaryIndexDescriptionList omitted.

/**
 * deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription
 */
const de_ReplicaGlobalSecondaryIndexSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription => {
  return take(output, {
    IndexName: __expectString,
    IndexStatus: __expectString,
    ProvisionedReadCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ProvisionedReadCapacityUnits: __expectLong,
    ProvisionedWriteCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ProvisionedWriteCapacityUnits: __expectLong,
  }) as any;
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
      return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
  return retVal;
};

// de_ReplicaList omitted.

// de_ReplicaNotFoundException omitted.

/**
 * deserializeAws_json1_0ReplicaSettingsDescription
 */
const de_ReplicaSettingsDescription = (output: any, context: __SerdeContext): ReplicaSettingsDescription => {
  return take(output, {
    RegionName: __expectString,
    ReplicaBillingModeSummary: (_: any) => de_BillingModeSummary(_, context),
    ReplicaGlobalSecondaryIndexSettings: (_: any) => de_ReplicaGlobalSecondaryIndexSettingsDescriptionList(_, context),
    ReplicaProvisionedReadCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ReplicaProvisionedReadCapacityUnits: __expectLong,
    ReplicaProvisionedWriteCapacityAutoScalingSettings: (_: any) => de_AutoScalingSettingsDescription(_, context),
    ReplicaProvisionedWriteCapacityUnits: __expectLong,
    ReplicaStatus: __expectString,
    ReplicaTableClassSummary: (_: any) => de_TableClassSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ReplicaSettingsDescriptionList
 */
const de_ReplicaSettingsDescriptionList = (output: any, context: __SerdeContext): ReplicaSettingsDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaSettingsDescription(entry, context);
    });
  return retVal;
};

// de_RequestLimitExceeded omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0RestoreSummary
 */
const de_RestoreSummary = (output: any, context: __SerdeContext): RestoreSummary => {
  return take(output, {
    RestoreDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreInProgress: __expectBoolean,
    SourceBackupArn: __expectString,
    SourceTableArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RestoreTableFromBackupOutput
 */
const de_RestoreTableFromBackupOutput = (output: any, context: __SerdeContext): RestoreTableFromBackupOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0RestoreTableToPointInTimeOutput
 */
const de_RestoreTableToPointInTimeOutput = (output: any, context: __SerdeContext): RestoreTableToPointInTimeOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

// de_S3BucketSource omitted.

/**
 * deserializeAws_json1_0ScanOutput
 */
const de_ScanOutput = (output: any, context: __SerdeContext): ScanOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    Count: __expectInt32,
    Items: (_: any) => de_ItemList(_, context),
    LastEvaluatedKey: (_: any) => de_Key(_, context),
    ScannedCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0SecondaryIndexesCapacityMap
 */
const de_SecondaryIndexesCapacityMap = (output: any, context: __SerdeContext): Record<string, Capacity> => {
  return Object.entries(output).reduce((acc: Record<string, Capacity>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_Capacity(value, context);
    return acc;
  }, {} as Record<string, Capacity>);
};

/**
 * deserializeAws_json1_0SourceTableDetails
 */
const de_SourceTableDetails = (output: any, context: __SerdeContext): SourceTableDetails => {
  return take(output, {
    BillingMode: __expectString,
    ItemCount: __expectLong,
    KeySchema: _json,
    ProvisionedThroughput: _json,
    TableArn: __expectString,
    TableCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableId: __expectString,
    TableName: __expectString,
    TableSizeBytes: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_0SourceTableFeatureDetails
 */
const de_SourceTableFeatureDetails = (output: any, context: __SerdeContext): SourceTableFeatureDetails => {
  return take(output, {
    GlobalSecondaryIndexes: _json,
    LocalSecondaryIndexes: _json,
    SSEDescription: (_: any) => de_SSEDescription(_, context),
    StreamDescription: _json,
    TimeToLiveDescription: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0SSEDescription
 */
const de_SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
  return take(output, {
    InaccessibleEncryptionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KMSMasterKeyArn: __expectString,
    SSEType: __expectString,
    Status: __expectString,
  }) as any;
};

// de_SSESpecification omitted.

// de_StreamSpecification omitted.

// de_StringSetAttributeValue omitted.

// de_TableAlreadyExistsException omitted.

/**
 * deserializeAws_json1_0TableAutoScalingDescription
 */
const de_TableAutoScalingDescription = (output: any, context: __SerdeContext): TableAutoScalingDescription => {
  return take(output, {
    Replicas: (_: any) => de_ReplicaAutoScalingDescriptionList(_, context),
    TableName: __expectString,
    TableStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0TableClassSummary
 */
const de_TableClassSummary = (output: any, context: __SerdeContext): TableClassSummary => {
  return take(output, {
    LastUpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableClass: __expectString,
  }) as any;
};

// de_TableCreationParameters omitted.

/**
 * deserializeAws_json1_0TableDescription
 */
const de_TableDescription = (output: any, context: __SerdeContext): TableDescription => {
  return take(output, {
    ArchivalSummary: (_: any) => de_ArchivalSummary(_, context),
    AttributeDefinitions: _json,
    BillingModeSummary: (_: any) => de_BillingModeSummary(_, context),
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    GlobalSecondaryIndexes: (_: any) => de_GlobalSecondaryIndexDescriptionList(_, context),
    GlobalTableVersion: __expectString,
    ItemCount: __expectLong,
    KeySchema: _json,
    LatestStreamArn: __expectString,
    LatestStreamLabel: __expectString,
    LocalSecondaryIndexes: _json,
    ProvisionedThroughput: (_: any) => de_ProvisionedThroughputDescription(_, context),
    Replicas: (_: any) => de_ReplicaDescriptionList(_, context),
    RestoreSummary: (_: any) => de_RestoreSummary(_, context),
    SSEDescription: (_: any) => de_SSEDescription(_, context),
    StreamSpecification: _json,
    TableArn: __expectString,
    TableClassSummary: (_: any) => de_TableClassSummary(_, context),
    TableId: __expectString,
    TableName: __expectString,
    TableSizeBytes: __expectLong,
    TableStatus: __expectString,
  }) as any;
};

// de_TableInUseException omitted.

// de_TableNameList omitted.

// de_TableNotFoundException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TimeToLiveDescription omitted.

// de_TimeToLiveSpecification omitted.

/**
 * deserializeAws_json1_0TransactGetItemsOutput
 */
const de_TransactGetItemsOutput = (output: any, context: __SerdeContext): TransactGetItemsOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_ItemResponseList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0TransactionCanceledException
 */
const de_TransactionCanceledException = (output: any, context: __SerdeContext): TransactionCanceledException => {
  return take(output, {
    CancellationReasons: (_: any) => de_CancellationReasonList(_, context),
    Message: __expectString,
  }) as any;
};

// de_TransactionConflictException omitted.

// de_TransactionInProgressException omitted.

/**
 * deserializeAws_json1_0TransactWriteItemsOutput
 */
const de_TransactWriteItemsOutput = (output: any, context: __SerdeContext): TransactWriteItemsOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetricsPerTable(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateContinuousBackupsOutput
 */
const de_UpdateContinuousBackupsOutput = (output: any, context: __SerdeContext): UpdateContinuousBackupsOutput => {
  return take(output, {
    ContinuousBackupsDescription: (_: any) => de_ContinuousBackupsDescription(_, context),
  }) as any;
};

// de_UpdateContributorInsightsOutput omitted.

/**
 * deserializeAws_json1_0UpdateGlobalTableOutput
 */
const de_UpdateGlobalTableOutput = (output: any, context: __SerdeContext): UpdateGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateGlobalTableSettingsOutput
 */
const de_UpdateGlobalTableSettingsOutput = (output: any, context: __SerdeContext): UpdateGlobalTableSettingsOutput => {
  return take(output, {
    GlobalTableName: __expectString,
    ReplicaSettings: (_: any) => de_ReplicaSettingsDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateItemOutput
 */
const de_UpdateItemOutput = (output: any, context: __SerdeContext): UpdateItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateTableOutput
 */
const de_UpdateTableOutput = (output: any, context: __SerdeContext): UpdateTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput
 */
const de_UpdateTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableReplicaAutoScalingOutput => {
  return take(output, {
    TableAutoScalingDescription: (_: any) => de_TableAutoScalingDescription(_, context),
  }) as any;
};

// de_UpdateTimeToLiveOutput omitted.

/**
 * deserializeAws_json1_0WriteRequest
 */
const de_WriteRequest = (output: any, context: __SerdeContext): WriteRequest => {
  return take(output, {
    DeleteRequest: (_: any) => de_DeleteRequest(_, context),
    PutRequest: (_: any) => de_PutRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0WriteRequests
 */
const de_WriteRequests = (output: any, context: __SerdeContext): WriteRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
