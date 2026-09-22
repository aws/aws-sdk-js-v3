// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateNamespaceCommandInput,
  type CreateNamespaceCommandOutput,
  CreateNamespaceCommand,
} from "./commands/CreateNamespaceCommand";
import {
  type CreateTableBucketCommandInput,
  type CreateTableBucketCommandOutput,
  CreateTableBucketCommand,
} from "./commands/CreateTableBucketCommand";
import {
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  CreateTableCommand,
} from "./commands/CreateTableCommand";
import {
  type DeleteNamespaceCommandInput,
  type DeleteNamespaceCommandOutput,
  DeleteNamespaceCommand,
} from "./commands/DeleteNamespaceCommand";
import {
  type DeleteTableBucketCommandInput,
  type DeleteTableBucketCommandOutput,
  DeleteTableBucketCommand,
} from "./commands/DeleteTableBucketCommand";
import {
  type DeleteTableBucketEncryptionCommandInput,
  type DeleteTableBucketEncryptionCommandOutput,
  DeleteTableBucketEncryptionCommand,
} from "./commands/DeleteTableBucketEncryptionCommand";
import {
  type DeleteTableBucketMetricsConfigurationCommandInput,
  type DeleteTableBucketMetricsConfigurationCommandOutput,
  DeleteTableBucketMetricsConfigurationCommand,
} from "./commands/DeleteTableBucketMetricsConfigurationCommand";
import {
  type DeleteTableBucketPolicyCommandInput,
  type DeleteTableBucketPolicyCommandOutput,
  DeleteTableBucketPolicyCommand,
} from "./commands/DeleteTableBucketPolicyCommand";
import {
  type DeleteTableBucketReplicationCommandInput,
  type DeleteTableBucketReplicationCommandOutput,
  DeleteTableBucketReplicationCommand,
} from "./commands/DeleteTableBucketReplicationCommand";
import {
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DeleteTableCommand,
} from "./commands/DeleteTableCommand";
import {
  type DeleteTablePolicyCommandInput,
  type DeleteTablePolicyCommandOutput,
  DeleteTablePolicyCommand,
} from "./commands/DeleteTablePolicyCommand";
import {
  type DeleteTableReplicationCommandInput,
  type DeleteTableReplicationCommandOutput,
  DeleteTableReplicationCommand,
} from "./commands/DeleteTableReplicationCommand";
import {
  type GetNamespaceCommandInput,
  type GetNamespaceCommandOutput,
  GetNamespaceCommand,
} from "./commands/GetNamespaceCommand";
import {
  type GetTableBucketCommandInput,
  type GetTableBucketCommandOutput,
  GetTableBucketCommand,
} from "./commands/GetTableBucketCommand";
import {
  type GetTableBucketEncryptionCommandInput,
  type GetTableBucketEncryptionCommandOutput,
  GetTableBucketEncryptionCommand,
} from "./commands/GetTableBucketEncryptionCommand";
import {
  type GetTableBucketMaintenanceConfigurationCommandInput,
  type GetTableBucketMaintenanceConfigurationCommandOutput,
  GetTableBucketMaintenanceConfigurationCommand,
} from "./commands/GetTableBucketMaintenanceConfigurationCommand";
import {
  type GetTableBucketMetricsConfigurationCommandInput,
  type GetTableBucketMetricsConfigurationCommandOutput,
  GetTableBucketMetricsConfigurationCommand,
} from "./commands/GetTableBucketMetricsConfigurationCommand";
import {
  type GetTableBucketPolicyCommandInput,
  type GetTableBucketPolicyCommandOutput,
  GetTableBucketPolicyCommand,
} from "./commands/GetTableBucketPolicyCommand";
import {
  type GetTableBucketReplicationCommandInput,
  type GetTableBucketReplicationCommandOutput,
  GetTableBucketReplicationCommand,
} from "./commands/GetTableBucketReplicationCommand";
import {
  type GetTableBucketStorageClassCommandInput,
  type GetTableBucketStorageClassCommandOutput,
  GetTableBucketStorageClassCommand,
} from "./commands/GetTableBucketStorageClassCommand";
import { type GetTableCommandInput, type GetTableCommandOutput, GetTableCommand } from "./commands/GetTableCommand";
import {
  type GetTableEncryptionCommandInput,
  type GetTableEncryptionCommandOutput,
  GetTableEncryptionCommand,
} from "./commands/GetTableEncryptionCommand";
import {
  type GetTableMaintenanceConfigurationCommandInput,
  type GetTableMaintenanceConfigurationCommandOutput,
  GetTableMaintenanceConfigurationCommand,
} from "./commands/GetTableMaintenanceConfigurationCommand";
import {
  type GetTableMaintenanceJobStatusCommandInput,
  type GetTableMaintenanceJobStatusCommandOutput,
  GetTableMaintenanceJobStatusCommand,
} from "./commands/GetTableMaintenanceJobStatusCommand";
import {
  type GetTableMetadataLocationCommandInput,
  type GetTableMetadataLocationCommandOutput,
  GetTableMetadataLocationCommand,
} from "./commands/GetTableMetadataLocationCommand";
import {
  type GetTablePolicyCommandInput,
  type GetTablePolicyCommandOutput,
  GetTablePolicyCommand,
} from "./commands/GetTablePolicyCommand";
import {
  type GetTableRecordExpirationConfigurationCommandInput,
  type GetTableRecordExpirationConfigurationCommandOutput,
  GetTableRecordExpirationConfigurationCommand,
} from "./commands/GetTableRecordExpirationConfigurationCommand";
import {
  type GetTableRecordExpirationJobStatusCommandInput,
  type GetTableRecordExpirationJobStatusCommandOutput,
  GetTableRecordExpirationJobStatusCommand,
} from "./commands/GetTableRecordExpirationJobStatusCommand";
import {
  type GetTableReplicationCommandInput,
  type GetTableReplicationCommandOutput,
  GetTableReplicationCommand,
} from "./commands/GetTableReplicationCommand";
import {
  type GetTableReplicationStatusCommandInput,
  type GetTableReplicationStatusCommandOutput,
  GetTableReplicationStatusCommand,
} from "./commands/GetTableReplicationStatusCommand";
import {
  type GetTableStorageClassCommandInput,
  type GetTableStorageClassCommandOutput,
  GetTableStorageClassCommand,
} from "./commands/GetTableStorageClassCommand";
import {
  type ListNamespacesCommandInput,
  type ListNamespacesCommandOutput,
  ListNamespacesCommand,
} from "./commands/ListNamespacesCommand";
import {
  type ListTableBucketsCommandInput,
  type ListTableBucketsCommandOutput,
  ListTableBucketsCommand,
} from "./commands/ListTableBucketsCommand";
import {
  type ListTablesCommandInput,
  type ListTablesCommandOutput,
  ListTablesCommand,
} from "./commands/ListTablesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutTableBucketEncryptionCommandInput,
  type PutTableBucketEncryptionCommandOutput,
  PutTableBucketEncryptionCommand,
} from "./commands/PutTableBucketEncryptionCommand";
import {
  type PutTableBucketMaintenanceConfigurationCommandInput,
  type PutTableBucketMaintenanceConfigurationCommandOutput,
  PutTableBucketMaintenanceConfigurationCommand,
} from "./commands/PutTableBucketMaintenanceConfigurationCommand";
import {
  type PutTableBucketMetricsConfigurationCommandInput,
  type PutTableBucketMetricsConfigurationCommandOutput,
  PutTableBucketMetricsConfigurationCommand,
} from "./commands/PutTableBucketMetricsConfigurationCommand";
import {
  type PutTableBucketPolicyCommandInput,
  type PutTableBucketPolicyCommandOutput,
  PutTableBucketPolicyCommand,
} from "./commands/PutTableBucketPolicyCommand";
import {
  type PutTableBucketReplicationCommandInput,
  type PutTableBucketReplicationCommandOutput,
  PutTableBucketReplicationCommand,
} from "./commands/PutTableBucketReplicationCommand";
import {
  type PutTableBucketStorageClassCommandInput,
  type PutTableBucketStorageClassCommandOutput,
  PutTableBucketStorageClassCommand,
} from "./commands/PutTableBucketStorageClassCommand";
import {
  type PutTableMaintenanceConfigurationCommandInput,
  type PutTableMaintenanceConfigurationCommandOutput,
  PutTableMaintenanceConfigurationCommand,
} from "./commands/PutTableMaintenanceConfigurationCommand";
import {
  type PutTablePolicyCommandInput,
  type PutTablePolicyCommandOutput,
  PutTablePolicyCommand,
} from "./commands/PutTablePolicyCommand";
import {
  type PutTableRecordExpirationConfigurationCommandInput,
  type PutTableRecordExpirationConfigurationCommandOutput,
  PutTableRecordExpirationConfigurationCommand,
} from "./commands/PutTableRecordExpirationConfigurationCommand";
import {
  type PutTableReplicationCommandInput,
  type PutTableReplicationCommandOutput,
  PutTableReplicationCommand,
} from "./commands/PutTableReplicationCommand";
import {
  type RenameTableCommandInput,
  type RenameTableCommandOutput,
  RenameTableCommand,
} from "./commands/RenameTableCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateTableMetadataLocationCommandInput,
  type UpdateTableMetadataLocationCommandOutput,
  UpdateTableMetadataLocationCommand,
} from "./commands/UpdateTableMetadataLocationCommand";
import { paginateListNamespaces } from "./pagination/ListNamespacesPaginator";
import { paginateListTableBuckets } from "./pagination/ListTableBucketsPaginator";
import { paginateListTables } from "./pagination/ListTablesPaginator";
import { S3TablesClient } from "./S3TablesClient";

