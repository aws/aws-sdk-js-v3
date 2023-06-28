// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import {
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
} from "./commands/BatchGetItemCommand";
import {
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
} from "./commands/BatchWriteItemCommand";
import {
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
} from "./commands/CreateBackupCommand";
import {
  CreateGlobalTableCommand,
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
} from "./commands/CreateGlobalTableCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import { DeleteItemCommand, DeleteItemCommandInput, DeleteItemCommandOutput } from "./commands/DeleteItemCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DescribeBackupCommand,
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput,
} from "./commands/DescribeBackupCommand";
import {
  DescribeContinuousBackupsCommand,
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
} from "./commands/DescribeContinuousBackupsCommand";
import {
  DescribeContributorInsightsCommand,
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
} from "./commands/DescribeContributorInsightsCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeExportCommand,
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
} from "./commands/DescribeExportCommand";
import {
  DescribeGlobalTableCommand,
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
} from "./commands/DescribeGlobalTableCommand";
import {
  DescribeGlobalTableSettingsCommand,
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
} from "./commands/DescribeGlobalTableSettingsCommand";
import {
  DescribeImportCommand,
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
} from "./commands/DescribeImportCommand";
import {
  DescribeKinesisStreamingDestinationCommand,
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
} from "./commands/DescribeKinesisStreamingDestinationCommand";
import {
  DescribeLimitsCommand,
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
} from "./commands/DescribeLimitsCommand";
import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "./commands/DescribeTableCommand";
import {
  DescribeTableReplicaAutoScalingCommand,
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
} from "./commands/DescribeTableReplicaAutoScalingCommand";
import {
  DescribeTimeToLiveCommand,
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
} from "./commands/DescribeTimeToLiveCommand";
import {
  DisableKinesisStreamingDestinationCommand,
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
} from "./commands/DisableKinesisStreamingDestinationCommand";
import {
  EnableKinesisStreamingDestinationCommand,
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
} from "./commands/EnableKinesisStreamingDestinationCommand";
import {
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "./commands/ExecuteStatementCommand";
import {
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
} from "./commands/ExecuteTransactionCommand";
import {
  ExportTableToPointInTimeCommand,
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
} from "./commands/ExportTableToPointInTimeCommand";
import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput } from "./commands/GetItemCommand";
import { ImportTableCommand, ImportTableCommandInput, ImportTableCommandOutput } from "./commands/ImportTableCommand";
import { ListBackupsCommand, ListBackupsCommandInput, ListBackupsCommandOutput } from "./commands/ListBackupsCommand";
import {
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "./commands/ListContributorInsightsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import {
  ListGlobalTablesCommand,
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput,
} from "./commands/ListGlobalTablesCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsOfResourceCommand,
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
} from "./commands/ListTagsOfResourceCommand";
import { PutItemCommand, PutItemCommandInput, PutItemCommandOutput } from "./commands/PutItemCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import {
  RestoreTableFromBackupCommand,
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
} from "./commands/RestoreTableFromBackupCommand";
import {
  RestoreTableToPointInTimeCommand,
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
} from "./commands/RestoreTableToPointInTimeCommand";
import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TransactGetItemsCommand,
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
} from "./commands/TransactGetItemsCommand";
import {
  TransactWriteItemsCommand,
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput,
} from "./commands/TransactWriteItemsCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContinuousBackupsCommand,
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
} from "./commands/UpdateContinuousBackupsCommand";
import {
  UpdateContributorInsightsCommand,
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
} from "./commands/UpdateContributorInsightsCommand";
import {
  UpdateGlobalTableCommand,
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
} from "./commands/UpdateGlobalTableCommand";
import {
  UpdateGlobalTableSettingsCommand,
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
} from "./commands/UpdateGlobalTableSettingsCommand";
import { UpdateItemCommand, UpdateItemCommandInput, UpdateItemCommandOutput } from "./commands/UpdateItemCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  UpdateTableReplicaAutoScalingCommand,
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
} from "./commands/UpdateTableReplicaAutoScalingCommand";
import {
  UpdateTimeToLiveCommand,
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput,
} from "./commands/UpdateTimeToLiveCommand";
import { DynamoDBClient, DynamoDBClientConfig } from "./DynamoDBClient";

