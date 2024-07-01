// smithy-typescript generated code
import {
  cbor,
  loadSmithyRpcV2CborErrorCode,
  parseCborBody as parseBody,
  parseCborErrorBody as parseErrorBody,
} from "@smithy/core/cbor";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  expectUnion as __expectUnion,
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
import { calculateBodyLength } from "@smithy/util-body-length-browser";
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
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
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
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
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
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
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
import {
  UpdateKinesisStreamingDestinationCommandInput,
  UpdateKinesisStreamingDestinationCommandOutput,
} from "../commands/UpdateKinesisStreamingDestinationCommand";
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
  DeleteResourcePolicyInput,
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
  EnableKinesisStreamingConfiguration,
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
  GetResourcePolicyInput,
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
  OnDemandThroughput,
  OnDemandThroughputOverride,
  ParameterizedStatement,
  PointInTimeRecoveryDescription,
  PointInTimeRecoverySpecification,
  PointInTimeRecoveryUnavailableException,
  PolicyNotFoundException,
  Projection,
  ProvisionedThroughput,
  ProvisionedThroughputDescription,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputOverride,
  Put,
  PutItemInput,
  PutItemOutput,
  PutRequest,
  PutResourcePolicyInput,
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
  UpdateKinesisStreamingConfiguration,
  UpdateKinesisStreamingDestinationInput,
  UpdateReplicationGroupMemberAction,
  UpdateTableInput,
  UpdateTableOutput,
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingOutput,
  UpdateTimeToLiveInput,
  WriteRequest,
} from "../models/models_0";

/**
 * serializeRpcv2cborBatchExecuteStatementCommand
 */
export const se_BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_BatchExecuteStatementInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/BatchExecuteStatement",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborBatchGetItemCommand
 */
export const se_BatchGetItemCommand = async (
  input: BatchGetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_BatchGetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/BatchGetItem", undefined, body);
};

/**
 * serializeRpcv2cborBatchWriteItemCommand
 */
export const se_BatchWriteItemCommand = async (
  input: BatchWriteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_BatchWriteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/BatchWriteItem", undefined, body);
};

/**
 * serializeRpcv2cborCreateBackupCommand
 */
export const se_CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/CreateBackup", undefined, body);
};

/**
 * serializeRpcv2cborCreateGlobalTableCommand
 */
export const se_CreateGlobalTableCommand = async (
  input: CreateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/CreateGlobalTable",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborCreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/CreateTable", undefined, body);
};

/**
 * serializeRpcv2cborDeleteBackupCommand
 */
export const se_DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DeleteBackup", undefined, body);
};

/**
 * serializeRpcv2cborDeleteItemCommand
 */
export const se_DeleteItemCommand = async (
  input: DeleteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_DeleteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DeleteItem", undefined, body);
};

/**
 * serializeRpcv2cborDeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DeleteResourcePolicy",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DeleteTable", undefined, body);
};

/**
 * serializeRpcv2cborDescribeBackupCommand
 */
export const se_DescribeBackupCommand = async (
  input: DescribeBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DescribeBackup", undefined, body);
};

/**
 * serializeRpcv2cborDescribeContinuousBackupsCommand
 */
