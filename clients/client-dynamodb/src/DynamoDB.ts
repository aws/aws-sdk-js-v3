// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type BatchExecuteStatementCommandInput,
  type BatchExecuteStatementCommandOutput,
  BatchExecuteStatementCommand,
} from "./commands/BatchExecuteStatementCommand";
import {
  type BatchGetItemCommandInput,
  type BatchGetItemCommandOutput,
  BatchGetItemCommand,
} from "./commands/BatchGetItemCommand";
import {
  type BatchWriteItemCommandInput,
  type BatchWriteItemCommandOutput,
  BatchWriteItemCommand,
} from "./commands/BatchWriteItemCommand";
import {
  type CreateBackupCommandInput,
  type CreateBackupCommandOutput,
  CreateBackupCommand,
} from "./commands/CreateBackupCommand";
import {
  type CreateGlobalTableCommandInput,
  type CreateGlobalTableCommandOutput,
  CreateGlobalTableCommand,
} from "./commands/CreateGlobalTableCommand";
import {
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  CreateTableCommand,
} from "./commands/CreateTableCommand";
import {
  type DeleteBackupCommandInput,
  type DeleteBackupCommandOutput,
  DeleteBackupCommand,
} from "./commands/DeleteBackupCommand";
import {
  type DeleteItemCommandInput,
  type DeleteItemCommandOutput,
  DeleteItemCommand,
} from "./commands/DeleteItemCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DeleteTableCommand,
} from "./commands/DeleteTableCommand";
import {
  type DescribeBackupCommandInput,
  type DescribeBackupCommandOutput,
  DescribeBackupCommand,
} from "./commands/DescribeBackupCommand";
import {
  type DescribeContinuousBackupsCommandInput,
  type DescribeContinuousBackupsCommandOutput,
  DescribeContinuousBackupsCommand,
} from "./commands/DescribeContinuousBackupsCommand";
import {
  type DescribeContributorInsightsCommandInput,
  type DescribeContributorInsightsCommandOutput,
  DescribeContributorInsightsCommand,
} from "./commands/DescribeContributorInsightsCommand";
import {
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeEndpointsCommand,
} from "./commands/DescribeEndpointsCommand";
import {
  type DescribeExportCommandInput,
  type DescribeExportCommandOutput,
  DescribeExportCommand,
} from "./commands/DescribeExportCommand";
import {
  type DescribeGlobalTableCommandInput,
  type DescribeGlobalTableCommandOutput,
  DescribeGlobalTableCommand,
} from "./commands/DescribeGlobalTableCommand";
import {
  type DescribeGlobalTableSettingsCommandInput,
  type DescribeGlobalTableSettingsCommandOutput,
  DescribeGlobalTableSettingsCommand,
} from "./commands/DescribeGlobalTableSettingsCommand";
import {
  type DescribeImportCommandInput,
  type DescribeImportCommandOutput,
  DescribeImportCommand,
} from "./commands/DescribeImportCommand";
import {
  type DescribeKinesisStreamingDestinationCommandInput,
  type DescribeKinesisStreamingDestinationCommandOutput,
  DescribeKinesisStreamingDestinationCommand,
} from "./commands/DescribeKinesisStreamingDestinationCommand";
import {
  type DescribeLimitsCommandInput,
  type DescribeLimitsCommandOutput,
  DescribeLimitsCommand,
} from "./commands/DescribeLimitsCommand";
import {
  type DescribeTableCommandInput,
  type DescribeTableCommandOutput,
  DescribeTableCommand,
} from "./commands/DescribeTableCommand";
import {
  type DescribeTableReplicaAutoScalingCommandInput,
  type DescribeTableReplicaAutoScalingCommandOutput,
  DescribeTableReplicaAutoScalingCommand,
} from "./commands/DescribeTableReplicaAutoScalingCommand";
import {
  type DescribeTimeToLiveCommandInput,
  type DescribeTimeToLiveCommandOutput,
  DescribeTimeToLiveCommand,
} from "./commands/DescribeTimeToLiveCommand";
import {
  type DisableKinesisStreamingDestinationCommandInput,
  type DisableKinesisStreamingDestinationCommandOutput,
  DisableKinesisStreamingDestinationCommand,
} from "./commands/DisableKinesisStreamingDestinationCommand";
import {
  type EnableKinesisStreamingDestinationCommandInput,
  type EnableKinesisStreamingDestinationCommandOutput,
  EnableKinesisStreamingDestinationCommand,
} from "./commands/EnableKinesisStreamingDestinationCommand";
import {
  type ExecuteStatementCommandInput,
  type ExecuteStatementCommandOutput,
  ExecuteStatementCommand,
} from "./commands/ExecuteStatementCommand";
import {
  type ExecuteTransactionCommandInput,
  type ExecuteTransactionCommandOutput,
  ExecuteTransactionCommand,
} from "./commands/ExecuteTransactionCommand";
import {
  type ExportTableToPointInTimeCommandInput,
  type ExportTableToPointInTimeCommandOutput,
  ExportTableToPointInTimeCommand,
} from "./commands/ExportTableToPointInTimeCommand";
import { type GetItemCommandInput, type GetItemCommandOutput, GetItemCommand } from "./commands/GetItemCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ImportTableCommandInput,
  type ImportTableCommandOutput,
  ImportTableCommand,
} from "./commands/ImportTableCommand";
import {
  type ListBackupsCommandInput,
  type ListBackupsCommandOutput,
  ListBackupsCommand,
} from "./commands/ListBackupsCommand";
import {
  type ListContributorInsightsCommandInput,
  type ListContributorInsightsCommandOutput,
  ListContributorInsightsCommand,
} from "./commands/ListContributorInsightsCommand";
import {
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  ListExportsCommand,
} from "./commands/ListExportsCommand";
import {
  type ListGlobalTablesCommandInput,
  type ListGlobalTablesCommandOutput,
  ListGlobalTablesCommand,
} from "./commands/ListGlobalTablesCommand";
import {
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListImportsCommand,
} from "./commands/ListImportsCommand";
import {
  type ListTablesCommandInput,
  type ListTablesCommandOutput,
  ListTablesCommand,
} from "./commands/ListTablesCommand";
import {
  type ListTagsOfResourceCommandInput,
  type ListTagsOfResourceCommandOutput,
  ListTagsOfResourceCommand,
} from "./commands/ListTagsOfResourceCommand";
import { type PutItemCommandInput, type PutItemCommandOutput, PutItemCommand } from "./commands/PutItemCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import { type QueryCommandInput, type QueryCommandOutput, QueryCommand } from "./commands/QueryCommand";
import {
  type RestoreTableFromBackupCommandInput,
  type RestoreTableFromBackupCommandOutput,
  RestoreTableFromBackupCommand,
} from "./commands/RestoreTableFromBackupCommand";
import {
  type RestoreTableToPointInTimeCommandInput,
  type RestoreTableToPointInTimeCommandOutput,
  RestoreTableToPointInTimeCommand,
} from "./commands/RestoreTableToPointInTimeCommand";
import { type ScanCommandInput, type ScanCommandOutput, ScanCommand } from "./commands/ScanCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TransactGetItemsCommandInput,
  type TransactGetItemsCommandOutput,
  TransactGetItemsCommand,
} from "./commands/TransactGetItemsCommand";
import {
  type TransactWriteItemsCommandInput,
  type TransactWriteItemsCommandOutput,
  TransactWriteItemsCommand,
} from "./commands/TransactWriteItemsCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateContinuousBackupsCommandInput,
  type UpdateContinuousBackupsCommandOutput,
  UpdateContinuousBackupsCommand,
} from "./commands/UpdateContinuousBackupsCommand";
import {
  type UpdateContributorInsightsCommandInput,
  type UpdateContributorInsightsCommandOutput,
  UpdateContributorInsightsCommand,
} from "./commands/UpdateContributorInsightsCommand";
import {
  type UpdateGlobalTableCommandInput,
  type UpdateGlobalTableCommandOutput,
  UpdateGlobalTableCommand,
} from "./commands/UpdateGlobalTableCommand";
import {
  type UpdateGlobalTableSettingsCommandInput,
  type UpdateGlobalTableSettingsCommandOutput,
  UpdateGlobalTableSettingsCommand,
} from "./commands/UpdateGlobalTableSettingsCommand";
import {
  type UpdateItemCommandInput,
  type UpdateItemCommandOutput,
  UpdateItemCommand,
} from "./commands/UpdateItemCommand";
import {
  type UpdateKinesisStreamingDestinationCommandInput,
  type UpdateKinesisStreamingDestinationCommandOutput,
  UpdateKinesisStreamingDestinationCommand,
} from "./commands/UpdateKinesisStreamingDestinationCommand";
import {
  type UpdateTableCommandInput,
  type UpdateTableCommandOutput,
  UpdateTableCommand,
} from "./commands/UpdateTableCommand";
import {
  type UpdateTableReplicaAutoScalingCommandInput,
  type UpdateTableReplicaAutoScalingCommandOutput,
  UpdateTableReplicaAutoScalingCommand,
} from "./commands/UpdateTableReplicaAutoScalingCommand";
import {
  type UpdateTimeToLiveCommandInput,
  type UpdateTimeToLiveCommandOutput,
  UpdateTimeToLiveCommand,
} from "./commands/UpdateTimeToLiveCommand";
import { DynamoDBClient } from "./DynamoDBClient";
import { paginateListContributorInsights } from "./pagination/ListContributorInsightsPaginator";
import { paginateListExports } from "./pagination/ListExportsPaginator";
import { paginateListImports } from "./pagination/ListImportsPaginator";
import { paginateListTables } from "./pagination/ListTablesPaginator";
import { paginateQuery } from "./pagination/QueryPaginator";
import { paginateScan } from "./pagination/ScanPaginator";
import { waitUntilContributorInsightsEnabled } from "./waiters/waitForContributorInsightsEnabled";
import { waitUntilExportCompleted } from "./waiters/waitForExportCompleted";
import { waitUntilImportCompleted } from "./waiters/waitForImportCompleted";
import { waitUntilKinesisStreamingDestinationActive } from "./waiters/waitForKinesisStreamingDestinationActive";
import { waitUntilTableExists } from "./waiters/waitForTableExists";
import { waitUntilTableNotExists } from "./waiters/waitForTableNotExists";