const commands = {
  BatchExecuteStatementCommand,
  BatchGetItemCommand,
  BatchWriteItemCommand,
  CreateBackupCommand,
  CreateGlobalTableCommand,
  CreateTableCommand,
  DeleteBackupCommand,
  DeleteItemCommand,
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
  ImportTableCommand,
  ListBackupsCommand,
  ListContributorInsightsCommand,
  ListExportsCommand,
  ListGlobalTablesCommand,
  ListImportsCommand,
  ListTablesCommand,
  ListTagsOfResourceCommand,
  PutItemCommand,
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
  UpdateTableCommand,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTimeToLiveCommand,
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
  batchGetItem(args: BatchGetItemCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetItemCommandOutput>;
  batchGetItem(args: BatchGetItemCommandInput, cb: (err: any, data?: BatchGetItemCommandOutput) => void): void;
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
  batchWriteItem(args: BatchWriteItemCommandInput, cb: (err: any, data?: BatchWriteItemCommandOutput) => void): void;
  batchWriteItem(
    args: BatchWriteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(args: CreateBackupCommandInput, options?: __HttpHandlerOptions): Promise<CreateBackupCommandOutput>;
  createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
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
  createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(args: DeleteBackupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBackupCommandOutput>;
  deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteItemCommand}
   */
  deleteItem(args: DeleteItemCommandInput, options?: __HttpHandlerOptions): Promise<DeleteItemCommandOutput>;
  deleteItem(args: DeleteItemCommandInput, cb: (err: any, data?: DeleteItemCommandOutput) => void): void;
  deleteItem(
    args: DeleteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteItemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
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
  describeBackup(args: DescribeBackupCommandInput, cb: (err: any, data?: DescribeBackupCommandOutput) => void): void;
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
  describeExport(args: DescribeExportCommandInput, cb: (err: any, data?: DescribeExportCommandOutput) => void): void;
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
  describeImport(args: DescribeImportCommandInput, cb: (err: any, data?: DescribeImportCommandOutput) => void): void;
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
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLimitsCommandOutput>;
  describeLimits(args: DescribeLimitsCommandInput, cb: (err: any, data?: DescribeLimitsCommandOutput) => void): void;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(args: DescribeTableCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableCommandOutput>;
  describeTable(args: DescribeTableCommandInput, cb: (err: any, data?: DescribeTableCommandOutput) => void): void;
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
  getItem(args: GetItemCommandInput, options?: __HttpHandlerOptions): Promise<GetItemCommandOutput>;
  getItem(args: GetItemCommandInput, cb: (err: any, data?: GetItemCommandOutput) => void): void;
  getItem(
    args: GetItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetItemCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportTableCommand}
   */
  importTable(args: ImportTableCommandInput, options?: __HttpHandlerOptions): Promise<ImportTableCommandOutput>;
  importTable(args: ImportTableCommandInput, cb: (err: any, data?: ImportTableCommandOutput) => void): void;
  importTable(
    args: ImportTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportTableCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupsCommand}
   */
  listBackups(args: ListBackupsCommandInput, options?: __HttpHandlerOptions): Promise<ListBackupsCommandOutput>;
  listBackups(args: ListBackupsCommandInput, cb: (err: any, data?: ListBackupsCommandOutput) => void): void;
  listBackups(
    args: ListBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContributorInsightsCommand}
   */
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
  listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGlobalTablesCommand}
   */
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
  listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
  listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
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
  putItem(args: PutItemCommandInput, options?: __HttpHandlerOptions): Promise<PutItemCommandOutput>;
  putItem(args: PutItemCommandInput, cb: (err: any, data?: PutItemCommandOutput) => void): void;
  putItem(
    args: PutItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
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
  scan(args: ScanCommandInput, options?: __HttpHandlerOptions): Promise<ScanCommandOutput>;
  scan(args: ScanCommandInput, cb: (err: any, data?: ScanCommandOutput) => void): void;
  scan(args: ScanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ScanCommandOutput) => void): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
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
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateItem(args: UpdateItemCommandInput, options?: __HttpHandlerOptions): Promise<UpdateItemCommandOutput>;
  updateItem(args: UpdateItemCommandInput, cb: (err: any, data?: UpdateItemCommandOutput) => void): void;
  updateItem(
    args: UpdateItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
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
}

/**
 * @public
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
 */
export class DynamoDB extends DynamoDBClient implements DynamoDB {}
createAggregatedClient(commands, DynamoDB);