const commands = {
  CreateNamespaceCommand,
  CreateTableCommand,
  CreateTableBucketCommand,
  DeleteNamespaceCommand,
  DeleteTableCommand,
  DeleteTableBucketCommand,
  DeleteTableBucketEncryptionCommand,
  DeleteTableBucketMetricsConfigurationCommand,
  DeleteTableBucketPolicyCommand,
  DeleteTableBucketReplicationCommand,
  DeleteTablePolicyCommand,
  DeleteTableReplicationCommand,
  GetNamespaceCommand,
  GetTableCommand,
  GetTableBucketCommand,
  GetTableBucketEncryptionCommand,
  GetTableBucketMaintenanceConfigurationCommand,
  GetTableBucketMetricsConfigurationCommand,
  GetTableBucketPolicyCommand,
  GetTableBucketReplicationCommand,
  GetTableBucketStorageClassCommand,
  GetTableEncryptionCommand,
  GetTableMaintenanceConfigurationCommand,
  GetTableMaintenanceJobStatusCommand,
  GetTableMetadataLocationCommand,
  GetTablePolicyCommand,
  GetTableRecordExpirationConfigurationCommand,
  GetTableRecordExpirationJobStatusCommand,
  GetTableReplicationCommand,
  GetTableReplicationStatusCommand,
  GetTableStorageClassCommand,
  ListNamespacesCommand,
  ListTableBucketsCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  PutTableBucketEncryptionCommand,
  PutTableBucketMaintenanceConfigurationCommand,
  PutTableBucketMetricsConfigurationCommand,
  PutTableBucketPolicyCommand,
  PutTableBucketReplicationCommand,
  PutTableBucketStorageClassCommand,
  PutTableMaintenanceConfigurationCommand,
  PutTablePolicyCommand,
  PutTableRecordExpirationConfigurationCommand,
  PutTableReplicationCommand,
  RenameTableCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateTableMetadataLocationCommand,
};
const paginators = {
  paginateListNamespaces,
  paginateListTableBuckets,
  paginateListTables,
};

