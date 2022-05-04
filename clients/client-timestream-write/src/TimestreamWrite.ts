// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { TimestreamWriteClient } from "./TimestreamWriteClient";

/**
 * <fullname>Amazon Timestream Write</fullname>
 *          <p>Amazon Timestream is a fast, scalable, fully managed time series database service that makes it easy to store and analyze trillions of time series data points per day.
 *        With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications.
 *          You can analyze industrial telemetry to streamline equipment management and maintenance.
 *          You can also store and analyze log data and metrics to improve the performance and availability of your applications.
 *        Timestream is built from the ground up to effectively ingest, process,
 *          and store time series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.</p>
 */
export class TimestreamWrite extends TimestreamWriteClient {
  /**
   * <p>Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS
   *          key located in your account.
   *          Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> for more info.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>.
   *          See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a> for details.
   *       </p>
   */
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatabaseCommandOutput>;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): Promise<CreateDatabaseCommandOutput> | void {
    const command = new CreateDatabaseCommand(args);
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
   * <p>The CreateTable operation adds a new table to an existing database in your account. In an Amazon Web Services account,
   *       table names must be at least unique within each Region if they are in the same database.
   *       You may have identical table names in the same Region if the tables are in separate databases.
   *          While creating the table, you must specify the table name, database name,
   *          and the retention properties.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>.
   *          See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details.
   *          </p>
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
   * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
   *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
   *          </p>
   *
   *          <note>
   *             <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
   *       </p>
   *
   *             <p>Due to the nature of distributed retries,
   *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
   *          </note>
   *
   *          <p>See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
   */
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatabaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): Promise<DeleteDatabaseCommandOutput> | void {
    const command = new DeleteDatabaseCommand(args);
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
   * <p>Deletes a given Timestream table. This is an irreversible operation.
   *        After a Timestream database table is deleted, the time series data stored in
   *        the table cannot be recovered.
   *        </p>
   *          <note>
   *             <p>Due to the nature of distributed retries,
   *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
   *          </note>
   *          <p>See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
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
   * <p>Returns information about the database, including the database name, time that the database was created,
   *          and the total number of tables found within the database.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.</p>
   */
  public describeDatabase(
    args: DescribeDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatabaseCommandOutput>;
  public describeDatabase(
    args: DescribeDatabaseCommandInput,
    cb: (err: any, data?: DescribeDatabaseCommandOutput) => void
  ): void;
  public describeDatabase(
    args: DescribeDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatabaseCommandOutput) => void
  ): void;
  public describeDatabase(
    args: DescribeDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatabaseCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatabaseCommandOutput) => void
  ): Promise<DescribeDatabaseCommandOutput> | void {
    const command = new DescribeDatabaseCommand(args);
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
   * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against.
   *          This API is available through both Write and Query.</p>
   *          <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture,
   *          including the management and mapping of the service endpoints,
   *          <i>it is not recommended that you use this API unless</i>:</p>
   *          <ul>
   *             <li>
   *                <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Your application uses a programming language that does not yet have SDK support</p>
   *             </li>
   *             <li>
   *                <p>You require better control over the client-side implementation</p>
   *             </li>
   *          </ul>
   *          <p>For detailed information on how and when to use and implement DescribeEndpoints,
   *          see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
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
   * <p>Returns information about the table, including the table name, database name,
   *       retention duration of the memory store and the magnetic store.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details.
   *       </p>
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
   * <p>Returns a list of your Timestream databases.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details.
   *       </p>
   */
  public listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  public listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatabasesCommandOutput) => void),
    cb?: (err: any, data?: ListDatabasesCommandOutput) => void
  ): Promise<ListDatabasesCommandOutput> | void {
    const command = new ListDatabasesCommand(args);
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
   * <p>A list of tables, along with the name, status and retention properties of each table.
   *          See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details.
   *       </p>
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
   * <p>
   * List all tags on a Timestream resource.
   * </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   *     Associate a set of tags with a Timestream resource. You can then activate
   *     these user-defined tags so that they appear on the Billing and Cost
   *     Management console for cost allocation tracking.
   * </p>
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
   *     Removes the association of tags from a Timestream resource.
   * </p>
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
   *     Modifies the KMS key for an existing database. While updating the database,
   *     you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>).
   *     If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins.
   *    </p>
   *          <p>See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
   */
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): Promise<UpdateDatabaseCommandOutput> | void {
    const command = new UpdateDatabaseCommand(args);
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
   * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table.
   *          Note that the change in retention duration takes effect immediately.
   *          For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours,
   *          the memory store will be capable of holding 24 hours of data, but will
   *          be populated with 24 hours of data 22 hours after this change was made.
   *          Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
   *          <p>See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
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
   * <p>The WriteRecords operation enables you to write your time series
   *       data into Timestream. You can specify a single data point or a batch
   *       of data points to be inserted into the system. Timestream offers you
   *       with a flexible schema that auto detects the column names and data types
   *       for your Timestream tables based on the dimension names and data types of
   *       the data points you specify when invoking writes into the database.
   *       Timestream support eventual consistency read semantics. This means that
   *       when you query data immediately after writing a batch of data into Timestream,
   *       the query results might not reflect the results of a recently completed write
   *       operation. The results may also include some stale data. If you repeat the
   *       query request after a short time, the results should return the latest data.
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>.
   *         </p>
   *
   *          <p>See
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p>
   *
   *          <p>
   *             <b>Upserts</b>
   *          </p>
   *
   *          <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points.
   *          Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when not specified for the record in the request.
   *          Timestream will update an existing record’s measure value along with its <code>Version</code> upon receiving a write request with a higher
   *          <code>Version</code> number for that record.
   *          Upon receiving an update request where the measure value is the same as that of the existing record,
   *          Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>.
   *          You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases.
   *       </p>
   *          <p>
   *          For example, suppose you write a new record without indicating <code>Version</code> in the request.
   *          Timestream will store this record, and set <code>Version</code> to <code>1</code>.
   *          Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but,
   *          like before, do not provide <code>Version</code>.
   *          In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version.
   *          However, if you were to resend the update request with <code>Version</code> set to <code>2</code>,
   *          Timestream would then succeed in updating the record’s value,
   *          and the <code>Version</code> would be set to <code>2</code>.
   *          Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value,
   *          but with <code>Version</code> set to <code>3</code>.
   *          In this case, Timestream would only update <code>Version</code> to <code>3</code>.
   *          Any further updates would need to send a version number greater than <code>3</code>,
   *          or the update requests would receive a <code>RejectedRecordsException</code>.
   *       </p>
   */
  public writeRecords(
    args: WriteRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WriteRecordsCommandOutput>;
  public writeRecords(args: WriteRecordsCommandInput, cb: (err: any, data?: WriteRecordsCommandOutput) => void): void;
  public writeRecords(
    args: WriteRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WriteRecordsCommandOutput) => void
  ): void;
  public writeRecords(
    args: WriteRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: WriteRecordsCommandOutput) => void),
    cb?: (err: any, data?: WriteRecordsCommandOutput) => void
  ): Promise<WriteRecordsCommandOutput> | void {
    const command = new WriteRecordsCommand(args);
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