export const se_DescribeContinuousBackupsCommand = async (
  input: DescribeContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeContinuousBackups",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeContributorInsightsCommand
 */
export const se_DescribeContributorInsightsCommand = async (
  input: DescribeContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeContributorInsights",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeEndpoints",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeExportCommand
 */
export const se_DescribeExportCommand = async (
  input: DescribeExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DescribeExport", undefined, body);
};

/**
 * serializeRpcv2cborDescribeGlobalTableCommand
 */
export const se_DescribeGlobalTableCommand = async (
  input: DescribeGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeGlobalTable",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeGlobalTableSettingsCommand
 */
export const se_DescribeGlobalTableSettingsCommand = async (
  input: DescribeGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeGlobalTableSettings",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeImportCommand
 */
export const se_DescribeImportCommand = async (
  input: DescribeImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DescribeImport", undefined, body);
};

/**
 * serializeRpcv2cborDescribeKinesisStreamingDestinationCommand
 */
export const se_DescribeKinesisStreamingDestinationCommand = async (
  input: DescribeKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeKinesisStreamingDestination",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeLimitsCommand
 */
export const se_DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DescribeLimits", undefined, body);
};

/**
 * serializeRpcv2cborDescribeTableCommand
 */
export const se_DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/DescribeTable", undefined, body);
};

/**
 * serializeRpcv2cborDescribeTableReplicaAutoScalingCommand
 */
export const se_DescribeTableReplicaAutoScalingCommand = async (
  input: DescribeTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeTableReplicaAutoScaling",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeTimeToLiveCommand
 */
export const se_DescribeTimeToLiveCommand = async (
  input: DescribeTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DescribeTimeToLive",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDisableKinesisStreamingDestinationCommand
 */
export const se_DisableKinesisStreamingDestinationCommand = async (
  input: DisableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/DisableKinesisStreamingDestination",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborEnableKinesisStreamingDestinationCommand
 */
export const se_EnableKinesisStreamingDestinationCommand = async (
  input: EnableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/EnableKinesisStreamingDestination",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborExecuteStatementCommand
 */
export const se_ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ExecuteStatementInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ExecuteStatement",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborExecuteTransactionCommand
 */
export const se_ExecuteTransactionCommand = async (
  input: ExecuteTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ExecuteTransactionInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ExecuteTransaction",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborExportTableToPointInTimeCommand
 */
export const se_ExportTableToPointInTimeCommand = async (
  input: ExportTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ExportTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ExportTableToPointInTime",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetItemCommand
 */
export const se_GetItemCommand = async (
  input: GetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_GetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/GetItem", undefined, body);
};

/**
 * serializeRpcv2cborGetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/GetResourcePolicy",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborImportTableCommand
 */
export const se_ImportTableCommand = async (
  input: ImportTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ImportTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/ImportTable", undefined, body);
};

/**
 * serializeRpcv2cborListBackupsCommand
 */
export const se_ListBackupsCommand = async (
  input: ListBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ListBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/ListBackups", undefined, body);
};

/**
 * serializeRpcv2cborListContributorInsightsCommand
 */
export const se_ListContributorInsightsCommand = async (
  input: ListContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ListContributorInsights",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/ListExports", undefined, body);
};

/**
 * serializeRpcv2cborListGlobalTablesCommand
 */
export const se_ListGlobalTablesCommand = async (
  input: ListGlobalTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ListGlobalTables",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/ListImports", undefined, body);
};

/**
 * serializeRpcv2cborListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/ListTables", undefined, body);
};

/**
 * serializeRpcv2cborListTagsOfResourceCommand
 */
export const se_ListTagsOfResourceCommand = async (
  input: ListTagsOfResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/ListTagsOfResource",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutItemCommand
 */
export const se_PutItemCommand = async (
  input: PutItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_PutItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/PutItem", undefined, body);
};

/**
 * serializeRpcv2cborPutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/PutResourcePolicy",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborQueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/Query", undefined, body);
};

/**
 * serializeRpcv2cborRestoreTableFromBackupCommand
 */
export const se_RestoreTableFromBackupCommand = async (
  input: RestoreTableFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/RestoreTableFromBackup",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborRestoreTableToPointInTimeCommand
 */
export const se_RestoreTableToPointInTimeCommand = async (
  input: RestoreTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_RestoreTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/RestoreTableToPointInTime",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborScanCommand
 */
export const se_ScanCommand = async (input: ScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_ScanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/Scan", undefined, body);
};

/**
 * serializeRpcv2cborTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/TagResource", undefined, body);
};

/**
 * serializeRpcv2cborTransactGetItemsCommand
 */
export const se_TransactGetItemsCommand = async (
  input: TransactGetItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_TransactGetItemsInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/TransactGetItems",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborTransactWriteItemsCommand
 */
export const se_TransactWriteItemsCommand = async (
  input: TransactWriteItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_TransactWriteItemsInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/TransactWriteItems",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/UntagResource", undefined, body);
};

/**
 * serializeRpcv2cborUpdateContinuousBackupsCommand
 */
export const se_UpdateContinuousBackupsCommand = async (
  input: UpdateContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateContinuousBackups",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateContributorInsightsCommand
 */
export const se_UpdateContributorInsightsCommand = async (
  input: UpdateContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateContributorInsights",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateGlobalTableCommand
 */
export const se_UpdateGlobalTableCommand = async (
  input: UpdateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateGlobalTable",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateGlobalTableSettingsCommand
 */
export const se_UpdateGlobalTableSettingsCommand = async (
  input: UpdateGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_UpdateGlobalTableSettingsInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateGlobalTableSettings",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateItemCommand
 */
export const se_UpdateItemCommand = async (
  input: UpdateItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_UpdateItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/UpdateItem", undefined, body);
};

/**
 * serializeRpcv2cborUpdateKinesisStreamingDestinationCommand
 */
export const se_UpdateKinesisStreamingDestinationCommand = async (
  input: UpdateKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateKinesisStreamingDestination",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/DynamoDB_20120810/operation/UpdateTable", undefined, body);
};

/**
 * serializeRpcv2cborUpdateTableReplicaAutoScalingCommand
 */
export const se_UpdateTableReplicaAutoScalingCommand = async (
  input: UpdateTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_UpdateTableReplicaAutoScalingInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateTableReplicaAutoScaling",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUpdateTimeToLiveCommand
 */
export const se_UpdateTimeToLiveCommand = async (
  input: UpdateTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/DynamoDB_20120810/operation/UpdateTimeToLive",
    undefined,
    body
  );
};

/**
 * deserializeRpcv2cborBatchExecuteStatementCommand
 */
export const de_BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborBatchGetItemCommand
 */
export const de_BatchGetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborBatchWriteItemCommand
 */
export const de_BatchWriteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborCreateBackupCommand
 */
export const de_CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborCreateGlobalTableCommand
 */
export const de_CreateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborCreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDeleteBackupCommand
 */
export const de_DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDeleteItemCommand
 */
export const de_DeleteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeBackupCommand
 */
export const de_DescribeBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeContinuousBackupsCommand
 */
export const de_DescribeContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeContributorInsightsCommand
 */
export const de_DescribeContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeEndpointsCommand
 */
export const de_DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeExportCommand
 */
export const de_DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeGlobalTableCommand
 */
export const de_DescribeGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeGlobalTableSettingsCommand
 */
export const de_DescribeGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeImportCommand
 */
export const de_DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeKinesisStreamingDestinationCommand
 */
export const de_DescribeKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeLimitsCommand
 */
export const de_DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeTableCommand
 */
export const de_DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeTableReplicaAutoScalingCommand
 */
export const de_DescribeTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDescribeTimeToLiveCommand
 */
export const de_DescribeTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborDisableKinesisStreamingDestinationCommand
 */
export const de_DisableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborEnableKinesisStreamingDestinationCommand
 */
export const de_EnableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborExecuteStatementCommand
 */
export const de_ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborExecuteTransactionCommand
 */
export const de_ExecuteTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteTransactionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborExportTableToPointInTimeCommand
 */
export const de_ExportTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborGetItemCommand
 */
export const de_GetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborGetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborImportTableCommand
 */
export const de_ImportTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListBackupsCommand
 */
export const de_ListBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListContributorInsightsCommand
 */
export const de_ListContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListGlobalTablesCommand
 */
export const de_ListGlobalTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborListTagsOfResourceCommand
 */
export const de_ListTagsOfResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborPutItemCommand
 */
export const de_PutItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborPutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborQueryCommand
 */
export const de_QueryCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborRestoreTableFromBackupCommand
 */
export const de_RestoreTableFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborRestoreTableToPointInTimeCommand
 */
export const de_RestoreTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborScanCommand
 */
export const de_ScanCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<ScanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborTransactGetItemsCommand
 */
export const de_TransactGetItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborTransactWriteItemsCommand
 */
export const de_TransactWriteItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborUpdateContinuousBackupsCommand
 */
export const de_UpdateContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateContributorInsightsCommand
 */
export const de_UpdateContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateGlobalTableCommand
 */
export const de_UpdateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateGlobalTableSettingsCommand
 */
export const de_UpdateGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateItemCommand
 */
export const de_UpdateItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateKinesisStreamingDestinationCommand
 */
export const de_UpdateKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborUpdateTableCommand
 */
export const de_UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateTableReplicaAutoScalingCommand
 */
export const de_UpdateTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUpdateTimeToLiveCommand
 */
export const de_UpdateTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Rpcv2cborCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadSmithyRpcV2CborErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      throw await de_BackupInUseExceptionRes(parsedOutput, context);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await de_TableInUseExceptionRes(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await de_TableNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await de_TransactionConflictExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.dynamodb#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ExportNotFoundException":
    case "com.amazonaws.dynamodb#ExportNotFoundException":
      throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
    case "ImportNotFoundException":
    case "com.amazonaws.dynamodb#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await de_DuplicateItemExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
    case "ExportConflictException":
    case "com.amazonaws.dynamodb#ExportConflictException":
      throw await de_ExportConflictExceptionRes(parsedOutput, context);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
    case "ImportConflictException":
    case "com.amazonaws.dynamodb#ImportConflictException":
      throw await de_ImportConflictExceptionRes(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeRpcv2cborBackupInUseExceptionRes
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
 * deserializeRpcv2cborBackupNotFoundExceptionRes
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
 * deserializeRpcv2cborConditionalCheckFailedExceptionRes
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
 * deserializeRpcv2cborContinuousBackupsUnavailableExceptionRes
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
 * deserializeRpcv2cborDuplicateItemExceptionRes
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
 * deserializeRpcv2cborExportConflictExceptionRes
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
 * deserializeRpcv2cborExportNotFoundExceptionRes
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
 * deserializeRpcv2cborGlobalTableAlreadyExistsExceptionRes
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
 * deserializeRpcv2cborGlobalTableNotFoundExceptionRes
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
 * deserializeRpcv2cborIdempotentParameterMismatchExceptionRes
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
 * deserializeRpcv2cborImportConflictExceptionRes
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
 * deserializeRpcv2cborImportNotFoundExceptionRes
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
 * deserializeRpcv2cborIndexNotFoundExceptionRes
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
 * deserializeRpcv2cborInternalServerErrorRes
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
 * deserializeRpcv2cborInvalidEndpointExceptionRes
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
 * deserializeRpcv2cborInvalidExportTimeExceptionRes
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
 * deserializeRpcv2cborInvalidRestoreTimeExceptionRes
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
 * deserializeRpcv2cborItemCollectionSizeLimitExceededExceptionRes
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
 * deserializeRpcv2cborLimitExceededExceptionRes
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
 * deserializeRpcv2cborPointInTimeRecoveryUnavailableExceptionRes
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
 * deserializeRpcv2cborPolicyNotFoundExceptionRes
 */
const de_PolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborProvisionedThroughputExceededExceptionRes
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
 * deserializeRpcv2cborReplicaAlreadyExistsExceptionRes
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
 * deserializeRpcv2cborReplicaNotFoundExceptionRes
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
 * deserializeRpcv2cborRequestLimitExceededRes
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
 * deserializeRpcv2cborResourceInUseExceptionRes
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
 * deserializeRpcv2cborResourceNotFoundExceptionRes
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
 * deserializeRpcv2cborTableAlreadyExistsExceptionRes
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
 * deserializeRpcv2cborTableInUseExceptionRes
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
 * deserializeRpcv2cborTableNotFoundExceptionRes
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
 * deserializeRpcv2cborTransactionCanceledExceptionRes
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
 * deserializeRpcv2cborTransactionConflictExceptionRes
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
 * deserializeRpcv2cborTransactionInProgressExceptionRes
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
 * serializeRpcv2cborAttributeUpdates
 */
const se_AttributeUpdates = (input: Record<string, AttributeValueUpdate>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_AttributeValueUpdate(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborAttributeValue
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
 * serializeRpcv2cborAttributeValueList
 */
const se_AttributeValueList = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

/**
 * serializeRpcv2cborAttributeValueUpdate
 */
const se_AttributeValueUpdate = (input: AttributeValueUpdate, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    Value: (_) => se_AttributeValue(_, context),
  });
};

/**
 * serializeRpcv2cborAutoScalingPolicyUpdate
 */
const se_AutoScalingPolicyUpdate = (input: AutoScalingPolicyUpdate, context: __SerdeContext): any => {
  return take(input, {
    PolicyName: [],
    TargetTrackingScalingPolicyConfiguration: (_) =>
      se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(_, context),
  });
};

/**
 * serializeRpcv2cborAutoScalingSettingsUpdate
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
 * serializeRpcv2cborAutoScalingTargetTrackingScalingPolicyConfigurationUpdate
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
 * serializeRpcv2cborBatchExecuteStatementInput
 */
const se_BatchExecuteStatementInput = (input: BatchExecuteStatementInput, context: __SerdeContext): any => {
  return take(input, {
    ReturnConsumedCapacity: [],
    Statements: (_) => se_PartiQLBatchRequest(_, context),
  });
};

/**
 * serializeRpcv2cborBatchGetItemInput
 */
const se_BatchGetItemInput = (input: BatchGetItemInput, context: __SerdeContext): any => {
  return take(input, {
    RequestItems: (_) => se_BatchGetRequestMap(_, context),
    ReturnConsumedCapacity: [],
  });
};

/**
 * serializeRpcv2cborBatchGetRequestMap
 */
const se_BatchGetRequestMap = (input: Record<string, KeysAndAttributes>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_KeysAndAttributes(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborBatchStatementRequest
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
 * serializeRpcv2cborBatchWriteItemInput
 */
const se_BatchWriteItemInput = (input: BatchWriteItemInput, context: __SerdeContext): any => {
  return take(input, {
    RequestItems: (_) => se_BatchWriteItemRequestMap(_, context),
    ReturnConsumedCapacity: [],
    ReturnItemCollectionMetrics: [],
  });
};

/**
 * serializeRpcv2cborBatchWriteItemRequestMap
 */
const se_BatchWriteItemRequestMap = (input: Record<string, WriteRequest[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_WriteRequests(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborBinarySetAttributeValue
 */
const se_BinarySetAttributeValue = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

/**
 * serializeRpcv2cborCondition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return take(input, {
    AttributeValueList: (_) => se_AttributeValueList(_, context),
    ComparisonOperator: [],
  });
};

/**
 * serializeRpcv2cborConditionCheck
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
 * serializeRpcv2cborDelete
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
 * serializeRpcv2cborDeleteItemInput
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
 * serializeRpcv2cborDeleteRequest
 */
const se_DeleteRequest = (input: DeleteRequest, context: __SerdeContext): any => {
  return take(input, {
    Key: (_) => se_Key(_, context),
  });
};

// se_DeleteResourcePolicyInput omitted.

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

// se_EnableKinesisStreamingConfiguration omitted.

/**
 * serializeRpcv2cborExecuteStatementInput
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
 * serializeRpcv2cborExecuteTransactionInput
 */
const se_ExecuteTransactionInput = (input: ExecuteTransactionInput, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ReturnConsumedCapacity: [],
    TransactStatements: (_) => se_ParameterizedStatements(_, context),
  });
};

/**
 * serializeRpcv2cborExpectedAttributeMap
 */
const se_ExpectedAttributeMap = (input: Record<string, ExpectedAttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_ExpectedAttributeValue(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborExpectedAttributeValue
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
 * serializeRpcv2cborExportTableToPointInTimeInput
 */
const se_ExportTableToPointInTimeInput = (input: ExportTableToPointInTimeInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ExportFormat: [],
    ExportTime: (_) => _.getTime() / 1_000,
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
 * serializeRpcv2cborExpressionAttributeValueMap
 */
const se_ExpressionAttributeValueMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_AttributeValue(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborFilterConditionMap
 */
const se_FilterConditionMap = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_Condition(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborGet
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
 * serializeRpcv2cborGetItemInput
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

// se_GetResourcePolicyInput omitted.

// se_GlobalSecondaryIndex omitted.

/**
 * serializeRpcv2cborGlobalSecondaryIndexAutoScalingUpdate
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
 * serializeRpcv2cborGlobalSecondaryIndexAutoScalingUpdateList
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
 * serializeRpcv2cborGlobalTableGlobalSecondaryIndexSettingsUpdate
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
 * serializeRpcv2cborGlobalTableGlobalSecondaryIndexSettingsUpdateList
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
 * serializeRpcv2cborImportTableInput
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
 * serializeRpcv2cborIncrementalExportSpecification
 */
const se_IncrementalExportSpecification = (input: IncrementalExportSpecification, context: __SerdeContext): any => {
  return take(input, {
    ExportFromTime: (_) => _.getTime() / 1_000,
    ExportToTime: (_) => _.getTime() / 1_000,
    ExportViewType: [],
  });
};

// se_InputFormatOptions omitted.

/**
 * serializeRpcv2cborKey
 */
const se_Key = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_AttributeValue(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborKeyConditions
 */
const se_KeyConditions = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_Condition(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborKeyList
 */
const se_KeyList = (input: Record<string, AttributeValue>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Key(entry, context);
    });
};

/**
 * serializeRpcv2cborKeysAndAttributes
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
 * serializeRpcv2cborListAttributeValue
 */
const se_ListAttributeValue = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

/**
 * serializeRpcv2cborListBackupsInput
 */
const se_ListBackupsInput = (input: ListBackupsInput, context: __SerdeContext): any => {
  return take(input, {
    BackupType: [],
    ExclusiveStartBackupArn: [],
    Limit: [],
    TableName: [],
    TimeRangeLowerBound: (_) => _.getTime() / 1_000,
    TimeRangeUpperBound: (_) => _.getTime() / 1_000,
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
 * serializeRpcv2cborMapAttributeValue
 */
const se_MapAttributeValue = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_AttributeValue(value, context);
    }

    return acc;
  }, {});
};

// se_NonKeyAttributeNameList omitted.

// se_NumberSetAttributeValue omitted.

// se_OnDemandThroughput omitted.

// se_OnDemandThroughputOverride omitted.

/**
 * serializeRpcv2cborParameterizedStatement
 */
const se_ParameterizedStatement = (input: ParameterizedStatement, context: __SerdeContext): any => {
  return take(input, {
    Parameters: (_) => se_PreparedStatementParameters(_, context),
    ReturnValuesOnConditionCheckFailure: [],
    Statement: [],
  });
};

/**
 * serializeRpcv2cborParameterizedStatements
 */
const se_ParameterizedStatements = (input: ParameterizedStatement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterizedStatement(entry, context);
    });
};

/**
 * serializeRpcv2cborPartiQLBatchRequest
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
 * serializeRpcv2cborPreparedStatementParameters
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
 * serializeRpcv2cborPut
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
 * serializeRpcv2cborPutItemInput
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
 * serializeRpcv2cborPutItemInputAttributeMap
 */
const se_PutItemInputAttributeMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = se_AttributeValue(value, context);
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborPutRequest
 */
const se_PutRequest = (input: PutRequest, context: __SerdeContext): any => {
  return take(input, {
    Item: (_) => se_PutItemInputAttributeMap(_, context),
  });
};

// se_PutResourcePolicyInput omitted.

/**
 * serializeRpcv2cborQueryInput
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
 * serializeRpcv2cborReplicaAutoScalingUpdate
 */
const se_ReplicaAutoScalingUpdate = (input: ReplicaAutoScalingUpdate, context: __SerdeContext): any => {
  return take(input, {
    RegionName: [],
    ReplicaGlobalSecondaryIndexUpdates: (_) => se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(_, context),
    ReplicaProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
  });
};

/**
 * serializeRpcv2cborReplicaAutoScalingUpdateList
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
 * serializeRpcv2cborReplicaGlobalSecondaryIndexAutoScalingUpdate
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
 * serializeRpcv2cborReplicaGlobalSecondaryIndexAutoScalingUpdateList
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
 * serializeRpcv2cborReplicaGlobalSecondaryIndexSettingsUpdate
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
 * serializeRpcv2cborReplicaGlobalSecondaryIndexSettingsUpdateList
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
 * serializeRpcv2cborReplicaSettingsUpdate
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
 * serializeRpcv2cborReplicaSettingsUpdateList
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
 * serializeRpcv2cborRestoreTableToPointInTimeInput
 */
const se_RestoreTableToPointInTimeInput = (input: RestoreTableToPointInTimeInput, context: __SerdeContext): any => {
  return take(input, {
    BillingModeOverride: [],
    GlobalSecondaryIndexOverride: _json,
    LocalSecondaryIndexOverride: _json,
    OnDemandThroughputOverride: _json,
    ProvisionedThroughputOverride: _json,
    RestoreDateTime: (_) => _.getTime() / 1_000,
    SSESpecificationOverride: _json,
    SourceTableArn: [],
    SourceTableName: [],
    TargetTableName: [],
    UseLatestRestorableTime: [],
  });
};

// se_S3BucketSource omitted.

/**
 * serializeRpcv2cborScanInput
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
 * serializeRpcv2cborTransactGetItem
 */
const se_TransactGetItem = (input: TransactGetItem, context: __SerdeContext): any => {
  return take(input, {
    Get: (_) => se_Get(_, context),
  });
};

/**
 * serializeRpcv2cborTransactGetItemList
 */
const se_TransactGetItemList = (input: TransactGetItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransactGetItem(entry, context);
    });
};

/**
 * serializeRpcv2cborTransactGetItemsInput
 */
const se_TransactGetItemsInput = (input: TransactGetItemsInput, context: __SerdeContext): any => {
  return take(input, {
    ReturnConsumedCapacity: [],
    TransactItems: (_) => se_TransactGetItemList(_, context),
  });
};

/**
 * serializeRpcv2cborTransactWriteItem
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
 * serializeRpcv2cborTransactWriteItemList
 */
const se_TransactWriteItemList = (input: TransactWriteItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransactWriteItem(entry, context);
    });
};

/**
 * serializeRpcv2cborTransactWriteItemsInput
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
 * serializeRpcv2cborUpdate
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
 * serializeRpcv2cborUpdateGlobalTableSettingsInput
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
 * serializeRpcv2cborUpdateItemInput
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

// se_UpdateKinesisStreamingConfiguration omitted.

// se_UpdateKinesisStreamingDestinationInput omitted.

// se_UpdateReplicationGroupMemberAction omitted.

// se_UpdateTableInput omitted.

/**
 * serializeRpcv2cborUpdateTableReplicaAutoScalingInput
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
 * serializeRpcv2cborWriteRequest
 */
const se_WriteRequest = (input: WriteRequest, context: __SerdeContext): any => {
  return take(input, {
    DeleteRequest: (_) => se_DeleteRequest(_, context),
    PutRequest: (_) => se_PutRequest(_, context),
  });
};

/**
 * serializeRpcv2cborWriteRequests
 */
const se_WriteRequests = (input: WriteRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WriteRequest(entry, context);
    });
};

/**
 * deserializeRpcv2cborArchivalSummary
 */
const de_ArchivalSummary = (output: any, context: __SerdeContext): ArchivalSummary => {
  return take(output, {
    ArchivalBackupArn: __expectString,
    ArchivalDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ArchivalReason: __expectString,
  }) as any;
};

// de_AttributeDefinition omitted.

// de_AttributeDefinitions omitted.

/**
 * deserializeRpcv2cborAttributeMap
 */
const de_AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    }
    return acc;
  }, {} as Record<string, AttributeValue>);
};

// de_AttributeNameList omitted.

/**
 * deserializeRpcv2cborAttributeValue
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
 * deserializeRpcv2cborAutoScalingPolicyDescription
 */
const de_AutoScalingPolicyDescription = (output: any, context: __SerdeContext): AutoScalingPolicyDescription => {
  return take(output, {
    PolicyName: __expectString,
    TargetTrackingScalingPolicyConfiguration: (_: any) =>
      de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborAutoScalingPolicyDescriptionList
 */
const de_AutoScalingPolicyDescriptionList = (output: any, context: __SerdeContext): AutoScalingPolicyDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingPolicyDescription(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborAutoScalingSettingsDescription
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
 * deserializeRpcv2cborAutoScalingTargetTrackingScalingPolicyConfigurationDescription
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
 * deserializeRpcv2cborBackupDescription
 */
const de_BackupDescription = (output: any, context: __SerdeContext): BackupDescription => {
  return take(output, {
    BackupDetails: (_: any) => de_BackupDetails(_, context),
    SourceTableDetails: (_: any) => de_SourceTableDetails(_, context),
    SourceTableFeatureDetails: (_: any) => de_SourceTableFeatureDetails(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborBackupDetails
 */
const de_BackupDetails = (output: any, context: __SerdeContext): BackupDetails => {
  return take(output, {
    BackupArn: __expectString,
    BackupCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    BackupExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    BackupName: __expectString,
    BackupSizeBytes: __expectLong,
    BackupStatus: __expectString,
    BackupType: __expectString,
  }) as any;
};

// de_BackupInUseException omitted.

// de_BackupNotFoundException omitted.

/**
 * deserializeRpcv2cborBackupSummaries
 */
const de_BackupSummaries = (output: any, context: __SerdeContext): BackupSummary[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupSummary(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborBackupSummary
 */
const de_BackupSummary = (output: any, context: __SerdeContext): BackupSummary => {
  return take(output, {
    BackupArn: __expectString,
    BackupCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    BackupExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
 * deserializeRpcv2cborBatchExecuteStatementOutput
 */
const de_BatchExecuteStatementOutput = (output: any, context: __SerdeContext): BatchExecuteStatementOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_PartiQLBatchResponse(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborBatchGetItemOutput
 */
const de_BatchGetItemOutput = (output: any, context: __SerdeContext): BatchGetItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_BatchGetResponseMap(_, context),
    UnprocessedKeys: (_: any) => de_BatchGetRequestMap(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborBatchGetRequestMap
 */
const de_BatchGetRequestMap = (output: any, context: __SerdeContext): Record<string, KeysAndAttributes> => {
  return Object.entries(output).reduce((acc: Record<string, KeysAndAttributes>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_KeysAndAttributes(value, context);
    }
    return acc;
  }, {} as Record<string, KeysAndAttributes>);
};

/**
 * deserializeRpcv2cborBatchGetResponseMap
 */
const de_BatchGetResponseMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, AttributeValue>[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, AttributeValue>[]>, [key, value]: [string, any]) => {
      if (value !== null) {
        acc[key as string] = de_ItemList(value, context);
      }
      return acc;
    },
    {} as Record<string, Record<string, AttributeValue>[]>
  );
};

/**
 * deserializeRpcv2cborBatchStatementError
 */
const de_BatchStatementError = (output: any, context: __SerdeContext): BatchStatementError => {
  return take(output, {
    Code: __expectString,
    Item: (_: any) => de_AttributeMap(_, context),
    Message: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborBatchStatementResponse
 */
const de_BatchStatementResponse = (output: any, context: __SerdeContext): BatchStatementResponse => {
  return take(output, {
    Error: (_: any) => de_BatchStatementError(_, context),
    Item: (_: any) => de_AttributeMap(_, context),
    TableName: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborBatchWriteItemOutput
 */
const de_BatchWriteItemOutput = (output: any, context: __SerdeContext): BatchWriteItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetricsPerTable(_, context),
    UnprocessedItems: (_: any) => de_BatchWriteItemRequestMap(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborBatchWriteItemRequestMap
 */
const de_BatchWriteItemRequestMap = (output: any, context: __SerdeContext): Record<string, WriteRequest[]> => {
  return Object.entries(output).reduce((acc: Record<string, WriteRequest[]>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_WriteRequests(value, context);
    }
    return acc;
  }, {} as Record<string, WriteRequest[]>);
};

/**
 * deserializeRpcv2cborBillingModeSummary
 */
const de_BillingModeSummary = (output: any, context: __SerdeContext): BillingModeSummary => {
  return take(output, {
    BillingMode: __expectString,
    LastUpdateToPayPerRequestDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
  }) as any;
};

/**
 * deserializeRpcv2cborBinarySetAttributeValue
 */
const de_BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return context.base64Decoder(entry);
    });
  return collection;
};

/**
 * deserializeRpcv2cborCancellationReason
 */
const de_CancellationReason = (output: any, context: __SerdeContext): CancellationReason => {
  return take(output, {
    Code: __expectString,
    Item: (_: any) => de_AttributeMap(_, context),
    Message: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborCancellationReasonList
 */
const de_CancellationReasonList = (output: any, context: __SerdeContext): CancellationReason[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CancellationReason(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborCapacity
 */
const de_Capacity = (output: any, context: __SerdeContext): Capacity => {
  return take(output, {
    CapacityUnits: __limitedParseDouble,
    ReadCapacityUnits: __limitedParseDouble,
    WriteCapacityUnits: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeRpcv2cborConditionalCheckFailedException
 */
const de_ConditionalCheckFailedException = (output: any, context: __SerdeContext): ConditionalCheckFailedException => {
  return take(output, {
    Item: (_: any) => de_AttributeMap(_, context),
    message: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborConsumedCapacity
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
 * deserializeRpcv2cborConsumedCapacityMultiple
 */
const de_ConsumedCapacityMultiple = (output: any, context: __SerdeContext): ConsumedCapacity[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConsumedCapacity(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborContinuousBackupsDescription
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
 * deserializeRpcv2cborCreateBackupOutput
 */
const de_CreateBackupOutput = (output: any, context: __SerdeContext): CreateBackupOutput => {
  return take(output, {
    BackupDetails: (_: any) => de_BackupDetails(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborCreateGlobalTableOutput
 */
const de_CreateGlobalTableOutput = (output: any, context: __SerdeContext): CreateGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborCreateTableOutput
 */
const de_CreateTableOutput = (output: any, context: __SerdeContext): CreateTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

// de_CsvHeaderList omitted.

// de_CsvOptions omitted.

/**
 * deserializeRpcv2cborDeleteBackupOutput
 */
const de_DeleteBackupOutput = (output: any, context: __SerdeContext): DeleteBackupOutput => {
  return take(output, {
    BackupDescription: (_: any) => de_BackupDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDeleteItemOutput
 */
const de_DeleteItemOutput = (output: any, context: __SerdeContext): DeleteItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDeleteRequest
 */
const de_DeleteRequest = (output: any, context: __SerdeContext): DeleteRequest => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_DeleteResourcePolicyOutput omitted.

/**
 * deserializeRpcv2cborDeleteTableOutput
 */
const de_DeleteTableOutput = (output: any, context: __SerdeContext): DeleteTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeBackupOutput
 */
const de_DescribeBackupOutput = (output: any, context: __SerdeContext): DescribeBackupOutput => {
  return take(output, {
    BackupDescription: (_: any) => de_BackupDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeContinuousBackupsOutput
 */
const de_DescribeContinuousBackupsOutput = (output: any, context: __SerdeContext): DescribeContinuousBackupsOutput => {
  return take(output, {
    ContinuousBackupsDescription: (_: any) => de_ContinuousBackupsDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeContributorInsightsOutput
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
    LastUpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableName: __expectString,
  }) as any;
};

// de_DescribeEndpointsResponse omitted.

/**
 * deserializeRpcv2cborDescribeExportOutput
 */
const de_DescribeExportOutput = (output: any, context: __SerdeContext): DescribeExportOutput => {
  return take(output, {
    ExportDescription: (_: any) => de_ExportDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeGlobalTableOutput
 */
const de_DescribeGlobalTableOutput = (output: any, context: __SerdeContext): DescribeGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeGlobalTableSettingsOutput
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
 * deserializeRpcv2cborDescribeImportOutput
 */
const de_DescribeImportOutput = (output: any, context: __SerdeContext): DescribeImportOutput => {
  return take(output, {
    ImportTableDescription: (_: any) => de_ImportTableDescription(_, context),
  }) as any;
};

// de_DescribeKinesisStreamingDestinationOutput omitted.

// de_DescribeLimitsOutput omitted.

/**
 * deserializeRpcv2cborDescribeTableOutput
 */
const de_DescribeTableOutput = (output: any, context: __SerdeContext): DescribeTableOutput => {
  return take(output, {
    Table: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeTableReplicaAutoScalingOutput
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

// de_EnableKinesisStreamingConfiguration omitted.

// de_Endpoint omitted.

// de_Endpoints omitted.

/**
 * deserializeRpcv2cborExecuteStatementOutput
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
 * deserializeRpcv2cborExecuteTransactionOutput
 */
const de_ExecuteTransactionOutput = (output: any, context: __SerdeContext): ExecuteTransactionOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_ItemResponseList(_, context),
  }) as any;
};

// de_ExportConflictException omitted.

/**
 * deserializeRpcv2cborExportDescription
 */
const de_ExportDescription = (output: any, context: __SerdeContext): ExportDescription => {
  return take(output, {
    BilledSizeBytes: __expectLong,
    ClientToken: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ExportArn: __expectString,
    ExportFormat: __expectString,
    ExportManifest: __expectString,
    ExportStatus: __expectString,
    ExportTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableArn: __expectString,
    TableId: __expectString,
  }) as any;
};

// de_ExportNotFoundException omitted.

// de_ExportSummaries omitted.

// de_ExportSummary omitted.

/**
 * deserializeRpcv2cborExportTableToPointInTimeOutput
 */
const de_ExportTableToPointInTimeOutput = (output: any, context: __SerdeContext): ExportTableToPointInTimeOutput => {
  return take(output, {
    ExportDescription: (_: any) => de_ExportDescription(_, context),
  }) as any;
};

// de_ExpressionAttributeNameMap omitted.

// de_FailureException omitted.

/**
 * deserializeRpcv2cborGetItemOutput
 */
const de_GetItemOutput = (output: any, context: __SerdeContext): GetItemOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    Item: (_: any) => de_AttributeMap(_, context),
  }) as any;
};

// de_GetResourcePolicyOutput omitted.

// de_GlobalSecondaryIndex omitted.

/**
 * deserializeRpcv2cborGlobalSecondaryIndexDescription
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
    OnDemandThroughput: _json,
    Projection: _json,
    ProvisionedThroughput: (_: any) => de_ProvisionedThroughputDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborGlobalSecondaryIndexDescriptionList
 */
const de_GlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalSecondaryIndexDescription(entry, context);
    });
  return collection;
};

// de_GlobalSecondaryIndexes omitted.

// de_GlobalSecondaryIndexInfo omitted.

// de_GlobalSecondaryIndexList omitted.

// de_GlobalTable omitted.

// de_GlobalTableAlreadyExistsException omitted.

/**
 * deserializeRpcv2cborGlobalTableDescription
 */
const de_GlobalTableDescription = (output: any, context: __SerdeContext): GlobalTableDescription => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
 * deserializeRpcv2cborImportSummary
 */
const de_ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return take(output, {
    CloudWatchLogGroupArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ImportArn: __expectString,
    ImportStatus: __expectString,
    InputFormat: __expectString,
    S3BucketSource: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableArn: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborImportSummaryList
 */
const de_ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportSummary(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborImportTableDescription
 */
const de_ImportTableDescription = (output: any, context: __SerdeContext): ImportTableDescription => {
  return take(output, {
    ClientToken: __expectString,
    CloudWatchLogGroupArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableArn: __expectString,
    TableCreationParameters: _json,
    TableId: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborImportTableOutput
 */
const de_ImportTableOutput = (output: any, context: __SerdeContext): ImportTableOutput => {
  return take(output, {
    ImportTableDescription: (_: any) => de_ImportTableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborIncrementalExportSpecification
 */
const de_IncrementalExportSpecification = (output: any, context: __SerdeContext): IncrementalExportSpecification => {
  return take(output, {
    ExportFromTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ExportToTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
 * deserializeRpcv2cborItemCollectionKeyAttributeMap
 */
const de_ItemCollectionKeyAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    }
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeRpcv2cborItemCollectionMetrics
 */
const de_ItemCollectionMetrics = (output: any, context: __SerdeContext): ItemCollectionMetrics => {
  return take(output, {
    ItemCollectionKey: (_: any) => de_ItemCollectionKeyAttributeMap(_, context),
    SizeEstimateRangeGB: (_: any) => de_ItemCollectionSizeEstimateRange(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborItemCollectionMetricsMultiple
 */
const de_ItemCollectionMetricsMultiple = (output: any, context: __SerdeContext): ItemCollectionMetrics[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ItemCollectionMetrics(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborItemCollectionMetricsPerTable
 */
const de_ItemCollectionMetricsPerTable = (
  output: any,
  context: __SerdeContext
): Record<string, ItemCollectionMetrics[]> => {
  return Object.entries(output).reduce((acc: Record<string, ItemCollectionMetrics[]>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_ItemCollectionMetricsMultiple(value, context);
    }
    return acc;
  }, {} as Record<string, ItemCollectionMetrics[]>);
};

/**
 * deserializeRpcv2cborItemCollectionSizeEstimateRange
 */
const de_ItemCollectionSizeEstimateRange = (output: any, context: __SerdeContext): number[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return collection;
};

// de_ItemCollectionSizeLimitExceededException omitted.

/**
 * deserializeRpcv2cborItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeMap(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborItemResponse
 */
const de_ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return take(output, {
    Item: (_: any) => de_AttributeMap(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborItemResponseList
 */
const de_ItemResponseList = (output: any, context: __SerdeContext): ItemResponse[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ItemResponse(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborKey
 */
const de_Key = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    }
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeRpcv2cborKeyList
 */
const de_KeyList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Key(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborKeysAndAttributes
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
 * deserializeRpcv2cborListAttributeValue
 */
const de_ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeValue(__expectUnion(entry), context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborListBackupsOutput
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
 * deserializeRpcv2cborListImportsOutput
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
 * deserializeRpcv2cborMapAttributeValue
 */
const de_MapAttributeValue = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    }
    return acc;
  }, {} as Record<string, AttributeValue>);
};

// de_NonKeyAttributeNameList omitted.

// de_NumberSetAttributeValue omitted.

// de_OnDemandThroughput omitted.

// de_OnDemandThroughputOverride omitted.

/**
 * deserializeRpcv2cborPartiQLBatchResponse
 */
const de_PartiQLBatchResponse = (output: any, context: __SerdeContext): BatchStatementResponse[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchStatementResponse(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborPointInTimeRecoveryDescription
 */
const de_PointInTimeRecoveryDescription = (output: any, context: __SerdeContext): PointInTimeRecoveryDescription => {
  return take(output, {
    EarliestRestorableDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LatestRestorableDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    PointInTimeRecoveryStatus: __expectString,
  }) as any;
};

// de_PointInTimeRecoveryUnavailableException omitted.

// de_PolicyNotFoundException omitted.

// de_Projection omitted.

// de_ProvisionedThroughput omitted.

/**
 * deserializeRpcv2cborProvisionedThroughputDescription
 */
const de_ProvisionedThroughputDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputDescription => {
  return take(output, {
    LastDecreaseDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LastIncreaseDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    NumberOfDecreasesToday: __expectLong,
    ReadCapacityUnits: __expectLong,
    WriteCapacityUnits: __expectLong,
  }) as any;
};

// de_ProvisionedThroughputExceededException omitted.

// de_ProvisionedThroughputOverride omitted.

/**
 * deserializeRpcv2cborPutItemInputAttributeMap
 */
const de_PutItemInputAttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    }
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeRpcv2cborPutItemOutput
 */
const de_PutItemOutput = (output: any, context: __SerdeContext): PutItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborPutRequest
 */
const de_PutRequest = (output: any, context: __SerdeContext): PutRequest => {
  return take(output, {
    Item: (_: any) => de_PutItemInputAttributeMap(_, context),
  }) as any;
};

// de_PutResourcePolicyOutput omitted.

/**
 * deserializeRpcv2cborQueryOutput
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
 * deserializeRpcv2cborReplicaAutoScalingDescription
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
 * deserializeRpcv2cborReplicaAutoScalingDescriptionList
 */
const de_ReplicaAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaAutoScalingDescription(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborReplicaDescription
 */
const de_ReplicaDescription = (output: any, context: __SerdeContext): ReplicaDescription => {
  return take(output, {
    GlobalSecondaryIndexes: _json,
    KMSMasterKeyId: __expectString,
    OnDemandThroughputOverride: _json,
    ProvisionedThroughputOverride: _json,
    RegionName: __expectString,
    ReplicaInaccessibleDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ReplicaStatus: __expectString,
    ReplicaStatusDescription: __expectString,
    ReplicaStatusPercentProgress: __expectString,
    ReplicaTableClassSummary: (_: any) => de_TableClassSummary(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborReplicaDescriptionList
 */
const de_ReplicaDescriptionList = (output: any, context: __SerdeContext): ReplicaDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaDescription(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborReplicaGlobalSecondaryIndexAutoScalingDescription
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
 * deserializeRpcv2cborReplicaGlobalSecondaryIndexAutoScalingDescriptionList
 */
const de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
  return collection;
};

// de_ReplicaGlobalSecondaryIndexDescription omitted.

// de_ReplicaGlobalSecondaryIndexDescriptionList omitted.

/**
 * deserializeRpcv2cborReplicaGlobalSecondaryIndexSettingsDescription
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
 * deserializeRpcv2cborReplicaGlobalSecondaryIndexSettingsDescriptionList
 */
const de_ReplicaGlobalSecondaryIndexSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
  return collection;
};

// de_ReplicaList omitted.

// de_ReplicaNotFoundException omitted.

/**
 * deserializeRpcv2cborReplicaSettingsDescription
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
 * deserializeRpcv2cborReplicaSettingsDescriptionList
 */
const de_ReplicaSettingsDescriptionList = (output: any, context: __SerdeContext): ReplicaSettingsDescription[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaSettingsDescription(entry, context);
    });
  return collection;
};

// de_RequestLimitExceeded omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeRpcv2cborRestoreSummary
 */
const de_RestoreSummary = (output: any, context: __SerdeContext): RestoreSummary => {
  return take(output, {
    RestoreDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    RestoreInProgress: __expectBoolean,
    SourceBackupArn: __expectString,
    SourceTableArn: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborRestoreTableFromBackupOutput
 */
const de_RestoreTableFromBackupOutput = (output: any, context: __SerdeContext): RestoreTableFromBackupOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborRestoreTableToPointInTimeOutput
 */
const de_RestoreTableToPointInTimeOutput = (output: any, context: __SerdeContext): RestoreTableToPointInTimeOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

// de_S3BucketSource omitted.

/**
 * deserializeRpcv2cborScanOutput
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
 * deserializeRpcv2cborSecondaryIndexesCapacityMap
 */
const de_SecondaryIndexesCapacityMap = (output: any, context: __SerdeContext): Record<string, Capacity> => {
  return Object.entries(output).reduce((acc: Record<string, Capacity>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = de_Capacity(value, context);
    }
    return acc;
  }, {} as Record<string, Capacity>);
};

/**
 * deserializeRpcv2cborSourceTableDetails
 */
const de_SourceTableDetails = (output: any, context: __SerdeContext): SourceTableDetails => {
  return take(output, {
    BillingMode: __expectString,
    ItemCount: __expectLong,
    KeySchema: _json,
    OnDemandThroughput: _json,
    ProvisionedThroughput: _json,
    TableArn: __expectString,
    TableCreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableId: __expectString,
    TableName: __expectString,
    TableSizeBytes: __expectLong,
  }) as any;
};

/**
 * deserializeRpcv2cborSourceTableFeatureDetails
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
 * deserializeRpcv2cborSSEDescription
 */
const de_SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
  return take(output, {
    InaccessibleEncryptionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
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
 * deserializeRpcv2cborTableAutoScalingDescription
 */
const de_TableAutoScalingDescription = (output: any, context: __SerdeContext): TableAutoScalingDescription => {
  return take(output, {
    Replicas: (_: any) => de_ReplicaAutoScalingDescriptionList(_, context),
    TableName: __expectString,
    TableStatus: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborTableClassSummary
 */
const de_TableClassSummary = (output: any, context: __SerdeContext): TableClassSummary => {
  return take(output, {
    LastUpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    TableClass: __expectString,
  }) as any;
};

// de_TableCreationParameters omitted.

/**
 * deserializeRpcv2cborTableDescription
 */
const de_TableDescription = (output: any, context: __SerdeContext): TableDescription => {
  return take(output, {
    ArchivalSummary: (_: any) => de_ArchivalSummary(_, context),
    AttributeDefinitions: _json,
    BillingModeSummary: (_: any) => de_BillingModeSummary(_, context),
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    DeletionProtectionEnabled: __expectBoolean,
    GlobalSecondaryIndexes: (_: any) => de_GlobalSecondaryIndexDescriptionList(_, context),
    GlobalTableVersion: __expectString,
    ItemCount: __expectLong,
    KeySchema: _json,
    LatestStreamArn: __expectString,
    LatestStreamLabel: __expectString,
    LocalSecondaryIndexes: _json,
    OnDemandThroughput: _json,
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
 * deserializeRpcv2cborTransactGetItemsOutput
 */
const de_TransactGetItemsOutput = (output: any, context: __SerdeContext): TransactGetItemsOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    Responses: (_: any) => de_ItemResponseList(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborTransactionCanceledException
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
 * deserializeRpcv2cborTransactWriteItemsOutput
 */
const de_TransactWriteItemsOutput = (output: any, context: __SerdeContext): TransactWriteItemsOutput => {
  return take(output, {
    ConsumedCapacity: (_: any) => de_ConsumedCapacityMultiple(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetricsPerTable(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborUpdateContinuousBackupsOutput
 */
const de_UpdateContinuousBackupsOutput = (output: any, context: __SerdeContext): UpdateContinuousBackupsOutput => {
  return take(output, {
    ContinuousBackupsDescription: (_: any) => de_ContinuousBackupsDescription(_, context),
  }) as any;
};

// de_UpdateContributorInsightsOutput omitted.

/**
 * deserializeRpcv2cborUpdateGlobalTableOutput
 */
const de_UpdateGlobalTableOutput = (output: any, context: __SerdeContext): UpdateGlobalTableOutput => {
  return take(output, {
    GlobalTableDescription: (_: any) => de_GlobalTableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborUpdateGlobalTableSettingsOutput
 */
const de_UpdateGlobalTableSettingsOutput = (output: any, context: __SerdeContext): UpdateGlobalTableSettingsOutput => {
  return take(output, {
    GlobalTableName: __expectString,
    ReplicaSettings: (_: any) => de_ReplicaSettingsDescriptionList(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborUpdateItemOutput
 */
const de_UpdateItemOutput = (output: any, context: __SerdeContext): UpdateItemOutput => {
  return take(output, {
    Attributes: (_: any) => de_AttributeMap(_, context),
    ConsumedCapacity: (_: any) => de_ConsumedCapacity(_, context),
    ItemCollectionMetrics: (_: any) => de_ItemCollectionMetrics(_, context),
  }) as any;
};

// de_UpdateKinesisStreamingConfiguration omitted.

// de_UpdateKinesisStreamingDestinationOutput omitted.

/**
 * deserializeRpcv2cborUpdateTableOutput
 */
const de_UpdateTableOutput = (output: any, context: __SerdeContext): UpdateTableOutput => {
  return take(output, {
    TableDescription: (_: any) => de_TableDescription(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborUpdateTableReplicaAutoScalingOutput
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
 * deserializeRpcv2cborWriteRequest
 */
const de_WriteRequest = (output: any, context: __SerdeContext): WriteRequest => {
  return take(output, {
    DeleteRequest: (_: any) => de_DeleteRequest(_, context),
    PutRequest: (_: any) => de_PutRequest(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborWriteRequests
 */
const de_WriteRequests = (output: any, context: __SerdeContext): WriteRequest[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WriteRequest(entry, context);
    });
  return collection;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
    try {
      contents.headers["content-length"] = calculateBodyLength(body);
    } catch (e) {}
  }
  return new __HttpRequest(contents);
};
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/cbor",
  "smithy-protocol": "rpc-v2-cbor",
};
