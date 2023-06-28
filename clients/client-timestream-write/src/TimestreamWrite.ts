// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateBatchLoadTaskCommand,
  CreateBatchLoadTaskCommandInput,
  CreateBatchLoadTaskCommandOutput,
} from "./commands/CreateBatchLoadTaskCommand";
import {
  CreateDatabaseCommand,
  CreateDatabaseCommandInput,
  CreateDatabaseCommandOutput,
} from "./commands/CreateDatabaseCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  DeleteDatabaseCommand,
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
} from "./commands/DeleteDatabaseCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DescribeBatchLoadTaskCommand,
  DescribeBatchLoadTaskCommandInput,
  DescribeBatchLoadTaskCommandOutput,
} from "./commands/DescribeBatchLoadTaskCommand";
import {
  DescribeDatabaseCommand,
  DescribeDatabaseCommandInput,
  DescribeDatabaseCommandOutput,
} from "./commands/DescribeDatabaseCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "./commands/DescribeTableCommand";
import {
  ListBatchLoadTasksCommand,
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
} from "./commands/ListBatchLoadTasksCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResumeBatchLoadTaskCommand,
  ResumeBatchLoadTaskCommandInput,
  ResumeBatchLoadTaskCommandOutput,
} from "./commands/ResumeBatchLoadTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatabaseCommand,
  UpdateDatabaseCommandInput,
  UpdateDatabaseCommandOutput,
} from "./commands/UpdateDatabaseCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  WriteRecordsCommand,
  WriteRecordsCommandInput,
  WriteRecordsCommandOutput,
} from "./commands/WriteRecordsCommand";
import { TimestreamWriteClient, TimestreamWriteClientConfig } from "./TimestreamWriteClient";

const commands = {
  CreateBatchLoadTaskCommand,
  CreateDatabaseCommand,
  CreateTableCommand,
  DeleteDatabaseCommand,
  DeleteTableCommand,
  DescribeBatchLoadTaskCommand,
  DescribeDatabaseCommand,
  DescribeEndpointsCommand,
  DescribeTableCommand,
  ListBatchLoadTasksCommand,
  ListDatabasesCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  ResumeBatchLoadTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatabaseCommand,
  UpdateTableCommand,
  WriteRecordsCommand,
};

export interface TimestreamWrite {
  /**
   * @see {@link CreateBatchLoadTaskCommand}
   */
  createBatchLoadTask(
    args: CreateBatchLoadTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchLoadTaskCommandOutput>;
  createBatchLoadTask(
    args: CreateBatchLoadTaskCommandInput,
    cb: (err: any, data?: CreateBatchLoadTaskCommandOutput) => void
  ): void;
  createBatchLoadTask(
    args: CreateBatchLoadTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchLoadTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatabaseCommand}
   */
  createDatabase(
    args: CreateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatabaseCommandOutput>;
  createDatabase(args: CreateDatabaseCommandInput, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
  createDatabase(
    args: CreateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
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
   * @see {@link DeleteDatabaseCommand}
   */
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  deleteDatabase(args: DeleteDatabaseCommandInput, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
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
   * @see {@link DescribeBatchLoadTaskCommand}
   */
  describeBatchLoadTask(
    args: DescribeBatchLoadTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchLoadTaskCommandOutput>;
  describeBatchLoadTask(
    args: DescribeBatchLoadTaskCommandInput,
    cb: (err: any, data?: DescribeBatchLoadTaskCommandOutput) => void
  ): void;
  describeBatchLoadTask(
    args: DescribeBatchLoadTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchLoadTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatabaseCommand}
   */
  describeDatabase(
    args: DescribeDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatabaseCommandOutput>;
  describeDatabase(
    args: DescribeDatabaseCommandInput,
    cb: (err: any, data?: DescribeDatabaseCommandOutput) => void
  ): void;
  describeDatabase(
    args: DescribeDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatabaseCommandOutput) => void
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
   * @see {@link ListBatchLoadTasksCommand}
   */
  listBatchLoadTasks(
    args: ListBatchLoadTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchLoadTasksCommandOutput>;
  listBatchLoadTasks(
    args: ListBatchLoadTasksCommandInput,
    cb: (err: any, data?: ListBatchLoadTasksCommandOutput) => void
  ): void;
  listBatchLoadTasks(
    args: ListBatchLoadTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchLoadTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
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
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeBatchLoadTaskCommand}
   */
  resumeBatchLoadTask(
    args: ResumeBatchLoadTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeBatchLoadTaskCommandOutput>;
  resumeBatchLoadTask(
    args: ResumeBatchLoadTaskCommandInput,
    cb: (err: any, data?: ResumeBatchLoadTaskCommandOutput) => void
  ): void;
  resumeBatchLoadTask(
    args: ResumeBatchLoadTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeBatchLoadTaskCommandOutput) => void
  ): void;

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
   * @see {@link UpdateDatabaseCommand}
   */
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  updateDatabase(args: UpdateDatabaseCommandInput, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
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
   * @see {@link WriteRecordsCommand}
   */
  writeRecords(args: WriteRecordsCommandInput, options?: __HttpHandlerOptions): Promise<WriteRecordsCommandOutput>;
  writeRecords(args: WriteRecordsCommandInput, cb: (err: any, data?: WriteRecordsCommandOutput) => void): void;
  writeRecords(
    args: WriteRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WriteRecordsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Timestream Write</fullname>
 *          <p>Amazon Timestream is a fast, scalable, fully managed time-series database service
 *          that makes it easy to store and analyze trillions of time-series data points per day. With
 *             Timestream, you can easily store and analyze IoT sensor data to derive insights
 *          from your IoT applications. You can analyze industrial telemetry to streamline equipment
 *          management and maintenance. You can also store and analyze log data and metrics to improve
 *          the performance and availability of your applications. </p>
 *          <p>Timestream is built from the ground up to effectively ingest, process, and
 *          store time-series data. It organizes data to optimize query processing. It automatically
 *          scales based on the volume of data ingested and on the query volume to ensure you receive
 *          optimal performance while inserting and querying data. As your data grows over time,
 *             Timestream’s adaptive query processing engine spans across storage tiers to
 *          provide fast analysis while reducing costs.</p>
 */
export class TimestreamWrite extends TimestreamWriteClient implements TimestreamWrite {}
createAggregatedClient(commands, TimestreamWrite);
