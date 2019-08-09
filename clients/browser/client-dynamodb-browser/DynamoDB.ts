import { DynamoDBClient } from "./DynamoDBClient";
import { BackupInUseException } from "./types/BackupInUseException";
import { BackupNotFoundException } from "./types/BackupNotFoundException";
import { BatchGetItemInput } from "./types/BatchGetItemInput";
import { BatchGetItemOutput } from "./types/BatchGetItemOutput";
import { BatchWriteItemInput } from "./types/BatchWriteItemInput";
import { BatchWriteItemOutput } from "./types/BatchWriteItemOutput";
import { ConditionalCheckFailedException } from "./types/ConditionalCheckFailedException";
import { ContinuousBackupsUnavailableException } from "./types/ContinuousBackupsUnavailableException";
import { CreateBackupInput } from "./types/CreateBackupInput";
import { CreateBackupOutput } from "./types/CreateBackupOutput";
import { CreateGlobalTableInput } from "./types/CreateGlobalTableInput";
import { CreateGlobalTableOutput } from "./types/CreateGlobalTableOutput";
import { CreateTableInput } from "./types/CreateTableInput";
import { CreateTableOutput } from "./types/CreateTableOutput";
import { DeleteBackupInput } from "./types/DeleteBackupInput";
import { DeleteBackupOutput } from "./types/DeleteBackupOutput";
import { DeleteItemInput } from "./types/DeleteItemInput";
import { DeleteItemOutput } from "./types/DeleteItemOutput";
import { DeleteTableInput } from "./types/DeleteTableInput";
import { DeleteTableOutput } from "./types/DeleteTableOutput";
import { DescribeBackupInput } from "./types/DescribeBackupInput";
import { DescribeBackupOutput } from "./types/DescribeBackupOutput";
import { DescribeContinuousBackupsInput } from "./types/DescribeContinuousBackupsInput";
import { DescribeContinuousBackupsOutput } from "./types/DescribeContinuousBackupsOutput";
import { DescribeEndpointsInput } from "./types/DescribeEndpointsInput";
import { DescribeEndpointsOutput } from "./types/DescribeEndpointsOutput";
import { DescribeGlobalTableInput } from "./types/DescribeGlobalTableInput";
import { DescribeGlobalTableOutput } from "./types/DescribeGlobalTableOutput";
import { DescribeGlobalTableSettingsInput } from "./types/DescribeGlobalTableSettingsInput";
import { DescribeGlobalTableSettingsOutput } from "./types/DescribeGlobalTableSettingsOutput";
import { DescribeLimitsInput } from "./types/DescribeLimitsInput";
import { DescribeLimitsOutput } from "./types/DescribeLimitsOutput";
import { DescribeTableInput } from "./types/DescribeTableInput";
import { DescribeTableOutput } from "./types/DescribeTableOutput";
import { DescribeTimeToLiveInput } from "./types/DescribeTimeToLiveInput";
import { DescribeTimeToLiveOutput } from "./types/DescribeTimeToLiveOutput";
import { GetItemInput } from "./types/GetItemInput";
import { GetItemOutput } from "./types/GetItemOutput";
import { GlobalTableAlreadyExistsException } from "./types/GlobalTableAlreadyExistsException";
import { GlobalTableNotFoundException } from "./types/GlobalTableNotFoundException";
import { IdempotentParameterMismatchException } from "./types/IdempotentParameterMismatchException";
import { IndexNotFoundException } from "./types/IndexNotFoundException";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidRestoreTimeException } from "./types/InvalidRestoreTimeException";
import { ItemCollectionSizeLimitExceededException } from "./types/ItemCollectionSizeLimitExceededException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListBackupsInput } from "./types/ListBackupsInput";
import { ListBackupsOutput } from "./types/ListBackupsOutput";
import { ListGlobalTablesInput } from "./types/ListGlobalTablesInput";
import { ListGlobalTablesOutput } from "./types/ListGlobalTablesOutput";
import { ListTablesInput } from "./types/ListTablesInput";
import { ListTablesOutput } from "./types/ListTablesOutput";
import { ListTagsOfResourceInput } from "./types/ListTagsOfResourceInput";
import { ListTagsOfResourceOutput } from "./types/ListTagsOfResourceOutput";
import { PointInTimeRecoveryUnavailableException } from "./types/PointInTimeRecoveryUnavailableException";
import { ProvisionedThroughputExceededException } from "./types/ProvisionedThroughputExceededException";
import { PutItemInput } from "./types/PutItemInput";
import { PutItemOutput } from "./types/PutItemOutput";
import { QueryInput } from "./types/QueryInput";
import { QueryOutput } from "./types/QueryOutput";
import { ReplicaAlreadyExistsException } from "./types/ReplicaAlreadyExistsException";
import { ReplicaNotFoundException } from "./types/ReplicaNotFoundException";
import { RequestLimitExceeded } from "./types/RequestLimitExceeded";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RestoreTableFromBackupInput } from "./types/RestoreTableFromBackupInput";
import { RestoreTableFromBackupOutput } from "./types/RestoreTableFromBackupOutput";
import { RestoreTableToPointInTimeInput } from "./types/RestoreTableToPointInTimeInput";
import { RestoreTableToPointInTimeOutput } from "./types/RestoreTableToPointInTimeOutput";
import { ScanInput } from "./types/ScanInput";
import { ScanOutput } from "./types/ScanOutput";
import { TableAlreadyExistsException } from "./types/TableAlreadyExistsException";
import { TableInUseException } from "./types/TableInUseException";
import { TableNotFoundException } from "./types/TableNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TransactGetItemsInput } from "./types/TransactGetItemsInput";
import { TransactGetItemsOutput } from "./types/TransactGetItemsOutput";
import { TransactWriteItemsInput } from "./types/TransactWriteItemsInput";
import { TransactWriteItemsOutput } from "./types/TransactWriteItemsOutput";
import { TransactionCanceledException } from "./types/TransactionCanceledException";
import { TransactionConflictException } from "./types/TransactionConflictException";
import { TransactionInProgressException } from "./types/TransactionInProgressException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateContinuousBackupsInput } from "./types/UpdateContinuousBackupsInput";
import { UpdateContinuousBackupsOutput } from "./types/UpdateContinuousBackupsOutput";
import { UpdateGlobalTableInput } from "./types/UpdateGlobalTableInput";
import { UpdateGlobalTableOutput } from "./types/UpdateGlobalTableOutput";
import { UpdateGlobalTableSettingsInput } from "./types/UpdateGlobalTableSettingsInput";
import { UpdateGlobalTableSettingsOutput } from "./types/UpdateGlobalTableSettingsOutput";
import { UpdateItemInput } from "./types/UpdateItemInput";
import { UpdateItemOutput } from "./types/UpdateItemOutput";
import { UpdateTableInput } from "./types/UpdateTableInput";
import { UpdateTableOutput } from "./types/UpdateTableOutput";
import { UpdateTimeToLiveInput } from "./types/UpdateTimeToLiveInput";
import { UpdateTimeToLiveOutput } from "./types/UpdateTimeToLiveOutput";
import { BatchGetItemCommand } from "./commands/BatchGetItemCommand";
import { BatchWriteItemCommand } from "./commands/BatchWriteItemCommand";
import { CreateBackupCommand } from "./commands/CreateBackupCommand";
import { CreateGlobalTableCommand } from "./commands/CreateGlobalTableCommand";
import { CreateTableCommand } from "./commands/CreateTableCommand";
import { DeleteBackupCommand } from "./commands/DeleteBackupCommand";
import { DeleteItemCommand } from "./commands/DeleteItemCommand";
import { DeleteTableCommand } from "./commands/DeleteTableCommand";
import { DescribeBackupCommand } from "./commands/DescribeBackupCommand";
import { DescribeContinuousBackupsCommand } from "./commands/DescribeContinuousBackupsCommand";
import { DescribeEndpointsCommand } from "./commands/DescribeEndpointsCommand";
import { DescribeGlobalTableCommand } from "./commands/DescribeGlobalTableCommand";
import { DescribeGlobalTableSettingsCommand } from "./commands/DescribeGlobalTableSettingsCommand";
import { DescribeLimitsCommand } from "./commands/DescribeLimitsCommand";
import { DescribeTableCommand } from "./commands/DescribeTableCommand";
import { DescribeTimeToLiveCommand } from "./commands/DescribeTimeToLiveCommand";
import { GetItemCommand } from "./commands/GetItemCommand";
import { ListBackupsCommand } from "./commands/ListBackupsCommand";
import { ListGlobalTablesCommand } from "./commands/ListGlobalTablesCommand";
import { ListTablesCommand } from "./commands/ListTablesCommand";
import { ListTagsOfResourceCommand } from "./commands/ListTagsOfResourceCommand";
import { PutItemCommand } from "./commands/PutItemCommand";
import { QueryCommand } from "./commands/QueryCommand";
import { RestoreTableFromBackupCommand } from "./commands/RestoreTableFromBackupCommand";
import { RestoreTableToPointInTimeCommand } from "./commands/RestoreTableToPointInTimeCommand";
import { ScanCommand } from "./commands/ScanCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TransactGetItemsCommand } from "./commands/TransactGetItemsCommand";
import { TransactWriteItemsCommand } from "./commands/TransactWriteItemsCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateContinuousBackupsCommand } from "./commands/UpdateContinuousBackupsCommand";
import { UpdateGlobalTableCommand } from "./commands/UpdateGlobalTableCommand";
import { UpdateGlobalTableSettingsCommand } from "./commands/UpdateGlobalTableSettingsCommand";
import { UpdateItemCommand } from "./commands/UpdateItemCommand";
import { UpdateTableCommand } from "./commands/UpdateTableCommand";
import { UpdateTimeToLiveCommand } from "./commands/UpdateTimeToLiveCommand";