const commands = {
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchWriteItemCommand,
  CreateBackupCommand,
  CreateGlobalTableCommand,
  CreateTableCommand,
  DeleteBackupCommand,
  DeleteItemCommand,
  DeleteResourcePolicyCommand,
  DeleteTableCommand,
  DescribeBackupCommand,
  DescribeContinuousBackupsCommand,
  DescribeContributorInsightsCommand,
  DescribeEndpointsCommand,
  DescribeExportCommand,
  DescribeGlobalTableCommand,
  DescribeGlobalTableSettingsCommand,
  DescribeImportCommand,
  DescribeKinesisStreamingDestinationCommand,
  DescribeLimitsCommand,
  DescribeTableCommand,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTimeToLiveCommand,
  DisableKinesisStreamingDestinationCommand,
  EnableKinesisStreamingDestinationCommand,
  ExecuteStatementCommand,
  ExecuteTransactionCommand,
  ExportTableToPointInTimeCommand,
  GetItemCommand,
  GetResourcePolicyCommand,
  ImportTableCommand,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  PutItemCommand,
  PutResourcePolicyCommand,
  QueryCommand,
  RestoreTableFromBackupCommand,
  RestoreTableToPointInTimeCommand,
  ScanCommand,
  TagResourceCommand,
  TransactGetItemsCommand,
  TransactWriteItemsCommand,
  UntagResourceCommand,
  UpdateContinuousBackupsCommand,
  UpdateContributorInsightsCommand,
  UpdateGlobalTableCommand,
  UpdateGlobalTableSettingsCommand,
  UpdateItemCommand,
  UpdateKinesisStreamingDestinationCommand,
  UpdateTableCommand,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTimeToLiveCommand,
};
const paginators = {
  paginateListContributorInsights,
  paginateListExports,
  paginateListImports,
  paginateListTables,
  paginateQuery,
  paginateScan,
};
const waiters = {
  waitUntilContributorInsightsEnabled,
  waitUntilExportCompleted,
  waitUntilImportCompleted,
  waitUntilKinesisStreamingDestinationActive,
  waitUntilTableExists,
  waitUntilTableNotExists,
};

