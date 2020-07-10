import { RDSDataClient } from "./RDSDataClient";
import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import {
  BeginTransactionCommand,
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput,
} from "./commands/BeginTransactionCommand";
import {
  CommitTransactionCommand,
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
} from "./commands/CommitTransactionCommand";
import { ExecuteSqlCommand, ExecuteSqlCommandInput, ExecuteSqlCommandOutput } from "./commands/ExecuteSqlCommand";
import {
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "./commands/ExecuteStatementCommand";
import {
  RollbackTransactionCommand,
  RollbackTransactionCommandInput,
  RollbackTransactionCommandOutput,
} from "./commands/RollbackTransactionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora
 *             Serverless DB cluster. To run these statements, you work with the Data Service
 *             API.</p>
 *         <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora
 *                 Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *             <p>If you have questions or comments related to the Data API, send email to
 *                 <a href="mailto:Rds-data-api-feedback@amazon.com">Rds-data-api-feedback@amazon.com</a>.</p>
 *         </note>
 */
export class RDSData extends RDSDataClient {
  /**
   * <p>Runs a batch SQL statement over an array of data.</p>
   *         <p>You can run bulk update and insert operations for multiple records using a DML
   *             statement with different parameter sets. Bulk operations can provide a significant
   *             performance improvement over individual insert and update operations.</p>
   *         <important>
   *             <p>If a call isn't part of a transaction because it doesn't include the
   *                     <code>transactionID</code> parameter, changes that result from the call are
   *                 committed automatically.</p>
   *         </important>
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
   * <p>Starts a SQL transaction.</p>
   *
   *         <important>
   *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
   *                 rolled back automatically after 24 hours.</p>
   *             <p>A transaction times out if no calls use its transaction ID in three minutes.
   *                 If a transaction times out before it's committed, it's rolled back
   *                 automatically.</p>
   *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
   *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
   *                 <code>continueAfterTimeout</code> enabled.</p>
   *         </important>
   */
  public beginTransaction(
    args: BeginTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BeginTransactionCommandOutput>;
  public beginTransaction(
    args: BeginTransactionCommandInput,
    cb: (err: any, data?: BeginTransactionCommandOutput) => void
  ): void;
  public beginTransaction(
    args: BeginTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BeginTransactionCommandOutput) => void
  ): void;
  public beginTransaction(
    args: BeginTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BeginTransactionCommandOutput) => void),
    cb?: (err: any, data?: BeginTransactionCommandOutput) => void
  ): Promise<BeginTransactionCommandOutput> | void {
    const command = new BeginTransactionCommand(args);
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
   * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
   *             commits the changes.</p>
   */
  public commitTransaction(
    args: CommitTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CommitTransactionCommandOutput>;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  public commitTransaction(
    args: CommitTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CommitTransactionCommandOutput) => void),
    cb?: (err: any, data?: CommitTransactionCommandOutput) => void
  ): Promise<CommitTransactionCommandOutput> | void {
    const command = new CommitTransactionCommand(args);
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
   * <p>Runs one or more SQL statements.</p>
   *         <important>
   *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
   *                     <code>ExecuteStatement</code> operation.</p>
   *         </important>
   */
  public executeSql(args: ExecuteSqlCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteSqlCommandOutput>;
  public executeSql(args: ExecuteSqlCommandInput, cb: (err: any, data?: ExecuteSqlCommandOutput) => void): void;
  public executeSql(
    args: ExecuteSqlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteSqlCommandOutput) => void
  ): void;
  public executeSql(
    args: ExecuteSqlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteSqlCommandOutput) => void),
    cb?: (err: any, data?: ExecuteSqlCommandOutput) => void
  ): Promise<ExecuteSqlCommandOutput> | void {
    const command = new ExecuteSqlCommand(args);
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
   * <p>Runs a SQL statement against a database.</p>
   *         <important>
   *             <p>If a call isn't part of a transaction because it doesn't include the
   *                     <code>transactionID</code> parameter, changes that result from the call are
   *                 committed automatically.</p>
   *         </important>
   *         <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
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
   * <p>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</p>
   */
  public rollbackTransaction(
    args: RollbackTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackTransactionCommandOutput>;
  public rollbackTransaction(
    args: RollbackTransactionCommandInput,
    cb: (err: any, data?: RollbackTransactionCommandOutput) => void
  ): void;
  public rollbackTransaction(
    args: RollbackTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackTransactionCommandOutput) => void
  ): void;
  public rollbackTransaction(
    args: RollbackTransactionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RollbackTransactionCommandOutput) => void),
    cb?: (err: any, data?: RollbackTransactionCommandOutput) => void
  ): Promise<RollbackTransactionCommandOutput> | void {
    const command = new RollbackTransactionCommand(args);
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
