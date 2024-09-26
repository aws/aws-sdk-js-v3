// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { RDSDataClient, RDSDataClientConfig } from "./RDSDataClient";

const commands = {
  BatchExecuteStatementCommand,
  BeginTransactionCommand,
  CommitTransactionCommand,
  ExecuteSqlCommand,
  ExecuteStatementCommand,
  RollbackTransactionCommand,
};

export interface RDSData {
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
   * @see {@link BeginTransactionCommand}
   */
  beginTransaction(
    args: BeginTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BeginTransactionCommandOutput>;
  beginTransaction(
    args: BeginTransactionCommandInput,
    cb: (err: any, data?: BeginTransactionCommandOutput) => void
  ): void;
  beginTransaction(
    args: BeginTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BeginTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link CommitTransactionCommand}
   */
  commitTransaction(
    args: CommitTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CommitTransactionCommandOutput>;
  commitTransaction(
    args: CommitTransactionCommandInput,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  commitTransaction(
    args: CommitTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteSqlCommand}
   */
  executeSql(args: ExecuteSqlCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteSqlCommandOutput>;
  executeSql(args: ExecuteSqlCommandInput, cb: (err: any, data?: ExecuteSqlCommandOutput) => void): void;
  executeSql(
    args: ExecuteSqlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteSqlCommandOutput) => void
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
   * @see {@link RollbackTransactionCommand}
   */
  rollbackTransaction(
    args: RollbackTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackTransactionCommandOutput>;
  rollbackTransaction(
    args: RollbackTransactionCommandInput,
    cb: (err: any, data?: RollbackTransactionCommandOutput) => void
  ): void;
  rollbackTransaction(
    args: RollbackTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackTransactionCommandOutput) => void
  ): void;
}

/**
 * <fullname>RDS Data API</fullname>
 *          <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora DB cluster. To run these
 *             statements, you use the RDS Data API (Data API).</p>
 *          <p>Data API is available with the following types of Aurora databases:</p>
 *          <ul>
 *             <li>
 *                <p>Aurora PostgreSQL - Serverless v2, provisioned, and Serverless v1</p>
 *             </li>
 *             <li>
 *                <p>Aurora MySQL - Serverless v2, provisioned, and Serverless v1</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the Data API, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a>
 *           in the <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export class RDSData extends RDSDataClient implements RDSData {}
createAggregatedClient(commands, RDSData);
