import { RDSDataClient } from "./RDSDataClient";
import { BadRequestException } from "./types/BadRequestException";
import { BatchExecuteStatementInput } from "./types/BatchExecuteStatementInput";
import { BatchExecuteStatementOutput } from "./types/BatchExecuteStatementOutput";
import { BeginTransactionInput } from "./types/BeginTransactionInput";
import { BeginTransactionOutput } from "./types/BeginTransactionOutput";
import { CommitTransactionInput } from "./types/CommitTransactionInput";
import { CommitTransactionOutput } from "./types/CommitTransactionOutput";
import { ExecuteSqlInput } from "./types/ExecuteSqlInput";
import { ExecuteSqlOutput } from "./types/ExecuteSqlOutput";
import { ExecuteStatementInput } from "./types/ExecuteStatementInput";
import { ExecuteStatementOutput } from "./types/ExecuteStatementOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { NotFoundException } from "./types/NotFoundException";
import { RollbackTransactionInput } from "./types/RollbackTransactionInput";
import { RollbackTransactionOutput } from "./types/RollbackTransactionOutput";
import { ServiceUnavailableError } from "./types/ServiceUnavailableError";
import { StatementTimeoutException } from "./types/StatementTimeoutException";
import { BatchExecuteStatementCommand } from "./commands/BatchExecuteStatementCommand";
import { BeginTransactionCommand } from "./commands/BeginTransactionCommand";
import { CommitTransactionCommand } from "./commands/CommitTransactionCommand";
import { ExecuteSqlCommand } from "./commands/ExecuteSqlCommand";
import { ExecuteStatementCommand } from "./commands/ExecuteStatementCommand";
import { RollbackTransactionCommand } from "./commands/RollbackTransactionCommand";

export class RDSData extends RDSDataClient {
  /**
   * <p>Runs a batch SQL statement over an array of data.</p>
          <p>You can run bulk update and insert operations for multiple records using a DML
              statement with different parameter sets. Bulk operations can provide a significant
              performance improvement over individual insert and update operations.</p>
          <important>
              <p>If a call isn't part of a transaction because it doesn't include the
                      <code>transactionID</code> parameter, changes that result from the call are
                  committed automatically.</p>
          </important>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {StatementTimeoutException} <p>The execution of the SQL statement timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchExecuteStatement(
    args: BatchExecuteStatementInput
  ): Promise<BatchExecuteStatementOutput>;
  public batchExecuteStatement(
    args: BatchExecuteStatementInput,
    cb: (err: any, data?: BatchExecuteStatementOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementInput,
    cb?: (err: any, data?: BatchExecuteStatementOutput) => void
  ): Promise<BatchExecuteStatementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchExecuteStatementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a SQL transaction.</p>

          <important>
              <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
                  rolled back automatically after 24 hours.</p>
              <p>A transaction times out if no calls use its transaction ID in three minutes.
                  If a transaction times out before it's committed, it's rolled back
                  automatically.</p>
              <p>DDL statements inside a transaction cause an implicit commit. We recommend
                  that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
                  <code>continueAfterTimeout</code> enabled.</p>
          </important>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {StatementTimeoutException} <p>The execution of the SQL statement timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public beginTransaction(
    args: BeginTransactionInput
  ): Promise<BeginTransactionOutput>;
  public beginTransaction(
    args: BeginTransactionInput,
    cb: (err: any, data?: BeginTransactionOutput) => void
  ): void;
  public beginTransaction(
    args: BeginTransactionInput,
    cb?: (err: any, data?: BeginTransactionOutput) => void
  ): Promise<BeginTransactionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BeginTransactionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
              commits the changes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {NotFoundException} <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public commitTransaction(
    args: CommitTransactionInput
  ): Promise<CommitTransactionOutput>;
  public commitTransaction(
    args: CommitTransactionInput,
    cb: (err: any, data?: CommitTransactionOutput) => void
  ): void;
  public commitTransaction(
    args: CommitTransactionInput,
    cb?: (err: any, data?: CommitTransactionOutput) => void
  ): Promise<CommitTransactionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CommitTransactionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs one or more SQL statements.</p>
          <important>
              <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
                      <code>ExecuteStatement</code> operation.</p>
          </important>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public executeSql(args: ExecuteSqlInput): Promise<ExecuteSqlOutput>;
  public executeSql(
    args: ExecuteSqlInput,
    cb: (err: any, data?: ExecuteSqlOutput) => void
  ): void;
  public executeSql(
    args: ExecuteSqlInput,
    cb?: (err: any, data?: ExecuteSqlOutput) => void
  ): Promise<ExecuteSqlOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExecuteSqlCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs a SQL statement against a database.</p>
          <important>
              <p>If a call isn't part of a transaction because it doesn't include the
                      <code>transactionID</code> parameter, changes that result from the call are
                  committed automatically.</p>
          </important>
          <p>The response size limit is 1 MB or 1,000 records. If the call returns more than 1 MB of response data or over 1,000 records, the call is terminated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {StatementTimeoutException} <p>The execution of the SQL statement timed out.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public executeStatement(
    args: ExecuteStatementInput
  ): Promise<ExecuteStatementOutput>;
  public executeStatement(
    args: ExecuteStatementInput,
    cb: (err: any, data?: ExecuteStatementOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementInput,
    cb?: (err: any, data?: ExecuteStatementOutput) => void
  ): Promise<ExecuteStatementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExecuteStatementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>There is an error in the call or in a SQL statement.</p>
   *   - {ForbiddenException} <p>There are insufficient privileges to make the call.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred.</p>
   *   - {NotFoundException} <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
   *   - {ServiceUnavailableError} <p>The service specified by the <code>resourceArn</code> parameter is not
              available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rollbackTransaction(
    args: RollbackTransactionInput
  ): Promise<RollbackTransactionOutput>;
  public rollbackTransaction(
    args: RollbackTransactionInput,
    cb: (err: any, data?: RollbackTransactionOutput) => void
  ): void;
  public rollbackTransaction(
    args: RollbackTransactionInput,
    cb?: (err: any, data?: RollbackTransactionOutput) => void
  ): Promise<RollbackTransactionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RollbackTransactionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
