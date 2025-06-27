// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateNamespaceCommand,
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
} from "./commands/CreateNamespaceCommand";
import {
  CreateTableBucketCommand,
  CreateTableBucketCommandInput,
  CreateTableBucketCommandOutput,
} from "./commands/CreateTableBucketCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteTableBucketCommand,
  DeleteTableBucketCommandInput,
  DeleteTableBucketCommandOutput,
} from "./commands/DeleteTableBucketCommand";
import {
  DeleteTableBucketEncryptionCommand,
  DeleteTableBucketEncryptionCommandInput,
  DeleteTableBucketEncryptionCommandOutput,
} from "./commands/DeleteTableBucketEncryptionCommand";
import {
  DeleteTableBucketPolicyCommand,
  DeleteTableBucketPolicyCommandInput,
  DeleteTableBucketPolicyCommandOutput,
} from "./commands/DeleteTableBucketPolicyCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DeleteTablePolicyCommand,
  DeleteTablePolicyCommandInput,
  DeleteTablePolicyCommandOutput,
} from "./commands/DeleteTablePolicyCommand";
import {
  GetNamespaceCommand,
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
} from "./commands/GetNamespaceCommand";
import {
  GetTableBucketCommand,
  GetTableBucketCommandInput,
  GetTableBucketCommandOutput,
} from "./commands/GetTableBucketCommand";
import {
  GetTableBucketEncryptionCommand,
  GetTableBucketEncryptionCommandInput,
  GetTableBucketEncryptionCommandOutput,
} from "./commands/GetTableBucketEncryptionCommand";
import {
  GetTableBucketMaintenanceConfigurationCommand,
  GetTableBucketMaintenanceConfigurationCommandInput,
  GetTableBucketMaintenanceConfigurationCommandOutput,
} from "./commands/GetTableBucketMaintenanceConfigurationCommand";
import {
  GetTableBucketPolicyCommand,
  GetTableBucketPolicyCommandInput,
  GetTableBucketPolicyCommandOutput,
} from "./commands/GetTableBucketPolicyCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import {
  GetTableEncryptionCommand,
  GetTableEncryptionCommandInput,
  GetTableEncryptionCommandOutput,
} from "./commands/GetTableEncryptionCommand";
import {
  GetTableMaintenanceConfigurationCommand,
  GetTableMaintenanceConfigurationCommandInput,
  GetTableMaintenanceConfigurationCommandOutput,
} from "./commands/GetTableMaintenanceConfigurationCommand";
import {
  GetTableMaintenanceJobStatusCommand,
  GetTableMaintenanceJobStatusCommandInput,
  GetTableMaintenanceJobStatusCommandOutput,
} from "./commands/GetTableMaintenanceJobStatusCommand";
import {
  GetTableMetadataLocationCommand,
  GetTableMetadataLocationCommandInput,
  GetTableMetadataLocationCommandOutput,
} from "./commands/GetTableMetadataLocationCommand";
import {
  GetTablePolicyCommand,
  GetTablePolicyCommandInput,
  GetTablePolicyCommandOutput,
} from "./commands/GetTablePolicyCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
import {
  ListTableBucketsCommand,
  ListTableBucketsCommandInput,
  ListTableBucketsCommandOutput,
} from "./commands/ListTableBucketsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  PutTableBucketEncryptionCommand,
  PutTableBucketEncryptionCommandInput,
  PutTableBucketEncryptionCommandOutput,
} from "./commands/PutTableBucketEncryptionCommand";
import {
  PutTableBucketMaintenanceConfigurationCommand,
  PutTableBucketMaintenanceConfigurationCommandInput,
  PutTableBucketMaintenanceConfigurationCommandOutput,
} from "./commands/PutTableBucketMaintenanceConfigurationCommand";
import {
  PutTableBucketPolicyCommand,
  PutTableBucketPolicyCommandInput,
  PutTableBucketPolicyCommandOutput,
} from "./commands/PutTableBucketPolicyCommand";
import {
  PutTableMaintenanceConfigurationCommand,
  PutTableMaintenanceConfigurationCommandInput,
  PutTableMaintenanceConfigurationCommandOutput,
} from "./commands/PutTableMaintenanceConfigurationCommand";
import {
  PutTablePolicyCommand,
  PutTablePolicyCommandInput,
  PutTablePolicyCommandOutput,
} from "./commands/PutTablePolicyCommand";
import { RenameTableCommand, RenameTableCommandInput, RenameTableCommandOutput } from "./commands/RenameTableCommand";
import {
  UpdateTableMetadataLocationCommand,
  UpdateTableMetadataLocationCommandInput,
  UpdateTableMetadataLocationCommandOutput,
} from "./commands/UpdateTableMetadataLocationCommand";
import { S3TablesClient, S3TablesClientConfig } from "./S3TablesClient";

