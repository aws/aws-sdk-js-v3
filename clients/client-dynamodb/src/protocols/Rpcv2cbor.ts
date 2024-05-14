// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  BackupInUseException,
  BackupNotFoundException,
  ConditionalCheckFailedException,
  ContinuousBackupsUnavailableException,
  DuplicateItemException,
  ExportConflictException,
  ExportNotFoundException,
  GlobalTableAlreadyExistsException,
  GlobalTableNotFoundException,
  IdempotentParameterMismatchException,
  ImportConflictException,
  ImportNotFoundException,
  IndexNotFoundException,
  InternalServerError,
  InvalidEndpointException,
  InvalidExportTimeException,
  InvalidRestoreTimeException,
  ItemCollectionSizeLimitExceededException,
  LimitExceededException,
  PointInTimeRecoveryUnavailableException,
  PolicyNotFoundException,
  ProvisionedThroughputExceededException,
  ReplicaAlreadyExistsException,
  ReplicaNotFoundException,
  RequestLimitExceeded,
  ResourceInUseException,
  ResourceNotFoundException,
  TableAlreadyExistsException,
  TableInUseException,
  TableNotFoundException,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
};

/**
 * serializeRpcv2cborQueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
};

/**
 * serializeRpcv2cborScanCommand
 */
export const se_ScanCommand = async (input: ScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  return buildHttpRpcRequest(context, headers, "", undefined, body);
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const contents: any = {};
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
  const deserialized: any = de_BackupInUseException(body, context);
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
  const deserialized: any = de_BackupNotFoundException(body, context);
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
  const deserialized: any = de_ContinuousBackupsUnavailableException(body, context);
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
  const deserialized: any = de_DuplicateItemException(body, context);
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
  const deserialized: any = de_ExportConflictException(body, context);
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
  const deserialized: any = de_ExportNotFoundException(body, context);
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
  const deserialized: any = de_GlobalTableAlreadyExistsException(body, context);
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
  const deserialized: any = de_GlobalTableNotFoundException(body, context);
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
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
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
  const deserialized: any = de_ImportConflictException(body, context);
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
  const deserialized: any = de_ImportNotFoundException(body, context);
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
  const deserialized: any = de_IndexNotFoundException(body, context);
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
  const deserialized: any = de_InternalServerError(body, context);
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
  const deserialized: any = de_InvalidEndpointException(body, context);
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
  const deserialized: any = de_InvalidExportTimeException(body, context);
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
  const deserialized: any = de_InvalidRestoreTimeException(body, context);
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
  const deserialized: any = de_ItemCollectionSizeLimitExceededException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_PointInTimeRecoveryUnavailableException(body, context);
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
  const deserialized: any = de_PolicyNotFoundException(body, context);
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
  const deserialized: any = de_ProvisionedThroughputExceededException(body, context);
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
  const deserialized: any = de_ReplicaAlreadyExistsException(body, context);
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
  const deserialized: any = de_ReplicaNotFoundException(body, context);
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
  const deserialized: any = de_RequestLimitExceeded(body, context);
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
  const deserialized: any = de_ResourceInUseException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_TableAlreadyExistsException(body, context);
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
  const deserialized: any = de_TableInUseException(body, context);
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
  const deserialized: any = de_TableNotFoundException(body, context);
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
  const deserialized: any = de_TransactionConflictException(body, context);
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
  const deserialized: any = de_TransactionInProgressException(body, context);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/cbor",
};