/**
 * @public
 */
export interface S3TablesRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface S3Tables {
  /**
   * @see {@link CreateNamespaceCommand}
   */
  createNamespace(
    args: CreateNamespaceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<CreateNamespaceCommandOutput>;
  createNamespace(
    args: CreateNamespaceCommandInput,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  createNamespace(
    args: CreateNamespaceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<CreateTableCommandOutput>;
  createTable(
    args: CreateTableCommandInput,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  createTable(
    args: CreateTableCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableBucketCommand}
   */
  createTableBucket(
    args: CreateTableBucketCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<CreateTableBucketCommandOutput>;
  createTableBucket(
    args: CreateTableBucketCommandInput,
    cb: (err: any, data?: CreateTableBucketCommandOutput) => void
  ): void;
  createTableBucket(
    args: CreateTableBucketCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: CreateTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableCommandOutput>;
  deleteTable(
    args: DeleteTableCommandInput,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  deleteTable(
    args: DeleteTableCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketCommand}
   */
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableBucketCommandOutput>;
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    cb: (err: any, data?: DeleteTableBucketCommandOutput) => void
  ): void;
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketEncryptionCommand}
   */
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableBucketEncryptionCommandOutput>;
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    cb: (err: any, data?: DeleteTableBucketEncryptionCommandOutput) => void
  ): void;
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketMetricsConfigurationCommand}
   */
  deleteTableBucketMetricsConfiguration(
    args: DeleteTableBucketMetricsConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableBucketMetricsConfigurationCommandOutput>;
  deleteTableBucketMetricsConfiguration(
    args: DeleteTableBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: DeleteTableBucketMetricsConfigurationCommandOutput) => void
  ): void;
  deleteTableBucketMetricsConfiguration(
    args: DeleteTableBucketMetricsConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketPolicyCommand}
   */
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableBucketPolicyCommandOutput>;
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteTableBucketPolicyCommandOutput) => void
  ): void;
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketReplicationCommand}
   */
  deleteTableBucketReplication(
    args: DeleteTableBucketReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableBucketReplicationCommandOutput>;
  deleteTableBucketReplication(
    args: DeleteTableBucketReplicationCommandInput,
    cb: (err: any, data?: DeleteTableBucketReplicationCommandOutput) => void
  ): void;
  deleteTableBucketReplication(
    args: DeleteTableBucketReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTablePolicyCommand}
   */
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTablePolicyCommandOutput>;
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    cb: (err: any, data?: DeleteTablePolicyCommandOutput) => void
  ): void;
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableReplicationCommand}
   */
  deleteTableReplication(
    args: DeleteTableReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<DeleteTableReplicationCommandOutput>;
  deleteTableReplication(
    args: DeleteTableReplicationCommandInput,
    cb: (err: any, data?: DeleteTableReplicationCommandOutput) => void
  ): void;
  deleteTableReplication(
    args: DeleteTableReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: DeleteTableReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamespaceCommand}
   */
  getNamespace(
    args: GetNamespaceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetNamespaceCommandOutput>;
  getNamespace(
    args: GetNamespaceCommandInput,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;
  getNamespace(
    args: GetNamespaceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(): Promise<GetTableCommandOutput>;
  getTable(
    args: GetTableCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableCommandOutput>;
  getTable(
    args: GetTableCommandInput,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  getTable(
    args: GetTableCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketCommand}
   */
  getTableBucket(
    args: GetTableBucketCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketCommandOutput>;
  getTableBucket(
    args: GetTableBucketCommandInput,
    cb: (err: any, data?: GetTableBucketCommandOutput) => void
  ): void;
  getTableBucket(
    args: GetTableBucketCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketEncryptionCommand}
   */
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketEncryptionCommandOutput>;
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    cb: (err: any, data?: GetTableBucketEncryptionCommandOutput) => void
  ): void;
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketMaintenanceConfigurationCommand}
   */
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketMaintenanceConfigurationCommandOutput>;
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: GetTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketMetricsConfigurationCommand}
   */
  getTableBucketMetricsConfiguration(
    args: GetTableBucketMetricsConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketMetricsConfigurationCommandOutput>;
  getTableBucketMetricsConfiguration(
    args: GetTableBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: GetTableBucketMetricsConfigurationCommandOutput) => void
  ): void;
  getTableBucketMetricsConfiguration(
    args: GetTableBucketMetricsConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketPolicyCommand}
   */
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketPolicyCommandOutput>;
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    cb: (err: any, data?: GetTableBucketPolicyCommandOutput) => void
  ): void;
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketReplicationCommand}
   */
  getTableBucketReplication(
    args: GetTableBucketReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketReplicationCommandOutput>;
  getTableBucketReplication(
    args: GetTableBucketReplicationCommandInput,
    cb: (err: any, data?: GetTableBucketReplicationCommandOutput) => void
  ): void;
  getTableBucketReplication(
    args: GetTableBucketReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketStorageClassCommand}
   */
  getTableBucketStorageClass(
    args: GetTableBucketStorageClassCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableBucketStorageClassCommandOutput>;
  getTableBucketStorageClass(
    args: GetTableBucketStorageClassCommandInput,
    cb: (err: any, data?: GetTableBucketStorageClassCommandOutput) => void
  ): void;
  getTableBucketStorageClass(
    args: GetTableBucketStorageClassCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableBucketStorageClassCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableEncryptionCommand}
   */
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableEncryptionCommandOutput>;
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    cb: (err: any, data?: GetTableEncryptionCommandOutput) => void
  ): void;
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMaintenanceConfigurationCommand}
   */
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableMaintenanceConfigurationCommandOutput>;
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: GetTableMaintenanceConfigurationCommandOutput) => void
  ): void;
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMaintenanceJobStatusCommand}
   */
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableMaintenanceJobStatusCommandOutput>;
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    cb: (err: any, data?: GetTableMaintenanceJobStatusCommandOutput) => void
  ): void;
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableMaintenanceJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMetadataLocationCommand}
   */
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableMetadataLocationCommandOutput>;
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    cb: (err: any, data?: GetTableMetadataLocationCommandOutput) => void
  ): void;
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableMetadataLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTablePolicyCommand}
   */
  getTablePolicy(
    args: GetTablePolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTablePolicyCommandOutput>;
  getTablePolicy(
    args: GetTablePolicyCommandInput,
    cb: (err: any, data?: GetTablePolicyCommandOutput) => void
  ): void;
  getTablePolicy(
    args: GetTablePolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableRecordExpirationConfigurationCommand}
   */
  getTableRecordExpirationConfiguration(
    args: GetTableRecordExpirationConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableRecordExpirationConfigurationCommandOutput>;
  getTableRecordExpirationConfiguration(
    args: GetTableRecordExpirationConfigurationCommandInput,
    cb: (err: any, data?: GetTableRecordExpirationConfigurationCommandOutput) => void
  ): void;
  getTableRecordExpirationConfiguration(
    args: GetTableRecordExpirationConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableRecordExpirationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableRecordExpirationJobStatusCommand}
   */
  getTableRecordExpirationJobStatus(
    args: GetTableRecordExpirationJobStatusCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableRecordExpirationJobStatusCommandOutput>;
  getTableRecordExpirationJobStatus(
    args: GetTableRecordExpirationJobStatusCommandInput,
    cb: (err: any, data?: GetTableRecordExpirationJobStatusCommandOutput) => void
  ): void;
  getTableRecordExpirationJobStatus(
    args: GetTableRecordExpirationJobStatusCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableRecordExpirationJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableReplicationCommand}
   */
  getTableReplication(
    args: GetTableReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableReplicationCommandOutput>;
  getTableReplication(
    args: GetTableReplicationCommandInput,
    cb: (err: any, data?: GetTableReplicationCommandOutput) => void
  ): void;
  getTableReplication(
    args: GetTableReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableReplicationStatusCommand}
   */
  getTableReplicationStatus(
    args: GetTableReplicationStatusCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableReplicationStatusCommandOutput>;
  getTableReplicationStatus(
    args: GetTableReplicationStatusCommandInput,
    cb: (err: any, data?: GetTableReplicationStatusCommandOutput) => void
  ): void;
  getTableReplicationStatus(
    args: GetTableReplicationStatusCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableReplicationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableStorageClassCommand}
   */
  getTableStorageClass(
    args: GetTableStorageClassCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<GetTableStorageClassCommandOutput>;
  getTableStorageClass(
    args: GetTableStorageClassCommandInput,
    cb: (err: any, data?: GetTableStorageClassCommandOutput) => void
  ): void;
  getTableStorageClass(
    args: GetTableStorageClassCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: GetTableStorageClassCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableBucketsCommand}
   */
  listTableBuckets(): Promise<ListTableBucketsCommandOutput>;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<ListTableBucketsCommandOutput>;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    cb: (err: any, data?: ListTableBucketsCommandOutput) => void
  ): void;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: ListTableBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(
    args: ListTablesCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<ListTablesCommandOutput>;
  listTables(
    args: ListTablesCommandInput,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;
  listTables(
    args: ListTablesCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketEncryptionCommand}
   */
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketEncryptionCommandOutput>;
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    cb: (err: any, data?: PutTableBucketEncryptionCommandOutput) => void
  ): void;
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketMaintenanceConfigurationCommand}
   */
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketMaintenanceConfigurationCommandOutput>;
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: PutTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketMetricsConfigurationCommand}
   */
  putTableBucketMetricsConfiguration(
    args: PutTableBucketMetricsConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketMetricsConfigurationCommandOutput>;
  putTableBucketMetricsConfiguration(
    args: PutTableBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: PutTableBucketMetricsConfigurationCommandOutput) => void
  ): void;
  putTableBucketMetricsConfiguration(
    args: PutTableBucketMetricsConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketPolicyCommand}
   */
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketPolicyCommandOutput>;
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    cb: (err: any, data?: PutTableBucketPolicyCommandOutput) => void
  ): void;
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketReplicationCommand}
   */
  putTableBucketReplication(
    args: PutTableBucketReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketReplicationCommandOutput>;
  putTableBucketReplication(
    args: PutTableBucketReplicationCommandInput,
    cb: (err: any, data?: PutTableBucketReplicationCommandOutput) => void
  ): void;
  putTableBucketReplication(
    args: PutTableBucketReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketStorageClassCommand}
   */
  putTableBucketStorageClass(
    args: PutTableBucketStorageClassCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableBucketStorageClassCommandOutput>;
  putTableBucketStorageClass(
    args: PutTableBucketStorageClassCommandInput,
    cb: (err: any, data?: PutTableBucketStorageClassCommandOutput) => void
  ): void;
  putTableBucketStorageClass(
    args: PutTableBucketStorageClassCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableBucketStorageClassCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableMaintenanceConfigurationCommand}
   */
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableMaintenanceConfigurationCommandOutput>;
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: PutTableMaintenanceConfigurationCommandOutput) => void
  ): void;
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTablePolicyCommand}
   */
  putTablePolicy(
    args: PutTablePolicyCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTablePolicyCommandOutput>;
  putTablePolicy(
    args: PutTablePolicyCommandInput,
    cb: (err: any, data?: PutTablePolicyCommandOutput) => void
  ): void;
  putTablePolicy(
    args: PutTablePolicyCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableRecordExpirationConfigurationCommand}
   */
  putTableRecordExpirationConfiguration(
    args: PutTableRecordExpirationConfigurationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableRecordExpirationConfigurationCommandOutput>;
  putTableRecordExpirationConfiguration(
    args: PutTableRecordExpirationConfigurationCommandInput,
    cb: (err: any, data?: PutTableRecordExpirationConfigurationCommandOutput) => void
  ): void;
  putTableRecordExpirationConfiguration(
    args: PutTableRecordExpirationConfigurationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableRecordExpirationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableReplicationCommand}
   */
  putTableReplication(
    args: PutTableReplicationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<PutTableReplicationCommandOutput>;
  putTableReplication(
    args: PutTableReplicationCommandInput,
    cb: (err: any, data?: PutTableReplicationCommandOutput) => void
  ): void;
  putTableReplication(
    args: PutTableReplicationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: PutTableReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link RenameTableCommand}
   */
  renameTable(
    args: RenameTableCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<RenameTableCommandOutput>;
  renameTable(
    args: RenameTableCommandInput,
    cb: (err: any, data?: RenameTableCommandOutput) => void
  ): void;
  renameTable(
    args: RenameTableCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: RenameTableCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableMetadataLocationCommand}
   */
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    options?: S3TablesRequestOptions
  ): Promise<UpdateTableMetadataLocationCommandOutput>;
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    cb: (err: any, data?: UpdateTableMetadataLocationCommandOutput) => void
  ): void;
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    options: S3TablesRequestOptions,
    cb: (err: any, data?: UpdateTableMetadataLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNamespacesCommandOutput}.
   */
  paginateListNamespaces(
    args: ListNamespacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNamespacesCommandOutput>;

  /**
   * @see {@link ListTableBucketsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTableBucketsCommandOutput}.
   */
  paginateListTableBuckets(
    args?: ListTableBucketsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTableBucketsCommandOutput>;

  /**
   * @see {@link ListTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTablesCommandOutput}.
   */
  paginateListTables(
    args: ListTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTablesCommandOutput>;
}

/**
 * <p>An Amazon S3 table represents a structured dataset consisting of tabular data in <a href="https://parquet.apache.org/docs/">Apache Parquet</a> format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the <a href="https://iceberg.apache.org/docs/latest/">Apache Iceberg</a> table format. Through integration with the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html">Amazon Web Services Glue Data Catalog</a> you can interact with your tables using Amazon Web Services analytics services, such as <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/athena/">Amazon Athena</a> and <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/redshift/">Amazon Redshift</a>. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html">Amazon S3 table buckets</a>.</p>
 * @public
 */
export class S3Tables extends S3TablesClient implements S3Tables {}
createAggregatedClient(commands, S3Tables, { paginators });