const commands = {
  CreateNamespaceCommand,
  CreateTableCommand,
  CreateTableBucketCommand,
  DeleteNamespaceCommand,
  DeleteTableCommand,
  DeleteTableBucketCommand,
  DeleteTableBucketEncryptionCommand,
  DeleteTableBucketPolicyCommand,
  DeleteTablePolicyCommand,
  GetNamespaceCommand,
  GetTableCommand,
  GetTableBucketCommand,
  GetTableBucketEncryptionCommand,
  GetTableBucketMaintenanceConfigurationCommand,
  GetTableBucketPolicyCommand,
  GetTableEncryptionCommand,
  GetTableMaintenanceConfigurationCommand,
  GetTableMaintenanceJobStatusCommand,
  GetTableMetadataLocationCommand,
  GetTablePolicyCommand,
  ListNamespacesCommand,
  ListTableBucketsCommand,
  ListTablesCommand,
  PutTableBucketEncryptionCommand,
  PutTableBucketMaintenanceConfigurationCommand,
  PutTableBucketPolicyCommand,
  PutTableMaintenanceConfigurationCommand,
  PutTablePolicyCommand,
  RenameTableCommand,
  UpdateTableMetadataLocationCommand,
};

export interface S3Tables {
  /**
   * @see {@link CreateNamespaceCommand}
   */
  createNamespace(
    args: CreateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamespaceCommandOutput>;
  createNamespace(args: CreateNamespaceCommandInput, cb: (err: any, data?: CreateNamespaceCommandOutput) => void): void;
  createNamespace(
    args: CreateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
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
   * @see {@link CreateTableBucketCommand}
   */
  createTableBucket(
    args: CreateTableBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTableBucketCommandOutput>;
  createTableBucket(
    args: CreateTableBucketCommandInput,
    cb: (err: any, data?: CreateTableBucketCommandOutput) => void
  ): void;
  createTableBucket(
    args: CreateTableBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
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
   * @see {@link DeleteTableBucketCommand}
   */
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableBucketCommandOutput>;
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    cb: (err: any, data?: DeleteTableBucketCommandOutput) => void
  ): void;
  deleteTableBucket(
    args: DeleteTableBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketEncryptionCommand}
   */
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableBucketEncryptionCommandOutput>;
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    cb: (err: any, data?: DeleteTableBucketEncryptionCommandOutput) => void
  ): void;
  deleteTableBucketEncryption(
    args: DeleteTableBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableBucketPolicyCommand}
   */
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableBucketPolicyCommandOutput>;
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteTableBucketPolicyCommandOutput) => void
  ): void;
  deleteTableBucketPolicy(
    args: DeleteTableBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTablePolicyCommand}
   */
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTablePolicyCommandOutput>;
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    cb: (err: any, data?: DeleteTablePolicyCommandOutput) => void
  ): void;
  deleteTablePolicy(
    args: DeleteTablePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamespaceCommand}
   */
  getNamespace(args: GetNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<GetNamespaceCommandOutput>;
  getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
  getNamespace(
    args: GetNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(): Promise<GetTableCommandOutput>;
  getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketCommand}
   */
  getTableBucket(
    args: GetTableBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableBucketCommandOutput>;
  getTableBucket(args: GetTableBucketCommandInput, cb: (err: any, data?: GetTableBucketCommandOutput) => void): void;
  getTableBucket(
    args: GetTableBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketEncryptionCommand}
   */
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableBucketEncryptionCommandOutput>;
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    cb: (err: any, data?: GetTableBucketEncryptionCommandOutput) => void
  ): void;
  getTableBucketEncryption(
    args: GetTableBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketMaintenanceConfigurationCommand}
   */
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableBucketMaintenanceConfigurationCommandOutput>;
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: GetTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;
  getTableBucketMaintenanceConfiguration(
    args: GetTableBucketMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableBucketPolicyCommand}
   */
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableBucketPolicyCommandOutput>;
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    cb: (err: any, data?: GetTableBucketPolicyCommandOutput) => void
  ): void;
  getTableBucketPolicy(
    args: GetTableBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableEncryptionCommand}
   */
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableEncryptionCommandOutput>;
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    cb: (err: any, data?: GetTableEncryptionCommandOutput) => void
  ): void;
  getTableEncryption(
    args: GetTableEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMaintenanceConfigurationCommand}
   */
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMaintenanceConfigurationCommandOutput>;
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: GetTableMaintenanceConfigurationCommandOutput) => void
  ): void;
  getTableMaintenanceConfiguration(
    args: GetTableMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMaintenanceJobStatusCommand}
   */
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMaintenanceJobStatusCommandOutput>;
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    cb: (err: any, data?: GetTableMaintenanceJobStatusCommandOutput) => void
  ): void;
  getTableMaintenanceJobStatus(
    args: GetTableMaintenanceJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMaintenanceJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableMetadataLocationCommand}
   */
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMetadataLocationCommandOutput>;
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    cb: (err: any, data?: GetTableMetadataLocationCommandOutput) => void
  ): void;
  getTableMetadataLocation(
    args: GetTableMetadataLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMetadataLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTablePolicyCommand}
   */
  getTablePolicy(
    args: GetTablePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTablePolicyCommandOutput>;
  getTablePolicy(args: GetTablePolicyCommandInput, cb: (err: any, data?: GetTablePolicyCommandOutput) => void): void;
  getTablePolicy(
    args: GetTablePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableBucketsCommand}
   */
  listTableBuckets(): Promise<ListTableBucketsCommandOutput>;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableBucketsCommandOutput>;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    cb: (err: any, data?: ListTableBucketsCommandOutput) => void
  ): void;
  listTableBuckets(
    args: ListTableBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableBucketsCommandOutput) => void
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
   * @see {@link PutTableBucketEncryptionCommand}
   */
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTableBucketEncryptionCommandOutput>;
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    cb: (err: any, data?: PutTableBucketEncryptionCommandOutput) => void
  ): void;
  putTableBucketEncryption(
    args: PutTableBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTableBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketMaintenanceConfigurationCommand}
   */
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTableBucketMaintenanceConfigurationCommandOutput>;
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: PutTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;
  putTableBucketMaintenanceConfiguration(
    args: PutTableBucketMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTableBucketMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableBucketPolicyCommand}
   */
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTableBucketPolicyCommandOutput>;
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    cb: (err: any, data?: PutTableBucketPolicyCommandOutput) => void
  ): void;
  putTableBucketPolicy(
    args: PutTableBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTableBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTableMaintenanceConfigurationCommand}
   */
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTableMaintenanceConfigurationCommandOutput>;
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    cb: (err: any, data?: PutTableMaintenanceConfigurationCommandOutput) => void
  ): void;
  putTableMaintenanceConfiguration(
    args: PutTableMaintenanceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTableMaintenanceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTablePolicyCommand}
   */
  putTablePolicy(
    args: PutTablePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTablePolicyCommandOutput>;
  putTablePolicy(args: PutTablePolicyCommandInput, cb: (err: any, data?: PutTablePolicyCommandOutput) => void): void;
  putTablePolicy(
    args: PutTablePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTablePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RenameTableCommand}
   */
  renameTable(args: RenameTableCommandInput, options?: __HttpHandlerOptions): Promise<RenameTableCommandOutput>;
  renameTable(args: RenameTableCommandInput, cb: (err: any, data?: RenameTableCommandOutput) => void): void;
  renameTable(
    args: RenameTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenameTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableMetadataLocationCommand}
   */
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableMetadataLocationCommandOutput>;
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    cb: (err: any, data?: UpdateTableMetadataLocationCommandOutput) => void
  ): void;
  updateTableMetadataLocation(
    args: UpdateTableMetadataLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableMetadataLocationCommandOutput) => void
  ): void;
}

/**
 * <p>An Amazon S3 table represents a structured dataset consisting of tabular data in <a href="https://parquet.apache.org/docs/">Apache Parquet</a> format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the <a href="https://iceberg.apache.org/docs/latest/">Apache Iceberg</a> table format. Through integration with the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html">Amazon Web Services Glue Data Catalog</a> you can interact with your tables using Amazon Web Services analytics services, such as <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/athena/">Amazon Athena</a> and <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/redshift/">Amazon Redshift</a>. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets.html">Amazon S3 table buckets</a>.</p>
 * @public
 */
export class S3Tables extends S3TablesClient implements S3Tables {}
createAggregatedClient(commands, S3Tables);
