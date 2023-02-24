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

export const serializeAws_json1_0BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.BatchExecuteStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchGetItemCommand = async (
  input: BatchGetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.BatchGetItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchWriteItemCommand = async (
  input: BatchWriteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.BatchWriteItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchWriteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.CreateBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateGlobalTableCommand = async (
  input: CreateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.CreateGlobalTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.CreateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteItemCommand = async (
  input: DeleteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DeleteItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeBackupCommand = async (
  input: DescribeBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeContinuousBackupsCommand = async (
  input: DescribeContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeContinuousBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeContinuousBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeContributorInsightsCommand = async (
  input: DescribeContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeContributorInsights",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeExportCommand = async (
  input: DescribeExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeExportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeGlobalTableCommand = async (
  input: DescribeGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeGlobalTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeGlobalTableSettingsCommand = async (
  input: DescribeGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeGlobalTableSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeImportCommand = async (
  input: DescribeImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeImport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeImportInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (
  input: DescribeKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeKinesisStreamingDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeKinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeLimitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (
  input: DescribeTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeTableReplicaAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTimeToLiveCommand = async (
  input: DescribeTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DescribeTimeToLive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeTimeToLiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (
  input: DisableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.DisableKinesisStreamingDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (
  input: EnableKinesisStreamingDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.EnableKinesisStreamingDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ExecuteStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExecuteTransactionCommand = async (
  input: ExecuteTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ExecuteTransaction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExecuteTransactionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExportTableToPointInTimeCommand = async (
  input: ExportTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ExportTableToPointInTime",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExportTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetItemCommand = async (
  input: GetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.GetItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ImportTableCommand = async (
  input: ImportTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ImportTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ImportTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListBackupsCommand = async (
  input: ListBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListContributorInsightsCommand = async (
  input: ListContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListContributorInsights",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListExports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListExportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListGlobalTablesCommand = async (
  input: ListGlobalTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListGlobalTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListGlobalTablesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListImports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListImportsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsOfResourceCommand = async (
  input: ListTagsOfResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.ListTagsOfResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsOfResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutItemCommand = async (
  input: PutItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.PutItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.Query",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RestoreTableFromBackupCommand = async (
  input: RestoreTableFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.RestoreTableFromBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RestoreTableFromBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RestoreTableToPointInTimeCommand = async (
  input: RestoreTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.RestoreTableToPointInTime",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RestoreTableToPointInTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ScanCommand = async (
  input: ScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.Scan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TransactGetItemsCommand = async (
  input: TransactGetItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.TransactGetItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TransactGetItemsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TransactWriteItemsCommand = async (
  input: TransactWriteItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.TransactWriteItems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TransactWriteItemsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateContinuousBackupsCommand = async (
  input: UpdateContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateContinuousBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateContinuousBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateContributorInsightsCommand = async (
  input: UpdateContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateContributorInsights",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateContributorInsightsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGlobalTableCommand = async (
  input: UpdateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateGlobalTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGlobalTableSettingsCommand = async (
  input: UpdateGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateGlobalTableSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateItemCommand = async (
  input: UpdateItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateItem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (
  input: UpdateTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateTableReplicaAutoScaling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTimeToLiveCommand = async (
  input: UpdateTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDB_20120810.UpdateTimeToLive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTimeToLiveInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchExecuteStatementOutput(data, context);
  const response: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchExecuteStatementCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_0BatchGetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchGetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
  const response: BatchGetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchGetItemCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0BatchWriteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchWriteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
  const response: BatchWriteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchWriteItemCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateBackupOutput(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateBackupCommandError = async (
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
      throw await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context);
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      throw await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
  const response: CreateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateGlobalTableCommandError = async (
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
      throw await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateTableOutput(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateTableCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteBackupCommandError = async (
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
      throw await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteItemOutput(data, context);
  const response: DeleteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteItemCommandError = async (
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
      throw await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteTableOutput(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteTableCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
  const response: DescribeBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeBackupCommandError = async (
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
      throw await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(data, context);
  const response: DescribeContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeContinuousBackupsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeContributorInsightsOutput(data, context);
  const response: DescribeContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeContributorInsightsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeEndpointsCommandError = async (
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

export const deserializeAws_json1_0DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeExportOutput(data, context);
  const response: DescribeExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeExportCommandError = async (
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
      throw await deserializeAws_json1_0ExportNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
  const response: DescribeGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeGlobalTableCommandError = async (
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
      throw await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(data, context);
  const response: DescribeGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeGlobalTableSettingsCommandError = async (
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
      throw await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeImportOutput(data, context);
  const response: DescribeImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeImportCommandError = async (
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
      throw await deserializeAws_json1_0ImportNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput(data, context);
  const response: DescribeKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeLimitsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTableOutput(data, context);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTableCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(data, context);
  const response: DescribeTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
  const response: DescribeTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTimeToLiveCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
  const response: DisableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
  const response: EnableKinesisStreamingDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExecuteStatementOutput(data, context);
  const response: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExecuteStatementCommandError = async (
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
      throw await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context);
    case "DuplicateItemException":
    case "com.amazonaws.dynamodb#DuplicateItemException":
      throw await deserializeAws_json1_0DuplicateItemExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ExecuteTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteTransactionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExecuteTransactionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExecuteTransactionOutput(data, context);
  const response: ExecuteTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExecuteTransactionCommandError = async (
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
      throw await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ExportTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExportTableToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExportTableToPointInTimeOutput(data, context);
  const response: ExportTableToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExportTableToPointInTimeCommandError = async (
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
      throw await deserializeAws_json1_0ExportConflictExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidExportTimeException":
    case "com.amazonaws.dynamodb#InvalidExportTimeException":
      throw await deserializeAws_json1_0InvalidExportTimeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetItemOutput(data, context);
  const response: GetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetItemCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ImportTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ImportTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ImportTableOutput(data, context);
  const response: ImportTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ImportTableCommandError = async (
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
      throw await deserializeAws_json1_0ImportConflictExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListBackupsOutput(data, context);
  const response: ListBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListBackupsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
  const response: ListContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListContributorInsightsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListExportsOutput(data, context);
  const response: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListExportsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListGlobalTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListGlobalTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
  const response: ListGlobalTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListGlobalTablesCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListImportsOutput(data, context);
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListImportsCommandError = async (
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
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTablesOutput(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTablesCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsOfResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsOfResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
  const response: ListTagsOfResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsOfResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutItemOutput(data, context);
  const response: PutItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutItemCommandError = async (
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
      throw await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0QueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0QueryOutput(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0QueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RestoreTableFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
  const response: RestoreTableFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RestoreTableFromBackupCommandError = async (
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
      throw await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context);
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      throw await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RestoreTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(data, context);
  const response: RestoreTableToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RestoreTableToPointInTimeCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      throw await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      throw await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context);
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      throw await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context);
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      throw await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ScanOutput(data, context);
  const response: ScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TransactGetItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TransactGetItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
  const response: TransactGetItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TransactGetItemsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TransactWriteItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TransactWriteItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
  const response: TransactWriteItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TransactWriteItemsCommandError = async (
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
      throw await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      throw await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      throw await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
  const response: UpdateContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateContinuousBackupsCommandError = async (
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
      throw await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateContributorInsightsOutput(data, context);
  const response: UpdateContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateContributorInsightsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
  const response: UpdateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGlobalTableCommandError = async (
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
      throw await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      throw await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context);
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      throw await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(data, context);
  const response: UpdateGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGlobalTableSettingsCommandError = async (
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
      throw await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context);
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      throw await deserializeAws_json1_0IndexNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      throw await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateItemOutput(data, context);
  const response: UpdateItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateItemCommandError = async (
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
      throw await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      throw await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      throw await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      throw await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTableOutput(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTableCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(data, context);
  const response: UpdateTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
  const response: UpdateTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTimeToLiveCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      throw await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0BackupInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BackupInUseException(body, context);
  const exception = new BackupInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0BackupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BackupNotFoundException(body, context);
  const exception = new BackupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionalCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConditionalCheckFailedException(body, context);
  const exception = new ConditionalCheckFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContinuousBackupsUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ContinuousBackupsUnavailableException(body, context);
  const exception = new ContinuousBackupsUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0DuplicateItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DuplicateItemException(body, context);
  const exception = new DuplicateItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ExportConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExportConflictException(body, context);
  const exception = new ExportConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ExportNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExportNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExportNotFoundException(body, context);
  const exception = new ExportNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0GlobalTableAlreadyExistsException(body, context);
  const exception = new GlobalTableAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0GlobalTableNotFoundException(body, context);
  const exception = new GlobalTableNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ImportConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImportConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ImportConflictException(body, context);
  const exception = new ImportConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ImportNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImportNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ImportNotFoundException(body, context);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0IndexNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0IndexNotFoundException(body, context);
  const exception = new IndexNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidEndpointException(body, context);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidExportTimeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportTimeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidExportTimeException(body, context);
  const exception = new InvalidExportTimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreTimeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRestoreTimeException(body, context);
  const exception = new InvalidRestoreTimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemCollectionSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(body, context);
  const exception = new ItemCollectionSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PointInTimeRecoveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(body, context);
  const exception = new PointInTimeRecoveryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ReplicaAlreadyExistsException(body, context);
  const exception = new ReplicaAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ReplicaNotFoundException(body, context);
  const exception = new ReplicaNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0RequestLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RequestLimitExceeded(body, context);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableAlreadyExistsException(body, context);
  const exception = new TableAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TableInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableInUseException(body, context);
  const exception = new TableInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TableNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableNotFoundException(body, context);
  const exception = new TableNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TransactionCanceledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionCanceledException(body, context);
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TransactionConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionConflictException(body, context);
  const exception = new TransactionConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TransactionInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionInProgressException(body, context);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AttributeDefinition = (input: AttributeDefinition, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
  };
};

const serializeAws_json1_0AttributeDefinitions = (input: AttributeDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0AttributeDefinition(entry, context);
    });
};

const serializeAws_json1_0AttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0AttributeUpdates = (
  input: Record<string, AttributeValueUpdate>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0AttributeValueUpdate(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return AttributeValue.visit(input, {
    B: (value) => ({ B: context.base64Encoder(value) }),
    BOOL: (value) => ({ BOOL: value }),
    BS: (value) => ({ BS: serializeAws_json1_0BinarySetAttributeValue(value, context) }),
    L: (value) => ({ L: serializeAws_json1_0ListAttributeValue(value, context) }),
    M: (value) => ({ M: serializeAws_json1_0MapAttributeValue(value, context) }),
    N: (value) => ({ N: value }),
    NS: (value) => ({ NS: serializeAws_json1_0NumberSetAttributeValue(value, context) }),
    NULL: (value) => ({ NULL: value }),
    S: (value) => ({ S: value }),
    SS: (value) => ({ SS: serializeAws_json1_0StringSetAttributeValue(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0AttributeValueList = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0AttributeValue(entry, context);
    });
};

const serializeAws_json1_0AttributeValueUpdate = (input: AttributeValueUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Value != null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_0AutoScalingPolicyUpdate = (input: AutoScalingPolicyUpdate, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.TargetTrackingScalingPolicyConfiguration != null && {
      TargetTrackingScalingPolicyConfiguration:
        serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(
          input.TargetTrackingScalingPolicyConfiguration,
          context
        ),
    }),
  };
};

const serializeAws_json1_0AutoScalingSettingsUpdate = (
  input: AutoScalingSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingDisabled != null && { AutoScalingDisabled: input.AutoScalingDisabled }),
    ...(input.AutoScalingRoleArn != null && { AutoScalingRoleArn: input.AutoScalingRoleArn }),
    ...(input.MaximumUnits != null && { MaximumUnits: input.MaximumUnits }),
    ...(input.MinimumUnits != null && { MinimumUnits: input.MinimumUnits }),
    ...(input.ScalingPolicyUpdate != null && {
      ScalingPolicyUpdate: serializeAws_json1_0AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context),
    }),
  };
};

const serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (
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

const serializeAws_json1_0BatchExecuteStatementInput = (
  input: BatchExecuteStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.Statements != null && { Statements: serializeAws_json1_0PartiQLBatchRequest(input.Statements, context) }),
  };
};

const serializeAws_json1_0BatchGetItemInput = (input: BatchGetItemInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestItems != null && {
      RequestItems: serializeAws_json1_0BatchGetRequestMap(input.RequestItems, context),
    }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
  };
};

const serializeAws_json1_0BatchGetRequestMap = (
  input: Record<string, KeysAndAttributes>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0KeysAndAttributes(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0BatchStatementRequest = (input: BatchStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

const serializeAws_json1_0BatchWriteItemInput = (input: BatchWriteItemInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestItems != null && {
      RequestItems: serializeAws_json1_0BatchWriteItemRequestMap(input.RequestItems, context),
    }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
  };
};

const serializeAws_json1_0BatchWriteItemRequestMap = (
  input: Record<string, WriteRequest[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0WriteRequests(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0BinarySetAttributeValue = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

const serializeAws_json1_0Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.AttributeValueList != null && {
      AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
    }),
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
  };
};

const serializeAws_json1_0ConditionCheck = (input: ConditionCheck, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0CreateBackupInput = (input: CreateBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupName != null && { BackupName: input.BackupName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0CreateGlobalSecondaryIndexAction = (
  input: CreateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

const serializeAws_json1_0CreateGlobalTableInput = (input: CreateGlobalTableInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.ReplicationGroup != null && {
      ReplicationGroup: serializeAws_json1_0ReplicaList(input.ReplicationGroup, context),
    }),
  };
};

const serializeAws_json1_0CreateReplicaAction = (input: CreateReplicaAction, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_0CreateReplicationGroupMemberAction = (
  input: CreateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      ),
    }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.TableClassOverride != null && { TableClassOverride: input.TableClassOverride }),
  };
};

const serializeAws_json1_0CreateTableInput = (input: CreateTableInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KeySchema != null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
    ...(input.LocalSecondaryIndexes != null && {
      LocalSecondaryIndexes: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexes, context),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.SSESpecification != null && {
      SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
    }),
    ...(input.StreamSpecification != null && {
      StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
    }),
    ...(input.TableClass != null && { TableClass: input.TableClass }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CsvHeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0CsvOptions = (input: CsvOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.HeaderList != null && { HeaderList: serializeAws_json1_0CsvHeaderList(input.HeaderList, context) }),
  };
};

const serializeAws_json1_0Delete = (input: Delete, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DeleteBackupInput = (input: DeleteBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
  };
};

const serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (
  input: DeleteGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
  };
};

const serializeAws_json1_0DeleteItemInput = (input: DeleteItemInput, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DeleteReplicaAction = (input: DeleteReplicaAction, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_0DeleteReplicationGroupMemberAction = (
  input: DeleteReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_0DeleteRequest = (input: DeleteRequest, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
  };
};

const serializeAws_json1_0DeleteTableInput = (input: DeleteTableInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeBackupInput = (input: DescribeBackupInput, context: __SerdeContext): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
  };
};

const serializeAws_json1_0DescribeContinuousBackupsInput = (
  input: DescribeContinuousBackupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeContributorInsightsInput = (
  input: DescribeContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeEndpointsRequest = (
  input: DescribeEndpointsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DescribeExportInput = (input: DescribeExportInput, context: __SerdeContext): any => {
  return {
    ...(input.ExportArn != null && { ExportArn: input.ExportArn }),
  };
};

const serializeAws_json1_0DescribeGlobalTableInput = (
  input: DescribeGlobalTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
  };
};

const serializeAws_json1_0DescribeGlobalTableSettingsInput = (
  input: DescribeGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
  };
};

const serializeAws_json1_0DescribeImportInput = (input: DescribeImportInput, context: __SerdeContext): any => {
  return {
    ...(input.ImportArn != null && { ImportArn: input.ImportArn }),
  };
};

const serializeAws_json1_0DescribeKinesisStreamingDestinationInput = (
  input: DescribeKinesisStreamingDestinationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeLimitsInput = (input: DescribeLimitsInput, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0DescribeTableInput = (input: DescribeTableInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (
  input: DescribeTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0DescribeTimeToLiveInput = (input: DescribeTimeToLiveInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

const serializeAws_json1_0ExecuteTransactionInput = (input: ExecuteTransactionInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TransactStatements != null && {
      TransactStatements: serializeAws_json1_0ParameterizedStatements(input.TransactStatements, context),
    }),
  };
};

const serializeAws_json1_0ExpectedAttributeMap = (
  input: Record<string, ExpectedAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0ExpectedAttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0ExpectedAttributeValue = (input: ExpectedAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.AttributeValueList != null && {
      AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
    }),
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Exists != null && { Exists: input.Exists }),
    ...(input.Value != null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_0ExportTableToPointInTimeInput = (
  input: ExportTableToPointInTimeInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_0ExpressionAttributeNameMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_0ExpressionAttributeValueMap = (
  input: Record<string, AttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0AttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0FilterConditionMap = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0Condition(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0Get = (input: Get, context: __SerdeContext): any => {
  return {
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0GetItemInput = (input: GetItemInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0GlobalSecondaryIndex = (input: GlobalSecondaryIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (
  input: GlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate != null && {
      ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (
  input: GlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};

const serializeAws_json1_0GlobalSecondaryIndexList = (input: GlobalSecondaryIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0GlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_json1_0GlobalSecondaryIndexUpdate = (
  input: GlobalSecondaryIndexUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Create != null && {
      Create: serializeAws_json1_0CreateGlobalSecondaryIndexAction(input.Create, context),
    }),
    ...(input.Delete != null && {
      Delete: serializeAws_json1_0DeleteGlobalSecondaryIndexAction(input.Delete, context),
    }),
    ...(input.Update != null && {
      Update: serializeAws_json1_0UpdateGlobalSecondaryIndexAction(input.Update, context),
    }),
  };
};

const serializeAws_json1_0GlobalSecondaryIndexUpdateList = (
  input: GlobalSecondaryIndexUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context);
    });
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate != null && {
      ProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.ProvisionedWriteCapacityUnits != null && {
      ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits,
    }),
  };
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};

const serializeAws_json1_0ImportTableInput = (input: ImportTableInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InputCompressionType != null && { InputCompressionType: input.InputCompressionType }),
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.InputFormatOptions != null && {
      InputFormatOptions: serializeAws_json1_0InputFormatOptions(input.InputFormatOptions, context),
    }),
    ...(input.S3BucketSource != null && {
      S3BucketSource: serializeAws_json1_0S3BucketSource(input.S3BucketSource, context),
    }),
    ...(input.TableCreationParameters != null && {
      TableCreationParameters: serializeAws_json1_0TableCreationParameters(input.TableCreationParameters, context),
    }),
  };
};

const serializeAws_json1_0InputFormatOptions = (input: InputFormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv != null && { Csv: serializeAws_json1_0CsvOptions(input.Csv, context) }),
  };
};

const serializeAws_json1_0Key = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0AttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0KeyConditions = (input: Record<string, Condition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0Condition(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0KeyList = (input: Record<string, AttributeValue>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Key(entry, context);
    });
};

const serializeAws_json1_0KeysAndAttributes = (input: KeysAndAttributes, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.Keys != null && { Keys: serializeAws_json1_0KeyList(input.Keys, context) }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
  };
};

const serializeAws_json1_0KeySchema = (input: KeySchemaElement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0KeySchemaElement(entry, context);
    });
};

const serializeAws_json1_0KeySchemaElement = (input: KeySchemaElement, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.KeyType != null && { KeyType: input.KeyType }),
  };
};

const serializeAws_json1_0KinesisStreamingDestinationInput = (
  input: KinesisStreamingDestinationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0ListAttributeValue = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0AttributeValue(entry, context);
    });
};

const serializeAws_json1_0ListBackupsInput = (input: ListBackupsInput, context: __SerdeContext): any => {
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

const serializeAws_json1_0ListContributorInsightsInput = (
  input: ListContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0ListExportsInput = (input: ListExportsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  };
};

const serializeAws_json1_0ListGlobalTablesInput = (input: ListGlobalTablesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartGlobalTableName != null && {
      ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_0ListImportsInput = (input: ListImportsInput, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  };
};

const serializeAws_json1_0ListTablesInput = (input: ListTablesInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartTableName != null && { ExclusiveStartTableName: input.ExclusiveStartTableName }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

const serializeAws_json1_0ListTagsOfResourceInput = (input: ListTagsOfResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0LocalSecondaryIndex = (input: LocalSecondaryIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
    ...(input.Projection != null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }),
  };
};

const serializeAws_json1_0LocalSecondaryIndexList = (input: LocalSecondaryIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0LocalSecondaryIndex(entry, context);
    });
};

const serializeAws_json1_0MapAttributeValue = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0AttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0NonKeyAttributeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0NumberSetAttributeValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0ParameterizedStatement = (input: ParameterizedStatement, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    }),
    ...(input.Statement != null && { Statement: input.Statement }),
  };
};

const serializeAws_json1_0ParameterizedStatements = (input: ParameterizedStatement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ParameterizedStatement(entry, context);
    });
};

const serializeAws_json1_0PartiQLBatchRequest = (input: BatchStatementRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0BatchStatementRequest(entry, context);
    });
};

const serializeAws_json1_0PointInTimeRecoverySpecification = (
  input: PointInTimeRecoverySpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PointInTimeRecoveryEnabled != null && { PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled }),
  };
};

const serializeAws_json1_0PreparedStatementParameters = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0AttributeValue(entry, context);
    });
};

const serializeAws_json1_0Projection = (input: Projection, context: __SerdeContext): any => {
  return {
    ...(input.NonKeyAttributes != null && {
      NonKeyAttributes: serializeAws_json1_0NonKeyAttributeNameList(input.NonKeyAttributes, context),
    }),
    ...(input.ProjectionType != null && { ProjectionType: input.ProjectionType }),
  };
};

const serializeAws_json1_0ProvisionedThroughput = (input: ProvisionedThroughput, context: __SerdeContext): any => {
  return {
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
    ...(input.WriteCapacityUnits != null && { WriteCapacityUnits: input.WriteCapacityUnits }),
  };
};

const serializeAws_json1_0ProvisionedThroughputOverride = (
  input: ProvisionedThroughputOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
  };
};

const serializeAws_json1_0Put = (input: Put, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Item != null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0PutItemInput = (input: PutItemInput, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Item != null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0PutItemInputAttributeMap = (
  input: Record<string, AttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0AttributeValue(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0PutRequest = (input: PutRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item != null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }),
  };
};

const serializeAws_json1_0QueryInput = (input: QueryInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExclusiveStartKey != null && {
      ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
    }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeyConditionExpression != null && { KeyConditionExpression: input.KeyConditionExpression }),
    ...(input.KeyConditions != null && {
      KeyConditions: serializeAws_json1_0KeyConditions(input.KeyConditions, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.QueryFilter != null && {
      QueryFilter: serializeAws_json1_0FilterConditionMap(input.QueryFilter, context),
    }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ScanIndexForward != null && { ScanIndexForward: input.ScanIndexForward }),
    ...(input.Select != null && { Select: input.Select }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0Replica = (input: Replica, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_0ReplicaAutoScalingUpdate = (
  input: ReplicaAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexUpdates != null && {
      ReplicaGlobalSecondaryIndexUpdates: serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(
        input.ReplicaGlobalSecondaryIndexUpdates,
        context
      ),
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingUpdate != null && {
      ReplicaProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ReplicaProvisionedReadCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

const serializeAws_json1_0ReplicaAutoScalingUpdateList = (
  input: ReplicaAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context);
    });
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndex = (
  input: ReplicaGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingUpdate != null && {
      ProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingUpdate,
        context
      ),
    }),
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (
  input: ReplicaGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingSettingsUpdate != null && {
      ProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.ProvisionedReadCapacityUnits != null && {
      ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits,
    }),
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};

const serializeAws_json1_0ReplicaList = (input: Replica[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Replica(entry, context);
    });
};

const serializeAws_json1_0ReplicaSettingsUpdate = (input: ReplicaSettingsUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexSettingsUpdate != null && {
      ReplicaGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(
        input.ReplicaGlobalSecondaryIndexSettingsUpdate,
        context
      ),
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate != null && {
      ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
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

const serializeAws_json1_0ReplicaSettingsUpdateList = (
  input: ReplicaSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaSettingsUpdate(entry, context);
    });
};

const serializeAws_json1_0ReplicationGroupUpdate = (input: ReplicationGroupUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Create != null && {
      Create: serializeAws_json1_0CreateReplicationGroupMemberAction(input.Create, context),
    }),
    ...(input.Delete != null && {
      Delete: serializeAws_json1_0DeleteReplicationGroupMemberAction(input.Delete, context),
    }),
    ...(input.Update != null && {
      Update: serializeAws_json1_0UpdateReplicationGroupMemberAction(input.Update, context),
    }),
  };
};

const serializeAws_json1_0ReplicationGroupUpdateList = (
  input: ReplicationGroupUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicationGroupUpdate(entry, context);
    });
};

const serializeAws_json1_0ReplicaUpdate = (input: ReplicaUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Create != null && { Create: serializeAws_json1_0CreateReplicaAction(input.Create, context) }),
    ...(input.Delete != null && { Delete: serializeAws_json1_0DeleteReplicaAction(input.Delete, context) }),
  };
};

const serializeAws_json1_0ReplicaUpdateList = (input: ReplicaUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ReplicaUpdate(entry, context);
    });
};

const serializeAws_json1_0RestoreTableFromBackupInput = (
  input: RestoreTableFromBackupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupArn != null && { BackupArn: input.BackupArn }),
    ...(input.BillingModeOverride != null && { BillingModeOverride: input.BillingModeOverride }),
    ...(input.GlobalSecondaryIndexOverride != null && {
      GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(
        input.GlobalSecondaryIndexOverride,
        context
      ),
    }),
    ...(input.LocalSecondaryIndexOverride != null && {
      LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(
        input.LocalSecondaryIndexOverride,
        context
      ),
    }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
    ...(input.SSESpecificationOverride != null && {
      SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
    }),
    ...(input.TargetTableName != null && { TargetTableName: input.TargetTableName }),
  };
};

const serializeAws_json1_0RestoreTableToPointInTimeInput = (
  input: RestoreTableToPointInTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BillingModeOverride != null && { BillingModeOverride: input.BillingModeOverride }),
    ...(input.GlobalSecondaryIndexOverride != null && {
      GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(
        input.GlobalSecondaryIndexOverride,
        context
      ),
    }),
    ...(input.LocalSecondaryIndexOverride != null && {
      LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(
        input.LocalSecondaryIndexOverride,
        context
      ),
    }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
    ...(input.RestoreDateTime != null && { RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1000) }),
    ...(input.SSESpecificationOverride != null && {
      SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
    }),
    ...(input.SourceTableArn != null && { SourceTableArn: input.SourceTableArn }),
    ...(input.SourceTableName != null && { SourceTableName: input.SourceTableName }),
    ...(input.TargetTableName != null && { TargetTableName: input.TargetTableName }),
    ...(input.UseLatestRestorableTime != null && { UseLatestRestorableTime: input.UseLatestRestorableTime }),
  };
};

const serializeAws_json1_0S3BucketSource = (input: S3BucketSource, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3BucketOwner != null && { S3BucketOwner: input.S3BucketOwner }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_json1_0ScanInput = (input: ScanInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.ConsistentRead != null && { ConsistentRead: input.ConsistentRead }),
    ...(input.ExclusiveStartKey != null && {
      ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
    }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ProjectionExpression != null && { ProjectionExpression: input.ProjectionExpression }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ScanFilter != null && { ScanFilter: serializeAws_json1_0FilterConditionMap(input.ScanFilter, context) }),
    ...(input.Segment != null && { Segment: input.Segment }),
    ...(input.Select != null && { Select: input.Select }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TotalSegments != null && { TotalSegments: input.TotalSegments }),
  };
};

const serializeAws_json1_0SSESpecification = (input: SSESpecification, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.SSEType != null && { SSEType: input.SSEType }),
  };
};

const serializeAws_json1_0StreamSpecification = (input: StreamSpecification, context: __SerdeContext): any => {
  return {
    ...(input.StreamEnabled != null && { StreamEnabled: input.StreamEnabled }),
    ...(input.StreamViewType != null && { StreamViewType: input.StreamViewType }),
  };
};

const serializeAws_json1_0StringSetAttributeValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TableCreationParameters = (input: TableCreationParameters, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    }),
    ...(input.KeySchema != null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.SSESpecification != null && {
      SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0TimeToLiveSpecification = (input: TimeToLiveSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_json1_0TransactGetItem = (input: TransactGetItem, context: __SerdeContext): any => {
  return {
    ...(input.Get != null && { Get: serializeAws_json1_0Get(input.Get, context) }),
  };
};

const serializeAws_json1_0TransactGetItemList = (input: TransactGetItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0TransactGetItem(entry, context);
    });
};

const serializeAws_json1_0TransactGetItemsInput = (input: TransactGetItemsInput, context: __SerdeContext): any => {
  return {
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.TransactItems != null && {
      TransactItems: serializeAws_json1_0TransactGetItemList(input.TransactItems, context),
    }),
  };
};

const serializeAws_json1_0TransactWriteItem = (input: TransactWriteItem, context: __SerdeContext): any => {
  return {
    ...(input.ConditionCheck != null && {
      ConditionCheck: serializeAws_json1_0ConditionCheck(input.ConditionCheck, context),
    }),
    ...(input.Delete != null && { Delete: serializeAws_json1_0Delete(input.Delete, context) }),
    ...(input.Put != null && { Put: serializeAws_json1_0Put(input.Put, context) }),
    ...(input.Update != null && { Update: serializeAws_json1_0Update(input.Update, context) }),
  };
};

const serializeAws_json1_0TransactWriteItemList = (input: TransactWriteItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0TransactWriteItem(entry, context);
    });
};

const serializeAws_json1_0TransactWriteItemsInput = (input: TransactWriteItemsInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.TransactItems != null && {
      TransactItems: serializeAws_json1_0TransactWriteItemList(input.TransactItems, context),
    }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0Update = (input: Update, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ReturnValuesOnConditionCheckFailure != null && {
      ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.UpdateExpression != null && { UpdateExpression: input.UpdateExpression }),
  };
};

const serializeAws_json1_0UpdateContinuousBackupsInput = (
  input: UpdateContinuousBackupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PointInTimeRecoverySpecification != null && {
      PointInTimeRecoverySpecification: serializeAws_json1_0PointInTimeRecoverySpecification(
        input.PointInTimeRecoverySpecification,
        context
      ),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0UpdateContributorInsightsInput = (
  input: UpdateContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContributorInsightsAction != null && { ContributorInsightsAction: input.ContributorInsightsAction }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (
  input: UpdateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
  };
};

const serializeAws_json1_0UpdateGlobalTableInput = (input: UpdateGlobalTableInput, context: __SerdeContext): any => {
  return {
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.ReplicaUpdates != null && {
      ReplicaUpdates: serializeAws_json1_0ReplicaUpdateList(input.ReplicaUpdates, context),
    }),
  };
};

const serializeAws_json1_0UpdateGlobalTableSettingsInput = (
  input: UpdateGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableBillingMode != null && { GlobalTableBillingMode: input.GlobalTableBillingMode }),
    ...(input.GlobalTableGlobalSecondaryIndexSettingsUpdate != null && {
      GlobalTableGlobalSecondaryIndexSettingsUpdate:
        serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(
          input.GlobalTableGlobalSecondaryIndexSettingsUpdate,
          context
        ),
    }),
    ...(input.GlobalTableName != null && { GlobalTableName: input.GlobalTableName }),
    ...(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate != null && {
      GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      ),
    }),
    ...(input.GlobalTableProvisionedWriteCapacityUnits != null && {
      GlobalTableProvisionedWriteCapacityUnits: input.GlobalTableProvisionedWriteCapacityUnits,
    }),
    ...(input.ReplicaSettingsUpdate != null && {
      ReplicaSettingsUpdate: serializeAws_json1_0ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context),
    }),
  };
};

const serializeAws_json1_0UpdateItemInput = (input: UpdateItemInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeUpdates != null && {
      AttributeUpdates: serializeAws_json1_0AttributeUpdates(input.AttributeUpdates, context),
    }),
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
    ...(input.ConditionalOperator != null && { ConditionalOperator: input.ConditionalOperator }),
    ...(input.Expected != null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) }),
    ...(input.ExpressionAttributeNames != null && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    }),
    ...(input.ExpressionAttributeValues != null && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      ),
    }),
    ...(input.Key != null && { Key: serializeAws_json1_0Key(input.Key, context) }),
    ...(input.ReturnConsumedCapacity != null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }),
    ...(input.ReturnItemCollectionMetrics != null && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics,
    }),
    ...(input.ReturnValues != null && { ReturnValues: input.ReturnValues }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.UpdateExpression != null && { UpdateExpression: input.UpdateExpression }),
  };
};

const serializeAws_json1_0UpdateReplicationGroupMemberAction = (
  input: UpdateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      ),
    }),
    ...(input.KMSMasterKeyId != null && { KMSMasterKeyId: input.KMSMasterKeyId }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.TableClassOverride != null && { TableClassOverride: input.TableClassOverride }),
  };
};

const serializeAws_json1_0UpdateTableInput = (input: UpdateTableInput, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
    }),
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexUpdates != null && {
      GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexUpdateList(
        input.GlobalSecondaryIndexUpdates,
        context
      ),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.ReplicaUpdates != null && {
      ReplicaUpdates: serializeAws_json1_0ReplicationGroupUpdateList(input.ReplicaUpdates, context),
    }),
    ...(input.SSESpecification != null && {
      SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
    }),
    ...(input.StreamSpecification != null && {
      StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
    }),
    ...(input.TableClass != null && { TableClass: input.TableClass }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (
  input: UpdateTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexUpdates != null && {
      GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(
        input.GlobalSecondaryIndexUpdates,
        context
      ),
    }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate != null && {
      ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      ),
    }),
    ...(input.ReplicaUpdates != null && {
      ReplicaUpdates: serializeAws_json1_0ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_0UpdateTimeToLiveInput = (input: UpdateTimeToLiveInput, context: __SerdeContext): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TimeToLiveSpecification != null && {
      TimeToLiveSpecification: serializeAws_json1_0TimeToLiveSpecification(input.TimeToLiveSpecification, context),
    }),
  };
};

const serializeAws_json1_0WriteRequest = (input: WriteRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteRequest != null && {
      DeleteRequest: serializeAws_json1_0DeleteRequest(input.DeleteRequest, context),
    }),
    ...(input.PutRequest != null && { PutRequest: serializeAws_json1_0PutRequest(input.PutRequest, context) }),
  };
};