export class DynamoDB extends DynamoDBClient {
  /**
   * <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> retrieves items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetItem(args: BatchGetItemInput): Promise<BatchGetItemOutput>;
  public batchGetItem(
    args: BatchGetItemInput,
    cb: (err: any, data?: BatchGetItemOutput) => void
  ): void;
  public batchGetItem(
    args: BatchGetItemInput,
    cb?: (err: any, data?: BatchGetItemOutput) => void
  ): Promise<BatchGetItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can write up to 16 MB of data, which can comprise as many as 25 put or delete requests. Individual items to be written can be as large as 400 KB.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. To update items, use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {ItemCollectionSizeLimitExceededException} <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchWriteItem(
    args: BatchWriteItemInput
  ): Promise<BatchWriteItemOutput>;
  public batchWriteItem(
    args: BatchWriteItemInput,
    cb: (err: any, data?: BatchWriteItemOutput) => void
  ): void;
  public batchWriteItem(
    args: BatchWriteItemInput,
    cb?: (err: any, data?: BatchWriteItemOutput) => void
  ): Promise<BatchWriteItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchWriteItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {TableInUseException} <p>A target table with the specified name is either being created or deleted. </p>
   *   - {ContinuousBackupsUnavailableException} <p>Backups have not yet been enabled for this table.</p>
   *   - {BackupInUseException} <p>There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackup(args: CreateBackupInput): Promise<CreateBackupOutput>;
  public createBackup(
    args: CreateBackupInput,
    cb: (err: any, data?: CreateBackupOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupInput,
    cb?: (err: any, data?: CreateBackupOutput) => void
  ): Promise<CreateBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {GlobalTableAlreadyExistsException} <p>The specified global table already exists.</p>
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGlobalTable(
    args: CreateGlobalTableInput
  ): Promise<CreateGlobalTableOutput>;
  public createGlobalTable(
    args: CreateGlobalTableInput,
    cb: (err: any, data?: CreateGlobalTableOutput) => void
  ): void;
  public createGlobalTable(
    args: CreateGlobalTableInput,
    cb?: (err: any, data?: CreateGlobalTableOutput) => void
  ): Promise<CreateGlobalTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGlobalTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>CreateTable</code> operation adds a new table to your account. In an AWS account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTable(args: CreateTableInput): Promise<CreateTableOutput>;
  public createTable(
    args: CreateTableInput,
    cb: (err: any, data?: CreateTableOutput) => void
  ): void;
  public createTable(
    args: CreateTableInput,
    cb?: (err: any, data?: CreateTableOutput) => void
  ): Promise<CreateTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BackupNotFoundException} <p>Backup not found for the given BackupARN. </p>
   *   - {BackupInUseException} <p>There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackup(args: DeleteBackupInput): Promise<DeleteBackupOutput>;
  public deleteBackup(
    args: DeleteBackupInput,
    cb: (err: any, data?: DeleteBackupOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupInput,
    cb?: (err: any, data?: DeleteBackupOutput) => void
  ): Promise<DeleteBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConditionalCheckFailedException} <p>A condition specified in the operation could not be evaluated.</p>
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {ItemCollectionSizeLimitExceededException} <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
   *   - {TransactionConflictException} <p>Operation was rejected because there is an ongoing transaction for the item.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteItem(args: DeleteItemInput): Promise<DeleteItemOutput>;
  public deleteItem(
    args: DeleteItemInput,
    cb: (err: any, data?: DeleteItemOutput) => void
  ): void;
  public deleteItem(
    args: DeleteItemInput,
    cb?: (err: any, data?: DeleteItemOutput) => void
  ): Promise<DeleteItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTable(args: DeleteTableInput): Promise<DeleteTableOutput>;
  public deleteTable(
    args: DeleteTableInput,
    cb: (err: any, data?: DeleteTableOutput) => void
  ): void;
  public deleteTable(
    args: DeleteTableInput,
    cb?: (err: any, data?: DeleteTableOutput) => void
  ): Promise<DeleteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BackupNotFoundException} <p>Backup not found for the given BackupARN. </p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBackup(
    args: DescribeBackupInput
  ): Promise<DescribeBackupOutput>;
  public describeBackup(
    args: DescribeBackupInput,
    cb: (err: any, data?: DescribeBackupOutput) => void
  ): void;
  public describeBackup(
    args: DescribeBackupInput,
    cb?: (err: any, data?: DescribeBackupOutput) => void
  ): Promise<DescribeBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeContinuousBackups(
    args: DescribeContinuousBackupsInput
  ): Promise<DescribeContinuousBackupsOutput>;
  public describeContinuousBackups(
    args: DescribeContinuousBackupsInput,
    cb: (err: any, data?: DescribeContinuousBackupsOutput) => void
  ): void;
  public describeContinuousBackups(
    args: DescribeContinuousBackupsInput,
    cb?: (err: any, data?: DescribeContinuousBackupsOutput) => void
  ): Promise<DescribeContinuousBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeContinuousBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the regional endpoint information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpoints(
    args: DescribeEndpointsInput
  ): Promise<DescribeEndpointsOutput>;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb: (err: any, data?: DescribeEndpointsOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb?: (err: any, data?: DescribeEndpointsOutput) => void
  ): Promise<DescribeEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified global table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {GlobalTableNotFoundException} <p>The specified global table does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGlobalTable(
    args: DescribeGlobalTableInput
  ): Promise<DescribeGlobalTableOutput>;
  public describeGlobalTable(
    args: DescribeGlobalTableInput,
    cb: (err: any, data?: DescribeGlobalTableOutput) => void
  ): void;
  public describeGlobalTable(
    args: DescribeGlobalTableInput,
    cb?: (err: any, data?: DescribeGlobalTableOutput) => void
  ): Promise<DescribeGlobalTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGlobalTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Region-specific settings for a global table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalTableNotFoundException} <p>The specified global table does not exist.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsInput
  ): Promise<DescribeGlobalTableSettingsOutput>;
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsInput,
    cb: (err: any, data?: DescribeGlobalTableSettingsOutput) => void
  ): void;
  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsInput,
    cb?: (err: any, data?: DescribeGlobalTableSettingsOutput) => void
  ): Promise<DescribeGlobalTableSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGlobalTableSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current provisioned-capacity limits for your AWS account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an AWS account, the account has initial limits on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table limits that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these limits by filing a case at <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those limits imposed by your account so that you have enough time to apply for an increase before you hit a limit.</p> <p>For example, you could use one of the AWS SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account limits on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account limits for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level limits.</p> <p>The per-table limits apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly. But the only upper limit that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account limits.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLimits(
    args: DescribeLimitsInput
  ): Promise<DescribeLimitsOutput>;
  public describeLimits(
    args: DescribeLimitsInput,
    cb: (err: any, data?: DescribeLimitsOutput) => void
  ): void;
  public describeLimits(
    args: DescribeLimitsInput,
    cb?: (err: any, data?: DescribeLimitsOutput) => void
  ): Promise<DescribeLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTable(args: DescribeTableInput): Promise<DescribeTableOutput>;
  public describeTable(
    args: DescribeTableInput,
    cb: (err: any, data?: DescribeTableOutput) => void
  ): void;
  public describeTable(
    args: DescribeTableInput,
    cb?: (err: any, data?: DescribeTableOutput) => void
  ): Promise<DescribeTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTimeToLive(
    args: DescribeTimeToLiveInput
  ): Promise<DescribeTimeToLiveOutput>;
  public describeTimeToLive(
    args: DescribeTimeToLiveInput,
    cb: (err: any, data?: DescribeTimeToLiveOutput) => void
  ): void;
  public describeTimeToLive(
    args: DescribeTimeToLiveInput,
    cb?: (err: any, data?: DescribeTimeToLiveOutput) => void
  ): Promise<DescribeTimeToLiveOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTimeToLiveCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getItem(args: GetItemInput): Promise<GetItemOutput>;
  public getItem(
    args: GetItemInput,
    cb: (err: any, data?: GetItemOutput) => void
  ): void;
  public getItem(
    args: GetItemInput,
    cb?: (err: any, data?: GetItemOutput) => void
  ): Promise<GetItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List backups associated with an AWS account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a limit for the maximum number of entries to be returned in a page. </p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these limits are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackups(args: ListBackupsInput): Promise<ListBackupsOutput>;
  public listBackups(
    args: ListBackupsInput,
    cb: (err: any, data?: ListBackupsOutput) => void
  ): void;
  public listBackups(
    args: ListBackupsInput,
    cb?: (err: any, data?: ListBackupsOutput) => void
  ): Promise<ListBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all global tables that have a replica in the specified Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGlobalTables(
    args: ListGlobalTablesInput
  ): Promise<ListGlobalTablesOutput>;
  public listGlobalTables(
    args: ListGlobalTablesInput,
    cb: (err: any, data?: ListGlobalTablesOutput) => void
  ): void;
  public listGlobalTables(
    args: ListGlobalTablesInput,
    cb?: (err: any, data?: ListGlobalTablesOutput) => void
  ): Promise<ListGlobalTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGlobalTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTables(args: ListTablesInput): Promise<ListTablesOutput>;
  public listTables(
    args: ListTablesInput,
    cb: (err: any, data?: ListTablesOutput) => void
  ): void;
  public listTables(
    args: ListTablesInput,
    cb?: (err: any, data?: ListTablesOutput) => void
  ): Promise<ListTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsOfResource(
    args: ListTagsOfResourceInput
  ): Promise<ListTagsOfResourceOutput>;
  public listTagsOfResource(
    args: ListTagsOfResourceInput,
    cb: (err: any, data?: ListTagsOfResourceOutput) => void
  ): void;
  public listTagsOfResource(
    args: ListTagsOfResourceInput,
    cb?: (err: any, data?: ListTagsOfResourceOutput) => void
  ): Promise<ListTagsOfResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsOfResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <important> <p>This topic provides general information about the <code>PutItem</code> API.</p> <p>For information on how to call the <code>PutItem</code> API using the AWS SDK in specific languages, see the following:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/goto/aws-cli/dynamodb-2012-08-10/PutItem"> PutItem in the AWS Command Line Interface</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/DotNetSDKV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for .NET</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForCpp/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for C++</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForGoV1/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Go</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForJava/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Java</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/AWSJavaScriptSDK/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for JavaScript</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForPHPV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for PHP V3</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/boto3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Python</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForRubyV2/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Ruby V2</a> </p> </li> </ul> </important> <p>When you add an item, the primary key attributes are the only required attributes. Attribute values cannot be null. String and Binary type attributes must have lengths greater than zero. Set type attributes cannot be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConditionalCheckFailedException} <p>A condition specified in the operation could not be evaluated.</p>
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {ItemCollectionSizeLimitExceededException} <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
   *   - {TransactionConflictException} <p>Operation was rejected because there is an ongoing transaction for the item.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putItem(args: PutItemInput): Promise<PutItemOutput>;
  public putItem(
    args: PutItemInput,
    cb: (err: any, data?: PutItemOutput) => void
  ): void;
  public putItem(
    args: PutItemInput,
    cb?: (err: any, data?: PutItemOutput) => void
  ): Promise<PutItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>Query</code> operation finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key). </p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public query(args: QueryInput): Promise<QueryOutput>;
  public query(
    args: QueryInput,
    cb: (err: any, data?: QueryOutput) => void
  ): void;
  public query(
    args: QueryInput,
    cb?: (err: any, data?: QueryOutput) => void
  ): Promise<QueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new QueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TableAlreadyExistsException} <p>A target table with the specified name already exists. </p>
   *   - {TableInUseException} <p>A target table with the specified name is either being created or deleted. </p>
   *   - {BackupNotFoundException} <p>Backup not found for the given BackupARN. </p>
   *   - {BackupInUseException} <p>There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreTableFromBackup(
    args: RestoreTableFromBackupInput
  ): Promise<RestoreTableFromBackupOutput>;
  public restoreTableFromBackup(
    args: RestoreTableFromBackupInput,
    cb: (err: any, data?: RestoreTableFromBackupOutput) => void
  ): void;
  public restoreTableFromBackup(
    args: RestoreTableFromBackupInput,
    cb?: (err: any, data?: RestoreTableFromBackupOutput) => void
  ): Promise<RestoreTableFromBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreTableFromBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {TableAlreadyExistsException} <p>A target table with the specified name already exists. </p>
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {TableInUseException} <p>A target table with the specified name is either being created or deleted. </p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InvalidRestoreTimeException} <p>An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.</p>
   *   - {PointInTimeRecoveryUnavailableException} <p>Point in time recovery has not yet been enabled for this source table.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeInput
  ): Promise<RestoreTableToPointInTimeOutput>;
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeInput,
    cb: (err: any, data?: RestoreTableToPointInTimeOutput) => void
  ): void;
  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeInput,
    cb?: (err: any, data?: RestoreTableToPointInTimeOutput) => void
  ): Promise<RestoreTableToPointInTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreTableToPointInTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public scan(args: ScanInput): Promise<ScanOutput>;
  public scan(args: ScanInput, cb: (err: any, data?: ScanOutput) => void): void;
  public scan(
    args: ScanInput,
    cb?: (err: any, data?: ScanOutput) => void
  ): Promise<ScanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ScanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 25 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one AWS account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <note> <p>All AWS Regions and AWS GovCloud (US) support up to 25 items per transaction with up to 4 MB of data, except the following AWS Regions: </p> <ul> <li> <p>China (Beijing)</p> </li> <li> <p>China (Ningxia)</p> </li> </ul> <p>The China (Beijing) and China (Ningxia) Regions support up to 10 items per transaction with up to 4 MB of data. </p> </note> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {TransactionCanceledException} <p>The entire transaction request was canceled.</p> <p>DynamoDB cancels a <code>TransactWriteItems</code> request under the following circumstances:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>A table in the <code>TransactWriteItems</code> request is in a different account or region.</p> </li> <li> <p>More than one action in the <code>TransactWriteItems</code> operation targets the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (larger than 400 KB), or a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MBs.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul> <p>DynamoDB cancels a <code>TransactGetItems</code> request under the following circumstances:</p> <ul> <li> <p>There is an ongoing <code>TransactGetItems</code> operation that conflicts with a concurrent <code>PutItem</code>, <code>UpdateItem</code>, <code>DeleteItem</code> or <code>TransactWriteItems</code> request. In this case the <code>TransactGetItems</code> operation fails with a <code>TransactionCanceledException</code>.</p> </li> <li> <p>A table in the <code>TransactGetItems</code> request is in a different account or region.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MBs.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul> <note> <p>If using Java, DynamoDB lists the cancellation reasons on the <code>CancellationReasons</code> property. This property is not set for other languages. Transaction cancellation reasons are ordered in the order of requested items, if an item has no error it will have <code>NONE</code> code and <code>Null</code> message.</p> </note> <p>Cancellation reason codes and possible error messages:</p> <ul> <li> <p>No Errors:</p> <ul> <li> <p>Code: <code>NONE</code> </p> </li> <li> <p>Message: <code>null</code> </p> </li> </ul> </li> <li> <p>Conditional Check Failed:</p> <ul> <li> <p>Code: <code>ConditionalCheckFailed</code> </p> </li> <li> <p>Message: The conditional request failed. </p> </li> </ul> </li> <li> <p>Item Collection Size Limit Exceeded:</p> <ul> <li> <p>Code: <code>ItemCollectionSizeLimitExceeded</code> </p> </li> <li> <p>Message: Collection size exceeded.</p> </li> </ul> </li> <li> <p>Transaction Conflict:</p> <ul> <li> <p>Code: <code>TransactionConflict</code> </p> </li> <li> <p>Message: Transaction is ongoing for the item.</p> </li> </ul> </li> <li> <p>Provisioned Throughput Exceeded:</p> <ul> <li> <p>Code: <code>ProvisionedThroughputExceeded</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the UpdateTable API.</p> <note> <p>This Message is received when provisioned throughput is exceeded is on a provisioned DynamoDB table.</p> </note> </li> <li> <p>The level of configured provisioned throughput for one or more global secondary indexes of the table was exceeded. Consider increasing your provisioning level for the under-provisioned global secondary indexes with the UpdateTable API.</p> <note> <p>This message is returned when provisioned throughput is exceeded is on a provisioned GSI.</p> </note> </li> </ul> </li> </ul> </li> <li> <p>Throttling Error:</p> <ul> <li> <p>Code: <code>ThrottlingError</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>Throughput exceeds the current capacity of your table or index. DynamoDB is automatically scaling your table or index so please try again shortly. If exceptions persist, check if you have a hot key: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.</p> <note> <p>This message is returned when writes get throttled on an On-Demand table as DynamoDB is automatically scaling the table.</p> </note> </li> <li> <p>Throughput exceeds the current capacity for one or more global secondary indexes. DynamoDB is automatically scaling your index so please try again shortly.</p> <note> <p>This message is returned when when writes get throttled on an On-Demand GSI as DynamoDB is automatically scaling the GSI.</p> </note> </li> </ul> </li> </ul> </li> <li> <p>Validation Error:</p> <ul> <li> <p>Code: <code>ValidationError</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>One or more parameter values were invalid.</p> </li> <li> <p>The update expression attempted to update the secondary index key beyond allowed size limits.</p> </li> <li> <p>The update expression attempted to update the secondary index key to unsupported type.</p> </li> <li> <p>An operand in the update expression has an incorrect data type.</p> </li> <li> <p>Item size to update has exceeded the maximum allowed size.</p> </li> <li> <p>Number overflow. Attempting to store a number with magnitude larger than supported range.</p> </li> <li> <p>Type mismatch for attribute to update.</p> </li> <li> <p>Nesting Levels have exceeded supported limits.</p> </li> <li> <p>The document path provided in the update expression is invalid for update.</p> </li> <li> <p>The provided expression refers to an attribute that does not exist in the item.</p> </li> </ul> </li> </ul> </li> </ul>
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public transactGetItems(
    args: TransactGetItemsInput
  ): Promise<TransactGetItemsOutput>;
  public transactGetItems(
    args: TransactGetItemsInput,
    cb: (err: any, data?: TransactGetItemsOutput) => void
  ): void;
  public transactGetItems(
    args: TransactGetItemsInput,
    cb?: (err: any, data?: TransactGetItemsOutput) => void
  ): Promise<TransactGetItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TransactGetItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 25 action requests. These actions can target items in different tables, but not in different AWS accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <note> <p>All AWS Regions and AWS GovCloud (US) support up to 25 items per transaction with up to 4 MB of data, except the following AWS Regions: </p> <ul> <li> <p>China (Beijing)</p> </li> <li> <p>China (Ningxia)</p> </li> </ul> <p>The China (Beijing) and China (Ningxia) Regions support up to 10 items per transaction with up to 4 MB of data. </p> </note> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  &#x97;   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  &#x97;   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  &#x97;   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  &#x97;   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {TransactionCanceledException} <p>The entire transaction request was canceled.</p> <p>DynamoDB cancels a <code>TransactWriteItems</code> request under the following circumstances:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>A table in the <code>TransactWriteItems</code> request is in a different account or region.</p> </li> <li> <p>More than one action in the <code>TransactWriteItems</code> operation targets the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (larger than 400 KB), or a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MBs.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul> <p>DynamoDB cancels a <code>TransactGetItems</code> request under the following circumstances:</p> <ul> <li> <p>There is an ongoing <code>TransactGetItems</code> operation that conflicts with a concurrent <code>PutItem</code>, <code>UpdateItem</code>, <code>DeleteItem</code> or <code>TransactWriteItems</code> request. In this case the <code>TransactGetItems</code> operation fails with a <code>TransactionCanceledException</code>.</p> </li> <li> <p>A table in the <code>TransactGetItems</code> request is in a different account or region.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MBs.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul> <note> <p>If using Java, DynamoDB lists the cancellation reasons on the <code>CancellationReasons</code> property. This property is not set for other languages. Transaction cancellation reasons are ordered in the order of requested items, if an item has no error it will have <code>NONE</code> code and <code>Null</code> message.</p> </note> <p>Cancellation reason codes and possible error messages:</p> <ul> <li> <p>No Errors:</p> <ul> <li> <p>Code: <code>NONE</code> </p> </li> <li> <p>Message: <code>null</code> </p> </li> </ul> </li> <li> <p>Conditional Check Failed:</p> <ul> <li> <p>Code: <code>ConditionalCheckFailed</code> </p> </li> <li> <p>Message: The conditional request failed. </p> </li> </ul> </li> <li> <p>Item Collection Size Limit Exceeded:</p> <ul> <li> <p>Code: <code>ItemCollectionSizeLimitExceeded</code> </p> </li> <li> <p>Message: Collection size exceeded.</p> </li> </ul> </li> <li> <p>Transaction Conflict:</p> <ul> <li> <p>Code: <code>TransactionConflict</code> </p> </li> <li> <p>Message: Transaction is ongoing for the item.</p> </li> </ul> </li> <li> <p>Provisioned Throughput Exceeded:</p> <ul> <li> <p>Code: <code>ProvisionedThroughputExceeded</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the UpdateTable API.</p> <note> <p>This Message is received when provisioned throughput is exceeded is on a provisioned DynamoDB table.</p> </note> </li> <li> <p>The level of configured provisioned throughput for one or more global secondary indexes of the table was exceeded. Consider increasing your provisioning level for the under-provisioned global secondary indexes with the UpdateTable API.</p> <note> <p>This message is returned when provisioned throughput is exceeded is on a provisioned GSI.</p> </note> </li> </ul> </li> </ul> </li> <li> <p>Throttling Error:</p> <ul> <li> <p>Code: <code>ThrottlingError</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>Throughput exceeds the current capacity of your table or index. DynamoDB is automatically scaling your table or index so please try again shortly. If exceptions persist, check if you have a hot key: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.</p> <note> <p>This message is returned when writes get throttled on an On-Demand table as DynamoDB is automatically scaling the table.</p> </note> </li> <li> <p>Throughput exceeds the current capacity for one or more global secondary indexes. DynamoDB is automatically scaling your index so please try again shortly.</p> <note> <p>This message is returned when when writes get throttled on an On-Demand GSI as DynamoDB is automatically scaling the GSI.</p> </note> </li> </ul> </li> </ul> </li> <li> <p>Validation Error:</p> <ul> <li> <p>Code: <code>ValidationError</code> </p> </li> <li> <p>Messages: </p> <ul> <li> <p>One or more parameter values were invalid.</p> </li> <li> <p>The update expression attempted to update the secondary index key beyond allowed size limits.</p> </li> <li> <p>The update expression attempted to update the secondary index key to unsupported type.</p> </li> <li> <p>An operand in the update expression has an incorrect data type.</p> </li> <li> <p>Item size to update has exceeded the maximum allowed size.</p> </li> <li> <p>Number overflow. Attempting to store a number with magnitude larger than supported range.</p> </li> <li> <p>Type mismatch for attribute to update.</p> </li> <li> <p>Nesting Levels have exceeded supported limits.</p> </li> <li> <p>The document path provided in the update expression is invalid for update.</p> </li> <li> <p>The provided expression refers to an attribute that does not exist in the item.</p> </li> </ul> </li> </ul> </li> </ul>
   *   - {TransactionInProgressException} <p>The transaction with the given request token is already in progress.</p>
   *   - {IdempotentParameterMismatchException} <p>DynamoDB rejected the request because you retried a request with a different payload but with an idempotent token that was already used.</p>
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public transactWriteItems(
    args: TransactWriteItemsInput
  ): Promise<TransactWriteItemsOutput>;
  public transactWriteItems(
    args: TransactWriteItemsInput,
    cb: (err: any, data?: TransactWriteItemsOutput) => void
  ): void;
  public transactWriteItems(
    args: TransactWriteItemsInput,
    cb?: (err: any, data?: TransactWriteItemsOutput) => void
  ): Promise<TransactWriteItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TransactWriteItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {ContinuousBackupsUnavailableException} <p>Backups have not yet been enabled for this table.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateContinuousBackups(
    args: UpdateContinuousBackupsInput
  ): Promise<UpdateContinuousBackupsOutput>;
  public updateContinuousBackups(
    args: UpdateContinuousBackupsInput,
    cb: (err: any, data?: UpdateContinuousBackupsOutput) => void
  ): void;
  public updateContinuousBackups(
    args: UpdateContinuousBackupsInput,
    cb?: (err: any, data?: UpdateContinuousBackupsOutput) => void
  ): Promise<UpdateContinuousBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateContinuousBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <note> <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas.</p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {GlobalTableNotFoundException} <p>The specified global table does not exist.</p>
   *   - {ReplicaAlreadyExistsException} <p>The specified replica is already part of the global table.</p>
   *   - {ReplicaNotFoundException} <p>The specified replica is no longer part of the global table.</p>
   *   - {TableNotFoundException} <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGlobalTable(
    args: UpdateGlobalTableInput
  ): Promise<UpdateGlobalTableOutput>;
  public updateGlobalTable(
    args: UpdateGlobalTableInput,
    cb: (err: any, data?: UpdateGlobalTableOutput) => void
  ): void;
  public updateGlobalTable(
    args: UpdateGlobalTableInput,
    cb?: (err: any, data?: UpdateGlobalTableOutput) => void
  ): Promise<UpdateGlobalTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGlobalTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates settings for a global table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {GlobalTableNotFoundException} <p>The specified global table does not exist.</p>
   *   - {ReplicaNotFoundException} <p>The specified replica is no longer part of the global table.</p>
   *   - {IndexNotFoundException} <p>The operation tried to access a nonexistent index.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsInput
  ): Promise<UpdateGlobalTableSettingsOutput>;
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsInput,
    cb: (err: any, data?: UpdateGlobalTableSettingsOutput) => void
  ): void;
  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsInput,
    cb?: (err: any, data?: UpdateGlobalTableSettingsOutput) => void
  ): Promise<UpdateGlobalTableSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGlobalTableSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConditionalCheckFailedException} <p>A condition specified in the operation could not be evaluated.</p>
   *   - {ProvisionedThroughputExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {ItemCollectionSizeLimitExceededException} <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
   *   - {TransactionConflictException} <p>Operation was rejected because there is an ongoing transaction for the item.</p>
   *   - {RequestLimitExceeded} <p>Throughput exceeds the current throughput limit for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a limit increase.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateItem(args: UpdateItemInput): Promise<UpdateItemOutput>;
  public updateItem(
    args: UpdateItemInput,
    cb: (err: any, data?: UpdateItemOutput) => void
  ): void;
  public updateItem(
    args: UpdateItemInput,
    cb?: (err: any, data?: UpdateItemOutput) => void
  ): Promise<UpdateItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Enable or disable DynamoDB Streams on the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTable(args: UpdateTableInput): Promise<UpdateTableOutput>;
  public updateTable(
    args: UpdateTableInput,
    cb: (err: any, data?: UpdateTableOutput) => void
  ): void;
  public updateTable(
    args: UpdateTableInput,
    cb?: (err: any, data?: UpdateTableOutput) => void
  ): Promise<UpdateTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
   *   - {LimitExceededException} <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTimeToLive(
    args: UpdateTimeToLiveInput
  ): Promise<UpdateTimeToLiveOutput>;
  public updateTimeToLive(
    args: UpdateTimeToLiveInput,
    cb: (err: any, data?: UpdateTimeToLiveOutput) => void
  ): void;
  public updateTimeToLive(
    args: UpdateTimeToLiveInput,
    cb?: (err: any, data?: UpdateTimeToLiveOutput) => void
  ): Promise<UpdateTimeToLiveOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTimeToLiveCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