export interface DynamoDB {
  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchExecuteStatementCommandOutput>;
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetItemCommand}
   */
  batchGetItem(
    args: BatchGetItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetItemCommandOutput>;
  batchGetItem(
    args: BatchGetItemCommandInput,
    cb: (err: any, data?: BatchGetItemCommandOutput) => void
  ): void;
  batchGetItem(
    args: BatchGetItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchWriteItemCommand}
   */
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchWriteItemCommandOutput>;
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    cb: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): void;
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupCommandOutput>;
  createBackup(
    args: CreateBackupCommandInput,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
  createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalTableCommand}
   */
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalTableCommandOutput>;
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    cb: (err: any, data?: CreateGlobalTableCommandOutput) => void
  ): void;
  createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTableCommandOutput>;
  createTable(
    args: CreateTableCommandInput,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  deleteBackup(
    args: DeleteBackupCommandInput,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteItemCommand}
   */
  deleteItem(
    args: DeleteItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteItemCommandOutput>;
  deleteItem(
    args: DeleteItemCommandInput,
    cb: (err: any, data?: DeleteItemCommandOutput) => void
  ): void;
  deleteItem(
    args: DeleteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteItemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableCommandOutput>;
  deleteTable(
    args: DeleteTableCommandInput,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupCommand}
   */
  describeBackup(
    args: DescribeBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupCommandOutput>;
  describeBackup(
    args: DescribeBackupCommandInput,
    cb: (err: any, data?: DescribeBackupCommandOutput) => void
  ): void;
  describeBackup(
    args: DescribeBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContinuousBackupsCommand}
   */
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContinuousBackupsCommandOutput>;
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    cb: (err: any, data?: DescribeContinuousBackupsCommandOutput) => void
  ): void;
  describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContinuousBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   */
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContributorInsightsCommandOutput>;
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    cb: (err: any, data?: DescribeContributorInsightsCommandOutput) => void
  ): void;
  describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContributorInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(): Promise<DescribeEndpointsCommandOutput>;
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
   * @see {@link DescribeExportCommand}
   */
  describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportCommandOutput>;
  describeExport(
    args: DescribeExportCommandInput,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  describeExport(
    args: DescribeExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalTableCommand}
   */
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalTableCommandOutput>;
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    cb: (err: any, data?: DescribeGlobalTableCommandOutput) => void
  ): void;
  describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalTableSettingsCommand}
   */
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalTableSettingsCommandOutput>;
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    cb: (err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void
  ): void;
  describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportCommand}
   */
  describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportCommandOutput>;
  describeImport(
    args: DescribeImportCommandInput,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;
  describeImport(
    args: DescribeImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   */
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKinesisStreamingDestinationCommandOutput>;
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void
  ): void;
  describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(): Promise<DescribeLimitsCommandOutput>;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLimitsCommandOutput>;
  describeLimits(
    args: DescribeLimitsCommandInput,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableCommandOutput>;
  describeTable(
    args: DescribeTableCommandInput,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  describeTable(
    args: DescribeTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableReplicaAutoScalingCommand}
   */
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableReplicaAutoScalingCommandOutput>;
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    cb: (err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void
  ): void;
  describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTimeToLiveCommand}
   */
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTimeToLiveCommandOutput>;
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    cb: (err: any, data?: DescribeTimeToLiveCommandOutput) => void
  ): void;
  describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTimeToLiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableKinesisStreamingDestinationCommand}
   */
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableKinesisStreamingDestinationCommandOutput>;
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableKinesisStreamingDestinationCommand}
   */
  enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableKinesisStreamingDestinationCommandOutput>;
  enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteStatementCommandOutput>;
  executeStatement(
    args: ExecuteStatementCommandInput,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  executeStatement(
    args: ExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteTransactionCommand}
   */
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteTransactionCommandOutput>;
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;
  executeTransaction(
    args: ExecuteTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportTableToPointInTimeCommand}
   */
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportTableToPointInTimeCommandOutput>;
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    cb: (err: any, data?: ExportTableToPointInTimeCommandOutput) => void
  ): void;
  exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportTableToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetItemCommand}
   */
  getItem(
    args: GetItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetItemCommandOutput>;
  getItem(
    args: GetItemCommandInput,
    cb: (err: any, data?: GetItemCommandOutput) => void
  ): void;
  getItem(
    args: GetItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(
    args: ImportTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportTableCommandOutput>;
  importTable(
    args: ImportTableCommandInput,
    cb: (err: any, data?: ImportTableCommandOutput) => void
  ): void;
  importTable(
    args: ImportTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportTableCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(): Promise<ListBackupsCommandOutput>;
  listBackups(
    args: ListBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupsCommandOutput>;
  listBackups(
    args: ListBackupsCommandInput,
    cb: (err: any, data?: ListBackupsCommandOutput) => void
  ): void;
  listBackups(
    args: ListBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
  listContributorInsights(): Promise<ListContributorInsightsCommandOutput>;
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContributorInsightsCommandOutput>;
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    cb: (err: any, data?: ListContributorInsightsCommandOutput) => void
  ): void;
  listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContributorInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
  listGlobalTables(): Promise<ListGlobalTablesCommandOutput>;
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGlobalTablesCommandOutput>;
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    cb: (err: any, data?: ListGlobalTablesCommandOutput) => void
  ): void;
  listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGlobalTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(): Promise<ListTablesCommandOutput>;
  listTables(
    args: ListTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTablesCommandOutput>;
  listTables(
    args: ListTablesCommandInput,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;
  listTables(
    args: ListTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsOfResourceCommand}
   */
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsOfResourceCommandOutput>;
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    cb: (err: any, data?: ListTagsOfResourceCommandOutput) => void
  ): void;
  listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsOfResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutItemCommand}
   */
  putItem(
    args: PutItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutItemCommandOutput>;
  putItem(
    args: PutItemCommandInput,
    cb: (err: any, data?: PutItemCommandOutput) => void
  ): void;
  putItem(
    args: PutItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryCommandOutput>;
  query(
    args: QueryCommandInput,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableFromBackupCommand}
   */
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromBackupCommandOutput>;
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    cb: (err: any, data?: RestoreTableFromBackupCommandOutput) => void
  ): void;
  restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableToPointInTimeCommand}
   */
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableToPointInTimeCommandOutput>;
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreTableToPointInTimeCommandOutput) => void
  ): void;
  restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link ScanCommand}
   */
  scan(
    args: ScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScanCommandOutput>;
  scan(
    args: ScanCommandInput,
    cb: (err: any, data?: ScanCommandOutput) => void
  ): void;
  scan(
    args: ScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TransactGetItemsCommand}
   */
  transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransactGetItemsCommandOutput>;
  transactGetItems(
    args: TransactGetItemsCommandInput,
    cb: (err: any, data?: TransactGetItemsCommandOutput) => void
  ): void;
  transactGetItems(
    args: TransactGetItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactGetItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link TransactWriteItemsCommand}
   */
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransactWriteItemsCommandOutput>;
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    cb: (err: any, data?: TransactWriteItemsCommandOutput) => void
  ): void;
  transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactWriteItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContinuousBackupsCommand}
   */
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContinuousBackupsCommandOutput>;
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    cb: (err: any, data?: UpdateContinuousBackupsCommandOutput) => void
  ): void;
  updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContinuousBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContributorInsightsCommand}
   */
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContributorInsightsCommandOutput>;
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    cb: (err: any, data?: UpdateContributorInsightsCommandOutput) => void
  ): void;
  updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContributorInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalTableCommand}
   */
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalTableCommandOutput>;
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    cb: (err: any, data?: UpdateGlobalTableCommandOutput) => void
  ): void;
  updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalTableSettingsCommand}
   */
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalTableSettingsCommandOutput>;
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void
  ): void;
  updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateItemCommand}
   */
  updateItem(
    args: UpdateItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateItemCommandOutput>;
  updateItem(
    args: UpdateItemCommandInput,
    cb: (err: any, data?: UpdateItemCommandOutput) => void
  ): void;
  updateItem(
    args: UpdateItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKinesisStreamingDestinationCommand}
   */
  updateKinesisStreamingDestination(
    args: UpdateKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKinesisStreamingDestinationCommandOutput>;
  updateKinesisStreamingDestination(
    args: UpdateKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: UpdateKinesisStreamingDestinationCommandOutput) => void
  ): void;
  updateKinesisStreamingDestination(
    args: UpdateKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKinesisStreamingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableCommandOutput>;
  updateTable(
    args: UpdateTableCommandInput,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
  updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableReplicaAutoScalingCommand}
   */
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableReplicaAutoScalingCommandOutput>;
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    cb: (err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void
  ): void;
  updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTimeToLiveCommand}
   */
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTimeToLiveCommandOutput>;
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    cb: (err: any, data?: UpdateTimeToLiveCommandOutput) => void
  ): void;
  updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTimeToLiveCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContributorInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContributorInsightsCommandOutput}.
   */
  paginateListContributorInsights(
    args?: ListContributorInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContributorInsightsCommandOutput>;

  /**
   * @see {@link ListExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportsCommandOutput}.
   */
  paginateListExports(
    args?: ListExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportsCommandOutput>;

  /**
   * @see {@link ListImportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportsCommandOutput}.
   */
  paginateListImports(
    args?: ListImportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportsCommandOutput>;

  /**
   * @see {@link ListTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTablesCommandOutput}.
   */
  paginateListTables(
    args?: ListTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTablesCommandOutput>;

  /**
   * @see {@link QueryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link QueryCommandOutput}.
   */
  paginateQuery(
    args: QueryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<QueryCommandOutput>;

  /**
   * @see {@link ScanCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ScanCommandOutput}.
   */
  paginateScan(
    args: ScanCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ScanCommandOutput>;

  /**
   * @see {@link DescribeContributorInsightsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilContributorInsightsEnabled(
    args: DescribeContributorInsightsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeExportCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilExportCompleted(
    args: DescribeExportCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeImportCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilImportCompleted(
    args: DescribeImportCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeKinesisStreamingDestinationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilKinesisStreamingDestinationActive(
    args: DescribeKinesisStreamingDestinationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeTableCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTableExists(
    args: DescribeTableCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeTableCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTableNotExists(
    args: DescribeTableCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DynamoDB>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <fullname>Amazon DynamoDB</fullname>
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast
 *             and predictable performance with seamless scalability. DynamoDB lets you
 *             offload the administrative burdens of operating and scaling a distributed database, so
 *             that you don't have to worry about hardware provisioning, setup and configuration,
 *             replication, software patching, or cluster scaling.</p>
 *          <p>With DynamoDB, you can create database tables that can store and retrieve
 *             any amount of data, and serve any level of request traffic. You can scale up or scale
 *             down your tables' throughput capacity without downtime or performance degradation, and
 *             use the Amazon Web Services Management Console to monitor resource utilization and performance
 *             metrics.</p>
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over
 *             a sufficient number of servers to handle your throughput and storage requirements, while
 *             maintaining consistent and fast performance. All of your data is stored on solid state
 *             disks (SSDs) and automatically replicated across multiple Availability Zones in an
 *                 Amazon Web Services Region, providing built-in high availability and data
 *             durability.</p>
 * @public
 */
export class DynamoDB extends DynamoDBClient implements DynamoDB {}
createAggregatedClient(commands, DynamoDB, { paginators, waiters });