const serializeAws_json1_0WriteRequests = (input: WriteRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0WriteRequest(entry, context);
    });
};

const deserializeAws_json1_0ArchivalSummary = (output: any, context: __SerdeContext): ArchivalSummary => {
  return {
    ArchivalBackupArn: __expectString(output.ArchivalBackupArn),
    ArchivalDateTime:
      output.ArchivalDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ArchivalDateTime)))
        : undefined,
    ArchivalReason: __expectString(output.ArchivalReason),
  } as any;
};

const deserializeAws_json1_0AttributeDefinition = (output: any, context: __SerdeContext): AttributeDefinition => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

const deserializeAws_json1_0AttributeDefinitions = (output: any, context: __SerdeContext): AttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AttributeDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0AttributeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
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
      BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
    };
  }
  if (output.L != null) {
    return {
      L: deserializeAws_json1_0ListAttributeValue(output.L, context),
    };
  }
  if (output.M != null) {
    return {
      M: deserializeAws_json1_0MapAttributeValue(output.M, context),
    };
  }
  if (__expectString(output.N) !== undefined) {
    return { N: __expectString(output.N) as any };
  }
  if (output.NS != null) {
    return {
      NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
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
      SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  return {
    PolicyName: __expectString(output.PolicyName),
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration != null
        ? deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_0AutoScalingPolicyDescriptionList = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AutoScalingPolicyDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AutoScalingSettingsDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingSettingsDescription => {
  return {
    AutoScalingDisabled: __expectBoolean(output.AutoScalingDisabled),
    AutoScalingRoleArn: __expectString(output.AutoScalingRoleArn),
    MaximumUnits: __expectLong(output.MaximumUnits),
    MinimumUnits: __expectLong(output.MinimumUnits),
    ScalingPolicies:
      output.ScalingPolicies != null
        ? deserializeAws_json1_0AutoScalingPolicyDescriptionList(output.ScalingPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (
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

const deserializeAws_json1_0BackupDescription = (output: any, context: __SerdeContext): BackupDescription => {
  return {
    BackupDetails:
      output.BackupDetails != null ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context) : undefined,
    SourceTableDetails:
      output.SourceTableDetails != null
        ? deserializeAws_json1_0SourceTableDetails(output.SourceTableDetails, context)
        : undefined,
    SourceTableFeatureDetails:
      output.SourceTableFeatureDetails != null
        ? deserializeAws_json1_0SourceTableFeatureDetails(output.SourceTableFeatureDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0BackupDetails = (output: any, context: __SerdeContext): BackupDetails => {
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

const deserializeAws_json1_0BackupInUseException = (output: any, context: __SerdeContext): BackupInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0BackupNotFoundException = (
  output: any,
  context: __SerdeContext
): BackupNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0BackupSummaries = (output: any, context: __SerdeContext): BackupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0BackupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0BackupSummary = (output: any, context: __SerdeContext): BackupSummary => {
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

const deserializeAws_json1_0BatchExecuteStatementOutput = (
  output: any,
  context: __SerdeContext
): BatchExecuteStatementOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    Responses:
      output.Responses != null ? deserializeAws_json1_0PartiQLBatchResponse(output.Responses, context) : undefined,
  } as any;
};

const deserializeAws_json1_0BatchGetItemOutput = (output: any, context: __SerdeContext): BatchGetItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    Responses:
      output.Responses != null ? deserializeAws_json1_0BatchGetResponseMap(output.Responses, context) : undefined,
    UnprocessedKeys:
      output.UnprocessedKeys != null
        ? deserializeAws_json1_0BatchGetRequestMap(output.UnprocessedKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0BatchGetRequestMap = (
  output: any,
  context: __SerdeContext
): Record<string, KeysAndAttributes> => {
  return Object.entries(output).reduce((acc: Record<string, KeysAndAttributes>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0KeysAndAttributes(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0BatchGetResponseMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, AttributeValue>[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, AttributeValue>[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_json1_0ItemList(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_0BatchStatementError = (output: any, context: __SerdeContext): BatchStatementError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0BatchStatementResponse = (output: any, context: __SerdeContext): BatchStatementResponse => {
  return {
    Error: output.Error != null ? deserializeAws_json1_0BatchStatementError(output.Error, context) : undefined,
    Item: output.Item != null ? deserializeAws_json1_0AttributeMap(output.Item, context) : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0BatchWriteItemOutput = (output: any, context: __SerdeContext): BatchWriteItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
        : undefined,
    UnprocessedItems:
      output.UnprocessedItems != null
        ? deserializeAws_json1_0BatchWriteItemRequestMap(output.UnprocessedItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0BatchWriteItemRequestMap = (
  output: any,
  context: __SerdeContext
): Record<string, WriteRequest[]> => {
  return Object.entries(output).reduce((acc: Record<string, WriteRequest[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0WriteRequests(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0BillingModeSummary = (output: any, context: __SerdeContext): BillingModeSummary => {
  return {
    BillingMode: __expectString(output.BillingMode),
    LastUpdateToPayPerRequestDateTime:
      output.LastUpdateToPayPerRequestDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateToPayPerRequestDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
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

const deserializeAws_json1_0CancellationReason = (output: any, context: __SerdeContext): CancellationReason => {
  return {
    Code: __expectString(output.Code),
    Item: output.Item != null ? deserializeAws_json1_0AttributeMap(output.Item, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CancellationReasonList = (output: any, context: __SerdeContext): CancellationReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CancellationReason(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Capacity = (output: any, context: __SerdeContext): Capacity => {
  return {
    CapacityUnits: __limitedParseDouble(output.CapacityUnits),
    ReadCapacityUnits: __limitedParseDouble(output.ReadCapacityUnits),
    WriteCapacityUnits: __limitedParseDouble(output.WriteCapacityUnits),
  } as any;
};

const deserializeAws_json1_0ConditionalCheckFailedException = (
  output: any,
  context: __SerdeContext
): ConditionalCheckFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ConsumedCapacity = (output: any, context: __SerdeContext): ConsumedCapacity => {
  return {
    CapacityUnits: __limitedParseDouble(output.CapacityUnits),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context)
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context)
        : undefined,
    ReadCapacityUnits: __limitedParseDouble(output.ReadCapacityUnits),
    Table: output.Table != null ? deserializeAws_json1_0Capacity(output.Table, context) : undefined,
    TableName: __expectString(output.TableName),
    WriteCapacityUnits: __limitedParseDouble(output.WriteCapacityUnits),
  } as any;
};

const deserializeAws_json1_0ConsumedCapacityMultiple = (output: any, context: __SerdeContext): ConsumedCapacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ConsumedCapacity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ContinuousBackupsDescription = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsDescription => {
  return {
    ContinuousBackupsStatus: __expectString(output.ContinuousBackupsStatus),
    PointInTimeRecoveryDescription:
      output.PointInTimeRecoveryDescription != null
        ? deserializeAws_json1_0PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ContinuousBackupsUnavailableException = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ContributorInsightsRuleList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0ContributorInsightsSummaries = (
  output: any,
  context: __SerdeContext
): ContributorInsightsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ContributorInsightsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ContributorInsightsSummary = (
  output: any,
  context: __SerdeContext
): ContributorInsightsSummary => {
  return {
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    IndexName: __expectString(output.IndexName),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0CreateBackupOutput = (output: any, context: __SerdeContext): CreateBackupOutput => {
  return {
    BackupDetails:
      output.BackupDetails != null ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): CreateGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateTableOutput = (output: any, context: __SerdeContext): CreateTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null
        ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CsvHeaderList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0CsvOptions = (output: any, context: __SerdeContext): CsvOptions => {
  return {
    Delimiter: __expectString(output.Delimiter),
    HeaderList: output.HeaderList != null ? deserializeAws_json1_0CsvHeaderList(output.HeaderList, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteBackupOutput = (output: any, context: __SerdeContext): DeleteBackupOutput => {
  return {
    BackupDescription:
      output.BackupDescription != null
        ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteItemOutput = (output: any, context: __SerdeContext): DeleteItemOutput => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteRequest = (output: any, context: __SerdeContext): DeleteRequest => {
  return {
    Key: output.Key != null ? deserializeAws_json1_0Key(output.Key, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteTableOutput = (output: any, context: __SerdeContext): DeleteTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null
        ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeBackupOutput = (output: any, context: __SerdeContext): DescribeBackupOutput => {
  return {
    BackupDescription:
      output.BackupDescription != null
        ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContinuousBackupsOutput => {
  return {
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription != null
        ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContributorInsightsOutput => {
  return {
    ContributorInsightsRuleList:
      output.ContributorInsightsRuleList != null
        ? deserializeAws_json1_0ContributorInsightsRuleList(output.ContributorInsightsRuleList, context)
        : undefined,
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    FailureException:
      output.FailureException != null
        ? deserializeAws_json1_0FailureException(output.FailureException, context)
        : undefined,
    IndexName: __expectString(output.IndexName),
    LastUpdateDateTime:
      output.LastUpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateDateTime)))
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? deserializeAws_json1_0Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeExportOutput = (output: any, context: __SerdeContext): DescribeExportOutput => {
  return {
    ExportDescription:
      output.ExportDescription != null
        ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableSettingsOutput => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicaSettings:
      output.ReplicaSettings != null
        ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeImportOutput = (output: any, context: __SerdeContext): DescribeImportOutput => {
  return {
    ImportTableDescription:
      output.ImportTableDescription != null
        ? deserializeAws_json1_0ImportTableDescription(output.ImportTableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput = (
  output: any,
  context: __SerdeContext
): DescribeKinesisStreamingDestinationOutput => {
  return {
    KinesisDataStreamDestinations:
      output.KinesisDataStreamDestinations != null
        ? deserializeAws_json1_0KinesisDataStreamDestinations(output.KinesisDataStreamDestinations, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0DescribeLimitsOutput = (output: any, context: __SerdeContext): DescribeLimitsOutput => {
  return {
    AccountMaxReadCapacityUnits: __expectLong(output.AccountMaxReadCapacityUnits),
    AccountMaxWriteCapacityUnits: __expectLong(output.AccountMaxWriteCapacityUnits),
    TableMaxReadCapacityUnits: __expectLong(output.TableMaxReadCapacityUnits),
    TableMaxWriteCapacityUnits: __expectLong(output.TableMaxWriteCapacityUnits),
  } as any;
};

const deserializeAws_json1_0DescribeTableOutput = (output: any, context: __SerdeContext): DescribeTableOutput => {
  return {
    Table: output.Table != null ? deserializeAws_json1_0TableDescription(output.Table, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableReplicaAutoScalingOutput => {
  return {
    TableAutoScalingDescription:
      output.TableAutoScalingDescription != null
        ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeTimeToLiveOutput = (
  output: any,
  context: __SerdeContext
): DescribeTimeToLiveOutput => {
  return {
    TimeToLiveDescription:
      output.TimeToLiveDescription != null
        ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DuplicateItemException = (output: any, context: __SerdeContext): DuplicateItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    CachePeriodInMinutes: __expectLong(output.CachePeriodInMinutes),
  } as any;
};

const deserializeAws_json1_0Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Endpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    Items: output.Items != null ? deserializeAws_json1_0ItemList(output.Items, context) : undefined,
    LastEvaluatedKey:
      output.LastEvaluatedKey != null ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ExecuteTransactionOutput = (
  output: any,
  context: __SerdeContext
): ExecuteTransactionOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    Responses: output.Responses != null ? deserializeAws_json1_0ItemResponseList(output.Responses, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ExportConflictException = (
  output: any,
  context: __SerdeContext
): ExportConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ExportDescription = (output: any, context: __SerdeContext): ExportDescription => {
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

const deserializeAws_json1_0ExportNotFoundException = (
  output: any,
  context: __SerdeContext
): ExportNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ExportSummaries = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ExportSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
  return {
    ExportArn: __expectString(output.ExportArn),
    ExportStatus: __expectString(output.ExportStatus),
  } as any;
};

const deserializeAws_json1_0ExportTableToPointInTimeOutput = (
  output: any,
  context: __SerdeContext
): ExportTableToPointInTimeOutput => {
  return {
    ExportDescription:
      output.ExportDescription != null
        ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExpressionAttributeNameMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_0FailureException = (output: any, context: __SerdeContext): FailureException => {
  return {
    ExceptionDescription: __expectString(output.ExceptionDescription),
    ExceptionName: __expectString(output.ExceptionName),
  } as any;
};

const deserializeAws_json1_0GetItemOutput = (output: any, context: __SerdeContext): GetItemOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    Item: output.Item != null ? deserializeAws_json1_0AttributeMap(output.Item, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndex = (output: any, context: __SerdeContext): GlobalSecondaryIndex => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? deserializeAws_json1_0Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription => {
  return {
    Backfilling: __expectBoolean(output.Backfilling),
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    IndexStatus: __expectString(output.IndexStatus),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? deserializeAws_json1_0Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GlobalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GlobalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexInfo => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? deserializeAws_json1_0Projection(output.Projection, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0GlobalSecondaryIndex(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GlobalTable = (output: any, context: __SerdeContext): GlobalTable => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicationGroup:
      output.ReplicationGroup != null ? deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalTableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): GlobalTableAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0GlobalTableDescription = (output: any, context: __SerdeContext): GlobalTableDescription => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    GlobalTableArn: __expectString(output.GlobalTableArn),
    GlobalTableName: __expectString(output.GlobalTableName),
    GlobalTableStatus: __expectString(output.GlobalTableStatus),
    ReplicationGroup:
      output.ReplicationGroup != null
        ? deserializeAws_json1_0ReplicaDescriptionList(output.ReplicationGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GlobalTableList = (output: any, context: __SerdeContext): GlobalTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0GlobalTable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GlobalTableNotFoundException = (
  output: any,
  context: __SerdeContext
): GlobalTableNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ImportConflictException = (
  output: any,
  context: __SerdeContext
): ImportConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ImportNotFoundException = (
  output: any,
  context: __SerdeContext
): ImportNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return {
    CloudWatchLogGroupArn: __expectString(output.CloudWatchLogGroupArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ImportArn: __expectString(output.ImportArn),
    ImportStatus: __expectString(output.ImportStatus),
    InputFormat: __expectString(output.InputFormat),
    S3BucketSource:
      output.S3BucketSource != null ? deserializeAws_json1_0S3BucketSource(output.S3BucketSource, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TableArn: __expectString(output.TableArn),
  } as any;
};

const deserializeAws_json1_0ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ImportSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ImportTableDescription = (output: any, context: __SerdeContext): ImportTableDescription => {
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
      output.InputFormatOptions != null
        ? deserializeAws_json1_0InputFormatOptions(output.InputFormatOptions, context)
        : undefined,
    ProcessedItemCount: __expectLong(output.ProcessedItemCount),
    ProcessedSizeBytes: __expectLong(output.ProcessedSizeBytes),
    S3BucketSource:
      output.S3BucketSource != null ? deserializeAws_json1_0S3BucketSource(output.S3BucketSource, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TableArn: __expectString(output.TableArn),
    TableCreationParameters:
      output.TableCreationParameters != null
        ? deserializeAws_json1_0TableCreationParameters(output.TableCreationParameters, context)
        : undefined,
    TableId: __expectString(output.TableId),
  } as any;
};

const deserializeAws_json1_0ImportTableOutput = (output: any, context: __SerdeContext): ImportTableOutput => {
  return {
    ImportTableDescription:
      output.ImportTableDescription != null
        ? deserializeAws_json1_0ImportTableDescription(output.ImportTableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0IndexNotFoundException = (output: any, context: __SerdeContext): IndexNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0InputFormatOptions = (output: any, context: __SerdeContext): InputFormatOptions => {
  return {
    Csv: output.Csv != null ? deserializeAws_json1_0CsvOptions(output.Csv, context) : undefined,
  } as any;
};

const deserializeAws_json1_0InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0InvalidEndpointException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidExportTimeException = (
  output: any,
  context: __SerdeContext
): InvalidExportTimeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0InvalidRestoreTimeException = (
  output: any,
  context: __SerdeContext
): InvalidRestoreTimeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ItemCollectionKeyAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0ItemCollectionMetrics = (output: any, context: __SerdeContext): ItemCollectionMetrics => {
  return {
    ItemCollectionKey:
      output.ItemCollectionKey != null
        ? deserializeAws_json1_0ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context)
        : undefined,
    SizeEstimateRangeGB:
      output.SizeEstimateRangeGB != null
        ? deserializeAws_json1_0ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ItemCollectionMetricsMultiple = (
  output: any,
  context: __SerdeContext
): ItemCollectionMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ItemCollectionMetrics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ItemCollectionMetricsPerTable = (
  output: any,
  context: __SerdeContext
): Record<string, ItemCollectionMetrics[]> => {
  return Object.entries(output).reduce((acc: Record<string, ItemCollectionMetrics[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0ItemCollectionMetricsMultiple(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0ItemCollectionSizeEstimateRange = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): ItemCollectionSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ItemList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AttributeMap(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    Item: output.Item != null ? deserializeAws_json1_0AttributeMap(output.Item, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ItemResponseList = (output: any, context: __SerdeContext): ItemResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ItemResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Key = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0KeyList = (output: any, context: __SerdeContext): Record<string, AttributeValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Key(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0KeysAndAttributes = (output: any, context: __SerdeContext): KeysAndAttributes => {
  return {
    AttributesToGet:
      output.AttributesToGet != null
        ? deserializeAws_json1_0AttributeNameList(output.AttributesToGet, context)
        : undefined,
    ConsistentRead: __expectBoolean(output.ConsistentRead),
    ExpressionAttributeNames:
      output.ExpressionAttributeNames != null
        ? deserializeAws_json1_0ExpressionAttributeNameMap(output.ExpressionAttributeNames, context)
        : undefined,
    Keys: output.Keys != null ? deserializeAws_json1_0KeyList(output.Keys, context) : undefined,
    ProjectionExpression: __expectString(output.ProjectionExpression),
  } as any;
};

const deserializeAws_json1_0KeySchema = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

const deserializeAws_json1_0KinesisDataStreamDestination = (
  output: any,
  context: __SerdeContext
): KinesisDataStreamDestination => {
  return {
    DestinationStatus: __expectString(output.DestinationStatus),
    DestinationStatusDescription: __expectString(output.DestinationStatusDescription),
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

const deserializeAws_json1_0KinesisDataStreamDestinations = (
  output: any,
  context: __SerdeContext
): KinesisDataStreamDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0KinesisDataStreamDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0KinesisStreamingDestinationOutput = (
  output: any,
  context: __SerdeContext
): KinesisStreamingDestinationOutput => {
  return {
    DestinationStatus: __expectString(output.DestinationStatus),
    StreamArn: __expectString(output.StreamArn),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_json1_0ListBackupsOutput = (output: any, context: __SerdeContext): ListBackupsOutput => {
  return {
    BackupSummaries:
      output.BackupSummaries != null
        ? deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context)
        : undefined,
    LastEvaluatedBackupArn: __expectString(output.LastEvaluatedBackupArn),
  } as any;
};

const deserializeAws_json1_0ListContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): ListContributorInsightsOutput => {
  return {
    ContributorInsightsSummaries:
      output.ContributorInsightsSummaries != null
        ? deserializeAws_json1_0ContributorInsightsSummaries(output.ContributorInsightsSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListExportsOutput = (output: any, context: __SerdeContext): ListExportsOutput => {
  return {
    ExportSummaries:
      output.ExportSummaries != null
        ? deserializeAws_json1_0ExportSummaries(output.ExportSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListGlobalTablesOutput = (output: any, context: __SerdeContext): ListGlobalTablesOutput => {
  return {
    GlobalTables:
      output.GlobalTables != null ? deserializeAws_json1_0GlobalTableList(output.GlobalTables, context) : undefined,
    LastEvaluatedGlobalTableName: __expectString(output.LastEvaluatedGlobalTableName),
  } as any;
};

const deserializeAws_json1_0ListImportsOutput = (output: any, context: __SerdeContext): ListImportsOutput => {
  return {
    ImportSummaryList:
      output.ImportSummaryList != null
        ? deserializeAws_json1_0ImportSummaryList(output.ImportSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListTablesOutput = (output: any, context: __SerdeContext): ListTablesOutput => {
  return {
    LastEvaluatedTableName: __expectString(output.LastEvaluatedTableName),
    TableNames: output.TableNames != null ? deserializeAws_json1_0TableNameList(output.TableNames, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsOfResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsOfResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0LocalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription => {
  return {
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? deserializeAws_json1_0Projection(output.Projection, context) : undefined,
  } as any;
};

const deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LocalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LocalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexInfo => {
  return {
    IndexName: __expectString(output.IndexName),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    Projection: output.Projection != null ? deserializeAws_json1_0Projection(output.Projection, context) : undefined,
  } as any;
};

const deserializeAws_json1_0MapAttributeValue = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0NonKeyAttributeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0NumberSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0PartiQLBatchResponse = (output: any, context: __SerdeContext): BatchStatementResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0BatchStatementResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PointInTimeRecoveryDescription = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryDescription => {
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

const deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Projection = (output: any, context: __SerdeContext): Projection => {
  return {
    NonKeyAttributes:
      output.NonKeyAttributes != null
        ? deserializeAws_json1_0NonKeyAttributeNameList(output.NonKeyAttributes, context)
        : undefined,
    ProjectionType: __expectString(output.ProjectionType),
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughput = (output: any, context: __SerdeContext): ProvisionedThroughput => {
  return {
    ReadCapacityUnits: __expectLong(output.ReadCapacityUnits),
    WriteCapacityUnits: __expectLong(output.WriteCapacityUnits),
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughputDescription = (
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

const deserializeAws_json1_0ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputOverride => {
  return {
    ReadCapacityUnits: __expectLong(output.ReadCapacityUnits),
  } as any;
};

const deserializeAws_json1_0PutItemInputAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0PutItemOutput = (output: any, context: __SerdeContext): PutItemOutput => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0PutRequest = (output: any, context: __SerdeContext): PutRequest => {
  return {
    Item: output.Item != null ? deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context) : undefined,
  } as any;
};

const deserializeAws_json1_0QueryOutput = (output: any, context: __SerdeContext): QueryOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    Count: __expectInt32(output.Count),
    Items: output.Items != null ? deserializeAws_json1_0ItemList(output.Items, context) : undefined,
    LastEvaluatedKey:
      output.LastEvaluatedKey != null ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context) : undefined,
    ScannedCount: __expectInt32(output.ScannedCount),
  } as any;
};

const deserializeAws_json1_0Replica = (output: any, context: __SerdeContext): Replica => {
  return {
    RegionName: __expectString(output.RegionName),
  } as any;
};

const deserializeAws_json1_0ReplicaAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicaAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ReplicaAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    RegionName: __expectString(output.RegionName),
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaStatus: __expectString(output.ReplicaStatus),
  } as any;
};

const deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaDescription = (output: any, context: __SerdeContext): ReplicaDescription => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
        : undefined,
    KMSMasterKeyId: __expectString(output.KMSMasterKeyId),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
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
        ? deserializeAws_json1_0TableClassSummary(output.ReplicaTableClassSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ReplicaDescriptionList = (output: any, context: __SerdeContext): ReplicaDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription => {
  return {
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedReadCapacityUnits: __expectLong(output.ProvisionedReadCapacityUnits),
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedWriteCapacityUnits: __expectLong(output.ProvisionedWriteCapacityUnits),
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaList = (output: any, context: __SerdeContext): Replica[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Replica(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ReplicaNotFoundException = (
  output: any,
  context: __SerdeContext
): ReplicaNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ReplicaSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaSettingsDescription => {
  return {
    RegionName: __expectString(output.RegionName),
    ReplicaBillingModeSummary:
      output.ReplicaBillingModeSummary != null
        ? deserializeAws_json1_0BillingModeSummary(output.ReplicaBillingModeSummary, context)
        : undefined,
    ReplicaGlobalSecondaryIndexSettings:
      output.ReplicaGlobalSecondaryIndexSettings != null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(
            output.ReplicaGlobalSecondaryIndexSettings,
            context
          )
        : undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedReadCapacityUnits: __expectLong(output.ReplicaProvisionedReadCapacityUnits),
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings != null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedWriteCapacityUnits: __expectLong(output.ReplicaProvisionedWriteCapacityUnits),
    ReplicaStatus: __expectString(output.ReplicaStatus),
    ReplicaTableClassSummary:
      output.ReplicaTableClassSummary != null
        ? deserializeAws_json1_0TableClassSummary(output.ReplicaTableClassSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ReplicaSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaSettingsDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReplicaSettingsDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RequestLimitExceeded = (output: any, context: __SerdeContext): RequestLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0RestoreSummary = (output: any, context: __SerdeContext): RestoreSummary => {
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

const deserializeAws_json1_0RestoreTableFromBackupOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableFromBackupOutput => {
  return {
    TableDescription:
      output.TableDescription != null
        ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RestoreTableToPointInTimeOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableToPointInTimeOutput => {
  return {
    TableDescription:
      output.TableDescription != null
        ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0S3BucketSource = (output: any, context: __SerdeContext): S3BucketSource => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3BucketOwner: __expectString(output.S3BucketOwner),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_json1_0ScanOutput = (output: any, context: __SerdeContext): ScanOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    Count: __expectInt32(output.Count),
    Items: output.Items != null ? deserializeAws_json1_0ItemList(output.Items, context) : undefined,
    LastEvaluatedKey:
      output.LastEvaluatedKey != null ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context) : undefined,
    ScannedCount: __expectInt32(output.ScannedCount),
  } as any;
};

const deserializeAws_json1_0SecondaryIndexesCapacityMap = (
  output: any,
  context: __SerdeContext
): Record<string, Capacity> => {
  return Object.entries(output).reduce((acc: Record<string, Capacity>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0Capacity(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0SourceTableDetails = (output: any, context: __SerdeContext): SourceTableDetails => {
  return {
    BillingMode: __expectString(output.BillingMode),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
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

const deserializeAws_json1_0SourceTableFeatureDetails = (
  output: any,
  context: __SerdeContext
): SourceTableFeatureDetails => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context)
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? deserializeAws_json1_0LocalSecondaryIndexes(output.LocalSecondaryIndexes, context)
        : undefined,
    SSEDescription:
      output.SSEDescription != null ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context) : undefined,
    StreamDescription:
      output.StreamDescription != null
        ? deserializeAws_json1_0StreamSpecification(output.StreamDescription, context)
        : undefined,
    TimeToLiveDescription:
      output.TimeToLiveDescription != null
        ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
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

const deserializeAws_json1_0SSESpecification = (output: any, context: __SerdeContext): SSESpecification => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KMSMasterKeyId: __expectString(output.KMSMasterKeyId),
    SSEType: __expectString(output.SSEType),
  } as any;
};

const deserializeAws_json1_0StreamSpecification = (output: any, context: __SerdeContext): StreamSpecification => {
  return {
    StreamEnabled: __expectBoolean(output.StreamEnabled),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

const deserializeAws_json1_0StringSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0TableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TableAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0TableAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): TableAutoScalingDescription => {
  return {
    Replicas:
      output.Replicas != null
        ? deserializeAws_json1_0ReplicaAutoScalingDescriptionList(output.Replicas, context)
        : undefined,
    TableName: __expectString(output.TableName),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

const deserializeAws_json1_0TableClassSummary = (output: any, context: __SerdeContext): TableClassSummary => {
  return {
    LastUpdateDateTime:
      output.LastUpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateDateTime)))
        : undefined,
    TableClass: __expectString(output.TableClass),
  } as any;
};

const deserializeAws_json1_0TableCreationParameters = (
  output: any,
  context: __SerdeContext
): TableCreationParameters => {
  return {
    AttributeDefinitions:
      output.AttributeDefinitions != null
        ? deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context)
        : undefined,
    BillingMode: __expectString(output.BillingMode),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0GlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
        : undefined,
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
    SSESpecification:
      output.SSESpecification != null
        ? deserializeAws_json1_0SSESpecification(output.SSESpecification, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0TableDescription = (output: any, context: __SerdeContext): TableDescription => {
  return {
    ArchivalSummary:
      output.ArchivalSummary != null
        ? deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context)
        : undefined,
    AttributeDefinitions:
      output.AttributeDefinitions != null
        ? deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context)
        : undefined,
    BillingModeSummary:
      output.BillingModeSummary != null
        ? deserializeAws_json1_0BillingModeSummary(output.BillingModeSummary, context)
        : undefined,
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
        : undefined,
    GlobalTableVersion: __expectString(output.GlobalTableVersion),
    ItemCount: __expectLong(output.ItemCount),
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    LatestStreamArn: __expectString(output.LatestStreamArn),
    LatestStreamLabel: __expectString(output.LatestStreamLabel),
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? deserializeAws_json1_0LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
        : undefined,
    Replicas:
      output.Replicas != null ? deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context) : undefined,
    RestoreSummary:
      output.RestoreSummary != null ? deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context) : undefined,
    SSEDescription:
      output.SSEDescription != null ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context) : undefined,
    StreamSpecification:
      output.StreamSpecification != null
        ? deserializeAws_json1_0StreamSpecification(output.StreamSpecification, context)
        : undefined,
    TableArn: __expectString(output.TableArn),
    TableClassSummary:
      output.TableClassSummary != null
        ? deserializeAws_json1_0TableClassSummary(output.TableClassSummary, context)
        : undefined,
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
    TableSizeBytes: __expectLong(output.TableSizeBytes),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

const deserializeAws_json1_0TableInUseException = (output: any, context: __SerdeContext): TableInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0TableNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0TableNotFoundException = (output: any, context: __SerdeContext): TableNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TimeToLiveDescription = (output: any, context: __SerdeContext): TimeToLiveDescription => {
  return {
    AttributeName: __expectString(output.AttributeName),
    TimeToLiveStatus: __expectString(output.TimeToLiveStatus),
  } as any;
};

const deserializeAws_json1_0TimeToLiveSpecification = (
  output: any,
  context: __SerdeContext
): TimeToLiveSpecification => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_json1_0TransactGetItemsOutput = (output: any, context: __SerdeContext): TransactGetItemsOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    Responses: output.Responses != null ? deserializeAws_json1_0ItemResponseList(output.Responses, context) : undefined,
  } as any;
};

const deserializeAws_json1_0TransactionCanceledException = (
  output: any,
  context: __SerdeContext
): TransactionCanceledException => {
  return {
    CancellationReasons:
      output.CancellationReasons != null
        ? deserializeAws_json1_0CancellationReasonList(output.CancellationReasons, context)
        : undefined,
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0TransactionConflictException = (
  output: any,
  context: __SerdeContext
): TransactionConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0TransactionInProgressException = (
  output: any,
  context: __SerdeContext
): TransactionInProgressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0TransactWriteItemsOutput = (
  output: any,
  context: __SerdeContext
): TransactWriteItemsOutput => {
  return {
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContinuousBackupsOutput => {
  return {
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription != null
        ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContributorInsightsOutput => {
  return {
    ContributorInsightsStatus: __expectString(output.ContributorInsightsStatus),
    IndexName: __expectString(output.IndexName),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0UpdateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableOutput => {
  return {
    GlobalTableDescription:
      output.GlobalTableDescription != null
        ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableSettingsOutput => {
  return {
    GlobalTableName: __expectString(output.GlobalTableName),
    ReplicaSettings:
      output.ReplicaSettings != null
        ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateItemOutput = (output: any, context: __SerdeContext): UpdateItemOutput => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_0AttributeMap(output.Attributes, context) : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity != null
        ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics != null
        ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateTableOutput = (output: any, context: __SerdeContext): UpdateTableOutput => {
  return {
    TableDescription:
      output.TableDescription != null
        ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableReplicaAutoScalingOutput => {
  return {
    TableAutoScalingDescription:
      output.TableAutoScalingDescription != null
        ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateTimeToLiveOutput = (output: any, context: __SerdeContext): UpdateTimeToLiveOutput => {
  return {
    TimeToLiveSpecification:
      output.TimeToLiveSpecification != null
        ? deserializeAws_json1_0TimeToLiveSpecification(output.TimeToLiveSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WriteRequest = (output: any, context: __SerdeContext): WriteRequest => {
  return {
    DeleteRequest:
      output.DeleteRequest != null ? deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context) : undefined,
    PutRequest: output.PutRequest != null ? deserializeAws_json1_0PutRequest(output.PutRequest, context) : undefined,
  } as any;
};

const deserializeAws_json1_0WriteRequests = (output: any, context: __SerdeContext): WriteRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0WriteRequest(entry, context);
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
