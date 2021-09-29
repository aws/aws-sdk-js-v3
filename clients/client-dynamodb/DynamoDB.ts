import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DynamoDBClient } from "./DynamoDBClient";

/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and
 *       predictable performance with seamless scalability. DynamoDB lets you offload the
 *       administrative burdens of operating and scaling a distributed database, so that you don't have
 *       to worry about hardware provisioning, setup and configuration, replication, software patching,
 *       or cluster scaling.</p>
 *
 *          <p>With DynamoDB, you can create database tables that can store and retrieve any amount of
 *       data, and serve any level of request traffic. You can scale up or scale down your tables'
 *       throughput capacity without downtime or performance degradation, and use the AWS Management
 *       Console to monitor resource utilization and performance metrics.</p>
 *
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient
 *       number of servers to handle your throughput and storage requirements, while maintaining
 *       consistent and fast performance. All of your data is stored on solid state disks (SSDs) and
 *       automatically replicated across multiple Availability Zones in an AWS region, providing
 *       built-in high availability and data durability. </p>
 */
export class DynamoDB extends DynamoDBClient {
  /**
   * <p>
   * This operation allows you to perform batch reads and writes on data stored in DynamoDB, using PartiQL.
   * </p>
   */
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchExecuteStatementCommandOutput>;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): Promise<BatchExecuteStatementCommandOutput> | void {
    const command = new BatchExecuteStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or
   *       more tables. You identify requested items by primary key.</p>
   *          <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100
   *             items. <code>BatchGetItem</code> returns a partial result if the response size limit is
   *             exceeded, the table's provisioned throughput is exceeded, or an internal processing
   *             failure occurs. If a partial result is returned, the operation returns a value for
   *                 <code>UnprocessedKeys</code>. You can use this value to retry the operation starting
   *             with the next item to get.</p>
   *          <important>
   *             <p>If you request more than 100 items, <code>BatchGetItem</code> returns a
   *                     <code>ValidationException</code> with the message "Too many items requested for
   *                 the BatchGetItem call."</p>
   *          </important>
   *          <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in
   *             size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns
   *             an appropriate <code>UnprocessedKeys</code> value so you can get the next page of
   *             results. If desired, your application can include its own logic to assemble the pages of
   *             results into one dataset.</p>
   *          <p>If <i>none</i> of the items can be processed due to insufficient
   *             provisioned throughput on all of the tables in the request, then
   *                 <code>BatchGetItem</code> returns a
   *                 <code>ProvisionedThroughputExceededException</code>. If <i>at least
   *                 one</i> of the items is successfully processed, then
   *                 <code>BatchGetItem</code> completes successfully, while returning the keys of the
   *             unread items in <code>UnprocessedKeys</code>.</p>
   *          <important>
   *             <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those
   *         items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>.
   *         If you retry the batch operation immediately, the underlying read or write requests can
   *         still fail due to throttling on the individual tables. If you delay the batch operation
   *         using exponential backoff, the individual requests in the batch are much more likely to
   *         succeed.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch
   *           Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          </important>
   *          <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the
   *       request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to
   *         <code>true</code> for any or all tables.</p>
   *          <p>In order to minimize response latency, <code>BatchGetItem</code> retrieves items in parallel.</p>
   *          <p>When designing your application, keep in mind that DynamoDB does not return items in any
   *       particular order. To help parse the response by item, include the primary key values for the
   *       items in your request in the <code>ProjectionExpression</code> parameter.</p>
   *          <p>If a requested item does not exist, it is not returned in the result. Requests for
   *             nonexistent items consume the minimum read capacity units according to the type of read.
   *             For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  public batchGetItem(
    args: BatchGetItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetItemCommandOutput>;
  public batchGetItem(args: BatchGetItemCommandInput, cb: (err: any, data?: BatchGetItemCommandOutput) => void): void;
  public batchGetItem(
    args: BatchGetItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetItemCommandOutput) => void
  ): void;
  public batchGetItem(
    args: BatchGetItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetItemCommandOutput) => void),
    cb?: (err: any, data?: BatchGetItemCommandOutput) => void
  ): Promise<BatchGetItemCommandOutput> | void {
    const command = new BatchGetItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more
   *             tables. A single call to <code>BatchWriteItem</code> can write up to 16 MB of data,
   *             which can comprise as many as 25 put or delete requests. Individual items to be written
   *             can be as large as 400 KB.</p>
   *          <note>
   *             <p>
   *                <code>BatchWriteItem</code> cannot update items. To update items, use the <code>UpdateItem</code>
   *         action.</p>
   *          </note>
   *          <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in
   *         <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any
   *       requested operations fail because the table's provisioned throughput is exceeded or an
   *       internal processing failure occurs, the failed operations are returned in the
   *         <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the
   *       requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would
   *       check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those
   *       unprocessed items until all items have been processed.</p>
   *          <p>If <i>none</i> of the items can be processed due to insufficient
   *             provisioned throughput on all of the tables in the request, then
   *                 <code>BatchWriteItem</code> returns a
   *                 <code>ProvisionedThroughputExceededException</code>.</p>
   *          <important>
   *             <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those
   *         items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>.
   *         If you retry the batch operation immediately, the underlying read or write requests can
   *         still fail due to throttling on the individual tables. If you delay the batch operation
   *         using exponential backoff, the individual requests in the batch are much more likely to
   *         succeed.</p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB
   *                     Developer Guide</i>.</p>
   *          </important>
   *
   *          <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of
   *             data, such as from Amazon EMR, or copy data from another database into DynamoDB. In
   *             order to improve performance with these large-scale operations,
   *                 <code>BatchWriteItem</code> does not behave in the same way as individual
   *                 <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you
   *             cannot specify conditions on individual put and delete requests, and
   *                 <code>BatchWriteItem</code> does not return deleted items in the response.</p>
   *          <p>If you use a programming language that supports concurrency, you can use
   *       threads to write items in parallel. Your application must include the necessary logic to
   *       manage the threads. With languages that don't support threading, you must update
   *       or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code>
   *       performs the specified put and delete operations in
   *       parallel, giving you the power of the thread pool approach without having to introduce
   *       complexity into your application.</p>
   *          <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p>
   *          <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p>
   *          <ul>
   *             <li>
   *                <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p>
   *             </li>
   *             <li>
   *                <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p>
   *             </li>
   *             <li>
   *                <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code>
   *           request. For example, you cannot put and delete the same item in the same
   *             <code>BatchWriteItem</code> request. </p>
   *             </li>
   *             <li>
   * 	              <p>
   * 		Your request contains at least two items with identical hash and range keys (which essentially is two put operations).
   * 	    </p>
   *     	       </li>
   *             <li>
   *                <p>There are more than 25 requests in the batch.</p>
   *             </li>
   *             <li>
   *                <p>Any individual item in a batch exceeds 400 KB.</p>
   *             </li>
   *             <li>
   *                <p>The total request size exceeds 16 MB.</p>
   *             </li>
   *          </ul>
   */
  public batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchWriteItemCommandOutput>;
  public batchWriteItem(
    args: BatchWriteItemCommandInput,
    cb: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): void;
  public batchWriteItem(
    args: BatchWriteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): void;
  public batchWriteItem(
    args: BatchWriteItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchWriteItemCommandOutput) => void),
    cb?: (err: any, data?: BatchWriteItemCommandOutput) => void
  ): Promise<BatchWriteItemCommandOutput> | void {
    const command = new BatchWriteItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a backup for an existing table.</p>
   *          <p> Each time you create an on-demand backup, the entire table data is backed up. There
   *             is no limit to the number of on-demand backups that can be taken. </p>
   *          <p> When you create an on-demand backup, a time marker of the request is cataloged, and
   *             the backup is created asynchronously, by applying all changes until the time of the
   *             request to the last full table snapshot. Backup requests are processed instantaneously
   *             and become available for restore within minutes. </p>
   *          <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p>
   *          <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p>
   *          <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed
   *             to contain all data committed to the table up to 14:24:00, and data committed after
   *             14:26:00 will not be. The backup might contain data modifications made between 14:24:00
   *             and 14:26:00. On-demand backup does not support causal consistency. </p>
   *          <p>
   *              Along with data, the following are also included on the backups:
   *          </p>
   *            <ul>
   *             <li>
   *                   <p>Global secondary indexes (GSIs)</p>
   *               </li>
   *             <li>
   *                   <p>Local secondary indexes (LSIs)</p>
   *               </li>
   *             <li>
   *                   <p>Streams</p>
   *               </li>
   *             <li>
   *                   <p>Provisioned read and write capacity</p>
   *               </li>
   *          </ul>
   */
  public createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupCommandOutput>;
  public createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
  public createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupCommandOutput) => void
  ): Promise<CreateBackupCommandOutput> | void {
    const command = new CreateBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a global table from an existing table. A global table creates a replication
   *             relationship between two or more DynamoDB tables with the same table name in the
   *             provided Regions. </p>
   *          <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
   *          </note>
   *
   *          <p>If you want to add a new replica table to a global table, each of the following conditions
   *    must be true:</p>
   *          <ul>
   *             <li>
   *                <p>The table must have the same primary key as all of the other replicas.</p>
   *             </li>
   *             <li>
   *                <p>The table must have the same name as all of the other replicas.</p>
   *             </li>
   *             <li>
   *                <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old
   *      images of the item.</p>
   *             </li>
   *             <li>
   *                <p>None of the replica tables in the global table can contain any data.</p>
   *             </li>
   *          </ul>
   *          <p>
   *      If global secondary indexes are specified, then the following conditions must also be met:
   *    </p>
   *         <ul>
   *             <li>
   *                <p>
   *                The global secondary indexes must have the same name.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                The global secondary indexes must have the same hash key and sort key (if present).
   *             </p>
   *             </li>
   *          </ul>
   *          <p>
   *      If local secondary indexes are specified, then the following conditions must also be met:
   *    </p>
   *         <ul>
   *             <li>
   *                <p>
   *                The local secondary indexes must have the same name.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                The local secondary indexes must have the same hash key and sort key (if present).
   *             </p>
   *             </li>
   *          </ul>
   *
   *          <important>
   *             <p>
   *        Write capacity settings should be set consistently across your replica tables and
   *        secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write
   *        capacity settings for all of your global tables replicas and indexes.
   *     </p>
   *             <p>
   *        If you prefer to manage write capacity settings manually, you should provision equal
   *        replicated write capacity units to your replica tables. You should also provision
   *        equal replicated write capacity units to matching secondary indexes across
   *        your global table.
   *     </p>
   *          </important>
   */
  public createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalTableCommandOutput>;
  public createGlobalTable(
    args: CreateGlobalTableCommandInput,
    cb: (err: any, data?: CreateGlobalTableCommandOutput) => void
  ): void;
  public createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalTableCommandOutput) => void
  ): void;
  public createGlobalTable(
    args: CreateGlobalTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGlobalTableCommandOutput) => void),
    cb?: (err: any, data?: CreateGlobalTableCommandOutput) => void
  ): Promise<CreateGlobalTableCommandOutput> | void {
    const command = new CreateGlobalTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>CreateTable</code> operation adds a new table to your account. In an AWS
   *             account, table names must be unique within each Region. That is, you can have two tables
   *             with same name if you create the tables in different Regions.</p>
   *          <p>
   *             <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request,
   *       DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After
   *       the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can
   *       perform read and write operations only on an <code>ACTIVE</code> table. </p>
   *          <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code>
   *       operation. If you want to create multiple tables with secondary indexes on them, you must create the
   *       tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at
   *       any given time.</p>
   *          <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
   */
  public createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  public createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  public createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  public createTable(
    args: CreateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTableCommandOutput) => void),
    cb?: (err: any, data?: CreateTableCommandOutput) => void
  ): Promise<CreateTableCommandOutput> | void {
    const command = new CreateTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing backup of a table.</p>
   *          <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
   */
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  public deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupCommandOutput) => void
  ): Promise<DeleteBackupCommandOutput> | void {
    const command = new DeleteBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
   *          <p>In addition to deleting an item, you can also return the item's attribute values in the same
   *       operation, using the <code>ReturnValues</code> parameter.</p>
   *          <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it
   *       multiple times on the same item or attribute does <i>not</i> result in an error response.</p>
   *          <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
   */
  public deleteItem(args: DeleteItemCommandInput, options?: __HttpHandlerOptions): Promise<DeleteItemCommandOutput>;
  public deleteItem(args: DeleteItemCommandInput, cb: (err: any, data?: DeleteItemCommandOutput) => void): void;
  public deleteItem(
    args: DeleteItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteItemCommandOutput) => void
  ): void;
  public deleteItem(
    args: DeleteItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteItemCommandOutput) => void),
    cb?: (err: any, data?: DeleteItemCommandOutput) => void
  ): Promise<DeleteItemCommandOutput> | void {
    const command = new DeleteItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a
   *         <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until
   *       DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete
   *       it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns
   *       a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a
   *         <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no
   *       error is returned. </p>
   *          <note>
   *             <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and
   *           <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is
   *         complete.</p>
   *          </note>
   *          <p>When you delete a table, any indexes on that table are also deleted.</p>
   *          <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes
   *       into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p>
   *
   *          <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
   */
  public deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  public deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteTableCommandOutput) => void
  ): Promise<DeleteTableCommandOutput> | void {
    const command = new DeleteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing backup of a table.</p>
   *          <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
   */
  public describeBackup(
    args: DescribeBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupCommandOutput>;
  public describeBackup(
    args: DescribeBackupCommandInput,
    cb: (err: any, data?: DescribeBackupCommandOutput) => void
  ): void;
  public describeBackup(
    args: DescribeBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupCommandOutput) => void
  ): void;
  public describeBackup(
    args: DescribeBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupCommandOutput) => void
  ): Promise<DescribeBackupCommandOutput> | void {
    const command = new DescribeBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Checks the status of continuous backups and point in time recovery on the specified table.
   *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
   *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
   *          <p> After continuous backups and point in time recovery are enabled, you can restore to any
   *             point in time within <code>EarliestRestorableDateTime</code> and
   *                 <code>LatestRestorableDateTime</code>. </p>
   *          <p>
   *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point
   *        in time during the last 35 days.
   *      </p>
   *          <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
   */
  public describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContinuousBackupsCommandOutput>;
  public describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    cb: (err: any, data?: DescribeContinuousBackupsCommandOutput) => void
  ): void;
  public describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContinuousBackupsCommandOutput) => void
  ): void;
  public describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContinuousBackupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeContinuousBackupsCommandOutput) => void
  ): Promise<DescribeContinuousBackupsCommandOutput> | void {
    const command = new DescribeContinuousBackupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about contributor insights, for a given table or global secondary index.</p>
   */
  public describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContributorInsightsCommandOutput>;
  public describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    cb: (err: any, data?: DescribeContributorInsightsCommandOutput) => void
  ): void;
  public describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContributorInsightsCommandOutput) => void
  ): void;
  public describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContributorInsightsCommandOutput) => void),
    cb?: (err: any, data?: DescribeContributorInsightsCommandOutput) => void
  ): Promise<DescribeContributorInsightsCommandOutput> | void {
    const command = new DescribeContributorInsightsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the regional endpoint information.</p>
   */
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): Promise<DescribeEndpointsCommandOutput> | void {
    const command = new DescribeEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing table export.</p>
   */
  public describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportCommandOutput>;
  public describeExport(
    args: DescribeExportCommandInput,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  public describeExport(
    args: DescribeExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  public describeExport(
    args: DescribeExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportCommandOutput) => void
  ): Promise<DescribeExportCommandOutput> | void {
    const command = new DescribeExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the specified global table.</p>
   *           <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.
   *                    If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead.</p>
   *          </note>
   */
  public describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalTableCommandOutput>;
  public describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    cb: (err: any, data?: DescribeGlobalTableCommandOutput) => void
  ): void;
  public describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalTableCommandOutput) => void
  ): void;
  public describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalTableCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalTableCommandOutput) => void
  ): Promise<DescribeGlobalTableCommandOutput> | void {
    const command = new DescribeGlobalTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes Region-specific settings for a global table.</p>
   *           <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
   *          </note>
   */
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalTableSettingsCommandOutput>;
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    cb: (err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void
  ): void;
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void
  ): void;
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalTableSettingsCommandOutput) => void
  ): Promise<DescribeGlobalTableSettingsCommandOutput> | void {
    const command = new DescribeGlobalTableSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the status of Kinesis streaming.</p>
   */
  public describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKinesisStreamingDestinationCommandOutput>;
  public describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void),
    cb?: (err: any, data?: DescribeKinesisStreamingDestinationCommandOutput) => void
  ): Promise<DescribeKinesisStreamingDestinationCommandOutput> | void {
    const command = new DescribeKinesisStreamingDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the current provisioned-capacity quotas for your AWS account in a Region, both
   *             for the Region as a whole and for any one DynamoDB table that you create there.</p>
   *          <p>When you establish an AWS account, the account has initial quotas on the maximum read
   *             capacity units and write capacity units that you can provision across all of your
   *             DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you
   *             create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table
   *                 Quotas</a> page in the <i>Amazon DynamoDB Developer
   *             Guide</i>.</p>
   *
   *          <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>, obtaining the increase is not
   *             instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the
   *             capacity you are currently using to those quotas imposed by your account so that you
   *             have enough time to apply for an increase before you hit a quota.</p>
   *
   *          <p>For example, you could use one of the AWS SDKs to do the following:</p>
   *
   *          <ol>
   *             <li>
   *                <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current
   *                     account quotas on provisioned capacity there.</p>
   *             </li>
   *             <li>
   *                <p>Create a variable to hold the aggregate read capacity units provisioned for all
   *                     your tables in that Region, and one to hold the aggregate write capacity units.
   *                     Zero them both.</p>
   *             </li>
   *             <li>
   *                <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p>
   *             </li>
   *             <li>
   *                <p>For each table name listed by <code>ListTables</code>, do the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Call <code>DescribeTable</code> with the table name.</p>
   *                   </li>
   *                   <li>
   *                      <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity
   *             units provisioned for the table itself to your variables.</p>
   *                   </li>
   *                   <li>
   *                      <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with
   *                     the total current provisioned capacity levels you have calculated.</p>
   *             </li>
   *          </ol>
   *
   *          <p>This will let you see whether you are getting close to your account-level quotas.</p>
   *          <p>The per-table quotas apply only when you are creating a new table. They restrict the sum
   *             of the provisioned capacity of the new table itself and all its global secondary
   *             indexes.</p>
   *          <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned
   *             capacity extremely rapidly, but the only quota that applies is that the aggregate
   *             provisioned capacity over all your tables and GSIs cannot exceed either of the
   *             per-account quotas.</p>
   *          <note>
   *             <p>
   *                <code>DescribeLimits</code> should only be called periodically. You can expect throttling
   *         errors if you call it more than once in a minute.</p>
   *          </note>
   *          <p>The <code>DescribeLimits</code> Request element has no content.</p>
   */
  public describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLimitsCommandOutput>;
  public describeLimits(
    args: DescribeLimitsCommandInput,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  public describeLimits(
    args: DescribeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  public describeLimits(
    args: DescribeLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): Promise<DescribeLimitsCommandOutput> | void {
    const command = new DescribeLimitsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p>
   *          <note>
   *             <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might
   *         return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually
   *         consistent query, and the metadata for your table might not be available at that moment.
   *         Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p>
   *          </note>
   */
  public describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableCommandOutput>;
  public describeTable(
    args: DescribeTableCommandInput,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  public describeTable(
    args: DescribeTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  public describeTable(
    args: DescribeTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableCommandOutput) => void
  ): Promise<DescribeTableCommandOutput> | void {
    const command = new DescribeTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes auto scaling settings across replicas of the global table at once.</p>
   *          <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
   *          </note>
   */
  public describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableReplicaAutoScalingCommandOutput>;
  public describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    cb: (err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void
  ): void;
  public describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void
  ): void;
  public describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableReplicaAutoScalingCommandOutput) => void
  ): Promise<DescribeTableReplicaAutoScalingCommandOutput> | void {
    const command = new DescribeTableReplicaAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
   */
  public describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTimeToLiveCommandOutput>;
  public describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    cb: (err: any, data?: DescribeTimeToLiveCommandOutput) => void
  ): void;
  public describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTimeToLiveCommandOutput) => void
  ): void;
  public describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTimeToLiveCommandOutput) => void),
    cb?: (err: any, data?: DescribeTimeToLiveCommandOutput) => void
  ): Promise<DescribeTimeToLiveCommandOutput> | void {
    const command = new DescribeTimeToLiveCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
   *             without deleting either of the resources.</p>
   */
  public disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableKinesisStreamingDestinationCommandOutput>;
  public disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void),
    cb?: (err: any, data?: DisableKinesisStreamingDestinationCommandOutput) => void
  ): Promise<DisableKinesisStreamingDestinationCommandOutput> | void {
    const command = new DisableKinesisStreamingDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts table data replication to the specified Kinesis data stream at a timestamp chosen
   *             during the enable workflow. If this operation doesn't return results immediately, use
   *             DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is
   *             ACTIVE.</p>
   */
  public enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableKinesisStreamingDestinationCommandOutput>;
  public enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    cb: (err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void
  ): void;
  public enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void),
    cb?: (err: any, data?: EnableKinesisStreamingDestinationCommandOutput) => void
  ): Promise<EnableKinesisStreamingDestinationCommandOutput> | void {
    const command = new EnableKinesisStreamingDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   * This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.
   * </p>
   */
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteStatementCommandOutput>;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): Promise<ExecuteStatementCommandOutput> | void {
    const command = new ExecuteStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.
   * </p>
   */
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteTransactionCommandOutput>;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): void;
  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteTransactionCommandOutput) => void),
    cb?: (err: any, data?: ExecuteTransactionCommandOutput) => void
  ): Promise<ExecuteTransactionCommandOutput> | void {
    const command = new ExecuteTransactionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports table data to an S3 bucket. The table must have point in time recovery
   *             enabled, and you can export data from any time within the point in time recovery
   *             window.</p>
   */
  public exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportTableToPointInTimeCommandOutput>;
  public exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    cb: (err: any, data?: ExportTableToPointInTimeCommandOutput) => void
  ): void;
  public exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportTableToPointInTimeCommandOutput) => void
  ): void;
  public exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportTableToPointInTimeCommandOutput) => void),
    cb?: (err: any, data?: ExportTableToPointInTimeCommandOutput) => void
  ): Promise<ExportTableToPointInTimeCommandOutput> | void {
    const command = new ExportTableToPointInTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary
   *           key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p>
   *          <p>
   *             <code>GetItem</code> provides an eventually consistent read by default. If your application
   *       requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although
   *       a strongly consistent read might take more time than an eventually consistent read, it always
   *       returns the last updated value.</p>
   */
  public getItem(args: GetItemCommandInput, options?: __HttpHandlerOptions): Promise<GetItemCommandOutput>;
  public getItem(args: GetItemCommandInput, cb: (err: any, data?: GetItemCommandOutput) => void): void;
  public getItem(
    args: GetItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetItemCommandOutput) => void
  ): void;
  public getItem(
    args: GetItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetItemCommandOutput) => void),
    cb?: (err: any, data?: GetItemCommandOutput) => void
  ): Promise<GetItemCommandOutput> | void {
    const command = new GetItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List backups associated with an AWS account. To list backups for a given table, specify
   *                 <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results
   *             with at most 1 MB worth of items in a page. You can also specify a maximum number of
   *             entries to be returned in a page. </p>
   *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
   *             boundaries are for the time at which the original backup was requested.</p>
   *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
   */
  public listBackups(args: ListBackupsCommandInput, options?: __HttpHandlerOptions): Promise<ListBackupsCommandOutput>;
  public listBackups(args: ListBackupsCommandInput, cb: (err: any, data?: ListBackupsCommandOutput) => void): void;
  public listBackups(
    args: ListBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupsCommandOutput) => void
  ): void;
  public listBackups(
    args: ListBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupsCommandOutput) => void
  ): Promise<ListBackupsCommandOutput> | void {
    const command = new ListBackupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.</p>
   */
  public listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContributorInsightsCommandOutput>;
  public listContributorInsights(
    args: ListContributorInsightsCommandInput,
    cb: (err: any, data?: ListContributorInsightsCommandOutput) => void
  ): void;
  public listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContributorInsightsCommandOutput) => void
  ): void;
  public listContributorInsights(
    args: ListContributorInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContributorInsightsCommandOutput) => void),
    cb?: (err: any, data?: ListContributorInsightsCommandOutput) => void
  ): Promise<ListContributorInsightsCommandOutput> | void {
    const command = new ListContributorInsightsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists completed exports within the past 90 days.</p>
   */
  public listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  public listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  public listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  public listExports(
    args: ListExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExportsCommandOutput) => void),
    cb?: (err: any, data?: ListExportsCommandOutput) => void
  ): Promise<ListExportsCommandOutput> | void {
    const command = new ListExportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all global tables that have a replica in the specified Region.</p>
   *           <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
   *          </note>
   */
  public listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGlobalTablesCommandOutput>;
  public listGlobalTables(
    args: ListGlobalTablesCommandInput,
    cb: (err: any, data?: ListGlobalTablesCommandOutput) => void
  ): void;
  public listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGlobalTablesCommandOutput) => void
  ): void;
  public listGlobalTables(
    args: ListGlobalTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGlobalTablesCommandOutput) => void),
    cb?: (err: any, data?: ListGlobalTablesCommandOutput) => void
  ): Promise<ListGlobalTablesCommandOutput> | void {
    const command = new ListGlobalTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an array of table names associated with the current account and endpoint. The output
   *       from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table
   *       names.</p>
   */
  public listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
  public listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
  public listTables(
    args: ListTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;
  public listTables(
    args: ListTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTablesCommandOutput) => void),
    cb?: (err: any, data?: ListTablesCommandOutput) => void
  ): Promise<ListTablesCommandOutput> | void {
    const command = new ListTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p>
   *          <p>For an overview on tagging DynamoDB resources, see
   *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
   *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  public listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsOfResourceCommandOutput>;
  public listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    cb: (err: any, data?: ListTagsOfResourceCommandOutput) => void
  ): void;
  public listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsOfResourceCommandOutput) => void
  ): void;
  public listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsOfResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsOfResourceCommandOutput) => void
  ): Promise<ListTagsOfResourceCommandOutput> | void {
    const command = new ListTagsOfResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p>
   *          <important>
   *             <p>This topic provides general information about the <code>PutItem</code> API.</p>
   *             <p>For information on how to call the <code>PutItem</code> API using the AWS SDK in specific languages, see the following:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/aws-cli/dynamodb-2012-08-10/PutItem"> PutItem in the AWS Command Line Interface</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/DotNetSDKV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for .NET</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/SdkForCpp/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for C++</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/SdkForGoV1/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Go</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/SdkForJava/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Java</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/AWSJavaScriptSDK/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for JavaScript</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/SdkForPHPV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for PHP V3</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/boto3/dynamodb-2012-08-10/PutItem">
   *                             PutItem in the AWS SDK for Python</a>
   *                     </p>
   *                </li>
   *                <li>
   *                   <p>
   *                         <a href="http://docs.aws.amazon.com/goto/SdkForRubyV2/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Ruby V2</a>
   *                     </p>
   *                </li>
   *             </ul>
   *          </important>
   *
   *          <p>When you add an item, the primary key attributes are the only required attributes.
   *             Attribute values cannot be null.</p>
   *             <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.
   *             Set type attributes cannot be empty. </p>
   *             <p>Invalid Requests with empty values will
   *             be rejected with a <code>ValidationException</code> exception.</p>
   *          <note>
   *             <p>To prevent a new item from replacing an existing item, use a conditional expression
   *          that contains the <code>attribute_not_exists</code> function with the name of the
   *          attribute being used as the partition key for the table.  Since every record must contain
   *          that attribute, the <code>attribute_not_exists</code> function will only succeed if
   *          no matching item exists.</p>
   *          </note>
   *          <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  public putItem(args: PutItemCommandInput, options?: __HttpHandlerOptions): Promise<PutItemCommandOutput>;
  public putItem(args: PutItemCommandInput, cb: (err: any, data?: PutItemCommandOutput) => void): void;
  public putItem(
    args: PutItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemCommandOutput) => void
  ): void;
  public putItem(
    args: PutItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutItemCommandOutput) => void),
    cb?: (err: any, data?: PutItemCommandOutput) => void
  ): Promise<PutItemCommandOutput> | void {
    const command = new PutItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>Query</code> operation finds items based on primary key values.
   *             You can query any table or secondary index that has a composite primary key (a partition
   *             key and a sort key).
   *         </p>
   *         <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value
   *             for the partition key. The <code>Query</code> operation will return all of the items
   *             from the table or index with that partition key value. You can optionally narrow the
   *             scope of the <code>Query</code> operation by specifying a sort key value and a
   *             comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results,
   *             you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items
   *             within the results should be returned to you. All of the other results are discarded.
   *         </p>
   *         <p>
   *             A <code>Query</code> operation always returns a result set. If no matching items are found,
   *             the result set will be empty. Queries that do not return results consume the minimum number of
   *             read capacity units for that type of read operation.
   *         </p>
   *         <note>
   *             <p>
   *                 DynamoDB calculates the number of read capacity units consumed based on item size,
   *                 not on the amount of data that is returned to an application. The number of capacity
   *                 units consumed will be the same whether you request all of the attributes (the default behavior)
   *                 or just some of them (using a projection expression). The number will also be the same
   *                 whether or not you use a <code>FilterExpression</code>.
   *             </p>
   *         </note>
   *         <p>
   *             <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number,
   *             the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes.
   *             By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter
   *             to false.
   *         </p>
   *         <p> A single <code>Query</code> operation will read up to the maximum number of items
   *             set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then
   *             apply any filtering to the results using <code>FilterExpression</code>. If
   *                 <code>LastEvaluatedKey</code> is present in the response, you will need to paginate
   *             the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating
   *                 the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
   *         <p>
   *             <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before
   *             the results are returned.
   *             A <code>FilterExpression</code> cannot contain partition key or sort key attributes.
   *             You need to specify those attributes in the <code>KeyConditionExpression</code>.
   *         </p>
   *         <note>
   *             <p>
   *                 A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code>
   *                 if all the items read for the page of results are filtered out.
   *             </p>
   *         </note>
   *         <p>You can query a table, a local secondary index, or a global secondary index. For a
   *             query on a table or on a local secondary index, you can set the
   *                 <code>ConsistentRead</code> parameter to <code>true</code> and obtain a
   *             strongly consistent result. Global secondary indexes support eventually consistent reads
   *             only, so do not specify <code>ConsistentRead</code> when querying a global
   *             secondary index.</p>
   */
  public query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  public query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
  public query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  public query(
    args: QueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryCommandOutput) => void),
    cb?: (err: any, data?: QueryCommandOutput) => void
  ): Promise<QueryCommandOutput> | void {
    const command = new QueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores
   *         (any type of restore) in a given account.
   *       </p>
   *          <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p>
   *          <p>You must manually set up the following on the restored table:</p>
   *          <ul>
   *             <li>
   *                  <p>Auto scaling policies</p>
   *              </li>
   *             <li>
   *                  <p>IAM policies</p>
   *              </li>
   *             <li>
   *                  <p>Amazon CloudWatch metrics and alarms</p>
   *              </li>
   *             <li>
   *                  <p>Tags</p>
   *              </li>
   *             <li>
   *                  <p>Stream settings</p>
   *              </li>
   *             <li>
   *                  <p>Time to Live (TTL) settings</p>
   *              </li>
   *          </ul>
   */
  public restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromBackupCommandOutput>;
  public restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    cb: (err: any, data?: RestoreTableFromBackupCommandOutput) => void
  ): void;
  public restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromBackupCommandOutput) => void
  ): void;
  public restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreTableFromBackupCommandOutput) => void),
    cb?: (err: any, data?: RestoreTableFromBackupCommandOutput) => void
  ): Promise<RestoreTableFromBackupCommandOutput> | void {
    const command = new RestoreTableFromBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores the specified table to the specified point in time within
   *         <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
   *         You can restore your table to any point in time during the last 35 days.
   *         Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.
   *       </p>
   *          <p>
   *      When you restore using point in time recovery, DynamoDB restores your table data to the state based on
   *      the selected date and time (day:hour:minute:second) to a new table.
   *      </p>
   *          <p>
   *     Along with data, the following are also included on the new restored table using point in time recovery:
   *     </p>
   *         <ul>
   *             <li>
   *                  <p>Global secondary indexes (GSIs)</p>
   *              </li>
   *             <li>
   *                  <p>Local secondary indexes (LSIs)</p>
   *              </li>
   *             <li>
   *                  <p>Provisioned read and write capacity</p>
   *              </li>
   *             <li>
   *                  <p>Encryption settings</p>
   *                <important>
   *                   <p>
   *                  All these settings come from the current settings of the source table at the time of restore.
   *              </p>
   *                </important>
   *              </li>
   *          </ul>
   *
   *            <p>You must manually set up the following on the restored table:</p>
   *          <ul>
   *             <li>
   *                  <p>Auto scaling policies</p>
   *              </li>
   *             <li>
   *                  <p>IAM policies</p>
   *              </li>
   *             <li>
   *                  <p>Amazon CloudWatch metrics and alarms</p>
   *              </li>
   *             <li>
   *                  <p>Tags</p>
   *              </li>
   *             <li>
   *                  <p>Stream settings</p>
   *              </li>
   *             <li>
   *                  <p>Time to Live (TTL) settings</p>
   *              </li>
   *             <li>
   *                  <p>Point in time recovery settings</p>
   *              </li>
   *          </ul>
   */
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableToPointInTimeCommandOutput>;
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreTableToPointInTimeCommandOutput) => void
  ): void;
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableToPointInTimeCommandOutput) => void
  ): void;
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreTableToPointInTimeCommandOutput) => void),
    cb?: (err: any, data?: RestoreTableToPointInTimeCommandOutput) => void
  ): Promise<RestoreTableToPointInTimeCommandOutput> | void {
    const command = new RestoreTableToPointInTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every
   *       item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p>
   *          <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the
   *             scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value
   *             to continue the scan in a subsequent operation. The results also include the number of
   *             items exceeding the limit. A scan can result in no table data meeting the filter
   *             criteria. </p>
   *          <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if
   *             using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any
   *             filtering to the results using <code>FilterExpression</code>. If
   *                 <code>LastEvaluatedKey</code> is present in the response, you need to paginate the
   *             result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the
   *                 Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
   *          <p>
   *             <code>Scan</code> operations proceed sequentially; however, for faster performance on
   *             a large table or secondary index, applications can request a parallel <code>Scan</code>
   *             operation by providing the <code>Segment</code> and <code>TotalSegments</code>
   *             parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel
   *                 Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          <p>
   *             <code>Scan</code> uses eventually consistent reads when accessing the data in a
   *             table; therefore, the result set might not include the changes to data in the table
   *             immediately before the operation began. If you need a consistent copy of the data, as of
   *             the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code>
   *             parameter to <code>true</code>.</p>
   */
  public scan(args: ScanCommandInput, options?: __HttpHandlerOptions): Promise<ScanCommandOutput>;
  public scan(args: ScanCommandInput, cb: (err: any, data?: ScanCommandOutput) => void): void;
  public scan(
    args: ScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanCommandOutput) => void
  ): void;
  public scan(
    args: ScanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ScanCommandOutput) => void),
    cb?: (err: any, data?: ScanCommandOutput) => void
  ): Promise<ScanCommandOutput> | void {
    const command = new ScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these
   *             user-defined tags so that they appear on the Billing and Cost Management console for
   *             cost allocation tracking. You can call TagResource up to five times per second, per
   *             account. </p>
   *          <p>For an overview on tagging DynamoDB resources, see
   *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
   *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>TransactGetItems</code> is a synchronous operation that atomically retrieves
   *             multiple items from one or more tables (but not from indexes) in a single account and
   *             Region. A <code>TransactGetItems</code> call can contain up to 25
   *                 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code>
   *             structure that specifies an item to retrieve from a table in the account and Region. A
   *             call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one
   *             AWS account or Region. The aggregate size of the items in the transaction cannot exceed
   *             4 MB.</p>
   *          <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p>
   *          <ul>
   *             <li>
   *                <p>A conflicting operation is in the process of updating an
   *           item to be read.</p>
   *             </li>
   *             <li>
   *                <p>There is insufficient provisioned capacity for the transaction
   *           to be completed.</p>
   *             </li>
   *             <li>
   *                <p>There is a user error, such as an invalid data format.</p>
   *             </li>
   *             <li>
   *                <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
   *             </li>
   *          </ul>
   */
  public transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransactGetItemsCommandOutput>;
  public transactGetItems(
    args: TransactGetItemsCommandInput,
    cb: (err: any, data?: TransactGetItemsCommandOutput) => void
  ): void;
  public transactGetItems(
    args: TransactGetItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactGetItemsCommandOutput) => void
  ): void;
  public transactGetItems(
    args: TransactGetItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransactGetItemsCommandOutput) => void),
    cb?: (err: any, data?: TransactGetItemsCommandOutput) => void
  ): Promise<TransactGetItemsCommandOutput> | void {
    const command = new TransactGetItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>TransactWriteItems</code> is a synchronous write operation that groups up to 25
   *             action requests. These actions can target items in different tables, but not in
   *             different AWS accounts or Regions, and no two actions can target the same item. For
   *             example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same
   *             item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
   *
   *          <p>The actions are completed atomically so that either all of
   *         them succeed, or all of them fail. They are defined by the following objects:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Put</code>     Initiates a <code>PutItem</code> operation to write a new
   *                     item. This structure specifies the primary key of the item to be written, the
   *                     name of the table to write it in, an optional condition expression that must be
   *                     satisfied for the write to succeed, a list of the item's attributes, and a field
   *                     indicating whether to retrieve the item's attributes if the condition is not
   *                     met.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Update</code>     Initiates an <code>UpdateItem</code> operation to
   *                     update an existing item. This structure specifies the primary key of the item to
   *                     be updated, the name of the table where it resides, an optional condition
   *                     expression that must be satisfied for the update to succeed, an expression that
   *                     defines one or more attributes to be updated, and a field indicating whether to
   *                     retrieve the item's attributes if the condition is not met.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Delete</code>     Initiates a <code>DeleteItem</code> operation to
   *                     delete an existing item. This structure specifies the primary key of the item to
   *                     be deleted, the name of the table where it resides, an optional condition
   *                     expression that must be satisfied for the deletion to succeed, and a field
   *                     indicating whether to retrieve the item's attributes if the condition is not
   *                     met.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConditionCheck</code>     Applies a condition to an item that is not
   *                     being modified by the transaction. This structure specifies the primary key of
   *                     the item to be checked, the name of the table where it resides, a condition
   *                     expression that must be satisfied for the transaction to succeed, and a field
   *                     indicating whether to retrieve the item's attributes if the condition is not
   *                     met.</p>
   *             </li>
   *          </ul>
   *
   *          <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p>
   *          <ul>
   *             <li>
   *                <p>A condition in one of the condition expressions is not met.</p>
   *             </li>
   *             <li>
   *                <p>An ongoing operation is in the process of updating the same
   *           item.</p>
   *             </li>
   *             <li>
   *                <p>There is insufficient provisioned capacity for the transaction
   *           to be completed.</p>
   *             </li>
   *             <li>
   *                <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too
   *                     large, or a similar validation error occurs because of changes made by the
   *                     transaction.</p>
   *             </li>
   *             <li>
   *                <p>The aggregate size of the items in the transaction exceeds 4 MB.</p>
   *             </li>
   *             <li>
   *                <p>There  is a user error, such as an invalid data format.</p>
   *             </li>
   *          </ul>
   */
  public transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransactWriteItemsCommandOutput>;
  public transactWriteItems(
    args: TransactWriteItemsCommandInput,
    cb: (err: any, data?: TransactWriteItemsCommandOutput) => void
  ): void;
  public transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransactWriteItemsCommandOutput) => void
  ): void;
  public transactWriteItems(
    args: TransactWriteItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransactWriteItemsCommandOutput) => void),
    cb?: (err: any, data?: TransactWriteItemsCommandOutput) => void
  ): Promise<TransactWriteItemsCommandOutput> | void {
    const command = new TransactWriteItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the association of tags from an Amazon DynamoDB resource. You can call
   *                 <code>UntagResource</code> up to five times per second, per account. </p>
   *          <p>For an overview on tagging DynamoDB resources, see
   *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
   *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table.
   *       A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>.
   *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
   *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
   *          <p>
   *       Once continuous backups and point in time recovery are enabled, you can restore to any point in time within
   *       <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
   *      </p>
   *          <p>
   *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
   *             You can restore your table to any point in time during the last 35 days. </p>
   */
  public updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContinuousBackupsCommandOutput>;
  public updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    cb: (err: any, data?: UpdateContinuousBackupsCommandOutput) => void
  ): void;
  public updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContinuousBackupsCommandOutput) => void
  ): void;
  public updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContinuousBackupsCommandOutput) => void),
    cb?: (err: any, data?: UpdateContinuousBackupsCommandOutput) => void
  ): Promise<UpdateContinuousBackupsCommandOutput> | void {
    const command = new UpdateContinuousBackupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status for contributor insights for a specific table or index.</p>
   */
  public updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContributorInsightsCommandOutput>;
  public updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    cb: (err: any, data?: UpdateContributorInsightsCommandOutput) => void
  ): void;
  public updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContributorInsightsCommandOutput) => void
  ): void;
  public updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContributorInsightsCommandOutput) => void),
    cb?: (err: any, data?: UpdateContributorInsightsCommandOutput) => void
  ): Promise<UpdateContributorInsightsCommandOutput> | void {
    const command = new UpdateContributorInsightsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or removes replicas in the specified global table. The global table must already
   *             exist to be able to use this operation. Any replica to be added must be empty, have the
   *             same name as the global table, have the same key schema, have DynamoDB Streams enabled,
   *             and have the same provisioned and maximum write capacity units.</p>
   *         <note>
   *             <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in
   *                 a single request, for simplicity we recommend that you issue separate requests for
   *                 adding or removing replicas.</p>
   *          </note>
   *        	<p>
   *         If global secondary indexes are specified, then the following conditions must also be met:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>
   *                The global secondary indexes must have the same name.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                The global secondary indexes must have the same hash key and sort key (if present).
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                The global secondary indexes must have the same provisioned and maximum write capacity units.
   *             </p>
   *             </li>
   *          </ul>
   */
  public updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalTableCommandOutput>;
  public updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    cb: (err: any, data?: UpdateGlobalTableCommandOutput) => void
  ): void;
  public updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalTableCommandOutput) => void
  ): void;
  public updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalTableCommandOutput) => void
  ): Promise<UpdateGlobalTableCommandOutput> | void {
    const command = new UpdateGlobalTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates settings for a global table.</p>
   */
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalTableSettingsCommandOutput>;
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void
  ): void;
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void
  ): void;
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalTableSettingsCommandOutput) => void
  ): Promise<UpdateGlobalTableSettingsCommandOutput> | void {
    const command = new UpdateGlobalTableSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
   *          <p>You can also return the item's attribute values in the same <code>UpdateItem</code>
   *       operation using the <code>ReturnValues</code> parameter.</p>
   */
  public updateItem(args: UpdateItemCommandInput, options?: __HttpHandlerOptions): Promise<UpdateItemCommandOutput>;
  public updateItem(args: UpdateItemCommandInput, cb: (err: any, data?: UpdateItemCommandOutput) => void): void;
  public updateItem(
    args: UpdateItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateItemCommandOutput) => void
  ): void;
  public updateItem(
    args: UpdateItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateItemCommandOutput) => void),
    cb?: (err: any, data?: UpdateItemCommandOutput) => void
  ): Promise<UpdateItemCommandOutput> | void {
    const command = new UpdateItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p>
   *          <p>You can only perform one of the following operations at once:</p>
   *          <ul>
   *             <li>
   *                <p>Modify the provisioned throughput settings of the table.</p>
   *             </li>
   *             <li>
   *                <p>Enable or disable DynamoDB Streams on the table.</p>
   *             </li>
   *             <li>
   *                <p>Remove a global secondary index from the table.</p>
   *             </li>
   *             <li>
   *                <p>Create a new global secondary index on the table. After the index begins
   *                     backfilling, you can use <code>UpdateTable</code> to perform other
   *                     operations.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status
   *       changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>,
   *       you cannot issue another <code>UpdateTable</code> request. When the table returns to the
   *         <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
   */
  public updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  public updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
  public updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
  public updateTable(
    args: UpdateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableCommandOutput) => void
  ): Promise<UpdateTableCommandOutput> | void {
    const command = new UpdateTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates auto scaling settings on your global tables at once.</p>
   *          <note>
   *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
   *          </note>
   */
  public updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableReplicaAutoScalingCommandOutput>;
  public updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    cb: (err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void
  ): void;
  public updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void
  ): void;
  public updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableReplicaAutoScalingCommandOutput) => void
  ): Promise<UpdateTableReplicaAutoScalingCommandOutput> | void {
    const command = new UpdateTableReplicaAutoScalingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the
   *             specified table. A successful <code>UpdateTimeToLive</code> call returns the current
   *                 <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to
   *             fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table
   *             during this one hour duration result in a <code>ValidationException</code>. </p>
   *          <p>TTL compares the current time in epoch time format to the time stored in the TTL
   *             attribute of an item. If the epoch time value stored in the attribute is less than the
   *             current time, the item is marked as expired and subsequently deleted.</p>
   *         <note>
   *             <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1,
   *                 1970 UTC. </p>
   *         </note>
   *         <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of
   *             throughput for other data operations.
   *         </p>
   *             <important>
   *                 <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration
   *                 within which an item gets deleted after expiration is specific to the
   *                 nature of the workload. Items that have expired and not been deleted will still show up in reads,
   *                     queries, and scans.</p>
   *             </important>
   *         <p>As items are deleted, they are removed from any local secondary index and global
   *             secondary index immediately in the same eventually consistent way as a standard delete
   *             operation.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>
   */
  public updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTimeToLiveCommandOutput>;
  public updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    cb: (err: any, data?: UpdateTimeToLiveCommandOutput) => void
  ): void;
  public updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTimeToLiveCommandOutput) => void
  ): void;
  public updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTimeToLiveCommandOutput) => void),
    cb?: (err: any, data?: UpdateTimeToLiveCommandOutput) => void
  ): Promise<UpdateTimeToLiveCommandOutput> | void {
    const command = new UpdateTimeToLiveCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
