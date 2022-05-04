// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateKeyspaceCommand,
  CreateKeyspaceCommandInput,
  CreateKeyspaceCommandOutput,
} from "./commands/CreateKeyspaceCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  DeleteKeyspaceCommand,
  DeleteKeyspaceCommandInput,
  DeleteKeyspaceCommandOutput,
} from "./commands/DeleteKeyspaceCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { GetKeyspaceCommand, GetKeyspaceCommandInput, GetKeyspaceCommandOutput } from "./commands/GetKeyspaceCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import {
  ListKeyspacesCommand,
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput,
} from "./commands/ListKeyspacesCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RestoreTableCommand,
  RestoreTableCommandInput,
  RestoreTableCommandOutput,
} from "./commands/RestoreTableCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import { KeyspacesClient } from "./KeyspacesClient";

/**
 * <p>Amazon Keyspaces (for Apache Cassandra) is a scalable,
 *         highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate,
 *         run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code,
 *         you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p>
 *          <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers,
 *         Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI. This API reference describes
 *         the supported DDL operations in detail.</p>
 *          <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types
 *         in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer
 *               Guide</i>.</p>
 *          <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>
 */
export class Keyspaces extends KeyspacesClient {
  /**
   * <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names
   *       must be unique within each Region.</p>
   *          <p>
   *             <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace
   *           by using the <code>GetKeyspace</code> operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer
   *              Guide</i>.</p>
   */
  public createKeyspace(
    args: CreateKeyspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyspaceCommandOutput>;
  public createKeyspace(
    args: CreateKeyspaceCommandInput,
    cb: (err: any, data?: CreateKeyspaceCommandOutput) => void
  ): void;
  public createKeyspace(
    args: CreateKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyspaceCommandOutput) => void
  ): void;
  public createKeyspace(
    args: CreateKeyspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKeyspaceCommandOutput) => void),
    cb?: (err: any, data?: CreateKeyspaceCommandOutput) => void
  ): Promise<CreateKeyspaceCommandOutput> | void {
    const command = new CreateKeyspaceCommand(args);
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
   * <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names
   *          must be unique.</p>
   *          <p>
   *             <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>.
   *          You can monitor the creation status of the new table by using the <code>GetTable</code>
   *          operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
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
   * <p>The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. </p>
   */
  public deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyspaceCommandOutput>;
  public deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    cb: (err: any, data?: DeleteKeyspaceCommandOutput) => void
  ): void;
  public deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyspaceCommandOutput) => void
  ): void;
  public deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKeyspaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeyspaceCommandOutput) => void
  ): Promise<DeleteKeyspaceCommandOutput> | void {
    const command = new DeleteKeyspaceCommand(args);
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
   * <p>The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received,
   *          the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table
   *          is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then
   *          Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns
   *          a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.</p>
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
   * <p>Returns the name and the Amazon Resource Name (ARN) of the specified table.</p>
   */
  public getKeyspace(args: GetKeyspaceCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyspaceCommandOutput>;
  public getKeyspace(args: GetKeyspaceCommandInput, cb: (err: any, data?: GetKeyspaceCommandOutput) => void): void;
  public getKeyspace(
    args: GetKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyspaceCommandOutput) => void
  ): void;
  public getKeyspace(
    args: GetKeyspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetKeyspaceCommandOutput) => void),
    cb?: (err: any, data?: GetKeyspaceCommandOutput) => void
  ): Promise<GetKeyspaceCommandOutput> | void {
    const command = new GetKeyspaceCommand(args);
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
   * <p>Returns information about the table, including the table's name and current status, the keyspace name,
   *          configuration settings, and metadata.</p>
   *          <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action
   *          permissions for the table and system tables are required to complete the operation.</p>
   */
  public getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  public getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  public getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  public getTable(
    args: GetTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableCommandOutput) => void),
    cb?: (err: any, data?: GetTableCommandOutput) => void
  ): Promise<GetTableCommandOutput> | void {
    const command = new GetTableCommand(args);
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
   * <p>Returns a list of keyspaces.</p>
   */
  public listKeyspaces(
    args: ListKeyspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeyspacesCommandOutput>;
  public listKeyspaces(
    args: ListKeyspacesCommandInput,
    cb: (err: any, data?: ListKeyspacesCommandOutput) => void
  ): void;
  public listKeyspaces(
    args: ListKeyspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyspacesCommandOutput) => void
  ): void;
  public listKeyspaces(
    args: ListKeyspacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListKeyspacesCommandOutput) => void),
    cb?: (err: any, data?: ListKeyspacesCommandOutput) => void
  ): Promise<ListKeyspacesCommandOutput> | void {
    const command = new ListKeyspacesCommand(args);
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
   * <p>Returns a list of tables for a specified keyspace.</p>
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
   * <p>Returns a list of all tags associated with the specified Amazon Keyspaces resource.</p>
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
   * <p>Restores the specified table to the specified point in time within the
   *          <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see
   *          <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window">
   *             Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.
   *       </p>
   *          <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p>
   *          <p>When you restore using point in time recovery,
   *          Amazon Keyspaces restores your source table's schema and data to the state
   *          based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings
   *       are also restored to the state based on the selected timestamp.</p>
   *          <p>In addition to the table's schema, data, and TTL settings,
   *          <code>RestoreTable</code> restores the capacity mode, encryption, and
   *          point-in-time recovery settings from the source table.
   *          Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp,
   *          these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p>
   *          <p>You can also overwrite
   *             these settings during restore:</p>
   *          <p>• Read/write capacity mode</p>
   *          <p>• Provisioned throughput capacity settings</p>
   *          <p>• Point-in-time (PITR) settings</p>
   *          <p>• Tags</p>
   *          <p>For more
   *                information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   *          <p>Note that the following settings are not restored, and you must configure them manually for
   *          the new table:</p>
   *          <p>• Automatic scaling policies (for tables that use provisioned capacity
   *                mode)</p>
   *          <p>• Identity and Access Management (IAM) policies</p>
   *          <p>• Amazon CloudWatch metrics and alarms</p>
   */
  public restoreTable(
    args: RestoreTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableCommandOutput>;
  public restoreTable(args: RestoreTableCommandInput, cb: (err: any, data?: RestoreTableCommandOutput) => void): void;
  public restoreTable(
    args: RestoreTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableCommandOutput) => void
  ): void;
  public restoreTable(
    args: RestoreTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreTableCommandOutput) => void),
    cb?: (err: any, data?: RestoreTableCommandOutput) => void
  ): Promise<RestoreTableCommandOutput> | void {
    const command = new RestoreTableCommand(args);
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
   * <p>Associates a set of tags with a Amazon Keyspaces resource. You can then
   *          activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking.
   *       For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   *          <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags,
   *          see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a>
   *          in the <i>Amazon Keyspaces Developer Guide</i>.</p>
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
   * <p>Removes the association of tags from a Amazon Keyspaces resource.</p>
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
   * <p>Adds new columns to the table or updates one of the table's settings, for example
   *          capacity mode, encryption, point-in-time recovery, or ttl settings.
   *       Note that you can only update one specific table setting per update operation.</p>
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
}
